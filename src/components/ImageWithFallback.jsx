import { useState } from 'react';

export const ImageWithFallback = ({ src, alt, className, fallback = 'https://via.placeholder.com/800x600/f1f5f9/64748b?text=Image' }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  // Remove crossOrigin for Unsplash images as it might cause CORS issues
  // Unsplash images should work without it
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

