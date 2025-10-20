import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface WishlistState {
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      toggleWishlist: (productId) => {
        set((state) => {
          if (state.wishlist.includes(productId)) {
            return { wishlist: state.wishlist.filter((id) => id !== productId) };
          } else {
            return { wishlist: [...state.wishlist, productId] };
          }
        });
      },
      isInWishlist: (productId) => get().wishlist.includes(productId),
      get wishlistCount() {
        return get().wishlist.length;
      },
    }),
    {
      name: 'wishlist-storage', // unique name
      storage: createJSONStorage(() => localStorage),
    }
  )
);
