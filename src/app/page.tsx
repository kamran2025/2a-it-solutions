"use client";

import { cn } from "@/utils/cn";
import HeroSection  from "@/components/HeroSection";
import connectImg from "@/assets/connect.png"
import cuttingIcon from "@/assets/icons/managed.png"
import connectBg from "@/assets/hero-bg2.jpg"
import visionBG from "@/assets/vision-bg.jpg"
import { ScrollAnimation } from "@/components/ScrollAnimation";


export default function Home() {
  return (
    <main className="min-h-screen dark:bg-slate-900 antialiased">
      {/* Hero Section  */}
      <HeroSection />

      {/* Services Section  */}
      {/* <div className="relative w-full h-64 md:h-auto">
      </div> */}

      {/* Connect Life Solutions  */}
      <div className="h-auto bg-sky-300 relative w-full overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-10 py-32 lg:pb-48 lg:pt-56 px-4 rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <img src={connectBg.src} className="absolute w-full h-full top-0 left-0 opacity-20" alt="icon" />
        <h1 className={cn("w-full text-center md:text-4xl text-3xl text-black/80  font-sans font-bold absolute top-10 z-20")}>
          Connect Life Solutions
        </h1>
        <div className="z-40 opacity-85">
          <img src={connectImg.src} width={500}
            height={500} className=" md:max-w-xl" alt="image" />
        </div>
        <div>
          <p className="text-slate-700 font-medium dark:text-neutral-300 text-xl max-w-2xl pt-6 lg:pt-0 relative z-20">
            ConnectLifeSolutions is in the business of IT consulting and Enterprise Software services to customers in India, North America, UK and Australia. At Connect Life, we are committed to customer success through transparent communication and consistent quality services.
          </p>
          <p className="mt-8 text-slate-700 font-medium dark:text-neutral-300 text-xl max-w-2xl relative z-20">
            Connect Life Solutions (CLS) aims to implement smarter technology solutions to business problems. At CLS, we focus on why, not just what, of the problems rather than jumping to fix them somehow. This approach will reduce overall costs and improve business Focus as a Long-Term strategy rather than settle for Short-Term Milestones.
          </p>
          <button className="relative mt-8 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-20">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Learn more
            </span>
          </button>
        </div>
      </div>

      {/* Vision and Mission  */}
      <div className="w-full relative h-auto flex flex-col justify-start py-10 px-2 ">
      <img src={visionBG.src} className="absolute w-full h-full top-0 left-0 " alt="image-bg" />
        <h1 className="text-center md:text-4xl text-3xl  font-sans font-bold z-10">
          Vision and Mission
        </h1>
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 sm:place-items-center  lg:mx-auto lg:gap-x-40 z-10">
          <div className="pt-14 px-2 max-w-md">
            <img src={cuttingIcon.src} width={60} height={60} alt="icon" />
            <h2 className="text-2xl font-semibold text-gray-300 py-4">Cutting Edge Technologies</h2>
            <p className="pt-6 text-gray-300">Connect Life Solutions (CLS) aims to implement smarter technology solutions to business problems. At CLS, we focus on why, not just what, of the problems rather than jumping to fix them somehow. This approach will reduce overall costs and improve business Focus as a Long-Term strategy rather than settle for Short-Term Milestones.</p>
          </div>
          <div className="pt-14 px-2 max-w-md">
            <img src={cuttingIcon.src} width={60} height={60} alt="icon" />
            <h2 className="text-2xl font-semibold text-gray-300 py-4">Vision and Mission</h2>
            <p className="pt-6 text-gray-300">To empower our customers, achieve their business objectives by delivering unconventional IT solutions and superior consulting services. To build a trustworthy and profitable global IT service provider to our employees and partners. To accomplish our goals in an environment of fairness, integrity, and discretion towards our stakeholders and society.</p>
          </div>
          <div className="pt-14 px-2 max-w-md">
            <img src={cuttingIcon.src} width={60} height={60} alt="icon" />
            <h2 className="text-2xl font-semibold text-gray-300 py-4">Quality policy</h2>
            <p className="pt-6 text-gray-300">Connect Life Solutions is committed to provide customer satisfaction by delivering best-in-class integration services that meet appropriate statutory, regulatory and client requirements. Our team adheres to a quality management system that benefits stakeholders. And we improve our systems, processes and people on a regular basis.</p>
          </div>
          <div className="pt-14 px-2 max-w-md">
            <img src={cuttingIcon.src} width={60} height={60} alt="icon" />
            <h2 className="text-2xl font-semibold text-gray-300 py-4">Flexible Approach</h2>
            <p className="pt-6 text-gray-300">we unswervingly improve our systems, processes and people and offer a collaboration process that is 100% flexible.</p>
            <ul className="pt-4">
              <li className="mb-3"><span className="mr-3 ml-1">&bull;</span>Innovation Leadership</li>
              <li className="mb-3"><span className="mr-3 ml-1">&bull;</span>Effortless Partnership</li>
              <li className="mb-3"><span className="mr-3 ml-1">&bull;</span>Lean Delivery</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Our Commitment - Flexible Approach  */}
      <ScrollAnimation />


    </main>
  );
}
