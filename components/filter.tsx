"use client";

import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Settings2 } from "lucide-react";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams?.get("category") ?? "all";

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filters = [
    {
      label: "All",
      filter: "all",
      handleFilter: () => handleFilter("all"),
    },
    {
      label: "Battery",
      filter: "battery",
      handleFilter: () => handleFilter("battery"),
    },
    {
      label: "Pump",
      filter: "pump",
      handleFilter: () => handleFilter("pump"),
    },
    {
      label: "Solar Pannel",
      filter: "solar",
      handleFilter: () => handleFilter("solar"),
    },
    {
      label: "Inverter",
      filter: "inverter",
      handleFilter: () => handleFilter("inverter"),
    },
    {
      label: "Pump Kit",
      filter: "pump_kit",
      handleFilter: () => handleFilter("pump_kit"),
    },
  ];
  return (
    <div className="flex items-center gap-3 overflow-hidden pt-1 md:pt-3">
      <div className="mr-2 flex items-center gap-1 h-10 md:h-12 rounded-sm border border-base px-5 py-1 pr-5 text-sm lg:font-light">
        <Settings2 className="size-4 stroke-2 stroke-base" /> Filter
      </div>
      <div className="hide-scrollbar flex w-[90%] items-center gap-3 overflow-x-auto py-2 lg:py-5">
        <Suspense>
          {filters.map((filter) => (
            <FilteredButton
              key={filter.filter}
              filter={filter.filter}
              label={filter.label}
              handleFilter={handleFilter}
              activeFilter={activeFilter}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Filter;

const FilteredButton = ({
  filter,
  handleFilter,
  activeFilter,
  label,
}: {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  label: string;
}) => {
  return (
    <Button
      onClick={() => handleFilter(filter)}
      size={"lg"}
      className={cn(
        "text-primary md:h-12 px-5 rounded-md bg-white hover:bg-base hover:rounded-md hover:text-white font-medium",
        {
          "bg-base px-5 rounded-md text-white": activeFilter === filter,
        }
      )}
    >
      {label}
    </Button>
  );
};
