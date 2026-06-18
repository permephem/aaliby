import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyAaliby } from "@/components/WhyAaliby";
import { OurPromise } from "@/components/OurPromise";
import { Services } from "@/components/Services";
import { TowRepairBanner } from "@/components/TowRepairBanner";
import { EmergencyCTA } from "@/components/EmergencyCTA";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <About />
        <WhyAaliby />
        <OurPromise />
        <Services />
        <TowRepairBanner />
        <Gallery />
        <EmergencyCTA />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
