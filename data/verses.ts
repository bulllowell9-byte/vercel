export type VerseTopic = "loneliness" | "fear" | "sadness" | "hope";

export type VerseEntry = {
  topic: VerseTopic;
  verse: string;
  reference: string;
  note: string;
};

export const verses: VerseEntry[] = [
  {
    topic: "loneliness",
    verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    reference: "Psalm 34:18",
    note: "A reminder that solitude is never the same as being forgotten.",
  },
  {
    topic: "loneliness",
    verse: "Never will I leave you; never will I forsake you.",
    reference: "Hebrews 13:5",
    note: "God's nearness is not fragile. It remains even on quiet days.",
  },
  {
    topic: "fear",
    verse: "So do not fear, for I am with you; do not be dismayed, for I am your God.",
    reference: "Isaiah 41:10",
    note: "Courage grows when you remember who is holding you.",
  },
  {
    topic: "sadness",
    verse: "Those who sow with tears will reap with songs of joy.",
    reference: "Psalm 126:5",
    note: "Your tears are not wasted. God can grow beauty in tender ground.",
  },
  {
    topic: "hope",
    verse: "May the God of hope fill you with all joy and peace as you trust in him.",
    reference: "Romans 15:13",
    note: "Hope is not pretending everything is easy. It is trusting that God is still good.",
  },
  {
    topic: "hope",
    verse: "Let us hold unswervingly to the hope we profess, for he who promised is faithful.",
    reference: "Hebrews 10:23",
    note: "The promise is steadier than the feeling.",
  },
];
