/**
 * Web3Forms Email Service
 * Free email service that works on static hosting (Netlify, Vercel)
 * No backend configuration needed - 3000 submissions/month free
 */

interface EmailData {
  name: string;
  email: string;
  subject?: string;
  message?: string;
  [key: string]: any;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error('Web3Forms access key not configured');
    return {
      success: false,
      message: 'Email service not configured. Please contact us directly at info@altavision.com'
    };
  }

  try {
    const formData = {
      access_key: accessKey,
      name: data.name,
      email: data.email,
      subject: data.subject || 'New message from Alta Vision website',
      message: data.message || '',
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: 'Email sent successfully'
      };
    } else {
      console.error('Web3Forms error:', result);
      return {
        success: false,
        message: 'Failed to send email. Please try again.'
      };
    }
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}

export async function sendConsultationRequest(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
}): Promise<{ success: boolean; message: string }> {
  const formattedMessage = `
📋 CONSULTATION REQUEST

Client Details:
- Name: ${data.name}
- Company: ${data.company || 'Individual'}
- Email: ${data.email}
- Phone: ${data.phone}

Service Interested: ${data.service}

${data.preferredDate ? `Preferred Date: ${new Date(data.preferredDate).toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}` : ''}

${data.preferredTime ? `Preferred Time: ${data.preferredTime}` : ''}

${data.message ? `Additional Information:\n${data.message}` : ''}

---
This is an automated message from Alta Vision website consultation booking system.
  `.trim();

  return sendEmail({
    name: data.name,
    email: data.email,
    subject: `📋 Consultation Booking - Alta Vision: ${data.service}`,
    message: formattedMessage,
    phone: data.phone,
    company: data.company,
    service: data.service,
  });
}
