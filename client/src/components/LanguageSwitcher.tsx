import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
interface LanguageSwitcherProps {
  className?: string;
}
const LanguageSwitcher = ({
  className = ""
}: LanguageSwitcherProps) => {
  const {
    language,
    setLanguage
  } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const languages = [{
    code: 'en',
    name: 'English',
    nativeName: 'English'
  }, {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية'
  }];
  useEffect(() => {
    // Apply RTL for Arabic and font family
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.documentElement.classList.add('font-arabic');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      document.documentElement.classList.remove('font-arabic');
    }
  }, [language]);
  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);

    // Apply RTL for Arabic and font family
    if (langCode === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.documentElement.classList.add('font-arabic');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      document.documentElement.classList.remove('font-arabic');
    }
    setIsOpen(false);
  };
  const currentLang = languages.find(lang => lang.code === language) || languages[0];
  
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    handleLanguageChange(newLang);
  };

  return <div className={`relative ${className}`}>
      <button onClick={toggleLanguage} aria-label="Switch language" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-[#4942e4]">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang.nativeName}</span>
      </button>
    </div>;
};
export default LanguageSwitcher;