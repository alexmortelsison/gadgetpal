"use client";
import { Button } from "@/components/ui/button";
import { removeFromCart } from "@/store/features/cartSlice";
import { RootState } from "@/store/store";
import { Trash } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { data: session } = useSession();
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success("Successfully removed from cart.");
  };
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });
      if (!res.ok) throw new Error("Error:Failed to checkout items");
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  if (!session)
    return (
      <div className="flex flex-col justify-center h-screen pb-48 items-center">
        Log in to view cart.
        <Button onClick={() => signIn("google")} className="cursor-pointer">
          Log in
        </Button>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="mt-8">
        {cartItems.length === 0 ? (
          <p>You cart is empty.</p>
        ) : (
          <div className="border p-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-8">
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="object-cover w-24 h-24"
                  />
                </div>
                <div className="flex justify-between w-full ml-8">
                  <div>
                    <p className="font-bold">
                      {item.name}
                      <span className="font-normal"> x {item.quantity}</span>
                    </p>
                    <p className="text-sm font-bold">${item.price}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <Trash
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleRemoveFromCart(item.id)}
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-8">
              <div>
                <p>Total amount:</p>
                <p className="font-bold">${totalAmount}</p>
              </div>
              <Button onClick={handleCheckout}>Proceed to Checkout</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
