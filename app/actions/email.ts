"use server"
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
  const { name, email, message } = formData

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" }
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'atharvaludbe2@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    })

    if (!data.data?.id) {
      throw new Error(data.error?.message || "Unknown email delivery error")
    }

    return { success: true }
  } catch (error: any) {
    console.error("Resend error:", error)
    return { success: false, error: error.message || "Failed to send email" }
  }
}
