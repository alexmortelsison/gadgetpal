import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  return <div>CartPage</div>;
}
