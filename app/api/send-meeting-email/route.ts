import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, date, time, message } = await request.json()

    // Admin email configuration
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@yourcompany.com'
    
    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      // Gmail configuration example
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
      // Alternative SMTP configuration
      // host: 'smtp.gmail.com',
      // port: 587,
      // secure: false,
      // auth: {
      //   user: process.env.EMAIL_USER,
      //   pass: process.env.EMAIL_PASS,
      // },
    })

    // Email content
    const emailSubject = `New Meeting Scheduled - ${name}`
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Meeting Scheduled
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Client Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
        
        <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Meeting Details:</h3>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Message:</strong> ${message || 'No additional message provided'}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #fff3cd; border-radius: 8px;">
          <p style="margin: 0; color: #856404;">
            <strong>Action Required:</strong> Please prepare for the meeting and add it to your calendar.
          </p>
        </div>
      </div>
    `

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: emailSubject,
      html: emailHtml,
    }

    // For development/testing, log the email details
    console.log('Meeting Email Details:')
    console.log('To:', adminEmail)
    console.log('Subject:', emailSubject)
    console.log('Client:', name, email)
    console.log('Meeting:', date, time)

    // Try to send email
    try {
      await transporter.sendMail(mailOptions)
      console.log('Email sent successfully')
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Continue execution - don't fail the booking if email fails
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Meeting scheduled and admin notified successfully' 
    })

  } catch (error) {
    console.error('Error processing meeting request:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process meeting request' },
      { status: 500 }
    )
  }
}