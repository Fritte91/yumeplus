import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { menuItems, categories } from '../data/menuItems';
import { ImageWithFallback } from './ImageWithFallback';
import { links } from '../config/links';

export const Menu = () => {
  const { translations, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter menu items based on active category
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  // Get item text based on language
  const getText = (item, field) => {
    return item[field]?.[language] || item[field]?.en || '';
  };

  return (
    <section id="menu" className="py-24 bg-brand-50 border-t border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-600 font-semibold tracking-wider text-xs uppercase mb-2 block">
            {translations.menu.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight">
            {translations.menu.title}
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-white border border-brand-200 text-brand-500 hover:border-brand-300 hover:text-brand-900 shadow-sm'
              }`}
              aria-pressed={activeCategory === category.id}
              aria-label={`Filter menu by ${category.name[language]}`}
            >
              {category.name[language]}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300 group border border-brand-100"
              >
                <div className="h-64 overflow-hidden relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.imageAlt ? getText(item, 'imageAlt') : getText(item, 'name')}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-medium text-brand-900">
                      {getText(item, 'name')}
                    </h3>
                    {item.badge && (
                      <span className="text-xs font-semibold text-accent-700 bg-accent-100 px-2 py-1 rounded whitespace-nowrap ml-2">
                        {getText(item, 'badge')}
                      </span>
                    )}
                  </div>
                  <p className="text-brand-500 text-sm mb-4">
                    {getText(item, 'description')}
                  </p>
                  {item.tag && (
                    <span className="text-xs text-brand-400 uppercase tracking-wide font-medium">
                      {getText(item, 'tag')}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-brand-500">No items found in this category.</p>
          </div>
        )}

        {/* Download Menu CTA */}
        <div className="mt-12 text-center">
          <a
            href={links.menuPDF}
            target={links.menuPDF !== '#' ? '_blank' : undefined}
            rel={links.menuPDF !== '#' ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand-200 rounded-full text-brand-600 font-medium hover:bg-brand-50 transition hover:border-brand-300"
            aria-label="Download Menu PDF"
          >
            <span className="iconify" data-icon="lucide:book-open" data-width="18"></span>
            {translations.menu.downloadMenu}
          </a>
        </div>
      </div>
    </section>
  );
};
