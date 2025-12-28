"use server";

export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export async function submitContactForm(data: ContactFormData) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In production, this would:
  // 1. Validate the data
  // 2. Send to your email service (SendGrid, Resend, etc.)
  // 3. Store in database if needed
  // 4. Return appropriate response

  console.log("Contact form submission:", data);

  // For now, just return success
  return {
    success: true,
    message: "Thank you for your message. We'll be in touch soon!",
  };
}

export async function subscribeToNewsletter(data: NewsletterFormData) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In production, this would:
  // 1. Validate the email
  // 2. Add to your newsletter service (Mailchimp, ConvertKit, etc.)
  // 3. Return appropriate response

  console.log("Newsletter subscription:", data);

  // For now, just return success
  return {
    success: true,
    message: "You've been subscribed to our newsletter!",
  };
}

