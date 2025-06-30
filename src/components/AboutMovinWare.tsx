
import React, { useRef } from "react";
import { Target, Zap, CheckCircle, Globe } from "lucide-react";

const AboutMovinWare = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const principles = [
    { icon: <Zap className="w-6 h-6" />, title: "Speed to Value" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Built-in Intelligence" },
    { icon: <Target className="w-6 h-6" />, title: "Easy Adoption" },
    { icon: <Globe className="w-6 h-6" />, title: "Sustainable Growth" },
    { icon: <Target className="w-6 h-6" />, title: "Regional Expertise" }
  ];

  return (
    <section className="py-12 bg-gray-50" id="about" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="pulse-chip mb-4">
              <span>About MovinWare</span>
            </div>
            <h2 className="section-title mb-6">Our Vision & Mission</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-pulse-600">Vision</h3>
              <p className="text-gray-700 mb-6">
                Democratize ERP technology, eliminate complexity, empower all businesses
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-pulse-600">Mission</h3>
              <p className="text-gray-700 mb-6">
                Deliver the world's easiest powerful ERP
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-pulse-500">30</div>
                <div className="text-sm text-gray-600">Days Implementation</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-pulse-500">99%</div>
                <div className="text-sm text-gray-600">Process Automation</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-pulse-500">24/7</div>
                <div className="text-sm text-gray-600">User Support</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Principles</h3>
              <div className="grid grid-cols-2 gap-3">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-pulse-500 mr-3">{principle.icon}</div>
                    <span className="text-gray-700">{principle.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-pulse-600">Regional Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-pulse-500 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Local business understanding</span>
                </li>
                <li className="flex items-start">
                  <div className="text-pulse-500 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Bilingual interfaces</span>
                </li>
                <li className="flex items-start">
                  <div className="text-pulse-500 mr-3 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Global technology standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMovinWare;
