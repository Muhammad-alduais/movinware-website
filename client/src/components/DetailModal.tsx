
import React from "react";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  capabilities?: string[];
  timeline?: string;
  clients?: string;
  additionalInfo?: string;
  icon: React.ComponentType<{ className?: string }>;
  benefits?: string[];
  processSteps?: Array<{
    title: string;
    description: string;
    deliverables?: string[];
  }>;
  pricing?: {
    price: string;
    period: string;
    originalPrice?: string;
    features: string[];
  };
  ctaButtons?: Array<{
    text: string;
    variant: 'primary' | 'secondary';
    action?: () => void;
  }>;
}

const DetailModal = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  capabilities,
  timeline,
  clients,
  additionalInfo,
  benefits,
  processSteps,
  pricing,
  ctaButtons,
  icon: Icon 
}: DetailModalProps) => {
  const defaultCTAButtons = [
    { text: "Get Started", variant: "primary" as const, action: undefined },
    { text: "Schedule Demo", variant: "secondary" as const, action: undefined }
  ];

  const finalCTAButtons = ctaButtons || defaultCTAButtons;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-2xl mb-6">
            <div className="w-14 h-14 bg-pulse-50 rounded-2xl flex items-center justify-center">
              <Icon className="w-7 h-7 text-pulse-500" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-medium text-gray-900">{title}</h2>
              {timeline && (
                <span className="text-sm text-pulse-500 font-medium bg-pulse-50 px-3 py-1 rounded-full mt-2 inline-block">
                  {timeline}
                </span>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          {/* Description Section */}
          <div>
            <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
          </div>
          
          {/* Capabilities Section */}
          {capabilities && capabilities.length > 0 && (
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Key Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-xl p-4">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section */}
          {benefits && benefits.length > 0 && (
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-6">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Steps Section */}
          {processSteps && processSteps.length > 0 && (
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-6">Process Overview</h3>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="border-l-2 border-pulse-500 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-pulse-500 rounded-full -left-2 top-1"></div>
                    <h4 className="font-medium text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    {step.deliverables && (
                      <div className="space-y-1">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center text-sm text-gray-500">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Section */}
          {pricing && (
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-light text-gray-900">{pricing.price}</span>
                  <span className="text-gray-500 ml-1">{pricing.period}</span>
                </div>
                {pricing.originalPrice && (
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-400 line-through mr-2">{pricing.originalPrice}</span>
                    <span className="text-sm text-green-600 font-medium">Save 25%</span>
                  </div>
                )}
              </div>
              <div className="space-y-3">
                {pricing.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pulse-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Clients Section */}
          {clients && (
            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-medium text-gray-900 mb-3">Perfect for:</h4>
              <p className="text-gray-600">{clients}</p>
            </div>
          )}
          
          {/* Additional Info Section */}
          {additionalInfo && (
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">{additionalInfo}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;
