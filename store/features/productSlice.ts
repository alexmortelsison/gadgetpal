import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: () => {},
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
