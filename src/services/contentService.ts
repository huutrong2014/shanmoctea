import {
  teaCategories,
  origins,
  featuredTeas,
  sampleTeaLots,
  processStages,
  brandValues,
  partnershipTracks,
  journalArticles,
  certifications,
} from "../content/seedData";
import { placeholderAssetManifest, provisionalContentManifest } from "../content/manifests";
import {
  Tea,
  TeaCategory,
  TeaLot,
  Origin,
  JournalArticle,
  Certification,
  ProcessStage,
  BrandValuePillar,
  PartnershipTrack,
} from "../types/tea";

/**
 * SHAN MỘC CONTENT SERVICE & ABSTRACTION REPOSITORY
 * Provides asynchronous data access mimicking headless CMS / API responses.
 * Enforces verification safety: filters out unverified claims from public display.
 */

export const contentService = {
  /**
   * Fetch all tea categories sorted by displayOrder
   */
  async getTeaCategories(): Promise<TeaCategory[]> {
    return [...teaCategories].sort((a, b) => a.displayOrder - b.displayOrder);
  },

  /**
   * Fetch featured teas with resolved origin information
   */
  async getFeaturedTeas(): Promise<(Tea & { origin?: Origin; category?: TeaCategory })[]> {
    return featuredTeas.map((tea) => {
      const origin = origins.find((o) => o.id === tea.originId);
      const category = teaCategories.find((c) => c.id === tea.categoryId);
      return {
        ...tea,
        origin,
        category,
      };
    });
  },

  /**
   * Fetch a single tea by slug
   */
  async getTeaBySlug(slug: string): Promise<(Tea & { origin?: Origin; category?: TeaCategory }) | null> {
    const tea = featuredTeas.find((t) => t.slug === slug);
    if (!tea) return null;
    const origin = origins.find((o) => o.id === tea.originId);
    const category = teaCategories.find((c) => c.id === tea.categoryId);
    return { ...tea, origin, category };
  },

  /**
   * Fetch verified tea origins summary
   */
  async getOriginSummary(): Promise<Origin[]> {
    // Only return origins that have verified status or mark them gracefully
    return origins.filter((o) => o.verificationStatus === "verified");
  },

  /**
   * Fetch all origins including pending for internal auditing
   */
  async getAllOrigins(): Promise<Origin[]> {
    return origins;
  },

  /**
   * Fetch process stages for the Leaf to Tea section
   */
  async getProcessStages(): Promise<ProcessStage[]> {
    return [...processStages].sort((a, b) => a.stepNumber - b.stepNumber);
  },

  /**
   * Fetch sample tea lots for the Shan Archive / Product Intelligence module
   */
  async getTeaLots(): Promise<(TeaLot & { teaName?: string; originName?: string })[]> {
    return sampleTeaLots.map((lot) => {
      const tea = featuredTeas.find((t) => t.id === lot.teaId);
      const origin = origins.find((o) => o.id === lot.originId);
      return {
        ...lot,
        teaName: tea?.nameVi,
        originName: origin?.nameVi,
      };
    });
  },

  /**
   * Fetch brand value pillars (Nguồn gốc, Thuần mộc, Chế tác, Thời gian)
   */
  async getBrandValues(): Promise<BrandValuePillar[]> {
    return brandValues;
  },

  /**
   * Fetch partnership tracks for B2B engagement
   */
  async getPartnershipTracks(): Promise<PartnershipTrack[]> {
    return partnershipTracks;
  },

  /**
   * Fetch 3 featured journal articles
   */
  async getFeaturedJournalArticles(): Promise<JournalArticle[]> {
    return journalArticles.slice(0, 3);
  },

  /**
   * Strictly returns verified certifications only
   * (Per requirement Section 11: never render unverified certification publicly)
   */
  async getVerifiedCertifications(): Promise<Certification[]> {
    return certifications.filter((c) => c.verificationStatus === "verified");
  },

  /**
   * Returns all certifications for audit inspector view
   */
  async getAllCertifications(): Promise<Certification[]> {
    return certifications;
  },

  /**
   * Retrieve placeholder asset manifest
   */
  getPlaceholderAssetManifest() {
    return placeholderAssetManifest;
  },

  /**
   * Retrieve provisional content audit manifest
   */
  getProvisionalContentManifest() {
    return provisionalContentManifest;
  },
};
