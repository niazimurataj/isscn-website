"use client";

import { useState } from "react";
import { Section, Button } from "@/components/ui";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In production, this would call your newsletter API
    setStatus("success");
    setEmail("");
  };

  return (
    <Section variant="primary" size="lg" pattern>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm mb-4">
          Stay Informed on Supply Chain Security
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Subscribe to our newsletter for the latest research, industry insights,
          and updates on our programs. Join the community working to secure
          global trade.
        </p>

        {status === "success" ? (
          <div className="bg-white/10 border border-white/20 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3 text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg font-medium">Thank you for subscribing!</span>
            </div>
            <p className="text-white/70 mt-2">
              You&apos;ll receive our next newsletter in your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-white rounded-lg text-[#2F3E4E] placeholder:text-[#5B6B7A] focus:outline-none focus:ring-2 focus:ring-[#4F6F73] focus:border-transparent"
              />
            </div>
            <Button type="submit" isLoading={status === "loading"} className="whitespace-nowrap bg-[#4F6F73] text-white hover:bg-[#5d8285]">
              Subscribe
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Button>
          </form>
        )}

        <p className="text-white/50 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </Section>
  );
}
