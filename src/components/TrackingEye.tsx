import React, { useEffect, useRef, useState, useCallback } from 'react';

interface TrackingEyeProps {
  interactive?: boolean;
}

export const TrackingEye: React.FC<TrackingEyeProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGlitching, setIsGlitching] = useState<boolean>(false);
  const [glitchShift, setGlitchShift] = useState<{ x: number; y: number; skew: number }>({ x: 0, y: 0, skew: 0 });
  const [pupilScale, setPupilScale] = useState<number>(1);
  const [isDizzy, setIsDizzy] = useState<boolean>(false);

  // Position references for smooth 60fps tracking
  const targetPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const irisRef = useRef<HTMLDivElement>(null);
  const highlight1Ref = useRef<HTMLDivElement>(null);
  const highlight2Ref = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number>(0);

  // Dizziness detection refs
  const isDizzyRef = useRef<boolean>(false);
  const dizzyStartTime = useRef<number>(0);
  const dizzyEndTime = useRef<number>(0);
  const moveHistory = useRef<{ time: number; x: number; y: number }[]>([]);

  // Mouse / Pointer tracker with speed/velocity detection
  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let clientX = 0;
    let clientY = 0;

    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const now = performance.now();

    // Track rapid mouse movement to trigger dizzy effect
    moveHistory.current.push({ time: now, x: clientX, y: clientY });
    // Keep window of movements within the last 1000ms
    moveHistory.current = moveHistory.current.filter((m) => now - m.time < 1000);

    if (moveHistory.current.length >= 6) {
      let totalDist = 0;
      for (let i = 1; i < moveHistory.current.length; i++) {
        totalDist += Math.hypot(
          moveHistory.current[i].x - moveHistory.current[i - 1].x,
          moveHistory.current[i].y - moveHistory.current[i - 1].y
        );
      }

      // Tripled threshold: requires intense frantic mouse movement (> 5700px within 1s)
      if (totalDist > 5700) {
        if (!isDizzyRef.current) {
          isDizzyRef.current = true;
          setIsDizzy(true);
          dizzyStartTime.current = now;
        }
        // Keep dizziness going for 3.2 seconds after frantic movement
        dizzyEndTime.current = Math.max(dizzyEndTime.current, now + 3200);
      }
    }

    // Normal eye tracking calculation
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    // Max displacement inside the eye socket
    const maxRadius = 38;
    const angle = Math.atan2(deltaY, deltaX);
    const radius = Math.min(distance * 0.12, maxRadius);

    targetPos.current = {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };

    // Pupil dilates slightly when pointer is closer
    const scale = Math.max(0.85, Math.min(1.25, 1.25 - distance / 1200));
    setPupilScale(scale);
  }, []);

  useEffect(() => {
    if (!interactive) return;
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchstart', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchstart', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, [interactive, handlePointerMove]);

  // Smooth 60fps animation & dizziness loop
  useEffect(() => {
    const loop = () => {
      const now = performance.now();
      let curX = currentPos.current.x;
      let curY = currentPos.current.y;

      if (isDizzyRef.current) {
        if (now > dizzyEndTime.current) {
          // Dizzy state finishes
          isDizzyRef.current = false;
          setIsDizzy(false);
        } else {
          const elapsed = (now - dizzyStartTime.current) / 1000;
          const timeLeft = Math.max(0, dizzyEndTime.current - now);
          // Smooth decay of orbit radius towards the end
          const intensity = Math.min(1, timeLeft / 800);

          // Wild cartoon dizzy spiral swirl
          const spinSpeed = 9.8;
          const orbitAngle = elapsed * spinSpeed;
          const orbitRadius = (28 + Math.sin(elapsed * 14) * 6) * intensity;

          const dizzyTargetX = Math.cos(orbitAngle) * orbitRadius;
          const dizzyTargetY = Math.sin(orbitAngle) * orbitRadius;

          curX += (dizzyTargetX - curX) * 0.22;
          curY += (dizzyTargetY - curY) * 0.22;
        }
      } else {
        curX += (targetPos.current.x - curX) * 0.12;
        curY += (targetPos.current.y - curY) * 0.12;
      }

      currentPos.current.x = curX;
      currentPos.current.y = curY;

      // Update DOM transforms directly for buttery smooth 60fps tracking
      if (irisRef.current) {
        irisRef.current.style.transform = `translate(${curX}px, ${curY}px)`;
      }
      if (highlight1Ref.current) {
        highlight1Ref.current.style.transform = `translate(${curX * 0.3 - 14}px, ${curY * 0.3 - 16}px)`;
      }
      if (highlight2Ref.current) {
        highlight2Ref.current.style.transform = `translate(${curX * 0.3 - 4}px, ${curY * 0.3 - 4}px)`;
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameId.current);
  }, []);

  // Glitch Distortion Trigger (Activated on Eye Click)
  const triggerGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);

    let glitchCount = 0;
    const glitchInterval = setInterval(() => {
      glitchCount++;
      setGlitchShift({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 14,
        skew: (Math.random() - 0.5) * 12,
      });

      if (glitchCount >= 10) {
        clearInterval(glitchInterval);
        setIsGlitching(false);
        setGlitchShift({ x: 0, y: 0, skew: 0 });
      }
    }, 45);
  };

  // Fixed Cyber Blue Color Theme
  const colors = {
    irisOuter: '#2563eb',
    irisInner: '#06b6d4',
    ring: '#1d4ed8',
    glint: '#ffffff',
    glow: 'rgba(6, 182, 212, 0.45)',
  };

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[440px] flex flex-col items-center justify-center select-none">
      
      {/* Floating Dizzy Overlay Status */}
      {isDizzy && (
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 dark:bg-amber-400/20 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-mono font-medium shadow-lg backdrop-blur-sm animate-bounce z-30 pointer-events-none whitespace-nowrap">
          <span>💫</span>
          <span>Sensors Overloaded! Dizzy...</span>
        </div>
      )}

      {/* Eyeball Housing Unit with Click-to-Glitch */}
      <div 
        ref={containerRef}
        onClick={triggerGlitch}
        className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center cursor-pointer group transition-transform"
        style={{
          width: '320px',
          transform: isGlitching
            ? `translate(${glitchShift.x}px, ${glitchShift.y}px) skewX(${glitchShift.skew}deg)`
            : isDizzy
            ? 'rotate(3deg)'
            : 'none',
          filter: isGlitching
            ? 'contrast(170%) saturate(190%) hue-rotate(45deg) drop-shadow(-5px 0 0 rgba(255,0,80,0.8)) drop-shadow(5px 0 0 rgba(0,255,255,0.8))'
            : 'none',
        }}
        title={isDizzy ? 'Eye is dizzy! Move cursor steadily to recover' : 'Click eye to glitch • Shake cursor fast to make dizzy'}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            triggerGlitch();
          }
        }}
        aria-label="Interactive bionic eye. Click to glitch or shake mouse for dizziness."
      >
        {/* Outer Bionic Orbit Ring / Housing */}
        <div 
          className="absolute inset-0 rounded-full border border-blue-400/30 dark:border-cyan-500/25 transition-all duration-300"
          style={{ boxShadow: `0 0 50px ${colors.glow}` }}
        />

        {/* Orbiting playful dizzy stars when dizzy */}
        {isDizzy && (
          <div className="absolute inset-0 pointer-events-none z-20 animate-spin" style={{ animationDuration: '3s' }}>
            <span className="absolute -top-3 left-1/4 text-lg select-none">✨</span>
            <span className="absolute top-1/2 -right-3 text-lg select-none">💫</span>
            <span className="absolute -bottom-3 right-1/4 text-lg select-none">✦</span>
            <span className="absolute top-1/3 -left-3 text-lg select-none">💫</span>
          </div>
        )}

        {/* The Eyeball (Sclera) with 3D Depth */}
        <div className="relative w-60 h-60 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-gradient-to-b from-white via-slate-100 to-slate-200 dark:from-[#151924] dark:via-[#0e121a] dark:to-[#090b10] shadow-[inset_0_2px_12px_rgba(0,0,0,0.15)] dark:shadow-inner border border-slate-300 dark:border-white/10 flex items-center justify-center">
          
          {/* Sclera Vascular & Shading Layers */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.25)_100%)] pointer-events-none" />

          {/* IRIS & PUPIL ASSEMBLY (Clean & Grid-Free, Smooth 60fps tracking) */}
          <div
            ref={irisRef}
            className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center transition-transform duration-75 ease-out shadow-2xl"
            style={{
              background: `radial-gradient(circle at 40% 40%, ${colors.irisInner} 0%, ${colors.irisOuter} 65%, ${colors.ring} 100%)`,
              boxShadow: `0 0 25px ${colors.glow}, inset 0 0 20px rgba(0,0,0,0.6)`,
            }}
          >
            {/* PUPIL (Dilates & Tracks; Spins comic spiral when dizzy) */}
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#050608] transition-transform duration-100 ease-out flex items-center justify-center shadow-inner relative overflow-hidden"
              style={{
                transform: `scale(${isGlitching ? pupilScale * 1.3 : isDizzy ? 1.2 : pupilScale})`,
              }}
            >
              {isDizzy ? (
                /* Hypnotic dizzy cartoon spiral */
                <svg
                  className="w-10 h-10 text-cyan-400 animate-spin"
                  style={{ animationDuration: '0.8s' }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M12 12 A1.2 1.2 0 0 1 13.2 13.2 A2.4 2.4 0 0 1 10.8 15.6 A3.6 3.6 0 0 1 8.4 12 A4.8 4.8 0 0 1 13.2 7.2 A6 6 0 0 1 18 12 A7.2 7.2 0 0 1 10.8 19.2 A8.4 8.4 0 0 1 3.6 12"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                /* Internal Pupil Sensor Dot */
                <div 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: colors.irisInner, boxShadow: `0 0 8px ${colors.irisInner}`, width: '5px', height: '5px' }}
                />
              )}
            </div>

            {/* Primary Specular Corneal Reflection (Key Light) */}
            <div
              ref={highlight1Ref}
              className="absolute w-5 h-5 rounded-full bg-white opacity-85 blur-[0.6px] pointer-events-none"
              style={{
                transform: 'translate(-14px, -16px)',
                boxShadow: '0 0 8px #ffffff',
              }}
            />

            {/* Secondary Soft Ambient Reflection */}
            <div
              ref={highlight2Ref}
              className="absolute w-2 h-2 rounded-full bg-white opacity-50 blur-[0.4px] pointer-events-none"
              style={{
                transform: 'translate(-4px, -4px)',
              }}
            />
          </div>

          {/* Glitch Scanline Overlay when active */}
          {isGlitching && (
            <div 
              className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5) 2px, transparent 2px, transparent 4px)',
              }}
            />
          )}
        </div>
      </div>

    </div>
  );
};

