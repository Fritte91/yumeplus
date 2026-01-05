import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './ImageWithFallback';
import { ImageLightbox } from './ImageLightbox';
import { links } from '../config/links';

export const SalmonCakesPage = () => {
  const { translations, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      src: '/cake1.webp',
      alt: 'Salmon cake platter',
      title: translations.salmonCakes.gallery.items[0].title,
      caption: translations.salmonCakes.gallery.items[0].caption
    },
    {
      src: '/cake2.webp',
      alt: 'Celebration salmon cake',
      title: translations.salmonCakes.gallery.items[1].title,
      caption: translations.salmonCakes.gallery.items[1].caption
    },
    {
      src: '/cake3.webp',
      alt: 'Custom salmon cake design',
      title: translations.salmonCakes.gallery.items[2].title,
      caption: translations.salmonCakes.gallery.items[2].caption
    },
    {
      src: '/cake4.webp',
      alt: 'Premium salmon selection',
      title: translations.salmonCakes.gallery.items[3].title,
      caption: translations.salmonCakes.gallery.items[3].caption
    },
    {
      src: '/cake1.webp',
      alt: 'Salmon cake detail',
      title: translations.salmonCakes.gallery.items[0].title,
      caption: translations.salmonCakes.gallery.items[0].caption
    },
    {
      src: '/cake2.webp',
      alt: 'Special occasion platter',
      title: translations.salmonCakes.gallery.items[1].title,
      caption: translations.salmonCakes.gallery.items[1].caption
    }
  ];

  const features = translations.salmonCakes.features;
  const steps = translations.salmonCakes.howToOrder;

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
      <div className="min-h-screen bg-gradient-to-b from-ivory via-cream to-ivory">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-ivory via-cream to-ivory relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-luxury-gold/6 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-gold-200/8 to-transparent rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-luxury-gold-dark font-semibold tracking-wider text-xs uppercase mb-3 block">
                Special Occasions
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-900 tracking-tight relative mb-6">
                <span className="relative z-10">{translations.salmonCakes.pageTitle}</span>
                <span className="absolute inset-0 text-luxury-gold opacity-5 blur-md -z-0">{translations.salmonCakes.pageTitle}</span>
              </h1>
              <p className="text-brand-500 text-lg sm:text-xl leading-relaxed">
                {translations.salmonCakes.pageSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 border-t border-brand-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gold-50/50 to-white border border-luxury-gold/20 rounded-xl luxury-card group"
                >
                  <span className="iconify text-luxury-gold mb-3 group-hover:scale-110 transition-transform" data-icon="lucide:sparkles" data-width="24" aria-hidden="true"></span>
                  <p className="text-brand-600 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 border-t border-brand-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight mb-4">
                {translations.salmonCakes.gallery.title}
              </h2>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => handleImageClick(item)}
                >
                  <div className="h-64 lg:h-80 overflow-hidden rounded-xl relative">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-serif text-lg font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-white/90">{item.caption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory -mx-4 px-4">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-none w-80 snap-center group cursor-pointer"
                  onClick={() => handleImageClick(item)}
                >
                  <div className="h-64 overflow-hidden rounded-xl relative">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-serif text-lg font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-white/90">{item.caption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Order Section */}
        <section className="py-16 border-t border-brand-200 bg-gradient-to-b from-white to-gold-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight mb-4">
                {steps.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif text-luxury-gold font-bold">1</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-brand-900 mb-2">
                  {steps.step1.title}
                </h3>
                <p className="text-brand-500 text-sm leading-relaxed">
                  {steps.step1.description}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif text-luxury-gold font-bold">2</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-brand-900 mb-2">
                  {steps.step2.title}
                </h3>
                <p className="text-brand-500 text-sm leading-relaxed">
                  {steps.step2.description}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif text-luxury-gold font-bold">3</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-brand-900 mb-2">
                  {steps.step3.title}
                </h3>
                <p className="text-brand-500 text-sm leading-relaxed">
                  {steps.step3.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t border-brand-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-gold-50/50 to-white border border-luxury-gold/20 rounded-2xl p-8 lg:p-12 luxury-card">
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-900 tracking-tight mb-4">
                Ready to Order?
              </h2>
              <p className="text-brand-500 mb-8 leading-relaxed">
                Contact us via LINE to place your order and discuss your special occasion needs.
              </p>
              <a
                href={links.LINE_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium rounded-full text-white bg-brand-900 hover:bg-luxury-gold transition-all duration-300 shadow-soft hover:shadow-gold gold-glow-hover"
              >
                <span className="iconify mr-2" data-icon="lucide:message-circle" data-width="18"></span>
                {translations.salmonCakes.preOrderLine}
              </a>
            </div>
          </div>
        </section>
      </div>

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

