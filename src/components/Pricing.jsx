import { useLanguage } from '../context/LanguageContext';

export const Pricing = () => {
  const { translations } = useLanguage();

  const tiers = [
    {
      price: '399',
      name: translations.pricing.classicTier,
      features: translations.pricing.classicFeatures
    },
    {
      price: '599',
      name: translations.pricing.goldTier,
      features: translations.pricing.goldFeatures
    },
    {
      price: '799',
      name: translations.pricing.premiumTier,
      features: translations.pricing.premiumFeatures,
      mostPopular: true
    },
    {
      price: '1,099',
      name: translations.pricing.platinumTier,
      features: translations.pricing.platinumFeatures
    }
  ];

  return (
    <section id="prices" className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-b from-gold-50/40 via-gold-100/30 to-gold-50/40 border-t border-brand-200 relative bg-luxury-pattern overflow-hidden">
      {/* Decorative gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-30"></div>
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-luxury-gold/8 to-transparent rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-gold-200/10 to-transparent rounded-full blur-3xl translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight mb-4">
            {translations.pricing.title}
          </h2>
          <p className="text-brand-500 text-base sm:text-lg leading-relaxed">
            {translations.pricing.description}
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 sm:mb-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`
                group relative bg-gradient-to-br from-white to-gold-50/20 rounded-2xl border border-brand-100 p-8 luxury-card
                ${tier.mostPopular ? 'ring-2 ring-luxury-gold ring-offset-2 ring-offset-brand-50 bg-gradient-to-br from-gold-50/60 to-white border-luxury-gold/30' : 'hover:border-luxury-gold/40'}
              `}
            >
              {/* Most Popular Badge */}
              {tier.mostPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="luxury-badge text-luxury-gold-dark px-4 py-1.5 rounded-full text-xs font-semibold shadow-gold uppercase tracking-wider" aria-label="Most popular option">
                    {translations.pricing.mostPopular}
                  </span>
                </div>
              )}
              
              {/* Gold accent line for premium tiers */}
              {(tier.price === '799' || tier.price === '1,099') && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-60 rounded-t-2xl"></div>
              )}

              {/* Price */}
              <div className="mb-4">
                <span className={`block text-4xl sm:text-5xl font-serif font-medium mb-1 ${
                  tier.mostPopular ? 'text-gold-gradient' : 'text-brand-900'
                }`}>
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

              {/* Tier Features List */}
              <ul className="space-y-2">
                {tier.features && tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-brand-500 text-sm leading-relaxed flex items-start">
                    <span className="text-luxury-gold mr-2 mt-1 flex-shrink-0">
                      <span className="iconify" data-icon="lucide:check" data-width="16"></span>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Promotion Section */}
        <div className="mt-6 sm:mt-12 pt-4 sm:pt-8 text-center">
          <div className="section-divider mb-4 sm:mb-8"></div>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 luxury-badge rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-gold">
            <span className="inline-flex items-center gap-2 text-luxury-gold-dark font-semibold text-sm">
              <span className="iconify" data-icon="lucide:tag" data-width="18"></span>
              {translations.pricing.promotion}
            </span>
            <span className="hidden sm:block text-luxury-gold opacity-50">•</span>
            <p className="text-brand-700 text-sm sm:text-base font-medium">
              {translations.pricing.promoText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

