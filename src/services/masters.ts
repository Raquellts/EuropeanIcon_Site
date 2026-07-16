import { masters as mastersData, getMasterBySlug } from "../data/masters/index";
import type { Master } from "../data/masters/index";
import type { CurriculumModule, GalleryImage } from "../data/types";

export async function getMasters(): Promise<Master[]> {
  return mastersData;
}

export async function getMaster(slug: string): Promise<Master | undefined> {
  return getMasterBySlug(slug);
}

export async function getMasterCurriculum(
  slug: string,
): Promise<CurriculumModule[] | undefined> {
  const master = getMasterBySlug(slug);
  return master?.curriculumModules;
}

export async function getMasterGallery(
  slug: string,
): Promise<GalleryImage[] | undefined> {
  const master = getMasterBySlug(slug);
  return master?.galleryImages;
}
