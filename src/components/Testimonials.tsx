
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  challenge: string;
  solution: string;
  results: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "MovinWare transformed our multi-channel inventory management with integrated ERP and real-time synchronization across all platforms.",
  author: "Ahmed Al-Rashid",
  role: "Operations Director",
  company: "Smart Commerce Group (E-commerce)",
  challenge: "Multi-channel inventory tracking",
  solution: "Integrated ERP + real-time sync",
  results: "6 weeks, 40%+ efficiency, 95% adoption",
  backgroundImage: "/background-section1.png"
}, {
  content: "The bilingual student management system and parent portal revolutionized our administrative processes while maintaining cultural sensitivity.",
  author: "Dr. Fatima Hassan",
  role: "Academic Director", 
  company: "Future Academy (Education)",
  challenge: "Student management, bilingual system",
  solution: "Student module, portal, billing",
  results: "4 weeks, 60%+ efficiency, 98% adoption",
  backgroundImage: "/background-section2.png"
}, {
  content: "GPS integration and route optimization reduced our operational costs significantly while improving fleet management efficiency.",
  author: "Khalid Mohamed",
  role: "Fleet Manager",
  company: "Advanced Logistics Co.",
  challenge: "Fleet and shipping optimization", 
  solution: "GPS, route planning, fleet management",
  results: "8 weeks, 25% cost savings, 92% adoption",
  backgroundImage: "/background-section3.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  company,
  challenge,
  solution,
  results,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-6 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        
        <div className="space-y-3 mb-6">
          <div className="text-sm">
            <span className="font-semibold">Challenge:</span> {challenge}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Solution:</span> {solution}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Results:</span> {results}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
          <p className="text-white/60 text-sm">{company}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">08</span>
            <span>Case Studies</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
