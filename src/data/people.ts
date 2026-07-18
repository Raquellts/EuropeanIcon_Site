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
}

export const people: Person[] = [
  {
    "slug": "carlos",
    "name": "Prof. Dr. Carlos Martínez-Buján Pérez",
    "role": "Catedrático de Direito Penal (Espanha)",
    "description": "Uma das maiores autoridades internacionais em Direito Penal Econômico. Autor do tratado 'Derecho Penal Económico y de la Empresa', referência para magistrados e advogados na Espanha e América Latina.",
    "city": "Santiago de Compostela",
    "country": "Espanha",
    "countryCode": "es",
    "curriculum": "Catedrático de Direito Penal (Espanha). Uma das maiores autoridades internacionais em Direito Penal Econômico. Autor do tratado 'Derecho Penal Económico y de la Empresa', referência para magistrados e advogados na Espanha e América Latina. Ex-Diretor da Escola de Prática Jurídica da Universidade de Santiago de Compostela. Ex-Secretário do Instituto de Criminologia da Universidade de Santiago de Compostela. Defensor de uma visão favorável, com ressalvas, sobre a expansão do Direito Penal Econômico.",
    "areas": [
      "Direito Penal Econômico",
      "Direito Penal Empresarial"
    ],
    "social": {},
    "facultyOf": [
      "direito-penal-economico"
    ]
  },
  {
    "slug": "nuno",
    "name": "Prof. Dr. Nuno Brandão",
    "role": "Professor da Faculdade de Direito - Universidade de Coimbra",
    "description": "Professor da Faculdade de Direito da Universidade de Coimbra desde 2000. Doutor em Ciências Jurídico-Criminais. Advogado e conferencista em dezenas de colóquios e formações em Portugal e no estrangeiro.",
    "city": "Coimbra",
    "country": "Portugal",
    "countryCode": "pt",
    "curriculum": "Professor da Faculdade de Direito - Universidade de Coimbra, desde 2000. Doutor em Ciências Jurídico-Criminais pela Faculdade de Direito - Universidade de Coimbra (2013). Advogado. Conferencista em dezenas de colóquios e formações, em Portugal e no estrangeiro. Autor de monografias e de artigos nas áreas do direito penal e do direito processual penal.",
    "areas": [
      "Direito Penal",
      "Direito Processual Penal",
      "Crime de Lavagem de Dinheiro"
    ],
    "social": {},
    "facultyOf": [
      "direito-penal-economico"
    ]
  },
  {
    "slug": "pedro",
    "name": "Prof. Dr. Pedro Caeiro",
    "role": "Professor da Faculdade de Direito - Universidade de Coimbra (FDUC)",
    "description": "Referência internacional em Direito Penal Europeu, Direito Internacional Penal e Cooperação Judiciária. Membro do Grupo de Peritos em Política Criminal - Comissão Europeia de 2012 a 2024.",
    "city": "Coimbra",
    "country": "Portugal",
    "countryCode": "pt",
    "curriculum": "Professor da Faculdade de Direito - Universidade de Coimbra (FDUC). Referência internacional em Direito Penal Europeu, Direito Internacional Penal e Cooperação Judiciária. Membro do Grupo de Peritos em Política Criminal - Comissão Europeia 2012 a 2024. Membro fundador da ECLAN e Editor da Elgar Encyclopedia of Crime and Criminal Justice. Designado pela Ministra da Justiça para presidir o grupo que elaborou o anteprojeto de transposição da Diretiva (UE) 2024/1260 sobre perda de bens de origem criminosa, atualmente em discussão na Assembleia da República.",
    "areas": [
      "Direito Penal Europeu",
      "Direito Internacional Penal",
      "Cooperação Judiciária",
      "Confisco de Vantagens Criminosas"
    ],
    "social": {},
    "facultyOf": [
      "direito-penal-economico"
    ]
  },
  {
    "slug": "arthur",
    "name": "Prof. Dr. Arthur Pinto de Lemos Junior",
    "role": "Procurador de Justiça do Ministério Público de São Paulo (MPSP)",
    "description": "Procurador de Justiça do MPSP. Mestre em Ciências Jurídico-Criminais e Especialista em Direito Penal Econômico pela Universidade de Coimbra. Subprocurador-Geral de Justiça de Relações Institucionais do MPSP.",
    "city": "São Paulo",
    "country": "Brasil",
    "countryCode": "br",
    "curriculum": "Procurador de Justiça do Ministério Público de São Paulo (MPSP). Mestre em Ciências Jurídico-Criminais e Especialista em Direito Penal Econômico pela Universidade de Coimbra, Portugal. Foi Secretário do Conselho Superior do Ministério Público de São Paulo (2024 a 2025). Atual Subprocurador-Geral de Justiça de Relações Institucionais do Ministério Público de São Paulo. Nomeado em 2025 como membro do Conselho Nacional de Segurança Pública e Defesa Social (CNSP) pelo Ministério da Justiça. Coordenador científico do Mestrado Internacional em Direito Penal Econômico pelo European Institute e professor de cursos de capacitação contra a lavagem de dinheiro no Ministério da Justiça.",
    "areas": [
      "Direito Penal Econômico",
      "Lavagem de Dinheiro",
      "Segurança Pública"
    ],
    "social": {},
    "facultyOf": [
      "direito-penal-economico"
    ]
  },
  {
    "slug": "regina",
    "name": "Profª. Drª. Regina Helena Fonseca Fortes-Furtado",
    "role": "Professora de Direito Penal e Criminologia na Universidade de Oviedo",
    "description": "Doutora em Direito Penal pela Universitat Pompeu Fabra. Ex-Promotora de Justiça do Ministério Público de São Paulo. Desenvolve pesquisas em Direito Penal Econômico, criminalidade empresarial, crimes ambientais e inovação tecnológica.",
    "city": "Oviedo",
    "country": "Espanha",
    "countryCode": "es",
    "curriculum": "Professora de Direito Penal e Criminologia na Universidade de Oviedo. Doutora em Direito Penal pela Universitat Pompeu Fabra. Foi Promotora de Justiça do Ministério Público de São Paulo. Possui produção acadêmica internacional e desenvolve pesquisas em Direito Penal Econômico, criminalidade empresarial, crimes ambientais, inovação tecnológica, discriminação e criminalidade de gênero contra a mulher.",
    "areas": [
      "Direito Penal Econômico",
      "Criminalidade Empresarial",
      "Crimes Ambientais",
      "Inovação Tecnológica",
      "Criminologia"
    ],
    "social": {},
    "facultyOf": [
      "direito-penal-economico"
    ]
  },
  {
    "slug": "bruno",
    "name": "Dr. Bruno Perez de Almeida Lopes",
    "role": "Advogado e Consultor de Negócios Internacionais",
    "description": "Advogado, business coaching e consultor de negócios internacionais. Formado pela Universidade Estácio de Sá (2013), com licença para atuar no Brasil (OAB SP 346.638) e em Portugal (OA 687759). LL.M. em Direito Internacional e Mestre em Direito Marítimo, Alfândega e Comércio Internacional pela Maritime Law Academy. Ex-membro da tripulação de navios, tendo visitado mais de 60 países. Lidera o escritório Bruno Lopes - International Law Firm, onde se especializa em processos de internacionalização e planejamento imigratório. Membro da BACC - Câmara de Comércio Brasil-Estados Unidos (do Sudeste).",
    "email": "Brunolopeslaw@gmail.com",
    "city": "Figueira da Foz",
    "country": "portugal",
    "countryCode": "pt",
    "areas": [
      "Direito Internacional",
      "Direito Marítimo",
      "Direito da Imigração",
      "Direito Empresarial"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/brunolopeslaw/"
    },
    "contact": "+351 927 997 875"
  },
  {
    "slug": "davide",
    "name": "Dr. Davide Pereira Rodrigues",
    "role": "Mestrando em Ciências Jurídico-Criminais",
    "description": "Mestrando em Ciências Jurídico-Criminais na Faculdade de Direito da Universidade de Coimbra. Bolseiro Novos Talentos 2025 da Fundação Calouste Gulbenkian. Monitor da Secção de Ciências Jurídico-Criminais da FDUC desde 2026. Premiado em múltiplas edições com prémios académicos, incluindo Prémio Doutor Beleza dos Santos e Prémio Doutor Guilherme Moreira.",
    "email": "davide_mr@hotmail.com",
    "city": "coimbra",
    "country": "portugal",
    "countryCode": "pt",
    "areas": [
      "Direito Penal",
      "Ciências Jurídico-Criminais"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/davide__rodrigues/"
    },
    "contact": "+351 911 831 277"
  },
  {
    "slug": "renato",
    "name": "Dr. Renato Coletti de Barros",
    "role": "Advogado e Consultor Empresarial",
    "description": "Advogado licenciado em Portugal, Reino Unido e Brasil. Pós-graduado e bacharel em Direito pela Universidade Presbiteriana Mackenzie (São Paulo) e pela Universidade Católica Portuguesa (Porto). Membro do CCBE – Conseil des barreaux européens – Council of Bars and Law Societies of Europe. Membro da ABA (Associação Brasileira de Advogados) e atual Diretor da ABA Portugal Porto. Consultor empresarial estratégico, atuante em projetos de Vistos de Autorização de Residência por Investimento (ARI), os chamados Vistos Gold. Negociador, mediador e conciliador lusófono no Brasil e na União Europeia pelo ICFML – Instituto de Certificação e Formação de Mediadores Lusófonos. Membro do IBDESC – Instituto Brasileiro de Direito Estrangeiro e Comparado.",
    "email": "renatocolettidebarros@gmail.com",
    "city": "Porto",
    "country": "portugal",
    "countryCode": "pt",
    "areas": [
      "Direito da Imigração",
      "Direito Empresarial",
      "Mediação"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/renatodebarros/"
    },
    "contact": "+351 910 519 051"
  },
  {
    "slug": "magalhaes",
    "name": "Dr. José Magalhães Barbosa Junior",
    "role": "Advogado",
    "description": "Advogado em prática isolada desde 2008 (Cédula Profissional n.º 45759P), com vasta experiência em múltiplas áreas do Direito. Licenciado em Direito pela Faculdade de Direito da Universidade do Porto. Pós-graduado em Direito Fiscal e com frequência de Mestrado em Ciências Jurídico-Filosóficas. Concluiu Curso Avançado em Compliance. Fluente em Inglês.",
    "email": "mbjunior45759p@gmail.com",
    "areas": [
      "Direito Comercial",
      "Direito Civil",
      "Direito do Trabalho",
      "Direito Penal",
      "Direito da Família e Sucessões",
      "Direito Fiscal"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/mbarbosajr_adv/"
    },
    "contact": "+351 963 442 929"
  },
  {
    "slug": "carolina",
    "name": "Dra. Carolina Porto",
    "role": "Advogada Criminalista",
    "description": "Advogada criminalista com mais de 10 anos de atuação combativa na defesa dos direitos e garantias fundamentais, atuando no Brasil e em Portugal. Presidente da Comissão de Direito Penal Comparado Brasil x Portugal da ANACRIM Costa do Sol. Dedica sua trajetória à advocacia criminal estratégica, técnica e humanizada, com especial atuação em casos criminais complexos.",
    "email": "carolina.porto.adv@gmail.com",
    "areas": [
      "Direito Penal",
      "Direito Criminal"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/carolinaporto.advcriminal/"
    },
    "contact": "+351 936 982 893"
  },
  {
    "slug": "debora",
    "name": "Dra. Débora Cristina de Alcântara Ferreira",
    "role": "",
    "email": "debyalcantara@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/it_deboraferreira/"
    },
    "contact": "+55 11 98651 8866"
  },
  {
    "slug": "emilia",
    "name": "Dra. Emilia do Carmo Afonso Ferreira Estrangeiro",
    "role": "Apoio Jurídico ao Diretor DAG — DN — PSP",
    "description": "Licenciada em Direito pela Universidade Internacional de Lisboa. Jurista no Ministério da Administração Interna (MAI), atuando no apoio jurídico ao Diretor DAG da Polícia de Segurança Pública. Experiência no Gabinete de Apoio Jurídico do Comando da PSP Lisboa, no Departamento de Armas e Explosivos e no Gabinete de Assuntos Jurídicos da DN-PSP-MAI. Formadora no Instituto Superior de Ciências Policiais e Segurança Interna (ISCPSI) nas áreas de Direito Penal e Processo Penal. Membro do Clube G100 — Asa Communication, Advocacy & Mediation. Membro Imortal da Academia de Ciências, História, Arte e Literatura (ABRACIS). Idealizadora do Clube de Direitos e Negócios. Premiada em 2023 com o Galardão de Mérito 'Ativismo Cultural e Transformação Social'. Condecorada em 2025 com o Diploma e Comenda do Mérito Feminino — Grau de Dama Comendadora. Autora em seis livros em coautoria, um dos quais bestseller.",
    "email": "emilia.estrangeiro@gmail.com",
    "country": "portugal",
    "countryCode": "pt",
    "areas": [
      "Direito Penal",
      "Direito Internacional",
      "Direito Processual Penal",
      "Direito Administrativo"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/mila.ferreira16/"
    },
    "contact": "+351 965 009 814"
  },
  {
    "slug": "isabela",
    "name": "Dra. Isabela Fragoso Blanco",
    "role": "",
    "email": "Isabella.blanco@hotmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/isabelafragosoblanco/"
    },
    "contact": "+351 910 715 653"
  },
  {
    "slug": "karina",
    "name": "Dra. Karina Bagnatori",
    "role": "",
    "email": "karinabagnatori@mpsp.mp.br",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/karinabagnatori/"
    },
    "contact": "+55 11 99936 2092"
  },
  {
    "slug": "kelly",
    "name": "Dra. Kelly Soares",
    "role": "",
    "email": "adv.kellysoaressilva@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/kellysoares/"
    },
    "contact": "+351 933 916 930"
  },
  {
    "slug": "marcela",
    "name": "Dra. Marcela Camargo",
    "role": "",
    "email": "adv.marcelacamargo@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/marcelacamargo.advcriminal/"
    },
    "contact": "+351 914 017 603"
  },
  {
    "slug": "marcia",
    "name": "Dra. Márcia Haidée Evangelista Bezerra",
    "role": "",
    "email": "mhadv.pt@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/marciahaidee.advcriminal/"
    },
    "contact": "+351 936 224 633"
  },
  {
    "slug": "marianna",
    "name": "Dra. Marianna Guimarães Figueiredo",
    "role": "Managing Partner — MGF Advogados",
    "description": "Managing Partner da MGF Advogados (Portugal) e MGFN Advogados (Brasil). Advogada inscrita na Ordem dos Advogados de Portugal e na Ordem dos Advogados do Brasil. Dedica-se à estruturação jurídica de operações complexas entre Portugal, Brasil e outros mercados internacionais, liderando uma estrutura jurídica multidisciplinar orientada para assessoria estratégica de elevado valor acrescentado.",
    "email": "dra.mgfigueiredo@gmail.com",
    "areas": [
      "Direito Internacional Privado",
      "Direito da Imigração",
      "Direito da Família Internacional",
      "Direito Empresarial",
      "Direito Imobiliário",
      "Direito Administrativo"
    ],
    "social": {
      "linkedin": "marianna-guimarães-figueiredo",
      "instagram": "https://www.instagram.com/dra.mariannaguimaraes/"
    },
    "contact": "+351 925 920 511"
  },
  {
    "slug": "michela",
    "name": "Dra. Michela Cunto",
    "role": "Advogada",
    "description": "Advogada inscrita na Ordem dos Advogados de Portugal, com atuação voltada ao Direito Internacional, Direito da Imigração, Direito da Família, Direito Civil e Direito Penal. Experiência na assessoria jurídica em processos administrativos e judiciais nas áreas de mobilidade internacional, nacionalidade, regularização migratória e relações familiares transnacionais. Parceira Jurídica do Instituto IBR.",
    "email": "michelacm.adv@gmail.com",
    "city": "Vila Nova de Gaia",
    "country": "portugal",
    "countryCode": "pt",
    "areas": [
      "Direito Internacional",
      "Direito da Imigração",
      "Direito da Família",
      "Direito Civil",
      "Direito Penal"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/michelacm.adv/"
    },
    "contact": "+351 910 331 483"
  },
  {
    "slug": "ray",
    "name": "Dra. Rayanne Monteiro de Andrade Santos",
    "role": "Managing Partner — Ray Andrade International Law Firm",
    "description": "Sócia-Fundadora e Managing Partner da Ray Andrade International Law Firm, com prática consultiva e contenciosa em Portugal, Brasil e União Europeia. Mestranda em Ciências Criminais pela Universidade do Minho. Especialista em Direito Penal Económico Internacional, com investigação centrada em branqueamento de capitais através de criptoativos numa perspetiva comparada Brasil-União Europeia.",
    "email": "ray.andrade.adv@gmail.com",
    "areas": [
      "Direito Penal Económico",
      "Direito de Família Internacional",
      "Compliance",
      "Direito de Imigração e Nacionalidade",
      "Direito Corporativo e Financeiro"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/rayy.law/"
    },
    "contact": "+351 926 943 151"
  },
  {
    "slug": "roberta",
    "name": "Dra. Roberta Gadelha dos Santos",
    "role": "",
    "email": "r.betaadv@hotmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/roberta_gadelha.advcriminal/"
    },
    "contact": "+351 927 276 198"
  },
  {
    "slug": "sofia",
    "name": "Dra. Sofia Alexandra Gonçalves Nunes",
    "role": "",
    "email": "sofiaagnunes@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/sofia_nunesss/"
    },
    "contact": "+351 932 895 781"
  },
  {
    "slug": "solbei",
    "name": "Dra. Solbei Karina Ferreira Delpino",
    "role": "",
    "email": "adv.solbeikarina@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/advsolbeikarina/"
    },
    "contact": "+55 11 99279 0537"
  },
  {
    "slug": "valeria",
    "name": "Dra. Valéria Bordini Starling de Carvalho",
    "role": "Advogada — Fundadora da Bordini Starling Advocacia",
    "description": "Advogada em Portugal (OA n.º 59472L) e Brasil (OAB/RJ n.º 101.074). Fundadora e Diretora da Bordini Starling – Advocacia, Unipessoal Lda., sediada em Cascais. Mestre em Direito e Prática Jurídica pela Faculdade de Direito da Universidade de Lisboa (FDUL), MBA em Direito da Economia e da Empresa pela FGV e Licenciada em Direito pela PUC-Rio. Atua em Direito Internacional Privado, Família e Sucessões, Direito Penal, Imigração e Nacionalidade.",
    "email": "bordinistarling@bordinistarlingadvocacia.com",
    "city": "Cascais",
    "country": "portugal",
    "countryCode": "pt",
    "areas": [
      "Direito Internacional Privado",
      "Direito de Família e Sucessões",
      "Direito Penal",
      "Direito Administrativo",
      "Direito da Imigração e Nacionalidade"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/bordinistarlingadvocacia/"
    },
    "contact": "+351 910 864 633"
  },
  {
    "slug": "vanessa",
    "name": "Dra. Vanessa Lopes Gama",
    "role": "",
    "email": "contato@vg-adv.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/vanessagama_adv/"
    },
    "contact": "+351 938 097 322"
  },
  {
    "slug": "maria-joao",
    "name": "Dra. Maria João Crispim Rebelo Guinote",
    "role": "Advogada",
    "description": "Licenciada em Direito pela Universidade Autónoma de Lisboa (2002). Exerce advocacia desde 2006, com atuação nas áreas do Direito Administrativo, Direito Fiscal, Direito Civil e Direito Penal. Atualmente em prática individual, tendo anteriormente exercido funções em sociedade de advogados da qual foi sócia entre 2021 e março de 2026. Tem especial interesse no Direito Penal Económico, corrupção e branqueamento de capitais.",
    "email": "adv@mjguinote.pt",
    "city": "Caldas da Rainha",
    "country": "portugal",
    "countryCode": "pt",
    "areas": [
      "Direito Administrativo",
      "Direito Fiscal",
      "Direito Civil",
      "Direito Penal",
      "Direito Penal Económico"
    ],
    "social": {
      "linkedin": "",
      "instagram": ""
    },
    "contact": "+351 914 917 781"
  },
  {
    "slug": "tatianne",
    "name": "Dra. Tatianne Caldeira de Oliveira",
    "role": "Advogada Criminalista",
    "description": "Advogada criminalista com dupla inscrição profissional — Brasil (OAB/MG) e Portugal (OA). Titular de escritório próprio sediado em Leiria, com atuação em todo o território português. Advocacia de forte vocação contenciosa, com condução integral do processo penal — do inquérito ao julgamento e aos recursos. Pós-graduada em Direito Penal e Processo Penal e em Direito de Trânsito. Atua também em Direito da Imigração.",
    "email": "tatiannecaldeira-66964P@adv.oa.pt",
    "city": "Leiria",
    "country": "portugal",
    "countryCode": "pt",
    "areas": [
      "Direito Penal",
      "Direito Penal Económico",
      "Direito da Imigração",
      "Processo Penal"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/caldeiratatianne/"
    },
    "contact": "+351 928 308 430"
  },
  {
    "slug": "adriano",
    "name": "Dr. Adriano Teixeira Guimarães",
    "role": "",
    "email": "ateixeiraguimaraes@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/ateixeirag/"
    },
    "contact": "+351 927 247 099"
  },
  {
    "slug": "antonio",
    "name": "Dr. António José Roma de Magalhães Filipe",
    "role": "Chefe do Núcleo de Deontologia e Disciplina — PSP",
    "description": "Chefe do Núcleo de Deontologia e Disciplina do Comando Metropolitano do Porto da Polícia de Segurança Pública. Licenciado em Direito pela Faculdade de Direito da Universidade Portucalense. Experiência em supervisão de processos disciplinares, inquéritos, averiguações e processos de reabilitação. Articulação institucional com Inspeções, Tribunais e Ministério Público em matérias de natureza disciplinar e criminal. Formador da Bolsa de Formadores da PSP nas áreas de Processo Administrativo e Processo Penal, e formador das Polícias Municipais na área dos Direitos Fundamentais. Condecorado por Serviços Distintos e com diversos Louvores de Mérito.",
    "email": "ajrfilipe@psp.pt",
    "city": "Porto",
    "country": "portugal",
    "countryCode": "pt",
    "areas": [
      "Direito Penal",
      "Direito Administrativo",
      "Processo Penal",
      "Direitos Fundamentais"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/ajrfilipe/"
    },
    "contact": "+351 657 724 52"
  },
  {
    "slug": "catarina",
    "name": "Dra. Catarina Zuccaro",
    "role": "Advogada Internacional",
    "description": "Advogada internacional luso-brasileira com 26 anos de atuação. Mestre em Direitos Humanos e Direito Internacional e pós-graduanda em Direito da Insolvência e Recuperação de Empresas. Com uma trajetória marcada pela atuação em Direito Internacional, imigração, nacionalidade, direitos humanos, empreendedorismo jurídico e justiça global, alia experiência técnica, visão estratégica e compromisso com a defesa de direitos. Professora de pós-graduação em Direito Internacional e palestrante. Presidente da Comissão de Empreendedorismo Jurídico Internacional do IBDESC e idealizadora do Law Summer.",
    "email": "cmz1702@icloud.com",
    "areas": [
      "Direito Internacional",
      "Direito da Imigração",
      "Direitos Humanos",
      "Direito da Insolvência"
    ],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/catarina.zuccaro/"
    },
    "contact": "+351 960 107 474"
  },
  {
    "slug": "monica",
    "name": "Dra. Mónica Costa",
    "role": "Advogada",
    "description": "Advogada com mais de 18 anos de experiência nas áreas de Direito de Família e Menores, Direito Penal e Direito Executivo, complementada por um percurso sólido na recuperação de crédito e negociação extrajudicial. Experiência consolidada na gestão de processos judiciais e extrajudiciais, análise documental, negociação de acordos de pagamento e relacionamento com clientes. Licenciada em Direito pela Universidade Autónoma de Lisboa. Pós-graduada em Práticas Forenses pela Universidade Autónoma de Lisboa.",
    "email": "monicacosta-20989l@adv.oa.pt",
    "country": "portugal",
    "countryCode": "pt",
    "areas": [
      "Direito Penal",
      "Direito Executivo",
      "Direito de Insolvência",
      "Direito de Família e Menores"
    ],
    "social": {
      "linkedin": "",
      "instagram": ""
    },
    "contact": "+351 963 044 288"
  },
  {
    "slug": "sonia",
    "name": "Dra. Sónia Donoso de Barros",
    "role": "",
    "email": "soniadonosodebarros@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/soniadebarros/"
    },
    "contact": "+351 910 585 635"
  },
  {
    "slug": "tatiana",
    "name": "Dra. Tatiana Costa Mota",
    "role": "",
    "email": "tatiana.adv.mota@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/tatiana.costa.mota/"
    },
    "contact": "+351 914 932 749"
  },
  {
    "slug": "teresa",
    "name": "Dra. Teresa Carlota Dias Gonçalves Cortesão Martinho",
    "role": "",
    "email": "teresacarlota5@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": ""
    },
    "contact": "+351 924 112 566"
  },
  {
    "slug": "walber",
    "name": "Dr. Walber Ribeiro D'Assumpção",
    "role": "",
    "email": "walber.rda@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/walberadvogado/"
    },
    "contact": "+351 932 316 409"
  },
  {
    "slug": "miguel",
    "name": "Dr. Miguel Mateus Teixeira",
    "role": "",
    "email": "miguelmateusteixeira@gmail.com",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": "https://www.instagram.com/miguelmateusteixeira/"
    },
    "contact": "+351 967 201 457"
  },
  {
    "slug": "convidado",
    "name": "CONVIDADO",
    "role": "",
    "areas": [],
    "social": {
      "linkedin": "",
      "instagram": ""
    },
    "contact": "+351 961 945 870"
  }
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
