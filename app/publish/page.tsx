import { BOOKS } from "@/lib/books";
import { CheckCircle, ExternalLink, Upload, AlertCircle } from "lucide-react";

const Step = ({ n, text, done }: { n: number; text: string; done?: boolean }) => (
  <div className="flex items-start gap-3 py-2">
    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${done ? "bg-teal text-navy" : "bg-white/10 text-mist"}`}>
      {done ? <CheckCircle size={12}/> : n}
    </div>
    <p className="text-sm text-mist leading-relaxed">{text}</p>
  </div>
);

export default function PublishPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-8">
        <span className="tag-teal mb-3 inline-block">PUBLISHING HUB</span>
        <h1 className="text-3xl font-black mb-2">Publish to <span className="gradient-text">All Platforms</span></h1>
        <p className="text-mist text-sm">Submit your books to Amazon KDP, Draft2Digital (40+ stores), and Gumroad for direct sales.</p>
      </div>

      {/* Platform cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {/* Amazon KDP */}
        <div className="card p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-black text-lg">Amazon KDP</h2>
              <p className="text-xs text-mist">Print + Kindle • Largest reach</p>
            </div>
            <span className="tag-gold">MANUAL</span>
          </div>
          <p className="text-xs text-mist mb-4 leading-relaxed">No public API — upload through kdp.amazon.com. Use the files in your BOOKS folder.</p>
          <div className="bg-white/[0.03] rounded-lg p-4 mb-4 space-y-1">
            <Step n={1} text="Go to kdp.amazon.com → Paperback or Kindle eBook"/>
            <Step n={2} text="Enter title, subtitle, author: 'Jamaur Johnson'"/>
            <Step n={3} text="Publisher: 'New School New Money Ent'"/>
            <Step n={4} text="Paste description + 7 keywords from the Packet"/>
            <Step n={5} text="Upload Interior PDF (6×9) + Cover JPG (300 DPI)"/>
            <Step n={6} text="Set price — see Packet for per-book pricing"/>
            <Step n={7} text="Submit — live in 24–72 hours"/>
          </div>
          <div className="space-y-2 mt-auto">
            <a href="https://kdp.amazon.com" target="_blank"
               className="flex items-center justify-center gap-2 btn-teal w-full text-sm">
              Open Amazon KDP <ExternalLink size={12}/>
            </a>
            <p className="text-xs text-center text-mist">Repeat for all 7 books</p>
          </div>
        </div>

        {/* Draft2Digital */}
        <div className="card p-6 flex flex-col border-teal/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-black text-lg text-teal">Draft2Digital</h2>
              <p className="text-xs text-mist">40+ stores • API available</p>
            </div>
            <span className="tag-teal">API READY</span>
          </div>
          <p className="text-xs text-mist mb-4 leading-relaxed">One upload → Apple Books, B&N, Kobo, Scribd, OverDrive, and 35+ more. Free ISBNs included.</p>
          <div className="bg-teal/5 border border-teal/10 rounded-lg p-4 mb-4">
            <p className="text-xs font-bold text-teal mb-2">API INTEGRATION STATUS</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal/30"/>
                <span className="text-xs text-mist">D2D_API_TOKEN — not set</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle size={10} className="text-gold"/>
                <span className="text-xs text-mist">Add token to .env to enable one-click publish</span>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-4 mb-4 space-y-1">
            <Step n={1} text="Go to draft2digital.com → Add New Book"/>
            <Step n={2} text="Upload Interior PDF + Cover JPG"/>
            <Step n={3} text="Paste metadata from Publishing Packet"/>
            <Step n={4} text="Select all distribution channels"/>
            <Step n={5} text="Publish — D2D distributes everywhere automatically"/>
          </div>
          <div className="space-y-2 mt-auto">
            <a href="https://draft2digital.com" target="_blank"
               className="flex items-center justify-center gap-2 btn-ghost w-full text-sm">
              Open Draft2Digital <ExternalLink size={12}/>
            </a>
            <a href="https://draft2digital.com/api" target="_blank"
               className="text-xs text-center text-teal/60 hover:text-teal block transition-colors">
              Get API token ↗
            </a>
          </div>
        </div>

        {/* Gumroad */}
        <div className="card p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-black text-lg text-gold">Gumroad</h2>
              <p className="text-xs text-mist">Direct sales • API available</p>
            </div>
            <span className="tag-gold">API READY</span>
          </div>
          <p className="text-xs text-mist mb-4 leading-relaxed">Sell PDFs directly on your site. Embed buy buttons on jamaurjohnson.com. You keep ~95% of revenue.</p>
          <div className="bg-gold/5 border border-gold/10 rounded-lg p-4 mb-4">
            <p className="text-xs font-bold text-gold mb-2">API INTEGRATION STATUS</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold/30"/>
                <span className="text-xs text-mist">GUMROAD_ACCESS_TOKEN — not set</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle size={10} className="text-gold"/>
                <span className="text-xs text-mist">Add token to .env to auto-create listings</span>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-4 mb-4 space-y-1">
            <Step n={1} text="Go to gumroad.com → New Product"/>
            <Step n={2} text="Upload PDF + cover image"/>
            <Step n={3} text="Set price from Publishing Packet"/>
            <Step n={4} text="Copy buy link → paste into jamaurjohnson.com"/>
            <Step n={5} text="Customers buy directly, you get paid instantly"/>
          </div>
          <div className="space-y-2 mt-auto">
            <a href="https://gumroad.com" target="_blank"
               className="flex items-center justify-center gap-2 btn-ghost w-full text-sm border-gold/20 text-gold hover:bg-gold/10">
              Open Gumroad <ExternalLink size={12}/>
            </a>
            <a href="https://app.gumroad.com/settings/advanced" target="_blank"
               className="text-xs text-center text-gold/60 hover:text-gold block transition-colors">
              Get API token ↗
            </a>
          </div>
        </div>
      </div>

      {/* Book checklist */}
      <div className="card p-6">
        <h2 className="font-bold text-sm tracking-wide mb-5">SUBMISSION CHECKLIST — All 7 Books</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-mist uppercase tracking-wide border-b border-white/5">
                <th className="text-left py-2 pr-4">Book</th>
                <th className="text-left py-2 pr-4">Interior PDF</th>
                <th className="text-left py-2 pr-4">Cover JPG</th>
                <th className="text-center py-2 pr-4">KDP</th>
                <th className="text-center py-2 pr-4">D2D</th>
                <th className="text-center py-2">Gumroad</th>
              </tr>
            </thead>
            <tbody>
              {BOOKS.map(book => (
                <tr key={book.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="py-2.5 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded flex-shrink-0" style={{ backgroundColor: book.accentColor + "40" }}/>
                      <span className="font-medium truncate max-w-[180px]">{book.title}</span>
                    </div>
                  </td>
                  <td className="py-2.5 pr-4 text-xs text-teal">{book.files.interior}</td>
                  <td className="py-2.5 pr-4 text-xs text-gold">{book.files.coverJpg}</td>
                  {["kdp","d2d","gumroad"].map(p => (
                    <td key={p} className="py-2.5 pr-4 text-center">
                      <div className={`w-5 h-5 rounded border mx-auto ${book.platforms[p as keyof typeof book.platforms] ? "bg-teal border-teal" : "border-white/10"}`}/>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-mist mt-4">
          💡 Publishing Submission Packet is in your BOOKS folder with all copy-paste descriptions, keywords, and pricing for every book.
        </p>
      </div>
    </div>
  );
}
