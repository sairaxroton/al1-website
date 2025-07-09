'use client'; // This is required for components with state and interactivity

import React, { useState } from 'react';

const shortcuts = {
  Windows: [
    { key: 'Ctrl + C', desc: 'Copy selected item' },
    { key: 'Ctrl + V', desc: 'Paste selected item' },
    { key: 'Ctrl + X', desc: 'Cut selected item' },
    { key: 'Win + D', desc: 'Show or hide the desktop' },
    { key: 'Alt + Tab', desc: 'Switch between open apps' },
  ],
  macOS: [
    { key: 'Cmd + C', desc: 'Copy selected item' },
    { key: 'Cmd + V', desc: 'Paste selected item' },
    { key: 'Cmd + X', desc: 'Cut selected item' },
    { key: 'Cmd + Space', desc: 'Show or hide the Spotlight search field' },
    { key: 'Cmd + Tab', desc: 'Switch between open apps' },
  ],
  Linux: [
    { key: 'Ctrl + Alt + T', desc: 'Open a new Terminal window' },
    { key: 'Ctrl + C', desc: 'Copy selected text/item' },
    { key: 'Ctrl + V', desc: 'Paste selected text/item' },
    { key: 'Super + D', desc: 'Show or hide the desktop' }, // Super key is the Windows/Cmd key
    { key: 'Alt + Tab', desc: 'Switch between open windows' },
  ],
};

type OS = 'Windows' | 'macOS' | 'Linux';

const Shortcuts = () => {
  const [activeTab, setActiveTab] = useState<OS>('Windows');

  const renderShortcuts = () => {
    return shortcuts[activeTab].map((shortcut, index) => (
      <li key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
        <kbd className="font-mono text-sm bg-gray-700 text-cyan-400 px-2 py-1 rounded-md">{shortcut.key}</kbd>
        <span className="text-gray-300 text-right">{shortcut.desc}</span>
      </li>
    ));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-white text-center mb-8">OS Shortcuts & Commands</h2>
      <div className="w-full max-w-3xl mx-auto bg-gray-800/50 border border-gray-700 rounded-lg">
        <div className="flex border-b border-gray-700">
          {(Object.keys(shortcuts) as OS[]).map((os) => (
            <button
              key={os}
              onClick={() => setActiveTab(os)}
              className={`flex-1 py-3 text-center font-semibold transition-colors duration-300 ${
                activeTab === os
                  ? 'text-white bg-cyan-500/20 border-b-2 border-cyan-500'
                  : 'text-gray-400 hover:bg-gray-700/50'
              }`}
            >
              {os}
            </button>
          ))}
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {renderShortcuts()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
