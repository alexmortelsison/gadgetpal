import { createSlice } from "@reduxjs/toolkit";

interface FeaturedProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

interface ProductState {
  featuredProducts: FeaturedProduct[];
}

const initialState: ProductState = {
  featuredProducts: [],
};

const featuredProductSlice = createSlice({
  name: "featuredProduct",
  initialState,
  reducers: {
    setFeaturedProducts: () => {},
  },
});

export const { setFeaturedProducts } = featuredProductSlice.actions;
export default featuredProductSlice.reducer;
