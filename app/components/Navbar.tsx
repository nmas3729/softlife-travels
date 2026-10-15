"use client";

import { useState } from "react";
import { getGeneralWhatsAppUrl } from "../config/business";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { url: whatsappUrl, isConfigured } = getGeneralWhatsAppUrl();

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        "WhatsApp number is not configured yet. Please configure 'whatsappNumber' in app/config/business.ts before going live."
      );
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f1e2e]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tag */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif tracking-widest text-lg sm:text-2xl font-bold text-white group-hover:text-[#c29b53] transition-colors">
              SOFT LIFE
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#c29b53] font-medium -mt-1">
              TRAVELS &amp; ESCAPES
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-white/80">
            <a
              href="#packages"
              className="hover:text-[#c29b53] transition-colors py-1"
            >
              Tour Packages
            </a>
            <a
              href="#experience"
              className="hover:text-[#c29b53] transition-colors py-1"
            >
              Why Travel With Us
            </a>
            <a
              href="#about"
              className="hover:text-[#c29b53] transition-colors py-1"
            >
              About
            </a>
            <a
              href="#process"
              className="hover:text-[#c29b53] transition-colors py-1"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="hover:text-[#c29b53] transition-colors py-1"
            >
              Contact
            </a>
          </nav>

          {/* Prominent Yet Elegant WhatsApp Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target={isConfigured ? "_blank" : undefined}
              rel={isConfigured ? "noopener noreferrer" : undefined}
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c29b53] hover:bg-[#dfbe7e] text-[#08111b] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]"
            >
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
              </svg>
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={whatsappUrl}
              target={isConfigured ? "_blank" : undefined}
              rel={isConfigured ? "noopener noreferrer" : undefined}
              onClick={handleWhatsAppClick}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-[#c29b53] text-[#08111b] text-[11px] font-bold uppercase tracking-wider"
            >
              Enquire
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#c29b53] focus:outline-none p-1.5 rounded-lg border border-white/10"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08111b] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          <a
            href="#packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-white/90 hover:text-[#c29b53] rounded-md"
          >
            Tour Packages
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-white/90 hover:text-[#c29b53] rounded-md"
          >
            Why Travel With Us
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-white/90 hover:text-[#c29b53] rounded-md"
          >
            About Soft Life
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-white/90 hover:text-[#c29b53] rounded-md"
          >
            How It Works
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-white/90 hover:text-[#c29b53] rounded-md"
          >
            Contact
          </a>
          <div className="pt-3 border-t border-white/10">
            <a
              href={whatsappUrl}
              target={isConfigured ? "_blank" : undefined}
              rel={isConfigured ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleWhatsAppClick(e);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#c29b53] text-[#08111b] text-xs font-bold uppercase tracking-wider"
            >
              <span>Direct WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
