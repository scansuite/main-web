import React from 'react';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-6">
          Ready to Fortify <span className="text-accent">Your Network?</span>
        </h2>
        
        <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
          Join thousands of users who trust ScanSuite for their cybersecurity needs. Sign up today!
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="https://app.scansuite.io" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg group"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>Start Scanning Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CtaSection;