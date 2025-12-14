import React from "react";
import { Timeline as TimelineUI } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm">
            Built and launched innovative solutions with cutting-edge technology.
          </p>
          <div className="rounded-lg overflow-hidden  shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
              alt="2024 Milestone"
              className="w-[500px] h-[300px] object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm">
            Expanded our platform and integrated advanced AI capabilities to enhance user experience.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
              alt="2023 Milestone"
              className="w-[500px] h-[200px] object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm">
            Established our foundation with blockchain integration and secure infrastructure.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
              alt="2022 Milestone"
              className="w-[500px] h-[200px] object-cover"
            />
          </div>
        </div>
      ),
    },
     {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm">
            Built and launched innovative solutions with cutting-edge technology.
          </p>
          <div className="rounded-lg overflow-hidden  shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
              alt="2024 Milestone"
              className="w-[500px] h-[300px] object-cover"
            />
          </div>
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