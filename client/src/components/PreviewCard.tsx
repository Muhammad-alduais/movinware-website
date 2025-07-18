
import React from "react";
import { ArrowRight } from "lucide-react";

interface PreviewCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  timeline?: string;
  metric?: string;
  onLearnMore: () => void;
  className?: string;
  index?: number;
}

const PreviewCard = ({ 
  icon: Icon, 
  title, 
  description, 
  timeline, 
  metric,
  onLearnMore, 
  className = "",
  index = 0
}: PreviewCardProps) => {
  return (
    <div 
      className={`
        group opacity-0 animate-slide-up bg-white rounded-3xl p-8 border border-gray-200 
        hover:border-gray-300 transition-all duration-500 hover:shadow-xl h-full
        ${className}
      `}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="flex items-start mb-6">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-pulse-50 transition-all duration-500">
          <Icon className="w-7 h-7 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-medium text-gray-900 mb-2 pr-2">{title}</h3>
          {(timeline || metric) && (
            <div className="mb-3">
              <span className="text-xs text-pulse-500 font-medium bg-pulse-50 px-3 py-1 rounded-full inline-block">
                {timeline || metric}
              </span>
            </div>
          )}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{description}</p>
        </div>
      </div>
      
      <button 
        onClick={onLearnMore}
        className="flex items-center text-pulse-500 font-medium text-sm group-hover:text-pulse-600 transition-colors duration-300 hover:gap-3 gap-2"
      >
        Learn more
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default PreviewCard;
