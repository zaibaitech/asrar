import json,re,sys
import ctranslate2, sentencepiece as spm
P='/home/box/.local/share/argos-translate/packages/ar_en/'
tr=ctranslate2.Translator(P+'model',device='cpu',inter_threads=4,intra_threads=2)
sp=spm.SentencePieceProcessor(model_file=P+'sentencepiece.model')
r=json.load(open('ar_dict_raw.json'))
mt=[k for k,v in r.items() if v['src']=='mt']
src=sorted(set(r[k]['ar'] for k in mt),key=len); back={}
for i in range(0,len(src),64):
  b=src[i:i+64]; res=tr.translate_batch([sp.encode(x,out_type=str) for x in b],beam_size=2,max_decoding_length=512)
  for x,h in zip(b,res): back[x]=sp.decode(h.hypotheses[0])
def toks(s): return set(w for w in re.findall(r"[a-z]+",s.lower()) if w not in {'the','a','an','of','to','and','in','is','for','with','your','you','on','be','it','that','this','are','or','as','by','at','from'})
def stem(w): return re.sub(r'(ing|ed|es|s|ly)$','',w)
for k in mt:
  a=r[k]['ar']; b=back[a]; A={stem(w) for w in toks(k)}; B={stem(w) for w in toks(b)}
  score = (len(A&B)/len(A)) if A else 1.0
  r[k]['back']=b; r[k]['score']=round(score,2)
json.dump(r,open('ar_dict_scored.json','w'),ensure_ascii=False)
import collections
print(collections.Counter(round(r[k]['score'],1) for k in mt).most_common())
