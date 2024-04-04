"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("absolute bg-slate-200 rounded-full md:fixed top-2 md:top-4 inset-x-0 max-w-[1250px] mx-2 xl:mx-auto z-[999] md:flex justify-between items-center px-2 md:px-4 py-2", className)}>
      <div className="md:px-2 text-center mb-1 md:mb-0">
        <Link href={"/"}>
         <h3 className="text-2xl xl:text-3xl text-slate-800 mt-1 hover:opacity-[0.9] dark:text-white font-normal">2A Corporate Solutions</h3>
        </Link>
      </div>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        <Link href={"/services"}>
          <MenuItem setActive={setActive} active={active} item="Services">
          </MenuItem>
        </Link>
        <Link href={"/products"}>
          <MenuItem setActive={setActive} active={active} item="Products">
          </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">
          </MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem setActive={setActive} active={active} item="About">
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
