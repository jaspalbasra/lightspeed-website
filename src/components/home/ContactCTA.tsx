'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, Phone, Mail, LocationOn } from '@mui/icons-material';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const onSubmit = (data: ContactFormData) => {
    // Here you would typically send the form data to your backend
    console.log(data);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      reset();
      setIsSubmitted(false);
    }, 3000);
  };
  
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-10"
      >
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h4 className="text-xl font-bold text-primary mb-2">Message Sent!</h4>
        <p className="text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
      </motion.div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-tertiary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-tertiary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tertiary"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          rows={4}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-tertiary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
      
      <motion.button
        type="submit"
        className="w-full btn-primary flex items-center justify-center py-3 rounded-md"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="mr-2">Send Message</span>
        <Send fontSize="small" />
      </motion.button>
    </form>
  );
};

const ContactCTA = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-20 gradient-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Ready to <span className="text-secondary">Transform</span> Your Building Project?
          </h2>
          <p className="max-w-2xl mx-auto text-light/80 text-lg">
            Get in touch with our team to learn how our robotics construction technology
            can save you time, money, and deliver exceptional quality.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Us</h3>
              
              {/* Only render the form on the client side */}
              {isMounted ? (
                <ContactForm />
              ) : (
                <div className="py-10 text-center text-gray-500">
                  Loading form...
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Info and Map */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full flex flex-col">
              <div className="bg-primary/30 backdrop-blur-md rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-light mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="text-secondary mr-4 mt-1" />
                    <div>
                      <h4 className="text-light font-medium">Phone</h4>
                      <p className="text-light/80">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-secondary mr-4 mt-1" />
                    <div>
                      <h4 className="text-light font-medium">Email</h4>
                      <p className="text-light/80">info@lightspeed-construction.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <LocationOn className="text-secondary mr-4 mt-1" />
                    <div>
                      <h4 className="text-light font-medium">Headquarters</h4>
                      <p className="text-light/80">
                        123 Innovation Way<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-grow bg-white/10 backdrop-blur-sm rounded-lg p-4 h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-light/80">Map placeholder - Service Areas</p>
                </div>
                {/* In a real implementation, you would add your map component here */}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Book a Meeting CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="/contact"
            className="inline-block btn-primary px-10 py-4 rounded-md text-lg font-bold"
          >
            Book A Meeting
          </a>
          <p className="text-light/70 mt-4">
            Schedule a consultation with our experts to discuss your project
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA; 