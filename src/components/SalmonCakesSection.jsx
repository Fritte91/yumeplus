import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './ImageWithFallback';
import { ImageLightbox } from './ImageLightbox';
import { links } from '../config/links';

export const SalmonCakesSection = () => {
  const { translations, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      src: '/cake1.jpg',
      alt: 'Salmon cake platter',
      title: translations.salmonCakes.gallery.items[0].title,
      caption: translations.salmonCakes.gallery.items[0].caption
    },
    {
      src: '/cake2.jpg',
      alt: 'Celebration salmon cake',
      title: translations.salmonCakes.gallery.items[1].title,
      caption: translations.salmonCakes.gallery.items[1].caption
    },
    {
      src: '/cake3.jpg',
      alt: 'Custom salmon cake design',
      title: translations.salmonCakes.gallery.items[2].title,
      caption: translations.salmonCakes.gallery.items[2].caption
    },
    {
      src: '/cake4.jpg',
      alt: 'Premium salmon selection',
      title: translations.salmonCakes.gallery.items[3].title,
      caption: translations.salmonCakes.gallery.items[3].caption
    }
  ];

  const features = translations.salmonCakes.features;

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-ivory via-cream to-ivory border-t border-brand-200 relative bg-luxury-grid overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20"></div>
        {/* Decorative background elements */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-luxury-gold/6 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-gold-200/8 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-luxury-gold-dark font-semibold tracking-wider text-xs uppercase mb-3 block">
              Special Occasions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight relative mb-4">
              <span className="relative z-10">{translations.salmonCakes.sectionTitle}</span>
              <span className="absolute inset-0 text-luxury-gold opacity-5 blur-md -z-0">{translations.salmonCakes.sectionTitle}</span>
            </h2>
            <p className="text-brand-500 text-lg leading-relaxed">
              {translations.salmonCakes.sectionSubtitle}
            </p>
          </div>

          {/* Gallery Teaser */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => handleImageClick(item)}
                >
                  <div className="h-48 sm:h-64 overflow-hidden rounded-xl relative">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="mb-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1 flex-shrink-0">
                    <span className="iconify" data-icon="lucide:check-circle" data-width="20"></span>
                  </span>
                  <span className="text-brand-600 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={links.LINE_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium rounded-full text-white bg-brand-900 hover:bg-luxury-gold transition-all duration-300 shadow-soft hover:shadow-gold gold-glow-hover"
            >
              <span className="iconify mr-2" data-icon="lucide:message-circle" data-width="18"></span>
              {translations.salmonCakes.preOrderLine}
            </a>
            <Link
              to="/salmon-cakes"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium rounded-full text-brand-600 bg-white border border-brand-200 hover:border-luxury-gold/40 hover:text-brand-900 transition-all duration-300 shadow-sm hover:shadow-soft"
            >
              {translations.salmonCakes.viewDetails}
              <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
            </Link>
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={handleCloseLightbox}
          image={selectedImage.src}
          title={selectedImage.title}
          caption={selectedImage.caption}
        />
      )}
    </>
  );
};

