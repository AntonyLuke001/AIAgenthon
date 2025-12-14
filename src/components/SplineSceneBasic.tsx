'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { MouseSpotlight } from "@/components/ui/mouse-spotlight"
import  Navbar  from "@/components/Navbar";
import BlurText from "@/components/ui/blurtext";
import  Countdown  from "@/components/Countdown";


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-screen border-none bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden px-4 md:px-8 lg:px-12">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <MouseSpotlight size={300} className="blur-xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.9)_15%,rgba(255,255,255,0.6)_35%,rgba(255,255,255,0.2)_55%,transparent_75%)]" />
      <Navbar />
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 px-4 md:px-8 lg:px-12 relative z-10 flex flex-col justify-center">
          
          <BlurText
            text="AI Agentathon"
            delay={650}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl font-bold font-lexendTera"
          />
            <p className="mt-4 text-neutral-300 max-w-lg tracking-tighter">
            Team up, experiment with cutting‑edge AI tools,<br/> and turn your ideas into production‑ready agents.
          </p>
          <div>
            <Countdown />
          </div>
          <button className="
            donate-btn
            relative
            cursor-pointer
            px-6 py-3
            mt-10
            w-[220px]
            min-h-[44px]
            text-white font-medium
            rounded-md
            transition-all duration-[800ms]
            bg-[length:280%_auto]
            bg-gradient-to-br
            from-[#3A7DE9]
            via-[#47B8FF]
            to-[#3A7DE9]
            shadow-[0_0_20px_rgba(71,184,255,0.5),0_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)]
            hover:bg-[position:right_top]
            focus:outline-none
            focus:ring-2
            focus:ring-white
            focus:ring-offset-2
            focus:ring-offset-[#3A7DE9]
          ">
            Register Now
          </button>

        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full ml-20"
          />
        </div>
      </div>
    </Card>
  )
}
