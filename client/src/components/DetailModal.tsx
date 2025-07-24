
import React from "react";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "../contexts/LanguageContext";

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
  const { t, language } = useLanguage();
  const defaultCTAButtons = [
    { text: "Get Started", variant: "primary" as const, action: undefined },
    { text: "Schedule Demo", variant: "secondary" as const, action: undefined }
  ];

  const finalCTAButtons = ctaButtons || defaultCTAButtons;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border-0 bg-white shadow-lg">

        
        <DialogHeader className="pb-4 border-b border-gray-200">
          <DialogTitle className="flex items-center gap-4 text-xl mb-0">
            <div className="w-12 h-12 bg-pulse-500 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className={`text-2xl font-semibold text-gray-900 ${language === 'ar' ? 'font-cairo' : 'font-brockmann'}`}>
                {title}
              </h2>
              {timeline && (
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                  <span className="text-sm text-pulse-600 font-medium">
                    {timeline}
                  </span>
                </div>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Description Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <p className={`text-gray-700 leading-relaxed ${language === 'ar' ? 'font-tajawal' : 'font-inter'}`}>
              {description}
            </p>
          </div>
          
          {/* Capabilities Section */}
          {capabilities && capabilities.length > 0 && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className={`text-lg font-semibold text-gray-900 mb-4 flex items-center ${language === 'ar' ? 'font-cairo' : 'font-brockmann'}`}>
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                {t('modal.key_capabilities')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0 ${language === 'ar' ? 'ml-4' : 'mr-3'}`}></div>
                    <span className={`text-gray-700 ${language === 'ar' ? 'font-tajawal' : 'font-inter'}`}>
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section */}
          {benefits && benefits.length > 0 && (
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className={`text-lg font-semibold text-gray-900 mb-4 flex items-center ${language === 'ar' ? 'font-cairo' : 'font-brockmann'}`}>
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                {t('modal.key_benefits')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0 ${language === 'ar' ? 'ml-4' : 'mr-3'}`}></div>
                    <span className={`text-gray-700 ${language === 'ar' ? 'font-tajawal' : 'font-inter'}`}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Steps Section */}
          {processSteps && processSteps.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className={`text-lg font-semibold text-gray-900 mb-4 flex items-center ${language === 'ar' ? 'font-cairo' : 'font-brockmann'}`}>
                <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                {t('modal.process_overview')}
              </h3>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold text-gray-900 mb-2 ${language === 'ar' ? 'font-cairo' : 'font-brockmann'}`}>
                          {step.title}
                        </h4>
                        <p className={`text-gray-600 mb-3 text-sm ${language === 'ar' ? 'font-tajawal' : 'font-inter'}`}>
                          {step.description}
                        </p>
                        {step.deliverables && (
                          <div className="bg-gray-50 rounded p-3 space-y-1">
                            <h5 className={`text-xs font-semibold text-gray-700 mb-2 ${language === 'ar' ? 'font-tajawal' : 'font-inter'}`}>
                              {t('modal.deliverables')}:
                            </h5>
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <div key={deliverableIndex} className="flex items-center text-xs text-gray-600">
                                <div className={`w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-2'}`}></div>
                                <span className={language === 'ar' ? 'font-tajawal' : 'font-inter'}>
                                  {deliverable}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Section */}
          {pricing && (
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100/50 shadow-sm">
              <div className="text-center mb-8">
                <div className="flex items-end justify-center mb-3">
                  <span className={`text-5xl font-bold bg-gradient-to-r from-pulse-600 to-purple-600 bg-clip-text text-transparent ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`}>
                    {pricing.price}
                  </span>
                  <span className={`text-gray-500 ml-2 text-lg ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
                    {pricing.period}
                  </span>
                </div>
                {pricing.originalPrice && (
                  <div className="flex items-center justify-center">
                    <span className={`text-lg text-gray-400 line-through mr-3 ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
                      {pricing.originalPrice}
                    </span>
                    <span className={`text-sm text-white bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 rounded-full font-semibold shadow-md ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
                      {t('modal.save_discount')}
                    </span>
                  </div>
                )}
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                <div className="space-y-4">
                  {pricing.features.map((feature, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-pulse-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className={`text-gray-700 font-medium ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Clients Section */}
          {clients && (
            <div className="bg-gradient-to-br from-amber-50/50 to-orange-50/30 rounded-2xl p-8 border border-amber-100/50">
              <h4 className={`text-xl font-bold text-gray-900 mb-4 flex items-center ${language === 'ar' ? 'font-arabic' : 'font-brockmann'}`}>
                <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                  <span className="text-white text-xs">👥</span>
                </div>
                {t('modal.perfect_for')}
              </h4>
              <p className={`text-gray-700 leading-relaxed font-medium ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
                {clients}
              </p>
            </div>
          )}
          
          {/* Additional Info Section */}
          {additionalInfo && (
            <div className="bg-gradient-to-br from-cyan-50/50 to-blue-50/30 rounded-2xl p-8 border border-cyan-100/50">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-sm">💡</span>
                </div>
                <p className={`text-gray-700 leading-relaxed font-medium ${language === 'ar' ? 'font-arabic' : 'font-inter'}`}>
                  {additionalInfo}
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;
