"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";


export default function HeroSection() {
  return (
    <div className="h-screen py-28 md:py-40 xl:py-48 w-full rounded-md bg-blue-700 dark:bg-slate-900 relative flex items-center justify-center antialiased">
           <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-40">
        <source src="./hero-video.mp4" type="video/mp4" />
      </video>
      <div className="-mt-40 z-10">
        <div className="max-w-3xl p-4">
          <h1 className="relative z-10 text-5xl md:text-7xl text-slate-50 mt-10 md:mt-0 py-5 md:py-3  font-sans font-bold">
            Empowering Innovation, Transforming Futures
          </h1>
          <p className="text-slate-200 max-w-xl my-2 ml-2 text-sm relative z-10 mt-4 mb-10">
            Join us on a journey of technological excellence, where creativity meets cutting-edge innovation to shape a brighter future. Together, lets build the digital landscape of tomorrow, today.
          </p>
          <Link href={"/contact"}>
            <Button className=" bg-slate-100 rounded-full py-3 px-5" value="Shedule a call" />
          </Link>
        </div>
      </div>
    </div>
  );
}
