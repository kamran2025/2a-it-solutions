"use client";

import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";
import { CardSlider } from "@/components/CardSlider";
import { HeroSection } from "@/components/HeroSection";
import connectImg from "@/assets/connect.png"


export default function Home() {
  return (
    <main className="min-h-screen bg-black/95 antialiased bg-grid-white/[0.02]">
      {/* Hero Section  */}
      <HeroSection />

      {/* Services Section  */}
      <div className="relative w-full h-auto">
        <CardSlider />
      </div>

      {/* Connect Life Solutions  */}
      <div className="h-auto relative w-full overflow-hidden bg-slate-900 flex flex-col lg:flex-row items-center justify-center gap-10 py-32 lg:py-40 px-4 rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("w-full text-center md:text-4xl text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400  font-sans font-bold absolute top-10 z-20")}>
          Connect Life Solutions
        </h1>
        <div className="z-40 opacity-80">
          <img src={connectImg.src} className=" md:max-w-xl" alt="image" />
        </div>
        <div>
          <p className="text-neutral-300 text-xl max-w-2xl relative z-20">
            ConnectLifeSolutions is in the business of IT consulting and Enterprise Software services to customers in India, North America, UK and Australia. At Connect Life, we are committed to customer success through transparent communication and consistent quality services.
          </p>
          <p className="mt-8 text-neutral-300 text-xl max-w-2xl relative z-20">
            Connect Life Solutions (CLS) aims to implement smarter technology solutions to business problems. At CLS, we focus on why, not just what, of the problems rather than jumping to fix them somehow. This approach will reduce overall costs and improve business Focus as a Long-Term strategy rather than settle for Short-Term Milestones.
          </p>
        </div>
      </div>

    </main>
  );
}
