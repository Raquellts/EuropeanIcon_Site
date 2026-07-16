export interface ScheduleItem {
  slugs?: string[];
  time: string;
  title: string;
  description?: string;
  speaker?: string;
  type: "palestra" | "painel" | "coffee" | "credenciamento" | "encerramento";
}

export interface ScheduleDay {
  date: string;
  day: string;
  items: ScheduleItem[];
}

export const schedule: ScheduleDay[] = [
  {
    date: "09 de julho",
    day: "Quinta-feira",
    items: [
      {
        time: "08:30",
        title: "Credenciamento & Coffee Break",
        type: "credenciamento",
      },
      {
        time: "09:00",
        title: "Peculiaridades essenciais do moderno Direito Penal Econômico",
        description:
          "Palestra magna sobre as características fundamentais do Direito Penal Econômico contemporâneo e sua expansão dogmática.",
        speaker: "Prof. Dr. Carlos Martínez-Buján Pérez",
        slugs: ["carlos"],
        type: "palestra",
      },
      {
        time: "11:30",
        title: "Intervalo Coffee Break",
        type: "coffee",
      },
      {
        time: "11:45",
        title: "Crime de Lavagem de Dinheiro",
        description:
          "Análise aprofundada sobre o crime de lavagem de dinheiro no contexto jurídico-penal português e europeu.",
        speaker: "Prof. Dr. Nuno Brandão",
        slugs: ["nuno"],
        type: "palestra",
      },
      {
        time: "13:30",
        title: "Debate Acadêmico",
        description:
          "Debate com análise crítica dos temas abordados, promovendo reflexão e troca de ideias entre os participantes.",
        speaker:
          "Prof. Dr. Arthur Pinto de Lemos Junior & Profª. Drª. Regina Helena Fonseca Fortes-Furtado",
        slugs: ["arthur", "regina"],
        type: "painel",
      },
      {
        time: "14:30",
        title: "Encerramento do 1º Dia",
        type: "encerramento",
      },
    ],
  },
  {
    date: "10 de julho",
    day: "Sexta-feira",
    items: [
      {
        time: "08:30",
        title: "Credenciamento & Coffee Break",
        type: "credenciamento",
      },
      {
        time: "09:00",
        title: "Directiva do Confisco de vantagens de origem criminosa",
        description:
          "Análise da Diretiva (UE) 2024/1260 sobre perda de bens de origem criminosa e seu processo de transposição em Portugal.",
        speaker: "Prof. Dr. Pedro Caeiro",
        slugs: ["pedro"],
        type: "palestra",
      },
      {
        time: "11:30",
        title: "Intervalo Coffee Break",
        type: "coffee",
      },
      {
        time: "11:45",
        title: "Debate Acadêmico",
        description:
          "Debate final com considerações sobre os temas abordados e perspectivas futuras do Direito Penal Econômico.",
        speaker:
          "Prof. Dr. Arthur Pinto de Lemos Junior & Profª. Drª. Regina Helena Fonseca Fortes-Furtado",
        slugs: ["arthur", "regina"],
        type: "painel",
      },
      {
        time: "14:30",
        title: "Encerramento do 2º Dia",
        type: "encerramento",
      },
    ],
  },
];
