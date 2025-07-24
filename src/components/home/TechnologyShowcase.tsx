'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Speed, PrecisionManufacturing, RecyclingOutlined, MonitorOutlined, Construction, RocketLaunchOutlined } from '@mui/icons-material';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const LottiePlayer = dynamic(() => import('lottie-react'), { ssr: false });

interface DataPointProps {
  x: string;
  y: string;
  label: string;
  value: string;
  delay: number;
  icon: React.ReactNode;
}

const DataPoint = ({ x, y, label, value, delay, icon }: DataPointProps) => {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative">
        <motion.div 
          className="h-4 w-4 bg-secondary rounded-full absolute"
          animate={{ 
            boxShadow: [
              '0 0 0 0 rgba(255, 205, 0, 0.4)',
              '0 0 0 10px rgba(255, 205, 0, 0)',
            ] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white backdrop-blur-md shadow-lg rounded-xl p-4 ml-6 min-w-[160px]"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="text-secondary">{icon}</div>
            <div className="text-sm font-medium text-primary">{label}</div>
          </div>
          <div className="text-lg font-bold text-secondary">{value}</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TechnologyShowcase = () => {
  const ref = useRef(null);
  const [animationData, setAnimationData] = useState<any>(null);
  
  useEffect(() => {
    // Load the animation data on the client side only
    const loadAnimation = async () => {
      try {
        const response = await fetch('/animations/construction-robot.json');
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Failed to load animation:', error);
      }
    };
    
    loadAnimation();
  }, []);
  
  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  const dataPoints: DataPointProps[] = [
    { 
      x: "20%", 
      y: "30%", 
      label: "Build Speed", 
      value: "2.5x Faster", 
      delay: 0.1,
      icon: <Speed />
    },
    { 
      x: "65%", 
      y: "15%", 
      label: "Precision", 
      value: "±0.1mm", 
      delay: 0.3,
      icon: <PrecisionManufacturing />
    },
    { 
      x: "75%", 
      y: "60%", 
      label: "Waste Reduction", 
      value: "30%", 
      delay: 0.5,
      icon: <RecyclingOutlined />
    },
    { 
      x: "30%", 
      y: "70%", 
      label: "Energy Efficiency", 
      value: "40% Better", 
      delay: 0.7,
      icon: <MonitorOutlined /> 
    },
  ];

  return (
    <section className="py-20 gradient-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left: Technical Specs */}
          <div className="w-full md:w-1/2 text-light mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Revolutionary <span className="text-secondary">Technology</span> Platform
              </h2>
              <p className="mb-8 text-lg">
                Our proprietary robot-driven construction system combines AI, advanced robotics, and precision engineering to revolutionize how homes are built.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="border-l-4 border-secondary pl-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2">
                    <RocketLaunchOutlined className="text-secondary" />
                    <h3 className="text-xl font-bold text-light">AI-Powered Precision</h3>
                  </div>
                  <p className="text-light/80 mt-2">
                    Machine learning algorithms optimize every construction decision, from material usage to assembly sequencing.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="border-l-4 border-secondary pl-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2">
                    <Construction className="text-secondary" />
                    <h3 className="text-xl font-bold text-light">Modular Robotics System</h3>
                  </div>
                  <p className="text-light/80 mt-2">
                    Our robots adapt to different construction tasks with interchangeable toolsets, maximizing flexibility.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="border-l-4 border-secondary pl-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2">
                    <MonitorOutlined className="text-secondary" />
                    <h3 className="text-xl font-bold text-light">Real-time Monitoring</h3>
                  </div>
                  <p className="text-light/80 mt-2">
                    Sensors track every aspect of the build, ensuring quality and enabling immediate adjustments.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Right: Technology Visualization */}
          <div className="w-full md:w-1/2 md:pl-12" ref={ref}>
            <div className="relative aspect-square max-w-xl mx-auto">
              {/* Interactive Technology Visualization */}
              <motion.div 
                className="w-full h-full backdrop-blur-md rounded-full flex items-center justify-center relative"
                style={{ 
                  scale
                }}
              >
                {/* Outer rings with subtle animation */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-secondary/20"
                  animate={{ 
                    boxShadow: [
                      'inset 0 0 20px rgba(255, 205, 0, 0.1)',
                      'inset 0 0 60px rgba(255, 205, 0, 0.2)',
                      'inset 0 0 20px rgba(255, 205, 0, 0.1)'
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                <motion.div 
                  className="absolute inset-8 rounded-full border-4 border-dashed border-secondary/40"
                  style={{ rotate: rotation }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div 
                  className="absolute inset-16 rounded-full border-4 border-dotted border-secondary/60"
                  style={{ rotate: useTransform(rotation, (r) => -r) }}
                  transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center content with hover effect */}
                <motion.div 
                  className="relative w-2/3 h-2/3 bg-primary/70 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-xl z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-4 flex items-center justify-center">
                    {animationData && (
                      <LottiePlayer
                        animationData={animationData}
                        loop={true}
                        style={{ width: '100%', height: '100%' }}
                      />
                    )}
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Data Points */}
              {dataPoints.map((point, index) => (
                <DataPoint
                  key={index}
                  x={point.x}
                  y={point.y}
                  label={point.label}
                  value={point.value}
                  delay={point.delay}
                  icon={point.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase; 