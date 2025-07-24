'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FilterList } from '@mui/icons-material';

interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  timeSaved: string;
  costReduction: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <div className="relative h-56 bg-gray-200">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority
        />
      </div>
      
      <div className="p-6">
        <div className="text-xs text-tertiary font-semibold mb-2">{project.category}</div>
        <h3 className="text-xl font-bold text-primary mb-1">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.location}</p>
        
        <div className="flex justify-between mb-5">
          <div>
            <div className="text-xs text-gray-500">Time Saved</div>
            <div className="font-bold text-secondary">{project.timeSaved}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Cost Reduction</div>
            <div className="font-bold text-secondary">{project.costReduction}</div>
          </div>
        </div>
        
        <Link 
          href={`/projects/${project.id}`} 
          className="block text-center bg-primary text-light hover:bg-primary/90 py-3 rounded-md font-medium transition-colors duration-200"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 'lakeside-residence',
      title: 'Lakeside Residence',
      location: 'Austin, TX',
      category: 'Residential',
      timeSaved: '45 days',
      costReduction: '28%',
      image: '/images/lightspeed-1.png',
    },
    {
      id: 'urban-apartments',
      title: 'Urban Apartments',
      location: 'Portland, OR',
      category: 'Multi-Family',
      timeSaved: '3 months',
      costReduction: '32%',
      image: '/images/lightspeed-2.png',
    },
    {
      id: 'eco-bungalows',
      title: 'Eco Bungalows',
      location: 'Denver, CO',
      category: 'Sustainable',
      timeSaved: '50 days',
      costReduction: '25%',
      image: '/images/lightspeed-3.png',
    },
    {
      id: 'tech-office',
      title: 'Tech Company HQ',
      location: 'Seattle, WA',
      category: 'Commercial',
      timeSaved: '4 months',
      costReduction: '35%',
      image: '/images/lightspeed-4.png',
    },
  ];
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'Residential', label: 'Residential' },
    { id: 'Multi-Family', label: 'Multi-Family' },
    { id: 'Commercial', label: 'Commercial' },
    { id: 'Sustainable', label: 'Sustainable' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured <span className="text-secondary">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            See how our innovative construction approach has transformed building projects 
            with unprecedented speed, quality, and cost savings.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === filter.id 
                  ? 'bg-secondary text-primary' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-light px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            <span>View All Projects</span>
            <FilterList className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 