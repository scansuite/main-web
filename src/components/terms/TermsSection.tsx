import React from 'react';

interface TermsSectionProps {
  number: string;
  title: string;
  content: string | string[];
  list?: string[];
}

const TermsSection: React.FC<TermsSectionProps> = ({ number, title, content, list }) => {
  return (
    <div className="bg-card/90 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-sm mb-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-text-heading mb-4">
        {number}. {title}
      </h2>
      
      {Array.isArray(content) ? (
        content.map((paragraph, index) => (
          <p key={index} className="text-text-primary mb-4">
            {paragraph}
          </p>
        ))
      ) : (
        <p className="text-text-primary mb-4">
          {content}
        </p>
      )}
      
      {list && list.length > 0 && (
        <ul className="list-disc pl-6 space-y-2 mb-4">
          {list.map((item, index) => (
            <li key={index} className="text-text-primary">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TermsSection;