import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesGrid from '../components/home/FeaturesGrid';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to features if URL has #features hash
    if (window.location.hash === '#features' && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <HeroSection />
      <div ref={featuresRef} id="features">
        <FeaturesGrid />
      </div>
      <CtaSection />
    </>
  );
};

export default HomePage;