import React from 'react';
import { Bot, Terminal, Layers, Globe, GraduationCap, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MorphText } from './MorphText';
import { ScrollFade } from './ScrollFade';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const cardIcons = [Bot, Terminal, Layers, Globe];

  return (
    <section id="about" className="py-24 border-t border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollFade className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
            <MorphText text={t.about.kicker} />
          </div>
          <MorphText
            as="h2"
            text={t.about.title}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          />
          <MorphText
            as="p"
            text={t.about.intro}
            className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal"
          />
        </ScrollFade>

        {/* 2-Column Split: Education & Track Record + Technical Domains */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Education & Professional Qualifications */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Credentials Card */}
            <ScrollFade
              delay={60}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-300 dark:border-white/10 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_25px_-5px_rgba(0,0,0,0.04)] dark:shadow-sm"
            >
              <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold">
                <GraduationCap className="w-4 h-4 shrink-0" />
                <MorphText text={t.about.academicFoundation} />
              </div>

              <div>
                <MorphText
                  as="h3"
                  text={t.about.degree}
                  className="text-base font-bold text-slate-900 dark:text-white"
                />
                <MorphText
                  as="p"
                  text={t.about.universityAndYear}
                  className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5"
                />
                <div className="mt-2.5 inline-block text-xs font-mono text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 px-2.5 py-1 rounded-md font-bold">
                  <MorphText text={t.about.gpaBadge} />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2">
                <MorphText
                  as="div"
                  text={t.about.linguisticProficiencies}
                  className="text-xs font-mono text-slate-700 dark:text-slate-400 font-bold"
                />
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  {t.about.languages.map((lang, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/5 last:border-0"
                    >
                      <MorphText
                        text={lang.name}
                        className="font-bold text-slate-900 dark:text-slate-200"
                      />
                      <MorphText
                        text={lang.level}
                        className="font-mono text-slate-600 dark:text-slate-400 text-[11px] font-semibold"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <MorphText
                as="div"
                text={t.about.acm}
                className="pt-2 text-[11px] font-mono text-slate-600 dark:text-slate-400 font-medium"
              />
            </ScrollFade>

            {/* Engineering Protocol */}
            <ScrollFade
              delay={120}
              className="p-6 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-300 dark:border-white/10 space-y-3 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_25px_-5px_rgba(0,0,0,0.04)] dark:shadow-sm"
            >
              <MorphText
                as="h3"
                text={t.about.philosophyTitle}
                className="text-sm font-bold text-slate-900 dark:text-white"
              />
              <MorphText
                as="p"
                text={`"${t.about.philosophyQuote}"`}
                className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic"
              />
              <div className="text-[11px] font-mono text-blue-700 dark:text-cyan-400 font-bold flex items-center gap-1.5">
                <MorphText text={t.about.locationLabel} />
                <MorphText text={t.about.locationValue} />
              </div>
            </ScrollFade>
          </div>

          {/* Right Column: Key Technical Domains */}
          <div className="lg:col-span-7 space-y-4">
            <ScrollFade>
              <MorphText
                as="h3"
                text={t.about.capabilitiesTitle}
                className="text-base font-bold text-slate-900 dark:text-white mb-2"
              />
            </ScrollFade>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.capabilityCards.map((card, idx) => {
                const IconComponent = cardIcons[idx % cardIcons.length];
                return (
                  <ScrollFade
                    key={idx}
                    delay={idx * 70}
                    className="p-5 rounded-xl bg-white dark:bg-[#0d0f17]/60 border border-slate-300/80 dark:border-white/10 hover:border-blue-500/50 hover:shadow-md transition-all hover:-translate-y-0.5 group flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_16px_-4px_rgba(0,0,0,0.03)] dark:shadow-none"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center mb-3 text-blue-700 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <MorphText
                        as="h4"
                        text={card.title}
                        className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors"
                      />
                      <MorphText
                        as="p"
                        text={card.desc}
                        className="text-xs text-slate-700 dark:text-slate-300 mt-2 leading-relaxed"
                      />
                    </div>
                    <MorphText
                      as="p"
                      text={card.detail}
                      forceLtr={true}
                      className="text-[11px] text-slate-700 dark:text-slate-400 mt-3 pt-2 border-t border-slate-100 dark:border-white/5 font-mono font-medium"
                    />
                  </ScrollFade>
                );
              })}
            </div>

            {/* Direct Link to Experience */}
            <ScrollFade
              delay={200}
              className="mt-6 p-4 rounded-xl bg-blue-500/10 dark:bg-blue-600/10 border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="text-xs text-slate-800 dark:text-slate-200">
                <MorphText
                  text={t.about.trackRecordPrefix}
                  className="font-bold text-slate-900 dark:text-white mr-1.5"
                />{' '}
                <MorphText text={t.about.trackRecordText} />
              </div>
              <a
                href="#journey"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-cyan-300 whitespace-nowrap"
              >
                <MorphText text={t.about.viewTimeline} />
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  );
};

