import React, { useState } from 'react';
import { Video } from '../data/mockData';
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share, 
  Download, 
  Flag,
  CheckCircle,
  Bell,
  MoreHorizontal
} from 'lucide-react';

interface VideoPlayerProps {
  video: Video;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleLike = () => {
    if (disliked) setDisliked(false);
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (liked) setLiked(false);
    setDisliked(!disliked);
  };

  return (
    <div className="space-y-4">
      {/* Video Player */}
      <div className="aspect-video bg-black rounded-xl overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Video Info */}
      <div className="space-y-4">
        <h1 className="text-xl font-semibold text-gray-900 leading-tight">
          {video.title}
        </h1>

        {/* Stats and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.timestamp}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 transition-colors duration-200 ${
                  liked ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                <ThumbsUp className="w-5 h-5" />
                <span className="text-sm font-medium">{video.likes}</span>
              </button>
              <div className="h-6 w-px bg-gray-300" />
              <button
                onClick={handleDislike}
                className={`flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 transition-colors duration-200 ${
                  disliked ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                <ThumbsDown className="w-5 h-5" />
              </button>
            </div>

            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
              <Share className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Share</span>
            </button>

            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
              <Download className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">Download</span>
            </button>

            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
              <MoreHorizontal className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Channel Info */}
        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
          <img
            src={video.channelAvatar}
            alt={`${video.channel} avatar`}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-gray-900">{video.channel}</h3>
              {video.isVerified && (
                <CheckCircle className="w-4 h-4 text-gray-500" />
              )}
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {video.subscribers} subscribers
            </p>
            
            {/* Description Preview */}
            <div className="space-y-2">
              <p className={`text-sm text-gray-700 ${showDescription ? '' : 'line-clamp-2'}`}>
                {video.description}
              </p>
              <button
                onClick={() => setShowDescription(!showDescription)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {showDescription ? 'Show less' : 'Show more'}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={handleSubscribe}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                isSubscribed
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              <Bell className={`w-4 h-4 ${isSubscribed ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};