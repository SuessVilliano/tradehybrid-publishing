import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { BOOKS } from "@/lib/books";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const PROMPTS: Record<string, (b: ReturnType<typeof BOOKS.find>) => string> = {
  social: (b) => `Generate social media marketing content for this book:

Title: ${b!.title}
Subtitle: ${b!.subtitle}
Author: ${b!.author}
Description: ${b!.description}
Website: ${b!.website}
Price: ${b!.ebookPrice} ebook / ${b!.printPrice} print

Generate exactly this structure:

═══ INSTAGRAM (3 posts) ═══

Post 1 — Hook-based:
[Caption — 150 words max, strong hook first sentence]
Hashtags: #tag1 #tag2 #tag3 #tag4 #tag5

Post 2 — Value/insight:
[Caption — share one key idea from the book]
Hashtags: #tag1 #tag2 #tag3 #tag4 #tag5

Post 3 — Call to action:
[Caption — drive to link in bio]
Hashtags: #tag1 #tag2 #tag3 #tag4 #tag5

═══ TWITTER / X (3 tweets) ═══

Tweet 1: [punchy, under 240 chars]
Tweet 2: [insight or quote from book, under 240 chars]
Tweet 3: [question that makes readers want to buy, under 240 chars]

═══ LINKEDIN ═══
[Professional 150-word post, first-person from Jamaur Johnson]

═══ FACEBOOK ═══
[Conversational 100-word post with clear CTA]`,

  adcopy: (b) => `Generate advertising copy for this book. Be specific and conversion-focused.

Title: ${b!.title}
Description: ${b!.description}
Price: ${b!.ebookPrice}
Website: ${b!.website}

Generate exactly this structure:

═══ AMAZON SPONSORED ADS ═══
Headline 1: [under 150 chars — benefit-focused]
Headline 2: [under 150 chars — problem/solution]
Headline 3: [under 150 chars — social proof angle]

═══ META ADS (Facebook & Instagram) ═══
Primary Text: [125 chars max — scroll-stopping first line]
Headline: [40 chars max — punchy]
Description: [30 chars max — urgency or benefit]

Ad Body (longer version for feed ads, 3 short paragraphs):
[paragraph 1 — problem]
[paragraph 2 — solution this book provides]
[paragraph 3 — CTA]

═══ GOOGLE SEARCH ADS ═══
Headline 1: [30 chars]
Headline 2: [30 chars]
Headline 3: [30 chars]
Description 1: [90 chars]
Description 2: [90 chars]

═══ THE HOOK LINE ═══
One irresistible sentence that makes someone stop scrolling and buy:`,

  email: (b) => `Write a 5-email book launch sequence for this book.

Title: ${b!.title}
Author: ${b!.author}
Description: ${b!.description}
Buy Link: [INSERT YOUR LINK]
Price: ${b!.ebookPrice} ebook

FORMAT EACH EMAIL:
Subject: [subject line]
Preview: [preview text, 40 chars]
---
[Email body, 200–300 words, conversational, first-person from Jamaur Johnson]
---

EMAIL 1 — Day 0 (Announcement):
Build excitement. Tease what's inside. Don't reveal everything.

EMAIL 2 — Day 2 (The Origin Story):
Why this book was written. Personal story. Make it human.

EMAIL 3 — Day 4 (Transformation):
What does the reader's life look like AFTER reading this? Paint the picture.

EMAIL 4 — Day 6 (Value + Scarcity):
What they're missing without this book. Launch pricing reminder.

EMAIL 5 — Day 8 (Last Chance):
Final call. Direct. Short. Clear CTA.`,

  description: (b) => `Write an optimized book description for "${b!.title}" by ${b!.author}.

Current description: ${b!.description}
Target audience: ${b!.audience}
BISAC categories: ${b!.bisac.join(", ")}
Keywords to include naturally: ${b!.keywords.slice(0,4).join(", ")}
Price: ${b!.ebookPrice} ebook

Write THREE versions:

VERSION 1 — Amazon KDP (HTML-friendly, 4000 chars max):
Use <b> for bold, <br> for line breaks. Start with a hook. Use short paragraphs.

VERSION 2 — Short Blurb (150 words, for social media bios and press):
No HTML. Compelling, punchy.

VERSION 3 — One-Liner (under 60 chars, for ads and social bio):
The most essential sentence about this book.`,
};

export async function POST(req: NextRequest) {
  try {
    const { bookId, type } = await req.json();
    const book = BOOKS.find(b => b.id === bookId);
    if (!book) return NextResponse.json({ error: "Book not found" }, { status: 404 });
    if (!PROMPTS[type]) return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: "ANTHROPIC_API_KEY not configured. Add it to your Vercel environment variables." }, { status: 500 });
    }

    const msg = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2048,
      messages: [{ role: "user", content: PROMPTS[type](book) }],
    });

    const content = msg.content[0].type === "text" ? msg.content[0].text : "";
    return NextResponse.json({ content });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
