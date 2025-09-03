import { Skill, Service, Project, SocialLink } from '../types';

export const skills: Skill[] = [
  { name: 'Figma', icon: 'https://i.postimg.cc/DzLd1vnk/figma-1.png'},
  { name: 'HTML', icon: 'https://i.postimg.cc/G3qPFSw2/html-1.png' },
  { name: 'CSS', icon: 'https://i.postimg.cc/cC4RqfY0/css.png' },
  { name: 'JavaScript', icon: 'https://i.postimg.cc/SsG6tgng/JS.png' },
  { name: 'PHP', icon: 'https://i.postimg.cc/wMfh93cJ/php-1.png'},
  { name: 'Shopify', icon: 'https://i.postimg.cc/L8qV6kWs/shopify.png'},
  { name: 'TailwindCSS', icon: 'https://i.postimg.cc/W3VmnB1D/tailwind-1.png' },
  { name: 'Wix', icon: 'https://i.postimg.cc/L8r3qYd3/wix-1.png'},
  { name: 'WordPress', icon: 'https://i.postimg.cc/fTPxFtbQ/wordpress-1.png' },
  { name: 'React', icon: 'https://i.postimg.cc/9M39rLp1/react.png'},
];

export const services: Service[] = [
  {
      icon: 'Palette',
      id: 'web-development',
      title: "Web Design & Redesign",
      description: "Modern, responsive website designs or built with modern technologies including React, Next.js, or WordPress.",
      features: ["Custom Design", "Mobile Responsive", "User Experience Focus", "Brand Integration"],
        image: 'https://i.postimg.cc/Yqgd811Z/web-developent.png'
    },
    { 
      id: 'figma-to-wp',
      icon: 'Code',
      title: "Figma to WordPress",
      description: "Pixel-perfect conversion of your Figma designs into fully functional WordPress websites with clean code.",
      image: 'https://i.postimg.cc/brSty9yh/fig-to-wp-1.png',
      features: ["Pixel Perfect", "Clean Code", "Fast Loading", "SEO Ready"]
    },
    {
      icon: 'ShoppingCart',
      id: 'ecommerce',
      title: "E-commerce Solutions",
      description: "Complete WooCommerce stores with payment integration, inventory management, and conversion optimization.",
      image: 'https://i.postimg.cc/PfC3vGNt/store.png',
      features: ["WooCommerce Setup", "Payment Integration", "Inventory System", "Order Management"]
    },
    {
      icon: 'Search',
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your website's visibility and ranking in search engines.",
      features: ["On-Page SEO", "Technical SEO", "Content Optimization", "Performance Boost"]
    },
    {
      id: 'maintenance',
      icon: 'Settings',
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, updates, security monitoring, and technical support for peace of mind.",
      features: ["Regular Updates", "Security Monitoring", "Backup Management", "24/7 Support"],
      image: 'https://i.postimg.cc/K4XgR3jg/maintance.png'
      
    },
    {
      icon: 'Code',
      title: "Full Stack Development",
      description: "Modern web applications using React, Next.js, and Node.js for scalable, high-performance solutions.",
      features: ["React/Next.js", "Node.js/Express", "MongoDB", "Modern Architecture"]
    }
  
];

export const projects: Project[] = [
  {
    id: 'frank-lampard',
    title: 'Frank Lampard – Personal Portfolio Website',
    description: 'A sophisticated personal portfolio website for the legendary footballer Frank Lampard, featuring modern design and interactive elements.',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
    link: '#',
    tags: ['WordPress', 'Custom Design', 'Portfolio']
  },
  {
    id: 'lux-wash',
    title: 'Lux Wash & Detail – Premium Car Wash Website',
    description: 'Premium car wash service website with booking system, service showcases, and modern responsive design.',
    image: 'https://images.pexels.com/photos/3954341/pexels-photo-3954341.jpeg',
    link: '#',
    tags: ['WordPress', 'E-commerce', 'Booking System']
  },
  {
    id: 'balraj-khara',
    title: 'Balraj Khara – Professional Boxer Portfolio Website',
    description: 'Dynamic portfolio website for professional boxer showcasing achievements, fight history, and personal brand.',
    image: 'https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg',
    link: '#',
    tags: ['WordPress', 'Sports', 'Portfolio']
  },
  {
    id: 'aqua-filter',
    title: 'Aqua Filter Pros – Water Filtration Website',
    description: 'Professional water filtration company website with product catalogs, service areas, and customer testimonials.',
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg',
    link: '#',
    tags: ['WordPress', 'Business', 'E-commerce']
  }
];

export const socialLinks: SocialLink[] = [
  { name: 'Email', url: 'mailto:sahincoderbd@gmail.com', icon: 'Mail' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sahincoder', icon: 'Linkedin' },
  { name: 'GitHub', url: 'https://www.github.com/sahincoderbd', icon: 'Github' },
  { name: 'Behance', url: 'https://www.behance.net/sahincoder', icon: 'Eye' }
];

export const contactInfo = {
  email: 'sahincoderbd@gmail.com',
  phone: '01791992313',
  location: 'Bangladesh'
};