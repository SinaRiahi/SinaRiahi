import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

export const TimeTravelCalendar: React.FC = () => {
  // Date boundary: from June 30, 2026 (graduation/present) down to September 1, 2022 (entering university)
  const startDate = useMemo(() => new Date(2026, 5, 30).getTime(), []); // June 30, 2026
  const endDate = useMemo(() => new Date(2022, 8, 1).getTime(), []);   // Sept 1, 2022
  const totalTimeSpan = startDate - endDate;

  const [currentTimestamp, setCurrentTimestamp] = useState<number>(startDate);
  const [scrollDirection, setScrollDirection] = useState<'rewind' | 'forward'>('rewind');
  const [isInTimeline, setIsInTimeline] = useState<boolean>(false);
  const [floatOffset, setFloatOffset] = useState<number>(0);

  const lastScrollY = useRef<number>(0);
  const targetTimestamp = useRef<number>(startDate);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const section = document.getElementById('journey');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Section is in view
      const isVisible = rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.1;
      setIsInTimeline(isVisible);

      if (!isVisible) return;

      // Calculate scroll progress through the timeline section
      const totalSectionHeight = rect.height;
      const startTrigger = viewportHeight * 0.6;
      const scrolled = startTrigger - rect.top;
      const maxScroll = totalSectionHeight + viewportHeight * 0.2;
      const rawProgress = Math.max(0, Math.min(1, scrolled / maxScroll));

      // Scrolling DOWN -> moving backwards in time from 2026 to 2022
      targetTimestamp.current = startDate - rawProgress * totalTimeSpan;

      // Subtle dynamic float offset that moves the calendar slightly with scrolls
      const floatY = Math.sin(rawProgress * Math.PI) * 24;
      setFloatOffset(floatY);

      // Detect scroll delta direction
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollY.current;

      if (deltaY > 1) {
        setScrollDirection('rewind');
      } else if (deltaY < -1) {
        setScrollDirection('forward');
      }

      lastScrollY.current = currentY;
    };

    // Smooth lerp loop for fluid month and year gliding
    const smoothUpdate = () => {
      setCurrentTimestamp((prev) => {
        const diff = targetTimestamp.current - prev;
        if (Math.abs(diff) < 1000) return targetTimestamp.current;
        return prev + diff * 0.12;
      });
      animFrameId.current = requestAnimationFrame(smoothUpdate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animFrameId.current = requestAnimationFrame(smoothUpdate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [startDate, endDate, totalTimeSpan]);

  const simulatedDate = useMemo(() => new Date(currentTimestamp), [currentTimestamp]);
  const year = simulatedDate.getFullYear();
  const monthName = simulatedDate.toLocaleString('default', { month: 'long' });

  if (!isInTimeline) return null;

  return (
    <div
      style={{ transform: `translateY(${floatOffset}px)` }}
      className="w-full max-w-[280px] sm:max-w-[320px] mx-auto select-none transition-transform duration-300 ease-out animate-fadeIn"
    >
      {/* Calendar Card Container */}
      <div className="relative rounded-2xl bg-white dark:bg-[#0c0f17] border border-blue-500/20 dark:border-blue-400/20 shadow-xl dark:shadow-blue-950/20 overflow-hidden">
        
        {/* Dual Metallic Ring Binder Loops */}
        <div className="absolute top-0 left-0 right-0 h-4 flex justify-around px-10 pointer-events-none z-20">
          <div className="w-3.5 h-5 -mt-2 rounded-full bg-gradient-to-b from-slate-300 via-white to-slate-400 dark:from-slate-700 dark:via-slate-500 dark:to-slate-800 shadow-md border border-slate-300 dark:border-slate-600" />
          <div className="w-3.5 h-5 -mt-2 rounded-full bg-gradient-to-b from-slate-300 via-white to-slate-400 dark:from-slate-700 dark:via-slate-500 dark:to-slate-800 shadow-md border border-slate-300 dark:border-slate-600" />
        </div>

        {/* Top Header: Website Matching Blue Banner */}
        <div className="pt-5 pb-3 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white relative shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-blue-100" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-100">
                Timeline Archive
              </span>
            </div>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
              {scrollDirection === 'rewind' ? '⏪ Rewinding' : '⏩ Advancing'}
            </span>
          </div>
        </div>

        {/* Main Display: Smooth Animated Month & Year */}
        <div className="p-6 text-center bg-white dark:bg-[#0c0f17] space-y-2">
          
          {/* Animated Month Name */}
          <div className="relative h-10 overflow-hidden flex items-center justify-center">
            <div
              key={monthName}
              className={`font-mono text-sm sm:text-base font-bold tracking-wider uppercase text-blue-600 dark:text-cyan-400 transition-all duration-300 transform ${
                scrollDirection === 'rewind'
                  ? 'animate-slideDown'
                  : 'animate-slideUp'
              }`}
            >
              {monthName}
            </div>
          </div>

          {/* Animated Year Number */}
          <div className="relative h-16 overflow-hidden flex items-center justify-center">
            <div
              key={year}
              className={`text-5xl sm:text-6xl font-black font-mono tracking-tight text-slate-900 dark:text-white transition-all duration-300 transform drop-shadow-sm ${
                scrollDirection === 'rewind'
                  ? 'animate-slideDown'
                  : 'animate-slideUp'
              }`}
            >
              {year}
            </div>
          </div>

          {/* Subtle bottom detail */}
          <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-slate-600 dark:text-slate-400 font-medium">
            <span>2026</span>
            <span className="mx-2 text-blue-500">· · ·</span>
            <span>2022</span>
          </div>

        </div>

      </div>
    </div>
  );
};
