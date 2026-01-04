import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { BookTableModal } from './BookTableModal';

export const Header = () => {
  const { translations } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-brand-200 shadow-soft bg-luxury-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <a href="/" className="flex items-center gap-2.5 font-serif text-xl sm:text-2xl font-semibold tracking-tighter text-brand-900 group">
                <img 
                  src="/yumelogo.png" 
                  alt="Yume Plus Logo" 
                  className="h-12 sm:h-14 w-auto object-contain flex-shrink-0"
                />
                <span className="group-hover:text-luxury-gold transition-colors duration-300">Yume Plus</span>
                <span className="text-luxury-gold text-xs align-top ml-1 font-sans font-medium">Seafood & Sushi</span>
              </a>
            </div>

            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-sm font-medium text-brand-500 hover:text-brand-900 transition-colors">
                {translations.nav.experience}
              </a>
              <a href="#menu" className="text-sm font-medium text-brand-500 hover:text-brand-900 transition-colors">
                {translations.nav.menu}
              </a>
              <a href="#prices" className="text-sm font-medium text-brand-500 hover:text-brand-900 transition-colors">
                {translations.nav.pricing}
              </a>
              <a href="#location" className="text-sm font-medium text-brand-500 hover:text-brand-900 transition-colors">
                {translations.nav.location}
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageToggle />
              <BookTableModal
                open={bookingModalOpen}
                onOpenChange={setBookingModalOpen}
                trigger={
                  <button className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium rounded-full text-white bg-brand-900 hover:bg-luxury-gold transition-all duration-300 shadow-soft hover:shadow-gold gold-glow-hover">
                    {translations.nav.bookTable}
                  </button>
                }
              />
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-brand-500 hover:text-brand-900"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="iconify" data-icon="lucide:menu" data-width="24" data-height="24" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 gap-6 md:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-hidden={!mobileMenuOpen}>
        <button onClick={closeMenu} className="absolute top-4 right-4 p-2 text-brand-500" aria-label="Close menu">
          <span className="iconify" data-icon="lucide:x" data-width="24" data-height="24" aria-hidden="true"></span>
        </button>
        <a href="#about" onClick={closeMenu} className="text-2xl font-serif font-medium text-brand-900">
          {translations.nav.experience}
        </a>
        <a href="#menu" onClick={closeMenu} className="text-2xl font-serif font-medium text-brand-900">
          {translations.nav.menu}
        </a>
        <a href="#prices" onClick={closeMenu} className="text-2xl font-serif font-medium text-brand-900">
          {translations.nav.pricing}
        </a>
        <a href="#location" onClick={closeMenu} className="text-2xl font-serif font-medium text-brand-900">
          {translations.nav.location}
        </a>
        <BookTableModal
          open={bookingModalOpen}
          onOpenChange={setBookingModalOpen}
          trigger={
            <button
              onClick={closeMenu}
              className="text-2xl font-serif font-medium text-brand-900 text-left"
            >
              {translations.nav.bookTable}
            </button>
          }
        />
        <div className="mt-4 pt-6 border-t border-brand-100">
          <a href="tel:+66982878284" className="flex items-center gap-3 text-accent-600 py-2">
            <span className="iconify" data-icon="lucide:phone" data-width="20"></span> +66 98 287 8284
          </a>
        </div>
      </div>
    </>
  );
};

