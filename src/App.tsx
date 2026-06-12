import { Loader } from "@/components/site/Loader";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { MouseGlow } from "@/components/site/MouseGlow";
import { GlowBackground } from "@/components/site/GlowBackground";
import { Navbar } from "@/components/site/Navbar";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import Founder from "@/components/site/Founder";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <ScrollProgress />
      <MouseGlow />
      <GlowBackground />
      <Navbar />
      <FloatingCTA />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        <Stats />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
