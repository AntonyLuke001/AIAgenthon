import { lazy, Suspense } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import  Navbar  from "@/components/Navbar";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { VantaBackground } from "@/components/ui/vanta-background";

// Lazy load heavy components
const SplineSceneBasic = lazy(() => import("@/components/SplineSceneBasic").then(m => ({ default: m.SplineSceneBasic })));
const About = lazy(() => import("../components/About"));
const Theme = lazy(() => import("@/components/Theme"));
const PS = lazy(() => import("@/components/PS"));
const Timeline = lazy(() => import("@/components/Timeline"));
const Guidlines = lazy(() => import("@/components/Guidlines"));
const Prize = lazy(() => import("@/components/Prize"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
  </div>
);

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
        <Suspense fallback={<LoadingSpinner />}>
          <SplineSceneBasic />
        </Suspense>
      </div>
      <div id="about" className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
      </div>
      <div id="theme" className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <Theme/>
        </Suspense>
      </div>
      <div id="ps" className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <PS/>
        </Suspense>
      </div>
      <div id="timeline">
        <Suspense fallback={<LoadingSpinner />}>
          <Timeline/>
        </Suspense>
      </div>
      <div id="guidelines">
        <Suspense fallback={<LoadingSpinner />}>
          <Guidlines/>
        </Suspense>
      </div>
      <div id="prizes">
        <Suspense fallback={<LoadingSpinner />}>
          <Prize/>
        </Suspense>
      </div>
      <div id="faqs">
        <Suspense fallback={<LoadingSpinner />}>
          <FAQ/>
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer/>
        </Suspense>
      </div>
    </div>
    
  );
};

export default Index;
