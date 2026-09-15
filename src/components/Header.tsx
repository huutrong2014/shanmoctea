import React, { useState, useEffect } from "react";

interface HeaderProps {
  onOpenManifest?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenManifest }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"vi" | "en">("vi");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Câu chuyện", href: "#triet-ly" },
    { label: "Trà", href: "#bo-suu-tap-tra" },
    { label: "Nguồn gốc & Chế tác", href: "#nguon-goc-nui-cao" },
    { label: "Nhật ký", href: "#nhat-ky-tra" },
    { label: "Hợp tác", href: "#hop-tac-b2b" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#675546]/15 py-3.5 shadow-xs"
            : "bg-gradient-to-b from-[#171A17]/60 via-[#171A17]/20 to-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex flex-col group focus:outline-hidden"
            aria-label="SHAN MỘC - Trang chủ"
          >
            <span
              className={`font-serif text-2xl sm:text-[28px] tracking-[0.18em] font-medium uppercase transition-colors duration-300 ${
                isScrolled ? "text-[#171A17]" : "text-[#FCFCFA]"
              }`}
            >
              SHAN MỘC
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.3em] font-light -mt-0.5 transition-colors duration-300 ${
                isScrolled ? "text-[#716855]" : "text-[#E5E4DE]/80"
              }`}
            >
              Trà Shan Tuyết Cổ Thụ
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Thanh điều hướng chính"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-[13px] tracking-[0.08em] font-medium transition-colors duration-200 relative py-1 group ${
                  isScrolled
                    ? "text-[#171A17]/85 hover:text-[#243126]"
                    : "text-[#FCFCFA]/90 hover:text-[#FCFCFA]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#243126]" : "bg-[#FCFCFA]"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language Switcher */}
            <div
              className={`flex items-center text-xs tracking-wider border transition-colors ${
                isScrolled
                  ? "border-[#675546]/20 text-[#171A17]"
                  : "border-[#FCFCFA]/30 text-[#FCFCFA]"
              }`}
            >
              <button
                onClick={() => setCurrentLang("vi")}
                className={`px-2 py-1 transition-colors ${
                  currentLang === "vi"
                    ? isScrolled
                      ? "bg-[#243126] text-[#FCFCFA]"
                      : "bg-[#FCFCFA] text-[#171A17]"
                    : "hover:opacity-75"
                }`}
                aria-label="Tiếng Việt"
              >
                VI
              </button>
              <button
                onClick={() => setCurrentLang("en")}
                className={`px-2 py-1 transition-colors ${
                  currentLang === "en"
                    ? isScrolled
                      ? "bg-[#243126] text-[#FCFCFA]"
                      : "bg-[#FCFCFA] text-[#171A17]"
                    : "hover:opacity-75"
                }`}
                aria-label="English (Provisional Architecture)"
                title="Bản dịch tiếng Anh đang trong giai đoạn cấu trúc hóa"
              >
                EN
              </button>
            </div>

            {/* Shan Archive Audit button */}
            {onOpenManifest && (
              <button
                onClick={onOpenManifest}
                className={`text-[11px] uppercase tracking-widest px-3 py-1.5 border transition-all ${
                  isScrolled
                    ? "border-[#716855]/30 text-[#716855] hover:border-[#243126] hover:text-[#243126]"
                    : "border-[#FCFCFA]/30 text-[#FCFCFA]/80 hover:border-[#FCFCFA] hover:text-[#FCFCFA]"
                }`}
                title="Xem Bản Kê Tư Liệu Thị Giác & Kiểm Toán Dữ Liệu"
              >
                Shan Archive
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 text-xl focus:outline-hidden transition-colors ${
              isScrolled ? "text-[#171A17]" : "text-[#FCFCFA]"
            }`}
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#171A17] text-[#FCFCFA] flex flex-col justify-between p-8 lg:hidden animate-fadeIn"
        >
          <div className="flex items-center justify-between border-b border-[#675546]/30 pb-4">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] uppercase">
                SHAN MỘC
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-[#716855]">
                Trà Shan Tuyết Cổ Thụ
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-2xl text-[#FCFCFA]/80 hover:text-[#FCFCFA]"
              aria-label="Đóng menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto py-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-serif text-2xl sm:text-3xl text-[#E5E4DE] hover:text-[#FCFCFA] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#716855] group-hover:text-[#B5945D] transition-colors">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="border-t border-[#675546]/30 pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#716855] tracking-wider uppercase">
                Ngôn ngữ / Language
              </span>
              <div className="flex items-center border border-[#675546]/50 text-xs">
                <button
                  onClick={() => setCurrentLang("vi")}
                  className={`px-3 py-1 ${
                    currentLang === "vi" ? "bg-[#FCFCFA] text-[#171A17]" : "text-[#E5E4DE]"
                  }`}
                >
                  VI
                </button>
                <button
                  onClick={() => setCurrentLang("en")}
                  className={`px-3 py-1 ${
                    currentLang === "en" ? "bg-[#FCFCFA] text-[#171A17]" : "text-[#E5E4DE]"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {onOpenManifest && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenManifest();
                }}
                className="w-full text-center py-2 text-xs uppercase tracking-widest text-[#B5945D] border border-[#B5945D]/40 hover:bg-[#B5945D]/10"
              >
                Mở Shan Archive Audit Manifest
              </button>
            )}

            <p className="text-[11px] text-[#716855] text-center tracking-wide">
              Trà từ núi. Mộc từ tâm.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
