import React from "react";
import { Timeline as TimelineUI } from "@/components/ui/timeline";
import { GradientCard } from "@/components/ui/gradient-card";
import { Calendar, Rocket, Award, Target } from "lucide-react";

export default function TimelineDemo() {
  const data = [
    {
      title: "Registration Opens",
      content: (
        <div className="w-full h-full">
          <GradientCard
            title="Join the AI Revolution"
            description="Registration is now open for the AI Agents Hackathon 2025. Assemble your team of up to 4 members and prepare to tackle real-world challenges using multi-agent AI systems. Early bird registrations get exclusive access to pre-hackathon workshops and mentorship sessions."
            icon={<Rocket className="w-5 h-5" />}
            linkText="Register Now"
            linkHref="#register"
          />
        </div>
      ),
    },
    {
      title: "Ideation Phase",
      content: (
        <div className="w-full h-full">
          <GradientCard
            title="Problem Statement Selection"
            description="Choose from four exciting tracks: FinTech & Wellness, CivicTech Solutions, Supply Chain Innovation, or DisasterTech Solutions. Teams will analyze the problem statements, research existing solutions, and design their multi-agent AI architecture. Mentors will be available for guidance throughout this phase."
            icon={<Target className="w-5 h-5" />}
            linkText="View Challenges"
            linkHref="#ps"
          />
        </div>
      ),
    },
    {
      title: "Development Sprint",
      content: (
        <div className="w-full h-full">
          <GradientCard
            title="Build Your AI Agent Solution"
            description="The main hackathon period where teams develop their AI agent systems. Access free cloud credits, API keys, and technical support. Daily check-ins with mentors ensure you're on track. Focus on innovation, scalability, and real-world impact while building your prototype."
            icon={<Calendar className="w-5 h-5" />}
            linkText="Learn More"
            linkHref="#timeline"
          />
        </div>
      ),
    },
    {
      title: "Final Presentations",
      content: (
        <div className="w-full h-full">
          <GradientCard
            title="Showcase & Awards Ceremony"
            description="Present your AI agent solution to industry experts and judges. Demonstrate your innovation, technical implementation, and real-world impact. Winners will be announced across multiple categories including Best Overall, Best Innovation, and domain-specific awards. Total prize pool of ₹5,00,000 awaits!"
            icon={<Award className="w-5 h-5" />}
            linkText="View Prizes"
            linkHref="#prizes"
          />
        </div>
      ),
    }
  ];

  return (
    <div className="relative w-full overflow-clip bg-[#0a0a0f]">
      <TimelineUI data={data} />
    </div>
  );
}