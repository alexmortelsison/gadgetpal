import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: "1",
      name: "Macbook Pro M4",
      price: 3999,
      image: "/1.avif",
      quantity: 1,
      category: "Computers",
    },
    {
      id: "2",
      name: "Macbook Air M4",
      price: 1599,
      image: "/mair.png",
      quantity: 3,
      category: "Computers",
    },
    {
      id: "3",
      name: "PS5 Pro",
      price: 539,
      image: "/ps5.png",
      quantity: 4,
      category: "Game Consoles",
    },
    {
      id: "4",
      name: "EOS 5D Mark IV",
      price: 3199,
      image: "/5d.png",
      quantity: 4,
      category: "Cameras",
    },
    {
      id: "5",
      name: "Sony WH-1000XM5",
      price: 329,
      image: "/500.avif",
      quantity: 5,
      category: "Accessories",
    },
    {
      id: "6",
      name: "iPhone 16 Pro Max",
      description:
        "Powered by the A18 Pro chip and built for Apple Intelligence",
      price: 1499,
      image: "/16.png",
      quantity: 2,
      category: "Smartphones",
    },
    {
      id: "7",
      name: "Nintendo Switch",
      description:
        "You can enjoy it alone, anywhere, such as while on the move or on the go.",
      price: 299,
      image: "/ns.png",
      quantity: 1,
      category: "Game Consoles",
    },
    {
      id: "8",
      name: "Olympus 35I",
      description: "The Olympus 35I, released in 1948, is a 35mm camera.",
      price: 75,
      image: "/ol.png",
      quantity: 3,
      category: "Cameras",
    },
    {
      id: "9",
      name: "Beats Studio Buds  +",
      description:
        "Beats Studio Buds+ delivers rich, immersive sound for music and calls.",
      price: 199,
      image: "/beats.png",
      quantity: 1,
      category: "Accessories",
    },
  ];

  return NextResponse.json(products);
}
