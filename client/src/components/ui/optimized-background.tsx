import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedBackgroundProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
  placeholder?: boolean;
  style?: React.CSSProperties;
  webpSrc?: string;
  avifSrc?: string;
}

export const OptimizedBackground: React.FC<OptimizedBackgroundProps> = ({
  src,
  className,
  children,
  priority = false,
  placeholder = true,
  style,
  webpSrc,
  avifSrc,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Function to get the best supported image format
  const getBestImageSrc = (): string => {
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

  useEffect(() => {
    if (!isInView) return;

    const bestSrc = getBestImageSrc();
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = bestSrc;
  }, [isInView, src, webpSrc, avifSrc]);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{
        ...style,
        ...(isLoaded && {
          backgroundImage: `url('${getBestImageSrc()}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }),
      }}
    >
      {placeholder && !isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <div className={cn("relative z-10", isLoaded ? "opacity-100" : "opacity-0", "transition-opacity duration-500")}>
        {children}
      </div>
    </div>
  );
};