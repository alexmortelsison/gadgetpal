import Hero from "./components/Hero";
import TrendingProductsPage from "./shop/trendingProducts/page";
import ShopPage from "./shop/page";

const defaultProduct = {
  id: "1",
  name: "Macbook Pro M4",
  description: "16-core CPU with 12 performance cores and 4 efficiency cores",
  price: 3999,
  image: "/1.avif",
  quantity: 1,
  category: "Computers",
};

export default function Home() {
  return (
    <div>
      <Hero product={defaultProduct} />
      <div className="lg:mt-48 mt-40">
        <ShopPage />
        <TrendingProductsPage />
      </div>
    </div>
  );
}
