// Collects Arabic that already exists in the web app's own data, so the Arabic
// catalog build can use it instead of machine translation (Arabic review, Oct 2026).
//
//   pairs: { en: '…', ar: '…' } objects            -> English text -> its Arabic
//   gloss: English glosses on objects that also carry an Arabic field
//          (arabic / arabicName / nameTashkeel / name / ar), e.g. the 201
//          Prophetic names, the Divine Names and Qur'anic quotes
//          -> English gloss -> that Arabic field
//   names: the `latin` field of the name-transliteration databases (data, not UI)
//
// Run from the repo root: node scripts/i18n/ar/data_ar.js  (writes scripts/i18n/ar/data-ar.json)
const ts = require('typescript');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const AR = /[\u0600-\u06FF]/;
const files = [];
function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) { if (!/node_modules|\.next|__tests__|\/i18n$/.test(p)) walk(p); }
    else if (/\.(tsx?|jsx?)$/.test(f) && !/\.test\.|\.d\.ts$/.test(f)) files.push(p);
  }
}
walk(path.join(ROOT, 'src'));
walk(path.join(ROOT, 'app'));

const AR_FIELDS = ['arabic', 'arabicName', 'nameTashkeel', 'arabicText', 'nameAr', 'ar', 'name'];
const GLOSS_FIELDS = new Set(['meaning', 'meaningEn', 'en', 'label', 'translation', 'title', 'gloss']);
const pairs = {}, gloss = {}, names = new Set();

const propName = (p) => (p.name && (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name)) ? p.name.text : null);
const strVal = (e) => (e && (ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e)) ? e.text : null);

for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  if (!AR.test(src) && !/latin/.test(src)) continue;
  const sf = ts.createSourceFile(f, src, ts.ScriptTarget.Latest, true, f.endsWith('x') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const rel = path.relative(ROOT, f);
  const visit = (n) => {
    if (ts.isObjectLiteralExpression(n)) {
      const props = {};
      for (const p of n.properties) if (ts.isPropertyAssignment(p)) { const k = propName(p); if (k) props[k] = p.initializer; }
      const en = strVal(props.en), ar = strVal(props.ar);
      if (en && ar && AR.test(ar) && !AR.test(en)) pairs[en] ??= { ar, file: rel };
      // Sibling fields: meaningEn/meaningAr, reflection/reflectionAr, translationEn/textArabic …
      for (const [k, v] of Object.entries(props)) {
        const e = strVal(v);
        if (!e || AR.test(e)) continue;
        const stem = k.replace(/En$/, '');
        const sib = [stem + 'Ar', stem + 'Arabic', k === 'translationEn' || k === 'translation' ? 'textArabic' : null]
          .filter(Boolean).map((n) => strVal(props[n])).find((x) => x && AR.test(x));
        if (sib) pairs[e] ??= { ar: sib, file: rel };
      }
      const latin = strVal(props.latin);
      if (latin && strVal(props.arabic)) names.add(latin);
      const arField = AR_FIELDS.map((k) => strVal(props[k])).find((v) => v && AR.test(v));
      if (arField) {
        for (const [k, v] of Object.entries(props)) {
          if (!GLOSS_FIELDS.has(k)) continue;
          const s = strVal(v);
          if (s && !AR.test(s)) gloss[s] ??= { ar: arField, file: rel };
          else if (v && ts.isObjectLiteralExpression(v)) {
            for (const q of v.properties) if (ts.isPropertyAssignment(q) && propName(q) === 'en') {
              const e = strVal(q.initializer); if (e && !AR.test(e)) gloss[e] ??= { ar: arField, file: rel };
            }
          }
        }
      }
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
}
const sortObj = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));
const out = { pairs: sortObj(pairs), gloss: sortObj(gloss), names: [...names].sort() };
fs.writeFileSync(path.join(ROOT, 'scripts/i18n/ar/data-ar.json'), JSON.stringify(out, null, 1) + '\n');
console.log('pairs', Object.keys(pairs).length, 'gloss', Object.keys(gloss).length, 'names', names.size);
