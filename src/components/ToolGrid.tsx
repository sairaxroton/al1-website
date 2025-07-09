import React from 'react';
import ToolCard from './ToolCard';

const tools = [
  { title: 'Password Generator', slug: 'password-generator', description: 'Create strong, random passwords.', category: 'Utilities', isFunctional: true },
  { title: 'JSON Formatter', slug: 'json-formatter', description: 'Format your JSON data instantly.', category: 'Developer', isFunctional: true },
  { title: 'Unit Converter', slug: 'unit-converter', description: 'Convert length, weight, temperature, and more.', category: 'Utilities', isFunctional: true },
  { title: 'Image Resizer', slug: 'image-resizer', description: 'Resize your images to any dimension.', category: 'Image', isFunctional: false },
  { title: 'Image Color Picker', slug: 'image-color-picker', description: 'Get color codes (HEX, RGB) from any image.', category: 'Image', isFunctional: false },
  { title: 'Image to Text (OCR)', slug: 'image-to-text-ocr', description: 'Extract text from images using OCR.', category: 'Text', isFunctional: false },
  { title: 'QR Code Generator', slug: 'qr-code-generator', description: 'Create custom QR codes with logos.', category: 'Image', isFunctional: false },
  { title: 'UUID Generator', slug: 'uuid-generator', description: 'Generate unique UUID v4 with one click.', category: 'Developer', isFunctional: false },
  { title: 'Background Remover', slug: 'background-remover', description: 'Automatically remove image backgrounds.', category: 'Image', isFunctional: false },
];

const ToolGrid = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Daily Life Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            slug={tool.slug}
            description={tool.description}
            category={tool.category}
            isFunctional={tool.isFunctional}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolGrid;