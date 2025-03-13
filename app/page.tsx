import Hero from "./components/Hero";
import ShopPage from "./shop/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="lg:mt-48 mt-40">
        <ShopPage />
      </div>
    </div>
  );
}
