import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
const Navbar = () => {
  const {
    t
  } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300", isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={e => {
        e.preventDefault();
        scrollToTop();
      }} aria-label="MovinWare">
          <div className="w-8 h-8 text-pulse-500">
            <svg viewBox="0 0 494.95 492.9" fill="currentColor" className="w-full h-full">
              <g>
                <polygon points="297.32 0 67.34 482.87 0 341.74 162.63 0 297.32 0" />
                <polygon points="494.95 178.76 343.02 476.88 332.83 480.38 294.08 387.79 304.42 386.86 408.85 174.5 494.95 178.76" />
                <polygon points="402.47 102.46 213.4 488.21 200.41 492.9 148.94 374.77 162.18 373.37 291.99 98.66 402.47 102.46" />
              </g>
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-900">MovinWare</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
          <a href="#" className="nav-link" onClick={e => {
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

        {/* Language Switcher - Desktop */}
        <LanguageSwitcher className="hidden md:block" />

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700 p-3 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? t('nav.close') : t('nav.open')}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out", isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none")}>
        {/* Mobile Header with Close Button */}
        <div className="flex items-center justify-between py-4 border-b border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-gray-900">{t('nav.menu')}</h2>
          <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" aria-label={t('nav.close')}>
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-6">
          <a href="#" className="text-lg font-medium py-4 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={e => {
          e.preventDefault();
          scrollToTop();
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            {t('nav.home')}
          </a>
          <a href="#value" className="text-lg font-medium py-4 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            {t('nav.value')}
          </a>
          <a href="#platform" className="text-lg font-medium py-4 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            {t('nav.platform')}
          </a>
          <a href="#industries" className="text-lg font-medium py-4 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            {t('nav.industries')}
          </a>
          <a href="#erp-solutions" className="text-lg font-medium py-4 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            {t('nav.erp')}
          </a>
          <a href="#services" className="text-lg font-medium py-4 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            {t('nav.services')}
          </a>
          <a href="#contact" className="text-lg font-medium py-4 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            {t('nav.contact')}
          </a>
        </nav>
        
        {/* Language Switcher - Mobile */}
        <div className="mt-8 px-4">
          <LanguageSwitcher className="w-full" />
        </div>
        
        {/* Mobile Footer */}
        <div className="mt-auto pb-8">
          <div className="text-center text-sm text-gray-500">
            © 2025 MovinWare
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;