import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Layout;