"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import YoutubeDialog from "./YoutubeDialog";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/features/cartSlice";

const images = [
  "/1.avif",
  "/2.avif",
  "/3.avif",
  "/4.avif",
  "/5.avif",
  "/6.avif",
];

interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

export default function Hero({ product }: { product: ProductProps }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 place-items-center">
      <div className="flex flex-col text-center mt-8 md:mt-24 lg:mt-8 lg:text-start">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight mt-16 md:mt-0">
          Get the updated Macbook Pro.
        </h1>
        <p className="lg:text-xl text-md lg:mt-2 mt-3 text-muted-foreground tracking-tight">
          Upgrade your workflow with the cutting-edge power of the latest
          MacBook Pro—where performance meets innovation.
        </p>
        <div className="lg:inline-flex gap-x-4 mt-8 hidden">
          <Button
            className="rounded-sm cursor-pointer"
            onClick={handleAddToCart}
          >
            Buy Now
          </Button>
          <YoutubeDialog />
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <Image
          src={images[currentIndex]}
          alt="hero"
          width={300}
          height={300}
          className="lg:w-full w-[90%] lg:ml-0 object-cover"
        />
        <div className="space-x-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 w-1 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="lg:hidden gap-x-4 mt-8 flex justify-center items-center ml-8">
        <Button className="rounded-sm cursor-pointer">Buy Now</Button>
        <YoutubeDialog />
      </div>
    </div>
  );
}
