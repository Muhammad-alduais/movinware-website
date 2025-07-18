import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.value': 'Value',
    'nav.platform': 'Platform',
    'nav.industries': 'Industries',
    'nav.erp': 'Solutions',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.open': 'Open menu',
    
    // Hero Section
    'hero.chip': 'Enterprise Resource Planning Solutions',
    'hero.title': 'Smart Operations.\nSeamless Transformation',
    'hero.subtitle': 'AI-powered ERP system designed specifically for your workflow. Streamline operations, boost efficiency, and future-proof your business with MovinWare\'s intelligent solutions.',
    'hero.cta': 'Start Your Journey',
    
    // Value Section
    'value.section': 'Value',
    'value.title': 'We don\'t just build software',
    'value.subtitle': 'We build the future of your business',
    'value.ai.title': 'Smart automation that learns your business',
    'value.ai.badge': 'AI Features',
    'value.ai.features': ['Predictive Analytics', 'Decision Automation', 'Intelligent Workflows', 'Advanced Analytics'],
    'value.speed.title': 'From setup to results in record time',
    'value.speed.badge': 'Unmatched Speed',
    'value.speed.features': ['Rapid Deployment', 'Immediate ROI', 'Instant Benefits', 'Proven Methodology'],
    'value.culture.title': 'Built for Middle Eastern businesses',
    'value.culture.badge': 'Cultural Fit',
    'value.culture.features': ['Bilingual Support', 'Native RTL Interfaces', 'Local Compliance', 'Cultural Alignment'],
    'value.adoption.title': 'Simple, intuitive, and user-friendly',
    'value.adoption.badge': 'Easy Adoption',
    'value.adoption.features': ['Intuitive Design', 'Simplified Training', 'User-Friendly Interface', 'Ongoing Support'],
    
    // Platform Capabilities
    'capabilities.section': 'Platform Capabilities',
    'capabilities.title': 'Everything you need,\nbeautifully integrated',
    'capabilities.subtitle': 'A comprehensive platform designed for modern business with advanced features that grow with you',
    'capabilities.overview': 'Platform Integration Overview',
    'capabilities.overview.subtitle': 'A unified ecosystem where all capabilities work together seamlessly to deliver comprehensive business management',
    'capabilities.core.title': 'Core Business Modules',
    'capabilities.core.description': 'Essential business modules for complete operations management and workflow automation.',
    'capabilities.core.timeline': 'Core Foundation',
    'capabilities.ai.title': 'AI-Powered Features',
    'capabilities.ai.description': 'Advanced AI technology that learns and automatically optimizes your business processes.',
    'capabilities.ai.timeline': 'Intelligent Optimization',
    'capabilities.integration.title': 'Integration Hub',
    'capabilities.integration.description': 'Seamlessly connect with 500+ platforms and systems for unified data flow.',
    'capabilities.integration.timeline': 'Seamless Connection',
    'capabilities.mobile.title': 'Mobile & Cloud Platform',
    'capabilities.mobile.description': 'Access your business data anywhere with 99.9% uptime guarantee and offline capabilities.',
    'capabilities.mobile.timeline': 'Anywhere Access',
    'capabilities.stats.api': 'API Integrations',
    'capabilities.stats.api_desc': 'Third-party connections available',
    'capabilities.stats.uptime': 'Uptime SLA',
    'capabilities.stats.uptime_desc': 'Enterprise-grade reliability',
    'capabilities.stats.monitoring': 'System Monitoring',
    'capabilities.stats.monitoring_desc': 'Continuous performance tracking',
    'capabilities.stats.realtime': 'Real-time',
    'capabilities.stats.sync': 'Data Sync',
    'capabilities.stats.sync_desc': 'Instant updates across devices',
    
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
    
    // CTA Section
    'cta.chip': 'Limited Availability',
    'cta.title': 'Be Among the First to',
    'cta.title_highlight': 'Experience Atlas',
    'cta.subtitle': 'We\'re accepting a limited number of early adopters. Submit your application today to secure your place in the future of robotics.',
    'cta.request_access': 'Request Early Access',
    'cta.join_waitlist': 'Join Waitlist',
    
    // Features Section
    'features.chip': 'Features',
    'features.title': 'Advanced Intelligence,',
    'features.title_highlight': 'Human-Like Intuition',
    'features.subtitle': 'Built with cutting-edge technology to understand, learn, and adapt to your unique needs.',
    'features.adaptive_learning.title': 'Adaptive Learning',
    'features.adaptive_learning.description': 'Atlas learns from your interactions, continuously improving its responses and actions to better serve your needs.',
    'features.natural_interaction.title': 'Natural Interaction',
    'features.natural_interaction.description': 'Communicate using natural language and gestures. Atlas understands context and responds appropriately.',
    'features.precise_movement.title': 'Precise Movement',
    'features.precise_movement.description': 'Advanced motorized joints provide fluid, human-like movement with exceptional balance and coordination.',
    'features.spatial_awareness.title': 'Spatial Awareness',
    'features.spatial_awareness.description': 'Advanced sensors and mapping technology allow Atlas to navigate complex environments with ease.',
    'features.enhanced_security.title': 'Enhanced Security',
    'features.enhanced_security.description': 'Built-in protocols protect your data and privacy, while physical safeguards ensure safe operation.',
    'features.task_assistance.title': 'Task Assistance',
    'features.task_assistance.description': 'From simple reminders to complex multi-step tasks, Atlas can assist with a wide range of activities.',
    
    // How It Works Section
    'howItWorks.chip': 'Process',
    'howItWorks.title': 'How Atlas Integrates Into Your Life',
    'howItWorks.subtitle': 'A seamless four-step process from request to full integration.',
    'howItWorks.request_access.title': 'Request Access',
    'howItWorks.request_access.description': 'Fill out the application form to join our early access program and secure your spot in line.',
    'howItWorks.personalization.title': 'Personalization',
    'howItWorks.personalization.description': 'We\'ll work with you to customize Atlas to your specific needs and preferences.',
    'howItWorks.integration.title': 'Integration',
    'howItWorks.integration.description': 'Atlas arrives at your location and is integrated into your living or working environment.',
    'howItWorks.adaptation.title': 'Adaptation',
    'howItWorks.adaptation.description': 'Atlas learns from your environment and routines, becoming more effective over time.',
    
    // ERP Solutions
    'erp.section': 'ERP Solutions',
    'erp.title': 'Complete Solutions for Every Need',
    'erp.subtitle': 'Integrated modules designed to optimize your business efficiency and automate operations',
    'erp.integration': 'Module Integration',
    'erp.integration.subtitle': 'Unified system ensuring seamless data flow across all modules',
    
    // Contact Section
    'contact.section': 'Contact Us',
    'contact.title': 'Let\'s Start a Conversation',
    'contact.subtitle': 'Connect with our expert team to discuss your enterprise needs',
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company',
    'contact.form.phone': 'Phone Number',
    'contact.form.inquiry': 'Inquiry Type',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    
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
    'value.ai.badge': 'ميزات الذكاء الاصطناعي',
    'value.ai.features': ['التنبؤ التلقائي', 'أتمتة القرارات', 'سير عمل ذكي', 'تحليلات متقدمة'],
    'value.speed.title': 'من الإعداد إلى النتائج في وقت قياسي',
    'value.speed.badge': 'سرعة لا مثيل لها',
    'value.speed.features': ['نشر سريع', 'عائد فوري على الاستثمار', 'فوائد فورية', 'منهجية مثبتة'],
    'value.culture.title': 'مصمم لأعمال منطقة الشرق الأوسط',
    'value.culture.badge': 'التوافق الثقافي',
    'value.culture.features': ['دعم ثنائي اللغة', 'واجهات أصلية من اليمين لليسار', 'الامتثال المحلي', 'التوافق الثقافي'],
    'value.adoption.title': 'بسيط وبديهي وسهل الاستخدام',
    'value.adoption.badge': 'اعتماد سهل',
    'value.adoption.features': ['تصميم بديهي', 'تدريب مبسط', 'واجهة سهلة الاستخدام', 'دعم مستمر'],
    
    // Platform Capabilities
    'capabilities.section': 'قدرات المنصة',
    'capabilities.title': 'كل ما تحتاجه،\nمتكامل بشكل جميل',
    'capabilities.subtitle': 'منصة شاملة مصممة للأعمال الحديثة مع ميزات متقدمة تنمو معك',
    'capabilities.overview': 'نظرة عامة على تكامل المنصة',
    'capabilities.overview.subtitle': 'نظام بيئي موحد حيث تعمل جميع القدرات معاً بسلاسة لتوفير إدارة أعمال شاملة',
    'capabilities.core.title': 'الوحدات الأساسية',
    'capabilities.core.description': 'وحدات أعمال أساسية لإدارة العمليات الكاملة وأتمتة سير العمل.',
    'capabilities.core.timeline': 'الأساس الأساسي',
    'capabilities.ai.title': 'ميزات الذكاء الاصطناعي',
    'capabilities.ai.description': 'تقنية ذكاء اصطناعي متقدمة تتعلم وتحسن عمليات أعمالك تلقائياً.',
    'capabilities.ai.timeline': 'التحسين الذكي',
    'capabilities.integration.title': 'مركز التكامل',
    'capabilities.integration.description': 'اتصل مع أكثر من 500 منصة ونظام بسلاسة لتدفق بيانات موحد.',
    'capabilities.integration.timeline': 'الاتصال السلس',
    'capabilities.mobile.title': 'منصة الهاتف المحمول والسحابة',
    'capabilities.mobile.description': 'الوصول إلى بيانات أعمالك في أي مكان مع ضمان وقت تشغيل 99.9% وقدرات غير متصلة.',
    'capabilities.mobile.timeline': 'الوصول في أي مكان',
    'capabilities.stats.api': 'تكامل API',
    'capabilities.stats.api_desc': 'الاتصالات الطرف الثالث متاحة',
    'capabilities.stats.uptime': 'ضمان وقت التشغيل',
    'capabilities.stats.uptime_desc': 'الموثوقية على مستوى المؤسسة',
    'capabilities.stats.monitoring': 'مراقبة النظام',
    'capabilities.stats.monitoring_desc': 'تتبع الأداء المستمر',
    'capabilities.stats.realtime': 'الوقت الفعلي',
    'capabilities.stats.sync': 'مزامنة البيانات',
    'capabilities.stats.sync_desc': 'التحديثات الفورية عبر الأجهزة',
    
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
    
    // CTA Section
    'cta.chip': 'توفر محدود',
    'cta.title': 'كن من أول من يجرب',
    'cta.title_highlight': 'أطلس',
    'cta.subtitle': 'نحن نقبل عدداً محدوداً من المستخدمين الأوائل. قدم طلبك اليوم لتأمين مكانك في مستقبل الروبوتات.',
    'cta.request_access': 'اطلب الوصول المبكر',
    'cta.join_waitlist': 'انضم لقائمة الانتظار',
    
    // Features Section
    'features.chip': 'الميزات',
    'features.title': 'ذكاء متقدم،',
    'features.title_highlight': 'حدس شبيه بالإنسان',
    'features.subtitle': 'مبني بتقنية متطورة للفهم والتعلم والتكيف مع احتياجاتك الفريدة.',
    'features.adaptive_learning.title': 'التعلم التكيفي',
    'features.adaptive_learning.description': 'يتعلم أطلس من تفاعلاتك، ويحسن استجاباته وأفعاله باستمرار لخدمتك بشكل أفضل.',
    'features.natural_interaction.title': 'التفاعل الطبيعي',
    'features.natural_interaction.description': 'تواصل باستخدام اللغة الطبيعية والإيماءات. يفهم أطلس السياق ويستجيب بشكل مناسب.',
    'features.precise_movement.title': 'حركة دقيقة',
    'features.precise_movement.description': 'المفاصل الآلية المتقدمة توفر حركة سلسة شبيهة بالإنسان مع توازن وتنسيق استثنائي.',
    'features.spatial_awareness.title': 'الوعي المكاني',
    'features.spatial_awareness.description': 'المستشعرات المتقدمة وتقنية الخرائط تسمح لأطلس بالتنقل في البيئات المعقدة بسهولة.',
    'features.enhanced_security.title': 'أمان محسن',
    'features.enhanced_security.description': 'البروتوكولات المدمجة تحمي بياناتك وخصوصيتك، بينما الحماية الجسدية تضمن التشغيل الآمن.',
    'features.task_assistance.title': 'مساعدة المهام',
    'features.task_assistance.description': 'من التذكيرات البسيطة إلى المهام المعقدة متعددة الخطوات، يمكن لأطلس المساعدة في مجموعة واسعة من الأنشطة.',
    
    // How It Works Section
    'howItWorks.chip': 'العملية',
    'howItWorks.title': 'كيف يتكامل أطلس في حياتك',
    'howItWorks.subtitle': 'عملية سلسة من أربع خطوات من الطلب إلى التكامل الكامل.',
    'howItWorks.request_access.title': 'طلب الوصول',
    'howItWorks.request_access.description': 'املأ نموذج الطلب للانضمام إلى برنامج الوصول المبكر وتأمين مكانك في الطابور.',
    'howItWorks.personalization.title': 'التخصيص',
    'howItWorks.personalization.description': 'سنعمل معك لتخصيص أطلس حسب احتياجاتك وتفضيلاتك المحددة.',
    'howItWorks.integration.title': 'التكامل',
    'howItWorks.integration.description': 'يصل أطلس إلى موقعك ويتم دمجه في بيئة معيشتك أو عملك.',
    'howItWorks.adaptation.title': 'التكيف',
    'howItWorks.adaptation.description': 'يتعلم أطلس من بيئتك وروتينك، ويصبح أكثر فعالية مع مرور الوقت.',
    
    // ERP Solutions
    'erp.section': 'حلول تخطيط موارد المؤسسات',
    'erp.title': 'حلول شاملة لكل احتياجاتك',
    'erp.subtitle': 'وحدات متكاملة مصممة لتحسين كفاءة أعمالك وأتمتة العمليات',
    'erp.integration': 'تكامل الوحدات',
    'erp.integration.subtitle': 'نظام موحد يضمن تدفق البيانات بسلاسة عبر جميع الوحدات',
    
    // Contact Section
    'contact.section': 'تواصل معنا',
    'contact.title': 'دعنا نبدأ محادثة',
    'contact.subtitle': 'تواصل مع فريقنا من الخبراء لمناقشة احتياجات مؤسستك',
    'contact.form.title': 'أرسل رسالة',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.company': 'الشركة',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.inquiry': 'نوع الاستفسار',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'contact.info.title': 'معلومات الاتصال',
    
    // Common
    'common.learn_more': 'اعرف المزيد',
    'common.explore': 'استكشف تفاصيل الوحدة',
    'common.required': 'مطلوب',
    'common.loading': 'جاري التحميل...',
    'common.success': 'نجح',
    'common.error': 'خطأ'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');
  const isRTL = language === 'ar';

  const t = (key: string): any => {
    const translation = translations[language as keyof typeof translations];
    if (!translation) return key;
    
    const result = translation[key as keyof typeof translation];
    if (typeof result === 'string') {
      return result;
    }
    
    // Handle arrays - return as is for mapping
    if (Array.isArray(result)) {
      return result;
    }
    
    return key;
  };

  useEffect(() => {
    // Apply RTL styles
    if (isRTL) {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.classList.add('rtl');
      document.documentElement.style.setProperty('--font-family', 'Tajawal, system-ui, sans-serif');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.classList.remove('rtl');
      document.documentElement.style.setProperty('--font-family', 'system-ui, sans-serif');
    }
  }, [isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
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