// // src/app/api/contact/route.ts
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request: Request) {
//   try {
//     const { name, email, message } = await request.json();

//     // Validate input
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: 'All fields are required' },
//         { status: 400 }
//       );
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: 'Invalid email format' },
//         { status: 400 }
//       );
//     }

//     // Create transporter with your email service
//     // For Gmail:
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER, // Your Gmail address
//         pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
//       },
//     });

//     // Alternative: For other email services (e.g., SendGrid, Mailgun, etc.)
//     // const transporter = nodemailer.createTransport({
//     //   host: process.env.SMTP_HOST,
//     //   port: parseInt(process.env.SMTP_PORT || '587'),
//     //   secure: false,
//     //   auth: {
//     //     user: process.env.SMTP_USER,
//     //     pass: process.env.SMTP_PASSWORD,
//     //   },
//     // });

//     // Email to yourself (you receive the contact form submission)
//     const mailOptionsToYou = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER, // Your email where you want to receive messages
//       subject: `New Contact Form Message from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
//           <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
//             <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
//           </div>
//           <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//             <div style="margin-bottom: 20px;">
//               <p style="margin: 0; color: #666; font-size: 14px;">From:</p>
//               <p style="margin: 5px 0; color: #333; font-size: 16px; font-weight: bold;">${name}</p>
//             </div>
//             <div style="margin-bottom: 20px;">
//               <p style="margin: 0; color: #666; font-size: 14px;">Email:</p>
//               <p style="margin: 5px 0; color: #333; font-size: 16px;">
//                 <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
//               </p>
//             </div>
//             <div style="margin-bottom: 20px;">
//               <p style="margin: 0; color: #666; font-size: 14px;">Message:</p>
//               <div style="margin-top: 10px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #667eea; border-radius: 4px;">
//                 <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6;">${message}</p>
//               </div>
//             </div>
//             <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
//             <p style="margin: 0; color: #999; font-size: 12px; text-align: center;">
//               This message was sent from your portfolio contact form
//             </p>
//           </div>
//         </div>
//       `,
//     };

//     // Auto-reply email to the sender
//     const mailOptionsToSender = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Thank you for contacting me!',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
//           <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
//             <h2 style="color: white; margin: 0;">Thank You for Reaching Out!</h2>
//           </div>
//           <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//             <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
//             <p style="color: #333; font-size: 16px; line-height: 1.6;">
//               Thank you for contacting me! I've received your message and will get back to you as soon as possible.
//             </p>
//             <div style="margin: 25px 0; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #667eea; border-radius: 4px;">
//               <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; font-weight: bold;">Your Message:</p>
//               <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6;">${message}</p>
//             </div>
//             <p style="color: #333; font-size: 16px; line-height: 1.6;">
//               Best regards,<br>
//               <strong>Sabeeh Hassan Farooqui</strong>
//             </p>
//             <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
//             <p style="margin: 0; color: #999; font-size: 12px; text-align: center;">
//               This is an automated response. Please do not reply to this email.
//             </p>
//           </div>
//         </div>
//       `,
//     };

//     // Send both emails
//     await transporter.sendMail(mailOptionsToYou);
//     await transporter.sendMail(mailOptionsToSender);

//     return NextResponse.json(
//       { message: 'Email sent successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { error: 'Failed to send email' },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email to yourself
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // Send auto-reply to sender
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your message. I'll get back to you as soon as possible.</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Best regards,<br>Sabeeh Hassan Farooqui</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}