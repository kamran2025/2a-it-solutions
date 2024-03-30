"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export function GradientCard() {

  const cardData: any = [
    {
      heading: "Innovation Leadership",
      paragraph: "We are constantly researching on the latest technologies and we help you to deliver the digital solutions with innovation for your business."
    },
    {
      heading: "Effortless Partnership",
      paragraph: "We understand your business and your technology, we strive hard to work with you as a single team to help you become a real time enterprise."
    },
    {
      heading: "Lean Delivery",
      paragraph: "We lean on a specialized teams using agile approach which can deliver quality outcomes efficiently and more faster."
    },
  ]

  return (
    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
      {cardData.map((data:any, index:any) => (
        <BackgroundGradient key={index} className="rounded-[22px] max-w-sm h-full py-10 px-3 sm:px-10 bg-white dark:bg-zinc-900">
          <h4 className="text-3xl text-black pe-16 md:pe-0 mt-4 mb-8 dark:text-neutral-200">
            {data.heading}
          </h4>

          <p className="text-xl text-neutral-300 dark:text-neutral-300 leading-10">
          {data.paragraph}
          </p>
        </BackgroundGradient>
      ))}

    </div>
  );


}
