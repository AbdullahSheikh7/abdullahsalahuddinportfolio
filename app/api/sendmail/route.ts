import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Send all fields, i.e, name, email and message" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'abdullahwindows10user@gmail.com',
          pass: 'vcls bmin xrck sgbn'
      }
    });

    const html = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px; max-width: 600px; margin: 20px auto; border-radius: 8px; border: 1px solid #ddd;">
<h1 style="text-align: center; color: #007BFF;">New Contact Form Submission</h1>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
<p style="text-align: center; font-size: 0.9em; color: #666;">You can respond directly to this email to follow up with the user.</p>
</div>`

    const mailOptions = {
        from: 'abdullahwindows10user@gmail.com',
        to: 'contactabdullah7@gmail.com',
        subject: 'A new from a client by your portfolio',
        html
    };

    const mail = await transporter.sendMail(mailOptions)
    return NextResponse.json({ mail }, { status: 200 })
  } catch(e) {
    console.log(e)
    return NextResponse.error()
  }
}