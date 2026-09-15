import React, { useState, useEffect } from "react";
import { contentService } from "./services/contentService";
import {
  Tea,
  TeaCategory,
  Origin,
  ProcessStage,
  TeaLot,
  BrandValuePillar,
  PartnershipTrack,
  JournalArticle,
} from "./types/tea";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DataManifestModal } from "./components/DataManifestModal";
import { TeaDetailModal } from "./components/TeaDetailModal";

import { HeroSection } from "./sections/HeroSection";
import { PhilosophySection } from "./sections/PhilosophySection";
import { MountainOriginSection } from "./sections/MountainOriginSection";
import { TeaCollectionSection } from "./sections/TeaCollectionSection";
import { LeafToTeaSection } from "./sections/LeafToTeaSection";
import { ProductIntelligenceSection } from "./sections/ProductIntelligenceSection";
import { BrandValuesSection } from "./sections/BrandValuesSection";
import { PartnershipSection } from "./sections/PartnershipSection";
import { JournalSection } from "./sections/JournalSection";
import { ClosingVisualSection } from "./sections/ClosingVisualSection";

export default function App() {
  const [categories, setCategories] = useState<TeaCategory[]>([]);
  const [teas, setTeas] = useState<(Tea & { origin?: Origin; category?: TeaCategory })[]>([]);
  const [origins, setOrigins] = useState<Origin[]>([]);
  const [stages, setStages] = useState<ProcessStage[]>([]);
  const [lots, setLots] = useState<(TeaLot & { teaName?: string; originName?: string })[]>([]);
  const [brandValues, setBrandValues] = useState<BrandValuePillar[]>([]);
  const [partnershipTracks, setPartnershipTracks] = useState<PartnershipTrack[]>([]);
  const [journalArticles, setJournalArticles] = useState<JournalArticle[]>([]);

  const [loading, setLoading] = useState(true);
  const [manifestOpen, setManifestOpen] = useState(false);
  const [selectedTea, setSelectedTea] = useState<(Tea & { origin?: Origin; category?: TeaCategory }) | null>(null);

  useEffect(() => {
    async function loadContent() {
      try {
        const [
          cats,
          allTeas,
          origs,
          procStages,
          teaLots,
          values,
          tracks,
          articles,
        ] = await Promise.all([
          contentService.getTeaCategories(),
          contentService.getFeaturedTeas(),
          contentService.getOriginSummary(),
          contentService.getProcessStages(),
          contentService.getTeaLots(),
          contentService.getBrandValues(),
          contentService.getPartnershipTracks(),
          contentService.getFeaturedJournalArticles(),
        ]);

        setCategories(cats);
        setTeas(allTeas);
        setOrigins(origs);
        setStages(procStages);
        setLots(teaLots);
        setBrandValues(values);
        setPartnershipTracks(tracks);
        setJournalArticles(articles);
      } catch (err) {
        console.error("Error loading Shan Mộc content:", err);
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] flex flex-col items-center justify-center font-sans space-y-4 text-[#171A17]">
        <div className="font-serif text-3xl tracking-[0.2em] uppercase animate-pulse">
          SHAN MỘC
        </div>
        <div className="text-xs uppercase tracking-widest text-[#716855] font-light">
          Đang chuẩn bị không gian trà...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#171A17] font-sans selection:bg-[#39493B] selection:text-[#F5F1E8]">
      {/* 26. Header & Sticky Navigation */}
      <Header onOpenManifest={() => setManifestOpen(true)} />

      {/* Main Content: 11 Narrative Sections in exact order */}
      <main id="main-content" className="flex-1">
        {/* 15. SECTION 01 — HERO */}
        <HeroSection
          onExploreTeas={() => {
            const el = document.querySelector("#bo-suu-tap-tra");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onExploreStory={() => {
            const el = document.querySelector("#triet-ly");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 16. SECTION 02 — PHILOSOPHY */}
        <PhilosophySection
          onStoryClick={() => {
            const el = document.querySelector("#nguon-goc-nui-cao");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 17. SECTION 03 — MOUNTAIN ORIGIN */}
        <MountainOriginSection
          origins={origins}
          onExploreOrigin={(orig) => {
            const el = document.querySelector("#bo-suu-tap-tra");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 18. SECTION 04 — TEA COLLECTION */}
        <TeaCollectionSection
          categories={categories}
          teas={teas}
          onSelectTea={(tea) => {
            const fullTea = teas.find((t) => t.id === tea.id) || null;
            setSelectedTea(fullTea);
          }}
        />

        {/* 19. SECTION 05 — LEAF TO TEA */}
        <LeafToTeaSection stages={stages} categories={categories} />

        {/* 20. SECTION 06 — PRODUCT INTELLIGENCE / TRACEABILITY */}
        <ProductIntelligenceSection lots={lots} />

        {/* 21. SECTION 07 — BRAND VALUES */}
        <BrandValuesSection values={brandValues} />

        {/* 22. SECTION 08 — PARTNERSHIP */}
        <PartnershipSection tracks={partnershipTracks} />

        {/* 23. SECTION 09 — JOURNAL */}
        <JournalSection
          articles={journalArticles}
          onExploreJournal={() => {
            const el = document.querySelector("#nhat-ky-tra");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 24. SECTION 10 — CLOSING IMAGE */}
        <ClosingVisualSection />
      </main>

      {/* 25. SECTION 11 — FOOTER */}
      <Footer onOpenManifest={() => setManifestOpen(true)} />

      {/* Data Manifest & Audit Inspector Drawer */}
      <DataManifestModal
        isOpen={manifestOpen}
        onClose={() => setManifestOpen(false)}
      />

      {/* Quick-view modal for Tea */}
      <TeaDetailModal
        tea={selectedTea}
        onClose={() => setSelectedTea(null)}
      />
    </div>
  );
}
