import type { Metadata } from 'next';
import AsrarEveryday from '../../asrar-everyday-app';
import { HomeSeoShell } from '../HomeSeoShell';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON, UR_HOME as C, UR_TOOLS, type UrToolKey } from '@/src/lib/i18n/urPages';

export const metadata: Metadata = urduMetadata('/');

/**
 * /ur home: the same app as "/" and "/ar" (AsrarEveryday, Urdu UI via the
 * language context), with the server-rendered Urdu shell for crawlers and
 * no-JS visitors (hidden once the app mounts), like the EN/FR home.
 */
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <AsrarEveryday />
      <HomeSeoShell>
        <main className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold leading-loose text-slate-900 dark:text-slate-100">{C.h1.ur}</h1>
          <p className="mt-4 text-slate-700 dark:text-slate-300 leading-loose">{C.intro.ur}</p>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
          <h2 className="mt-8 text-xl font-semibold text-slate-900 dark:text-slate-100">{C.toolsTitle.ur}</h2>
          <ul className="mt-4 space-y-3">
            {(Object.keys(UR_TOOLS) as UrToolKey[]).map((k) => (
              <li key={k}>
                <a href={UR_TOOLS[k].path} className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">
                  {UR_TOOLS[k].name.ur}
                </a>
                <p className="text-sm text-slate-600 dark:text-slate-400">{UR_TOOLS[k].desc.ur}</p>
              </li>
            ))}
          </ul>
        </main>
      </HomeSeoShell>
    </div>
  );
}
