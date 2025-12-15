"use client";

import { Users, FileText, Trophy, Calendar, Code, Shield } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export default function Guidlines() {
  return (
    <div className="w-full bg-[#0a0a0f] px-4 md:px-8 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg md:text-4xl mb-4 text-white text-center">
          Official Guidelines
        </h2>
        <p className="text-neutral-400 text-sm md:text-base text-center mb-12">
          Read carefully before participating in the AI Agentathon 2026
        </p>
        
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-4">
          <GridItem
            area=""
            icon={<Users className="h-4 w-4" />}
            title="Team Formation"
            description={
              <div className="space-y-2">
                <p>• Teams must have 3-6 members</p>
                <p>• Cross-college teams allowed</p>
                <p>• Multidisciplinary teams encouraged</p>
                <p>• One Team Lead for communication</p>
              </div>
            }
          />
          <GridItem
            area=""
            icon={<Calendar className="h-4 w-4" />}
            title="Two Round Structure"
            description={
              <div className="space-y-2">
                <p><strong>Round 1 (Free):</strong> Idea Submission & Prototyping</p>
                <p>• Kickoff: 02.01.2025</p>
                <p>• Deadline: 11.01.2025</p>
                <p><strong>Final Round:</strong> 04.02.2026 at Thiran (Pass Required)</p>
              </div>
            }
          />
          <GridItem
            area=""
            icon={<FileText className="h-4 w-4" />}
            title="Round 1 Submission"
            description={
              <div className="space-y-2">
                <p>• PPT using official template</p>
                <p>• Working prototype (Vercel/Netlify/Render)</p>
                <p>• 1-2 min demo video</p>
                <p>• GitHub repository with documentation</p>
              </div>
            }
          />
          <GridItem
            area=""
            icon={<Trophy className="h-4 w-4" />}
            title="Judging Criteria"
            description={
              <div className="space-y-2">
                <p>• Innovation & Creativity</p>
                <p>• Technical Execution</p>
                <p>• Impact & Relevance</p>
                <p>• Presentation & Documentation</p>
              </div>
            }
          />
          <GridItem
            area=""
            icon={<Code className="h-4 w-4" />}
            title="Code of Conduct"
            description={
              <div className="space-y-2">
                <p>• All work must be original</p>
                <p>• AI tools allowed for assistance, not full replacement</p>
                <p>• Supportive and inclusive environment</p>
                <p>• No late submissions accepted</p>
              </div>
            }
          />
          <GridItem
            area=""
            icon={<Shield className="h-4 w-4" />}
            title="Important Notes"
            description={
              <div className="space-y-2">
                <p>• Winners selected per Problem Statement</p>
                <p>• Themes are for guidance only</p>
                <p>• Shortlisted teams notified by 23.01.2025</p>
                <p>• Event pass required for final round</p>
              </div>
            }
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