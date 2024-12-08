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
    <nav className="fixed bottom-0 border-t md:border-none bg-white border-base/30 md:static md:w-20 w-full md:min-h-screen flex md:flex-col items-center md:py-3 gap-5 md:divide-y px-3 md:px-0">
      <Logo />
      <div className="flex justify-start md:flex-col flex-1 py-3">
        <ul className="flex flex-row md:flex-col gap-3">
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
      <ul className="md:pt-3 md:gap-y-3 gap-x-3 flex md:flex-col">
        <NavLink icon={Settings} label="Settings" href="/settings" />
        <NavLink icon={LogOut} label="Sign out" href="" />
      </ul>
    </nav>
  );
};

export default Sidebar;
