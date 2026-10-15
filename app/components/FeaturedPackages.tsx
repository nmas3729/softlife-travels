import { samplePackages } from "../data/packages";
import { PackageCard } from "./PackageCard";

export function FeaturedPackages() {
  return (
    <section id="packages" className="py-24 bg-[#faf7f2] relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c49e58] mb-3">
            Provisional Itineraries &amp; Escapes
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#143026] tracking-tight mb-4">
            Curated Tour Packages
          </h2>
          <div className="w-16 h-0.5 bg-[#c49e58] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#5c6660] leading-relaxed">
            Browse our sample travel packages designed for relaxation, discovery, and complete comfort.
            Contact us directly on WhatsApp to get the current season dates, tailored itineraries, and group quotes.
          </p>
          
          <div className="mt-4 inline-block bg-amber-50 border border-amber-200 text-amber-800 text-xs px-4 py-2 rounded-lg">
            <strong>Note:</strong> Package destinations below are demonstrative concepts pending final confirmation from the client’s Facebook post schedule.
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePackages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

