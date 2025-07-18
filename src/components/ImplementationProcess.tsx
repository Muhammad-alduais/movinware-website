import React from "react";
import { Search, Palette, Code, Rocket, TrendingUp, Clock, CheckCircle, Users } from "lucide-react";
const ImplementationProcess = () => {
  const phases = [{
    icon: Search,
    title: "Discovery & Assessment",
    duration: "Week 1-2",
    description: "We analyze your current processes, identify pain points, and create a detailed implementation roadmap.",
    deliverables: ["Process Analysis", "Requirements Document", "Implementation Plan"],
    color: "bg-blue-50 text-blue-600"
  }, {
    icon: Palette,
    title: "Design & Configuration",
    duration: "Week 3-5",
    description: "Custom workflows, system configuration, and user interface design tailored to your business needs.",
    deliverables: ["System Design", "Workflow Configuration", "UI Mockups"],
    color: "bg-purple-50 text-purple-600"
  }, {
    icon: Code,
    title: "Development & Integration",
    duration: "Week 6-9",
    description: "System development, data migration, third-party integrations, and comprehensive testing.",
    deliverables: ["Developed System", "Data Migration", "Integration Testing"],
    color: "bg-green-50 text-green-600"
  }, {
    icon: Rocket,
    title: "Deployment & Training",
    duration: "Week 10-11",
    description: "Go-live support with comprehensive user training, system monitoring, and immediate support.",
    deliverables: ["Live System", "Trained Users", "Support Documentation"],
    color: "bg-orange-50 text-orange-600"
  }, {
    icon: TrendingUp,
    title: "Optimization & Support",
    duration: "Ongoing",
    description: "Continuous optimization, performance monitoring, feature enhancements, and dedicated support.",
    deliverables: ["Performance Reports", "Feature Updates", "24/7 Support"],
    color: "bg-pulse-50 text-pulse-600"
  }];
  const timeline = [{
    week: "1-2",
    phase: "Discovery"
  }, {
    week: "3-5",
    phase: "Design"
  }, {
    week: "6-9",
    phase: "Development"
  }, {
    week: "10-11",
    phase: "Deployment"
  }, {
    week: "12+",
    phase: "Support"
  }];
  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };
  return <section className="bg-white" id="implementation">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 via-red-600/30 to-pink-600/40"></div>
        <div className="absolute inset-0 bg-black/25"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            
            <span className="font-semibold">Implementation Process</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            From concept to<br />
            <span className="font-medium">go-live in 11 weeks</span>
          </h2>
          <p className="section-header-subtitle">
            Our proven methodology ensures successful implementation with minimal disruption to your business
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="mb-20 opacity-0 animate-fade-scale" style={{
        animationDelay: "0.2s"
      }}>
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-8 text-center">Implementation Timeline</h3>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {timeline.map((item, index) => <div key={index} className="flex flex-col items-center text-center relative">
                  <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center text-white font-medium mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Week {item.week}</div>
                  <div className="text-xs text-gray-600">{item.phase}</div>
                  {index < timeline.length - 1 && <div className="hidden md:block absolute left-full top-6 w-full h-px bg-gray-200"></div>}
                </div>)}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {phases.map((phase, index) => <div key={index} className="opacity-0 animate-slide-up" style={{
          animationDelay: `${0.1 * (index + 3)}s`
        }}>
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-500">
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 ${phase.color}`}>
                          <phase.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-gray-900">{phase.title}</h3>
                          <p className="text-pulse-500 font-medium">{phase.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {phase.description}
                      </p>
                    </div>

                    <div className="lg:w-80">
                      <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Key Deliverables
                      </h4>
                      <div className="space-y-3">
                        {phase.deliverables.map((deliverable, deliverableIndex) => <div key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-pulse-500 rounded-full mr-3"></div>
                            {deliverable}
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12 opacity-0 animate-slide-up" style={{
          animationDelay: "0.8s"
        }}>
            <h3 className="text-2xl font-light text-gray-900 mb-4">Why our process works</h3>
            <p className="text-gray-600">Proven results from our implementation methodology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
            metric: "85%",
            label: "Faster Implementation",
            desc: "Compared to traditional methods"
          }, {
            metric: "Zero",
            label: "Downtime",
            desc: "Seamless transition process"
          }, {
            metric: "98%",
            label: "User Adoption",
            desc: "Within first month"
          }, {
            metric: "24/7",
            label: "Support",
            desc: "Dedicated implementation team"
          }].map((stat, index) => <div key={index} className="text-center bg-gray-50 rounded-3xl p-6 border border-gray-100 opacity-0 animate-fade-scale hover:animate-gentle-float" style={{
            animationDelay: `${0.9 + 0.1 * index}s`
          }}>
                <div className="text-3xl font-light text-pulse-500 mb-2">{stat.metric}</div>
                <div className="font-medium text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.desc}</div>
              </div>)}
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{
        animationDelay: "1.3s"
      }}>
          
        </div>
      </div>
    </section>;
};
export default ImplementationProcess;