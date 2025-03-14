import { NextResponse } from "next/server";

export async function GET() {
  const trendingProducts = [
    {
      id: "1",
      name: "iPhone 16 Pro Max",
      description:
        "Powered by the A18 Pro chip and built for Apple Intelligence",
      price: 1499,
      image: "/16.png",
      quantity: 2,
      category: "Smartphones",
    },
  ];

  return NextResponse.json(trendingProducts);
}
