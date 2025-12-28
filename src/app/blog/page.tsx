import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/content";
import {
  Section,
  SectionHeader,
  SectionTitle,
  Card,
  Badge,
} from "@/components/ui";
import { Waves } from "@/components/reactbits";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, insights, and updates on supply chain security and technology from ISST.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
            Blog
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            News, insights, and updates on supply chain security,
            technology, and our programs.
          </p>
        </div>
      </Section>

      {/* Blog Posts */}
      <Section variant="white" size="lg">
        {posts.length > 0 ? (
          <>
            {/* Featured Post */}
            {posts[0] && (
              <div className="mb-12">
                <Link href={`/blog/${posts[0].slug}`}>
                  <Card hover padding="lg" className="grid md:grid-cols-2 gap-8">
                    <div className="aspect-video bg-[#2F3E4E]/10 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-[#9AA7B2]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="primary">{posts[0].category}</Badge>
                        <span className="text-sm text-[#9AA7B2]">
                          {formatDate(posts[0].date)}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#2F3E4E] mb-3">
                        {posts[0].title}
                      </h2>
                      <p className="text-[#5B6B7A] mb-4">{posts[0].excerpt}</p>
                      <div className="flex items-center gap-2 text-sm text-[#9AA7B2]">
                        <span>By {posts[0].author}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            )}

            {/* Other Posts */}
            {posts.length > 1 && (
              <>
                <SectionHeader centered={false}>
                  <SectionTitle as="h2" className="text-[#2F3E4E]">
                    Recent Articles
                  </SectionTitle>
                </SectionHeader>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.slice(1).map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <Card hover className="h-full">
                        <div className="aspect-video bg-[#9AA7B2]/20 rounded-lg flex items-center justify-center mb-4">
                          <svg
                            className="w-10 h-10 text-[#9AA7B2]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="default">{post.category}</Badge>
                          <span className="text-xs text-[#9AA7B2]">
                            {formatDate(post.date)}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#2F3E4E] mb-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#5B6B7A] line-clamp-2">
                          {post.excerpt}
                        </p>
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </>
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-[#2F3E4E] mb-2">
              No posts yet
            </h2>
            <p className="text-[#5B6B7A]">
              Check back soon for news and updates.
            </p>
          </div>
        )}
      </Section>

      {/* Newsletter CTA */}
      <Section variant="primary" size="md" pattern>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white drop-shadow-sm mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest news, research, and
            insights on supply chain security.
          </p>
          <Link
            href="/contact#newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F6F73] text-white font-semibold rounded-lg hover:bg-[#5d8285] transition-colors"
          >
            Subscribe to Newsletter
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </Link>
        </div>
      </Section>
    </>
  );
}
