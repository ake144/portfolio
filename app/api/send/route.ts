import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email template as HTML
const getEmailTemplate = (name: string, userEmail: string, company: string, message: string) => `
  <div>
    <h1>New message from your portfolio site</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${userEmail}</p>
    <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  </div>
`;

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    console.log('Sending email from:', email);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name} - ${company ? company : 'New Message'}`,
      html: getEmailTemplate(name, email, company, message),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
  }
}