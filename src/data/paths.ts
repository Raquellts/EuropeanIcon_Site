// Fonte única para montar caminhos de assets em /public.
//
// Nenhum componente ou arquivo de dados deve escrever um caminho de imagem
// ou documento "na mão" — sempre usar uma destas funções. Isso garante que,
// se a convenção de pastas mudar no futuro (ex.: ao migrar para um bucket
// de um ADM panel/API), só este arquivo precisa mudar.

/** Assets de uma edição específica de evento (ex.: hero, galeria, professores, cvs). */
export function eventAssetPath(
  seriesSlug: string,
  editionSlug: string,
  ...parts: string[]
): string {
  return `/eventos/${seriesSlug}/${editionSlug}/${parts.join("/")}`;
}

/**
 * Foto de uma pessoa NUMA edição específica, no papel de professor(a) ou
 * participante. A mesma pessoa pode ter fotos diferentes em edições
 * diferentes — por isso a foto não fica salva em people.ts, e sim resolvida
 * por convenção a partir do slug.
 */
export function personEventPhotoPath(
  seriesSlug: string,
  editionSlug: string,
  role: "professor" | "participante",
  personSlug: string,
): string {
  const folder = role === "professor" ? "professores" : "participantes";
  return eventAssetPath(seriesSlug, editionSlug, folder, `${personSlug}.webp`);
}

/** CV enviado por uma pessoa para uma edição específica. */
export function personCvPath(
  seriesSlug: string,
  editionSlug: string,
  personSlug: string,
): string {
  return eventAssetPath(seriesSlug, editionSlug, "cvs", `${personSlug}.pdf`);
}

/** Assets de um programa de mestrado (hero, about, galeria, edital, contrato). */
export function masterAssetPath(masterSlug: string, file: string): string {
  return `/masters/${masterSlug}/${file}`;
}

/** Assets de uma revista/periódico científico (capa, logo, ícone). */
export function journalAssetPath(journalSlug: string, file: string): string {
  return `/revistas/${journalSlug}/${file}`;
}

/** Logo de um parceiro institucional. */
export function partnerLogoPath(partnerSlug: string): string {
  return `/parceiros/${partnerSlug}.webp`;
}
