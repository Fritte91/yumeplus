import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const StatusBar = () => {
  const { translations } = useLanguage();
  const [status, setStatus] = useState({ text: translations.status.closed, color: 'bg-red-500' });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      
      if (currentHour >= 11 && currentHour < 22) {
        if (currentHour >= 21) {
          setStatus({ text: translations.status.lastOrder, color: 'bg-yellow-500' });
        } else {
          setStatus({ text: translations.status.open, color: 'bg-green-500' });
        }
      } else {
        setStatus({ text: translations.status.closed, color: 'bg-red-500' });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [translations]);

  return (
    <div className="bg-brand-50 border-b border-brand-200 text-brand-500 text-xs py-2.5 px-4 text-center font-medium tracking-wide relative bg-luxury-pattern">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent"></div>
      <span className={`inline-block w-2.5 h-2.5 rounded-full ${status.color} mr-2 animate-pulse shadow-sm`}></span>
      <span>{status.text}</span> • {translations.status.hours}
    </div>
  );
};

