"""
Generate docs/i18n/ur-review.md: every Urdu string on the /ur pages with its
English source, grouped for the native reviewer. Run from the repo root:
  python3 scripts/i18n/ur/build_review.py
"""
import json, os, subprocess, sys
sys.path.insert(0, os.path.dirname(__file__))
from catalog_source import ENTRIES
from catalog_ai_draft import AI_ENTRIES
from review_log import ANSWERS, CORRECTIONS, PENDING_REVIEW

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
    ('favourable / less favourable (traditional)', 'موافق / کم موافق', 'Ikhtiyārāt and planetary-hour wording; “Auspicious” → موافق. “Unfavourable” is not a separate term in the app text (see open question on «غیر موافق»).'),
    ('supportive (hour, planet)', 'معاون', 'e.g. “a planetary hour traditionally seen as supportive” → معاون; “a supportive connection” → موافق ربط.'),
    ('Moon Applying to / Separating from', 'اتصال / انصراف (جدا ہونا)', 'Classical terms for the Moon moving toward / away from a planet. Do not use ربط for these two (ربط is the plain-language “connection”, see open question).'),
    ('aspect / hard aspect', 'نظر / سخت نظر', ''),
    ('benefic planet', 'سعد سیارہ', 'Used for Jupiter and Venus. The app has no “malefic” string yet; «نحس» is not used.'),
    ('elemental nature / temperament', 'عنصری مزاج', 'Element + مزاج: آتشی / زمینی / ہوائی / آبی مزاج. «فطرت» is not used for the four elements (فطرت keeps its ordinary meaning “inborn character”, e.g. “Your nature” in the Istikhāra result). Never the Arabic spellings «عنصري/عنصرية».'),
    ('friction / tension / strain / conflict', 'اختلاف / تناؤ / کشیدگی / تنازع / جھگڑا', 'اختلاف = friction or disagreement between people; تناؤ = tension; کشیدگی = strain; تنازع = conflict as a state or process (“low-conflict”, “conflict resolution”); جھگڑا = quarrel. «رگڑ» (physical rubbing) is never used for people.'),
    ('essential dignities: domicile, exaltation, detriment, fall', 'بیت، شرف، وبال، ہبوط', '“Domicile/Exaltation” is «بیت/شرف»; «بیت الشرف» conflates the two and is not used.'),
    ('combust / retrograde', 'محترق / رجعت', 'Mercury retrograde → عطارد رجعت میں.'),
    ('Maghribi System vs Maghribi order', 'مغربی نظام / مغربی ترتیب', 'The Abjad selector says “System” → «نظام»; page copy says “order” → «ترتیب» (the letter order). Same concept, two source words; see open question. “Western” (the small gloss under the Maghribi button) is «مغربی ترتیب» and so repeats the label.'),
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
    'Soul-connection archetype meanings, burj career texts, per-date rule explanations (Simple mode), manzil descriptions and day guidance paragraphs are now AI-drafted (section 5, awaiting native review). Other result texts are still English (see “Still in English” at the end); the pages keep saying “ٹول کے کچھ حصے ابھی انگریزی میں ہیں۔”',
    'Glossary audit (Phase 2): «مغربی» is both “Maghribi” and “Western”, so the small “Western” gloss under the Maghribi button («مغربی ترتیب») repeats the label and does not tell an Urdu reader more; the same for «مشرقی ترتیب». The English UI repeats itself in the same way (“Maghribi / Western”), and the region is given by the note line. Options: keep as is; or shorten the gloss to «مغربی» / «مشرقی»; or gloss it with the region («شمالی افریقی» / «مشرقِ وسطیٰ و ایشیا»). Not changed.',
    'Glossary audit (Phase 2): the selector label “Maghribi System:” is «مغربی نظام:» but the same concept is «مغربی ترتیب» on the pages and in the FAQ (“Maghribi and Mashriqi orders”). Use one word everywhere (ترتیب = letter order, نظام = the whole system), or keep both because the English source uses both?',
    'Glossary audit (Phase 2): “connection” appears as «ربط» (“a supportive connection”, soul connection «روحانی ربط») and the classical Moon “Applying to” as «اتصال». Should the plain-language sentences about the Moon forming a connection with Jupiter/Venus use «اتصال» too, or stay in plain «ربط»?',
    'Glossary audit (Phase 2): “unfavourable” strength — «کم موافق» (“less favourable”) is used for mild cases; a few sadaqah lines about foods that “disrupt the element severely” use «غیر موافق». Keep the two strengths, or use one term?',
    'Glossary audit (Phase 2): “dignity” is «ذاتی قوت» in “Moon Essential Dignity” but «وقار / وقار کی حالت» in newer strings and «حالت» in “Check the Dignity”. Pick one term for the planetary-dignity concept (candidates: «ذاتی قوت», «وقار», «حالت»).',
    'Glossary audit (Phase 2): “conflict” is «جھگڑا» (label “Conflict”, “Unnecessary conflict”) but «تنازع» in compounds (“low-conflict”, “conflict resolution”). Intentional register split (quarrel vs state), or unify?',
    'Glossary audit (Phase 2): “auspicious” is «موافق» in some strings but «مناسب» / «موزوں» in the Ikhtiyārāt and Sadaqah page copy (“Choose an auspicious date…”). «موافق» is the glossary term for favourable; should “auspicious” always follow it?',
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
AI_SECTIONS = [
    ('rules', 'Ikhtiyārāt rule explanations (Simple mode, the default)', 'Shown per date in the rule list of the Best Dates tool. Source: `src/lib/ikhtiyarat/ruleSimplification.ts`.'),
    ('arch', 'Soul-connection archetypes (compatibility result)', 'Tags, title, one-liner, meaning and outlook per context, watch-out, key to success. Source: `src/constants/soulConnectionArchetypes.ts`.'),
    ('manzil', 'Lunar mansions (manāzil) shown on the planet/hour pages', 'Name meaning, divine quality, spiritual focus, favourable/unfavourable themes, reflection line. The Arabic and transliterated mansion names are untouched. Source: `src/lib/lunarMansions.ts`.'),
    ('career', 'Burj career texts (burj result, Career tab)', 'Traditional text, guiding principle, fields to consider carefully, and the 45 recommended-field categories with their items. Source: `src/data/burujData.json` (`career.*`).'),
    ('career-ui', 'Burj Career tab labels', 'Headings and buttons of the tab. Source: `src/features/istikhara/components/CareerTabAdvanced.tsx`.'),
    ('potd', 'Planet-of-the-day guidance paragraphs', 'One paragraph per weekday. Source: `app/planet-of-the-day/PlanetOfTheDayPage.tsx`.'),
]
quran = [(en, ur) for en, (g, ur) in cat.items() if g == 'quran']
rel = [(en, ur) for en, (g, ur) in cat.items() if g == 'rel']
ui_cat = [(en, ur) for en, (g, ur) in cat.items() if g == 'ui']
STILL_ENGLISH = open(os.path.join(os.path.dirname(__file__), 'still_english.md'), encoding='utf-8').read()

seo = dump['seo']
pages = dump['pages']
ui = dump['ui']

n_meta = len(seo)
n_pages = len({(p['en'], p['ur']) for p in pages})
n_ui = len({(p['en'], p['ur']) for p in ui})
n_cat = len(cat)
n_ai = len({en for _, en, _ in AI_ENTRIES})
total = n_meta + n_pages + n_ui + n_cat

md = []
md.append('# Urdu (/ur) — native review sheet\n')
md.append('Phase 1 Urdu pages for asrar.app. **All /ur pages are noindex and are not in the sitemap or hreflang** until Mario approves indexing. The native review is done and its corrections are applied (see below).\n')
md.append('Pages: `/ur`, `/ur/name-and-mother-burj`, `/ur/compatibility`, `/ur/abjad`, `/ur/planetary-hours`, `/ur/planet-of-the-day`, `/ur/ikhtiyarat`.\n')
md.append('Every string was translated by hand (no machine translation), **except the AI-drafted result texts in section 5**, which were drafted by an AI assistant, are NOT native-reviewed and are listed there for the Language Reviewer. The mobile app (zaibaitech/asrar-mobile) has no Urdu, so nothing was reused. Qur\'an and Divine Names stay in Arabic.\n')
md.append(f'**String count: {total}** ({n_meta} SEO metadata, {n_pages} page copy, {n_ui} shared UI in TypeScript, {n_cat} tool-UI catalog entries incl. {sum(1 for k in cat if k.startswith("re:"))} patterns). Not counted here: {n_ai} AI-drafted result texts (section 5), which are not native-reviewed.\n')
md.append('Sources (edit there, then regenerate this file with `python3 scripts/i18n/ur/build_review.py`):\n')
md.append('- SEO metadata: `src/lib/urMetadata.ts`\n- Page copy: `src/lib/i18n/urPages.ts`\n- Shared UI: `src/lib/i18n/ur.ts`, `src/components/seo/relatedTools.ts`\n- Tool UI catalog: `scripts/i18n/ur/catalog_source.py` + AI drafts `scripts/i18n/ur/catalog_ai_draft.py` → `public/i18n/ur-ui.json` (`python3 scripts/i18n/ur/build_catalog.py`)\n')
md.append('\n## Open questions for the reviewer\n')
for i, n in enumerate(NOTES, 1):
    md.append(f'{i}. {n}')
md.append(f'\n### New strings for the Language Reviewer ({len(PENDING_REVIEW)} pending)\n')
md.append('Added after the native review; please check these.\n')
md.append(table(PENDING_REVIEW, ('Where', 'English', 'Urdu', 'Note')))
md.append('\n')
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
md.append(f'\n## 5. AI-drafted result texts ({n_ai} strings, NOT native-reviewed)\n')
md.append('These were drafted by an AI assistant (Claude, Oct 2026), not by a native speaker, to fill the English gaps listed in open question 8. They are live on the **noindex** /ur pages only (no /ur page is indexed, in the sitemap or in hreflang). Please review them like the rest; the register follows the glossary above (traditional, reflective wording; planets are never agents). Divine Names and Qur\'an text are deliberately not in this list: the Arabic comes from the data files.\n')
md.append('To change one, edit `scripts/i18n/ur/catalog_ai_draft.py` and run `python3 scripts/i18n/ur/build_catalog.py` and `python3 scripts/i18n/ur/build_review.py`. `src/lib/urdu-result-coverage.test.ts` fails if an English source string changes without its Urdu pair.\n')
for sec, title, note in AI_SECTIONS:
    rows = [(en, ur) for sc, en, ur in AI_ENTRIES if sc == sec]
    md.append(f'\n### 5.{[x[0] for x in AI_SECTIONS].index(sec) + 1} {title} ({len(rows)})\n')
    md.append(note + '\n')
    md.append(table(rows))
    md.append('\n')
md.append('\n### Still in English on /ur (not part of this change)\n')
md.append(STILL_ENGLISH)
md.append('\n')
os.makedirs('docs/i18n', exist_ok=True)
open('docs/i18n/ur-review.md', 'w', encoding='utf-8').write('\n'.join(md))
print('total', total, 'meta', n_meta, 'pages', n_pages, 'ui', n_ui, 'catalog', n_cat)
