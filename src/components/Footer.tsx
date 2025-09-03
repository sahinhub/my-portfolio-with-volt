import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Sahin<span className="text-orange-500">.</span>
            </h3>
            <p className="text-gray-400">
              Web Designer & Developer | WordPress Specialist
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Sahin Alam. Made with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};