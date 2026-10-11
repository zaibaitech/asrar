const { chromium } = require('playwright-core');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const pages=[['/ar','home'],['/ar/abjad','abjad'],['/ar/planetary-hours','planetary-hours'],['/ar/best-day-for','best-day-for'],['/ar/ikhtiyarat','ikhtiyarat'],['/ar/compatibility','compatibility'],['/ar/name-and-mother-burj','burj'],['/ar/manazil','manazil'],['/ar/sadaqa-of-the-day','sadaqa-of-the-day'],['/ar/planet-of-the-day','planet-of-the-day']];
let T={ar:0,lat:0},rows=[];
for(const [path,n] of pages){const ctx=await b.newContext({viewport:{width:390,height:844},timezoneId:'Europe/London'});await ctx.addInitScript(()=>localStorage.setItem('hasSeenOnboarding','true'));
const p=await ctx.newPage();await p.goto('http://localhost:3002'+path,{waitUntil:'networkidle',timeout:45000}).catch(()=>{});await p.waitForTimeout(3500);
const r=await p.evaluate(()=>{const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let ar=0,lat=0,L=[];let x;while(x=w.nextNode()){const e=x.parentElement;if(!e||e.closest('script,style,noscript,[aria-hidden=true],code,pre'))continue;const s=x.textContent.trim();if(!s)continue;const st=getComputedStyle(e);if(st.display=='none'||st.visibility=='hidden')continue;if(/[\u0600-\u06FF]/.test(s))ar++;else if(/[A-Za-z]{3,}/.test(s)){lat++;L.push(s.replace(/\s+/g," "))}}return {ar,lat,L}});
T.ar+=r.ar;T.lat+=r.lat;rows.push([n,r.ar,r.lat,r.L]);
await p.screenshot({path:'shots3/ar-'+n+'-390.png'});await ctx.close();}
console.log(JSON.stringify({T,rows},null,1));await b.close()})();
