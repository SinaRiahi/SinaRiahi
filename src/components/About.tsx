import React from 'react';
import { Bot, Terminal, Layers, Globe, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/socials';

export const About: React.FC = () => {
  const capabilityCards = [
    {
      icon: Bot,
      title: 'Business & Workflow Automation',
      desc: 'Engineered 14 production automation applications at Naria Gallery, automating repetitive manual operations, Excel reconciliation, and doubling average sales.',
      detail: 'Python · PySide6 · Pandas · REST APIs',
    },
    {
      icon: Terminal,
      title: 'Desktop Engineering & Systems',
      desc: 'Architecting high-performance modular desktop applications: Task Master (PySide6/Qt) and MyPal (Rust Tauri v2 + React 19 sandboxed plugin ecosystem).',
      detail: 'Rust · Tauri v2 · Qt · Multithreading',
    },
    {
      icon: Layers,
      title: 'Web Scraping & Competitive Intelligence',
      desc: 'Building stealth web scraping engines (nodriver, Selenium, BeautifulSoup), real-time pricing alerts, and smart reorder recommendation algorithms.',
      detail: 'nodriver · BeautifulSoup · PostgreSQL · Docker',
    },
    {
      icon: Globe,
      title: 'Client-Side Web & P2P Media Tools',
      desc: 'Developing in-browser privacy-preserving utilities (MD Studio, Audio Forge, QR Forge, WebRTC P2P file & clipboard bridge) with zero server dependencies.',
      detail: 'TypeScript · Web Audio API · WebRTC · Canvas',
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
            01. Background & Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering tools that eliminate operational friction
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Python and systems developer specializing in desktop applications, business automation, data processing, web scraping, and workflow optimization. Experienced building production tools that automate repetitive operations, integrate with REST APIs, process Excel datasets, and generate business reports.
          </p>
        </div>

        {/* 2-Column Split: Education & Track Record + Technical Domains */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Education & Professional Qualifications */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Credentials Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-300 dark:border-white/10 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_25px_-5px_rgba(0,0,0,0.04)] dark:shadow-sm">
              <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Bachelor of Computer Science
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                  Kharazmi University · Graduated 2026
                </p>
                <div className="mt-2.5 inline-block text-xs font-mono text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 px-2.5 py-1 rounded-md font-bold">
                  Cumulative Academic Average: 17.22 / 20
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2">
                <div className="text-xs font-mono text-slate-700 dark:text-slate-400 font-bold">Linguistic Proficiencies:</div>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  {PERSONAL_INFO.languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/5 last:border-0">
                      <span className="font-bold text-slate-900 dark:text-slate-200">{lang.name}</span>
                      <span className="font-mono text-slate-600 dark:text-slate-400 text-[11px] font-semibold">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-slate-600 dark:text-slate-400 font-medium">
                {PERSONAL_INFO.acm}
              </div>
            </div>

            {/* Engineering Protocol */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-300 dark:border-white/10 space-y-3 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_25px_-5px_rgba(0,0,0,0.04)] dark:shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Core Engineering Philosophy
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "{PERSONAL_INFO.learningPhilosophy}"
              </p>
              <div className="text-[11px] font-mono text-blue-700 dark:text-cyan-400 font-bold">
                Location: {PERSONAL_INFO.location} · Available for Engineering Opportunities
              </div>
            </div>

          </div>

          {/* Right Column: Key Technical Domains */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Production Capabilities & Focus Areas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilityCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-[#0d0f17]/60 border border-slate-300/80 dark:border-white/10 hover:border-blue-500/50 hover:shadow-md transition-all hover:-translate-y-0.5 group flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_16px_-4px_rgba(0,0,0,0.03)] dark:shadow-none"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center mb-3 text-blue-700 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <p className="text-[11px] text-slate-700 dark:text-slate-400 mt-3 pt-2 border-t border-slate-100 dark:border-white/5 font-mono font-medium">
                      {card.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Link to Experience */}
            <div className="mt-6 p-4 rounded-xl bg-blue-500/10 dark:bg-blue-600/10 border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-slate-800 dark:text-slate-200">
                <span className="font-bold text-slate-900 dark:text-white">Proven Track Record:</span> Sales Department Manager at Naria Gallery & Sales Supervisor at Digikala (Peaksale).
              </div>
              <a
                href="#journey"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-cyan-300 whitespace-nowrap"
              >
                <span>View Full Timeline</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
