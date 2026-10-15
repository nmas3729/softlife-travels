import { businessConfig } from "../config/business";

export function Footer() {
  return (
    <footer className="bg-[#08111b] text-[#faf8f5]/70 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif tracking-widest text-lg sm:text-xl font-bold text-white">
              SOFT LIFE TRAVELS
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c29b53] font-medium">
              Curated Escapes &amp; Tailored Tours
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-white/80">
            <a href="#packages" className="hover:text-[#c29b53] transition-colors">
              Packages
            </a>
            <a href="#experience" className="hover:text-[#c29b53] transition-colors">
              Philosophy
            </a>
            <a href="#about" className="hover:text-[#c29b53] transition-colors">
              About
            </a>
            <a href="#process" className="hover:text-[#c29b53] transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-[#c29b53] transition-colors">
              Contact
            </a>
          </div>

          {/* Official Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={businessConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-[#dfbe7e] hover:text-white underline underline-offset-4 transition-colors"
            >
              Facebook Page ↗
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#faf8f5]/50 text-center md:text-left">
          <p>
            &copy; 2026 {businessConfig.name}. All rights reserved.
          </p>
          <p className="max-w-xl text-[11px] leading-relaxed">
            Illustrative travel photography sourced from royalty-free archives. Tour package availability, dates, and final pricing are confirmed directly with Soft Life Travels on WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}
