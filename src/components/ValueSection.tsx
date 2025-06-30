
import React, { useRef } from "react";
import { Brain, Zap, Users, Heart } from "lucide-react";

const ValueSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 relative overflow-hidden" id="value" ref={sectionRef}>
      {/* Main gradient background similar to robot pulse design */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-orange-500"></div>
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-purple-900 mr-3 font-bold text-xs">02</span>
            <span className="font-semibold">360° VALUE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            We don't just build software
          </h2>
          <p className="text-2xl md:text-3xl text-orange-300 font-bold mb-8">
            We build your business future
          </p>
        </div>

        {/* Content in a clean card layout */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* AI Features */}
              <div className="text-center text-white">
                <div className="rounded-full bg-white/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Features</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Automatic Forecasting</li>
                  <li>• Decision Automation</li>
                  <li>• Smart Workflows</li>
                  <li>• Advanced Analytics</li>
                </ul>
              </div>

              {/* Unmatched Speed */}
              <div className="text-center text-white">
                <div className="rounded-full bg-white/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Unmatched Speed</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Rapid Deployment</li>
                  <li>• Immediate ROI</li>
                  <li>• Instant Benefits</li>
                  <li>• Proven Methodology</li>
                </ul>
              </div>

              {/* Cultural Fit */}
              <div className="text-center text-white">
                <div className="rounded-full bg-white/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cultural Fit</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Designed for MENA businesses</li>
                  <li>• Bilingual Support</li>
                  <li>• Native RTL Interfaces</li>
                  <li>• Local Compliance</li>
                  <li>• Cultural Alignment</li>
                </ul>
              </div>

              {/* Easy Adoption */}
              <div className="text-center text-white">
                <div className="rounded-full bg-white/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Easy Adoption</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Intuitive Design</li>
                  <li>• Simplified Training</li>
                  <li>• User-Friendly Interface</li>
                  <li>• Ongoing Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-white text-purple-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 hover:bg-orange-100"
          >
            Start Your Journey
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
