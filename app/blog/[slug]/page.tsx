import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/data/blog";
import { internalLinks, targetKeywords } from "@/data/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stillwater-faith.vercel.app";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.title, ...targetKeywords],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1400,
          height: 1400,
          alt: `${post.title} peaceful Christian lifestyle article image`,
        },
      ],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: `${siteUrl}${post.image}`,
    author: {
      "@type": "Organization",
      name: "Stillwater Faith",
    },
    publisher: {
      "@type": "Organization",
      name: "Stillwater Faith",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.svg`,
      },
    },
    keywords: targetKeywords.join(", "),
  };
  const relatedLinks = internalLinks.filter((link) => link.href !== `/blog/${post.slug}`).slice(0, 3);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-soft">{post.readTime}</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-ink sm:text-7xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate">{post.excerpt}</p>
        </div>
        <div className="relative mx-auto mt-10 aspect-[16/10] max-w-5xl overflow-hidden rounded-lg bg-cream">
          <Image
            src={post.image}
            alt={`${post.title} peaceful lifestyle image`}
            fill
            priority
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-7 text-lg leading-9 text-slate">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <nav aria-label="Related Christian lifestyle articles" className="mx-auto mt-12 max-w-3xl rounded-lg border border-ink/[0.08] bg-mist p-6">
          <h2 className="font-serif text-3xl leading-tight text-ink">Related prayer and encouragement guides</h2>
          <div className="mt-5 grid gap-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-ink underline decoration-ink/20 underline-offset-4 transition hover:decoration-ink/60">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </article>
      <CTASection />
    </main>
  );
}
