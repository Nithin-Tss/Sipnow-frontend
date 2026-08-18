import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Filters from "../components/Filters.jsx";
import Reveal from "../components/Reveal.jsx";
import { useAddToCartFeedback } from "../hooks/useAddToCartFeedback.js";
import { validateSearchTerm } from "../utils/searchValidation.js";

export default function SearchResults({
  onAddToCart,
  onBack,
  products = [],
  productsLoading = false,
}) {
  const [searchParams] = useSearchParams();
  const rawQuery = searchParams.get("q") || "";
  const { valid } = validateSearchTerm(rawQuery);
  const query = valid ? rawQuery.trim() : "";

  const { addedProduct, handleAddToCart } = useAddToCartFeedback(onAddToCart);

  const matchedProducts = useMemo(() => {
    const term = query.toLowerCase();
    if (!term) return [];

    return products.filter((product) => {
      const name = product.name?.toLowerCase() || "";
      const category = product.category?.toLowerCase() || "";
      const categoryGroup = product.categoryGroup?.toLowerCase() || "";
      const type = product.type?.toLowerCase() || "";

      return (
        name.includes(term) ||
        category.includes(term) ||
        categoryGroup.includes(term) ||
        type.includes(term)
      );
    });
  }, [products, query]);

  return (
    <div className="pt-32 lg:pt-36 pb-20">
      <PageHero
        description={
          query
            ? `${matchedProducts.length} product${
                matchedProducts.length === 1 ? "" : "s"
              } found for "${query}".`
            : "Search our cellar to find what you're after."
        }
        onBack={onBack}
        tag="Search Results"
        title={query ? `Results for "${query}"` : "Search Results"}
      />

      <Reveal className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Filters
          addedProduct={addedProduct}
          emptyMessage={
            query
              ? `No products match "${query}". Try a different search term.`
              : "Start typing in the search bar to find products."
          }
          onAddToCart={handleAddToCart}
          products={matchedProducts}
          productsLoading={productsLoading}
          showAllCategories
        />
      </Reveal>
    </div>
  );
}
