"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export default function Guidlines() {
  return (
    <div className="w-full bg-[#0a0a0f] px-4 md:px-8 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg md:text-4xl mb-4 text-white text-center">
          Our Guidelines
        </h2>
        <p className="text-neutral-400 text-sm md:text-base text-center mb-12">
          Principles that guide our work and innovation.
        </p>
        
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-4">
          <GridItem
            area=""
            icon={<Box className="h-4 w-4" />}
            title="Innovation First"
            description="Building cutting-edge solutions with modern technology."
          />
          <GridItem
            area=""
            icon={<Settings className="h-4 w-4" />}
            title="Quality Engineering"
            description="Delivering robust, scalable, and maintainable code."
          />
          <GridItem
            area=""
            icon={<Lock className="h-4 w-4" />}
            title="Security & Privacy"
            description="Protecting user data with industry-leading security practices."
          />
          <GridItem
            area=""
            icon={<Sparkles className="h-4 w-4" />}
            title="User Experience"
            description="Creating intuitive and delightful user interactions."
          />
          <GridItem
            area="md:col-span-2"
            icon={<Search className="h-4 w-4" />}
            title="Continuous Learning"
            description="Staying ahead with the latest technologies and best practices."
          />
        </ul>
      </div>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-neutral-800 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-[#0a0a0f] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-neutral-800 bg-neutral-900 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};