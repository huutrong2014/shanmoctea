import React from "react";
import { JournalArticle } from "../types/tea";

interface JournalCardProps {
  id?: string;
  article: JournalArticle;
  onRead?: (article: JournalArticle) => void;
}

export const JournalCard: React.FC<JournalCardProps> = ({ id, article, onRead }) => {
  return (
    <article
      id={id || `journal-card-${article.id}`}
      className="group flex flex-col bg-[#FCFCFA] border border-[#675546]/15 hover:border-[#39493B]/40 transition-all duration-300"
    >
      {/* Article Featured Image (3:2 ratio) */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#E5E4DE]/30">
        <img
          src={article.featuredImage}
          alt={article.titleVi}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#FCFCFA]/90 backdrop-blur-xs px-2 py-0.5 text-[11px] uppercase tracking-wider text-[#716855] font-medium border border-[#675546]/20">
          {article.category || "Nhật ký trà"}
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2.5">
          {article.publishDate && (
            <div className="text-[12px] uppercase tracking-widest text-[#716855] font-sans">
              {article.publishDate} {article.readTimeVi ? `· ${article.readTimeVi}` : ""}
            </div>
          )}

          <h3 className="font-serif text-xl sm:text-2xl text-[#171A17] group-hover:text-[#243126] transition-colors leading-snug">
            {article.titleVi}
          </h3>

          <p className="text-sm text-[#171A17]/70 font-sans leading-relaxed line-clamp-3">
            {article.summaryVi}
          </p>
        </div>

        <div className="pt-3 border-t border-[#675546]/10">
          <button
            onClick={() => onRead && onRead(article)}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#243126] group-hover:translate-x-1 transition-transform"
          >
            <span>Đọc tiếp</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
};
