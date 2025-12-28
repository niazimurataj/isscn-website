import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "ISST terms of use for our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Section variant="primary" size="md" pattern>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Use
          </h1>
          <p className="text-[#9AA7B2]">Last updated: January 2025</p>
        </div>
      </Section>

      <Section variant="white" size="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-[#5B6B7A] mb-4">
            By accessing and using the website of the Institute for Shipping Security and Technology (&quot;ISST&quot;), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Use of Website</h2>
          <p className="text-[#5B6B7A] mb-4">You agree to use our website only for lawful purposes and in a way that does not:</p>
          <ul className="list-disc list-inside text-[#5B6B7A] mb-4 space-y-2">
            <li>Infringe on the rights of others</li>
            <li>Restrict or inhibit anyone else&apos;s use of the website</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to our systems</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Intellectual Property</h2>
          <p className="text-[#5B6B7A] mb-4">
            All content on this website, including text, graphics, logos, and images, is the property of ISST or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Disclaimer</h2>
          <p className="text-[#5B6B7A] mb-4">
            The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.
          </p>
          <p className="text-[#5B6B7A] mb-4">
            Our educational materials and compliance guidance are not intended as legal advice. We recommend consulting with qualified legal and compliance professionals for specific guidance related to your situation.
          </p>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-[#5B6B7A] mb-4">
            ISST shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website or our services.
          </p>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">External Links</h2>
          <p className="text-[#5B6B7A] mb-4">
            Our website may contain links to external websites. We are not responsible for the content or privacy practices of these sites. We encourage you to read the terms and privacy policies of any linked websites.
          </p>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Changes to Terms</h2>
          <p className="text-[#5B6B7A] mb-4">
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Governing Law</h2>
          <p className="text-[#5B6B7A] mb-4">
            These Terms of Use shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
          </p>

          <h2 className="text-2xl font-bold text-[#2F3E4E] mt-8 mb-4">Contact</h2>
          <p className="text-[#5B6B7A] mb-4">
            If you have questions about these Terms of Use, please <Link href="/contact" className="text-[#4F6F73] hover:underline">contact us</Link>.
          </p>
        </div>
      </Section>
    </>
  );
}
