"use client";

import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { prayers, type PrayerEmotion } from "@/data/prayers";
import { PrayerCard } from "@/components/PrayerCard";

export function PrayerGenerator() {
  const [emotion, setEmotion] = useState<PrayerEmotion>("anxiety");
  const [generatedEmotion, setGeneratedEmotion] = useState<PrayerEmotion | null>(null);

  const selected = useMemo(
    () => prayers.find((entry) => entry.emotion === (generatedEmotion ?? emotion)) ?? prayers[0],
    [emotion, generatedEmotion],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="rounded-lg border border-ink/[0.08] bg-mist/80 p-5 shadow-soft sm:p-6">
        <label htmlFor="emotion" className="text-sm font-medium text-ink">
          What are you carrying today?
        </label>
        <select
          id="emotion"
          value={emotion}
          onChange={(event) => setEmotion(event.target.value as PrayerEmotion)}
          className="mt-3 h-12 w-full rounded-md border border-ink/10 bg-paper px-4 text-base text-ink outline-none transition focus:border-ink/40"
        >
          {prayers.map((entry) => (
            <option key={entry.emotion} value={entry.emotion}>
              {entry.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => setGeneratedEmotion(emotion)}
          className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-soft"
        >
          <Sparkles aria-hidden="true" size={16} />
          Generate prayer
        </button>
        <p className="mt-4 text-sm leading-6 text-slate">
          Local sample content only. No accounts, tracking, or API calls.
        </p>
      </div>
      {generatedEmotion ? (
        <PrayerCard
          prayer={selected.prayer}
          verse={selected.verse}
          reference={selected.reference}
          encouragement={selected.encouragement}
        />
      ) : (
        <div className="rounded-lg border border-dashed border-ink/[0.15] bg-paper/80 p-6 text-center shadow-soft sm:p-10">
          <p className="font-serif text-3xl text-ink">A prayer will appear here.</p>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate">
            Select an emotion and generate a quiet, Scripture-rooted encouragement for this moment.
          </p>
        </div>
      )}
    </div>
  );
}
