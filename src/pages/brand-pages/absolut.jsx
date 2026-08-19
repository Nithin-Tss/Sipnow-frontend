import { useMemo } from "react";

import ProductGrid from "../../components/ProductGrid.jsx";

import { useAddToCartFeedback } from "../../hooks/useAddToCartFeedback.js";

import absolutBanner from "../../assets/brandimages/absolut.png";

const BRAND_NAME = "Absolut";

export default function Absolut({
  products = [],
  productsLoading = false,
  onAddToCart,
}) {
<<<<<<< HEAD
  const { addedProduct, handleAddToCart } =
    useAddToCartFeedback(onAddToCart);

  const brandProducts = useMemo(() => {
    return products.filter((product) => {
      const brand = String(
        product.brand || product.brandName || ""
      )
=======
  const { addedProduct, handleAddToCart } = useAddToCartFeedback(onAddToCart);

  const brandProducts = useMemo(() => {
    return products.filter((product) => {
      const brand = String(product.brand || product.brandName || "")
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
        .trim()
        .toLowerCase();

      const name = String(product.name || "")
        .trim()
        .toLowerCase();

<<<<<<< HEAD
      return (
        brand === "absolut" ||
        name.includes("absolut")
      );
=======
      return brand === "absolut" || name.includes("absolut");
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
    });
  }, [products]);

  const bestSellingProducts = useMemo(() => {
    return [...brandProducts]
      .sort(
        (a, b) =>
<<<<<<< HEAD
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
=======
          Number(b.salesCount || b.soldCount || b.unitsSold || 0) -
          Number(a.salesCount || a.soldCount || a.unitsSold || 0)
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
      )
      .slice(0, 6);
  }, [brandProducts]);

  const bestRatedProducts = useMemo(() => {
    return [...brandProducts]
<<<<<<< HEAD
      .sort(
        (a, b) =>
          Number(b.rating || 0) -
          Number(a.rating || 0)
      )
=======
      .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0))
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
      .slice(0, 6);
  }, [brandProducts]);

  return (
    <div className="min-h-screen bg-background text-on-surface">
<<<<<<< HEAD

      {/* BRAND BANNER */}

      <section className="relative w-full min-h-[560px] md:min-h-[720px] overflow-hidden">

=======
      {/* BRAND BANNER */}

      <section className="relative w-full min-h-[560px] md:min-h-[720px] overflow-hidden">
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
        <img
          src={absolutBanner}
          alt="Absolut"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/30" />
<<<<<<< HEAD

=======
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
      </section>

      {/* ABOUT THE BRAND */}

      <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24">
<<<<<<< HEAD

        <div className="max-w-container-max mx-auto">

          <div className="max-w-4xl">

=======
        <div className="max-w-container-max mx-auto">
          <div className="max-w-4xl">
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
            <p className="text-primary text-xs md:text-sm uppercase tracking-[0.25em] mb-5">
              About the Brand
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-on-surface">
              Absolut Collection
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-on-surface-variant">
<<<<<<< HEAD
              Discover the Absolut collection, celebrated for its
              distinctive Swedish heritage, smooth character and
              creative spirit. Explore a range of vodka expressions
              made with quality ingredients and a commitment to
              consistent craftsmanship.
            </p>

          </div>

        </div>

=======
              Discover the Absolut collection, celebrated for its distinctive
              Swedish heritage, smooth character and creative spirit. Explore a
              range of vodka expressions made with quality ingredients and a
              commitment to consistent craftsmanship.
            </p>
          </div>
        </div>
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
      </section>

      {/* BEST SELLING PRODUCTS */}

      <section className="px-margin-mobile md:px-margin-desktop pb-20">
<<<<<<< HEAD

        <div className="max-w-container-max mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

            <div>

=======
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
              <p className="text-primary text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
                Absolut
              </p>

              <h2 className="font-serif text-3xl md:text-4xl text-on-surface">
                Best Selling Products
              </h2>

              <p className="mt-3 text-sm md:text-base text-on-surface-variant">
                Discover the most popular Absolut products.
              </p>
<<<<<<< HEAD

            </div>

          </div>

          {productsLoading ? (

            <div className="min-h-[200px] flex items-center justify-center">
              <p className="text-on-surface-variant">
                Loading products...
              </p>
            </div>

          ) : bestSellingProducts.length > 0 ? (

=======
            </div>
          </div>

          {productsLoading ? (
            <div className="min-h-[200px] flex items-center justify-center">
              <p className="text-on-surface-variant">Loading products...</p>
            </div>
          ) : bestSellingProducts.length > 0 ? (
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
            <ProductGrid
              addedProduct={addedProduct}
              onAddToCart={handleAddToCart}
              products={bestSellingProducts}
              emptyMessage=""
            />
<<<<<<< HEAD

          ) : (

            <div className="glass-panel rounded-xl border border-primary/10 min-h-[240px] flex items-center justify-center px-6">

              <div className="text-center max-w-lg">

=======
          ) : (
            <div className="glass-panel rounded-xl border border-primary/10 min-h-[240px] flex items-center justify-center px-6">
              <div className="text-center max-w-lg">
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
                <span className="material-symbols-outlined text-5xl text-primary/40 mb-4">
                  trending_up
                </span>

                <h3 className="font-serif text-2xl text-on-surface mb-3">
                  Best Selling Products
                </h3>

                <p className="text-on-surface-variant leading-relaxed">
<<<<<<< HEAD
                  Best selling Absolut products will appear
                  here once product sales data is available.
                </p>

              </div>

            </div>

          )}

        </div>

=======
                  Best selling Absolut products will appear here once product
                  sales data is available.
                </p>
              </div>
            </div>
          )}
        </div>
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
      </section>

      {/* BEST RATED PRODUCTS */}

      <section className="px-margin-mobile md:px-margin-desktop pb-20">
<<<<<<< HEAD

        <div className="max-w-container-max mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

            <div>

=======
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
              <p className="text-primary text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
                Absolut
              </p>

              <h2 className="font-serif text-3xl md:text-4xl text-on-surface">
                Best Rated Products
              </h2>

              <p className="mt-3 text-sm md:text-base text-on-surface-variant">
                Explore the highest-rated Absolut products.
              </p>
<<<<<<< HEAD

            </div>

          </div>

          {productsLoading ? (

            <div className="min-h-[200px] flex items-center justify-center">
              <p className="text-on-surface-variant">
                Loading products...
              </p>
            </div>

          ) : bestRatedProducts.length > 0 ? (

=======
            </div>
          </div>

          {productsLoading ? (
            <div className="min-h-[200px] flex items-center justify-center">
              <p className="text-on-surface-variant">Loading products...</p>
            </div>
          ) : bestRatedProducts.length > 0 ? (
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
            <ProductGrid
              addedProduct={addedProduct}
              onAddToCart={handleAddToCart}
              products={bestRatedProducts}
              emptyMessage=""
            />
<<<<<<< HEAD

          ) : (

            <div className="glass-panel rounded-xl border border-primary/10 min-h-[240px] flex items-center justify-center px-6">

              <div className="text-center max-w-lg">

=======
          ) : (
            <div className="glass-panel rounded-xl border border-primary/10 min-h-[240px] flex items-center justify-center px-6">
              <div className="text-center max-w-lg">
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
                <span className="material-symbols-outlined text-5xl text-primary/40 mb-4">
                  star
                </span>

                <h3 className="font-serif text-2xl text-on-surface mb-3">
                  Best Rated Products
                </h3>

                <p className="text-on-surface-variant leading-relaxed">
<<<<<<< HEAD
                  Best rated Absolut products will appear
                  here once product ratings are available.
                </p>

              </div>

            </div>

          )}

        </div>

=======
                  Best rated Absolut products will appear here once product
                  ratings are available.
                </p>
              </div>
            </div>
          )}
        </div>
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
      </section>

      {/* ALL BRAND PRODUCTS */}

      <section className="px-margin-mobile md:px-margin-desktop pb-24">
<<<<<<< HEAD

        <div className="max-w-container-max mx-auto">

          <div className="mb-8">

=======
        <div className="max-w-container-max mx-auto">
          <div className="mb-8">
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
            <p className="text-primary text-xs md:text-sm uppercase tracking-[0.25em] mb-3">
              Our Collection
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-on-surface">
              All Absolut Products
            </h2>
<<<<<<< HEAD

          </div>

          {brandProducts.length > 0 ? (

=======
          </div>

          {brandProducts.length > 0 ? (
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
            <ProductGrid
              addedProduct={addedProduct}
              onAddToCart={handleAddToCart}
              products={brandProducts}
              emptyMessage=""
            />
<<<<<<< HEAD

          ) : (

            <div className="glass-panel rounded-xl border border-primary/10 min-h-[240px] flex items-center justify-center px-6">

              <div className="text-center max-w-lg">

=======
          ) : (
            <div className="glass-panel rounded-xl border border-primary/10 min-h-[240px] flex items-center justify-center px-6">
              <div className="text-center max-w-lg">
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
                <span className="material-symbols-outlined text-5xl text-primary/40 mb-4">
                  liquor
                </span>

                <h3 className="font-serif text-2xl text-on-surface mb-3">
                  Absolut Products
                </h3>

                <p className="text-on-surface-variant leading-relaxed">
<<<<<<< HEAD
                  Absolut products will appear here once they
                  are available in our collection.
                </p>

              </div>

            </div>

          )}

        </div>

      </section>

=======
                  Absolut products will appear here once they are available in
                  our collection.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
>>>>>>> 7ac3b83d75dc675d9578284be9e6323326364039
    </div>
  );
}