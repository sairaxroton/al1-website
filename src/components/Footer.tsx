import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-4 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">&copy; {currentYear} al1. All rights reserved.</p>
        <p className="text-gray-500 text-sm">Your one-stop hub for daily utilities.</p>
      </div>
    </footer>
  );
};

export default Footer;
