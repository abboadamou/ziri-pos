import { ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: string;
}
const ProductCard = ({ name, image, price }: ProductCardProps) => {
  return (
    <div className="bg-white p-4 rounded-md md:shadow-md md:shadow-black/5 relative">
      <div className="relative rounded-lg overflow-hidden xl:h-[250px] lg:h-[220px] h-[200px] bg-gray-50">
        <Image
          src={image}
          fill
          alt={name}
          className="object-contain"
          priority
        />
      </div>
      <div className="mt-4"></div>
      <h3 className="text-[16px] font-semibold text-primary line-clamp-1">
        {name}
      </h3>
      <p className="text-[19px] font-bold text-base mt-1">${price}</p>
      <ShoppingBasketIcon className="stroke-1 rounded-md absolute size-9 top-5 right-5 stroke-base bg-white shadow-sm p-1 hover:bg-base hover:stroke-white cursor-pointer" />
    </div>
  );
};

export default ProductCard;
