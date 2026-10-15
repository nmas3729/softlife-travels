import Image from "next/image";
import { businessConfig } from "../config/business";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#faf8f5] relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[420px] sm:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
                alt="Scenic holiday inspiration - Soft Life Travels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Subtle Floating Badge */}
            <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:right-6 bg-[#0f1e2e] text-white p-5 rounded-2xl shadow-xl border border-[#c29b53]/30 max-w-xs hidden sm:block">
              <p className="text-[#c29b53] font-serif text-xl sm:text-2xl font-bold">Dedicated</p>
              <p className="text-xs uppercase tracking-widest text-[#faf8f5]/80 mt-1 font-semibold">
                WhatsApp Service
              </p>
              <p className="text-[11px] text-[#faf8f5]/60 mt-1 leading-normal">
                Direct trip planning with our team, tailored to your exact dates.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#c29b53] mb-3">
              About The Agency
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0f1e2e] tracking-tight mb-5 leading-tight">
              Crafting Memorable Journeys with Grace and Ease
            </h2>
            <div className="w-16 h-0.5 bg-[#c29b53] mb-6" />

            <div className="space-y-4 text-sm sm:text-base text-[#566474] leading-relaxed">
              <p>
                <strong>{businessConfig.name}</strong> was created with a straightforward ambition: to make quality leisure, scenic getaways, and luxury holidays accessible and effortless.
              </p>
              <p>
                We know that modern travel planning can often feel overwhelming with endless options and logistical friction. We strip away the stress by curating tested itineraries, partnering with trusted operators, and offering direct, transparent communication through WhatsApp.
              </p>
              <p>
                Whether you’re seeking a coastal haven to recharge, an exhilarating Big Five safari, or a celebratory trip with friends, we ensure every detail is accounted for so you can focus on making lasting memories.
              </p>
            </div>

            {/* Official Social Link */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                Follow our community:
              </span>
              <a
                href={businessConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-100 text-[#0f1e2e] text-xs font-bold border border-zinc-200 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Official Facebook Page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
