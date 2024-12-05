import React from 'react';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Gamepad, Newspaper, Trophy, Flame } from 'lucide-react';

const sidebarItems = [
  { icon: Home, text: 'Home' },
  { icon: Compass, text: 'Explore' },
  { icon: PlaySquare, text: 'Subscriptions' },
  { icon: Clock, text: 'History' },
  { icon: ThumbsUp, text: 'Liked Videos' },
  { icon: Film, text: 'Movies' },
  { icon: Gamepad, text: 'Gaming' },
  { icon: Newspaper, text: 'News' },
  { icon: Trophy, text: 'Sports' },
  { icon: Flame, text: 'Trending' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)] bg-white p-2 overflow-y-auto">
      {sidebarItems.map((item) => (
        <button
          key={item.text}
          className="w-full flex items-center gap-6 px-3 py-2 hover:bg-gray-100 rounded-lg"
        >
          <item.icon className="w-6 h-6" />
          <span>{item.text}</span>
        </button>
      ))}
    </aside>
  );
}