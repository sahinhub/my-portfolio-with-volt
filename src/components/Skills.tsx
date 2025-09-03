import React from 'react';
import { skills } from '../data/constants';
import { useTheme } from '../hooks/useTheme';

export const Skills: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 section-heading-light" >
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expertise in modern web technologies and development tools
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card border border-orange-500/10 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 py-1 px-2 rounded-lg text-center "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              <div className="flex justify-center items-center gap-3 ">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-8 h-auto transition-transform duration-500"
                />
                
                <p className="text-base font-medium text-gray-900 dark:text-white">
                {skill.name}
              </p>
              </div>
        
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};