import React from 'react';
import { Video } from '../data/mockData';
import { VideoCard } from './VideoCard';

interface VideoGridProps {
  videos: Video[];
  onVideoClick: (video: Video) => void;
  title?: string;
  layout?: 'grid' | 'list';
}

export const VideoGrid: React.FC<VideoGridProps> = ({ 
  videos, 
  onVideoClick, 
  title,
  layout = 'grid'
}) => {
  if (layout === 'list') {
    return (
      <div className="space-y-4">
        {title && (
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
        )}
        <div className="space-y-2">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={onVideoClick}
              isWide
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onClick={onVideoClick}
          />
        ))}
      </div>
    </div>
  );
};