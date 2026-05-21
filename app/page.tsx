import { BOOKS, tradeBooks, liv8Books } from "@/lib/books";
import { BookOpen, Zap, Globe, TrendingUp, ArrowRight, CheckCircle, Clock } from "lucide-react";

const StatCard = ({ label, value, sub, color = "teal" }: { label: string; value: string; sub: string; color?: string }) => (
  <div className="card p-5">
    <p className="text-xs text-mist uppercase tracking-widest mb-1">{label}</p>
    <p className={`text-3xl font-black ${color === "gold" ? "text-gold" : color === "amber" ? "text-amber" : "text-teal"}`}>{value}</p>
    <p className="text-xs text-mist mt-1">{sub}</p>
  </div>
);

const BookRow = ({ book }: { book: (typeof BOOKS)[0] }) => (
  <div className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] rounded px-2 -mx-2 transition-colors group">
    <div className="w-8 h-10 rounded flex items-center justify-center text-navy font-black text-sm flex-shrink-0"
         style={{ backgroundColor: book.accentColor }}>
      {book.num}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold text-white truncate">{book.title}</p>
      <p className="text-xs text-mist truncate">{book.subtitle}</p>
    </div>
    <span className={book.imprint === "TRADE HYBRID" ? "tag-teal" : "tag-amber"}>{book.imprint}</span>
    <div className="flex items-center gap-1.5">
      {(["kdp","d2d","gumroad"] as const).map(p => (
        <div key={p} title={p.toUpperCase()}
             className={`w-2 h-2 rounded-full ${book.platforms[p] ? "bg-teal" : "bg-white/10"}`} />
      ))}
    </div>
    <span className="text-xs tag-teal flex items-center gap-1"><CheckCircle size={10}/> Ready</span>
    <a href={`/publish?book=${book.id}`} className="opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowRight size={14} className="text-teal" />
    </a>
  </div>
);

export default function Dashboard() {
  const total = BOOKS.length;
  const tradeCount = tradeBooks().length;
  const liv8Count = liv8Books().length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="tag-teal">PUBLISHING STUDIO</span>
          <span className="text-mist text-xs">·</span>
          <span className="text-xs text-mist">New School New Money Ent</span>
        </div>
        <h1 className="text-4xl font-black mb-2">
          Good to see you, <span className="gradient-text">Jamaur.</span>
        </h1>
        <p className="text-mist">You have {total} books ready to publish across Amazon KDP, Draft2Digital, and Gumroad.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <StatCard label="Total Books" value={String(total)} sub="All formats ready" />
        <StatCard label="Trade Hybrid" value={String(tradeCount)} sub="tradehybrid.co" color="teal" />
        <StatCard label="LIV8 LLC" value={String(liv8Count)} sub="jamaurjohnson.com" color="amber" />
        <StatCard label="Platforms" value="3" sub="KDP · D2D · Gumroad" color="gold" />
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <a href="/publish" className="card p-5 flex items-start gap-4 hover:glow-teal cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
            <Globe size={18} className="text-teal" />
          </div>
          <div>
            <p className="font-bold text-sm mb-1">Publish to Stores</p>
            <p className="text-xs text-mist">Submit all 7 books to Amazon KDP, Draft2Digital, and Gumroad with guided upload flows.</p>
          </div>
          <ArrowRight size={14} className="text-teal flex-shrink-0 mt-0.5" />
        </a>
        <a href="/market" className="card p-5 flex items-start gap-4 hover:glow-gold cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
            <Zap size={18} className="text-gold" />
          </div>
          <div>
            <p className="font-bold text-sm mb-1">Generate Marketing</p>
            <p className="text-xs text-mist">AI-generated social posts, ad copy, and email launch sequences for any book.</p>
          </div>
          <ArrowRight size={14} className="text-gold flex-shrink-0 mt-0.5" />
        </a>
        <a href="/books" className="card p-5 flex items-start gap-4 cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
            <BookOpen size={18} className="text-mist" />
          </div>
          <div>
            <p className="font-bold text-sm mb-1">Book Library</p>
            <p className="text-xs text-mist">View all books, metadata, keywords, descriptions, and file status.</p>
          </div>
          <ArrowRight size={14} className="text-mist flex-shrink-0 mt-0.5" />
        </a>
      </div>

      {/* Book list */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-sm tracking-wide">TRADE HYBRID <span className="text-teal">BOOKS</span></h2>
            <span className="text-xs text-mist">tradehybrid.co</span>
          </div>
          {tradeBooks().map(b => <BookRow key={b.id} book={b} />)}
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-sm tracking-wide">LIV8 LLC <span className="text-amber">BOOKS</span></h2>
            <span className="text-xs text-mist">jamaurjohnson.com</span>
          </div>
          {liv8Books().map(b => <BookRow key={b.id} book={b} />)}
        </div>
      </div>

      {/* Platform status */}
      <div className="card p-6 mt-6">
        <h2 className="font-bold text-sm tracking-wide mb-4">PLATFORM STATUS</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Amazon KDP", desc: "Print + Kindle • 24–72hr review", note: "Manual upload required", color: "text-gold" },
            { name: "Draft2Digital", desc: "40+ stores • Apple, B&N, Kobo, Scribd", note: "API ready — add token to deploy", color: "text-teal" },
            { name: "Gumroad", desc: "Direct sales • jamaurjohnson.com links", note: "API ready — add token to deploy", color: "text-teal" },
          ].map(p => (
            <div key={p.name} className="bg-white/[0.03] rounded-lg p-4 border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={12} className="text-mist" />
                <span className={`font-bold text-sm ${p.color}`}>{p.name}</span>
              </div>
              <p className="text-xs text-mist mb-2">{p.desc}</p>
              <p className="text-xs text-white/40">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
