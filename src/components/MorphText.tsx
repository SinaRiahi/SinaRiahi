import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface MorphTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  forceLtr?: boolean;
}

export const MorphText: React.FC<MorphTextProps> = ({
  text,
  as: Component = 'span',
  className = '',
  forceLtr = false,
}) => {
  const { isPersian, morphVersion } = useLanguage();
  const shouldRtl = isPersian && !forceLtr;

  // Before any language switch occurs, render clean text with zero span overhead
  if (morphVersion === 0) {
    return (
      <Component
        dir={shouldRtl ? 'rtl' : undefined}
        className={`${shouldRtl ? 'font-persian' : ''} ${className}`.trim()}
      >
        {text}
      </Component>
    );
  }

  // Split into words and whitespace tokens to preserve natural line wrapping
  const tokens = text.split(/(\s+)/);

  if (isPersian) {
    // Persian script uses cursive connected letters; animate word-by-word so ligatures stay intact
    const wordCount = tokens.filter((t) => !/^\s+$/.test(t) && t.length > 0).length;
    const stepMs = Math.min(28, Math.max(8, Math.floor(280 / Math.max(wordCount, 1))));
    let wordIndex = 0;

    return (
      <Component
        key={`${morphVersion}-fa`}
        dir={shouldRtl ? 'rtl' : undefined}
        className={`${shouldRtl ? 'font-persian' : ''} ${className}`.trim()}
        aria-label={text}
      >
        {tokens.map((token, idx) => {
          if (/^\s+$/.test(token) || token.length === 0) {
            return <React.Fragment key={idx}>{token}</React.Fragment>;
          }
          const delay = wordIndex * stepMs;
          wordIndex++;
          return (
            <span
              key={idx}
              aria-hidden="true"
              className="inline-block animate-wave-flip"
              style={{ animationDelay: `${delay}ms` }}
            >
              {token}
            </span>
          );
        })}
      </Component>
    );
  }

  // For English & French: animate letter-by-letter inside non-breaking word wrappers for short/medium copy,
  // or word-by-word for long paragraphs (> 110 chars) to keep 60fps compositor performance.
  const isLongParagraph = text.length > 110;

  if (isLongParagraph) {
    const wordCount = tokens.filter((t) => !/^\s+$/.test(t) && t.length > 0).length;
    const stepMs = Math.min(22, Math.max(6, Math.floor(280 / Math.max(wordCount, 1))));
    let wordIndex = 0;

    return (
      <Component
        key={`${morphVersion}-latin-words`}
        className={className}
        aria-label={text}
      >
        {tokens.map((token, idx) => {
          if (/^\s+$/.test(token) || token.length === 0) {
            return <React.Fragment key={idx}>{token}</React.Fragment>;
          }
          const delay = wordIndex * stepMs;
          wordIndex++;
          return (
            <span
              key={idx}
              aria-hidden="true"
              className="inline-block animate-wave-flip"
              style={{ animationDelay: `${delay}ms` }}
            >
              {token}
            </span>
          );
        })}
      </Component>
    );
  }

  const totalChars = text.replace(/\s+/g, '').length;
  const charStepMs = Math.min(18, Math.max(5, Math.floor(260 / Math.max(totalChars, 1))));
  let charCounter = 0;

  return (
    <Component
      key={`${morphVersion}-latin-chars`}
      className={className}
      aria-label={text}
    >
      {tokens.map((token, wIdx) => {
        if (/^\s+$/.test(token) || token.length === 0) {
          return <React.Fragment key={wIdx}>{token}</React.Fragment>;
        }
        const chars = Array.from(token);
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap" aria-hidden="true">
            {chars.map((ch, cIdx) => {
              const delay = charCounter * charStepMs;
              charCounter++;
              return (
                <span
                  key={cIdx}
                  className="animate-wave-flip"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
        );
      })}
    </Component>
  );
};
