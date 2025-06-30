
import React, { useRef } from "react";
import { Package, Brain, Link, Smartphone } from "lucide-react";

const PlatformCapabilities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Core Modules",
      description: "Comprehensive suite of business modules covering all aspects of your operations",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Features",
      description: "Advanced artificial intelligence capabilities for automation and insights",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Integration Capabilities",
      description: "Seamless integration with existing systems and third-party applications",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile & Cloud Access",
      description: "Access your ERP anywhere, anytime with our mobile and cloud solutions",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="platform" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3">03</span>
            <span>Platform</span>
          </div>
          <h2 className="section-title mb-4">Platform Capabilities</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to run your business efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl p-8 bg-white border border-gray-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${capability.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {capability.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-gray-800 transition-colors duration-300">{capability.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{capability.description}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-pulse-100 to-pulse-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;
