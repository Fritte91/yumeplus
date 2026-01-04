import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './ImageWithFallback';
import { links } from '../config/links';

export const Hero = () => {
  const { translations } = useLanguage();

  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2070&auto=format&fit=crop"
          alt="Fresh sushi and seafood buffet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <div className="mb-6 flex flex-wrap justify-center gap-2 animate-fade-up">
          <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium uppercase tracking-wider shadow-lg">
            {translations.hero.badge1}
          </span>
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-luxury-gold/90 to-gold-500/90 backdrop-blur-md border border-luxury-gold/50 text-white text-xs font-semibold uppercase tracking-wider shadow-gold gold-glow-hover">
            {translations.hero.badge2}
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-tight mb-6 animate-fade-up delay-100 drop-shadow-lg relative">
          <span className="relative z-10">{translations.hero.title}</span>
          <span className="absolute inset-0 text-luxury-gold opacity-10 blur-sm">{translations.hero.title}</span>
        </h1>

        <p className="text-brand-50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-normal leading-relaxed animate-fade-up delay-200 drop-shadow-md text-shadow">
          {translations.hero.description}{' '}
          <span className="text-accent-300 font-semibold">{translations.hero.descriptionHighlight}</span>{' '}
          {translations.hero.descriptionEnd}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-300">
          <a
            href="#location"
            className="w-full sm:w-auto px-8 py-3 bg-white text-brand-900 hover:bg-gold-50 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-luxury hover:shadow-luxury-lg hover:border-luxury-gold/30 border-2 border-white group"
          >
            <span className="iconify group-hover:text-luxury-gold transition-colors" data-icon="lucide:calendar-check" data-width="18"></span>
            {translations.hero.bookTable}
          </a>
          <a
            href={links.lineOfficial}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-luxury-gold/20 to-gold-500/20 hover:from-luxury-gold/30 hover:to-gold-500/30 backdrop-blur-md border border-luxury-gold/40 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-gold gold-glow-hover"
            aria-label="Line Official Account"
          >
            <span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
            {translations.hero.lineOfficial}
          </a>
        </div>
      </div>
    </section>
  );
};

