import { useEffect, useState } from "react";
import { FALLBACK_PRODUCTS } from "../data/fallbackProducts.js";

const API_URL = import.meta.env.VITE_API_URL || "";
const SERVER_ORIGIN = API_URL.replace(/\/api\/?$/, "");

function adaptProduct(product) {
  return {
    ...product,
    price: `$${Number(product.price).toFixed(2)}`,
    rating: product.rating ?? 0,
    reviewCount: product.reviewCount ?? 0,
    image: product.image?.startsWith("/")
      ? `${SERVER_ORIGIN}${product.image}`
      : product.image,
  };
}

/** Product catalog is fetched live from the backend API. */
export function useProducts() {
<<<<<<< HEAD
  const [products, setProducts] = useState(() =>
    !API_URL ? FALLBACK_PRODUCTS : []
=======
  // When no backend is configured, initialise directly from the local
  // catalogue rather than scheduling an immediate state update in an effect.
  const [products, setProducts] = useState(() =>
    API_URL ? [] : FALLBACK_PRODUCTS
>>>>>>> 795157638b969a0f728ac6db8e5d6e0ea734e26b
  );
  const [loading, setLoading] = useState(() => Boolean(API_URL));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_URL) return;

<<<<<<< HEAD
    let cancelled = false;
=======
    if (!API_URL) {
      return;
    }
>>>>>>> 795157638b969a0f728ac6db8e5d6e0ea734e26b

    fetch(`${API_URL}/products?limit=1000`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setProducts((data.items || []).map(adaptProduct));
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err);
        setProducts(FALLBACK_PRODUCTS);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading, error };
}
