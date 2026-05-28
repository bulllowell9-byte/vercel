import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { PrayerGenerator } from "@/components/PrayerGenerator";
import { VerseFinder } from "@/components/VerseFinder";
import { blogPosts } from "@/data/blog";
import { encouragementCards, routineSteps } from "@/data/encouragement";
import { faqItems, internalLinks, targetKeywords } from "@/data/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stillwater-faith.vercel.app";

export const metadata: Metadata = {
  title: "Prayer for Anxiety, Morning Prayer, and Christian Encouragement",
  description:
    "Find prayer for anxiety, morning prayer routines, Bible verses for stress, Christian encouragement, prayer before sleep, and peaceful Christian lifestyle tools.",
  keywords: targetKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prayer for Anxiety, Morning Prayer, and Christian Encouragement",
    description:
      "A peaceful Christian lifestyle tool with prayers, Bible verses for stress, encouragement, and quiet routines.",
    url: siteUrl,
  },
};

export default function Home() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Stillwater Faith",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description:
      "A peaceful Christian lifestyle tool for prayer for anxiety, morning prayer, Bible verses for stress, Christian encouragement, and prayer before sleep.",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf3_0%,#fff6eb_48%,#f6f2eb_100%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:min-h-[760px] lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="animate-fadeUp text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.28em] text-soft sm:text-sm">Peace for ordinary days</p>
            <h1 className="mx-auto mt-6 max-w-5xl font-serif text-6xl leading-[0.98] text-ink sm:text-8xl lg:mx-0">
              Find peace, prayer, and encouragement for your everyday life.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate sm:text-xl sm:leading-9 lg:mx-0">
              A gentle Christian lifestyle space for prayer for anxiety, morning prayer, Bible verses for stress, quiet routines, and hope-filled reminders.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#prayer"
                className="inline-flex min-h-12 items-center rounded-full bg-ink px-8 text-sm font-medium text-paper shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-premium"
              >
                Generate a prayer
              </Link>
              <Link
                href="#routine"
                className="inline-flex min-h-12 items-center rounded-full border border-ink/10 bg-paper/70 px-8 text-sm font-medium text-ink backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:bg-paper"
              >
                Build a quiet rhythm
              </Link>
            </div>
            <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-3 border-y border-ink/10 py-5 text-left lg:mx-0">
              {["Prayer", "Scripture", "Routine"].map((item, index) => (
                <div key={item}>
                  <p className="font-serif text-2xl text-ink">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-soft">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[0.86fr_1fr] gap-4 sm:gap-5">
            <div className="relative mt-16 aspect-[3/4] overflow-hidden rounded-lg bg-cream shadow-soft">
              <Image
                src="/images/morning-window.png"
                alt="Peaceful morning prayer scene with soft light for a Christian lifestyle routine"
                fill
                priority
                sizes="(min-width: 1024px) 23vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 sm:space-y-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-linen shadow-premium">
                <Image
                  src="/images/open-bible.png"
                  alt="Open Bible image for finding Bible verses for stress and Christian encouragement"
                  fill
                  priority
                  sizes="(min-width: 1024px) 26vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg border border-ink/[0.08] bg-paper/75 p-5 text-left shadow-soft backdrop-blur">
                <p className="font-serif text-2xl leading-tight text-ink">Soft faith tools for the life you actually live.</p>
                <p className="mt-3 text-sm leading-6 text-slate">No clutter. No pressure. Just calm practices for your day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/5 bg-paper px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 text-center sm:grid-cols-3">
          {["Prayer for anxiety and stress", "Bible verses for stress and hope", "Morning prayer routines for peace"].map((item) => (
            <p key={item} className="text-sm leading-6 text-slate">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="prayer" className="soft-section px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-soft">Prayer generator</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">Prayer for anxiety, stress, sleep, and everyday peace.</h2>
          </div>
          <PrayerGenerator />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-cream shadow-soft">
              <Image
                src="/images/bedside-candle.png"
                alt="Calm bedside candle scene for prayer before sleep"
                fill
                sizes="(min-width: 1024px) 24vw, 45vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-lg bg-linen shadow-soft">
              <Image
                src="/images/linen-journal.png"
                alt="Linen journal image for a peaceful Christian lifestyle and morning prayer routine"
                fill
                sizes="(min-width: 1024px) 24vw, 45vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm uppercase tracking-[0.2em] text-soft">Lifestyle faith</p>
            <h2 className="mt-4 max-w-xl font-serif text-5xl leading-tight text-ink sm:text-6xl">
              A softer kind of spiritual care.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-9 text-slate">
              Stillwater is designed to feel like a quiet page in your morning journal: warm, simple, emotionally honest, and easy to return to for Christian encouragement.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Morning calm", "Evening release", "Faith reminders", "Gentle reflection"].map((item) => (
                <div key={item} className="premium-card rounded-lg border border-ink/[0.08] bg-paper p-5 shadow-soft">
                  <p className="font-serif text-xl text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="verses" className="bg-[linear-gradient(180deg,#fffaf3_0%,#f8efe3_100%)] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-soft">Bible verse finder</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">Find Bible verses for stress, fear, sadness, and hope.</h2>
            <p className="mt-6 max-w-md text-base leading-8 text-slate">
              Type a simple word and find Scripture with a soft reflection for lonely, fearful, sad, hopeful, or stressful moments.
            </p>
          </div>
          <VerseFinder />
        </div>
      </section>

      <section className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-soft">Daily encouragement</p>
              <h2 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">Christian encouragement for difficult days.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate">
              Pinterest-soft cards for saving, rereading, or using as a quiet reset between responsibilities.
            </p>
          </div>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-4">
            {encouragementCards.map((card, index) => (
              <article
                key={card.title}
                className="premium-card mb-5 break-inside-avoid rounded-lg border border-ink/[0.08] bg-paper p-7 shadow-soft"
                style={{ paddingTop: index % 2 === 0 ? "3.25rem" : "2rem", paddingBottom: index % 2 === 0 ? "3.25rem" : "2rem" }}
              >
                <h3 className="font-serif text-2xl text-ink">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-soft">Popular guides</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">Helpful prayers and Bible verse guides.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="premium-card rounded-lg border border-ink/[0.08] bg-mist p-6 shadow-soft"
              >
                <h3 className="font-serif text-2xl leading-tight text-ink">{link.label}</h3>
                <p className="mt-4 text-sm leading-6 text-slate">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="routine" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-cream shadow-premium sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/linen-journal.png"
              alt="Journal and quiet time image for a Christian morning prayer routine"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-soft">Morning routine</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">A morning prayer routine for a peaceful Christian lifestyle.</h2>
            <p className="mt-6 text-lg leading-9 text-slate">
              Keep the rhythm light enough to return to: prayer, gratitude, quiet time, and a few honest words on paper.
            </p>
            <div className="mt-8 grid gap-3">
              {routineSteps.map((step, index) => (
                <div key={step} className="premium-card flex items-center gap-4 rounded-lg border border-ink/[0.08] bg-paper p-5 shadow-soft">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cream text-sm text-ink">{index + 1}</span>
                  <span className="text-sm font-medium text-ink">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-soft">Journal</p>
              <h2 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">Read for a softer day.</h2>
            </div>
            <Link href="/blog" className="text-sm font-medium text-ink underline decoration-ink/20 underline-offset-4 transition hover:decoration-ink/60">
              View all posts
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-soft">FAQ</p>
          <h2 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">Questions about prayer, peace, and encouragement.</h2>
          <div className="mt-10 divide-y divide-ink/10 rounded-lg border border-ink/[0.08] bg-paper shadow-soft">
            {faqItems.map((item) => (
              <div key={item.question} className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl leading-tight text-ink">{item.question}</h3>
                <p className="mt-4 text-base leading-8 text-slate">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
