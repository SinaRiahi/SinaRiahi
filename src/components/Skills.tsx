import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/skills';
import { SkillProficiency } from '../types';
import { NeuralSkillNetwork } from './NeuralSkillNetwork';

export const Skills: React.FC = () => {
  const [selectedProficiency, setSelectedProficiency] = useState<SkillProficiency | 'All'>('All');

  const proficiencyLevels: Array<SkillProficiency | 'All'> = [
    'All',
    'Actively Using',
    'Familiar With',
    'Learning',
    'Exploring',
  ];

  const getProficiencyBadge = (level: SkillProficiency) => {
    switch (level) {
      case 'Actively Using':
        return 'text-emerald-800 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20';
      case 'Familiar With':
        return 'text-blue-800 dark:text-blue-300 bg-blue-100/90 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/20';
      case 'Learning':
        return 'text-amber-800 dark:text-amber-300 bg-amber-100/90 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/20';
      case 'Exploring':
        return 'text-cyan-800 dark:text-cyan-300 bg-cyan-100/90 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20';
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
              04. Technical Capabilities & Proficiencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Skills, Technologies & Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              A comprehensive breakdown of the programming languages, backend frameworks, automation engines, and system architecture tools I work with daily across production projects and experiments.
            </p>
          </div>

          {/* Interactive Proficiency Filter (No scrollbars, clean selected state) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl max-w-full overflow-hidden no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {proficiencyLevels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedProficiency(lvl)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedProficiency === lvl
                    ? 'bg-blue-600 !text-white shadow-sm ring-1 ring-blue-500/30'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5'
                }`}
              >
                <span className={selectedProficiency === lvl ? '!text-white' : ''}>{lvl}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((category, catIdx) => {
            const filteredSkills = category.skills.filter((s) => {
              if (selectedProficiency === 'All') return true;
              return s.level === selectedProficiency;
            });

            if (filteredSkills.length === 0) return null;

            return (
              <div
                key={catIdx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-200/90 dark:border-white/10 space-y-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_25px_-5px_rgba(0,0,0,0.04)] dark:shadow-sm"
              >
                <div>
                  <div className="space-y-1 pb-4 border-b border-slate-100 dark:border-white/5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills List with unboxed status and context notes */}
                  <div className="divide-y divide-slate-100 dark:divide-white/5 mt-3">
                    {filteredSkills.map((skill, sIdx) => (
                      <div key={sIdx} className="py-2.5 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-900 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className={`font-mono text-[11px] px-2 py-0.5 rounded font-bold ${getProficiencyBadge(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        {skill.context && (
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight font-medium">
                            {skill.context}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-mono text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-white/5 font-semibold">
                  Category: {category.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend / Key */}
        <div className="mt-12 p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-300 dark:border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-800 dark:text-slate-300 shadow-sm font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Actively Using: Daily production & project tools</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span>Familiar With: Confident implementation & schemas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Learning: Active study & foundational coursework</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
            <span>Exploring: Experimental architectures & bionics</span>
          </div>
        </div>

        {/* 3D Interactive Neural Network of the Brain */}
        <div className="mt-14 space-y-4">
          <div>
            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
              Synaptic Skill Architecture
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              3D Neural Brain Network
            </h3>
          </div>

          <NeuralSkillNetwork />
        </div>

      </div>
    </section>
  );
};
