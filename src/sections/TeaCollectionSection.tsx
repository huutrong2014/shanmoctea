import React, { useState } from "react";
import { Tea, TeaCategory, Origin } from "../types/tea";
import { TeaCard } from "../components/TeaCard";
import { SectionHeading } from "../components/SectionHeading";

interface TeaCollectionSectionProps {
  categories: TeaCategory[];
  teas: (Tea & { origin?: Origin; category?: TeaCategory })[];
  onSelectTea?: (tea: Tea) => void;
}

export const TeaCollectionSection: React.FC<TeaCollectionSectionProps> = ({
  categories,
  teas,
  onSelectTea,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");

  const filteredTeas =
    selectedCategoryId === "all"
      ? teas
      : teas.filter((tea) => tea.categoryId === selectedCategoryId);

  return (
    <section
      id="bo-suu-tap-tra"
      aria-label="Bộ sưu tập 5 dòng trà Shan Tuyết"
      className="py-24 sm:py-32 lg:py-40 bg-[#F5F1E8] border-b border-[#675546]/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeading
            tag="Danh mục tuyển chọn"
            title="Năm sắc thái của trà cổ thụ"
            subtitle="Từ những búp tơ tuyết trắng nõn nà đến bánh trà ủ lên men trầm mặc qua năm tháng."
          />

          <div className="text-right hidden md:block">
            <span className="text-xs uppercase tracking-[0.2em] text-[#716855] font-mono">
              5 DÒNG TRÀ · NGUYÊN BẢN
            </span>
          </div>
        </div>

        {/* Category Navigation Bar */}
        <div className="border-b border-[#675546]/20 pb-4 flex items-center justify-start gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedCategoryId("all")}
            className={`whitespace-nowrap px-3 py-1.5 text-xs sm:text-sm uppercase tracking-wider font-medium transition-all ${
              selectedCategoryId === "all"
                ? "bg-[#243126] text-[#FCFCFA]"
                : "text-[#171A17]/70 hover:text-[#171A17] hover:bg-[#E5E4DE]/50"
            }`}
          >
            Tất cả dòng trà ({teas.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`whitespace-nowrap px-3 py-1.5 text-xs sm:text-sm uppercase tracking-wider font-medium transition-all ${
                selectedCategoryId === cat.id
                  ? "bg-[#243126] text-[#FCFCFA]"
                  : "text-[#171A17]/70 hover:text-[#171A17] hover:bg-[#E5E4DE]/50"
              }`}
            >
              {cat.nameVi}
            </button>
          ))}
        </div>

        {/* Editorial Tea Catalogue Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredTeas.map((tea) => (
            <TeaCard key={tea.id} tea={tea} onSelect={onSelectTea} />
          ))}
        </div>

        {/* Curatorial Note at bottom */}
        <div className="border-t border-[#675546]/15 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#716855]">
          <p>
            * Thu hoạch theo vụ tiết khí, số lượng phẩm trà giới hạn phụ thuộc vào diễn biến thời tiết vùng cao.
          </p>
          <div className="font-mono text-[11px] text-[#243126]">
            CHẾ TÁC THỦ CÔNG THEO MẺ NHỎ (MICRO-LOT)
          </div>
        </div>
      </div>
    </section>
  );
};
