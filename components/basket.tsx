"use client";
import { Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SetQuantity from "./set-quantity";

const Basket = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  useEffect(() => {
    setIsClient(true);
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={cn(
        "hidden lg:flex-col lg:flex sticky top-0 right-0 lg:w-96 bg-white px-4 py-5 z-10 h-svh shrink-0 overflow-y-scroll overflow-x-hidden",
        pathname.split("/")[1] !== "" && "lg:hidden"
      )}
    >
      {/* Checkout header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-primary font-bold">Current Order</h2>
        <Settings className="stroke-1 bg-base rounded-md stroke-white p-1.5 size-8" />
      </div>
      <div className="mt-10 overflow-hidden">
        {/* Product card checkout */}
        <div className="flex flex-col gap-3 max-h-[550px] h-full overflow-y-auto py-1 hide-scrollbar">
          {groupedItems?.map((item) => (
            <BasketItem key={item?.product?.id} product={item?.product} />
          ))}
        </div>

        {/* Checkout summary */}
        <div className="w-full bg-white pt-4 absolute bottom-5 pr-8">
          {/* Checkout total */}
          <div className="bg-gray-100/60 rounded-lg p-4 py-5 relative">
            <div className="flex justify-between items-center">
              <p className="text-gray-500/80 text-sm">Subtotal</p>
              <span className="font-semibold text-black/80 text-sm">
                ${useBasketStore.getState().getTotalPrice().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500/80 text-sm">Discount sales</p>
              <span className="font-semibold text-black/80 text-sm">
                -$0,00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500/80 text-sm">Total sales tax</p>
              <span className="font-semibold text-black/80 text-sm">
                $
                {typeof useBasketStore.getState().getTotalPrice() === "number"
                  ? (
                      (useBasketStore.getState().getTotalPrice() as number) *
                      0.06
                    ).toFixed(2)
                  : 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500/80 text-sm">Items</p>
              <span className="font-semibold text-black/80 text-sm">
                {groupedItems?.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </span>
            </div>
            <hr className="my-5" />
            <div className="size-8 bg-white rounded-full absolute bottom-12 -right-4" />
            <div className="size-8 bg-white rounded-full absolute bottom-12 -left-4" />
            <div className="flex justify-between items-center">
              <p className="text-black/90">Total</p>
              <span className="font-semibold text-black">
                $
                {typeof useBasketStore.getState().getTotalPrice() === "number"
                  ? (
                      (useBasketStore.getState().getTotalPrice() as number) +
                      (useBasketStore.getState().getTotalPrice() as number) *
                        0.06
                    ).toFixed(2)
                  : 0}
              </span>
            </div>
          </div>

          {/* Button checkout */}
          <Button
            variant={"default"}
            className="mt-5 w-full h-12 text-white rounded-md"
          >
            Continue to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Basket;

const BasketItem = ({ product }: { product: Product }) => {
  const { removeItem, addItem, getItemCount } = useBasketStore();
  const { name, price, image } = product;
  return (
    <div className="gap-3 items-center flex h-20  rounded-md">
      <div className="relative aspect-square rounded-lg overflow-hidden h-20 bg-gray-100/60">
        <Image
          src={image || "/assets/img/products/battery/battery-5kwh.png"}
          fill
          className="object-cover"
          alt="product"
        />
      </div>
      <div className="flex-1 flex flex-col h-full justify-between py-2">
        <p className="font-bold text-sm">{name}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-base text-[18px]">${price}</span>
          <SetQuantity
            item={{ product, quantity: 1 }}
            addItem={addItem}
            removeItem={removeItem}
            getItemCount={getItemCount}
          />
        </div>
      </div>
    </div>
  );
};
