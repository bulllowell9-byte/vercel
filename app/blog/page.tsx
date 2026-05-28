import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";
import { targetKeywords } from "@/data/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stillwater-faith.vercel.app";

export const metadata: Metadata = {
  title: "Christian Encouragement Blog",
  description:
    "Read Christian encouragement, prayer for anxiety, morning prayer routines, Bible verses for stress, prayer before sleep, and peaceful Christian lifestyle articles.",
  keywords: targetKeywords,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Christian Encouragement Blog",
    description:
      "Prayer for anxiety, morning prayer, Bible verses for stress, and peaceful Christian lifestyle articles.",
    url: `${siteUrl}/blog`,
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Stillwater Faith Journal",
    url: `${siteUrl}/blog`,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt,
      image: `${siteUrl}${post.image}`,
    })),
  };

  return (
    <main className="px-5 py-16 sm:px-8 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-soft">Journal</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-ink sm:text-7xl">Christian encouragement, prayers, and Bible verse guides.</h1>
          <p className="mt-6 text-base leading-8 text-slate sm:text-lg">
            Gentle reads for prayer for anxiety, morning prayer, Bible verses for stress, prayer before sleep, and emotionally honest Christian routines.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
