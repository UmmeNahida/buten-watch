import { Header } from "@/components/Shared/Header";
import { Hero } from "@/components/Shared/Hero";
import { About } from "@/components/Shared/About";
import { Features } from "@/components/Shared/Features";
import { DemoVideo } from "@/components/Shared/DemoVideo";
import { CoreFeatures } from "@/components/Shared/CoreFeatures";
import { WhyChoose } from "@/components/Shared/WhyChoose";
import { Reviews } from "@/components/Shared/Reviews";
import { Contact } from "@/components/Shared/Contact";
import { Footer } from "@/components/Shared/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <DemoVideo />
      <CoreFeatures />
      <WhyChoose />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
