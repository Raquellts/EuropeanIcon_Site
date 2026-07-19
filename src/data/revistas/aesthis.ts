import type { BaseEntity } from "../types";
import { journalAssetPath } from "../paths";
import type { NormsSection } from "./imperium";

export interface Journal extends Partial<BaseEntity> {
  slug: string;
  name: string;
  shortName: string;
  subject: string;
  description: string;
  url: string;
  logo: string;
  icon: string;
  coverImage: string;
  heroVideo?: string;
  logoStyle?: Record<string, string>;
  iconStyle?: Record<string, string>;
  norms?: NormsSection[];
}

export const aesthis: Journal = {
  slug: "aesthis",
  name: "Aesthis - European Journal of Aesthetic & Regenerative Medicine",
  shortName: "Aesthis",
  subject: "Harmonização Orofacial",
  description:
    "A Aesthis é um periódico científico de acesso aberto, que se dedica à divulgação do conhecimento nas áreas da saúde, com ênfase em medicina estética, medicina regenerativa, harmonização orofacial e campos correlatos. Nossa missão é promover a divulgação de evidências clínicas, avanços técnicos, inovações tecnológicas e pesquisas aplicadas que contribuam para a prática profissional qualificada e para o desenvolvimento científico dessas áreas.",
  url: "https://journals.institutoeuropean.com/aesthis",
  logo: journalAssetPath("aesthis", "logo.webp"),
  icon: journalAssetPath("aesthis", "icon.webp"),
  coverImage: journalAssetPath("aesthis", "capa.webp"),
  heroVideo: "https://res.cloudinary.com/falvay2b/video/upload/v1784482365/aesthis_fzado8.mp4",
  iconStyle: {
    transform: "scale(1.4)",
  },
  norms: [
    {
      id: "sobre",
      label: "Sobre a Revista",
      groups: [
        {
          title: "Apresentação",
          items: [
            {
              text: "A Aesthis - European Journal of Aesthetic & Regenerative Medicine é um periódico científico de acesso aberto dedicado à divulgação do conhecimento nas áreas da saúde, com ênfase em medicina estética, medicina regenerativa, harmonização orofacial e campos correlatos.",
            },
            {
              text: "Nossa missão é promover a divulgação de evidências clínicas, avanços técnicos, inovações tecnológicas e pesquisas aplicadas que contribuam para a prática profissional qualificada e para o desenvolvimento científico dessas áreas.",
            },
          ],
        },
      ],
    },
    {
      id: "modalidades",
      label: "Modalidades de Trabalho",
      groups: [
        {
          title: "Artigo Científico Original",
          items: [
            {
              text: "O artigo científico original deve conter, obrigatoriamente, as seguintes seções:",
            },
            {
              label: "Estrutura",
              text: "Título / Title, Resumo e Palavras-chave, Abstract e Keywords, Introdução, Materiais e métodos, Resultados, Discussão, Conclusão, Referências, Autor responsável, Agradecimentos, Anexos ou pendências.",
            },
            {
              label: "Autor responsável",
              text: "Nome, E-mail, Telefone.",
            },
          ],
        },
        {
          title: "Revisão de Literatura",
          items: [
            {
              text: "Deve apresentar análise crítica e sistemática, com metodologia explicitada e discussão temática.",
            },
            {
              label: "Estrutura",
              text: "Título / Title, Resumo e Palavras-chave, Abstract e Keywords, Introdução, Metodologia da busca, Bases de dados utilizadas, Descritores, Critérios de inclusão e exclusão, Revisão de literatura, Discussão (organizada por tópicos temáticos), Considerações finais ou conclusão, Referências, Autor responsável (Nome, E-mail, Telefone).",
            },
          ],
        },
        {
          title: "Relato de Caso",
          items: [
            {
              text: "Descrição detalhada de casos clínicos relevantes, com discussão comparativa à literatura.",
            },
            {
              label: "Estrutura",
              text: "Título / Title, Resumo e Palavras-chave, Abstract e Keywords, Introdução, Relato de caso (Histórico, Diagnóstico, Conduta, Evolução clínica), Discussão (Comparação com a literatura, Principais aprendizados), Conclusão (Lições clínicas, Implicações para a prática), Referências, Anexos (Autorização do paciente, Parecer do Comitê de Ética quando aplicável).",
            },
          ],
        },
      ],
    },
    {
      id: "formatacao",
      label: "Formatação",
      groups: [
        {
          title: "Configuração do Documento",
          items: [
            { label: "Papel", text: "A4." },
            { label: "Margens", text: "Superior e esquerda: 3 cm. Inferior e direita: 2 cm." },
            { label: "Paginação", text: "Algarismos arábicos, rodapé, alinhada à direita." },
          ],
        },
        {
          title: "Formatação do Texto",
          items: [
            { label: "Fonte", text: "Arial, tamanho 12." },
            { label: "Espaçamento", text: "Entre linhas: 1,5." },
            { label: "Alinhamento", text: "Justificado." },
            { label: "Parágrafos", text: "Recuo especial primeira linha 1,27." },
            {
              label: "Títulos das seções",
              text: "PRIMÁRIA: Caixa alta, negrito. SECUNDÁRIA: Caixa alta sem negrito. TERCIÁRIA: Caixa baixa, negrito.",
            },
          ],
        },
        {
          title: "Primeira Página",
          items: [
            {
              text: "A primeira página deve conter, obrigatoriamente: cabeçalho com marca da instituição, título do trabalho, nome do(s) autor(es), titulação acadêmica, e-mail, ORCID, resumo e abstract.",
            },
            {
              text: "O texto do trabalho deve iniciar-se exclusivamente a partir da segunda página. Após a aprovação do artigo pelo orientador para submissão à revista, a primeira página — contendo dados de autoria — deverá ser encaminhada em arquivo separado do corpo do texto, com a finalidade de assegurar a avaliação por pares no sistema duplo-cego.",
            },
          ],
        },
        {
          title: "Resumo e Palavras-chave",
          items: [
            { label: "Extensão", text: "Máximo de 250 palavras." },
            { label: "Palavras-chave/Keywords", text: "De 3 a 5 termos." },
            {
              label: "Descritores de assunto",
              text: "O uso de descritores padronizados é essencial para a correta indexação, recuperação e visibilidade dos trabalhos científicos. Para a área de Saúde, recomendamos o uso dos Descritores em Ciências da Saúde (DeCS Finder IA).",
            },
          ],
        },
        {
          title: "Tabelas e Figuras",
          items: [
            { label: "Quantidade", text: "Máximo de 6 ilustrações por trabalho." },
            { label: "Fonte", text: "Arial, tamanho 10." },
            { label: "Numeração", text: "Sequencial, inseridas no texto conforme ordem de aparecimento." },
            {
              label: "Quadro vs Tabela",
              text: "Quadro é elemento gráfico fechado por linhas em todos os seus contornos, utilizado para organizar informações qualitativas ou textuais. Tabela é utilizada para apresentação de dados quantitativos e não deve ser fechada por linhas verticais.",
            },
          ],
        },
      ],
    },
    {
      id: "citacoes",
      label: "Citações e Referências",
      groups: [
        {
          title: "Diretrizes Gerais",
          items: [
            {
              highlight: true,
              text: "A revista adota exclusivamente a Norma Vancouver, de uso obrigatório para citações no texto, lista de referências e trabalhos de todas as áreas do conhecimento.",
            },
          ],
        },
        {
          title: "Citações no Texto",
          items: [
            { label: "Sistema", text: "Numérico." },
            { label: "Numeração", text: "Consecutiva conforme ordem de aparecimento. Não deve ser alterada em citações repetidas." },
            { label: "Formatação", text: "Algarismos arábicos sobrescritos. Exemplo: \"O processo inflamatório é caracterizado por alterações vasculares específicas ¹.\"" },
          ],
        },
        {
          title: "Referências",
          items: [
            {
              text: "As referências deverão ser apresentadas obrigatoriamente em sistema numérico, disposto em ordem crescente e em correspondência exata à ordem de citação no texto, incluindo exclusivamente as fontes efetivamente citadas no manuscrito.",
            },
            {
              text: "A normalização das referências deverá seguir rigorosamente a Norma Vancouver, aplicável a: artigos de periódicos, livros, capítulos de livros, trabalhos acadêmicos e documentos eletrônicos.",
            },
          ],
        },
      ],
    },
    {
      id: "etica",
      label: "Ética e Plágio",
      groups: [
        {
          title: "Princípios Éticos",
          items: [
            {
              highlight: true,
              text: "A revista adota integralmente os princípios e diretrizes do Committee on Publication Ethics (COPE).",
            },
            {
              highlight: true,
              text: "O plágio, em qualquer de suas formas, constitui infração ética grave e está sujeito às sanções editoriais e institucionais cabíveis.",
            },
            {
              text: "A revista AESTHIS - European Journal of Aesthetic & Regenerative Medicine compromete-se com a integridade, a transparência e a responsabilidade na publicação científica.",
            },
          ],
        },
      ],
    },
  ],
};
