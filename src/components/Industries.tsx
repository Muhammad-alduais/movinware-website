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
    title: "Education",
    description: "Complete educational management solutions for modern institutions and learning environments.",
    capabilities: ["Student Information Management System", "Advanced Learning Management Platform", "Financial Aid & Scholarship Processing", "Academic Performance Analytics & Reporting", "Online Course Management & Delivery", "Parent-Teacher Communication Portal", "Library & Resource Management", "Examination & Assessment Tools"],
    timeline: "500+ Institutions",
    clients: "Schools, Universities, Training Centers, Online Learning Platforms",
    fullDescription: "Comprehensive solutions for educational institutions, from student management to curriculum planning and administrative efficiency. Our education suite transforms traditional learning environments with digital tools that enhance student engagement, streamline administrative processes, and provide deep insights into academic performance and institutional effectiveness.",
    benefits: ["Streamlined administrative processes reduce workload by 60%", "Enhanced student engagement through digital tools", "Comprehensive analytics improve academic outcomes", "Integrated communication platforms connect all stakeholders"]
  }, {
    icon: ShoppingCart,
    title: "Retail",
    description: "End-to-end retail management for omnichannel success and customer satisfaction.",
    capabilities: ["Advanced Point of Sale (POS) Systems", "Omnichannel E-commerce Integration", "Customer Loyalty & Rewards Management", "Multi-location Inventory Synchronization", "Price Management & Dynamic Pricing", "Customer Analytics & Personalization", "Vendor & Supplier Management", "Return & Exchange Processing"],
    timeline: "1,000+ Stores",
    clients: "Retail Chains, Online Stores, Fashion Brands, Specialty Retailers",
    fullDescription: "Complete retail management and e-commerce solutions designed to optimize sales, inventory, and customer experience across all channels. Our retail platform unifies online and offline operations, providing real-time visibility into customer behavior, inventory levels, and sales performance across all touchpoints for maximum profitability.",
    benefits: ["Omnichannel integration increases sales by 40%", "Real-time inventory management reduces stockouts", "Customer analytics drive personalized experiences", "Automated processes improve operational efficiency"]
  }, {
    icon: Factory,
    title: "Manufacturing",
    description: "Smart manufacturing solutions for Industry 4.0 transformation and operational excellence.",
    capabilities: ["Production Planning & Capacity Optimization", "Quality Management & Compliance Systems", "Predictive Equipment Maintenance", "Supply Chain Optimization & Tracking", "Real-time Production Monitoring", "Lean Manufacturing Implementation", "Batch & Serial Number Traceability", "Cost Analysis & Profitability Tracking"],
    timeline: "200+ Factories",
    clients: "Manufacturers, Assembly Lines, Processing Plants, Industrial Equipment",
    fullDescription: "End-to-end manufacturing and production management solutions that optimize efficiency, quality control, and supply chain operations. Our manufacturing suite enables digital transformation with IoT integration, predictive analytics, and automated workflows that reduce waste, improve quality, and maximize operational efficiency while ensuring compliance.",
    benefits: ["Predictive maintenance reduces downtime by 45%", "Quality management systems ensure compliance", "Real-time monitoring optimizes production efficiency", "Supply chain integration reduces costs and delays"]
  }, {
    icon: Truck,
    title: "Logistics",
    description: "Intelligent logistics and supply chain optimization platform for seamless operations.",
    capabilities: ["AI-Powered Route Optimization", "Fleet Management & Vehicle Tracking", "Warehouse Automation & Control", "Real-time Shipment & Delivery Tracking", "Load Planning & Optimization", "Driver Management & Performance Analytics", "Customer Portal & Communication", "Cost Analysis & Freight Audit"],
    timeline: "300+ Companies",
    clients: "Shipping Companies, 3PL Providers, Freight Forwarders, Distribution Centers",
    fullDescription: "Advanced logistics and supply chain optimization tools that ensure timely delivery, cost efficiency, and complete visibility across operations. Our logistics platform leverages AI and machine learning to optimize routes, reduce costs, and provide real-time visibility throughout the entire supply chain ecosystem for maximum efficiency.",
    benefits: ["AI-powered route optimization reduces fuel costs by 30%", "Real-time tracking improves customer satisfaction", "Automated load planning maximizes efficiency", "Comprehensive analytics drive continuous improvement"]
  }];
  const companySizes = [{
    icon: TrendingUp,
    title: "Startups",
    count: "50+",
    description: "Growing businesses ready to scale",
    details: "Flexible solutions that grow with your business"
  }, {
    icon: Users,
    title: "SMEs",
    count: "500+",
    description: "Established mid-market companies",
    details: "Comprehensive features for complex operations"
  }, {
    icon: Building,
    title: "Enterprises",
    count: "100+",
    description: "Large organizations with complex needs",
    details: "Enterprise-grade security and customization"
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
            
            <span className="font-semibold">Industries</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            Tailored for<br />
            <span className="font-medium">every sector</span>
          </h2>
          <p className="section-header-subtitle">
            Industry-specific solutions designed to meet the unique challenges and requirements of your business sector
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industries.map((industry, index) => <PreviewCard key={index} icon={industry.icon} title={industry.title} description={industry.description} timeline={industry.timeline} onLearnMore={() => setSelectedIndustry(industry)} index={index} />)}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{
        animationDelay: "0.4s"
      }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Trusted by companies of all sizes</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From startups to enterprises, we scale with your business needs and provide tailored solutions for every growth stage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companySizes.map((size, index) => <div key={index} className="text-center bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <size.icon className="w-6 h-6 text-pulse-500" />
                  </div>
                  <div className="text-3xl font-light text-pulse-500 mb-2">{size.count}</div>
                  <div className="font-medium text-gray-900 mb-2">{size.title}</div>
                  <div className="text-sm text-gray-600 mb-2">{size.description}</div>
                  <div className="text-xs text-gray-500">{size.details}</div>
                </div>)}
            </div>
          </div>
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