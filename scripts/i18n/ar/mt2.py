import json,re,sys,time
import ctranslate2, sentencepiece as spm
P='/home/box/.local/share/argos-translate/packages/en_ar/'
tr=ctranslate2.Translator(P+'model',device='cpu',inter_threads=4,intra_threads=2)
sp=spm.SentencePieceProcessor(model_file=P+'sentencepiece.model')
exec(open('mt.py').read().split("def init")[0])  # builds tm, res, jobs
# split into sentences, batch translate unique sentences
def parts(s):
  m=re.match(r'^([^A-Za-z0-9"“(\[]*)(.*?)([^A-Za-z0-9"”)\]?!.]*)$',s,re.S)
  return m.group(1),m.group(2),m.group(3)
sents=set();plan={}
for s in jobs:
  pre,core,suf=parts(s)
  ss=[x for x in re.split(r'(?<=[.!?])\s+',core) if x]
  plan[s]=(pre,ss,suf); sents.update(ss)
sents=sorted(sents,key=len); print('sentences',len(sents),file=sys.stderr)
out={};t0=time.time()
B=64
for i in range(0,len(sents),B):
  batch=sents[i:i+B]
  toks=[sp.encode(x,out_type=str) for x in batch]
  r=tr.translate_batch(toks,beam_size=2,max_decoding_length=512)
  for x,h in zip(batch,r): out[x]=sp.decode(h.hypotheses[0])
  if i%(B*20)==0: print(i,round(time.time()-t0),file=sys.stderr,flush=True)
for s,(pre,ss,suf) in plan.items():
  res[s]={'ar':pre+' '.join(out[x] for x in ss)+suf,'src':'mt'}
json.dump(res,open('ar_dict_raw.json','w'),ensure_ascii=False); print('done',len(res),file=sys.stderr)
