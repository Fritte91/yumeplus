import { useLanguage } from '../context/LanguageContext';

export const StructuredData = () => {
  const { translations, language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Yume Plus Sushi",
    "image": "https://yumeplussushi.com/yume.jpg",
    "@id": "https://yumeplussushi.com",
    "url": "https://yumeplussushi.com",
    "telephone": "+66982878284",
    "priceRange": "฿฿฿",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rangsit - Nakhon Nayok Rd, Tambon Prachathipat",
      "addressLocality": "Thanyaburi District",
      "addressRegion": "Pathum Thani",
      "postalCode": "12130",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 14.006701591341525,
      "longitude": 100.66104737479597
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "22:00"
      }
    ],
    "servesCuisine": ["Japanese", "Thai", "Seafood"],
    "description": language === 'th' 
      ? "บุฟเฟ่ต์ซีฟู้ดและซูชิพรีเมียมในรังสิต ประเทศไทย กุ้งแม่น้ำยักษ์ไม่จำกัด ซาชิมินำเข้า และเนื้อวากิว"
      : "Premium seafood and sushi buffet in Rangsit, Thailand. Unlimited Giant River Prawns, Imported Sashimi, and Wagyu Beef."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

