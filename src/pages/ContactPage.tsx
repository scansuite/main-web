import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-text-heading mb-4">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactInfo />
          </motion.div>
          
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;