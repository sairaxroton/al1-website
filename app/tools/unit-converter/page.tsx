'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const conversionData = {
  Length: {
    Meters: 1,
    Kilometers: 1000,
    Centimeters: 0.01,
    Millimeters: 0.001,
    Feet: 0.3048,
    Inches: 0.0254,
    Miles: 1609.34,
  },
  Weight: {
    Grams: 1,
    Kilograms: 1000,
    Milligrams: 0.001,
    Pounds: 453.592,
    Ounces: 28.3495,
  },
  Temperature: {
    Celsius: (c: number) => (c * 9/5) + 32, // to Fahrenheit
    Fahrenheit: (f: number) => (f - 32) * 5/9, // to Celsius
    Kelvin: (k: number) => k - 273.15, // to Celsius
  },
};

type ConversionCategory = keyof typeof conversionData;

const UnitConverter = () => {
  const [category, setCategory] = useState<ConversionCategory>('Length');
  const [input, setInput] = useState('1');
  const [output, setOutput] = useState('');
  const [fromUnit, setFromUnit] = useState('Meters');
  const [toUnit, setToUnit] = useState('Feet');

  useEffect(() => {
    const units = Object.keys(conversionData[category]);
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
  }, [category]);

  useEffect(() => {
    const convert = () => {
      const inputValue = parseFloat(input);
      if (isNaN(inputValue)) {
        setOutput('');
        return;
      }

      let result;
      if (category === 'Temperature') {
        // Simplified temp conversion for this example: C -> F and F -> C
        if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') result = (inputValue * 9/5) + 32;
        else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') result = (inputValue - 32) * 5/9;
        // Add other temp conversions as needed
        else result = inputValue; // Same unit
      } else {
        const fromFactor = conversionData[category][fromUnit as keyof typeof conversionData.Length];
        const toFactor = conversionData[category][toUnit as keyof typeof conversionData.Length];
        result = (inputValue * fromFactor) / toFactor;
      }
      
      setOutput(result.toFixed(4));
    };
    convert();
  }, [input, fromUnit, toUnit, category]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const units = Object.keys(conversionData[category]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">Unit Converter</h1>
        
        <div className="mb-6">
          <label htmlFor="category" className="block text-lg text-gray-300 mb-2">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value as ConversionCategory)} className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500">
            {Object.keys(conversionData).map(cat => <option key={cat} value={cat}>{cat}</option>)}>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          {/* From */}
          <div>
            <label htmlFor="from-unit" className="block text-gray-300 mb-1">From</label>
            <select id="from-unit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="w-full bg-gray-700 text-white p-3 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
              {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}>
            </select>
            <input type="number" value={input} onChange={handleInputChange} className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xl"/>
          </div>

          {/* To */}
          <div>
            <label htmlFor="to-unit" className="block text-gray-300 mb-1">To</label>
            <select id="to-unit" value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="w-full bg-gray-700 text-white p-3 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
              {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}>
            </select>
            <input type="number" value={output} readOnly className="w-full bg-gray-600 text-white p-3 rounded-md focus:outline-none text-xl"/>
          </div>
        </div>
      </div>
      <Link href="/" className="mt-8 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
        &larr; Back to all tools
      </Link>
    </div>
  );
};

export default UnitConverter;
