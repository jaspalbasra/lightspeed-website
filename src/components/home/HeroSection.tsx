'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Set video to play at 2.5x speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5;
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-primary">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-primary opacity-60 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/images/lightspeed-video.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="relative h-full flex items-center z-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Hero Text Content */}
          <div className="w-full md:w-1/2 text-light z-10 mb-12 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Building Tomorrow&apos;s <span className="text-secondary">Homes</span> Today
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Lightspeed combines precision robotics with advanced construction techniques to build homes that are 50% faster, more affordable, and higher quality than traditional methods.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/process" 
                className="btn-primary px-8 py-3 rounded-md animate-pulse-slow"
              >
                See Our Process
              </Link>
              <Link 
                href="/projects" 
                className="border border-light text-light hover:text-secondary hover:border-secondary px-8 py-3 rounded-md transition-colors duration-300"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
          
          {/* Right side space - intentionally left empty to showcase the background video */}
          <div className="w-full md:w-1/2"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="text-light mb-2">Explore</div>
        <motion.div 
          className="w-6 h-9 border-2 border-light rounded-full flex justify-center pt-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-2 bg-secondary rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 