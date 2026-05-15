import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import TrustedBy from "./components/TrustedBy";
import Footer from "./components/Footer";
import DecorativeBg from "./components/DecorativeBg";

export default function Home() {
  return (
    <div className="relative min-h-full bg-[#060606] text-white overflow-x-hidden">
      <DecorativeBg />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Testimonials />
        <TrustedBy />
      </main>
      <Footer />
    </div>
  );
}
