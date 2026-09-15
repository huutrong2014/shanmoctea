/**
 * Types & Domain Models for SHAN MỘC
 * Strictly separating Brand, Facility, Tea Terroir, and Harvest Origin.
 */

export type VerificationStatus = "unknown" | "pending" | "verified";

export interface Tea {
  id: string;
  slug: string;
  status: string;

  nameVi: string;
  nameEn?: string;

  categoryId: string;

  shortDescriptionVi?: string;
  shortDescriptionEn?: string;

  originId?: string;

  sensoryProfile?: {
    aroma?: string;
    taste?: string;
    finish?: string;
    liquorColor?: string;
  };

  mainImage?: string;
  gallery?: string[];

  featured?: boolean;
  verificationStatus?: VerificationStatus;
}

export interface TeaCategory {
  id: string;
  nameVi: string;
  nameEn?: string;
  slugVi: string;
  slugEn?: string;
  descriptionVi?: string;
  displayOrder: number;
}

export interface TeaLot {
  id: string;
  teaId: string;

  harvestYear?: number;
  harvestSeason?: string;
  harvestDate?: string;

  originId?: string;

  altitudeMin?: number;
  altitudeMax?: number;

  treeAgeClaim?: string;
  cultivar?: string;
  pickingStandard?: string;

  processingMethod?: string;
  oxidationLevel?: string;
  fermentationMethod?: string;

  batchCode?: string;

  verificationStatus: VerificationStatus;
}

export interface Origin {
  id: string;

  nameVi: string;
  nameEn?: string;

  province?: string;
  district?: string;
  commune?: string;
  village?: string;

  elevationRange?: string;

  descriptionVi?: string;

  verificationStatus: VerificationStatus;
}

export interface JournalArticle {
  id: string;
  slug: string;

  titleVi: string;
  titleEn?: string;

  summaryVi?: string;
  category?: string;

  publishDate?: string;

  featuredImage?: string;
  readTimeVi?: string;
}

export interface Certification {
  id: string;

  name: string;
  standard?: string;
  certificateNumber?: string;

  validFrom?: string;
  validUntil?: string;

  facility?: string;

  verificationStatus: VerificationStatus;
}

export interface ProcessStage {
  id: string;
  stepNumber: number;
  nameVi: string;
  nameEn?: string;
  shortDescriptionVi: string;
  categoryVariants?: {
    [categoryId: string]: string;
  };
}

export interface BrandValuePillar {
  id: string;
  titleVi: string;
  titleEn?: string;
  subtitleVi: string;
  descriptionVi: string;
  botanicalNoteVi: string;
}

export interface PartnershipTrack {
  id: string;
  titleVi: string;
  titleEn?: string;
  taglineVi: string;
  descriptionVi: string;
  readinessStatusVi: string;
}

export interface PlaceholderAsset {
  id: string;
  section: string;
  subject: string;
  orientation: "landscape" | "portrait" | "square" | "panoramic";
  ratio: string;
  priority: "Critical" | "High" | "Medium";
  recommendedResolution: string;
  replacementSuggestion: string;
  currentPlaceholderUrl: string;
}

export interface ProvisionalContentItem {
  field: string;
  currentValueVi: string;
  status: "Provisional" | "Pending Verification" | "Verified";
  rationale: string;
}
