'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useAbjad } from '@/src/contexts/AbjadContext';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { AbjadSystemSelector } from '@/src/components/AbjadSystemSelector';
import { computeHisab, type HisabResult, type NameLetters } from './hisabWorkbook';
import { LABELS, SOURCES, type Lang, type SourceRef, type StepId } from './hisabContent';

// Live-app tokens (same as the /abjad and /name-and-mother-burj pages).
const CARD = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 p-4';
const INPUT =
  'w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-[44px] text-base sm:text-sm';
const BUTTON =
  'w-full min-h-[48px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm active:scale-[0.98] transition-colors';
const MUTED = 'text-slate-600 dark:text-slate-400';

const pick = (o: Record<Lang, string>, lang: Lang) => o[lang];

function QuranExcerpt({ surah, ayah }: { surah: number; ayah: number }) {
  const [text, setText] = useState<string | null | undefined>(undefined);
  useEffect(() => {
    let live = true;
    fetch(`/api/quran-verse/${surah}/${ayah}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => live && setText(j?.text ?? null))
      .catch(() => live && setText(null));
    return () => {
      live = false;
    };
  }, [surah, ayah]);
  return (
    <div className="mt-2 rounded-xl border border-slate-200 dark:border-slate-700 p-3">
      <p lang="ar" dir="rtl" className="font-arabic text-xl leading-loose text-slate-900 dark:text-slate-100">
        {text ?? '…'}
      </p>
      <p className={`mt-1 text-xs ${MUTED}`} dir="ltr">
        {surah}:{ayah} · tanzil.net
      </p>
    </div>
  );
}

function RefItem({ r, lang }: { r: SourceRef; lang: Lang }) {
  const badge =
    r.status === 'to-verify'
      ? pick(LABELS.toVerify, lang)
      : r.status === 'cited-in-repo'
        ? pick(LABELS.citedInRepo, lang)
        : pick(LABELS.quranSrc, lang);
  return (
    <li className="space-y-1">
      <span
        className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${
          r.status === 'to-verify'
            ? 'border-amber-300 text-amber-800 dark:border-amber-700 dark:text-amber-300'
            : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
        }`}
      >
        {badge}
      </span>
      <p className="text-sm text-slate-800 dark:text-slate-200">{r.text}</p>
      {r.quran && <QuranExcerpt surah={r.quran.surah} ayah={r.quran.ayah} />}
    </li>
  );
}

/** One step: title, the working, and a "Show source" drawer. */
function Step({ id, lang, children }: { id: StepId; lang: Lang; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const src = SOURCES[id];
  const panelId = `hisab-src-${id}`;
  return (
    <section className={CARD} aria-labelledby={`hisab-h-${id}`}>
      <h3 id={`hisab-h-${id}`} className="text-base font-semibold text-slate-900 dark:text-slate-100">
        {pick(LABELS.steps[id], lang)}
      </h3>
      <div className="mt-3 space-y-2">{children}</div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="mt-3 min-h-[44px] text-sm font-medium text-indigo-700 dark:text-indigo-400 hover:underline"
      >
        {open ? pick(LABELS.hideSource, lang) : pick(LABELS.showSource, lang)}
      </button>
      {open && (
        <div id={panelId} className="mt-1 space-y-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 p-3">
          <p className="text-sm text-slate-800 dark:text-slate-200">{src.note}</p>
          <ul className="space-y-3">
            {src.refs.map((r, i) => (
              <RefItem key={i} r={r} lang={lang} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function Chips({ n, lang }: { n: NameLetters; lang: Lang }) {
  return (
    <div className="flex flex-wrap gap-2" dir="rtl" lang="ar">
      {n.letters.map((l, i) => (
        <div
          key={i}
          className={`min-w-[44px] rounded-xl border px-2 py-1 text-center ${
            l.counted
              ? 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900'
              : 'border-dashed border-slate-300 dark:border-slate-600 opacity-60'
          }`}
          title={l.counted ? undefined : pick(LABELS.notCounted, lang)}
        >
          <div className="font-arabic text-xl text-slate-900 dark:text-slate-100">{l.char}</div>
          <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-400" dir="ltr">
            {l.counted ? l.value : '–'}
          </div>
        </div>
      ))}
    </div>
  );
}

const sumLine = (n: NameLetters) => n.letters.filter((l) => l.counted).map((l) => l.value).join(' + ') || '0';

function ModLine({ total, divisor, remainder, index, lang }: { total: number; divisor: number; remainder: number; index: number; lang: Lang }) {
  return (
    <p className={`text-sm ${MUTED}`} dir="ltr">
      {total} ÷ {divisor} → {pick(LABELS.remainder, lang)} {remainder}
      {remainder === 0 ? ` → ${divisor}` : ''} → <span className="font-semibold text-slate-900 dark:text-slate-100">{index}</span>
    </p>
  );
}

function Result({ h, lang }: { h: HisabResult; lang: Lang }) {
  const e = h.tabi.entry;
  const b = h.burj.entry;
  const m = h.manzil.entry;
  const big = 'text-lg font-semibold text-slate-900 dark:text-slate-100';
  return (
    <div className="space-y-4" data-testid="hisab-result">
      <Step id="letters" lang={lang}>
        <Chips n={h.person} lang={lang} />
        {h.mother && <Chips n={h.mother} lang={lang} />}
      </Step>

      <Step id="kabir" lang={lang}>
        <p className={`text-sm ${MUTED}`} dir="ltr">
          {sumLine(h.person)} = {h.person.kabir}
        </p>
        {h.mother && (
          <p className={`text-sm ${MUTED}`} dir="ltr">
            {sumLine(h.mother)} = {h.mother.kabir} → {h.person.kabir} + {h.mother.kabir}
          </p>
        )}
        <p className={big} dir="ltr">
          {pick(LABELS.total, lang)}: {h.total}
        </p>
      </Step>

      <Step id="saghir" lang={lang}>
        <p className={`text-sm ${MUTED}`} dir="ltr">
          {h.saghirChain.join(' → ')}
        </p>
        <p className={big} dir="ltr">
          {h.saghir}
        </p>
      </Step>

      <Step id="tabi" lang={lang}>
        <ModLine total={h.total} divisor={4} remainder={h.tabi.remainder} index={h.tabi.index} lang={lang} />
        <p className={big}>
          {e.icon} {pick({ en: e.en, fr: e.fr, ar: e.ar }, lang)}
        </p>
        <p className={`text-sm ${MUTED}`}>{lang === 'fr' ? e.qualityFr : e.qualityEn}</p>
      </Step>

      <Step id="burj" lang={lang}>
        <ModLine total={h.total} divisor={12} remainder={h.burj.remainder} index={h.burj.index} lang={lang} />
        <p className={big}>
          {b.symbol} {pick({ en: b.en, fr: b.fr, ar: b.ar }, lang)}
        </p>
      </Step>

      <Step id="manzil" lang={lang}>
        <p className={`text-xs ${MUTED}`}>{pick(LABELS.manzilFrom, lang)}</p>
        <ModLine total={h.person.kabir} divisor={28} remainder={h.manzil.remainder} index={h.manzil.index} lang={lang} />
        {m && (
          <p className={big}>
            <span lang="ar" dir="rtl" className="font-arabic">
              {m.nameArabic}
            </span>{' '}
            · {m.nameTransliteration} · {lang === 'fr' ? m.nameFr : m.nameEn}
          </p>
        )}
      </Step>
    </div>
  );
}

export function HisabWorkbook() {
  const { abjad } = useAbjad();
  const { uiLanguage } = useLanguage();
  const lang: Lang = uiLanguage === 'ar' ? 'ar' : uiLanguage === 'fr' ? 'fr' : 'en';
  const [name, setName] = useState('');
  const [mother, setMother] = useState('');
  const [submitted, setSubmitted] = useState<{ name: string; mother: string } | null>(null);
  const [empty, setEmpty] = useState(false);

  // Computed in the browser only. Nothing is sent anywhere and nothing is tracked.
  const result = useMemo(
    () => (submitted ? computeHisab(submitted.name, submitted.mother, abjad) : null),
    [submitted, abjad],
  );

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{pick(LABELS.title, lang)}</h2>
        <p className={`mt-1 text-sm ${MUTED}`}>{pick(LABELS.intro, lang)}</p>
        <p className="mt-1 text-xs text-amber-800 dark:text-amber-300">{pick(LABELS.preview, lang)}</p>
      </div>

      <form
        className={`${CARD} space-y-3`}
        onSubmit={(ev) => {
          ev.preventDefault();
          const ok = computeHisab(name, mother, abjad) !== null;
          setEmpty(!ok);
          setSubmitted(ok ? { name, mother } : null);
        }}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{pick(LABELS.system, lang)}</span>
          <AbjadSystemSelector compact showNote={false} />
        </div>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{pick(LABELS.name, lang)}</span>
          <input value={name} onChange={(e) => setName(e.target.value)} dir="rtl" lang="ar" autoComplete="off" className={`${INPUT} font-arabic text-right`} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{pick(LABELS.mother, lang)}</span>
          <input value={mother} onChange={(e) => setMother(e.target.value)} dir="rtl" lang="ar" autoComplete="off" className={`${INPUT} font-arabic text-right`} />
        </label>
        {empty && <p className="text-sm text-red-700 dark:text-red-400">{pick(LABELS.needName, lang)}</p>}
        <button type="submit" className={BUTTON}>
          {pick(LABELS.calc, lang)}
        </button>
      </form>

      {result && <Result h={result} lang={lang} />}
    </div>
  );
}
