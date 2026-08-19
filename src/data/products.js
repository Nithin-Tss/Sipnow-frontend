import jacobGreek from "../assets/products/jacob-greek.png";
import campo from "../assets/products/campo.png";
import cooper from "../assets/products/cooper.png";
import absolut from "../assets/products/absolut.png";
import jimBeam from "../assets/products/jim-beam.png";

export const products = [
  // =====================================================
  // WINE
  // =====================================================

  {
    image: jacobGreek,
    badgeStyle: "glow",
    icon: "wine_bar",
    badgeText: "Best in White Wine",

    category: "White Wine · 750mL",
    categoryGroup: "wine",
    inStock: true,
    type: "Sauvignon Blanc",

    name: "Jacob's Creek Cool Harvest Sauvignon Blanc",

    rating: 4.5,
    reviewCount: 128,
    price: "$10.13",

    abv: "12.0%",
    volume: "750mL",
    manufacturer: "Jacob's Creek (Pernod Ricard Winemakers)",
    origin: "South Eastern Australia",
    description:
      "A crisp, refreshing Sauvignon Blanc bursting with tropical and citrus notes. Grapes are picked cool, overnight, to lock in natural zest and acidity for a clean, vibrant finish.",
    storageInstructions:
      "Store upright in a cool, dark place away from direct sunlight. Refrigerate before serving and consume within 3–5 days of opening.",
    foodPairing: [
      "Fresh seafood",
      "Goat's cheese",
      "Green salads",
      "Light Asian dishes",
    ],
    ingredients: ["Grapes (Sauvignon Blanc)", "Contains sulphites"],
    packSizes: [1, 6],
  },

  {
    image: campo,
    badgeStyle: "glow",
    icon: "wine_bar",
    badgeText: "Best in Red Wine",

    category: "Red Wine · 750mL",
    categoryGroup: "wine",
    inStock: true,
    type: "Other Red Wine",

    name: "Campo Viejo Tempranillo",

    rating: 4.0,
    reviewCount: 76,
    price: "$12.57",

    abv: "13.5%",
    volume: "750mL",
    manufacturer: "Campo Viejo (Pernod Ricard Winemakers)",
    origin: "Rioja, Spain",
    description:
      "A smooth, medium-bodied Tempranillo layered with red berry fruit and gentle vanilla notes from careful oak ageing. Approachable and food-friendly.",
    storageInstructions:
      "Store upright in a cool, dark place away from direct sunlight. Refrigerate before serving and consume within 3–5 days of opening.",
    foodPairing: ["Grilled red meats", "Tapas", "Chorizo", "Manchego cheese"],
    ingredients: ["Grapes (Tempranillo)", "Contains sulphites"],
    packSizes: [1, 6],
  },

  // =====================================================
  // VODKA
  // =====================================================

  {
    image: absolut,

    badgeStyle: "glow",
    icon: "liquor",
    badgeText: "Best in Vodka",

    category: "Vodka · 6 x 200mL",
    categoryGroup: "spirits",
    inStock: true,
    type: "Vodka",

    name: "Absolut Vodka 6 Pack",

    rating: 5.0,
    reviewCount: 203,
    price: "$17.98",

    abv: "40%",
    volume: "6 x 200mL",
    manufacturer: "The Absolut Company",
    origin: "Åhus, Sweden",
    description:
      "Absolut Vodka is distilled from winter wheat and pure water for a rich, complex character with a smooth finish — packaged here as six convenient 200mL bottles.",
    storageInstructions:
      "Store upright in a cool, dry place. No refrigeration required, though it's best enjoyed chilled or over ice.",
    foodPairing: [
      "Citrus garnishes",
      "Classic vodka cocktails",
      "Smoked salmon canapés",
    ],
    ingredients: ["Water", "Winter wheat"],
    packSizes: [1, 4],
  },
  {
    image: "https://images.unsplash.com/photo-1598018553943-6e5e7e3e1e7a?w=600",

    badgeStyle: "plain",
    icon: "liquor",
    badgeText: "Best in Other Spirits",

    category: "Other Spirits · 700mL",
    categoryGroup: "spirits",
    inStock: true,
    type: "Other Spirits",

    name: "Example Other Spirit",

    rating: 4.4,
    reviewCount: 78,
    price: "$27.00",

    abv: "40%",
    volume: "700mL",
    manufacturer: "Example Distillery",
    origin: "Australia",

    description:
      "A distinctive premium spirit with a smooth character, subtle botanical notes and a balanced finish, perfect for sipping or mixing.",

    storageInstructions:
      "Store upright in a cool, dry place away from direct sunlight. No refrigeration required.",

    foodPairing: [
      "Grilled meats",
      "Cheese boards",
      "Dark chocolate",
      "Spiced dishes",
    ],

    ingredients: ["Distilled spirit", "Natural botanicals"],

    packSizes: [1, 6],
  },
  {
    image: "https://images.unsplash.com/photo-1608885898957-a559ee9f9c9d?w=600",

    badgeStyle: "plain",
    icon: "liquor",
    badgeText: "Best in Brandy & Cognac",

    category: "Brandy & Cognac · 700mL",
    categoryGroup: "spirits",
    inStock: true,
    type: "Brandy & Cognac",

    name: "Example Brandy & Cognac",

    rating: 4.6,
    reviewCount: 92,
    price: "$29.00",

    abv: "40%",
    volume: "700mL",
    manufacturer: "Example Distillery",
    origin: "France",

    description:
      "A smooth and refined brandy with rich dried-fruit, vanilla and gentle oak notes, crafted for sipping neat or enjoying in classic cocktails.",

    storageInstructions:
      "Store upright in a cool, dry place away from direct sunlight. No refrigeration required.",

    foodPairing: [
      "Dark chocolate",
      "Cheese boards",
      "Roasted meats",
      "Desserts",
    ],

    ingredients: ["Grape spirit", "Oak-aged brandy"],

    packSizes: [1, 6],
  },

  // =====================================================
  // BEER
  // =====================================================

  {
    image: cooper,
    badgeStyle: "glow",
    icon: "sports_bar",
    badgeText: "Best in Beer",

    category: "Beer · 750mL",
    categoryGroup: "beer",
    inStock: true,
    type: "Pale Ale",

    name: "Coopers Original Pale Ale Longneck",

    rating: 4.2,
    reviewCount: 94,
    price: "$6.09",

    abv: "4.5%",
    volume: "750mL",
    manufacturer: "Coopers Brewery",
    origin: "Adelaide, South Australia",
    description:
      "Coopers' flagship pale ale, naturally cloudy from bottle conditioning, with a distinctive fruity, hoppy character and a creamy malt finish.",
    storageInstructions:
      "Refrigerate for best taste and store bottle upright to keep natural sediment settled. Avoid excessive shaking.",
    foodPairing: [
      "Fish and chips",
      "Spicy curries",
      "Aged cheddar",
      "BBQ sausages",
    ],
    ingredients: ["Water", "Barley malt", "Hops", "Yeast"],
    packSizes: [1, 6, 24],
  },

  // =====================================================
  // BOURBON / WHISKEY
  // =====================================================

  {
    image: jimBeam,

    badgeStyle: "glow",
    icon: "liquor",
    badgeText: "Best in Bourbon",

    category: "Bourbon · 375mL",
    categoryGroup: "spirits",
    inStock: true,
    type: "Bourbon",

    name: "Jim Beam Double Serve 6.7%",

    rating: 4.6,
    reviewCount: 57,
    price: "$5.22",

    abv: "6.7%",
    volume: "375mL",
    manufacturer: "Beam Suntory",
    origin: "Clermont, Kentucky, USA — blended and bottled in Australia",
    description:
      "Jim Beam Kentucky Straight Bourbon blended with cola for a bold, ready-to-drink classic, with double the bourbon serve in every bottle.",
    storageInstructions:
      "Store in a cool, dry place away from direct sunlight. Best served chilled over ice.",
    foodPairing: ["BBQ ribs", "Smoked meats", "Pretzels"],
    ingredients: [
      "Jim Beam Kentucky Straight Bourbon",
      "Cola",
      "Carbonated water",
      "Caramel colour",
      "Natural flavours",
    ],
    packSizes: [1, 6, 24],
  },

  // =====================================================
  // WINE
  // =====================================================

  {
    image: "https://media.sipnow.com.au/sipnow/products/180729-1.webp",

    badgeStyle: "plain",
    badgeText: "Best in Sparkling",

    category: "Sparkling · 750mL",
    categoryGroup: "wine",
    inStock: true,
    type: "Other White Wine",

    name: "Chandon Garden Spritz",

    rating: 4.9,
    reviewCount: 312,
    price: "$27.73",

    abv: "11.0%",
    volume: "750mL",
    manufacturer: "Domaine Chandon Australia",
    origin: "Yarra Valley, Victoria, Australia",
    description:
      "A ready-to-serve sparkling aperitif blending Chandon sparkling wine with orange and botanicals — a spritz in every bottle.",
    storageInstructions:
      "Store in a cool, dark place. Serve well chilled over ice with an orange garnish.",
    foodPairing: ["Antipasto", "Light bites", "Charcuterie", "Fresh oysters"],
    ingredients: [
      "Sparkling wine",
      "Orange essence",
      "Botanicals",
      "Contains sulphites",
    ],
    packSizes: [1, 6],
  },

  // =====================================================
  // BEER
  // =====================================================

  {
    image: "https://media.sipnow.com.au/sipnow/products/60281-1.png",

    badgeStyle: "plain",
    badgeText: "Best in Beer",

    category: "Beer · 355mL",
    categoryGroup: "beer",
    inStock: true,
    type: "Lager",

    name: "Byron Bay Brewery Premium Lager",

    rating: 4.1,
    reviewCount: 68,
    price: "$2.83",

    abv: "4.8%",
    volume: "355mL",
    manufacturer: "Byron Bay Brewery",
    origin: "Byron Bay, New South Wales, Australia",
    description:
      "A crisp, easy-drinking premium lager brewed with quality malt and hops for a clean, refreshing finish.",
    storageInstructions:
      "Refrigerate and serve cold. Store away from direct sunlight.",
    foodPairing: ["Grilled seafood", "Pizza", "Burgers"],
    ingredients: ["Water", "Malted barley", "Hops", "Yeast"],
    packSizes: [1, 6, 24],
  },

  // =====================================================
  // WINE
  // =====================================================

  {
    image: "https://media.sipnow.com.au/sipnow/products/901870-1.png",

    badgeStyle: "plain",
    badgeText: "Best in Red Wine",

    category: "Red Wine · 750mL",
    categoryGroup: "wine",
    inStock: true,
    type: "Shiraz",

    name: "Grant Burge Miamba Shiraz",

    rating: 4.7,
    reviewCount: 145,
    price: "$15.51",

    abv: "14.5%",
    volume: "750mL",
    manufacturer: "Grant Burge Wines",
    origin: "Barossa Valley, South Australia",
    description:
      "A generous Barossa Shiraz with rich dark berry fruit, chocolate and warm spice, rounded out by soft American oak.",
    storageInstructions:
      "Store upright in a cool, dark place away from direct sunlight. Refrigerate before serving and consume within 3–5 days of opening.",
    foodPairing: ["Roast lamb", "Aged steak", "Hard cheeses"],
    ingredients: ["Grapes (Shiraz)", "Contains sulphites"],
    packSizes: [1, 6],
  },

  {
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600",

    badgeStyle: "plain",
    badgeText: "Best in Red Wine",

    category: "Red Wine · 750mL",
    categoryGroup: "wine",
    inStock: true,
    type: "Red Blends",

    name: "19 Crimes Red Blend",

    rating: 4.3,
    reviewCount: 89,
    price: "$31.99",

    abv: "13.5%",
    volume: "750mL",
    manufacturer: "19 Crimes (Treasury Wine Estates)",
    origin: "South Eastern Australia",
    description:
      "A bold red blend layered with dark fruit and a hint of spice — smooth, full-bodied and easy to enjoy.",
    storageInstructions:
      "Store upright in a cool, dark place away from direct sunlight. Refrigerate before serving and consume within 3–5 days of opening.",
    foodPairing: ["BBQ", "Burgers", "Pasta with red sauce"],
    ingredients: ["Grapes (blend)", "Contains sulphites"],
    packSizes: [1, 6],
  },

  {
    image:
      "https://www.edsfinewines.com/wp-content/uploads/2021/02/Penfolds-Bin-600.jpg",

    badgeStyle: "plain",
    badgeText: "Best in Red Wine",

    category: "Red Wine · 750mL",
    categoryGroup: "wine",
    inStock: true,
    type: "Shiraz",

    name: "Pepperjack Shiraz",

    rating: 4.3,
    reviewCount: 89,
    price: "$31.99",

    abv: "14.5%",
    volume: "750mL",
    manufacturer: "Pepperjack Wines (Treasury Wine Estates)",
    origin: "Barossa Valley, South Australia",
    description:
      "A bold, richly textured Shiraz with dark berry fruit and warm spice from generous American oak maturation.",
    storageInstructions:
      "Store upright in a cool, dark place away from direct sunlight. Refrigerate before serving and consume within 3–5 days of opening.",
    foodPairing: ["Grilled red meat", "Game", "Strong cheese"],
    ingredients: ["Grapes (Shiraz)", "Contains sulphites"],
    packSizes: [1, 6],
  },

  // =====================================================
  // EXAMPLE PRODUCTS FOR OTHER SPIRIT TYPES
  // =====================================================
  //
  // Add your actual Gin/Rum/Tequila/Liqueur/etc.
  // products using the same structure.
  //
  // =====================================================

  {
    image: "https://media.sipnow.com.au/sipnow/products/gin-example.webp",

    badgeStyle: "plain",
    icon: "liquor",
    badgeText: "Best in Gin",

    category: "Gin · 700mL",
    categoryGroup: "spirits",
    inStock: true,
    type: "Gin",

    name: "Example Gin",

    rating: 4.5,
    reviewCount: 100,
    price: "$25.00",

    abv: "40%",
    volume: "700mL",
    manufacturer: "Example Distillery",
    origin: "Australia",
    description:
      "A classic London Dry-style gin, distilled with juniper and native botanicals for a crisp, aromatic character.",
    storageInstructions:
      "Store upright in a cool, dry place. No refrigeration required.",
    foodPairing: ["Tonic & citrus garnish", "Fresh seafood", "Charcuterie"],
    ingredients: ["Grain spirit", "Juniper", "Botanicals"],
    packSizes: [1, 6],
  },

  {
    image: "https://media.sipnow.com.au/sipnow/products/rum-example.webp",

    badgeStyle: "plain",
    icon: "liquor",
    badgeText: "Best in Rum",

    category: "Rum · 700mL",
    categoryGroup: "spirits",
    inStock: true,
    type: "Rum",

    name: "Example Rum",

    rating: 4.4,
    reviewCount: 85,
    price: "$28.00",

    abv: "37.5%",
    volume: "700mL",
    manufacturer: "Example Distillery",
    origin: "Caribbean",
    description:
      "A smooth, molasses-based rum with warm caramel and dark fruit notes, aged for a rounded finish.",
    storageInstructions:
      "Store upright in a cool, dry place. No refrigeration required.",
    foodPairing: ["Cola & lime", "Tropical desserts", "BBQ"],
    ingredients: ["Molasses spirit", "Caramel colour"],
    packSizes: [1, 6],
  },

  {
    image: "https://media.sipnow.com.au/sipnow/products/tequila-example.webp",

    badgeStyle: "plain",
    icon: "liquor",
    badgeText: "Best in Tequila",
    category: "Tequila · 700mL",
    categoryGroup: "spirits",
    inStock: true,
    type: "Tequila",

    name: "Example Tequila",

    rating: 4.3,
    reviewCount: 72,
    price: "$32.00",

    abv: "38%",
    volume: "700mL",
    manufacturer: "Example Distillery",
    origin: "Jalisco, Mexico",
    description:
      "A 100% blue agave tequila with a clean, peppery character and a smooth, slightly sweet finish.",
    storageInstructions:
      "Store upright in a cool, dry place. No refrigeration required.",
    foodPairing: ["Citrus & salt", "Mexican cuisine", "Spicy dishes"],
    ingredients: ["100% blue agave spirit"],
    packSizes: [1, 6],
  },

  {
    image: "https://media.sipnow.com.au/sipnow/products/liqueur-example.webp",

    badgeStyle: "plain",
    icon: "liquor",
    badgeText: "Best in Liqueurs",

    category: "Liqueur · 700mL",
    categoryGroup: "spirits",
    inStock: true,
    type: "Liqueurs",

    name: "Example Liqueur",

    rating: 4.2,
    reviewCount: 61,
    price: "$24.00",

    abv: "20%",
    volume: "700mL",
    manufacturer: "Example Distillery",
    origin: "Australia",
    description:
      "A smooth, naturally flavoured liqueur with a balanced sweetness, perfect for sipping or mixing.",
    storageInstructions:
      "Store upright in a cool, dry place, away from direct sunlight.",
    foodPairing: ["Desserts", "Coffee", "Ice cream"],
    ingredients: ["Neutral spirit", "Natural flavours", "Sugar"],
    packSizes: [1, 6],
  },

  // =====================================================
  // OFFERS & SERVICES
  // =====================================================
  //
  // These use `section` instead of `type`.
  //
  // =====================================================

  {
    image: "https://media.sipnow.com.au/sipnow/products/promotion-example.webp",

    badgeStyle: "glow",
    icon: "local_offer",
    badgeText: "Special Offer",

    category: "Promotion",
    categoryGroup: "offers",
    inStock: true,
    section: "general-promotions",

    name: "General Promotion Product",

    rating: 4.5,
    reviewCount: 50,
    price: "$15.00",

    manufacturer: "SipNow",
    origin: "Australia",
    description:
      "A limited-time promotional offer available to all SipNow customers. Check the offer terms at checkout for full details.",
    storageInstructions: "No special storage requirements.",
    packSizes: [1],
  },

  {
    image: "https://media.sipnow.com.au/sipnow/products/gift-card-example.webp",

    badgeStyle: "glow",
    icon: "card_giftcard",
    badgeText: "Gift Card",

    category: "Gift Card",
    categoryGroup: "offers",
    inStock: true,
    section: "gift-cards",

    name: "SipNow Gift Card",

    rating: 5.0,
    reviewCount: 120,
    price: "$50.00",

    manufacturer: "SipNow",
    origin: "Australia",
    description:
      "A digital gift card redeemable on any purchase across the SipNow store — the easy way to share great drinks with someone else.",
    storageInstructions:
      "Delivered digitally by email. Keep the redemption code safe.",
    packSizes: [1],
  },

  {
    image: "https://media.sipnow.com.au/sipnow/products/member-example.webp",

    badgeStyle: "glow",
    icon: "workspace_premium",
    badgeText: "Members",

    category: "Member Offer",
    categoryGroup: "offers",
    inStock: true,
    section: "members",

    name: "SipNow Member Special",

    rating: 4.8,
    reviewCount: 80,
    price: "$20.00",

    manufacturer: "SipNow",
    origin: "Australia",
    description:
      "An exclusive discount available to SipNow members only. Sign in to your member account to unlock this pricing.",
    storageInstructions: "No special storage requirements.",
    packSizes: [1],
  },
];
