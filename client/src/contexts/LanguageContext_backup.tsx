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
    'industries.education.capabilities': [
      'نظام إدارة معلومات الطلاب',
      'منصة إدارة التعلم المتقدمة',
      'معالجة المساعدات المالية والمنح الدراسية',
      'تحليلات الأداء الأكاديمي والتقارير',
      'إدارة وتسليم الدورات عبر الإنترنت',
      'بوابة التواصل بين الآباء والمعلمين',
      'إدارة المكتبة والموارد',
      'أدوات الامتحانات والتقييم'
    ],
    'industries.education.timeline': '+500 مؤسسة',
    'industries.education.clients': 'المدارس، الجامعات، مراكز التدريب، منصات التعلم عبر الإنترنت',
    'industries.education.full_description': 'حلول شاملة للمؤسسات التعليمية، من إدارة الطلاب إلى تخطيط المناهج والكفاءة الإدارية. تحول مجموعة التعليم لدينا بيئات التعلم التقليدية بأدوات رقمية تعزز مشاركة الطلاب وتبسط العمليات الإدارية وتوفر رؤى عميقة في الأداء الأكاديمي وفعالية المؤسسة.',
    'industries.education.benefits': [
      'العمليات الإدارية المبسطة تقلل من عبء العمل بنسبة 60%',
      'تعزيز مشاركة الطلاب من خلال الأدوات الرقمية',
      'التحليلات الشاملة تحسن النتائج الأكاديمية',
      'منصات التواصل المتكاملة تربط جميع أصحاب المصلحة'
    ],
    
    'industries.retail.title': 'التجارة',
    'industries.retail.description': 'إدارة التجزئة الشاملة للنجاح متعدد القنوات ورضا العملاء.',
    'industries.retail.capabilities': [
      'أنظمة نقاط البيع (POS) المتقدمة',
      'تكامل التجارة الإلكترونية متعددة القنوات',
      'إدارة ولاء العملاء والمكافآت',
      'التتبع متعدد المواقع والمستودعات',
      'إدارة الأسعار والتسعير الديناميكي',
      'تحليلات العملاء والتخصيص',
      'إدارة البائعين والموردين',
      'معالجة الإرجاع والاستبدال'
    ],
    'industries.retail.timeline': '+1000 متجر',
    'industries.retail.clients': 'سلاسل التجزئة، المتاجر الإلكترونية، العلامات التجارية للأزياء، تجار التجزئة المتخصصون',
    'industries.retail.full_description': 'حلول إدارة التجزئة والتجارة الإلكترونية الكاملة المصممة لتحسين المبيعات والمخزون وتجربة العملاء عبر جميع القنوات. توحد منصة التجزئة لدينا العمليات عبر الإنترنت وخارج الإنترنت، مما يوفر رؤية في الوقت الفعلي لسلوك العملاء ومستويات المخزون وأداء المبيعات عبر جميع نقاط الاتصال لتحقيق أقصى ربحية.',
    'industries.retail.benefits': [
      'تكامل متعدد القنوات يزيد المبيعات بنسبة 40%',
      'إدارة المخزون في الوقت الفعلي تقلل نفاد المخزون',
      'تحليلات العملاء تدفع التجارب المخصصة',
      'العمليات الآلية تحسن الكفاءة التشغيلية'
    ],
    
    'industries.manufacturing.title': 'التصنيع',
    'industries.manufacturing.description': 'حلول تصنيع ذكية لتحول الصناعة 4.0 والتميز التشغيلي.',
    'industries.manufacturing.capabilities': [
      'تخطيط الإنتاج وجدولة العمليات',
      'مراقبة الجودة وإدارة الامتثال',
      'تتبع المواد الخام والمنتجات النهائية',
      'إدارة الصيانة التنبؤية',
      'تحليلات الأداء والكفاءة',
      'تكامل إنترنت الأشياء والأتمتة',
      'إدارة سلسلة التوريد',
      'التحكم في التكاليف وتحسين الموارد'
    ],
    'industries.manufacturing.timeline': '+200 مصنع',
    'industries.manufacturing.clients': 'مصانع السيارات، الإلكترونيات، الأدوية، الأغذية والمشروبات',
    'industries.manufacturing.full_description': 'حلول تصنيع ذكية تحسن الكفاءة وتقلل التكاليف وتضمن الجودة. تمكن منصة التصنيع لدينا الشركات من تحقيق التحول الرقمي مع مراقبة الإنتاج في الوقت الفعلي، والصيانة التنبؤية، وإدارة الجودة المتقدمة.',
    'industries.manufacturing.benefits': [
      'زيادة الكفاءة التشغيلية بنسبة 35%',
      'تقليل وقت التوقف غير المخطط له',
      'تحسين جودة المنتج والامتثال',
      'تحسين إدارة المخزون وسلسلة التوريد'
    ],
    
    'industries.logistics.title': 'اللوجستيات',
    'industries.logistics.description': 'منصة لوجستيات ذكية وتحسين سلسلة التوريد للعمليات السلسة.',
    'industries.logistics.capabilities': [
      'تتبع الشحنات في الوقت الفعلي',
      'إدارة الأسطول والمسارات',
      'تحسين المستودعات والتخزين',
      'إدارة الطلبات والتسليم',
      'تحليلات الأداء واللوجستيات',
      'تكامل الموردين والعملاء',
      'إدارة التكاليف والميزانية',
      'تقارير الامتثال والجودة'
    ],
    'industries.logistics.timeline': '+300 شركة',
    'industries.logistics.clients': 'شركات النقل، خدمات التوصيل، مشغلي المستودعات، شركات الشحن',
    'industries.logistics.full_description': 'حلول لوجستيات شاملة تحسن سلسلة التوريد وتقلل التكاليف وتحسن خدمة العملاء. تتيح منصة اللوجستيات لدينا الرؤية الكاملة للعمليات مع التتبع في الوقت الفعلي والتحليلات المتقدمة لاتخاذ قرارات مدروسة.',
    'industries.logistics.benefits': [
      'تحسين كفاءة التسليم بنسبة 45%',
      'تقليل تكاليف التشغيل والوقود',
      'تحسين رضا العملاء والخدمة',
      'رؤية شاملة لسلسلة التوريد'
    ],
    
    // ERP Solutions
    'erp.section': 'حلول تخطيط موارد المؤسسات',
    'erp.title': 'حلول أعمال\nشاملة',
    'erp.subtitle': 'وحدات متكاملة تعمل معاً بسلاسة لتشغيل جميع جوانب عمليات أعمالك',
    'erp.integration': 'تكامل سلس عبر جميع الوحدات',
    'erp.integration.subtitle': 'جميع الوحدات تشارك البيانات في الوقت الفعلي، مما يوفر رؤية موحدة لعمليات أعمالك مع شفافية وتحكم كاملين',
    'erp.accounting.title': 'المحاسبة والمالية',
    'erp.accounting.description': 'إدارة مالية شاملة مع رؤى في الوقت الفعلي.',
    'erp.accounting.capabilities': [
      'التقارير المالية والتحليلات في الوقت الفعلي',
      'دعم وتحويل العملات المتعددة',
      'الامتثال الضريبي والتقارير التنظيمية',
      'الحسابات الدائنة/المدينة الآلية',
      'التخطيط والتنبؤ بالميزانية',
      'إدارة وتحسين التدفق النقدي',
      'مسار المراجعة المالية والضوابط',
      'التكامل مع أنظمة البنوك والمدفوعات'
    ],
    'erp.accounting.timeline': 'التكامل الكامل',
    'erp.accounting.full_description': 'نظام إدارة وتقارير مالية كامل مع رؤى في الوقت الفعلي وعمليات آلية للسيطرة الشاملة على الأعمال. توفر مجموعة المحاسبة الخاصة بنا رؤية كاملة لعملياتك المالية مع سير عمل آلي وتقارير ذكية وتكامل سلس مع أنظمة البنوك والمدفوعات.',
    
    'erp.hr.title': 'الموارد البشرية',
    'erp.hr.description': 'إدارة موارد بشرية شاملة لدورة حياة الموظف الكاملة.',
    'erp.hr.capabilities': [
      'بوال الخدمة الذاتية للموظفين وتطبيق الهاتف المحمول',
      'كشف الرواتب والحسابات الضريبية الآلية',
      'إدارة الأداء وتتبع الأهداف',
      'الوقت والحضور مع التكامل البيومتري',
      'نظام التوظيف وتتبع المتقدمين',
      'مزايا الموظفين وإدارة الإجازات',
      'برامج التدريب والتطوير',
      'تحليلات الموارد البشرية وتخطيط القوى العاملة'
    ],
    'erp.hr.timeline': 'مجموعة الموارد البشرية الكاملة',
    'erp.hr.full_description': 'نظام إدارة موارد بشرية شامل يغطي دورة حياة الموظف بأكملها من التوظيف إلى التقاعد مع التحليلات المتقدمة. تحول مجموعة الموارد البشرية لدينا إدارة الأشخاص مع سير العمل الآلي وقدرات الخدمة الذاتية والرؤى المدفوعة بالبيانات التي تساعدك على جذب أفضل المواهب والاحتفاظ بها وتطويرها.',
    
    'erp.sales.title': 'المبيعات وإدارة علاقات العملاء',
    'erp.sales.description': 'مبيعات وإدارة علاقات عملاء مدعومة بالذكاء الاصطناعي.',
    'erp.sales.capabilities': [
      'تتبع العملاء المحتملين وإدارة الفرص',
      'خط أنابيب المبيعات والتنبؤ المتقدم',
      'رؤية 360 درجة للعملاء والتحليلات',
      'إدارة الحملات التسويقية الآلية',
      'إنشاء العروض والاقتراحات',
      'دعم العملاء وإدارة التذاكر',
      'تحليلات أداء فريق المبيعات',
      'إدارة علاقات العملاء وأدوات المبيعات الميدانية عبر الهاتف المحمول'
    ],
    'erp.sales.timeline': 'تحسين المبيعات',
    'erp.sales.full_description': 'إدارة المبيعات وعلاقات العملاء من البداية للنهاية مع رؤى وأتمتة مدعومة بالذكاء الاصطناعي لمعدلات تحويل قصوى. توفر منصة إدارة علاقات العملاء لدينا رؤية كاملة للعملاء وعمليات مبيعات آلية ورؤى ذكية تساعدك على إغلاق المزيد من الصفقات وبناء علاقات أقوى مع العملاء.',
    
    'erp.inventory.title': 'إدارة المخزون',
    'erp.inventory.description': 'تحسين المخزون الذكي مع التتبع في الوقت الفعلي.',
    'erp.inventory.capabilities': [
      'تحسين المخزون والتنبؤ بالذكاء الاصطناعي',
      'تكامل مسح الباركود وRFID',
      'إعادة الطلب الآلي وتنبيهات الموردين',
      'التتبع متعدد المواقع والمستودعات',
      'إدارة أرقام الدفعات والأرقام المتسلسلة',
      'الجرد الدوري والمخزون الفعلي',
      'تحسين تخطيط المستودع ومسار الانتقاء',
      'أداء الموردين وإدارة البائعين'
    ],
    'erp.inventory.timeline': 'المخزون الذكي',
    'erp.inventory.full_description': 'إدارة المخزون والمستودعات المتقدمة مع التتبع في الوقت الفعلي وقدرات التحسين للحد الأقصى من الكفاءة. يستخدم نظام المخزون لدينا الذكاء الاصطناعي للتنبؤ بالطلب وتحسين مستويات المخزون وأتمتة عمليات إعادة الطلب مع توفير رؤية كاملة عبر جميع المواقع والمستودعات.',
    
    'erp.manufacturing.title': 'التصنيع',
    'erp.manufacturing.description': 'إدارة الإنتاج الذكي ومراقبة الجودة.',
    'erp.manufacturing.capabilities': [
      'تخطيط الإنتاج وتحسين السعة',
      'سير عمل مراقبة الجودة والامتثال',
      'تخصيص الموارد وجدولة المعدات',
      'إدارة قائمة المواد والتكاليف',
      'مراقبة ورشة العمل وإدارة أوامر العمل',
      'تكامل الآلات واتصال إنترنت الأشياء',
      'التصنيع الرشيق وتقليل الهدر',
      'دورة حياة المنتج وإدارة التغيير الهندسي'
    ],
    'erp.manufacturing.timeline': 'تميز الإنتاج',
    'erp.manufacturing.full_description': 'حل إدارة الإنتاج الكامل الذي يحسن عمليات التصنيع ومراقبة الجودة مع المراقبة في الوقت الفعلي. تمكن وحدة التصنيع لدينا التحول الرقمي مع تكامل إنترنت الأشياء وسير العمل الآلي وتتبع الإنتاج في الوقت الفعلي الذي يعظم الكفاءة ويضمن الجودة المتسقة.',
    
    'erp.asset.title': 'إدارة الأصول',
    'erp.asset.description': 'إدارة الأصول التنبؤية وتحسين الصيانة.',
    'erp.asset.capabilities': [
      'جدولة الصيانة الوقائية والتنبؤية',
      'تتبع دورة حياة الأصول والاستهلاك',
      'إدارة أوامر العمل وإرسال الفنيين',
      'أداء المعدات وتحليلات إنترنت الأشياء',
      'مخزون قطع الغيار والمشتريات',
      'إدارة الامتثال وتتبع السلامة',
      'الصيانة المحمولة وخدمة الميدان',
      'عائد الاستثمار للأصول وتحليل التكاليف'
    ],
    'erp.asset.timeline': 'تحسين الأصول',
    'erp.asset.full_description': 'تتبع الأصول الشامل وإدارة الصيانة لزيادة وقت تشغيل المعدات وعائد الاستثمار مع التحليلات التنبؤية. يستخدم حل إدارة الأصول لدينا أجهزة استشعار إنترنت الأشياء والتعلم الآلي للتنبؤ بالأعطال قبل حدوثها وتحسين جداول الصيانة وضمان أقصى توفر وأداء للمعدات.',
    
    'erp.stats.integration': 'تكامل الوحدة',
    'erp.stats.integration_desc': 'تدفق البيانات السلس عبر جميع الوحدات',
    'erp.stats.realtime': 'الوقت الفعلي',
    'erp.stats.realtime_desc': 'المزامنة الفورية في كل مكان',
    'erp.stats.database': 'واحدة',
    'erp.stats.database_desc': 'مصدر حقيقة موحد لجميع البيانات',
    'erp.stats.workflows': 'مخصص',
    'erp.stats.workflows_desc': 'مصممة حسب عمليات عملك',
    
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
    
    // CTA Section
    'cta.chip': 'توفر محدود',
    'cta.title': 'كن من أول المستخدمين لتجربة Atlas',
    'cta.title_highlight': 'تجربة Atlas',
    'cta.subtitle': 'نحن نقبل عددًا محدودًا من المستخدمين المبكرين. قدم طلبك اليوم لتضمن مكانك في مستقبل الروبوتات.',
    'cta.request_access': 'طلب الوصول المبكر',
    'cta.join_waitlist': 'انضم لقائمة الانتظار',
    
    // Detail Modal
    'modal.key_capabilities': 'القدرات الأساسية',
    'modal.key_benefits': 'الفوائد الأساسية',
    'modal.process_overview': 'نظرة عامة على العملية',
    'modal.perfect_for': 'مثالي لـ:',
    
    // Details Section
    'details.section': 'التفاصيل',
    'details.title': 'الهندسة الدقيقة تلتقي بالذكاء التكيفي',
    'details.height': 'الارتفاع:',
    'details.capacity': 'السعة:',
    'details.weight': 'الوزن:',
    'details.uptime': 'وقت التشغيل:',
    'details.movement': 'الحركة:',
    'details.demo_chip': 'طلب عرض توضيحي',
    'details.demo_title': 'شاهد بنفسك',
    'details.form.name': 'الاسم الكامل',
    'details.form.email': 'عنوان البريد الإلكتروني',
    'details.form.company': 'الشركة (اختياري)',
    'details.form.submit': 'طلب الوصول',
    
    // Features Section
    'features.chip': 'الميزات',
    'features.title': 'ذكاء متقدم، حدس شبيه بالإنسان',
    'features.title_highlight': 'حدس شبيه بالإنسان',
    'features.subtitle': 'مبني بتقنية متطورة لفهم وتعلم والتكيف مع احتياجاتك الفريدة.',
    'features.adaptive_learning.title': 'التعلم التكيفي',
    'features.adaptive_learning.description': 'يتعلم Atlas من تفاعلاتك، محسنًا باستمرار استجاباته وأفعاله لخدمتك بشكل أفضل.',
    'features.natural_interaction.title': 'التفاعل الطبيعي',
    'features.natural_interaction.description': 'تواصل باستخدام اللغة الطبيعية والإيماءات. يفهم Atlas السياق ويستجيب بشكل مناسب.',
    'features.precise_movement.title': 'الحركة الدقيقة',
    'features.precise_movement.description': 'المفاصل المحركة المتقدمة توفر حركة سلسة تشبه الإنسان مع توازن وتنسيق استثنائيين.',
    'features.spatial_awareness.title': 'الوعي المكاني',
    'features.spatial_awareness.description': 'أجهزة الاستشعار المتقدمة وتقنية الخرائط تسمح لـ Atlas بالتنقل في البيئات المعقدة بسهولة.',
    'features.enhanced_security.title': 'الأمان المحسن',
    'features.enhanced_security.description': 'البروتوكولات المدمجة تحمي بياناتك وخصوصيتك، بينما الضمانات الفيزيائية تضمن التشغيل الآمن.',
    'features.task_assistance.title': 'مساعدة المهام',
    'features.task_assistance.description': 'من التذكيرات البسيطة إلى المهام المعقدة متعددة الخطوات، يمكن لـ Atlas المساعدة في مجموعة واسعة من الأنشطة.',
    
    // How It Works Section
    'howItWorks.chip': 'العملية',
    'howItWorks.title': 'كيف يتكامل Atlas في حياتك',
    'howItWorks.subtitle': 'عملية سلسة من أربع خطوات من الطلب إلى التكامل الكامل.',
    'howItWorks.request_access.title': 'طلب الوصول',
    'howItWorks.request_access.description': 'املأ نموذج الطلب للانضمام إلى برنامج الوصول المبكر وضمان مكانك في الطابور.',
    'howItWorks.personalization.title': 'التخصيص',
    'howItWorks.personalization.description': 'سنعمل معك لتخصيص Atlas حسب احتياجاتك وتفضيلاتك المحددة.',
    'howItWorks.integration.title': 'التكامل',
    'howItWorks.integration.description': 'يصل Atlas إلى موقعك ويتم دمجه في بيئة معيشتك أو عملك.',
    'howItWorks.adaptation.title': 'التكيف',
    'howItWorks.adaptation.description': 'يتعلم Atlas من بيئتك وروتينك، ويصبح أكثر فعالية مع مرور الوقت.',
    
    // Human Intuition Section
    'humanIntuition.chip': 'حدس شبيه بالإنسان',
    'humanIntuition.title': 'ما وراء الخوارزميات إلى الفهم الحقيقي',
    'humanIntuition.subtitle': 'يتجاوز Atlas الاستجابات المبرمجة لتطوير الوعي السياقي وأنماط التعلم التكيفي التي تعكس الحدس البشري. هذا يمكن التفاعلات الطبيعية التي تشعر وكأنك تعمل مع زميل بشري وليس آلة.',
    'humanIntuition.capabilities': [
      'يتعلم من العروض التوضيحية البشرية ويحسن نهجه مع مرور الوقت',
      'يتوقع الاحتياجات بناءً على الوعي الظرفي والتفاعلات الماضية',
      'يتكيف مع البيئات المتغيرة دون إعادة برمجة صريحة',
      'يتخذ قرارات بفهم دقيق للتفضيلات البشرية'
    ],
    
    // Humanoid Section
    'humanoid.chip': 'شبيه بالإنسان',
    'humanoid.title': 'لماذا شبيه بالإنسان',
    'humanoid.vision1': 'الرؤية',
    'humanoid.vision1.title': 'نحن نمنح الذكاء الاصطناعي طريقة للتنقل في العالم الفيزيائي',
    'humanoid.vision2': 'الرؤية',
    'humanoid.vision2.title': 'نحن نجلب الذكاء التكيفي إلى حيث يعمل البشر',
    'humanoid.vision3': 'الرؤية',
    'humanoid.vision3.title': 'نحن نصنع رفقاء، وليس بدائل',
    'humanoid.vision3.highlight': 'وليس بدائل',
    
    // Image Showcase Section
    'imageShowcase.title': 'اختبر المستقبل اليوم',
    'imageShowcase.subtitle': 'روبوتنا الشبيه بالإنسان المتطور مصمم لتحويل كيفية تفاعلنا مع التكنولوجيا في البيئات اليومية.',
    'imageShowcase.next_gen.title': 'الروبوتات الجيل التالي',
    'imageShowcase.next_gen.description': 'مبنية بهندسة دقيقة وذكاء اصطناعي متطور، تتكامل روبوتاتنا بسلاسة في بيئات مختلفة، من المنازل إلى المستشفيات، تقدم المساعدة وتثري تجارب الإنسان.',
    
    // Implementation Process
    'implementationProcess.timeline': 'الجدول الزمني للتنفيذ',
    'implementationProcess.week': 'أسبوع',
    'implementationProcess.discovery': 'الاكتشاف',
    'implementationProcess.design': 'التصميم',
    'implementationProcess.development': 'التطوير',
    'implementationProcess.deployment': 'النشر',
    'implementationProcess.support': 'الدعم',
    'implementationProcess.key_deliverables': 'المخرجات الرئيسية',
    'implementationProcess.why_works': 'لماذا تعمل عمليتنا',
    'implementationProcess.why_works.subtitle': 'نتائج مثبتة من منهجية التنفيذ الخاصة بنا',
    'implementationProcess.stats.faster': 'تنفيذ أسرع',
    'implementationProcess.stats.faster_desc': 'مقارنة بالطرق التقليدية',
    'implementationProcess.stats.zero': 'صفر',
    'implementationProcess.stats.zero_desc': 'عملية انتقال سلسة',
    'implementationProcess.stats.adoption': 'تبني المستخدمين',
    'implementationProcess.stats.adoption_desc': 'في الشهر الأول',
    'implementationProcess.stats.support': 'دعم',
    'implementationProcess.stats.support_desc': 'فريق تنفيذ مخصص',
    
    // Common
    'common.learn_more': 'اعرف المزيد',
    
    // CTA Section
    'cta.chip': 'توفر محدود',
    'cta.title': 'كن من أول من يجرب',
    'cta.title_highlight': 'أطلس',
    'cta.subtitle': 'نحن نقبل عدداً محدوداً من المستخدمين الأوائل. قدم طلبك اليوم لتأمين مكانك في مستقبل الروبوتات.',
    'cta.request_access': 'اطلب الوصول المبكر',
    'cta.join_waitlist': 'انضم لقائمة الانتظار',
    
    // Features Section
    'features.chip': 'الميزات',

    
    // How It Works Section
    'howItWorks.chip': 'العملية',
    'howItWorks.title': 'كيف يتكامل أطلس في حياتك',
    'howItWorks.subtitle': 'عملية سلسة من أربع خطوات من الطلب إلى التكامل الكامل.',
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