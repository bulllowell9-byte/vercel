import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-ink px-5 py-20 text-paper sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-paper/[0.55]">A quiet reset</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          Begin again with one peaceful prayer.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-paper/70">
          Choose what your heart is carrying today and receive a short prayer, Scripture, and a gentle reminder.
        </p>
        <Link
          href="/#prayer"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-paper px-7 text-sm font-medium text-ink transition hover:bg-cream"
        >
          Open prayer tool
        </Link>
      </div>
    </section>
  );
}
