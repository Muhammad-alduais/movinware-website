import React from "react";
import { Search, Palette, Code, Rocket, TrendingUp, Clock, CheckCircle, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
const ImplementationProcess = () => {
  const { t, language } = useLanguage();
  const phases = [{
    icon: Search,
    title: t('implementation.phases.discovery.title'),
    duration: t('implementation.phases.discovery.duration'),
    description: t('implementation.phases.discovery.description'),
    deliverables: t('implementation.phases.discovery.deliverables'),
    color: "bg-blue-50 text-blue-600"
  }, {
    icon: Palette,
    title: t('implementation.phases.design.title'),
    duration: t('implementation.phases.design.duration'),
    description: t('implementation.phases.design.description'),
    deliverables: t('implementation.phases.design.deliverables'),
    color: "bg-purple-50 text-purple-600"
  }, {
    icon: Code,
    title: t('implementation.phases.development.title'),
    duration: t('implementation.phases.development.duration'),
    description: t('implementation.phases.development.description'),
    deliverables: t('implementation.phases.development.deliverables'),
    color: "bg-green-50 text-green-600"
  }, {
    icon: Rocket,
    title: t('implementation.phases.deployment.title'),
    duration: t('implementation.phases.deployment.duration'),
    description: t('implementation.phases.deployment.description'),
    deliverables: t('implementation.phases.deployment.deliverables'),
    color: "bg-orange-50 text-orange-600"
  }, {
    icon: TrendingUp,
    title: t('implementation.phases.optimization.title'),
    duration: t('implementation.phases.optimization.duration'),
    description: t('implementation.phases.optimization.description'),
    deliverables: t('implementation.phases.optimization.deliverables'),
    color: "bg-pulse-50 text-pulse-600"
  }];
  const timeline = [{
    week: t('implementation.timeline.weeks.1-2'),
    phase: t('implementation.timeline.phases.discovery')
  }, {
    week: t('implementation.timeline.weeks.3-5'),
    phase: t('implementation.timeline.phases.design')
  }, {
    week: t('implementation.timeline.weeks.6-9'),
    phase: t('implementation.timeline.phases.development')
  }, {
    week: t('implementation.timeline.weeks.10-11'),
    phase: t('implementation.timeline.phases.deployment')
  }, {
    week: t('implementation.timeline.weeks.12+'),
    phase: t('implementation.timeline.phases.support')
  }];
  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };
  return <section className="bg-white" id="implementation">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 via-red-600/30 to-pink-600/40"></div>
        <div className="absolute inset-0 bg-black/25"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            
            <span className="font-semibold">{t('implementation.section')}</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            {t('implementation.title').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index === 0 && <br />}
              </span>
            ))}
          </h2>
          <p className="section-header-subtitle">
            {t('implementation.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="mb-20 opacity-0 animate-fade-scale" style={{
        animationDelay: "0.2s"
      }}>
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-8 text-center">Implementation Timeline</h3>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {timeline.map((item, index) => <div key={index} className="flex flex-col items-center text-center relative">
                  <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center text-white font-medium mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Week {item.week}</div>
                  <div className="text-xs text-gray-600">{item.phase}</div>
                  {index < timeline.length - 1 && <div className="hidden md:block absolute left-full top-6 w-full h-px bg-gray-200"></div>}
                </div>)}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {phases.map((phase, index) => <div key={index} className="opacity-0 animate-slide-up" style={{
          animationDelay: `${0.1 * (index + 3)}s`
        }}>
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-500">
                <div className="p-8 lg:p-12">
                  {language === 'ar' ? (
                    /* Arabic Layout - Enhanced RTL Design */
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Main Content Section - Right Side in Arabic */}
                      <div className="flex-1 font-arabic">
                        {/* Header with Icon and Title */}
                        <div className="flex items-start mb-6 flex-row-reverse">
                          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center ml-5 shadow-lg ${phase.color}`}>
                            <phase.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-right flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 font-arabic leading-tight mb-3">
                              {phase.title}
                            </h3>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pulse-500 to-purple-600 text-white text-sm font-semibold shadow-md">
                              <Clock className="w-4 h-4 ml-2" />
                              {phase.duration}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="bg-gradient-to-l from-gray-50 to-white rounded-2xl p-6 arabic-gradient-border">
                          <p className="text-gray-700 leading-relaxed text-right font-arabic text-lg">
                            {phase.description}
                          </p>
                        </div>
                      </div>

                      {/* Deliverables Section - Left Side in Arabic */}
                      <div className="lg:w-80">
                        <div className="bg-gradient-to-br from-pulse-50 to-purple-50 rounded-2xl p-6 border border-pulse-200 arabic-card-shadow">
                          <h4 className="text-base font-bold text-gray-900 mb-5 flex items-center flex-row-reverse text-right font-arabic">
                            <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                            {t('implementation.key_deliverables')}
                          </h4>
                          <div className="space-y-4">
                            {phase.deliverables.map((deliverable, deliverableIndex) => (
                              <div key={deliverableIndex} className="flex items-center text-sm text-gray-700 flex-row-reverse text-right bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                <div className="w-3 h-3 bg-gradient-to-r from-pulse-500 to-purple-600 rounded-full ml-3 flex-shrink-0 shadow-sm"></div>
                                <span className="font-arabic font-medium">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* English Layout - LTR Design */
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 ${phase.color}`}>
                            <phase.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-medium text-gray-900">{phase.title}</h3>
                            <p className="text-pulse-500 font-medium">{phase.duration}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {phase.description}
                        </p>
                      </div>

                      <div className="lg:w-80">
                        <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {t('implementation.key_deliverables')}
                        </h4>
                        <div className="space-y-3">
                          {phase.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-pulse-500 rounded-full mr-3"></div>
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>)}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12 opacity-0 animate-slide-up" style={{
          animationDelay: "0.8s"
        }}>
            <h3 className={`text-2xl font-light text-gray-900 mb-4 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>{t('implementation.why_works')}</h3>
            <p className={`text-gray-600 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>{t('implementation.why_works.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
            metric: t('implementation.stats.faster.metric'),
            label: t('implementation.stats.faster.label'),
            desc: t('implementation.stats.faster.desc')
          }, {
            metric: t('implementation.stats.downtime.metric'),
            label: t('implementation.stats.downtime.label'),
            desc: t('implementation.stats.downtime.desc')
          }, {
            metric: t('implementation.stats.adoption.metric'),
            label: t('implementation.stats.adoption.label'),
            desc: t('implementation.stats.adoption.desc')
          }, {
            metric: t('implementation.stats.support.metric'),
            label: t('implementation.stats.support.label'),
            desc: t('implementation.stats.support.desc')
          }].map((stat, index) => <div key={index} className={`text-center bg-gray-50 rounded-3xl p-6 border border-gray-100 opacity-0 animate-fade-scale hover:animate-gentle-float ${
            language === 'ar' ? 'font-arabic' : ''
          }`} style={{
            animationDelay: `${0.9 + 0.1 * index}s`
          }}>
                <div className={`text-3xl font-light text-pulse-500 mb-2 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>{stat.metric}</div>
                <div className={`font-medium text-gray-900 mb-1 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>{stat.label}</div>
                <div className={`text-xs text-gray-600 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>{stat.desc}</div>
              </div>)}
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{
        animationDelay: "1.3s"
      }}>
          
        </div>
      </div>
    </section>;
};
export default ImplementationProcess;