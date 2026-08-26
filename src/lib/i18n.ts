export const locales = ["en", "es", "de", "ja"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

const localizedCopy = {
  en: {
    nav: { home: "Home", guides: "Guides", steam: "Steam" },
    labels: { startHere: "Start Here", missionIntel: "Mission Intel", planned: "Planned guide", redeemCodes: "Redeem codes", completeWalkthrough: "Complete Walkthrough", openGuide: "Open the guide" },
  },
  es: {
    nav: { home: "Inicio", guides: "Guías", steam: "Steam" },
    labels: { startHere: "Empieza aquí", missionIntel: "Información de misión", planned: "Próximamente", redeemCodes: "Códigos de canje", completeWalkthrough: "Guía completa", openGuide: "Abrir la guía" },
  },
  de: {
    nav: { home: "Startseite", guides: "Guides", steam: "Steam" },
    labels: { startHere: "Hier beginnen", missionIntel: "Missionsdaten", planned: "Geplanter Guide", redeemCodes: "Einlösecodes", completeWalkthrough: "Komplettlösung", openGuide: "Guide öffnen" },
  },
  ja: {
    nav: { home: "ホーム", guides: "攻略", steam: "Steam" },
    labels: { startHere: "ここから始める", missionIntel: "ミッション情報", planned: "公開予定", redeemCodes: "引き換えコード", completeWalkthrough: "完全攻略", openGuide: "攻略を開く" },
  },
} as const;

export const copyFor = (locale: Locale) => localizedCopy[locale];
