
import React from "react";

const Footer = () => {
  const footerLinks = {
    Solutions: ["ERP Implementation", "Industry Solutions", "AI Integration", "UX Design"],
    Services: ["Data Migration", "Support", "Training", "Consulting"],
    Industries: ["Education", "Retail", "Manufacturing", "Logistics"],
    Company: ["About", "Contact", "Careers", "Partners"]
  };

  return <footer className="w-full bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-pulse-500 mb-4">MovinWare</div>
            <p className="text-gray-300 text-sm mb-4">
              Smart Operations. Seamless Transformation.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 MovinWare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
