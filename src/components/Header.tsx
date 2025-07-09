import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-cyan-400">
            al1
          </h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Tools</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">OS Shortcuts</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
