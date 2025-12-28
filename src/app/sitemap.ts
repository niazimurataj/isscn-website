import { MetadataRoute } from "next";
import { getBlogPosts, getReports, getPrograms } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://isst.org";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/programs",
    "/team",
    "/reports",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic program pages
  const programs = getPrograms();
  const programPages = programs.map((program) => ({
    url: `${baseUrl}/programs/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blog pages
  const posts = getBlogPosts();
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Dynamic report pages
  const reports = getReports();
  const reportPages = reports.map((report) => ({
    url: `${baseUrl}/reports/${report.slug}`,
    lastModified: new Date(report.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...programPages, ...blogPages, ...reportPages];
}
