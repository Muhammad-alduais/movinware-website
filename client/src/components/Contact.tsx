import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Calendar, Users, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { useLanguage } from "../contexts/LanguageContext";
const Contact = () => {
  const {
    t
  } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "General Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EmailJS configuration - You'll need to set these up in EmailJS dashboard
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_2owengl";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_fsz5pvq";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "mvNDcozrdeDRdhgJX";

  // Check if EmailJS is properly configured
  const isEmailJSConfigured = EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "your_public_key" && EMAILJS_PUBLIC_KEY.length > 0;
  const contactInfo = [{
    icon: Mail,
    title: t('contact.info.email'),
    value: "info@movinware.com",
    link: "mailto:info@movinware.com"
  }, {
    icon: Phone,
    title: t('contact.info.phone'),
    value: "+966 561820949",
    link: "tel:+966561820949"
  }, {
    icon: MapPin,
    title: t('contact.info.location'),
    value: t('contact.info.location_value'),
    link: "#"
  }];
  const quickActions = [{
    icon: Users,
    title: t('contact.actions.expert'),
    description: t('contact.actions.expert_desc'),
    action: () => window.open("https://calendly.com/movinware", "_blank")
  }, {
    icon: Calendar,
    title: t('contact.actions.consultation'),
    description: t('contact.actions.consultation_desc'),
    action: () => window.open("https://calendly.com/movinware/consultation", "_blank")
  }, {
    icon: MessageCircle,
    title: t('contact.actions.whatsapp'),
    description: t('contact.actions.whatsapp_desc'),
    action: () => window.open("https://wa.me/971412345678", "_blank")
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    return true;
  };
  const sendEmailViaEmailJS = async () => {
    // Skip EmailJS if not properly configured
    if (!isEmailJSConfigured) {
      console.log("EmailJS not configured, skipping...");
      return false;
    }
    try {
      // Create a comprehensive message that includes all form data
      const fullMessage = `
Contact Information:
• Name: ${formData.fullName}
• Email: ${formData.email}
• Company: ${formData.company || "Not specified"}
• Phone: ${formData.phone || "Not provided"}
• Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}

---
This message was sent via the MovinWare contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.
      `.trim();
      const templateParams = {
        title: `${formData.inquiryType} from ${formData.fullName}`,
        name: formData.fullName,
        time: new Date().toLocaleString(),
        message: fullMessage,
        email: formData.email
      };
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      return true;
    } catch (error) {
      console.error("EmailJS error:", error);
      return false;
    }
  };
  const sendEmailViaMailto = () => {
    const subject = `${formData.inquiryType} - Contact Form Submission`;
    const body = `
Contact Information:
• Name: ${formData.fullName}
• Email: ${formData.email}
• Company: ${formData.company || "Not specified"}
• Phone: ${formData.phone || "Not provided"}
• Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}

---
This message was sent via the MovinWare contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.
    `.trim();
    const mailtoLink = `mailto:info@movinware.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // Try EmailJS first (only if properly configured)
      let emailJSSuccess = false;
      if (isEmailJSConfigured) {
        emailJSSuccess = await sendEmailViaEmailJS();
      }
      if (emailJSSuccess) {
        setSubmitStatus('success');
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
          duration: 5000
        });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          company: "",
          phone: "",
          inquiryType: "General Inquiry",
          message: ""
        });
      } else {
        // Fallback to mailto (either EmailJS failed or not configured)
        sendEmailViaMailto();
        setSubmitStatus('success');
        toast.success("Opening your email client...", {
          description: isEmailJSConfigured ? "EmailJS failed, using your default email client instead." : "Please send the email from your email client to complete the process.",
          duration: 5000
        });
      }
    } catch (error) {
      setSubmitStatus('error');
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly at info@movinware.com",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="py-20 bg-white" id="contact">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-4">
            
            <span>{t('contact.section')}</span>
          </div>
          <h2 className="section-title mb-4">{t('contact.title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')} <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')} <span className="text-red-500">*</span>
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.company')}</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.inquiry')}</label>
                <select name="inquiryType" value={formData.inquiryType} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200">
                  <option value="General Inquiry">{t('contact.inquiry.general')}</option>
                  <option value="ERP Implementation">{t('contact.inquiry.erp')}</option>
                  <option value="Custom Development">{t('contact.inquiry.custom')}</option>
                  <option value="Support">{t('contact.inquiry.support')}</option>
                  <option value="Partnership">{t('contact.inquiry.partnership')}</option>
                  <option value="Demo Request">{t('contact.inquiry.demo')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')} <span className="text-red-500">*</span>
                </label>
                <textarea rows={4} name="message" value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200" placeholder="Tell us about your project..." required></textarea>
                <textarea rows={4} name="message" value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-200" placeholder={t('contact.form.message_placeholder')} required></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : submitStatus === 'success' ? 'bg-green-500 hover:bg-green-600' : submitStatus === 'error' ? 'bg-red-500 hover:bg-red-600' : 'bg-pulse-500 hover:bg-pulse-600'} text-white`}>
                {isSubmitting ? <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </> : submitStatus === 'success' ? <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Message Sent!
                  </> : submitStatus === 'error' ? <>
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Try Again
                  </> : <>
                    <Send className="w-4 h-4 mr-2" />
                    {t('contact.form.send')}
                  </>}
              </button>
              
              {submitStatus === 'success' && <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <p className="text-green-800 font-medium">Message delivered successfully!</p>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    We've received your message and will respond within 24 hours.
                  </p>
                </div>}
              
              {submitStatus === 'error' && <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <p className="text-red-800 font-medium">Failed to send message</p>
                  </div>
                  <p className="text-red-700 text-sm mt-1">
                    Please try again or contact us directly at{" "}
                    <a href="mailto:info@movinware.com" className="underline">
                      info@movinware.com
                    </a>
                  </p>
                </div>}
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="opacity-0 animate-on-scroll" style={{
            animationDelay: "0.2s"
          }}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('contact.info.title')}</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => <a key={index} href={info.link} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center justify-center w-10 h-10 bg-pulse-100 rounded-lg mr-4">
                      <info.icon className="w-5 h-5 text-pulse-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{info.title}</p>
                      <p className="text-gray-600" dir={info.value.includes('+966') ? 'ltr' : undefined}>{info.value}</p>
                    </div>
                  </a>)}
              </div>
            </div>

            {/* Quick Actions */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;