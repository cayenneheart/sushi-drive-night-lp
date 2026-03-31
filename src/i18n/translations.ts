export const translations = {
  en: {
    hero: {
      title: "SusHi Drive Night",
      subtitle: "One night. Real culture. Global connections.",
      cta: "See Details",
      scroll: "Scroll",
    },
    value: {
      culture: {
        label: "Culture",
        heading: "Experience Japan beyond the surface.",
        body: "Tea ceremony. Shamisen. Craftsmanship passed down through generations. This isn't tourism — it's an invitation into the real thing.",
      },
      network: {
        label: "Network",
        heading: "Meet the builders shaping ecosystems worldwide.",
        body: "Founders, investors, and ecosystem leaders from 10+ countries — all in one room, all in one night.",
      },
      nextgen: {
        label: "Next Gen",
        heading: "Connect with Japan's most ambitious students.",
        body: "The ones building what comes next. Young entrepreneurs with global ambition and local grit.",
      },
    },
    cta: {
      heading: "Tokyo is calling.",
      button: "Join the Night",
      date: "April 28, 2026",
      tagline: "A side event of SusHi Tech Tokyo 2026",
    },
    footer: {
      hostedBy: "Hosted by",
    },
  },
  ja: {
    hero: {
      title: "SusHi Drive Night",
      subtitle: "一夜限りの、\n本物の文化体験とグローバルな出会い。",
      cta: "詳細を見る",
      scroll: "スクロール",
    },
    value: {
      culture: {
        label: "Culture",
        heading: "表面だけではない、\n本物の日本を体験する。",
        body: "茶道、三味線、何世代も受け継がれてきた職人の技。\nこれは観光ではない — 本物への招待状です。",
      },
      network: {
        label: "Network",
        heading: "世界のエコシステムを創る\n人々と出会う。",
        body: "10カ国以上から集まる起業家、投資家、\nエコシステムリーダー。\n一つの場所で、一夜のうちに。",
      },
      nextgen: {
        label: "Next Gen",
        heading: "日本で最も野心的な\n学生と繋がる。",
        body: "次の時代を創る若き起業家たち。\nグローバルな志と、地に足のついた実行力を持つ学生たちです。",
      },
    },
    cta: {
      heading: "東京が呼んでいる。",
      button: "参加する",
      date: "2026年4月28日",
      tagline: "SusHi Tech Tokyo 2026 サイドイベント",
    },
    footer: {
      hostedBy: "主催",
    },
  },
} as const;

export type Locale = keyof typeof translations;
