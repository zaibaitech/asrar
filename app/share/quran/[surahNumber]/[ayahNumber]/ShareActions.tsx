'use client';

import { useEffect, useState } from 'react';

type ShareActionsProps = {
  deepLinkUrl: string;
  androidStoreUrl: string;
};

type Platform = 'android' | 'ios' | 'desktop';

function detectPlatform(userAgent: string): Platform {
  const ua = userAgent.toLowerCase();

  if (ua.includes('android')) {
    return 'android';
  }

  if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) {
    return 'ios';
  }

  return 'desktop';
}

export default function ShareActions({
  deepLinkUrl,
  androidStoreUrl,
}: ShareActionsProps) {
  const [platform, setPlatform] = useState<Platform>('desktop');
  const [showInstallBoost, setShowInstallBoost] = useState(false);

  useEffect(() => {
    const detectedPlatform = detectPlatform(window.navigator.userAgent);
    setPlatform(detectedPlatform);

    if (detectedPlatform !== 'android') {
      return;
    }

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

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    androidStoreUrl
  )}`;

  if (platform === 'ios') {
    return (
      <section className="mt-8 space-y-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Asrariya for iOS is coming soon.
          </p>
          <p className="mt-1 text-sm text-slate-700">
            Android users can install Asrariya today on Google Play.
          </p>
        </div>
      </section>
    );
  }

  if (platform === 'desktop') {
    return (
      <section className="mt-8 space-y-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Open this ayah in Asrariya on Android.
          </p>
          <p className="mt-1 text-sm text-slate-700">
            Scan the QR code or open Google Play.
          </p>

          <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <img
              src={qrCodeUrl}
              alt="QR code to install Asrariya from Google Play"
              className="h-[140px] w-[140px] rounded-lg border border-slate-200 bg-white p-2"
              loading="lazy"
            />

            <a
              href={androidStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    );
  }

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

        <div className="mt-3 grid grid-cols-1 gap-3">
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
