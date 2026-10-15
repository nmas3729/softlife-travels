"use client";

import { businessConfig, getGeneralWhatsAppUrl } from "../config/business";

export function ContactSection() {
  const { url: whatsappUrl, isConfigured } = getGeneralWhatsAppUrl();

  const handleWhatsAppAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        "Notice: The official WhatsApp phone number is currently pending confirmation from the client. To configure, update 'whatsappNumber' in app/config/business.ts."
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#08111b] text-white relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Contact Info & Value Proposition */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c29b53]/40 bg-[#0f1e2e] text-[#dfbe7e] text-xs uppercase tracking-widest mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-6">
              Start Planning Your Next Getaway
            </h2>
            <p className="text-sm sm:text-base text-[#faf8f5]/80 leading-relaxed mb-8">
              Have questions about available travel dates, custom group itineraries, or upcoming packages?
              Reach out directly on WhatsApp or connect with us on Facebook.
            </p>

            <div className="space-y-6">
              {/* WhatsApp direct info */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0f1e2e] border border-[#c29b53]/40 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 fill-[#c29b53]" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#c29b53] font-semibold">
                    WhatsApp Enquiry
                  </h4>
                  {isConfigured ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white font-medium hover:text-[#c29b53] transition-colors"
                    >
                      {businessConfig.whatsappDisplay || `+${businessConfig.whatsappNumber}`}
                    </a>
                  ) : (
                    <p className="text-xs text-amber-300 font-mono mt-0.5">
                      [Phone number pending configuration in app/config/business.ts]
                    </p>
                  )}
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0f1e2e] border border-[#c29b53]/40 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#c29b53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#c29b53] font-semibold">
                    Customer Enquiries
                  </h4>
                  <p className="text-sm text-white/90">{businessConfig.operatingHours}</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0f1e2e] border border-[#c29b53]/40 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#c29b53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#c29b53] font-semibold">
                    Official Community
                  </h4>
                  <a
                    href={businessConfig.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#faf8f5] hover:text-[#c29b53] underline underline-offset-4 transition-colors"
                  >
                    facebook.com/SoftLifeTravels
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Interactive Enquiry Card */}
          <div className="bg-[#0f1e2e] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Instant WhatsApp Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#faf8f5]/75 mb-6 leading-relaxed">
              Click below to launch WhatsApp with a prefilled enquiry. Our dedicated team will assist you with group sizes, custom departure dates, and detailed package inclusions.
            </p>

            <a
              href={isConfigured ? whatsappUrl : "#"}
              target={isConfigured ? "_blank" : undefined}
              rel={isConfigured ? "noopener noreferrer" : undefined}
              onClick={handleWhatsAppAction}
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full bg-[#c29b53] hover:bg-[#dfbe7e] text-[#08111b] font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01]"
            >
              <svg className="w-5 h-5 fill-[#08111b]" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
              </svg>
              <span>{isConfigured ? "Open WhatsApp Enquiry" : "Enquire on WhatsApp"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
