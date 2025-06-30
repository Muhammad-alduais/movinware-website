
import React, { useRef } from "react";
import { Zap, Building, Crown, MessageSquare } from "lucide-react";

const Packages = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const packages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Startup Package",
      description: "Perfect for growing businesses",
      features: ["Quick Implementation", "Core Modules", "Basic Support", "Up to 10 Users"],
      popular: false
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "SME Package",
      description: "Comprehensive solution for medium enterprises",
      features: ["Full Implementation", "All Modules", "Priority Support", "Up to 100 Users"],
      popular: true
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Enterprise Package",
      description: "Advanced features for large organizations",
      features: ["Custom Implementation", "Advanced Analytics", "24/7 Support", "Unlimited Users"],
      popular: false
    }
  ];

  return (
    <section className="py-12 bg-white" id="packages" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">09</span>
            <span>Packages</span>
          </div>
          <h2 className="section-title mb-4">Choose Your Perfect Plan</h2>
          <p className="section-subtitle mx-auto">
            Flexible packages designed to scale with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`glass-card p-8 text-center relative transition-all duration-300 hover:shadow-elegant-hover ${
                pkg.popular ? 'ring-2 ring-pulse-500 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pulse-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="rounded-full bg-pulse-50 w-16 h-16 flex items-center justify-center text-pulse-500 mb-6 mx-auto">
                {pkg.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{pkg.title}</h3>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center text-gray-700">
                    <svg className="w-5 h-5 text-pulse-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-pulse-500 hover:bg-pulse-600 text-white' 
                  : 'border border-pulse-500 text-pulse-500 hover:bg-pulse-500 hover:text-white'
              }`}>
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 text-center">
          <div className="rounded-full bg-pulse-50 w-16 h-16 flex items-center justify-center text-pulse-500 mb-6 mx-auto">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Custom Quote</h3>
          <p className="text-gray-600 mb-6">
            Need something specific? Let's discuss your unique requirements
          </p>
          <button className="button-primary">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
