import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch("/api/products"); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  }
);

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

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.filteredProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// ✅ Ensure filterProducts is exported
export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
