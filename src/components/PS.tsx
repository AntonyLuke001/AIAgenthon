"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ElectricCard } from "@/components/ui/electric-card";
import { BadgeIndianRupee, GraduationCap, Sprout, TriangleAlert } from "lucide-react";

const PS = () => {
  return (
   <>
   <div>
     <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-cyan-300 via-purple-300 to-blue-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Problem Statements <br /> Innovation Awaits
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-6 text-center text-lg text-gray-400 max-w-2xl"
      >
        Explore cutting-edge challenges and showcase your solutions. 
        Join us in building the future of technology.
      </motion.p>
      
    </LampContainer>
   </div>
   <div className="w-full px-4 md:px-8 lg:px-12  bg-black">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: -250 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
    >
      <ElectricCard
        variant="hue"
        color="#06b6d4"
        badge={<BadgeIndianRupee className="w-6 h-6" />}
        title="FinTech"
        description="Build intelligent systems that learn and adapt to solve complex problems."
        width="100%"
        aspectRatio="4 / 5"
      />
      <ElectricCard
        variant="swirl"
        color="#a855f7"
        badge={<GraduationCap className="w-6 h-6" />}
        title="EduTech"
        description="Create decentralized solutions for the future of digital trust."
        width="100%"
        aspectRatio="4 / 5"
      />
      <ElectricCard
        variant="hue"
        color="#3b82f6"
        badge={<Sprout className="w-6 h-6" />}
        title="AgriTech"
        description="Connect devices and data to build intelligent infrastructure."
        width="100%"
        aspectRatio="4 / 5"
      />
      <ElectricCard
        variant="swirl"
        color="#ec4899"
        badge={<TriangleAlert className="w-6 h-6" />}
        title="DisasterTech"
        description="Transform raw data into actionable insights that drive innovation."
        width="100%"
        aspectRatio="4 / 5"
      />
    </motion.div>
   </div>
   </>
  );
};

export default PS;