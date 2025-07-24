'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Close } from '@mui/icons-material';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Process', path: '/process' },
    { title: 'Technology', path: '/technology' },
    { title: 'Projects', path: '/projects' },
    { title: 'Careers', path: '/careers' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-10 w-40"
          >
            <Image 
              src="/images/LightspeedLogo.png" 
              alt="Lightspeed" 
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.slice(0, -1).map((link, index) => (
            <Link 
              key={index} 
              href={link.path}
              className="text-light hover:text-secondary transition-colors duration-200 font-medium"
            >
              {link.title}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="btn-primary px-6 py-2 rounded-md font-semibold text-sm shadow-lg hover:shadow-xl"
          >
            Book A Meeting
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-light" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <Close fontSize="large" />
          ) : (
            <Menu fontSize="large" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden gradient-bg shadow-xl"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index} 
                    href={link.path}
                    className="text-light hover:text-secondary py-2 transition-colors duration-200 font-medium text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link 
                  href="/contact" 
                  className="btn-primary px-6 py-3 rounded-md self-start font-semibold shadow-lg mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book A Meeting
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 