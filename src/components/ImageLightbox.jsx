import { useEffect, useRef } from 'react';

export const ImageLightbox = ({ isOpen, onClose, image, title, caption }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        className="relative max-w-5xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-luxury-gold transition-colors p-2"
          aria-label="Close lightbox"
        >
          <span className="iconify" data-icon="lucide:x" data-width="32" data-height="32"></span>
        </button>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={image}
            alt={title || caption || 'Gallery image'}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          {(title || caption) && (
            <div className="p-6 bg-white">
              {title && (
                <h3 id="lightbox-title" className="font-serif text-xl font-medium text-brand-900 mb-2">
                  {title}
                </h3>
              )}
              {caption && (
                <p className="text-brand-500 text-sm">{caption}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


