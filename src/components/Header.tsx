import React from 'react';
import { Search, Menu, Video, Bell, User, Mic } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white flex justify-between items-center px-4 h-14 z-50">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Menu className="w-6 h-6" />
        </button>
        <a href="/" className="flex items-center gap-1">
          <Video className="w-8 h-8 text-red-600" />
          <span className="text-xl font-semibold">YouTube</span>
        </a>
      </div>
      
      <div className="flex-1 max-w-2xl flex items-center gap-4 justify-center">
        <div className="flex flex-1 max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:border-blue-500 focus:outline-none"
          />
          <button className="px-6 py-2 border border-l-0 border-gray-300 rounded-r-full bg-gray-50 hover:bg-gray-100">
            <Search className="w-5 h-5" />
          </button>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Mic className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Video className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}