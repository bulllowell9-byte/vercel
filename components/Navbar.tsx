import Link from "next/link";

const links = [
  { href: "#prayer", label: "Prayer" },
  { href: "#verses", label: "Verses" },
  { href: "#routine", label: "Routine" },
  { href: "/blog", label: "Journal" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/[0.85] backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link href="/" className="flex items-center gap-2" aria-label="Stillwater Faith home">
          <span className="grid size-8 place-items-center rounded-full border border-ink/10 bg-cream text-sm font-medium text-ink">
            S
          </span>
          <span className="font-serif text-xl text-ink">Stillwater</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-slate sm:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
