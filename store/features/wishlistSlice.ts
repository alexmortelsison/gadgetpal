import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: string[]; // Store product IDs
}

// Define a function to safely load wishlist from localStorage on the client side
const getWishlistFromLocalStorage = (): string[] => {
  if (typeof window !== "undefined") {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  }
  return [];
};

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    loadWishlist: (state) => {
      state.items = getWishlistFromLocalStorage(); // Load wishlist only on client-side
    },
    toggleWishlist: (state, action: PayloadAction<string>) => {
      if (state.items.includes(action.payload)) {
        state.items = state.items.filter((id) => id !== action.payload);
      } else {
        state.items.push(action.payload);
      }

      // Save to localStorage only on client side
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(state.items));
      }
    },
  },
});

export const { toggleWishlist, loadWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
