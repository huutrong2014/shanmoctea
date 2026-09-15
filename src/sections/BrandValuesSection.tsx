import React from "react";
import { BrandValuePillar } from "../types/tea";
import { SectionHeading } from "../components/SectionHeading";

interface BrandValuesSectionProps {
  values: BrandValuePillar[];
}

export const BrandValuesSection: React.FC<BrandValuesSectionProps> = ({ values }) => {
  return (
    <section
      id="gia-tri-cot-loi"
      aria-label="Bốn trụ cột giá trị thương hiệu"
      className="py-24 sm:py-32 lg:py-40 bg-[#FCFCFA] border-b border-[#675546]/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            align="center"
            tag="Hệ giá trị cốt lõi"
            title="Bốn trụ cột của phẩm cách Shan Mộc"
            subtitle="Sự kiên định trong việc bảo tồn cốt cách nguyên sơ của trà Shan Tuyết cổ thụ giữa thế giới vội vã."
          />
        </div>

        {/* 4 Pillars Grid (No generic SaaS line icons, purely typographic, botanical & textural) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div
              key={val.id}
              className="p-8 border border-[#675546]/20 bg-[#F5F1E8]/30 flex flex-col justify-between relative group hover:bg-[#FCFCFA] transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Botanical Index Marker */}
                <div className="flex items-center justify-between border-b border-[#675546]/15 pb-4">
                  <span className="font-mono text-xs text-[#716855] tracking-widest">
                    TRỤ CỘT 0{idx + 1}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#243126] font-mono">
                    {val.titleEn}
                  </span>
                </div>

                {/* Pillar Title */}
                <div className="space-y-1">
                  <h3 className="font-serif text-3xl text-[#171A17] group-hover:text-[#243126] transition-colors">
                    {val.titleVi}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#716855]">
                    {val.subtitleVi}
                  </div>
                </div>

                {/* Pillar Description */}
                <p className="text-sm text-[#171A17]/75 font-light leading-relaxed font-sans">
                  {val.descriptionVi}
                </p>
              </div>

              {/* Botanical Context Note at bottom (10% Mộc Bản) */}
              <div className="mt-8 pt-4 border-t border-[#675546]/15 text-[11px] font-sans text-[#716855] italic">
                {val.botanicalNoteVi}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
