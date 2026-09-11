import { Suspense } from 'react';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { BirthProfilePage } from './BirthProfilePage';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { lang?: string };
}): Promise<Metadata> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get('language')?.value;
  const lang = searchParams?.lang ?? cookieLang ?? 'en';
  const isEn = lang !== 'fr';

  const title = isEn ? 'Birth Profile | Asrar' : 'Profil de Naissance | Asrar';
  const description = isEn
    ? 'Your personal ʿIlm al-Nujūm birth profile: Sun and Moon signs, lunar mansion, day ruler, and the real dignity condition of each classical planet at your birth.'
    : "Votre profil de naissance personnel selon l'ʿIlm al-Nujūm : signes solaire et lunaire, demeure lunaire, régent du jour, et la condition de dignité réelle de chaque planète classique à votre naissance.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `${process.env.NEXT_PUBLIC_APP_URL ?? ''}/icons/icon-512.png` }],
    },
    twitter: { card: 'summary', title, description },
  };
}

function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-slate-50 dark:from-slate-900 dark:to-slate-900 animate-pulse">
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-2xl w-2/3" />
        <div className="h-40 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
        <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <BirthProfilePage />
    </Suspense>
  );
}
