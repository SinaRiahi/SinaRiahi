import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/projects';
import { ArrowUpRight, Sparkles, Terminal, Gamepad2, FileCode, Database } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (p: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Automation & Tools',
    'Game Engineering',
    'Systems & Backend',
    'Product & Web',
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Game Engineering':
        return Gamepad2;
      case 'Automation & Tools':
        return Terminal;
      case 'Systems & Backend':
        return Database;
      default:
        return FileCode;
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
              02. Engineered Projects & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Evidence of software built & tested
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              Explore concrete implementations spanning modular desktop utilities, business automation, linguistic edge processors, and game loop mechanics.
            </p>
          </div>

          {/* Interactive Category Filter Controls (No scrollbars, clean selected state) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl max-w-full overflow-hidden no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 !text-white shadow-sm ring-1 ring-blue-500/30'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5'
                }`}
                aria-pressed={activeCategory === cat}
              >
                <span className={activeCategory === cat ? '!text-white' : ''}>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: Dynamic Bento Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const IconComponent = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-200/90 dark:border-white/10 hover:border-blue-500/50 transition-all duration-200 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_25px_-5px_rgba(0,0,0,0.04)] dark:shadow-lg hover:-translate-y-1 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_20px_25px_-5px_rgba(0,0,0,0.08)]"
              >
                {/* Visual Header / Blueprint Graphic */}
                <div className="relative h-44 w-full bg-gradient-to-br from-slate-100 via-blue-50/50 to-slate-200/80 dark:from-[#121520] dark:to-[#0a0c12] border-b border-slate-200 dark:border-white/5 flex flex-col justify-between p-5 overflow-hidden">
                  {/* Subtle technical background grid */}
                  <div 
                    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />

                  {/* Top unboxed metadata line */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-700 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <IconComponent className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="font-semibold text-slate-800 dark:text-slate-300">{project.category}</span>
                    </div>
                    <span className="text-slate-600 dark:text-slate-400 font-semibold">{project.year}</span>
                  </div>

                  {/* Visual Accent Centerpiece */}
                  <div className="relative z-10 my-auto">
                    <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </div>
                    <div className="text-xs text-slate-700 dark:text-slate-400 font-mono font-medium mt-0.5">
                      {project.status}
                    </div>
                  </div>

                  {/* Corner tag if featured */}
                  {project.featured && (
                    <div className="absolute bottom-3 right-4 z-10 flex items-center gap-1 text-[10px] font-mono text-blue-800 dark:text-cyan-400 font-bold bg-blue-100 dark:bg-cyan-500/10 border border-blue-300 dark:border-cyan-500/20 px-2 py-0.5 rounded">
                      <Sparkles className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
                      <span>Featured Build</span>
                    </div>
                  )}
                </div>

                {/* Card Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">
                      {project.subtitle}
                    </h3>
                    <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Stack items as unboxed clean text with typographic separators */}
                  <div className="pt-2 border-t border-slate-100 dark:border-white/5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-700 dark:text-slate-400">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="text-slate-800 dark:text-slate-200 font-semibold">{tech}</span>
                          {idx < Math.min(project.technologies.length, 4) - 1 && (
                            <span className="text-slate-400 dark:text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">+{project.technologies.length - 4} more</span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-3 flex items-center justify-between border-t border-slate-100 dark:border-white/5">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-cyan-300 transition-colors group/btn"
                      aria-label={`Read more about ${project.title}`}
                    >
                      <span>Read more</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on Data-Driven Extensibility */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono font-medium">
            Designed with a modular project schema in <code className="text-blue-600 dark:text-blue-400 font-semibold">src/data/projects.ts</code> for frictionless expansion as new repositories ship.
          </p>
        </div>

      </div>
    </section>
  );
};
