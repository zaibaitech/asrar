#!/usr/bin/env python3
"""Build public/i18n/ar-ui.json, the runtime Arabic catalog used by ArabicDomTranslator.

Run from anywhere:  python3 scripts/i18n/ar/build_catalog.py
(data-ar.json is regenerated first with:  node scripts/i18n/ar/data_ar.js)

Precedence, lowest to highest (a later layer overrides an earlier one):
  1. mobile.json                   strings from the reviewed mobile app (asrar-mobile)
  2. machine drafts (mt-accepted.json) — ONLY keys the Language Reviewer accepted
     unchanged (mt-reviewed-accepted.json). There is no score-based auto-accept any
     more: every other machine draft is written to mt-pending.json and is NOT live.
     Religious-term, fragment and name-database keys are never taken from MT; when a
     verified Arabic field exists in the data files (data-ar.json) that is used instead.
  3. ai_divine.json, ai_drafts.json  AI drafts (Qur'an/du'a/Divine Names checked against sources)
  4. manual.json                   hand-written / reviewed entries
  5. reviewer-corrections.json     Language Reviewer batches 1–4 (Oct 2026); wins over everything,
                                   including the 9 "remove key" decisions
Then: re-key fixed mojibake source keys, drop no-op/fragment keys, add regex patterns.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
OUT = os.path.join(ROOT, 'public', 'i18n', 'ar-ui.json')
P = lambda f: os.path.join(HERE, f)
load = lambda f, d=None: json.load(open(P(f), encoding='utf-8')) if os.path.exists(P(f)) else d

# ---- religious-term filter (widened, Oct 2026) -------------------------------------------
SENS = re.compile(r"\b(allah|god|lord|divine|prophet|messenger|qur|quran|ayah|ayat|surah|sura|du'?a|duʿāʾ|dua|prayer|pray|salat|ṣalāt|salah|dhikr|zikr|ḏikr|tasbih|names? of|the one who|the most|al-\w+|as-\w+|ar-\w+|an-\w+|ash-\w+|ya \w+|yā \w+|islam\w*|muslim|mystic\w*|sufi\w*|angel\w*|jinn|sin|sins|haram|halal|forbidden|permissible|fortune|divination|magic|talisman|taweez|sunnah|hadith|sharia|fiqh|scholar\w*|imam|mosque|ramadan|hajj|umrah|fast|fasting|charity|sadaq\w*|istikh\w*|repent\w*|forgive\w*|mercy|paradise|hell|heaven|soul|spirit\w*|blessing\w*|baraka\w*|sacred|holy|faith|worship)\b", re.I)
SENS2 = re.compile(r"\b(rahman|rahim|raḥ\w*|bismillah\w*|subhan\w*|alhamdu\w*|insha'?allah|masha'?allah|astaghfir\w*|istighfar|ṣalawāt|salawat|salla|ṣalla|ḥadīth|hadīth|ḥadith|āyah|āyāt|sūrah|qur'?ān|qurʾān|qurʾānic|qur'anic|quranic|verse|verses|revelation|revealed|remember me|remembrance|majesty|glorif\w*|exalted|almighty|merciful|gracious|tawakkul|tawḥīd|tawhid|tawba|rizq|ihsan|iḥsān|iman|īmān|taqwa|taqwā|sabr|shukr|wird|awrād|jannah|janna|hereafter|ākhira|akhira|garden of|seal of|prophetic|ṣaḥāba|sahaba|shaykh|sheikh|cheikh|nūr|rūḥ|kaʿba|kaaba|mecca|makkah|medina|madinah|hijri|hijra|laylat|night of power|ṣadaqa|zakat|zakāt|shirk|kufr|creator|lordship)\b", re.I)
# Data files whose English glosses sit next to Divine Names, Prophetic names, verses or du'a.
REL_FILES = ('propheticNames201.ts', 'divine-names.ts', 'divineNames.ts', 'divineNameResonance.ts',
             'divineResonance.ts', 'divineNameMeanings.ts', 'ChallengeCard.tsx', 'planetGuides.ts',
             'server-data.ts', 'planetarySpirituality.ts', 'debtRelief1000.ts')
# Code / Tailwind fragments that are not UI text.
CODE = re.compile(r"^(?:use (?:client|server|strict)|(?:(?:from|via|to|bg|text|border)-[a-z]+-\d{2,3}\s*)+)$")
GLOSS = [('علم الرسائل', 'علم الحروف'), ('الرسائل العربية', 'الحروف العربية'), ('ساتر', 'زحل'), ('فيير', 'النار')]
BRAND = [('أسريا', 'أسرارية')]  # brand name is أسرارية everywhere
REKEY = {  # source strings were mojibake; fixed in src/features/ilm-huruf/IlmHurufPanel.tsx
    'š¨ Very Difficult': '🚨 Very Difficult',
    'š ï¸\x8f Challenging Compatibility': '⚠️ Challenging Compatibility',
}

mobile = load('mobile.json', {})
mt = load('mt-accepted.json', {})
accepted = set(load('mt-reviewed-accepted.json', []))
ai = {}
for f in ('ai_divine.json', 'ai_drafts.json'):
    ai.update(load(f, {}))
manual = load('manual.json', {})
rev = load('reviewer-corrections.json', {})
data = load('data-ar.json', {'pairs': {}, 'gloss': {}, 'names': {}})
reldata = {}
for kind in ('pairs', 'gloss'):
    for k, v in data[kind].items():
        if os.path.basename(v['file']) in REL_FILES:
            reldata.setdefault(k, v['ar'])
namedb = {n for n in data['names'] if n == n.lower()}  # lowercase latin entries of the name database

def religious(k):
    return bool(SENS.search(k) or SENS2.search(k) or k in reldata)

stats = {}
bump = lambda s, n=1: stats.__setitem__(s, stats.get(s, 0) + n)
cat, src, pending = {}, {}, {}

def put(k, v, s):
    cat[k] = v; src[k] = s

for k, v in mobile.items():
    put(k, v, 'mobile')

for k, e in mt.items():
    a = e['ar'] if isinstance(e, dict) else e
    reason = None
    if CODE.match(k): reason = 'fragment'
    elif k in namedb: reason = 'name-db'
    elif k not in accepted: reason = 'religious' if religious(k) else 'unreviewed'
    if reason:
        if reason == 'religious' and k in reldata and k not in ai and k not in manual:
            put(k, reldata[k], 'data')
        else:
            pending[k] = {'ar': a, 'reason': reason}
        continue
    for x, y in GLOSS: a = a.replace(x, y)
    put(k, a, 'mt')

for k, v in ai.items(): put(k, v, 'ai')
for k, v in manual.items(): put(k, v, 'manual')

removed = []
for k, e in rev.items():
    k0 = next((o for o, n in REKEY.items() if n == k), None)
    if e.get('remove'):
        removed.append(k); cat.pop(k, None); src.pop(k, None); pending.pop(k, None); continue
    if k0: cat.pop(k0, None); src.pop(k0, None)
    put(k, e['ar'], 'reviewed')

for old, new in REKEY.items():
    if old in cat:
        put(new, cat.pop(old), src.pop(old))

dropped = []
for k in list(cat):
    v = cat[k]
    if CODE.match(k) or (v == k and not re.search('[\u0600-\u06ff]', v)):
        dropped.append(k); del cat[k]; src.pop(k, None); continue
    for x, y in BRAND: v = v.replace(x, y)
    cat[k] = v

PAT = {
 r"re:^(\S+) (\w+) — (\w+) is weakened in (\w+)$": "$1 $2 — $3 ضعيف في برج $4",
 r"re:^(\S+) (\w+) — (\w+) is strong in (\w+)$": "$1 $2 — $3 قوي في برج $4",
 r"re:^(\S+) (\w+) — (\w+) is neutral in (\w+)$": "$1 $2 — $3 محايد في برج $4",
 r"re:^(\S+) (\w+) — (\w+) is comfortable in (\w+)$": "$1 $2 — $3 مرتاح في برج $4",
 r"re:^(\w+) is weakened in (\w+)$": "$1 ضعيف في برج $2",
 r"re:^(\w+) is strong in (\w+)$": "$1 قوي في برج $2",
 r"re:^(\w+) is neutral in (\w+)$": "$1 محايد في برج $2",
 r"re:^(\w+) is comfortable in (\w+)$": "$1 مرتاح في برج $2",
 r"re:^(\w+) status: (\w+)$": "حالة $1: $2",
 r"re:^· hour of (\w+)$": "· ساعة $1",
 r"re:^(Day|Night) · Hour (\d+)$": "$1 · الساعة $2",
}
# Divine-Name practice sentences state the Name's abjad value as the count, which follows
# the selected Abjad system (getDivineNames in src/data/divine-names.ts). Turn each
# "Recite N times …" entry into a count pattern so /ar shows the right N for both systems.
COUNT = re.compile(r"^Recite (\d+) times(\W.*)$", re.S)
count_patterns = 0
converted = set()
for k in list(cat):
    m = COUNT.match(k)
    if not m: continue
    n, rest = m.groups()
    num = re.compile(r"(?<!\d)" + n + r"(?!\d)")
    if len(num.findall(cat[k])) != 1: continue
    cat["re:^Recite (\\d+) times" + re.sub(r"([\\^$.*+?()[\]{}|/])", r"\\\1", rest) + "$"] = num.sub("$p1", cat.pop(k))
    src.pop(k, None); converted.add(k); count_patterns += 1
bump('count-patterns', count_patterns)

for k in list(pending):
    if k in cat or k in rev or k in REKEY or k in converted: del pending[k]  # covered by ai / manual / reviewed entries
cat.update(PAT)
for s in src.values(): bump(s)
bump('patterns', len(PAT))

json.dump(cat, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
json.dump(dict(sorted(pending.items())), open(P('mt-pending.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
reasons = {}
for e in pending.values(): reasons[e['reason']] = reasons.get(e['reason'], 0) + 1
print(json.dumps({'entries': len(cat), 'by_source': stats, 'mt_pending': len(pending), 'pending_reasons': reasons,
                  'removed_by_reviewer': removed, 'dropped_noop_or_fragment': dropped}, ensure_ascii=False, indent=1))
