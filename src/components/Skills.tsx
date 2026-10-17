import React, { useState } from 'react';
import { SkillProficiency } from '../types';
import { NeuralSkillNetwork } from './NeuralSkillNetwork';
import { useLanguage } from '../context/LanguageContext';
import { MorphText } from './MorphText';
import { ScrollFade } from './ScrollFade';

export const Skills: React.FC = () => {
  const { t, isPersian } = useLanguage();
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
        <ScrollFade className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
              <MorphText text={t.skills.kicker} />
            </div>
            <MorphText
              as="h2"
              text={t.skills.title}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            />
            <p
              dir={isPersian ? 'rtl' : undefined}
              className={`text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal ${
                isPersian ? 'font-persian' : ''
              }`}
            >
              <MorphText text={t.skills.descriptionPart1} />
              <strong className="text-cyan-600 dark:text-cyan-400 font-bold">
                <MorphText text={t.skills.descriptionHighlight} />
              </strong>
              .
            </p>
          </div>

          {/* Interactive Proficiency Filter */}
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
                <MorphText
                  text={t.skills.levels[lvl]}
                  className={selectedProficiency === lvl ? '!text-white' : ''}
                />
              </button>
            ))}
          </div>
        </ScrollFade>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.categories.map((category, catIdx) => {
            const filteredSkills = category.skills.filter((s) => {
              if (selectedProficiency === 'All') return true;
              return s.level === selectedProficiency;
            });

            if (filteredSkills.length === 0) return null;

            return (
              <ScrollFade
                key={catIdx}
                delay={(catIdx % 3) * 80}
                className="p-6 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-200/90 dark:border-white/10 space-y-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_25px_-5px_rgba(0,0,0,0.04)] dark:shadow-sm"
              >
                <div>
                  <div className="space-y-1 pb-4 border-b border-slate-100 dark:border-white/5">
                    <MorphText
                      as="h3"
                      text={category.title}
                      className="text-base font-bold text-slate-900 dark:text-white"
                    />
                    <MorphText
                      as="p"
                      text={category.description}
                      className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed font-normal"
                    />
                  </div>

                  {/* Skills List */}
                  <div className="divide-y divide-slate-100 dark:divide-white/5 mt-3">
                    {filteredSkills.map((skill, sIdx) => (
                      <div key={sIdx} className="py-2.5 space-y-1">
                        <div className="flex items-center justify-between text-xs gap-2">
                          <MorphText
                            text={skill.name}
                            className="font-bold text-slate-900 dark:text-slate-200"
                          />
                          <span
                            className={`font-mono text-[11px] px-2 py-0.5 rounded font-bold shrink-0 ${getProficiencyBadge(
                              skill.level
                            )}`}
                          >
                            <MorphText text={t.skills.levels[skill.level]} />
                          </span>
                        </div>
                        {skill.context && (
                          <MorphText
                            as="p"
                            text={skill.context}
                            className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight font-medium"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-mono text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-white/5 font-semibold flex items-center gap-1">
                  <MorphText text={t.skills.categoryLabel} />
                  <MorphText text={category.title} />
                </div>
              </ScrollFade>
            );
          })}
        </div>

        {/* Legend / Key */}
        <ScrollFade
          delay={100}
          className="mt-12 p-3.5 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-300 dark:border-white/5 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-slate-800 dark:text-slate-300 shadow-sm font-semibold"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <MorphText text={t.skills.levels['Actively Using']} />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
            <MorphText text={t.skills.levels['Familiar With']} />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
            <MorphText text={t.skills.levels.Learning} />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0" />
            <MorphText text={t.skills.levels.Exploring} />
          </div>
        </ScrollFade>

        {/* 3D Interactive Neural Network of the Brain */}
        <ScrollFade delay={140} className="mt-14 space-y-4">
          <div>
            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
              <MorphText text={t.skills.synapticKicker} />
            </div>
            <MorphText
              as="h3"
              text={t.skills.neuralNetworkTitle}
              className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
            />
          </div>

          <NeuralSkillNetwork />
        </ScrollFade>
      </div>
    </section>
  );
};

