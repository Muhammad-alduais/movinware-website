
import React, { useRef } from "react";
import { Settings, Building2, Brain, Palette, Database, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "ERP Implementation",
      description: "Architecture, Custom Dev, Migration, Training"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Industry Solutions",
      description: "Healthcare, Education, Fitness, Logistics"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Integration",
      description: "Forecasting, Chatbots, Document OCR, Automation"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UX Design",
      description: "RTL, Localization, Accessibility, Responsive Design"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Migration",
      description: "Mapping, API Integration, Sync, Backup"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Support",
      description: "Updates, Performance Tuning, Development, Monitoring"
    }
  ];

  return (
    <section className="py-12 bg-gray-50" id="services" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
            <span>Services</span>
          </div>
          <h2 className="section-title mb-4">Comprehensive ERP Services</h2>
          <p className="section-subtitle mx-auto">
            End-to-end support for your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50 transition-all duration-300"
            >
              <div className="rounded-full bg-pulse-50 w-16 h-16 flex items-center justify-center text-pulse-500 mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
