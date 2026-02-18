import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, service, message, preferredDate, preferredTime } = await req.json();

    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const consultationMessage = `
📋 CONSULTATION REQUEST

Client Details:
- Name: ${name}
- Company: ${company || 'Individual'}
- Email: ${email}
- Phone: ${phone}

Service Interested: ${service}
${preferredDate ? `Preferred Date: ${new Date(preferredDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}` : ''}
${preferredTime ? `Preferred Time: ${preferredTime}` : ''}

${message ? `Additional Information:\n${message}` : ''}
    `.trim();

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        phone: phone,
        subject: `Consultation Request: ${service}`,
        message: consultationMessage,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Web3Forms error:', data);
      return NextResponse.json({ error: "Failed to send request" }, { status: 500 });
    }
  } catch (error) {
    console.error('Consultation email error:', error);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
