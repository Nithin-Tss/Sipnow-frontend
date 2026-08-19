import { useMemo } from "react";
import ProductGrid from "../../components/ProductGrid.jsx";
import { useAddToCartFeedback } from "../../hooks/useAddToCartFeedback.js";
import vodkaCruiserBanner from "../../assets/brandimages/vodka-cruiser.png";

const BRAND_NAME = "Vodka Cruiser";

export default function VodkaCruiser({
  products = [],
  productsLoading = false,
  onAddToCart,
}) {
  const { addedProduct, handleAddToCart } =
    useAddToCartFeedback(onAddToCart);

  // ============================================================
  // VODKA CRUISER PRODUCTS
  // ============================================================

  const brandProducts = useMemo(() => {
    return products.filter((product) => {
      const brand = String(
        product.brand || product.brandName || ""
      )
        .trim()
        .toLowerCase();

      const name = String(product.name || "")
        .trim()
        .toLowerCase();

      return (
        brand === "vodka cruiser" ||
        brand === "vodka-cruiser" ||
        name.includes("vodka cruiser") ||
        name.includes("vodka-cruiser")
      );
    });
  }, [products]);

  // ============================================================
  // BEST SELLING PRODUCTS
  // ============================================================

  const bestSellingProducts = useMemo(() => {
    return [...brandProducts]
      .sort(
        (a, b) =>
          Number(
            b.salesCount ||
              b.soldCount ||
              b.unitsSold ||
              0
          ) -
          Number(
            a.salesCount ||
              a.soldCount ||
              a.unitsSold ||
              0
          )
      )
      .slice(0, 6);
  }, [brandProducts]);

  // ============================================================
  // BEST RATED PRODUCTS
  // ============================================================

  const bestRatedProducts = useMemo(() => {
    return [...brandProducts]
      .sort(
        (a, b) =>
          Number(b.rating || 0) -
          Number(a.rating || 0)
      )
      .slice(0, 6);
  }, [brandProducts]);

  return (
    <div className="min-h-screen bg-background text-on-surface">

      {/* ========================================================
          BRAND BANNER
      ======================================================== */}

      <section className="relative w-full min-h-[420px] md:min-h-[560px] overflow-hidden">

        <img
          src={vodkaCruiserBanner}
          alt={BRAND_NAME}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      </section>

      {/* ========================================================
          ABOUT THE BRAND
      ======================================================== */}

      <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24">

        <div className="max-w-container-max mx-auto">

          <div className="max-w-4xl">

            <p className="text-primary text-xs md:text-sm uppercase tracking-[0.25em] mb-5">
              About the Brand
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-on-surface">
              Vodka Cruiser Collection
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-on-surface-variant">
              Discover the Vodka Cruiser collection, featuring
              refreshing vodka-based drinks blended with
              delicious fruit flavours.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-on-surface-variant">
              Explore the colourful Vodka Cruiser range and
              discover your favourite flavour.
            </p>

          </div>

        </div>

      </section>

      {/* ========================================================
          BEST SELLING PRODUCTS
      ======================================================== */}

      <section className="px-margin-mobile md:px-margin-desktop pb-20">

        <div className="max-w-container-max mx-auto">

          <div className="mb-8">

            <p className="text-primary text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
              {BRAND_NAME}
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-on-surface">
              Best Selling Products
            </h2>

            <p className="mt-3 text-sm md:text-base text-on-surface-variant">
              Discover the most popular Vodka Cruiser products.
            </p>

          </div>

          {productsLoading ? (

            <div className="min-h-[200px] flex items-center justify-center">
              <p className="text-on-surface-variant">
                Loading products...
              </p>
            </div>

          ) : bestSellingProducts.length > 0 ? (

            <ProductGrid
              addedProduct={addedProduct}
              onAddToCart={handleAddToCart}
              products={bestSellingProducts}
              emptyMessage=""
            />

          ) : (

            <div className="glass-panel rounded-xl border border-primary/10 min-h-[200px] flex items-center justify-center">

              <p className="text-on-surface-variant">
                No best selling Vodka Cruiser products available.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* ========================================================
          BEST RATED PRODUCTS
      ======================================================== */}

      <section className="px-margin-mobile md:px-margin-desktop pb-20">

        <div className="max-w-container-max mx-auto">

          <div className="mb-8">

            <p className="text-primary text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
              {BRAND_NAME}
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-on-surface">
              Best Rated Products
            </h2>

            <p className="mt-3 text-sm md:text-base text-on-surface-variant">
              Explore the highest-rated Vodka Cruiser products.
            </p>

          </div>

          {productsLoading ? (

            <div className="min-h-[200px] flex items-center justify-center">
              <p className="text-on-surface-variant">
                Loading products...
              </p>
            </div>

          ) : bestRatedProducts.length > 0 ? (

            <ProductGrid
              addedProduct={addedProduct}
              onAddToCart={handleAddToCart}
              products={bestRatedProducts}
              emptyMessage=""
            />

          ) : (

            <div className="glass-panel rounded-xl border border-primary/10 min-h-[200px] flex items-center justify-center">

              <p className="text-on-surface-variant">
                No best rated Vodka Cruiser products available.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* ========================================================
          ALL VODKA CRUISER PRODUCTS
      ======================================================== */}

      <section className="px-margin-mobile md:px-margin-desktop pb-24">

        <div className="max-w-container-max mx-auto">

          <div className="mb-8">

            <p className="text-primary text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
              Our Collection
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-on-surface">
              All Vodka Cruiser Products
            </h2>

          </div>

          {brandProducts.length > 0 ? (

            <ProductGrid
              addedProduct={addedProduct}
              onAddToCart={handleAddToCart}
              products={brandProducts}
              emptyMessage=""
            />

          ) : (

            <div className="glass-panel rounded-xl border border-primary/10 min-h-[240px] flex items-center justify-center px-6">

              <div className="text-center max-w-lg">

                <span className="material-symbols-outlined text-5xl text-primary/40 mb-4">
                  local_bar
                </span>

                <h3 className="font-serif text-2xl text-on-surface mb-3">
                  Vodka Cruiser Products
                </h3>

                <p className="text-on-surface-variant leading-relaxed">
                  Vodka Cruiser products will appear here once
                  they are available in our collection.
                </p>

              </div>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}