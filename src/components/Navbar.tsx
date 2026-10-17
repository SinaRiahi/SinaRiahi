import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';
import { MorphText } from './MorphText';
import { Sun, Moon, Menu, X, Search, ChevronDown } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { handleResumeDownload } from '../utils/resume';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

const FlagIcon: React.FC<{ lang: Language; className?: string }> = ({ lang, className = 'w-5 h-5' }) => {
  if (lang === 'en') {
    // Circular UK Union Jack flag SVG
    return (
      <svg
        viewBox="0 0 40 40"
        className={`${className} rounded-full overflow-hidden shrink-0 ring-1 ring-slate-900/10 dark:ring-white/15`}
        aria-hidden="true"
      >
        <rect width="40" height="40" fill="#012169" />
        <path d="M-10,0 L50,40 M50,0 L-10,40" stroke="#FFFFFF" strokeWidth="7" />
        <path d="M-10,0 L50,40 M50,0 L-10,40" stroke="#C8102E" strokeWidth="4" />
        <path d="M20,0 V40 M-10,20 H50" stroke="#FFFFFF" strokeWidth="11" />
        <path d="M20,0 V40 M-10,20 H50" stroke="#C8102E" strokeWidth="6.5" />
      </svg>
    );
  }
  if (lang === 'fr') {
    // Circular France Tricolore flag SVG
    return (
      <svg
        viewBox="0 0 40 40"
        className={`${className} rounded-full overflow-hidden shrink-0 ring-1 ring-slate-900/10 dark:ring-white/15`}
        aria-hidden="true"
      >
        <rect width="13.34" height="40" x="0" fill="#002395" />
        <rect width="13.34" height="40" x="13.33" fill="#FFFFFF" />
        <rect width="13.34" height="40" x="26.66" fill="#ED2939" />
      </svg>
    );
  }
  // Circular Iran Tricolore flag SVG
  return (
    <svg
      viewBox="0 0 40 40"
      className={`${className} rounded-full overflow-hidden shrink-0 ring-1 ring-slate-900/10 dark:ring-white/15`}
      aria-hidden="true"
    >
      <rect width="40" height="13.34" y="0" fill="#239F40" />
      <rect width="40" height="13.34" y="13.33" fill="#FFFFFF" />
      <rect width="40" height="13.34" y="26.66" fill="#DA0000" />
      <circle cx="20" cy="20" r="3.6" fill="none" stroke="#DA0000" strokeWidth="1.3" />
      <line x1="20" y1="16.2" x2="20" y2="23.8" stroke="#DA0000" strokeWidth="1.2" />
    </svg>
  );
};

const LANGUAGE_CODES: Language[] = ['en', 'fr', 'fa'];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const heroNameEl = document.getElementById('hero-name');
      if (heroNameEl) {
        const rect = heroNameEl.getBoundingClientRect();
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

  // Close language dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
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
        <div className="w-[130px] h-[34px] flex items-center">
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
            <MorphText text={t.hero.name} className="whitespace-nowrap" />
          </a>
        </div>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <a
            href="#projects"
            className="hover:text-blue-600 dark:hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <MorphText text={t.navbar.projects} />
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-blue-500 rounded"
          >
            <MorphText text={t.navbar.about} />
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600 dark:hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-blue-500 rounded"
          >
            <MorphText text={t.navbar.skills} />
          </a>
          <a
            href="#journey"
            className="hover:text-blue-600 dark:hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-blue-500 rounded"
          >
            <MorphText text={t.navbar.journey} />
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-blue-500 rounded"
          >
            <MorphText text={t.navbar.contact} />
          </a>
        </nav>

        {/* Zone 3: Actions, Controls & Corner Circular Flag Dropdown */}
        <div className="flex items-center gap-2 sm:gap-2.5">
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
            <MorphText text={t.navbar.resume} className="!text-white" />
          </a>

          {/* Circular Flag-Only Dropdown at the Corner of the Header */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 p-1.5 text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-full transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Select language"
              aria-expanded={langDropdownOpen}
              aria-haspopup="listbox"
            >
              <FlagIcon lang={language} className="w-5 h-5" />
              <ChevronDown
                className={`w-3 h-3 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                  langDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {langDropdownOpen && (
              <div
                role="listbox"
                aria-label="Language options"
                className="absolute right-0 mt-2 p-1.5 bg-white dark:bg-[#0e1017] border border-slate-200 dark:border-white/10 rounded-full shadow-xl flex flex-col items-center gap-1.5 z-50 animate-fadeIn"
              >
                {LANGUAGE_CODES.map((code) => {
                  const isActive = language === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onClick={() => {
                        setLangDropdownOpen(false);
                        setLanguage(code);
                      }}
                      className={`flex items-center justify-center p-1 rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        isActive
                          ? 'ring-2 ring-blue-500 scale-105'
                          : 'hover:bg-slate-100 dark:hover:bg-white/10 opacity-75 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      <FlagIcon lang={code} className="w-6 h-6" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

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
            <MorphText text={t.navbar.projects} />
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
          >
            <MorphText text={t.navbar.about} />
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
          >
            <MorphText text={t.navbar.skillsAndStack} />
          </a>
          <a
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
          >
            <MorphText text={t.navbar.journeyAndBackground} />
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
          >
            <MorphText text={t.navbar.contact} />
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
              <MorphText text={t.navbar.downloadResume} className="!text-white" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="text-xs text-slate-600 dark:text-slate-400 font-mono py-2 px-3 border border-slate-200 dark:border-white/10 rounded-lg bg-slate-50 dark:bg-white/5"
            >
              <MorphText text={t.navbar.commands} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


