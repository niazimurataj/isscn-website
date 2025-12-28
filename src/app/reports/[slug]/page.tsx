import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getReport, getReports } from "@/lib/content";
import { Section, Badge, Button } from "@/components/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const reports = getReports();
  return reports.map((report) => ({
    slug: report.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const report = getReport(slug);

  if (!report) {
    return {
      title: "Report Not Found",
    };
  }

  return {
    title: report.title,
    description: report.description,
  };
}

export default async function ReportPage({ params }: Props) {
  const { slug } = await params;
  const report = getReport(slug);

  if (!report) {
    notFound();
  }

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
          <Link
            href="/reports"
            className="inline-flex items-center gap-2 text-[#9AA7B2] hover:text-white mb-6 transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Reports
          </Link>

          <div className="flex items-center gap-3 mb-4">
            {report.featured && <Badge variant="secondary">Featured</Badge>}
            <span className="text-[#9AA7B2]">{formatDate(report.date)}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {report.title}
          </h1>

          <p className="text-xl text-[#9AA7B2] leading-relaxed mb-8">
            {report.description}
          </p>

          {report.pdfUrl && (
            <a href={report.pdfUrl} download>
              <Button size="lg" className="bg-white text-[#2F3E4E] hover:bg-[#9AA7B2]">
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
      </Section>

      {/* Content */}
      <Section variant="white" size="lg">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            {/* Simple markdown-like rendering */}
            {report.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1
                    key={index}
                    className="text-3xl font-bold text-[#2F3E4E] mt-10 mb-6"
                  >
                    {paragraph.replace("# ", "")}
                  </h1>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-[#2F3E4E] mt-10 mb-4"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-semibold text-[#2F3E4E] mt-8 mb-3"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-[#5B6B7A] mb-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d+\. /)) {
                const items = paragraph.split("\n").filter((line) => line.match(/^\d+\. /));
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 text-[#5B6B7A] mb-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\. /, "")}</li>
                    ))}
                  </ol>
                );
              }
              if (paragraph.startsWith("---")) {
                return <hr key={index} className="my-8 border-[#9AA7B2]/20" />;
              }
              if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
                return (
                  <p key={index} className="text-[#9AA7B2] italic text-sm">
                    {paragraph.replace(/^\*|\*$/g, "")}
                  </p>
                );
              }
              return (
                <p key={index} className="text-[#5B6B7A] leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary" size="md" pattern>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About This Report?
          </h2>
          <p className="text-lg text-[#9AA7B2] mb-8 max-w-2xl mx-auto">
            Contact us to discuss findings, request presentations, or explore
            partnership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#2F3E4E] hover:bg-[#9AA7B2]">Contact Us</Button>
            </Link>
            <Link href="/reports">
              <Button
                variant="outline"
                size="lg"
                className="border-[#5B6B7A] text-white hover:bg-[#5B6B7A]"
              >
                View All Reports
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
