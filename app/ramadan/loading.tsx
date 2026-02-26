/**
 * Ramadan route loading skeleton.
 * Shown by Next.js during client-side navigation to /ramadan.
 * Matches the real page layout so there's no jarring flash.
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {/* Header skeleton */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-amber-600 to-orange-500 px-4 py-3">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
          <div className="w-40 h-5 rounded bg-white/20 animate-pulse" />
          <div className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
        </div>
      </div>
      {/* Progress + cards skeleton */}
      <div className="max-w-2xl mx-auto px-4 pt-5">
        <div className="h-2 rounded-full bg-amber-200/50 dark:bg-amber-800/30 mb-6" />
        {[1, 2].map(i => (
          <div key={i} className="mb-4 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-amber-200/40 dark:border-amber-700/20 p-4 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-200/60 dark:bg-amber-700/30" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 rounded bg-amber-200/60 dark:bg-amber-700/30" />
                <div className="h-3 w-48 rounded bg-amber-100/60 dark:bg-amber-800/20" />
              </div>
              <div className="w-16 h-10 rounded-lg bg-amber-200/60 dark:bg-amber-700/30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
