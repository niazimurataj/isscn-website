import Link from "next/link";
import Image from "next/image";
import { Section, Button, Badge } from "@/components/ui";

export function FeaturedReport() {
  return (
    <Section variant="white" size="lg">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <Badge variant="primary" className="mb-4">
            Featured Publication
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E4E] mb-4">
            ISST Annual Report 2025
          </h2>
          <p className="text-lg text-[#5B6B7A] mb-6 leading-relaxed">
            Our inaugural annual report examines the state of supply chain
            security in Latin American exports and the growing threat of
            narcotics contamination. Key findings include analysis of smuggling
            trends, case studies of successful security implementations, and
            actionable recommendations for industry stakeholders.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Analysis of $84B+ annual cocaine trade through supply chains",
              "Security adoption rates across Latin American exporters",
              "Emerging technology solutions and their effectiveness",
              "Policy recommendations for public-private collaboration",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#5B6B7A] mt-0.5 flex-shrink-0"
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
                <span className="text-[#5B6B7A]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link href="/reports/annual-report-2025">
              <Button>
                Read the Report
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
            <Link href="/reports">
              <Button variant="ghost">View All Publications</Button>
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
            <Image
              src="/images/report-cover.jpg"
              alt="Business report and analysis"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#2F3E4E]/85 p-8 flex flex-col justify-between">
              {/* Report Cover Design */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 relative bg-white rounded-full p-1">
                    <Image
                      src="/SVG/Asset 4.svg"
                      alt="ISST Seal"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white font-semibold">ISST</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Annual Report
                </h3>
                <p className="text-[#9AA7B2] text-lg">
                  The State of Supply Chain Security in Latin American Exports
                </p>
              </div>

              <div className="flex items-end justify-between">
                <span className="text-5xl font-bold text-[#9AA7B2]">2025</span>
                <div className="text-right">
                  <div className="text-[#5B6B7A] text-sm">Published</div>
                  <div className="text-white">June 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
