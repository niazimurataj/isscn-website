import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Card,
  Button,
  ProfileCard,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the board members, advisors, and team behind ISST's mission to secure global supply chains.",
};

const boardMembers = [
  {
    name: "Niazi Murataj",
    role: "Founder & President",
    background: ["Ex-McKinsey Consultant", "Microsoft AI & Cloud Strategist"],
    bio: "Yazi brings extensive experience in deploying production systems to achieve compliance outcomes. His family business was directly impacted by supply chain contamination.",
    avatarUrl: "/profile-pictures/niazi-murataj.jpg",
    valueToMission: [
      "Strategic consulting and technology deployment expertise",
      "First-hand experience with supply chain contamination impacts",
      "Product leadership and vision",
    ],
  },
  {
    name: "Trifon Murataj",
    role: "Board Member",
    background: [
      "Business Owner/Operator",
      "Supply Chain Compliance Expert",
    ],
    bio: "Trifon developed effective supply-chain monitoring, compliance, and traceability practices through years of hands-on experience operating a business with robust security protocols.",
    avatarUrl: "/profile-pictures/trifon-murataj.jpg",
    valueToMission: [
      "Operational credibility for Latin America exporter/importer workflows",
      "Practical compliance and monitoring expertise",
      "Industry relationships and insights",
    ],
  },
  {
    name: "Akshay Hanumegowda",
    role: "Chief Engineer",
    background: ["Electrical Engineer", "Former NSF Innovation Corps (I-Corps)"],
    bio: "Akshay specializes in productionalizing research technology for industry use. His expertise spans hardware, firmware, and communications systems for traceability.",
    avatarUrl: "/profile-pictures/akshay-hanumegowda.jpg",
    valueToMission: [
      "Hardware/firmware development for container security",
      "Sensor fusion and embedded ML systems",
      "Field data to dashboard integration",
    ],
  },
];

const advisors = [
  {
    name: "T3 Holt",
    title: "Port Operations Advisor",
    background: "Port of Philadelphia",
    relevance:
      "Brings port operations expertise and contextual experience with major container security incidents.",
    status: "Prospective",
    avatarUrl: "/profile-pictures/t3-holt.jpg",
  },
  {
    name: "José Antonio Hidalgo",
    title: "Industry Relations Advisor",
    background: "Ecuadorian Banana Exporters Association (AEBE)",
    relevance:
      "Executive Director of AEBE and Co-President of the World Banana Forum. Provides industry compliance expertise and exporter network access for the Ecuador banana sector.",
    status: "Prospective",
    avatarUrl: "/profile-pictures/jose-antonio-hidalgo.jpg",
  },
  {
    name: "Ed Moriarty",
    title: "Regulatory & Enforcement Advisor",
    background: "Former CBP",
    relevance:
      "Offers regulatory and enforcement lens with credibility for counter-narcotics and trade compliance.",
    status: "Prospective",
    avatarUrl: "/profile-pictures/ed-moriarty.jpg",
  },
];

const seekingProfiles = [
  "Former CBP / customs enforcement experts",
  "CTPAT/BASC community leaders or experienced consultants",
  "Port security or maritime logistics compliance leaders",
  "University-affiliated research advisors",
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg" pattern>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-sm mb-6">
            Our Team
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Meet the dedicated professionals working to secure global supply
            chains and combat narcotics trafficking.
          </p>
        </div>
      </Section>

      {/* Board Members */}
      <Section variant="white" size="lg">
        <SectionHeader>
          <SectionTitle className="text-[#2F3E4E]">Board of Directors</SectionTitle>
          <SectionDescription>
            Our board brings together expertise in technology, operations, and
            supply chain security.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {boardMembers.map((member) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              title={member.role}
              avatarUrl={member.avatarUrl}
              background={member.background}
              bio={member.bio}
              enableTilt={true}
            />
          ))}
        </div>

        {/* Value to Mission Details */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <Card key={`${member.name}-details`} padding="md" className="h-full">
              <h4 className="text-lg font-semibold text-[#2F3E4E] mb-3">
                {member.name.split(" ")[0]}&apos;s Contributions
              </h4>
              <ul className="space-y-2">
                {member.valueToMission.map((value, index) => (
                  <li
                    key={index}
                    className="text-sm text-[#5B6B7A] flex items-start gap-2"
                  >
                    <svg
                      className="w-4 h-4 text-[#4F6F73] mt-0.5 flex-shrink-0"
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
                    {value}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Advisors */}
      <Section variant="secondary" size="lg">
        <SectionHeader>
          <SectionTitle className="text-[#2F3E4E]">
            Advisors & Partners
          </SectionTitle>
          <SectionDescription>
            Industry experts providing guidance and strategic direction.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="flex flex-col items-center">
              <ProfileCard
                name={advisor.name}
                title={advisor.title}
                avatarUrl={advisor.avatarUrl}
                background={[advisor.background]}
                bio={advisor.relevance}
                enableTilt={true}
              />
              {advisor.status === "Prospective" && (
                <span className="mt-3 px-3 py-1 bg-[#4F6F73]/20 text-[#4F6F73] text-sm rounded-full font-medium">
                  Prospective Advisor
                </span>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* We're Hiring / Seeking */}
      <Section variant="white" size="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#2F3E4E] mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-[#5B6B7A] mb-6">
              We&apos;re building a team of dedicated professionals passionate
              about supply chain security and counter-narcotics. As we grow,
              we&apos;re seeking advisors and staff with expertise in:
            </p>
            <ul className="space-y-3 mb-8">
              {seekingProfiles.map((profile, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#4F6F73] mt-0.5 flex-shrink-0"
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
                  <span className="text-[#5B6B7A]">{profile}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button>
                Get in Touch
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
          <div className="rounded-2xl overflow-hidden relative aspect-video">
            <Image
              src="/images/team-meeting.jpg"
              alt="Professional team collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#2F3E4E]/60 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Positions Opening Soon
                </h3>
                <p className="text-white/80">
                  As we secure funding, we&apos;ll be hiring full-time staff to
                  expand our programs and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Governance */}
      <Section variant="secondary" size="md">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2F3E4E] mb-4">
            Governance & Ethics
          </h2>
          <p className="text-[#5B6B7A] mb-6">
            ISST maintains the highest standards of governance with clear
            conflicts-of-interest policies, board recusals for related-party
            decisions, and grant-compliant procurement practices. Our commitment
            to transparency extends to our own operations.
          </p>
          <Link href="/about">
            <Button variant="outline">Learn About Our Structure</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
