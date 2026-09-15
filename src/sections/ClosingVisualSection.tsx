import React from "react";

export const ClosingVisualSection: React.FC = () => {
  return (
    <section
      id="khoang-lang-nui-cao"
      aria-label="Khoảng lặng cảm xúc"
      className="relative w-full h-[65vh] sm:h-[75vh] flex items-center justify-center overflow-hidden bg-[#171A17]"
    >
      {/* Background visual: tea cup in natural mountain light / mist */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=2400&q=85"
          alt="Chén trà gốm mộc tỏa hơi ấm trong ánh sáng tự nhiên tĩnh lặng giữa núi cao"
          loading="lazy"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171A17] via-[#171A17]/45 to-[#171A17]/30" />
      </div>

      {/* Minimal Poetic Text Only, No Hard CTA */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-[#FCFCFA] space-y-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#B5945D] font-mono">
          KHOẢNG LẶNG
        </span>

        <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-[1.3] tracking-wide text-[#FCFCFA]">
          &ldquo;Trong tĩnh lặng của núi cao,
          <br />
          chỉ còn lại lá trà, nước và tâm người.&rdquo;
        </p>

        <div className="pt-2">
          <span className="inline-block w-12 h-px bg-[#FCFCFA]/30" />
        </div>
      </div>
    </section>
  );
};
