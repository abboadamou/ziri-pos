import { Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Basket = () => {
  const basketItems = [
    {
      image: "/assets/img/products/battery-5kva-4.png",
      name: "Battery Lithium Life 5000W",
      price: "300,00",
      quantity: 1,
    },
    {
      image: "/assets/img/products/battery-2000w-1.png",
      name: "Battery Lithium Life 2000W",
      price: "300,00",
      quantity: 1,
    },
  ];
  return (
    <div className="hidden md:flex md:w-80 lg:w-96 bg-white px-4 py-5 md:flex-col">
      {/* Checkout header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-primary font-bold">Current Order</h2>
        <Settings className="stroke-1 bg-base rounded-md stroke-white p-1.5 size-8" />
      </div>
      <div className="mt-10 flex flex-col justify-between flex-1">
        {/* Product card checkout */}
        <div className="flex flex-col gap-3">
          {basketItems.map((item, index) => (
            <BasketItem
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
            />
          ))}
        </div>

        {/* Checkout summary */}
        <div>
          {/* Checkout total */}
          <div className="bg-gray-100/60 rounded-lg p-4 py-5 relative">
            <div className="flex justify-between items-center">
              <p className="text-gray-500/80 text-sm">Subtotal</p>
              <span className="font-semibold text-black/80 text-sm">
                $600,00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500/80 text-sm">Discount sales</p>
              <span className="font-semibold text-black/80 text-sm">
                -$5,00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500/80 text-sm">Total sales tax</p>
              <span className="font-semibold text-black/80 text-sm">
                $595,00
              </span>
            </div>
            <hr className="my-5" />
            <div className="size-8 bg-white rounded-full absolute bottom-12 -right-4" />
            <div className="size-8 bg-white rounded-full absolute bottom-12 -left-4" />
            <div className="flex justify-between items-center">
              <p className="text-black/90">Total</p>
              <span className="font-semibold text-black">$595,00</span>
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

const BasketItem = ({
  name,
  price,
  image,
  quantity,
}: {
  name: string;
  price: string;
  image: string;
  quantity: number;
}) => {
  return (
    <div className="gap-3 items-center flex h-20">
      <div className="relative aspect-square rounded-lg overflow-hidden h-20 bg-gray-100/60">
        <Image src={image} fill className="object-cover" alt="product" />
      </div>
      <div className="flex-1 flex flex-col h-full justify-between py-2">
        <p className="font-bold text-sm">{name}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-base text-[17px]">${price}</span>
          <div className="flex gap-2 items-center">
            <Button
              className="size-6 text-base border-base hover:bg-base hover:text-white rounded-sm"
              variant={"outline"}
              size={"icon"}
            >
              -
            </Button>
            <span className="text-sm text-gray-500">{quantity}</span>
            <Button
              className="size-6 text-base border-base hover:bg-base hover:text-white rounded-sm"
              variant={"outline"}
              size={"icon"}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
