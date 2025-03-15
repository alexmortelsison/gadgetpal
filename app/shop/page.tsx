"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/features/productSlice";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  console.log("🔥 ShopPage re-rendered");

  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, status } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading products.</p>;

  return (
    <div className="max-w-7xl mx-auto flex flex-col px-4 lg:px-0 min-h-screen lg:pt-16">
      <p className="lg:text-3xl text-2xl mb-4 flex justify-center lg:justify-start">
        All Products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center mb-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}
