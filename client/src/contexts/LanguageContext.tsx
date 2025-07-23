import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string | string[];
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.value': 'What we offer',
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
    
    // Platform Capabilities Features Dialog Content
    'features.core_full_description': 'Comprehensive business modules covering all aspects of your operations, designed to streamline processes and boost productivity across your entire organization. Our core modules provide the foundation for digital transformation with integrated workflows, automated processes, and real-time data synchronization across all business functions.',
    'features.core_capabilities': ['Advanced Accounting & Financial Reporting', 'Comprehensive Human Resources Management', 'Sales CRM with Pipeline Automation', 'Smart Inventory & Supply Chain Control', 'Project Management & Resource Planning', 'Document Management & Workflow Automation', 'Multi-location Operations Support', 'Real-time Business Intelligence Dashboard'],
    'features.core_benefits': ['Integrated workflow automation reduces manual tasks by 70%', 'Real-time data synchronization across all departments', 'Comprehensive reporting and analytics dashboard', 'Multi-location support with centralized control'],
    
    'features.ai_full_description': 'Intelligent automation and insights powered by advanced AI technology that learns from your business patterns to provide actionable recommendations. Our AI features continuously evolve with your business, identifying opportunities for optimization and automating complex decision-making processes to drive growth and efficiency.',
    'features.ai_capabilities': ['Machine Learning Predictive Analytics', 'Intelligent Process Automation Workflows', 'Natural Language Report Generation', 'AI-Powered Decision Recommendation Engine', 'Smart Data Pattern Recognition', 'Automated Anomaly Detection & Alerts', 'Intelligent Customer Behavior Analysis', 'Voice-to-Data Input Processing'],
    'features.ai_benefits': ['Predictive analytics improve decision-making accuracy by 85%', 'Automated workflows reduce processing time by 60%', 'AI-powered insights drive revenue growth', 'Continuous learning adapts to your business evolution'],
    
    'features.integration_full_description': 'Seamless connectivity with your existing tools and systems, ensuring data flows smoothly across your entire technology stack without disruption. Our integration hub supports both modern APIs and legacy systems, providing a unified data ecosystem that eliminates silos and enables comprehensive business intelligence.',
    'features.integration_capabilities': ['Enterprise API Gateway Management', 'Real-time Data Synchronization Engine', 'Legacy System Migration Tools', 'Third-party Platform Connectors', 'Custom Integration Development', 'Webhook & Event-driven Architecture', 'Data Mapping & Transformation Tools', 'Security & Authentication Management'],
    'features.integration_benefits': ['Connect 500+ third-party applications instantly', 'Eliminate data silos with unified integration', 'Legacy system support ensures smooth migration', 'Real-time synchronization keeps data current'],
    
    'features.mobile_full_description': 'Access your business data anywhere, anytime, on any device with our cloud-native platform that ensures maximum uptime and security. Built with modern cloud architecture, our platform provides seamless mobile experiences with robust offline capabilities and enterprise-grade security that scales with your business needs.',
    'features.mobile_capabilities': ['Progressive Web Application (PWA)', 'Native iOS & Android Applications', 'Offline-first Data Synchronization', 'Multi-device Real-time Collaboration', 'Cloud Infrastructure Auto-scaling', 'Enterprise-grade Security & Encryption', 'Automated Backup & Disaster Recovery', 'Global CDN for Optimal Performance'],
    'features.mobile_benefits': ['99.9% uptime SLA with automatic failover', 'Offline functionality ensures continuous productivity', 'Enterprise-grade security protects your data', 'Global CDN provides optimal performance worldwide'],
    
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
    'industries.logistics.capabilities': ['AI-Powered Route Optimization', 'Fleet Management & Vehicle Tracking', 'Warehouse Automation & Control', 'Real-time Shipment & Delivery Tracking', 'Load Planning & Optimization', 'Driver Management & Performance Analytics', 'Customer Portal & Communication', 'Cost Analysis & Freight Audit'],
    'industries.logistics.clients': 'Shipping Companies, 3PL Providers, Freight Forwarders, Distribution Centers',
    'industries.logistics.fullDescription': 'Advanced logistics and supply chain optimization tools that ensure timely delivery, cost efficiency, and complete visibility across operations. Our logistics platform leverages AI and machine learning to optimize routes, reduce costs, and provide real-time visibility throughout the entire supply chain ecosystem for maximum efficiency.',
    'industries.logistics.benefits': ['AI-powered route optimization reduces fuel costs by 30%', 'Real-time tracking improves customer satisfaction', 'Automated load planning maximizes efficiency', 'Comprehensive analytics drive continuous improvement'],
    
    'industries.education.capabilities': ['Student Information Management System', 'Advanced Learning Management Platform', 'Financial Aid & Scholarship Processing', 'Academic Performance Analytics & Reporting', 'Online Course Management & Delivery', 'Parent-Teacher Communication Portal', 'Library & Resource Management', 'Examination & Assessment Tools'],
    'industries.education.clients': 'Schools, Universities, Training Centers, Online Learning Platforms',
    'industries.education.fullDescription': 'Comprehensive solutions for educational institutions, from student management to curriculum planning and administrative efficiency. Our education suite transforms traditional learning environments with digital tools that enhance student engagement, streamline administrative processes, and provide deep insights into academic performance and institutional effectiveness.',
    'industries.education.benefits': ['Streamlined administrative processes reduce workload by 60%', 'Enhanced student engagement through digital tools', 'Comprehensive analytics improve academic outcomes', 'Integrated communication platforms connect all stakeholders'],
    
    'industries.retail.capabilities': ['Advanced Point of Sale (POS) Systems', 'Omnichannel E-commerce Integration', 'Customer Loyalty & Rewards Management', 'Multi-location Inventory Synchronization', 'Price Management & Dynamic Pricing', 'Customer Analytics & Personalization', 'Vendor & Supplier Management', 'Return & Exchange Processing'],
    'industries.retail.clients': 'Retail Chains, Online Stores, Fashion Brands, Specialty Retailers',
    'industries.retail.fullDescription': 'Complete retail management and e-commerce solutions designed to optimize sales, inventory, and customer experience across all channels. Our retail platform unifies online and offline operations, providing real-time visibility into customer behavior, inventory levels, and sales performance across all touchpoints for maximum profitability.',
    'industries.retail.benefits': ['Omnichannel integration increases sales by 40%', 'Real-time inventory management reduces stockouts', 'Customer analytics drive personalized experiences', 'Automated processes improve operational efficiency'],
    
    'industries.manufacturing.capabilities': ['Production Planning & Capacity Optimization', 'Quality Management & Compliance Systems', 'Predictive Equipment Maintenance', 'Supply Chain Optimization & Tracking', 'Real-time Production Monitoring', 'Lean Manufacturing Implementation', 'Batch & Serial Number Traceability', 'Cost Analysis & Profitability Tracking'],
    'industries.manufacturing.clients': 'Manufacturers, Assembly Lines, Processing Plants, Industrial Equipment',
    'industries.manufacturing.fullDescription': 'End-to-end manufacturing and production management solutions that optimize efficiency, quality control, and supply chain operations. Our manufacturing suite enables digital transformation with IoT integration, predictive analytics, and automated workflows that reduce waste, improve quality, and maximize operational efficiency while ensuring compliance.',
    'industries.manufacturing.benefits': ['Predictive maintenance reduces downtime by 45%', 'Quality management systems ensure compliance', 'Real-time monitoring optimizes production efficiency', 'Supply chain integration reduces costs and delays'],
    
    'industries.startups.title': 'Startups',
    'industries.startups.count': '50+',
    'industries.startups.description': 'Growing businesses ready to scale',
    'industries.startups.details': 'Flexible solutions that grow with your business',
    'industries.smes.title': 'SMEs',
    'industries.smes.count': '500+',
    'industries.smes.description': 'Established mid-market companies',
    'industries.smes.details': 'Comprehensive features for complex operations',
    'industries.enterprises.title': 'Enterprises',
    'industries.enterprises.count': '100+',
    'industries.enterprises.description': 'Large organizations with complex needs',
    'industries.enterprises.details': 'Enterprise-grade security and customization',
    
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
    
    // ERP Modules
    'erp.accounting.title': 'Accounting & Finance',
    'erp.accounting.description': 'Complete financial management with real-time insights.',
    'erp.accounting.timeline': 'Full Integration',
    'erp.accounting.capabilities': ['Real-time Financial Reporting & Analytics', 'Multi-currency Support & Conversion', 'Tax Compliance & Regulatory Reporting', 'Automated Accounts Payable/Receivable', 'Budget Planning & Forecasting', 'Cash Flow Management & Optimization', 'Financial Audit Trail & Controls', 'Integration with Banking & Payment Systems'],
    'erp.accounting.fullDescription': 'Complete financial management and reporting system with real-time insights and automated processes for comprehensive business control. Our accounting suite provides complete visibility into your financial operations with automated workflows, intelligent reporting, and seamless integration with banking and payment systems.',
    
    'erp.hr.title': 'Human Resources',
    'erp.hr.description': 'End-to-end HR management for the complete employee lifecycle.',
    'erp.hr.timeline': 'Complete HR Suite',
    'erp.hr.capabilities': ['Employee Self-service Portal & Mobile App', 'Automated Payroll & Tax Calculations', 'Performance Management & Goal Tracking', 'Time & Attendance with Biometric Integration', 'Recruitment & Applicant Tracking System', 'Employee Benefits & Leave Management', 'Training & Development Programs', 'HR Analytics & Workforce Planning'],
    'erp.hr.fullDescription': 'Comprehensive HR management system covering the entire employee lifecycle from recruitment to retirement with advanced analytics. Our HR suite transforms people management with automated workflows, self-service capabilities, and data-driven insights that help you attract, retain, and develop top talent.',
    
    'erp.sales.title': 'Sales & CRM',
    'erp.sales.description': 'AI-powered sales and customer relationship management.',
    'erp.sales.timeline': 'Sales Optimization',
    'erp.sales.capabilities': ['Lead Tracking & Opportunity Management', 'Advanced Sales Pipeline & Forecasting', 'Customer 360-degree View & Analytics', 'Automated Marketing Campaign Management', 'Quote & Proposal Generation', 'Customer Support & Ticket Management', 'Sales Team Performance Analytics', 'Mobile CRM & Field Sales Tools'],
    'erp.sales.fullDescription': 'End-to-end sales and customer relationship management with AI-powered insights and automation for maximum conversion rates. Our CRM platform provides complete customer visibility, automated sales processes, and intelligent insights that help you close more deals and build stronger customer relationships.',
    
    'erp.inventory.title': 'Inventory Management',
    'erp.inventory.description': 'Smart inventory optimization with real-time tracking.',
    'erp.inventory.timeline': 'Smart Inventory',
    'erp.inventory.capabilities': ['AI-powered Stock Optimization & Forecasting', 'Barcode & RFID Scanning Integration', 'Automated Reordering & Supplier Alerts', 'Multi-location & Multi-warehouse Tracking', 'Batch & Serial Number Management', 'Cycle Counting & Physical Inventory', 'Warehouse Layout & Pick Path Optimization', 'Supplier Performance & Vendor Management'],
    'erp.inventory.fullDescription': 'Advanced inventory and warehouse management with real-time tracking and optimization capabilities for maximum efficiency. Our inventory system uses AI to predict demand, optimize stock levels, and automate reordering processes while providing complete visibility across all locations and warehouses.',
    
    'erp.manufacturing.title': 'Manufacturing',
    'erp.manufacturing.description': 'Intelligent production management and quality control.',
    'erp.manufacturing.timeline': 'Production Excellence',
    'erp.manufacturing.capabilities': ['Production Planning & Capacity Optimization', 'Quality Control Workflows & Compliance', 'Resource Allocation & Equipment Scheduling', 'Bill of Materials Management & Costing', 'Shop Floor Control & Work Order Management', 'Machine Integration & IoT Connectivity', 'Lean Manufacturing & Waste Reduction', 'Product Lifecycle & Engineering Change Management'],
    'erp.manufacturing.fullDescription': 'Complete production management solution that optimizes manufacturing processes and quality control with real-time monitoring. Our manufacturing module enables digital transformation with IoT integration, automated workflows, and real-time production tracking that maximizes efficiency and ensures consistent quality.',
    
    'erp.assets.title': 'Asset Management',
    'erp.assets.description': 'Predictive asset management and maintenance optimization.',
    'erp.assets.timeline': 'Asset Optimization',
    'erp.assets.capabilities': ['Preventive & Predictive Maintenance Scheduling', 'Asset Lifecycle Tracking & Depreciation', 'Work Order Management & Technician Dispatch', 'Equipment Performance & IoT Analytics', 'Spare Parts Inventory & Procurement', 'Compliance Management & Safety Tracking', 'Mobile Maintenance & Field Service', 'Asset ROI & Cost Analysis'],
    'erp.assets.fullDescription': 'Comprehensive asset tracking and maintenance management to maximize equipment uptime and ROI with predictive analytics. Our asset management solution uses IoT sensors and machine learning to predict failures before they occur, optimize maintenance schedules, and ensure maximum equipment availability and performance.',
    
    // ERP Integration Stats
    'erp.integration.stats.module.metric': '100%',
    'erp.integration.stats.module.label': 'Module Integration',
    'erp.integration.stats.module.desc': 'Seamless data flow across all modules',
    'erp.integration.stats.realtime.metric': 'Real-time',
    'erp.integration.stats.realtime.label': 'Data Updates',
    'erp.integration.stats.realtime.desc': 'Instant synchronization everywhere',
    'erp.integration.stats.database.metric': 'Single',
    'erp.integration.stats.database.label': 'Database',
    'erp.integration.stats.database.desc': 'Unified source of truth for all data',
    'erp.integration.stats.workflows.metric': 'Custom',
    'erp.integration.stats.workflows.label': 'Workflows',
    'erp.integration.stats.workflows.desc': 'Tailored to your business processes',
    
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
    'contact.inquiry.general': 'General Inquiry',
    'contact.inquiry.erp': 'ERP Implementation',
    'contact.inquiry.custom': 'Custom Development',
    'contact.inquiry.support': 'Support',
    'contact.inquiry.partnership': 'Partnership',
    'contact.inquiry.demo': 'Demo Request',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.info.location_value': 'Online',
    'contact.actions.expert': 'Talk to Expert',
    'contact.actions.expert_desc': 'Schedule a call with our experts',
    'contact.actions.consultation': 'Schedule Consultation',
    'contact.actions.consultation_desc': 'Book a free consultation',
    'contact.actions.whatsapp': 'WhatsApp Support',
    'contact.actions.whatsapp_desc': 'Get instant support via WhatsApp',
    
    // Services Section
    'services.section': 'Professional Services',
    'services.title': 'Expert services for\nsuccessful implementation',
    'services.subtitle': 'Our certified professionals ensure your ERP implementation is delivered on time, within budget, and exceeds expectations',
    'services.methodology': 'Our Service Methodology',
    'services.methodology.subtitle': 'A structured approach that ensures quality delivery and client satisfaction at every stage',
    
    // Service Types
    'services.erp.title': 'ERP Implementation',
    'services.erp.description': 'End-to-end implementation with proven methodologies and dedicated project management.',
    'services.erp.timeline': '8-12 weeks',
    'services.erp.capabilities': ['System Architecture Design & Planning', 'Custom Development & Configuration', 'Data Migration & Integration Services', 'Comprehensive User Training Programs', 'Go-Live Support & Optimization', 'Performance Monitoring & Tuning', 'Change Management & User Adoption', 'Quality Assurance & Testing'],
    'services.erp.fullDescription': 'Comprehensive ERP implementation services that transform your business operations with minimal disruption. Our proven methodology ensures successful deployment with dedicated project management, custom development, and comprehensive training programs that drive user adoption and business value.',
    'services.erp.benefits': ['85% faster implementation compared to traditional methods', 'Dedicated project manager ensures timeline adherence', 'Proven methodology with 98% success rate', 'Comprehensive training drives user adoption'],
    'services.erp.processSteps': [
      {
        'title': 'Discovery & Planning',
        'description': 'Analyze current processes and create implementation roadmap',
        'deliverables': ['Requirements Analysis', 'Project Timeline', 'Resource Planning']
      },
      {
        'title': 'System Configuration',
        'description': 'Configure system according to business requirements',
        'deliverables': ['System Setup', 'Custom Workflows', 'Integration Points']
      },
      {
        'title': 'Data Migration',
        'description': 'Secure transfer of existing data to new system',
        'deliverables': ['Data Mapping', 'Migration Scripts', 'Validation Reports']
      },
      {
        'title': 'Training & Go-Live',
        'description': 'User training and system deployment',
        'deliverables': ['Training Materials', 'User Manuals', 'Go-Live Support']
      }
    ],
    
    'services.industry.title': 'Industry Solutions',
    'services.industry.description': 'Specialized solutions tailored to your industry\'s unique requirements and compliance needs.',
    'services.industry.timeline': '6-10 weeks',
    'services.industry.capabilities': ['Healthcare Management Systems', 'Educational Platform Solutions', 'Manufacturing Process Optimization', 'Retail & E-commerce Integration', 'Logistics & Supply Chain Management', 'Financial Services Compliance', 'Real Estate Management Systems', 'Hospitality & Tourism Solutions'],
    'services.industry.fullDescription': 'Industry-specific solutions designed to address unique sector challenges and compliance requirements. Our deep industry expertise ensures solutions are tailored to your specific business environment, regulatory needs, and operational workflows for maximum effectiveness.',
    'services.industry.benefits': ['Industry-specific features reduce customization time', 'Built-in compliance for regulatory requirements', 'Proven solutions across multiple sectors', 'Reduced implementation risk with tested frameworks'],
    
    'services.ai.title': 'AI Integration',
    'services.ai.description': 'Advanced AI capabilities to automate processes and provide intelligent business insights.',
    'services.ai.timeline': '4-8 weeks',
    'services.ai.capabilities': ['Predictive Analytics Implementation', 'Process Automation Development', 'Document Processing & OCR', 'Decision Support Systems', 'Customer Behavior Analysis', 'Fraud Detection & Prevention', 'Intelligent Reporting Systems', 'Machine Learning Model Development'],
    'services.ai.fullDescription': 'Transform your business with AI-powered automation and intelligent insights. Our AI integration services leverage machine learning, predictive analytics, and automation to optimize operations, reduce manual tasks, and provide actionable insights that drive business growth.',
    'services.ai.benefits': ['Predictive analytics improve decision accuracy by 85%', 'Process automation reduces manual tasks by 70%', 'AI insights drive revenue growth and cost reduction', 'Continuous learning adapts to business changes'],
    
    'services.ux.title': 'UX Design & Localization',
    'services.ux.description': 'User-centered design with full localization support for MENA markets.',
    'services.ux.timeline': '3-6 weeks',
    'services.ux.capabilities': ['User Experience (UX) Design', 'Right-to-Left (RTL) Interface Design', 'Multi-language Platform Support', 'Cultural Adaptation & Localization', 'Accessibility Standards Compliance', 'Mobile-First Design Approach', 'Brand Integration & Customization', 'Usability Testing & Optimization'],
    'services.ux.fullDescription': 'Create intuitive, culturally-appropriate user experiences with comprehensive localization for MENA markets. Our design services ensure your platform is not only visually appealing but also accessible, culturally relevant, and optimized for diverse user needs.',
    'services.ux.benefits': ['Culturally-adapted interfaces improve user adoption', 'RTL design ensures native Arabic experience', 'Accessibility compliance reaches broader audiences', 'Mobile-first approach maximizes device compatibility'],
    
    'services.data.title': 'Data Migration & Integration',
    'services.data.description': 'Secure, efficient data migration with seamless third-party system integrations.',
    'services.data.timeline': '2-4 weeks',
    'services.data.capabilities': ['Legacy System Data Migration', 'API Development & Integration', 'Real-time Data Synchronization', 'Data Validation & Quality Assurance', 'Third-party System Connectors', 'Cloud Migration Services', 'Database Optimization & Tuning', 'Data Security & Compliance'],
    'services.data.fullDescription': 'Ensure seamless data transition and system integration with our comprehensive migration and integration services. We handle complex data transformations, API integrations, and real-time synchronization to maintain business continuity throughout the transition.',
    'services.data.benefits': ['Zero data loss with validated migration processes', 'Real-time synchronization maintains data consistency', 'API integrations connect all business systems', 'Security protocols protect sensitive information'],
    
    'services.support.title': 'Support & Maintenance',
    'services.support.description': 'Comprehensive support services ensuring optimal system performance and user satisfaction.',
    'services.support.timeline': 'Ongoing',
    'services.support.capabilities': ['24/7 Technical Support Services', 'System Performance Monitoring', 'Regular Security Updates', 'User Training & Onboarding', 'Preventive Maintenance Programs', 'Issue Resolution & Bug Fixes', 'Feature Enhancement Development', 'System Health Reporting'],
    'services.support.fullDescription': 'Maintain optimal system performance with our comprehensive support and maintenance services. Our dedicated support team provides 24/7 assistance, proactive monitoring, regular updates, and continuous optimization to ensure your system delivers consistent business value.',
    'services.support.benefits': ['24/7 support ensures minimal business disruption', 'Proactive monitoring prevents issues before they occur', 'Regular updates maintain security and performance', 'Ongoing training maximizes user productivity'],
    
    // Methodology Steps
    'services.methodology.steps.consultation': 'Consultation',
    'services.methodology.steps.consultation.desc': 'Understanding your requirements',
    'services.methodology.steps.planning': 'Planning',
    'services.methodology.steps.planning.desc': 'Detailed project roadmap',
    'services.methodology.steps.execution': 'Execution',
    'services.methodology.steps.execution.desc': 'Professional implementation',
    'services.methodology.steps.delivery': 'Delivery',
    'services.methodology.steps.delivery.desc': 'Quality assurance & handover',
    'services.methodology.steps.support': 'Support',
    'services.methodology.steps.support.desc': 'Ongoing maintenance & optimization',
    
    // Statistics
    'services.stats.professionals.metric': '50+',
    'services.stats.professionals.label': 'Certified Professionals',
    'services.stats.professionals.desc': 'Expert consultants and developers',
    'services.stats.projects.metric': '500+',
    'services.stats.projects.label': 'Successful Projects',
    'services.stats.projects.desc': 'Across various industries',
    'services.stats.satisfaction.metric': '99%',
    'services.stats.satisfaction.label': 'Client Satisfaction',
    'services.stats.satisfaction.desc': 'Based on project completion surveys',
    

    
    // Testimonials Section
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
    
    // Implementation Process
    'implementation.section': 'Implementation Process',
    'implementation.title': 'From concept to\ngo-live in 11 weeks',
    'implementation.subtitle': 'Our proven methodology ensures successful implementation with minimal disruption to your business',
    'implementation.timeline': 'Implementation Timeline',
    'implementation.why_works': 'Why our process works',
    'implementation.why_works.subtitle': 'Proven results from our implementation methodology',
    
    // Implementation Phases
    'implementation.phases.discovery.title': 'Discovery & Assessment',
    'implementation.phases.discovery.duration': 'Week 1-2',
    'implementation.phases.discovery.description': 'We analyze your current processes, identify pain points, and create a detailed implementation roadmap.',
    'implementation.phases.discovery.deliverables': ['Process Analysis', 'Requirements Document', 'Implementation Plan'],
    
    'implementation.phases.design.title': 'Design & Configuration',
    'implementation.phases.design.duration': 'Week 3-5',
    'implementation.phases.design.description': 'Custom workflows, system configuration, and user interface design tailored to your business needs.',
    'implementation.phases.design.deliverables': ['System Design', 'Workflow Configuration', 'UI Mockups'],
    
    'implementation.phases.development.title': 'Development & Integration',
    'implementation.phases.development.duration': 'Week 6-9',
    'implementation.phases.development.description': 'System development, data migration, third-party integrations, and comprehensive testing.',
    'implementation.phases.development.deliverables': ['Developed System', 'Data Migration', 'Integration Testing'],
    
    'implementation.phases.deployment.title': 'Deployment & Training',
    'implementation.phases.deployment.duration': 'Week 10-11',
    'implementation.phases.deployment.description': 'Go-live support with comprehensive user training, system monitoring, and immediate support.',
    'implementation.phases.deployment.deliverables': ['Live System', 'Trained Users', 'Support Documentation'],
    
    'implementation.phases.optimization.title': 'Optimization & Support',
    'implementation.phases.optimization.duration': 'Ongoing',
    'implementation.phases.optimization.description': 'Continuous optimization, performance monitoring, feature enhancements, and dedicated support.',
    'implementation.phases.optimization.deliverables': ['Performance Reports', 'Feature Updates', '24/7 Support'],
    
    // Timeline
    'implementation.timeline.weeks.1-2': '1-2',
    'implementation.timeline.weeks.3-5': '3-5',
    'implementation.timeline.weeks.6-9': '6-9',
    'implementation.timeline.weeks.10-11': '10-11',
    'implementation.timeline.weeks.12+': '12+',
    'implementation.timeline.phases.discovery': 'Discovery',
    'implementation.timeline.phases.design': 'Design',
    'implementation.timeline.phases.development': 'Development',
    'implementation.timeline.phases.deployment': 'Deployment',
    'implementation.timeline.phases.support': 'Support',
    
    // Implementation Stats
    'implementation.key_deliverables': 'Key Deliverables',
    'implementation.timeline_title': 'Implementation Timeline',
    'implementation.stats.faster.metric': '85%',
    'implementation.stats.faster.label': 'Faster Implementation',
    'implementation.stats.faster.desc': 'Compared to traditional methods',
    'implementation.stats.downtime.metric': 'Zero',
    'implementation.stats.downtime.label': 'Downtime',
    'implementation.stats.downtime.desc': 'Seamless transition process',
    'implementation.stats.adoption.metric': '98%',
    'implementation.stats.adoption.label': 'User Adoption',
    'implementation.stats.adoption.desc': 'Within first month',
    'implementation.stats.support.metric': '24/7',
    'implementation.stats.support.label': 'Support',
    'implementation.stats.support.desc': 'Dedicated implementation team',
    
    // Features Section
    'features.core_modules': 'Core Modules',
    'features.core_foundation': 'Core Foundation',
    'features.core_description': 'Essential business modules for complete operations management and workflow automation.',
    'features.ai_features': 'AI Features',
    'features.smart_enhancement': 'Smart Enhancement',
    'features.ai_description': 'Advanced AI technology that learns and optimizes your business processes automatically.',
    'features.integration_hub': 'Integration Hub',
    'features.seamless_connection': 'Seamless Connection',
    'features.integration_description': 'Connect with 500+ platforms and systems seamlessly for unified data flow.',
    'features.mobile_cloud': 'Mobile & Cloud Platform',
    'features.anywhere_access': 'Anywhere Access',
    'features.mobile_description': 'Access your business data anywhere with 99.9% uptime guarantee and offline capabilities.',
    
    // Footer
    'footer.description': 'AI-powered ERP solutions designed for modern businesses. Streamline operations, boost efficiency, and future-proof your business with intelligent automation.',
    'footer.quick_links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 MovinWare. All rights reserved.',
    'footer.built_by': 'Developed entirely by Eng. Muhammad Ameen Al-Duais',
    
    // Common
    'common.learn_more': 'Learn More',
    'common.explore': 'Explore module details',
    'common.required': 'required',
    'common.loading': 'Loading...',
    'common.success': 'Success',
    'common.error': 'Error',
    
    // Modal/Detail specific
    'modal.key_capabilities': 'Key Capabilities',
    'modal.key_benefits': 'Key Benefits',
    'modal.process_overview': 'Process Overview',
    'modal.perfect_for': 'Perfect for:',
    'modal.save_discount': 'Save 25%'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.value': 'ماذا نقدم',
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
    'value.speed.title': 'من التهيئة إلى النتائج في وقت قياسي',
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
    'capabilities.overview.subtitle': 'نظام موحد حيث تعمل جميع الوحدات معاً بسلاسة لتوفير إدارة أعمال شاملة',
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
    'capabilities.stats.api_desc': 'الاتصالات عن طريق طرف ثالث متاحة',
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
    'industries.subtitle': 'حلول خاصة بقطاع الصناعة مصممة لتلبية التحديات والمتطلبات الفريدة لقطاع أعمالك',
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
    'industries.logistics.capabilities': ['تحسين المسارات المؤتمتة بالذكاء الاصطناعي', 'إدارة الأسطول وتتبع المركبات', 'أتمتة المستودعات والتحكم', 'تتبع الشحنات والتسليم في الوقت الفعلي', 'تخطيط وتحسين الأحمال', 'إدارة السائقين وتحليلات الأداء', 'بوابة العملاء والتواصل', 'تحليل التكلفة ومراجعة الشحن'],
    'industries.logistics.clients': 'شركات الشحن، مقدمي الخدمات اللوجستية، وسطاء الشحن، مراكز التوزيع',
    'industries.logistics.fullDescription': 'أدوات لوجستيات متقدمة وتحسين سلسلة التوريد تضمن التسليم في الوقت المحدد وكفاءة التكلفة والرؤية الكاملة عبر العمليات. تستفيد منصة اللوجستيات الخاصة بنا من الذكاء الاصطناعي والتعلم الآلي لتحسين المسارات وتقليل التكاليف وتوفير الرؤية في الوقت الفعلي في جميع أنحاء نظام سلسلة التوريد بأكمله لأقصى قدر من الكفاءة.',
    'industries.logistics.benefits': ['تحسين المسارات المؤتمتة بالذكاء الاصطناعي يقلل تكاليف الوقود بنسبة 30%', 'التتبع في الوقت الفعلي يحسن رضا العملاء', 'تخطيط الأحمال الآلي يزيد من الكفاءة', 'التحليلات الشاملة تدفع التحسين المستمر'],
    
    'industries.education.capabilities': ['نظام إدارة معلومات الطلاب', 'منصة إدارة التعلم المتقدمة', 'معالجة المساعدات المالية والمنح الدراسية', 'تحليلات الأداء الأكاديمي والتقارير', 'إدارة وتسليم الدورات عبر الإنترنت', 'بوابة التواصل بين أولياء الأمور والمعلمين', 'إدارة المكتبة والموارد', 'أدوات الامتحانات والتقييم'],
    'industries.education.clients': 'المدارس، الجامعات، مراكز التدريب، منصات التعلم عبر الإنترنت',
    'industries.education.fullDescription': 'حلول شاملة للمؤسسات التعليمية، من إدارة الطلاب إلى تخطيط المناهج والكفاءة الإدارية. تحول مجموعة التعليم الخاصة بنا بيئات التعلم التقليدية بأدوات رقمية تعزز مشاركة الطلاب وتبسط العمليات الإدارية وتوفر رؤى عميقة في الأداء الأكاديمي والفعالية المؤسسية.',
    'industries.education.benefits': ['العمليات الإدارية المبسطة تقلل عبء العمل بنسبة 60%', 'تعزيز مشاركة الطلاب من خلال الأدوات الرقمية', 'التحليلات الشاملة تحسن النتائج الأكاديمية', 'منصات التواصل المتكاملة تربط جميع أصحاب المصلحة'],
    
    'industries.retail.capabilities': ['أنظمة نقاط البيع المتقدمة', 'تكامل التجارة الإلكترونية متعددة القنوات', 'إدارة برامج الولاء والمكافآت', 'مزامنة المخزون متعددة المواقع', 'إدارة الأسعار والتسعير الديناميكي', 'تحليلات العملاء والتخصيص', 'إدارة البائعين والموردين', 'معالجة الإرجاع والاستبدال'],
    'industries.retail.clients': 'سلاسل التجزئة، المتاجر الإلكترونية، العلامات التجارية للأزياء، تجار التجزئة المتخصصون',
    'industries.retail.fullDescription': 'إدارة التجزئة الكاملة وحلول التجارة الإلكترونية المصممة لتحسين المبيعات والمخزون وتجربة العملاء عبر جميع القنوات. توحد منصة التجزئة الخاصة بنا العمليات عبر الإنترنت وغير المتصلة، مما يوفر رؤية في الوقت الفعلي لسلوك العملاء ومستويات المخزون وأداء المبيعات عبر جميع نقاط الاتصال لأقصى ربحية.',
    'industries.retail.benefits': ['تكامل متعدد القنوات يزيد المبيعات بنسبة 40%', 'إدارة المخزون في الوقت الفعلي تقلل نفاد المخزون', 'تحليلات العملاء تدفع التجارب الشخصية', 'العمليات الآلية تحسن الكفاءة التشغيلية'],
    
    'industries.manufacturing.capabilities': ['تخطيط الإنتاج وتحسين السعة', 'أنظمة إدارة الجودة والامتثال', 'صيانة المعدات التنبؤية', 'تحسين وتتبع سلسلة التوريد', 'مراقبة الإنتاج في الوقت الفعلي', 'تنفيذ التصنيع الرشيق', 'تتبع الدفعات والأرقام التسلسلية', 'تحليل التكلفة وتتبع الربحية'],
    'industries.manufacturing.clients': 'المصنعون، خطوط التجميع، مصانع المعالجة، المعدات الصناعية',
    'industries.manufacturing.fullDescription': 'حلول التصنيع وإدارة الإنتاج الشاملة التي تحسن الكفاءة ومراقبة الجودة وعمليات سلسلة التوريد. تمكن مجموعة التصنيع الخاصة بنا التحول الرقمي مع تكامل إنترنت الأشياء والتحليلات التنبؤية وسير العمل الآلي الذي يقلل من النفايات ويحسن الجودة ويزيد من الكفاءة التشغيلية مع ضمان الامتثال.',
    'industries.manufacturing.benefits': ['الصيانة التنبؤية تقلل وقت التوقف بنسبة 45%', 'أنظمة إدارة الجودة تضمن الامتثال', 'المراقبة في الوقت الفعلي تحسن كفاءة الإنتاج', 'تكامل سلسلة التوريد يقلل التكاليف والتأخيرات'],
    
    'industries.startups.title': 'الشركات الناشئة',
    'industries.startups.count': '+50',
    'industries.startups.description': 'الأعمال النامية المستعدة للتوسع',
    'industries.startups.details': 'حلول مرنة تنمو مع أعمالك',
    'industries.smes.title': 'الشركات الصغيرة والمتوسطة',
    'industries.smes.count': '+500',
    'industries.smes.description': 'الشركات الراسخة في السوق المتوسط',
    'industries.smes.details': 'ميزات شاملة للعمليات المعقدة',
    'industries.enterprises.title': 'المؤسسات الكبيرة',
    'industries.enterprises.count': '+100',
    'industries.enterprises.description': 'المنظمات الكبيرة ذات الاحتياجات المعقدة',
    'industries.enterprises.details': 'أمان وتخصيص على مستوى المؤسسة',
    
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
    
    // ERP Modules
    'erp.accounting.title': 'المحاسبة والمالية',
    'erp.accounting.description': 'إدارة مالية شاملة مع رؤى في الوقت الفعلي.',
    'erp.accounting.timeline': 'التكامل الكامل',
    'erp.accounting.capabilities': ['تقارير مالية وتحليلات في الوقت الفعلي', 'دعم العملات المتعددة والتحويل', 'الامتثال الضريبي والتقارير التنظيمية', 'حسابات الدفع/الاستلام الآلية', 'تخطيط الميزانية والتنبؤ', 'إدارة وتحسين التدفق النقدي', 'مسار المراجعة المالية والضوابط', 'التكامل مع أنظمة المصرفية والدفع'],
    'erp.accounting.fullDescription': 'نظام إدارة مالية وتقارير شامل مع رؤى في الوقت الفعلي وعمليات آلية للسيطرة الشاملة على الأعمال. توفر مجموعة المحاسبة الخاصة بنا رؤية كاملة لعملياتك المالية مع سير عمل آلي وتقارير ذكية وتكامل سلس مع أنظمة المصرفية والدفع.',
    
    'erp.hr.title': 'الموارد البشرية',
    'erp.hr.description': 'إدارة الموارد البشرية الشاملة لدورة حياة الموظف الكاملة.',
    'erp.hr.timeline': 'مجموعة الموارد البشرية الكاملة',
    'erp.hr.capabilities': ['بوابة الخدمة الذاتية للموظفين وتطبيق الهاتف المحمول', 'حسابات الرواتب والضرائب الآلية', 'إدارة الأداء وتتبع الأهداف', 'الوقت والحضور مع التكامل البيومتري', 'نظام التوظيف وتتبع المتقدمين', 'مزايا الموظفين وإدارة الإجازات', 'برامج التدريب والتطوير', 'تحليلات الموارد البشرية وتخطيط القوى العاملة'],
    'erp.hr.fullDescription': 'نظام إدارة الموارد البشرية الشامل الذي يغطي دورة حياة الموظف بأكملها من التوظيف إلى التقاعد مع تحليلات متقدمة. تحول مجموعة الموارد البشرية الخاصة بنا إدارة الأشخاص بسير عمل آلي وقدرات الخدمة الذاتية ورؤى قائمة على البيانات تساعدك في جذب واستبقاء وتطوير المواهب العليا.',
    
    'erp.sales.title': 'المبيعات وإدارة علاقات العملاء',
    'erp.sales.description': 'مبيعات وإدارة علاقات العملاء المدعومة بالذكاء الاصطناعي.',
    'erp.sales.timeline': 'تحسين المبيعات',
    'erp.sales.capabilities': ['تتبع العملاء المحتملين وإدارة الفرص', 'خط أنابيب المبيعات المتقدم والتنبؤ', 'رؤية شاملة للعملاء 360 درجة والتحليلات', 'إدارة حملات التسويق الآلية', 'إنشاء عروض الأسعار والاقتراحات', 'دعم العملاء وإدارة التذاكر', 'تحليلات أداء فريق المبيعات', 'إدارة علاقات العملاء المحمولة وأدوات المبيعات الميدانية'],
    'erp.sales.fullDescription': 'إدارة المبيعات وعلاقات العملاء الشاملة مع رؤى مدعومة بالذكاء الاصطناعي وأتمتة لأقصى معدلات التحويل. توفر منصة إدارة علاقات العملاء الخاصة بنا رؤية كاملة للعملاء وعمليات مبيعات آلية ورؤى ذكية تساعدك في إغلاق المزيد من الصفقات وبناء علاقات أقوى مع العملاء.',
    
    'erp.inventory.title': 'إدارة المخزون',
    'erp.inventory.description': 'تحسين المخزون الذكي مع التتبع في الوقت الفعلي.',
    'erp.inventory.timeline': 'المخزون الذكي',
    'erp.inventory.capabilities': ['تحسين المخزون والتنبؤ المدعوم بالذكاء الاصطناعي', 'تكامل مسح الباركود وRFID', 'إعادة الطلب الآلي وتنبيهات المورد', 'تتبع متعدد المواقع والمستودعات', 'إدارة الدفعات والأرقام التسلسلية', 'العد الدوري والجرد المادي', 'تخطيط المستودع وتحسين مسار الانتقاء', 'أداء المورد وإدارة البائعين'],
    'erp.inventory.fullDescription': 'إدارة المخزون والمستودعات المتقدمة مع التتبع في الوقت الفعلي وقدرات التحسين لأقصى قدر من الكفاءة. يستخدم نظام المخزون الخاص بنا الذكاء الاصطناعي للتنبؤ بالطلب وتحسين مستويات المخزون وأتمتة عمليات إعادة الطلب مع توفير رؤية كاملة عبر جميع المواقع والمستودعات.',
    
    'erp.manufacturing.title': 'التصنيع',
    'erp.manufacturing.description': 'إدارة الإنتاج الذكية ومراقبة الجودة.',
    'erp.manufacturing.timeline': 'تميز الإنتاج',
    'erp.manufacturing.capabilities': ['تخطيط الإنتاج وتحسين السعة', 'سير عمل مراقبة الجودة والامتثال', 'تخصيص الموارد وجدولة المعدات', 'إدارة قائمة المواد والتكاليف', 'التحكم في أرضية المصنع وإدارة أوامر العمل', 'تكامل الآلات واتصال إنترنت الأشياء', 'التصنيع الرشيق وتقليل النفايات', 'دورة حياة المنتج وإدارة تغيير الهندسة'],
    'erp.manufacturing.fullDescription': 'حل إدارة الإنتاج الكامل الذي يحسن عمليات التصنيع ومراقبة الجودة مع المراقبة في الوقت الفعلي. تمكن وحدة التصنيع الخاصة بنا التحول الرقمي مع تكامل إنترنت الأشياء وسير العمل الآلي وتتبع الإنتاج في الوقت الفعلي الذي يزيد من الكفاءة ويضمن الجودة المتسقة.',
    
    'erp.assets.title': 'إدارة الأصول',
    'erp.assets.description': 'إدارة الأصول التنبؤية وتحسين الصيانة.',
    'erp.assets.timeline': 'تحسين الأصول',
    'erp.assets.capabilities': ['جدولة الصيانة الوقائية والتنبؤية', 'تتبع دورة حياة الأصول والإهلاك', 'إدارة أوامر العمل وإرسال الفنيين', 'أداء المعدات وتحليلات إنترنت الأشياء', 'مخزون قطع الغيار والمشتريات', 'إدارة الامتثال وتتبع السلامة', 'الصيانة المحمولة وخدمة المجال', 'عائد الاستثمار للأصول وتحليل التكلفة'],
    'erp.assets.fullDescription': 'تتبع الأصول الشامل وإدارة الصيانة لزيادة وقت تشغيل المعدات وعائد الاستثمار مع التحليلات التنبؤية. يستخدم حل إدارة الأصول الخاص بنا مستشعرات إنترنت الأشياء والتعلم الآلي للتنبؤ بالأعطال قبل حدوثها وتحسين جداول الصيانة وضمان أقصى توفر وأداء للمعدات.',
    
    // ERP Integration Stats
    'erp.integration.stats.module.metric': '100%',
    'erp.integration.stats.module.label': 'تكامل الوحدات',
    'erp.integration.stats.module.desc': 'تدفق البيانات بسلاسة عبر جميع الوحدات',
    'erp.integration.stats.realtime.metric': 'الوقت الفعلي',
    'erp.integration.stats.realtime.label': 'تحديثات البيانات',
    'erp.integration.stats.realtime.desc': 'المزامنة الفورية في كل مكان',
    'erp.integration.stats.database.metric': 'موحد',
    'erp.integration.stats.database.label': 'قاعدة البيانات',
    'erp.integration.stats.database.desc': 'مرجع مركزي وموثوق للبيانات في المؤسسة',
    'erp.integration.stats.workflows.metric': 'مخصص',
    'erp.integration.stats.workflows.label': 'سير العمل',
    'erp.integration.stats.workflows.desc': 'مصمم حسب عمليات أعمالك',
    
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
    'contact.inquiry.general': 'استفسار عام',
    'contact.inquiry.erp': 'تنفيذ نظام تخطيط الموارد',
    'contact.inquiry.custom': 'تطوير مخصص',
    'contact.inquiry.support': 'دعم',
    'contact.inquiry.partnership': 'شراكة',
    'contact.inquiry.demo': 'طلب عرض توضيحي',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.phone': 'الهاتف',
    'contact.info.location': 'الموقع',
    'contact.info.location_value': 'أونلاين',
    'contact.actions.expert': 'تحدث مع خبير',
    'contact.actions.expert_desc': 'اجدولة مكالمة مع خبرائنا',
    'contact.actions.consultation': 'جدولة استشارة',
    'contact.actions.consultation_desc': 'احجز استشارة مجانية',
    'contact.actions.whatsapp': 'دعم واتساب',
    'contact.actions.whatsapp_desc': 'احصل على دعم فوري عبر واتساب',
    
    // Services Section
    'services.section': 'الخدمات المهنية',
    'services.title': 'خدمات خبراء\nلتنفيذ ناجح',
    'services.subtitle': 'يضمن خبراؤنا المعتمدون تسليم تنفيذ نظام تخطيط الموارد في الوقت المحدد، ضمن الميزانية، ويتجاوز التوقعات',
    'services.methodology': 'منهجية خدماتنا',
    'services.methodology.subtitle': 'نهج منظم يضمن جودة التسليم ورضا العملاء في كل مرحلة',
    
    // Testimonials Section
    'testimonials.section': 'الشهادات',
    'testimonials.title': 'ما يقوله الآخرون',
    'testimonials.testimonial1.content': 'حولت MovinWare عمليات الإنتاج لدينا، وسهلت سير العمل بينما يركز فريقنا على النمو الاستراتيجي. زيادة 40% في الكفاءة خلال شهرين.',
    'testimonials.testimonial1.author': 'سارة تشين',
    'testimonials.testimonial1.role': 'نائب الرئيس للعمليات، شركة أكسيون للتصنيع',
    'testimonials.testimonial2.content': 'تطبيق MovinWare في مراكز اللوجستيات لدينا قلل التكاليف التشغيلية بنسبة 35% مع تحسين الدقة. الرؤى المدعومة بالذكاء الاصطناعي تُغير قواعد اللعبة.',
    'testimonials.testimonial2.author': 'مايكل رودريغيز',
    'testimonials.testimonial2.role': 'مدير اللوجستيات، GlobalShip',
    'testimonials.testimonial3.content': 'كشركة متوسطة الحجم، لم نفكر أبداً أن نظام تخطيط الموارد المتقدم سيكون في متناولنا. MovinWare غيرت ذلك بتصميمها البديهي والتسعير المعقول.',
    'testimonials.testimonial3.author': 'جيسون لي',
    'testimonials.testimonial3.role': 'الرئيس التنفيذي، شركة الحلول المبتكرة',
    
    // Implementation Process
    'implementation.section': 'عملية التنفيذ',
    'implementation.title': 'من المفهوم إلى\nالتشغيل المباشر في 11 أسبوع',
    'implementation.subtitle': 'منهجيتنا المثبتة تضمن تنفيذاً ناجحاً مع أقل قدر من التعطيل لأعمالك',
    'implementation.timeline': 'الجدول الزمني للتنفيذ',
    'implementation.why_works': 'لماذا تعمل عمليتنا',
    'implementation.why_works.subtitle': 'نتائج مثبتة من منهجية التنفيذ الخاصة بنا',
    
    // Implementation Phases
    'implementation.phases.discovery.title': 'الاستكشاف والتقييم',
    'implementation.phases.discovery.duration': 'الأسبوع 1-2',
    'implementation.phases.discovery.description': 'نحلل عملياتك الحالية، ونحدد مشاكل العملاء، وننشئ خارطة طريق تنفيذ مفصلة.',
    'implementation.phases.discovery.deliverables': ['تحليل العمليات', 'وثيقة المتطلبات', 'خطة التنفيذ'],
    
    'implementation.phases.design.title': 'التصميم والتكوين',
    'implementation.phases.design.duration': 'الأسبوع 3-5',
    'implementation.phases.design.description': 'سير عمل مخصص وتكوين النظام وتصميم واجهة المستخدم مصمم خصيصاً لاحتياجات أعمالك.',
    'implementation.phases.design.deliverables': ['تصميم النظام', 'تكوين سير العمل', 'نماذج أولية للواجهة'],
    
    'implementation.phases.development.title': 'التطوير والتكامل',
    'implementation.phases.development.duration': 'الأسبوع 6-9',
    'implementation.phases.development.description': 'تطوير النظام وترحيل البيانات وتكامل طرف ثالث واختبار شامل.',
    'implementation.phases.development.deliverables': ['النظام المطور', 'ترحيل البيانات', 'اختبار التكامل'],
    
    'implementation.phases.deployment.title': 'النشر والتدريب',
    'implementation.phases.deployment.duration': 'الأسبوع 10-11',
    'implementation.phases.deployment.description': 'دعم الانطلاق مع تدريب المستخدمين الشامل ومراقبة النظام والدعم الفوري.',
    'implementation.phases.deployment.deliverables': ['النظام المباشر', 'المستخدمون المدربون', 'وثائق الدعم'],
    
    'implementation.phases.optimization.title': 'التحسين والدعم',
    'implementation.phases.optimization.duration': 'مستمر',
    'implementation.phases.optimization.description': 'التحسين المستمر ومراقبة الأداء وتحسينات الميزات والدعم المخصص.',
    'implementation.phases.optimization.deliverables': ['تقارير الأداء', 'تحديثات الميزات', 'دعم 24/7'],
    
    // Timeline
    'implementation.timeline.weeks.1-2': '1-2',
    'implementation.timeline.weeks.3-5': '3-5',
    'implementation.timeline.weeks.6-9': '6-9',
    'implementation.timeline.weeks.10-11': '10-11',
    'implementation.timeline.weeks.12+': '12+',
    'implementation.timeline.phases.discovery': 'الاستكشاف',
    'implementation.timeline.phases.design': 'التصميم',
    'implementation.timeline.phases.development': 'التطوير',
    'implementation.timeline.phases.deployment': 'النشر',
    'implementation.timeline.phases.support': 'الدعم',
    
    // Implementation Stats
    'implementation.key_deliverables': 'الإنجازات الرئيسية',
    'implementation.timeline_title': 'الجدول الزمني للتنفيذ',
    'implementation.stats.faster.metric': '85%',
    'implementation.stats.faster.label': 'تنفيذ أسرع',
    'implementation.stats.faster.desc': 'مقارنة بالطرق التقليدية',
    'implementation.stats.downtime.metric': 'صفر',
    'implementation.stats.downtime.label': 'وقت تعطل',
    'implementation.stats.downtime.desc': 'عملية انتقال سلسة',
    'implementation.stats.adoption.metric': '98%',
    'implementation.stats.adoption.label': 'اعتماد المستخدمين',
    'implementation.stats.adoption.desc': 'خلال الشهر الأول',
    'implementation.stats.support.metric': '24/7',
    'implementation.stats.support.label': 'دعم',
    'implementation.stats.support.desc': 'فريق تنفيذ مخصص',
    
    // Features Section
    'features.core_modules': 'الوحدات الأساسية',
    'features.core_foundation': 'الأساس الأساسي',
    'features.core_description': 'وحدات أعمال أساسية لإدارة العمليات الكاملة وأتمتة سير العمل.',
    'features.ai_features': 'ميزات الذكاء الاصطناعي',
    'features.smart_enhancement': 'التحسين الذكي',
    'features.ai_description': 'تقنية ذكاء اصطناعي متقدمة تتعلم وتحسن عمليات أعمالك تلقائياً.',
    'features.integration_hub': 'مركز التكامل',
    'features.seamless_connection': 'الاتصال السلس',
    'features.integration_description': 'اتصل مع أكثر من 500 منصة ونظام بسلاسة لتدفق بيانات موحد.',
    'features.mobile_cloud': 'منصة الهاتف المحمول والسحابة',
    'features.anywhere_access': 'الوصول من أي مكان',
    'features.mobile_description': 'الوصول إلى بيانات أعمالك من أي مكان مع ضمان وقت تشغيل 99.9% وقدرات بدون اتصال.',
    
    // Platform Capabilities Dialog Content
    'features.core_full_description': 'وحدات الأعمال الشاملة التي تغطي جميع جوانب عملياتك، مصممة لتبسيط العمليات وزيادة الإنتاجية في جميع أنحاء مؤسستك. توفر وحداتنا الأساسية الأساس للتحول الرقمي مع سير العمل المتكامل والعمليات الآلية ومزامنة البيانات في الوقت الفعلي عبر جميع وظائف الأعمال.',
    'features.core_capabilities': ['التقارير المالية والمحاسبة المتقدمة', 'إدارة الموارد البشرية الشاملة', 'مبيعات إدارة علاقات العملاء مع أتمتة خط الأنابيب', 'التحكم الذكي في المخزون وسلسلة التوريد', 'إدارة المشاريع وتخطيط الموارد', 'إدارة المستندات وأتمتة سير العمل', 'دعم العمليات متعددة المواقع', 'لوحة معلومات ذكاء الأعمال في الوقت الفعلي'],
    'features.core_benefits': ['أتمتة سير العمل المتكاملة تقلل المهام اليدوية بنسبة 70%', 'مزامنة البيانات في الوقت الفعلي عبر جميع الأقسام', 'لوحة معلومات شاملة للتقارير والتحليلات', 'دعم متعدد المواقع مع التحكم المركزي'],
    
    'features.ai_full_description': 'الأتمتة الذكية والرؤى المدعومة بتقنية الذكاء الاصطناعي المتقدمة التي تتعلم من أنماط أعمالك لتقديم توصيات قابلة للتنفيذ. تتطور ميزات الذكاء الاصطناعي لدينا باستمرار مع أعمالك، وتحدد فرص التحسين وتؤتمت عمليات صنع القرار المعقدة لدفع النمو والكفاءة.',
    'features.ai_capabilities': ['تحليلات تنبؤية للتعلم الآلي', 'سير عمل أتمتة العمليات الذكية', 'إنشاء تقارير باللغة الطبيعية', 'محرك توصيات القرارات المدعوم بالذكاء الاصطناعي', 'التعرف الذكي على أنماط البيانات', 'اكتشاف الشذوذ الآلي والتنبيهات', 'تحليل سلوك العملاء الذكي', 'معالجة إدخال الصوت إلى البيانات'],
    'features.ai_benefits': ['التحليلات التنبؤية تحسن دقة اتخاذ القرار بنسبة 85%', 'سير العمل الآلي يقلل وقت المعالجة بنسبة 60%', 'الرؤى المدعومة بالذكاء الاصطناعي تدفع نمو الإيرادات', 'التعلم المستمر يتكيف مع تطور أعمالك'],
    
    'features.integration_full_description': 'اتصال سلس مع أدواتك وأنظمتك الحالية، مما يضمن تدفق البيانات بسلاسة عبر مجموعة التكنولوجيا الكاملة دون انقطاع. يدعم مركز التكامل لدينا كلاً من واجهات برمجة التطبيقات الحديثة والأنظمة القديمة، مما يوفر نظاماً بيئياً موحداً للبيانات يلغي الصوامع ويمكّن ذكاء الأعمال الشامل.',
    'features.integration_capabilities': ['إدارة بوابة واجهة برمجة التطبيقات للمؤسسات', 'محرك مزامنة البيانات في الوقت الفعلي', 'أدوات ترحيل الأنظمة القديمة', 'موصلات منصة الطرف الثالث', 'تطوير التكامل المخصص', 'Webhook وبنية مدفوعة بالأحداث', 'أدوات تخطيط وتحويل البيانات', 'إدارة الأمان والمصادقة'],
    'features.integration_benefits': ['ربط أكثر من 500 تطبيق طرف ثالث فوراً', 'إلغاء حواجز البيانات مع التكامل الموحد', 'دعم الأنظمة القديمة يضمن الترحيل السلس', 'المزامنة في الوقت الفعلي تحافظ على حداثة البيانات'],
    
    'features.mobile_full_description': 'الوصول إلى بيانات أعمالك في أي مكان وزمان وعلى أي جهاز مع منصتنا الأصلية السحابية التي تضمن أقصى وقت تشغيل وأمان. مبنية بهندسة سحابية حديثة، توفر منصتنا تجارب هاتف محمول سلسة مع قدرات قوية بدون اتصال وأمان على مستوى المؤسسة يتوسع مع احتياجات أعمالك.',
    'features.mobile_capabilities': ['تطبيق ويب تقدمي (PWA)', 'تطبيقات iOS و Android الأصلية', 'مزامنة البيانات بدون اتصال أولاً', 'تعاون في الوقت الفعلي متعدد الأجهزة', 'التوسع التلقائي للبنية التحتية السحابية', 'الأمان والتشفير على مستوى المؤسسة', 'النسخ الاحتياطي التلقائي واستعادة الكوارث', 'CDN عالمي للأداء الأمثل'],
    'features.mobile_benefits': ['اتفاقية مستوى الخدمة 99.9% لوقت التشغيل مع التبديل التلقائي', 'وظائف بدون اتصال تضمن الإنتاجية المستمرة', 'الأمان على مستوى المؤسسة يحمي بياناتك', 'CDN عالمي يوفر أداءً مثالي في جميع أنحاء العالم'],

    
    // Service Types
    'services.erp.title': 'تطبيق تخطيط موارد المؤسسات',
    'services.erp.description': 'تطبيق شامل مع منهجيات مؤكدة وإدارة مشاريع مخصصة.',
    'services.erp.timeline': '8-12 أسبوع',
    'services.erp.capabilities': ['تصميم وتخطيط هيكل النظام', 'التطوير والتكوين المخصص', 'خدمات ترحيل البيانات والتكامل', 'برامج تدريب المستخدمين الشاملة', 'دعم الانطلاق والتحسين', 'مراقبة الأداء والضبط', 'إدارة التغيير وتبني المستخدمين', 'ضمان الجودة والاختبار'],
    'services.erp.fullDescription': 'خدمات تطبيق تخطيط موارد المؤسسات الشاملة التي تحول عمليات أعمالك مع الحد الأدنى من التعطيل. تضمن منهجيتنا المؤكدة النشر الناجح مع إدارة مشاريع مخصصة وتطوير مخصص وبرامج تدريب شاملة تدفع تبني المستخدمين وقيمة الأعمال.',
    'services.erp.benefits': ['تطبيق أسرع بنسبة 85% مقارنة بالطرق التقليدية', 'مدير مشروع مخصص يضمن الالتزام بالجدول الزمني', 'منهجية مؤكدة بمعدل نجاح 98%', 'التدريب الشامل يدفع تبني المستخدمين'],
    'services.erp.processSteps': [
      {
        'title': 'الاستكشاف والتخطيط',
        'description': 'تحليل العمليات الحالية وإنشاء خارطة طريق للتطبيق',
        'deliverables': ['تحليل المتطلبات', 'الجدول الزمني للمشروع', 'تخطيط الموارد']
      },
      {
        'title': 'تكوين النظام',
        'description': 'تكوين النظام وفقاً لمتطلبات الأعمال',
        'deliverables': ['إعداد النظام', 'سير العمل المخصص', 'نقاط التكامل']
      },
      {
        'title': 'ترحيل البيانات',
        'description': 'النقل الآمن للبيانات الموجودة إلى النظام الجديد',
        'deliverables': ['تخطيط البيانات', 'سكريبت الترحيل', 'تقارير التحقق']
      },
      {
        'title': 'التدريب والانطلاق',
        'description': 'تدريب المستخدمين ونشر النظام',
        'deliverables': ['مواد التدريب', 'دليل المستخدمين', 'دعم الانطلاق']
      }
    ],
    
    'services.industry.title': 'حلول الصناعة',
    'services.industry.description': 'حلول متخصصة مصممة لمتطلبات صناعتك الفريدة واحتياجات الامتثال.',
    'services.industry.timeline': '6-10 أسابيع',
    'services.industry.capabilities': ['أنظمة إدارة الرعاية الصحية', 'حلول المنصات التعليمية', 'تحسين عمليات التصنيع', 'تكامل التجزئة والتجارة الإلكترونية', 'إدارة اللوجستيات وسلسلة التوريد', 'امتثال الخدمات المالية', 'أنظمة إدارة العقارات', 'حلول الضيافة والسياحة'],
    'services.industry.fullDescription': 'حلول خاصة بقطاع الصناعة مصممة لمعالجة تحديات القطاع الفريدة ومتطلبات الامتثال. تضمن خبرتنا العميقة في الصناعة أن الحلول مصممة خصيصاً لبيئة أعمالك المحددة والاحتياجات التنظيمية وسير العمل التشغيلي لأقصى فعالية.',
    'services.industry.benefits': ['الميزات الخاصة بالصناعة تقلل وقت التخصيص', 'امتثال مدمج للمتطلبات التنظيمية', 'حلول مؤكدة عبر قطاعات متعددة', 'تقليل مخاطر التطبيق مع إطارات عمل مختبرة'],
    
    'services.ai.title': 'تكامل الذكاء الاصطناعي',
    'services.ai.description': 'قدرات ذكاء اصطناعي متقدمة لأتمتة العمليات وتوفير رؤى أعمال ذكية.',
    'services.ai.timeline': '4-8 أسابيع',
    'services.ai.capabilities': ['تطبيق التحليلات التنبؤية', 'تطوير أتمتة العمليات', 'معالجة المستندات والتعرف البصري على الرموز', 'أنظمة دعم القرارات', 'تحليل سلوك العملاء', 'اكتشاف الاحتيال والوقاية', 'أنظمة التقارير الذكية', 'تطوير نماذج التعلم الآلي'],
    'services.ai.fullDescription': 'حول أعمالك بالأتمتة المدعومة بالذكاء الاصطناعي والرؤى الذكية. تستفيد خدمات تكامل الذكاء الاصطناعي لدينا من التعلم الآلي والتحليلات التنبؤية والأتمتة لتحسين العمليات وتقليل المهام اليدوية وتوفير رؤى قابلة للتنفيذ تدفع نمو الأعمال.',
    'services.ai.benefits': ['التحليلات التنبؤية تحسن دقة القرارات بنسبة 85%', 'أتمتة العمليات تقلل المهام اليدوية بنسبة 70%', 'رؤى الذكاء الاصطناعي تدفع نمو الإيرادات وتقليل التكاليف', 'التعلم المستمر يتكيف مع تغيرات الأعمال'],
    
    'services.ux.title': 'تصميم تجربة المستخدم والتوطين',
    'services.ux.description': 'تصميم يركز على المستخدم مع دعم التوطين الكامل لأسواق الشرق الأوسط وشمال أفريقيا.',
    'services.ux.timeline': '3-6 أسابيع',
    'services.ux.capabilities': ['تصميم تجربة المستخدم', 'تصميم واجهة من اليمين إلى اليسار', 'دعم المنصة متعددة اللغات', 'التكيف الثقافي والتوطين', 'امتثال معايير إمكانية الوصول', 'نهج التصميم المحمول أولاً', 'تكامل العلامة التجارية والتخصيص', 'اختبار وتحسين سهولة الاستخدام'],
    'services.ux.fullDescription': 'إنشاء تجارب مستخدم بديهية ومناسبة ثقافياً مع التوطين الشامل لأسواق الشرق الأوسط وشمال أفريقيا. تضمن خدمات التصميم لدينا أن منصتك ليست جذابة بصرياً فحسب، بل أيضاً يمكن الوصول إليها وذات صلة ثقافية ومُحسنة لاحتياجات المستخدمين المتنوعة.',
    'services.ux.benefits': ['الواجهات المكيفة ثقافياً تحسن تبني المستخدمين', 'تصميم من اليمين إلى اليسار يضمن تجربة عربية أصيلة', 'امتثال إمكانية الوصول يصل إلى جماهير أوسع', 'نهج المحمول أولاً يزيد من توافق الأجهزة'],
    
    'services.data.title': 'ترحيل البيانات والتكامل',
    'services.data.description': 'ترحيل بيانات آمن وفعال مع تكامل أنظمة طرف ثالث سلس.',
    'services.data.timeline': '2-4 أسابيع',
    'services.data.capabilities': ['ترحيل بيانات الأنظمة القديمة', 'تطوير وتكامل واجهات برمجة التطبيقات', 'مزامنة البيانات في الوقت الفعلي', 'التحقق من صحة البيانات وضمان الجودة', 'موصلات أنظمة الطرف الثالث', 'خدمات الترحيل السحابية', 'تحسين وضبط قواعد البيانات', 'أمان البيانات والامتثال'],
    'services.data.fullDescription': 'ضمان انتقال البيانات السلس وتكامل النظام مع خدمات الترحيل والتكامل الشاملة لدينا. نتعامل مع تحولات البيانات المعقدة وتكامل واجهات برمجة التطبيقات والمزامنة في الوقت الفعلي للحفاظ على استمرارية الأعمال طوال فترة الانتقال.',
    'services.data.benefits': ['عدم فقدان البيانات مع عمليات ترحيل مُتحقق منها', 'المزامنة في الوقت الفعلي تحافظ على اتساق البيانات', 'تكامل واجهات برمجة التطبيقات يربط جميع أنظمة الأعمال', 'بروتوكولات الأمان تحمي المعلومات الحساسة'],
    
    'services.support.title': 'الدعم والصيانة',
    'services.support.description': 'خدمات دعم شاملة تضمن الأداء الأمثل للنظام ورضا المستخدمين.',
    'services.support.timeline': 'مستمر',
    'services.support.capabilities': ['خدمات الدعم الفني على مدار الساعة طوال أيام الأسبوع', 'مراقبة أداء النظام', 'تحديثات الأمان المنتظمة', 'تدريب المستخدمين والإعداد', 'برامج الصيانة الوقائية', 'حل المشاكل وإصلاح الأخطاء', 'تطوير تحسينات الميزات', 'تقارير صحة النظام'],
    'services.support.fullDescription': 'الحفاظ على الأداء الأمثل للنظام مع خدمات الدعم والصيانة الشاملة لدينا. يوفر فريق الدعم المخصص لدينا مساعدة على مدار الساعة طوال أيام الأسبوع ومراقبة استباقية وتحديثات منتظمة وتحسين مستمر لضمان تقديم نظامك قيمة أعمال متسقة.',
    'services.support.benefits': ['الدعم على مدار الساعة طوال أيام الأسبوع يضمن الحد الأدنى من تعطيل الأعمال', 'المراقبة الاستباقية تمنع المشاكل قبل حدوثها', 'التحديثات المنتظمة تحافظ على الأمان والأداء', 'التدريب المستمر يزيد من إنتاجية المستخدمين'],
    
    // Methodology Steps
    'services.methodology.steps.consultation': 'الاستشارة',
    'services.methodology.steps.consultation.desc': 'فهم متطلباتك',
    'services.methodology.steps.planning': 'التخطيط',
    'services.methodology.steps.planning.desc': 'خارطة طريق مفصلة للمشروع',
    'services.methodology.steps.execution': 'التنفيذ',
    'services.methodology.steps.execution.desc': 'تطبيق مهني',
    'services.methodology.steps.delivery': 'التسليم',
    'services.methodology.steps.delivery.desc': 'ضمان الجودة والتسليم',
    'services.methodology.steps.support': 'الدعم',
    'services.methodology.steps.support.desc': 'الصيانة والتحسين المستمر',
    
    // Statistics
    'services.stats.professionals.metric': '+50',
    'services.stats.professionals.label': 'محترف معتمد',
    'services.stats.professionals.desc': 'استشاريون ومطورون خبراء',
    'services.stats.projects.metric': '+500',
    'services.stats.projects.label': 'مشروع ناجح',
    'services.stats.projects.desc': 'عبر صناعات متنوعة',
    'services.stats.satisfaction.metric': '99%',
    'services.stats.satisfaction.label': 'رضا العملاء',
    'services.stats.satisfaction.desc': 'بناءً على استطلاعات إكمال المشاريع',
    

    
    // Footer
    'footer.description': 'حلول تخطيط موارد المؤسسات المدعومة بالذكاء الاصطناعي مصممة للأعمال الحديثة. قم بتبسيط العمليات وزيادة الكفاءة وضمان مستقبل أعمالك مع الأتمتة الذكية.',
    'footer.quick_links': 'روابط سريعة',
    'footer.contact': 'تواصل معنا',
    'footer.copyright': '© 2025 MovinWare. All rights reserved.',
    'footer.built_by': 'تم تطويرة بالكامل بواسطة م. محمد امين الدعيس',
    
    // Common
    'common.learn_more': 'اعرف المزيد',
    'common.explore': 'استكشف تفاصيل الوحدة',
    'common.required': 'مطلوب',
    'common.loading': 'جاري التحميل...',
    'common.success': 'نجح',
    'common.error': 'خطأ',
    
    // Modal/Detail specific
    'modal.key_capabilities': 'القدرات الرئيسية',
    'modal.key_benefits': 'الفوائد الرئيسية',
    'modal.process_overview': 'نظرة عامة على العملية',
    'modal.perfect_for': 'مثالي لـ:',
    'modal.save_discount': 'وفر 25%'
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