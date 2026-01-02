import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './ImageWithFallback';

export const About = () => {
  const { translations } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight mb-6">
              {translations.about.title}
            </h2>
            <p className="text-brand-500 mb-6 leading-relaxed text-lg">
              {translations.about.p1}
            </p>
            <p className="text-brand-500 mb-8 leading-relaxed">
              {translations.about.p2}{' '}
              <span className="text-accent-600 font-medium">{translations.about.p2Highlight}</span>{' '}
              {translations.about.p2Middle}{' '}
              <i>{translations.about.p2Sauce}</i>{' '}
              {translations.about.p2End}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-brand-50 border border-brand-100 rounded-xl">
                <span className="iconify text-accent-600 mb-2" data-icon="lucide:flame" data-width="24" aria-hidden="true"></span>
                <h3 className="font-serif text-lg font-medium text-brand-900">
                  {translations.about.feature1Title}
                </h3>
                <p className="text-sm text-brand-500 mt-1">{translations.about.feature1Desc}</p>
              </div>
              <div className="p-5 bg-brand-50 border border-brand-100 rounded-xl">
                <span className="iconify text-accent-600 mb-2" data-icon="lucide:fish" data-width="24" aria-hidden="true"></span>
                <h3 className="font-serif text-lg font-medium text-brand-900">
                  {translations.about.feature2Title}
                </h3>
                <p className="text-sm text-brand-500 mt-1">{translations.about.feature2Desc}</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <ImageWithFallback
              src="/shrimp1.jpg"
              alt="Fresh grilled river prawns"
              className="rounded-2xl w-full h-64 object-cover shadow-soft translate-y-8"
            />
            <ImageWithFallback
              src="/sushi8.jpg"
              alt="Premium sushi selection"
              className="rounded-2xl w-full h-64 object-cover shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

