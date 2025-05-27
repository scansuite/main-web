import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-sm h-full">
      <h2 className="text-2xl font-semibold text-text-heading mb-6 pb-4 border-b border-border">
        Contact Information
      </h2>
      
      <p className="text-text-secondary mb-8">
        Fill up the form and our Team will get back to you within 24 hours.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div>
            <a href="mailto:support@scansuite.io" className="text-text-primary hover:text-accent transition-colors">
              support@scansuite.io
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div className="text-text-primary">
            CyberTech Park, New Delhi, India
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <Phone className="w-5 h-5 text-accent" />
          </div>
          <div>
            <a href="tel:+910000000000" className="text-text-primary hover:text-accent transition-colors">
              (+91) 000-000-0000
            </a>
            <span className="text-text-secondary ml-1">(Support Line)</span>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-text-heading mt-10 mb-6">
        Business Hours:
      </h3>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <Clock className="w-5 h-5 text-accent" />
        </div>
        <div className="text-text-primary">
          Monday - Friday: 9:00 AM - 6:00 PM (IST)
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;