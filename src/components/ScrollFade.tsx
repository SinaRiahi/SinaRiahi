import React, { useEffect, useRef, useState } from 'react';

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  as?: React.ElementType;
}

export const ScrollFade: React.FC<ScrollFadeProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
  as: Component = 'div',
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [exitDirection, setExitDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
            if (entry.boundingClientRect.top < 0) {
              setExitDirection('up');
            } else {
              setExitDirection('down');
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '-24px 0px -24px 0px',
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const hiddenTransform =
    exitDirection === 'up'
      ? 'opacity-0 -translate-y-5 scale-[0.985]'
      : 'opacity-0 translate-y-6 scale-[0.985]';

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: isVisible && delay > 0 ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : hiddenTransform
      } ${className}`.trim()}
    >
      {children}
    </Component>
  );
};
