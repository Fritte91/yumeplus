import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3.5 bg-brand-900 text-white rounded-full shadow-luxury hover:bg-luxury-gold transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-offset-2 gold-glow-hover border border-luxury-gold/30"
          aria-label="Scroll to top"
        >
          <span className="iconify" data-icon="lucide:arrow-up" data-width="22"></span>
        </button>
      )}
    </>
  );
};

