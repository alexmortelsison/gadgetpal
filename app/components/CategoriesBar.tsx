"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";

const categoryLinks = [
  {
    name: "Computers",
    href: "/shop/computers",
  },
  {
    name: "Game Consoles",
    href: "/shop/consoles",
  },
  {
    name: "Smartphones",
    href: "/shop/smartphones",
  },
  {
    name: "Cameras",
    href: "/shop/cameras",
  },
];

export default function CategoriesBar() {
  return (
    <div className="bg-accent py-4 flex">
      <div className="flex space-x-4 items-center max-w-7xl mx-auto">
        {categoryLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="hover:underline underline-offset-4 text-sm text-muted-foreground hover:font-bold hidden lg:inline-flex"
          >
            {link.name}
          </Link>
        ))}
        <Input
          type="text"
          className="w-[300px] placeholder:text-muted-foreground placeholder:text-sm"
          placeholder="Search product"
        />
      </div>
    </div>
  );
}
