import json,re,sys
from multiprocessing import Pool
cat=json.load(open('catalog_en.json'));d=json.load(open('flat.json'))
def norm(s): return re.sub(r'[^\w\s]','',s.lower()).strip()
tm={};tmn={}
for k,v in d['men'].items():
  a=d['mar'].get(k)
  if isinstance(v,str) and isinstance(a,str) and re.search('[\u0600-\u06FF]',a):
    tm.setdefault(v.strip(),a); tmn.setdefault(norm(v),a)
translit=re.compile(r"[āīūḥṣḍṭẓʿʾ]")
func=re.compile(r"\b(the|and|of|to|your|you|is|for|with|in|this|a|an|are|be|on|from|by)\b",re.I)
jobs=[];res={}
for x in cat:
  s=x['s']
  if s in tm: res[s]={'ar':tm[s],'src':'mobile'};continue
  n=norm(s)
  if n and n in tmn: res[s]={'ar':tmn[n],'src':'mobile'};continue
  if translit.search(s) and not func.search(s) and len(s.split())<=6: continue  # names/transliterations stay
  jobs.append(s)
print('tm',len(res),'mt jobs',len(jobs),file=sys.stderr)
def init():
  global T; import argostranslate.translate as T
def tr(s):
  m=re.match(r'^([^A-Za-z0-9"“(\[]*)(.*?)([^A-Za-z0-9"”)\]?!.]*)$',s,re.S)
  pre,core,suf=m.group(1),m.group(2),m.group(3)
  try: out=T.translate(core,'en','ar')
  except Exception: return s,None
  return s,pre+out+suf
if __name__=='__main__':
  with Pool(6,initializer=init) as p:
    for i,(s,a) in enumerate(p.imap_unordered(tr,jobs,chunksize=20)):
      if a: res[s]={'ar':a,'src':'mt'}
      if i%1000==0: print(i,file=sys.stderr,flush=True)
  json.dump(res,open('ar_dict_raw.json','w'),ensure_ascii=False)
  print('done',len(res),file=sys.stderr)
