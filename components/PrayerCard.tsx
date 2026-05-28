type PrayerCardProps = {
  prayer: string;
  verse: string;
  reference: string;
  encouragement: string;
};

export function PrayerCard({ prayer, verse, reference, encouragement }: PrayerCardProps) {
  return (
    <article className="premium-card animate-fadeUp rounded-lg border border-ink/[0.08] bg-paper p-6 shadow-soft sm:p-8">
      <p className="font-serif text-2xl leading-snug text-ink">&quot;{prayer}&quot;</p>
      <div className="mt-6 border-l border-ink/[0.15] pl-4">
        <p className="text-base leading-7 text-slate">{verse}</p>
        <p className="mt-2 text-sm uppercase tracking-[0.16em] text-soft">{reference}</p>
      </div>
      <p className="mt-6 rounded-md bg-cream px-4 py-3 text-sm leading-6 text-slate">{encouragement}</p>
    </article>
  );
}
