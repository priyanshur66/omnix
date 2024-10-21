import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Landing(){
    return(
        <>
        <div className="overflow-x-hidden">
          <Navbar />
          <Hero />
          <LogoTicker />
          <Features />
          {/* <FAQs /> */}
          {/* <CallToAction /> */}
          </div>
          {/* <Footer /> */}
        </>
    )
}