import React, { useState } from "react";
import { PartnershipTrack } from "../types/tea";
import { SectionHeading } from "../components/SectionHeading";

interface PartnershipSectionProps {
  tracks: PartnershipTrack[];
  onInquire?: (trackTitle: string) => void;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({
  tracks,
  onInquire,
}) => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<string>("Wholesale");
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const handleOpenInquiry = (title: string) => {
    setSelectedTrack(title);
    setInquiryModalOpen(true);
    setContactFormSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormSubmitted(true);
  };

  return (
    <section
      id="hop-tac-b2b"
      aria-label="Hợp tác chuyên nghiệp B2B"
      className="py-24 sm:py-32 lg:py-40 bg-[#243126] text-[#FCFCFA] border-b border-[#675546]/30 relative overflow-hidden"
    >
      {/* Background subtle wood/leaf grain shadow */}
      <div className="absolute inset-0 bg-[radial-gradient(#39493B_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeading
            theme="dark"
            tag="Quan hệ đối tác chuyên nghiệp"
            title="Đồng hành cùng những không gian tôn trọng trà"
            subtitle="Cung ứng giải pháp trà đặc sản ổn định phẩm cấp, minh bạch chứng từ và hỗ trợ đào tạo trải nghiệm giác quan chuyên sâu."
          />

          <div className="text-left lg:text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-[#77856E] font-mono block">
              B2B ENGAGEMENT · SHAN ARCHIVE READY
            </span>
            <span className="text-xs text-[#E5E4DE]/60">
              Tiếp nhận thảo luận theo mùa vụ
            </span>
          </div>
        </div>

        {/* 4 Partnership Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="p-8 border border-[#39493B] bg-[#171A17]/40 flex flex-col justify-between space-y-6 hover:border-[#77856E]/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#77856E] uppercase tracking-wider border-b border-[#39493B] pb-2">
                  {track.titleEn}
                </div>

                <h3 className="font-serif text-2xl text-[#FCFCFA] leading-snug">
                  {track.titleVi}
                </h3>

                <p className="text-xs text-[#E5E4DE]/90 italic leading-relaxed">
                  {track.taglineVi}
                </p>

                <p className="text-sm text-[#E5E4DE]/75 leading-relaxed font-light">
                  {track.descriptionVi}
                </p>
              </div>

              <div className="pt-4 border-t border-[#39493B] space-y-4">
                <div className="text-[11px] font-mono text-[#B5945D]">
                  ● {track.readinessStatusVi}
                </div>

                <button
                  onClick={() => {
                    if (onInquire) onInquire(track.titleVi);
                    handleOpenInquiry(track.titleVi);
                  }}
                  className="w-full text-left inline-flex items-center justify-between text-xs uppercase tracking-widest text-[#FCFCFA] hover:text-[#B5945D] transition-colors py-2 border-b border-transparent hover:border-[#B5945D]"
                >
                  <span>Thảo luận hạng mục</span>
                  <span className="font-serif text-base">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Primary Partnership CTA Banner */}
        <div className="p-8 sm:p-12 border border-[#39493B] bg-[#171A17]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h4 className="font-serif text-2xl sm:text-3xl text-[#FCFCFA]">
              Khởi đầu cuộc trò chuyện cùng Shan Mộc
            </h4>
            <p className="text-sm text-[#E5E4DE]/75 font-light leading-relaxed">
              Chúng tôi luôn sẵn lòng gửi mẫu trà thử nghiệm kèm hồ sơ trắc nghiệm thổ nhưỡng cho các đơn vị phù hợp.
            </p>
          </div>

          <button
            onClick={() => handleOpenInquiry("Chung")}
            className="px-8 py-4 bg-[#FCFCFA] text-[#243126] hover:bg-[#E5E4DE] text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-200 shrink-0"
          >
            Trao đổi cùng Shan Mộc →
          </button>
        </div>

        {/* Footnote on verified documents */}
        <div className="text-center text-xs text-[#E5E4DE]/50 font-sans">
          * Hồ sơ chứng nhận an toàn thực phẩm (ISO 22000, HACCP) và phiếu kết quả kiểm nghiệm kim loại nặng, dư lượng bảo vệ thực vật sẽ được cung cấp trực tiếp trong hồ sơ thẩm định đối tác.
        </div>
      </div>

      {/* Inquiry Dialog Modal */}
      {inquiryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171A17]/85 backdrop-blur-xs"
        >
          <div className="bg-[#FCFCFA] text-[#171A17] border border-[#675546]/30 max-w-lg w-full p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#675546]/20 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#716855] font-mono">
                  B2B INQUIRY
                </span>
                <h3 className="font-serif text-2xl text-[#243126]">
                  Thảo luận hợp tác: {selectedTrack}
                </h3>
              </div>
              <button
                onClick={() => setInquiryModalOpen(false)}
                className="p-1 text-xl text-[#716855] hover:text-[#171A17]"
              >
                ✕
              </button>
            </div>

            {contactFormSubmitted ? (
              <div className="space-y-4 text-center py-6">
                <div className="w-12 h-12 bg-[#243126] text-[#FCFCFA] flex items-center justify-center mx-auto text-xl font-serif">
                  ✓
                </div>
                <h4 className="font-serif text-2xl text-[#243126]">
                  Đã tiếp nhận yêu cầu trao đổi
                </h4>
                <p className="text-sm text-[#171A17]/80 leading-relaxed">
                  Bộ phận điều phối nguồn trà Shan Mộc sẽ xem xét nội dung và phản hồi qua email <strong className="font-mono">{email}</strong> trong vòng 48 giờ làm việc.
                </p>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="mt-4 px-6 py-2.5 bg-[#243126] text-[#FCFCFA] text-xs uppercase tracking-wider"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm font-sans">
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#716855]">
                    Tên tổ chức / Đơn vị
                  </label>
                  <input
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="VD: Khách sạn / Trà quán / Công ty..."
                    className="w-full p-3 border border-[#675546]/30 bg-[#F5F1E8]/30 focus:outline-hidden focus:border-[#243126]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#716855]">
                    Email liên hệ chính thức
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full p-3 border border-[#675546]/30 bg-[#F5F1E8]/30 focus:outline-hidden focus:border-[#243126]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#716855]">
                    Nhu cầu cụ thể & Lượng trà dự kiến
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mô tả không gian, loại trà quan tâm hoặc yêu cầu mẫu thử..."
                    className="w-full p-3 border border-[#675546]/30 bg-[#F5F1E8]/30 focus:outline-hidden focus:border-[#243126]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setInquiryModalOpen(false)}
                    className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#716855]"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#243126] text-[#FCFCFA] text-xs uppercase tracking-wider hover:bg-[#39493B]"
                  >
                    Gửi yêu cầu trao đổi →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
