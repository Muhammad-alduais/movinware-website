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
    title: "Accounting & Finance",
    description: "Complete financial management with real-time insights.",
    capabilities: ["Real-time Financial Reporting & Analytics", "Multi-currency Support & Conversion", "Tax Compliance & Regulatory Reporting", "Automated Accounts Payable/Receivable", "Budget Planning & Forecasting", "Cash Flow Management & Optimization", "Financial Audit Trail & Controls", "Integration with Banking & Payment Systems"],
    timeline: "Full Integration",
    fullDescription: "Complete financial management and reporting system with real-time insights and automated processes for comprehensive business control. Our accounting suite provides complete visibility into your financial operations with automated workflows, intelligent reporting, and seamless integration with banking and payment systems."
  }, {
    icon: Users,
    title: "Human Resources",
    description: "End-to-end HR management for the complete employee lifecycle.",
    capabilities: ["Employee Self-service Portal & Mobile App", "Automated Payroll & Tax Calculations", "Performance Management & Goal Tracking", "Time & Attendance with Biometric Integration", "Recruitment & Applicant Tracking System", "Employee Benefits & Leave Management", "Training & Development Programs", "HR Analytics & Workforce Planning"],
    timeline: "Complete HR Suite",
    fullDescription: "Comprehensive HR management system covering the entire employee lifecycle from recruitment to retirement with advanced analytics. Our HR suite transforms people management with automated workflows, self-service capabilities, and data-driven insights that help you attract, retain, and develop top talent."
  }, {
    icon: ShoppingCart,
    title: "Sales & CRM",
    description: "AI-powered sales and customer relationship management.",
    capabilities: ["Lead Tracking & Opportunity Management", "Advanced Sales Pipeline & Forecasting", "Customer 360-degree View & Analytics", "Automated Marketing Campaign Management", "Quote & Proposal Generation", "Customer Support & Ticket Management", "Sales Team Performance Analytics", "Mobile CRM & Field Sales Tools"],
    timeline: "Sales Optimization",
    fullDescription: "End-to-end sales and customer relationship management with AI-powered insights and automation for maximum conversion rates. Our CRM platform provides complete customer visibility, automated sales processes, and intelligent insights that help you close more deals and build stronger customer relationships."
  }, {
    icon: Package,
    title: "Inventory Management",
    description: "Smart inventory optimization with real-time tracking.",
    capabilities: ["AI-powered Stock Optimization & Forecasting", "Barcode & RFID Scanning Integration", "Automated Reordering & Supplier Alerts", "Multi-location & Multi-warehouse Tracking", "Batch & Serial Number Management", "Cycle Counting & Physical Inventory", "Warehouse Layout & Pick Path Optimization", "Supplier Performance & Vendor Management"],
    timeline: "Smart Inventory",
    fullDescription: "Advanced inventory and warehouse management with real-time tracking and optimization capabilities for maximum efficiency. Our inventory system uses AI to predict demand, optimize stock levels, and automate reordering processes while providing complete visibility across all locations and warehouses."
  }, {
    icon: Factory,
    title: "Manufacturing",
    description: "Intelligent production management and quality control.",
    capabilities: ["Production Planning & Capacity Optimization", "Quality Control Workflows & Compliance", "Resource Allocation & Equipment Scheduling", "Bill of Materials Management & Costing", "Shop Floor Control & Work Order Management", "Machine Integration & IoT Connectivity", "Lean Manufacturing & Waste Reduction", "Product Lifecycle & Engineering Change Management"],
    timeline: "Production Excellence",
    fullDescription: "Complete production management solution that optimizes manufacturing processes and quality control with real-time monitoring. Our manufacturing module enables digital transformation with IoT integration, automated workflows, and real-time production tracking that maximizes efficiency and ensures consistent quality."
  }, {
    icon: Wrench,
    title: "Asset Management",
    description: "Predictive asset management and maintenance optimization.",
    capabilities: ["Preventive & Predictive Maintenance Scheduling", "Asset Lifecycle Tracking & Depreciation", "Work Order Management & Technician Dispatch", "Equipment Performance & IoT Analytics", "Spare Parts Inventory & Procurement", "Compliance Management & Safety Tracking", "Mobile Maintenance & Field Service", "Asset ROI & Cost Analysis"],
    timeline: "Asset Optimization",
    fullDescription: "Comprehensive asset tracking and maintenance management to maximize equipment uptime and ROI with predictive analytics. Our asset management solution uses IoT sensors and machine learning to predict failures before they occur, optimize maintenance schedules, and ensure maximum equipment availability and performance."
  }];
  const integrationStats = [{
    metric: "100%",
    label: "Module Integration",
    desc: "Seamless data flow across all modules"
  }, {
    metric: "Real-time",
    label: "Data Updates",
    desc: "Instant synchronization everywhere"
  }, {
    metric: "Single",
    label: "Database",
    desc: "Unified source of truth for all data"
  }, {
    metric: "Custom",
    label: "Workflows",
    desc: "Tailored to your business processes"
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