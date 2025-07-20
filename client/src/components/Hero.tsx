import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
import { OptimizedImage, OptimizedBackground } from "./ui";
import { useLanguage } from "../contexts/LanguageContext";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const {
    t,
    language
  } = useLanguage();
  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  useEffect(() => {
    // Try to load the Lottie animation, but fall back gracefully if it fails
    const loadLottieAnimation = async () => {
      try {
        // For .lottie files, we need to use a different approach
        // Let's try loading it as a regular JSON file first
        const response = await fetch('/loop-header.json');
        if (response.ok) {
          const data = await response.json();
          setLottieData(data);
        } else {
          // If JSON doesn't exist, we'll skip the animation
          console.log("Lottie JSON file not found, using fallback image");
        }
      } catch (error) {
        console.log("Could not load Lottie animation, using fallback image:", error);
        // We'll just use the fallback image instead
      }
    };
    loadLottieAnimation();
  }, []);
  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  return <OptimizedBackground src="/new-Header-background.png" className="overflow-hidden relative" priority={true} style={{
    backgroundPosition: 'center 30%',
    padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
  }}>
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              
              <span>{t('hero.chip')}</span>
            </div>
            
            <h1 className={`section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`} style={{
            animationDelay: "0.3s"
          }}>
              {String(t('hero.title')).split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br className="hidden sm:inline" />}
                </span>
              ))}
            </h1>
            
            <p style={{
            animationDelay: "0.5s"
          }} className={`section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal sm:text-lg text-lg ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{
            animationDelay: "0.7s"
          }}>
              <a href="#contact" className="flex items-center justify-center group w-full sm:w-auto text-center" style={{
              backgroundColor: '#4942E4',
              borderRadius: '1440px',
              boxSizing: 'border-box',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '14px',
              lineHeight: '20px',
              padding: '16px 24px',
              border: '1px solid white'
            }}>
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {lottieData ? <div className="relative z-10 animate-fade-in" style={{
            animationDelay: "0.9s"
          }}>
                <LottieAnimation animationPath={lottieData} className="w-full h-auto max-w-lg mx-auto" loop={true} autoplay={true} />
              </div> : <>
              <div className="absolute inset-0 bg-dark-900 rounded-2xl sm:rounded-3xl -z-10 shadow-xl"></div>
              <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl animate-fade-in" style={{
              animationDelay: "0.9s"
            }}>
                <OptimizedImage ref={imageRef} src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png" alt="MovinWare ERP Dashboard" className="w-full h-auto object-cover transition-transform duration-500 ease-out" style={{
                transformStyle: 'preserve-3d'
              }} priority={true} />
              </div>
              </>}
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </OptimizedBackground>;
};
export default Hero;