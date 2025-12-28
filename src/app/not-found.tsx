import Link from "next/link";
import { Section, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section variant="white" size="lg">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-24 h-24 rounded-full bg-[#2F3E4E]/10 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-12 h-12 text-[#9AA7B2]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#2F3E4E] mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-[#5B6B7A] mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or doesn&apos;t exist.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button>
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-[#9AA7B2]/20">
          <p className="text-sm text-[#9AA7B2] mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/programs"
              className="text-[#4F6F73] hover:text-[#3d5a5e]"
            >
              Our Programs
            </Link>
            <Link
              href="/reports"
              className="text-[#4F6F73] hover:text-[#3d5a5e]"
            >
              Reports
            </Link>
            <Link href="/blog" className="text-[#4F6F73] hover:text-[#3d5a5e]">
              Blog
            </Link>
            <Link href="/about" className="text-[#4F6F73] hover:text-[#3d5a5e]">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
