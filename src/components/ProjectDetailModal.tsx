import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, ArrowRight, Code, Layers, AlertCircle, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MorphText } from './MorphText';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const localizedProjects = t.projects.items;
  const currentIndex = Math.max(
    0,
    localizedProjects.findIndex((p) => p.id === project.id)
  );
  const activeProject = localizedProjects[currentIndex] || project;
  const nextProject = localizedProjects[(currentIndex + 1) % localizedProjects.length];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0e1017] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#0e1017]/95 border-b border-slate-200 dark:border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold">
              <MorphText text={t.projects.modal.caseStudy} />
            </span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-400 font-semibold">
              <MorphText text={t.projects.categories[activeProject.category]} />
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Title & Metadata Banner */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-700 dark:text-slate-400 font-mono">
              <MorphText
                text={activeProject.status}
                className="text-slate-900 dark:text-white font-bold"
              />
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">
                ·
              </span>
              <MorphText text={activeProject.year} className="font-semibold" />
            </div>

            <h2
              id="modal-title"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              <MorphText text={activeProject.title} />
            </h2>
            <MorphText
              as="p"
              text={activeProject.subtitle}
              className="text-base sm:text-lg text-slate-800 dark:text-slate-300 font-medium"
            />

            {/* Technologies as clean unboxed text with typographic separators */}
            <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-blue-700 dark:text-blue-300">
              <MorphText
                text={t.projects.modal.stack}
                className="text-slate-700 dark:text-slate-400 font-sans font-bold"
              />
              {activeProject.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-semibold">{tech}</span>
                  {idx < activeProject.technologies.length - 1 && (
                    <span className="text-slate-400 dark:text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold !text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-white shrink-0" />
                  <MorphText text={t.projects.modal.liveDemo} className="!text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Section 1: Executive Overview */}
          <div className="p-5 rounded-xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-300/80 dark:border-white/5 space-y-2">
            <MorphText
              as="h3"
              text={t.projects.modal.execSummary}
              className="text-sm font-bold uppercase tracking-wider font-mono text-blue-700 dark:text-blue-400"
            />
            <MorphText
              as="p"
              text={activeProject.summary}
              className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-normal"
            />
          </div>

          {/* Section 2: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-300/80 dark:border-red-900/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-700 dark:text-red-400 font-bold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <MorphText text={t.projects.modal.problemSpace} />
              </div>
              <MorphText
                as="p"
                text={activeProject.problem}
                className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-normal"
              />
            </div>

            <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-300/80 dark:border-emerald-900/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-bold">
                <Lightbulb className="w-4 h-4 shrink-0" />
                <MorphText text={t.projects.modal.engineeredSolution} />
              </div>
              <MorphText
                as="p"
                text={activeProject.solution}
                className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-normal"
              />
            </div>
          </div>

          {/* Section 3: Architecture & Data Flow */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider font-bold">
              <Layers className="w-4 h-4 shrink-0" />
              <MorphText text={t.projects.modal.techArchitecture} />
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {activeProject.architectureDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-slate-100/70 dark:bg-white/[0.02] border border-slate-300/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-300 leading-relaxed flex items-start gap-2.5 font-medium"
                >
                  <span className="font-mono text-blue-700 dark:text-blue-400 text-[11px] mt-0.5 font-bold shrink-0">
                    [{idx + 1}]
                  </span>
                  <MorphText text={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Key Functional Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider font-bold">
              <Code className="w-4 h-4 shrink-0" />
              <MorphText text={t.projects.modal.implementedCapabilities} />
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-300 font-medium">
              {activeProject.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <MorphText text={feat} />
                </li>
              ))}
            </ul>
          </div>

          {/* Yadban App Interface Highlights */}
          {activeProject.id === 'yadban' && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider font-bold">
                <Layers className="w-4 h-4 shrink-0" />
                <MorphText text={t.projects.modal.yadbanShowcaseTitle} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.projects.modal.yadbanScreens.map((screen, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-4 rounded-xl bg-slate-100 dark:bg-white/[0.02] border border-slate-300 dark:border-white/10 space-y-2 ${
                      sIdx === 4 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <MorphText
                      as="div"
                      text={screen.title}
                      className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400"
                    />
                    <MorphText
                      as="p"
                      text={screen.desc}
                      className="text-xs text-slate-700 dark:text-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 5: Engineering Challenges & Solved Trade-offs */}
          <div className="space-y-3">
            <MorphText
              as="h3"
              text={t.projects.modal.challengesAndLessons}
              className="text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider font-bold"
            />
            <div className="space-y-2.5">
              {activeProject.challenges.map((chal, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-slate-100/70 dark:bg-[#141620] border border-slate-300/80 dark:border-white/5 text-xs text-slate-800 dark:text-slate-300"
                >
                  <MorphText
                    text={t.projects.modal.challengeLabel}
                    className="font-bold text-slate-900 dark:text-slate-200"
                  />
                  <MorphText text={chal} />
                </div>
              ))}
              {activeProject.lessonsLearned.map((lesson, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-blue-50 dark:bg-[#141620] border border-blue-200 dark:border-white/5 text-xs text-slate-800 dark:text-slate-300"
                >
                  <MorphText
                    text={t.projects.modal.takeawayLabel}
                    className="font-bold text-blue-800 dark:text-blue-300"
                  />
                  <MorphText text={lesson} />
                </div>
              ))}
            </div>
          </div>

          {/* Next Project Footer */}
          <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="text-xs text-slate-700 dark:text-slate-400 font-medium flex items-center gap-1.5">
              <MorphText text={t.projects.modal.nextInShowcase} />
              <MorphText
                text={nextProject.title}
                className="text-slate-900 dark:text-white font-bold"
              />
            </div>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-slate-900 dark:text-white bg-white hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-lg transition-colors shadow-sm group"
            >
              <MorphText text={t.projects.modal.nextProject} />
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

