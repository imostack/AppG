// Simple email backup option using Resend (free tier)
// Install: npm install resend
// Get API key from: https://resend.com

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWaitlistEmail(data: {
  email: string
  name: string
  businessName?: string
  timestamp: string
}) {
  try {
    await resend.emails.send({
      from: 'AccessRA Waitlist <noreply@appguts.com>',
      to: ['hello@appguts.com'], 
      subject: '🎉 New AccessRA Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Business:</strong> ${data.businessName || 'Not provided'}</p>
        <p><strong>Date:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
        <hr />
        <p><em>Via AccessRA Waitlist Form</em></p>
      `,
    })
  } catch (error) {
    console.error('Failed to send email notification:', error)
    // Don't throw - this is just a backup
  }
}

// Alternative: Use Nodemailer with Gmail (no external service needed)
/*
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
  },
})

export async function sendWaitlistEmail(data: {
  email: string
  name: string
  businessName?: string
  timestamp: string
}) {
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'hello@appguts.com',
      subject: '🎉 New AccessRA Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Business:</strong> ${data.businessName || 'Not provided'}</p>
        <p><strong>Date:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
      `,
    })
  } catch (error) {
    console.error('Failed to send email notification:', error)
  }
}
*/
