import{readFileSync as a,mkdirSync as b,readdirSync as c,writeFileSync as d}from"node:fs";
const{MAKEFUN_INPUT_DIR:f="/input",MAKEFUN_OUTPUT_DIR:g="/output"}=process.env;
function R(p,q){
let D=[],C=[],M=[],o=Buffer.alloc(65536),s=0,t=0,u=0,n=0,v=0,l=0,L=p.length,U=k=>{if(s<k)throw 2},O=()=>{if(s>255)throw 3},G=a=>{if(a>>>0>255)throw 6;return a};
try{for(;;){
if(n==1e6)throw 10;
if(u<0||u>=L)throw 9;
let h=p[u++];
n++;
if(h>15&&h<35&&h!=31){
if(h==23||h==27){U(1);D[s-1]=h-23?~D[s-1]:-D[s-1]|0}
else{U(2);let y=D[--s],x=D[s-1];
if(h>18&&h<23&&!y)throw 4;
D[s-1]=[x+y|0,x-y|0,Math.imul(x,y),x==1<<31&&y==-1?x:(x/y)|0,y==-1?0:(x%y)|0,(x>>>0)/(y>>>0)|0,(x>>>0)%(y>>>0)|0,,x&y,x|y,x^y,,x<<(y&31),x>>(y&31),(x>>>(y&31))|0,,x==y?1:0,x<y?1:0,(x>>>0)<(y>>>0)?1:0][h-16]}
continue}
switch(h){
case 0:throw 0;
case 1:if(u>=L)throw 9;O();D[s++]=p.readInt8(u++);break;
case 2:if(u+4>L)throw 9;O();D[s++]=p.readInt32LE(u);u+=4;break;
case 3:U(1);s--;break;
case 4:U(1);O();D[s]=D[s-1];s++;break;
case 5:U(2);[D[s-1],D[s-2]]=[D[s-2],D[s-1]];break;
case 6:U(2);O();D[s]=D[s-2];s++;break;
case 7:U(3);[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];break;
case 48:case 49:case 50:{if(u+2>L)throw 9;let j=p.readInt16LE(u);u+=2;if(h!=48)U(1);if(h==48||(h<50)==(D[--s]==0))u+=j;break}
case 51:if(u+2>L)throw 9;if(t==64)throw 7;C[t++]=u+2;u=p[u]|p[u+1]<<8;break;
case 52:if(t==0)throw 8;u=C[--t];break;
case 64:U(1);D[s-1]=M[G(D[s-1])]|0;break;
case 65:U(2);M[G(D[s-1])]=D[s-2];s-=2;break;
case 80:U(1);let y2=""+D[s-1];if(l+y2.length>65536)throw 11;s--;l+=o.write(y2,l);break;
case 81:U(1);if(l>65535)throw 11;o[l++]=D[--s]&255;break;
case 82:O();D[s++]=q[v++]??-1;break;
case 83:U(1);throw D[--s]&255;
default:throw 5}
}}catch(x){return[x,o.slice(0,l)]}}
for(const i of c(f)){let[k,o]=R(a(f+"/"+i+"/program.bin"),a(f+"/"+i+"/input.bin"));b(g+"/"+i,{recursive:true});d(g+"/"+i+"/stdout.bin",o);d(g+"/"+i+"/exit.txt",k+"\n")}
