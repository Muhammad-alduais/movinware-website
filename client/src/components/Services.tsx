import React, { useState, useMemo } from "react";
import { Settings, Building2, Brain, Palette, Database, Headphones } from "lucide-react";
import DetailModal from "./DetailModal";
import PreviewCard from "./PreviewCard";
import { useLanguage } from "../contexts/LanguageContext";

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  capabilities: string[];
  timeline: string;
  fullDescription: string;
  benefits: string[];
  processSteps?: string[];
}

const Services = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  
  const services = useMemo(() => [{
    icon: Settings,
    title: t('services.erp.title') as string,
    description: t('services.erp.description') as string,
    capabilities: Array.isArray(t('services.erp.capabilities')) ? t('services.erp.capabilities') as string[] : [],
    timeline: t('services.erp.timeline') as string,
    fullDescription: t('services.erp.fullDescription') as string,
    benefits: Array.isArray(t('services.erp.benefits')) ? t('services.erp.benefits') as string[] : [],
    processSteps: Array.isArray(t('services.erp.processSteps')) ? t('services.erp.processSteps') as string[] : []
  }, {
    icon: Building2,
    title: t('services.industry.title') as string,
    description: t('services.industry.description') as string,
    capabilities: Array.isArray(t('services.industry.capabilities')) ? t('services.industry.capabilities') as string[] : [],
    timeline: t('services.industry.timeline') as string,
    fullDescription: t('services.industry.fullDescription') as string,
    benefits: Array.isArray(t('services.industry.benefits')) ? t('services.industry.benefits') as string[] : []
  }, {
    icon: Brain,
    title: t('services.ai.title') as string,
    description: t('services.ai.description') as string,
    capabilities: Array.isArray(t('services.ai.capabilities')) ? t('services.ai.capabilities') as string[] : [],
    timeline: t('services.ai.timeline') as string,
    fullDescription: t('services.ai.fullDescription') as string,
    benefits: Array.isArray(t('services.ai.benefits')) ? t('services.ai.benefits') as string[] : []
  }, {
    icon: Palette,
    title: t('services.ux.title') as string,
    description: t('services.ux.description') as string,
    capabilities: Array.isArray(t('services.ux.capabilities')) ? t('services.ux.capabilities') as string[] : [],
    timeline: t('services.ux.timeline') as string,
    fullDescription: t('services.ux.fullDescription') as string,
    benefits: Array.isArray(t('services.ux.benefits')) ? t('services.ux.benefits') as string[] : []
  }, {
    icon: Database,
    title: t('services.data.title') as string,
    description: t('services.data.description') as string,
    capabilities: Array.isArray(t('services.data.capabilities')) ? t('services.data.capabilities') as string[] : [],
    timeline: t('services.data.timeline') as string,
    fullDescription: t('services.data.fullDescription') as string,
    benefits: Array.isArray(t('services.data.benefits')) ? t('services.data.benefits') as string[] : []
  }, {
    icon: Headphones,
    title: t('services.support.title') as string,
    description: t('services.support.description') as string,
    capabilities: Array.isArray(t('services.support.capabilities')) ? t('services.support.capabilities') as string[] : [],
    timeline: t('services.support.timeline') as string,
    fullDescription: t('services.support.fullDescription') as string,
    benefits: Array.isArray(t('services.support.benefits')) ? t('services.support.benefits') as string[] : []
  }], [t]);
  const methodology = useMemo(() => [{
    title: t('services.methodology.steps.consultation') as string,
    description: t('services.methodology.steps.consultation.desc') as string
  }, {
    title: t('services.methodology.steps.planning') as string,
    description: t('services.methodology.steps.planning.desc') as string
  }, {
    title: t('services.methodology.steps.execution') as string,
    description: t('services.methodology.steps.execution.desc') as string
  }, {
    title: t('services.methodology.steps.delivery') as string,
    description: t('services.methodology.steps.delivery.desc') as string
  }, {
    title: t('services.methodology.steps.support') as string,
    description: t('services.methodology.steps.support.desc') as string
  }], [t]);
  const headerBg = {
    backgroundImage: 'url("/new-Header-background.webp")',
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
            {(t('services.title') as string).split('\n').map((line: string, index: number) => (
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
          {services.map((service, index) => <PreviewCard key={index} icon={service.icon} title={service.title as string} description={service.description as string} timeline={service.timeline as string} onLearnMore={() => setSelectedService(service)} index={index} />)}
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
            
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute left-[10%] right-[10%] top-6 h-0.5 bg-gradient-to-r from-pulse-200 via-pulse-400 to-pulse-200"></div>
                <div className="flex justify-between">
                  {methodology.map((process, index) => <div key={index} className="flex-1 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center text-white font-medium text-sm relative z-10 mb-3">
                        {index + 1}
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">{process.title}</h4>
                      <p className="text-sm text-gray-600 max-w-32">{process.description}</p>
                    </div>)}
                </div>
              </div>
            </div>

            <div className="md:hidden flex flex-col">
              {methodology.map((process, index) => <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center text-white font-medium text-sm relative z-10 shrink-0">
                      {index + 1}
                    </div>
                    {index < methodology.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1"></div>}
                  </div>
                  <div className="pb-8 pt-1">
                    <h4 className="font-medium text-gray-900 mb-1 text-start">{process.title}</h4>
                    <p className="text-sm text-gray-600 text-start">{process.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      
      <DetailModal isOpen={selectedService !== null} onClose={() => setSelectedService(null)} title={selectedService?.title || ""} description={selectedService?.fullDescription || selectedService?.description || ""} capabilities={selectedService?.capabilities || []} benefits={selectedService?.benefits || []} processSteps={selectedService?.processSteps} timeline={selectedService?.timeline} icon={selectedService?.icon || Settings} />
    </section>;
};
export default Services;