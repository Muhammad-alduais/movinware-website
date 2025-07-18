import React, { useState } from "react";
import { Calculator, Users, ShoppingCart, Package, Factory, Wrench, ArrowRight } from "lucide-react";
import DetailModal from "./DetailModal";
import { useLanguage } from "../contexts/LanguageContext";
const ERPSolutions = () => {
  const {
    t
  } = useLanguage();
  const [selectedSolution, setSelectedSolution] = useState<any>(null);
  const solutions = [{
    icon: Calculator,
    title: t('erp.accounting.title'),
    description: t('erp.accounting.description'),
    capabilities: t('erp.accounting.capabilities'),
    timeline: t('erp.accounting.timeline'),
    fullDescription: t('erp.accounting.fullDescription')
  }, {
    icon: Users,
    title: t('erp.hr.title'),
    description: t('erp.hr.description'),
    capabilities: t('erp.hr.capabilities'),
    timeline: t('erp.hr.timeline'),
    fullDescription: t('erp.hr.fullDescription')
  }, {
    icon: ShoppingCart,
    title: t('erp.sales.title'),
    description: t('erp.sales.description'),
    capabilities: t('erp.sales.capabilities'),
    timeline: t('erp.sales.timeline'),
    fullDescription: t('erp.sales.fullDescription')
  }, {
    icon: Package,
    title: t('erp.inventory.title'),
    description: t('erp.inventory.description'),
    capabilities: t('erp.inventory.capabilities'),
    timeline: t('erp.inventory.timeline'),
    fullDescription: t('erp.inventory.fullDescription')
  }, {
    icon: Factory,
    title: t('erp.manufacturing.title'),
    description: t('erp.manufacturing.description'),
    capabilities: t('erp.manufacturing.capabilities'),
    timeline: t('erp.manufacturing.timeline'),
    fullDescription: t('erp.manufacturing.fullDescription')
  }, {
    icon: Wrench,
    title: t('erp.assets.title'),
    description: t('erp.assets.description'),
    capabilities: t('erp.assets.capabilities'),
    timeline: t('erp.assets.timeline'),
    fullDescription: t('erp.assets.fullDescription')
  }];
  const integrationStats = [{
    metric: t('erp.integration.stats.module.metric'),
    label: t('erp.integration.stats.module.label'),
    desc: t('erp.integration.stats.module.desc')
  }, {
    metric: t('erp.integration.stats.realtime.metric'),
    label: t('erp.integration.stats.realtime.label'),
    desc: t('erp.integration.stats.realtime.desc')
  }, {
    metric: t('erp.integration.stats.database.metric'),
    label: t('erp.integration.stats.database.label'),
    desc: t('erp.integration.stats.database.desc')
  }, {
    metric: t('erp.integration.stats.workflows.metric'),
    label: t('erp.integration.stats.workflows.label'),
    desc: t('erp.integration.stats.workflows.desc')
  }];
  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };
  return <section className="bg-white" id="erp-solutions">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-blue-600/30 to-purple-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            
            <span className="font-semibold">{t('erp.section')}</span>
          </div>
          <h2 className="section-header-title animate-header-glow" dangerouslySetInnerHTML={{
          __html: t('erp.title')
        }}>
          </h2>
          <p className="section-header-subtitle">
            {t('erp.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => <div key={index} className="group opacity-0 animate-slide-up" style={{
          animationDelay: `${0.05 * index}s`
        }}>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-pulse-50 transition-all duration-500">
                    <solution.icon className="w-7 h-7 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 pr-2">{solution.title}</h3>
                    <div className="mb-3">
                      <span className="text-xs text-pulse-500 font-medium bg-pulse-50 px-3 py-1 rounded-full inline-block">
                        {solution.timeline}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{solution.description}</p>
                
                <div className="flex items-center text-pulse-500 font-medium text-sm group-hover:text-pulse-600 transition-colors duration-300 cursor-pointer mt-auto" onClick={() => setSelectedSolution(solution)}>
                  {t('common.explore')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>)}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{
        animationDelay: "0.4s"
      }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">{t('erp.integration')}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('erp.integration.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {integrationStats.map((stat, index) => <div key={index} className="text-center">
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
      
      <DetailModal isOpen={selectedSolution !== null} onClose={() => setSelectedSolution(null)} title={selectedSolution?.title || ""} description={selectedSolution?.fullDescription || selectedSolution?.description || ""} capabilities={selectedSolution?.capabilities || []} timeline={selectedSolution?.timeline} icon={selectedSolution?.icon || Calculator} />
    </section>;
};
export default ERPSolutions;