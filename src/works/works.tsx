import type { WorkItem } from "../types";
import { ParaMiAbuela } from "./pages/Abuela/ParaMiAbuela";
import { WhatsInABox } from "./pages/Box/WhatsInABox";
import { Escondida } from "./pages/Escondida/Escondida";
import { SoladitoMarinero } from "./pages/SoladitoMarinero/SoladitoMarinero";
import { TheAsleepMind } from "./pages/Asleep/TheAsleepMind";

export const works: WorkItem[] = [
  { title: "the asleep mind", year: "2025", element: <TheAsleepMind /> },
  { title: "Escondida", year: "2025", isPoem: true, element: <Escondida /> },
  { title: "Soladito Marinero", year: "2023", element: <SoladitoMarinero /> },
  { title: "What's In a Box", year: "2023", element: <WhatsInABox /> },
  { title: "Para Mi Abuela", year: "2021", element: <ParaMiAbuela /> },
];
