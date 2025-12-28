import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ISST privacy policy - how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Section variant="primary" size="md" pattern>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#9AA7B2]">Last updated: January 2025</p>
        </div>
      </Section>

      <Section variant="white" size="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Introduction</h2>
          <p className="text-[#5B6B7A] mb-4">
            The Institute for Shipping Security and Technology (&quot;ISST,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Information We Collect</h2>
          <p className="text-[#5B6B7A] mb-4">We may collect information about you in various ways:</p>
          <ul className="list-disc list-inside text-[#5B6B7A] mb-4 space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, organization name, and other contact information you provide when filling out forms</li>
            <li><strong>Usage Data:</strong> Information about how you access and use our website</li>
            <li><strong>Communications:</strong> Records of correspondence if you contact us</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-[#5B6B7A] mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside text-[#5B6B7A] mb-4 space-y-2">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send newsletters and updates you&apos;ve subscribed to</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Information Sharing</h2>
          <p className="text-[#5B6B7A] mb-4">
            We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share information with trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Data Security</h2>
          <p className="text-[#5B6B7A] mb-4">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Your Rights</h2>
          <p className="text-[#5B6B7A] mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-[#5B6B7A] mb-4 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Unsubscribe from our communications at any time</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Contact Us</h2>
          <p className="text-[#5B6B7A] mb-4">
            If you have questions about this Privacy Policy, please <Link href="/contact" className="text-[#4F6F73] hover:underline">contact us</Link>.
          </p>
        </div>
      </Section>
    </>
  );
}
