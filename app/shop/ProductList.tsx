"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const filteredProducts = useSelector(
    (state: RootState) => state.product.filteredProducts
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
}
