import React from 'react';
import { JOURNEY_DATA } from '../data/experience';
import { GraduationCap, Code2, Compass } from 'lucide-react';
import { TimeTravelCalendar } from './TimeTravelCalendar';

export const Experience: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'project':
        return Code2;
      default:
        return Compass;
    }
  };

  return (
    <section id="journey" className="py-24 border-t border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
            05. Trajectory & Learning Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            From biological systems to algorithmic engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            A chronological timeline documenting self-directed projects, academic milestones, and the transition into computer science.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Timeline on Left, Time Travel Calendar on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative">
          
          {/* Left Column: Timeline Path */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="relative border-l border-slate-300 dark:border-white/10 ml-4 sm:ml-8 space-y-12">
              {JOURNEY_DATA.map((milestone, idx) => {
                const Icon = getIcon(milestone.type);
                return (
                  <div key={idx} className="relative pl-6 sm:pl-8 group">
                    
                    {/* Node marker on the line */}
                    <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-white dark:bg-[#08090d] border border-blue-500/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:border-blue-600 dark:group-hover:border-cyan-400 group-hover:scale-110 transition-all shadow-sm">
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    {/* Milestone Content Card */}
                    <div className="p-6 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-300 dark:border-white/10 hover:border-blue-500/50 hover:shadow-md transition-all space-y-3 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_25px_-5px_rgba(0,0,0,0.04)] dark:shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono text-blue-700 dark:text-cyan-400 font-bold">
                          {milestone.period}
                        </span>
                        <span className="text-xs font-mono text-slate-700 dark:text-slate-400 font-semibold">
                          {milestone.organizationOrContext}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                        {milestone.title}
                      </h3>

                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                        {milestone.description}
                      </p>

                      {/* Clean unboxed tags with typographic separators */}
                      <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-800 dark:text-slate-400">
                        <span className="text-slate-900 dark:text-white font-bold">Focus:</span>
                        {milestone.tags.map((tag, tIdx) => (
                          <React.Fragment key={tag}>
                            <span className="text-slate-800 dark:text-slate-200 font-semibold">{tag}</span>
                            {tIdx < milestone.tags.length - 1 && <span className="text-slate-400 dark:text-slate-600">·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Time-Travel Calendar Companion (Stays visible down whole section) */}
          <div className="lg:col-span-4 order-1 lg:order-2 h-full relative">
            <div className="sticky top-24 sm:top-28 z-20 mb-8 lg:mb-0">
              <TimeTravelCalendar />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
