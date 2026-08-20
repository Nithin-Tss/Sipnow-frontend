import { Navigate, useParams } from "react-router-dom";
import BrandCollection from "../../components/BrandCollection.jsx";
import { resolveImageUrl } from "../../utils/api.js";

export default function BrandPage({
  brands = [],
  brandsLoading = false,
  onAddToCart,
  products = [],
  productsLoading = false,
}) {
  const { brandSlug } = useParams();

  if (brandsLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-on-surface-variant">Loading brand...</p>
      </div>
    );
  }

  const brand = brands.find((item) => item.slug === brandSlug);

  if (!brand) {
    return <Navigate replace to="/" />;
  }

  const bannerSource =
    brand.bannerImage || brand.banner || brand.bannerUrl || brand.logo;

  return (
    <BrandCollection
      brandName={brand.name}
      bannerImage={resolveImageUrl(bannerSource)}
      description={
        brand.description || `Explore our collection of ${brand.name} products.`
      }
      bestSellingDescription={brand.bestSellingDescription}
      bestRatedDescription={brand.bestRatedDescription}
      collectionDescription={brand.collectionDescription}
      keywords={[brand.name, brand.slug]}
      onAddToCart={onAddToCart}
      products={products}
      productsLoading={productsLoading}
    />
  );
}
