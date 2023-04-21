import nodemailer from 'nodemailer';

interface ParamsProps {
  params: {
    params: string[];
  };
}

export async function POST(request: Request, { params }: ParamsProps) {
  // Send the email
  try {
    const [email, subject, name, message] = params.params;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'lycoangelo28@gmail.com',
        pass: 'cygncjixextjpnrk'
      }
    });

    // Configure the email message
    const mailOptions = {
      from: email,
      to: 'lycoangelo28@gmail.com',
      subject,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    return new Response("{ message: 'Email sent successfully' }", {
      status: 200
    });
  } catch (error: any) {
    return new Response(error.message || 'Something went wrong!', {
      status: 500
    });
  }
}
