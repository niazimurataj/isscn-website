import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Button,
  Card,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ISST's mission to make borders and societies safer through technology-enabled supply chain security.",
};

const timeline = [
  {
    phase: "Month 0-1",
    title: "Foundation",
    items: [
      "Begin incorporation",
      "501(c)(3) filing process",
      "Recruit initial board",
    ],
  },
  {
    phase: "Month 3-6",
    title: "Launch",
    items: [
      "Outreach to Ecuadorian exporters",
      "Deploy compliance workflow v1",
      "Publish first annual report",
    ],
  },
  {
    phase: "Month 6-12",
    title: "Growth",
    items: [
      "Apply for federal grants",
      "Hire full-time staff",
      "Expand exporter network",
    ],
  },
  {
    phase: "Month 12-24",
    title: "Scale",
    items: [
      "Launch membership program",
      "Issue certifications",
      "BASC/CTPAT alignment",
    ],
  },
];

const values = [
  {
    title: "Mission-Driven",
    description:
      "Every decision we make is guided by our commitment to making borders and societies safer.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "We practice what we preach, maintaining open governance and clear conflicts-of-interest policies.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description:
      "Security shouldn't be a privilege. We work to make protection accessible to businesses of all sizes.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description:
      "Complex problems require diverse perspectives. We partner across sectors to drive real change.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="primary" size="lg" pattern>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About ISST
          </h1>
          <p className="text-xl text-[#9AA7B2] leading-relaxed">
            The Institute for Shipping Security and Technology is a
            nonprofit organization dedicated to making borders and societies
            safer by empowering businesses to strengthen their supply chain
            security through technology.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section variant="white" size="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E4E] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-[#5B6B7A] leading-relaxed mb-6">
              Make borders and societies safer by empowering businesses to cut
              off the arteries of the global narcotics trade and strengthen the
              security of their supply chains through technology.
            </p>
            <p className="text-lg text-[#5B6B7A] leading-relaxed mb-6">
              We focus primarily on counter-narcotics and container/shipping
              security, with broader benefits to general supply-chain safety.
              Our work improves supply-chain observability and traceability to
              reduce exploitation by criminal networks and supports authorities
              via audit-ready records and better enforcement enablement.
            </p>
            <Link href="/programs">
              <Button>
                Explore Our Programs
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
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/cargo-ship.jpg"
                alt="Cargo ship at sea representing global supply chain security"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Two-Entity Structure */}
      <Section variant="secondary" size="lg">
        <SectionHeader>
          <SectionTitle className="text-[#2F3E4E]">Our Structure</SectionTitle>
          <SectionDescription>
            A two-part structure designed for maximum mission impact and
            sustainability.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-8">
          <Card padding="lg">
            <div className="w-14 h-14 rounded-xl bg-[#2F3E4E]/10 text-[#5B6B7A] flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2F3E4E] mb-3">
              ISST (Nonprofit)
            </h3>
            <p className="text-[#5B6B7A] mb-4">
              The Institute for Shipping Security and Technology is a
              501(c)(3) nonprofit focused on education, partnerships, compliance
              enablement, and grant-funded research.
            </p>
            <ul className="space-y-2 text-sm text-[#5B6B7A]">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#5B6B7A] flex-shrink-0"
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
                Industry education and outreach
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#5B6B7A] flex-shrink-0"
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
                Pro bono compliance consulting
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#5B6B7A] flex-shrink-0"
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
                Public-interest research
              </li>
            </ul>
          </Card>

          <Card padding="lg">
            <div className="w-14 h-14 rounded-xl bg-[#4F6F73]/10 text-[#4F6F73] flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2F3E4E] mb-3">
              Project Loadguard, Inc.
            </h3>
            <p className="text-[#5B6B7A] mb-4">
              The affiliated for-profit entity holds and commercializes IP for
              container security and traceability hardware/software technology.
            </p>
            <ul className="space-y-2 text-sm text-[#5B6B7A]">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#5B6B7A] flex-shrink-0"
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
                Hardware/software product development
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#5B6B7A] flex-shrink-0"
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
                Commercial IP ownership
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#5B6B7A] flex-shrink-0"
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
                Arm&apos;s-length nonprofit support
              </li>
            </ul>
          </Card>
        </div>

        <p className="text-center text-[#9AA7B2] mt-8 text-sm">
          Strict governance guardrails ensure arm&apos;s-length relationships
          and prevent private benefit or inurement.
        </p>
      </Section>

      {/* Values */}
      <Section variant="white" size="lg">
        <SectionHeader>
          <SectionTitle className="text-[#2F3E4E]">Our Values</SectionTitle>
          <SectionDescription>
            The principles that guide everything we do.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#2F3E4E]/10 text-[#5B6B7A] mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#2F3E4E] mb-2">
                {value.title}
              </h3>
              <p className="text-[#5B6B7A] text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section variant="secondary" size="lg">
        <SectionHeader>
          <SectionTitle className="text-[#2F3E4E]">Our Roadmap</SectionTitle>
          <SectionDescription>
            Building toward a more secure global supply chain.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((phase, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 h-full">
                <div className="text-sm font-medium text-[#4F6F73] mb-2">
                  {phase.phase}
                </div>
                <h3 className="text-lg font-semibold text-[#2F3E4E] mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-[#5B6B7A]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5B6B7A] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary" size="md" pattern>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg text-[#9AA7B2] mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an exporter, technology provider, or passionate
            advocate, there&apos;s a place for you in our work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#2F3E4E] hover:bg-[#9AA7B2]">Get Involved</Button>
            </Link>
            <Link href="/team">
              <Button
                variant="outline"
                size="lg"
                className="border-[#5B6B7A] text-white hover:bg-[#5B6B7A]"
              >
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
