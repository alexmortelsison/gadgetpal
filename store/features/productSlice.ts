import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

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
  filteredProducts: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

// ✅ Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch("/api/products"); // ✅ Replace with your API
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  }
);

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilteredProducts: (state, action: PayloadAction<string>) => {
      const searchQuery = action.payload.toLowerCase().trim();
      state.filteredProducts = state.products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery) ||
          product.category.toLowerCase().includes(searchQuery)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
          state.filteredProducts = action.payload; // ✅ Initialize filtered products
        }
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setFilteredProducts } = productSlice.actions;
export default productSlice.reducer;
