import React from "react";
import { Brain, Zap, Globe, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const ValueSection = () => {
  const { t, language } = useLanguage();

  const cards = [
    {
      badge: t('value.ai.badge'),
      title: t('value.ai.title'),
      features: Array.isArray(t('value.ai.features')) ? t('value.ai.features') as string[] : [],
      icon: Brain,
    },
    {
      badge: t('value.speed.badge'),
      title: t('value.speed.title'),
      features: Array.isArray(t('value.speed.features')) ? t('value.speed.features') as string[] : [],
      icon: Zap,
    },
    {
      badge: t('value.culture.badge'),
      title: t('value.culture.title'),
      features: Array.isArray(t('value.culture.features')) ? t('value.culture.features') as string[] : [],
      icon: Globe,
    },
    {
      badge: t('value.adoption.badge'),
      title: t('value.adoption.title'),
      features: Array.isArray(t('value.adoption.features')) ? t('value.adoption.features') as string[] : [],
      icon: Users,
    },
  ];

  return (
    <div id="value" className="relative bg-white">
      <section className="w-full py-16 md:py-24">
        <div className="container px-6 lg:px-8 mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-4 mb-2">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="group opacity-0 animate-slide-up bg-white rounded-3xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl h-full flex flex-col"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-pulse-100 transition-all duration-500">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
                    </div>
                    <span className="inline-block text-xs text-pulse-500 font-medium bg-pulse-100 px-3 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className={`text-lg md:text-xl font-medium text-gray-900 mb-4 leading-snug ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
                    {card.title}
                  </h3>

                  <ul className="text-gray-600 text-sm space-y-2.5 mt-auto">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-pulse-500 shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValueSection;
