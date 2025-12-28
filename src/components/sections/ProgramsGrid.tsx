import Link from "next/link";
import { Section, SectionHeader, SectionTitle, SectionDescription, Card, CardTitle, CardDescription, Button } from "@/components/ui";

const programs = [
  {
    slug: "education-outreach",
    title: "Education & Outreach",
    description: "Annual reports, newsletters, and tailored outreach to high-risk industries on compliance and supply chain security.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    slug: "compliance-enablement",
    title: "Compliance Enablement",
    description: "Free consulting to help firms establish compliance and traceability programs with AI-assisted workflows.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    slug: "vendor-guidance",
    title: "Vendor Guidance",
    description: "Vendor-neutral evaluation and guidance on security and traceability technologies.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    slug: "traceability-platform",
    title: "Traceability Platform",
    description: "Opt-in blockchain-backed registry for supply chain traceability and auditability.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    slug: "access-affordability",
    title: "Access & Affordability",
    description: "Funding pathways and micro-grants to make supply chain security accessible to all businesses.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function ProgramsGrid() {
  return (
    <Section variant="secondary" size="lg">
      <SectionHeader>
        <SectionTitle className="text-[#2F3E4E]">Our Programs</SectionTitle>
        <SectionDescription>
          Five integrated programs designed to strengthen supply chain security
          at every level, from education to implementation.
        </SectionDescription>
      </SectionHeader>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <Link key={program.slug} href={`/programs/${program.slug}`}>
            <Card hover className="h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#2F3E4E]/10 text-[#5B6B7A] mb-5">
                {program.icon}
              </div>
              <CardTitle className="mb-3">{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
              <div className="mt-4 flex items-center text-[#2F3E4E] font-medium text-sm group">
                Learn more
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/programs">
          <Button variant="secondary" size="lg">
            View All Programs
          </Button>
        </Link>
      </div>
    </Section>
  );
}
