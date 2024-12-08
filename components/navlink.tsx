"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  icon: Icon,
  label,
  href,
}: {
  icon: LucideIcon;
  label: string;
  href: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href ? true : false;
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "md:size-16 size-10 flex items-center justify-center flex-col rounded-sm md:rounded-lg hover:bg-primary group",
          isActive && "bg-primary"
        )}
      >
        <Icon
          className={cn(
            "size-5 md:size-7 group-hover:stroke-base stroke-base group-hover:stroke-[1.5px] stroke-[1.8px] md:stroke-[1px]",
            isActive && "stroke-base stroke-[1.5px]"
          )}
        />
        <span
          className={cn(
            "hidden md:block text-black text-[8px] font-medium mt-1 leading-none uppercase group-hover:text-white",
            isActive && "text-white"
          )}
        >
          {label}
        </span>
      </Link>
    </li>
  );
};
