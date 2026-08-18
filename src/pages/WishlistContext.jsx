import { WishlistContext } from "../context/wishlistContextStore.js";

export function WishlistProvider({
  wishlistItems,
  isWishlisted,
  toggleWishlist,
  children,
}) {
  return (
    <WishlistContext.Provider
      value={{ wishlistItems, isWishlisted, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
