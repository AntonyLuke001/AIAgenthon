import { SplineSceneBasic } from "@/components/SplineSceneBasic";
import { Spotlight } from "@/components/ui/spotlight";
import  Navbar  from "@/components/Navbar";
import About from "@/components/About";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { VantaBackground } from "@/components/ui/vanta-background";
import Theme from "@/components/Theme";
import PS from "@/components/PS";
import Timeline from "@/components/Timeline";
import Guidlines from "@/components/Guidlines";
import Prize from "@/components/Prize";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Vanta.js animated network background */}
      {/* <VantaBackground /> */}
      
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Cursor animation */}
      <CursorGlow />
      <div className="w-full h-[80%] relative z-10">
        <SplineSceneBasic />
      </div>
      <div id="about" className="relative z-10">
        <About />
      </div>
      <div id="theme" className="relative z-10">
        <Theme/>
      </div>
      <div id="ps" className="relative z-10">
        <PS/>
      </div>
      <div id="timeline">
        <Timeline/>
      </div>
      <div id="guidelines">
        <Guidlines/>
      </div>
      <div id="prizes">
        <Prize/>
      </div>
      <div id="faqs">
        <FAQ/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  );
};

export default Index;
