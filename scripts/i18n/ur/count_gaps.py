# -*- coding: utf-8 -*-
"""
Counts English result strings from src/data/burujData.json (the English side) that the Urdu
catalog does not cover: exact match in public/i18n/ur-ui.json or a `re:` pattern entry.

Counts are UNIQUE English strings (occurrence counts in brackets). Arabic fields, transliterations,
icons and the fr side are not counted. Run:

    python3 scripts/i18n/ur/count_gaps.py                 # working-tree catalog
    python3 scripts/i18n/ur/count_gaps.py --ref HEAD      # catalog as committed at a git ref
    python3 scripts/i18n/ur/count_gaps.py --list spiritual_practice
"""
import argparse, json, os, re, subprocess, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
ap = argparse.ArgumentParser()
ap.add_argument('--ref')
ap.add_argument('--list')
a = ap.parse_args()

if a.ref:
    cat = json.loads(subprocess.check_output(['git', '-C', ROOT, 'show', f'{a.ref}:public/i18n/ur-ui.json']))
else:
    cat = json.load(open(os.path.join(ROOT, 'public/i18n/ur-ui.json'), encoding='utf-8'))
pats = [re.compile(k[3:]) for k in cat if k.startswith('re:')]
covered = lambda t: t in cat or any(p.search(t) for p in pats)

data = json.load(open(os.path.join(ROOT, 'src/data/burujData.json'), encoding='utf-8'))
SKIP = {'fr', 'arabic', 'transliteration', 'icon', 'reference', 'day_number', 'element_number', 'element_emoji', 'buruj', 'element', 'colors'}
areas = {}  # area -> {string: occurrences}

def add(area, s):
    if isinstance(s, str) and re.search(r'[A-Za-z]{3}', s):
        areas.setdefault(area, {})
        areas[area][s] = areas[area].get(s, 0) + 1

def walk(o, area):
    if isinstance(o, dict):
        for k, v in o.items():
            if k in SKIP: continue
            walk(v, area)
    elif isinstance(o, list):
        for v in o: walk(v, area)
    else:
        add(area, o)

for burj in data['buruj_data'].values():
    for top in ('personality', 'blessed_day', 'sadaqah', 'career'):
        walk(burj.get(top), top)
    for sub, v in (burj.get('spiritual_practice') or {}).items():
        walk(v, 'spiritual_practice.' + sub)
w = data.get('weekly_spiritual_practices')
if w is not None: walk(w, 'weekly_spiritual_practices')

tot_u = tot_o = miss_u = miss_o = 0
rows = []
for area in sorted(areas):
    u = len(areas[area]); o = sum(areas[area].values())
    m = [s for s in areas[area] if not covered(s)]
    mo = sum(areas[area][s] for s in m)
    rows.append((area, u, o, len(m), mo)); tot_u += u; tot_o += o; miss_u += len(m); miss_o += mo
    if a.list and area.startswith(a.list):
        for s in m: print('  -', s)
print(f"catalog: {'ref ' + a.ref if a.ref else 'working tree'} ({len(cat)} entries)")
print(f"{'area':44s} unique  occ | uncovered unique (occ)")
for area, u, o, mu, mo in rows: print(f'{area:44s} {u:6d} {o:5d} | {mu:6d} ({mo})')
print(f"{'TOTAL':44s} {tot_u:6d} {tot_o:5d} | {miss_u:6d} ({miss_o})")
