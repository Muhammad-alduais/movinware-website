
import React, { useRef } from "react";
import { Brain, Zap, Users, Heart } from "lucide-react";

const ValueSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-pulse-50 relative overflow-hidden" id="value" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.05),transparent_70%)]"></div>
      
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-6 transform hover:scale-105 transition-transform duration-300">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 font-bold">02</span>
            <span className="font-semibold">360° VALUE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-pulse-600 to-gray-900 bg-clip-text text-transparent">
            We don't just build software
          </h2>
          <p className="text-3xl md:text-4xl text-pulse-500 font-bold mb-8 animate-pulse-slow">
            We build your business future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* AI Features - Blue Gradient */}
          <div className="group relative overflow-hidden rounded-2xl p-8 text-center bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="rounded-full bg-white/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-500">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Features</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-100">• Automatic Forecasting</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-200">• Decision Automation</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-300">• Smart Workflows</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-400">• Advanced Analytics</li>
              </ul>
            </div>
          </div>

          {/* Unmatched Speed - Green Gradient */}
          <div className="group relative overflow-hidden rounded-2xl p-8 text-center bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 text-white transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="rounded-full bg-white/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-500">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Unmatched Speed</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-100">• Rapid Deployment</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-200">• Immediate ROI</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-300">• Instant Benefits</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-400">• Proven Methodology</li>
              </ul>
            </div>
          </div>

          {/* Cultural Fit - Purple Gradient */}
          <div className="group relative overflow-hidden rounded-2xl p-8 text-center bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 text-white transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="rounded-full bg-white/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-500">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cultural Fit</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-100">• Designed for MENA businesses</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-200">• Bilingual Support</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-300">• Native RTL Interfaces</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-400">• Local Compliance</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-500">• Cultural Alignment</li>
              </ul>
            </div>
          </div>

          {/* Easy Adoption - Orange Gradient */}
          <div className="group relative overflow-hidden rounded-2xl p-8 text-center bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="rounded-full bg-white/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-500">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Adoption</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-100">• Intuitive Design</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-200">• Simplified Training</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-300">• User-Friendly Interface</li>
                <li className="transform group-hover:translate-x-1 transition-transform duration-300 delay-400">• Ongoing Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-gradient-to-r from-pulse-500 to-pulse-600 hover:from-pulse-600 hover:to-pulse-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
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
