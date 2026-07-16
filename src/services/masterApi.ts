import {
  getMasterBySlug,
  type Master,
  type CurriculumModule,
  type GalleryImage,
} from "../data/masters";

export async function getMasterDetail(
  slug: string
): Promise<Master | undefined> {
  return getMasterBySlug(slug);
}

export async function getMasterCurriculum(
  slug: string
): Promise<CurriculumModule[] | undefined> {
  const master = getMasterBySlug(slug);
  return master?.curriculumModules;
}

export async function getMasterGallery(
  slug: string
): Promise<GalleryImage[] | undefined> {
  const master = getMasterBySlug(slug);
  return master?.galleryImages;
}
