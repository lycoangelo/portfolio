import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface ParamsProps {
  params: {
    params: string[];
  };
}

export async function POST(request: Request, { params }: ParamsProps) {
  try {
    const [email, subject, name, message] = params.params;

    const transportOptions: SMTPTransport.Options = {
      host: process.env.TRANSPORTER_HOST,
      port: Number(process.env.TRANSPORTER_PORT),
      secure: true,
      auth: {
        user: process.env.TRANSPORTER_EMAIL,
        pass: process.env.TRANSPORTER_PASSWORD
      }
    };

    const transporter = nodemailer.createTransport(transportOptions);

    const mailOptions = {
      from: email,
      to: process.env.TRANSPORTER_EMAIL,
      subject,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message.replaceAll('<question-mark>', '?')}
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email successfully sent!' });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong!' });
  }
}
