import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-cream shadow-soft transition duration-300 group-hover:-translate-y-1 group-hover:shadow-premium">
          <Image
            src={post.image}
            alt={`${post.title} peaceful lifestyle image`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.2em] text-soft">{post.readTime}</p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-ink transition group-hover:text-black">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate">{post.excerpt}</p>
      </Link>
    </article>
  );
}
