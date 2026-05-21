import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TradeHybrid Publishing",
  description: "Publishing dashboard for Jamaur Johnson — New School New Money Ent",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-navy text-white antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-teal/10 bg-navy/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-teal flex items-center justify-center">
                <span className="text-navy font-black text-xs">TH</span>
              </div>
              <span className="font-bold text-sm tracking-wide">PUBLISHING <span className="text-teal">STUDIO</span></span>
            </a>
            <div className="flex items-center gap-1">
              {[
                ["/", "Dashboard"],
                ["/books", "Books"],
                ["/publish", "Publish"],
                ["/market", "Marketing"],
              ].map(([href, label]) => (
                <a key={href} href={href}
                   className="px-3 py-1.5 text-sm text-mist hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  {label}
                </a>
              ))}
            </div>
            <a href="https://tradehybrid.co" target="_blank"
               className="text-xs text-teal/60 hover:text-teal transition-colors">tradehybrid.co ↗</a>
          </div>
        </nav>
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
