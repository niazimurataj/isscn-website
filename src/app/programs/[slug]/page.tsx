import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProgram, getPrograms } from "@/lib/content";
import { Section, Button, Badge } from "@/components/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const programs = getPrograms();
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    return {
      title: "Program Not Found",
    };
  }

  return {
    title: program.title,
    description: program.shortDescription,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  const allPrograms = getPrograms();
  const currentIndex = allPrograms.findIndex((p) => p.slug === slug);
  const prevProgram = currentIndex > 0 ? allPrograms[currentIndex - 1] : null;
  const nextProgram =
    currentIndex < allPrograms.length - 1 ? allPrograms[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg" pattern>
        <div className="max-w-4xl">
          <Link
            href="/programs"
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
            All Programs
          </Link>
          <Badge variant="secondary" className="mb-4">
            Program {program.order} of 5
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {program.title}
          </h1>
          <p className="text-xl text-[#9AA7B2] leading-relaxed">
            {program.shortDescription}
          </p>
        </div>
      </Section>

      {/* Content */}
      <Section variant="white" size="lg">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            {/* Render MDX content as HTML-like structure */}
            <div
              dangerouslySetInnerHTML={{
                __html: program.content
                  .replace(/^# .+\n/m, "") // Remove first h1 since we have it in hero
                  .replace(/^## /gm, '<h2 class="text-2xl font-bold text-[#2F3E4E] mt-10 mb-4">')
                  .replace(/^### /gm, '<h3 class="text-xl font-semibold text-[#2F3E4E] mt-8 mb-3">')
                  .replace(/\n\n/g, "</p><p class='text-[#5B6B7A] leading-relaxed mb-4'>")
                  .replace(/^- /gm, "<li class='text-[#5B6B7A]'>")
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#4F6F73] hover:underline">$1</a>'),
              }}
            />
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section variant="secondary" size="md">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {prevProgram ? (
            <Link
              href={`/programs/${prevProgram.slug}`}
              className="flex-1 bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="text-sm text-[#9AA7B2] mb-2 block">
                Previous Program
              </span>
              <span className="text-lg font-semibold text-[#2F3E4E] group-hover:text-[#4F6F73] transition-colors flex items-center gap-2">
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
                {prevProgram.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextProgram && (
            <Link
              href={`/programs/${nextProgram.slug}`}
              className="flex-1 bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group text-right"
            >
              <span className="text-sm text-[#9AA7B2] mb-2 block">
                Next Program
              </span>
              <span className="text-lg font-semibold text-[#2F3E4E] group-hover:text-[#4F6F73] transition-colors flex items-center justify-end gap-2">
                {nextProgram.title}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="primary" size="md" pattern>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in This Program?
          </h2>
          <p className="text-lg text-[#9AA7B2] mb-8 max-w-2xl mx-auto">
            Contact us to learn how we can help strengthen your supply chain
            security.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#2F3E4E] hover:bg-[#9AA7B2]">Get in Touch</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
