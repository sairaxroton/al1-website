'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let charSet = lower;
    if (includeUppercase) charSet += upper;
    if (includeNumbers) charSet += numbers;
    if (includeSymbols) charSet += symbols;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">Password Generator</h1>
            
            <div className="flex items-center bg-gray-700 rounded-md p-2 mb-6">
                <input
                    type="text"
                    value={password}
                    readOnly
                    placeholder="Your generated password"
                    className="w-full bg-transparent text-white text-lg focus:outline-none"
                />
                <button onClick={copyToClipboard} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <label htmlFor="length" className="text-gray-300">Password Length: {length}</label>
                    <input
                        id="length"
                        type="range"
                        min="8"
                        max="32"
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        className="w-1/2"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="uppercase" className="text-gray-300">Include Uppercase</label>
                    <input id="uppercase" type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} className="form-checkbox h-5 w-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"/>
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="numbers" className="text-gray-300">Include Numbers</label>
                    <input id="numbers" type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="form-checkbox h-5 w-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"/>
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="symbols" className="text-gray-300">Include Symbols</label>
                    <input id="symbols" type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="form-checkbox h-5 w-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"/>
                </div>
            </div>

            <button onClick={generatePassword} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 mt-8 rounded-md text-lg transition-colors duration-300">
                Generate Password
            </button>
        </div>
        <Link href="/" className="mt-8 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            &larr; Back to all tools
        </Link>
    </div>
  );
};

export default PasswordGenerator;
