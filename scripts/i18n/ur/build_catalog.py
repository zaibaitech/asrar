"""Build public/i18n/ur-ui.json from catalog_source.py (run from the repo root)."""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from catalog_source import ENTRIES
from catalog_ai_draft import AI_ENTRIES

out, seen = {}, {}
for group, en, ur in list(ENTRIES) + [('ai', en, ur) for _, en, ur in AI_ENTRIES]:
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
