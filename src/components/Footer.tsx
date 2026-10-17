import React from 'react';
import { SOCIAL_LINKS } from '../data/socials';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { MorphText } from './MorphText';
import { ScrollFade } from './ScrollFade';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="pt-12 pb-24 sm:py-12 border-t border-slate-300 dark:border-white/5 bg-slate-100 dark:bg-[#07080b] text-slate-700 dark:text-slate-400 text-xs flex justify-center">
      <ScrollFade
        className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 w-[1100px] max-w-full"
      >
        {/* Brand & Attribution */}
        <div className="space-y-1 text-center sm:text-left">
          <MorphText
            as="div"
            text={t.footer.roleLine}
            className="font-bold text-slate-900 dark:text-white"
          />
          <MorphText
            as="p"
            text={t.footer.engineeredLine}
            className="text-slate-600 dark:text-slate-400 font-medium"
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5 shrink-0" />
            <MorphText text={t.footer.github} />
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5 shrink-0" />
            <MorphText text={t.footer.linkedin} />
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors flex items-center gap-1.5"
          >
            <InstagramIcon className="w-3.5 h-3.5 shrink-0" />
            <MorphText text={t.footer.instagram} />
          </a>

          <a
            href={SOCIAL_LINKS.resumeUrl}
            download
            className="text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors"
          >
            <MorphText text={t.footer.resume} />
          </a>
        </div>
      </ScrollFade>
    </footer>
  );
};

