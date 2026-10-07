import React, { useEffect, useRef, useState, useCallback } from 'react';

export type FoodType = 'default' | 'chicken' | 'pizza' | 'burger' | 'soda';

interface FoodItem {
  id: FoodType;
  label: string;
  emoji: string;
  badge: string;
}

const FOOD_ITEMS: FoodItem[] = [
  { id: 'default', label: 'Regular Cursor', emoji: '↖', badge: 'Normal' },
  { id: 'chicken', label: 'Chicken Leg', emoji: '🍗', badge: 'Crispy' },
  { id: 'pizza', label: 'Pizza Slice', emoji: '🍕', badge: 'Cheesy' },
  { id: 'burger', label: 'Burger', emoji: '🍔', badge: 'Juicy' },
  { id: 'soda', label: 'Soda (Fizzy)', emoji: '🥤', badge: 'Burp Alert!' },
];

const generateEmojiCursorUrl = (emoji: string): string => {
  if (typeof document === 'undefined') return 'auto';
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 36;
    canvas.height = 36;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, 36, 36);
      ctx.font = '28px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emoji, 18, 18);
      const dataUrl = canvas.toDataURL('image/png');
      return `url("${dataUrl}") 8 8, auto`;
    }
  } catch {
    // Fallback if canvas fails
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><text x="18" y="27" font-size="26" text-anchor="middle">${emoji}</text></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 8 8, auto`;
};

const playCartoonBlurpSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(75, now + 0.35);
    osc.frequency.linearRampToValueAtTime(55, now + 0.7);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(550, now);
    filter.frequency.exponentialRampToValueAtTime(220, now + 0.7);
    filter.Q.setValueAtTime(3, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.08);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.75);
  } catch {
    // Graceful fallback if Web Audio is restricted
  }
};

type MonsterState = 'idle' | 'hungry' | 'eating' | 'chewing' | 'spitting';

interface NomNomMonsterProps {
  className?: string;
}

export const NomNomMonster: React.FC<NomNomMonsterProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFood, setSelectedFood] = useState<FoodType>('default');
  const [monsterState, setMonsterState] = useState<MonsterState>('idle');
  const [pupilOffset, setPupilOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [spitProgress, setSpitProgress] = useState<number>(0);
  const [spawnedCursor, setSpawnedCursor] = useState<{ x: number; y: number; food: FoodType } | null>(null);
  const [isCooldown, setIsCooldown] = useState<boolean>(false);
  const [isBlurping, setIsBlurping] = useState<boolean>(false);

  const chewTimerRef = useRef<number | null>(null);
  const cooldownTimerRef = useRef<number | null>(null);
  const blurpTimerRef = useRef<number | null>(null);
  const isCooldownRef = useRef<boolean>(false);
  const lastEatenFoodRef = useRef<FoodType>('default');
  const selectedFoodRef = useRef<FoodType>('default');

  useEffect(() => {
    selectedFoodRef.current = selectedFood;
  }, [selectedFood]);

  const applyCustomCursor = useCallback((food: FoodType) => {
    const existing = document.getElementById('nomnom-custom-cursor');
    if (food === 'default') {
      if (existing) existing.remove();
      return;
    }

    const item = FOOD_ITEMS.find((f) => f.id === food);
    if (!item) return;

    const cursorValue = generateEmojiCursorUrl(item.emoji);
    let styleEl = existing as HTMLStyleElement;
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'nomnom-custom-cursor';
      document.head.appendChild(styleEl);
    }
    styleEl.innerHTML = `*, *::before, *::after, html, body { cursor: ${cursorValue} !important; }`;
  }, []);

  const handleSelectFood = (food: FoodType) => {
    setSelectedFood(food);
    applyCustomCursor(food);
  };

  const hideGlobalCursor = useCallback(() => {
    let styleEl = document.getElementById('nomnom-hide-cursor') as HTMLStyleElement;
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'nomnom-hide-cursor';
      styleEl.innerHTML = '*, *::before, *::after, html, body { cursor: none !important; }';
      document.head.appendChild(styleEl);
    }
  }, []);

  const restoreGlobalCursor = useCallback(() => {
    const styleEl = document.getElementById('nomnom-hide-cursor');
    if (styleEl) {
      styleEl.remove();
    }
    setSpawnedCursor(null);
  }, []);

  useEffect(() => {
    return () => {
      restoreGlobalCursor();
      const customCursorStyle = document.getElementById('nomnom-custom-cursor');
      if (customCursorStyle) customCursorStyle.remove();

      if (chewTimerRef.current) clearTimeout(chewTimerRef.current);
      if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current);
      if (blurpTimerRef.current) clearTimeout(blurpTimerRef.current);
    };
  }, [restoreGlobalCursor]);

  const spitTarget = { x: -65, y: -25 };

  const triggerSpit = useCallback(() => {
    setMonsterState('spitting');
    setSpitProgress(0);

    const eatenFood = lastEatenFoodRef.current;
    const startTime = performance.now();
    const duration = 500;

    const animateSpit = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      setSpitProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(animateSpit);
      } else {
        setMonsterState('idle');
        setSpawnedCursor({ x: spitTarget.x, y: spitTarget.y, food: eatenFood });

        if (eatenFood === 'soda') {
          setIsBlurping(true);
          playCartoonBlurpSound();
          if (blurpTimerRef.current) clearTimeout(blurpTimerRef.current);
          blurpTimerRef.current = window.setTimeout(() => {
            setIsBlurping(false);
          }, 2400);
        }

        isCooldownRef.current = true;
        setIsCooldown(true);

        if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current);
        cooldownTimerRef.current = window.setTimeout(() => {
          isCooldownRef.current = false;
          setIsCooldown(false);
        }, 3000);
      }
    };

    requestAnimationFrame(animateSpit);
  }, [spitTarget.x, spitTarget.y]);

  const eatCursor = useCallback(() => {
    if (isCooldownRef.current) return;

    lastEatenFoodRef.current = selectedFoodRef.current;

    setMonsterState('eating');
    hideGlobalCursor();

    setTimeout(() => {
      setMonsterState('chewing');

      if (chewTimerRef.current) clearTimeout(chewTimerRef.current);
      chewTimerRef.current = window.setTimeout(() => {
        triggerSpit();
      }, 3000);
    }, 150);
  }, [hideGlobalCursor, triggerSpit]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spawnedCursor) {
        restoreGlobalCursor();
      }

      if (!containerRef.current) return;
      if (monsterState === 'chewing' || monsterState === 'spitting' || monsterState === 'eating') return;

      const rect = containerRef.current.getBoundingClientRect();
      const mouthCenterX = rect.left + rect.width / 2;
      const mouthCenterY = rect.top + rect.height * 0.65;

      const dx = e.clientX - mouthCenterX;
      const dy = e.clientY - mouthCenterY;
      const distance = Math.hypot(dx, dy);

      const maxEyeOffset = 5.5;
      const angle = Math.atan2(dy, dx);
      const eyeDist = Math.min(maxEyeOffset, distance * 0.04);
      setPupilOffset({
        x: Math.cos(angle) * eyeDist,
        y: Math.sin(angle) * eyeDist,
      });

      if (isCooldownRef.current) {
        setMonsterState('idle');
        return;
      }

      if (distance < 45) {
        eatCursor();
      } else if (distance < 130) {
        setMonsterState('hungry');
      } else {
        setMonsterState('idle');
      }
    };

    const handleMouseLeave = () => {
      if (monsterState === 'chewing' || monsterState === 'eating') {
        restoreGlobalCursor();
        setMonsterState('idle');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        restoreGlobalCursor();
        setMonsterState('idle');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [monsterState, spawnedCursor, eatCursor, restoreGlobalCursor]);

  const lastEatenObj = FOOD_ITEMS.find((f) => f.id === lastEatenFoodRef.current) || FOOD_ITEMS[0];

  return (
    <div className={`p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#0d0f17]/80 border border-slate-300 dark:border-white/10 shadow-sm space-y-4 ${className}`}>
      {/* Main Container: Monster on Left, Food Buttons on Right with distance */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 pt-1">
        
        {/* Left Side: Nom Nom's Feeding Bay */}
        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 shrink-0 w-full sm:w-48 relative min-h-[145px]">
          
          {/* Soda Blurp Floating Comic Notification */}
          {isBlurping && (
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-50 animate-bounce pointer-events-none whitespace-nowrap">
              <div className="px-2.5 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-mono text-xs font-black shadow-lg border border-cyan-300 flex items-center gap-1">
                <span>*BLURP!!*</span>
                <span className="animate-spin text-sm">🫧</span>
              </div>
            </div>
          )}

          {/* Floating Fizzy Carbonation Bubbles during Soda Blurp */}
          {isBlurping && (
            <div className="absolute inset-0 pointer-events-none overflow-visible">
              <span className="absolute left-[38%] top-[35%] text-base animate-floatBubble" style={{ animationDelay: '0ms' }}>
                🫧
              </span>
              <span className="absolute left-[54%] top-[30%] text-sm animate-floatBubble" style={{ animationDelay: '150ms' }}>
                🫧
              </span>
              <span className="absolute left-[26%] top-[40%] text-xs animate-floatBubble" style={{ animationDelay: '300ms' }}>
                🫧
              </span>
              <span className="absolute left-[62%] top-[42%] text-base animate-floatBubble" style={{ animationDelay: '450ms' }}>
                🫧
              </span>
            </div>
          )}

          {/* The Blue Monster */}
          <div
            ref={containerRef}
            onClick={() => eatCursor()}
            onTouchStart={() => eatCursor()}
            title="Tap to feed Nom Nom!"
            className={`relative z-30 select-none pointer-events-auto cursor-pointer transition-transform ${
              isBlurping ? 'animate-blurpWobble' : ''
            }`}
            style={{
              transform: monsterState === 'chewing' ? 'translateY(-2px)' : 'translateY(0)',
            }}
          >
            {/* SVG Character Model (Blue Om Nom Style) */}
            <svg
              width="82"
              height="82"
              viewBox="0 0 100 100"
              className={`overflow-visible transition-transform duration-200 ${
                monsterState === 'chewing'
                  ? 'animate-chew'
                  : monsterState === 'hungry'
                  ? 'scale-105'
                  : isCooldown
                  ? 'opacity-90'
                  : ''
              }`}
            >
              <defs>
                <radialGradient id="nomNomBlue" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="60%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </radialGradient>

                <linearGradient id="nomNomBelly" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#93c5fd" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>

                <radialGradient id="mouthInterior" cx="50%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="70%" stopColor="#881337" />
                  <stop offset="100%" stopColor="#4c0519" />
                </radialGradient>
              </defs>

              <path
                d="M 50,22 Q 48,10 52,5 Q 56,10 52,22 Z"
                fill="#1d4ed8"
                stroke="#1e40af"
                strokeWidth="1.5"
                className={monsterState === 'hungry' ? 'animate-wiggle' : ''}
              />
              <circle cx="52" cy="5" r="4" fill="#38bdf8" />

              <ellipse cx="28" cy="88" rx="9" ry="5.5" fill="#1e40af" />
              <ellipse cx="72" cy="88" rx="9" ry="5.5" fill="#1e40af" />

              <path
                d="M 22,86 C 6,86 4,45 20,28 C 34,14 66,14 80,28 C 96,45 94,86 78,86 C 62,88 38,88 22,86 Z"
                fill="url(#nomNomBlue)"
                stroke="#1e3a8a"
                strokeWidth="2"
              />

              <ellipse cx="50" cy="74" rx="20" ry="12" fill="url(#nomNomBelly)" opacity="0.65" />

              <g id="eyes">
                <circle cx="36" cy="36" r="14" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
                <circle cx="64" cy="36" r="14" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />

                {monsterState === 'chewing' || isBlurping ? (
                  <>
                    <path d="M 26,37 Q 36,28 46,37" stroke="#1e3a8a" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 54,37 Q 64,28 74,37" stroke="#1e3a8a" strokeWidth="3" fill="none" strokeLinecap="round" />
                    {isBlurping && (
                      <>
                        <ellipse cx="22" cy="46" rx="5" ry="3" fill="#f43f5e" opacity="0.6" />
                        <ellipse cx="78" cy="46" rx="5" ry="3" fill="#f43f5e" opacity="0.6" />
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <circle
                      cx={36 + pupilOffset.x}
                      cy={36 + pupilOffset.y}
                      r={monsterState === 'hungry' ? 7.5 : 6}
                      fill="#0f172a"
                    />
                    <circle
                      cx={34 + pupilOffset.x}
                      cy={34 + pupilOffset.y}
                      r="2.2"
                      fill="#ffffff"
                    />

                    <circle
                      cx={64 + pupilOffset.x}
                      cy={36 + pupilOffset.y}
                      r={monsterState === 'hungry' ? 7.5 : 6}
                      fill="#0f172a"
                    />
                    <circle
                      cx={62 + pupilOffset.x}
                      cy={34 + pupilOffset.y}
                      r="2.2"
                      fill="#ffffff"
                    />
                  </>
                )}
              </g>

              <g id="mouth">
                {monsterState === 'hungry' ? (
                  <>
                    <ellipse cx="50" cy="62" rx="24" ry="17" fill="url(#mouthInterior)" stroke="#1e3a8a" strokeWidth="2" />
                    <path d="M 38,68 Q 50,60 62,68 Q 50,78 38,68 Z" fill="#f43f5e" />
                    <polygon points="40,46 44,53 48,46" fill="#ffffff" />
                    <polygon points="52,46 56,53 60,46" fill="#ffffff" />
                    <polygon points="43,77 47,70 51,77" fill="#ffffff" />
                    <polygon points="49,77 53,70 57,77" fill="#ffffff" />
                  </>
                ) : monsterState === 'chewing' ? (
                  <>
                    <path
                      d="M 36,63 Q 50,71 64,63"
                      stroke="#1e3a8a"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx="34" cy="58" r="1.5" fill="#38bdf8" className="animate-ping" />
                    <circle cx="66" cy="66" r="1.5" fill="#38bdf8" className="animate-ping" />
                  </>
                ) : monsterState === 'spitting' ? (
                  <>
                    <circle cx="50" cy="63" r="11" fill="url(#mouthInterior)" stroke="#1e3a8a" strokeWidth="2.5" />
                    <ellipse cx="50" cy="65" rx="6" ry="4" fill="#f43f5e" />
                  </>
                ) : isBlurping ? (
                  <>
                    <ellipse cx="50" cy="64" rx="14" ry="9" fill="url(#mouthInterior)" stroke="#1e3a8a" strokeWidth="2" />
                    <ellipse cx="50" cy="66" rx="8" ry="4" fill="#f43f5e" />
                  </>
                ) : (
                  <>
                    <path
                      d="M 38,59 Q 50,67 62,59"
                      stroke="#1e3a8a"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <polygon points="44,59 47,64 50,60" fill="#ffffff" />
                    <polygon points="50,60 53,64 56,59" fill="#ffffff" />
                  </>
                )}
              </g>

              <ellipse cx="36" cy="85" rx="7" ry="4" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
              <ellipse cx="64" cy="85" rx="7" ry="4" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            </svg>

            {monsterState === 'spitting' && (
              <div
                className="absolute pointer-events-none z-50 transition-transform"
                style={{
                  left: `${38 + (spitTarget.x - 38) * spitProgress}px`,
                  top: `${30 + (spitTarget.y - 30) * spitProgress - Math.sin(spitProgress * Math.PI) * 45}px`,
                  transform: `rotate(${-spitProgress * 540}deg) scale(${1 + (1 - spitProgress) * 0.4})`,
                  opacity: 1,
                }}
              >
                {lastEatenObj.id === 'default' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
                    <path
                      d="M4 2L20 10L12 12L10 20L4 2Z"
                      fill="#ffffff"
                      stroke="#0f172a"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span className="text-2xl drop-shadow-md select-none">{lastEatenObj.emoji}</span>
                )}
              </div>
            )}

            {spawnedCursor && (
              <div
                className="absolute pointer-events-none z-50 animate-bounce"
                style={{
                  left: `${spawnedCursor.x}px`,
                  top: `${spawnedCursor.y}px`,
                }}
              >
                {spawnedCursor.food === 'default' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                    <path
                      d="M4 2L20 10L12 12L10 20L4 2Z"
                      fill="#ffffff"
                      stroke="#0f172a"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span className="text-2xl drop-shadow-lg select-none">
                    {FOOD_ITEMS.find((f) => f.id === spawnedCursor.food)?.emoji || '🍗'}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Food Selector Buttons with distance */}
        <div className="flex-1 w-full space-y-3">
          {/* Grid of Food Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {FOOD_ITEMS.map((item) => {
              const isActive = selectedFood === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectFood(item.id)}
                  type="button"
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all group ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-700 dark:text-cyan-300 ring-2 ring-blue-500/20 shadow-sm'
                      : 'bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5'
                  }`}
                >
                  <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate">{item.label}</div>
                    <div
                      className={`text-[10px] font-mono truncate ${
                        isActive
                          ? 'text-blue-600 dark:text-cyan-400 font-semibold'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
