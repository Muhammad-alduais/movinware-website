import React, { useState } from "react";
import { Cpu, Zap, Link, Smartphone } from "lucide-react";
import DetailModal from "./DetailModal";
import PreviewCard from "./PreviewCard";
import { useLanguage } from "../contexts/LanguageContext";
const PlatformCapabilities = () => {
  const {
    t
  } = useLanguage();
  const [selectedCapability, setSelectedCapability] = useState<any>(null);
  const capabilities = [{
    icon: Cpu,
    title: t('features.core_modules'),
    description: t('features.core_description'),
    capabilities: t('features.core_capabilities') as string[],
    timeline: t('features.core_foundation') as string,
    fullDescription: t('features.core_full_description') as string,
    benefits: t('features.core_benefits') as string[]
  }, {
    icon: Zap,
    title: t('features.ai_features'),
    description: t('features.ai_description'),
    capabilities: t('features.ai_capabilities') as string[],
    timeline: t('features.smart_enhancement') as string,
    fullDescription: t('features.ai_full_description') as string,
    benefits: t('features.ai_benefits') as string[]
  }, {
    icon: Link,
    title: t('features.integration_hub'),
    description: t('features.integration_description'),
    capabilities: t('features.integration_capabilities') as string[],
    timeline: t('features.seamless_connection') as string,
    fullDescription: t('features.integration_full_description') as string,
    benefits: t('features.integration_benefits') as string[]
  }, {
    icon: Smartphone,
    title: t('features.mobile_cloud'),
    description: t('features.mobile_description'),
    capabilities: t('features.mobile_capabilities') as string[],
    timeline: t('features.anywhere_access') as string,
    fullDescription: t('features.mobile_full_description') as string,
    benefits: t('features.mobile_benefits') as string[]
  }];
  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };
  return <section className="bg-white" id="platform">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-600/40 via-purple-600/30 to-blue-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            
            <span className="font-semibold">{t('capabilities.section')}</span>
          </div>
          <h2 className="section-header-title animate-header-glow" dangerouslySetInnerHTML={{
          __html: t('capabilities.title')
        }}>
          </h2>
          <p className="section-header-subtitle">
            {t('capabilities.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {capabilities.map((capability, index) => <PreviewCard key={index} icon={capability.icon} title={capability.title as string} description={capability.description as string} timeline={capability.timeline} onLearnMore={() => setSelectedCapability(capability)} index={index} />)}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{
        animationDelay: "0.4s"
      }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">{t('capabilities.overview')}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('capabilities.overview.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[{
              metric: "500+",
              label: t('capabilities.stats.api'),
              desc: t('capabilities.stats.api_desc')
            }, {
              metric: "99.9%",
              label: t('capabilities.stats.uptime'),
              desc: t('capabilities.stats.uptime_desc')
            }, {
              metric: "24/7",
              label: t('capabilities.stats.monitoring'),
              desc: t('capabilities.stats.monitoring_desc')
            }, {
              metric: t('capabilities.stats.realtime'),
              label: t('capabilities.stats.sync'),
              desc: t('capabilities.stats.sync_desc')
            }].map((stat, index) => <div key={index} className="text-center">
                  <div className="text-3xl font-light text-pulse-500 mb-2">{stat.metric}</div>
                  <div className="font-medium text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>)}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{
        animationDelay: "0.6s"
      }}>
          
        </div>
      </div>
      
      <DetailModal isOpen={selectedCapability !== null} onClose={() => setSelectedCapability(null)} title={selectedCapability?.title || ""} description={selectedCapability?.fullDescription || selectedCapability?.description || ""} capabilities={selectedCapability?.capabilities || []} benefits={selectedCapability?.benefits || []} timeline={selectedCapability?.timeline} icon={selectedCapability?.icon || Cpu} />
    </section>;
};
export default PlatformCapabilities;