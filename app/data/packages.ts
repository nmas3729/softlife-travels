export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  region: string;
  country: string;
  duration: string;
  tripType: "Coastal Escape" | "Bush Safari" | "Island Retreat" | "Adventure & Falls" | "Weekend Break";
  priceDisplay: string;
  isPriceVerified: boolean;
  tag: string;
  summary: string;
  highlights: string[];
  imageUrl: string;
  imageAlt: string;
  featured: boolean;
  minGuests: number;
  maxGuests: number;
}

// Clear illustrative sample packages pending confirmation of actual Facebook offers
export const samplePackages: TravelPackage[] = [
  {
    id: "sample-cape-town",
    title: "Cape Winelands & Ocean Retreat",
    destination: "Cape Town & Franschhoek",
    region: "Western Cape",
    country: "South Africa",
    duration: "4 Days / 3 Nights",
    tripType: "Coastal Escape",
    priceDisplay: "Enquire for Pricing",
    isPriceVerified: false,
    tag: "Luxury Coastal",
    summary:
      "A sun-soaked escape featuring scenic private vineyard tastings, coastal catamaran transfers, and boutique hotel accommodation.",
    highlights: [
      "5-star boutique accommodation",
      "Private wine tram & estate pairing",
      "Sunset catamaran cruise along Clifton",
      "Dedicated concierge support",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Picturesque aerial view of Cape Town coastline and Table Mountain",
    featured: true,
    minGuests: 1,
    maxGuests: 8,
  },
  {
    id: "sample-victoria-falls",
    title: "Majestic Falls & Zambezi Safari",
    destination: "Victoria Falls & Chobe",
    region: "Regional Africa",
    country: "Zimbabwe / Botswana",
    duration: "5 Days / 4 Nights",
    tripType: "Adventure & Falls",
    priceDisplay: "Enquire for Pricing",
    isPriceVerified: false,
    tag: "Adventure & Wildlife",
    summary:
      "Experience the thunderous mist of Victoria Falls paired with private river safaris and world-class lodge comfort.",
    highlights: [
      "Guided tour of the Victoria Falls rainforest",
      "Zambezi River sundowner cruise",
      "Full day Chobe National Park safari game drive",
      "All transfers and lodge breakfast included",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wildlife safari on the banks of the river at sunset",
    featured: true,
    minGuests: 1,
    maxGuests: 12,
  },
  {
    id: "sample-zanzibar",
    title: "Zanzibar Spice & Turquoise Waters",
    destination: "Nungwi & Stone Town",
    region: "Indian Ocean",
    country: "Tanzania",
    duration: "6 Days / 5 Nights",
    tripType: "Island Retreat",
    priceDisplay: "Enquire for Pricing",
    isPriceVerified: false,
    tag: "Tropical Paradise",
    summary:
      "Unwind on pristine white beaches, explore historic Stone Town alleyways, and swim with marine life in crystal-clear waters.",
    highlights: [
      "Beachfront 4/5-star all-inclusive resort",
      "Historical Stone Town & Spice Plantation tour",
      "Safari Blue traditional dhow boat excursion",
      "Snorkelling at Mnemba Atoll reefs",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Traditional dhow boat sailing on clear turquoise waters off Zanzibar beach",
    featured: true,
    minGuests: 1,
    maxGuests: 10,
  },
  {
    id: "sample-kruger-safari",
    title: "Greater Kruger Luxury Bush Escape",
    destination: "Sabi Sands / Greater Kruger",
    region: "Mpumalanga / Limpopo",
    country: "South Africa",
    duration: "3 Days / 2 Nights",
    tripType: "Bush Safari",
    priceDisplay: "Enquire for Pricing",
    isPriceVerified: false,
    tag: "Big Five Safari",
    summary:
      "Witness nature's raw beauty with sunrise game drives, boma dinners under star-studded skies, and plush safari tents.",
    highlights: [
      "Luxury thatched safari tent / private suite",
      "Daily open-vehicle sunrise & sunset game drives",
      "Traditional open-fire gourmet boma dinners",
      "Experienced certified field rangers & trackers",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "African wildlife and scenic landscape in the Greater Kruger bushveld",
    featured: false,
    minGuests: 1,
    maxGuests: 8,
  },
  {
    id: "sample-durban-coast",
    title: "Dolphin Coastline & Umhlanga Getaway",
    destination: "Umhlanga & Ballito",
    region: "KwaZulu-Natal",
    country: "South Africa",
    duration: "4 Days / 3 Nights",
    tripType: "Coastal Escape",
    priceDisplay: "Enquire for Pricing",
    isPriceVerified: false,
    tag: "Subtropical Leisure",
    summary:
      "Warm ocean breezes, oceanfront dining, private spa treatments, and laid-back subtropical luxury for family or couples.",
    highlights: [
      "Sea-facing luxury suites",
      "Complimentary champagne breakfast daily",
      "Oceanfront promenade and private cabana access",
      "Chauffeured airport meet and transfer",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Golden sand beach with turquoise warm ocean waves",
    featured: false,
    minGuests: 1,
    maxGuests: 12,
  },
  {
    id: "sample-mauritius",
    title: "Mauritian Lagoon & Island Serenity",
    destination: "Trou d'Eau Douce",
    region: "Indian Ocean",
    country: "Mauritius",
    duration: "7 Days / 6 Nights",
    tripType: "Island Retreat",
    priceDisplay: "Enquire for Pricing",
    isPriceVerified: false,
    tag: "Island Luxury",
    summary:
      "Crystal-clear shallow lagoons, volcanic mountains, vibrant Creole dining, and complete rest in an idyllic island setting.",
    highlights: [
      "Overwater or lagoon-view suite",
      "Catamaran sailing to Île aux Cerfs",
      "Daily water sports & private beach access",
      "All gourmet meals and drinks included",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Serene tropical beach with palm trees and gentle waves in Mauritius",
    featured: false,
    minGuests: 1,
    maxGuests: 6,
  },
  {
    id: "sample-harties-weekend",
    title: "Hartbeespoort Dam & Magalies Mountain Rest",
    destination: "Hartbeespoort & Magaliesburg",
    region: "North West / Gauteng",
    country: "South Africa",
    duration: "3 Days / 2 Nights",
    tripType: "Weekend Break",
    priceDisplay: "Enquire for Pricing",
    isPriceVerified: false,
    tag: "Quick Escape",
    summary:
      "A quick, rejuvenating luxury country escape featuring private cableway views, scenic boat cruises, and tranquil mountain suites.",
    highlights: [
      "Luxury lakeside lodge with private deck",
      "Sunset champagne boat cruise on the dam",
      "Aerial cableway tickets included",
      "Spa vouchers and gourmet dining",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Lakeside mountain retreat with calm waters reflecting the mountains",
    featured: false,
    minGuests: 1,
    maxGuests: 10,
  },
];
