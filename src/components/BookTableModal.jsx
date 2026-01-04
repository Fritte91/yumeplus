import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLanguage } from '../context/LanguageContext';

export const BookTableModal = ({ open, onOpenChange, trigger }) => {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    guests: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    occasion: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (open && (isSubmitted || showConfirmation)) {
      setFormData({
        guests: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        occasion: '',
        notes: ''
      });
      setErrors({});
      setIsSubmitted(false);
      setShowConfirmation(false);
    }
  }, [open]);

  const validateField = (name, value) => {
    switch (name) {
      case 'guests':
        if (!value) return translations.booking.errors.guestsRequired;
        const guestsNum = parseInt(value);
        if (isNaN(guestsNum) || guestsNum < 1 || guestsNum > 20) {
          return translations.booking.errors.guestsInvalid;
        }
        return '';
      case 'date':
        if (!value) return translations.booking.errors.dateRequired;
        const selectedDate = new Date(value);
        selectedDate.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          return translations.booking.errors.datePast;
        }
        return '';
      case 'time':
        if (!value) return translations.booking.errors.timeRequired;
        return '';
      case 'name':
        if (!value.trim()) return translations.booking.errors.nameRequired;
        if (value.trim().length < 2) {
          return translations.booking.errors.nameMinLength;
        }
        return '';
      case 'phone':
        if (!value.trim()) return translations.booking.errors.phoneRequired;
        const phoneRegex = /^[0-9+\-\s()]+$/;
        if (!phoneRegex.test(value.trim()) || value.trim().length < 8) {
          return translations.booking.errors.phoneInvalid;
        }
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['guests', 'date', 'time', 'name', 'phone'];
    
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (validateForm()) {
      setShowConfirmation(true);
    }
    return false;
  };

  const handleConfirmSubmit = () => {
    // Here you would normally send the data to a backend
    // For now, just show success state
    setIsSubmitted(true);
    setShowConfirmation(false);
  };

  const handleEditForm = () => {
    setShowConfirmation(false);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after a delay to allow animation
    setTimeout(() => {
      setFormData({
        guests: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        occasion: '',
        notes: ''
      });
      setErrors({});
      setIsSubmitted(false);
      setShowConfirmation(false);
    }, 300);
  };

  const isFormValid = () => {
    const requiredFields = ['guests', 'date', 'time', 'name', 'phone'];
    return requiredFields.every(field => {
      const error = validateField(field, formData[field]);
      return !error && formData[field];
    });
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  // Get occasion display text
  const getOccasionText = (occasion) => {
    const occasionMap = {
      birthday: translations.booking.occasionBirthday,
      anniversary: translations.booking.occasionAnniversary,
      business: translations.booking.occasionBusiness,
      celebration: translations.booking.occasionCelebration,
      other: translations.booking.occasionOther
    };
    return occasionMap[occasion] || occasion;
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-300" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-luxury-lg z-50 p-6 sm:p-8 data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[state=closed]:opacity-0 data-[state=closed]:scale-95 transition-all duration-300 focus:outline-none border border-brand-200/50">
          {isSubmitted ? (
            // Thank You / Success State
            <div className="text-center py-8">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="iconify text-green-600" data-icon="lucide:check" data-width="32" data-height="32"></span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brand-900 mb-2">
                  {translations.booking.successTitle}
                </h3>
                <p className="text-brand-500 text-sm mb-4">
                  {translations.booking.successMessage}
                </p>
                <div className="mt-6 p-4 bg-gold-50/50 rounded-lg border border-luxury-gold/20">
                  <p className="text-xs text-brand-600 leading-relaxed">
                    {translations.booking.disclaimer}
                  </p>
                </div>
              </div>
              <Dialog.Close asChild>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 rounded-full bg-brand-900 text-white hover:bg-luxury-gold font-medium transition-all duration-200 shadow-soft hover:shadow-gold"
                >
                  {translations.booking.close}
                </button>
              </Dialog.Close>
            </div>
          ) : showConfirmation ? (
            // Confirmation Step
            <div>
              <div className="flex items-center justify-between mb-6">
                <Dialog.Title className="font-serif text-2xl sm:text-3xl font-semibold text-brand-900 tracking-tight">
                  {translations.booking.confirmTitle}
                </Dialog.Title>
                <button
                  onClick={handleEditForm}
                  className="p-2 text-brand-500 hover:text-brand-900 hover:bg-brand-100 rounded-full transition-colors duration-200"
                  aria-label={translations.booking.edit}
                >
                  <span className="iconify" data-icon="lucide:edit" data-width="20" data-height="20"></span>
                </button>
              </div>

              <Dialog.Description className="text-brand-500 text-sm mb-6">
                {translations.booking.confirmDescription}
              </Dialog.Description>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gold-50/30 rounded-lg border border-brand-100">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-brand-500 font-medium">{translations.booking.guests}:</span>
                      <p className="text-brand-900 font-semibold mt-1">{formData.guests}</p>
                    </div>
                    <div>
                      <span className="text-brand-500 font-medium">{translations.booking.date}:</span>
                      <p className="text-brand-900 font-semibold mt-1">{formData.date}</p>
                    </div>
                    <div>
                      <span className="text-brand-500 font-medium">{translations.booking.time}:</span>
                      <p className="text-brand-900 font-semibold mt-1">{formData.time}</p>
                    </div>
                    <div>
                      <span className="text-brand-500 font-medium">{translations.booking.name}:</span>
                      <p className="text-brand-900 font-semibold mt-1">{formData.name}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-brand-500 font-medium">{translations.booking.phone}:</span>
                      <p className="text-brand-900 font-semibold mt-1">{formData.phone}</p>
                    </div>
                    {formData.occasion && (
                      <div className="col-span-2">
                        <span className="text-brand-500 font-medium">{translations.booking.occasion}:</span>
                        <p className="text-brand-900 font-semibold mt-1">
                          {getOccasionText(formData.occasion)}
                        </p>
                      </div>
                    )}
                    {formData.notes && (
                      <div className="col-span-2">
                        <span className="text-brand-500 font-medium">{translations.booking.notes}:</span>
                        <p className="text-brand-900 mt-1 text-sm leading-relaxed">{formData.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleEditForm}
                  className="flex-1 px-6 py-3 rounded-full border border-brand-300 text-brand-700 hover:bg-brand-50 font-medium transition-all duration-200"
                >
                  {translations.booking.edit}
                </button>
                <button
                  type="button"
                  onClick={handleConfirmSubmit}
                  className="flex-1 px-6 py-3 rounded-full bg-brand-900 text-white hover:bg-luxury-gold font-medium transition-all duration-200 shadow-soft hover:shadow-gold"
                >
                  {translations.booking.confirmSubmit}
                </button>
              </div>
            </div>
          ) : (
            // Form Step
            <>
              <div className="flex items-center justify-between mb-6">
                <Dialog.Title className="font-serif text-2xl sm:text-3xl font-semibold text-brand-900 tracking-tight">
                  {translations.booking.title}
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    className="p-2 text-brand-500 hover:text-brand-900 hover:bg-brand-100 rounded-full transition-colors duration-200"
                    aria-label={translations.booking.close}
                  >
                    <span className="iconify" data-icon="lucide:x" data-width="20" data-height="20"></span>
                  </button>
                </Dialog.Close>
              </div>

              <Dialog.Description className="text-brand-500 text-sm mb-6">
                {translations.booking.description}
              </Dialog.Description>

              <form onSubmit={handleSubmit} className="space-y-5" action="#" method="post" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-brand-900 mb-2">
                      {translations.booking.guests} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                        errors.guests
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-brand-200 focus:border-luxury-gold focus:ring-luxury-gold/20'
                      } bg-white text-brand-900 placeholder:text-brand-400`}
                      placeholder={translations.booking.guestsPlaceholder}
                    />
                    {errors.guests && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.guests}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-brand-900 mb-2">
                      {translations.booking.date} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={today}
                      value={formData.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                        errors.date
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-brand-200 focus:border-luxury-gold focus:ring-luxury-gold/20'
                      } bg-white text-brand-900`}
                    />
                    {errors.date && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.date}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-brand-900 mb-2">
                    {translations.booking.time} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.time
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-brand-200 focus:border-luxury-gold focus:ring-luxury-gold/20'
                      } bg-white text-brand-900`}
                  />
                  {errors.time && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.time}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-900 mb-2">
                    {translations.booking.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-brand-200 focus:border-luxury-gold focus:ring-luxury-gold/20'
                    } bg-white text-brand-900 placeholder:text-brand-400`}
                    placeholder={translations.booking.namePlaceholder}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-900 mb-2">
                    {translations.booking.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-brand-200 focus:border-luxury-gold focus:ring-luxury-gold/20'
                    } bg-white text-brand-900 placeholder:text-brand-400`}
                    placeholder={translations.booking.phonePlaceholder}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="occasion" className="block text-sm font-medium text-brand-900 mb-2">
                    {translations.booking.occasion}
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-200 bg-white text-brand-900 focus:outline-none focus:ring-2 focus:border-luxury-gold focus:ring-luxury-gold/20 transition-all duration-200"
                  >
                    <option value="">{translations.booking.occasionPlaceholder}</option>
                    <option value="birthday">{translations.booking.occasionBirthday}</option>
                    <option value="anniversary">{translations.booking.occasionAnniversary}</option>
                    <option value="business">{translations.booking.occasionBusiness}</option>
                    <option value="celebration">{translations.booking.occasionCelebration}</option>
                    <option value="other">{translations.booking.occasionOther}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-brand-900 mb-2">
                    {translations.booking.notes}
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-200 bg-white text-brand-900 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:border-luxury-gold focus:ring-luxury-gold/20 transition-all duration-200 resize-none"
                    placeholder={translations.booking.notesPlaceholder}
                  />
                </div>

                <div className="pt-2 pb-1">
                  <p className="text-xs text-brand-500 leading-relaxed">
                    {translations.booking.disclaimer}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="flex-1 px-6 py-3 rounded-full border border-brand-300 text-brand-700 hover:bg-brand-50 font-medium transition-all duration-200"
                    >
                      {translations.booking.cancel}
                    </button>
                  </Dialog.Close>
                  <button
                    type="submit"
                    disabled={!isFormValid()}
                    className={`flex-1 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      isFormValid()
                        ? 'bg-brand-900 text-white hover:bg-luxury-gold shadow-soft hover:shadow-gold'
                        : 'bg-brand-200 text-brand-500 cursor-not-allowed'
                    }`}
                  >
                    {translations.booking.submit}
                  </button>
                </div>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

