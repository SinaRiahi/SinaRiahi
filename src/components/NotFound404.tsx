import React, { useState, useEffect } from 'react';
import { Terminal, RotateCcw, Sparkles, AlertCircle, ArrowLeft } from 'lucide-react';
import { Board, checkWinner, findBestMove, GameResult } from '../utils/tictactoeAI';

interface NotFound404Props {
  onReturnHome: () => void;
  onOpenTerminal?: () => void;
}

export const NotFound404: React.FC<NotFound404Props> = ({ onReturnHome, onOpenTerminal }) => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [gameResult, setGameResult] = useState<GameResult>({ winner: null, line: null });
  const [scores, setScores] = useState({ human: 0, ai: 0, draws: 0 });
  const [speechText, setSpeechText] = useState("Make your move! Let's see your strategy.");

  // Check board state after each move
  useEffect(() => {
    const result = checkWinner(board);
    setGameResult(result);

    if (result.winner === 'O') {
      setScores((prev) => ({ ...prev, ai: prev.ai + 1 }));
      setSpeechText("*CHOMP!* Blue wins! Better luck next match!");
    } else if (result.winner === 'X') {
      setScores((prev) => ({ ...prev, human: prev.human + 1 }));
      setSpeechText("Impossible... You beat me! Well played!");
    } else if (result.winner === 'draw') {
      setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
      setSpeechText("Stalemate! A tie game. Well played!");
    }
  }, [board]);

  // Handle human move (Player is always X)
  const handleCellClick = (index: number) => {
    if (board[index] !== null || gameResult.winner !== null || isAiThinking) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const check = checkWinner(newBoard);
    if (check.winner !== null) return;

    // Trigger Blue AI move
    setIsAiThinking(true);
    setSpeechText("Thinking of the best move...");

    // Add brief thinking delay for realistic game pacing
    setTimeout(() => {
      const decision = findBestMove(newBoard, 'O', 'X');
      if (decision.bestMove !== -1) {
        newBoard[decision.bestMove] = 'O';
        setBoard([...newBoard]);
      }
      setIsAiThinking(false);
    }, 450);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setGameResult({ winner: null, line: null });
    setIsAiThinking(false);
    setSpeechText("New match initiated! You go first with X.");
  };

  return (
    <div className="min-h-screen w-full bg-[#08090D] text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[480px] h-[480px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Radial grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: 404 Error Telemetry & Actions */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>404 // RESOURCE_NOT_FOUND</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Lost in Cyberspace?
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              The page, endpoint, or packet you requested does not exist in this sector. But don't panic — Blue the cybernetic monster is guarding this port and challenges you to a duel!
            </p>
          </div>

          {/* Diagnostic Metadata Box */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono text-slate-400">
            <div className="flex items-center justify-between text-slate-300 pb-1 border-b border-white/5">
              <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Diagnostics</span>
              </span>
              <span>Protocol: HTTP/2</span>
            </div>
            <div className="flex justify-between">
              <span>Path:</span>
              <span className="text-cyan-300 font-semibold">{window.location.pathname}</span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-rose-400 font-semibold">404 Unresolved</span>
            </div>
            <div className="flex justify-between">
              <span>Guardian:</span>
              <span className="text-blue-400 font-semibold">Blue</span>
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onReturnHome}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              type="button"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span>Return to Base (Home)</span>
            </button>

            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/[0.15] border border-white/10 text-slate-200 text-xs font-mono transition-colors"
                type="button"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Launch Terminal</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Blue Tic-Tac-Toe Arena */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0c101a]/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl space-y-6">
            
            {/* Blue Character & Speech Area */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/10">
              
              {/* Blue Avatar Mini */}
              <div className="shrink-0 relative">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 100 100"
                  className={`overflow-visible transition-transform duration-200 ${
                    isAiThinking ? 'animate-bounce' : ''
                  }`}
                >
                  <defs>
                    <radialGradient id="nom404Blue" cx="40%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="60%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </radialGradient>
                    <radialGradient id="nom404Mouth" cx="50%" cy="40%" r="55%">
                      <stop offset="0%" stopColor="#dc2626" />
                      <stop offset="70%" stopColor="#881337" />
                      <stop offset="100%" stopColor="#4c0519" />
                    </radialGradient>
                  </defs>

                  {/* Antenna */}
                  <path d="M 50,22 Q 48,10 52,5 Q 56,10 52,22 Z" fill="#1d4ed8" stroke="#1e40af" strokeWidth="1.5" />
                  <circle cx="52" cy="5" r="4" fill="#38bdf8" />

                  {/* Body */}
                  <ellipse cx="28" cy="88" rx="9" ry="5.5" fill="#1e40af" />
                  <ellipse cx="72" cy="88" rx="9" ry="5.5" fill="#1e40af" />
                  <path
                    d="M 22,86 C 6,86 4,45 20,28 C 34,14 66,14 80,28 C 96,45 94,86 78,86 C 62,88 38,88 22,86 Z"
                    fill="url(#nom404Blue)"
                    stroke="#1e3a8a"
                    strokeWidth="2"
                  />

                  {/* Eyes */}
                  <circle cx="36" cy="36" r="14" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
                  <circle cx="64" cy="36" r="14" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
                  <circle cx={isAiThinking ? 38 : 36} cy={isAiThinking ? 38 : 36} r="6" fill="#0f172a" />
                  <circle cx={isAiThinking ? 36 : 34} cy={isAiThinking ? 36 : 34} r="2" fill="#ffffff" />
                  <circle cx={isAiThinking ? 66 : 64} cy={isAiThinking ? 38 : 36} r="6" fill="#0f172a" />
                  <circle cx={isAiThinking ? 64 : 62} cy={isAiThinking ? 36 : 34} r="2" fill="#ffffff" />

                  {/* Mouth */}
                  {gameResult.winner === 'O' ? (
                    <ellipse cx="50" cy="62" rx="20" ry="14" fill="url(#nom404Mouth)" stroke="#1e3a8a" strokeWidth="2" />
                  ) : (
                    <path d="M 38,59 Q 50,67 62,59" stroke="#1e3a8a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  )}
                </svg>

                {isAiThinking && (
                  <span className="absolute -top-1 -right-1 text-xs animate-spin">
                    ⚙️
                  </span>
                )}
              </div>

              {/* Dialogue Balloon */}
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400 font-mono">Blue</span>
                </div>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  "{speechText}"
                </p>
              </div>

            </div>

            {/* Scoreboard */}
            <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20">
                <div className="text-[10px] text-slate-400">YOU (X)</div>
                <div className="text-base font-bold text-cyan-400">{scores.human}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-[10px] text-slate-400">DRAWS</div>
                <div className="text-base font-bold text-slate-300">{scores.draws}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20">
                <div className="text-[10px] text-slate-400">BLUE (O)</div>
                <div className="text-base font-bold text-blue-400">{scores.ai}</div>
              </div>
            </div>

            {/* 3x3 Tic-Tac-Toe Game Board */}
            <div className="relative max-w-[280px] sm:max-w-[320px] mx-auto aspect-square">
              <div className="grid grid-cols-3 grid-rows-3 gap-2.5 h-full w-full">
                {board.map((cell, idx) => {
                  const isWinningCell = gameResult.line?.includes(idx);
                  return (
                    <button
                      key={idx}
                      onClick={() => handleCellClick(idx)}
                      disabled={cell !== null || gameResult.winner !== null || isAiThinking}
                      type="button"
                      className={`relative flex items-center justify-center rounded-xl font-bold text-3xl sm:text-4xl font-mono transition-all duration-200 ${
                        cell === null
                          ? 'bg-black/50 border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.04] cursor-pointer'
                          : isWinningCell
                          ? gameResult.winner === 'X'
                            ? 'bg-emerald-950/70 border-2 border-emerald-400 text-emerald-400 shadow-lg shadow-emerald-500/30 scale-105'
                            : 'bg-rose-950/70 border-2 border-rose-400 text-rose-400 shadow-lg shadow-rose-500/30 scale-105'
                          : cell === 'X'
                          ? 'bg-cyan-950/30 border border-cyan-500/40 text-cyan-400'
                          : 'bg-blue-950/40 border border-blue-500/40 text-blue-400'
                      }`}
                      aria-label={`Slot ${idx + 1}: ${cell || 'Empty'}`}
                    >
                      {cell === 'X' && (
                        <span className="drop-shadow-md animate-scaleUp">X</span>
                      )}
                      {cell === 'O' && (
                        <span className="drop-shadow-md animate-scaleUp">O</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleResetGame}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/[0.15] border border-white/10 text-xs font-semibold text-slate-200 transition-colors"
                type="button"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                <span>Play Again</span>
              </button>

              <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Unbeatable Algorithm</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
