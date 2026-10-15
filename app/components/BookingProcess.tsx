export function BookingProcess() {
  const steps = [
    {
      number: "01",
      title: "Discover & Choose",
      description:
        "Explore our curated tour packages or specify your custom dream destination, preferred dates, and party size.",
    },
    {
      number: "02",
      title: "WhatsApp Consultation",
      description:
        "Select any package to initiate a direct WhatsApp conversation with prefilled itinerary details. Receive available dates and quote.",
    },
    {
      number: "03",
      title: "Confirm & Prepare",
      description:
        "Review your tailored schedule, confirm booking arrangements directly with our team, and prepare for an effortless journey.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#f2ece1]/70 relative scroll-mt-10 border-y border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#c29b53] mb-3">
            Transparent &amp; Personal
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0f1e2e] tracking-tight mb-4">
            How Booking Works
          </h2>
          <div className="w-16 h-0.5 bg-[#c29b53] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#566474] leading-relaxed">
            We don’t rely on confusing automated payment portals. Every holiday is personally verified
            and coordinated with you through direct WhatsApp messaging for peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-zinc-200/80 flex flex-col justify-between relative hover:border-[#c29b53]/40 transition-colors"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#c29b53]/40 block mb-4">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0f1e2e] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#566474] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-[10px] font-bold tracking-wider text-[#c29b53] uppercase">
                Step {idx + 1} of 3
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
