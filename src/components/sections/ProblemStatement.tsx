import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui";

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Criminal Exploitation",
    description: "Drug cartels systematically target legitimate supply chains, contaminating shipments from honest businesses to move narcotics across borders.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Legal & Financial Risk",
    description: "When contraband is discovered, businesses face criminal liability, seized goods, suspended operations, and devastating reputational damage.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Resource Gap",
    description: "Small and medium exporters lack the expertise and capital to implement effective security measures, leaving them vulnerable to exploitation.",
  },
];

export function ProblemStatement() {
  return (
    <Section variant="white" size="lg">
      <SectionHeader>
        <SectionTitle className="text-[#2F3E4E]">
          The Supply Chain Security Crisis
        </SectionTitle>
        <SectionDescription>
          Criminal organizations have turned legitimate trade into a weapon, exploiting
          hardworking businesses to fuel the global narcotics epidemic.
        </SectionDescription>
      </SectionHeader>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {problems.map((problem, index) => (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2F3E4E]/10 text-[#5B6B7A] mb-6">
              {problem.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#2F3E4E] mb-3">
              {problem.title}
            </h3>
            <p className="text-[#5B6B7A] leading-relaxed">
              {problem.description}
            </p>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="mt-16 p-8 bg-[#2F3E4E] rounded-2xl text-center">
        <p className="text-xl lg:text-2xl text-white font-medium mb-2">
          &ldquo;Honest businesses deserve protection. Criminals deserve obstacles.&rdquo;
        </p>
        <p className="text-[#9AA7B2]">
          Our programs create both.
        </p>
      </div>
    </Section>
  );
}
