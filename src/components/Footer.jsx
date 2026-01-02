import { useLanguage } from '../context/LanguageContext';
import { links } from '../config/links';

export const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer className="bg-brand-50 border-t border-brand-200 text-brand-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-serif text-lg text-brand-900 block tracking-wider font-semibold">
            Yume Plus Sushi
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
    </footer>
  );
};

