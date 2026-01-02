import { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { th } from '../translations/th';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage, browser language, or default to 'en'
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) return savedLanguage;
    
    // Auto-detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('th')) return 'th';
    return 'en';
  });

  const translations = language === 'th' ? th : en;

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'th' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
    // Update HTML lang attribute for accessibility and SEO
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

