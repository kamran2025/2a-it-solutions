"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { GradientCard } from "./GradientCard";

export function ScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Our Commitment <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Flexible Approach
              </span>
            </h1>
          </>
        }
      >
        <div className="pb-6 pt-10 md:py-6 px-4">
          <h4 className="text-lg">At CLS, we unswervingly improve our systems, processes and people and offer a collaboration process that is 100% flexible.</h4>
          <ul className="pt-6">
              <li className="mb-3 text-lg"><span className="mr-3 ml-1">&bull;</span>Innovation Leadership</li>
              <li className="mb-3 text-lg"><span className="mr-3 ml-1">&bull;</span>Effortless Partnership</li>
              <li className="mb-3 text-lg"><span className="mr-3 ml-1">&bull;</span>Lean Delivery</li>
            </ul>
            <div className="py-12 mt-8">
              <GradientCard />
            </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

