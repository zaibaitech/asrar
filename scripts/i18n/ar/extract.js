const ts=require('/workspace/asrar/node_modules/typescript');const fs=require('fs');const path=require('path');
const root='/workspace/asrar';const files=[];
function walk(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);const s=fs.statSync(p);
 if(s.isDirectory()){if(/node_modules|\.next|__tests__|api$|\/og$|i18n$/.test(p))continue;walk(p)}
 else if(/\.(tsx|ts)$/.test(f)&&!/\.test\.|\.d\.ts|opengraph|translations\.ts$|route\.ts$/.test(f))files.push(p)}}
walk(root+'/src');walk(root+'/app');files.push(root+'/asrar-everyday-app.tsx');
const out=new Map();
const skipAttr=new Set(['className','href','src','id','key','type','name','rel','target','role','htmlFor','style','d','viewBox','fill','stroke','strokeWidth','xmlns','method','action','as','strategy','dir','lang','inputMode','autoComplete','mode','variant','size','color','tabIndex','data-testid']);
function add(s,f){s=s.replace(/\s+/g,' ').trim();if(!s)return;
 if(!/[A-Za-z]{2}/.test(s))return; if(/[\u0600-\u06FF]/.test(s)&&!/[A-Za-z]{4}/.test(s))return;
 if(/^(https?:|\/|#|\.|@|mailto:)/.test(s))return;
 if(!/\s/.test(s)&&!/^[A-Z][a-zà-ÿ'’ʿāīūḥṣḍṭẓ]+[?!:.]?$/.test(s)&&!/^[A-Z]{2,}$/.test(s))return; // single tokens: only Capitalized words
 if(/^[a-z0-9-]+(\s[a-z0-9:\/\[\]._-]+)+$/.test(s)&&/\b(flex|px-|py-|text-|bg-|w-|h-|rounded|border|grid|gap-|mt-|mb-|items-|justify-)/.test(s))return;
 if(/[{}<>;=]|=>|\$\{/.test(s))return;
 out.set(s,(out.get(s)||new Set()).add(path.relative(root,f)));}
for(const f of files){const src=fs.readFileSync(f,'utf8');const sf=ts.createSourceFile(f,src,ts.ScriptTarget.Latest,true,f.endsWith('x')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
 function visit(n,ctx){
  if(ts.isImportDeclaration(n)||ts.isExportDeclaration(n))return;
  if(ts.isJsxAttribute(n)&&skipAttr.has(n.name.getText()))return;
  if(ts.isCallExpression(n)){const e=n.expression.getText();if(/^(console\.|require|import|localStorage|document\.|querySelector|addEventListener|fetch|cn|clsx|t\(|new Error)/.test(e)||/\.(get|set|remove)Item$|className|classList|includes|startsWith|endsWith|split|replace|match|test|getAttribute|setAttribute$/.test(e))return;}
  if(ts.isPropertyAssignment(n)&&/^(className|href|icon|id|slug|key|path|color|gradient|bg|border|text|emoji|route|url|type)$/.test(n.name.getText())&&!/Text|text$/.test('')){ if(/^(className|href|icon|id|slug|key|path|color|gradient|bg|border|emoji|route|url|type)$/.test(n.name.getText()))return;}
  if(ts.isBinaryExpression(n)&&/^(===|!==|==|!=)$/.test(n.operatorToken.getText()))return;
  if(ts.isCaseClause(n)){n.statements.forEach(s=>visit(s));return;}
  if(ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n))add(n.text,f);
  else if(ts.isJsxText(n))add(n.text,f);
  else if(ts.isTemplateExpression(n)){add(n.head.text,f);n.templateSpans.forEach(s=>add(s.literal.text,f));}
  ts.forEachChild(n,c=>visit(c));}
 visit(sf);}
// add translations.ts en strings too
const flat=JSON.parse(fs.readFileSync('flat.json','utf8')).wen;for(const v of Object.values(flat)) if(typeof v==='string') add(v,'translations');
const frFlat=new Set(Object.values(JSON.parse(fs.readFileSync('flat.json','utf8')).wfr));
const res=[...out].filter(([s])=>!frFlat.has(s)).map(([s,f])=>({s,f:[...f]}));
fs.writeFileSync('catalog.json',JSON.stringify(res));console.log(files.length,res.length, res.reduce((a,b)=>a+b.s.length,0));
