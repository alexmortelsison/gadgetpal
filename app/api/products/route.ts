import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: "1",
      name: "Macbook Pro M4",
      description:
        "16-core CPU with 12 performance cores and 4 efficiency cores",
      price: 3999,
      image: "/1.avif",
      quantity: 1,
      category: "Computers",
    },
    {
      id: "2",
      name: "Macbook Air M4",
      description:
        "15.3-inch (diagonal) LED-backlit display with IPS technology; 2 2880-by-1864 native resolution at 224 pixels per inch 500 nits brightness",
      price: 1599,
      image: "/mair.png",
      quantity: 3,
      category: "Computers",
    },
    {
      id: "3",
      name: "PS5 Pro",
      description:
        "Equipped with advanced ray tracing, sharp and clear images on 4K TVs, high frame rate gameplay, and other features, it takes your gaming experience to the next level.",
      price: 539,
      image: "/ps5.png",
      quantity: 4,
      category: "Game Consoles",
    },
    {
      id: "4",
      name: "EOS 5D Mark IV",
      description:
        "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      price: 3199,
      image: "/5d.png",
      quantity: 4,
      category: "Cameras",
    },
  ];
  return NextResponse.json(products);
}
