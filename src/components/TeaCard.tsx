import React from "react";
import { Tea, Origin, TeaCategory } from "../types/tea";

interface TeaCardProps {
  id?: string;
  tea: Tea & { origin?: Origin; category?: TeaCategory };
  onSelect?: (tea: Tea) => void;
}

export const TeaCard: React.FC<TeaCardProps> = ({ id, tea, onSelect }) => {
  const verifiedOrigin =
    tea.origin && tea.origin.verificationStatus === "verified"
      ? `${tea.origin.province ? tea.origin.province + " · " : ""}${tea.origin.nameVi}`
      : null;

  return (
    <article
      id={id || `tea-card-${tea.id}`}
      className="group flex flex-col bg-[#FCFCFA] border border-[#675546]/15 hover:border-[#39493B]/50 transition-all duration-300 relative overflow-hidden"
    >
      {/* Tea Image (4:5 ratio) */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E5E4DE]/40">
        <img
          src={tea.mainImage}
          alt={tea.nameVi}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171A17]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category tag */}
        <div className="absolute top-3 left-3 bg-[#FCFCFA]/90 backdrop-blur-sm px-2.5 py-1 text-[11px] uppercase tracking-widest text-[#243126] font-medium border border-[#675546]/20">
          {tea.category?.nameVi || "Trà Shan Tuyết"}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          {/* Verified Origin if present */}
          {verifiedOrigin ? (
            <div className="text-[12px] uppercase tracking-wider text-[#716855] font-sans flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 bg-[#77856E] rounded-full" />
              <span>{verifiedOrigin}</span>
            </div>
          ) : (
            <div className="text-[12px] tracking-wide text-[#716855]/70 italic">
              Vùng nguyên liệu Shan Tuyết cổ thụ
            </div>
          )}

          {/* Vietnamese Tea Name */}
          <h3 className="font-serif text-2xl sm:text-[26px] text-[#171A17] group-hover:text-[#243126] transition-colors leading-snug">
            {tea.nameVi}
          </h3>

          {/* Provisional Short Descriptor */}
          <p className="text-[14px] text-[#171A17]/70 font-sans leading-relaxed line-clamp-3">
            {tea.shortDescriptionVi}
          </p>
        </div>

        {/* Action Link: Khám phá → */}
        <div className="pt-2 border-t border-[#675546]/10 flex items-center justify-between">
          <button
            onClick={() => onSelect && onSelect(tea)}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#243126] group-hover:text-[#39493B] group-hover:translate-x-1 transition-all duration-200"
            aria-label={`Khám phá chi tiết ${tea.nameVi}`}
          >
            <span>Khám phá</span>
            <span aria-hidden="true" className="font-serif text-base">→</span>
          </button>
          
          {tea.sensoryProfile?.liquorColor && (
            <span className="text-[11px] text-[#716855] font-light hidden sm:inline-block">
              {tea.sensoryProfile.liquorColor.split(" ")[0]}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
