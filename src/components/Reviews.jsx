import { useLanguage } from '../context/LanguageContext';
import { links } from '../config/links';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const { translations } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample reviews data - Replace with your Google Reviews data
  // You can fetch this from Google Places API or manually add your reviews
  // To get Google Reviews: Use Google Places API (Place Details) or Google My Business API
  // Format: { id, name, rating (1-5), date, text, avatar (optional initials) }
  const reviews = [
        {
          id: 1,
          name: "Pongka Galz",
          rating: 5,
          date: "2 months ago",
          text: "Everything was delicious. The ingredients were very fresh, and the shrimp were naturally sweet and flavorful. The quality is excellent for the price, with many buffet options to choose from. Parking is a bit inconvenient, but the food more than makes up for it.",
          avatar: "PG"
        },
        {
          id: 2,
          name: "Pattiya Pocapanich",
          rating: 5,
          date: "2 months ago",
          text: "A hidden buffet gem that’s absolutely worth the price. The restaurant was calm and not crowded, but the food quality was outstanding. The salmon sashimi was premium, comparable to high-end restaurants. Shrimp tempura was crispy, and the shabu soup was flavorful. Excellent service from the staff.",
          avatar: "PP"
        },
        {
          id: 3,
          name: "Kanyarat Anantasirirat",
          rating: 5,
          date: "3 months ago",
          text: "The fish was very fresh and the meat had a firm, satisfying texture. Sashimi was sliced perfectly — not too thin. The restaurant was clean, the staff were attentive, and the overall experience was definitely worth the price. Highly recommended.",
          avatar: "KA"
        },
        {
          id: 4,
          name: "Chayanisa Maunngern",
          rating: 5,
          date: "2 months ago",
          text: "Extremely fresh fish with salmon cut to the perfect thickness. The texture was springy and melted in the mouth. Fried dishes were crispy and not greasy, and everything was beautifully presented. The dipping sauces were full of flavor. Perfect for lunch or a special occasion.",
          avatar: "CM"
        },
        {
          id: 5,
          name: "Santhad Boonkwang",
          rating: 5,
          date: "3 months ago",
          text: "The food was delicious and served quickly without a long wait. The staff provided excellent service, and the atmosphere was comfortable. Arriving before 4:00 PM also gives you a great discount, making it even more worth the visit.",
          avatar: "SB"
        },
        {
          id: 6,
          name: "Local Guide",
          rating: 5,
          date: "6 months ago",
          text: "I tried the 699 baht buffet including drinks, and everything was made fresh to order. Despite concerns about crowding, service was smooth and efficient. The quality of the seafood was impressive, especially for a buffet-style restaurant.",
          avatar: "LG"
        }
      ];
      

  // Auto-rotate reviews on desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating
            ? 'text-luxury-gold'
            : 'text-brand-200'
        }`}
      >
        ★
      </span>
    ));
  };

  // For desktop: show 3 reviews with carousel navigation
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-white via-gold-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-luxury-gold/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gold-200/8 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="iconify text-luxury-gold" data-icon="lucide:star" data-width="24"></span>
            <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider">
              {translations.reviews.badge}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 tracking-tight mb-4">
            {translations.reviews.title}
          </h2>
          <p className="text-brand-500 text-base sm:text-lg leading-relaxed">
            {translations.reviews.description}
          </p>
        </div>

        {/* Reviews Grid/Carousel */}
        <div className="relative">
          {/* Desktop: Carousel with 3 visible reviews */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
            {getVisibleReviews().map((review, index) => (
              <div
                key={review.id}
                className="bg-gradient-to-br from-white to-gold-50/20 rounded-2xl border border-brand-100 p-6 luxury-card group hover:border-luxury-gold/40 transition-all duration-500"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>

                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-gold/20 to-gold-200/20 border border-luxury-gold/30 flex items-center justify-center font-semibold text-luxury-gold text-sm">
                      {review.avatar || getInitials(review.name)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-900 text-sm">
                        {review.name}
                      </h4>
                      <p className="text-xs text-brand-400 mt-0.5">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-brand-600 text-sm leading-relaxed line-clamp-4">
                  "{review.text}"
                </p>

                {/* Decorative quote mark */}
                <div className="absolute top-4 right-4 text-luxury-gold/10 text-6xl font-serif leading-none">
                  "
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Grid with all reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 mb-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-gradient-to-br from-white to-gold-50/20 rounded-2xl border border-brand-100 p-6 luxury-card group hover:border-luxury-gold/40"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>

                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-gold/20 to-gold-200/20 border border-luxury-gold/30 flex items-center justify-center font-semibold text-luxury-gold text-sm">
                      {review.avatar || getInitials(review.name)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-900 text-sm">
                        {review.name}
                      </h4>
                      <p className="text-xs text-brand-400 mt-0.5">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-brand-600 text-sm leading-relaxed">
                  "{review.text}"
                </p>

                {/* Decorative quote mark */}
                <div className="absolute top-4 right-4 text-luxury-gold/10 text-6xl font-serif leading-none">
                  "
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Carousel Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-3">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="w-10 h-10 rounded-full bg-white border border-brand-200 hover:border-luxury-gold hover:bg-gold-50/50 flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous review"
            >
              <span className="iconify text-brand-400 group-hover:text-luxury-gold transition-colors" data-icon="lucide:chevron-left" data-width="20"></span>
            </button>
            
            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentIndex(pageIndex * 3)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === pageIndex
                      ? 'bg-luxury-gold w-8'
                      : 'bg-brand-200 hover:bg-brand-300'
                  }`}
                  aria-label={`Go to review page ${pageIndex + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % reviews.length)}
              className="w-10 h-10 rounded-full bg-white border border-brand-200 hover:border-luxury-gold hover:bg-gold-50/50 flex items-center justify-center transition-all duration-300 group"
              aria-label="Next review"
            >
              <span className="iconify text-brand-400 group-hover:text-luxury-gold transition-colors" data-icon="lucide:chevron-right" data-width="20"></span>
            </button>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href={links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-gold-50/50 border border-luxury-gold/30 rounded-full text-brand-700 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all duration-300 luxury-card group"
          >
            <span className="iconify group-hover:scale-110 transition-transform" data-icon="lucide:external-link" data-width="18"></span>
            <span className="font-medium text-sm">
              {translations.reviews.viewAll}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

