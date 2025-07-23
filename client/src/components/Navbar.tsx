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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-105 flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }} 
            aria-label="MovinWare"
            dir="ltr"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-pulse-500 flex-shrink-0 mr-2 lg:mr-3">
              <svg viewBox="0 0 494.95 492.9" fill="currentColor" className="w-full h-full drop-shadow-sm">
                <g>
                  <polygon points="297.32 0 67.34 482.87 0 341.74 162.63 0 297.32 0" />
                  <polygon points="494.95 178.76 343.02 476.88 332.83 480.38 294.08 387.79 304.42 386.86 408.85 174.5 494.95 178.76" />
                  <polygon points="402.47 102.46 213.4 488.21 200.41 492.9 148.94 374.77 162.18 373.37 291.99 98.66 402.47 102.46" />
                </g>
              </svg>
            </div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold font-glacial text-gray-900 drop-shadow-sm">
              MovinWare
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 rtl:space-x-reverse flex-1 justify-center">
            <a href="#" className="modern-nav-link text-sm xl:text-base" onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}>
              {t('nav.home')}
            </a>
            <a href="#value" className="modern-nav-link text-sm xl:text-base">{t('nav.value')}</a>
            <a href="#platform" className="modern-nav-link text-sm xl:text-base">{t('nav.platform')}</a>
            <a href="#industries" className="modern-nav-link text-sm xl:text-base">{t('nav.industries')}</a>
            <a href="#erp-solutions" className="modern-nav-link text-sm xl:text-base">{t('nav.erp')}</a>
            <a href="#services" className="modern-nav-link text-sm xl:text-base">{t('nav.services')}</a>
            <a href="#contact" className="modern-nav-link text-sm xl:text-base">{t('nav.contact')}</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse flex-shrink-0">
            <LanguageSwitcher />
          </div>

          {/* Mobile/Tablet Actions - Always show language switcher */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse lg:hidden">
            <LanguageSwitcher />
            <button 
              className={cn(
                "relative z-[10001] p-2.5 rounded-xl transition-all duration-300 flex-shrink-0",
                "bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg",
                "border border-gray-200/50 hover:border-gray-300",
                "hover:scale-105 active:scale-95",
                isMenuOpen && "bg-gray-100 shadow-inner"
              )}
              onClick={toggleMenu}
              aria-label={String(isMenuOpen ? t('nav.close') : t('nav.open'))}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                {isMenuOpen ? (
                  <X size={20} className="text-gray-700" />
                ) : (
                  <Menu size={20} className="text-gray-700" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation Overlay */}
      <div className={cn(
        "fixed inset-0 z-[9999] lg:hidden transition-all duration-500 ease-out",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        {/* Enhanced Backdrop with better blur */}
        <div 
          className={cn(
            "fixed inset-0 bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-md transition-all duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMenu}
        />
        
        {/* Modern Mobile Menu Panel */}
        <div className={cn(
          "fixed top-0 h-screen w-80 max-w-[85vw] transition-all duration-500 ease-out",
          "bg-white/95 backdrop-blur-xl shadow-2xl",
          "border border-white/20 z-[10000]",
          language === 'ar' ? 'left-0 right-auto' : 'right-0 left-auto',
          isMenuOpen 
            ? "translate-x-0 opacity-100" 
            : language === 'ar' 
              ? "-translate-x-full opacity-0" 
              : "translate-x-full opacity-0"
        )}>
          {/* Enhanced Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-pulse-50/50 to-purple-50/50 border-b border-gray-100/50 backdrop-blur-sm">
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
            
            {/* Enhanced Mobile Menu Footer */}
            <div className="p-6 bg-gradient-to-r from-gray-50/50 to-pulse-50/30 border-t border-gray-100/50 backdrop-blur-sm">
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