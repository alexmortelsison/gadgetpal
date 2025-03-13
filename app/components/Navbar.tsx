"use client";

import { CircleUserRound, HeartIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Trending",
    href: "/trending",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="bg-accent-foreground py-8 lg:py-10 md:py-4 lg:px-[330px] px-4 justify-between flex">
      <h1 className="text-3xl font-bold text-white">
        Tech
        <span className="text-black bg-[#ffa31a] px-1 rounded-sm font-bold">
          hub
        </span>
      </h1>
      <div className="space-x-4 text-muted flex items-center">
        {navlinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={` hidden lg:inline-flex ${
              pathName === link.href
                ? "underline underline-offset-8 font-bold text-[#ffa31a]"
                : "text-muted-foreground"
            }`}
          >
            <p>{link.name}</p>
          </Link>
        ))}
        <div className="text-white items-center flex space-x-4 ml-12">
          <CircleUserRound />
          <HeartIcon />
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
}
