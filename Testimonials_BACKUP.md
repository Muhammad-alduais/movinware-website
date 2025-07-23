# Testimonials Section - Complete Backup for Future Use

This file contains the complete Testimonials section that was removed from the website on user request. All content, styles, and functionality are preserved for future implementation.

## Component File: Testimonials.tsx

```tsx
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
```

## English Translations

```typescript
// Testimonials
'testimonials.section': 'Testimonials',
'testimonials.title': 'What others say',
'testimonials.testimonial1.content': 'MovinWare transformed our production operations, streamlining workflows while our team focuses on strategic growth. 40% increase in efficiency within two months.',
'testimonials.testimonial1.author': 'Sarah Chen',
'testimonials.testimonial1.role': 'VP of Operations, Axion Manufacturing',
'testimonials.testimonial2.content': 'Implementing MovinWare in our logistics centers reduced operational costs by 35% while improving accuracy. The AI-powered insights are game-changing.',
'testimonials.testimonial2.author': 'Michael Rodriguez',
'testimonials.testimonial2.role': 'Director of Logistics, GlobalShip',
'testimonials.testimonial3.content': 'As a mid-size business, we never thought advanced ERP would be accessible to us. MovinWare changed that with its intuitive design and affordable pricing.',
'testimonials.testimonial3.author': 'Jason Lee',
'testimonials.testimonial3.role': 'CEO, Innovative Solutions Inc.',
```

## Arabic Translations

```typescript
// Testimonials
'testimonials.section': 'آراء العملاء',
'testimonials.title': 'ماذا يقول الآخرون',
'testimonials.testimonial1.content': 'غيّرت MovinWare عمليات الإنتاج لدينا، وبسّطت سير العمل بينما يركز فريقنا على النمو الاستراتيجي. زيادة 40% في الكفاءة خلال شهرين.',
'testimonials.testimonial1.author': 'سارة تشين',
'testimonials.testimonial1.role': 'نائب رئيس العمليات، أكسيون للتصنيع',
'testimonials.testimonial2.content': 'تنفيذ MovinWare في مراكز اللوجستيات لدينا قلل التكاليف التشغيلية بنسبة 35% مع تحسين الدقة. الرؤى المدعومة بالذكاء الاصطناعي تغير قواعد اللعبة.',
'testimonials.testimonial2.author': 'مايكل رودريجيز',
'testimonials.testimonial2.role': 'مدير اللوجستيات، جلوبال شيب',
'testimonials.testimonial3.content': 'كشركة متوسطة الحجم، لم نعتقد أبداً أن نظام تخطيط موارد المؤسسات المتقدم سيكون متاحاً لنا. غيّرت MovinWare ذلك بتصميمها البديهي والأسعار المعقولة.',
'testimonials.testimonial3.author': 'جيسون لي',
'testimonials.testimonial3.role': 'الرئيس التنفيذي، شركة الحلول المبتكرة',
```

## CSS Styles Used

The component uses these key CSS classes:
- `pulse-chip` - For the section label
- `section-container` - For main container
- `animate-on-scroll` - For scroll animations
- `opacity-0 animate-on-scroll` - For fade-in animations
- `font-display` - For display font
- `text-5xl font-display font-bold` - For main title
- `rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden` - For testimonial cards

## Background Images Used

The component references these background images:
- `/background-section1.png`
- `/background-section2.png` 
- `/background-section3.png`

## How to Re-implement

1. Copy the Testimonials.tsx component back to `client/src/components/`
2. Add the translation keys back to `client/src/contexts/LanguageContext.tsx`
3. Import and add `<Testimonials />` back to the main page in `client/src/pages/Index.tsx`
4. Ensure the background images are available in the public directory

## Notes

- Component uses the OptimizedBackground component for image optimization
- Responsive design with grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
- Smooth hover animations with translate effects
- Uses the language context for bilingual support
- Intersection observer for scroll animations