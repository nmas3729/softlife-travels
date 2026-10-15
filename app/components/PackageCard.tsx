"use client";

import { useState } from "react";
import Image from "next/image";
import { TravelPackage } from "../data/packages";
import { getWhatsAppBookingUrl, EnquiryContext } from "../config/business";

interface PackageCardProps {
  packageData: TravelPackage;
  searchContext?: EnquiryContext;
}

export function PackageCard({ packageData, searchContext }: PackageCardProps) {
  const [imageError, setImageError] = useState(false);

  const { url: whatsappUrl, isConfigured } = getWhatsAppBookingUrl(
    packageData.title,
    searchContext
  );

  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        `WhatsApp enquiry for "${packageData.title}" is ready, but the business phone number is currently pending configuration. Please check the Contact section or reach out via Facebook.`
      );
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Fallback placeholder image if remote asset fails to load
  const fallbackImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80";

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200/80 hover:border-[#c29b53]/40 flex-1">
      {/* 16:10 Consistent Image Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
        <Image
          src={imageError ? fallbackImage : packageData.imageUrl}
          alt={packageData.imageAlt || `${packageData.title} - ${packageData.destination}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          onError={() => setImageError(true)}
        />
        {/* Dark subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
          <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-[#0f1e2e]/85 backdrop-blur-md text-[#dfbe7e] border border-[#c29b53]/30">
            {packageData.tag}
          </span>
          <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wide rounded-full bg-white/95 backdrop-blur-md text-[#0f1e2e] shadow-sm">
            {packageData.duration}
          </span>
        </div>

        {/* Bottom Destination Caption */}
        <div className="absolute bottom-3 left-4 right-4 text-white z-10">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-white/80">
            {packageData.country}
          </p>
          <p className="text-sm font-bold tracking-wide truncate">
            {packageData.destination}
          </p>
        </div>
      </div>

      {/* Package Content & Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase font-bold text-[#c29b53] tracking-wider">
              {packageData.tripType}
            </span>
            <span className="text-zinc-300">•</span>
            <span className="text-[10px] text-zinc-400 font-medium">
              Sample Itinerary
            </span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0f1e2e] mb-2 group-hover:text-[#c29b53] transition-colors leading-snug">
            {packageData.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#566474] leading-relaxed mb-5 line-clamp-3">
            {packageData.summary}
          </p>

          {/* Package Inclusions */}
          <div className="mb-5 pt-4 border-t border-zinc-100">
            <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#0f1e2e]/80 mb-2.5">
              Experience Inclusions:
            </h4>
            <ul className="space-y-1.5">
              {packageData.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-xs text-[#566474] leading-normal"
                >
                  <svg
                    className="w-3.5 h-3.5 text-[#c29b53] mr-2 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Notice & Direct WhatsApp CTA */}
        <div className="pt-4 border-t border-zinc-100 mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                Pricing
              </span>
              <span className="text-sm font-bold text-[#0f1e2e]">
                {packageData.priceDisplay}
              </span>
            </div>
            <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Custom Quote
            </span>
          </div>

          <a
            href={whatsappUrl}
            target={isConfigured ? "_blank" : undefined}
            rel={isConfigured ? "noopener noreferrer" : undefined}
            onClick={handleEnquiryClick}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#0f1e2e] hover:bg-[#1b2e43] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-md"
          >
            <svg
              className="w-4 h-4 fill-[#c29b53]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
            </svg>
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
