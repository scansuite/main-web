import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './FeatureCard';
import { featureData } from '../../data/featureData';

const FeaturesGrid: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-opacity-10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-text-heading mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Powerful <span className="text-accent">Tools</span>
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {featureData.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.05}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;