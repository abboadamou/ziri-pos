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
          "size-14 flex items-center justify-center flex-col rounded-lg hover:bg-primary group",
          isActive && "bg-primary"
        )}
      >
        <Icon
          className={cn(
            "size-7 group-hover:stroke-white stroke-[1px]",
            isActive && "stroke-white"
          )}
        />
        <span
          className={cn(
            "text-black text-[7px] font-medium mt-1 leading-none uppercase group-hover:text-white",
            isActive && "text-white"
          )}
        >
          {label}
        </span>
      </Link>
    </li>
  );
};
