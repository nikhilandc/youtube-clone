import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { VideoGrid } from './components/VideoGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex pt-14">
        <Sidebar />
        <main className="flex-1 ml-64">
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}

export default App;