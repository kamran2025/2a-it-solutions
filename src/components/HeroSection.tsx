"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { GithubGlob } from "./GithubGlob";
import { MovingBorderButton } from "./MovingBorderButton";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="h-auto pt-28 pb-8 md:py-36 w-full rounded-md bg-neutral-950 relative flex items-center justify-center antialiased">
      <div className="flex flex-col-reverse md:flex-row items-center z-50">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 py-3 to-neutral-400  font-sans font-semibold">
            Empowering Innovation, Transforming Futures
          </h1>
          <p className="text-neutral-400 max-w-xl my-2 ml-2 text-sm relative z-10 mt-4 mb-10">
            Join us on a journey of technological excellence, where creativity meets cutting-edge innovation to shape a brighter future. Together, let's build the digital landscape of tomorrow, today.
          </p>
          <Link href="/contact">
            <MovingBorderButton />
          </Link>
        </div>
        <GithubGlob />
      </div>
      <BackgroundBeams />
    </div>
  );
}
