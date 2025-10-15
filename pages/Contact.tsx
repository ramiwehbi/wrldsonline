
import React from 'react';
import { contactLinks } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] fade-in">
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-2 glow">[ ESTABLISH_CONNECTION ]</h2>
        <p className="text-green-400/80 mb-12">open channels</p>

        <div className="space-y-6">
          {contactLinks.map((link, index) => (
            <div
              key={link.name}
              className="border border-green-500/30 p-4 transition-all duration-300 hover:border-green-400/80 hover:bg-green-500/5"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-green-400 group-hover:text-green-300 group-hover:glow transition-all duration-300">
                        {`// ${link.name.toUpperCase()}`}
                    </span>
                    <span className="text-lg text-green-600 group-hover:text-green-400 transition-colors duration-300">
                        {link.handle}
                        <span className="text-green-500/50 group-hover:text-green-400 transition-colors duration-300 animate-pulse">_</span>
                    </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
