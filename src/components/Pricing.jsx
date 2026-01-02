import { useLanguage } from '../context/LanguageContext';

export const Pricing = () => {
  const { translations } = useLanguage();

  const tiers = [
    {
      price: '399',
      name: translations.pricing.classicTier,
      description: translations.pricing.classicDescription
    },
    {
      price: '599',
      name: translations.pricing.goldTier,
      description: translations.pricing.goldDescription
    },
    {
      price: '799',
      name: translations.pricing.premiumTier,
      description: translations.pricing.premiumDescription,
      mostPopular: true
    },
    {
      price: '1,099',
      name: translations.pricing.platinumTier,
      description: translations.pricing.platinumDescription
    }
  ];

  return (
    <section id="prices" className="py-24 bg-brand-50 border-t border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight mb-4">
            {translations.pricing.title}
          </h2>
          <p className="text-brand-500 text-base sm:text-lg leading-relaxed">
            {translations.pricing.description}
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`
                group relative bg-white rounded-2xl border border-brand-100 p-8
                transition-all duration-300 hover:shadow-lg hover:border-brand-200
                ${tier.mostPopular ? 'ring-2 ring-accent-200 ring-offset-2 ring-offset-brand-50 bg-accent-50/30' : ''}
              `}
            >
              {/* Most Popular Badge */}
              {tier.mostPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm" aria-label="Most popular option">
                    {translations.pricing.mostPopular}
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mb-4">
                <span className="block text-4xl sm:text-5xl font-serif font-medium text-brand-900 mb-1">
                  ฿{tier.price}
                </span>
                <span className="block text-xs font-medium text-brand-400 uppercase tracking-wider mt-1">
                  NET
                </span>
              </div>

              {/* Tier Name */}
              <h3 className="font-serif text-xl font-medium text-brand-900 mb-3">
                {tier.name}
              </h3>

              {/* Tier Description */}
              <p className="text-brand-500 text-sm leading-relaxed">
                {tier.description}
              </p>
            </div>
          ))}
        </div>

        {/* Promotion Section */}
        <div className="mt-12 pt-8 border-t border-brand-200 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white border border-brand-200 rounded-full px-6 py-3 shadow-sm">
            <span className="inline-flex items-center gap-2 text-accent-600 font-medium text-sm">
              <span className="iconify" data-icon="lucide:tag" data-width="16"></span>
              {translations.pricing.promotion}
            </span>
            <span className="hidden sm:block text-brand-300">•</span>
            <p className="text-brand-600 text-sm sm:text-base">
              {translations.pricing.promoText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

