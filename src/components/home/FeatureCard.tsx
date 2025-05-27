import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay,
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="feature-card group relative overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-teal-700/10 dark:from-teal-500/10 dark:to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-500/10 dark:bg-teal-500/20 transition-all duration-300 group-hover:bg-teal-500/20 dark:group-hover:bg-teal-500/30 shadow-sm group-hover:shadow-md">
          <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-teal-600 dark:text-teal-400 transition-transform duration-300 group-hover:scale-110" />
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;