import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16 md:mb-0 px-4 lg:px-5 pt-3">
      {[...Array(12)].map((_, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-md shadow  relative cursor-pointer"
        >
          <Skeleton className="xl:h-[250px] lg:h-[220px] h-[200px] bg-gray-50 w-full rounded-lg" />
          <div className="mt-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-6 w-1/3 mt-1" />
          </div>
        </div>
      ))}
    </div>
  );
}
