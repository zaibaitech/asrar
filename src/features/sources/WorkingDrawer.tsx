'use client';

import type { ReactNode } from 'react';
import { InfoDisclosure } from '../calculator/components/InfoDisclosure';
import { buildWorking, type NameLetters, type WorkingResult } from './working';
import { lettersMansions } from './lettersMansions';
import { SourceDrawer } from './SourceDrawer';
import { MoonManzil } from './MoonManzil';
import { LABELS, type Lang, type StepId } from './sourcesContent';

const MUTED = 'text-slate-600 dark:text-slate-400';
const STRONG = 'font-semibold text-slate-900 dark:text-slate-100';

function Step({ id, lang, children }: { id: StepId; lang: Lang; children?: ReactNode }) {
  return (
    <div className="space-y-1 border-t border-slate-300/60 dark:border-slate-700 pt-2 first:border-t-0 first:pt-0">
      <p className={`text-sm ${STRONG}`}>{LABELS.steps[id][lang]}</p>
      {children}
      <SourceDrawer step={id} lang={lang} />
    </div>
  );
}

function Chips({ n, lang }: { n: NameLetters; lang: Lang }) {
  return (
    <div className="flex flex-wrap gap-1.5" dir="rtl" lang="ar">
      {n.letters.map((l, i) => (
        <div
          key={i}
          className={`min-w-[40px] rounded-lg border px-1.5 py-0.5 text-center ${
            l.counted ? 'border-slate-300 dark:border-slate-600' : 'border-dashed border-slate-300 dark:border-slate-600 opacity-60'
          }`}
          title={l.counted ? undefined : LABELS.notCounted[lang]}
        >
          <div className="font-arabic text-lg text-slate-900 dark:text-slate-100">{l.char}</div>
          <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400" dir="ltr">
            {l.counted ? l.value : '–'}
          </div>
        </div>
      ))}
    </div>
  );
}

const sumLine = (n: NameLetters) => n.letters.filter((l) => l.counted).map((l) => l.value).join(' + ') || '0';

function Mod({ total, divisor, remainder, index, lang }: { total: number; divisor: number; remainder: number; index?: number; lang: Lang }) {
  return (
    <p className={`text-sm ${MUTED}`} dir="ltr">
      {total} ÷ {divisor} → {LABELS.remainder[lang]} {remainder}
      {index !== undefined && remainder === 0 ? ` → ${index}` : ''}
    </p>
  );
}

function Steps({ w, lang }: { w: WorkingResult; lang: Lang }) {
  return (
    <>
      <Step id="letters" lang={lang}>
        <Chips n={w.person} lang={lang} />
        {w.mother && <Chips n={w.mother} lang={lang} />}
      </Step>
      <Step id="kabir" lang={lang}>
        <p className={`text-sm ${MUTED}`} dir="ltr">
          {sumLine(w.person)} = {w.person.kabir}
        </p>
        {w.mother && (
          <p className={`text-sm ${MUTED}`} dir="ltr">
            {sumLine(w.mother)} = {w.mother.kabir} → {w.person.kabir} + {w.mother.kabir}
          </p>
        )}
        <p className={STRONG} dir="ltr">
          {LABELS.total[lang]}: {w.total}
        </p>
      </Step>
      <Step id="saghir" lang={lang}>
        <p className={`text-sm ${MUTED}`} dir="ltr">
          {w.saghirChain.join(' → ')}
        </p>
      </Step>
      <Step id="tabi" lang={lang}>
        <Mod total={w.total} divisor={4} remainder={w.tabi.remainder} lang={lang} />
        <p className={STRONG}>
          {w.tabi.emoji} {w.tabi.names[lang]}
        </p>
      </Step>
      <Step id="burj" lang={lang}>
        <Mod total={w.total} divisor={12} remainder={w.burj.remainder} index={w.burj.index} lang={lang} />
        <p className={STRONG}>
          {w.burj.zodiac.symbol} {w.burj.zodiac[lang]}
        </p>
      </Step>
    </>
  );
}

function LettersMansions({ text, lang }: { text: string; lang: Lang }) {
  const rows = lettersMansions(text);
  if (rows.length === 0) return null;
  return (
    <InfoDisclosure label={LABELS.steps.lettersMansions[lang]} icon="chevron">
      <div className="space-y-2">
        <p className="text-xs">{LABELS.order[lang]}</p>
        <ul className="space-y-1">
          {rows.map((r) => (
            <li key={r.letter} dir="ltr">
              <div className="flex items-baseline gap-2">
                <span lang="ar" dir="rtl" className="font-arabic w-6 text-lg text-slate-900 dark:text-slate-100">
                  {r.letter}
                </span>
                <span className="w-16 text-xs">
                  {LABELS.position[lang]} {r.number}
                </span>
                <span className="text-sm text-slate-900 dark:text-slate-100">
                  <span lang="ar" dir="rtl" className="font-arabic">
                    {r.mansion.nameArabic}
                  </span>{' '}
                  · {r.mansion.nameTransliteration}
                </span>
              </div>
              {r.buniDiffers && (
                <p className="ml-8 text-[11px]">
                  {LABELS.buniEdition[lang]}:{' '}
                  <span lang="ar" dir="rtl" className="font-arabic">
                    {r.buniName}
                  </span>
                </p>
              )}
            </li>
          ))}
        </ul>
        <SourceDrawer step="lettersMansions" lang={lang} />
      </div>
    </InfoDisclosure>
  );
}

/**
 * Collapsed "Show the working + sources" layer for a calculator result.
 * It shows existing values only: nothing here is a new calculation.
 * `expected` guards against drift: if the host's own totals differ from the
 * working, the drawer renders nothing rather than show a conflicting number.
 * Computed in the browser; nothing is sent or tracked.
 */
export function WorkingDrawer({
  name,
  mother,
  abjad,
  lang,
  expected,
  showMoon = false,
}: {
  name: string;
  mother?: string;
  abjad: Record<string, number>;
  lang: Lang;
  expected?: { person?: number; mother?: number };
  showMoon?: boolean;
}) {
  const w = buildWorking(name, mother, abjad);
  if (!w) return null;
  if (expected?.person !== undefined && expected.person !== w.person.kabir) return null;
  if (expected?.mother !== undefined && expected.mother !== (w.mother?.kabir ?? 0)) return null;
  return (
    <InfoDisclosure label={LABELS.title[lang]} icon="chevron">
      <div className="space-y-2" data-testid="working-drawer">
        <p className="text-xs text-amber-800 dark:text-amber-300">{LABELS.preview[lang]}</p>
        <Steps w={w} lang={lang} />
        {showMoon && (
          <Step id="manzil" lang={lang}>
            <MoonManzil lang={lang} />
          </Step>
        )}
        <LettersMansions text={name} lang={lang} />
      </div>
    </InfoDisclosure>
  );
}
