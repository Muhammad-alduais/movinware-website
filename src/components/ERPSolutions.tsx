
import React, { useRef } from "react";
import { Calculator, Users, TrendingUp, Package, Factory, Monitor } from "lucide-react";

const ERPSolutions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Accounting",
      features: "General Ledger, Invoicing, Reporting, Compliance"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human Resources",
      features: "Records, Attendance, Payroll, Leave Calendar"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sales & CRM",
      features: "Leads, Quotes, Orders, Customer Portal"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory",
      features: "Stock Tracking, Warehousing, Pricing, Labeling"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Manufacturing",
      features: "BOM, Orders, Planning, Quality"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Asset Management",
      features: "Depreciation, Maintenance, QR, Alerts"
    }
  ];

  return (
    <section className="py-12 bg-white" id="solutions" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">07</span>
            <span>ERP Solutions</span>
          </div>
          <h2 className="section-title mb-4">Complete Business Management</h2>
          <p className="section-subtitle mx-auto">
            Integrated modules to streamline every aspect of your operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="glass-card p-6 lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50 transition-all duration-300"
            >
              <div className="rounded-full bg-pulse-50 w-12 h-12 flex items-center justify-center text-pulse-500 mb-5">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.features}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPSolutions;
