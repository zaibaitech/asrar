import json,os
P='scripts/i18n/ar/'
d=json.load(open(P+'ai_drafts.json')); dv=json.load(open(P+'ai_divine.json')); q=json.load(open(P+'ai_quran.json')); ad=json.load(open(P+'ai_adiya.json'))
rv=set(json.load(open(P+'reviewed.json'))) if os.path.exists(P+'reviewed.json') else set()
esc=lambda s:s.replace('|','\\|')
st=lambda k:'✅ reviewed' if k in rv else 'AI-draft'
ui=[(k,v) for k,v in d.items() if k not in q and k not in ad]
n_rv=sum(1 for k,_ in ui if k in rv)
L=["# Arabic AI-draft strings — review status","",
"Rows marked **✅ reviewed** were checked by the Language Reviewer (Oct 2026, see `/workspace/ar-review`) and their corrections applied. Rows marked **AI-draft** still need native-speaker review. All rows are live in the `/ar` UI via `public/i18n/ar-ui.json`. To correct a row, edit `scripts/i18n/ar/ai_drafts.json` (or `manual.json`), then run `python3 scripts/i18n/ar/build_catalog.py`.","",
"Conventions: Divine Names use the canonical Arabic. Qur'ān lines use the original text (imlāʾī spelling, full tashkīl), with references written as (surah name + āyah number). Ṣalawāt/duʿāʾ are listed separately: they are not Qur'ān. Terms: صاحب اليوم (day ruler), مداري (tropical), وِرد (practice), يُردَّد (recite).","",
f"Counts: {len(q)} Qur'anic lines (reviewed), {len(ad)} ṣalawāt/duʿāʾ (reviewed), {len(dv)} Divine-Name mappings (reviewed), {len(ui)} UI strings ({n_rv} reviewed, {len(ui)-n_rv} AI-draft).","",
"## Qur'anic lines (✅ reviewed: checked against the muṣḥaf)","","| English | Arabic |","|---|---|"]+[f"| {esc(k)} | {esc(v)} |" for k,v in q.items()]
L+=["","## Ṣalawāt and duʿāʾ (✅ reviewed: not Qur'ān; previously filed as Qur'an)","","| English | Arabic |","|---|---|"]+[f"| {esc(k)} | {esc(v)} |" for k,v in ad.items()]
L+=["","## Divine-Name mappings (✅ reviewed)","","| English / transliteration | Arabic |","|---|---|"]+[f"| {esc(k)} | {esc(v)} |" for k,v in sorted(dv.items())]
L+=["","## UI strings","","| # | Status | English | Arabic |","|---|---|---|---|"]
L+=[f"| {i} | {st(k)} | {esc(k)} | {esc(v)} |" for i,(k,v) in enumerate(ui,1)]
open('docs/i18n/ar-ai-drafts.md','w').write("\n".join(L)+"\n")
print(len(q),len(ad),len(dv),len(ui),n_rv)
