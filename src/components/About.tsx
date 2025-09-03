import React from 'react';
import { Award, Users, Calendar, Briefcase } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const About: React.FC = () => {
  const { isDark } = useTheme();
  
  

  return (
    <section id="about" className="py-10">
      <div className="container mx-auto px-4">
       
        <div className="flex flex-col lg:flex-row gap-12 items-center">
         

          {/* Content */}
          <div className="space-y-4 flex-1/2">
            
          <h2 className={`text-4xl lg:text-5xl font-bold mb-3 ${
            isDark ? 'section-heading-dark' : 'section-heading-light'
          }`}>
            About Me
          </h2>
              <h3 className="text-2xl section-heading-light font-bold text-gray-900 dark:text-white">
                Building Digital Experiences That Matter
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Since February 2023, I've been working as a Junior Web Developer at We Next Coder Agency, 
                where I've honed my skills in creating exceptional digital experiences. My journey began 
                with WordPress development, where I mastered custom plugin development and theme customization.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Now, I'm expanding my horizons into Full Stack Development, learning modern technologies 
                like React, Next.js, Express.js, and MongoDB. My goal is to become a versatile developer 
                capable of building end-to-end web solutions.
              </p>

          </div>

           {/* Image */}
            
              <img 
                src="https://i.postimg.cc/Zn1czCLR/about-me-section-image.png" 
                alt="About Sahin Alam" 
                className="w-[80%] h-auto rounded-full shadow-xl"
              />
            
         
        </div>
      </div>
    </section>
  );
};