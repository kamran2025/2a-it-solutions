"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

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
        <div>
          
        </div>
      </ContainerScroll>
    </div>
  );
}

