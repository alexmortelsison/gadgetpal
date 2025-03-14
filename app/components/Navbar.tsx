"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { RootState } from "@/store/store";
import { CircleUserRound, HeartIcon, ShoppingCart } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Trending",
    href: "/shop/trendingProducts",
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
  const { data: session } = useSession();
  const pathName = usePathname();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <nav className="bg-accent-foreground py-8 lg:py-10 md:py-4 lg:px-[330px] px-4 justify-between flex">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold text-white">
          Tech
          <span className="text-black bg-[#ffa31a] px-1 rounded-sm font-bold">
            hub
          </span>
        </h1>
      </Link>
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
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                  <Image
                    src={session.user?.image || ""}
                    alt="user avatar"
                    width={30}
                    height={30}
                    className="rounded-full object-cover"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex flex-col hover:bg-transparent">
                  <div className="flex flex-col items-start">
                    <p className="font-bold">{session.user?.name}</p>
                    <p>{session.user?.email}</p>
                  </div>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem className="flex justify-center items-center">
                  <Button
                    variant={"ghost"}
                    onClick={() => signOut()}
                    className="hover:bg-transparent cursor-pointer"
                  >
                    Sign out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <CircleUserRound className="cursor-pointer" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex items-center justify-center">
                <DropdownMenuItem>
                  <Button
                    variant={"ghost"}
                    onClick={() => signIn("google")}
                    className="hover:bg-transparent cursor-pointer"
                  >
                    Sign in
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <div className="flex space-x-4 relative">
            <HeartIcon />
            <Link href="/cart">
              <ShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 rounded-full px-2 text-sm">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
