'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Speed, PrecisionManufacturing, Recycling } from '@mui/icons-material';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  stat: string;
  description: string;
  delay: number;
}

const ValueCard = ({ icon, title, stat, description, delay }: ValueCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center h-full border-b-4 border-secondary transform transition-all hover:-translate-y-2 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-secondary mb-6 text-5xl">
        {icon}
      </div>
      <h3 className="text-primary text-2xl font-bold mb-2">{title}</h3>
      <div className="text-5xl font-bold text-secondary mb-6">{stat}</div>
      <p className="text-gray-600 mb-6">{description}</p>
      <motion.a 
        href="#" 
        className="mt-auto text-tertiary flex items-center font-medium"
        whileHover={{ x: 5 }}
      >
        Learn more
        <motion.span 
          className="ml-2"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.div>
  );
};

const ValuePropositionSection = () => {
  const valueProps = [
    {
      icon: <Speed fontSize="inherit" />,
      title: "Faster Construction",
      stat: "50% Faster",
      description: "Our robotics-driven approach dramatically reduces build time while maintaining exceptional quality standards.",
      delay: 0
    },
    {
      icon: <PrecisionManufacturing fontSize="inherit" />,
      title: "Unmatched Precision",
      stat: "0.1mm Tolerance",
      description: "Robotic precision ensures perfect measurements and alignment, eliminating common construction errors.",
      delay: 0.2
    },
    {
      icon: <Recycling fontSize="inherit" />,
      title: "Sustainable Building",
      stat: "30% Less Waste",
      description: "Precise material calculations and efficient construction techniques significantly reduce environmental impact.",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Why Choose <span className="text-secondary">Light</span>speed
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our revolutionary approach combines cutting-edge robotics with innovative construction techniques to deliver homes of unparalleled quality, speed, and value.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => (
            <ValueCard
              key={index}
              icon={prop.icon}
              title={prop.title}
              stat={prop.stat}
              description={prop.description}
              delay={prop.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection; 