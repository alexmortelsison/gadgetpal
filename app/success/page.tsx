import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="h-[80vh] max-w-7xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl">Thank you for your purchase!</h1>
      <p>Check your email to track your shipment.</p>
      <Link href={"/"} className="mt-4 cursor-pointer">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
