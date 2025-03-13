import ProductCard from "../components/ProductCard";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto place-items-center mb-24">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
