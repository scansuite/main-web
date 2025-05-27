import React from 'react';
import { motion } from 'framer-motion';
import TermsSection from '../components/terms/TermsSection';
import { privacyData } from '../data/privacyData';

const PrivacyPage: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-text-heading mb-4">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-text-secondary">
            Last updated: October 26, 2023
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {privacyData.map((section, index) => (
            <TermsSection
              key={index}
              number={section.number}
              title={section.title}
              content={section.content}
              list={section.list}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;