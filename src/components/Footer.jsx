import { useLanguage } from '../context/LanguageContext';
import { links } from '../config/links';

export const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-gold-50/30 to-warm-beige border-t border-brand-200 text-brand-500 py-12 relative bg-luxury-pattern">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-center md:text-left">
          <span className="font-serif text-lg text-brand-900 block tracking-wider font-semibold group">
            <span className="group-hover:text-luxury-gold transition-colors duration-300">Yume Plus Sushi</span>
          </span>
          <span className="text-xs text-brand-500">{translations.footer.tagline}</span>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href={links.lineOfficial} target="_blank" rel="noopener noreferrer" className="hover:text-brand-900 transition">
            {translations.footer.lineOA}
          </a>
          <a href={links.menuPDF} className="hover:text-brand-900 transition">
            {translations.footer.menu}
          </a>
          <a href="#location" className="hover:text-brand-900 transition">
            {translations.footer.location}
          </a>
        </div>

        <div className="flex gap-4">
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-900 transition" aria-label="Instagram">
            <span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
          </a>
          <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-900 transition" aria-label="Facebook">
            <span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-brand-400 mt-8">
        {translations.footer.copyright}
      </div>
      
      {/* Bangkok Boost Studios Credit */}
      <div className="text-center mt-8 pt-8 border-t border-brand-200/50">
        <a 
          href="https://bkkboost.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-brand-400 hover:text-brand-600 transition-colors duration-300 group"
        >
          <span className="text-brand-500 group-hover:text-brand-700">Managed & distributed by</span>
          <img 
            src="/112.png" 
            alt="Bangkok Boost Studios" 
            className="h-5 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="font-medium text-brand-500 group-hover:text-brand-700">Bangkok Boost Studios</span>
        </a>
      </div>
    </footer>
  );
};

