export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const copyFor = (locale: Locale) =>
  locale === "es"
    ? {
        nav: { home: "Inicio", guides: "Guías", steam: "Steam" },
        labels: { startHere: "Empieza aquí", missionIntel: "Información de misión", planned: "Próximamente" },
      }
    : {
        nav: { home: "Home", guides: "Guides", steam: "Steam" },
        labels: { startHere: "Start Here", missionIntel: "Mission Intel", planned: "Planned guide" },
      };
