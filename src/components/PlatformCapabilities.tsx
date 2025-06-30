
import React, { useRef } from "react";
import { Package, Brain, Link, Smartphone } from "lucide-react";

const PlatformCapabilities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Core Modules",
      description: "Comprehensive suite of business modules covering all aspects of your operations"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Features",
      description: "Advanced artificial intelligence capabilities for automation and insights"
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Integration Capabilities",
      description: "Seamless integration with existing systems and third-party applications"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile & Cloud Access",
      description: "Access your ERP anywhere, anytime with our mobile and cloud solutions"
    }
  ];

  return (
    <section className="py-12 bg-gray-50" id="platform" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
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
              className="glass-card p-6 lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50 transition-all duration-300"
            >
              <div className="rounded-full bg-pulse-50 w-12 h-12 flex items-center justify-center text-pulse-500 mb-5">
                {capability.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
              <p className="text-gray-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;
