import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border border-brand-200 hover:border-brand-300 bg-white hover:bg-brand-50 text-brand-600 hover:text-brand-900 transition-colors"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'TH' : 'EN'}
    </button>
  );
};

