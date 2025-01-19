import NavBar from "@/components/common/NavBar";
// import AlertSection from "@/components/sections/AlertSection";
import CTASection from "@/components/sections/CTASection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import SecuritySection from "@/components/sections/SecuritySection";
import TargetSection from "@/components/sections/TargetSection";
import WorkSection from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-col">
        <NavBar />
      </div>
      <div className="mt-8 md:mt-[81px] flex flex-col gap-12 md:gap-[150px] px-4 md:px-[100px] ">
        <HeroSection />
        <MarqueeSection />
        <FeaturesSection />
        <WorkSection />
        <TargetSection />
        <SecuritySection />
      </div>
      <div className="mt-8 md:mt-[81px] flex flex-col">
        <CTASection />
        <FooterSection />
      </div>
    </main>
  );
}
