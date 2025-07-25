import React, { useState } from "react";
import { GraduationCap, ShoppingCart, Factory, Truck, Users, Building, TrendingUp } from "lucide-react";
import DetailModal from "./DetailModal";
import PreviewCard from "./PreviewCard";
import { useLanguage } from "../contexts/LanguageContext";
const Industries = () => {
  const {
    t
  } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState<any>(null);
  const industries = [{
    icon: GraduationCap,
    title: t('industries.education.title'),
    description: t('industries.education.description'),
    capabilities: t('industries.education.capabilities'),
    timeline: t('industries.education.timeline'),
    clients: t('industries.education.clients'),
    fullDescription: t('industries.education.fullDescription'),
    benefits: t('industries.education.benefits')
  }, {
    icon: ShoppingCart,
    title: t('industries.retail.title'),
    description: t('industries.retail.description'),
    capabilities: t('industries.retail.capabilities'),
    timeline: t('industries.retail.timeline'),
    clients: t('industries.retail.clients'),
    fullDescription: t('industries.retail.fullDescription'),
    benefits: t('industries.retail.benefits')
  }, {
    icon: Factory,
    title: t('industries.manufacturing.title'),
    description: t('industries.manufacturing.description'),
    capabilities: t('industries.manufacturing.capabilities'),
    timeline: t('industries.manufacturing.timeline'),
    clients: t('industries.manufacturing.clients'),
    fullDescription: t('industries.manufacturing.fullDescription'),
    benefits: t('industries.manufacturing.benefits')
  }, {
    icon: Truck,
    title: t('industries.logistics.title'),
    description: t('industries.logistics.description'),
    capabilities: t('industries.logistics.capabilities'),
    timeline: t('industries.logistics.timeline'),
    clients: t('industries.logistics.clients'),
    fullDescription: t('industries.logistics.fullDescription'),
    benefits: t('industries.logistics.benefits')
  }];
  const companySizes = [{
    icon: TrendingUp,
    title: t('industries.startups.title'),
    count: t('industries.startups.count'),
    description: t('industries.startups.description'),
    details: t('industries.startups.details')
  }, {
    icon: Users,
    title: t('industries.smes.title'),
    count: t('industries.smes.count'),
    description: t('industries.smes.description'),
    details: t('industries.smes.details')
  }, {
    icon: Building,
    title: t('industries.enterprises.title'),
    count: t('industries.enterprises.count'),
    description: t('industries.enterprises.description'),
    details: t('industries.enterprises.details')
  }];
  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };
  return <section className="bg-white" id="industries">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-green-600/30 to-teal-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            
            <span className="font-semibold">{t('industries.section')}</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            {(t('industries.title') as string).split('\n').map((line: string, index: number) => (
              <span key={index}>
                {line}
                {index === 0 && <br />}
              </span>
            ))}
          </h2>
          <p className="section-header-subtitle">
            {t('industries.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industries.map((industry, index) => <PreviewCard key={index} icon={industry.icon} title={industry.title as string} description={industry.description as string} timeline={industry.timeline as string} onLearnMore={() => setSelectedIndustry(industry)} index={index} />)}
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{
        animationDelay: "0.6s"
      }}>
          
        </div>
      </div>
      
      <DetailModal isOpen={selectedIndustry !== null} onClose={() => setSelectedIndustry(null)} title={selectedIndustry?.title || ""} description={selectedIndustry?.fullDescription || selectedIndustry?.description || ""} capabilities={selectedIndustry?.capabilities || []} benefits={selectedIndustry?.benefits || []} timeline={selectedIndustry?.timeline} clients={selectedIndustry?.clients} icon={selectedIndustry?.icon || GraduationCap} />
    </section>;
};
export default Industries;