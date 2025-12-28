"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Card,
  Button,
  Input,
  Textarea,
} from "@/components/ui";
import { submitContactForm, subscribeToNewsletter } from "@/lib/actions";

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

interface NewsletterFormData {
  email: string;
}

export default function ContactPage() {
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const contactForm = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
    },
  });

  const newsletterForm = useForm<NewsletterFormData>({
    defaultValues: {
      email: "",
    },
  });

  const onContactSubmit = async (data: ContactFormData) => {
    setContactStatus("loading");
    try {
      await submitContactForm(data);
      setContactStatus("success");
      contactForm.reset();
    } catch {
      setContactStatus("error");
    }
  };

  const onNewsletterSubmit = async (data: NewsletterFormData) => {
    setNewsletterStatus("loading");
    try {
      await subscribeToNewsletter(data);
      setNewsletterStatus("success");
      newsletterForm.reset();
    } catch {
      setNewsletterStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg" pattern>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-sm mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Have questions about our programs? Interested in partnering with us?
            We&apos;d love to hear from you.
          </p>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section variant="white" size="lg">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[#2F3E4E] mb-6">
              Get in Touch
            </h2>
            <p className="text-[#5B6B7A] mb-8">
              Whether you&apos;re an exporter seeking compliance support, a
              technology provider, or interested in supporting our mission,
              we&apos;re here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2F3E4E]/10 text-[#5B6B7A] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#2F3E4E]">Email</h3>
                  <p className="text-[#5B6B7A] text-sm">info@isst.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2F3E4E]/10 text-[#5B6B7A] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#2F3E4E]">Location</h3>
                  <p className="text-[#5B6B7A] text-sm">United States</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2F3E4E]/10 text-[#5B6B7A] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#2F3E4E]">Response Time</h3>
                  <p className="text-[#5B6B7A] text-sm">
                    We aim to respond within 2 business days
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiry Types */}
            <div className="mt-10 pt-8 border-t border-[#9AA7B2]/20">
              <h3 className="font-medium text-[#2F3E4E] mb-4">
                Common Inquiries
              </h3>
              <ul className="space-y-2 text-sm text-[#5B6B7A]">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#5B6B7A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Compliance consulting requests
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#5B6B7A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Partnership opportunities
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#5B6B7A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Media and press inquiries
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#5B6B7A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Donation and funding support
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#5B6B7A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Board and advisory positions
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card padding="lg">
              <h2 className="text-xl font-semibold text-[#2F3E4E] mb-6">
                Send Us a Message
              </h2>

              {contactStatus === "success" ? (
                <div className="bg-[#4a6b5c]/10 border border-[#4a6b5c]/30 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#4a6b5c]/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-[#4a6b5c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4a6b5c] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#5B6B7A]">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                  <button
                    onClick={() => setContactStatus("idle")}
                    className="mt-4 text-[#4F6F73] hover:text-[#3d5a5e] font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={contactForm.handleSubmit(onContactSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Name *"
                      placeholder="Your full name"
                      {...contactForm.register("name", { required: true })}
                      error={contactForm.formState.errors.name ? "Name is required" : undefined}
                    />
                    <Input
                      label="Email *"
                      type="email"
                      placeholder="your@email.com"
                      {...contactForm.register("email", { required: true })}
                      error={contactForm.formState.errors.email ? "Email is required" : undefined}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Organization"
                      placeholder="Company or organization name"
                      {...contactForm.register("organization")}
                    />
                    <Input
                      label="Subject *"
                      placeholder="What is this regarding?"
                      {...contactForm.register("subject", { required: true })}
                      error={contactForm.formState.errors.subject ? "Subject is required" : undefined}
                    />
                  </div>

                  <Textarea
                    label="Message *"
                    placeholder="Tell us how we can help..."
                    rows={6}
                    {...contactForm.register("message", { required: true })}
                    error={contactForm.formState.errors.message ? "Message is required" : undefined}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    isLoading={contactStatus === "loading"}
                    className="w-full md:w-auto"
                  >
                    Send Message
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </Button>

                  {contactStatus === "error" && (
                    <p className="text-[#6b4a4a] text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section variant="primary" size="lg" pattern id="newsletter">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Stay informed on supply chain security news, research updates, and
            program announcements. We send updates monthly and respect your
            inbox.
          </p>

          {newsletterStatus === "success" ? (
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 text-white mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg font-medium text-white">You&apos;re subscribed!</span>
              </div>
              <p className="text-white/70">
                Watch your inbox for our next newsletter.
              </p>
            </div>
          ) : (
            <form
              onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white border border-white rounded-lg text-[#2F3E4E] placeholder:text-[#5B6B7A] focus:outline-none focus:ring-2 focus:ring-[#4F6F73] focus:border-transparent"
                  {...newsletterForm.register("email", { required: true })}
                />
              </div>
              <Button
                type="submit"
                isLoading={newsletterStatus === "loading"}
                className="whitespace-nowrap bg-[#4F6F73] text-white hover:bg-[#5d8285]"
              >
                Subscribe
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Button>
            </form>
          )}

          <p className="text-white/50 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>

      {/* Support Section */}
      <Section variant="secondary" size="md">
        <SectionHeader>
          <SectionTitle className="text-[#2F3E4E]">Support Our Mission</SectionTitle>
          <SectionDescription>
            ISST is a 501(c)(3) nonprofit organization. Your support helps us
            expand our programs and reach more businesses.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card padding="md" className="text-center">
            <div className="w-12 h-12 rounded-xl bg-[#2F3E4E]/10 text-[#5B6B7A] flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[#2F3E4E] mb-2">Donate</h3>
            <p className="text-sm text-[#5B6B7A]">
              Tax-deductible contributions fund our programs and research.
            </p>
          </Card>

          <Card padding="md" className="text-center">
            <div className="w-12 h-12 rounded-xl bg-[#2F3E4E]/10 text-[#5B6B7A] flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[#2F3E4E] mb-2">Partner</h3>
            <p className="text-sm text-[#5B6B7A]">
              Corporate partnerships and sponsorships amplify our impact.
            </p>
          </Card>

          <Card padding="md" className="text-center">
            <div className="w-12 h-12 rounded-xl bg-[#2F3E4E]/10 text-[#5B6B7A] flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[#2F3E4E] mb-2">Spread the Word</h3>
            <p className="text-sm text-[#5B6B7A]">
              Share our mission with your network and industry contacts.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
