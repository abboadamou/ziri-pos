import ProductCard from "@/components/product-card";
import { products } from "@/constants/data";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16 md:mb-0 px-4 lg:px-5 pt-3">
      {products?.map((product) => (
        <ProductCard key={product?.id} {...product} />
      ))}
    </div>
  );
}
