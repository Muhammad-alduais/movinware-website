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
  return <div className={`relative ${className}`}>
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Switch language" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-[#4942e4]">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang.nativeName}</span>
      </button>

      {isOpen && <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          
          {/* Dropdown */}
          <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[150px] z-50">
            {languages.map(lang => <button key={lang.code} onClick={() => handleLanguageChange(lang.code)} className={`
                  w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200
                  ${lang.code === language ? 'bg-pulse-50 text-pulse-600 font-medium' : 'text-gray-700'}
                  ${lang.code === languages[0].code ? 'rounded-t-lg' : ''}
                  ${lang.code === languages[languages.length - 1].code ? 'rounded-b-lg' : ''}
                `} dir={lang.code === 'ar' ? 'rtl' : 'ltr'}>
                <div className="flex items-center justify-between">
                  <span>{lang.nativeName}</span>
                  <span className="text-xs text-gray-500">{lang.name}</span>
                </div>
              </button>)}
          </div>
        </>}
    </div>;
};
export default LanguageSwitcher;