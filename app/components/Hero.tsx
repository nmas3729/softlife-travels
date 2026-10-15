import Image from "next/image";
import { getGeneralWhatsAppUrl } from "../config/business";

export function Hero() {
  const { url: whatsappUrl, isConfigured } = getGeneralWhatsAppUrl();

  return (
    <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#0f1e2e]">
      {/* Immersive Travel Photography with Next Image & Rich Ocean Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85"
          alt="Luxury coastal turquoise waters - Soft Life Travels"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle, elegant dark ocean vignette for readable text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08111b]/90 via-[#0f1e2e]/75 to-[#08111b]/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 text-center flex flex-col items-center">
        {/* Subtle Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c29b53]/40 bg-[#0f1e2e]/70 backdrop-blur-md mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c29b53]" />
          <span className="text-[11px] uppercase font-semibold tracking-[0.25em] text-[#dfbe7e]">
            Curated Escapes &amp; Bespoke Tours
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.12] mb-6 drop-shadow-sm">
          Live the <span className="italic font-light text-[#c29b53]">Soft Life</span> you deserve.
        </h1>

        {/* Supporting Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-[#faf8f5]/90 font-normal leading-relaxed mb-10">
          Handcrafted getaways, tranquil retreats, and unforgettable group tours designed for those who appreciate comfort, elegance, and effortless planning.
        </p>

        {/* Clear Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#packages"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c29b53] hover:bg-[#dfbe7e] text-[#08111b] font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
          >
            Explore Tour Packages
          </a>
          <a
            href={isConfigured ? whatsappUrl : "#contact"}
            target={isConfigured ? "_blank" : undefined}
            rel={isConfigured ? "noopener noreferrer" : undefined}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 hover:border-[#c29b53] bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 backdrop-blur-md text-center flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4 fill-[#c29b53]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
            </svg>
            <span>Book via WhatsApp</span>
          </a>
        </div>

        {/* Three Value Pillars */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 border-t border-white/15 pt-8 w-full max-w-3xl">
          <div>
            <p className="font-serif text-lg sm:text-xl text-[#c29b53]">Handpicked</p>
            <p className="text-[11px] uppercase tracking-wider text-white/75 mt-1 font-medium">
              Curated Escapes
            </p>
          </div>
          <div>
            <p className="font-serif text-lg sm:text-xl text-[#c29b53]">Direct</p>
            <p className="text-[11px] uppercase tracking-wider text-white/75 mt-1 font-medium">
              WhatsApp Concierge
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="font-serif text-lg sm:text-xl text-[#c29b53]">Seamless</p>
            <p className="text-[11px] uppercase tracking-wider text-white/75 mt-1 font-medium">
              Stress-Free Travel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
