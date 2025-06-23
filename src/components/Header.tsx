import React, { useState } from 'react';
import { Search, Menu, Bell, User, Mic, Video, Grid3X3 } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              ViewTube
            </span>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="flex">
            <div className={`flex flex-1 border rounded-l-full transition-all duration-200 ${
              isSearchFocused ? 'border-blue-500 shadow-md' : 'border-gray-300'
            }`}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="flex-1 px-4 py-2 text-gray-900 bg-transparent rounded-l-full focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button
              type="button"
              className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Voice search"
            >
              <Mic className="w-5 h-5 text-gray-600" />
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 hidden sm:block"
            aria-label="Create"
          >
            <Video className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 hidden sm:block"
            aria-label="Apps"
          >
            <Grid3X3 className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative"
            aria-label="Notifications"
          >
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
          
          <button
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Account"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};