export function WhyUs() {
  const pillars = [
    {
      title: "Effortless Planning",
      description:
        "Skip complicated booking systems. Chat directly with us to organize stays, transfers, and tailored itineraries without friction.",
      icon: (
        <svg
          className="w-5 h-5 text-[#c29b53]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Handpicked Stays",
      description:
        "Every hotel, coastal suite, and safari lodge is selected for superior aesthetics, warm service, and genuine relaxation.",
      icon: (
        <svg
          className="w-5 h-5 text-[#c29b53]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Direct WhatsApp Line",
      description:
        "Quick human responses. Connect with a dedicated travel coordinator who assists you before, during, and after your journey.",
      icon: (
        <svg
          className="w-5 h-5 text-[#c29b53]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "Custom Group Packages",
      description:
        "Whether it’s a romantic escape, a birthday gathering, or a corporate recharge, our trips adapt to your party size.",
      icon: (
        <svg
          className="w-5 h-5 text-[#c29b53]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#0f1e2e] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#c29b53] mb-3">
            The Soft Life Difference
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Why Travel With Us
          </h2>
          <div className="w-16 h-0.5 bg-[#c29b53] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#faf8f5]/80 leading-relaxed">
            We focus on thoughtful leisure where logistical hurdles are handled behind the scenes, leaving you free to immerse in breathtaking destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-[#08111b]/60 border border-white/10 hover:border-[#c29b53]/40 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/10">
                  {item.icon}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#faf8f5]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
