import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { VideoPlayer } from './components/VideoPlayer';
import { VideoGrid } from './components/VideoGrid';
import { Comments } from './components/Comments';
import { mockVideos, Video } from './data/mockData';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(mockVideos);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleVideoClick = (video: Video) => {
    setCurrentVideo(video);
    setSidebarOpen(false); // Close sidebar on mobile when video is selected
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredVideos(mockVideos);
    } else {
      const filtered = mockVideos.filter(
        video =>
          video.title.toLowerCase().includes(query.toLowerCase()) ||
          video.channel.toLowerCase().includes(query.toLowerCase()) ||
          video.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredVideos(filtered);
    }
    setCurrentVideo(null); // Return to home view when searching
  };

  const getSidebarWidth = () => {
    if (!sidebarOpen) return 'lg:ml-20';
    return 'lg:ml-64';
  };

  const recommendedVideos = mockVideos.filter(video => 
    currentVideo ? video.id !== currentVideo.id : true
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={handleMenuClick} onSearch={handleSearch} />
      <Sidebar isOpen={sidebarOpen} currentVideo={currentVideo?.id} />
      
      <main className={`pt-16 transition-all duration-300 ${getSidebarWidth()}`}>
        {currentVideo ? (
          // Video View
          <div className="max-w-screen-2xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Main Video Column */}
              <div className="xl:col-span-2 space-y-6">
                <VideoPlayer video={currentVideo} />
                <Comments videoId={currentVideo.id} />
              </div>
              
              {/* Sidebar Column */}
              <div className="space-y-4">
                <VideoGrid
                  videos={recommendedVideos}
                  onVideoClick={handleVideoClick}
                  title="Up next"
                  layout="list"
                />
              </div>
            </div>
          </div>
        ) : (
          // Home View
          <div className="max-w-screen-2xl mx-auto px-4 py-6">
            {searchQuery && (
              <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  Search results for "{searchQuery}"
                </h1>
                <p className="text-gray-600">
                  {filteredVideos.length} result{filteredVideos.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}
            
            <VideoGrid
              videos={filteredVideos}
              onVideoClick={handleVideoClick}
              title={searchQuery ? undefined : 'Recommended'}
            />
          </div>
        )}
      </main>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;