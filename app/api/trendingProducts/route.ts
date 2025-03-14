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
    {
      id: "2",
      name: "Nintendo Switch",
      description:
        "You can enjoy it alone, anywhere, such as while on the move or on the go.",
      price: 299,
      image: "/ns.png",
      quantity: 1,
      category: "Game Consoles",
    },
    {
      id: "3",
      name: "Olympus 35I",
      description: "The Olympus 35I, released in 1948, is a 35mm camera.",
      price: 75,
      image: "/ol.png",
      quantity: 3,
      category: "Cameras",
    },
    {
      id: "4",
      name: "Beats Studio Buds  +",
      description:
        "Beats Studio Buds+ delivers rich, immersive sound for music and calls.",
      price: 199,
      image: "/beats.png",
      quantity: 1,
      category: "Accessories",
    },
  ];

  return NextResponse.json(trendingProducts);
}
