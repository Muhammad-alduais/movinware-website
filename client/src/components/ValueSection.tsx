import React, { useEffect, useRef, useState } from "react";
import { OptimizedBackground } from "./ui";
import { useLanguage } from "../contexts/LanguageContext";
const ValueSection = () => {
  const {
    t,
    language
  } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };
  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Optimized scroll handler using requestAnimationFrame with smoother transitions
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;

          // Calculate the scroll progress with smoother transitions
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }

          // Add smooth transition zones to prevent sudden jumps
          let newActiveIndex = activeCardIndex;
          if (progress >= 0.8) {
            newActiveIndex = 3;
          } else if (progress >= 0.55) {
            newActiveIndex = 2;
          } else if (progress >= 0.3) {
            newActiveIndex = 1;
          } else if (progress < 0.15) {
            newActiveIndex = 0;
          }
          
          // Only update if the index actually changes to prevent unnecessary re-renders
          if (newActiveIndex !== activeCardIndex) {
            setActiveCardIndex(newActiveIndex);
          }
          
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;
  const isFourthCardVisible = activeCardIndex >= 3;
  return <div ref={sectionRef} className="relative" style={{
    height: '400vh'
  }}>
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="value">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{
              animationDelay: "0.1s"
            }}>
                
                <span>{t('value.section')}</span>
              </div>
            </div>
            
            <h2 className={`section-title text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2 ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`}>
              {t('value.title')}
            </h2>
            <p className={`text-xl text-gray-600 mb-4 ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
              {t('value.subtitle')}
            </p>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* AI Features Card */}
            <div className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} style={{
            ...cardStyle,
            zIndex: 10,
            transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
            opacity: isFirstCardVisible ? 0.9 : 0
          }}>
              <OptimizedBackground 
                src="/background-section1.png" 
                webpSrc="/background-section1.webp"
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80" 
                style={{
                  backgroundPosition: "top center",
                  backgroundBlendMode: "overlay"
                }} />
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">{t('value.ai.badge')}</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight mb-4 ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`}>
                    {t('value.ai.title')}
                  </h3>
                  <ul className="text-white/90 space-y-2">
                    {(Array.isArray(t('value.ai.features')) ? t('value.ai.features') as string[] : []).map((feature: string, index: number) => <li key={index}>• {feature}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Unmatched Speed Card */}
            <div className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} style={{
            ...cardStyle,
            zIndex: 20,
            transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
            opacity: isSecondCardVisible ? 1 : 0,
            pointerEvents: isSecondCardVisible ? 'auto' : 'none'
          }}>
              <OptimizedBackground 
                src="/background-section2.png" 
                webpSrc="/background-section2.webp"
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80" 
                style={{
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay"
                }} />
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">{t('value.speed.badge')}</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight mb-4 ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`}>
                    {t('value.speed.title')}
                  </h3>
                  <ul className="text-white/90 space-y-2">
                    {(Array.isArray(t('value.speed.features')) ? t('value.speed.features') as string[] : []).map((feature: string, index: number) => <li key={index}>• {feature}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Cultural Fit Card */}
            <div className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} style={{
            ...cardStyle,
            zIndex: 30,
            transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '25px' : '15px' : '200px'}) scale(0.98)`,
            opacity: isThirdCardVisible ? 1 : 0,
            pointerEvents: isThirdCardVisible ? 'auto' : 'none'
          }}>
              <OptimizedBackground 
                src="/new-update1-background-section3.png" 
                webpSrc="/new-update1-background-section3.webp"
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80" 
                style={{
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }} />
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">{t('value.culture.badge')}</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight mb-4 ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`}>
                    {t('value.culture.title')}
                  </h3>
                  <ul className="text-white/90 space-y-2">
                    {(Array.isArray(t('value.culture.features')) ? t('value.culture.features') as string[] : []).map((feature: string, index: number) => <li key={index}>• {feature}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Easy Adoption Card */}
            <div className={`absolute inset-0 overflow-hidden shadow-xl ${isFourthCardVisible ? 'animate-card-enter' : ''}`} style={{
            ...cardStyle,
            zIndex: 40,
            transform: `translateY(${isFourthCardVisible ? '0px' : '200px'}) scale(1)`,
            opacity: isFourthCardVisible ? 1 : 0,
            pointerEvents: isFourthCardVisible ? 'auto' : 'none'
          }}>
              <OptimizedBackground 
                src="/background-section1.png" 
                webpSrc="/background-section1.webp"
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80" 
                style={{
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay"
                }} />
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">{t('value.adoption.badge')}</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight mb-4 ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`}>
                    {t('value.adoption.title')}
                  </h3>
                  <ul className="text-white/90 space-y-2">
                    {(Array.isArray(t('value.adoption.features')) ? t('value.adoption.features') as string[] : []).map((feature: string, index: number) => <li key={index}>• {feature}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ValueSection;