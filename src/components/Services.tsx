
import React, { useRef } from "react";
import { Settings, Building2, Brain, Palette, Database, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "ERP Implementation",
      description: "Architecture, Custom Dev, Migration, Training",
      color: "blue"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Industry Solutions",
      description: "Healthcare, Education, Fitness, Logistics",
      color: "green"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description: "Forecasting, Chatbots, Document OCR, Automation",
      color: "purple"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UX Design",
      description: "RTL, Localization, Accessibility, Responsive Design",
      color: "pink"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Migration",
      description: "Mapping, API Integration, Sync, Backup",
      color: "indigo"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Support",
      description: "Updates, Performance Tuning, Development, Monitoring",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "from-blue-500 to-blue-600", border: "border-blue-200", text: "text-blue-600" },
      green: { bg: "from-green-500 to-green-600", border: "border-green-200", text: "text-green-600" },
      purple: { bg: "from-purple-500 to-purple-600", border: "border-purple-200", text: "text-purple-600" },
      pink: { bg: "from-pink-500 to-pink-600", border: "border-pink-200", text: "text-pink-600" },
      indigo: { bg: "from-indigo-500 to-indigo-600", border: "border-indigo-200", text: "text-indigo-600" },
      orange: { bg: "from-orange-500 to-orange-600", border: "border-orange-200", text: "text-orange-600" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="services" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3">06</span>
            <span>Services</span>
          </div>
          <h2 className="section-title mb-4">Comprehensive ERP Services</h2>
          <p className="section-subtitle mx-auto">
            End-to-end support for your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-8 bg-white border-2 ${colors.border} hover:border-transparent transition-all duration-500 hover:shadow-xl transform hover:scale-105`}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${colors.bg} text-white mb-6 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:scale-105 transition-transform duration-300">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${colors.bg} opacity-10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
