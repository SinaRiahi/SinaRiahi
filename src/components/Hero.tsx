import React from 'react';
import { TrackingEye } from './TrackingEye';
import { SOCIAL_LINKS } from '../data/socials';
import { ArrowRight, FileText, Terminal as TerminalIcon } from 'lucide-react';
import { GithubIcon } from './Icons';
import { handleResumeDownload } from '../utils/resume';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Fine grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Semantic Editorial Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed status & kicker (Zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-800 dark:text-slate-300">Available for part-time and freelance duties</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="font-semibold text-slate-700 dark:text-slate-400"></span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 
                id="hero-name"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
                style={{ fontStyle: 'normal', textDecorationLine: 'none', textAlign: 'left' }}
              >
                Sina Riahi
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200">
                Python & Systems Developer · Computer Science
              </p>
            </div>

            {/* Narrative Value Proposition */}
            <p 
              className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed"
              style={{ fontFamily: 'Arial' }}
            >
              Specializing in desktop applications, business automation, data processing, web scraping, and workflow optimization. Experienced building production tools that automate repetitive operations, integrate with REST APIs, and process complex datasets.
            </p>

            {/* Architectural Focus Line (Unboxed metadata with typographic separators) */}
            <div className="pt-2 text-xs font-mono text-slate-800 dark:text-slate-300 flex flex-wrap items-center gap-y-1.5 gap-x-2">
              <span className="text-slate-900 dark:text-white font-bold">Core Focus:</span>
              <span className="text-slate-800 dark:text-slate-200 font-medium">AI and ML </span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-800 dark:text-slate-200 font-medium">Cybersecurity</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-800 dark:text-slate-200 font-medium">Automation</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-800 dark:text-slate-200 font-medium">Web Scraping</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-800 dark:text-slate-200 font-medium">General Tools</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold !text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-blue-400 group"
              >
                <span className="!text-white">Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-slate-200 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-lg transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <GithubIcon className="w-4 h-4 text-slate-800 dark:text-slate-400" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={SOCIAL_LINKS.resumeUrl}
                onClick={handleResumeDownload}
                download="Sina_Riahi.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-slate-200 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-lg transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <FileText className="w-4 h-4 text-slate-800 dark:text-slate-400" />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-mono font-medium text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-lg transition-colors shadow-sm"
                style={{ width: '150px', height: '42px' }}
                title="Launch Developer Terminal (~ key)"
                aria-label="Launch interactive developer terminal"
              >
                <TerminalIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Terminal Mode</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Bionic Ocular Sensor */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative rounded-2xl bg-transparent border-transparent overflow-visible p-2 flex items-center justify-center">
              <TrackingEye interactive={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
