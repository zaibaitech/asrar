"""Build public/i18n/ur-ui.json from catalog_source.py (run from the repo root)."""
import json, os, re, subprocess, sys
sys.path.insert(0, os.path.dirname(__file__))
from catalog_source import ENTRIES
from catalog_ai_draft import AI_ENTRIES
from catalog_ai_draft_ui import AI_UI_ENTRIES
from catalog_calculator_data import REVIEWER_ENTRIES, BATCH15_DRAFTS

# Batch 13 (reviewed in pass 3): Urdu for the /ur/abjad calculator UI, kept as a locale file
# next to en.ts/ar.ts (src/features/calculator/i18n/ur.ts) and paired with the English here.
CALC_ENTRIES = [(r['en'], r['ur']) for r in json.loads(
    subprocess.check_output(['npx', 'tsx', 'scripts/i18n/ur/dump_calculator.ts'], text=True))]

out, seen = {}, {}
for group, en, ur in list(ENTRIES) + [('ai', en, ur) for _, en, ur in AI_ENTRIES] + [('ai-ui', en, ur) for _, en, ur in AI_UI_ENTRIES] + [('calc-ui', en, ur) for en, ur in CALC_ENTRIES] + [('calc-data', en, ur) for _, en, ur in REVIEWER_ENTRIES + BATCH15_DRAFTS]:
    if en in out and out[en] != ur:
        sys.exit(f'conflicting Urdu for {en!r}: {out[en]!r} vs {ur!r}')
    if not en.startswith('re:') and not re.search(r'[\u0600-\u06FF]', ur):
        sys.exit(f'no Arabic-script text in Urdu for {en!r}')
    out[en] = ur
    seen.setdefault(en, group)
with open('public/i18n/ur-ui.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=0, sort_keys=True)
    f.write('\n')
print(len(out), 'entries')
