import React from 'react';
import { 
  Home, 
  Compass, 
  PlaySquare, 
  Clock, 
  ThumbsUp, 
  Download, 
  User, 
  Music,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Settings,
  Flag,
  HelpCircle,
  MessageSquare
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  currentVideo?: string;
}

const SidebarItem: React.FC<{
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}> = ({ icon: Icon, label, isActive = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-6 px-6 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 ${
      isActive ? 'bg-gray-100 font-medium' : ''
    }`}
  >
    <Icon className={`w-6 h-6 ${isActive ? 'text-red-600' : 'text-gray-700'}`} />
    <span className={`${isActive ? 'text-red-600' : 'text-gray-900'}`}>
      {label}
    </span>
  </button>
);

const SidebarSection: React.FC<{ title?: string; children: React.ReactNode }> = ({ 
  title, 
  children 
}) => (
  <div className="py-2">
    {title && (
      <h3 className="px-6 py-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
        {title}
      </h3>
    )}
    {children}
  </div>
);

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentVideo }) => {
  if (!isOpen) {
    return (
      <div className="fixed left-0 top-16 w-20 h-full bg-white border-r border-gray-200 z-40 hidden lg:block">
        <div className="flex flex-col items-center py-4 space-y-4">
          <button className="flex flex-col items-center space-y-1 p-2 rounded hover:bg-gray-100 transition-colors duration-200">
            <Home className="w-6 h-6 text-red-600" />
            <span className="text-xs text-gray-700">Home</span>
          </button>
          <button className="flex flex-col items-center space-y-1 p-2 rounded hover:bg-gray-100 transition-colors duration-200">
            <Compass className="w-6 h-6 text-gray-700" />
            <span className="text-xs text-gray-700">Explore</span>
          </button>
          <button className="flex flex-col items-center space-y-1 p-2 rounded hover:bg-gray-100 transition-colors duration-200">
            <PlaySquare className="w-6 h-6 text-gray-700" />
            <span className="text-xs text-gray-700">Library</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-16 w-64 h-full bg-white border-r border-gray-200 z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="py-2">
          <SidebarSection>
            <SidebarItem icon={Home} label="Home" isActive={!currentVideo} />
            <SidebarItem icon={Compass} label="Explore" />
            <SidebarItem icon={PlaySquare} label="Subscriptions" />
          </SidebarSection>

          <div className="border-t border-gray-200">
            <SidebarSection>
              <SidebarItem icon={PlaySquare} label="Library" />
              <SidebarItem icon={Clock} label="History" />
              <SidebarItem icon={PlaySquare} label="Your videos" />
              <SidebarItem icon={Clock} label="Watch later" />
              <SidebarItem icon={ThumbsUp} label="Liked videos" />
              <SidebarItem icon={Download} label="Downloads" />
            </SidebarSection>
          </div>

          <div className="border-t border-gray-200">
            <SidebarSection title="Subscriptions">
              <SidebarItem icon={User} label="TechMastery" />
              <SidebarItem icon={User} label="AI Insights" />
              <SidebarItem icon={User} label="WebDev Pro" />
              <SidebarItem icon={User} label="CodeCraft" />
              <SidebarItem icon={User} label="DesignHub" />
            </SidebarSection>
          </div>

          <div className="border-t border-gray-200">
            <SidebarSection title="Explore">
              <SidebarItem icon={Music} label="Music" />
              <SidebarItem icon={Gamepad2} label="Gaming" />
              <SidebarItem icon={Newspaper} label="News" />
              <SidebarItem icon={Trophy} label="Sports" />
              <SidebarItem icon={Lightbulb} label="Learning" />
              <SidebarItem icon={Shirt} label="Fashion & Beauty" />
            </SidebarSection>
          </div>

          <div className="border-t border-gray-200">
            <SidebarSection>
              <SidebarItem icon={Settings} label="Settings" />
              <SidebarItem icon={Flag} label="Report history" />
              <SidebarItem icon={HelpCircle} label="Help" />
              <SidebarItem icon={MessageSquare} label="Send feedback" />
            </SidebarSection>
          </div>
        </div>
      </div>
    </>
  );
};