import React, { useState } from "react";
import { ProcessStage, TeaCategory } from "../types/tea";
import { SectionHeading } from "../components/SectionHeading";

interface LeafToTeaSectionProps {
  stages: ProcessStage[];
  categories: TeaCategory[];
}

export const LeafToTeaSection: React.FC<LeafToTeaSectionProps> = ({
  stages,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("cat-bach-tra");
  const [activeStageId, setActiveStageId] = useState<string>("step-1");

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];
  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section
      id="quy-trinh-che-tac"
      aria-label="Quy trình chế tác từ lá đến trà"
      className="py-24 sm:py-32 lg:py-40 bg-[#FCFCFA] border-b border-[#675546]/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            tag="Hành trình chế tác"
            title="Từ lá non đại thụ đến giọt trà tinh hoa"
            subtitle="Mỗi dòng trà tuân theo một lộ trình chuyển hóa sinh hóa riêng biệt dưới sự điều tiết nhạy cảm của người làm trà."
          />

          {/* Category pathway selector */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#716855] block">
              Xem lộ trình chế tác theo dòng trà:
            </span>
            <div className="flex flex-wrap gap-1.5 border border-[#675546]/20 p-1 bg-[#F5F1E8]">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors ${
                    activeCategory === cat.id
                      ? "bg-[#243126] text-[#FCFCFA] font-medium"
                      : "text-[#171A17]/70 hover:text-[#171A17]"
                  }`}
                >
                  {cat.nameVi}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 7 Core Stages Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div>
          {/* Desktop Stepper Indicator */}
          <div className="hidden lg:grid grid-cols-7 border-t border-b border-[#675546]/20 bg-[#F5F1E8]/50">
            {stages.map((stage) => {
              const isSelected = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`text-left p-4 sm:p-5 transition-all relative border-r last:border-r-0 border-[#675546]/15 ${
                    isSelected
                      ? "bg-[#FCFCFA] shadow-xs"
                      : "hover:bg-[#FCFCFA]/50"
                  }`}
                >
                  {/* Active top line */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#243126]" />
                  )}

                  <div className="text-[11px] font-mono text-[#716855] mb-1">
                    0{stage.stepNumber}
                  </div>
                  <div className="font-serif text-lg text-[#171A17] font-medium mb-1">
                    {stage.nameVi}
                  </div>
                  <div className="text-[11px] text-[#716855] uppercase tracking-wider font-light">
                    {stage.nameEn}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed View */}
          <div className="mt-8 p-6 sm:p-10 border border-[#675546]/20 bg-[#F5F1E8]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#243126] bg-[#E5E4DE] px-2 py-0.5">
                  BƯỚC 0{activeStage.stepNumber} / 07
                </span>
                <span className="text-xs uppercase tracking-widest text-[#716855]">
                  {activeStage.nameEn}
                </span>
              </div>
              <h3 className="font-serif text-3xl text-[#171A17]">
                Giai đoạn: {activeStage.nameVi}
              </h3>
              <p className="text-sm text-[#171A17]/80 leading-relaxed font-sans">
                {activeStage.shortDescriptionVi}
              </p>
            </div>

            <div className="lg:col-span-8 p-6 bg-[#FCFCFA] border-l-2 border-[#243126] shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#675546]/10 pb-2">
                <span className="text-xs uppercase tracking-widest font-medium text-[#243126]">
                  Biến thể quy trình riêng của: {currentCategory.nameVi}
                </span>
                <span className="text-[11px] text-[#716855] italic">
                  Không áp dụng rập khuôn
                </span>
              </div>

              <p className="text-base text-[#171A17] font-light leading-relaxed">
                {activeStage.categoryVariants?.[activeCategory] ||
                  "Quy trình được hiệu chỉnh linh hoạt theo độ ẩm không khí và tình trạng búp trà tươi trong ngày."}
              </p>

              <div className="pt-2 text-xs text-[#716855] flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-[#B5945D] rounded-full" />
                <span>
                  Đòi hỏi sự cảm nhận trực tiếp của người thợ qua khứu giác, xúc giác và mắt nhìn.
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Flow (displayed on smaller screens) */}
          <div className="lg:hidden mt-8 space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#716855] block">
              7 bước chuyển hóa chi tiết:
            </span>
            <div className="space-y-3">
              {stages.map((stage) => {
                const isSelected = stage.id === activeStageId;
                return (
                  <div
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`p-4 border transition-all cursor-pointer ${
                      isSelected
                        ? "border-[#243126] bg-[#FCFCFA]"
                        : "border-[#675546]/20 bg-[#F5F1E8]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#243126]">
                          0{stage.stepNumber}
                        </span>
                        <span className="font-serif text-lg text-[#171A17]">
                          {stage.nameVi}
                        </span>
                      </div>
                      <span className="text-xs text-[#716855]">{stage.nameEn}</span>
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-[#675546]/15 text-xs text-[#171A17]/80 space-y-2">
                        <p>{stage.shortDescriptionVi}</p>
                        <p className="p-2 bg-[#F5F1E8] border-l border-[#243126] text-[#243126] italic">
                          {stage.categoryVariants?.[activeCategory]}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
