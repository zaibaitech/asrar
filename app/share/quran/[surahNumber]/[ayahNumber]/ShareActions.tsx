'use client';

import { useEffect, useState } from 'react';

type ShareActionsProps = {
  deepLinkUrl: string;
  iosStoreUrl: string;
  androidStoreUrl: string;
};

export default function ShareActions({
  deepLinkUrl,
  iosStoreUrl,
  androidStoreUrl,
}: ShareActionsProps) {
  const [showInstallBoost, setShowInstallBoost] = useState(false);

  useEffect(() => {
    const deepLinkTimer = window.setTimeout(() => {
      window.location.href = deepLinkUrl;
    }, 300);

    const installBoostTimer = window.setTimeout(() => {
      if (!document.hidden) {
        setShowInstallBoost(true);
      }
    }, 1500);

    return () => {
      window.clearTimeout(deepLinkTimer);
      window.clearTimeout(installBoostTimer);
    };
  }, [deepLinkUrl]);

  return (
    <section className="mt-8 space-y-4">
      <button
        type="button"
        onClick={() => {
          window.location.href = deepLinkUrl;
        }}
        className="w-full rounded-xl bg-emerald-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
      >
        Open in Asrariya
      </button>

      <div
        className={`rounded-xl border p-4 transition ${
          showInstallBoost
            ? 'border-amber-300 bg-amber-50'
            : 'border-slate-200 bg-slate-50'
        }`}
      >
        <p
          className={`text-sm font-medium ${
            showInstallBoost ? 'text-amber-900' : 'text-slate-700'
          }`}
        >
          {showInstallBoost
            ? "Don't have the app yet? Download it free."
            : 'If the app does not open automatically, install Asrariya below.'}
        </p>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href={iosStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition ${
              showInstallBoost
                ? 'bg-black text-white hover:bg-slate-800'
                : 'bg-slate-900 text-white hover:bg-black'
            }`}
          >
            Download on the App Store
          </a>

          <a
            href={androidStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition ${
              showInstallBoost
                ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
