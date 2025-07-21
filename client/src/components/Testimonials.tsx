import React, { useRef } from "react";
import { OptimizedBackground } from "./ui";
import { useLanguage } from "../contexts/LanguageContext";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <OptimizedBackground src={backgroundImage} className="rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden">
    
    
    <div className="relative z-0">
      <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
      <div>
        <h4 className="font-semibold text-xl">{author}</h4>
        <p className="text-white/80">{role}</p>
      </div>
    </div>
  </OptimizedBackground>;
};

const Testimonials = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const testimonials: TestimonialProps[] = [{
    content: String(t('testimonials.testimonial1.content')),
    author: String(t('testimonials.testimonial1.author')),
    role: String(t('testimonials.testimonial1.role')),
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    backgroundImage: "/background-section1.png"
  }, {
    content: String(t('testimonials.testimonial2.content')),
    author: String(t('testimonials.testimonial2.author')),
    role: String(t('testimonials.testimonial2.role')),
    gradient: "from-green-600 via-teal-700 to-blue-800",
    backgroundImage: "/background-section2.png"
  }, {
    content: String(t('testimonials.testimonial3.content')),
    author: String(t('testimonials.testimonial3.author')),
    role: String(t('testimonials.testimonial3.role')),
    gradient: "from-orange-600 via-red-500 to-purple-600",
    backgroundImage: "/background-section3.png"
  }];

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            
            <span>{t('testimonials.section')}</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">{t('testimonials.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;