import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10 border-t border-gray-200 dark:border-gray-700/50 transition-colors duration-300 rounded-xl mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-text-secondary text-sm mb-6">
          © {new Date().getFullYear()} ScanSuite. All rights reserved. Powered by <b>hacKnos</b> security.
        </p>
        <div className="flex justify-center gap-8">
          <Link to="/terms" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;