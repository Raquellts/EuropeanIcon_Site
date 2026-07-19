import type { BaseEntity } from "../types";
import { journalAssetPath } from "../paths";

export interface NormsItem {
  label?: string;
  text: string;
  highlight?: boolean;
}

export interface NormsGroup {
  title: string;
  items: NormsItem[];
}

export interface NormsSection {
  id: string;
  label: string;
  groups: NormsGroup[];
}

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

export const imperium: Journal = {
  slug: "imperium",
  name: "Imperium - European Journal of Economic Criminal Law",
  shortName: "Imperium",
  subject: "Direito Penal Econômico",
  description:
    "A Imperium é um periódico científico internacional e interdisciplinar focado no Direito Penal Econômico, abordando temas como responsabilidade penal de pessoas jurídicas, crimes financeiros e compliance. A revista publica trabalhos acadêmicos originais submetidos a dupla revisão cega, visando o desenvolvimento teórico e empírico da área para um público de pesquisadores e profissionais do Direito.",
  url: "https://journals.institutoeuropean.com/imperium",
  logo: journalAssetPath("imperium", "logo.webp"),
  icon: journalAssetPath("imperium", "icon.webp"),
  coverImage: journalAssetPath("imperium", "capa.webp"),
  heroVideo: "https://res.cloudinary.com/falvay2b/video/upload/v1784482358/imperium_imh8tu.mp4",
  logoStyle: {
    transform: "scale(1.4)",
    marginRight: "2.5rem",
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
              text: "A Imperium - European Journal of Economic Criminal Law é um periódico científico da área do Direito, dedicado ao estudo do Direito Penal Econômico em perspectiva comparada, internacional e interdisciplinar.",
            },
            {
              text: "A revista publica trabalhos acadêmicos originais que contribuam para o desenvolvimento teórico, dogmático e empírico do Direito Penal aplicado às atividades econômicas. Seu escopo abrange, entre outros temas, a responsabilidade penal de pessoas jurídicas, crimes financeiros, corrupção, lavagem de capitais, crimes tributários, abusos de mercado, programas de compliance e mecanismos de enforcement penal, bem como as interações entre Direito Penal e regulação econômica.",
            },
            {
              text: "O periódico valoriza contribuições que examinem criticamente os fundamentos éticos, a legitimidade e a eficácia da intervenção penal na esfera econômica, incluindo o papel do Direito Penal diante dos riscos complexos associados à globalização, à economia digital e à inovação tecnológica.",
            },
            {
              text: "A revista adota abordagem interdisciplinar, incentivando o diálogo com áreas como Economia, Criminologia, Ciência Política e Governança, desde que preservada a centralidade da análise jurídico-penal e sua contribuição para o avanço do Direito Penal Econômico.",
            },
            {
              text: "Seu público-alvo é composto por pesquisadores, docentes, profissionais do Direito, formuladores de políticas públicas e instituições internacionais. O periódico adota avaliação por pares em regime de dupla revisão cega, comprometendo-se com elevados padrões de rigor científico, internacionalização e integridade na pesquisa.",
            },
          ],
        },
      ],
    },
    {
      id: "normas",
      label: "Normas de Submissão",
      groups: [
        {
          title: "Elementos Formais Obrigatórios",
          items: [
            {
              label: "Editor",
              text: "Recomenda-se a utilização do Microsoft Word (formatos doc.). Caso seja usado outro processador de texto, os arquivos devem ser gravados no formato RTF.",
            },
            {
              label: "Extensão",
              text: "Os trabalhos devem ter entre 15 e 40 páginas, com tolerância de duas para mais ou duas para menos.",
            },
            {
              label: "Parágrafos",
              text: "Os parágrafos devem ser justificados. Não devem ser usados recuos, deslocamentos, nem espaçamentos antes ou depois.",
            },
            {
              label: "Fonte e corpo",
              text: "Fonte: Times New Roman, Corpo: 12.",
            },
            {
              label: "Entrelinha",
              text: "Parágrafos devem ter entrelinha: 1,5.",
            },
            {
              label: "Margens",
              text: "Margens superior e inferior: 2,0 cm. Margens laterais: 3,0 cm.",
            },
            {
              label: "Papel",
              text: "Tamanho do papel deve ser A4.",
            },
          ],
        },
        {
          title: "Idioma e Elementos Pré-textuais",
          items: [
            {
              text: "Os trabalhos podem ser escritos em português, espanhol, inglês, francês, alemão ou italiano. Em qualquer caso, deverão ser indicados, no idioma do artigo e em inglês, o título do trabalho, o respectivo resumo (até 200 palavras) e cinco palavras-chave.",
            },
            {
              text: "Os artigos deverão ser precedidos dos seguintes elementos: título do trabalho, nome do autor (ou autores), qualificação (situação acadêmica, títulos com ano de obtenção, instituições às quais pertença e a principal atividade exercida), telefone, e-mail, link para o currículo (Vinculação Institucional) e número do ORCID.",
            },
            {
              highlight: true,
              text: "ORCID é um identificador digital único, gratuito e persistente (um código de 16 dígitos) que distingue pesquisadores e acadêmicos, eliminando a ambiguidade de nomes semelhantes em publicações. Acesse https://orcid.org/register para obter gratuitamente.",
            },
          ],
        },
        {
          title: "Sumário e Estrutura",
          items: [
            {
              text: "Os artigos devem possuir os seguintes elementos em inglês e idioma nativo do autor/a: título/title, resumo/abstract, palavras-chave/keywords.",
            },
            {
              text: "A numeração do sumário deverá obrigatoriamente ser feita em algarismos arábicos. É vedada a numeração dos itens em algarismos romanos. No sumário deverão constar os itens com até três dígitos.",
            },
            {
              text: "Os artigos deverão conter itens específicos para introdução, considerações finais (conclusões) e referências.",
            },
          ],
        },
        {
          title: "Formatação de Citações",
          items: [
            {
              label: "Referências",
              text: "As Referências deverão seguir o padrão da norma NBR 6023/2025 (ABNT). As referências bibliográficas completas deverão constar apenas na lista de REFERÊNCIAS, ao final do texto, não em notas de rodapé.",
            },
            {
              label: "Notas de rodapé",
              text: "Em notas de rodapé não se inclui referência completa, devendo-se utilizar do modelo autor/data/página. Esse mesmo modelo deverá ser utilizado no corpo do texto.",
            },
            {
              label: "Língua estrangeira",
              text: "Palavras em língua estrangeira devem constar com uso de itálico. Jamais devem ser usados negrito ou sublinhado.",
            },
            {
              label: "Citações diretas (até 3 linhas)",
              text: "Citações diretas de até três linhas devem estar contidas entre aspas duplas, no corpo do parágrafo a que se referem. Exemplo: Pereira, 2016, p. 45 (em rodapé); e (Pereira, 2016, p. 45) (no corpo do texto).",
            },
            {
              label: "Citações diretas (mais de 3 linhas)",
              text: "Devem ser destacadas do texto, com recuo de 4 cm da margem esquerda, com letra menor (corpo 10), espaçamento simples entre as linhas e sem aspas.",
            },
            {
              label: "Referências legislativas e jurisprudenciais",
              text: "Devem conter todos os dados necessários para sua adequada identificação e localização. Em citações de sites deve-se indicar o link e a data de acesso.",
            },
          ],
        },
      ],
    },
    {
      id: "etica",
      label: "Ética e Integridade",
      groups: [
        {
          title: "Cientificidade",
          items: [
            {
              text: "Os artigos deverão apresentar caráter científico, definindo e esclarecendo um (ou mais) problema específico, sumarizando os estudos prévios sobre a temática e informando aos leitores o estado em que se encontra uma determinada área de investigação.",
            },
            {
              text: "Preferencialmente, serão publicados artigos que apresentem contribuição inédita e efetiva, a partir de referências sólidas e/ou pesquisa empírica inédita.",
            },
          ],
        },
        {
          title: "Pressupostos de Integridade Ética em Pesquisa",
          items: [
            {
              label: "Responsabilidade",
              text: "O autor ou, quando for o caso, cada um dos autores é responsável pela qualidade do trabalho como um todo, a menos que os limites de sua contribuição sejam indicados de modo expresso e preciso.",
            },
            {
              label: "Autoria",
              text: "Todas as pessoas que contribuíram para a pesquisa devem ser indicadas. Cada autor deve ter participado suficientemente do trabalho para poder assumir publicamente a responsabilidade pelo seu conteúdo.",
            },
            {
              label: "Coautoria",
              text: "Quando se tratar da publicação de resultados obtidos por meio de pesquisa coletiva, é preciso certificar-se da contribuição intelectual direta e efetiva e do consentimento de todos os colaboradores. A cessão de recursos financeiros e de infraestrutura não é indicação de coautoria.",
            },
            {
              highlight: true,
              label: "Vedação de Plágio",
              text: "Quando uma ideia ou uma formulação utilizada no trabalho não sejam evidentemente de domínio público na área de pesquisa em questão, presume-se que se trata de contribuição original. Se não for esse o caso, a ideia ou formulação devem ser expressamente creditadas, sob pena de plágio.",
            },
            {
              highlight: true,
              label: "Vedação de Autoplágio",
              text: "Quando trabalho idêntico ou substancialmente semelhante tiver sido publicado em outro veículo de comunicação, ainda que em outro idioma, esse fato deve ser declarado expressamente no texto e informado ao editor no momento da submissão.",
            },
            {
              label: "TCLE",
              text: "Sempre que, em virtude do objeto ou outras circunstâncias de pesquisa, for possível a identificação dos entrevistados, será exigida a apresentação de TCLE.",
            },
            {
              label: "Conflito de interesses",
              text: "Quando houver possível conflito de interesses, os autores devem informar a equipe editorial no ato da submissão do trabalho.",
            },
          ],
        },
        {
          title: "Responsabilidade com Dados",
          items: [
            {
              label: "Termo de Confidencialidade",
              text: "Sempre que um trabalho fizer uso de dados obtidos através de TC, é preciso que os autores enviem o termo no ato da submissão.",
            },
            {
              label: "Fontes",
              text: "Sempre que se faz referência a dados é necessário que seja apontada a sua fonte.",
            },
          ],
        },
        {
          title: "Recomendações sobre o Uso de IA na Comunicação Acadêmica",
          items: [
            {
              label: "Autoria",
              text: "IA não deve ser listada como coautora; os autores são responsáveis pela precisão do conteúdo.",
            },
            {
              label: "Citação",
              text: "Resultados gerados por IA não devem ser usados como fontes primárias; recomenda-se a verificação de todas as citações.",
            },
            {
              label: "Manipulação de Dados",
              text: "Uso de IA em coleta, análise ou visualização de dados deve ser informado nas seções apropriadas do manuscrito.",
            },
            {
              label: "Edição de Texto",
              text: "Informar o uso de IA para edição de texto e estilo, preferencialmente em seções específicas como agradecimentos.",
            },
            {
              label: "Revisão",
              text: "Revisores devem declarar o uso de IA e seguir as diretrizes do periódico para garantir transparência.",
            },
          ],
        },
      ],
    },
  ],
};
