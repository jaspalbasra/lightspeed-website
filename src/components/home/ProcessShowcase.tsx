'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  isActive: boolean;
  onStepEnter: () => void;
}

const ProcessStep = ({ number, title, description, imageSrc, isActive, onStepEnter }: ProcessStepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-40% 0px -40% 0px" });
  
  React.useEffect(() => {
    if (isInView) {
      onStepEnter();
    }
  }, [isInView, onStepEnter]);
  
  return (
    <motion.div 
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 py-12 transition-opacity ${isActive ? 'opacity-100' : 'opacity-50'}`}
    >
      <div className="md:w-1/2 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start"
        >
          <div className={`flex items-center justify-center rounded-full w-16 h-16 mr-6 ${isActive ? 'bg-secondary text-primary' : 'bg-gray-300 text-gray-600'} font-bold text-2xl transition-colors duration-300`}>
            {number}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </motion.div>
      </div>
      <div className="md:w-1/2 order-1 md:order-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-lg overflow-hidden shadow-xl"
          style={{ aspectRatio: '16/9' }}
        >
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProcessShowcase = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  
  const processSteps = [
    {
      number: 1,
      title: "Digital Design & Planning",
      description: "Our architects and engineers create detailed digital blueprints that are optimized for robotic construction, ensuring precise measurements and specifications.",
      imageSrc: "/images/lightspeed-1.png"
    },
    {
      number: 2,
      title: "Robotic Prefabrication",
      description: "Key structural components are manufactured in our facility using advanced robotics, achieving precision that far exceeds traditional construction methods.",
      imageSrc: "/images/lightspeed-2.png"
    },
    {
      number: 3,
      title: "Site Preparation",
      description: "While components are being manufactured, our ground team prepares the foundation using GPS-guided machinery for perfect alignment with prefabricated elements.",
      imageSrc: "/images/lightspeed-3.png"
    },
    {
      number: 4,
      title: "Robotic Assembly",
      description: "Our custom-built construction robots assemble the prefabricated components on-site with millimeter precision, working tirelessly day and night.",
      imageSrc: "/images/lightspeed-4.png"
    },
    {
      number: 5,
      title: "Quality Verification",
      description: "Advanced scanning technology verifies that every element meets our exacting standards, ensuring structural integrity and performance.",
      imageSrc: "/images/lightspeed-1.png" // Reusing the first image for the 5th step
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our <span className="text-secondary">Revolutionary</span> Process
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            See how our robotics-driven approach transforms the construction industry, 
            delivering precision and efficiency at every stage.
          </p>
        </motion.div>
        
        {/* Process Steps Container */}
        <div className="relative">
          {/* Progress Indicator - now positioned as a fixed UI element */}
          <div className="sticky top-20 z-50 bg-white py-4 mb-10 shadow-md rounded-lg">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div 
                    className="h-full bg-secondary rounded-full"
                    style={{ 
                      width: `${(activeStep / processSteps.length) * 100}%`,
                      transition: 'width 0.5s ease-in-out' 
                    }}
                  />
                </div>
                <span className="ml-3 font-medium text-secondary">{activeStep}/{processSteps.length}</span>
              </div>
              <div className="flex justify-between">
                {processSteps.map((step) => (
                  <div 
                    key={step.number}
                    className={`text-sm font-medium ${activeStep >= step.number ? 'text-secondary' : 'text-gray-400'}`}
                  >
                    {step.title.split(' ')[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Process Steps */}
          <motion.div 
            ref={containerRef}
            style={{ opacity }}
            className="max-w-4xl mx-auto space-y-16 divide-y divide-gray-200"
          >
            {processSteps.map((step) => (
              <ProcessStep 
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                imageSrc={step.imageSrc}
                isActive={activeStep === step.number}
                onStepEnter={() => setActiveStep(step.number)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessShowcase; 