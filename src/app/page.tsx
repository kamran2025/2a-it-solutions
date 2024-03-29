import { CardSlider } from "@/components/CardSlider";
import {HeroSection} from "@/components/HeroSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/95 antialiased bg-grid-white/[0.02]">
      {/* Hero Section  */}
      <HeroSection />

      {/* Services Section  */}
      <div className="relative w-full h-auto">
        <CardSlider />
      </div>
      
    </main>
  );
}
