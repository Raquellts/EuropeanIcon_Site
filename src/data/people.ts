// Fonte única de verdade sobre pessoas do site (professores de mestrado,
// palestrantes/convidados de eventos, participantes). Uma mesma pessoa
// acumula papéis diferentes sem precisar de cadastro duplicado:
//
// - Papel de professor/participante NUM EVENTO: não fica marcado aqui.
//   Vem de `EventEdition.professors` / `EventEdition.participants`
//   (arrays de slugs, ver src/data/eventos/*), então uma pessoa pode ser
//   professor(a) numa edição e participante em outra sem conflito.
// - `facultyOf`: mestrados (slugs de src/data/masters) em que a pessoa é
//   corpo docente — independente de já ter palestrado em algum evento.
//
// Fotos e CVs NÃO ficam armazenados aqui: são resolvidos por convenção de
// pasta a partir do slug (ver src/data/paths.ts), porque a mesma pessoa
// pode ter uma foto diferente em cada edição em que participa.

import type { BaseEntity } from "./types";

export interface Person extends Partial<BaseEntity> {
  slug: string;
  name: string;
  role: string;
  description?: string;
  email?: string;
  city?: string;
  country?: string;
  countryCode?: string;
  curriculum?: string;
  areas?: string[];
  social?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    lattes?: string;
  };
  contact?: string;
  /** Mestrados (slugs) em que a pessoa é corpo docente. */
  facultyOf?: string[];
  /** URLs de embeds do Instagram (reels/posts) para exibir no carrossel. */
  instagramEmbeds?: string[];
}

export const people: Person[] = [
  {
    slug: "carlos-martinez-bujan-perez",
    name: "Prof. Dr. Carlos Martínez-Buján Pérez",
    role: "Catedrático de Direito Penal (Espanha)",
    description:
      "Uma das maiores autoridades internacionais em Direito Penal Econômico. Autor do tratado 'Derecho Penal Económico y de la Empresa', referência para magistrados e advogados na Espanha e América Latina.",
    city: "Santiago de Compostela",
    country: "Espanha",
    countryCode: "es",
    curriculum:
      "Catedrático de Direito Penal (Espanha). Uma das maiores autoridades internacionais em Direito Penal Econômico. Autor do tratado 'Derecho Penal Económico y de la Empresa', referência para magistrados e advogados na Espanha e América Latina. Ex-Diretor da Escola de Prática Jurídica da Universidade de Santiago de Compostela. Ex-Secretário do Instituto de Criminologia da Universidade de Santiago de Compostela. Defensor de uma visão favorável, com ressalvas, sobre a expansão do Direito Penal Econômico.",
    areas: ["Direito Penal Econômico", "Direito Penal Empresarial"],
    social: {},
  },
  {
    slug: "nuno-brandao",
    name: "Prof. Dr. Nuno Brandão",
    role: "Professor da Faculdade de Direito - Universidade de Coimbra",
    description:
      "Professor da Faculdade de Direito da Universidade de Coimbra desde 2000. Doutor em Ciências Jurídico-Criminais. Advogado e conferencista em dezenas de colóquios e formações em Portugal e no estrangeiro.",
    city: "Coimbra",
    country: "Portugal",
    countryCode: "pt",
    curriculum:
      "Professor da Faculdade de Direito - Universidade de Coimbra, desde 2000. Doutor em Ciências Jurídico-Criminais pela Faculdade de Direito - Universidade de Coimbra (2013). Advogado. Conferencista em dezenas de colóquios e formações, em Portugal e no estrangeiro. Autor de monografias e de artigos nas áreas do direito penal e do direito processual penal.",
    areas: [
      "Direito Penal",
      "Direito Processual Penal",
      "Crime de Lavagem de Dinheiro",
    ],
    social: {},
  },
  {
    slug: "pedro-caeiro",
    name: "Prof. Dr. Pedro Caeiro",
    role: "Professor da Faculdade de Direito - Universidade de Coimbra (FDUC)",
    description:
      "Referência internacional em Direito Penal Europeu, Direito Internacional Penal e Cooperação Judiciária. Membro do Grupo de Peritos em Política Criminal - Comissão Europeia de 2012 a 2024.",
    city: "Coimbra",
    country: "Portugal",
    countryCode: "pt",
    curriculum:
      "Professor da Faculdade de Direito - Universidade de Coimbra (FDUC). Referência internacional em Direito Penal Europeu, Direito Internacional Penal e Cooperação Judiciária. Membro do Grupo de Peritos em Política Criminal - Comissão Europeia 2012 a 2024. Membro fundador da ECLAN e Editor da Elgar Encyclopedia of Crime and Criminal Justice. Designado pela Ministra da Justiça para presidir o grupo que elaborou o anteprojeto de transposição da Diretiva (UE) 2024/1260 sobre perda de bens de origem criminosa, atualmente em discussão na Assembleia da República.",
    areas: [
      "Direito Penal Europeu",
      "Direito Internacional Penal",
      "Cooperação Judiciária",
      "Confisco de Vantagens Criminosas",
    ],
    social: {},
  },
  {
    slug: "arthur-pinto-de-lemos-junior",
    name: "Prof. Dr. Arthur Pinto de Lemos Junior",
    role: "Coordenador Científico do Mestrado em Direito Penal Econômico · Procurador de Justiça do MPSP",
    description:
      "Procurador de Justiça do MPSP. Mestre em Ciências Jurídico-Criminais e Especialista em Direito Penal Econômico pela Universidade de Coimbra. Subprocurador-Geral de Justiça de Relações Institucionais do MPSP.",
    city: "São Paulo",
    country: "Brasil",
    countryCode: "br",
    curriculum:
      "Procurador de Justiça do Ministério Público de São Paulo (MPSP). Mestre em Ciências Jurídico-Criminais e Especialista em Direito Penal Econômico pela Universidade de Coimbra, Portugal. Foi Secretário do Conselho Superior do Ministério Público de São Paulo (2024 a 2025). Atual Subprocurador-Geral de Justiça de Relações Institucionais do Ministério Público de São Paulo. Nomeado em 2025 como membro do Conselho Nacional de Segurança Pública e Defesa Social (CNSP) pelo Ministério da Justiça. Coordenador científico do Mestrado Internacional em Direito Penal Econômico pelo European Institute e professor de cursos de capacitação contra a lavagem de dinheiro no Ministério da Justiça.",
    areas: [
      "Direito Penal Econômico",
      "Lavagem de Dinheiro",
      "Segurança Pública",
    ],
    social: {},
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "regina-helena-fonseca-fortes-furtado",
    name: "Profª. Drª. Regina Helena Fonseca Fortes-Furtado",
    role: "Professora de Direito Penal e Criminologia na Universidade de Oviedo",
    description:
      "Doutora em Direito Penal pela Universitat Pompeu Fabra. Ex-Promotora de Justiça do Ministério Público de São Paulo. Desenvolve pesquisas em Direito Penal Econômico, criminalidade empresarial, crimes ambientais e inovação tecnológica.",
    city: "Oviedo",
    country: "Espanha",
    countryCode: "es",
    curriculum:
      "Professora de Direito Penal e Criminologia na Universidade de Oviedo. Doutora em Direito Penal pela Universitat Pompeu Fabra. Foi Promotora de Justiça do Ministério Público de São Paulo. Possui produção acadêmica internacional e desenvolve pesquisas em Direito Penal Econômico, criminalidade empresarial, crimes ambientais, inovação tecnológica, discriminação e criminalidade de gênero contra a mulher.",
    areas: [
      "Direito Penal Econômico",
      "Criminalidade Empresarial",
      "Crimes Ambientais",
      "Inovação Tecnológica",
      "Criminologia",
    ],
    social: {},
  },
  {
    slug: "bruno-perez-de-almeida-lopes",
    name: "Dr. Bruno Perez de Almeida Lopes",
    role: "Advogado e Consultor de Negócios Internacionais",
    description:
      "Advogado, business coaching e consultor de negócios internacionais. Formado pela Universidade Estácio de Sá (2013), com licença para atuar no Brasil (OAB SP 346.638) e em Portugal (OA 687759). LL.M. em Direito Internacional e Mestre em Direito Marítimo, Alfândega e Comércio Internacional pela Maritime Law Academy. Ex-membro da tripulação de navios, tendo visitado mais de 60 países. Lidera o escritório Bruno Lopes - International Law Firm, onde se especializa em processos de internacionalização e planejamento imigratório. Membro da BACC - Câmara de Comércio Brasil-Estados Unidos (do Sudeste).",
    email: "Brunolopeslaw@gmail.com",
    city: "Figueira da Foz",
    country: "portugal",
    countryCode: "pt",
    areas: [
      "Direito Internacional",
      "Direito Marítimo",
      "Direito da Imigração",
      "Direito Empresarial",
    ],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/brunolopeslaw/",
    },
    contact: "+351 927 997 875",
  },
  {
    slug: "davide-rodrigues",
    name: "Dr. Davide Pereira Rodrigues",
    role: "Mestrando em Ciências Jurídico-Criminais",
    description:
      "Mestrando em Ciências Jurídico-Criminais na Faculdade de Direito da Universidade de Coimbra. Bolseiro Novos Talentos 2025 da Fundação Calouste Gulbenkian. Monitor da Secção de Ciências Jurídico-Criminais da FDUC desde 2026. Premiado em múltiplas edições com prémios académicos, incluindo Prémio Doutor Beleza dos Santos e Prémio Doutor Guilherme Moreira.",
    email: "davide_mr@hotmail.com",
    city: "coimbra",
    country: "portugal",
    countryCode: "pt",
    areas: ["Direito Penal", "Ciências Jurídico-Criminais"],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/davide__rodrigues/",
    },
    contact: "+351 911 831 277",
  },
  {
    slug: "renato-coletti-de-barros",
    name: "Dr. Renato Coletti de Barros",
    role: "Advogado e Consultor Empresarial",
    description:
      "Advogado licenciado em Portugal, Reino Unido e Brasil. Pós-graduado e bacharel em Direito pela Universidade Presbiteriana Mackenzie (São Paulo) e pela Universidade Católica Portuguesa (Porto). Membro do CCBE – Conseil des barreaux européens – Council of Bars and Law Societies of Europe. Membro da ABA (Associação Brasileira de Advogados) e atual Diretor da ABA Portugal Porto. Consultor empresarial estratégico, atuante em projetos de Vistos de Autorização de Residência por Investimento (ARI), os chamados Vistos Gold. Negociador, mediador e conciliador lusófono no Brasil e na União Europeia pelo ICFML – Instituto de Certificação e Formação de Mediadores Lusófonos. Membro do IBDESC – Instituto Brasileiro de Direito Estrangeiro e Comparado.",
    email: "renatocolettidebarros@gmail.com",
    city: "Porto",
    country: "portugal",
    countryCode: "pt",
    areas: ["Direito da Imigração", "Direito Empresarial", "Mediação"],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/renatodebarros/",
    },
    contact: "+351 910 519 051",
  },
  {
    slug: "magalhaes-barbosa-junior",
    name: "Dr. José Magalhães Barbosa Junior",
    role: "Advogado",
    description:
      "Advogado em prática isolada desde 2008 (Cédula Profissional n.º 45759P), com vasta experiência em múltiplas áreas do Direito. Licenciado em Direito pela Faculdade de Direito da Universidade do Porto. Pós-graduado em Direito Fiscal e com frequência de Mestrado em Ciências Jurídico-Filosóficas. Concluiu Curso Avançado em Compliance. Fluente em Inglês.",
    email: "mbjunior45759p@gmail.com",
    areas: [
      "Direito Comercial",
      "Direito Civil",
      "Direito do Trabalho",
      "Direito Penal",
      "Direito da Família e Sucessões",
      "Direito Fiscal",
    ],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/mbarbosajr_adv/",
    },
    contact: "+351 963 442 929",
  },
  {
    slug: "carolina-porto",
    name: "Dra. Carolina Porto",
    role: "Advogada Criminalista",
    description:
      "Advogada criminalista com mais de 10 anos de atuação combativa na defesa dos direitos e garantias fundamentais, atuando no Brasil e em Portugal. Presidente da Comissão de Direito Penal Comparado Brasil x Portugal da ANACRIM Costa do Sol. Dedica sua trajetória à advocacia criminal estratégica, técnica e humanizada, com especial atuação em casos criminais complexos.",
    email: "carolina.porto.adv@gmail.com",
    areas: ["Direito Penal", "Direito Criminal"],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/carolinaporto.advcriminal/",
    },
    contact: "+351 936 982 893",
  },
  {
    slug: "debora-cristina-de-alcantara-ferreira",
    name: "Dra. Débora Cristina de Alcântara Ferreira",
    role: "",
    email: "debyalcantara@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/it_deboraferreira/",
    },
    contact: "+55 11 98651 8866",
  },
  {
    slug: "emilia-do-carmo-afonso-ferreira-estrangeiro",
    name: "Dra. Emilia do Carmo Afonso Ferreira Estrangeiro",
    role: "Apoio Jurídico ao Diretor DAG — DN — PSP",
    description:
      "Licenciada em Direito pela Universidade Internacional de Lisboa. Jurista no Ministério da Administração Interna (MAI), atuando no apoio jurídico ao Diretor DAG da Polícia de Segurança Pública. Experiência no Gabinete de Apoio Jurídico do Comando da PSP Lisboa, no Departamento de Armas e Explosivos e no Gabinete de Assuntos Jurídicos da DN-PSP-MAI. Formadora no Instituto Superior de Ciências Policiais e Segurança Interna (ISCPSI) nas áreas de Direito Penal e Processo Penal. Membro do Clube G100 — Asa Communication, Advocacy & Mediation. Membro Imortal da Academia de Ciências, História, Arte e Literatura (ABRACIS). Idealizadora do Clube de Direitos e Negócios. Premiada em 2023 com o Galardão de Mérito 'Ativismo Cultural e Transformação Social'. Condecorada em 2025 com o Diploma e Comenda do Mérito Feminino — Grau de Dama Comendadora. Autora em seis livros em coautoria, um dos quais bestseller.",
    email: "emilia.estrangeiro@gmail.com",
    country: "portugal",
    countryCode: "pt",
    areas: [
      "Direito Penal",
      "Direito Internacional",
      "Direito Processual Penal",
      "Direito Administrativo",
    ],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/mila.ferreira16/",
    },
    contact: "+351 965 009 814",
  },
  {
    slug: "isabela-fragoso-blanco",
    name: "Dra. Isabela Fragoso Blanco",
    role: "",
    email: "Isabella.blanco@hotmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/isabelafragosoblanco/",
    },
    contact: "+351 910 715 653",
  },
  {
    slug: "karina-bagnatori",
    name: "Dra. Karina Bagnatori",
    role: "",
    email: "karinabagnatori@mpsp.mp.br",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/karinabagnatori/",
    },
    contact: "+55 11 99936 2092",
  },
  {
    slug: "kelly-soares",
    name: "Dra. Kelly Soares",
    role: "",
    email: "adv.kellysoaressilva@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/kellysoares/",
    },
    contact: "+351 933 916 930",
  },
  {
    slug: "marcela-camargo",
    name: "Dra. Marcela Camargo",
    role: "Advogada Criminal e Professora de Direito Penal",
    description:
      "Coordenadora da Comissão de Acompanhamento da Igualdade de Direitos e Combate à Discriminação – CAIDCD, da Casa Brasil Coimbra. Diretora da ABA Coimbra. Fundadora da Comunidade Penal, em Portugal. Mentora de Advocacia Criminal. Doutoranda em Ciências Criminais na Universidade de Coimbra.",
    email: "adv.marcelacamargo@gmail.com",
    areas: ["Direito Penal", "Direito Penal Econômico"],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/marcelacamargo.advcriminal/",
    },
    contact: "+351 914 017 603",
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "marcia-haidee-evangelista-bezerra",
    name: "Dra. Márcia Haidée Evangelista Bezerra",
    role: "",
    email: "mhadv.pt@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/marciahaidee.advcriminal/",
    },
    contact: "+351 936 224 633",
  },
  {
    slug: "marianna-guimarães-figueiredo",
    name: "Dra. Marianna Guimarães Figueiredo",
    role: "Managing Partner — MGF Advogados",
    description:
      "Managing Partner da MGF Advogados (Portugal) e MGFN Advogados (Brasil). Advogada inscrita na Ordem dos Advogados de Portugal e na Ordem dos Advogados do Brasil. Dedica-se à estruturação jurídica de operações complexas entre Portugal, Brasil e outros mercados internacionais, liderando uma estrutura jurídica multidisciplinar orientada para assessoria estratégica de elevado valor acrescentado.",
    email: "dra.mgfigueiredo@gmail.com",
    areas: [
      "Direito Internacional Privado",
      "Direito da Imigração",
      "Direito da Família Internacional",
      "Direito Empresarial",
      "Direito Imobiliário",
      "Direito Administrativo",
    ],
    social: {
      linkedin: "marianna-guimarães-figueiredo",
      instagram: "https://www.instagram.com/dra.mariannaguimaraes/",
    },
    contact: "+351 925 920 511",
  },
  {
    slug: "michela-cunto",
    name: "Dra. Michela Cunto",
    role: "Advogada",
    description:
      "Advogada inscrita na Ordem dos Advogados de Portugal, com atuação voltada ao Direito Internacional, Direito da Imigração, Direito da Família, Direito Civil e Direito Penal. Experiência na assessoria jurídica em processos administrativos e judiciais nas áreas de mobilidade internacional, nacionalidade, regularização migratória e relações familiares transnacionais. Parceira Jurídica do Instituto IBR.",
    email: "michelacm.adv@gmail.com",
    city: "Vila Nova de Gaia",
    country: "portugal",
    countryCode: "pt",
    areas: [
      "Direito Internacional",
      "Direito da Imigração",
      "Direito da Família",
      "Direito Civil",
      "Direito Penal",
    ],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/michelacm.adv/",
    },
    contact: "+351 910 331 483",
  },
  {
    slug: "rayanne-monteiro-andrade",
    name: "Dra. Rayanne Monteiro de Andrade Santos",
    role: "Managing Partner — Ray Andrade International Law Firm",
    description:
      "Sócia-Fundadora e Managing Partner da Ray Andrade International Law Firm, com prática consultiva e contenciosa em Portugal, Brasil e União Europeia. Mestranda em Ciências Criminais pela Universidade do Minho. Especialista em Direito Penal Económico Internacional, com investigação centrada em branqueamento de capitais através de criptoativos numa perspetiva comparada Brasil-União Europeia.",
    email: "ray.andrade.adv@gmail.com",
    areas: [
      "Direito Penal Económico",
      "Direito de Família Internacional",
      "Compliance",
      "Direito de Imigração e Nacionalidade",
      "Direito Corporativo e Financeiro",
    ],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/rayy.law/",
    },
    contact: "+351 926 943 151",
  },
  {
    slug: "roberta-gadelha-dos-santos",
    name: "Dra. Roberta Gadelha dos Santos",
    role: "",
    email: "r.betaadv@hotmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/roberta_gadelha.advcriminal/",
    },
    contact: "+351 927 276 198",
  },
  {
    slug: "sofia-alexandra-goncalves-nunes",
    name: "Dra. Sofia Alexandra Gonçalves Nunes",
    role: "",
    email: "sofiaagnunes@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/sofia_nunesss/",
    },
    contact: "+351 932 895 781",
  },
  {
    slug: "solbei-karina-ferreira-delpino",
    name: "Dra. Solbei Karina Ferreira Delpino",
    role: "",
    email: "adv.solbeikarina@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/advsolbeikarina/",
    },
    contact: "+55 11 99279 0537",
  },
  {
    slug: "valeria-bordini-starling-de-carvalho",
    name: "Dra. Valéria Bordini Starling de Carvalho",
    role: "Advogada — Fundadora da Bordini Starling Advocacia",
    description:
      "Advogada em Portugal (OA n.º 59472L) e Brasil (OAB/RJ n.º 101.074). Fundadora e Diretora da Bordini Starling – Advocacia, Unipessoal Lda., sediada em Cascais. Mestre em Direito e Prática Jurídica pela Faculdade de Direito da Universidade de Lisboa (FDUL), MBA em Direito da Economia e da Empresa pela FGV e Licenciada em Direito pela PUC-Rio. Atua em Direito Internacional Privado, Família e Sucessões, Direito Penal, Imigração e Nacionalidade.",
    email: "bordinistarling@bordinistarlingadvocacia.com",
    city: "Cascais",
    country: "portugal",
    countryCode: "pt",
    areas: [
      "Direito Internacional Privado",
      "Direito de Família e Sucessões",
      "Direito Penal",
      "Direito Administrativo",
      "Direito da Imigração e Nacionalidade",
    ],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/bordinistarlingadvocacia/",
    },
    contact: "+351 910 864 633",
  },
  {
    slug: "vanessa-lopes-gama",
    name: "Dra. Vanessa Lopes Gama",
    role: "",
    email: "contato@vg-adv.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/vanessagama_adv/",
    },
    contact: "+351 938 097 322",
  },
  {
    slug: "maria-joao-crispim-rebelo-guinote",
    name: "Dra. Maria João Crispim Rebelo Guinote",
    role: "Advogada",
    description:
      "Licenciada em Direito pela Universidade Autónoma de Lisboa (2002). Exerce advocacia desde 2006, com atuação nas áreas do Direito Administrativo, Direito Fiscal, Direito Civil e Direito Penal. Atualmente em prática individual, tendo anteriormente exercido funções em sociedade de advogados da qual foi sócia entre 2021 e março de 2026. Tem especial interesse no Direito Penal Económico, corrupção e branqueamento de capitais.",
    email: "adv@mjguinote.pt",
    city: "Caldas da Rainha",
    country: "portugal",
    countryCode: "pt",
    areas: [
      "Direito Administrativo",
      "Direito Fiscal",
      "Direito Civil",
      "Direito Penal",
      "Direito Penal Económico",
    ],
    social: {
      linkedin: "",
      instagram: "",
    },
    contact: "+351 914 917 781",
  },
  {
    slug: "tatianne-caldeira-de-oliveira",
    name: "Dra. Tatianne Caldeira de Oliveira",
    role: "Advogada Criminalista",
    description:
      "Advogada criminalista com dupla inscrição profissional — Brasil (OAB/MG) e Portugal (OA). Titular de escritório próprio sediado em Leiria, com atuação em todo o território português. Advocacia de forte vocação contenciosa, com condução integral do processo penal — do inquérito ao julgamento e aos recursos. Pós-graduada em Direito Penal e Processo Penal e em Direito de Trânsito. Atua também em Direito da Imigração.",
    email: "tatiannecaldeira-66964P@adv.oa.pt",
    city: "Leiria",
    country: "portugal",
    countryCode: "pt",
    areas: [
      "Direito Penal",
      "Direito Penal Económico",
      "Direito da Imigração",
      "Processo Penal",
    ],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/caldeiratatianne/",
    },
    contact: "+351 928 308 430",
  },
  {
    slug: "adriano-teixeira-guimaraes",
    name: "Dr. Adriano Teixeira Guimarães",
    role: "",
    email: "ateixeiraguimaraes@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/ateixeirag/",
    },
    contact: "+351 927 247 099",
  },
  {
    slug: "antonio-jose-roma-de-magalhaes-filipe",
    name: "Dr. António José Roma de Magalhães Filipe",
    role: "Chefe do Núcleo de Deontologia e Disciplina — PSP",
    description:
      "Chefe do Núcleo de Deontologia e Disciplina do Comando Metropolitano do Porto da Polícia de Segurança Pública. Licenciado em Direito pela Faculdade de Direito da Universidade Portucalense. Experiência em supervisão de processos disciplinares, inquéritos, averiguações e processos de reabilitação. Articulação institucional com Inspeções, Tribunais e Ministério Público em matérias de natureza disciplinar e criminal. Formador da Bolsa de Formadores da PSP nas áreas de Processo Administrativo e Processo Penal, e formador das Polícias Municipais na área dos Direitos Fundamentais. Condecorado por Serviços Distintos e com diversos Louvores de Mérito.",
    email: "ajrfilipe@psp.pt",
    city: "Porto",
    country: "portugal",
    countryCode: "pt",
    areas: [
      "Direito Penal",
      "Direito Administrativo",
      "Processo Penal",
      "Direitos Fundamentais",
    ],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/ajrfilipe/",
    },
    contact: "+351 657 724 52",
  },
  {
    slug: "catarina-zuccaro",
    name: "Dra. Catarina Zuccaro",
    role: "Advogada Internacional",
    description:
      "Advogada internacional luso-brasileira com 26 anos de atuação. Mestre em Direitos Humanos e Direito Internacional e pós-graduanda em Direito da Insolvência e Recuperação de Empresas. Com uma trajetória marcada pela atuação em Direito Internacional, imigração, nacionalidade, direitos humanos, empreendedorismo jurídico e justiça global, alia experiência técnica, visão estratégica e compromisso com a defesa de direitos. Professora de pós-graduação em Direito Internacional e palestrante. Presidente da Comissão de Empreendedorismo Jurídico Internacional do IBDESC e idealizadora do Law Summer.",
    email: "cmz1702@icloud.com",
    areas: [
      "Direito Internacional",
      "Direito da Imigração",
      "Direitos Humanos",
      "Direito da Insolvência",
    ],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/catarina.zuccaro/",
    },
    contact: "+351 960 107 474",
  },
  {
    slug: "monica-costa",
    name: "Dra. Mónica Costa",
    role: "Advogada",
    description:
      "Advogada com mais de 18 anos de experiência nas áreas de Direito de Família e Menores, Direito Penal e Direito Executivo, complementada por um percurso sólido na recuperação de crédito e negociação extrajudicial. Experiência consolidada na gestão de processos judiciais e extrajudiciais, análise documental, negociação de acordos de pagamento e relacionamento com clientes. Licenciada em Direito pela Universidade Autónoma de Lisboa. Pós-graduada em Práticas Forenses pela Universidade Autónoma de Lisboa.",
    email: "monicacosta-20989l@adv.oa.pt",
    country: "portugal",
    countryCode: "pt",
    areas: [
      "Direito Penal",
      "Direito Executivo",
      "Direito de Insolvência",
      "Direito de Família e Menores",
    ],
    social: {
      linkedin: "",
      instagram: "",
    },
    contact: "+351 963 044 288",
  },
  {
    slug: "sonia-donoso-de-barros",
    name: "Dra. Sónia Donoso de Barros",
    role: "",
    email: "soniadonosodebarros@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/soniadebarros/",
    },
    contact: "+351 910 585 635",
  },
  {
    slug: "tatiana-costa-mota",
    name: "Dra. Tatiana Costa Mota",
    role: "",
    email: "tatiana.adv.mota@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/tatiana.costa.mota/",
    },
    contact: "+351 914 932 749",
  },
  {
    slug: "teresa-carlota-dias-goncalves-cortesao-martinho",
    name: "Dra. Teresa Carlota Dias Gonçalves Cortesão Martinho",
    role: "",
    email: "teresacarlota5@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "",
    },
    contact: "+351 924 112 566",
  },
  {
    slug: "walber-ribeiro-dassumpcao",
    name: "Dr. Walber Ribeiro D'Assumpção",
    role: "",
    email: "walber.rda@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/walberadvogado/",
    },
    contact: "+351 932 316 409",
  },
  {
    slug: "miguel-mateus-teixeira",
    name: "Dr. Miguel Mateus Teixeira",
    role: "",
    email: "miguelmateusteixeira@gmail.com",
    areas: [],
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/miguelmateusteixeira/",
    },
    contact: "+351 967 201 457",
  },
  {
    slug: "convidado",
    name: "CONVIDADO",
    role: "",
    areas: [],
    social: {
      linkedin: "",
      instagram: "",
    },
    contact: "+351 961 945 870",
  },

  // ── MESTRADO EM HARMONIZAÇÃO OROFACIAL (HOF) ──────────────────────

  {
    slug: "paulo-moraes",
    name: "Prof. Dr. Paulo Moraes",
    role: "Coordenador Científico do Mestrado em HOF",
    description:
      "Doutor em Cirurgia Maxilofacial (UNICAMP). Mestre em Cirurgia Maxilofacial (Universidade de Porto). Mestre em Cirurgia Maxilofacial (UNICAMP). Especialista em Cirurgia Maxilofacial (CFO). Pós Doutorado em Engenharia Mecânica (Universidade do Porto). Engenheiro de Software (IFRN).",
    city: "",
    country: "",
    areas: ["Cirurgia Maxilofacial", "Harmonização Orofacial"],
    social: {
      instagram: "https://www.instagram.com/phdemoraes/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "marcela-patera",
    name: "Dra. Marcela Patera",
    role: "Orientadora do Mestrado em HOF",
    description:
      "Graduada em enfermagem (COREN-SP 748088). Pós graduada em enfermagem estética. Bacharel em direito. Mestre em HOF pelo European Institute.",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "adriana-manzoli",
    name: "Dra. Adriana Manzoli",
    role: "Orientadora do Mestrado em HOF",
    description:
      "Doutoranda em Ciências Biomédicas (IUNIR/Argentina). Mestre em Harmonização Orofacial (European Face & Body Institute | UEMC). Especialista em Ortodontia (FUNORTE). Especialista em Didática do Ensino Superior (UNL).",
    social: {
      instagram: "https://www.instagram.com/adrianamanzoli/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "andrea-francoso",
    name: "Dra. Andrea Françoso",
    role: "Orientadora do Mestrado em HOF",
    description:
      "Fisioterapeuta com 28 anos de experiência. Mestra em Harmonização Orofacial pelo Instituto European. Residência em Harmonização Orofacial em Harvard.",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "noemi-borgas",
    name: "Dra. Noemi Borgas",
    role: "Orientadora do Mestrado em HOF",
    description:
      "Doutora em Ciências da Saúde (UML). Mestre em Harmonização Orofacial (European Face & Body Institute | UEMC). Especialista em Cirurgia e traumatologia Buco Maxilo Facial (ABO | Facset).",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "simone-lopes",
    name: "Dra. Simone Lopes",
    role: "Orientadora do Mestrado em HOF",
    description:
      "Doutoranda em Ciências da Saúde (IUNIR). Mestrado em Odontologia Clínica (UFMS). Cirurgiã Dentista e Bióloga. Presidente da Associação Brasileira de Cirurgiões Dentistas (ABCD-MS).",
    social: {
      instagram: "https://www.instagram.com/drasimoneclopes/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "glaucia-alves",
    name: "Dra. Glaucia Alves",
    role: "Orientadora do Mestrado em HOF",
    description:
      "Formada em Odontologia pela Universidade Federal de Pernambuco (UFPE). Especialização em Endodontia pela ABO de Barra Mansa. Oficial dentista formada pela Escola de Saúde do Exército (ESSEX).",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "irina-bernardino",
    name: "Dra. Irina Bernardino",
    role: "Orientadora do Mestrado em HOF",
    description:
      "Médica Dentista formada na Faculdade de Medicina Dentária da Universidade do Porto, Portugal. Pós-graduação em Ortodontia. Especialização em Implantologia e Reabilitação Oral. Mestrado em Harmonização Orofacial.",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "raphael-bonadimen",
    name: "Dr. Raphael Bonadimen",
    role: "Orientador do Mestrado em HOF",
    description:
      "Doutorado em Ciências Biomédicas (Instituto Universitario Italiano de Rosario, IUNIR). Mestrado em Assistência Farmacêutica (Universidade Vila Velha, UVV).",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "alana-lucas",
    name: "Dra. Alana Lucas",
    role: "Orientadora do Mestrado em HOF",
    description:
      "Doutorado em Ciências Biomédicas (Instituto Universitario Italiano de Rosario, IUNIR). Graduação em Biomedicina (Fundação Universidade Federal de Ciências da Saúde de Porto Alegre, UFCSPA).",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "ana-picolini",
    name: "Dra. Ana Picolini",
    role: "Orientadora do Mestrado em HOF",
    description:
      "MBA Gestão Feminina (SONATA, Porto Alegre/RS). Doutoranda em Ciências Biomédicas (IUNIR, Rosario – Argentina). Graduação em Biomedicina Estética (UNYLEYA, Rio de Janeiro).",
    social: {
      instagram: "https://www.instagram.com/dra_ana_picolini/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "isabela-lopes",
    name: "Dra. Isabela Lopes",
    role: "Orientadora do Mestrado em HOF",
    description:
      "Graduada em Odontologia pela Universidade para o Desenvolvimento do Estado e da Região do Pantanal (2016). Especialista em Harmonização Orofacial (2019) e Ortodontia (2020).",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "alessandra-saab",
    name: "Dra. Alessandra Saab",
    role: "Professora do Mestrado em HOF",
    description:
      "Graduada em Odontologia (Universidade Tuiuti – Paraná). Especialista em Endodontia com Microscopia Odontológica – FUNSAP. Residência em Harmonização Orofacial. Mestre em Harmonização Orofacial (European Face & Body Institute).",
    social: {
      instagram: "https://www.instagram.com/draalesaab/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "sonia-obregon",
    name: "Dra. Sonia Obregón",
    role: "Professora do Mestrado em HOF",
    description:
      "Diretor e Fundador do Instituto CoNNatural. Especialista em Harmonização Orofacial (Faculdade FACOP). Especialista em CBMF (Faculdade FACOP). Especialista em Laser e Ozonoterapia (Faculdade FACOP).",
    social: {
      instagram: "https://www.instagram.com/dra.soniaobregon",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "walter-souza",
    name: "Dr. Walter de Souza",
    role: "Professor do Mestrado em HOF",
    description:
      "Cirurgião dentista. Especialista em Cirurgia e Traumatologia Bucomaxilofacial. Mestre em Ciências da Saúde. Coordenador dos cursos de atualização em cirurgia oral e Especialização em CTBMF da Ceepo.",
    social: {
      instagram: "https://www.instagram.com/drwalterdesouza/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "tatiana-tessari-dallalba",
    name: "Dra. Tatiana Tessari Dall'Alba",
    role: "Professora do Mestrado em HOF",
    description:
      "Farmacêutica com ênfase em Farmácia Industrial (PUCRS-2003). Especialista em Farmácia Estética pela FATEC. Mestranda em Harmonização Facial (European Face & Body Institute – España).",
    social: {
      instagram: "https://www.instagram.com/dratatianadallalba/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "ana-maria-lopes-romagnoli",
    name: "Dra. Ana Maria Lopes Romagnoli",
    role: "Professora da Residência em HOF",
    description:
      "Graduada bacharel em enfermagem (Unopar). Pós graduação em estética avançada. Residência em enfermagem estética (CTA). Habilitada no tratamento de lipólise e lifting facial e corporal com fibra óptica Fototérmica.",
    social: {
      instagram: "https://www.instagram.com/draana.romagnoli/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "alyne-souza",
    name: "Dra. Alynë de Souza",
    role: "Professora da Residência em HOF",
    description:
      "Graduação em Enfermagem pelo Centro Universitário São Camilo (2014). Residência em Enfermagem Estética pelo CTA. Pós Graduação em Enfermagem Estética pela Faculdade Famesp.",
    social: {
      instagram: "https://www.instagram.com/draalynesouza/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "andre-arashiro",
    name: "Dr. André Arashiro",
    role: "Professor do Mestrado em HOF",
    description:
      "Mestre em Harmonização Orofacial (European Face & Body Institute | UEMC). Especialista em Harmonização Facial (FUNORTE). Especialista em Ortopedia Funcional dos Maxilares (INUCASTELO).",
    social: {
      instagram: "https://www.instagram.com/dr.andrearashiro/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "caique-ferezin",
    name: "Dr. Caique Ferezin",
    role: "Professor da Residência em HOF",
    description:
      "Bacharel em Enfermagem (Faculdade de Ciências Médicas da Santa Casa de São Paulo). Saúde Pública com ênfase em Estratégia Saúde da Família (Centro Universitário São Camilo).",
    social: {
      instagram: "https://www.instagram.com/drcaiqueferezin/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "carolina-rolim",
    name: "Dra. Carolina Rolim",
    role: "Professora da Residência em HOF",
    description:
      "Graduação em Enfermagem pelo Centro Universitário São Camilo (CUSC). Mestrado pela Pontifícia Universidade Católica (PUC-SP). Pós Graduação em Enfermagem Estética (Faculdade Unyleya).",
    social: {
      instagram: "https://www.instagram.com/dracarolrolim/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "diogo-de-fraga",
    name: "Dr. Diogo de Fraga",
    role: "Professor do Mestrado em HOF",
    description:
      "Mestre em Gerontologia Biomédica (PUCRS). Pós-Graduado MBA Gestão em Saúde (BBI OF CHICAGO). CEO do Derma Aesthetic & Academy.",
    social: {
      instagram: "https://www.instagram.com/drdiogodefraga/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "flavio-domingues",
    name: "Dr. Flávio Domingues",
    role: "Professor do Mestrado em HOF",
    description:
      "Pós-Graduado MBA em GESTÃO DE PESSOAS e Liderança (FGV). Especialista em Marketing. Diretor de Marketing – Faculdade FACOP. CEO PW2 Comunicação.",
    social: {
      instagram: "https://www.instagram.com/flaviodomingues7/",
    },
    facultyOf: ["harmonizacao-orofacial"],
    instagramEmbeds: ["https://www.instagram.com/reel/DbF9_shksOB/"],
  },
  {
    slug: "itagina-baiocchi",
    name: "Dra. Itagina Baiocchi",
    role: "Professora do Mestrado em HOF",
    description:
      "Doutoranda em Ciências Biomédicas (IESLA-Rosario). Mestre em Harmonização Orofacial (European Face & Body Institute | UEMC-España). Especialista em Harmonização Orofacial (Instituto Kenedy-GO).",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "jacqueline-mendonca",
    name: "Dra. Jacqueline Mendonça",
    role: "Professora da Residência em HOF",
    description:
      "Graduada em Biomedicina (Universidade Barão de Mauá). Pós graduação Biomedicina Estética (IPESSP). MBA em Gestão Estratégica de Negócios (Fundação Getúlio Vargas).",
    social: {
      instagram: "https://www.instagram.com/dra.jacquelinemendonca/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "larissa-cerqueira",
    name: "Dra. Larissa Cerqueira",
    role: "Professora do Mestrado em HOF",
    description:
      "Especialista em Prescrição de Fitoterápicos e Suplementação Nutricional Clínica e Esportiva (FAVENI). Especialista em Fisioterapia Dermatofuncional (UNESA).",
    social: {
      instagram: "https://www.instagram.com/larissacerqueiraestetica/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "marcos-machado",
    name: "Dr. Marcos Machado",
    role: "Professor do Mestrado em HOF",
    description:
      "Mestre e Doutor em Odontologia (FOP | UNICAMP). Especialista em Estomatologia (São Leopoldo Mandic). Especialista em Radiologia e Imaginologia (São Leopoldo Mandic).",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "milena-leao",
    name: "Dra. Milena Leão",
    role: "Professora do Mestrado em HOF",
    description:
      "Especialista em Biomedicina Estética (NEPUGA). Pós graduanda em Acupuntura (Faveni). Pós graduação em Análises Clinica (UTP). Instrumentadora Cirúrgica (Sissab).",
    social: {
      instagram: "https://www.instagram.com/milena.leao/",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "simone-carboni",
    name: "Dra. Simone Carboni Pedreira",
    role: "Professora do Mestrado em HOF",
    description:
      "Cirurgiã Dentista – 26 anos de formada. Pós Graduada em Odontopediatria (APCD). Pós graduação em H.O.F. Docente em cursos livres de Harmonização Orofacial e mentorias.",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },
  {
    slug: "stefani-rezende",
    name: "Dra. Stefani Rezende",
    role: "Professora do Mestrado em HOF",
    description:
      "Mestra em Ciências Farmacêuticas. Especialista em Farmácia Estética. Especialista em Ciência e Tecnologia de Alimentos. Graduada em Odontologia e Farmácia-Bioquímica.",
    social: {
      instagram: "",
    },
    facultyOf: ["harmonizacao-orofacial"],
  },

  // ── MESTRADO EM DIREITO PENAL ECONÔMICO (DPE) — novos ────────────

  {
    slug: "olavo-evangelista-pezzotti",
    name: "Dr. Olavo Evangelista Pezzotti",
    role: "Orientador do Mestrado em Direito Penal Econômico",
    description:
      "Doutorado em Direito Processual Penal – Universidade de São Paulo (USP). Mestrado em Direito Processual – Universidade de São Paulo (USP). Visiting Scholar – Stanford Law School (EUA).",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "flavio-turessi",
    name: "Dr. Flávio Turessi",
    role: "Orientador do Mestrado em Direito Penal Econômico",
    description:
      "Pós-Doutorado – Universidad de Las Palmas de Gran Canaria (2025). Doutorado em Direito Político e Econômico – Universidade Presbiteriana Mackenzie (2019).",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "eronides-dos-santos",
    name: "Dr. Eronides dos Santos",
    role: "Orientador do Mestrado em Direito Penal Econômico",
    description:
      "Procurador de Justiça no Ministério Público do Estado de São Paulo. Doutor em Direito pela Universidade Nove de Julho – UNINOVE. Palestrante nacional e internacional em temas relacionados à insolvência empresarial.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "julia-schutt",
    name: "Dra. Júlia Schütt",
    role: "Orientadora do Mestrado em Direito Penal Econômico",
    description:
      "Membro Auxiliar da Presidência do Conselho Nacional do Ministério Público. Promotora de Justiça no MPRS. Doutorado em Direito – Compliance Criminal USAL/Espanha.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "luis-fernando-rocha",
    name: "Dr. Luis Fernando Rocha",
    role: "Orientador do Mestrado em Direito Penal Econômico",
    description:
      "Pós-doutorado em Direito – USP (2014–2016). Doutorado em Psicologia – UNESP/Assis (2012). Promotor de Justiça – Ministério Público do Estado de São Paulo.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "jose-vicente",
    name: "Dr. José Vicente",
    role: "Orientador do Mestrado em Direito Penal Econômico",
    description:
      "Graduado em psicologia, com mestrado em psicologia social na Universidade de São Paulo. Ex-secretário Nacional de Segurança Pública. Professor na Academia da Polícia Militar do Barro Branco.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "fabricio-rocha-bastos",
    name: "Dr. Fabrício Rocha Bastos",
    role: "Orientador do Mestrado em Direito Penal Econômico",
    description:
      "Doutorado em Diritto e Tutela – Università degli Studi di Roma Tor Vergata, Itália (2020–2025). Mestrado em Diritto Romano e Sistemi Giuridici Contemporanei – Università degli Studi di Roma Tor Vergata.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "claudia-maria-bezerra",
    name: "Dra. Claudia Maria Da Silva Bezerra",
    role: "Orientadora do Mestrado em Direito Penal Econômico",
    description:
      "Pós-doutoranda em Direito – Universidade Federal do Maranhão (UFMA). Doutora em Administração – Universidade Nove de Julho (UNINOVE).",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "priscila-brolio-goncalves",
    name: "Dra. Priscila Brólio Gonçalves",
    role: "Orientadora do Mestrado em Direito Penal Econômico",
    description:
      "Doutorado em Direito Comercial – Universidade de São Paulo (USP). Visiting Researcher – Ph.D. – London School of Economics (LSE). Advogada e sócia no Brólio Gonçalves Advogados (BGA).",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "fabiano-augusto-petean",
    name: "Dr. Fabiano Augusto Petean",
    role: "Orientador do Mestrado em Direito Penal Econômico",
    description:
      "Doutorado em Direito Político e Econômico – Universidade Presbiteriana Mackenzie. Mestrado em Direito – Instituição Toledo de Ensino (ITE). Professor – Universidade Presbiteriana Mackenzie.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "eudes-vitor-bezerra",
    name: "Dr. Eudes Vitor Bezerra",
    role: "Orientador do Mestrado em Direito Penal Econômico",
    description:
      "Secretário Adjunto dos Direitos Humanos do Maranhão. Professor Permanente do Programa de Pós-Graduação em Ciências Jurídicas (PPGCJ) da Universidade Cesumar (UNICESUMAR).",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "jamil-chaim",
    name: "Dr. Jamil Chaim",
    role: "Orientador do Mestrado em Direito Penal Econômico",
    description:
      "Juiz de Direito em São Paulo. Membro do Departamento Estadual das Execuções Criminais da 7ª Região Administrativa Judiciária de São Paulo desde 2011. Doutor e Mestre em Direito Penal pela PUC/SP.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "ernani-de-menezes",
    name: "Dr. Ernani de Menezes",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Promotor de Justiça do Estado de São Paulo desde 1990. Assessor da Subprocuradoria-Geral de Justiça Jurídica (2020 – presente). Professor da Escola Superior do Ministério Público.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "rogerio-sanches-cunha",
    name: "Dr. Rogério Sanches Cunha",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Promotor de Justiça no Ministério Público de São Paulo (MP/SP). Mestre em Direitos Humanos. Professor de Direito e Processo Penal. Autor de diversas obras jurídicas pela Editora Juspodivm.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "richard-encinas",
    name: "Dr. Richard Encinas",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Promotor de Justiça do Ministério Público do Estado de São Paulo. Ex-Policial Militar do Estado de São Paulo. Secretário Executivo do CyberGaeco – Núcleo de Investigações Cibernéticas.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "marcus-vinicius-carvalho",
    name: "Dr. Marcus Vinicius de Carvalho",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Graduado em Ciências Contábeis e em Direito. MBA em Finanças. Pós-graduação em Direito Penal Econômico e Europeu. Especialização em Direito Societário.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "helena-calado",
    name: "Dra. Helena Calado",
    role: "Professora do Mestrado em Direito Penal Econômico",
    description:
      "Mestre em Direito – USP (2013). Mestre em Direito Político e Econômico – Mackenzie (2010). Especialista em Direito Penal – ESMP/SP (1998). Professora da ACADEPOL/SP desde 2014.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "rodrigo-cabral",
    name: "Dr. Rodrigo Cabral",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Doutor em Ciências Jurídicas e Políticas pela Universidad Pablo de Olavide – Espanha. Promotor de Justiça do Ministério Público do Estado do Paraná. Pesquisador-visitante no Max-Planck-Institut.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "paulo-busato",
    name: "Dr. Paulo Busato",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Graduação em Direito – Universidade Estadual de Londrina (1986). Especialização em Direito Penal Econômico – Universidade de Coimbra (2002). Doutorado em Problemas Atuais do Direito Penal – Universidad Pablo de Olavide.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "fernando-de-oliveira-zonta",
    name: "Dr. Fernando de Oliveira Zonta",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Mestrado em Direito Penal – PUC/SP (2019–2021). Pós-graduação em Direito Penal Econômico – FGV (2016–2017). Coordenador do Grupo de Estudos Avançados em Dogmática Penal – IBCCRIM.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "alexandre-sanches-cunha",
    name: "Dr. Alexandre Sanches Cunha",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Mestrado em Filosofia Clássica – Universidade Estadual de Campinas (UNICAMP). Especialização em Direitos Humanos – Universidade de Coimbra (UC), Portugal. Especialização em Direito Penal – PUC Campinas.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "daniel-alberto-casagrande",
    name: "Dr. Daniel Alberto Casagrande",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Mestrado em Direito – Faculdade de Direito da Universidade de São Paulo (USP). Especialização em Direito Penal Econômico Europeu – Universidade de Coimbra. MBA em Direito Empresarial – FGV.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "andrea-cristina-dangelo",
    name: "Dra. Andréa Cristina D'Angelo",
    role: "Professora do Mestrado em Direito Penal Econômico",
    description:
      "Mestrado em Direito Processual – Universidade de São Paulo (USP). Especialização em Direito Penal Econômico – Universidade de Coimbra (Portugal). Especialização em Direitos Fundamentais – Universidade de Coimbra.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "mario-spinelli",
    name: "Dr. Mário Spinelli",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Professor do Doutorado, do Mestrado e da Graduação da EAESP/FGV. Ex-Diretor Executivo de Governança e Conformidade da Petrobras. Doutor em Administração Pública e Governo pela FGV-SP.",
    social: {
      instagram: "",
    },
    facultyOf: ["direito-penal-economico"],
  },
  {
    slug: "alexandre-daiuto-noal",
    name: "Dr. Alexandre Daiuto Leão Noal",
    role: "Professor do Mestrado em Direito Penal Econômico",
    description:
      "Formado em 2005 pelas FMU. Especialista em Processo Penal pela Escola Paulista da Magistratura de São Paulo (2007). Mestre em Direito Penal Econômico pela Escola de Direito da FGV-SP.",
    social: {
      instagram: "https://www.instagram.com/alexandrenoal.profissional/",
    },
    facultyOf: ["direito-penal-economico"],
  },
];

export function getPersonBySlug(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}

export function getAllPeople(): Person[] {
  return people;
}

/** Pessoas de uma lista de slugs, na mesma ordem, ignorando slugs não encontrados. */
export function getPeopleBySlugs(slugs: string[]): Person[] {
  return slugs
    .map((slug) => getPersonBySlug(slug))
    .filter((p): p is Person => Boolean(p));
}

/** Corpo docente de um mestrado específico. */
export function getFacultyByMaster(masterSlug: string): Person[] {
  return people.filter((p) => p.facultyOf?.includes(masterSlug));
}

/** Todo mundo que é corpo docente de pelo menos um mestrado, de qualquer curso. */
export function getAllFaculty(): Person[] {
  return people.filter((p) => (p.facultyOf?.length ?? 0) > 0);
}

export type RoleCategory = "coordenador" | "orientador" | "docente";

export const ROLE_CATEGORY_LABEL: Record<RoleCategory, string> = {
  coordenador: "Coordenador",
  orientador: "Orientador",
  docente: "Professor",
};

/**
 * Categoriza a função de uma pessoa a partir do texto livre em `role`
 * (ex.: "Coordenadora Acadêmica" -> "coordenador"). É uma heurística —
 * assim que existir um campo estruturado de função, trocar por ele aqui
 * é a única mudança necessária, todo o resto do site continua igual.
 */
export function getRoleCategory(role: string): RoleCategory {
  const lower = role.toLowerCase();
  if (lower.includes("coordenador") || lower.includes("coordenadora"))
    return "coordenador";
  if (lower.includes("orientador") || lower.includes("orientadora"))
    return "orientador";
  return "docente";
}
