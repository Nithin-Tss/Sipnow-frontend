import {
  WINE_FEATURED_URL,
  SPIRITS_FEATURED_URL,
  SITE_WIDE_OFFERS_URL,
} from "./images.js";

export const currentOffers = [
  {
    id: "summer-wine-sale",
    title: "Summer Wine Sale",
    subtitle: "Up to 30% Off Selected Vintages",
    badge: "30% OFF",
    image: WINE_FEATURED_URL,
    ctaText: "Shop Wine Offers",
    targetPage: "/wine",
    validity: "Offer Ends Sunday",
  },
  {
    id: "member-double-points",
    title: "Member Privileges",
    subtitle: "Extra 15% Savings for Members",
    badge: "MEMBER OFFER",
    image: SPIRITS_FEATURED_URL,
    ctaText: "Explore Member Deals",
    targetPage: "/offers/members",
    validity: "Limited Time Only",
  },
  {
    id: "site-wide-offers",
    title: "Site Wide Offers",
    subtitle: "Save Big Across All Categories",
    badge: "SITE WIDE",
    image: SITE_WIDE_OFFERS_URL,
    ctaText: "View All Offers",
    targetPage: "/shop-all",
    validity: "In-Store & Online",
  },
];
