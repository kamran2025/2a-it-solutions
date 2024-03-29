"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import ConsultancyIcon from "../assets/icons/service-consultancy.png"
import StaffingIcon from "../assets/icons/staffing.png"
import DeliveryIcon from "../assets/icons/delivery.png"
import ManagedIcon from "../assets/icons/managed.png"
import SolutionIcon from "../assets/icons/solutions.png"

export function CardSlider() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden -mt-40 md:-mt-40">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
    "Consultancy Services",
    icon: ConsultancyIcon.src,
  },
  {
    quote:
      "Staffing Services",
      icon: StaffingIcon.src,
  },
  {
    quote: "Delivery Services",
    icon: DeliveryIcon.src,
  },
  {
    quote:
      "Managed Services",
      icon: ManagedIcon.src,
  },
  {
    quote:
      "Solution Service",
      icon: SolutionIcon.src,
  },
];
