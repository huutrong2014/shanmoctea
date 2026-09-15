import React from "react";

interface FooterProps {
  onOpenManifest?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenManifest }) => {
  return (
    <footer
      id="main-footer"
      className="bg-[#171A17] text-[#E5E4DE] border-t border-[#675546]/30 font-sans"
    >
      {/* Upper Main Footer Grid */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Origin Voice (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-1">
              <span className="font-serif text-3xl tracking-[0.2em] text-[#FCFCFA] uppercase">
                SHAN MỘC
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#716855]">
                Trà Shan Tuyết Cổ Thụ Miền Bắc
              </p>
            </div>
            
            <p className="text-sm text-[#E5E4DE]/75 leading-relaxed font-light max-w-sm">
              Khởi nguồn từ những rặng núi sương mù phía Bắc Việt Nam. Gìn giữ phẩm vị mộc bản thuần khiết của cây trà cổ thụ qua thời gian và đôi bàn tay nhạy cảm của người làm trà bản địa.
            </p>

            <div className="pt-2 text-xs text-[#716855] italic">
              &ldquo;Trà từ núi. Mộc từ tâm.&rdquo;
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#FCFCFA]/90">
              Khám Phá
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E5E4DE]/70">
              <li>
                <a href="#triet-ly" className="hover:text-[#FCFCFA] transition-colors">
                  Triết lý Shan Mộc
                </a>
              </li>
              <li>
                <a href="#bo-suu-tap-tra" className="hover:text-[#FCFCFA] transition-colors">
                  Bộ sưu tập 5 dòng trà
                </a>
              </li>
              <li>
                <a href="#nguon-goc-nui-cao" className="hover:text-[#FCFCFA] transition-colors">
                  Vùng thổ nhưỡng
                </a>
              </li>
              <li>
                <a href="#quy-trinh-che-tac" className="hover:text-[#FCFCFA] transition-colors">
                  Từ lá đến chén trà
                </a>
              </li>
              <li>
                <a href="#truy-xuat-lo-tra" className="hover:text-[#FCFCFA] transition-colors">
                  Shan Archive
                </a>
              </li>
              <li>
                <a href="#nhat-ky-tra" className="hover:text-[#FCFCFA] transition-colors">
                  Nhật ký trà
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Partnership & B2B (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#FCFCFA]/90">
              Hợp Tác & Tiếp Nhận
            </h4>
            <div className="space-y-3 text-sm text-[#E5E4DE]/70">
              <p className="leading-relaxed">
                Tiếp nhận thảo luận mẫu thử và giải pháp trà cho hệ thống khách sạn, ẩm thực cao cấp và phân phối trà đặc sản.
              </p>
              <div className="space-y-1 font-mono text-xs text-[#77856E]">
                <div>Email: lienhe@shanmoc.vn</div>
                <div>Điều phối mẫu vụ mới: tiepnhan@shanmoc.vn</div>
              </div>
              <p className="text-xs text-[#716855]">
                Thời gian làm việc theo nhịp độ mùa vụ & nông lịch.
              </p>
            </div>
          </div>

          {/* Column 4: Legal / Origin Separation / Archive (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#FCFCFA]/90">
              Pháp Nhân & Minh Bạch
            </h4>
            <div className="space-y-2 text-xs text-[#E5E4DE]/65 leading-relaxed">
              <p>
                <strong className="text-[#E5E4DE]">Tách bạch nguồn gốc:</strong> Vùng nguyên liệu trà cổ thụ sinh trưởng tại các rặng núi cao Hoàng Su Phì, Tây Côn Lĩnh (Hà Giang) và Tà Xùa (Sơn La).
              </p>
              <p>
                <strong className="text-[#E5E4DE]">Cơ sở chế biến:</strong> Kiểm soát vi khí hậu và bảo quản riêng biệt, không đồng nhất địa chỉ xưởng với thổ nhưỡng của tất cả dòng trà.
              </p>
              {onOpenManifest && (
                <div className="pt-2">
                  <button
                    onClick={onOpenManifest}
                    className="inline-flex items-center gap-1.5 text-xs text-[#B5945D] hover:underline"
                  >
                    <span>Xem Bản Kê Tư Liệu & Dữ Liệu Kiểm Toán</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#675546]/20 bg-[#121412]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#716855]">
          <div>
            © {new Date().getFullYear()} SHAN MỘC. Bản quyền thuộc về thương hiệu trà Shan Mộc.
          </div>
          <div className="flex items-center gap-6">
            <span>Tiếng Việt (Chính thức)</span>
            <span>·</span>
            <span>English (Architecture ready)</span>
            <span>·</span>
            <span className="font-mono text-[11px]">VER-2026.03-P3</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
