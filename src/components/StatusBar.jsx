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
    <div className="bg-brand-50 border-b border-brand-200 text-brand-500 text-xs py-2 px-4 text-center font-medium tracking-wide">
      <span className={`inline-block w-2 h-2 rounded-full ${status.color} mr-2 animate-pulse`}></span>
      <span>{status.text}</span> • {translations.status.hours}
    </div>
  );
};

