import type { Locale } from "@/lib/i18n";
import type { GuideCard } from "@/lib/guides";

export const officialLinks = {
  website: "https://3drealms.com/games/twisted-tower/",
  developer: "https://atmosgames.com/",
  steam: "https://store.steampowered.com/app/1575990/Twisted_Tower/",
  discord: "https://discord.gg/DywJ8NZDx",
  youtube: "https://www.youtube.com/@3drealmsgames",
  trailer: "https://www.youtube.com/watch?v=2LxB81yhLxo",
  trailerThumbnail: "https://i.ytimg.com/vi/2LxB81yhLxo/hqdefault.jpg",
  discussions: "https://steamcommunity.com/app/1575990/discussions/",
} as const;

type SiteCopy = {
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    trailerLabel: string;
  };
  facts: { label: string; value: string }[];
  startTitle: string;
  startCards: GuideCard[];
  intelTitle: string;
  intelParagraphs: string[];
  intelFacts: { label: string; value: string }[];
  popularTitle: string;
  popularDescription: string;
  redeemCodes: { title: string; description: string; value: string };
  finalTitle: string;
  finalDescription: string;
  finalPrimary: string;
  finalSecondary: string;
  footerDescription: string;
  officialLinks: typeof officialLinks;
};

const english: SiteCopy = {
  hero: {
    eyebrow: "Fan-Made Community Wiki",
    titleLead: "Twisted",
    titleAccent: "Tower",
    description:
      "Twisted Tower is a first-person action-adventure horror shooter set in an abandoned 1950s resort. Fight corrupted fairy-tale mascots, solve twisted puzzles, and climb five deadly levels to save your love.",
    primaryCta: "Start Beginner Guide",
    secondaryCta: "Explore All Guides",
    tertiaryCta: "View Steam Details",
    trailerLabel: "Official Launch Trailer",
  },
  facts: [
    { label: "Launch", value: "Launched Aug 18, 2026" },
    { label: "Players", value: "118 Players Online" },
    { label: "All-Time Peak", value: "832 All-Time Peak" },
    { label: "Reviews", value: "1,246 Steam User Reviews" },
  ],
  startTitle: "Your Twisted Tower Journey",
  startCards: [
    {
      slug: "beginner",
      number: "01",
      title: "Beginner Guide",
      description:
        "Learn the basic controls, combat flow, exploration systems, movement tools, and the best way to start your first climb.",
      status: "planned",
    },
    {
      slug: "walkthrough",
      number: "02",
      title: "Complete Walkthrough",
      description:
        "Follow the full route through all five levels, including key items, access tickets, progression steps, and common points where players get stuck.",
      status: "published",
    },
    {
      slug: "puzzle-solutions",
      number: "03",
      title: "Puzzle Solutions",
      description:
        "Find clear solutions for every major puzzle, switch sequence, hidden clue, locked gate, and environmental challenge.",
      status: "planned",
    },
    {
      slug: "weapons",
      number: "04",
      title: "Weapons & Movement",
      description:
        "Understand every weapon and traversal toy, including upgrades, combat uses, grappling, air movement, and route-specific exploration.",
      status: "planned",
    },
  ],
  intelTitle: "What is Twisted Tower?",
  intelParagraphs: [
    "Twisted Tower is a first-person action-adventure horror shooter developed by Atmos Games and published by 3D Realms. Players enter an abandoned 1950s resort filled with corrupted fairy-tale mascots, deadly traps, twisted puzzles, and multiple routes.",
    "The game combines fast toy-themed gunplay with exploration and platforming. Players climb five distinct areas, collect strange movement toys, upgrade their arsenal, uncover the protagonist's past, and fight to reach the top of the tower.",
  ],
  intelFacts: [
    { label: "Developer", value: "Atmos Games" },
    { label: "Publisher", value: "3D Realms" },
    { label: "Platform", value: "PC via Steam" },
    { label: "Genre", value: "Action, Adventure, Indie" },
    { label: "Main Areas", value: "5 Levels" },
    { label: "Steam Achievements", value: "18" },
    { label: "Game Language", value: "English Only" },
  ],
  popularTitle: "Popular Guide",
  popularDescription:
    "Start with the complete route through all five levels, then return to the guide directory for puzzle, boss, secret, weapon, and achievement topics.",
  redeemCodes: {
    title: "Twisted Tower Redeem Codes",
    description: "No official redemption codes are currently confirmed. This wiki will not invent a code or reward.",
    value: "暂无",
  },
  finalTitle: "Ready to Master Twisted Tower?",
  finalDescription:
    "From your first steps inside the abandoned resort to the final confrontation at the top of the tower, our community wiki helps you solve puzzles, defeat bosses, find secrets, and complete every major objective.",
  finalPrimary: "Read the Beginner Guide",
  finalSecondary: "Play on Steam",
  footerDescription:
    "Twisted Tower Wiki is an independent fan-made guide site for Atmos Games' first-person horror shooter. It covers walkthroughs, puzzle solutions, bosses, weapons, collectibles, achievements, story details, and Steam information.",
  officialLinks,
};

const spanish: SiteCopy = {
  ...english,
  hero: {
    ...english.hero,
    eyebrow: "Wiki comunitaria hecha por fans",
    description:
      "Twisted Tower es un shooter de terror y acción en primera persona ambientado en un resort abandonado de los años 50. Enfréntate a mascotas de cuentos corrompidas, resuelve puzles retorcidos y sube cinco niveles mortales para salvar a tu amor.",
    primaryCta: "Empezar la guía para principiantes",
    secondaryCta: "Explorar todas las guías",
    tertiaryCta: "Ver información de Steam",
    trailerLabel: "Tráiler oficial de lanzamiento",
  },
  facts: [
    { label: "Lanzamiento", value: "Lanzado el 18 ago 2026" },
    { label: "Jugadores", value: "118 jugadores online" },
    { label: "Máximo histórico", value: "832 máximo histórico" },
    { label: "Reseñas", value: "1.246 reseñas de Steam" },
  ],
  startTitle: "Tu recorrido por Twisted Tower",
  intelTitle: "¿Qué es Twisted Tower?",
  intelParagraphs: [
    "Twisted Tower es un shooter de terror y acción en primera persona desarrollado por Atmos Games y publicado por 3D Realms. Los jugadores entran en un resort abandonado lleno de mascotas de cuentos corrompidas, trampas mortales, puzles retorcidos y múltiples rutas.",
    "El juego combina disparos rápidos con armas de juguete, exploración y plataformas. Los jugadores suben por cinco áreas distintas, consiguen juguetes de movimiento, mejoran su arsenal y descubren el pasado del protagonista.",
  ],
  intelFacts: [
    { label: "Desarrollador", value: "Atmos Games" },
    { label: "Editor", value: "3D Realms" },
    { label: "Plataforma", value: "PC mediante Steam" },
    { label: "Género", value: "Acción, aventura e indie" },
    { label: "Áreas principales", value: "5 niveles" },
    { label: "Logros de Steam", value: "18" },
    { label: "Idioma del juego", value: "Solo inglés" },
  ],
  popularTitle: "Guía popular",
  popularDescription:
    "Empieza con el recorrido completo de los cinco niveles y vuelve al directorio para consultar los temas de puzles, jefes, secretos, armas y logros.",
  redeemCodes: {
    title: "Códigos de Twisted Tower",
    description: "No hay códigos oficiales de canje confirmados actualmente. Esta wiki no inventará códigos ni recompensas.",
    value: "暂无",
  },
  finalTitle: "¿Listo para dominar Twisted Tower?",
  finalDescription:
    "Desde tus primeros pasos en el resort abandonado hasta la confrontación final en lo alto de la torre, esta wiki comunitaria te ayuda con puzles, jefes, secretos y objetivos principales.",
  finalPrimary: "Leer la guía para principiantes",
  finalSecondary: "Jugar en Steam",
  footerDescription:
    "Twisted Tower Wiki es un sitio independiente hecho por fans para el shooter de terror de Atmos Games. No está afiliado a Atmos Games ni a 3D Realms.",
};

const german: SiteCopy = {
  ...english,
  hero: {
    ...english.hero,
    eyebrow: "Fan-gemachtes Community-Wiki",
    description:
      "Twisted Tower ist ein First-Person-Action-Adventure-Horrorshooter in einem verlassenen Resort aus den 1950er-Jahren. Kämpfe gegen korrumpierte Märchenmaskottchen, löse verdrehte Rätsel und erklimme fünf tödliche Ebenen, um deine Liebe zu retten.",
    primaryCta: "Beginner-Guide starten",
    secondaryCta: "Alle Guides öffnen",
    tertiaryCta: "Steam-Infos ansehen",
    trailerLabel: "Offizieller Launch-Trailer",
  },
  facts: [
    { label: "Start", value: "Veröffentlicht am 18. Aug. 2026" },
    { label: "Spieler", value: "118 Spieler online" },
    { label: "Allzeit-Höchststand", value: "832 Allzeit-Höchststand" },
    { label: "Bewertungen", value: "1.246 Steam-Bewertungen" },
  ],
  startTitle: "Deine Reise durch Twisted Tower",
  startCards: [
    { ...english.startCards[0], title: "Beginner-Guide", description: "Lerne Steuerung, Kampfablauf, Erkundung, Bewegungswerkzeuge und die besten ersten Schritte." },
    { ...english.startCards[1], title: "Komplettlösung", description: "Folge der Route durch alle fünf Ebenen mit wichtigen Gegenständen, Zugangstickets und Fortschrittsschritten." },
    { ...english.startCards[2], title: "Rätsellösungen", description: "Finde Lösungen für wichtige Rätsel, Schalterfolgen, Hinweise, verschlossene Wege und Umgebungsherausforderungen." },
    { ...english.startCards[3], title: "Waffen & Bewegung", description: "Verstehe Waffen, Bewegungswerkzeuge, Upgrades und ihren Einsatz bei Kampf und Erkundung." },
  ],
  intelTitle: "Was ist Twisted Tower?",
  intelParagraphs: [
    "Twisted Tower ist ein First-Person-Action-Adventure-Horrorshooter von Atmos Games, veröffentlicht von 3D Realms. Die Spieler betreten ein verlassenes Resort voller korrumpierter Märchenmaskottchen, tödlicher Fallen, verdrehter Rätsel und mehrerer Routen.",
    "Das Spiel verbindet schnelles Spielzeugwaffen-Gunplay mit Erkundung und Plattforming. Die Spieler erklimmen fünf verschiedene Bereiche, sammeln Bewegungs-Spielzeuge, verbessern ihr Arsenal und entdecken die Vergangenheit des Protagonisten.",
  ],
  intelFacts: [
    { label: "Entwickler", value: "Atmos Games" },
    { label: "Publisher", value: "3D Realms" },
    { label: "Plattform", value: "PC via Steam" },
    { label: "Genre", value: "Action, Adventure, Indie" },
    { label: "Hauptbereiche", value: "5 Ebenen" },
    { label: "Steam-Erfolge", value: "18" },
    { label: "Spielsprache", value: "Nur Englisch" },
  ],
  popularTitle: "Beliebter Guide",
  popularDescription: "Beginne mit der Route durch alle fünf Ebenen und kehre dann zum Verzeichnis für Rätsel-, Boss-, Geheimnis-, Waffen- und Erfolgs-Themen zurück.",
  redeemCodes: {
    title: "Twisted Tower-Codes",
    description: "Derzeit sind keine offiziellen Einlösecodes bestätigt. Dieses Wiki erfindet keine Codes oder Belohnungen.",
    value: "暂无",
  },
  finalTitle: "Bereit, Twisted Tower zu meistern?",
  finalDescription: "Von den ersten Schritten im verlassenen Resort bis zur Konfrontation an der Spitze des Turms hilft dir unser Community-Wiki bei Rätseln, Bossen, Geheimnissen und wichtigen Zielen.",
  finalPrimary: "Beginner-Guide lesen",
  finalSecondary: "Auf Steam spielen",
  footerDescription: "Twisted Tower Wiki ist eine unabhängige Fan-Seite für den First-Person-Horrorshooter von Atmos Games und nicht mit Atmos Games oder 3D Realms verbunden.",
};

const japanese: SiteCopy = {
  ...english,
  hero: {
    ...english.hero,
    eyebrow: "ファン制作コミュニティWiki",
    description:
      "Twisted Towerは、1950年代の廃墟リゾートを舞台にした一人称アクションアドベンチャー・ホラーシューターです。腐敗した童話マスコットと戦い、ねじれた謎を解き、5つの危険なレベルを登って愛する人を救います。",
    primaryCta: "初心者ガイドを始める",
    secondaryCta: "すべての攻略を見る",
    tertiaryCta: "Steam情報を見る",
    trailerLabel: "公式ローンチトレーラー",
  },
  facts: [
    { label: "発売", value: "2026年8月18日発売" },
    { label: "プレイヤー", value: "オンライン118人" },
    { label: "最高記録", value: "歴代ピーク832人" },
    { label: "レビュー", value: "Steamユーザーレビュー1,246件" },
  ],
  startTitle: "Twisted Towerの旅を始める",
  startCards: [
    { ...english.startCards[0], title: "初心者ガイド", description: "基本操作、戦闘の流れ、探索システム、移動ツール、最初の登り方を学びます。" },
    { ...english.startCards[1], title: "完全攻略", description: "5つのレベルを通るルート、重要アイテム、アクセスチケット、進行手順を確認します。" },
    { ...english.startCards[2], title: "謎解き攻略", description: "主要な謎、スイッチの順番、隠された手がかり、ロックされた道を確認します。" },
    { ...english.startCards[3], title: "武器と移動", description: "武器、移動トイ、アップグレード、戦闘とルート探索での使い方を理解します。" },
  ],
  intelTitle: "Twisted Towerとは？",
  intelParagraphs: [
    "Twisted TowerはAtmos Gamesが開発し、3D Realmsが発売した一人称アクションアドベンチャー・ホラーシューターです。腐敗した童話マスコット、危険な罠、ねじれた謎、複数のルートがある廃墟リゾートを進みます。",
    "おもちゃをテーマにした銃撃戦、探索、プラットフォーム要素を組み合わせ、5つのエリアを登りながら移動トイを集め、武器を強化し、主人公の過去を明らかにします。",
  ],
  intelFacts: [
    { label: "開発元", value: "Atmos Games" },
    { label: "発売元", value: "3D Realms" },
    { label: "プラットフォーム", value: "PC / Steam" },
    { label: "ジャンル", value: "アクション、アドベンチャー、インディー" },
    { label: "主なエリア", value: "5レベル" },
    { label: "Steam実績", value: "18" },
    { label: "ゲーム言語", value: "英語のみ" },
  ],
  popularTitle: "人気の攻略",
  popularDescription: "5つのレベルを通る完全ルートから始め、謎解き、ボス、秘密、武器、実績のテーマは攻略ディレクトリで確認してください。",
  redeemCodes: {
    title: "Twisted Tower引き換えコード",
    description: "現在、公式の引き換えコードは確認されていません。このWikiはコードや報酬を作りません。",
    value: "暂无",
  },
  finalTitle: "Twisted Towerを攻略する準備はできましたか？",
  finalDescription: "廃墟リゾートの最初の一歩から塔の頂上での最終対決まで、パズル、ボス、秘密、主要目標を確認できます。",
  finalPrimary: "初心者ガイドを読む",
  finalSecondary: "Steamでプレイ",
  footerDescription: "Twisted Tower WikiはAtmos Gamesの一人称ホラーシューターを扱う独立ファンサイトです。Atmos Gamesおよび3D Realmsとは提携していません。",
};

export const siteCopyFor = (locale: Locale): SiteCopy => {
  if (locale === "es") return spanish;
  if (locale === "de") return german;
  if (locale === "ja") return japanese;
  return english;
};

export const startHereGuidesFor = (locale: Locale): GuideCard[] => siteCopyFor(locale).startCards;

export const metadataFor = (locale: Locale) => {
  const descriptions = {
    en: "Explore the Twisted Tower Wiki for walkthroughs, puzzle solutions, boss strategies, weapons, collectibles, achievements, story details, and Steam info.",
    es: "Explora la Wiki de Twisted Tower para encontrar guías, puzles, jefes, armas, coleccionables, logros, historia y datos de Steam.",
    de: "Entdecke das Twisted Tower Wiki mit Komplettlösung, Rätseln, Boss-Guides, Waffen, Sammelobjekten, Erfolgen, Story und Steam-Infos.",
    ja: "Twisted Tower 攻略Wikiで攻略、謎解き、ボス、武器、収集品、実績、ストーリー、Steam情報を確認できます。",
  } as const;
  const titles = {
    en: "Twisted Tower Wiki — Walkthrough, Puzzles & Boss Guides",
    es: "Wiki de Twisted Tower — Guía, puzles y final",
    de: "Twisted Tower Wiki — Komplettlösung, Rätsel und Boss-Guides",
    ja: "Twisted Tower 攻略Wiki — 攻略・謎解き・エンディング",
  } as const;

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: "Twisted Tower, walkthrough, puzzles, boss guide, weapons, collectibles, achievements, story, Steam",
  };
};
