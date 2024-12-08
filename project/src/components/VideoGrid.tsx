import React from 'react';
import { VideoCard } from './VideoCard';

const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format',
    title: 'Beautiful Sunset Time-lapse in 4K',
    channel: 'Nature Channel',
    views: '120K',
    timestamp: '2 days ago'
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format',
    title: 'Cooking the Perfect Steak',
    channel: 'Food Masters',
    views: '250K',
    timestamp: '1 week ago'
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1707237032121-0d5f3aa5f466?w=500&auto=format',
    title: 'Learn React in 2024',
    channel: 'Code Academy',
    views: '500K',
    timestamp: '3 days ago'
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1707253333177-d1493c72df6d?w=500&auto=format',
    title: 'Epic Mountain Biking Adventure',
    channel: 'Extreme Sports',
    views: '75K',
    timestamp: '5 days ago'
  },
  {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1707343848723-bd87dea7b118?w=500&auto=format',
    title: 'Digital Art Masterclass',
    channel: 'Creative Hub',
    views: '180K',
    timestamp: '1 day ago'
  },
  {
    id: 6,
    thumbnail: 'https://images.unsplash.com/photo-1707327956851-30a531b70cda?w=500&auto=format',
    title: 'Travel Vlog: Hidden Gems in Japan',
    channel: 'Travel With Me',
    views: '320K',
    timestamp: '4 days ago'
  }
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
}