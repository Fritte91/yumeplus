import { useLanguage } from '../context/LanguageContext';

export const Amenities = () => {
  const { translations } = useLanguage();

  const amenities = [
    { icon: 'lucide:parking-circle', label: translations.amenities.parking },
    
    { icon: 'lucide:wifi', label: translations.amenities.wifi },
    { icon: 'lucide:clock', label: translations.amenities.timeLimit },
    
    { icon: 'lucide:credit-card', label: translations.amenities.cards },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-ivory border-t border-brand-100 relative">
      <div className="section-divider mb-4 sm:mb-8 md:mb-12"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl text-center text-brand-900 tracking-tight mb-6 sm:mb-8 md:mb-12">
          {translations.amenities.title}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center gap-2 text-center group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-50 to-white border border-luxury-gold/20 flex items-center justify-center text-brand-600 group-hover:border-luxury-gold group-hover:text-luxury-gold group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-gold" aria-hidden="true">
                <span className="iconify" data-icon={amenity.icon} data-width="22"></span>
              </div>
              <span className="text-sm font-medium text-brand-500 group-hover:text-brand-900 transition-colors">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

