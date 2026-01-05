import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './ImageWithFallback';

export const Gallery = () => {
  const { translations } = useLanguage();

  const galleryItems = [
    {
      image: '/yume.webp',
      label: translations.gallery.mainHall,
      alt: 'Main Hall'
    },
    {
      image: '/yume2.webp',
      label: translations.gallery.omakase,
      alt: 'Omakase Counter'
    },
    {
      image: '/yume3.webp',
      label: translations.gallery.plating,
      alt: 'Fresh Plating'
    },
    {
      image: '/yume4.webp',
      label: translations.gallery.bar,
      alt: 'Bar Area'
    },
  ];

  return (
    <section className="pt-8 sm:pt-12 md:pt-24 pb-12 sm:pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-gold-tint via-warm-white to-gold-tint relative bg-luxury-pattern">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-20"></div>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-luxury-gold/7 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gold-200/6 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 mb-8 relative z-10">
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight">
          {translations.gallery.title}
        </h2>
        <p className="text-brand-500 mt-2">{translations.gallery.description}</p>
      </div>

      <div className="flex overflow-x-auto gap-4 px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory">
        {galleryItems.map((item, index) => (
          <div key={index} className="flex-none w-80 sm:w-96 snap-center">
            <ImageWithFallback
              src={item.image}
              alt={item.alt}
              className="rounded-xl h-64 w-full object-cover shadow-soft border border-brand-200 luxury-card hover:border-luxury-gold/30"
            />
            <p className="mt-2 text-sm text-brand-600 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

