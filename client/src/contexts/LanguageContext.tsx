import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.value': '360° Value', 
    'nav.platform': 'Platform',
    'nav.industries': 'Industries',
    'nav.erp': 'Solutions',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.open': 'Open menu',
    
    // Hero Section
    'hero.chip': 'ERP Solutions',
    'hero.title': 'Intelligent Operations.\nSeamless Transformation',
    'hero.subtitle': 'AI-powered ERP system designed for your workflow. Streamline operations, boost efficiency, and future-proof your business with MovinWare\'s intelligent solutions.',
    'hero.cta': 'Start Your Journey',
    
    // Value Section
    'value.section': '360° VALUE',
    'value.title': 'We don\'t just build software',
    'value.subtitle': 'We build your business future',
    'value.ai.title': 'Intelligent automation that learns from your business',
    'value.ai.features': ['Automatic Forecasting', 'Decision Automation', 'Smart Workflows', 'Advanced Analytics'],
    'value.speed.title': 'From setup to results in record time',
    'value.speed.features': ['Rapid Deployment', 'Immediate ROI', 'Instant Benefits', 'Proven Methodology'],
    'value.culture.title': 'Built for MENA businesses',
    'value.culture.features': ['Bilingual Support', 'Native RTL Interfaces', 'Local Compliance', 'Cultural Alignment'],
    'value.adoption.title': 'Simple, intuitive, and user-friendly',
    'value.adoption.features': ['Intuitive Design', 'Simplified Training', 'User-Friendly Interface', 'Ongoing Support'],
    
    // Platform Capabilities
    'capabilities.section': 'Platform Capabilities',
    'capabilities.title': 'Everything you need,\nbeautifully integrated',
    'capabilities.subtitle': 'A comprehensive platform designed for modern businesses with advanced features that grow with you',
    'capabilities.overview': 'Platform Integration Overview',
    'capabilities.overview.subtitle': 'A unified ecosystem where all capabilities work together seamlessly to provide comprehensive business management',
    'capabilities.core.title': 'Core Modules',
    'capabilities.core.description': 'Essential business modules for complete operations management and workflow automation.',
    'capabilities.core.timeline': 'Core Foundation',
    'capabilities.ai.title': 'AI Features',
    'capabilities.ai.description': 'Advanced AI technology that learns and optimizes your business processes automatically.',
    'capabilities.ai.timeline': 'Smart Enhancement',
    'capabilities.integration.title': 'Integration Hub',
    'capabilities.integration.description': 'Connect with 500+ platforms and systems seamlessly for unified data flow.',
    'capabilities.integration.timeline': 'Seamless Connection',
    'capabilities.mobile.title': 'Mobile & Cloud Platform',
    'capabilities.mobile.description': 'Access your business data anywhere with 99.9% uptime guarantee and offline capabilities.',
    'capabilities.mobile.timeline': 'Anywhere Access',
    'capabilities.stats.api': 'API Integrations',
    'capabilities.stats.uptime': 'Uptime SLA',
    'capabilities.stats.monitoring': 'System Monitoring',
    'capabilities.stats.sync': 'Data Sync',
    
    // Industries
    'industries.section': 'Industries',
    'industries.title': 'Tailored for\nevery sector',
    'industries.subtitle': 'Industry-specific solutions designed to meet the unique challenges and requirements of your business sector',
    'industries.trusted': 'Trusted by companies of all sizes',
    'industries.trusted.subtitle': 'From startups to enterprises, we scale with your business needs and provide tailored solutions for every growth stage',
    'industries.education.title': 'Education',
    'industries.education.description': 'Complete educational management solutions for modern institutions and learning environments.',
    'industries.education.timeline': '500+ Institutions',
    'industries.retail.title': 'Retail',
    'industries.retail.description': 'End-to-end retail management for omnichannel success and customer satisfaction.',
    'industries.retail.timeline': '1,000+ Stores',
    'industries.manufacturing.title': 'Manufacturing',
    'industries.manufacturing.description': 'Smart manufacturing solutions for Industry 4.0 transformation and operational excellence.',
    'industries.manufacturing.timeline': '200+ Factories',
    'industries.logistics.title': 'Logistics',
    'industries.logistics.description': 'Intelligent logistics and supply chain optimization platform for seamless operations.',
    'industries.logistics.timeline': '300+ Companies',
    
    // ERP Solutions
    'erp.section': 'ERP Solutions',
    'erp.title': 'Complete business\nsolutions',
    'erp.subtitle': 'Integrated modules that work together seamlessly to power every aspect of your business operations',
    'erp.integration': 'Seamless integration across all modules',
    'erp.integration.subtitle': 'All modules share data in real-time, providing a unified view of your business operations with complete transparency and control',
    'erp.accounting.title': 'Accounting & Finance',
    'erp.hr.title': 'Human Resources',
    'erp.sales.title': 'Sales & CRM',
    'erp.inventory.title': 'Inventory Management',
    'erp.manufacturing.title': 'Manufacturing',
    'erp.assets.title': 'Asset Management',
    
    // Services
    'services.section': 'Professional Services',
    'services.title': 'Expert services for\nsuccessful implementation',
    'services.subtitle': 'Our certified professionals ensure your ERP implementation is delivered on time, within budget, and exceeds expectations',
    'services.methodology': 'Our Service Methodology',
    'services.methodology.subtitle': 'A structured approach that ensures quality delivery and client satisfaction at every stage',
    'services.process.consultation': 'Consultation',
    'services.process.planning': 'Planning',
    'services.process.execution': 'Execution',
    'services.process.delivery': 'Delivery',
    'services.process.support': 'Support',
    
    // Implementation Process
    'implementation.section': 'Implementation Process',
    'implementation.title': 'From concept to\ngo-live in 11 weeks',
    'implementation.subtitle': 'Our proven methodology ensures successful implementation with minimal disruption to your business',
    'implementation.timeline': 'Implementation Timeline',
    'implementation.why': 'Why our process works',
    'implementation.why.subtitle': 'Proven results from our implementation methodology',
    'implementation.discovery.title': 'Discovery & Assessment',
    'implementation.design.title': 'Design & Configuration',
    'implementation.development.title': 'Development & Integration',
    'implementation.deployment.title': 'Deployment & Training',
    'implementation.optimization.title': 'Optimization & Support',
    
    // Contact
    'contact.section': 'Contact Us',
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to transform your business? Contact us today to get started.',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.phone': 'Phone',
    'contact.form.inquiry': 'Inquiry Type',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.actions.title': 'Quick Actions',
    
    // Common
    'common.learn_more': 'Learn More',
    'common.explore': 'Explore module details',
    'common.required': 'required',
    'common.loading': 'Loading...',
    'common.success': 'Success',
    'common.error': 'Error'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.value': 'قيمة شاملة',
    'nav.platform': 'المنصة',
    'nav.industries': 'الصناعات',
    'nav.erp': 'الحلول',
    'nav.services': 'الخدمات',
    'nav.contact': 'تواصل معنا',
    'nav.menu': 'القائمة',
    'nav.close': 'إغلاق القائمة',
    'nav.open': 'فتح القائمة',
    
    // Hero Section
    'hero.chip': 'حلول تخطيط موارد المؤسسات',
    'hero.title': 'عمليات ذكية.\nتحول سلس',
    'hero.subtitle': 'نظام تخطيط موارد المؤسسات المدعوم بالذكاء الاصطناعي مصمم خصيصاً لسير عملك. قم بتبسيط العمليات وزيادة الكفاءة وضمان مستقبل أعمالك مع حلول MovinWare الذكية.',
    'hero.cta': 'ابدأ رحلتك',
    
    // Value Section
    'value.section': 'قيمة شاملة',
    'value.title': 'نحن لا نصنع البرمجيات فقط',
    'value.subtitle': 'نحن نبني مستقبل أعمالك',
    'value.ai.title': 'أتمتة ذكية تتعلم من أعمالك',
    'value.ai.features': ['التنبؤ التلقائي', 'أتمتة القرارات', 'سير عمل ذكي', 'تحليلات متقدمة'],
    'value.speed.title': 'من الإعداد إلى النتائج في وقت قياسي',
    'value.speed.features': ['نشر سريع', 'عائد فوري على الاستثمار', 'فوائد فورية', 'منهجية مثبتة'],
    'value.culture.title': 'مصمم لأعمال منطقة الشرق الأوسط',
    'value.culture.features': ['دعم ثنائي اللغة', 'واجهات أصلية من اليمين لليسار', 'الامتثال المحلي', 'التوافق الثقافي'],
    'value.adoption.title': 'بسيط وبديهي وسهل الاستخدام',
    'value.adoption.features': ['تصميم بديهي', 'تدريب مبسط', 'واجهة سهلة الاستخدام', 'دعم مستمر'],
    
    // Platform Capabilities
    'capabilities.section': 'قدرات المنصة',
    'capabilities.title': 'كل ما تحتاجه،\nمتكامل بشكل جميل',
    'capabilities.subtitle': 'منصة شاملة مصممة للأعمال الحديثة مع ميزات متقدمة تنمو معك',
    'capabilities.overview': 'نظرة عامة على تكامل المنصة',
    'capabilities.overview.subtitle': 'نظام بيئي موحد حيث تعمل جميع القدرات معاً بسلاسة لتوفير إدارة أعمال شاملة',
    'capabilities.core.title': 'الوحدات الأساسية',
    'capabilities.core.description': 'وحدات أعمال أساسية لإدارة العمليات الكاملة وأتمتة سير العمل.',
    'capabilities.ai.title': 'ميزات الذكاء الاصطناعي',
    'capabilities.ai.description': 'تقنية ذكاء اصطناعي متقدمة تتعلم وتحسن عمليات أعمالك تلقائياً.',
    'capabilities.integration.title': 'مركز التكامل',
    'capabilities.integration.description': 'اتصل مع أكثر من 500 منصة ونظام بسلاسة لتدفق بيانات موحد.',
    'capabilities.mobile.title': 'منصة الهاتف المحمول والسحابة',
    'capabilities.mobile.description': 'الوصول إلى بيانات أعمالك في أي مكان مع ضمان وقت تشغيل 99.9% وقدرات غير متصلة.',
    
    // Industries
    'industries.section': 'الصناعات',
    'industries.title': 'مصمم\nلكل قطاع',
    'industries.subtitle': 'حلول خاصة بالصناعة مصممة لتلبية التحديات والمتطلبات الفريدة لقطاع أعمالك',
    'industries.trusted': 'موثوق به من قبل الشركات من جميع الأحجام',
    'industries.trusted.subtitle': 'من الشركات الناشئة إلى المؤسسات، نحن نتوسع مع احتياجات أعمالك ونوفر حلولاً مخصصة لكل مرحلة نمو',
    'industries.education.title': 'التعليم',
    'industries.education.description': 'حلول إدارة تعليمية شاملة للمؤسسات الحديثة وبيئات التعلم.',
    'industries.education.timeline': '+500 مؤسسة',
    'industries.retail.title': 'التجارة',
    'industries.retail.description': 'إدارة التجزئة الشاملة للنجاح متعدد القنوات ورضا العملاء.',
    'industries.retail.timeline': '+1000 متجر',
    'industries.manufacturing.title': 'التصنيع',
    'industries.manufacturing.description': 'حلول تصنيع ذكية لتحول الصناعة 4.0 والتميز التشغيلي.',
    'industries.manufacturing.timeline': '+200 مصنع',
    'industries.logistics.title': 'اللوجستيات',
    'industries.logistics.description': 'منصة لوجستيات ذكية وتحسين سلسلة التوريد للعمليات السلسة.',
    'industries.logistics.timeline': '+300 شركة',
    
    // ERP Solutions
    'erp.section': 'حلول تخطيط موارد المؤسسات',
    'erp.title': 'حلول أعمال\nشاملة',
    'erp.subtitle': 'وحدات متكاملة تعمل معاً بسلاسة لتشغيل جميع جوانب عمليات أعمالك',
    'erp.integration': 'تكامل سلس عبر جميع الوحدات',
    'erp.integration.subtitle': 'جميع الوحدات تشارك البيانات في الوقت الفعلي، مما يوفر رؤية موحدة لعمليات أعمالك مع شفافية وتحكم كاملين',
    'erp.accounting.title': 'المحاسبة والمالية',
    'erp.accounting.description': 'إدارة مالية شاملة مع رؤى في الوقت الفعلي.',
    'erp.hr.title': 'الموارد البشرية',
    'erp.hr.description': 'إدارة موارد بشرية شاملة لدورة حياة الموظف الكاملة.',
    'erp.sales.title': 'المبيعات وإدارة علاقات العملاء',
    'erp.sales.description': 'مبيعات وإدارة علاقات عملاء مدعومة بالذكاء الاصطناعي.',
    
    // Services
    'services.section': 'الخدمات المهنية',
    'services.title': 'خدمات متخصصة\nللتنفيذ الناجح',
    'services.subtitle': 'يضمن المهنيون المعتمدون لدينا تسليم تنفيذ نظام تخطيط الموارد في الوقت المحدد وضمن الميزانية ويتجاوز التوقعات',
    'services.methodology': 'منهجية خدماتنا',
    'services.methodology.subtitle': 'نهج منظم يضمن تسليم الجودة ورضا العملاء في كل مرحلة',
    'services.process.consultation': 'الاستشارة',
    'services.process.planning': 'التخطيط',
    'services.process.execution': 'التنفيذ',
    'services.process.delivery': 'التسليم',
    'services.process.support': 'الدعم',
    
    // Implementation Process
    'implementation.section': 'عملية التنفيذ',
    'implementation.title': 'من المفهوم إلى\nالتشغيل في 11 أسبوعاً',
    'implementation.subtitle': 'تضمن منهجيتنا المثبتة تنفيذاً ناجحاً مع الحد الأدنى من التعطيل لأعمالك',
    'implementation.timeline': 'جدول زمني للتنفيذ',
    'implementation.why': 'لماذا تعمل عمليتنا',
    'implementation.why.subtitle': 'نتائج مثبتة من منهجية التنفيذ الخاصة بنا',
    'implementation.discovery.title': 'الاكتشاف والتقييم',
    'implementation.design.title': 'التصميم والتكوين',
    'implementation.development.title': 'التطوير والتكامل',
    'implementation.deployment.title': 'النشر والتدريب',
    'implementation.optimization.title': 'التحسين والدعم',
    
    // Contact
    'contact.section': 'تواصل معنا',
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'مستعد لتحويل أعمالك؟ تواصل معنا اليوم للبدء.',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.company': 'الشركة',
    'contact.form.phone': 'الهاتف',
    'contact.form.inquiry': 'نوع الاستفسار',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'contact.info.title': 'معلومات الاتصال',
    'contact.actions.title': 'إجراءات سريعة',
    
    // Common
    'common.learn_more': 'اعرف المزيد',
    'common.explore': 'استكشف تفاصيل الوحدة',
    'common.required': 'مطلوب',
    'common.loading': 'جارٍ التحميل...',
    'common.success': 'نجح',
    'common.error': 'خطأ'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  const t = (key: string): any => {
    return translations[language as keyof typeof translations]?.[key] || key;
  };

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};