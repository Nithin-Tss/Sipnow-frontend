import { useMemo } from "react";
import PageHero from "../../components/PageHero.jsx";
import ProductGrid from "../../components/ProductGrid.jsx";
import Reveal from "../../components/Reveal.jsx";
import { useAddToCartFeedback } from "../../hooks/useAddToCartFeedback.js";
import { useGeneralPromotions } from "../../hooks/useContent.js";

export default function GeneralPromotions({
  onAddToCart,
  onBack,
  products = [],
}) {
  const { addedProduct, handleAddToCart } = useAddToCartFeedback(onAddToCart);
  const { data: promotedProducts } = useGeneralPromotions();

  /*
   * Promotions carry only the fields the offer API populates, so each one is
   * layered over its catalog product (matched on the real Product id) to keep
   * ratings, pack sizes and the rest of the card data intact.
   */
  const sectionProducts = useMemo(
    () =>
      promotedProducts.map((promoted) => {
        const catalogProduct = products.find(
          (product) => product._id === promoted._id
        );

        if (!catalogProduct) return promoted;

        return {
          ...catalogProduct,
          ...promoted,
          rating: catalogProduct.rating ?? promoted.rating,
          reviewCount: catalogProduct.reviewCount ?? promoted.reviewCount,
        };
      }),
    [promotedProducts, products]
  );

  return (
    <div className="pt-32 lg:pt-36 pb-24">
      <PageHero
        description="Discover our latest promotions, special offers, and exclusive deals."
        onBack={onBack}
        tag="Offers & Services"
        title="General Promotions"
      />

      <Reveal className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <ProductGrid
          addedProduct={addedProduct}
          emptyMessage="New promotions are on the way. Check back soon."
          onAddToCart={handleAddToCart}
          products={sectionProducts}
        />
      </Reveal>
    </div>
  );
}
