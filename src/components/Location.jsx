import { useLanguage } from '../context/LanguageContext';
import { links } from '../config/links';

export const Location = () => {
  const { translations } = useLanguage();

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl text-brand-900 tracking-tight mb-6">
              {translations.location.title}
            </h2>
            <address className="not-italic text-brand-500 mb-8 space-y-2">
              <p className="font-medium text-brand-900 text-lg">
                {translations.location.restaurantName}
              </p>
              <p>{translations.location.address1}</p>
              <p>{translations.location.address2}</p>
            </address>

            <div className="flex flex-col gap-4 items-start w-full sm:w-2/3">
              <a
                href="tel:+66982878284"
                className="w-full flex items-center justify-center gap-3 text-brand-900 bg-brand-50 border border-brand-200 hover:bg-brand-100 py-3 rounded-lg font-medium transition"
              >
                <span className="iconify" data-icon="lucide:phone" data-width="20"></span>
                <span>{translations.location.phone}</span>
              </a>
              <a
                href={links.lineOfficial}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 text-white bg-[#06C755] hover:bg-[#05b64d] py-3 rounded-lg font-medium transition shadow-sm"
                aria-label="Book via Line"
              >
                <span className="iconify" data-icon="simple-icons:line" data-width="20"></span>
                <span>{translations.location.bookLine}</span>
              </a>
              <a
                href={links.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 text-white bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-medium transition shadow-sm"
                aria-label="Contact via Messenger"
              >
                <span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
                <span>{translations.location.messenger}</span>
              </a>
            </div>
          </div>

          <div className="h-80 bg-brand-50 rounded-2xl relative overflow-hidden group border border-brand-200 shadow-soft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.1907410526223!2d100.66104737479597!3d14.006701591341525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7f294c6166e7%3A0x4f303943976b5376!2zWXVtZSBwbHVzIHN1c2hpIOC4quC4suC4guC4suC4hOC4peC4reC4hzM!5e0!3m2!1sen!2sse!4v1767390560784!5m2!1sen!2sse"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
            <a
              href={links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 bg-white text-brand-900 text-xs px-3 py-1 rounded shadow-md border border-brand-100 font-medium hover:bg-brand-50 transition pointer-events-auto z-10"
              aria-label="Open in Google Maps"
            >
              {translations.location.mapLabel} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

