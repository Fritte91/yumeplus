import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './ImageWithFallback';

export const Gallery = () => {
  const { translations } = useLanguage();

  const galleryItems = [
    {
      image: '/yume.jpg',
      label: translations.gallery.mainHall,
      alt: 'Main Hall'
    },
    {
      image: '/yume2.jpg',
      label: translations.gallery.omakase,
      alt: 'Omakase Counter'
    },
    {
      image: '/yume3.jpg',
      label: translations.gallery.plating,
      alt: 'Fresh Plating'
    },
    {
      image: '/yume4.jpg',
      label: translations.gallery.bar,
      alt: 'Bar Area'
    },
  ];

  return (
    <section className="py-24 overflow-hidden bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 mb-8">
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
              className="rounded-xl h-64 w-full object-cover shadow-soft border border-brand-200"
            />
            <p className="mt-2 text-sm text-brand-600 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

