import { Filter, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="flex lg:justify-between lg:items-center flex-col lg:flex-row w-full pb-3 gap-3 lg:gap-5">
      <div>
        <h1 className="md:text-2xl text-xl lg:text-[28px] font-semibold">
          Welcome, Abbo
        </h1>
        <p className="text-gray-500 text-sm md:text-[16px] leading-8">
          Discover whatever you need easily
        </p>
      </div>
      <div className="flex-1 flex">
        <div className="flex bg-white group items-center rounded-md overflow-hidden border h-12 lg:max-w-sm ml-auto flex-1">
          <Search className="stroke-1 p-1.5 size-8 translate-x-3" />

          <Input
            placeholder="Search product..."
            className=" shadow-transparent h-12 focus-visible:ring-0 border-transparent"
          />
        </div>
        <Button
          className="size-12 ml-2 shrink-0 shadow-none"
          variant={"outline"}
          size={"icon"}
        >
          <Filter />
        </Button>
      </div>
    </header>
  );
};

export default Header;
