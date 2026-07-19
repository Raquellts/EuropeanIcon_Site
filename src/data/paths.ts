// Fonte única para montar caminhos de assets em /public.
//
// Nenhum componente ou arquivo de dados deve escrever um caminho de imagem
// ou documento "na mão" — sempre usar uma destas funções. Isso garante que,
// se a convenção de pastas mudar no futuro (ex.: ao migrar para um bucket
// de um ADM panel/API), só este arquivo precisa mudar.

/**
 * Foto e CV de uma pessoa: UM único lugar por pessoa, reaproveitado em
 * qualquer contexto (mestrado, evento, revista, etc.) em que ela apareça.
 * Nunca gerar um caminho de foto/CV "por edição" ou "por mestrado" — isso
 * é o que causava duplicidade quando a mesma pessoa era, ao mesmo tempo,
 * corpo docente de um mestrado e palestrante/participante de um evento.
 */
export function personPhotoPath(personSlug: string): string {
  return `/pessoas/${personSlug}/foto.webp`;
}

export function personCvPath(personSlug: string): string {
  return `/pessoas/${personSlug}/cv.pdf`;
}

/** Assets de uma edição específica de evento (hero, galeria — NÃO fotos de pessoas). */
export function eventAssetPath(
  seriesSlug: string,
  editionSlug: string,
  ...parts: string[]
): string {
  return `/eventos/${seriesSlug}/${editionSlug}/${parts.join("/")}`;
}

/** Assets de um programa de mestrado (hero, about, galeria, edital, contrato — NÃO fotos de pessoas). */
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
