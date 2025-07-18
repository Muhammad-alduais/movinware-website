import React, { useState } from "react";
import { Settings, Building2, Brain, Palette, Database, Headphones } from "lucide-react";
import DetailModal from "./DetailModal";
import PreviewCard from "./PreviewCard";
import { useLanguage } from "../contexts/LanguageContext";
const Services = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<any>(null);
  const services = [{
    icon: Settings,
    title: t('services.erp.title'),
    description: t('services.erp.description'),
    capabilities: t('services.erp.capabilities'),
    timeline: t('services.erp.timeline'),
    fullDescription: t('services.erp.fullDescription'),
    benefits: t('services.erp.benefits'),
    processSteps: t('services.erp.processSteps')
  }, {
    icon: Building2,
    title: t('services.industry.title'),
    description: t('services.industry.description'),
    capabilities: t('services.industry.capabilities'),
    timeline: t('services.industry.timeline'),
    fullDescription: t('services.industry.fullDescription'),
    benefits: t('services.industry.benefits')
  }, {
    icon: Brain,
    title: t('services.ai.title'),
    description: t('services.ai.description'),
    capabilities: t('services.ai.capabilities'),
    timeline: t('services.ai.timeline'),
    fullDescription: t('services.ai.fullDescription'),
    benefits: t('services.ai.benefits')
  }, {
    icon: Palette,
    title: t('services.ux.title'),
    description: t('services.ux.description'),
    capabilities: t('services.ux.capabilities'),
    timeline: t('services.ux.timeline'),
    fullDescription: t('services.ux.fullDescription'),
    benefits: t('services.ux.benefits')
  }, {
    icon: Database,
    title: t('services.data.title'),
    description: t('services.data.description'),
    capabilities: t('services.data.capabilities'),
    timeline: t('services.data.timeline'),
    fullDescription: t('services.data.fullDescription'),
    benefits: t('services.data.benefits')
  }, {
    icon: Headphones,
    title: t('services.support.title'),
    description: t('services.support.description'),
    capabilities: t('services.support.capabilities'),
    timeline: t('services.support.timeline'),
    fullDescription: t('services.support.fullDescription'),
    benefits: t('services.support.benefits')
  }];
  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };
  return <section className="bg-gray-50" id="services">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-pink-600/30 to-red-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            
            <span className="font-semibold">{t('services.section')}</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            {t('services.title').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index === 0 && <br />}
              </span>
            ))}
          </h2>
          <p className="section-header-subtitle">
            {t('services.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => <PreviewCard key={index} icon={service.icon} title={service.title} description={service.description} timeline={service.timeline} onLearnMore={() => setSelectedService(service)} index={index} />)}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{
        animationDelay: "0.4s"
      }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">{t('services.methodology')}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('services.methodology.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 relative">
              {[{
              step: t('services.methodology.steps.consultation'),
              description: t('services.methodology.steps.consultation.desc')
            }, {
              step: t('services.methodology.steps.planning'),
              description: t('services.methodology.steps.planning.desc')
            }, {
              step: t('services.methodology.steps.execution'),
              description: t('services.methodology.steps.execution.desc')
            }, {
              step: t('services.methodology.steps.delivery'),
              description: t('services.methodology.steps.delivery.desc')
            }, {
              step: t('services.methodology.steps.support'),
              description: t('services.methodology.steps.support.desc')
            }].map((process, index) => <div key={index} className="flex flex-col items-center text-center relative flex-1">
                  <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center text-white font-medium mb-4 text-sm relative z-10">
                    {index + 1}
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{process.step}</h4>
                  <p className="text-sm text-gray-600 max-w-32">{process.description}</p>
                  {index < 4 && <div className="hidden md:block absolute left-full top-6 w-full h-px bg-gray-200 transform -translate-y-1/2 z-0"></div>}
                </div>)}
            </div>
          </div>
        </div>

        <div className="mt-20 opacity-0 animate-slide-up" style={{
        animationDelay: "0.6s"
      }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            metric: t('services.stats.professionals.metric'),
            label: t('services.stats.professionals.label'),
            desc: t('services.stats.professionals.desc')
          }, {
            metric: t('services.stats.projects.metric'),
            label: t('services.stats.projects.label'),
            desc: t('services.stats.projects.desc')
          }, {
            metric: t('services.stats.satisfaction.metric'),
            label: t('services.stats.satisfaction.label'),
            desc: t('services.stats.satisfaction.desc')
          }].map((stat, index) => <div key={index} className="text-center bg-white rounded-3xl p-8 border border-gray-200">
                <div className="text-3xl font-light text-pulse-500 mb-2">{stat.metric}</div>
                <div className="font-medium text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </div>)}
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{
        animationDelay: "0.8s"
      }}>
          
        </div>
      </div>
      
      <DetailModal isOpen={selectedService !== null} onClose={() => setSelectedService(null)} title={selectedService?.title || ""} description={selectedService?.fullDescription || selectedService?.description || ""} capabilities={selectedService?.capabilities || []} benefits={selectedService?.benefits || []} processSteps={selectedService?.processSteps} timeline={selectedService?.timeline} icon={selectedService?.icon || Settings} />
    </section>;
};
export default Services;