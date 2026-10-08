import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/socials';
import { handleResumeDownload } from '../utils/resume';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'sys.init',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400">Welcome to Sina Riahi\'s Developer Console (v1.0.0)</p>
          <p className="text-slate-400">Type <span className="text-blue-400 font-bold">help</span> to view available commands or <span className="text-blue-400 font-bold">exit</span> to close.</p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const parts = cmd.toLowerCase().split(' ');
    const mainCmd = parts[0];
    const arg = parts.slice(1).join(' ');

    let response: React.ReactNode = '';

    switch (mainCmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Available Commands:</p>
            <p><span className="text-blue-400 w-24 inline-block">whoami</span> — Identity and background</p>
            <p><span className="text-blue-400 w-24 inline-block">projects</span> — List engineered projects</p>
            <p><span className="text-blue-400 w-24 inline-block">cat &lt;id&gt;</span> — Inspect project (e.g. cat yadban, cat task-master, cat utilities-suite)</p>
            <p><span className="text-blue-400 w-24 inline-block">skills</span> — Overview of technical proficiencies</p>
            <p><span className="text-blue-400 w-24 inline-block">contact</span> — Reach out via email or GitHub</p>
            <p><span className="text-blue-400 w-24 inline-block">resume</span> — Download engineering resume</p>
            <p><span className="text-blue-400 w-24 inline-block">404</span> — Launch 404 easter egg (Tic-Tac-Toe vs Blue)</p>
            <p><span className="text-blue-400 w-24 inline-block">clear</span> — Clear terminal output</p>
            <p><span className="text-blue-400 w-24 inline-block">sudo</span> — Elevate privileges</p>
            <p><span className="text-blue-400 w-24 inline-block">exit</span> — Close terminal</p>
          </div>
        );
        break;

      case '404':
        window.location.hash = '#404';
        onClose();
        return;

      case 'whoami':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="font-bold text-white">{PERSONAL_INFO.name} — {PERSONAL_INFO.role}</p>
            <p className="text-slate-400">{PERSONAL_INFO.bioShort}</p>
            <p className="text-cyan-400 italic font-mono text-xs mt-1">"{PERSONAL_INFO.learningPhilosophy}"</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Projects in Repository:</p>
            {PROJECTS_DATA.map((p) => (
              <p key={p.id}>
                <span className="text-blue-400 font-mono">[{p.id}]</span>{' '}
                <span className="text-white font-medium">{p.title}</span> — {p.subtitle}
              </p>
            ))}
          </div>
        );
        break;

      case 'cat':
      case 'project':
        if (!arg) {
          response = <p className="text-amber-400">Specify a project id: cat yadban | cat task-master | cat utilities-suite | cat mypal</p>;
        } else {
          const match = PROJECTS_DATA.find(
            (p) => p.id.toLowerCase() === arg || p.title.toLowerCase().includes(arg)
          );
          if (match) {
            response = (
              <div className="space-y-1 text-slate-300">
                <p className="font-bold text-white text-sm">{match.title} ({match.year})</p>
                <p className="text-cyan-400">{match.subtitle}</p>
                <p className="text-slate-400 text-xs mt-1">{match.summary}</p>
                <p className="text-xs text-blue-300 mt-1">Stack: {match.technologies.join(', ')}</p>
              </div>
            );
          } else {
            response = <p className="text-red-400">Project '{arg}' not found. Type 'projects' to list all.</p>;
          }
        }
        break;

      case 'skills':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-bold">Active Stack:</p>
            <p>Python, TypeScript, JavaScript, FastAPI, PostgreSQL, React, Vite, Git/GitHub, Linux, Docker, Cloudflare Workers, Three.js</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-slate-300">
            <p>Email: <span className="text-blue-400">{SOCIAL_LINKS.email}</span></p>
            <p>GitHub: <span className="text-blue-400">{SOCIAL_LINKS.github}</span></p>
          </div>
        );
        break;

      case 'resume':
        response = (
          <div>
            <p className="text-emerald-400">Triggering resume download...</p>
            <p className="text-xs text-slate-400">Path: {SOCIAL_LINKS.resumeUrl}</p>
          </div>
        );
        handleResumeDownload();
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      case 'sudo':
        response = <p className="text-amber-400">Permission granted: You already have full access to explore the codebase.</p>;
        break;

      case 'exit':
        onClose();
        return;

      case 'matrix':
        response = <p className="text-emerald-400 font-mono tracking-widest">01010011 01001001 01001110 01000001 // SYSTEM READY</p>;
        break;

      default:
        response = <p className="text-red-400">Command not recognized: '{cmd}'. Type 'help' for options.</p>;
        break;
    }

    setLogs((prev) => [...prev, { command: cmd, output: response }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (history.length > 0 && historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < history.length) {
          setHistoryIndex(nextIdx);
          setInput(history[nextIdx] || '');
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#090b10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs flex flex-col h-[520px]"
        role="dialog"
        aria-modal="true"
      >
        {/* Terminal Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#11141d] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-slate-400 text-[11px] ml-2">sina@system:~ (interactive-shell)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Logs Output Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-slate-300">
          {logs.map((log, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400">sina@system:~$</span>
                <span className="text-white font-semibold">{log.command}</span>
              </div>
              <div className="pl-4 text-slate-300">{log.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="p-3 bg-[#0d1017] border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 shrink-0">sina@system:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="w-full bg-transparent text-white focus:outline-none placeholder-slate-600"
          />
        </div>
      </div>
    </div>
  );
};
