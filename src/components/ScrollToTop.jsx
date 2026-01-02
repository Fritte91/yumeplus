import { useState, useEffect } from 'react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          className="fixed bottom-8 right-8 z-50 p-3 bg-brand-900 text-white rounded-full shadow-lg hover:bg-brand-800 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <span className="iconify" data-icon="lucide:arrow-up" data-width="24"></span>
        </button>
      )}
    </>
  );
};

