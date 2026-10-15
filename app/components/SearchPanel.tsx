"use client";

import { useState } from "react";
import { EnquiryContext } from "../config/business";

interface SearchPanelProps {
  onSearchChange: (filters: EnquiryContext) => void;
  activeFilters: EnquiryContext;
  destinations: string[];
}

export function SearchPanel({
  onSearchChange,
  activeFilters,
  destinations,
}: SearchPanelProps) {
  const [destination, setDestination] = useState(activeFilters.destination || "");
  const [travelPeriod, setTravelPeriod] = useState(activeFilters.travelPeriod || "");
  const [guests, setGuests] = useState(activeFilters.guests || 2);

  // Keep local inputs synchronized if parent resets filters
  if (
    activeFilters.destination === "" &&
    destination !== "" &&
    activeFilters.travelPeriod === "" &&
    travelPeriod !== "" &&
    activeFilters.guests === 2 &&
    guests !== 2
  ) {
    setDestination("");
    setTravelPeriod("");
    setGuests(2);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange({
      destination: destination.trim(),
      travelPeriod: travelPeriod.trim(),
      guests: Number(guests) || 2,
    });
    // Scroll smoothly to packages grid
    const catalogueEl = document.getElementById("packages");
    if (catalogueEl) {
      catalogueEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setDestination("");
    setTravelPeriod("");
    setGuests(2);
    onSearchChange({
      destination: "",
      travelPeriod: "",
      guests: 2,
    });
  };

  const hasActiveInputs =
    destination !== "" || travelPeriod !== "" || guests !== 2 ||
    Boolean(activeFilters.destination || activeFilters.travelPeriod);

  return (
    <div className="w-full max-w-5xl mx-auto -mt-10 sm:-mt-12 relative z-20 px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-zinc-200/80 transition-all duration-300"
      >
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-zinc-100 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c29b53]" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0f1e2e]">
              Search Available Tours &amp; Escapes
            </h3>
          </div>
          <span className="text-[11px] text-zinc-400 font-medium">
            Tailored quotes &amp; verified dates via WhatsApp
          </span>
        </div>

        {/* Input Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Destination Selector */}
          <div className="flex flex-col bg-[#faf8f5] rounded-xl p-3 border border-zinc-200 focus-within:border-[#c29b53] focus-within:bg-white transition-all">
            <label
              htmlFor="destination-select"
              className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1"
            >
              Destination / Area
            </label>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#c29b53] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <select
                id="destination-select"
                aria-label="Filter by destination or area"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0f1e2e] outline-none cursor-pointer"
              >
                <option value="">All Destinations</option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Travel Period / Target Date */}
          <div className="flex flex-col bg-[#faf8f5] rounded-xl p-3 border border-zinc-200 focus-within:border-[#c29b53] focus-within:bg-white transition-all">
            <label
              htmlFor="period-select"
              className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1"
            >
              Intended Travel Period
            </label>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#c29b53] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <select
                id="period-select"
                aria-label="Select intended travel period"
                value={travelPeriod}
                onChange={(e) => setTravelPeriod(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0f1e2e] outline-none cursor-pointer"
              >
                <option value="">Any Upcoming Season</option>
                <option value="November 2026">November 2026</option>
                <option value="December 2026">December Holidays (Peak)</option>
                <option value="January 2027">January New Year</option>
                <option value="Easter / Autumn">Easter &amp; Long Weekends</option>
                <option value="Winter Safari">Mid-Year Safari Season</option>
              </select>
            </div>
          </div>

          {/* Party Size Selector */}
          <div className="flex flex-col bg-[#faf8f5] rounded-xl p-3 border border-zinc-200 focus-within:border-[#c29b53] focus-within:bg-white transition-all">
            <label
              htmlFor="guests-select"
              className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1"
            >
              Travellers / Party
            </label>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#c29b53] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <select
                id="guests-select"
                aria-label="Select number of travellers"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0f1e2e] outline-none cursor-pointer"
              >
                <option value={1}>1 Solo Traveller</option>
                <option value={2}>2 Guests (Couple / Pair)</option>
                <option value={4}>3 – 4 Guests (Small Group)</option>
                <option value={6}>5 – 8 Guests (Friends / Family)</option>
                <option value={10}>8+ Guests (Group Tour)</option>
              </select>
            </div>
          </div>

          {/* Submit & Reset Actions */}
          <div className="flex items-stretch gap-2">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-[#0f1e2e] hover:bg-[#1b2e43] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-4 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 text-[#c29b53]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Search Trips</span>
            </button>
            {hasActiveInputs && (
              <button
                type="button"
                onClick={handleReset}
                title="Reset search filters"
                className="px-3 rounded-xl border border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100 text-xs font-medium transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
