import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scan, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-gray-100 dark:bg-gray-800 backdrop-blur-md shadow-lg border-gray-200 dark:border-gray-700/50' 
          : 'bg-gray-100 dark:bg-gray-800 border-transparent'
      } rounded-xl`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <Scan className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
            <span className="text-xl font-bold text-accent ml-2 transition-colors duration-300 group-hover:text-accent-hover">
              ScanSuite
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
            <a href="/#features" className="nav-link">
              Features
            </a>
            <Link to="/terms" className={`nav-link ${isActive('/terms')}`}>
              Terms
            </Link>
            <Link to="/privacy" className={`nav-link ${isActive('/privacy')}`}>
              Privacy
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              Contact
            </Link>
            <a 
              href="https://app.scansuite.io"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>Login / Sign Up</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <button 
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-accent" />
            ) : (
              <Menu className="w-6 h-6 text-accent" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-card shadow-xl border-t border-border transform transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col py-2">
            <Link 
              to="/" 
              className={`px-6 py-3 hover:bg-accent/10 transition-colors duration-300 ${
                isActive('/') ? 'text-accent' : 'text-text-primary'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <a 
              href="/#features" 
              className="px-6 py-3 text-text-primary hover:bg-accent/10 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Features
            </a>
            <Link 
              to="/terms" 
              className={`px-6 py-3 hover:bg-accent/10 transition-colors duration-300 ${
                isActive('/terms') ? 'text-accent' : 'text-text-primary'
              }`}
              onClick={toggleMenu}
            >
              Terms
            </Link>
            <Link 
              to="/privacy" 
              className={`px-6 py-3 hover:bg-accent/10 transition-colors duration-300 ${
                isActive('/privacy') ? 'text-accent' : 'text-text-primary'
              }`}
              onClick={toggleMenu}
            >
              Privacy
            </Link>
            <Link 
              to="/contact" 
              className={`px-6 py-3 hover:bg-accent/10 transition-colors duration-300 ${
                isActive('/contact') ? 'text-accent' : 'text-text-primary'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="px-6 py-3">
              <a 
                href="https://app.scansuite.io"
                className="flex items-center justify-center px-5 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 w-full group"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Login / Sign Up</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;