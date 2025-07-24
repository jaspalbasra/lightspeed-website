'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormatQuote, ChevronLeft, ChevronRight } from '@mui/icons-material';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  logo: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Lightspeed's robotics approach cut our build time in half while maintaining the highest quality standards. They've completely transformed how we think about construction timelines.",
      author: "Jennifer Dawson",
      position: "Director of Development",
      company: "Urban Living Properties",
      logo: "/images/testimonials/urban-living.svg"
    },
    {
      id: 2,
      quote: "The precision achieved by Lightspeed's construction robots resulted in significantly reduced material waste and much lower energy costs for our homeowners.",
      author: "Michael Chen",
      position: "Chief Sustainability Officer",
      company: "EcoHome Developers",
      logo: "/images/testimonials/ecohome.svg"
    },
    {
      id: 3,
      quote: "Working with Lightspeed allowed us to complete our multi-family project under budget and ahead of schedule. The quality and consistency across all units was impressive.",
      author: "Sarah Johnson",
      position: "Project Manager",
      company: "Horizon Construction Group",
      logo: "/images/testimonials/horizon.svg"
    }
  ];
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAutoplay(false);
  };
  
  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-light overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our <span className="text-secondary">Clients</span> Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Hear from developers and homeowners who have experienced the Lightspeed difference.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative h-80 md:h-64">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full"
              >
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 h-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <FormatQuote className="text-secondary text-4xl mb-4 transform rotate-180" />
                      <p className="text-gray-700 text-lg italic mb-6">
                        &quot;{testimonials[currentIndex].quote}&quot;
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-500 text-xs">Logo</span>
                        {/* When you have actual logos, uncomment this */}
                        {/* <img 
                          src={testimonials[currentIndex].logo} 
                          alt={testimonials[currentIndex].company} 
                          className="w-full h-full object-contain p-2"
                        /> */}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{testimonials[currentIndex].author}</h4>
                        <p className="text-gray-600 text-sm">
                          {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <motion.button
              onClick={handlePrevious}
              className="bg-white text-primary p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft />
            </motion.button>
            
            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                    setAutoplay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={handleNext}
              className="bg-white text-primary p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 