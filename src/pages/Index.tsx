import { SplineSceneBasic } from "@/components/SplineSceneBasic";
import { Spotlight } from "@/components/ui/spotlight";
import  Navbar  from "@/components/Navbar";
const Index = () => {
  return (
    <div className="min-h-screen bg-background items-center justify-center">
    
       <div className="w-full h-[20%]" >
        {/* <Navbar /> */}
       </div>
      <div className="w-full h-[80%]">
        <SplineSceneBasic />
      </div>
    </div>
    
  );
};

export default Index;
