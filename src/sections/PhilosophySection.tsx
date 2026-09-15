import React from "react";
import { SectionHeading } from "../components/SectionHeading";

interface PhilosophySectionProps {
  onStoryClick?: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onStoryClick }) => {
  return (
    <section
      id="triet-ly"
      aria-label="Triết lý thương hiệu Shan Mộc"
      className="py-24 sm:py-32 lg:py-40 bg-[#F5F1E8] border-b border-[#675546]/15 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top Tag */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            tag="Triết lý & Cội nguồn"
            title="Lắng nghe sự tĩnh lặng của núi cao"
            subtitle="Nơi thời gian chậm lại để từng tầng hương vị được tích tụ vẹn nguyên."
          />
        </div>

        {/* Asymmetric Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Large statement, 6 cols on desktop) */}
          <div className="lg:col-span-6 space-y-8">
            <blockquote className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-[1.2] text-[#171A17] font-normal border-l-2 border-[#243126] pl-6 sm:pl-8">
              &ldquo;Chúng tôi không tìm cách thuần hóa cây trà. Chúng tôi học cách thuận theo nhịp điệu của thời tiết, sương mù và đất rừng miền biên viễn.&rdquo;
            </blockquote>

            <div className="pt-2">
              <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden border border-[#675546]/20 bg-[#E5E4DE]">
                <img
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80"
                  alt="Búp trà non ngậm sương mai trên cành cổ thụ rêu phong"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-3 left-3 bg-[#FCFCFA]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-sans text-[#243126] uppercase tracking-wider">
                  Búp trà Shan Tuyết phủ tơ bạc
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Restrained body copy, 6 cols on desktop) */}
          <div className="lg:col-span-6 space-y-8 lg:pt-4">
            <div className="space-y-6 text-base sm:text-lg text-[#171A17]/80 font-light leading-relaxed font-sans max-w-xl">
              <p>
                Cây trà Shan Tuyết không phải là sản phẩm của những đồn điền công nghiệp san phẳng. Chúng là những thân cổ thụ rêu phong mọc rải rác trên vách đá cheo leo của dãy Tây Côn Lĩnh, Tà Xùa và Hoàng Su Phì. Có những gốc trà đã bám rễ nơi đây qua hàng trăm mùa tuyết phủ.
              </p>
              <p>
                Chính sự khắc nghiệt của biên độ nhiệt ngày đêm và độ ẩm sương mù thường trực đã thôi thúc cây trà tự tích tụ lớp lông nhung trắng muốt bảo bọc lấy búp non. Ở Shan Mộc, sự tinh tế đến từ <strong>sự tiết chế</strong>: giữ nguyên vị mộc bản, không can thiệp hóa học, không sao ướp hương hoa nhân tạo.
              </p>
              <p className="text-sm text-[#716855] border-t border-[#675546]/15 pt-4">
                * Đoạn văn phản ánh tinh thần định hướng biên tập của Shan Mộc. Bản tuyên ngôn chính thức sẽ được cập nhật trong giai đoạn sau.
              </p>
            </div>

            {/* Restrained CTA link: Về Shan Mộc → */}
            <div className="pt-2">
              <button
                onClick={() => {
                  if (onStoryClick) {
                    onStoryClick();
                  } else {
                    const el = document.querySelector("#nguon-goc-nui-cao");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center gap-3 text-base font-medium text-[#243126] hover:text-[#39493B] transition-colors"
                aria-label="Tìm hiểu thêm về Shan Mộc"
              >
                <span className="border-b border-[#243126] pb-0.5 group-hover:border-[#39493B] transition-colors">
                  Về Shan Mộc
                </span>
                <span aria-hidden="true" className="font-serif text-xl group-hover:translate-x-1.5 transition-transform">
                  →
                </span>
              </button>
            </div>

            {/* 3 Brand Pillars Micro Note (10% Mộc Bản) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#675546]/20">
              <div>
                <span className="block font-serif text-2xl text-[#243126]">100%</span>
                <span className="text-xs uppercase tracking-wider text-[#716855]">Thuần mộc</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#243126]">1.400m+</span>
                <span className="text-xs uppercase tracking-wider text-[#716855]">Độ cao núi</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#243126]">Thủ công</span>
                <span className="text-xs uppercase tracking-wider text-[#716855]">Bản địa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
