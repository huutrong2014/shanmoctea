import React from "react";
import { JournalArticle } from "../types/tea";
import { JournalCard } from "../components/JournalCard";
import { SectionHeading } from "../components/SectionHeading";

interface JournalSectionProps {
  articles: JournalArticle[];
  onReadArticle?: (article: JournalArticle) => void;
  onExploreJournal?: () => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({
  articles,
  onReadArticle,
  onExploreJournal,
}) => {
  return (
    <section
      id="nhat-ky-tra"
      aria-label="Nhật ký trà Shan Mộc"
      className="py-24 sm:py-32 lg:py-40 bg-[#F5F1E8] border-b border-[#675546]/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeading
            tag="Ghi chép & Khảo cứu"
            title="Nhật ký từ những nương trà mờ sương"
            subtitle="Ghi chép quan sát thực địa, chia sẻ góc nhìn văn hóa và kỹ nghệ thẩm định trà của những người gắn bó cùng núi rừng."
          />

          <button
            onClick={onExploreJournal}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#243126] hover:text-[#39493B] shrink-0"
          >
            <span className="border-b border-[#243126] pb-0.5 group-hover:border-[#39493B]">
              Đọc Nhật ký trà
            </span>
            <span className="font-serif text-lg group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        {/* 3 Editorial Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <JournalCard
              key={article.id}
              article={article}
              onRead={onReadArticle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
