import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Button,
} from "@/components/ui";
import { Waves } from "@/components/reactbits";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Five integrated programs to strengthen supply chain security: education, compliance enablement, vendor guidance, traceability, and affordability.",
};

const programs = [
  {
    slug: "education-outreach",
    title: "Industry Education & Outreach",
    description:
      "Annual reports, newsletters, and tailored outreach to high-risk industries on compliance and supply chain security.",
    longDescription:
      "Our flagship education program provides free, accessible resources to help businesses understand and address supply chain security challenges. We publish comprehensive annual reports, regular newsletters, and conduct targeted outreach to industries at highest risk.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    color: "bg-[#2F3E4E]/10 text-[#5B6B7A]",
    allocation: "45-55%",
  },
  {
    slug: "compliance-enablement",
    title: "Pro Bono Compliance Enablement",
    description:
      "Free consulting to help firms establish compliance and traceability programs with AI-assisted workflows.",
    longDescription:
      "We provide free compliance consulting to help businesses establish robust security and traceability programs. Our technology-enabled approach includes risk assessments, action plan generation, expert consultation, and ongoing support.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    color: "bg-[#4F6F73]/10 text-[#4F6F73]",
    allocation: "25-35%",
  },
  {
    slug: "vendor-guidance",
    title: "Vetted Vendor Guidance",
    description:
      "Vendor-neutral evaluation and guidance on security and traceability technologies.",
    longDescription:
      "Navigating the landscape of security technology providers can be overwhelming. Our vendor guidance program provides unbiased evaluations based on effectiveness, reliability, affordability, and compliance alignment.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    color: "bg-[#5B6B7A]/10 text-[#5B6B7A]",
    allocation: "5-10%",
  },
  {
    slug: "traceability-platform",
    title: "Traceability & Transparency Platform",
    description:
      "Opt-in blockchain-backed registry for supply chain traceability and auditability.",
    longDescription:
      "Our opt-in traceability platform enables businesses to demonstrate their commitment to supply chain security through verifiable, tamper-proof records. Participants can commit supply chain data with privacy controls and permissioned access.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
    color: "bg-[#9AA7B2]/20 text-[#5B6B7A]",
    allocation: "10-20%",
  },
  {
    slug: "access-affordability",
    title: "Access & Affordability",
    description:
      "Funding pathways and micro-grants to make supply chain security accessible to all businesses.",
    longDescription:
      "Security shouldn't be a privilege of large corporations. We help businesses identify grants, provide micro-grants when funding allows, and negotiate discounted rates with technology vendors.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "bg-[#2F3E4E]/10 text-[#5B6B7A]",
    allocation: "5-10%",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg" className="relative overflow-hidden">
        <Waves
          lineColor="rgba(255, 255, 255, 0.15)"
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.005}
          waveAmpX={40}
          waveAmpY={20}
          xGap={12}
          yGap={36}
        />
        <div className="max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-sm mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Five integrated programs designed to strengthen supply chain
            security at every level, from education to implementation.
          </p>
        </div>
      </Section>

      {/* Programs List */}
      <Section variant="white" size="lg">
        <div className="space-y-12">
          {programs.map((program, index) => (
            <div
              key={program.slug}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${program.color} mb-6`}
                >
                  {program.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2F3E4E] mb-4">
                  {program.title}
                </h2>
                <p className="text-lg text-[#5B6B7A] mb-4 leading-relaxed">
                  {program.longDescription}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm text-[#9AA7B2]">
                    Year 1 Time Allocation:
                  </span>
                  <span className="px-3 py-1 bg-[#2F3E4E]/10 text-[#2F3E4E] rounded-full text-sm font-medium">
                    {program.allocation}
                  </span>
                </div>
                <Link href={`/programs/${program.slug}`}>
                  <Button>
                    Learn More
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </div>
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-1" : ""
                } aspect-video rounded-2xl overflow-hidden relative`}
              >
                <Image
                  src="/images/supply-chain.jpg"
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                {/* Subtle gradient overlay for depth - no white box */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E4E]/70 via-[#2F3E4E]/30 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How Programs Work Together */}
      <Section variant="secondary" size="lg">
        <SectionHeader>
          <SectionTitle className="text-[#2F3E4E]">
            How Our Programs Work Together
          </SectionTitle>
          <SectionDescription>
            Our programs are designed to support businesses at every stage of
            their security journey.
          </SectionDescription>
        </SectionHeader>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#9AA7B2]/30 hidden md:block" />

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Learn",
                  description:
                    "Start with our educational resources to understand supply chain security risks and best practices.",
                  program: "Education & Outreach",
                },
                {
                  step: "2",
                  title: "Assess",
                  description:
                    "Work with our compliance team to evaluate your current security posture and identify gaps.",
                  program: "Compliance Enablement",
                },
                {
                  step: "3",
                  title: "Select",
                  description:
                    "Use our vendor guidance to choose the right technology solutions for your needs.",
                  program: "Vendor Guidance",
                },
                {
                  step: "4",
                  title: "Fund",
                  description:
                    "Access grants, micro-grants, and discounted rates to make implementation affordable.",
                  program: "Access & Affordability",
                },
                {
                  step: "5",
                  title: "Demonstrate",
                  description:
                    "Join our traceability platform to prove your commitment to security and build trust.",
                  program: "Traceability Platform",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#2F3E4E] text-white flex items-center justify-center text-xl font-bold flex-shrink-0 relative z-10">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-[#2F3E4E] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#5B6B7A] mb-2">{item.description}</p>
                    <span className="text-sm text-[#4F6F73] font-medium">
                      {item.program}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary" size="md" pattern>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm mb-4">
            Ready to Strengthen Your Supply Chain?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us to learn how our programs can help protect your business
            from supply chain contamination.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#4F6F73] text-white hover:bg-[#5d8285]">Get Started Today</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
