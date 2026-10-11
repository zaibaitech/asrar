import json
d=json.load(open('scripts/i18n/ar/ai_drafts.json')); dv=json.load(open('scripts/i18n/ar/ai_divine.json')); q=json.load(open('scripts/i18n/ar/ai_quran.json'))
L=["# Arabic AI-draft strings — needs native-speaker review","","Every row below is an **AI-draft** (hand-written by the assistant, not a machine translator). They are live in the `/ar` UI via `public/i18n/ar-ui.json`. Please check and correct in `scripts/i18n/ar/ai_drafts.json`, then run `python3 scripts/i18n/ar/build_catalog.py`.","","Rules applied: Divine Names = canonical Arabic from `src/data/divine-names.ts`; Qur'ān = original Arabic text (verses listed separately below, verify against a muṣḥaf — the repo had only English renderings; note `30:48` in `asrar-everyday-app.tsx` is rendered with the wording of 30:46, which matches the English); standard terms (التصوف، علم الحروف، الأبجد، المنازل، الاستخارة، الصدقة، الذكر); reflective, non-predictive tone (a few 'destiny/influence' phrasings were deliberately softened).","",f"Counts: {len(d)} AI-draft strings, {len(dv)} Divine-Name mappings, {len(q)} Qur'anic lines.","","## Qur'anic lines (AI-draft — verify)","","| English | Arabic |","|---|---|"]
L+=[f"| {k} | {v} |" for k,v in q.items()]
L+=["","## Divine-Name mappings (from divine-names.ts)","","| English / transliteration | Arabic |","|---|---|"]+[f"| {k} | {v} |" for k,v in sorted(dv.items())]
L+=["","## AI-draft UI strings","","| # | English | Arabic (AI-draft) |","|---|---|---|"]
for i,(k,v) in enumerate(d.items(),1):
  if k in q: continue
  L.append(f"| {i} | {k.replace('|','\\|')} | {v.replace('|','\\|')} |")
open('docs/i18n/ar-ai-drafts.md','w').write("\n".join(L)+"\n")
