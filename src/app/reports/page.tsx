import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getReports } from "@/lib/content";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Card,
  Badge,
  Button,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Reports & Publications",
  description:
    "Research reports, annual publications, and policy briefs from ISST on supply chain security.",
};

export default function ReportsPage() {
  const reports = getReports();
  const featuredReport = reports.find((r) => r.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg" pattern>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Reports & Publications
          </h1>
          <p className="text-xl text-[#9AA7B2] leading-relaxed">
            Research, analysis, and insights on supply chain security,
            technology, and industry best practices.
          </p>
        </div>
      </Section>

      {/* Featured Report */}
      {featuredReport && (
        <Section variant="white" size="lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge variant="primary" className="mb-4">
                Featured Publication
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E4E] mb-4">
                {featuredReport.title}
              </h2>
              <p className="text-[#9AA7B2] mb-4">
                Published {formatDate(featuredReport.date)}
              </p>
              <p className="text-lg text-[#5B6B7A] mb-8 leading-relaxed">
                {featuredReport.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href={`/reports/${featuredReport.slug}`}>
                  <Button>
                    Read Report
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
                {featuredReport.pdfUrl && (
                  <a href={featuredReport.pdfUrl} download>
                    <Button variant="outline">
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
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download PDF
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/5] bg-[#2F3E4E] rounded-2xl p-8 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/SVG/Asset 4.svg"
                        alt="ISST Seal"
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                    <span className="text-white font-semibold">ISST</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    Annual Report
                  </h3>
                  <p className="text-[#9AA7B2]">
                    The State of Supply Chain Security in Latin American Exports
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <span className="text-5xl font-bold text-[#9AA7B2]">2025</span>
                  <div className="text-right">
                    <div className="text-[#5B6B7A] text-sm">Published</div>
                    <div className="text-white">{formatDate(featuredReport.date)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* All Reports */}
      <Section variant="secondary" size="lg">
        <SectionHeader>
          <SectionTitle className="text-[#2F3E4E]">All Publications</SectionTitle>
          <SectionDescription>
            Browse our complete library of research and reports.
          </SectionDescription>
        </SectionHeader>

        {reports.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <Link key={report.slug} href={`/reports/${report.slug}`}>
                <Card hover className="h-full">
                  <div className="aspect-[3/4] bg-[#2F3E4E] rounded-lg flex flex-col justify-between p-6 mb-4">
                    <div className="w-8 h-8 rounded bg-[#5B6B7A] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#9AA7B2] text-sm mb-1">ISST Report</p>
                      <p className="text-white font-semibold line-clamp-2">
                        {report.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {report.featured && <Badge variant="primary">Featured</Badge>}
                    <span className="text-sm text-[#9AA7B2]">
                      {formatDate(report.date)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#2F3E4E] mb-2">
                    {report.title}
                  </h3>
                  <p className="text-sm text-[#5B6B7A] line-clamp-2">
                    {report.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-[#9AA7B2] mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-[#2F3E4E] mb-2">
              No reports yet
            </h2>
            <p className="text-[#5B6B7A]">
              Our first annual report is coming soon.
            </p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <Section variant="primary" size="md" pattern>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Informed
          </h2>
          <p className="text-lg text-[#9AA7B2] mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive new reports and research
            directly in your inbox.
          </p>
          <Link href="/contact#newsletter">
            <Button size="lg" className="bg-white text-[#2F3E4E] hover:bg-[#9AA7B2]">Subscribe to Updates</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
