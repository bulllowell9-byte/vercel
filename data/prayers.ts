export type PrayerEmotion =
  | "anxiety"
  | "stress"
  | "fear"
  | "family"
  | "healing"
  | "sleep";

export type PrayerEntry = {
  emotion: PrayerEmotion;
  label: string;
  prayer: string;
  verse: string;
  reference: string;
  encouragement: string;
};

export const prayers: PrayerEntry[] = [
  {
    emotion: "anxiety",
    label: "Anxiety",
    prayer:
      "Lord, meet me in this tense place. Quiet what is racing, soften what feels heavy, and remind me that I am held by Your steady love.",
    verse: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7",
    encouragement:
      "You do not have to solve the whole day at once. Breathe, receive grace for this moment, and take the next gentle step.",
  },
  {
    emotion: "stress",
    label: "Stress",
    prayer:
      "God, help me release the pressure I keep carrying. Give me wisdom for what matters, courage to pause, and peace that is deeper than my list.",
    verse: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
    encouragement:
      "Your worth is not measured by how much you finish. Rest is holy, and your pace can become peaceful again.",
  },
  {
    emotion: "fear",
    label: "Fear",
    prayer:
      "Father, when fear feels loud, help me hear Your voice more clearly. Surround my thoughts with truth and teach my heart to trust You again.",
    verse: "When I am afraid, I put my trust in you.",
    reference: "Psalm 56:3",
    encouragement:
      "Fear may visit, but it does not get to lead. God is near in the unknown and faithful in the next step.",
  },
  {
    emotion: "family",
    label: "Family",
    prayer:
      "Lord, bring tenderness into my home and patience into my words. Help us choose forgiveness, honesty, and love that reflects Your heart.",
    verse: "Above all, love each other deeply, because love covers over a multitude of sins.",
    reference: "1 Peter 4:8",
    encouragement:
      "Small moments of gentleness can change the emotional weather of a home. Begin with one kind word.",
  },
  {
    emotion: "healing",
    label: "Healing",
    prayer:
      "Jesus, bring comfort to the places in me that ache. Restore what has been worn down and help me notice the quiet signs of Your care.",
    verse: "He heals the brokenhearted and binds up their wounds.",
    reference: "Psalm 147:3",
    encouragement:
      "Healing can be slow and still be sacred. Nothing tender in you is overlooked by God.",
  },
  {
    emotion: "sleep",
    label: "Sleep",
    prayer:
      "God, I give this day back to You. Settle my body, clear my mind, and let my sleep be covered by Your calm presence.",
    verse: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
    reference: "Psalm 4:8",
    encouragement:
      "You are allowed to end the day unfinished. God remains awake, attentive, and kind while you rest.",
  },
];
