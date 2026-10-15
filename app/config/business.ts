export interface BusinessConfig {
  name: string;
  tagline: string;
  description: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  facebookUrl: string;
  instagramUrl?: string;
  emailPlaceholder: string;
  operatingHours: string;
  currencySymbol: string;
}

export const businessConfig: BusinessConfig = {
  name: "Soft Life Travels",
  tagline: "Curated Escapes & Luxury Travel Experiences",
  description:
    "Experience the effortless art of travel. Soft Life Travels curates unforgettable getaways, seamless weekend retreats, and bucket-list holidays tailored for comfort, style, and ease.",
  // Central WhatsApp contact value configured per user input (pending client business confirmation)
  whatsappNumber: "27662527816",
  whatsappDisplay: "+27 66 252 7816",
  facebookUrl: "https://www.facebook.com/SoftLifeTravels/",
  instagramUrl: "https://www.instagram.com/",
  emailPlaceholder: "enquiries@softlifetravels.placeholder",
  operatingHours: "Monday – Saturday: 08:30 – 17:30",
  currencySymbol: "R",
};

export interface EnquiryContext {
  destination?: string;
  travelPeriod?: string;
  guests?: number;
}

/**
 * Generate a prefilled WhatsApp enquiry link for a specific package,
 * optionally incorporating any user-selected travel dates and traveller count.
 */
export function getWhatsAppBookingUrl(
  packageName: string,
  context?: EnquiryContext
): { url: string; isConfigured: boolean } {
  const number = businessConfig.whatsappNumber.trim().replace(/[^0-9]/g, "");
  
  if (!number) {
    return {
      url: "#contact",
      isConfigured: false,
    };
  }

  const lines = [
    `Hi ${businessConfig.name}!`,
    `I am interested in enquiring about the "${packageName}" package (sample itinerary).`,
  ];

  if (context?.travelPeriod && context.travelPeriod.trim() !== "") {
    lines.push(`• Intended travel period: ${context.travelPeriod}`);
  }

  if (context?.guests && context.guests > 0) {
    lines.push(`• Number of travellers: ${context.guests} ${context.guests === 1 ? "guest" : "guests"}`);
  }

  lines.push(
    `Please confirm current pricing, upcoming dates, availability, and inclusions for this trip.`
  );

  const message = lines.join("\n");
  const encodedMessage = encodeURIComponent(message);

  return {
    url: `https://wa.me/${number}?text=${encodedMessage}`,
    isConfigured: true,
  };
}

/**
 * Generate a general WhatsApp travel enquiry link,
 * including any active search parameters entered by the user.
 */
export function getGeneralWhatsAppUrl(
  context?: EnquiryContext
): { url: string; isConfigured: boolean } {
  const number = businessConfig.whatsappNumber.trim().replace(/[^0-9]/g, "");
  
  if (!number) {
    return {
      url: "#contact",
      isConfigured: false,
    };
  }

  const lines = [
    `Hi ${businessConfig.name}!`,
    `I would like to enquire about your upcoming travel packages and bespoke trip planning.`,
  ];

  if (context?.destination && context.destination.trim() !== "") {
    lines.push(`• Preferred destination / area: ${context.destination}`);
  }

  if (context?.travelPeriod && context.travelPeriod.trim() !== "") {
    lines.push(`• Intended travel period: ${context.travelPeriod}`);
  }

  if (context?.guests && context.guests > 0) {
    lines.push(`• Number of travellers: ${context.guests} ${context.guests === 1 ? "guest" : "guests"}`);
  }

  lines.push(`Please send me available options and tailored quotes.`);

  const message = lines.join("\n");
  const encodedMessage = encodeURIComponent(message);

  return {
    url: `https://wa.me/${number}?text=${encodedMessage}`,
    isConfigured: true,
  };
}
