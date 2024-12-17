import { Product } from "@/types";
import Image from "next/image";
import AddToBasket from "./add-to-basket";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white p-2 rounded-md shadow  relative cursor-pointer">
      <div className="relative rounded-md overflow-hidden xl:h-[220px] lg:h-[180px] h-[140px] md:h-[140px] bg-gray-50">
        <Image
          src={product.image}
          fill
          alt={product.name}
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4"></div>
      <h3 className="text-[16px] font-semibold text-primary line-clamp-1">
        {product.name}
      </h3>
      <p className="text-[19px] font-bold text-base mt-1">${product.price}</p>
      <AddToBasket product={product} />
    </div>
  );
};

export default ProductCard;
