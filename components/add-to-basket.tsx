"use client";
import { Product } from "@/types";
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";
import { ShoppingBasketIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const AddToBasket = ({ product }: { product: Product }) => {
  const [isClient, setIsClient] = useState(false);
  const { addItem, getItemCount, removeItem } = useBasketStore();
  const itemCount = getItemCount(product.id);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleAddToBasket = (product: Product) => {
    if (itemCount === 0) {
      addItem(product);
    } else {
      removeItem(product.id);
    }
  };

  return (
    <button
      className="group rounded-md absolute size-8 top-3 right-3 overflow-hidden bg-white shadow-sm cursor-pointer"
      onClick={() => handleAddToBasket(product)}
    >
      <ShoppingBasketIcon
        className={cn(
          "stroke-1 stroke-base p-1 size-8  lg:group-hover:bg-base lg:group-hover:stroke-white transition-all",
          itemCount > 0 && "bg-base stroke-white",
          itemCount === 0 && "bg-white stroke-base"
        )}
      />
    </button>
  );
};

export default AddToBasket;
