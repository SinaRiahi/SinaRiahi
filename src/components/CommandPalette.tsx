import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SOCIAL_LINKS } from '../data/socials';
import { PROJECTS_DATA } from '../data/projects';
import { Project } from '../types';
import { handleResumeDownload } from '../utils/resume';
import { 
  Search, 
  Terminal, 
  Sun, 
  Moon, 
  FileText, 
  Mail, 
  Compass, 
  Layers, 
  User, 
  Wrench,
  Gamepad2,
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onSelectProject: (p: Project) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Projects' | 'Actions' | 'Developer';
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onSelectProject,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const commands: CommandItem[] = [
    {
      id: 'nav-home',
      title: 'Navigate to Top / Hero',
      category: 'Navigation',
      icon: Compass,
      action: () => {
        window.location.hash = '#home';
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: 'Browse Engineered Projects',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      },
    },
    {
      id: 'nav-about',
      title: 'Read About & Philosophy',
      category: 'Navigation',
      icon: User,
      action: () => {
        window.location.hash = '#about';
        onClose();
      },
    },
    {
      id: 'nav-skills',
      title: 'Inspect Technical Proficiencies',
      category: 'Navigation',
      icon: Wrench,
      action: () => {
        window.location.hash = '#skills';
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Send Contact Message',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        window.location.hash = '#contact';
        onClose();
      },
    },
    {
      id: 'nav-404',
      title: '404 Error Page (Tic-Tac-Toe vs Blue)',
      category: 'Navigation',
      icon: Gamepad2,
      action: () => {
        window.location.hash = '#404';
        onClose();
      },
    },
    {
      id: 'act-theme',
      title: `Toggle Theme (${theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'})`,
      category: 'Actions',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile (@Sinariahi)',
      category: 'Actions',
      icon: GithubIcon,
      action: () => {
        window.open(SOCIAL_LINKS.github, '_blank');
        onClose();
      },
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Actions',
      icon: LinkedinIcon,
      action: () => {
        window.open(SOCIAL_LINKS.linkedin, '_blank');
        onClose();
      },
    },
    {
      id: 'act-instagram',
      title: 'Open Instagram (@sina___riahi)',
      category: 'Actions',
      icon: InstagramIcon,
      action: () => {
        window.open(SOCIAL_LINKS.instagram, '_blank');
        onClose();
      },
    },
    {
      id: 'act-resume',
      title: 'Download Resume (PDF)',
      category: 'Actions',
      icon: FileText,
      action: () => {
        handleResumeDownload();
        onClose();
      },
    },
    {
      id: 'act-terminal',
      title: 'Launch Interactive Developer Terminal (~)',
      category: 'Developer',
      icon: Terminal,
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },
    ...PROJECTS_DATA.map((p) => ({
      id: `proj-${p.id}`,
      title: `Project Case Study: ${p.title} — ${p.subtitle}`,
      category: 'Projects' as const,
      icon: Layers,
      action: () => {
        onClose();
        onSelectProject(p);
      },
    })),
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 dark:bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 p-4">
      <div 
        className="w-full max-w-xl bg-white dark:bg-[#0e1017] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100 animate-fadeIn"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Bar */}
        <div className="flex items-center px-4 border-b border-slate-200 dark:border-white/10 gap-3">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search project..."
            className="w-full py-3.5 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-white/5">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-blue-600 !text-white shadow-sm font-semibold'
                      : 'text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? '!text-white' : 'text-slate-700 dark:text-slate-400'}`} />
                    <span className={`truncate ${isSelected ? '!text-white font-bold' : 'font-semibold'}`}>{cmd.title}</span>
                  </div>
                  <span className={`text-[10px] font-mono shrink-0 ml-2 ${isSelected ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400 font-semibold'}`}>
                    {cmd.category}
                  </span>
                </button>
              );
            })
          ) : (
            <div className="p-6 text-center text-xs text-slate-700 dark:text-slate-400 font-mono font-medium">
              No matching commands or projects found.
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-slate-100/80 dark:bg-white/[0.02] border-t border-slate-300 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-700 dark:text-slate-400 font-semibold">
          <div className="flex items-center gap-2">
            <span>↑↓ Navigate</span>
            <span>·</span>
            <span>↵ Select</span>
            <span>·</span>
            <span>ESC Dismiss</span>
          </div>
          <span className="text-blue-700 dark:text-blue-400 font-bold">⌘K Palette</span>
        </div>
      </div>
    </div>
  );
};
