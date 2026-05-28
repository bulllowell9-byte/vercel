type VerseCardProps = {
  verse: string;
  reference: string;
  note: string;
};

export function VerseCard({ verse, reference, note }: VerseCardProps) {
  return (
    <article className="premium-card animate-fadeUp rounded-lg border border-ink/[0.08] bg-paper p-5">
      <p className="font-serif text-xl leading-snug text-ink">&quot;{verse}&quot;</p>
      <p className="mt-3 text-sm uppercase tracking-[0.16em] text-soft">{reference}</p>
      <p className="mt-4 text-sm leading-6 text-slate">{note}</p>
    </article>
  );
}
