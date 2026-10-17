import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NotFound404 } from './components/NotFound404';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CommandPalette } from './components/CommandPalette';
import { TerminalModal } from './components/TerminalModal';
import { PROJECTS_DATA } from './data/projects';
import { Project } from './types';
import { ArrowUp } from 'lucide-react';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Detect base path for GitHub Pages (e.g. /SinaRiahi/) or standard domain (/)
  const getBasePath = () => {
    const segments = window.location.pathname.split('/').filter(Boolean);
    const isGitHubPages = window.location.hostname.endsWith('github.io');
    const isRepoSubpath = segments.length > 0 && segments[0].toLowerCase() === 'sinariahi';

    if ((isGitHubPages || isRepoSubpath) && segments.length > 0) {
      return `/${segments[0]}/`;
    }
    return '/';
  };

  // Check if current route or hash represents a 404 page
  const checkIs404 = () => {
    if (window.location.hash === '#404') {
      return true;
    }

    const segments = window.location.pathname.split('/').filter(Boolean);

    if (segments.length === 0 || (segments.length === 1 && segments[0].toLowerCase() === 'index.html')) {
      return false;
    }

    if (segments[0].toLowerCase() === 'sinariahi') {
      if (segments.length === 1) {
        return false;
      }
      if (segments.length === 2 && segments[1].toLowerCase() === 'index.html') {
        return false;
      }
      if (segments.length === 2 && (segments[1].toLowerCase() === '404' || segments[1].toLowerCase() === '404.html')) {
        return true;
      }
      return true;
    }

    if (segments[0].toLowerCase() === '404' || segments[0].toLowerCase() === '404.html') {
      return true;
    }

    const isGitHubPages = window.location.hostname.endsWith('github.io');
    if (isGitHubPages && segments.length > 0) {
      return true;
    }

    return false;
  };

  const [is404, setIs404] = useState<boolean>(checkIs404);

  useEffect(() => {
    const handleRouteChange = () => {
      setIs404(checkIs404());
    };
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const returnHome = () => {
    const basePath = getBasePath();
    if (window.location.hash === '#404' || window.location.pathname !== basePath) {
      window.history.pushState({}, '', `${basePath}#home`);
    }
    window.location.hash = '#home';
    setIs404(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Monitor scroll position to show scroll-to-top button and compute scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 20);

      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const progress = Math.min(Math.max(scrollY / totalScrollable, 0), 1);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Global keyboard shortcuts: Cmd+K / Ctrl+K and ~
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }

      const target = e.target as HTMLElement;
      const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA');
      if (e.key === '`' && !isInput && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[#F8F9FC] dark:bg-[#08090D] text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white dark:selection:bg-blue-600/40 dark:selection:text-cyan-200 relative">
          {is404 ? (
            <NotFound404
              onReturnHome={returnHome}
              onOpenTerminal={() => setTerminalOpen(true)}
            />
          ) : (
            <>
              {/* Navigation Bar (Strict 3-zone contract) */}
              <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

              {/* Main Content Sections */}
              <main>
                {/* Hero Section with Interactive Bionic Eye */}
                <Hero onOpenTerminal={() => setTerminalOpen(true)} />

                {/* About & Technical Mindset */}
                <About />

                {/* Projects Showcase & Engineering Case Studies */}
                <Projects onSelectProject={(p) => setSelectedProject(p)} />

                {/* Skills Matrix & Proficiencies */}
                <Skills />

                {/* Journey & Timeline */}
                <Experience />

                {/* Contact & Resume Download */}
                <Contact />
              </main>

              {/* Clean Footer */}
              <Footer />

              {/* Floating Scroll To Top Button with Circular Progress Outline */}
              {showScrollTop && (
                <div className="fixed bottom-6 right-6 z-40 animate-fadeIn">
                  <button
                    onClick={scrollToTop}
                    className="relative flex items-center justify-center w-12 h-12 rounded-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#08090D] transition-transform duration-200 hover:scale-110 active:scale-95 shadow-xl shadow-blue-600/25"
                    title={`Back to top (${Math.round(scrollProgress * 100)}%)`}
                    aria-label="Scroll back to top"
                  >
                    {/* Circular Progress Bar SVG Outline */}
                    <svg
                      className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none drop-shadow-sm"
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <linearGradient id="scrollProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38BDF8" />
                          <stop offset="100%" stopColor="#2563EB" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="24"
                        cy="24"
                        r="21"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-slate-300/80 dark:text-white/15"
                        fill="none"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="21"
                        stroke="url(#scrollProgressGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 21}
                        style={{
                          strokeDashoffset: (2 * Math.PI * 21) * (1 - scrollProgress),
                          transition: 'stroke-dashoffset 150ms ease-out',
                        }}
                        fill="none"
                      />
                    </svg>

                    {/* Inner Action Button */}
                    <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 group-hover:bg-blue-500 active:bg-blue-700 text-white shadow-md transition-colors duration-200">
                      <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>
                  </button>
                </div>
              )}
            </>
          )}

          {/* Engineering Case Study Modal */}
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onSelectProject={(p) => setSelectedProject(p)}
            allProjects={PROJECTS_DATA}
          />

          {/* Keyboard Command Palette */}
          <CommandPalette
            isOpen={commandPaletteOpen}
            onClose={() => setCommandPaletteOpen(false)}
            onOpenTerminal={() => setTerminalOpen(true)}
            onSelectProject={(p) => setSelectedProject(p)}
          />

          {/* Developer Terminal Emulator Easter Egg */}
          <TerminalModal
            isOpen={terminalOpen}
            onClose={() => setTerminalOpen(false)}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

