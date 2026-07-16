# European & Icon Institute

Plataforma digital do European & Icon Institute — programas de mestrado internacional, eventos acadêmicos, periódicos científicos e informações institucionais.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS |
| Ícones | lucide-react |
| Imagens | next/image + domínios externos configurados |
| Build | `next build` (SSG + SSR) |

---

## Arquitetura de Pastas

```
src/
  data/                          ← Dados estáticos organizados por domínio
    types.ts                     ← Tipos compartilhados entre domínios
    institute.ts                 ← Dados institucionais
    navigation.ts                ← Configuração da navegação (mega-menu)
    partners.ts                  ← Parceiros institucionais
    people.ts                    ← Pessoas (professores + participantes)
    faq.ts                       ← FAQ (fallback/deprecated — usar inline na edição)
    masters/
      index.ts                   ← Registry: exporta array + getMasterBySlug()
      direito-penal-economico.ts ← Master individual
      harmonizacao-orofacial.ts  ← Master individual
    eventos/
      types.ts                   ← Tipos do domínio eventos
      series.ts                  ← Séries de eventos + getEventSeriesBySlug()
      index.ts                   ← Registry: getEditionBySlug(), getEventStatus(), etc.
      direito-penal-economico/
        index.ts                 ← Barrel da série
        porto-2026.ts            ← Edição completa (dados inline)
    revistas/
      index.ts                   ← Registry + getJournalBySlug()
      imperium.ts                ← Revista individual
      aesthis.ts                 ← Revista individual

  services/                      ← Camada de abstração (async — preparada para API)
    index.ts                     ← Barrel
    masters.ts                   ← getMasters(), getMaster(), getMasterCurriculum()
    eventos.ts                   ← getEdition(), getStatus(), formatDate()
    people.ts                    ← getPerson(), getAllProfessors(), getAllParticipants()
    masterApi.ts                 ← Re-export para compatibilidade retroativa

public/
  fonts/
  videos/
    hero-instituto.mp4
    hero-eventos.mp4
    hero-revistas.mp4
  cvs/                            ← Currículos em PDF (slug.pdf)
  images/
    eventos/                      ← Assets organizados por edição
      porto-2026/
        hero/hero.webp
        galeria/1-8.webp
    instituto/
      backgrounds/
      logos/
    masters/                      ← Assets organizados por master
      direito-penal-economico/
        hero.webp, about.webp, galeria-01.webp...
      harmonizacao-orofacial/
        hero.webp, about.webp, galeria-01.webp...
    parceiros/                    ← Logos de parceiros
    participantes/                ← Fotos de participantes
    mestres/                      ← Fotos de professores (slug.webp)
    revistas/                     ← Capas de revistas
    logos/                        ← Logotipos diversos

app/
  api/                            ← API REST (placeholder — futura implementação)
    masters/route.ts
    masters/[slug]/route.ts
    eventos/route.ts
    eventos/[serieSlug]/[edicaoSlug]/route.ts
    people/route.ts
    partners/route.ts

  admin/                          ← Painel administrativo (placeholder)
    masters/page.tsx
    masters/novo/page.tsx
    masters/[slug]/page.tsx
    eventos/page.tsx
    eventos/[serieSlug]/[edicaoSlug]/page.tsx
    people/page.tsx
    people/[slug]/page.tsx

  _shared/                        ← Componentes compartilhados
    components/ui/
    hooks/
```

---

## Schemas de Dados

### 1. BaseEntity

**Arquivo:** `src/data/types.ts`

Interface base para todas as entidades que futuramente serão gerenciadas via API/banco de dados.

```typescript
interface BaseEntity {
  id: string;            // UUID — identificador único
  createdAt: string;     // ISO 8601 — data de criação
  updatedAt: string;     // ISO 8601 — data da última atualização
  published: boolean;    // Controle de publicação (rascunho vs publicado)
}
```

Todas as entidades abaixo usam `Partial<BaseEntity>`, permitindo que hoje os dados sejam estáticos (sem `id`/`createdAt`) e amanhã possam ser salvos no banco sem quebrar nada.

---

### 2. Institute

**Arquivo:** `src/data/institute.ts`

Dados institucionais. É um singleton — existe um único objeto `institute`.

```typescript
interface Institute {
  name: string;           // "European & Icon Institute"
  logo: string;           // URL do logo (S3 ou caminho local)
  description: string;    // Descrição institucional completa
  mission: string;        // Missão da instituição
  focus: string;          // Foco de atuação
  link: string;           // Site principal
  contact: {
    email: string;        // atendimento@institutoeuropean.com
    phone: string;        // +351 916 637 124
    whatsapp: string;     // 351916637124 (sem caracteres especiais)
    social: {
      instagram: string;  // URL completa
      linkedin: string;   // URL completa
      youtube: string;    // URL completa
    };
  };
}
```

**Uso nos componentes:** Navbar, Footer, HeroSection, ContactSection, WhatsAppButton.

---

### 3. Master

**Arquivo:** `src/data/masters/direito-penal-economico.ts` (e demais masters)

Cada master é um arquivo individual no diretório `src/data/masters/`. O barrel `index.ts` os agrega.

```typescript
interface Master extends Partial<BaseEntity> {
  slug: string;                         // Identificador único (ex: "mestrado-direito-penal-economico")
  title: string;                        // Nome completo do mestrado
  description: string;                  // Descrição detalhada (parágrafo longo)
  coordinator: string;                  // Nome do coordenador
  logo: string;                         // Caminho da imagem do logo
  icon?: string;                        // Caminho do ícone (caso diferente do logo)
  url: string;                          // URL do site do programa
  Icon: LucideIcon;                     // Componente de ícone do lucide-react
  logoStyle?: Record<string, string>;   // Estilos CSS inline para o logo (ex: scale, margin)
  heroImage?: string;                   // Caminho da imagem do hero
  aboutImage?: string;                  // Caminho da imagem "sobre"
  tagline?: string;                     // Subtítulo resumido (ex: "3.000h · 120 ECTS · Dupla Titulação")
  videoUrl?: string;                    // URL do YouTube para vídeo de apresentação
  totalHours?: string;                  // Carga horária total (ex: "3.000")
  ects?: string;                        // Créditos ECTS (ex: "120")
  locations?: string[];                 // Países onde é oferecido (ex: ["Brasil", "Portugal", "Espanha"])
  certification?: string;              // Descrição da certificação/dupla titulação
  benefits?: Benefit[];                // Lista de benefícios do programa
  curriculumModules?: CurriculumModule[];  // Grade curricular
  galleryImages?: GalleryImage[];          // Galeria de imagens
}

interface CurriculumModule {
  name: string;                         // Nome do módulo (ex: "Módulo 1 — Fundamentos")
  disciplines: CurriculumDiscipline[];   // Disciplinas do módulo
}

interface CurriculumDiscipline {
  name: string;                         // Nome da disciplina
  workload: string;                     // Carga horária (ex: "100h")
  ects?: string;                        // Créditos ECTS (ex: "4")
  description?: string;                 // Descrição da disciplina
}

interface Benefit {
  icon: string;                         // Nome do ícone lucide-react (ex: "Clock", "Globe")
  title: string;                        // Título do benefício
  description: string;                  // Descrição detalhada
}
```

**Como adicionar um novo master:**

```typescript
// 1. Criar src/data/masters/novo-master.ts
export const novoMaster: Master = {
  slug: "mestrado-novo",
  title: "Mestrado Internacional em ...",
  // ... preencher todos os campos
};

// 2. Registrar no barrel src/data/masters/index.ts
import { novoMaster } from "./novo-master";
export const masters: Master[] = [direitoPenalEconomico, harmonizacaoOrofacial, novoMaster];

// 3. Assets em public/images/masters/novo-master/
//    hero.webp, about.webp, galeria-01.webp...
```

---

### 4. Journal

**Arquivo:** `src/data/revistas/imperium.ts` (e demais revistas)

```typescript
interface Journal extends Partial<BaseEntity> {
  slug: string;            // Identificador único (ex: "imperium")
  name: string;            // Nome completo da revista
  shortName: string;       // Nome curto para exibição (ex: "Imperium")
  subject: string;         // Área temática
  description: string;     // Descrição detalhada
  url: string;             // URL externa da revista
  logo: string;            // Caminho do logotipo
  icon: string;            // Caminho do ícone
  coverImage: string;      // Caminho da imagem de capa
  logoStyle?: Record<string, string>;  // Estilos CSS para o logo
  iconStyle?: Record<string, string>;  // Estilos CSS para o ícone
}
```

---

### 5. Event

**Arquivos:**
- `src/data/eventos/series.ts` — `EventSeries`
- `src/data/eventos/direito-penal-economico/porto-2026.ts` — `EventEdition` (dados completos inline)
- `src/data/eventos/types.ts` — tipos auxiliares

#### EventSeries

```typescript
interface EventSeries {
  slug: string;            // Identificador da série (ex: "direito-penal-economico")
  name: string;            // Nome da série (ex: "Direito Penal Econômico")
  category: string;        // Categoria (ex: "direito")
  description: string;     // Descrição da série
  coverImage: string;      // Caminho da imagem de capa
}
```

#### EventEdition

```typescript
interface EventEdition extends Partial<BaseEntity> {
  seriesSlug: string;                              // Slug da série pai
  slug: string;                                    // Slug da edição (ex: "porto-2026")
  title: string;                                   // Título completo do evento
  shorttitle: string;                              // Título curto para o hero (ex: "Fórum Internacional de")
  subtitle: string;                                // Subtítulo
  description: string;                             // Descrição do evento
  date: { start: Date; end: Date };                // Datas de início e fim
  location: EventLocation;                         // Local do evento
  heroImage: string;                               // Caminho da imagem do hero
  about: EventAbout;                               // Informações "sobre"
  professors: string[];                            // Slugs dos professores participantes
  participants: string[];                          // Slugs dos participantes
  schedule: ScheduleDay[];                         // Programação (inline)
  gallery: GalleryImage[];                         // Galeria de fotos (inline)
  testimonials: Testimonial[];                     // Depoimentos (inline)
  faq: FAQItem[];                                  // Perguntas frequentes (inline)
  phrases: EventPhrases;                           // Frases dinâmicas por status
}

interface EventLocation {
  name: string;            // Nome do local (ex: "The Yeatman Hotel")
  address: string;         // Endereço
  city: string;            // Cidade
  state: string;           // Estado/Província
  country: string;         // País
  cep: string;             // CEP/Código postal
  mapEmbedUrl: string;     // URL do Google Maps embed
}

interface EventAbout {
  objective: string;             // Objetivo do evento
  purpose: string;               // Propósito
  targetAudience: string;        // Público-alvo
  topics: string;                // Tópicos (texto livre)
  discussionTopics: string[];    // Tópicos de discussão
}

interface EventPhrases {
  before: { label: string };                          // "para o início do evento"
  during: { status: string; description: string };    // "Acontecendo agora" + descrição
  after: { status: string; description: string };     // "Ocorreu em" + descrição
  participants: { before: string; during: string; after: string };
  professors: { before: string; during: string; after: string };
}

type EventStatus = "before" | "during" | "after";
```

#### Schedule (inline na edição)

```typescript
interface ScheduleDay {
  date: string;            // Ex: "09 de julho"
  day: string;             // Ex: "Quinta-feira"
  items: ScheduleItem[];   // Itens da programação
}

interface ScheduleItem {
  slugs?: string[];        // Slugs dos palestrantes (para linkar com people)
  time: string;            // Horário (ex: "09:00")
  title: string;           // Título da atividade
  description?: string;    // Descrição
  speaker?: string;        // Nome do palestrante (display)
  type: "palestra" | "painel" | "coffee" | "credenciamento" | "encerramento";
}
```

**Como adicionar um novo evento:**

```typescript
// 1. Se for nova série: criar src/data/eventos/nova-serie/index.ts
//    Registrar no barrel src/data/eventos/index.ts

// 2. Criar src/data/eventos/nova-serie/nova-edicao.ts
//    Exportar o objeto completo com schedule, gallery, testimonials, faq inline

// 3. Assets em public/images/eventos/nova-edicao/
//    hero/hero.webp, galeria/1-8.webp...

// 4. Pessoas: adicionar slugs em professors[] e participants[]
//    (as pessoas já devem existir em src/data/people.ts)
```

---

### 6. People

**Arquivo:** `src/data/people.ts`

```typescript
interface PersonBase {
  slug: string;                   // Identificador único (ex: "carlos")
  name: string;                   // Nome completo
  role: string;                   // Cargo/função (ex: "Catedrático de Direito Penal")
  description?: string;           // Biografia curta
  email?: string;                 // Email
  city?: string;                  // Cidade
  country?: string;               // País
  countryCode?: string;           // Código do país (ex: "es", "pt", "br")
  social?: {
    instagram?: string;           // URL do Instagram
    linkedin?: string;            // URL do LinkedIn
    twitter?: string;             // URL do Twitter/X
    lattes?: string;              // URL do Lattes
  };
  contact?: string;               // Informação de contato adicional
}

interface Professor extends PersonBase {
  photo: string;                   // Caminho da foto (OBRIGATÓRIO)
  curriculum: string;              // Currículo completo (texto longo)
  areas: string[];                 // Áreas de atuação (ex: ["Direito Penal Econômico"])
}

interface Participant extends PersonBase {
  curriculum?: string;             // Currículo (OPCIONAL para participantes)
  areas?: string[];                // Áreas de atuação (OPCIONAL)
}

type Person = Professor | Participant;
```

**Regras de uso:**
- Professores são vinculados a eventos via `EventEdition.professors[]` (slugs)
- Participantes são vinculados a eventos via `EventEdition.participants[]` (slugs)
- Palestrantes na programação são vinculados via `ScheduleItem.slugs[]`
- A função `isProfessor(person)` determina se é professor ou participante
- Fotos de professores: `/images/mestres/{slug}.webp`
- Fotos de participantes: `/images/participantes/{slug}.webp`

---

### 7. Partner

**Arquivo:** `src/data/partners.ts`

```typescript
interface Partner {
  name: string;            // Nome do parceiro
  logo: string;            // Caminho do logo
  url?: string;            // Site do parceiro (opcional)
  category?: string;       // Categoria (ex: "Universidade", "Associação")
  country?: string;        // País
  countryCode?: string;    // Código do país (ex: "br", "es")
}
```

---

### 8. Shared Types

**Arquivo:** `src/data/types.ts`

```typescript
interface GalleryImage {
  src: string;             // Caminho da imagem
  alt: string;             // Texto alternativo
  caption?: string;        // Legenda opcional
}

interface Testimonial {
  name: string;            // Nome da pessoa
  role: string;            // Cargo (ex: "Aluna do Mestrado Internacional")
  photo: string;           // Caminho da foto
  text: string;            // Texto do depoimento
}

interface FAQItem {
  question: string;        // Pergunta
  answer: string;          // Resposta
}
```

---

### 9. Navigation

**Arquivo:** `src/data/navigation.ts`

Define a mega-menu da navbar. É construída dinamicamente a partir dos dados de masters, eventos e revistas.

```typescript
interface NavItem {
  label: string;                   // Rótulo do item (ex: "Mestrados")
  href: string;                    // Link principal
  anchors?: NavAnchor[];           // Links âncora diretos na página
  children?: NavSubItem[];         // Sub-itens (masters, eventos, revistas)
  featured?: NavFeatured;          // Painel de destaque (esquerda do mega-menu)
}

interface NavSubItem {
  label: string;                   // Nome do sub-item
  href?: string;                   // Link da página
  description?: string;            // Descrição curta
  anchors?: NavAnchor[];           // Âncoras internas
}

interface NavAnchor {
  label: string;                   // Rótulo do link
  href: string;                    // URL ou âncora (#id)
  description?: string;            // Descrição curta
}

interface NavFeatured {
  title: string;                   // Título do destaque
  description: string;             // Descrição
  href: string;                    // Link
  cta: string;                     // Texto do CTA (ex: "Ver todos os mestrados")
}
```

A navegação de **Eventos** e **Mestrados** é gerada automaticamente:

```typescript
// Navigation.ts gera children dinamicamente:
masters.map((m) => ({
  label: m.title,
  href: `/mestrados/${m.slug}`,
  description: m.tagline,
  anchors: [
    { label: "Visão geral", href: `/mestrados/${m.slug}#hero` },
    { label: "Grade curricular", href: `/mestrados/${m.slug}#grade` },
    { label: "Galeria", href: `/mestrados/${m.slug}#galeria` },
  ],
}));

eventSeries.flatMap((s) =>
  getEditionsBySeries(s.slug).map((e) => ({ ... }))
);
```

---

## Service Layer

**Arquivo:** `src/services/`

A camada de serviços abstrai a fonte dos dados. Hoje ela lê dos arquivos estáticos `src/data/`, amanhã poderá fazer fetch de uma API REST ou consultar um banco de dados.

```typescript
// src/services/masters.ts
export async function getMasters(): Promise<Master[]>
export async function getMaster(slug: string): Promise<Master | undefined>
export async function getMasterCurriculum(slug: string): Promise<CurriculumModule[] | undefined>
export async function getMasterGallery(slug: string): Promise<GalleryImage[] | undefined>

// src/services/eventos.ts
export async function getSeries(): Promise<EventSeries[]>
export async function getSeriesBySlug(slug: string): Promise<EventSeries | undefined>
export async function getEdition(serieSlug: string, editionSlug: string): Promise<EventEdition | undefined>
export async function getEditions(seriesSlug: string): Promise<EventEdition[]>
export async function getLatestEditionBySeries(seriesSlug: string): Promise<EventEdition | undefined>
export function getStatus(edition: EventEdition): EventStatus
export function formatDate(edition: EventEdition): string

// src/services/people.ts
export async function getPerson(slug: string): Promise<Person | undefined>
export async function getAllProfessors(): Promise<Professor[]>
export async function getAllParticipants(): Promise<Participant[]>
export function isProfessor(person: Person): boolean
```

**Uso nos componentes:**

```typescript
// ❌ Antes (import direto do dado estático)
import { masters } from "@/src/data/masters";

// ✅ Depois (via service layer — preparado para API)
import { getMasters } from "@/src/services/masters";
const masters = await getMasters();
```

---

## Assets: Organização no `public/`

### Regra geral

Cada entidade que possui assets visuais (imagens, vídeos) tem sua própria pasta nomeada pelo `slug`.

```
public/images/
  eventos/{slug-da-edicao}/
    hero/hero.webp
    galeria/1.webp, 2.webp...
    palestrantes/
    participantes/

  masters/{slug-do-master}/
    hero.webp
    about.webp
    galeria-01.webp, galeria-02.webp...
```

### Mapeamento de paths atuais

| Entity | Slug | Path dos assets |
|--------|------|----------------|
| Master | `mestrado-direito-penal-economico` | `images/masters/direito-penal-economico/` |
| Master | `mestrado-harmonizacao-orofacial` | `images/masters/harmonizacao-orofacial/` |
| Event | `porto-2026` | `images/eventos/porto-2026/` |
| Professor | `carlos` | `images/mestres/{slug}.webp` |
| Participant | `bruno` | `images/participantes/{slug}.webp` |

### Vídeos

Todos em `public/videos/`. Referenciados diretamente nos componentes:

```tsx
<VideoBackground videoSrc="/videos/hero-instituto.mp4" />
```

### Currículos (CVs)

Em `public/cvs/{slug}.pdf`. Servidos dinamicamente na página de detalhe da pessoa.

---

## Rotas da Aplicação

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | SSG | Home (Instituto) |
| `/mestrados` | SSG | Lista de mestrados |
| `/mestrados/[slug]` | SSG | Detalhe do mestrado |
| `/eventos` | SSG | Lista de eventos |
| `/eventos/[serieSlug]` | SSG | Eventos de uma série |
| `/eventos/[serieSlug]/[edicaoSlug]` | SSG | Página da edição |
| `/eventos/[serieSlug]/[edicaoSlug]/participantes/[personSlug]` | SSR | Detalhe da pessoa |
| `/revistas` | SSG | Lista de revistas |
| `/revistas/[slug]` | SSG | Detalhe da revista |
| `/contato` | SSG | Contato + FAQ |
| `/admin/masters` | SSG | Admin: listar mestrados |
| `/admin/masters/novo` | SSG | Admin: criar mestrado |
| `/admin/masters/[slug]` | SSR | Admin: editar mestrado |
| `/admin/eventos` | SSG | Admin: listar eventos |
| `/admin/eventos/[serieSlug]/[edicaoSlug]` | SSR | Admin: editar evento |
| `/admin/people` | SSG | Admin: listar pessoas |
| `/admin/people/[slug]` | SSR | Admin: editar pessoa |
| `/api/masters` | API | Listar mestrados |
| `/api/masters/[slug]` | API | CRUD de master |
| `/api/eventos` | API | Listar eventos |
| `/api/eventos/[serieSlug]/[edicaoSlug]` | API | CRUD de edição |
| `/api/people` | API | Listar pessoas |
| `/api/partners` | API | Listar parceiros |

**Legenda:** SSG = Static Site Generation, SSR = Server-Side Rendering, API = API Route

---

## Padrão para Adicionar Conteúdo

### Novo Mestrado

```bash
# 1. Arquivo de dados
src/data/masters/novo-master.ts     # + export const novoMaster: Master = { ... }
src/data/masters/index.ts           # + import + adicionar ao array

# 2. Assets
public/images/masters/novo-master/
  hero.webp
  about.webp
  galeria-01.webp ...
```

### Novo Evento

```bash
# 1. Se for nova série de eventos
src/data/eventos/nova-serie/index.ts            # barrel
src/data/eventos/series.ts                      # + adicionar ao array eventSeries

# 2. Dados da edição
src/data/eventos/nova-serie/nova-edicao.ts      # export const edicao: EventEdition = { ... }
src/data/eventos/nova-serie/index.ts            # + import + adicionar ao array

# 3. Registrar no barrel global
src/data/eventos/index.ts                       # + import + adicionar a allEditions

# 4. Assets
public/images/eventos/nova-edicao/
  hero/
  galeria/
```

### Nova Revista

```bash
# 1. Arquivo de dados
src/data/revistas/nova-revista.ts    # + export const novaRevista: Journal = { ... }
src/data/revistas/index.ts          # + import + adicionar ao array

# 2. Assets
public/images/revistas/capa.webp
public/images/logos/logo_nova.webp
public/images/logos/icon_nova.webp
```

### Nova Pessoa

```bash
# Adicionar ao array em src/data/people.ts
# Foto em public/images/mestres/{slug}.webp (professor)
# Foto em public/images/participantes/{slug}.webp (participante)
```

---

## Convenções de Código

### Imports

```typescript
// Preferir imports do barrel index.ts
import { masters } from "@/src/data";

// OU do service layer (preparado para API futura)
import { getMasters } from "@/src/services";

// Evitar imports de arquivos específicos
// ❌ import { masters } from "@/src/data/masters/masters";
```

### Slugs

- **Masters:** prefixo `mestrado-` (ex: `mestrado-direito-penal-economico`)
- **Eventos (série):** nome curto (ex: `direito-penal-economico`)
- **Eventos (edição):** `{cidade}-{ano}` (ex: `porto-2026`)
- **Pessoas:** primeiro nome sem acentos (ex: `carlos`, `maria-joao`)
- **Revistas:** nome único (ex: `imperium`, `aesthis`)
- **Parceiros:** nome sem acentos (ex: `euneiz`, `mpsp`)

### Assets paths

```typescript
// Professores: /images/mestres/{slug}.webp
// Participantes: /images/participantes/{slug}.webp
// Masters: /images/masters/{slug}/hero.webp
// Eventos: /images/eventos/{slug}/hero/hero.webp
// Parceiros: /images/parceiros/{slug}.webp
// Revistas: /images/revistas/{slug}.webp
```
