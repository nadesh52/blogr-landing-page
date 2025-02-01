import BottomSection from "@/components/BottomSection";
import Footer from "@/components/Footer";
import DesktopHeader from "@/components/DesktopHeader";
import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import TopSection from "@/components/TopSection";
import React from "react";
import MobileHeader from "@/components/MobileHeader";

const HomePage = () => {
  return (
    <section className="relative mx-auto max-w-screen-mobile overflow-hidden bg-white desktop:max-w-screen-desktop">
      <MobileHeader />
      <div className="w-full overflow-hidden rounded-bl-[110px] bg-gradient-to-r from-red-light-100 to-red-light-200 font-overpass">
        <div className="h-[600px] bg-intro-mobile bg-[1324px_] bg-mobile-origin bg-no-repeat desktop:bg-intro-desktop desktop:bg-[3175px_] desktop:bg-desktop-origin">
          <DesktopHeader />
          <Hero />
        </div>
      </div>
      <TopSection />
      <MidSection />
      <BottomSection />
      <Footer />
    </section>
  );
};

export default HomePage;
