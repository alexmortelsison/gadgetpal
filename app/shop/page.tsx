import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ProductCard from "../components/ProductCard";
import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  return res.json();
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto flex flex-col px-4 lg:px-0 min-h-screen lg:pt-16">
      <p className="lg:text-3xl text-2xl mb-4 flex justify-center lg:justify-start">
        Featured Products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center mb-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mb-8 flex lg:ml-[1000px] ">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
