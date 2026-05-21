"use client";
import { useState } from "react";
import { BOOKS } from "@/lib/books";
import { Zap, Copy, Check, ChevronDown } from "lucide-react";

type ContentType = "social" | "adcopy" | "email" | "description";

const CONTENT_TYPES: { id: ContentType; label: string; desc: string }[] = [
  { id: "social",      label: "Social Media Posts",  desc: "Instagram, Twitter/X, LinkedIn, Facebook" },
  { id: "adcopy",      label: "Ad Copy",              desc: "Amazon Sponsored, Meta Ads, Google Ads" },
  { id: "email",       label: "Email Launch Sequence", desc: "5-email drip campaign for book launch" },
  { id: "description", label: "Book Description",     desc: "Store-ready blurb optimized for discovery" },
];

export default function MarketPage() {
  const [bookId, setBookId]     = useState(BOOKS[0].id);
  const [type, setType]         = useState<ContentType>("social");
  const [output, setOutput]     = useState("");
  const [loading, setLoading]   = useState(false);
  const [copied, setCopied]     = useState(false);
  const [error, setError]       = useState("");

  const book = BOOKS.find(b => b.id === bookId)!;

  const generate = async () => {
    setLoading(true); setOutput(""); setError("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId, type }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed");
      setOutput(data.content);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-8">
        <span className="tag-gold mb-3 inline-block">MARKETING ENGINE</span>
        <h1 className="text-3xl font-black mb-2">AI <span className="gradient-text">Marketing Generator</span></h1>
        <p className="text-mist text-sm">Powered by Claude — generate launch-ready content for any book in seconds.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div className="card p-4">
            <p className="text-xs text-mist uppercase tracking-wide mb-3">Select Book</p>
            <div className="space-y-2">
              {BOOKS.map(b => (
                <button key={b.id} onClick={() => setBookId(b.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${bookId === b.id ? "bg-teal/10 border border-teal/30 text-teal" : "hover:bg-white/5 text-mist border border-transparent"}`}>
                  <span className="font-semibold block truncate">{b.title}</span>
                  <span className={`text-xs ${b.imprint === "TRADE HYBRID" ? "text-teal/60" : "text-amber/60"}`}>{b.imprint}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="card p-4">
            <p className="text-xs text-mist uppercase tracking-wide mb-3">Content Type</p>
            <div className="space-y-2">
              {CONTENT_TYPES.map(ct => (
                <button key={ct.id} onClick={() => setType(ct.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${type === ct.id ? "bg-gold/10 border border-gold/30 text-gold" : "hover:bg-white/5 text-mist border border-transparent"}`}>
                  <span className="font-semibold block">{ct.label}</span>
                  <span className="text-xs opacity-60">{ct.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <button onClick={generate} disabled={loading}
            className="btn-teal w-full flex items-center justify-center gap-2">
            {loading ? <><span className="spinner"/><span>Generating...</span></> : <><Zap size={14}/><span>Generate Content</span></>}
          </button>
        </div>

        {/* Output */}
        <div className="md:col-span-2">
          <div className="card p-6 min-h-[500px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-bold text-sm">{book.title}</p>
                <p className="text-xs text-mist">{CONTENT_TYPES.find(c=>c.id===type)?.label}</p>
              </div>
              {output && (
                <button onClick={copy} className="btn-ghost flex items-center gap-1.5 text-xs py-1.5">
                  {copied ? <><Check size={12}/> Copied</> : <><Copy size={12}/> Copy All</>}
                </button>
              )}
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
                <p className="text-sm text-red-400">{error}</p>
                <p className="text-xs text-red-400/60 mt-1">Make sure ANTHROPIC_API_KEY is set in your environment variables.</p>
              </div>
            )}

            {!output && !loading && !error && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Zap size={24} className="text-gold" />
                </div>
                <p className="text-mist text-sm mb-1">Select a book and content type</p>
                <p className="text-mist/50 text-xs">Claude will generate ready-to-use copy instantly</p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="spinner" style={{width:32,height:32}}/>
                <p className="text-mist text-sm mt-4">Claude is writing your content...</p>
              </div>
            )}

            {output && (
              <div className="flex-1 overflow-y-auto">
                <pre className="text-sm text-white/85 whitespace-pre-wrap leading-relaxed font-sans">{output}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
