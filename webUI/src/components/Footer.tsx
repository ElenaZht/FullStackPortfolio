import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <footer className="bg-dark py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="text-gray-300 text-sm md:text-base">
            © Elena Zhytomirski, 2025
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 md:gap-8">
            <span className="text-gray-500 hidden md:inline">|</span>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm md:text-base"
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm md:text-base"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About Me
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm md:text-base"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contacts
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/elena-zhytomirski/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-primary hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ElenaZht"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-primary hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:elenazht@gmail.com"
              className="p-2 text-gray-300 hover:text-primary hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;