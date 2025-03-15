"use client";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/store/features/cartSlice";
import { toast } from "sonner";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { RootState } from "@/store/store";
import { toggleWishlist } from "@/store/features/wishlistSlice";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

export default function ProductCard({ product }: { product: ProductProps }) {
  const { data: session } = useSession();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Successfully added to cart");
  };
  const isWishListed = wishlist.includes(product.id);
  return (
    <div className="border rounded-md h-[500px] px-8 relative shadow-md">
      <div
        className="flex justify-end cursor-pointer absolute right-4 top-4"
        onClick={() => dispatch(toggleWishlist(product.id))}
      >
        {isWishListed ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
      <div className="h-[300px] items-center flex pt-24">
        <Link href={`/shop/featuredProducts/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="mt-16 items-center flex justify-between">
        <div className="flex flex-col">
          <Link href={`/shop/featuredProducts/${product.id}`}>
            <p className="font-bold line-clamp-1 text-sm">{product.name}</p>
          </Link>
          <p className="text-sm">
            Stock:{" "}
            <span className="text-muted-foreground">{product.quantity}</span>
          </p>
        </div>
        <p className="text-sm">${product.price}</p>
      </div>
      <div className="mt-8">
        <Button
          onClick={handleAddToCart}
          className="cursor-pointer"
          disabled={!session}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
