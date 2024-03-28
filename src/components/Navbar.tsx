"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Logo from "../assets/2A-logo-2.png";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("relative md:fixed top-2 md:top-6 inset-x-0 max-w-7xl mx-auto z-50 md:flex justify-between px-2", className)}>
      <div className="pl-20 md:px-2 py-2">
        <Link href={"/"}>
         <h3 className="text-2xl xl:text-3xl">2A Corporate Solutions</h3>
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
