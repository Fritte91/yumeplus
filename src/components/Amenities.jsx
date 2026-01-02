import { useLanguage } from '../context/LanguageContext';

export const Amenities = () => {
  const { translations } = useLanguage();

  const amenities = [
    { icon: 'lucide:parking-circle', label: translations.amenities.parking },
    { icon: 'lucide:armchair', label: translations.amenities.vipRooms },
    { icon: 'lucide:wifi', label: translations.amenities.wifi },
    { icon: 'lucide:clock', label: translations.amenities.timeLimit },
    { icon: 'lucide:ice-cream-2', label: translations.amenities.bingsu },
    { icon: 'lucide:credit-card', label: translations.amenities.cards },
  ];

  return (
    <section className="py-20 bg-white border-t border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-center text-brand-900 tracking-tight mb-12">
          {translations.amenities.title}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center gap-2 text-center group">
              <div className="w-12 h-12 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 group-hover:border-accent-500 group-hover:text-accent-600 transition" aria-hidden="true">
                <span className="iconify" data-icon={amenity.icon} data-width="20"></span>
              </div>
              <span className="text-sm font-medium text-brand-500">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

