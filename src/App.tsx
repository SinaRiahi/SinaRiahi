import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
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

  // Monitor scroll position to show scroll-to-top button as soon as user scrolls down even a bit (> 15px)
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Global keyboard shortcuts: Cmd+K / Ctrl+K and ~
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K opens Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }

      // Backtick / ~ opens Developer Terminal (when not typing in an input/textarea)
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
      <div className="min-h-screen bg-[#F8F9FC] dark:bg-[#08090D] text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white dark:selection:bg-blue-600/40 dark:selection:text-cyan-200 relative">
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

        {/* Floating Scroll To Top Button (Appears immediately on scroll) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full !text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-xl shadow-blue-600/30 border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 animate-fadeIn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
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
    </ThemeProvider>
  );
}

export default App;
