import FeaturedProducts from "@/components/FeaturedProducts";
import { GlobeDemo } from "@/components/GithubGlob";
import HeroSection from "@/components/HeroSection";
import { Globe } from "@/components/ui/globe";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/95 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedProducts />
    </main>
  );
}
