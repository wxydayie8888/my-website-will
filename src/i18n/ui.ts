export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export const defaultLang = 'zh' as const;

export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    'site.title': '汪星宇',
    'site.title.full': '汪星宇 · Will Wang',
    'site.tagline': '乡村振兴 · AI 先锋 · 社会科学研究者',
    'nav.about': '关于',
    'nav.fronts': '战线',
    'nav.soul': '灵魂',
    'nav.stance': '立场',
    'nav.pantheon': '谱系',
    'nav.knowledge': '方法',
    'nav.projects': '作品',
    'nav.contact': '联系',
    'meta.issue': '第 01 期',
    'meta.date': '2026 年 5 月',
    'lang.switch': 'EN',
    'footer.colophon': '本站由 Astro 排版生成，自托管字体，无追踪。',
  },
  en: {
    'site.title': 'Will Wang',
    'site.title.full': 'Will Wang · Wang Xingyu',
    'site.tagline': 'Rural revitalization · AI explorer · Social-science researcher',
    'nav.about': 'About',
    'nav.fronts': 'Fronts',
    'nav.soul': 'Soul',
    'nav.stance': 'Stance',
    'nav.pantheon': 'Pantheon',
    'nav.knowledge': 'Method',
    'nav.projects': 'Works',
    'nav.contact': 'Contact',
    'meta.issue': 'Issue 01',
    'meta.date': 'May 2026',
    'lang.switch': '中文',
    'footer.colophon': 'Set in Astro. Self-hosted type. No tracking.',
  },
} as const;

export type UIKey = keyof (typeof ui)['zh'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}
