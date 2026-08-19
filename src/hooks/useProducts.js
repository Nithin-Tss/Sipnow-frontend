import { useEffect, useState } from "react";

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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

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
        if (!cancelled) setError(err);
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
