'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-secondary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Page Not Found</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-10">
              We couldn&apos;t find the page you were looking for. It might have been removed, renamed, or doesn&apos;t exist.
            </p>
            <Link 
              href="/" 
              className="btn-primary px-8 py-3 rounded-md inline-block"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
} 