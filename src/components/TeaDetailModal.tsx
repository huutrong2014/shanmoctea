import React from "react";
import { Tea, Origin, TeaCategory } from "../types/tea";

interface TeaDetailModalProps {
  tea: (Tea & { origin?: Origin; category?: TeaCategory }) | null;
  onClose: () => void;
}

export const TeaDetailModal: React.FC<TeaDetailModalProps> = ({ tea, onClose }) => {
  if (!tea) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tea-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171A17]/85 backdrop-blur-xs"
    >
      <div className="bg-[#FCFCFA] text-[#171A17] border border-[#675546]/30 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Top bar */}
        <div className="p-6 border-b border-[#675546]/15 bg-[#F5F1E8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#716855] font-mono">
              SHAN MỘC PHẨM TRÀ
            </span>
            <span className="text-xs px-2 py-0.5 bg-[#243126] text-[#FCFCFA] font-medium">
              {tea.category?.nameVi}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-xl text-[#716855] hover:text-[#171A17]"
            aria-label="Đóng chi tiết trà"
          >
            ✕
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 sm:p-8 space-y-8 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden border border-[#675546]/20 bg-[#E5E4DE]">
              <img
                src={tea.mainImage}
                alt={tea.nameVi}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 id="tea-detail-title" className="font-serif text-3xl sm:text-4xl text-[#171A17]">
                  {tea.nameVi}
                </h2>
                {tea.nameEn && (
                  <p className="text-sm text-[#716855] font-light italic">
                    {tea.nameEn}
                  </p>
                )}
              </div>

              {tea.origin && (
                <div className="text-xs font-mono text-[#243126] bg-[#F5F1E8] p-3 border-l-2 border-[#243126] space-y-1">
                  <div>VÙNG THỔ NHƯỠNG: {tea.origin.nameVi}</div>
                  <div>ĐỘ CAO: {tea.origin.elevationRange}</div>
                </div>
              )}

              <p className="text-sm text-[#171A17]/80 leading-relaxed">
                {tea.shortDescriptionVi}
              </p>

              {/* Sensory Profile */}
              {tea.sensoryProfile && (
                <div className="border border-[#675546]/20 p-4 bg-[#F5F1E8]/50 space-y-2 text-xs">
                  <div className="font-mono uppercase tracking-widest text-[#716855] text-[10px] border-b border-[#675546]/10 pb-1">
                    HỒ SƠ CẢM QUAN GIÁC QUAN (SENSORY PROFILE)
                  </div>
                  {tea.sensoryProfile.aroma && (
                    <div>
                      <strong className="text-[#243126]">Hương thơm:</strong> {tea.sensoryProfile.aroma}
                    </div>
                  )}
                  {tea.sensoryProfile.taste && (
                    <div>
                      <strong className="text-[#243126]">Vị giác:</strong> {tea.sensoryProfile.taste}
                    </div>
                  )}
                  {tea.sensoryProfile.finish && (
                    <div>
                      <strong className="text-[#243126]">Hậu vị:</strong> {tea.sensoryProfile.finish}
                    </div>
                  )}
                  {tea.sensoryProfile.liquorColor && (
                    <div>
                      <strong className="text-[#243126]">Sắc nước:</strong> {tea.sensoryProfile.liquorColor}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#675546]/15 bg-[#F5F1E8] flex justify-between items-center text-xs">
          <span className="text-[#716855]">
            * Phẩm trà thuộc bộ sưu tập Shan Mộc Phase 3.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#243126] text-[#FCFCFA] uppercase tracking-wider text-xs"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
