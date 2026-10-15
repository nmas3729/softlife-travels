"use client";

import { useState, useMemo } from "react";
import { samplePackages, TravelPackage } from "../data/packages";
import { PackageCard } from "./PackageCard";
import { SearchPanel } from "./SearchPanel";
import { EnquiryContext, getGeneralWhatsAppUrl } from "../config/business";

export function TravelCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchFilters, setSearchFilters] = useState<EnquiryContext>({
    destination: "",
    travelPeriod: "",
    guests: 2,
  });

  // Extract unique categories/trip types
  const categories = useMemo(() => {
    const list = Array.from(new Set(samplePackages.map((p) => p.tripType)));
    return ["All", ...list];
  }, []);

  // Extract unique destination cities/regions for search dropdown
  const destinationsList = useMemo(() => {
    return Array.from(new Set(samplePackages.map((p) => p.destination)));
  }, []);

  // Filter packages based on category pill and search inputs
  const filteredPackages = useMemo(() => {
    return samplePackages.filter((pkg) => {
      // Category filter
      if (selectedCategory !== "All" && pkg.tripType !== selectedCategory) {
        return false;
      }
      // Destination filter (checks destination string, country, or region)
      if (searchFilters.destination && searchFilters.destination.trim() !== "") {
        const query = searchFilters.destination.toLowerCase().trim();
        const matchesDestination = pkg.destination.toLowerCase().includes(query);
        const matchesRegion = pkg.region.toLowerCase().includes(query);
        const matchesCountry = pkg.country.toLowerCase().includes(query);
        if (!matchesDestination && !matchesRegion && !matchesCountry) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchFilters]);

  const { url: customWhatsAppUrl, isConfigured } = getGeneralWhatsAppUrl(searchFilters);

  const handleCustomEnquiry = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        "WhatsApp booking is ready, but the phone number is pending configuration. Please see the Contact section."
      );
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory("All");
    setSearchFilters({ destination: "", travelPeriod: "", guests: 2 });
  };

  const hasActiveFilters =
    Boolean(searchFilters.destination) ||
    Boolean(searchFilters.travelPeriod) ||
    selectedCategory !== "All";

  return (
    <div className="relative">
      {/* Interactive Trip Discovery Search Panel */}
      <SearchPanel
        onSearchChange={setSearchFilters}
        activeFilters={searchFilters}
        destinations={destinationsList}
      />

      {/* Catalogue & Packages Section */}
      <section id="packages" className="pt-20 pb-28 bg-[#faf8f5] relative scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#c29b53] mb-3">
              Explore Our Curated Escapes
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0f1e2e] tracking-tight mb-4">
              Tour Packages &amp; Stays
            </h2>
            <div className="w-16 h-0.5 bg-[#c29b53] mx-auto mb-5" />
            <p className="text-sm sm:text-base text-[#566474] leading-relaxed">
              Browse handpicked sample travel packages tailored for relaxed comfort, luxury stays, and seamless group experiences.
              Select any package to enquire directly via WhatsApp.
            </p>
          </div>

          {/* Category Filter Pills (work collaboratively with search) */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-[#0f1e2e] text-[#dfbe7e] shadow-md border border-[#c29b53]/40"
                      : "bg-white text-zinc-600 hover:text-[#0f1e2e] hover:bg-[#f2ece1]/50 border border-zinc-200"
                  }`}
                >
                  {cat === "All" ? "All Experiences" : cat}
                </button>
              );
            })}
          </div>

          {/* Active Filter Indicators */}
          {hasActiveFilters && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-xl p-3 px-5 mb-8 border border-zinc-200 text-xs text-zinc-600 gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-zinc-400">Active filters:</span>
                {selectedCategory !== "All" && (
                  <span className="bg-[#faf8f5] border border-[#c29b53]/30 text-[#0f1e2e] px-2.5 py-0.5 rounded-full font-semibold">
                    Category: {selectedCategory}
                  </span>
                )}
                {searchFilters.destination && (
                  <span className="bg-[#faf8f5] border border-[#c29b53]/30 text-[#0f1e2e] px-2.5 py-0.5 rounded-full font-semibold">
                    Destination: {searchFilters.destination}
                  </span>
                )}
                {searchFilters.travelPeriod && (
                  <span className="bg-[#faf8f5] border border-[#c29b53]/30 text-[#0f1e2e] px-2.5 py-0.5 rounded-full font-semibold">
                    Period: {searchFilters.travelPeriod}
                  </span>
                )}
                {searchFilters.guests && searchFilters.guests !== 2 && (
                  <span className="bg-[#faf8f5] border border-[#c29b53]/30 text-[#0f1e2e] px-2.5 py-0.5 rounded-full font-semibold">
                    Guests: {searchFilters.guests}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-[#c29b53] hover:text-[#987532] font-bold underline underline-offset-2 shrink-0 self-start sm:self-auto"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Package Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg: TravelPackage) => (
                <PackageCard
                  key={pkg.id}
                  packageData={pkg}
                  searchContext={searchFilters}
                />
              ))}
            </div>
          ) : (
            /* Helpful Empty State */
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-zinc-300 p-8 max-w-2xl mx-auto shadow-sm">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-[#c29b53] flex items-center justify-center mx-auto mb-4 border border-amber-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#0f1e2e] mb-2 font-bold">
                No matching tour packages found
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mb-6 max-w-md mx-auto leading-relaxed">
                We couldn&apos;t find an exact pre-packaged itinerary matching &quot;
                {searchFilters.destination || selectedCategory}&quot;. We create bespoke packages for any destination or party size!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#0f1e2e] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Clear Filters &amp; View All
                </button>
                <a
                  href={customWhatsAppUrl}
                  target={isConfigured ? "_blank" : undefined}
                  rel={isConfigured ? "noopener noreferrer" : undefined}
                  onClick={handleCustomEnquiry}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0f1e2e] hover:bg-[#1b2e43] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-[#c29b53]" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                  </svg>
                  <span>Enquire for Custom Trip</span>
                </a>
              </div>
            </div>
          )}

          {/* Context Note */}
          <div className="mt-12 text-center">
            <p className="text-[11px] text-zinc-400 max-w-xl mx-auto leading-relaxed">
              * Sample itineraries shown. Travel dates, private inclusions, and final quotes are confirmed directly with our trip specialists via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
