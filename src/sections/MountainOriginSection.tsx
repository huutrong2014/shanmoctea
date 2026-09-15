import React, { useState } from "react";
import { Origin } from "../types/tea";
import { SectionHeading } from "../components/SectionHeading";

interface MountainOriginSectionProps {
  origins: Origin[];
  onExploreOrigin?: (origin: Origin) => void;
}

export const MountainOriginSection: React.FC<MountainOriginSectionProps> = ({
  origins,
  onExploreOrigin,
}) => {
  // Verified origins only for the public switcher
  const verifiedOrigins = origins.filter((o) => o.verificationStatus === "verified");
  const [selectedOrigin, setSelectedOrigin] = useState<Origin>(
    verifiedOrigins[0] || origins[0]
  );

  return (
    <section
      id="nguon-goc-nui-cao"
      aria-label="Vùng thổ nhưỡng nguồn gốc"
      className="py-24 sm:py-32 lg:py-40 bg-[#FCFCFA] border-b border-[#675546]/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <SectionHeading
            tag="Thổ nhưỡng & Terroir"
            title="Nguồn cội từ những rặng núi sương mù"
            subtitle="Mỗi vùng non cao mang vi khí hậu và chất đất riêng biệt, khắc họa nên phong vị độc bản của từng chén trà."
          />

          {/* Terroir selector tabs */}
          <div className="flex flex-wrap items-center gap-2 border border-[#675546]/20 p-1 bg-[#F5F1E8]">
            {verifiedOrigins.map((orig) => (
              <button
                key={orig.id}
                onClick={() => setSelectedOrigin(orig)}
                className={`px-3 sm:px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                  selectedOrigin?.id === orig.id
                    ? "bg-[#243126] text-[#FCFCFA]"
                    : "text-[#171A17]/70 hover:text-[#171A17]"
                }`}
              >
                {orig.nameVi.replace("Vùng trà ", "").replace("Dải rừng ", "").replace("Đỉnh ", "")}
              </button>
            ))}
          </div>
        </div>

        {/* 60/40 Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: 60% (7 cols) Large 3:2 Landscape Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-[#675546]/20 bg-[#E5E4DE] shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1600&q=80"
                alt={`Phong cảnh vùng núi ${selectedOrigin?.nameVi || "núi cao phía Bắc"}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Shan Archive verified stamp */}
              <div className="absolute top-4 left-4 bg-[#FCFCFA]/95 backdrop-blur-xs px-3 py-1.5 border border-[#675546]/20 text-xs font-mono text-[#243126] flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#77856E] rounded-full" />
                <span>TERROIR: {selectedOrigin?.province || "VIỆT NAM"}</span>
              </div>

              <div className="absolute bottom-4 right-4 bg-[#171A17]/85 text-[#FCFCFA] px-3 py-1 text-xs font-mono">
                {selectedOrigin?.elevationRange || "Độ cao 1.400m+"}
              </div>
            </div>
          </div>

          {/* Right: 40% (5 cols) Structured Provenance Data */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-[#716855] font-sans">
                {selectedOrigin?.province} {selectedOrigin?.district ? `· Huyện ${selectedOrigin.district}` : ""}
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#171A17] font-normal leading-tight">
                {selectedOrigin?.nameVi}
              </h3>
            </div>

            <p className="text-base text-[#171A17]/80 font-light leading-relaxed font-sans">
              {selectedOrigin?.descriptionVi}
            </p>

            {/* Terroir Specifications Matrix (Shan Archive style) */}
            <div className="border-t border-b border-[#675546]/15 py-4 space-y-3 text-xs font-sans">
              <div className="flex justify-between py-1 border-b border-[#675546]/10">
                <span className="text-[#716855]">Dải độ cao sinh trưởng</span>
                <span className="font-mono text-[#171A17] font-medium">
                  {selectedOrigin?.elevationRange || "Thông tin đang cập nhật"}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#675546]/10">
                <span className="text-[#716855]">Đặc điểm khí hậu</span>
                <span className="text-[#171A17]">Mây mù quanh năm, biên độ nhiệt cao</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#716855]">Loại hình thực vật</span>
                <span className="text-[#171A17]">Rừng đại thụ nguyên sinh đa tầng</span>
              </div>
            </div>

            {/* Separation Notice */}
            <div className="text-[11px] text-[#716855]/85 italic leading-relaxed">
              * Shan Mộc duy trì chính sách tách biệt rõ ràng giữa vùng thổ nhưỡng sinh trưởng cây trà và cơ sở chế biến, tuyệt đối không quy đồng toàn bộ trà về một địa danh đơn lẻ.
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => onExploreOrigin && onExploreOrigin(selectedOrigin)}
                className="group inline-flex items-center gap-3 text-base font-medium text-[#243126] hover:text-[#39493B] transition-colors"
              >
                <span className="border-b border-[#243126] pb-0.5 group-hover:border-[#39493B]">
                  Khám phá nguồn gốc
                </span>
                <span className="font-serif text-lg group-hover:translate-x-1.5 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
