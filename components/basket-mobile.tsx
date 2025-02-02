import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingBagIcon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import useBasketStore from "@/store/store";
import { BasketItem } from "@/types";
import SetQuantity from "./set-quantity";

const BasketMobile = () => {
  const [isClient, setIsClient] = useState(false);
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  const { removeItem, addItem, getItemCount } = useBasketStore();
  useEffect(() => {
    setIsClient(true);
  }, [isClient]);

  if (!isClient) {
    return null;
  }
  return (
    <Drawer>
      <DrawerTrigger className="lg:hidden">
        <ShoppingBagIcon className="size-7 p-1 stroke-[1.3] stroke-base" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Current Order</DrawerTitle>
        </DrawerHeader>
        <ul className="px-4 overflow-y-scroll h-[400px]">
          {groupedItems.map((item: BasketItem) => (
            <li
              key={item?.product?.id}
              className="py-2 flex gap-2 items-center justify-between"
            >
              <div className="flex gap-2">
                <Image
                  src={item?.product?.image as string}
                  className="bg-slate-100 rounded-sm"
                  alt={item?.product?.name as string}
                  width={50}
                  priority
                  height={50}
                />
                <div>
                  <span className="line-clamp-1">{item?.product?.name}</span>
                  <p className="text-base font-semibold">
                    ${item?.product?.price}
                  </p>
                </div>
              </div>
              <SetQuantity
                item={item}
                removeItem={removeItem}
                addItem={addItem}
                getItemCount={getItemCount}
              />
            </li>
          ))}
        </ul>
        <DrawerFooter>
          <div className="w-full bg-white">
            {/* Checkout total */}
            <div className="bg-gray-100/60 rounded-lg p-3 relative">
              <div className="flex justify-between items-center">
                <p className="text-gray-500/80 text-sm">Subtotal</p>
                <span className="font-semibold text-black/80 text-sm">
                  ${useBasketStore.getState().getTotalPrice().toFixed(2)}
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

              <div className="flex justify-between items-center pt-2">
                <p className="text-black/90 font-bold">Total</p>
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

            <Button
              variant={"default"}
              className="mt-5 w-full h-12 text-white rounded-md"
            >
              Continue to Payment
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BasketMobile;
