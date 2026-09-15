import React from "react";

interface SectionHeadingProps {
  id?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  provisional?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  tag,
  title,
  subtitle,
  align = "left",
  theme = "light",
  provisional = false,
}) => {
  const isDark = theme === "dark";

  return (
    <div
      id={id}
      className={`space-y-3 ${
        align === "center"
          ? "text-center mx-auto"
          : align === "right"
          ? "text-right ml-auto"
          : "text-left"
      } max-w-3xl`}
    >
      {tag && (
        <div className="flex items-center gap-2.5">
          {align !== "center" && (
            <span
              className={`h-px w-6 ${
                isDark ? "bg-[#77856E]" : "bg-[#716855]/60"
              }`}
            />
          )}
          <span
            className={`text-xs uppercase tracking-[0.2em] font-medium font-sans ${
              isDark ? "text-[#E5E4DE]/75" : "text-[#716855]"
            }`}
          >
            {tag}
          </span>
          {provisional && (
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 border border-[#B5945D]/40 text-[#B5945D]">
              Bản thảo
            </span>
          )}
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-normal ${
          isDark ? "text-[#FCFCFA]" : "text-[#171A17]"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg font-light leading-relaxed font-sans ${
            isDark ? "text-[#E5E4DE]/80" : "text-[#171A17]/75"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
