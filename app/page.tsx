import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TravelCatalogue } from "./components/TravelCatalogue";
import { WhyUs } from "./components/WhyUs";
import { About } from "./components/About";
import { BookingProcess } from "./components/BookingProcess";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Search Panel & Filterable Travel Catalogue */}
        <TravelCatalogue />

        {/* Why Travel With Us (Philosophy & Value Proposition) */}
        <WhyUs />

        {/* About Soft Life Travels */}
        <About />

        {/* Simple 3-Step WhatsApp Booking Process */}
        <BookingProcess />

        {/* Direct Contact & WhatsApp Consultation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
