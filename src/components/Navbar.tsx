import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Search } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { handleResumeDownload } from '../utils/resume';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const heroNameEl = document.getElementById('hero-name');
      if (heroNameEl) {
        const rect = heroNameEl.getBoundingClientRect();
        // Morph into header when hero name reaches or scrolls past the header threshold
        setShowBrand(rect.top <= 65 || window.scrollY > 120);
      } else {
        setShowBrand(window.scrollY > 70);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#08090D]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Morphed in on scroll from hero card) */}
        <div className="w-[120px] h-[34px] flex items-center">
          <a
            href="#home"
            className={`text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 transition-all duration-300 ease-out transform ${
              showBrand
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                : 'opacity-0 -translate-y-2 scale-95 pointer-events-none select-none'
            }`}
            aria-label="Sina Riahi homepage"
            tabIndex={showBrand ? 0 : -1}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block shrink-0 shadow-sm shadow-blue-500/50" />
            <span className="whitespace-nowrap">Sina Riahi</span>
          </a>
        </div>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <a
            href="#projects"
            className="hover:text-blue-600 dark:hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-blue-500 rounded"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600 dark:hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-blue-500 rounded"
          >
            Skills
          </a>
          <a
            href="#journey"
            className="hover:text-blue-600 dark:hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-blue-500 rounded"
          >
            Journey
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-blue-500 rounded"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Command Palette / Search Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="p-2 text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-lg transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
            title="Open Search (Cmd+K)"
            aria-label="Open search"
          >
            <Search className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-lg transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600" />
            )}
          </button>

          {/* Resume Link CTA */}
          <a
            href={SOCIAL_LINKS.resumeUrl}
            onClick={handleResumeDownload}
            download="Sina_Riahi.pdf"
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 text-xs font-semibold !text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors shadow-sm whitespace-nowrap focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0c0e14] border-b border-slate-200 dark:border-white/10 px-4 pt-3 pb-5 mt-3 space-y-2.5 shadow-lg">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
          >
            Skills & Stack
          </a>
          <a
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
          >
            Journey & Background
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <a
              href={SOCIAL_LINKS.resumeUrl}
              onClick={(e) => {
                handleResumeDownload(e);
                setMobileMenuOpen(false);
              }}
              download="Sina_Riahi.pdf"
              className="px-4 py-2 text-xs font-semibold !text-white bg-blue-600 rounded-lg shadow-sm"
            >
              Download Resume
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="text-xs text-slate-600 dark:text-slate-400 font-mono py-2 px-3 border border-slate-200 dark:border-white/10 rounded-lg bg-slate-50 dark:bg-white/5"
            >
              Commands ⌘K
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
