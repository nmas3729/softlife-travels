import type { Metadata } from "next";
import "./globals.css";
import { businessConfig } from "./config/business";

export const metadata: Metadata = {
  title: `${businessConfig.name} | Luxury Tours & Tailored Travel Experiences`,
  description:
    "Curated luxury travel packages, coastal escapes, wildlife safaris, and seamless holiday experiences. Enquire directly via WhatsApp with Soft Life Travels.",
  keywords: [
    "Soft Life Travels",
    "Luxury Travel",
    "South Africa Tours",
    "Holiday Packages",
    "Safari Escapes",
    "WhatsApp Travel Booking",
    "Tailored Getaways",
  ],
  openGraph: {
    title: `${businessConfig.name} | Premium Travel & Escapes`,
    description: businessConfig.description,
    url: "https://softlifetravels.placeholder",
    siteName: businessConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col bg-[var(--color-cream)] text-[var(--color-text-main)] selection:bg-[#c49e58] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
