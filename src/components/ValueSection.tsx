
import React, { useRef } from "react";
import { Brain, Zap, Users, Heart } from "lucide-react";

const ValueSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-white" id="value" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
            <span>360° VALUE</span>
          </div>
          <h2 className="text-5xl font-display font-bold mb-6">
            We don't just build software
          </h2>
          <p className="text-2xl text-pulse-500 font-semibold mb-8">
            We build your business future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* AI Features */}
          <div className="glass-card p-6 text-center">
            <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center text-blue-500 mb-6 mx-auto">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Automatic Forecasting</li>
              <li>Decision Automation</li>
              <li>Smart Workflows</li>
              <li>Advanced Analytics</li>
            </ul>
          </div>

          {/* Unmatched Speed */}
          <div className="glass-card p-6 text-center">
            <div className="rounded-full bg-green-50 w-16 h-16 flex items-center justify-center text-green-500 mb-6 mx-auto">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Unmatched Speed</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Rapid Deployment</li>
              <li>Immediate ROI</li>
              <li>Instant Benefits</li>
              <li>Proven Methodology</li>
            </ul>
          </div>

          {/* Cultural Fit */}
          <div className="glass-card p-6 text-center">
            <div className="rounded-full bg-purple-50 w-16 h-16 flex items-center justify-center text-purple-500 mb-6 mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Cultural Fit</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Designed for MENA businesses</li>
              <li>Bilingual Support</li>
              <li>Native RTL Interfaces</li>
              <li>Local Compliance</li>
              <li>Cultural Alignment</li>
            </ul>
          </div>

          {/* Easy Adoption */}
          <div className="glass-card p-6 text-center">
            <div className="rounded-full bg-orange-50 w-16 h-16 flex items-center justify-center text-orange-500 mb-6 mx-auto">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Easy Adoption</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Intuitive Design</li>
              <li>Simplified Training</li>
              <li>User-Friendly Interface</li>
              <li>Ongoing Support</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="button-primary inline-flex items-center"
          >
            Start Your Journey
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
