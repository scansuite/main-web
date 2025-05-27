import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-heading mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Secure with <span className="text-accent">ScanSuite</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-text-secondary mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Advanced cybersecurity tools for comprehensive vulnerability scanning and proactive network monitoring.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="https://app.scansuite.io" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>Get Started Free</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;