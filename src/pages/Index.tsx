import { SplineSceneBasic } from "@/components/SplineSceneBasic";
import { Spotlight } from "@/components/ui/spotlight";
import  Navbar  from "@/components/Navbar";
import About from "@/components/about";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { VantaBackground } from "@/components/ui/vanta-background";
import Theme from "@/components/Theme";
import PS from "@/components/PS";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Vanta.js animated network background */}
      {/* <VantaBackground /> */}
      
      {/* Cursor animation */}
      <CursorGlow />
    
       <div className="w-full h-[20%] relative z-10" >
        {/* <Navbar /> */}
       </div>
      <div className="w-full h-[80%] relative z-10">
        <SplineSceneBasic />
      </div>
      <div className="relative z-10">
        <About />
      </div>
      <div className="relative z-10">
        <Theme/>
      </div>
      <div className="relative z-10">
        <PS/>
      </div>
    </div>
    
  );
};

export default Index;
