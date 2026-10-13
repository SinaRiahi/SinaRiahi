import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
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

const CONFIRMATION_SENTENCE = "I hereby irrevocably declare and authorize the unconditional deletion of this domain.";

type DestroyStep =
  | 'idle'
  | 'confirm_yn'
  | 'confirm_sentence'
  | 'ask_bird'
  | 'why_bird'
  | 'define_bird'
  | 'match_definition'
  | 'is_the_word'
  | 'loading';

const FakeLoadingOneHour: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 3600) {
          clearInterval(timer);
          return 3600;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const total = 3600;
  const isFinished = seconds >= total;
  const percent = ((seconds / total) * 100).toFixed(2);

  const formatTime = (s: number) => {
    const hh = String(Math.floor(s / 3600)).padStart(2, '0');
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  };

  const totalBlocks = 24;
  const filledBlocks = Math.floor((seconds / total) * totalBlocks);
  const bar = '█'.repeat(filledBlocks) + '░'.repeat(totalBlocks - filledBlocks);

  return (
    <div className="space-y-2 py-2 font-mono">
      <div className="text-cyan-400">Purging core filesystem and server clusters...</div>
      <div className="text-xs">
        <span className="text-blue-400">[{bar}]</span>{' '}
        <span className="text-emerald-400 font-bold">{percent}%</span>
      </div>
      <div className="text-[11px] text-slate-400 flex items-center gap-4">
        <span>Elapsed: {formatTime(seconds)} / 01:00:00</span>
        <span>Remaining: {formatTime(Math.max(0, total - seconds))}</span>
      </div>
      {isFinished ? (
        <div className="text-red-500 font-bold text-sm tracking-wider uppercase mt-3">
          permission denied
        </div>
      ) : (
        <div className="text-[11px] text-amber-400/80 italic">
          [Process running. Estimated time to completion: 1 hour]
        </div>
      )}
    </div>
  );
};

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const { setAccent } = useTheme();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [destroyStep, setDestroyStep] = useState<DestroyStep>('idle');
  const [birdName, setBirdName] = useState<string>('bird');
  const [pasteWarning, setPasteWarning] = useState<boolean>(false);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'sys.init',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400">Welcome to Sina Riahi's Developer Console (v1.0.0)</p>
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

    // Global escape commands during any active destroy prompt
    if (cmd.toLowerCase() === 'exit') {
      onClose();
      return;
    }
    if (cmd.toLowerCase() === 'clear') {
      setLogs([]);
      setInput('');
      setDestroyStep('idle');
      return;
    }

    // Interactive Destroy Protocol Steps
    if (destroyStep === 'confirm_yn') {
      let response: React.ReactNode = '';
      if (cmd.toLowerCase() === 'y' || cmd.toLowerCase() === 'yes') {
        setDestroyStep('confirm_sentence');
        response = (
          <div className="space-y-2 text-slate-200">
            <p className="text-amber-400 font-semibold">Security Clearance Level 1 Passed.</p>
            <p className="text-slate-300">Type the following confirmation sentence exactly (copy-paste is disabled):</p>
            <div 
              className="select-none pointer-events-none text-amber-300 font-bold bg-amber-950/40 p-2.5 rounded border border-amber-500/30 font-mono tracking-wide"
              style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
              onCopy={(e) => e.preventDefault()}
            >
              "{CONFIRMATION_SENTENCE}"
            </div>
          </div>
        );
      } else {
        setDestroyStep('idle');
        response = <p className="text-emerald-400">Destruction aborted. All systems remain intact.</p>;
      }
      setLogs((prev) => [...prev, { command: cmd, output: response }]);
      setInput('');
      return;
    }

    if (destroyStep === 'confirm_sentence') {
      let response: React.ReactNode = '';
      const cleanInput = cmd.replace(/^["']|["']$/g, '').trim().toLowerCase();
      const cleanTarget = CONFIRMATION_SENTENCE.toLowerCase();

      if (cleanInput === cleanTarget) {
        setDestroyStep('ask_bird');
        response = (
          <div className="space-y-1 text-slate-200">
            <p className="text-emerald-400 font-semibold">Verification passed.</p>
            <p className="text-cyan-400 font-bold">Please enter the name of a bird:</p>
          </div>
        );
      } else {
        response = (
          <div className="space-y-2 text-red-400">
            <p className="font-semibold">Sentence mismatch! You must type it out manually and exactly (copy-paste is disabled):</p>
            <div 
              className="select-none pointer-events-none text-amber-300 font-bold bg-amber-950/40 p-2.5 rounded border border-amber-500/30 font-mono tracking-wide"
              style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
              onCopy={(e) => e.preventDefault()}
            >
              "{CONFIRMATION_SENTENCE}"
            </div>
          </div>
        );
      }
      setLogs((prev) => [...prev, { command: cmd, output: response }]);
      setInput('');
      return;
    }

    if (destroyStep === 'ask_bird') {
      const selectedBird = cmd.trim() || 'pigeon';
      setBirdName(selectedBird);
      setDestroyStep('why_bird');
      const response = <p className="text-cyan-400 font-medium">Why is a {selectedBird} a bird?</p>;
      setLogs((prev) => [...prev, { command: cmd, output: response }]);
      setInput('');
      return;
    }

    if (destroyStep === 'why_bird') {
      setDestroyStep('define_bird');
      const response = <p className="text-cyan-400 font-medium">Define {birdName}:</p>;
      setLogs((prev) => [...prev, { command: cmd, output: response }]);
      setInput('');
      return;
    }

    if (destroyStep === 'define_bird') {
      setDestroyStep('match_definition');
      const response = <p className="text-cyan-400 font-medium">Does {birdName} match that definition?</p>;
      setLogs((prev) => [...prev, { command: cmd, output: response }]);
      setInput('');
      return;
    }

    if (destroyStep === 'match_definition') {
      setDestroyStep('is_the_word');
      const response = <p className="text-cyan-400 font-medium">Is {birdName} the word?</p>;
      setLogs((prev) => [...prev, { command: cmd, output: response }]);
      setInput('');
      return;
    }

    if (destroyStep === 'is_the_word') {
      setDestroyStep('loading');
      const response = <FakeLoadingOneHour />;
      setLogs((prev) => [...prev, { command: cmd, output: response }]);
      setInput('');
      return;
    }

    if (destroyStep === 'loading') {
      const response = <p className="text-amber-400 text-xs font-mono">Destruction routine is currently executing. Please wait for completion.</p>;
      setLogs((prev) => [...prev, { command: cmd, output: response }]);
      setInput('');
      return;
    }

    // Standard Terminal Command Evaluation
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
            <p><span className="text-red-400 w-24 inline-block">destroy</span> — System destruction protocol</p>
            <p><span className="text-blue-400 w-24 inline-block">clear</span> — Clear terminal output</p>
            <p><span className="text-blue-400 w-24 inline-block">sudo</span> — Elevate privileges</p>
            <p><span className="text-blue-400 w-24 inline-block">exit</span> — Close terminal</p>
          </div>
        );
        break;

      case 'destroy':
        setDestroyStep('confirm_yn');
        response = (
          <div className="space-y-1 text-amber-300">
            <p className="text-red-400 font-bold">⚠️ CRITICAL WARNING: System destruction sequence triggered.</p>
            <p>Are you sure you want to proceed with total destruction? <span className="text-white font-bold">[y/n]</span></p>
          </div>
        );
        break;

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
        setDestroyStep('idle');
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

      case 'spider':
        setAccent('spider');
        response = (
          <div className="space-y-1 font-mono text-red-400">
            <p className="font-bold text-red-500">🕷️ SPIDER PROTOCOL ACTIVATED</p>
            <p className="text-slate-300">Accent shifted from blue to crimson red across the entire page.</p>
          </div>
        );
        break;

      case 'dragon':
        setAccent('dragon');
        response = (
          <div className="space-y-1 font-mono text-orange-400">
            <p className="font-bold text-orange-500">🐉 DRAGON PROTOCOL ACTIVATED</p>
            <p className="text-slate-300">Accent shifted from blue to solar orange across the entire page.</p>
          </div>
        );
        break;

      case 'rock':
        setAccent('default');
        response = (
          <div className="space-y-1 font-mono text-slate-300">
            <p className="font-bold text-white">🪨 ROCK PROTOCOL ACTIVATED</p>
            <p className="text-slate-400">Reverted custom accents. Default theme styles restored.</p>
          </div>
        );
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
        <div className="flex items-center px-4 py-3 bg-[#11141d] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              type="button"
              className="group relative w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-red-400"
              aria-label="Close terminal"
              title="Close terminal"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-black/80 leading-none">✕</span>
            </button>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-slate-400 text-[11px] ml-2">
              sina@system:~ {destroyStep !== 'idle' ? `(protocol: ${destroyStep})` : '(interactive-shell)'}
            </span>
          </div>
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

        {/* Anti-Paste Warning Notification */}
        {pasteWarning && (
          <div className="px-4 py-2 bg-red-950/90 border-t border-red-500/50 text-red-300 text-[11px] font-mono flex items-center gap-2 animate-pulse">
            <span>🚫</span>
            <span>Security Error: Copy-pasting is strictly prohibited for destruction authorization. You must type the confirmation manually.</span>
          </div>
        )}

        {/* Command Input Prompt */}
        <div className="p-3 bg-[#0d1017] border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 shrink-0">
            {destroyStep === 'idle' ? 'sina@system:~$' : 'confirm@destroy:~$'}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onPaste={(e) => {
              if (destroyStep === 'confirm_sentence') {
                e.preventDefault();
                setPasteWarning(true);
                setTimeout(() => setPasteWarning(false), 3500);
              }
            }}
            placeholder={
              destroyStep === 'idle'
                ? "Type 'help' or command..."
                : destroyStep === 'confirm_sentence'
                ? 'Type the confirmation sentence character-by-character...'
                : 'Type response and press Enter...'
            }
            className="w-full bg-transparent text-white focus:outline-none placeholder-slate-600"
          />
        </div>
      </div>
    </div>
  );
};
