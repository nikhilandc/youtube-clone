import React from 'react';
import { Video } from '../data/mockData';
import { CheckCircle, MoreVertical } from 'lucide-react';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
  isWide?: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({ 
  video, 
  onClick, 
  isWide = false 
}) => {
  return (
    <div 
      className={`group cursor-pointer transition-all duration-200 hover:scale-[1.02] ${
        isWide ? 'flex space-x-4' : ''
      }`}
      onClick={() => onClick(video)}
    >
      {/* Thumbnail */}
      <div className={`relative ${isWide ? 'w-48 flex-shrink-0' : 'w-full'}`}>
        <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-xl" />
        </div>
      </div>

      {/* Content */}
      <div className={`${isWide ? 'flex-1' : 'pt-3'}`}>
        <div className="flex space-x-3">
          {!isWide && (
            <div className="flex-shrink-0">
              <img
                src={video.channelAvatar}
                alt={`${video.channel} avatar`}
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <h3 className={`font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 ${
              isWide ? 'text-base' : 'text-sm'
            }`}>
              {video.title}
            </h3>
            
            <div className={`flex items-center space-x-1 ${isWide ? 'mt-1' : 'mt-2'}`}>
              <span className={`text-gray-600 ${isWide ? 'text-sm' : 'text-xs'}`}>
                {video.channel}
              </span>
              {video.isVerified && (
                <CheckCircle className="w-3 h-3 text-gray-500" />
              )}
            </div>
            
            <div className={`flex items-center space-x-1 text-gray-600 ${
              isWide ? 'text-sm mt-1' : 'text-xs mt-1'
            }`}>
              <span>{video.views} views</span>
              <span>•</span>
              <span>{video.timestamp}</span>
            </div>
          </div>

          <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-100 rounded-full transition-all duration-200">
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};