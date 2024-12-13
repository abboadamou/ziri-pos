import { LoadingSkeleton } from "@/components/loading-skeleton";
import ProductCard from "@/components/product-card";
import { products } from "@/constants/data";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  if (!products) return null;

  const filter = (await searchParams)?.category ?? "all";
  const getFilteredProducts = (filter: string) => {
    if (filter === "all") return products;
    return products.filter((product) => product.category === filter);
  };

  const displayedProducts = getFilteredProducts(filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16 md:mb-0 px-4 lg:px-5 pt-3">
      <Suspense fallback={<LoadingSkeleton />} key={filter}>
        {displayedProducts?.map((product) => (
          <ProductCard key={product?.id} {...product} />
        ))}
      </Suspense>
    </div>
  );
}
