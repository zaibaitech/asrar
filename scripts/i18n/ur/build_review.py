"""
Generate docs/i18n/ur-review.md: every Urdu string on the /ur pages with its
English source, grouped for the native reviewer. Run from the repo root:
  python3 scripts/i18n/ur/build_review.py
"""
import json, os, subprocess, sys
sys.path.insert(0, os.path.dirname(__file__))
from catalog_source import ENTRIES
from review_log import ANSWERS, CORRECTIONS

dump = json.loads(subprocess.check_output(['npx', 'tsx', 'scripts/i18n/ur/dump_ts.ts'], text=True))

# Standard Urdu Islamic vocabulary used consistently across the pages.
GLOSSARY = [
    ('Allah', 'اللہ', 'Urdu orthography (ہ). Divine Names in lists/tables stay in Arabic script.'),
    ('the Prophet ﷺ', 'نبی کریم ﷺ', ''),
    ('ṣalawāt on the Prophet ﷺ', 'درود شریف (پڑھنا)', 'Review batch 1.'),
    ('Bismillāh', 'بسم اللہ', ''),
    ('Abjad (ḥisāb al-jummal)', 'ابجد (حسابِ جمل)', ''),
    ('ʿilm al-ḥurūf', 'علم الحروف', ''),
    ('ʿilm al-aʿdād (numerology)', 'علم الاعداد', 'Target search phrase.'),
    ('ʿilm al-nujūm (science of the stars)', 'علم النجوم / علمِ نجوم', 'In everyday Urdu this also means astrology; always framed as “روایتی” and “غور و فکر”.'),
    ('burj / burūj', 'برج / بروج', ''),
    ('planetary hours', 'ساعاتِ کواکب', 'Singular: ساعت (feminine): آج کی ساعتیں / آج کی ساعاتِ کواکب (review Q1; the masculine “آج کے ساعات” is no longer used).'),
    ('planet', 'سیارہ', 'کوکب kept in the compound ساعاتِ کواکب.'),
    ('istikhāra / ṣalāt al-istikhāra', 'استخارہ / نمازِ استخارہ', 'Oblique: استخارے سے / استخارے کے ساتھ.'),
    ('ṣadaqa', 'صدقہ', 'Oblique: صدقے کی رہنمائی.'),
    ('dhikr', 'ذکر', 'The app also writes “Zikr”; both → ذکر.'),
    ('duʿāʾ', 'دعا', ''),
    ('nikāḥ', 'نکاح', '“Marriage” in UI → شادی; the contract itself → نکاح.'),
    ('tawakkul', 'توکل', ''),
    ('niyya (intention)', 'نیت', ''),
    ('the unseen (al-ghayb)', 'غیب', 'Disclaimer: غیب کا علم صرف اللہ کو ہے۔'),
    ('kahāna (fortune-telling)', 'کہانت', ''),
    ('Beautiful Names of Allah', 'اسمائے حسنیٰ', 'Single Name: اسمِ الٰہی.'),
    ('ikhtiyārāt (electional timing)', 'اختیارات / علمِ اختیارات', 'Caution: in everyday Urdu اختیارات means “powers/authority”; always glossed (“مناسب تاریخوں کا انتخاب”), plain language first in SEO titles, never alone as a nav label or button (“بہترین تاریخیں”). Review Q2.'),
    ('lunar mansions (manāzil)', 'منازلِ قمر / منزلِ قمر', ''),
    ('soul connection', 'روحانی ربط', 'Compatibility metric name.'),
    ('Mashriqi / Maghribi order', 'مشرقی / مغربی ترتیب', 'مغربی also means “Western”; glossed once as “(شمالی افریقی)”.'),
    ('tāʾ marbūṭa', 'تائے مربوطہ (ة)', ''),
    ('Chaldean order', 'کلدانی ترتیب', ''),
    ('Planets: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn', 'شمس، قمر، مریخ، عطارد، مشتری، زہرہ، زحل', 'Sun/Moon glossed as (سورج)/(چاند) in the guide table.'),
    ('Zodiac: Aries … Pisces', 'حمل، ثور، جوزا، سرطان، اسد، سنبلہ، میزان، عقرب، قوس، جدی، دلو، حوت', ''),
    ('Elements: fire, earth, air, water', 'آگ، مٹی، ہوا، پانی', 'Adjective once: ہوائی برج.'),
    ('Weekdays: Sunday … Saturday', 'اتوار، پیر، منگل، بدھ، جمعرات، جمعہ، ہفتہ', ''),
    ('Hijri (AH)', 'ہجری (ھ)', ''),
]

NOTES = [
    '“آج کے ساعات” (meta description of /ur/planetary-hours and its first FAQ) is the colloquial search phrase Mario asked to target; grammatically ساعت is feminine (آج کی ساعتیں). Keep or change?',
    '“اختیارات” on its own reads as “powers/authority” to most Urdu speakers. The pages always pair it with “مناسب تاریخوں کا انتخاب”. Is that enough, or should the H1 drop the word?',
    '“Wednesday night” (burj result) → “بدھ کی رات”. In Urdu usage this can mean the night before or after Wednesday; check against the intended meaning (the night following Wednesday’s day?).',
    'Planetary-hour guide item “Cutting ties” → “تعلقات ختم کرنا”. Should be checked so it never reads as encouraging قطع رحمی.',
    'Planet-of-the-day intro: “a ruling planet that colours its energy” → softened to “روایت کے مطابق … اس دن کی کیفیت کا رنگ متعین کرتا ہے”. Check that the wording does not attribute independent influence to planets.',
    'Astro technical terms in the Ikhtiyārāt breakdown (محترق، خالی السیر، تحت الشعاع، ہبوط، وبال، رجعت، الطریقۃ المحترقۃ) follow classical Arabic/Persian usage; please confirm they are understood by Urdu readers.',
    'Urdu-typed names in the Abjad count: RESOLVED. Urdu letters are converted before counting (see the reviewer answers below, Q7).',
    'Interpretive result content (soul-connection archetype meanings, burj career texts, per-date rule explanations, manzil descriptions, day guidance paragraphs) is NOT translated yet and still shows in English; the pages say “ٹول کے کچھ حصے ابھی انگریزی میں ہیں۔”',
]

def esc(s):
    return s.replace('|', '\\|').replace('\n', ' ')

def table(rows, cols=('English', 'Urdu')):
    out = ['| ' + ' | '.join(cols) + ' |', '|' + '---|' * len(cols)]
    for r in rows:
        out.append('| ' + ' | '.join(esc(str(c)) for c in r) + ' |')
    return '\n'.join(out)

cat = {}
for g, en, ur in ENTRIES:
    cat.setdefault(en, (g, ur))
quran = [(en, ur) for en, (g, ur) in cat.items() if g == 'quran']
rel = [(en, ur) for en, (g, ur) in cat.items() if g == 'rel']
ui_cat = [(en, ur) for en, (g, ur) in cat.items() if g == 'ui']

seo = dump['seo']
pages = dump['pages']
ui = dump['ui']

n_meta = len(seo)
n_pages = len({(p['en'], p['ur']) for p in pages})
n_ui = len({(p['en'], p['ur']) for p in ui})
n_cat = len(cat)
total = n_meta + n_pages + n_ui + n_cat

md = []
md.append('# Urdu (/ur) — native review sheet\n')
md.append('Phase 1 Urdu pages for asrar.app. **All /ur pages are noindex and are not in the sitemap or hreflang** until Mario approves indexing. The native review is done and its corrections are applied (see below).\n')
md.append('Pages: `/ur`, `/ur/name-and-mother-burj`, `/ur/compatibility`, `/ur/abjad`, `/ur/planetary-hours`, `/ur/planet-of-the-day`, `/ur/ikhtiyarat`.\n')
md.append('Every string was translated by hand (no machine translation). The mobile app (zaibaitech/asrar-mobile) has no Urdu, so nothing was reused. Qur\'an and Divine Names stay in Arabic.\n')
md.append(f'**String count: {total}** ({n_meta} SEO metadata, {n_pages} page copy, {n_ui} shared UI in TypeScript, {n_cat} tool-UI catalog entries incl. {sum(1 for k in cat if k.startswith("re:"))} patterns).\n')
md.append('Sources (edit there, then regenerate this file with `python3 scripts/i18n/ur/build_review.py`):\n')
md.append('- SEO metadata: `src/lib/urMetadata.ts`\n- Page copy: `src/lib/i18n/urPages.ts`\n- Shared UI: `src/lib/i18n/ur.ts`, `src/components/seo/relatedTools.ts`\n- Tool UI catalog: `scripts/i18n/ur/catalog_source.py` → `public/i18n/ur-ui.json` (`python3 scripts/i18n/ur/build_catalog.py`)\n')
md.append('\n## Open questions for the reviewer\n')
for i, n in enumerate(NOTES, 1):
    md.append(f'{i}. {n}')
md.append('\n### Reviewer answers (native review, Oct 2026)\n')
md.append(table([(i, q, a, st) for i, (q, a, st) in enumerate(ANSWERS, 1)], ('#', 'Question', 'Reviewer answer', 'Status')))
n_applied = sum(1 for c in CORRECTIONS if c[4].startswith('✅'))
md.append(f'\n\n## Review corrections ({n_applied} of {len(CORRECTIONS)} applied)\n')
md.append('From the native reviewer (Language Reviewer, Oct 2026). The tables further down show the strings as they are now, with the corrections in place. /ur stays noindex and out of the sitemap and hreflang until Mario approves indexing (Q8, the untranslated result texts, is still open).\n')
md.append(table([c[:5] for c in CORRECTIONS], ('Batch', 'String', 'Before', 'After', 'Status')))
md.append('\n## 1. Qur\'an / Divine Names\n')
md.append('Kept in Arabic script. The tool shows transliterations; on /ur they are replaced by the Arabic the tool itself writes. Divine Names in the Urdu page copy (burj table) are marked lang="ar" and rendered in Naskh; inside the tool they use the page font.\n')
md.append(table(quran, ('English (tool text)', 'Shown on /ur')))
md.append('\n\n### Burj table: dhikr per burj (from `burujData.json`; shown fully vocalised on /ur, the data file is unchanged)\n')
md.append(table([(d['burj'], d['arabic'], d['transliteration'], d['meaning'].get('en') if isinstance(d['meaning'], dict) else d['meaning']) for d in dump['dhikr']], ('Burj', 'Arabic (shown on /ur, vocalised)', 'Transliteration', 'English meaning')))
md.append('\n\nAlso in Arabic inside the Urdu copy: ﷺ (after نبی کریم), the example spelling فاطمة, the letter ة.\n')
md.append('\n## 2. Religious terms\n')
md.append('### Glossary (used consistently on every page)\n')
md.append(table(GLOSSARY, ('Term', 'Urdu', 'Note')))
md.append('\n\n### Religious / disclaimer strings in the tool UI\n')
md.append(table(rel))
md.append('\n\n## 3. SEO metadata\n')
md.append('Titles and descriptions (`urMetadata.ts`). The title gets “ | اسرار” appended on tool pages. Target phrases: نام سے برج، امی کے نام سے برج، علم الاعداد، آج کے ساعات۔\n')
md.append(table([(p['where'], p['en'], p['ur']) for p in seo], ('Page / field', 'English', 'Urdu')))
md.append('\n\n### Page copy (H1, intro, sections, FAQ)\n')
md.append(table([(p['where'], p['en'], p['ur']) for p in pages], ('Key', 'English', 'Urdu')))
md.append('\n\n## 4. UI\n')
md.append('### Shared UI (TypeScript)\n')
md.append(table([(p['where'], p['en'], p['ur']) for p in ui], ('Key', 'English', 'Urdu')))
md.append('\n\n### Tool UI catalog (`public/i18n/ur-ui.json`)\n')
md.append('Exact-match English text in the tools → Urdu. `re:` keys are patterns; `$1`… are replaced by the catalog translation of each captured part, `$pN` keeps the captured text (times).\n')
md.append(table(ui_cat))
md.append('\n')
os.makedirs('docs/i18n', exist_ok=True)
open('docs/i18n/ur-review.md', 'w', encoding='utf-8').write('\n'.join(md))
print('total', total, 'meta', n_meta, 'pages', n_pages, 'ui', n_ui, 'catalog', n_cat)
