'use client';

/**
 * Arabic string catalog for UI text that does not go through `t` yet
 * (inline en/fr ternaries, hardcoded strings, en/fr data objects).
 *
 * Only active when the UI language is Arabic. It loads /i18n/ar-ui.json
 * (English source text -> Arabic, built by scripts/i18n/build-ar-catalog) and
 * swaps exact-match text nodes and placeholder/title/aria-label attributes.
 * EN and FR never load the catalog and are never touched; switching away from
 * Arabic restores every original string. No component markup or logic changes.
 *
 * Opt out for a subtree with data-no-ar (e.g. user input echoes, names).
 */
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ATTRS = ['placeholder', 'title', 'aria-label'] as const;
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'CODE', 'PRE', 'NOSCRIPT']);

type Catalog = { get(key: string): string | undefined };

/**
 * Exact matches first; then a few sentence patterns whose parts are
 * themselves catalog entries (e.g. "Sun is weakened in Libra").
 * In the JSON, keys starting with "re:" are patterns and $1..$n in the value
 * are replaced by the catalog translation of each captured group.
 */
function makeCatalog(o: Record<string, string>): Catalog {
  const exact = new Map<string, string>();
  const patterns: { re: RegExp; ar: string }[] = [];
  for (const [k, v] of Object.entries(o)) {
    if (k.startsWith('re:')) patterns.push({ re: new RegExp(k.slice(3)), ar: v });
    else exact.set(k, v);
  }
  return {
    get(key) {
      const hit = exact.get(key);
      if (hit !== undefined) return hit;
      for (const p of patterns) {
        const m = key.match(p.re);
        if (!m) continue;
        let ok = true;
        const out = p.ar.replace(/\$(\d)/g, (_, i) => {
          const part = m[Number(i)] ?? '';
          const tr = exact.get(part.trim()) ?? (/[A-Za-z]{3}/.test(part) ? undefined : part);
          if (tr === undefined) ok = false;
          return tr ?? part;
        });
        if (ok) return out;
      }
      return undefined;
    },
  };
}

let catalogPromise: Promise<Catalog> | null = null;
function loadCatalog(): Promise<Catalog> {
  if (!catalogPromise) {
    catalogPromise = fetch('/i18n/ar-ui.json', { cache: 'force-cache' })
      .then((r) => (r.ok ? r.json() : {}))
      .then((o: Record<string, string>) => makeCatalog(o))
      .catch(() => makeCatalog({}));
  }
  return catalogPromise;
}

const collapse = (s: string) => s.replace(/\s+/g, ' ').trim();

/** Original text per node / attribute, so leaving Arabic restores EN/FR exactly. */
const textOriginals = new WeakMap<Text, { original: string; translated: string }>();
const attrOriginals = new WeakMap<Element, Map<string, { original: string; translated: string }>>();
const touched = new Set<WeakRef<Node>>();

function skipped(el: Element | null): boolean {
  for (let e = el; e; e = e.parentElement) {
    if (SKIP_TAGS.has(e.tagName) || e.hasAttribute('data-no-ar') || (e as HTMLElement).isContentEditable) return true;
  }
  return false;
}

function translateText(node: Text, cat: Catalog) {
  const value = node.nodeValue ?? '';
  const prev = textOriginals.get(node);
  if (prev && prev.translated === value) return;
  const key = collapse(value);
  if (!key) return;
  const ar = cat.get(key);
  if (!ar || skipped(node.parentElement)) return;
  const lead = value.match(/^\s*/)?.[0] ?? '';
  const trail = value.match(/\s*$/)?.[0] ?? '';
  const translated = `${lead}${ar}${trail}`;
  textOriginals.set(node, { original: value, translated });
  touched.add(new WeakRef(node));
  node.nodeValue = translated;
}

function translateAttrs(el: Element, cat: Catalog) {
  for (const a of ATTRS) {
    const v = el.getAttribute(a);
    if (!v) continue;
    const map = attrOriginals.get(el);
    if (map?.get(a)?.translated === v) continue;
    const ar = cat.get(collapse(v));
    if (!ar || skipped(el)) continue;
    const m = map ?? new Map();
    m.set(a, { original: v, translated: ar });
    attrOriginals.set(el, m);
    touched.add(new WeakRef(el));
    el.setAttribute(a, ar);
  }
}

function walk(root: Node, cat: Catalog) {
  if (root.nodeType === Node.TEXT_NODE) return translateText(root as Text, cat);
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const el = root as Element;
  if (SKIP_TAGS.has(el.tagName)) return;
  translateAttrs(el, cat);
  const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  for (let n = tw.nextNode(); n; n = tw.nextNode()) {
    if (n.nodeType === Node.TEXT_NODE) translateText(n as Text, cat);
    else translateAttrs(n as Element, cat);
  }
}

function restoreAll() {
  touched.forEach((ref) => {
    const n = ref.deref();
    if (!n) return;
    if (n.nodeType === Node.TEXT_NODE) {
      const o = textOriginals.get(n as Text);
      if (o && n.nodeValue === o.translated) n.nodeValue = o.original;
      textOriginals.delete(n as Text);
    } else {
      const el = n as Element;
      attrOriginals.get(el)?.forEach((o, a) => {
        if (el.getAttribute(a) === o.translated) el.setAttribute(a, o.original);
      });
      attrOriginals.delete(el);
    }
  });
  touched.clear();
}

export default function ArabicDomTranslator() {
  const { uiLanguage } = useLanguage();

  useEffect(() => {
    const html = document.documentElement;
    if (uiLanguage !== 'ar') {
      restoreAll();
      html.removeAttribute('data-ar-pending');
      return;
    }
    let observer: MutationObserver | null = null;
    let cancelled = false;
    const reveal = window.setTimeout(() => html.removeAttribute('data-ar-pending'), 1500);
    loadCatalog().then((cat) => {
      if (cancelled) return;
      walk(document.body, cat);
      html.removeAttribute('data-ar-pending');
      observer = new MutationObserver((records) => {
        for (const r of records) {
          if (r.type === 'characterData') translateText(r.target as Text, cat);
          else if (r.type === 'attributes') translateAttrs(r.target as Element, cat);
          else r.addedNodes.forEach((n) => walk(n, cat));
        }
      });
      observer.observe(document.body, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: [...ATTRS],
      });
    });
    return () => {
      cancelled = true;
      window.clearTimeout(reveal);
      observer?.disconnect();
    };
  }, [uiLanguage]);

  return null;
}
