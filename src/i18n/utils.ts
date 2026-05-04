import { defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en') return 'en';
  return defaultLang;
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === '/' ? '' : clean}`;
}

export function switchLangPath(url: URL, target: Lang): string {
  const segs = url.pathname.split('/').filter(Boolean);
  if (segs[0] === 'en') segs.shift();
  const stripped = '/' + segs.join('/');
  return localizedPath(target, stripped === '/' ? '/' : stripped);
}
