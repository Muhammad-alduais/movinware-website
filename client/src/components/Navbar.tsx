import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle body scroll lock when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-white/85 backdrop-blur-2xl shadow-xl shadow-black/5 border-b border-white/20" 
        : "bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Modern Logo */}
          <a 
            href="#" 
            className="group flex items-center space-x-2 lg:space-x-3 rtl:space-x-reverse transition-all duration-500 hover:scale-105 flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }} 
            aria-label="MovinWare"
          >
            <div className="relative">
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-pulse-500 flex-shrink-0 transition-all duration-500 group-hover:text-pulse-600">
                <svg viewBox="0 0 494.95 492.9" fill="currentColor" className="w-full h-full drop-shadow-lg">
                  <g>
                    <polygon points="297.32 0 67.34 482.87 0 341.74 162.63 0 297.32 0" />
                    <polygon points="494.95 178.76 343.02 476.88 332.83 480.38 294.08 387.79 304.42 386.86 408.85 174.5 494.95 178.76" />
                    <polygon points="402.47 102.46 213.4 488.21 200.41 492.9 148.94 374.77 162.18 373.37 291.99 98.66 402.47 102.46" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-pulse-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
            </div>
            <div className={`text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent ${language === 'ar' ? 'font-cairo' : 'font-brockmann'} transition-all duration-500 group-hover:from-pulse-600 group-hover:to-pulse-400`}>
              MovinWare
            </div>
          </a>

          {/* Modern Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 rtl:space-x-reverse flex-1 justify-center">
            <div className="flex items-center space-x-1 xl:space-x-2 rtl:space-x-reverse bg-white/60 backdrop-blur-xl rounded-2xl px-3 py-2 shadow-lg shadow-black/5 border border-white/20">
              <a href="#" className="modern-nav-link whitespace-nowrap flex-shrink-0" onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}>
                {t('nav.home')}
              </a>
              <a href="#value" className="modern-nav-link whitespace-nowrap flex-shrink-0">{t('nav.value')}</a>
              <a href="#platform" className="modern-nav-link whitespace-nowrap flex-shrink-0">{t('nav.platform')}</a>
              <a href="#industries" className="modern-nav-link whitespace-nowrap flex-shrink-0">{t('nav.industries')}</a>
              <a href="#erp-solutions" className="modern-nav-link whitespace-nowrap flex-shrink-0">{t('nav.erp')}</a>
              <a href="#services" className="modern-nav-link whitespace-nowrap flex-shrink-0">{t('nav.services')}</a>
              <a href="#contact" className="modern-nav-link whitespace-nowrap flex-shrink-0">{t('nav.contact')}</a>
            </div>
          </nav>

          {/* Modern Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse flex-shrink-0">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-1 shadow-lg shadow-black/5 border border-white/20">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Modern Mobile menu button */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse lg:hidden">
            <div className="hidden sm:block bg-white/60 backdrop-blur-xl rounded-2xl p-1 shadow-lg shadow-black/5 border border-white/20">
              <LanguageSwitcher />
            </div>
            <button 
              className={cn(
                "relative z-50 p-3 rounded-2xl transition-all duration-500 flex-shrink-0 group",
                "bg-white/80 backdrop-blur-xl shadow-xl shadow-black/10",
                "border border-white/30 hover:border-pulse-200",
                "hover:scale-110 active:scale-95 hover:shadow-2xl hover:shadow-pulse-500/20",
                isMenuOpen && "bg-pulse-50 shadow-inner border-pulse-300"
              )}
              onClick={toggleMenu}
              aria-label={String(isMenuOpen ? t('nav.close') : t('nav.open'))}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                <div className="relative">
                  {isMenuOpen ? (
                    <X size={20} className="text-pulse-600 transition-all duration-300" />
                  ) : (
                    <Menu size={20} className="text-gray-700 group-hover:text-pulse-600 transition-all duration-300" />
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        {/* Enhanced Backdrop with better blur */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-md transition-all duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMenu}
        />
        
        {/* Ultra-Modern Mobile Menu Panel */}
        <div className={cn(
          "absolute top-0 h-full w-80 max-w-[85vw] transition-all duration-700 ease-out",
          "bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-2xl shadow-2xl",
          "border border-white/30 shadow-pulse-500/10",
          language === 'ar' ? 'left-0 right-auto' : 'right-0 left-auto',
          isMenuOpen 
            ? "translate-x-0 opacity-100" 
            : language === 'ar' 
              ? "-translate-x-full opacity-0" 
              : "translate-x-full opacity-0"
        )}>
          {/* Ultra-Modern Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-pulse-50/60 via-purple-50/40 to-blue-50/50 border-b border-white/30 backdrop-blur-sm shadow-inner">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-6 h-6 text-pulse-500">
                <svg viewBox="0 0 494.95 492.9" fill="currentColor" className="w-full h-full">
                  <g>
                    <polygon points="297.32 0 67.34 482.87 0 341.74 162.63 0 297.32 0" />
                    <polygon points="494.95 178.76 343.02 476.88 332.83 480.38 294.08 387.79 304.42 386.86 408.85 174.5 494.95 178.76" />
                    <polygon points="402.47 102.46 213.4 488.21 200.41 492.9 148.94 374.77 162.18 373.37 291.99 98.66 402.47 102.46" />
                  </g>
                </svg>
              </div>
              <h2 className={`text-lg font-bold text-gray-900 ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`}>
                {t('nav.menu')}
              </h2>
            </div>
            <button 
              onClick={closeMenu}
              className={cn(
                "p-2.5 rounded-xl transition-all duration-300",
                "bg-white/80 hover:bg-white shadow-sm hover:shadow-md",
                "border border-gray-200/50 hover:border-gray-300",
                "hover:scale-105 active:scale-95"
              )}
              aria-label={String(t('nav.close'))}
            >
              <X size={18} className="text-gray-700" />
            </button>
          </div>
          
          {/* Enhanced Mobile Menu Content */}
          <div className="flex flex-col h-full">
            <nav className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-3">
                <a 
                  href="#" 
                  className={`modern-mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                >
                  <div className="flex items-center">
                    <span>{t('nav.home')}</span>
                  </div>
                </a>
                <a href="#value" className={`modern-mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  <div className="flex items-center">
                    <span>{t('nav.value')}</span>
                  </div>
                </a>
                <a href="#platform" className={`modern-mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  <div className="flex items-center">
                    <span>{t('nav.platform')}</span>
                  </div>
                </a>
                <a href="#industries" className={`modern-mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  <div className="flex items-center">
                    <span>{t('nav.industries')}</span>
                  </div>
                </a>
                <a href="#erp-solutions" className={`modern-mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  <div className="flex items-center">
                    <span>{t('nav.erp')}</span>
                  </div>
                </a>
                <a href="#services" className={`modern-mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  <div className="flex items-center">
                    <span>{t('nav.services')}</span>
                  </div>
                </a>
                <a href="#contact" className={`modern-mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  <div className="flex items-center">
                    <span>{t('nav.contact')}</span>
                  </div>
                </a>
              </div>
            </nav>
            
            {/* Modern Mobile Menu Footer */}
            <div className="p-6 bg-gradient-to-r from-gray-50/60 via-pulse-50/30 to-purple-50/40 border-t border-white/30 backdrop-blur-sm space-y-4 shadow-inner">
              <div className="block sm:hidden">
                <LanguageSwitcher />
              </div>
              <div className={`text-xs text-gray-500 text-center ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
                © 2025 MovinWare. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;