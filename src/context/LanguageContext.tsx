import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TRANSLATIONS, TranslationsBundle } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationsBundle;
  isPersian: boolean;
  morphVersion: number;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('sr_portfolio_lang');
    if (saved === 'en' || saved === 'fr' || saved === 'fa') {
      return saved;
    }
    return 'en';
  });

  const [morphVersion, setMorphVersion] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem('sr_portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    setLanguageState(lang);
    setMorphVersion((prev) => prev + 1);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: TRANSLATIONS[language],
        isPersian: language === 'fa',
        morphVersion,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
