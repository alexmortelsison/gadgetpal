"use client";

import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setFilteredProducts } from "@/store/features/productSlice";

export default function CategoriesBar() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    dispatch(setFilteredProducts(value)); // ✅ Dispatch search query
  };

  return (
    <div className="bg-accent text-sm py-4 w-full flex justify-center">
      <Input
        type="text"
        placeholder="Search"
        className="w-[300px]"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}
