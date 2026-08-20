import { slugify } from "./shopRoutes.js";

export function createBrandDirectory(brands = []) {
  return brands.map((brand) => ({
    ...brand,
    name: brand.name,
    route: `/brands/${brand.slug || slugify(brand.name)}`,
  }));
}

export function matchBrands(term, brands = [], limit = 5) {
  const normalized = term.trim().toLowerCase();
  if (!normalized) return [];

  return createBrandDirectory(brands)
    .filter((brand) => brand.name.toLowerCase().includes(normalized))
    .slice(0, limit);
}
