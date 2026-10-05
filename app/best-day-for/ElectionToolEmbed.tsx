'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IkhtiyaratPage } from '@/app/ikhtiyarat/IkhtiyaratPage';
import type { ElectionType } from '@/src/lib/ikhtiyarat/types';

/**
 * Renders the /ikhtiyarat interactive tool unchanged. Adds ?election=<type>
 * to the current URL (preserving ?lang=) so the tool's own URL-based
 * preselect fires, then remounts the tool once the query matches — no props
 * and no edits to IkhtiyaratPage.
 */
function EmbedInner({ electionType }: { electionType?: ElectionType }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams.get('election');
  const ready = !electionType || current === electionType;

  useEffect(() => {
    if (!electionType || current === electionType) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set('election', electionType);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [electionType, current, pathname, router, searchParams]);

  if (!ready) {
    return <div className="h-40 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />;
  }
  // Remount when the election query lands so the tool reads it on first paint.
  return <IkhtiyaratPage key={current ?? 'default'} />;
}

export function ElectionToolEmbed({ electionType }: { electionType?: ElectionType }) {
  return (
    <Suspense fallback={<div className="h-40 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />}>
      <EmbedInner electionType={electionType} />
    </Suspense>
  );
}
