import React from "react";

interface HeroSectionProps {
  onExploreTeas?: () => void;
  onExploreStory?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTeas,
  onExploreStory,
}) => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Khởi đầu Shan Mộc"
      className="relative w-full min-h-screen flex items-end sm:items-center overflow-hidden bg-[#171A17]"
    >
      {/* Background Image: Atmospheric mountain mist & ancient tea trees */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=85"
          alt="Biển mây và sương sớm bao phủ những thân trà Shan Tuyết cổ thụ trên đỉnh núi đá"
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Editorial mist and shade overlays for readability (70% Sương Núi) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171A17] via-[#171A17]/40 to-[#171A17]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171A17]/80 via-[#171A17]/30 to-transparent" />
      </div>

      {/* Atmospheric Mist Texture */}
      <div
        className="absolute inset-0 z-1 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(229, 228, 222, 0.4) 0%, transparent 60%)",
        }}
      />

      {/* Content Container (approx 30% text presence, 70% visual presence) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-16 sm:py-28">
        <div className="max-w-2xl text-[#FCFCFA] space-y-6 sm:space-y-8 animate-fadeIn">
          {/* Tagline / Origin anchor */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#B5945D]/80" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5E4DE]/90 font-medium">
              Vùng Trà Shan Tuyết Núi Cao Việt Nam
            </span>
          </div>

          {/* Approved Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal leading-[1.05] tracking-tight text-[#FCFCFA]">
            Trà từ núi.
            <br />
            <span className="italic font-light text-[#E5E4DE]">Mộc từ tâm.</span>
          </h1>

          {/* Supporting Text (marked provisional in architecture) */}
          <p className="text-base sm:text-lg md:text-xl text-[#E5E4DE]/85 font-light leading-relaxed max-w-xl font-sans">
            Sinh trưởng giữa biển sương dải núi phía Bắc, được chưng cất qua từng đợt gió lạnh và bàn tay mộc mạc của người làm trà bản địa.
          </p>

          {/* CTA Cluster: Rectangular 0-2px, no pill buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => (onExploreTeas ? onExploreTeas() : scrollTo("#bo-suu-tap-tra"))}
              className="px-7 py-3.5 bg-[#243126] text-[#FCFCFA] border border-[#39493B] text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-200 hover:bg-[#39493B] focus:outline-hidden"
            >
              Khám phá trà
            </button>

            <button
              onClick={() => (onExploreStory ? onExploreStory() : scrollTo("#triet-ly"))}
              className="inline-flex items-center gap-2 text-sm text-[#E5E4DE] hover:text-[#FCFCFA] uppercase tracking-[0.15em] font-medium py-3 px-2 group transition-colors focus:outline-hidden"
            >
              <span>Câu chuyện Shan Mộc</span>
              <span className="font-serif text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Bottom subtle metadata indicators (Shan Archive cue) */}
        <div className="mt-16 sm:mt-24 pt-6 border-t border-[#FCFCFA]/15 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#E5E4DE]/60 tracking-wider">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-[#B5945D]">ĐỘ CAO:</span> 1.400m – 2.200m
            </div>
            <div>
              <span className="text-[#B5945D]">VÙNG SINH TRƯỞNG:</span> Hoàng Su Phì · Tây Côn Lĩnh · Tà Xùa
            </div>
          </div>
          <div className="hidden sm:block text-[11px] uppercase tracking-widest text-[#E5E4DE]/50">
            Kỹ nghệ thuần mộc · Không hương liệu
          </div>
        </div>
      </div>
    </section>
  );
};
