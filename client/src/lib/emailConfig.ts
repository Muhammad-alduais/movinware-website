// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below

export const EMAIL_CONFIG = {
  // Replace these with your actual EmailJS credentials
  SERVICE_ID: "service_movinware", // Your EmailJS service ID
  TEMPLATE_ID: "template_contact", // Your EmailJS template ID
  PUBLIC_KEY: "your_public_key", // Your EmailJS public key
  
  // Email template variables (these should match your EmailJS template)
  TEMPLATE_PARAMS: {
    from_name: "{{from_name}}",
    from_email: "{{from_email}}",
    company: "{{company}}",
    phone: "{{phone}}",
    inquiry_type: "{{inquiry_type}}",
    message: "{{message}}",
    to_email: "info@movinware.com"
  }
};

// EmailJS Template Example:
/*
Subject: {{inquiry_type}} - New Contact Form Submission

Hello MovinWare Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
This message was sent via the MovinWare contact form.
Please respond to {{from_email}} within 24 hours.

Best regards,
MovinWare Contact System
*/