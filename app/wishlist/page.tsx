"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/features/productSlice";
import { loadWishlist } from "@/store/features/wishlistSlice";
import ProductCard from "../components/ProductCard";

export default function WishlistPage() {
  const dispatch = useDispatch<AppDispatch>();

  // Select wishlist and products from Redux
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const products = useSelector((state: RootState) => state.product.products);
  const productStatus = useSelector((state: RootState) => state.product.status);

  // Fetch wishlist and products on mount
  useEffect(() => {
    dispatch(loadWishlist());
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, productStatus]);

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  return (
    <div className="container max-w-7xl min-h-screen mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>

      {wishlistProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Your wishlist is empty.</p>
      )}
    </div>
  );
}
