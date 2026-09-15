import { PlaceholderAsset, ProvisionalContentItem } from "../types/tea";

/**
 * SECTION 32: PLACEHOLDER ASSET MANIFEST
 * Comprehensive registry of all placeholder visuals used across the homepage.
 */
export const placeholderAssetManifest: PlaceholderAsset[] = [
  {
    id: "hero-mountain-mist-01",
    section: "Section 01 - Hero",
    subject: "Biển mây và sương sớm bao phủ những thân trà Shan Tuyết cổ thụ trăm năm trên sườn núi đá miền Bắc",
    orientation: "panoramic",
    ratio: "16:9 desktop / 4:5 mobile",
    priority: "Critical",
    recommendedResolution: "3840 x 2160 (4K)",
    replacementSuggestion: "Nhiếp ảnh thực địa độc quyền tại rặng Tây Côn Lĩnh hoặc Hoàng Su Phì trong sương sớm",
    currentPlaceholderUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "philosophy-foliage-02",
    section: "Section 02 - Philosophy",
    subject: "Cận cảnh búp trà non phủ lớp tơ tuyết trắng ngậm hạt sương trên nền cành mộc phong rêu",
    orientation: "portrait",
    ratio: "4:5",
    priority: "High",
    recommendedResolution: "2400 x 3000",
    replacementSuggestion: "Ảnh macro chi tiết búp trà 1 tôm Shan Tuyết bản địa còn nguyên lông tuyết óng ánh",
    currentPlaceholderUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "origin-landscape-03",
    section: "Section 03 - Mountain Origin",
    subject: "Phong cảnh thung lũng đá và sườn núi điệp trùng mây trắng bao phủ vùng trà cổ thụ",
    orientation: "landscape",
    ratio: "3:2",
    priority: "Critical",
    recommendedResolution: "3000 x 2000",
    replacementSuggestion: "Ảnh phong cảnh trắc địa thực tế của vùng thổ nhưỡng Hoàng Su Phì / Tà Xùa với tán cây trà lớn",
    currentPlaceholderUrl: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "tea-card-white-04",
    section: "Section 04 - Tea Collection (Bạch Trà)",
    subject: "Búp Bạch Trà khô phủ lông tuyết bạc óng ánh trên đĩa gốm mộc bản",
    orientation: "portrait",
    ratio: "4:5",
    priority: "High",
    recommendedResolution: "1600 x 2000",
    replacementSuggestion: "Ảnh phẩm vật thực tế của Tuyết Đỉnh Bạch Trà Shan Mộc trên giấy dó hoặc gỗ mộc",
    currentPlaceholderUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-card-green-05",
    section: "Section 04 - Tea Collection (Lục Trà)",
    subject: "Cánh Lục Trà cổ thụ cuộn xoăn tự nhiên, sắc xanh sẫm vương tuyết trắng",
    orientation: "portrait",
    ratio: "4:5",
    priority: "High",
    recommendedResolution: "1600 x 2000",
    replacementSuggestion: "Ảnh chụp cận cánh trà Cổ Thụ Lục Trà sao chảo gang thủ công",
    currentPlaceholderUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-card-black-06",
    section: "Section 04 - Tea Collection (Hồng Trà)",
    subject: "Cánh Hồng Trà lên men toàn phần, ánh nâu đỏ hổ phách và sắc nước hồng ngọc",
    orientation: "portrait",
    ratio: "4:5",
    priority: "High",
    recommendedResolution: "1600 x 2000",
    replacementSuggestion: "Ảnh cánh trà Nguyên Bản Hồng Trà cùng chén nước trà màu hổ phách sáng",
    currentPlaceholderUrl: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-card-bancha-07",
    section: "Section 04 - Tea Collection (Shan Bancha)",
    subject: "Lá trà bánh tẻ cổ thụ sấy mộc khô giòn trên sàng nứa bản địa",
    orientation: "portrait",
    ratio: "4:5",
    priority: "Medium",
    recommendedResolution: "1600 x 2000",
    replacementSuggestion: "Ảnh Mộc Bản Shan Bancha lá già mộc bản",
    currentPlaceholderUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-card-dark-08",
    section: "Section 04 - Tea Collection (Trà Lên Men)",
    subject: "Bánh trà nén đá cổ truyền hoặc trà ủ chum gốm trầm mặc",
    orientation: "portrait",
    ratio: "4:5",
    priority: "Medium",
    recommendedResolution: "1600 x 2000",
    replacementSuggestion: "Ảnh bánh Trầm Tích Lên Men ép thủ công đóng dấu mộc bản",
    currentPlaceholderUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "closing-emotional-09",
    section: "Section 10 - Closing Image",
    subject: "Chén trà gốm mộc bốc hơi ấm trong ánh sáng tĩnh lặng của buổi chiều tà trên núi",
    orientation: "landscape",
    ratio: "16:9 hoặc 3:2",
    priority: "Critical",
    recommendedResolution: "3840 x 2160",
    replacementSuggestion: "Ảnh nhiếp ảnh tĩnh vật chén trà Shan Mộc và ánh sáng sương mù buông xuống",
    currentPlaceholderUrl: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=2000&q=85",
  },
];

/**
 * SECTION 33: PROVISIONAL CONTENT MANIFEST
 * Systematic audit of provisional, pending, and unverified data points.
 */
export const provisionalContentManifest: {
  category: string;
  items: ProvisionalContentItem[];
}[] = [
  {
    category: "1. Brand Copy (Lời văn thương hiệu)",
    items: [
      {
        field: "Hero Supporting Subtext",
        currentValueVi: "Những búp trà Shan Tuyết ngậm sương từ rặng núi đá hoang sơ, được nâng niu qua đôi bàn tay mộc mạc và sự thong dong của thời gian.",
        status: "Provisional",
        rationale: "Câu định vị chính thức 'Trà từ núi. Mộc từ tâm.' đã được duyệt; đoạn mô tả phụ này là bản mẫu kiến trúc chữ, chờ bản duyệt cuối từ ban điều hành.",
      },
      {
        field: "Philosophy Body Text",
        currentValueVi: "Shan Mộc tin rằng giá trị lớn nhất của trà Shan Tuyết không nằm ở sự phô trương, mà ở khả năng lưu giữ nguyên bản hơi thở của sương núi...",
        status: "Provisional",
        rationale: "Văn bản triết lý tạm thời làm mẫu bố cục biên tập 2 cột, sẽ được thay thế bằng tuyên ngôn chính thức.",
      },
    ],
  },
  {
    category: "2. Product Data (Dữ liệu sản phẩm)",
    items: [
      {
        field: "Tên & Phân loại 5 dòng trà",
        currentValueVi: "Bạch Trà, Lục Trà, Hồng Trà, Shan Bancha, Trà Lên Men",
        status: "Verified",
        rationale: "Danh mục phân loại cốt lõi chuẩn văn hóa trà Việt Nam.",
      },
      {
        field: "Cảm quan vị giác & Màu nước (Sensory Profile)",
        currentValueVi: "Ghi chú hương mật ong rừng, cỏ dại, cốm non...",
        status: "Provisional",
        rationale: "Dữ liệu giác quan tạm thời phục vụ mô hình mẫu, sẽ chuẩn hóa theo bảng điểm cupping thực nghiệm từng mẻ.",
      },
    ],
  },
  {
    category: "3. Origin Data (Dữ liệu thổ nhưỡng & Terroir)",
    items: [
      {
        field: "Vùng Hoàng Su Phì, Tây Côn Lĩnh (Hà Giang), Tà Xùa (Sơn La)",
        currentValueVi: "Tên địa danh và dải độ cao áng chừng 1.400m - 2.200m",
        status: "Verified",
        rationale: "Được xác thực là các vùng thổ nhưỡng nguyên sinh phân bổ cây trà Shan Tuyết.",
      },
      {
        field: "Tọa độ GPS & Mã khoảnh rừng cụ thể",
        currentValueVi: "Thông tin đang cập nhật",
        status: "Pending Verification",
        rationale: "Tuân thủ nguyên tắc không bịa đặt số hiệu lô rừng hay độ cao vi mô khi chưa đối chiếu trắc địa.",
      },
    ],
  },
  {
    category: "4. Photography (Hình ảnh & Tư liệu thị giác)",
    items: [
      {
        field: "Toàn bộ hình ảnh placeholder trên website",
        currentValueVi: "Hình ảnh tạm thời Unsplash chất lượng cao mô phỏng sương núi và chế tác trà thủ công",
        status: "Provisional",
        rationale: "Chờ triển khai đợt nhiếp ảnh thực địa tư liệu độc quyền tại các vườn trà cổ thụ miền Bắc.",
      },
    ],
  },
  {
    category: "5. Certifications (Chứng nhận & Kiểm nghiệm)",
    items: [
      {
        field: "ISO 22000:2018, HACCP, Kiểm nghiệm Eurofins",
        currentValueVi: "Chỉ hiển thị cấu trúc hồ sơ nội bộ, không công bố chứng nhận công khai",
        status: "Pending Verification",
        rationale: "Tuân thủ nghiêm ngặt quy tắc chỉ công bố khi verificationStatus === 'verified'.",
      },
    ],
  },
  {
    category: "6. Journal Articles (Nhật ký trà)",
    items: [
      {
        field: "3 Bài viết chuyên đề (Mẫu biên tập)",
        currentValueVi: "Tiêu đề và tóm tắt biên tập về sương núi, làm héo, văn hóa pha trà",
        status: "Provisional",
        rationale: "Định hình phong cách tạp chí nghệ thuật (editorial art publication), nội dung đầy đủ sẽ viết sau.",
      },
    ],
  },
  {
    category: "7. Corporate & Legal Information (Pháp nhân & Địa chỉ)",
    items: [
      {
        field: "Tách bạch Cơ sở chế biến & Vùng nguyên liệu",
        currentValueVi: "Không đồng nhất xưởng chế biến Bắc Quang với toàn bộ thổ nhưỡng trà",
        status: "Verified",
        rationale: "Tuân thủ chặt chẽ nguyên tắc tách biệt công ty, cơ sở chế biến và terroir trồng trà.",
      },
      {
        field: "Mã số doanh nghiệp & Giấy phép đăng ký",
        currentValueVi: "Thông tin đang cập nhật / Lưu trữ nội bộ",
        status: "Pending Verification",
        rationale: "Chưa công bố công khai mã số thuế khi chưa có tài liệu pháp lý được duyệt.",
      },
    ],
  },
];
