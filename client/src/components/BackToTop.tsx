import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Track scrolling state for animation
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 group",
        "w-12 h-12 rounded-full",
        "bg-white/90 backdrop-blur-sm",
        "border border-gray-200/50",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300 ease-out",
        "hover:scale-110 hover:bg-white",
        "focus:outline-none focus:ring-2 focus:ring-pulse-500/20 focus:ring-offset-2",
        "active:scale-95",
        isScrolling && "animate-pulse-glow"
      )}
      aria-label="Back to top"
    >
      <div className="flex items-center justify-center w-full h-full">
        <ArrowUp 
          className={cn(
            "w-5 h-5 text-gray-600 transition-all duration-300",
            "group-hover:text-pulse-500 group-hover:-translate-y-0.5"
          )} 
        />
      </div>
      
      {/* Subtle ring animation on hover */}
      <div className={cn(
        "absolute inset-0 rounded-full border-2 border-pulse-500/0",
        "transition-all duration-300 group-hover:border-pulse-500/20",
        "group-hover:scale-110"
      )} />
    </button>
  );
};

export default BackToTop;