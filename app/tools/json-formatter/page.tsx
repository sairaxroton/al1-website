'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const JsonFormatter = () => {
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleFormat = () => {
    try {
      if (inputJson.trim() === '') {
        setError('Input is empty.');
        setFormattedJson('');
        return;
      }
      const parsed = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsed, null, 4); // 4 spaces indentation
      setFormattedJson(formatted);
      setError('');
    } catch (e: any) {
      setError('Invalid JSON: ' + e.message);
      setFormattedJson('');
    }
  };

  const handleClear = () => {
    setInputJson('');
    setFormattedJson('');
    setError('');
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (formattedJson) {
      navigator.clipboard.writeText(formattedJson);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">JSON Formatter</h1>
        
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Area */}
          <div className="flex flex-col">
            <label htmlFor="input-json" className="text-lg text-gray-300 mb-2">Input JSON</label>
            <textarea
              id="input-json"
              value={inputJson}
              onChange={(e) => setInputJson(e.target.value)}
              placeholder='Paste your JSON here...'
              className="w-full h-80 flex-grow bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono text-sm"
            />
          </div>

          {/* Output Area */}
          <div className="flex flex-col">
            <label htmlFor="output-json" className="text-lg text-gray-300 mb-2">Formatted JSON</label>
            <textarea
              id="output-json"
              value={formattedJson}
              readOnly
              placeholder='Formatted JSON will appear here...'
              className="w-full h-80 flex-grow bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 mt-6">
          <button onClick={handleFormat} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300">
            Format
          </button>
          <button onClick={copyToClipboard} disabled={!formattedJson} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed">
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button onClick={handleClear} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300">
            Clear
          </button>
        </div>
      </div>
      <Link href="/" className="mt-8 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
        &larr; Back to all tools
      </Link>
    </div>
  );
};

export default JsonFormatter;
