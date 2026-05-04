export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export const defaultLang = 'zh' as const;

export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    'site.title': '王星宇',
    'site.tagline': '个人主页 · 项目集',
    'nav.about': '关于',
    'nav.projects': '作品',
    'nav.contact': '联系',
    'section.about': '关于我',
    'section.projects': '作品',
    'section.contact': '联系',
    'meta.issue': '第 01 期',
    'meta.editor': '主编',
    'lang.switch': 'EN',
    'footer.colophon': '本站由 Astro 排版生成，自托管字体，无追踪。',
  },
  en: {
    'site.title': 'Wang Xingyu',
    'site.tagline': 'Personal Site · Selected Works',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'section.about': 'About',
    'section.projects': 'Selected Works',
    'section.contact': 'Contact',
    'meta.issue': 'Issue 01',
    'meta.editor': 'Edited by',
    'lang.switch': '中文',
    'footer.colophon': 'Set in Astro. Self-hosted type. No tracking.',
  },
} as const;

export type UIKey = keyof (typeof ui)['zh'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}
