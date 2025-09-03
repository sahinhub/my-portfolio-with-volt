import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { TypingEffect } from './TypingEffect';
import { Link } from 'react-scroll';

export const Hero: React.FC = () => {
  const typingTexts = [
    'Front-End Web Developer', 
    'Writing clean ,efficient and impactful code',
    'Always learning, building and innovating',
    'WordPress to Full-Stack Developement',
    'Crafting fast and user-friendly web experience'
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className=""></div>
      
      <div className="container mx-auto px-4 py-20 flex  gap-4 items-center min-h-screen">
        <div className="flex flex-col gap-5 items-center w-full">

          {/* Hero Image */}
          <div className=" flex justify-center">
            <div className="relative">
              <div className="w-60 h-60 lg:w-70 lg:h-70 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://i.postimg.cc/VLCgBWYb/hero-image.png" 
                  alt="Sahin Alam" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full border-2 border-orange-500/30 animate-pulse">
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 text-center ">
            <div className="space-y-4">
            
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Sahin Alam
              </h1>
              <div className="text-2xl lg:text-3xl text-center font-medium text-gray-600 dark:text-gray-300 h-5">
                <TypingEffect texts={typingTexts} />
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              Junior Web Developer at We Next Coder Agency with 3+ years of experience. 
              Delivered 200+ projects to 80+ clients worldwide, specializing in WordPress 
              and advancing into Full Stack Development.
            </p>
            
            <div className="flex justify-center items-center sm:flex-row gap-4 pt-4">
            <Link to="contact" smooth={true}>
              <div className="relative  rounded-lg p-[2px] group">
                {/* Glow Layer */}
              
                {/* Button */}
                <button className="relative z-10 px-6 py-2 bg-orange-500 border-2 border-transparent text-white font-medium rounded-lg flex items-                   center gap-2 hover:shadow-xl transition-all duration-300">
                  Get In Touch
                  <ArrowRight size={20} />
                </button>
              </div>
            </Link>

              
              <Link to="portfolio" smooth={true}>
                <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium rounded-lg                  flex items-center gap-2 transition-all duration-300 ">
                  View Portfolio
                  <Download size={20} />
                </button>
              </Link>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};