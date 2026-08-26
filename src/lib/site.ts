import type { Locale } from "@/lib/i18n";
import { guidesFor, type GuideCard } from "@/lib/guides";

type SiteCopy = {
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trailerLabel: string;
  };
  facts: { label: string; value: string }[];
  startTitle: string;
  intelTitle: string;
  intelParagraphs: string[];
  intelFacts: { label: string; value: string }[];
  popularTitle: string;
  popularDescription: string;
  finalTitle: string;
  finalDescription: string;
  finalPrimary: string;
  finalSecondary: string;
  footerDescription: string;
};

const english: SiteCopy = {
  hero: {
    eyebrow: "Fan-Made Community Wiki",
    titleLead: "Twisted",
    titleAccent: "Tower",
    description:
      "A first-person action-adventure horror shooter set inside an abandoned 1950s resort. Fight corrupted mascots, solve twisted puzzles, and climb five deadly levels.",
    primaryCta: "Start the Walkthrough",
    secondaryCta: "Explore All Guides",
    trailerLabel: "Official Launch Trailer",
  },
  facts: [
    { label: "Release Date", value: "Aug 18, 2026" },
    { label: "Platform", value: "PC / Steam" },
    { label: "Main Areas", value: "5 Levels" },
    { label: "Genre", value: "Horror Shooter" },
  ],
  startTitle: "Your Twisted Tower Journey",
  intelTitle: "What is Twisted Tower?",
  intelParagraphs: [
    "Twisted Tower is a first-person action-adventure horror shooter developed by Atmos Games and published by 3D Realms.",
    "Explore a deserted resort filled with corrupted fairy-tale mascots, deadly traps, twisted puzzles, and movement toys that open new routes.",
  ],
  intelFacts: [
    { label: "Developer", value: "Atmos Games" },
    { label: "Publisher", value: "3D Realms" },
    { label: "Platform", value: "PC via Steam" },
    { label: "Achievements", value: "18" },
    { label: "Game Language", value: "English Only" },
  ],
  popularTitle: "Popular Guide",
  popularDescription:
    "Start with the research-aware route index for all five floors, then return to the directory for planned puzzle, boss, and secrets topics.",
  finalTitle: "Ready to climb the tower?",
  finalDescription:
    "Use the community wiki as a clear route companion from the abandoned resort entrance to the top of Twisted Tower.",
  finalPrimary: "Read the Walkthrough",
  finalSecondary: "Play on Steam",
  footerDescription:
    "An independent fan-made guide site for Twisted Tower. Not affiliated with Atmos Games or 3D Realms.",
};

const spanish: SiteCopy = {
  hero: {
    eyebrow: "Wiki comunitaria hecha por fans",
    titleLead: "Twisted",
    titleAccent: "Tower",
    description:
      "Un shooter de terror y acción en primera persona dentro de un resort abandonado de los años 50. Enfréntate a mascotas corruptas, resuelve puzles retorcidos y sube cinco niveles mortales.",
    primaryCta: "Empezar la guía",
    secondaryCta: "Explorar todas las guías",
    trailerLabel: "Tráiler oficial de lanzamiento",
  },
  facts: [
    { label: "Lanzamiento", value: "18 ago 2026" },
    { label: "Plataforma", value: "PC / Steam" },
    { label: "Áreas principales", value: "5 niveles" },
    { label: "Género", value: "Shooter de terror" },
  ],
  startTitle: "Tu recorrido por Twisted Tower",
  intelTitle: "¿Qué es Twisted Tower?",
  intelParagraphs: [
    "Twisted Tower es un shooter de terror y acción en primera persona desarrollado por Atmos Games y publicado por 3D Realms.",
    "Explora un resort abandonado lleno de mascotas de cuentos corrompidas, trampas mortales, puzles retorcidos y juguetes de movimiento que abren nuevas rutas.",
  ],
  intelFacts: [
    { label: "Desarrollador", value: "Atmos Games" },
    { label: "Editor", value: "3D Realms" },
    { label: "Plataforma", value: "PC mediante Steam" },
    { label: "Logros", value: "18" },
    { label: "Idioma del juego", value: "Solo inglés" },
  ],
  popularTitle: "Guía popular",
  popularDescription:
    "Empieza con el índice de ruta de los cinco niveles y vuelve al directorio para consultar los temas planeados sobre puzles, jefes y secretos.",
  finalTitle: "¿Listo para subir la torre?",
  finalDescription:
    "Usa esta wiki comunitaria como compañera de ruta desde la entrada del resort abandonado hasta la cima de Twisted Tower.",
  finalPrimary: "Leer la guía completa",
  finalSecondary: "Jugar en Steam",
  footerDescription:
    "Un sitio de guías independiente hecho por fans de Twisted Tower. No está afiliado a Atmos Games ni a 3D Realms.",
};

export const siteCopyFor = (locale: Locale): SiteCopy => (locale === "es" ? spanish : english);

export const startHereGuidesFor = (locale: Locale): GuideCard[] => {
  const guides = guidesFor(locale);
  const startHereSlugs = ["walkthrough", "puzzle-solutions", "bosses", "weapons"];
  return startHereSlugs.flatMap((slug) => guides.filter((guide) => guide.slug === slug));
};
