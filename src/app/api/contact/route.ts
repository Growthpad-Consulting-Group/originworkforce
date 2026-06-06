import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper function to generate a premium HTML email template
function generateEmailTemplate({
  name,
  email,
  enquiryType,
  message,
}: {
  name: string;
  email: string;
  enquiryType: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Enquiry Received</title>
        <style>
          body {
            font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #F8F9FA;
            color: #1A253C;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
          .wrapper {
            width: 100%;
            background-color: #F8F9FA;
            padding: 40px 20px;
            box-sizing: border-box;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #FFFFFF;
            border: 1px solid #E5E9F0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(26, 37, 60, 0.05);
          }
          .header {
            background-color: #1A253C; /* Brand Navy */
            padding: 32px;
            text-align: center;
            border-bottom: 3px solid #D4AF37; /* Brand Gold */
          }
          .header h1 {
            color: #FFFFFF;
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          .header p {
            color: #D4AF37;
            margin: 8px 0 0 0;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.2em;
            text-transform: uppercase;
          }
          .content {
            padding: 40px 32px;
          }
          .intro {
            font-size: 16px;
            line-height: 1.6;
            margin-top: 0;
            margin-bottom: 24px;
            color: #4A5568;
          }
          .meta-box {
            background-color: #F3F4F6;
            border-left: 4px solid #D4AF37;
            padding: 20px;
            border-radius: 4px;
            margin-bottom: 28px;
          }
          .meta-item {
            margin-bottom: 12px;
            font-size: 14px;
          }
          .meta-item:last-child {
            margin-bottom: 0;
          }
          .meta-label {
            font-weight: 700;
            color: #1A253C;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.05em;
            display: inline-block;
            width: 120px;
          }
          .meta-value {
            color: #2D3748;
          }
          .tag {
            background-color: #1A253C;
            color: #D4AF37;
            padding: 4px 10px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 600;
            display: inline-block;
          }
          .message-box {
            background-color: #FFFFFF;
            border: 1px solid #E5E9F0;
            border-radius: 8px;
            padding: 24px;
            margin-top: 8px;
          }
          .message-title {
            font-size: 13px;
            font-weight: 700;
            color: #1A253C;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 12px;
          }
          .message-body {
            font-size: 15px;
            line-height: 1.6;
            color: #2D3748;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #F8F9FA;
            padding: 24px 32px;
            text-align: center;
            border-top: 1px solid #E5E9F0;
            font-size: 12px;
            color: #A0AEC0;
          }
          .footer a {
            color: #1A253C;
            text-decoration: none;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <h1>Origin Workforce</h1>
              <p>New Inquiry Submitted</p>
            </div>
            <div class="content">
              <p class="intro">Hello Team,</p>
              <p class="intro">A new inquiry has been submitted via the contact form on the website. Here are the details:</p>
              
              <div class="meta-box">
                <div class="meta-item">
                  <span class="meta-label">Full Name:</span>
                  <span class="meta-value">${name}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Email:</span>
                  <span class="meta-value">
                    <a href="mailto:${email}" style="color: #1A253C; text-decoration: underline;">${email}</a>
                  </span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Enquiry Type:</span>
                  <span class="tag">${enquiryType}</span>
                </div>
              </div>
              
              <div class="message-title">Message Details</div>
              <div class="message-box">
                <div class="message-body">${message}</div>
              </div>
            </div>
            <div class="footer">
              This email was automatically generated by <a href="https://originworkforce.africa">originworkforce.africa</a>.
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    const { name, email, enquiryType, message, recaptchaToken } = await request.json();

    // Basic Validation
    if (!name || !email || !enquiryType || !message) {
      return NextResponse.json(
        { error: "All fields are required. Please fill in the entire form." },
        { status: 400 }
      );
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA verification is required. Please check the checkbox." },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error("Missing RECAPTCHA_SECRET_KEY environment variable.");
      return NextResponse.json(
        { error: "Server reCAPTCHA configuration error. Please contact the administrator." },
        { status: 500 }
      );
    }

    try {
      const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`,
      });

      const verifyData = await verifyResponse.json();

      if (!verifyData.success) {
        console.warn("reCAPTCHA validation failed:", verifyData["error-codes"]);
        return NextResponse.json(
          { error: "reCAPTCHA verification failed. Please try again." },
          { status: 400 }
        );
      }
    } catch (err) {
      console.error("Error verifying reCAPTCHA token:", err);
      return NextResponse.json(
        { error: "Failed to verify reCAPTCHA. Please try again later." },
        { status: 500 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // SMTP Setup Checklist
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "hello@originworkforce.africa";

    if (!host || !port || !user || !pass) {
      console.error("Missing SMTP environment variables.");
      return NextResponse.json(
        { error: "Email configuration error. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host,
      port: parseInt(port),
      secure: port === "465", // Port 465 uses SSL/TLS directly
      auth: {
        user,
        pass,
      },
      // Ensure we time out properly if host is unreachable
      connectionTimeout: 10000, 
    });

    const htmlContent = generateEmailTemplate({ name, email, enquiryType, message });

    // Send email
    await transporter.sendMail({
      from: `"${name} via Origin Workforce" <${user}>`, // Standard practice: Send FROM verified email, set displayName to user
      to: recipient,
      replyTo: email, // Direct replies will go to the user
      subject: `[${enquiryType}] New Inquiry from ${name}`,
      text: `New Enquiry from ${name} (${email})\nEnquiry Type: ${enquiryType}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
