import { BOOKS } from "@/lib/books";
import { FileText, Tag, Users, DollarSign } from "lucide-react";

export default function BooksPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-8">
        <span className="tag-teal mb-3 inline-block">BOOK LIBRARY</span>
        <h1 className="text-3xl font-black mb-2">All <span className="gradient-text">7 Books</span></h1>
        <p className="text-mist text-sm">Complete metadata, descriptions, and file status for every title.</p>
      </div>

      <div className="space-y-4">
        {BOOKS.map(book => (
          <div key={book.id} className="card p-6">
            <div className="flex items-start gap-5">
              {/* Number badge */}
              <div className="w-12 h-14 rounded-lg flex items-center justify-center font-black text-xl text-navy flex-shrink-0"
                   style={{ backgroundColor: book.accentColor }}>
                {book.num}
              </div>

              <div className="flex-1 min-w-0">
                {/* Title row */}
                <div className="flex flex-wrap items-start gap-2 mb-1">
                  <h2 className="font-black text-lg">{book.title}</h2>
                  <span className={book.imprint === "TRADE HYBRID" ? "tag-teal" : "tag-amber"}>{book.imprint}</span>
                </div>
                <p className="text-mist text-sm mb-4">{book.subtitle}</p>

                {/* Meta grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="bg-white/[0.03] rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-1"><FileText size={10} className="text-mist"/><span className="text-xs text-mist uppercase tracking-wide">Pages</span></div>
                    <p className="font-bold text-sm">~{book.pages} pg</p>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-1"><DollarSign size={10} className="text-mist"/><span className="text-xs text-mist uppercase tracking-wide">Pricing</span></div>
                    <p className="font-bold text-sm">{book.ebookPrice} <span className="text-mist font-normal">/ {book.printPrice}</span></p>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-1"><Tag size={10} className="text-mist"/><span className="text-xs text-mist uppercase tracking-wide">BISAC</span></div>
                    <p className="font-bold text-sm text-xs truncate">{book.bisac[0]}</p>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-1"><Users size={10} className="text-mist"/><span className="text-xs text-mist uppercase tracking-wide">Audience</span></div>
                    <p className="font-bold text-sm text-xs truncate">{book.audience.split(",")[0]}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-mist/80 leading-relaxed mb-4 line-clamp-3">{book.description}</p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {book.keywords.map(kw => (
                    <span key={kw} className="text-xs bg-white/5 text-mist/70 px-2 py-0.5 rounded">{kw}</span>
                  ))}
                </div>

                {/* Files */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-xs bg-teal/10 text-teal px-3 py-1.5 rounded-lg">
                    <FileText size={10}/>{book.files.interior}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs bg-gold/10 text-gold px-3 py-1.5 rounded-lg">
                    <FileText size={10}/>{book.files.coverJpg}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                <a href={`/publish?book=${book.id}`} className="btn-teal text-xs text-center">Publish</a>
                <a href={`/market?book=${book.id}`} className="btn-ghost text-xs text-center">Market</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
