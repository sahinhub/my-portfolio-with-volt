import React from 'react';
import { services } from '../data/constants';
import { useTheme } from '../hooks/useTheme';
import * as Icons from 'lucide-react';
import {ArrowRight,Send} from 'lucide-react';
import { Link } from 'react-scroll'

export const Services: React.FC = () => {
  const { isDark } = useTheme();

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon className=" w-10 h-10 text-orange-500" /> : null;
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'section-heading-dark' : 'section-heading-light'
          }`}>
            Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development services to bring your vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card flex flex-col flex-nowrap border border-orange-500/40 dark:border-gray-700 justify-between bg-white dark:bg-gray-900 rounded-xl p-4 gap-2 shadow-lg group "
              style={{ animationDelay: `${index * 150}ms` }}
            >
             
                {/* <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-[60%] h-auto mb-3"
                /> */}
                <div className="flex flex-col  justify-start items-baseline space-y-2 mb-4">
                <div className="p-2 rounded-xl bg-orange-500/20 dark:bg-gray-800  ">
                  {getIcon(service.icon)}
                </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white ">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400  leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2 mb-3">
                {
                  service.features.map((feature,idx)=><li key={idx} className="list-none flex gap-2 text-[14px] text-black dark:text-white "><ArrowRight className="text-orange-500 h-4 w-4" />{feature}</li>)
                }
              </div>
                </div>
             
              <Link to="contact" smooth={true} duration={500} clasName="w-full">
              
                {/* Glow Layer */}
              
                <button className='w-full px-6 py-3 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform bg-gray-400 bg-orange-500 hover:bg-orange-600 hover:shadow-2xl self-end'>
               Let's Discuss about Project
                <Send size={20} className= 'animate-pulse' />
              </button>
    
            </Link>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};