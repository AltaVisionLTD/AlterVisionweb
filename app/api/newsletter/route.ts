import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
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
        name: 'Newsletter Subscriber',
        email: email,
        subject: "New Newsletter Subscription",
        message: `New newsletter subscription from: ${email}`,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Web3Forms error:', data);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }
}

        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #063A33; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #D5962B; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to Alta Vision!</h1>
            </div>
            <div class="content">
              <h2>Thank you for subscribing!</h2>
              <p>We're excited to have you join the Alta Vision community. You'll now receive:</p>
              <ul>
                <li>Engineering insights and best practices</li>
                <li>Product development updates including INKINGI</li>
                <li>Exclusive opportunities and announcements</li>
                <li>Tips for building scalable digital systems</li>
              </ul>
              <p>Stay tuned for valuable content on engineering excellence!</p>
              <a href="https://altavision.com" class="button">Visit Our Website</a>
              <p>Have a project in mind? <a href="https://altavision.com#contact">Get in touch with us</a>!</p>
            </div>
            <div class="footer">
              <p>Alta Vision | Global reach, Africa-based</p>
              <p>Email: info@altavision.com</p>
              <p>&copy; ${new Date().getFullYear()} Alta Vision. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, message: "Successfully subscribed to newsletter!" });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
  }
}
