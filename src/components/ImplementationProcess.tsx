
import React, { useRef } from "react";
import { Search, Palette, Code, Rocket, TrendingUp } from "lucide-react";

const ImplementationProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const phases = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Assessment & Planning",
      duration: "1-2 weeks",
      activities: "Process Mapping, Gap Analysis, Audit, Requirements",
      deliverables: "Reports, Roadmap"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Configuration",
      duration: "2-3 weeks",
      activities: "Workflow, AI, Bilingual, Security",
      deliverables: "Blueprint, Specs, Mockups, Integration Plan"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development & Testing",
      duration: "3-4 weeks",
      activities: "Dev, Demos, Migration, QA",
      deliverables: "Ready System, Data, Results, Docs"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment & Training",
      duration: "1-2 weeks",
      activities: "Training, Go-Live, Monitoring, Support",
      deliverables: "Trained Users, Live System, Support Plan"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Optimization & Growth",
      duration: "Ongoing",
      activities: "Reviews, Tuning, Upgrades",
      deliverables: "Reports, Features, Growth Plan"
    }
  ];

  const proofPoints = [
    "Faster Implementation",
    "Zero Downtime",
    "High Adoption within first month"
  ];

  return (
    <section className="py-12 bg-gray-50" id="process" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">08</span>
            <span>Implementation</span>
          </div>
          <h2 className="section-title mb-4">Proven Implementation Process</h2>
          <p className="section-subtitle mx-auto">
            Structured approach ensuring successful ERP deployment
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {phases.map((phase, index) => (
            <div key={index} className="glass-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-pulse-50 w-16 h-16 flex items-center justify-center text-pulse-500">
                    {phase.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold mb-2 md:mb-0">{phase.title}</h3>
                    <span className="text-pulse-500 font-medium">{phase.duration}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Activities:</h4>
                      <p className="text-gray-600 text-sm">{phase.activities}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Deliverables:</h4>
                      <p className="text-gray-600 text-sm">{phase.deliverables}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Proof Points</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {proofPoints.map((point, index) => (
              <div key={index} className="pulse-chip text-base px-4 py-2">
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;
