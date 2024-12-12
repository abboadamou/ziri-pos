import ProductCard from "@/components/product-card";
import { products } from "@/constants/data";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16 md:mb-0">
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            Loading...
          </div>
        }
      >
        {products?.map((product) => (
          <ProductCard key={product?.id} {...product} />
        ))}
      </Suspense>
    </div>
  );
}
