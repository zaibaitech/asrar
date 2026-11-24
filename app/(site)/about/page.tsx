import type { Metadata } from 'next';
import { AboutView, infoPageMetadata } from '@/src/components/seo/InfoPageView';
import { ABOUT_META } from '@/src/lib/infoPageCopy';
import { getRouteLang } from '@/src/lib/pageLang';

const PATH = '/about' as const;

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRouteLang();
  return infoPageMetadata(PATH, lang, ABOUT_META[lang]);
}

export default async function Page() {
  const lang = await getRouteLang();
  return <AboutView lang={lang} />;
}
