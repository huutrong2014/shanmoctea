import React, { useState } from "react";
import { placeholderAssetManifest, provisionalContentManifest } from "../content/manifests";

interface DataManifestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataManifestModal: React.FC<DataManifestModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"assets" | "provisional">("assets");

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="manifest-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171A17]/80 backdrop-blur-xs"
    >
      <div className="bg-[#FCFCFA] border border-[#675546]/30 max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-[#675546]/20 flex items-center justify-between bg-[#F5F1E8]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#716855] font-medium">
              Shan Archive · Trắc lượng & Minh bạch
            </span>
            <h2 id="manifest-title" className="font-serif text-2xl text-[#171A17]">
              Lưu Trữ Dữ Liệu & Bản Kê Nội Dung (Audit Manifest)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#171A17]/70 hover:text-[#171A17] text-xl font-light hover:bg-[#E5E4DE]/50 transition-colors"
            aria-label="Đóng bảng lưu trữ"
          >
            ✕
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-[#675546]/15 bg-[#FCFCFA] px-6">
          <button
            onClick={() => setActiveTab("assets")}
            className={`py-3 px-4 text-xs uppercase tracking-wider font-medium border-b-2 transition-colors ${
              activeTab === "assets"
                ? "border-[#243126] text-[#243126]"
                : "border-transparent text-[#716855] hover:text-[#171A17]"
            }`}
          >
            Mục 32 · Bản Kê Tư Liệu Thị Giác (Asset Manifest)
          </button>
          <button
            onClick={() => setActiveTab("provisional")}
            className={`py-3 px-4 text-xs uppercase tracking-wider font-medium border-b-2 transition-colors ${
              activeTab === "provisional"
                ? "border-[#243126] text-[#243126]"
                : "border-transparent text-[#716855] hover:text-[#171A17]"
            }`}
          >
            Mục 33 · Kiểm Toán Nội Dung Tạm Thời (Provisional Audit)
          </button>
        </div>

        {/* Body content */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 text-sm font-sans">
          {activeTab === "assets" ? (
            <div className="space-y-6">
              <p className="text-[#171A17]/75 leading-relaxed">
                Tất cả hình ảnh hiện tại đang sử dụng dưới dạng tư liệu thị giác tạm thời (placeholder visual).
                Các vị trí này bắt buộc phải thay thế bằng nhiếp ảnh thực địa độc quyền của Shan Mộc từ các rặng núi cao phía Bắc Việt Nam.
              </p>

              <div className="space-y-4">
                {placeholderAssetManifest.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border border-[#675546]/20 bg-[#F5F1E8]/40 space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#675546]/10 pb-2">
                      <span className="font-mono text-xs font-semibold text-[#243126]">
                        {item.id}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] px-2 py-0.5 bg-[#E5E4DE] text-[#171A17]">
                          {item.section}
                        </span>
                        <span
                          className={`text-[11px] px-2 py-0.5 ${
                            item.priority === "Critical"
                              ? "bg-[#675546] text-[#FCFCFA]"
                              : "bg-[#77856E]/30 text-[#243126]"
                          }`}
                        >
                          Ưu tiên: {item.priority}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#171A17]/80">
                      <div>
                        <strong>Đối tượng thị giác:</strong> {item.subject}
                      </div>
                      <div>
                        <strong>Tỷ lệ & Độ phân giải:</strong> {item.ratio} · Tối thiểu {item.recommendedResolution}
                      </div>
                      <div className="sm:col-span-2 text-[#716855]">
                        <strong>Đề xuất thay thế thực tế:</strong> {item.replacementSuggestion}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-[#171A17]/75 leading-relaxed">
                Tuân thủ nghiêm ngặt <strong>Quy tắc An toàn Dữ liệu</strong>: Không tự ý bịa đặt niên đại cây, chứng nhận quốc tế, hay sản lượng xuất khẩu. Các trường dữ liệu bên dưới được phân định rõ trạng thái xác thực.
              </p>

              <div className="space-y-6">
                {provisionalContentManifest.map((cat, idx) => (
                  <div key={idx} className="border border-[#675546]/20 p-4 bg-[#F5F1E8]/30">
                    <h3 className="font-serif text-lg text-[#243126] mb-3 pb-1 border-b border-[#675546]/15">
                      {cat.category}
                    </h3>
                    <div className="space-y-3">
                      {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-[#171A17]">{item.field}</span>
                            <span
                              className={`px-2 py-0.5 text-[10px] uppercase tracking-wider ${
                                item.status === "Verified"
                                  ? "bg-[#243126] text-[#FCFCFA]"
                                  : item.status === "Pending Verification"
                                  ? "bg-[#B5945D]/30 text-[#675546]"
                                  : "bg-[#E5E4DE] text-[#716855]"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                          <div className="text-[#171A17]/70 italic">
                            Giá trị mẫu: &ldquo;{item.currentValueVi}&rdquo;
                          </div>
                          <div className="text-[#716855]">
                            Ghi chú kiểm toán: {item.rationale}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#675546]/20 bg-[#F5F1E8] flex justify-between items-center text-xs text-[#716855]">
          <span>SHAN MỘC Archive Verification Architecture v1.0</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#243126] text-[#FCFCFA] text-xs uppercase tracking-wider hover:bg-[#39493B] transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
