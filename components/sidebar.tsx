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
    <nav className="w-20  min-h-screen flex flex-col items-center py-3 gap-5 divide-y">
      <Logo />
      <div className="flex justify-start flex-col flex-1 py-3">
        <ul className="grid gap-3">
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
      <ul className="pt-3 space-y-3">
        <NavLink icon={Settings} label="Settings" href="/settings" />
        <NavLink icon={LogOut} label="Sign out" href="" />
      </ul>
    </nav>
  );
};

export default Sidebar;
