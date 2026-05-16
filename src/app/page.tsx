import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

import Footer from "./components/Footer";
import DecorativeBg from "./components/DecorativeBg";
import GridOverlay from "./components/GridOverlay";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <div className="relative min-h-full bg-bg text-white overflow-x-hidden">
      <DecorativeBg />
      <GridOverlay />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider label="Core Systems" />
        <Features />
        <SectionDivider label="Community" />
        <Testimonials />

      </main>
      <Footer />
    </div>
  );
}
