import React from 'react';
import Link from 'next/link';

interface ToolCardProps {
  title: string;
  slug: string;
  description: string;
  category: string;
  isFunctional?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, slug, description, category, isFunctional = false }) => {
  const categoryColorMap: { [key: string]: string } = {
    'Image': 'bg-blue-500',
    'Utilities': 'bg-green-500',
    'Developer': 'bg-purple-500',
    'Text': 'bg-yellow-500',
    'Default': 'bg-gray-500',
  };

  const categoryColor = categoryColorMap[category] || categoryColorMap['Default'];

  const CardContent = (
    <div className={`bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 flex flex-col justify-between h-full ${isFunctional ? 'transform hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer' : ''}`}>
      <div>
        <span className={`inline-block px-3 py-1 text-xs font-semibold text-white ${categoryColor} rounded-full mb-4`}>
          {category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      </div>
      <div 
        className={`w-full py-2 px-4 rounded-md font-semibold text-center text-white transition-colors duration-300 ${
          isFunctional 
            ? 'bg-cyan-500 group-hover:bg-cyan-600' 
            : 'bg-gray-600 cursor-not-allowed'
        }`}>
        {isFunctional ? 'Open Tool' : 'Coming Soon'}
      </div>
    </div>
  );

  if (isFunctional) {
    return (
      <Link href={`/tools/${slug}`} className="group">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default ToolCard;