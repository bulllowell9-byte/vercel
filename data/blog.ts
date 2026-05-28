export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "morning-prayer-for-anxiety",
    title: "Morning Prayer for Anxiety",
    excerpt: "A soft prayer for beginning the day with steadier breath and a quieter mind.",
    date: "2026-05-27",
    readTime: "3 min read",
    image: "/images/morning-window.png",
    content: [
      "A peaceful morning does not require a perfect life. It can begin with one honest sentence before God: I feel anxious, and I need Your nearness.",
      "Start by placing both feet on the floor, breathing slowly, and inviting God into the real texture of your day. You do not have to make yourself calm before you pray.",
      "Lord, steady my thoughts and help me move through today with grace. Teach me to notice Your care in small moments, and remind me that I am never carrying this alone.",
    ],
  },
  {
    slug: "prayer-before-sleep",
    title: "Prayer Before Sleep",
    excerpt: "A gentle way to release the day and rest in God's care.",
    date: "2026-05-27",
    readTime: "2 min read",
    image: "/images/bedside-candle.png",
    content: [
      "Night can make everything feel louder. Prayer before sleep is a quiet practice of giving the day back to God.",
      "Name one thing you are grateful for, one thing you are releasing, and one place where you need peace. Keep it simple and unpolished.",
      "God, thank You for carrying me through this day. I release what I cannot finish, receive Your peace, and trust You with the hours I cannot control.",
    ],
  },
  {
    slug: "bible-verses-for-stress",
    title: "Bible Verses for Stress",
    excerpt: "Scripture to return to when your mind feels crowded and your body feels tense.",
    date: "2026-05-27",
    readTime: "4 min read",
    image: "/images/open-bible.png",
    content: [
      "Stress often asks us to hurry, prove, and hold everything together. Scripture offers another invitation: come, rest, receive.",
      "Matthew 11:28 is a beautiful place to begin because it does not shame weariness. It meets it with welcome.",
      "Let one verse become a breath prayer today. Inhale, 'Lord, I come to You.' Exhale, 'Give me rest.'",
    ],
  },
  {
    slug: "how-to-find-peace-with-god",
    title: "How to Find Peace with God",
    excerpt: "Peace grows through presence, surrender, and small daily returns to grace.",
    date: "2026-05-27",
    readTime: "5 min read",
    image: "/images/linen-journal.png",
    content: [
      "Peace with God is not a mood you have to manufacture. It is a relationship you can return to.",
      "Begin with honesty. Tell God what feels unsettled, where you feel distant, and what you are afraid to release.",
      "Then practice receiving. Read a small passage, sit in silence, or write one sentence of gratitude. Peace often arrives quietly.",
    ],
  },
  {
    slug: "christian-morning-routine",
    title: "Christian Morning Routine",
    excerpt: "A simple rhythm for prayer, gratitude, Scripture, and gentle intention.",
    date: "2026-05-27",
    readTime: "4 min read",
    image: "/images/morning-window.png",
    content: [
      "A Christian morning routine can be small enough to keep and meaningful enough to shape your day.",
      "Try five minutes of prayer, one written gratitude, a few verses of Scripture, and one clear intention for how you want to move through the day.",
      "The goal is not aesthetic perfection. The goal is a life increasingly attentive to God's presence.",
    ],
  },
  {
    slug: "encouragement-for-difficult-days",
    title: "Encouragement for Difficult Days",
    excerpt: "Faith reminders for days that feel tender, slow, or heavy.",
    date: "2026-05-27",
    readTime: "3 min read",
    image: "/images/bedside-candle.png",
    content: [
      "Difficult days do not mean you are failing. They mean you are human and in need of gentleness.",
      "Let your faith become very practical today. Drink water. Step outside. Pray one short sentence. Text someone safe.",
      "God is not waiting for a stronger version of you. He is present with you here, with mercy for this exact day.",
    ],
  },
];
