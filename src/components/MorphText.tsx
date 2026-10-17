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
  const { isPersian } = useLanguage();
  const shouldRtl = isPersian && !forceLtr;

  return (
    <Component
      dir={shouldRtl ? 'rtl' : undefined}
      className={`${shouldRtl ? 'font-persian' : ''} ${className}`.trim()}
    >
      {text}
    </Component>
  );
};
