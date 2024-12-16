import { FilterIcon, LayoutGridIcon, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Suspense } from "react";
import Filter from "./filter";

const Header = () => {
  return (
    <header className="fixed md:sticky w-full z-10 bg-gray-50 top-0 flex flex-col lg:pt-5 lg:pb-5 border-base/20 border-b lg:border-none">
      <div className="h-14 px-4 bg-white w-full lg:hidden flex items-center justify-between">
        <LayoutGridIcon className="stroke-[1.3] size-6 cursor-pointer stroke-base" />
        <div className="flex flex-col items-center">
          <h1 className="text-[17px] font-semibold leading-none">
            Welcome, Abbo
          </h1>
          <p className="text-gray-500 text-xs">
            Discover whatever you need easily
          </p>
        </div>
        <Search className="stroke-[1.3] size-6 cursor-pointer stroke-base" />
      </div>
      <div className="flex px-4  lg:justify-between lg:items-center lg:px-5 flex-col lg:flex-row w-full gap-3 lg:gap-5">
        <div className="hidden lg:block">
          <h1 className="md:text-2xl text-xl pt-3 lg:pt-0 lg:text-[28px] font-semibold">
            Welcome, Abbo
          </h1>
          <p className="text-gray-500 md:text-[18px] leading-8">
            Discover whatever you need easily
          </p>
        </div>
        <div className="flex-1 hidden lg:flex lg:pb-0">
          <div className="flex bg-white shadow group items-center rounded-md overflow-hidden md:h-12 lg:max-w-sm ml-auto flex-1">
            <Search className="stroke-1 p-1.5 size-8 translate-x-3 stroke-base" />

            <Input
              placeholder="Search product..."
              className="md:h-12 focus-visible:ring-0 border-transparent shadow-none"
            />
          </div>
          <Button
            className="size-10 md:size-12 ml-2 shrink-0 shadow border-transparent"
            variant={"outline"}
            size={"icon"}
          >
            <FilterIcon className="stroke-2 stroke-base" />
          </Button>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Filter />
      </Suspense>
    </header>
  );
};

export default Header;
