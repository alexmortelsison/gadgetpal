import TrendingProductCard from "@/app/components/TrendingProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

async function getTrendingProducts(): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/trendingProducts`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch trending products");
  return await res.json(); // Fix: Properly await res.json()
}

export default async function TrendingProductsPage() {
  const trendingProducts = await getTrendingProducts();

  return (
    <div className="max-w-7xl mx-auto flex flex-col px-4 lg:px-0 min-h-screen lg:pt-16">
      <p className="lg:text-3xl text-2xl mb-4 flex justify-center lg:justify-start">
        Trending Products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center mb-4">
        {trendingProducts.map((product) => (
          <TrendingProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
