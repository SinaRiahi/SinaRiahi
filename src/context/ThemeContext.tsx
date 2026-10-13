import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
export type AccentTheme = 'default' | 'spider' | 'dragon';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
  accent: AccentTheme;
  setAccent: (a: AccentTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check saved theme
    const saved = localStorage.getItem('sr_portfolio_theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    // Default to dark as primary experience, or check media query
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  const [accent, setAccentState] = useState<AccentTheme>(() => {
    const saved = localStorage.getItem('sr_portfolio_accent');
    if (saved === 'spider' || saved === 'dragon') {
      return saved;
    }
    return 'default';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('sr_portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-spider', 'theme-dragon');
    if (accent === 'spider') {
      root.classList.add('theme-spider');
    } else if (accent === 'dragon') {
      root.classList.add('theme-dragon');
    }
    localStorage.setItem('sr_portfolio_accent', accent);
  }, [accent]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  const setAccent = (a: AccentTheme) => {
    setAccentState(a);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
