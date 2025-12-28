"use client";

import Image from "next/image";
import { Folder } from "@/components/reactbits";

interface FeaturedReportCardProps {
  date: string;
}

export function FeaturedReportCard({ date }: FeaturedReportCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <div className="aspect-[4/5] bg-[#2F3E4E] rounded-2xl p-8 flex flex-col justify-between shadow-2xl">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 relative bg-white rounded-full p-0.5">
            <Image
              src="/SVG/Asset 4.svg"
              alt="ISST Seal"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-white font-semibold">ISST</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Annual Report
        </h3>
        <p className="text-[#9AA7B2] mb-6">
          The State of Supply Chain Security in Latin American Exports
        </p>

        {/* Interactive Folder Component */}
        <div className="flex justify-center">
          <Folder 
            color="#4F6F73" 
            size={1.5}
            items={[
              <span key="1" className="text-[6px] leading-tight">Executive Summary</span>,
              <span key="2" className="text-[6px] leading-tight">Key Findings</span>,
              <span key="3" className="text-[6px] leading-tight">Recommendations</span>,
            ]}
          />
        </div>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-5xl font-bold text-[#9AA7B2]">2025</span>
        <div className="text-right">
          <div className="text-[#5B6B7A] text-sm">Published</div>
          <div className="text-white">{formatDate(date)}</div>
        </div>
      </div>
    </div>
  );
}

