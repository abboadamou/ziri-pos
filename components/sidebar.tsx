"use client";
import {
  ChartPie,
  Home,
  LogOut,
  ScrollText,
  Settings,
  ShoppingBasket,
  Users,
} from "lucide-react";
import { NavLink } from "./navlink";
import Logo from "./logo";
import BasketMobile from "./basket-mobile";

const Sidebar = () => {
  const NavLinks = [
    {
      icon: Home,
      label: "Home",
      href: "/",
    },
    {
      icon: ChartPie,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: ShoppingBasket,
      label: "Sales",
      href: "/sales",
    },
    {
      icon: ScrollText,
      label: "Rapports",
      href: "/rapports",
    },
    {
      icon: Users,
      label: "Customers",
      href: "/customers",
    },
  ];

  return (
    <nav className="fixed lg:sticky shrink-0 lg:h-svh lg:overflow-y-auto hide-scrollbar z-10 bottom-0 border-t lg:border-none bg-white border-base/20 lg:left-0 lg:top-0 lg:w-20 w-full flex lg:flex-col items-center lg:py-3 gap-3 lg:gap-5 lg:divide-y px-4 lg:px-0">
      <Logo />
      <div className="flex justify-start lg:flex-col flex-1 py-3">
        <ul className="flex flex-row lg:flex-col gap-3">
          {NavLinks.map((link) => (
            <NavLink
              key={link.href}
              icon={link.icon}
              label={link.label}
              href={link.href}
            />
          ))}
        </ul>
      </div>
      <ul className="lg:pt-3 lg:gap-y-3 gap-x-3 flex lg:flex-col">
        <NavLink
          icon={Settings}
          label="Settings"
          href="/settings"
          className="hidden lg:block"
        />
        <NavLink
          icon={LogOut}
          label="Sign out"
          href=""
          className="hidden lg:block"
        />
        {/* <NavLink
          icon={ShoppingBag}
          label="Basket"
          href=""
          className="block lg:hidden"
        /> */}
      </ul>
      <BasketMobile />
    </nav>
  );
};

export default Sidebar;
