import React from "react";
import { OptimizedBackground, OptimizedImage } from "./ui";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <OptimizedBackground
            src="/background-section3.png"
            className="p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between"
          >
            <div className="flex items-center text-white">
              <OptimizedImage src="/logo.svg" alt="Pulse Robot Logo" className="h-5 sm:h-6 w-auto mr-3 invert" />
              <span className="text-white text-xl font-medium"></span>
            </div>
            
            <div className="overflow-hidden h-[80px] mt-10">
              <h2 className="sm:text-5xl font-playfair text-white italic font-thin text-6xl md:text-7xl text-center lg:text-7xl pb-[100px] mb-[-30px]">
                Made By AI & Human
              </h2>
            </div>
            
            {/* White box at the bottom with overflow */}
            <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </OptimizedBackground>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;