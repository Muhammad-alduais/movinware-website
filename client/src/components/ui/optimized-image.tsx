import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  placeholder?: boolean;
  fallbackSrc?: string;
  webpSrc?: string;
  avifSrc?: string;
}

export const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(({
  src,
  alt,
  priority = false,
  placeholder = true,
  fallbackSrc,
  webpSrc,
  avifSrc,
  className,
  ...props
}, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    if (fallbackSrc) {
      setIsLoaded(true);
    }
  };

  // Function to get the best supported image format
  const getBestImageSrc = (): string => {
    if (hasError && fallbackSrc) return fallbackSrc;
    // Check for modern format support
    if (avifSrc && supportsAvif()) return avifSrc;
    if (webpSrc && supportsWebp()) return webpSrc;
    return src;
  };

  // Simple WebP support detection
  const supportsWebp = (): boolean => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('webp') !== -1;
  };

  // Simple AVIF support detection
  const supportsAvif = (): boolean => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/avif').indexOf('avif') !== -1;
  };

  const imageSrc = getBestImageSrc();

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)}>
      {placeholder && !isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      {isInView && (
        <img
          ref={ref}
          src={imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          loading={priority ? "eager" : "lazy"}
          {...props}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = "OptimizedImage";