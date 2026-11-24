import type { Metadata } from 'next';
import { MethodologyView, infoPageMetadata } from '@/src/components/seo/InfoPageView';
import { METHODOLOGY_META } from '@/src/lib/infoPageCopy';
import { getRouteLang } from '@/src/lib/pageLang';

const PATH = '/methodology' as const;

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRouteLang();
  return infoPageMetadata(PATH, lang, METHODOLOGY_META[lang]);
}

export default async function Page() {
  const lang = await getRouteLang();
  return <MethodologyView lang={lang} />;
}
