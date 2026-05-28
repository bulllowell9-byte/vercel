import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-slate sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-serif text-2xl text-ink">Stillwater</p>
          <p className="mt-2 max-w-sm">Prayer, encouragement, and quiet routines for everyday peace.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/#prayer" className="hover:text-ink">
            Prayer
          </Link>
          <Link href="/#verses" className="hover:text-ink">
            Verses
          </Link>
          <Link href="/blog" className="hover:text-ink">
            Journal
          </Link>
        </div>
      </div>
    </footer>
  );
}
