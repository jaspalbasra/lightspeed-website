'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube, Send } from '@mui/icons-material';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the success message after a delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Our Process', href: '/process' },
        { name: 'Technology', href: '/technology' },
        { name: 'Projects', href: '/projects' },
        { name: 'Sustainability', href: '/about#sustainability' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/projects' },
        { name: 'FAQ', href: '/contact#faq' },
        { name: 'Support', href: '/contact#support' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: '#' },
    { icon: <Twitter />, href: '#' },
    { icon: <LinkedIn />, href: '#' },
    { icon: <Instagram />, href: '#' },
    { icon: <YouTube />, href: '#' },
  ];

  return (
    <footer className="gradient-bg text-light pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-secondary">Light</span>speed
              </h2>
            </Link>
            <p className="mb-6 max-w-md">
              Revolutionizing home construction with cutting-edge robotics technology. 
              Building faster, more affordable, and higher quality homes.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="btn-primary rounded-md px-4 py-2 flex items-center justify-center"
                  suppressHydrationWarning
                >
                  <span className="mr-2">Subscribe</span>
                  <Send fontSize="small" />
                </button>
              </form>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 mt-2"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </div>
          </div>
          
          {/* Quick Links */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="hover:text-secondary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-light hover:text-secondary transition-colors duration-200"
                aria-label={`Social link ${i + 1}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-sm text-light/70">
            &copy; {new Date().getFullYear()} Lightspeed Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 