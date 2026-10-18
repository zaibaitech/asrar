'use client';

import { useEffect, useState } from 'react';

/**
 * Wraps server-rendered homepage copy so it is present in the initial HTML
 * for crawlers and no-JS visitors, then hides it once the client app mounts.
 */
export function HomeSeoShell({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return <div hidden={hydrated}>{children}</div>;
}
