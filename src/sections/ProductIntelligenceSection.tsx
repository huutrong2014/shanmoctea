import React, { useState } from "react";
import { TeaLot } from "../types/tea";
import { SectionHeading } from "../components/SectionHeading";

interface ProductIntelligenceSectionProps {
  lots: (TeaLot & { teaName?: string; originName?: string })[];
}

export const ProductIntelligenceSection: React.FC<ProductIntelligenceSectionProps> = ({
  lots,
}) => {
  const [selectedLotIndex, setSelectedLotIndex] = useState(0);
  const currentLot = lots[selectedLotIndex] || lots[0];

  return (
    <section
      id="truy-xuat-lo-tra"
      aria-label="Lưu trữ trắc lượng và truy xuất lô trà"
      className="py-24 sm:py-32 lg:py-40 bg-[#F5F1E8] border-b border-[#675546]/15 relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            tag="Shan Archive · Trắc lượng"
            title="Hồ sơ dữ liệu từng mẻ thu hoạch"
            subtitle="Minh bạch hóa các thông số kỹ thuật, mùa vụ và tiêu chuẩn hái theo cấu trúc lưu trữ độc bản của Shan Mộc."
          />

          {/* Batch switcher */}
          <div className="flex items-center gap-2 border border-[#675546]/25 p-1 bg-[#FCFCFA]">
            {lots.map((lot, idx) => (
              <button
                key={lot.id}
                onClick={() => setSelectedLotIndex(idx)}
                className={`px-3 py-1.5 text-xs font-mono transition-all ${
                  selectedLotIndex === idx
                    ? "bg-[#243126] text-[#FCFCFA]"
                    : "text-[#716855] hover:text-[#171A17]"
                }`}
              >
                {lot.batchCode || `LOT-${idx + 1}`}
              </button>
            ))}
          </div>
        </div>

        {/* Archival Ledger Table Module */}
        <div className="border border-[#675546]/25 bg-[#FCFCFA] shadow-xs">
          {/* Top Archive Ribbon */}
          <div className="px-6 py-4 border-b border-[#675546]/20 bg-[#E5E4DE]/50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#243126] inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#171A17] font-semibold">
                SHAN MỘC HARVEST ARCHIVE
              </span>
              <span className="text-xs text-[#716855] hidden sm:inline">
                | Lô: {currentLot?.batchCode}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="text-[#716855]">Trạng thái trắc nghiệm:</span>
              <span
                className={`px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider ${
                  currentLot?.verificationStatus === "verified"
                    ? "bg-[#243126] text-[#FCFCFA]"
                    : "bg-[#B5945D]/30 text-[#675546]"
                }`}
              >
                {currentLot?.verificationStatus === "verified"
                  ? "Đã xác thực thực địa"
                  : "Thông tin đang cập nhật"}
              </span>
            </div>
          </div>

          {/* Archive Grid Fields */}
          <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Field 1: Sản phẩm & Vụ */}
            <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-[#675546]/15 pb-4 md:pb-0 md:pr-6">
              <span className="text-[11px] uppercase tracking-widest text-[#716855] font-mono">
                01 / PHẨM TRÀ & VỤ THU HÁI
              </span>
              <div className="font-serif text-2xl text-[#171A17]">
                {currentLot?.teaName || "Trà Shan Tuyết Cổ Thụ"}
              </div>
              <p className="text-sm text-[#171A17]/80">
                {currentLot?.harvestSeason || "Thông tin đang cập nhật"}
              </p>
              <div className="text-xs font-mono text-[#716855] pt-1">
                Năm thu hoạch: {currentLot?.harvestYear || "2025"}
              </div>
            </div>

            {/* Field 2: Thổ nhưỡng & Độ cao */}
            <div className="space-y-1.5 border-b md:border-b-0 lg:border-r border-[#675546]/15 pb-4 md:pb-0 md:pr-6">
              <span className="text-[11px] uppercase tracking-widest text-[#716855] font-mono">
                02 / VÙNG NGUYÊN LIỆU & ĐỘ CAO
              </span>
              <div className="font-serif text-2xl text-[#171A17]">
                {currentLot?.originName || "Vùng núi cao phía Bắc"}
              </div>
              <p className="text-sm text-[#171A17]/80">
                Độ cao: {currentLot?.altitudeMin}m – {currentLot?.altitudeMax}m
              </p>
              <div className="text-xs text-[#716855] pt-1">
                Thảm thực vật: {currentLot?.treeAgeClaim || "Thông tin đang cập nhật"}
              </div>
            </div>

            {/* Field 3: Tiêu chuẩn hái */}
            <div className="space-y-1.5">
              <span className="text-[11px] uppercase tracking-widest text-[#716855] font-mono">
                03 / TIÊU CHUẨN THU HÁI
              </span>
              <div className="font-serif text-2xl text-[#171A17]">
                {currentLot?.pickingStandard || "Hái búp chọn lọc"}
              </div>
              <p className="text-sm text-[#171A17]/80 font-mono text-xs">
                Giống cây: {currentLot?.cultivar || "Shan Tuyết bản địa"}
              </p>
              <div className="text-xs text-[#716855] pt-1">
                Thu hái thủ công sáng sớm khi sương chưa tan.
              </div>
            </div>

            {/* Field 4: Kỹ thuật chế biến */}
            <div className="space-y-1.5 border-t border-[#675546]/15 pt-6 md:border-r md:pr-6">
              <span className="text-[11px] uppercase tracking-widest text-[#716855] font-mono">
                04 / PHƯƠNG PHÁP CHẾ BIẾN
              </span>
              <p className="text-sm text-[#171A17] leading-relaxed">
                {currentLot?.processingMethod || "Thông tin đang cập nhật"}
              </p>
            </div>

            {/* Field 5: Độ oxy hóa */}
            <div className="space-y-1.5 border-t border-[#675546]/15 pt-6 lg:border-r lg:pr-6">
              <span className="text-[11px] uppercase tracking-widest text-[#716855] font-mono">
                05 / MỨC ĐỘ OXY HÓA
              </span>
              <div className="font-serif text-xl text-[#243126]">
                {currentLot?.oxidationLevel || "Theo tiêu chuẩn dòng trà"}
              </div>
              <p className="text-xs text-[#716855]">
                Kiểm soát môi trường ẩm mát và lưu chuyển luồng khí tự nhiên.
              </p>
            </div>

            {/* Field 6: Gợi ý pha chế */}
            <div className="space-y-1.5 border-t border-[#675546]/15 pt-6">
              <span className="text-[11px] uppercase tracking-widest text-[#716855] font-mono">
                06 / GỢI Ý PHA TRÀ (SƠ BỘ)
              </span>
              <div className="text-xs space-y-1 text-[#171A17]/85 font-mono">
                <div>Nhiệt độ nước: 85°C – 92°C</div>
                <div>Định lượng: 5g / 150ml nước suối tự nhiên</div>
                <div>Thời gian ngâm: 15s – 25s mỗi lượt rót</div>
              </div>
            </div>
          </div>

          {/* Bottom Hard Data Safety Footnote */}
          <div className="p-4 border-t border-[#675546]/15 bg-[#F5F1E8]/70 text-xs text-[#716855] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <strong>Nguyên tắc lưu trữ:</strong> Shan Mộc không tự tạo mã lô ảo hay số liệu niên đại khi chưa có biên bản khảo sát hiện trường độc lập.
            </div>
            <div className="font-mono text-[11px] text-[#243126]">
              TRỰC THUỘC SHAN ARCHIVE SYSTEM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
