"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { verses } from "@/data/verses";
import { VerseCard } from "@/components/VerseCard";

export function VerseFinder() {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalized) return [];
    return verses.filter((entry) => entry.topic.includes(normalized));
  }, [normalized]);

  return (
    <div>
      <div className="relative">
        <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-soft" size={18} />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try loneliness, fear, sadness, or hope"
          aria-label="Search Bible verses by topic"
          className="h-14 w-full rounded-full border border-ink/10 bg-paper pl-12 pr-5 text-base text-ink shadow-soft outline-none transition placeholder:text-soft focus:border-ink/40"
        />
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {results.length > 0 ? (
          results.map((entry) => (
            <VerseCard key={`${entry.reference}-${entry.topic}`} verse={entry.verse} reference={entry.reference} note={entry.note} />
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-ink/[0.15] bg-mist p-6 text-sm leading-6 text-slate sm:col-span-2">
            Search a feeling to see related verses. Supported topics: loneliness, fear, sadness, and hope.
          </div>
        )}
      </div>
    </div>
  );
}
