import React, { useState } from "react";
import { Settings, Building2, Brain, Palette, Database, Headphones } from "lucide-react";
import DetailModal from "./DetailModal";
import PreviewCard from "./PreviewCard";
const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const services = [{
    icon: Settings,
    title: "ERP Implementation",
    description: "End-to-end implementation with proven methodologies and dedicated project management.",
    capabilities: ["System Architecture Design & Planning", "Custom Development & Configuration", "Data Migration & Integration Services", "Comprehensive User Training Programs", "Go-Live Support & Optimization", "Performance Monitoring & Tuning", "Change Management & User Adoption", "Quality Assurance & Testing"],
    timeline: "8-12 weeks",
    fullDescription: "Comprehensive ERP implementation services that transform your business operations with minimal disruption. Our proven methodology ensures successful deployment with dedicated project management, custom development, and comprehensive training programs that drive user adoption and business value.",
    benefits: ["85% faster implementation compared to traditional methods", "Dedicated project manager ensures timeline adherence", "Proven methodology with 98% success rate", "Comprehensive training drives user adoption"],
    processSteps: [{
      title: "Discovery & Planning",
      description: "Analyze current processes and create implementation roadmap",
      deliverables: ["Requirements Analysis", "Project Timeline", "Resource Planning"]
    }, {
      title: "System Configuration",
      description: "Configure system according to business requirements",
      deliverables: ["System Setup", "Custom Workflows", "Integration Points"]
    }, {
      title: "Data Migration",
      description: "Secure transfer of existing data to new system",
      deliverables: ["Data Mapping", "Migration Scripts", "Validation Reports"]
    }, {
      title: "Training & Go-Live",
      description: "User training and system deployment",
      deliverables: ["Training Materials", "User Manuals", "Go-Live Support"]
    }]
  }, {
    icon: Building2,
    title: "Industry Solutions",
    description: "Specialized solutions tailored to your industry's unique requirements and compliance needs.",
    capabilities: ["Healthcare Management Systems", "Educational Platform Solutions", "Manufacturing Process Optimization", "Retail & E-commerce Integration", "Logistics & Supply Chain Management", "Financial Services Compliance", "Real Estate Management Systems", "Hospitality & Tourism Solutions"],
    timeline: "6-10 weeks",
    fullDescription: "Industry-specific solutions designed to address unique sector challenges and compliance requirements. Our deep industry expertise ensures solutions are tailored to your specific business environment, regulatory needs, and operational workflows for maximum effectiveness.",
    benefits: ["Industry-specific features reduce customization time", "Built-in compliance for regulatory requirements", "Proven solutions across multiple sectors", "Reduced implementation risk with tested frameworks"]
  }, {
    icon: Brain,
    title: "AI Integration",
    description: "Advanced AI capabilities to automate processes and provide intelligent business insights.",
    capabilities: ["Predictive Analytics Implementation", "Process Automation Development", "Document Processing & OCR", "Decision Support Systems", "Customer Behavior Analysis", "Fraud Detection & Prevention", "Intelligent Reporting Systems", "Machine Learning Model Development"],
    timeline: "4-8 weeks",
    fullDescription: "Transform your business with AI-powered automation and intelligent insights. Our AI integration services leverage machine learning, predictive analytics, and automation to optimize operations, reduce manual tasks, and provide actionable insights that drive business growth.",
    benefits: ["Predictive analytics improve decision accuracy by 85%", "Process automation reduces manual tasks by 70%", "AI insights drive revenue growth and cost reduction", "Continuous learning adapts to business changes"]
  }, {
    icon: Palette,
    title: "UX Design & Localization",
    description: "User-centered design with full localization support for MENA markets.",
    capabilities: ["User Experience (UX) Design", "Right-to-Left (RTL) Interface Design", "Multi-language Platform Support", "Cultural Adaptation & Localization", "Accessibility Standards Compliance", "Mobile-First Design Approach", "Brand Integration & Customization", "Usability Testing & Optimization"],
    timeline: "3-6 weeks",
    fullDescription: "Create intuitive, culturally-appropriate user experiences with comprehensive localization for MENA markets. Our design services ensure your platform is not only visually appealing but also accessible, culturally relevant, and optimized for diverse user needs.",
    benefits: ["Culturally-adapted interfaces improve user adoption", "RTL design ensures native Arabic experience", "Accessibility compliance reaches broader audiences", "Mobile-first approach maximizes device compatibility"]
  }, {
    icon: Database,
    title: "Data Migration & Integration",
    description: "Secure, efficient data migration with seamless third-party system integrations.",
    capabilities: ["Legacy System Data Migration", "API Development & Integration", "Real-time Data Synchronization", "Data Validation & Quality Assurance", "Third-party System Connectors", "Cloud Migration Services", "Database Optimization & Tuning", "Data Security & Compliance"],
    timeline: "2-4 weeks",
    fullDescription: "Ensure seamless data transition and system integration with our comprehensive migration and integration services. We handle complex data transformations, API integrations, and real-time synchronization to maintain business continuity throughout the transition.",
    benefits: ["Zero data loss with validated migration processes", "Real-time synchronization maintains data consistency", "API integrations connect all business systems", "Security protocols protect sensitive information"]
  }, {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Comprehensive support services ensuring optimal system performance and user satisfaction.",
    capabilities: ["24/7 Technical Support Services", "System Performance Monitoring", "Regular Security Updates", "User Training & Onboarding", "Preventive Maintenance Programs", "Issue Resolution & Bug Fixes", "Feature Enhancement Development", "System Health Reporting"],
    timeline: "Ongoing",
    fullDescription: "Maintain optimal system performance with our comprehensive support and maintenance services. Our dedicated support team provides 24/7 assistance, proactive monitoring, regular updates, and continuous optimization to ensure your system delivers consistent business value.",
    benefits: ["24/7 support ensures minimal business disruption", "Proactive monitoring prevents issues before they occur", "Regular updates maintain security and performance", "Ongoing training maximizes user productivity"]
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
            
            <span className="font-semibold">Professional Services</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            Expert services for<br />
            <span className="font-medium">successful implementation</span>
          </h2>
          <p className="section-header-subtitle">
            Our certified professionals ensure your ERP implementation is delivered on time, within budget, and exceeds expectations
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
              <h3 className="text-2xl font-light text-gray-900 mb-4">Our Service Methodology</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A structured approach that ensures quality delivery and client satisfaction at every stage
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 relative">
              {[{
              step: "Consultation",
              description: "Understanding your requirements"
            }, {
              step: "Planning",
              description: "Detailed project roadmap"
            }, {
              step: "Execution",
              description: "Professional implementation"
            }, {
              step: "Delivery",
              description: "Quality assurance & handover"
            }, {
              step: "Support",
              description: "Ongoing maintenance & optimization"
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
            metric: "50+",
            label: "Certified Professionals",
            desc: "Expert consultants and developers"
          }, {
            metric: "500+",
            label: "Successful Projects",
            desc: "Across various industries"
          }, {
            metric: "99%",
            label: "Client Satisfaction",
            desc: "Based on project completion surveys"
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