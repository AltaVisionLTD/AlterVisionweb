import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        subject: `New Contact Inquiry: ${service}`,
        message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
      }),
    });

    const responseText = await response.text();
    console.log('Web3Forms response status:', response.status);
    console.log('Web3Forms response:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Web3Forms response as JSON:', responseText);
      return NextResponse.json({ error: "Email service error" }, { status: 500 });
    }

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Web3Forms error:', data);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
