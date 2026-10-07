import React from 'react';
import { SOCIAL_LINKS } from '../data/socials';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-300 dark:border-white/5 bg-slate-100 dark:bg-[#07080b] text-slate-700 dark:text-slate-400 text-xs flex justify-center">
      <div 
        className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        style={{ width: '1100px', maxWidth: '100%' }}
      >
        
        {/* Brand & Attribution */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-bold text-slate-900 dark:text-white">
            Sina Riahi · Computer Science Developer
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Engineered with React, TypeScript, Vite & Tailwind CSS. Built for performance and accessibility.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors flex items-center gap-1.5"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </a>

          <a
            href={SOCIAL_LINKS.resumeUrl}
            download
            className="text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors"
          >
            Resume
          </a>
        </div>

      </div>
    </footer>
  );
};
