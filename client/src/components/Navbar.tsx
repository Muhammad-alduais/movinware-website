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
        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-3 rtl:space-x-reverse hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }} 
            aria-label="MovinWare"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 text-pulse-500 flex-shrink-0">
              <svg viewBox="0 0 494.95 492.9" fill="currentColor" className="w-full h-full">
                <g>
                  <polygon points="297.32 0 67.34 482.87 0 341.74 162.63 0 297.32 0" />
                  <polygon points="494.95 178.76 343.02 476.88 332.83 480.38 294.08 387.79 304.42 386.86 408.85 174.5 494.95 178.76" />
                  <polygon points="402.47 102.46 213.4 488.21 200.41 492.9 148.94 374.77 162.18 373.37 291.99 98.66 402.47 102.46" />
                </g>
              </svg>
            </div>
            <div className={`text-xl lg:text-2xl font-bold text-gray-900 ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`}>
              MovinWare
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="#" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}>
              {t('nav.home')}
            </a>
            <a href="#value" className="nav-link">{t('nav.value')}</a>
            <a href="#platform" className="nav-link">{t('nav.platform')}</a>
            <a href="#industries" className="nav-link">{t('nav.industries')}</a>
            <a href="#erp-solutions" className="nav-link">{t('nav.erp')}</a>
            <a href="#services" className="nav-link">{t('nav.services')}</a>
            <a href="#contact" className="nav-link">{t('nav.contact')}</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label={String(isMenuOpen ? t('nav.close') : t('nav.open'))}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMenu}
        />
        
        {/* Mobile Menu Panel */}
        <div className={cn(
          "absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out",
          language === 'ar' ? 'left-0 right-auto' : 'right-0 left-auto',
          isMenuOpen ? "translate-x-0" : (language === 'ar' ? "-translate-x-full" : "translate-x-full")
        )}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className={`text-lg font-semibold text-gray-900 ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`}>
              {t('nav.menu')}
            </h2>
            <button 
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={String(t('nav.close'))}
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
          
          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full">
            <nav className="flex-1 p-6">
              <div className="space-y-2">
                <a 
                  href="#" 
                  className={`mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                >
                  {t('nav.home')}
                </a>
                <a href="#value" className={`mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  {t('nav.value')}
                </a>
                <a href="#platform" className={`mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  {t('nav.platform')}
                </a>
                <a href="#industries" className={`mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  {t('nav.industries')}
                </a>
                <a href="#erp-solutions" className={`mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  {t('nav.erp')}
                </a>
                <a href="#services" className={`mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  {t('nav.services')}
                </a>
                <a href="#contact" className={`mobile-nav-link ${language === 'ar' ? 'font-arabic' : 'font-inter'}`} onClick={closeMenu}>
                  {t('nav.contact')}
                </a>
              </div>
            </nav>
            
            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-gray-100 space-y-4">
              <LanguageSwitcher />
              <div className={`text-sm text-gray-500 text-center ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
                © 2025 MovinWare
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;