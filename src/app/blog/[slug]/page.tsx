import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import { Section, Badge, Button } from "@/components/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get related posts
  const allPosts = getBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <Section variant="primary" size="lg" pattern>
        <div className="max-w-4xl">
          <Link
            href="/blog"
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
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-[#9AA7B2]">{formatDate(post.date)}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#5B6B7A]/50 flex items-center justify-center">
              <span className="text-lg font-semibold text-[#9AA7B2]">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <p className="text-white font-medium">{post.author}</p>
              <p className="text-[#9AA7B2] text-sm">ISST</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section variant="white" size="lg">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            {/* Simple markdown-like rendering */}
            {post.content.split("\n\n").map((paragraph, index) => {
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
              return (
                <p key={index} className="text-[#5B6B7A] leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Share */}
          <div className="border-t border-[#9AA7B2]/20 pt-8 mt-12">
            <p className="text-sm text-[#9AA7B2] mb-4">Share this article</p>
            <div className="flex gap-3">
              <button className="p-2 rounded-lg bg-[#9AA7B2]/10 text-[#5B6B7A] hover:bg-[#9AA7B2]/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-[#9AA7B2]/10 text-[#5B6B7A] hover:bg-[#9AA7B2]/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-[#9AA7B2]/10 text-[#5B6B7A] hover:bg-[#9AA7B2]/20 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section variant="secondary" size="md">
          <h2 className="text-2xl font-bold text-[#2F3E4E] mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <Badge variant="default" className="mb-3">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-[#2F3E4E] mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-[#5B6B7A] line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section variant="primary" size="md" pattern>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-lg text-[#9AA7B2] mb-8 max-w-2xl mx-auto">
            Explore our programs and discover how we can help strengthen your
            supply chain security.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/programs">
              <Button size="lg" className="bg-white text-[#2F3E4E] hover:bg-[#9AA7B2]">Explore Programs</Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-[#5B6B7A] text-white hover:bg-[#5B6B7A]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
