
import React, { useRef } from "react";
import { GraduationCap, ShoppingBag, Factory, Truck, Building, Users, TrendingUp } from "lucide-react";

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      features: "Student Management, Academic Planning, Parent Portal, Fee Management",
      clients: "Schools, Universities, Training Centers, Online Learning"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Retail",
      features: "POS, Inventory Sync, Loyalty Programs, Multi-channel Sales",
      clients: "Retail Chains, Online Stores, Fashion, Electronics"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Manufacturing",
      features: "Production Planning, Quality Control, Supply Chain Management, Preventive Maintenance",
      clients: "Manufacturers, Assembly Lines, Food Processing, Textile"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Logistics",
      features: "Fleet Management, Route Optimization, Inventory Tracking, Customs Management",
      clients: "Shipping Companies, 3PL Providers, Distribution Centers, Freight Companies"
    }
  ];

  const companySizes = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Startups",
      description: "Quick Implementation, Scalable, Cost-Effective"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "SMEs",
      description: "Feature-Rich, Customizable, Easy Integration, Dedicated Support"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Enterprises",
      description: "Advanced Analytics, Multi-Location, Regulatory Compliance, 24/7 Support"
    }
  ];

  return (
    <section className="py-12 bg-white" id="industries" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Industries</span>
          </div>
          <h2 className="section-title mb-4">Tailored Solutions for Every Sector</h2>
          <p className="section-subtitle mx-auto">
            Specialized ERP solutions designed for each industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-pulse-50 w-12 h-12 flex items-center justify-center text-pulse-500 mr-4 flex-shrink-0">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Features:</span> {industry.features}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Clients:</span> {industry.clients}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-8">Company Sizes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companySizes.map((size, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="rounded-full bg-pulse-50 w-16 h-16 flex items-center justify-center text-pulse-500 mb-6 mx-auto">
                {size.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{size.title}</h3>
              <p className="text-gray-600">{size.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
