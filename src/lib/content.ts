import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  image?: string;
  content: string;
}

export interface Report {
  slug: string;
  title: string;
  date: string;
  description: string;
  pdfUrl?: string;
  featured?: boolean;
  content: string;
}

export interface Program {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  order: number;
  content: string;
}

function ensureDirectoryExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(contentDirectory, "blog");
  ensureDirectoryExists(blogDir);

  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || "",
      author: data.author || "ISST Team",
      category: data.category || "News",
      image: data.image,
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | null {
  const blogDir = path.join(contentDirectory, "blog");
  const filePath = path.join(blogDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || "",
    author: data.author || "ISSCN Team",
    category: data.category || "News",
    image: data.image,
    content,
  };
}

export function getReports(): Report[] {
  const reportsDir = path.join(contentDirectory, "reports");
  ensureDirectoryExists(reportsDir);

  const files = fs.readdirSync(reportsDir).filter((file) => file.endsWith(".mdx"));

  const reports = files.map((filename) => {
    const filePath = path.join(reportsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title || "Untitled Report",
      date: data.date || new Date().toISOString(),
      description: data.description || "",
      pdfUrl: data.pdfUrl,
      featured: data.featured || false,
      content,
    };
  });

  return reports.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getReport(slug: string): Report | null {
  const reportsDir = path.join(contentDirectory, "reports");
  const filePath = path.join(reportsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Untitled Report",
    date: data.date || new Date().toISOString(),
    description: data.description || "",
    pdfUrl: data.pdfUrl,
    featured: data.featured || false,
    content,
  };
}

export function getPrograms(): Program[] {
  const programsDir = path.join(contentDirectory, "programs");
  ensureDirectoryExists(programsDir);

  const files = fs.readdirSync(programsDir).filter((file) => file.endsWith(".mdx"));

  const programs = files.map((filename) => {
    const filePath = path.join(programsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title || "Untitled Program",
      shortDescription: data.shortDescription || "",
      icon: data.icon || "shield",
      order: data.order || 99,
      content,
    };
  });

  return programs.sort((a, b) => a.order - b.order);
}

export function getProgram(slug: string): Program | null {
  const programsDir = path.join(contentDirectory, "programs");
  const filePath = path.join(programsDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Untitled Program",
    shortDescription: data.shortDescription || "",
    icon: data.icon || "shield",
    order: data.order || 99,
    content,
  };
}

