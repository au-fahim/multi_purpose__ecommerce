// app/hooks/useWishlist.ts
import { useWishlistStore } from '@/app/store/wishlistStore';

const useWishlist = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist);
  const wishlistCount = useWishlistStore((state) => state.wishlistCount);

  return {
    wishlist,
    toggleWishlist,
    isInWishlist,
    wishlistCount,
  };
};

export default useWishlist;