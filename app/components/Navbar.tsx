"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound, HeartIcon, ShoppingCart } from "lucide-react";
import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
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
  const { data: session } = useSession();
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
          {session ? (
            <Image
              src={session.user?.image || ""}
              alt="user avatar"
              width={20}
              height={20}
            />
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CircleUserRound className="cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex items-center justify-center">
                <Button variant={"ghost"} onClick={() => signIn("google")}>
                  Sign in
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <HeartIcon />
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
}
