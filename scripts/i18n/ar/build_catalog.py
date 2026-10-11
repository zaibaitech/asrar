import json,re
r=json.load(open('ar_dict_scored.json'))
manual=json.load(open('manual.json')) if __import__('os').path.exists('manual.json') else {}
SENS=re.compile(r"\b(allah|god|lord|divine|prophet|messenger|qur|quran|ayah|ayat|surah|sura|du'?a|duʿāʾ|dua|prayer|pray|salat|ṣalāt|salah|dhikr|zikr|ḏikr|tasbih|names? of|the one who|the most|al-\w+|as-\w+|ar-\w+|an-\w+|ash-\w+|ya \w+|yā \w+|islam\w*|muslim|mystic\w*|sufi\w*|angel\w*|jinn|sin|sins|haram|halal|forbidden|permissible|fortune|divination|magic|talisman|taweez|sunnah|hadith|sharia|fiqh|scholar\w*|imam|mosque|ramadan|hajj|umrah|fast|fasting|charity|sadaq\w*|istikh\w*|repent\w*|forgive\w*|mercy|paradise|hell|heaven|soul|spirit\w*|blessing\w*|baraka\w*|sacred|holy|faith|worship)\b",re.I)
GLOSS=[('علم الرسائل','علم الحروف'),('الرسائل العربية','الحروف العربية'),('ساتر','زحل'),('فيير','النار')]
cat={};stats={'manual':0,'mobile':0,'mt':0,'held':0}
held=[]
for k,v in r.items():
  if k in manual: continue
  if v['src']=='mobile': cat[k]=v['ar'];stats['mobile']+=1;continue
  a=v['ar']
  if re.search('[A-Za-z]{3}',a) or v['score']<0.75 or SENS.search(k) or '⁇' in a:
    held.append(k);stats['held']+=1;continue
  for x,y in GLOSS: a=a.replace(x,y)
  cat[k]=a;stats['mt']+=1
for k,v in manual.items(): cat[k]=v;stats['manual']+=1
PAT={
 r"re:^(\S+) (\w+) — (\w+) is weakened in (\w+)$":"$1 $2 — $3 ضعيف في برج $4",
 r"re:^(\S+) (\w+) — (\w+) is strong in (\w+)$":"$1 $2 — $3 قوي في برج $4",
 r"re:^(\S+) (\w+) — (\w+) is neutral in (\w+)$":"$1 $2 — $3 محايد في برج $4",
 r"re:^(\S+) (\w+) — (\w+) is comfortable in (\w+)$":"$1 $2 — $3 مرتاح في برج $4",
 r"re:^(\w+) is weakened in (\w+)$":"$1 ضعيف في برج $2",
 r"re:^(\w+) is strong in (\w+)$":"$1 قوي في برج $2",
 r"re:^(\w+) is neutral in (\w+)$":"$1 محايد في برج $2",
 r"re:^(\w+) is comfortable in (\w+)$":"$1 مرتاح في برج $2",
 r"re:^(\w+) status: (\w+)$":"حالة $1: $2",
 r"re:^· hour of (\w+)$":"· ساعة $1",
 r"re:^(Day|Night) · Hour (\d+)$":"$1 · الساعة $2",
}
cat.update(PAT)
json.dump(cat,open('/workspace/asrar/public/i18n/ar-ui.json','w'),ensure_ascii=False,separators=(',',':'))
json.dump(held,open('held.json','w'),ensure_ascii=False)
print(stats,len(cat))
