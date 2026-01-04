import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Built with React, Tailwind, and Gemini API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;