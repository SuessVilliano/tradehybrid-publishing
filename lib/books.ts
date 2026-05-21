export type Imprint = "TRADE HYBRID" | "LIV8 LLC";

export interface Book {
  id: string;
  num: number;
  title: string;
  subtitle: string;
  author: string;
  publisher: string;
  imprint: Imprint;
  copyright: string;
  website: string;
  pages: number;
  ebookPrice: string;
  printPrice: string;
  bisac: [string, string, string];
  keywords: string[];
  audience: string;
  description: string;
  status: "draft" | "ready" | "published";
  platforms: { kdp: boolean; d2d: boolean; gumroad: boolean };
  accentColor: string;
  files: { interior: string; coverJpg: string };
}

export const BOOKS: Book[] = [
  {
    id: "atomic-habits",
    num: 1,
    title: "Atomic Habits for Traders",
    subtitle: "Building the Ultimate System for Consistent Profits",
    author: "Jamaur Johnson",
    publisher: "New School New Money Ent",
    imprint: "TRADE HYBRID",
    copyright: "Jamaur Johnson",
    website: "tradehybrid.co",
    pages: 40,
    ebookPrice: "$12.99",
    printPrice: "$18.99",
    bisac: ["BUS027000","SEL027000","PSY003000"],
    keywords: ["trading habits","atomic habits trading","forex psychology","trader mindset","trading system","trading discipline","behavioral finance"],
    audience: "Retail traders, aspiring traders, trading students",
    description: "The gap between what you know and what you do is where most traders lose. Drawing on James Clear's Atomic Habits and eight years of live trading experience, Jamaur Johnson delivers a complete behavioral operating system for the serious trader. Five parts. Seventeen chapters. A framework for rewiring the habits and identity that determine whether your strategy ever reaches its potential.",
    status: "ready",
    platforms: { kdp: false, d2d: false, gumroad: false },
    accentColor: "#00C9B1",
    files: { interior: "AtomicHabits_KDP_FINAL.pdf", coverJpg: "Cover_Atomic_Habits_for_Traders_300dpi.jpg" },
  },
  {
    id: "trade-hybrid",
    num: 2,
    title: "Trade Hybrid: Beat the Markets",
    subtitle: "Master Forex Hybrid Trading",
    author: "Jamaur Johnson",
    publisher: "New School New Money Ent",
    imprint: "TRADE HYBRID",
    copyright: "Jamaur Johnson",
    website: "tradehybrid.co",
    pages: 49,
    ebookPrice: "$14.99",
    printPrice: "$21.99",
    bisac: ["BUS027000","BUS036000","SEL027000"],
    keywords: ["forex trading","hybrid trading method","forex for beginners","currency trading","automated trading","trade hybrid","forex strategy"],
    audience: "Beginner to intermediate Forex traders",
    description: "The Forex market moves $7.5 trillion every single day. After fifteen years in currency markets, Jamaur Johnson developed a method that combines algorithmic automation with irreplaceable human judgment. The result is the Trade Hybrid Method — a systematic, repeatable framework tested through multiple market cycles.",
    status: "ready",
    platforms: { kdp: false, d2d: false, gumroad: false },
    accentColor: "#00C9B1",
    files: { interior: "TradeHybrid_KDP_FINAL.pdf", coverJpg: "Cover_Trade_Hybrid_300dpi.jpg" },
  },
  {
    id: "vortex",
    num: 3,
    title: "Trading in the Vortex: Inner Game",
    subtitle: "Mastering the Psychology of Market Flow",
    author: "Jamaur Johnson",
    publisher: "New School New Money Ent",
    imprint: "TRADE HYBRID",
    copyright: "Jamaur Johnson",
    website: "tradehybrid.co",
    pages: 48,
    ebookPrice: "$12.99",
    printPrice: "$19.99",
    bisac: ["BUS027000","PSY003000","SEL031000"],
    keywords: ["trading psychology","inner game trading","trader mindset","trading in the zone","market psychology","vortex trading","mental edge"],
    audience: "Intermediate to advanced traders",
    description: "Trading is 20% strategy and 80% psychology. Trading in the Vortex: Inner Game maps the internal landscape — the emotional triggers, identity beliefs, and unconscious patterns — that determine execution quality when real money is on the line.",
    status: "ready",
    platforms: { kdp: false, d2d: false, gumroad: false },
    accentColor: "#00C9B1",
    files: { interior: "Vortex_KDP_FINAL.pdf", coverJpg: "Cover_Trading_in_the_Vortex_300dpi.jpg" },
  },
  {
    id: "awakening",
    num: 4,
    title: "Awakening to Source",
    subtitle: "A Journey Within",
    author: "Jamaur Johnson",
    publisher: "New School New Money Ent",
    imprint: "LIV8 LLC",
    copyright: "LIV8 LLC",
    website: "jamaurjohnson.com",
    pages: 63,
    ebookPrice: "$9.99",
    printPrice: "$16.99",
    bisac: ["OCC019000","SEL016000","PHI015000"],
    keywords: ["spiritual awakening","awakening to source","consciousness expansion","inner journey","spiritual growth","self discovery","higher self"],
    audience: "Spiritual seekers, mindfulness practitioners",
    description: "Awakening to Source is an invitation to turn inward and discover the intelligence that has always been present beneath thought, emotion, and story. A living investigation — available to anyone willing to look honestly at what they actually are.",
    status: "ready",
    platforms: { kdp: false, d2d: false, gumroad: false },
    accentColor: "#C8922A",
    files: { interior: "Awakening_to_Source_KDP_FINAL.pdf", coverJpg: "Cover_Awakening_to_Source_300dpi.jpg" },
  },
  {
    id: "space-in-between",
    num: 5,
    title: "The Space In Between",
    subtitle: "Finding Peace in the Present Moment",
    author: "Jamaur Johnson",
    publisher: "New School New Money Ent",
    imprint: "LIV8 LLC",
    copyright: "LIV8 LLC",
    website: "jamaurjohnson.com",
    pages: 44,
    ebookPrice: "$9.99",
    printPrice: "$15.99",
    bisac: ["OCC019000","SEL031000","SEL016000"],
    keywords: ["present moment","mindfulness","inner peace","space between thoughts","spiritual presence","meditation","consciousness"],
    audience: "Mindfulness practitioners, spiritual seekers",
    description: "Between every thought and the next — there is space. The Space In Between is an exploration of that gap, and why it may be the most important territory a human being can learn to inhabit.",
    status: "ready",
    platforms: { kdp: false, d2d: false, gumroad: false },
    accentColor: "#C8922A",
    files: { interior: "Space_In_Between_KDP_FINAL.pdf", coverJpg: "Cover_Space_In_Between_300dpi.jpg" },
  },
  {
    id: "synchronicity",
    num: 6,
    title: "Synchronicity",
    subtitle: "When the Universe Speaks, Listen",
    author: "Jamaur Johnson",
    publisher: "New School New Money Ent",
    imprint: "LIV8 LLC",
    copyright: "LIV8 LLC",
    website: "jamaurjohnson.com",
    pages: 83,
    ebookPrice: "$11.99",
    printPrice: "$17.99",
    bisac: ["OCC019000","OCC028000","SEL016000"],
    keywords: ["synchronicity","meaningful coincidence","carl jung","universe signs","spiritual alignment","manifestation","divine timing"],
    audience: "Spiritual seekers, Jung readers, metaphysical readers",
    description: "Carl Jung called it synchronicity — meaningful coincidence that cannot be explained by cause and effect. Through twelve chapters and a 40-day practice structure, this book moves from intellectual exploration to lived experience.",
    status: "ready",
    platforms: { kdp: false, d2d: false, gumroad: false },
    accentColor: "#C8922A",
    files: { interior: "Synchronicity_KDP_FINAL.pdf", coverJpg: "Cover_Synchronicity_300dpi.jpg" },
  },
  {
    id: "last-verifiable-year",
    num: 7,
    title: "The Last Verifiable Year",
    subtitle: "A Novel of Memory, Time, and the Things We Cannot Prove",
    author: "Jamaur Johnson",
    publisher: "New School New Money Ent",
    imprint: "LIV8 LLC",
    copyright: "LIV8 LLC",
    website: "jamaurjohnson.com",
    pages: 244,
    ebookPrice: "$9.99",
    printPrice: "$19.99",
    bisac: ["FIC019000","FIC039000","FIC045000"],
    keywords: ["literary fiction","metaphysical fiction","memory novel","time fiction","philosophical novel","consciousness fiction","literary debut"],
    audience: "Literary fiction readers, philosophical fiction fans",
    description: "What if the last year you could fully trust your memory was not last year — but years ago? The Last Verifiable Year is Jamaur Johnson's debut novel — a literary exploration of memory, identity, and personal truth.",
    status: "ready",
    platforms: { kdp: false, d2d: false, gumroad: false },
    accentColor: "#C8922A",
    files: { interior: "LastVerifiableYear_KDP_FINAL.pdf", coverJpg: "Cover_Last_Verifiable_Year_300dpi.jpg" },
  },
];

export const getBook = (id: string) => BOOKS.find(b => b.id === id);
export const tradeBooks = () => BOOKS.filter(b => b.imprint === "TRADE HYBRID");
export const liv8Books  = () => BOOKS.filter(b => b.imprint === "LIV8 LLC");
