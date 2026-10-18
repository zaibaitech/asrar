# Letter-for-letter check of Arabic Qur'an quotations against Tanzil quran-simple.
# Data: curl -o quran-simple.json https://api.alquran.cloud/v1/quran/quran-simple  (run in the cwd)
# Usage: python3 quran_verify.py items.json out.json   (items: {label: arabic text})
import json,re,sys
DIAC=set(chr(c) for c in list(range(0x064B,0x0660))+[0x0670]+list(range(0x06D6,0x06EE)))
MARKS=re.compile(r'\s*[\u06D6-\u06DC\u06DE]\s*')
def base(ch):
    if ch in 'ٱأإآ': return 'ا'
    return {'ى':'ي','ؤ':'و','ئ':'ي','ء':'','ـ':'','ٰ':''}.get(ch,ch)
def clusters(s):
    s=MARKS.sub(' ',s)
    out=[]
    for ch in s:
        if ch.isspace():
            if out and out[-1][0]!=' ': out.append([' ',''])
            continue
        if ch in DIAC:
            if out and out[-1][0]!=' ': out[-1][1]+=ch
            continue
        b=base(ch)
        if b=='':
            if out and out[-1][0]!=' ': out[-1][1]+=ch   # hamza forms / dagger alif kept as marks
            continue
        out.append([b,''])
    while out and out[-1][0]==' ': out.pop()
    while out and out[0][0]==' ': out.pop(0)
    return [(b,''.join(sorted(d))) for b,d in out]
def load(ed):
    d=json.load(open(ed+'.json'))['data']['surahs']; out=[]
    for su in d:
        for a in su['ayahs']:
            t=a['text']
            if su['number'] not in (1,9) and a['numberInSurah']==1: t=re.sub(r'^بِسْمِ\s+\S+\s+\S+\s+\S+\s*','',t)
            C=clusters(t); out.append((su['number'],a['numberInSurah'],C,''.join(b for b,_ in C)))
    return out
V=load('quran-simple')
SUK='\u0652'; SHD='\u0651'
def eq(a,b):
    if a==b: return 0
    a2=a.replace(SUK,''); b2=b.replace(SUK,'')
    if a2==b2: return 1          # sukūn convention
    if a2.replace(SHD,'')==b2.replace(SHD,''): return 1   # idghām shadda convention
    return 2
def clean(text):
    t=re.sub(r'[﴿﴾]','',text); t=re.sub(r'\s*\([^()]*\d+\)\s*',' ',t); t=re.split(r'\s+[-–—]\s+',t)[0]
    return t.strip().rstrip('.،:')
def verify(text):
    t=clean(text); C=clusters(t); sk=''.join(b for b,_ in C)
    best=None
    for s,a,VC,vs in V:
        p=vs.find(sk)
        while p>=0:
            seg=VC[p:p+len(C)]
            sc=[eq(x[1],y[1]) for x,y in zip(C,seg)]
            bad=[(C[i][0],C[i][1],seg[i][1]) for i,v in enumerate(sc) if v==2]
            conv=sum(1 for v in sc if v==1)
            cand=(len(bad),conv,f'{s}:{a}',bad)
            if best is None or cand[:2]<best[:2]: best=cand
            p=vs.find(sk,p+1)
    if best is None: return {'status':'NOT FOUND','ref':None,'bad':[]}
    st='EXACT' if best[0]==0 and best[1]==0 else ('EXACT (imlāʾī sukūn/shadda conventions)' if best[0]==0 else 'DIACRITICS DIFFER')
    return {'status':st,'ref':best[2],'bad':best[3]}
if __name__=='__main__':
    items=json.load(open(sys.argv[1])); out={}
    from collections import Counter
    for k,v in items.items():
        r=verify(v); r['text']=v; out[k]=r
        if r['status'] not in ('EXACT','EXACT (imlāʾī sukūn/shadda conventions)'): print(r['status'],r['ref'],repr(k[:50]),v[:70],r['bad'][:5])
    print(Counter(x['status'] for x in out.values()))
    json.dump(out,open(sys.argv[2],'w'),ensure_ascii=False,indent=1)
