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
| Animações | Tailwind custom keyframes (`fade-in`, `slide-up`, `slide-down`, `spin-slow`, `marquee`) |
| Vídeos | Cloudinary + VideoBackground component (YouTube e MP4 nativo, com playback rate e fallback image) |
| Upload de arquivos | Formulário de inscrição com upload de documentos (imagem e PDF) |
| Instagram | Embeds de Instagram via `instagram-media` blockquotes + Instagram embed.js |

---

## Arquitetura de Pastas

```
src/
  data/                          ← Dados estáticos organizados por domínio
    types.ts                     ← Tipos compartilhados entre domínios
    paths.ts                     ← Funções de montagem de paths de assets (FONTE ÚNICA)
    institute.ts                 ← Dados institucionais (inclui hero e vídeos)
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
  pessoas/                        ← Assets por pessoa (foto)
    {slug}/
      foto.webp                   ← Foto da pessoa
  masters/                        ← Assets por master
    {slug}/
      hero.webp                   ← Imagem do hero
      about.webp                  ← Imagem "sobre"
      galeria-01.webp...          ← Galeria
      coordinator-banner.webp     ← Banner do coordenador (foto diferente da padrão)
      coordinator.webp            ← Foto do coordenador
      edital.pdf                  ← Edital do programa
      contrato.pdf                ← Contrato de prestação de serviços
  parceiros/                      ← Logos de parceiros (por slug)
    {slug}.webp                   ← ex: facamp.webp, euneiz.webp
  eventos/{slug-da-edicao}/
    hero/hero.webp
    galeria/1.webp, 2.webp...
  revistas/                       ← Capas de revistas
  images/                         ← Assets legados (migração em andamento)
    eventos/
      porto-2026/
        hero/hero.webp
        galeria/1-8.webp
    instituto/
      backgrounds/
        hero.webp
      logos/
        logo_camada_1.png
        logo_camada_2.png
    mestres/                      ← Fotos legadas (migrando para pessoas/{slug}/)
    participantes/                ← Fotos legadas
    revistas/
    logos/

app/
  _sections/                      ← Seções compartilhadas entre páginas (home, instituto, mestrados)
    HeroSection.tsx               ← Hero com vídeo Cloudinary + parallax + stats
    InstituteSection.tsx          ← Seção "Sobre o Instituto" (info + vídeo + logo animado)
    MasterSection.tsx             ← Cards de mestrados (clicáveis, "Saiba mais →")
    CeoSection.tsx                ← Seção da CEO (Rose Magina)
    TeamHighlightsSection.tsx     ← Destaque dos coordenadores por mestrado
    JournalsSection.tsx           ← Seção de revistas/periódicos
    PartnersSection.tsx           ← Seção de parceiros

  admin/                          ← Painel administrativo (placeholder — preparado para API futura)
    masters/
      page.tsx                    ← Listar mestrados
      novo/page.tsx               ← Criar mestrado
      [slug]/page.tsx             ← Editar mestrado
    eventos/
      page.tsx                    ← Listar eventos
      [serieSlug]/[edicaoSlug]/page.tsx  ← Editar evento
    people/
      page.tsx                    ← Listar pessoas
      [slug]/page.tsx             ← Editar pessoa

  api/                            ← Rotas de API (placeholder — preparadas para conexão com banco)
    masters/
      route.ts                    ← GET listar / POST criar
      [slug]/route.ts             ← GET/PUT/DELETE master
    eventos/
      route.ts                    ← GET listar / POST criar
      [serieSlug]/[edicaoSlug]/route.ts  ← GET/PUT/DELETE edição
    people/
      route.ts                    ← GET listar / POST criar
    partners/
      route.ts                    ← GET listar

  contato/                        ← Página de contato e FAQ
    _components/
      ContactHeroSection.tsx      ← Hero da página de contato
      ContactSection.tsx          ← Seção de contato
      FAQSection.tsx              ← Seção de perguntas frequentes

  eventos/                        ← Páginas de eventos
    page.tsx                      ← Lista de eventos
    [serieSlug]/
      page.tsx                    ← Eventos de uma série
      [edicaoSlug]/
        _components/
          AboutCards.tsx           ← Cartão de conteúdo (sobre, instituto) — colocado aqui (só usado por eventos)
          EventSubNav.tsx         ← Sub-navegação do evento
          EventHeroSection.tsx    ← Hero do evento
          EventAboutSection.tsx   ← Seção "Sobre o evento"
          EventProfessorsSection.tsx ← Professores do evento
          EventParticipantsSection.tsx ← Participantes do evento
          EventGallerySection.tsx ← Galeria de fotos do evento
          EventLocationSection.tsx ← Local e mapa do evento
          EventScheduleSection.tsx ← Programação do evento
          EventTestimonialsSection.tsx ← Depoimentos do evento
          ParticipantCard.tsx     ← Card de participante — colocado aqui (só usado por eventos)
        page.tsx                  ← Página da edição
        participantes/
          [personSlug]/page.tsx   ← Detalhe da pessoa

  instituto/                      ← Páginas do instituto
    _components/
      LogoAnimation.tsx           ← Animação do logotipo (logo_camada_1 + logo_camada_2 girando)

  mestrados/
    page.tsx                      ← Lista de mestrados
    docentes/
      page.tsx                    ← Galeria de todos os docentes (cross-master, com filtros e busca)
    [slug]/
      _components/
        EnrollmentModal.tsx       ← Modal de inscrição com formulário completo
        EnrollmentForm.tsx        ← Formulário de inscrição (campos, upload docs, checkboxes) — colocado aqui (só usado por mestrados)
        CustomSelect.tsx          ← Select com busca, portal flutuante — colocado aqui (só usado por mestrados)
        Modal.tsx                 ← Modal reutilizável (Escape fecha, scroll lock) — colocado aqui (só usado por mestrados)
        HeroSection.tsx           ← Hero do mestrado (vídeo + fallback + paused control)
        CurriculumSection.tsx     ← Grade curricular
        DescriptionSection.tsx    ← Descrição do programa (extraído inline do page.tsx)
        CtaSection.tsx            ← Call-to-action (full-width glow, "Vagas limitadas")
        BenefitsSection.tsx       ← Benefícios do programa
        GallerySection.tsx        ← Galeria de imagens
        StatsSection.tsx          ← Estatísticas
        FacultySection.tsx        ← Corpo docente (coordenador banner + grid orientadores + docentes)
        InstagramFeedSection.tsx  ← Seção de embeds Instagram (carrossel integrado)
        MasterPageClient.tsx      ← Wrapper client-side do mestrado
        valores/
          valoresData.ts          ← Dados compartilhados (iconMap, pricingByMaster, masterMeta, locationDescriptions)
          HeroSection.tsx         ← Hero com badge, título, tagline, barra de stats
          WhyChooseSection.tsx    ← "Por que escolher este mestrado?" — grid 2 colunas
          InternationalModulesSection.tsx ← Seções full-width com fotos Unsplash + overlay + border-b
          CertificationSection.tsx ← Certificação + nota de risco + taxa de inscrição
          PricingToggle.tsx       ← Toggle R$/€ com indicador deslizante e ícone ArrowLeftRight
          PricingSection.tsx      ← PricingToggle envolto em layout com glow
      docentes/
        page.tsx                  ← Docentes filtrados por mestrado (busca + filtros de categoria)
      valores/
        page.tsx                  ← Página de valores/preços do mestrado
      page.tsx                    ← Página do mestrado (composição de todas as seções)

  professores/                    ← Páginas de professores
    [personSlug]/
      page.tsx                    ← Perfil do professor

  revistas/                       ← Páginas de revistas
    page.tsx                      ← Lista de revistas
    [slug]/
      _components/
        NormsTabs.tsx             ← Tabs de normas/publicação da revista
      page.tsx                    ← Detalhe da revista

  _shared/
    components/ui/
      VideoBackground.tsx         ← Background de vídeo (YouTube/MP4, fallback, playback rate)
      StatCard.tsx                ← Card de estatística com contagem animada (useCountUp)
      ScrollReveal.tsx            ← Animação de entrada ao scroll (IntersectionObserver)
      Button.tsx                  ← Botão reutilizável
      FacultyCard.tsx             ← Card de professor (3 modos: default/vertical, horizontal, banner)
      InstagramCarousel.tsx       ← Carrossel de embeds Instagram reutilizável
      InstagramIcon.tsx           ← Ícone do Instagram
      PersonProfileContent.tsx    ← Conteúdo do perfil de pessoa (sidebar + main + Instagram carousel)
      MasterCard.tsx              ← Card de mestrado
      Pill.tsx                    ← Badge/pill reutilizável
      FlagFind.tsx                ← Bandeira por código de país
      Navbar.tsx                  ← Navegação principal (mega-menu)
      Footer.tsx                  ← Rodapé
      WhatsAppButton.tsx          ← Botão flutuante do WhatsApp
      SocialIconButton.tsx        ← Botão de rede social
      ImageWithFallback.tsx       ← Imagem com fallback (trata erro de carregamento)
    hooks/
      useAnchorNavigation.ts      ← Navegação por âncoras
      useParallax.ts              ← Efeito parallax
      useCountUp.ts               ← Animação de contagem
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
  aboutVideo?: string;                  // URL do vídeo do coordenador (Cloudinary)
  tagline?: string;                     // Subtítulo resumido (ex: "3.000h · 120 ECTS · Dupla Titulação")
  videoUrl?: string;                    // URL do YouTube para vídeo de apresentação
  totalHours?: string;                  // Carga horária total (ex: "3.000")
  ects?: string;                        // Créditos ECTS (ex: "120")
  locations?: string[];                 // Países onde é oferecido (ex: ["Brasil", "Portugal", "Espanha"])
  certification?: string;              // Descrição da certificação/dupla titulação
  benefits?: Benefit[];                // Lista de benefícios do programa
  curriculumModules?: CurriculumModule[];  // Grade curricular
  galleryImages?: GalleryImage[];          // Galeria de imagens
  editalUrl?: string;                      // URL do edital
  contratoUrl?: string;                    // URL do contrato
  instagramUrl?: string;                   // URL do perfil Instagram do mestrado
  instagramEmbeds?: string[];              // URLs de embeds Instagram (reels/posts)
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
  href?: string;                        // Link externo (opcional)
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

// 3. Assets em public/masters/novo-master/
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

// 3. Assets em public/masters/{slug}/ ou public/eventos/{slug}/
//    hero/hero.webp, galeria/1-8.webp...

// 4. Pessoas: adicionar slugs em professors[] e participants[]
//    (as pessoas já devem existir em src/data/people.ts)
```

---

### 6. People

**Arquivo:** `src/data/people.ts`

```typescript
interface Person extends Partial<BaseEntity> {
  slug: string;                   // Identificador único (ex: "carlos")
  name: string;                   // Nome completo
  role: string;                   // Cargo/função (ex: "Catedrático de Direito Penal")
  description?: string;           // Biografia curta
  email?: string;                 // Email
  city?: string;                  // Cidade
  country?: string;               // País
  countryCode?: string;           // Código do país (ex: "es", "pt", "br")
  curriculum?: string;            // Currículo completo (texto longo)
  areas?: string[];               // Áreas de atuação (ex: ["Direito Penal Econômico"])
  social?: {
    instagram?: string;           // URL do Instagram
    linkedin?: string;            // URL do LinkedIn
    twitter?: string;             // URL do Twitter/X
    lattes?: string;              // URL do Lattes
  };
  contact?: string;               // Informação de contato adicional
  facultyOf?: string[];           // Slugs de mestrados em que é corpo docente
  instagramEmbeds?: string[];     // URLs de embeds Instagram (reels/posts) para carrossel
}
```

**Regras de uso:**
- `facultyOf` vincula uma pessoa como corpo docente de mestrados (slugs)
- Professores são vinculados a eventos via `EventEdition.professors[]` (slugs)
- Participantes são vinculados a eventos via `EventEdition.participants[]` (slugs)
- A função `getRoleCategory(role)` categoriza a pessoa em: `coordenador`, `orientador`, ou `docente`
- A função `getFacultyByMaster(masterSlug)` retorna todas as pessoas com `facultyOf` contendo o slug
- Fotos: via `personPhotoPath(slug)` → `/pessoas/{slug}/foto.webp`

---

### 7. Partner

**Arquivo:** `src/data/partners.ts`

```typescript
interface Partner {
  name: string;            // Nome do parceiro
  logo: string;            // Caminho do logo (via partnerLogoPath)
  url?: string;            // Site do parceiro (opcional)
  category?: string;       // Categoria (ex: "Universidade", "Associação", "Faculdade")
  country?: string;        // País
  countryCode?: string;    // Código do país (ex: "br", "es")
}
```

**Parceiros atuais:** ADEPPE, AMPPE, ASAMP/TO, EUNEIZ, FAEPOL, FACAMP, Faculdade FGE, Faculdade Van Gogh, MPSP, MUST University, OAB Tatuapé, SINDPESP.

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

### 10. Path Functions

**Arquivo:** `src/data/paths.ts`

Funções puras que montam caminhos de assets em `/public`. **Nenhum componente ou arquivo de dados deve escrever um caminho de imagem ou documento "na mão"** — sempre usar uma destas funções.

```typescript
/** Foto de uma pessoa */
function personPhotoPath(personSlug: string): string
// → /pessoas/{slug}/foto.webp

/** Assets de uma edição de evento (hero, galeria) */
function eventAssetPath(seriesSlug: string, editionSlug: string, ...parts: string[]): string
// → /eventos/{seriesSlug}/{editionSlug}/{parts}

/** Assets de um master (hero, about, galeria, edital, contrato) */
function masterAssetPath(masterSlug: string, file: string): string
// → /masters/{masterSlug}/{file}

/** Banner do coordenador */
function masterBannerPath(masterSlug: string, file: string): string
// → /masters/{masterSlug}/{file}

/** Logo de um parceiro */
function partnerLogoPath(partnerSlug: string): string
// → /parceiros/{slug}.webp

/** Assets de uma revista */
function journalAssetPath(journalSlug: string, file: string): string
// → /revistas/{journalSlug}/{file}
```

---

### 11. Role Categories (People)

**Arquivo:** `src/data/people.ts`

```typescript
type RoleCategory = "coordenador" | "orientador" | "docente";

const ROLE_CATEGORY_LABEL: Record<RoleCategory, string> = {
  coordenador: "Coordenador",
  orientador: "Orientador",
  docente: "Professor",
};

/** Heurística baseada no texto livre de `role` */
function getRoleCategory(role: string): RoleCategory {
  const lower = role.toLowerCase();
  if (lower.includes("coordenador") || lower.includes("coordenadora"))
    return "coordenador";
  if (lower.includes("orientador") || lower.includes("orientadora"))
    return "orientador";
  return "docente";
}
```

**Nota:** Atualmente, para o mestrado de Harmonização Orofacial, Paulo Moraes é o único coordenador. Todos os demais professores foram reclassificados como "Orientador(a)" ou "Docente" (anteriormente marcados como "Coordenador(a)").

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

Cada entidade que possui assets visuais (imagens, vídeos) tem sua própria pasta nomeada pelo `slug`. Usar sempre as funções de `src/data/paths.ts` para montar caminhos.

### Estrutura atual

```
public/
  pessoas/{slug}/
    foto.webp                   ← Foto da pessoa

  masters/{slug}/
    hero.webp                   ← Imagem do hero
    about.webp                  ← Imagem "sobre"
    galeria-01.webp...          ← Galeria
    coordinator-banner.webp     ← Banner do coordenador
    coordinator.webp            ← Foto do coordenador

  parceiros/{slug}.webp         ← Logo do parceiro (facamp.webp, euneiz.webp...)

  eventos/{seriesSlug}/{editionSlug}/
    hero/hero.webp
    galeria/1.webp, 2.webp...

  revistas/{slug}/
    capa.webp
    logo.webp
```

### Mapeamento de paths

| Entidade | Slug | Path dos assets |
|----------|------|----------------|
| Master | `direito-penal-economico` | `masters/direito-penal-economico/` |
| Master | `harmonizacao-orofacial` | `masters/harmonizacao-orofacial/` |
| Event | `porto-2026` | `eventos/direito-penal-economico/porto-2026/` |
| Pessoa | `carlos-martinez-bujan-perez` | `pessoas/carlos-martinez-bujan-perez/` |
| Parceiro | `facamp` | `parceiros/facamp.webp` |
| Revista | `imperium` | `revistas/imperium/` |

### Vídeos

Todos em `public/videos/`. Referenciados diretamente nos componentes:

```tsx
<VideoBackground videoSrc="/videos/hero-instituto.mp4" />
```

---

## Rotas da Aplicação

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | SSG | Home (Instituto) |
| `/instituto` | SSG | Página institucional |
| `/mestrados` | SSG | Lista de mestrados |
| `/mestrados/[slug]` | SSG | Detalhe do mestrado |
| `/mestrados/[slug]/valores` | SSG | Página de valores/preços do mestrado |
| `/mestrados/[slug]/docentes` | CSR | Docentes filtrados por mestrado (com filtros e busca) |
| `/mestrados/docentes` | CSR | Galeria de todos os docentes (cross-master, com filtros e busca) |
| `/professores/[personSlug]` | SSG | Perfil do professor |
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

**Legenda:** SSG = Static Site Generation, SSR = Server-Side Rendering, CSR = Client-Side Rendering, API = API Route

---

## Página de Valores (`/mestrados/[slug]/valores`)

Página dedicada a exibir preços, condições de pagamento, certificação e módulos internacionais de cada mestrado.

### Estrutura de componentes

```
app/mestrados/[slug]/_components/valores/
  valoresData.ts                  ← Dados compartilhados
  HeroSection.tsx                 ← Hero com badge (ex: "Turma 2025/2026"), título, tagline, stats bar
  InternationalModulesSection.tsx ← Módulos presenciais com fotos Unsplash + overlay
  CertificationSection.tsx        ← Certificação, nota de risco cambial, taxa de inscrição
  PricingToggle.tsx               ← Toggle R$/€ com indicador deslizante e ícone ArrowLeftRight
  PricingSection.tsx              ← PricingToggle com glow background
  WhyChooseSection.tsx            ← Grid 2 colunas de benefícios ("Por que escolher este mestrado?")
```

### Dados compartilhados (`valoresData.ts`)

```typescript
// Ícones para benefícios (mapeamento nome → componente lucide-react)
const iconMap: Record<string, any> = { Clock, Globe, GraduationCap, ... };

// Descriptions de cada localização por mestrado
const locationDescriptions: Record<string, Record<string, string>> = {
  "direito-penal-economico": {
    Brasil: "Sede principal com aulas, pesquisa e produção científica",
    Portugal: "Contato direto com o sistema jurídico europeu",
    Espanha: "Módulo internacional com experiência em diferentes sistemas jurídicos",
  },
  // ...
};

// Dados de preço por mestrado
const pricingByMaster: Record<string, PricingData> = {
  "direito-penal-economico": {
    basePrice: "€16.150",
    discount: "Até 50% de desconto para últimas vagas",
    registrationFee: "R$ 1.450,00",
    // ...
  },
};

// Meta por mestrado (subtitle = badge, tagline = frase destaque)
const masterMeta: Record<string, { tagline: string; subtitle: string }> = { ... };
```

### Comportamento

- Se `pricingByMaster[slug]` existir, exibe o `PricingToggle` (via `PricingSection`)
- Se não existir (ex: HOF), exibe "Informações sobre valores e condições de pagamento serão disponibilizadas em breve."
- `InternationalModulesSection` usa fotos Unsplash como background com overlay escuro gradiente e separadores `border-b`

---

## Componentes Compartilhados

### Componentes globalmente reutilizáveis (`app/_shared/components/ui/`)

Estes componentes são usados por **múltiplas seções/rotas** e permanecem em `_shared/`:

- `VideoBackground.tsx` — Background de vídeo (YouTube/MP4, fallback, playback rate)
- `StatCard.tsx` — Card de estatística com contagem animada (useCountUp)
- `ScrollReveal.tsx` — Animação de entrada ao scroll (IntersectionObserver)
- `Button.tsx` — Botão reutilizável
- `FacultyCard.tsx` — Card de professor (3 modos: default/vertical, horizontal, banner)
- `InstagramCarousel.tsx` — Carrossel de embeds Instagram reutilizável
- `InstagramIcon.tsx` — Ícone do Instagram
- `PersonProfileContent.tsx` — Conteúdo do perfil de pessoa (sidebar + main + Instagram carousel)
- `MasterCard.tsx` — Card de mestrado
- `Pill.tsx` — Badge/pill reutilizável
- `FlagFind.tsx` — Bandeira por código de país
- `Navbar.tsx` — Navegação principal (mega-menu)
- `Footer.tsx` — Rodapé
- `WhatsAppButton.tsx` — Botão flutuante do WhatsApp
- `SocialIconButton.tsx` — Botão de rede social
- `ImageWithFallback.tsx` — Imagem com fallback (trata erro de carregamento)

### Seções compartilhadas entre páginas (`app/_sections/`)

Componentes de seção-level usados por **múltiplas rotas** (home, instituto, mestrados):

- `HeroSection.tsx` — Hero com vídeo Cloudinary + parallax + stats
- `InstituteSection.tsx` — Seção "Sobre o Instituto" (info + vídeo + logo animado)
- `MasterSection.tsx` — Cards de mestrados (clicáveis, "Saiba mais →")
- `CeoSection.tsx` — Seção da CEO (Rose Magina)
- `TeamHighlightsSection.tsx` — Destaque dos coordenadores por mestrado
- `JournalsSection.tsx` — Seção de revistas/periódicos
- `PartnersSection.tsx` — Seção de parceiros

**Consumidores:** `app/page.tsx` (home), `app/instituto/page.tsx`, `app/mestrados/page.tsx`

### Componentes colocalizados por rota (`app/{route}/_components/`)

Componentes usados **apenas por uma rota** ficam colocalizados com ela:

- `app/contato/_components/` — ContactHeroSection, ContactSection, FAQSection
- `app/eventos/[serieSlug]/[edicaoSlug]/_components/` — EventHeroSection, EventAboutSection, EventProfessorsSection, EventParticipantsSection, EventGallerySection, EventLocationSection, EventScheduleSection, EventTestimonialsSection, EventSubNav, AboutCards, ParticipantCard
- `app/mestrados/[slug]/_components/` — EnrollmentModal, EnrollmentForm, CustomSelect, Modal, HeroSection, CurriculumSection, DescriptionSection, CtaSection, BenefitsSection, GallerySection, StatsSection, FacultySection, InstagramFeedSection, MasterPageClient
- `app/mestrados/[slug]/_components/valores/` — HeroSection, WhyChooseSection, InternationalModulesSection, CertificationSection, PricingToggle, PricingSection, valoresData
- `app/instituto/_components/` — LogoAnimation
- `app/revistas/[slug]/_components/` — NormsTabs

### FacultyCard

Card de professor com **três modos de exibição**:

```tsx
// Modo padrão (vertical) — aspect 3/4, foto + info sobreposta
<FacultyCard person={person} photoSrc={personPhotoPath(person.slug)} />

// Modo horizontal — inline, foto circular + nome + seta
<FacultyCard person={person} photoSrc={...} horizontal />

// Modo banner — foto full-bleed como background, info no rodapé
<FacultyCard person={person} photoSrc={photoSrc} banner bannerPhotoSrc={bannerSrc} />
```

**Props:**
- `person`: `{ slug, name, role, description?, areas?, social? }`
- `photoSrc`: caminho via `personPhotoPath()`
- `showPlaceholder`: força placeholder sem tentar carregar foto
- `horizontal`: layout horizontal compacto
- `banner`: layout banner full-width com background image
- `bannerPhotoSrc`: foto de background alternativa (usado para coordinator-banner.webp)

### InstagramCarousel

Carrossel reutilizável de embeds Instagram. Injeta o script `instagram/embed.js` uma única vez e renderiza os embeds em cards com snap scroll.

```tsx
<InstagramCarousel
  urls={[
    "https://www.instagram.com/reel/ABC123/",
    "https://www.instagram.com/p/XYZ789/",
  ]}
/>
```

**Props:**
- `urls`: array de URLs de posts/reels do Instagram
- `className?`: classes CSS adicionais

### PersonProfileContent

Componente de perfil de pessoa com sidebar + conteúdo principal + carrossel Instagram.

```tsx
<PersonProfileContent
  person={person}
  photoSrc={personPhotoPath(person.slug)}
  backHref="/mestrados"
  backLabel="Voltar"
  extraSections={<InstagramCarousel urls={person.instagramEmbeds} />}
/>
```

Inclui botão "Imprimir página" que usa `window.print()`. CSS `@media print` esconde header, nav, footer e botão do WhatsApp ao imprimir.

---

## Componentes de Mestrado (`app/mestrados/[slug]/_components/`)

### CtaSection

Call-to-action redesigned com full-width radial glow (sem card), badge "Vagas limitadas", e dois CTAs:

```tsx
<CtaSection
  masterSlug="mestrado-direito-penal-economico"
  title="Garanta sua vaga na Formação Internacional"
  subtitle="Invista na sua carreira com um mestrado reconhecido internacionalmente"
/>
```

- **Primary button** → "Ver valores" → `/mestrados/{slug}/valores`
- **Secondary button** → "Fale conosco" → `/contato`
- Recebe `masterSlug` como prop necessária

### PricingToggle

Toggle de preços R$/€ com indicador deslizante:

- Dois botões `w-32 justify-center` (R$ Reais / € Euros)
- Ícone `ArrowLeftRight` flutuante entre os botões (círculo `bg-background border border-gold/30 z-30`)
- Indicador deslizante `bg-gold rounded-2xl` com `transition-transform duration-300`
- Container de preço com `min-h-[200px]` para evitar pulo de layout
- "Pagamento Pontual" e "Taxa de Inscrição" ambos `max-w-sm mx-auto`

### FacultySection

Grid de corpo docente responsivo com seções por categoria:

- **Coordenador(es)**: `FacultyCard` em modo `banner` com `coordinator-banner.webp`
- **Orientadores**: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`
- **Corpo Docente**: mesmo grid responsivo
- Defaults: `maxCoordinators=1`, `maxOrientadores=4`, `maxDocentes=4`
- Usa `getRoleCategory()` para filtrar pessoas por tipo

### InstagramFeedSection

Seção de feed Instagram no mestrado, usando `InstagramCarousel`:

```tsx
<InstagramFeedSection
  instagramUrl={master.instagramUrl}
  masterTitle={master.title}
  instagramEmbeds={master.instagramEmbeds}
/>
```

---

## Padrões de Design

### Tema

- Dark theme com acentos dourados
- Gold: `--gold: #e7b643` (via CSS variable, com variações `--gold-light`, `--gold-dark`, `--gold-rgb`)
- Background: `--background`, `--surface`, `--surface-hover`, `--border`

### Animações

| Animação | Tailwind class | Keyframe |
|----------|---------------|----------|
| Fade in | `animate-fade-in` | `fadeIn 0.6s ease-out forwards` |
| Slide up | `animate-slide-up` | `slideUp 0.6s ease-out forwards` |
| Slide down | `animate-slide-down` | `slideDown 0.3s ease-out forwards` |
| Spin slow | `animate-spin-slow` | `spin-slow 15s linear infinite` |
| Marquee | `animate-marquee` | `marquee 40s linear infinite` |

### Padrões visuais

- **Radial glows**: `bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_55%)] opacity-[0.08]`
- **Section separators**: `border-t border-border`
- **Gold gradient**: `gradient-gold` (linear-gradient 135deg)
- **Headers**: `header-text` (classe para textos de cabeçalho)
- **Containers**: `section-container` (padding horizontal responsivo)
- **Pills/badges**: `border border-gold/30 bg-gold/5 px-4 py-1.5 rounded-full text-gold`
- **ScrollReveal**: `IntersectionObserver` com delays escalonados (`delay={index * 40}`)

---

## Padrão para Adicionar Conteúdo

### Novo Mestrado

```bash
# 1. Arquivo de dados
src/data/masters/novo-master.ts     # + export const novoMaster: Master = { ... }
src/data/masters/index.ts           # + import + adicionar ao array

# 2. Assets
public/masters/novo-master/
  hero.webp
  about.webp
  galeria-01.webp ...
  coordinator-banner.webp
  coordinator.webp

# 3. Professores (em src/data/people.ts)
# Adicionar facultyOf: ["novo-master"] nos professores relevantes
# Usar getRoleCategory() para classificar como coordenador/orientador/docente
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
public/eventos/nova-serie/nova-edicao/
  hero/
  galeria/
```

### Nova Revista

```bash
# 1. Arquivo de dados
src/data/revistas/nova-revista.ts    # + export const novaRevista: Journal = { ... }
src/data/revistas/index.ts          # + import + adicionar ao array

# 2. Assets
public/revistas/nova-revista/
  capa.webp
  logo.webp
```

### Nova Pessoa

```bash
# Adicionar ao array em src/data/people.ts
# Adicionar facultyOf: ["direito-penal-economico"] se for docente
# Adicionar instagramEmbeds: ["https://www.instagram.com/reel/..."] se houver

# Foto em public/pessoas/{slug}/foto.webp
```

### Novo Parceiro

```bash
# Adicionar ao array em src/data/partners.ts usando partnerLogoPath("slug")
# Logo em public/parceiros/{slug}.webp
```

---

## Convenções de Código

### Imports

```typescript
// Preferir imports do barrel index.ts
import { masters } from "@/src/data";

// OU do service layer (preparado para API futura)
import { getMasters } from "@/src/services";

// Funções de paths — sempre usar para assets
import { personPhotoPath, masterAssetPath } from "@/src/data/paths";

// Funções de people — usar para queries de faculty
import { getFacultyByMaster, getRoleCategory } from "@/src/data/people";

// Evitar imports de arquivos específicos
// ❌ import { masters } from "@/src/data/masters/masters";
```

### Slugs

- **Masters:** prefixo `mestrado-` (ex: `mestrado-direito-penal-economico`)
- **Masters (para `facultyOf` e paths):** sem prefixo (ex: `direito-penal-economico`)
- **Eventos (série):** nome curto (ex: `direito-penal-economico`)
- **Eventos (edição):** `{cidade}-{ano}` (ex: `porto-2026`)
- **Pessoas:** primeiro nome sem acentos (ex: `carlos`, `maria-joao`)
- **Revistas:** nome único (ex: `imperium`, `aesthis`)
- **Parceiros:** nome sem acentos (ex: `euneiz`, `facamp`)

### Assets paths

```typescript
// Usar SEMPRE as funções de paths.ts:
import { personPhotoPath, masterAssetPath, partnerLogoPath, masterBannerPath } from "@/src/data/paths";

// Pessoa:  personPhotoPath("carlos") → /pessoas/carlos/foto.webp
// Master:   masterAssetPath("direito-penal-economico", "hero.webp") → /masters/direito-penal-economico/hero.webp
// Banner:   masterBannerPath("direito-penal-economico", "coordinator-banner.webp")
// Parceiro: partnerLogoPath("facamp") → /parceiros/facamp.webp
```
