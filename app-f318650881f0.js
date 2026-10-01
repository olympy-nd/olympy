window.RIHLA_BUILD="cb2c150c4c01";"use strict";(()=>{var qe=(e,i)=>()=>(i||e((i={exports:{}}).exports,i),i.exports);var Be=qe((Ji,je)=>{"use strict";var me=class extends Error{constructor(i,a){super(a),this.code=i}};function J(e,i){throw new me(e,i)}function g(e,i="\u0627\u0644\u0642\u064A\u0645\u0629",a=0,n=1e9){let t=Number(e??0);return(!Number.isFinite(t)||t<a||t>n)&&J("VALIDATION",`${i}: \u0623\u062F\u062E\u0644 \u0631\u0642\u0645\u0627\u064B \u0628\u064A\u0646 ${a} \u0648${n}`),t}function Z(e,i,a=0,n=1e3){let t=g(e,i,a,n);return Number.isInteger(t)||J("VALIDATION",`${i}: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u062F\u062F\u0627\u064B \u0635\u062D\u064A\u062D\u0627\u064B`),t}function He(e,i="\u0627\u0644\u0627\u0633\u0645",a=300,n=!1){let t=String(e??"").trim();return(t.length>a||n&&!t)&&J("VALIDATION",`${i}: \u0627\u0644\u0642\u064A\u0645\u0629 \u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u0628\u062D\u062F \u0623\u0642\u0635\u0649 ${a} \u062D\u0631\u0641`),t}function H(e){return(!Number.isFinite(e)||Math.abs(e)>1e12)&&J("VALIDATION","\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062D\u0633\u0648\u0628 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0645\u0633\u0645\u0648\u062D"),Math.round((e+Number.EPSILON)*1e3)/1e3}function ge(e,i){return i>0?Math.ceil(e/i)*i:e}var Je=["LYD","USD","SAR"];function O(e="LYD"){return Je.includes(e)||J("VALIDATION","\u0627\u0644\u0639\u0645\u0644\u0629 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645\u0629"),e}function Ne(e,i,a,n){if(O(i),O(a),i===a)return e;let t=g(n.usdToLyd,"\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631",1e-4),r=i==="SAR"||a==="SAR"?g(n.sarPerUsd,"\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0628\u0627\u0644\u0631\u064A\u0627\u0644",1e-4):1,o={LYD:1,USD:t,SAR:t/r};return e*o[i]/o[a]}function ni(e){let i={};for(let a of e){let n=O(a.currency||"LYD");i[n]||(i[n]={currency:n,total:0,cost:0,profit:0}),i[n].total+=a.total,i[n].cost+=a.cost}return Object.values(i).map(a=>({...a,total:H(a.total),cost:H(a.cost),profit:H(a.total-a.cost)}))}function ri(e,i,a){if(i==="LYD")return e;if(i==="USD")return e*g(a.usdToLyd,"\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631",1e-4);if(i==="SAR")return e/g(a.sarPerUsd,"\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0628\u0627\u0644\u0631\u064A\u0627\u0644",1e-4)*g(a.usdToLyd,"\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631",1e-4);J("VALIDATION","\u0639\u0645\u0644\u0629 \u063A\u064A\u0631 \u0645\u0639\u062A\u0645\u062F\u0629")}function si(e,i,a=[]){let n={};for(let p of["makkahRate","madinahRate","extraBed","visaUsd","ticketLyd","transportLyd","otherLyd","profitValue","rounding"])n[p]=g(e[p],p);n.makkahNights=Z(e.makkahNights,"\u0644\u064A\u0627\u0644\u064A \u0645\u0643\u0629",0,365),n.madinahNights=Z(e.madinahNights,"\u0644\u064A\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u064A\u0646\u0629",0,365),n.includeMadinah=e.includeMadinah===!0,n.sarPerUsd=g(e.sarPerUsd??3.72,"\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0628\u0627\u0644\u0631\u064A\u0627\u0644",1e-4),n.usdToLyd=g(e.usdToLyd??9.5,"\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631",1e-4),n.profitType=e.profitType==="fixed"?"fixed":"percent",n.serviceIds=[...new Set(e.serviceIds||[])];let t=n.serviceIds.reduce((p,h)=>{let k=a.find(E=>E.id===h&&E.active!==!1);return k||J("VALIDATION","\u0625\u062D\u062F\u0649 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629"),p+ri(g(k.cost),k.currency||"LYD",n)},0);i.length||J("VALIDATION","\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u063A\u0631\u0641\u0629 \u0648\u0627\u062D\u062F\u0627\u064B \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644");let r=n.makkahNights+(n.includeMadinah?n.madinahNights:0),o=n.makkahRate*n.makkahNights+(n.includeMadinah?n.madinahRate*n.madinahNights:0),u=e.roomOverrides||{},S=i.map(p=>{let h=Z(p.occupancy,"\u0639\u062F\u062F \u0627\u0644\u0623\u0634\u062E\u0627\u0635",1,20),k=u[p.id]||{},E=k.makkahRate===""||k.makkahRate==null?n.makkahRate:g(k.makkahRate),de=k.madinahRate===""||k.madinahRate==null?n.madinahRate:g(k.madinahRate),W=p.extraBeds==null?0:Z(p.extraBeds,"\u0627\u0644\u0623\u0633\u0631\u0651\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u064A\u0629",0,20),B=n.extraBed*W*r,I=E*n.makkahNights+(n.includeMadinah?de*n.madinahNights:0)+B,_=I/h,ee=_/n.sarPerUsd,Ae=ee*n.usdToLyd,xe=n.visaUsd*n.usdToLyd,T=Ae+xe+n.ticketLyd+n.transportLyd+n.otherLyd+t,Me=n.profitType==="fixed"?n.profitValue:T*n.profitValue/100,Re=ge(T+Me,n.rounding),le=k.sell===""||k.sell==null?Re:g(k.sell,"\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639");return{key:p.id,label:p.name,unit:"person",currency:"LYD",count:h,extraSAR:B,totalRoomSAR:I,perPersonSAR:_,accommodationUSD:ee,accommodationLYD:Ae,visaLYD:xe,serviceCostLYD:t,baseCost:T,plannedProfit:Me,calculatedSell:Re,sell:le,basePrice:H(le),profit:le-T,margin:T>0?(le-T)/T*100:0}});return{totalNights:r,baseRoomSAR:o,serviceCostLYD:t,results:S}}function oi(e,i){(!i||i.active===!1)&&J("VALIDATION","\u0627\u062E\u062A\u0631 \u062E\u062F\u0645\u0629 \u0641\u0639\u0627\u0644\u0629");let a=e.cost===""||e.cost==null?g(i.cost):g(e.cost),n=O(e.saleCurrency||i.saleCurrency||"LYD"),t=Ne(a,i.currency||"LYD",n,e),r=g(e.profitValue),o=e.profitType==="fixed"?r:t*r/100,u=ge(t+o,g(e.rounding)),S=e.sell===""||e.sell==null?u:g(e.sell);return{results:[{key:i.id,label:i.name,unit:i.unit||"item",currency:n,baseCost:t,calculatedSell:u,plannedProfit:o,sell:S,basePrice:H(S),profit:S-t,margin:t>0?(S-t)/t*100:0}]}}function ci(e,i){let a=Z(i.quantity,"\u0627\u0644\u0639\u062F\u062F",1,1e4),n=e.unit==="roomNight"?Z(i.nights,"\u0627\u0644\u0644\u064A\u0627\u0644\u064A",1,365):1,t=a*n,r=O(e.currency||"LYD"),o=(i.extras||[]).map(B=>{let I=O(B.currency||r),_=g(B.amount,"\u0627\u0644\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u064A\u0629"),ee=I===r?1:g(B.rate,"\u0633\u0639\u0631 \u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u062A\u0643\u0644\u0641\u0629 \u0625\u0644\u0649 \u0639\u0645\u0644\u0629 \u0627\u0644\u0628\u0646\u062F",1e-6,1e6);return{label:He(B.label,"\u0648\u0635\u0641 \u0627\u0644\u062A\u0643\u0644\u0641\u0629",200,!0),amount:_,currency:I,rate:ee,convertedAmount:H(_*ee)}});o.length>20&&J("VALIDATION","\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 20 \u062A\u0643\u0644\u0641\u0629 \u0625\u0636\u0627\u0641\u064A\u0629 \u0644\u0643\u0644 \u0628\u0646\u062F");let u=H(o.reduce((B,I)=>B+I.convertedAmount,0)),S=H(e.netPrice*t),p=H(S+u),h=g(i.marginValue,"\u0647\u0627\u0645\u0634 \u0627\u0644\u0631\u0628\u062D"),k=i.marginType==="fixed"?"fixed":"percent",E=k==="fixed"?h*t:p*h/100,de=i.mode==="manual"?"manual":"margin",W=H(de==="manual"?g(i.sellUnit,"\u0633\u0639\u0631 \u0628\u064A\u0639 \u0627\u0644\u0648\u062D\u062F\u0629")*t:p+E);return{...e,currency:r,quantity:a,nights:n,units:t,extras:o,extraTotal:u,purchase:S,cost:p,mode:de,marginType:k,marginValue:h,sellUnit:W/t,total:W,profit:H(W-p),belowCost:W<p}}je.exports={AppError:me,fail:J,number:g,integer:Z,text:He,money:H,roundUp:ge,currency:O,CURRENCIES:Je,convertCurrency:Ne,totalsByCurrency:ni,calculateProgram:si,calculateService:oi,quoteLine:ci}});var Xe=qe((Ni,Ve)=>{"use strict";function di(e){if(e.kind==="quote"){let a=e.totals||[{currency:e.currency||"LYD",total:e.total}];return{headers:["\u0627\u0644\u0634\u0631\u0643\u0629","\u0627\u0644\u0639\u0645\u064A\u0644","\u0627\u0644\u0639\u0631\u0636","\u0627\u0644\u0628\u0646\u062F","\u0627\u0644\u0639\u0645\u0644\u0629","\u0627\u0644\u0639\u062F\u062F","\u0627\u0644\u0644\u064A\u0627\u0644\u064A","\u0645\u062A\u0648\u0633\u0637 \u0628\u064A\u0639 \u0627\u0644\u0648\u062D\u062F\u0629","\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0628\u0646\u062F"],rows:e.lines.map(n=>[e.company,e.customer,n.offerName,n.label,n.currency||"LYD",n.quantity,n.nights,n.sellUnit,n.total]).concat(a.map(n=>[e.company,e.customer,"\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A","",n.currency,"","","",n.total]))}}let i={person:"\u0644\u0644\u0634\u062E\u0635",roomNight:"\u0644\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u0644\u064A\u0644\u0629",item:"\u0644\u0644\u062E\u062F\u0645\u0629 \u0643\u0627\u0645\u0644\u0629"};return{headers:["\u0627\u0644\u0639\u0631\u0636","\u0627\u0644\u062C\u0647\u0629","\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u062E\u062F\u0645\u0629","\u0627\u0644\u0648\u062D\u062F\u0629","\u0627\u0644\u0639\u0645\u0644\u0629","\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064A","\u0627\u0644\u0639\u0645\u0648\u0644\u0629","\u0627\u0644\u0635\u0627\u0641\u064A","\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629","\u0627\u0644\u0634\u0631\u0648\u0637"],rows:e.lines.map(a=>[e.name,e.company||"",a.label,i[a.unit]||a.unit,a.currency||"LYD",a.basePrice,a.commission??"",a.netPrice??a.basePrice,e.validUntil,e.description])}}Ve.exports={exportSheet:di}});var{quoteLine:li,totalsByCurrency:mi}=Be(),ie;function F(){return ie?Promise.resolve(ie):(F.pending||(F.pending=new Promise((e,i)=>{let a=document.createElement("script");a.src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js",a.onload=()=>{ie=window.ExcelJS,ie?e(ie):i(Error("\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0645\u0643\u062A\u0628\u0629 Excel"))},a.onerror=()=>i(Error("\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0645\u0643\u062A\u0628\u0629 Excel. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A.")),document.head.appendChild(a)})),F.pending)}var{exportSheet:ui}=Xe(),d=e=>document.querySelector(e),x=e=>[...document.querySelectorAll(e)],c=e=>String(e??"").replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i]),ne=e=>new Intl.NumberFormat("en-US",{maximumFractionDigits:3}).format(Number(e)||0),re=[["LYD","\u062F\u064A\u0646\u0627\u0631 \u0644\u064A\u0628\u064A (LYD)"],["USD","\u062F\u0648\u0644\u0627\u0631 (USD)"],["SAR","\u0631\u064A\u0627\u0644 \u0633\u0639\u0648\u062F\u064A (SAR)"]],$=e=>({LYD:"\u062F.\u0644",USD:"USD",SAR:"SAR"})[e]||e||"\u062F.\u0644",f=(e,i="LYD")=>'<span class="num">'+ne(e)+"</span> <small>"+c($(i))+"</small>",pi=e=>e.totals||[{currency:e.currency||"LYD",total:e.total,cost:e.cost,profit:e.profit}],se=(e,i="total")=>pi(e).map(a=>"<div>"+f(a[i],a.currency)+"</div>").join(""),G=e=>({person:"\u0644\u0644\u0634\u062E\u0635",roomNight:"\u0644\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u0644\u064A\u0644\u0629",item:"\u0644\u0644\u062E\u062F\u0645\u0629 \u0643\u0627\u0645\u0644\u0629"})[e]||e,We={viewCost:"\u0631\u0624\u064A\u0629 \u0627\u0644\u062A\u0643\u0644\u0641\u0629 \u0648\u0627\u0644\u0631\u0628\u062D",editDefinitions:"\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629",editPricing:"\u0625\u0639\u062F\u0627\u062F \u0648\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0633\u0639\u064A\u0631",approve:"\u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0639\u0631\u0648\u0636",publish:"\u0627\u0644\u0646\u0634\u0631 \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A \u0648\u0627\u0644\u0623\u0631\u0634\u0641\u0629",manageCompanies:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062A",manageUsers:"\u0625\u062F\u0627\u0631\u0629 \u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0627\u062A",export:"\u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0648\u0627\u0644\u062A\u0635\u062F\u064A\u0631"},s={token:sessionStorage.getItem("rihla_session")||"",boot:null,tab:"offers",filter:"",kind:"all",editor:null,pending:null},ue=new Map;function fi(){return[...crypto.getRandomValues(new Uint8Array(24))].map(e=>e.toString(16).padStart(2,"0")).join("")}var b=()=>s.boot?.user.role==="company",L=e=>s.boot?.user.role==="admin"||s.boot?.user.permissions?.includes(e),l=(e,i,a="",n="")=>`<button type="button" class="btn ${n}" data-action="${i}" data-id="${c(a)}">${e}</button>`,w=(e,i,a="",n="text",t="")=>`<label>${e}<input name="${i}" type="${n}" value="${c(a)}" ${t}></label>`,m=(e,i,a=0,n="")=>w(e,i,a,"number",(n.includes("min=")?"":'min="0" ')+(n.includes("step=")?"":'step="0.001" ')+n),y=(e,i,a,n)=>`<label>${e}<select name="${i}">${a.map(([t,r])=>`<option value="${c(t)}" ${String(n)===String(t)?"selected":""}>${c(r)}</option>`).join("")}</select></label>`,he=(e,i,a="")=>`<label class="full">${e}<textarea name="${i}" maxlength="6000">${c(a)}</textarea></label>`,A=(e,i,a,n="on")=>`<label class="check"><input type="checkbox" name="${i}" value="${c(n)}" ${a?"checked":""}>${c(e)}</label>`,P=(e,i="")=>`<span class="badge ${i}">${c(e)}</span>`;function M(e,i){return e=e.map(a=>a==="\u0628\u064A\u0639 \u0627\u0644\u0648\u062D\u062F\u0629"?"\u0645\u062A\u0648\u0633\u0637 \u0628\u064A\u0639 \u0627\u0644\u0648\u062D\u062F\u0629":a),`<div class="table-wrap"><table><thead><tr>${e.map(a=>`<th>${a}</th>`).join("")}</tr></thead><tbody>${i.map(a=>{let n=0;return a.replace(/<td>/g,()=>'<td data-label="'+c(e[n++])+'">')}).join("")}</tbody></table></div>`}var R=e=>"<tr>"+e.map(i=>"<td>"+i+"</td>").join("")+"</tr>",V=e=>'<div class="actions">'+e+"</div>";function q(e){d("#toast").textContent=e,d("#toast").style.display="block",clearTimeout(q.timer),q.timer=setTimeout(()=>d("#toast").style.display="none",6e3)}function fe(e){s.token=e,e?sessionStorage.setItem("rihla_session",e):sessionStorage.removeItem("rihla_session")}async function v(e,i={},a){let n=JSON.stringify([s.token,e,i]),t=/\.(save|commit|import|approve|archive|password)$/.test(e),r=a||t&&ue.get(n)||fi();t&&ue.set(n,r);let o={action:e,payload:i,token:s.token,requestId:r},u,S=()=>{if(window.google?.script?.run)return new Promise((p,h)=>google.script.run.withSuccessHandler(p).withFailureHandler(h).api(o));if(window.RIHLA_API_URL){let p=JSON.stringify(o);return p.length>6e3?Promise.reject(Error("\u0647\u0630\u0627 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u062D\u062F \u0627\u0644\u0645\u0633\u0645\u0648\u062D \u0639\u0628\u0631 \u0647\u0630\u0647 \u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0645\u0633\u062A\u0636\u0627\u0641\u0629 \u062E\u0627\u0631\u062C\u064A\u0627\u064B. \u0627\u0633\u062A\u062E\u062F\u0645 \u0631\u0627\u0628\u0637 Apps Script \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0644\u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u062A\u062D\u062F\u064A\u062F\u0627\u064B.")):fetch(window.RIHLA_API_URL+"?request="+encodeURIComponent(p)+"&_="+Date.now(),{cache:"no-store"}).then(h=>{if(!h.ok)throw Error("\u062A\u0639\u0630\u0631 \u0627\u0644\u0627\u062A\u0635\u0627\u0644");return h.json()})}return fetch("/api",{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(o)}).then(p=>{if(!p.ok)throw Error("\u062A\u0639\u0630\u0631 \u0627\u0644\u0627\u062A\u0635\u0627\u0644");return p.json()})};try{u=await S()}catch{try{u=await S()}catch{throw Error("\u062A\u0639\u0630\u0631 \u0627\u0644\u0627\u062A\u0635\u0627\u0644. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0648\u062D\u0627\u0648\u0644 \u0645\u0646 \u062C\u062F\u064A\u062F.")}}if(!u.ok)throw u.error.code!=="SERVER"&&ue.delete(n),u.error.code==="AUTH"&&e!=="login"&&(fe(""),oe(),d("#print-root").innerHTML="",ce()),Error(u.error.message);return ue.delete(n),u.data}async function z(){if(s.boot=await v("bootstrap"),s.boot.mustChange){vi();return}Qe()}function D(e,i,a=null){d("#dialog").classList.toggle("share-editor-dialog",i.includes('class="share-card share-'));d("#dialog").scrollTop=0;s.editor=a,s.pending=null,d("#dialog").innerHTML=`<div class="dialog-head"><h2 id="dialog-title">${c(e)}</h2>${l("\u0625\u063A\u0644\u0627\u0642","dialog.close")}</div><div class="dialog-body">${i}<div id="dialog-error" class="form-error" role="alert"></div></div>`,d("#dialog").open||d("#dialog").showModal()}function oe(){d("#dialog").close(),s.editor=null,s.pending=null}function j(e="\u062D\u0641\u0638"){return`<div class="form-actions">${l("\u0625\u0644\u063A\u0627\u0621","dialog.close")}<button class="btn primary" type="submit">${e}</button></div>`}function ce(){s.boot=null,d("#app").innerHTML=`<div class="login-page"><aside class="login-aside"><div class="brand"><span class="brand-mark brand-mark-logo"><img src="${Ke}" alt="\u0623\u0631\u0643\u0627\u0646 \u0645\u0643\u0629 \u0644\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u064A\u0629"></span></div><div><h1>\u0643\u0644 \u0631\u062D\u0644\u0629 \u062A\u0628\u062F\u0623<br>\u0628\u0633\u0639\u0631 \u0648\u0627\u0636\u062D.</h1><p>\u0639\u0631\u0648\u0636 \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A\u060C \u0648\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u063A\u0631\u0641 \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629 \u0644\u0634\u0631\u0643\u062A\u0643\u060C \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F.</p></div><div class="login-foot">\u0645\u0633\u0627\u062D\u0629 \u0639\u0645\u0644 \u062E\u0627\u0635\u0629 \u0644\u0643\u0644 \u0634\u0631\u0643\u0629</div></aside><main class="login-main"><form id="login" class="login-form"><h2>\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</h2><p>\u0627\u0633\u062A\u062E\u062F\u0645 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u062A\u064A \u0645\u0646\u062D\u0643 \u0625\u064A\u0627\u0647\u0627 \u0627\u0644\u0645\u0633\u0624\u0648\u0644.</p>${w("\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645","username","","text",'required autocomplete="username" dir="ltr"')}${w("\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631","password","","password",'required autocomplete="current-password"')}<button class="btn primary" type="submit">\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0646\u0638\u0648\u0645\u0629</button><div id="login-error" class="form-error" role="alert"></div><p style="margin-top:24px;font-size:.875rem">\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F \u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0644\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646\u0647\u0627.</p></form></main></div>`}function Fe(){return w("\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629","oldPassword","","password",'required autocomplete="current-password"')+w("\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629","password","","password",'required autocomplete="new-password"')+w("\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629","confirmPassword","","password",'required autocomplete="new-password"')}function vi(){d("#app").innerHTML=`<main class="login-main" style="min-height:100vh"><form id="password" class="login-form"><h2>\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0623\u0648\u0644\u064A\u0629</h2><p>\u0627\u062E\u062A\u0631 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062C\u062F\u064A\u062F\u0629. \u0633\u062A\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0639\u062F\u0647\u0627 \u0628\u0643\u0644\u0645\u062A\u0643 \u0627\u0644\u062C\u062F\u064A\u062F\u0629.</p>${Fe()}<button type="submit" class="btn primary">\u062D\u0641\u0638 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</button>${l("\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C","logout")}<div id="login-error" class="form-error" role="alert"></div></form></main>`}var Ke="assets/resource-bf20275de4d4.png";function hi(e){let i={offers:"M4 4h16v16H4z M8 8h8M8 12h8M8 16h4",pricing:"M4 3h16v18H4z M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2",companyPricing:"M4 3h16v18H4z M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2",definitions:"M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",companies:"M4 21V7l8-4 8 4v14M9 21v-6h6v6M8 8h1M15 8h1M8 11h1M15 11h1",users:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-4M16 3a4 4 0 0 1 0 8",settings:"M4 7h16M4 17h16M8 4v6M16 14v6",quotes:"M6 3h12v18H6zM9 7h6M9 11h6M9 15h4"};return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${i[e]||i.offers}"></path></svg>`}function Qe(){let e=s.boot,i=e.user,a=[["offers",b()?"\u0639\u0631\u0648\u0636 \u0648\u062E\u062F\u0645\u0627\u062A \u0634\u0631\u0643\u062A\u064A":"\u0627\u0644\u0639\u0631\u0648\u0636 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A"]];b()&&a.push(["quotes","\u062A\u0633\u0639\u064A\u0631\u0627\u062A \u0634\u0631\u0643\u062A\u064A"]),b()?a.push(["companyPricing","\u0623\u062F\u0627\u0629 \u0627\u0644\u062A\u0633\u0639\u064A\u0631 \u0627\u0644\u062E\u0627\u0635\u0629"]):(L("viewCost")&&a.push(["pricing","\u0623\u062F\u0627\u0629 \u0627\u0644\u062A\u0633\u0639\u064A\u0631 \u0648\u0627\u0644\u0642\u0648\u0627\u0644\u0628"]),L("viewCost")&&a.push(["definitions","\u0627\u0644\u062A\u0639\u0631\u064A\u0641\u0627\u062A"]),L("manageCompanies")&&a.push(["companies","\u0627\u0644\u0634\u0631\u0643\u0627\u062A"]),L("manageUsers")&&a.push(["users","\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A"]),i.role==="admin"&&a.push(["settings","\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u0646\u0633\u062E"])),a.some(n=>n[0]===s.tab)||(s.tab="offers"),d("#app").innerHTML=`<div class="shell"><aside class="sidebar"><div class="brand"><span class="brand-mark brand-mark-logo"><img src="${Ke}" alt="\u0623\u0631\u0643\u0627\u0646 \u0645\u0643\u0629 \u0644\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u064A\u0629"></span></div><nav class="nav" aria-label="\u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629">${a.map(([n,t])=>`<button type="button" data-action="navigate" data-id="${n}" class="${s.tab===n?"active":""}" ${s.tab===n?'aria-current="page"':""}>${hi(n)}${t}</button>`).join("")}</nav><div class="sidebar-bottom"><strong>${c(b()?e.company.name:i.role==="admin"?"\u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0631\u0626\u064A\u0633\u064A":"\u062D\u0633\u0627\u0628 \u0645\u0648\u0638\u0641")}</strong><p><small>${b()?"\u0639\u0631\u0648\u0636\u0643 \u0648\u062A\u0633\u0639\u064A\u0631\u0627\u062A\u0643 \u0627\u0644\u062E\u0627\u0635\u0629":"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A"}</small></p>${l("\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631","account.open","","ghost")}${l("\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C","logout","","ghost")}</div></aside><div class="workspace"><header class="topbar"><div class="inline">${l("\u2630","menu","","mobile-menu")}<span class="organization">${c(e.settings.name||"\u0631\u062D\u0644\u0629")}</span></div><div class="user-chip"><span class="avatar">${c(i.name.slice(0,1))}</span>${c(i.name)}${l("\u062A\u062D\u062F\u064A\u062B","refresh","","small")}</div></header><main class="main" id="content"></main></div></div>`,gi()}function Y(e,i,a=""){return`<div class="page-head"><div><div class="eyebrow">${b()?"\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0634\u0631\u0643\u0629":"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u0633\u0639\u064A\u0631"}</div><h1>${e}</h1><p>${i}</p></div><div class="inline">${a}</div></div>`}function ye(e){return'<div class="stats">'+e.map(([i,a])=>`<div class="stat"><span>${i}</span><strong class="num">${ne(a)}</strong></div>`).join("")+"</div>"}function U(e=!1){return`<div class="toolbar"><input type="search" id="search" aria-label="\u0627\u0644\u0628\u062D\u062B" placeholder="\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645\u2026" value="${c(s.filter)}">${e?`<select id="kind-filter" aria-label="\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0646\u0648\u0639"><option value="all">\u0643\u0644 \u0627\u0644\u0623\u0646\u0648\u0627\u0639</option><option value="program" ${s.kind==="program"?"selected":""}>\u0627\u0644\u0628\u0631\u0627\u0645\u062C</option><option value="service" ${s.kind==="service"?"selected":""}>\u0627\u0644\u062E\u062F\u0645\u0627\u062A</option></select>`:""}<small id="result-count"></small></div><div id="list-results"></div>`}function gi(){let e=s.boot;if(s.tab==="offers"){let i=b()?e.assignments:e.offers;d("#content").innerHTML=Y(b()?"\u0639\u0631\u0648\u0636 \u0634\u0631\u0643\u062A\u0643":"\u0627\u0644\u0639\u0631\u0648\u0636 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A",b()?"\u0623\u0633\u0639\u0627\u0631\u0643 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629 \u0648\u0639\u0645\u0648\u0644\u0627\u062A\u0643\u060C \u062C\u0627\u0647\u0632\u0629 \u0644\u0628\u0646\u0627\u0621 \u062A\u0633\u0639\u064A\u0631\u0629 \u0639\u0645\u064A\u0644\u0643.":"\u0627\u0639\u062A\u0645\u062F \u0623\u0633\u0639\u0627\u0631\u0643 \u0648\u062D\u062F\u062F \u0627\u0644\u0639\u0631\u0636 \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0644\u0643\u0644 \u0634\u0631\u0643\u0629.",!b()&&L("editPricing")?l("\uFF0B \u0625\u0646\u0634\u0627\u0621 \u0639\u0631\u0636","offer.new","","primary"):"")+ye([["\u0627\u0644\u0639\u0631\u0648\u0636 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A",i.length],["\u0627\u0644\u0628\u0631\u0627\u0645\u062C",i.filter(a=>a.kind==="program").length],["\u0627\u0644\u062E\u062F\u0645\u0627\u062A",i.filter(a=>a.kind==="service").length]])+'<div class="panel">'+U(!0)+"</div>"}else if(s.tab==="pricing")d("#content").innerHTML=Y("\u0623\u062F\u0627\u0629 \u0627\u0644\u062A\u0633\u0639\u064A\u0631 \u0648\u0627\u0644\u0642\u0648\u0627\u0644\u0628","\u062A\u0643\u0644\u0641\u0629 \u0648\u0627\u0636\u062D\u0629 \u0644\u0643\u0644 \u0646\u0648\u0639 \u063A\u0631\u0641\u0629\u060C \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0645\u0639\u0627\u062F\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C.",L("editPricing")?l("\uFF0B \u062A\u0633\u0639\u064A\u0631 \u062C\u062F\u064A\u062F","pricing.new","","primary"):"")+'<div class="panel">'+U(!0)+"</div>";else if(s.tab==="quotes")d("#content").innerHTML=Y("\u062A\u0633\u0639\u064A\u0631\u0627\u062A \u0634\u0631\u0643\u062A\u0643","\u062A\u0643\u0627\u0644\u064A\u0641\u0643 \u0627\u0644\u0625\u0636\u0627\u0641\u064A\u0629 \u0648\u0623\u0631\u0628\u0627\u062D\u0643 \u0645\u062D\u0641\u0648\u0638\u0629 \u0641\u064A \u0645\u0633\u0627\u062D\u0629 \u0634\u0631\u0643\u062A\u0643.")+ye([["\u0627\u0644\u062A\u0633\u0639\u064A\u0631\u0627\u062A \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629",e.quotes.length],["\u0627\u0644\u0646\u0634\u0637\u0629",e.quotes.filter(i=>!i.archived).length],["\u0644\u0647\u0627 \u062A\u062D\u062F\u064A\u062B \u0641\u064A \u0627\u0644\u0645\u0635\u062F\u0631",e.quotes.filter(i=>i.hasUpdate).length]])+'<div class="panel">'+U()+"</div>";else if(s.tab==="companyPricing")d("#content").innerHTML=Y("\u0623\u062F\u0627\u0629 \u0627\u0644\u062A\u0633\u0639\u064A\u0631 \u0627\u0644\u062E\u0627\u0635\u0629","\u0627\u062D\u0633\u0628 \u062A\u0643\u0627\u0644\u064A\u0641\u0643 \u0648\u0623\u0631\u0628\u0627\u062D\u0643 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631\u060C \u0628\u0645\u0639\u0632\u0644 \u062A\u0627\u0645 \u0639\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u2014 \u062E\u0627\u0635\u0629 \u0628\u0634\u0631\u0643\u062A\u0643 \u0641\u0642\u0637.",l("\uFF0B \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F","cp.new","","primary"))+ye([["\u062D\u0633\u0627\u0628\u0627\u062A\u0643 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629",(e.companyPricings||[]).length]])+'<div class="panel">'+U()+"</div>";else if(s.tab==="definitions")d("#content").innerHTML=Y("\u0627\u0644\u062A\u0639\u0631\u064A\u0641\u0627\u062A","\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u063A\u0631\u0641 \u0648\u0627\u0644\u0641\u0646\u0627\u062F\u0642 \u0648\u0627\u0644\u0645\u062F\u0646 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A.",L("editDefinitions")?l("\u0642\u0627\u0644\u0628 Excel","import.template")+l("\u0627\u0633\u062A\u064A\u0631\u0627\u062F Excel","import.open")+l("\uFF0B \u062A\u0639\u0631\u064A\u0641 \u062C\u062F\u064A\u062F","definition.new","","primary"):"")+'<div class="panel">'+U()+"</div>";else if(s.tab==="companies")d("#content").innerHTML=Y("\u0627\u0644\u0634\u0631\u0643\u0627\u062A","\u062D\u0633\u0627\u0628\u0627\u062A \u0645\u0633\u062A\u0642\u0644\u0629 \u0648\u0639\u0631\u0648\u0636 \u0645\u062E\u0635\u0635\u0629 \u0644\u0643\u0644 \u062C\u0647\u0629.",l("\uFF0B \u0625\u0636\u0627\u0641\u0629 \u0634\u0631\u0643\u0629","company.new","","primary"))+'<div class="panel">'+U()+"</div>";else if(s.tab==="users")d("#content").innerHTML=Y("\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A","\u062D\u062F\u062F \u0648\u0635\u0648\u0644 \u0643\u0644 \u0645\u0648\u0638\u0641\u060C \u0648\u0627\u0631\u0628\u0637 \u0643\u0644 \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0634\u0631\u0643\u062A\u0647.",l("\uFF0B \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u062A\u062E\u062F\u0645","user.new","","primary"))+'<div class="panel">'+U()+"</div>";else if(s.tab==="settings"){Pi();return}d(".toolbar")&&d(".toolbar").insertAdjacentHTML("beforeend",`<select id="sort-order" aria-label="\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0646\u062A\u0627\u0626\u062C"><option value="newest">\u0627\u0644\u0623\u062D\u062F\u062B \u0623\u0648\u0644\u0627\u064B</option><option value="name" ${s.sort==="name"?"selected":""}>\u0627\u0644\u0627\u0633\u0645 \u0623\u0628\u062C\u062F\u064A\u0627\u064B</option></select>`),ve()}function X(e){return e.filter(i=>String(i.name||i.username).toLowerCase().includes(s.filter.toLowerCase())&&(s.kind==="all"||!i.kind||i.kind===s.kind)).sort((i,a)=>s.sort==="name"?String(i.name).localeCompare(String(a.name),"ar"):String(a.updatedAt||"").localeCompare(String(i.updatedAt||"")))}function ve(){let e=s.boot,i=[],a=[],n;if(s.tab==="offers"&&b()){i=X(e.assignments),d("#list-results").innerHTML=i.length?i.map(t=>`<div class="offer-card"><div class="offer-card-head"><div><span class="table-title">${c(t.name)}</span><br><small>${t.lines.length} ${t.kind==="program"?"\u0623\u0646\u0648\u0627\u0639 \u063A\u0631\u0641":"\u0628\u0646\u062F"} \xB7 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629: ${c(t.validUntil||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F\u0629")}</small></div><div>${P(t.kind==="program"?"\u0628\u0631\u0646\u0627\u0645\u062C":"\u062E\u062F\u0645\u0629")} ${t.archived?P("\u0645\u0624\u0631\u0634\u0641"):P(t.expired?"\u0645\u0646\u062A\u0647\u064A":"\u0645\u062A\u0627\u062D",t.expired?"danger":"ok")}</div></div>${M(["\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u062E\u062F\u0645\u0629","\u0627\u0644\u0623\u0633\u0627\u0633\u064A","\u0627\u0644\u0639\u0645\u0648\u0644\u0629","\u0627\u0644\u0635\u0627\u0641\u064A \u0644\u0634\u0631\u0643\u062A\u0643\u0645"],t.lines.map(r=>R([c(r.label)+"<br><small>"+G(r.unit)+"</small>",f(r.basePrice,r.currency),f(r.commission,r.currency),'<span class="money">'+f(r.netPrice,r.currency)+"</span>"])))}<div class="offer-card-actions">${V(l("\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0627\u0644\u0637\u0628\u0627\u0639\u0629","offer.view",t.id,"small")+(t.expired?"":l("\u062A\u0633\u0639\u064A\u0631 \u0644\u0639\u0645\u064A\u0644","quote.new",t.id,"small primary")))}</div></div>`).join(""):'<div class="empty"><strong>\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629</strong>\u0627\u0628\u062F\u0623 \u0628\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0648 \u063A\u064A\u0651\u0631 \u0627\u0644\u0628\u062D\u062B.</div>',d("#result-count")&&(d("#result-count").textContent=i.length+" \u0646\u062A\u064A\u062C\u0629");return}s.tab==="offers"?(i=X(b()?e.assignments:e.offers),a=["\u0627\u0644\u0639\u0631\u0636","\u0627\u0644\u0646\u0648\u0639",b()?"\u0635\u0627\u0641\u064A \u0627\u0644\u0633\u0639\u0631 \u064A\u0628\u062F\u0623 \u0645\u0646":"\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639 \u064A\u0628\u062F\u0623 \u0645\u0646","\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629","\u0627\u0644\u062D\u0627\u0644\u0629","\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"],n=t=>[`<span class="table-title">${c(t.name)}</span><small>${t.lines.length} ${t.kind==="program"?"\u0623\u0646\u0648\u0627\u0639 \u063A\u0631\u0641":"\u0628\u0646\u062F"}</small>`,P(t.kind==="program"?"\u0628\u0631\u0646\u0627\u0645\u062C":"\u062E\u062F\u0645\u0629"),`<span class="money">${f(Math.min(...t.lines.map(r=>b()?r.netPrice:r.basePrice)),t.lines[0]?.currency)}</span>`,c(t.validUntil||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F\u0629"),t.archived?P("\u0645\u0624\u0631\u0634\u0641"):b()?P(t.expired?"\u0645\u0646\u062A\u0647\u064A":"\u0645\u062A\u0627\u062D",t.expired?"danger":"ok"):P(t.status==="approved"?"\u0645\u0639\u062A\u0645\u062F":"\u0645\u0633\u0648\u062F\u0629",t.status==="approved"?"ok":""),V(l("\u0639\u0631\u0636","offer.view",t.id,"small")+(b()?t.expired?"":l("\u062A\u0633\u0639\u064A\u0631 \u0644\u0639\u0645\u064A\u0644","quote.new",t.id,"small primary"):(L("editPricing")?l("\u062A\u0639\u062F\u064A\u0644","offer.edit",t.id,"small"):"")+(L("approve")&&t.status!=="approved"&&!t.archived?l("\u0627\u0639\u062A\u0645\u0627\u062F","offer.approve",t.id,"small"):"")+(L("publish")&&t.status==="approved"&&!t.archived?l("\u0646\u0634\u0631 / \u0639\u0645\u0648\u0644\u0629","publish.open",t.id,"small primary"):"")+(L("publish")&&(s.boot.assignments||[]).some(r=>r.offerId===t.id)?l("\u0625\u064A\u0642\u0627\u0641/\u062A\u0641\u0639\u064A\u0644","pause.open",t.id,"small"):"")+(L("publish")?l(t.archived?"\u0627\u0633\u062A\u0639\u0627\u062F\u0629":"\u0623\u0631\u0634\u0641\u0629","offer.archive",t.id,"small"):"")))]):s.tab==="pricing"?(i=X(e.pricings||[]),a=["\u0627\u0644\u0627\u0633\u0645","\u0627\u0644\u0646\u0648\u0639","\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645","\u0639\u062F\u062F \u0627\u0644\u0628\u0646\u0648\u062F","\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"],n=t=>[`<b>${c(t.name)}</b>`,t.kind==="program"?"\u0628\u0631\u0646\u0627\u0645\u062C":"\u062E\u062F\u0645\u0629",P(t.isTemplate?"\u0642\u0627\u0644\u0628 \u062A\u0633\u0639\u064A\u0631":"\u062A\u0633\u0639\u064A\u0631\u0629"),t.result.results.length,V(l("\u0639\u0631\u0636","pricing.view",t.id,"small")+(L("editPricing")?l("\u062A\u0639\u062F\u064A\u0644","pricing.edit",t.id,"small")+l("\u0646\u0633\u062E","pricing.copy",t.id,"small")+l("\u0625\u0646\u0634\u0627\u0621 \u0639\u0631\u0636","offer.fromPricing",t.id,"small primary"):""))]):s.tab==="quotes"?(i=X(e.quotes),a=["\u0627\u0644\u062A\u0633\u0639\u064A\u0631\u0629 \u0648\u0627\u0644\u0639\u0645\u064A\u0644","\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A","\u0631\u0628\u062D \u0627\u0644\u0634\u0631\u0643\u0629","\u0627\u0644\u062D\u0627\u0644\u0629","\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"],n=t=>[`<b>${c(t.name)}</b><br><small>${c(t.customer)}</small>`,se(t),se(t,"profit"),P(t.archived?"\u0645\u0624\u0631\u0634\u0641\u0629":"\u0645\u062D\u0641\u0648\u0638\u0629",t.archived?"":"ok")+(t.hasUpdate?" "+P("\u0627\u0644\u0645\u0635\u062F\u0631 \u062A\u063A\u064A\u0631","gold"):""),V(l("\u062A\u0639\u062F\u064A\u0644","quote.edit",t.id,"small")+l("\u0646\u0633\u062E\u0629 \u0627\u0644\u0639\u0645\u064A\u0644","quote.print",t.id,"small")+l("Excel","quote.export",t.id,"small")+l(t.archived?"\u0627\u0633\u062A\u0639\u0627\u062F\u0629":"\u0623\u0631\u0634\u0641\u0629","quote.archive",t.id,"small"))]):s.tab==="companyPricing"?(i=X(e.companyPricings||[]),a=["\u0627\u0644\u0627\u0633\u0645","\u0627\u0644\u0646\u0648\u0639","\u0627\u0644\u0628\u0646\u0648\u062F","\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"],n=t=>[`<b>${c(t.name)}</b>`,t.kind==="program"?"\u0628\u0631\u0646\u0627\u0645\u062C":"\u062E\u062F\u0645\u0629",t.result.results.length,V(l("\u0639\u0631\u0636","cp.view",t.id,"small")+l("\u062A\u0639\u062F\u064A\u0644","cp.edit",t.id,"small")+l(t.archived?"\u0627\u0633\u062A\u0639\u0627\u062F\u0629":"\u0623\u0631\u0634\u0641\u0629","cp.archive",t.id,"small"))]):s.tab==="definitions"?(i=X(e.definitions||[]),a=["\u0627\u0644\u0627\u0633\u0645","\u0627\u0644\u0646\u0648\u0639","\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644","\u0627\u0644\u062D\u0627\u0644\u0629","\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"],n=t=>[`<b>${c(t.name)}</b>`,{room:"\u063A\u0631\u0641\u0629",city:"\u0645\u062F\u064A\u0646\u0629",hotel:"\u0641\u0646\u062F\u0642",service:"\u062E\u062F\u0645\u0629"}[t.type],t.type==="room"?t.occupancy+" \u0623\u0634\u062E\u0627\u0635"+(t.extraBeds!=null?" \xB7 "+t.extraBeds+" \u0623\u0633\u0631\u0651\u0629 \u0625\u0636\u0627\u0641\u064A\u0629":""):t.type==="service"?ne(t.cost)+" "+c(t.currency)+" \xB7 "+G(t.unit):t.type==="hotel"?ne(t.rate)+" SAR / \u0644\u064A\u0644\u0629":"\u2014",P(t.active?"\u0641\u0639\u0627\u0644":"\u0645\u0648\u0642\u0648\u0641",t.active?"ok":""),L("editDefinitions")?V(l("\u062A\u0639\u062F\u064A\u0644","definition.edit",t.id,"small")):"\u2014"]):s.tab==="companies"?(i=X(e.companies||[]),a=["\u0627\u0644\u0634\u0631\u0643\u0629","\u0627\u0644\u062A\u0648\u0627\u0635\u0644","\u0627\u0644\u062D\u0627\u0644\u0629","\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"],n=t=>[`<b>${c(t.name)}</b>`,c(t.contact||"\u2014"),P(t.active?"\u0641\u0639\u0627\u0644\u0629":"\u0645\u0648\u0642\u0648\u0641\u0629",t.active?"ok":""),V(l("\u062A\u0639\u062F\u064A\u0644","company.edit",t.id,"small"))]):s.tab==="users"&&(i=X(e.users||[]),a=["\u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u062D\u0633\u0627\u0628","\u0646\u0648\u0639 \u0627\u0644\u062D\u0633\u0627\u0628","\u0627\u0644\u0634\u0631\u0643\u0629 / \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A","\u0627\u0644\u062D\u0627\u0644\u0629","\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"],n=t=>[`<b>${c(t.name)}</b><br><span class="num">${c(t.username)}</span>`,{admin:"\u0645\u0633\u0624\u0648\u0644",employee:"\u0645\u0648\u0638\u0641",company:"\u0634\u0631\u0643\u0629"}[t.role],c(t.role==="company"?(e.companies||[]).find(r=>r.id===t.companyId)?.name||"\u2014":t.role==="admin"?"\u0643\u0644 \u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0627\u0644\u0625\u062F\u0627\u0631\u0629":(t.permissions||[]).map(r=>We[r]).join("\u060C ")||"\u0639\u0631\u0636 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0641\u0642\u0637"),P(t.active?"\u0641\u0639\u0627\u0644":"\u0645\u0648\u0642\u0648\u0641",t.active?"ok":""),V(l("\u062A\u0639\u062F\u064A\u0644 / \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631","user.edit",t.id,"small"))]),d("#result-count")&&(d("#result-count").textContent=i.length+" \u0646\u062A\u064A\u062C\u0629"),d("#list-results").innerHTML=i.length?M(a,i.map(t=>R(n(t)))):'<div class="empty"><strong>\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629</strong>\u0627\u0628\u062F\u0623 \u0628\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0648 \u063A\u064A\u0651\u0631 \u0627\u0644\u0628\u062D\u062B.</div>'}function Ye(e={type:"room",active:!0,occupancy:1}){let i=`<form id="definition-form"><div class="grid">${y("\u0646\u0648\u0639 \u0627\u0644\u062A\u0639\u0631\u064A\u0641","type",[["room","\u0646\u0648\u0639 \u063A\u0631\u0641\u0629"],["city","\u0645\u062F\u064A\u0646\u0629"],["hotel","\u0641\u0646\u062F\u0642"],["service","\u062E\u062F\u0645\u0629"]],e.type)}${w("\u0627\u0644\u0627\u0633\u0645","name",e.name||"","text",'required maxlength="200"')}<div id="definition-fields" class="full"></div>${A("\u0641\u0639\u0627\u0644","active",e.active!==!1)}</div>${j()}</form>`;D(e.id?"\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0639\u0631\u064A\u0641":"\u062A\u0639\u0631\u064A\u0641 \u062C\u062F\u064A\u062F",i,{type:"definition",row:e}),$e(e),e.id&&(d("[name=type]").disabled=!0)}function $e(e={}){let i=d("[name=type]").value;d("#definition-fields").innerHTML='<div class="grid">'+(i==="room"?m("\u0639\u062F\u062F \u0627\u0644\u0623\u0634\u062E\u0627\u0635 \u0644\u062A\u0633\u0639\u064A\u0631 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C","occupancy",e.occupancy||1,'min="1" max="20" step="1" required')+m("\u0627\u0644\u0623\u0633\u0631\u0651\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u064A\u0629 (\u0641\u0627\u0631\u063A = \u0627\u0644\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629)","extraBeds",e.extraBeds??"",'max="20" step="1"'):i==="service"?m("\u062A\u0643\u0644\u0641\u0629 \u0648\u062D\u062F\u0629 \u0627\u0644\u062E\u062F\u0645\u0629","cost",e.cost||0)+y("\u0639\u0645\u0644\u0629 \u0627\u0644\u062A\u0643\u0644\u0641\u0629","currency",re,e.currency||"LYD")+y("\u0639\u0645\u0644\u0629 \u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629","saleCurrency",re,e.saleCurrency||"LYD")+y("\u0648\u062D\u062F\u0629 \u0628\u064A\u0639 \u0627\u0644\u062E\u062F\u0645\u0629","unit",[["item","\u0627\u0644\u062E\u062F\u0645\u0629 \u0643\u0627\u0645\u0644\u0629"],["roomNight","\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u0644\u064A\u0644\u0629"]],e.unit||"item"):i==="hotel"?y("\u0627\u0644\u0645\u062F\u064A\u0646\u0629","cityId",[["","\u0628\u062F\u0648\u0646 \u062A\u062D\u062F\u064A\u062F"],...s.boot.definitions.filter(a=>a.type==="city").map(a=>[a.id,a.name])],e.cityId)+m("\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u0644\u064A\u0644\u0629 \u0628\u0627\u0644\u0631\u064A\u0627\u0644","rate",e.rate||0):"")+"</div>"}function ze(e={active:!0}){D(e.id?"\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0634\u0631\u0643\u0629":"\u0625\u0636\u0627\u0641\u0629 \u0634\u0631\u0643\u0629",`<form id="company-form"><div class="grid">${w("\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629","name",e.name||"","text",'required maxlength="200"')}${w("\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0648\u0627\u0635\u0644","contact",e.contact||"")}${A("\u0627\u0644\u0634\u0631\u0643\u0629 \u0641\u0639\u0627\u0644\u0629","active",e.active!==!1)}</div><div class="hint section">\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0634\u0631\u0643\u0629 \u064A\u0645\u0646\u0639 \u062F\u062E\u0648\u0644 \u062C\u0645\u064A\u0639 \u062D\u0633\u0627\u0628\u0627\u062A\u0647\u0627\u060C \u0645\u0639 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0639\u0631\u0648\u0636\u0647\u0627 \u0648\u062A\u0633\u0639\u064A\u0631\u0627\u062A\u0647\u0627.</div>${j()}</form>`,{type:"company",row:e})}function Ge(e={role:"company",active:!0,permissions:[]}){let i=s.boot.user.role==="admin",a=i?[["company","\u0645\u0633\u062A\u062E\u062F\u0645 \u0634\u0631\u0643\u0629"],["employee","\u0645\u0648\u0638\u0641"]]:[["company","\u0645\u0633\u062A\u062E\u062F\u0645 \u0634\u0631\u0643\u0629"]];e.role==="admin"&&a.push(["admin","\u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0631\u0626\u064A\u0633\u064A"]),D(e.id?"\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062D\u0633\u0627\u0628":"\u0625\u0636\u0627\u0641\u0629 \u062D\u0633\u0627\u0628",`<form id="user-form"><div class="grid">${w("\u0627\u0644\u0627\u0633\u0645","name",e.name||"","text","required")}${w("\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645","username",e.username||"","text",'required dir="ltr" pattern="[a-zA-Z0-9._-]{3,80}" autocomplete="off"')}${y("\u0646\u0648\u0639 \u0627\u0644\u062D\u0633\u0627\u0628","role",a,e.role)}${y("\u0627\u0644\u0634\u0631\u0643\u0629","companyId",[["","\u0627\u062E\u062A\u0631 \u0627\u0644\u0634\u0631\u0643\u0629"],...(s.boot.companies||[]).map(n=>[n.id,n.name])],e.companyId)}${w(e.id?"\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062C\u062F\u064A\u062F\u0629 (\u0627\u062A\u0631\u0643\u0647\u0627 \u0641\u0627\u0631\u063A\u0629 \u0644\u0644\u0625\u0628\u0642\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u062D\u0627\u0644\u064A\u0629)":"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0623\u0648\u0644\u064A\u0629","password","","password",(e.id?"":"required ")+'autocomplete="new-password"')}${A("\u0627\u0644\u062D\u0633\u0627\u0628 \u0641\u0639\u0627\u0644","active",e.active!==!1)}<div class="full" id="employee-permissions"><h3>\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641</h3><div class="check-group">${Object.entries(We).map(([n,t])=>A(t,"permission",e.permissions?.includes(n),n)).join("")}</div><small>\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u062A\u0633\u0639\u064A\u0631 \u0648\u0627\u0644\u062A\u0639\u0631\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u064A\u062D\u062A\u0627\u062C \u0631\u0624\u064A\u0629 \u0627\u0644\u062A\u0643\u0644\u0641\u0629. \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0644\u0644\u0645\u0648\u0638\u0641 \u062A\u062E\u0635 \u0645\u0633\u062A\u062E\u062F\u0645\u064A \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0641\u0642\u0637.</small></div></div><div class="hint section">\u0625\u0646\u0634\u0627\u0621 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0623\u0648 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646\u0647\u0627 \u064A\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u062A\u063A\u064A\u064A\u0631\u0647\u0627 \u0639\u0646\u062F \u062F\u062E\u0648\u0644\u0647. \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062D\u0633\u0627\u0628 \u064A\u0646\u0647\u064A \u062C\u0644\u0633\u0627\u062A\u0647 \u0627\u0644\u0633\u0627\u0628\u0642\u0629.</div>${j()}</form>`,{type:"user",row:e}),_e()}function _e(){let e=d("[name=role]").value;d("#employee-permissions").hidden=e!=="employee",d("[name=companyId]").disabled=e!=="company",d("[name=companyId]").required=e==="company"}var yi=()=>({kind:"program",input:{makkahNights:10,makkahRate:0,madinahNights:3,madinahRate:0,includeMadinah:!1,extraBed:0,visaUsd:0,ticketLyd:0,transportLyd:0,otherLyd:0,profitType:"percent",profitValue:15,rounding:1,sarPerUsd:s.boot.settings.sarPerUsd||3.72,usdToLyd:s.boot.settings.usdToLyd||9.5},roomIds:s.boot.definitions.filter(e=>e.type==="room"&&e.active).map(e=>e.id)});function be(e){e=e||yi();let i=e.input||{},a=[...new Map([...s.boot.definitions,...e.definitionsSnapshot||[]].map(o=>[o.id,o])).values()],n=a.filter(o=>o.type==="room"&&o.active),t=a.filter(o=>o.type==="service"&&o.active),r=[["","\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0646\u062F\u0642"],...a.filter(o=>o.type==="hotel"&&o.active).map(o=>[o.id,o.name])];D(e.id?"\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0633\u0639\u064A\u0631":"\u062A\u0633\u0639\u064A\u0631 \u062C\u062F\u064A\u062F",`<form id="pricing-form"><div class="grid">${w("\u0627\u0633\u0645 \u0627\u0644\u062A\u0633\u0639\u064A\u0631","name",e.name||"","text",'required maxlength="200"')}${y("\u0646\u0648\u0639 \u0627\u0644\u062A\u0633\u0639\u064A\u0631","kind",[["program","\u0628\u0631\u0646\u0627\u0645\u062C \u2014 \u0633\u0639\u0631 \u0644\u0644\u0641\u0631\u062F \u062D\u0633\u0628 \u0627\u0644\u063A\u0631\u0641\u0629"],["service","\u062E\u062F\u0645\u0629 \u0645\u0633\u062A\u0642\u0644\u0629 \u2014 \u0633\u0639\u0631 \u0627\u0644\u0648\u062D\u062F\u0629 \u0643\u0627\u0645\u0644\u0629"]],e.kind)}</div><div id="program-inputs" class="section"><div class="grid four">${y("\u0641\u0646\u062F\u0642 \u0645\u0643\u0629","makkahHotelId",r,i.makkahHotelId)}${m("\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u0644\u064A\u0644\u0629 \u2014 \u0645\u0643\u0629 (SAR)","makkahRate",i.makkahRate)}${m("\u0644\u064A\u0627\u0644\u064A \u0645\u0643\u0629","makkahNights",i.makkahNights,'step="1" max="365"')}${m("\u0627\u0644\u0633\u0631\u064A\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u064A / \u0627\u0644\u0644\u064A\u0644\u0629 (SAR)","extraBed",i.extraBed)}</div><div class="check-group">${A("\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0641\u064A \u0627\u0644\u0645\u062F\u064A\u0646\u0629","includeMadinah",i.includeMadinah)}</div><div class="grid three" id="madinah-inputs">${y("\u0641\u0646\u062F\u0642 \u0627\u0644\u0645\u062F\u064A\u0646\u0629","madinahHotelId",r,i.madinahHotelId)}${m("\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u0644\u064A\u0644\u0629 \u2014 \u0627\u0644\u0645\u062F\u064A\u0646\u0629 (SAR)","madinahRate",i.madinahRate)}${m("\u0644\u064A\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u064A\u0646\u0629","madinahNights",i.madinahNights,'step="1" max="365"')}</div><div class="divider"></div><div class="grid four">${m("\u0627\u0644\u062A\u0623\u0634\u064A\u0631\u0629 \u0644\u0644\u0641\u0631\u062F (USD)","visaUsd",i.visaUsd)}${m("\u0627\u0644\u062A\u0630\u0643\u0631\u0629 \u0644\u0644\u0641\u0631\u062F (LYD)","ticketLyd",i.ticketLyd)}${m("\u0627\u0644\u0646\u0642\u0644 \u0644\u0644\u0641\u0631\u062F (LYD)","transportLyd",i.transportLyd)}${m("\u062A\u0643\u0627\u0644\u064A\u0641 \u0623\u062E\u0631\u0649 \u0644\u0644\u0641\u0631\u062F (LYD)","otherLyd",i.otherLyd)}</div><div class="section"><h3>\u062E\u062F\u0645\u0627\u062A \u062F\u0627\u062E\u0644\u0629 \u0641\u064A \u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0641\u0631\u062F \u0628\u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C</h3><div class="check-group">${t.map(o=>A(o.name,"serviceIds",i.serviceIds?.includes(o.id),o.id)).join("")||"<small>\u064A\u0645\u0643\u0646 \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0645\u0646 \u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u0627\u062A.</small>"}</div></div><details class="section"><summary>\u062A\u0641\u0639\u064A\u0644 \u0623\u0633\u0639\u0627\u0631 \u062E\u0627\u0635\u0629 \u0644\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u063A\u0631\u0641 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)</summary><small>\u0627\u062A\u0631\u0643 \u0627\u0644\u0633\u0639\u0631 \u0641\u0627\u0631\u063A\u0627\u064B \u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0623\u0648 \u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u0645\u062D\u0633\u0648\u0628. \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631 \u0644\u0644\u0641\u0631\u062F. \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0642\u0644\u0629 \u0644\u0647\u0627 \u0639\u0645\u0644\u0629 \u0628\u064A\u0639 \u062A\u062E\u062A\u0627\u0631\u0647\u0627.</small>${M(["\u0627\u0633\u062A\u062E\u062F\u0627\u0645","\u0627\u0644\u063A\u0631\u0641\u0629","\u0645\u0643\u0629 SAR / \u0644\u064A\u0644\u0629","\u0627\u0644\u0645\u062F\u064A\u0646\u0629 SAR / \u0644\u064A\u0644\u0629","\u0628\u064A\u0639 \u062E\u0627\u0635 \u0644\u0644\u0641\u0631\u062F LYD"],n.map(o=>R([A("","roomIds",(e.roomIds||[]).includes(o.id),o.id),c(o.name)+" \xB7 "+o.occupancy,`<input aria-label="\u062A\u0643\u0644\u0641\u0629 \u0645\u0643\u0629 ${c(o.name)}" data-room="${c(o.id)}" data-field="makkahRate" type="number" min="0" step="0.001" value="${c(i.roomOverrides?.[o.id]?.makkahRate??"")}">`,`<input aria-label="\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0645\u062F\u064A\u0646\u0629 ${c(o.name)}" data-room="${c(o.id)}" data-field="madinahRate" type="number" min="0" step="0.001" value="${c(i.roomOverrides?.[o.id]?.madinahRate??"")}">`,`<input aria-label="\u0628\u064A\u0639 ${c(o.name)}" data-room="${c(o.id)}" data-field="sell" type="number" min="0" step="0.001" value="${c(i.roomOverrides?.[o.id]?.sell??"")}">`])))}</details></div><div id="service-inputs" class="section"><div class="grid">${y("\u0627\u0644\u062E\u062F\u0645\u0629","serviceId",[["","\u0627\u062E\u062A\u0631 \u0627\u0644\u062E\u062F\u0645\u0629"],...t.map(o=>[o.id,o.name+" \u2014 "+G(o.unit)+" \xB7 \u062A\u0643\u0644\u0641\u0629 "+o.currency])],e.serviceId)}${m("\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0648\u062D\u062F\u0629 \u0628\u0639\u0645\u0644\u0629 \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u062E\u062F\u0645\u0629 (\u0641\u0627\u0631\u063A = \u0627\u0644\u062A\u0639\u0631\u064A\u0641)","cost",i.cost??"")}${y("\u0639\u0645\u0644\u0629 \u0628\u064A\u0639 \u0627\u0644\u062E\u062F\u0645\u0629","saleCurrency",re,i.saleCurrency||t.find(o=>o.id===e.serviceId)?.saleCurrency||"LYD")}${m("\u0628\u064A\u0639 \u062E\u0627\u0635 \u0644\u0644\u0648\u062D\u062F\u0629 \u0628\u0639\u0645\u0644\u0629 \u0627\u0644\u0628\u064A\u0639 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)","sell",i.sell??"")}</div><div class="hint section">\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u0644\u064A\u0644\u0629 \u062A\u0628\u0627\u0639 \u0643\u0648\u062D\u062F\u0629 \u0643\u0627\u0645\u0644\u0629. \u0625\u062C\u0645\u0627\u0644\u064A\u0647\u0627 \u0641\u064A \u062A\u0633\u0639\u064A\u0631\u0629 \u0627\u0644\u0634\u0631\u0643\u0629 = \u0627\u0644\u0633\u0639\u0631 \xD7 \u0627\u0644\u063A\u0631\u0641 \xD7 \u0627\u0644\u0644\u064A\u0627\u0644\u064A\u060C \u062F\u0648\u0646 \u0642\u0633\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0634\u062E\u0627\u0635.</div></div><div class="divider"></div><div class="grid four">${m("\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0648\u0627\u062D\u062F \u0628\u0627\u0644\u0631\u064A\u0627\u0644","sarPerUsd",i.sarPerUsd,'min="0.0001" step="0.0001" required')}${m("\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0648\u0627\u062D\u062F \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631","usdToLyd",i.usdToLyd,'min="0.0001" step="0.0001" required')}${y("\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0631\u0628\u062D","profitType",[["percent","\u0646\u0633\u0628\u0629 \u0645\u0646 \u0627\u0644\u062A\u0643\u0644\u0641\u0629 %"],["fixed","\u0645\u0628\u0644\u063A \u062B\u0627\u0628\u062A \u0644\u0644\u0648\u062D\u062F\u0629"]],i.profitType)}${m("\u0642\u064A\u0645\u0629 \u0627\u0644\u0631\u0628\u062D","profitValue",i.profitValue)}${y("\u0627\u0644\u062A\u0642\u0631\u064A\u0628 \u0644\u0623\u0639\u0644\u0649","rounding",[[0,"\u062F\u0648\u0646 \u062A\u0642\u0631\u064A\u0628"],[1,"1 \u0645\u0646 \u0639\u0645\u0644\u0629 \u0627\u0644\u0628\u064A\u0639"],[5,"5 \u0645\u0646 \u0639\u0645\u0644\u0629 \u0627\u0644\u0628\u064A\u0639"],[10,"10 \u0645\u0646 \u0639\u0645\u0644\u0629 \u0627\u0644\u0628\u064A\u0639"],[50,"50 \u0645\u0646 \u0639\u0645\u0644\u0629 \u0627\u0644\u0628\u064A\u0639"]],i.rounding)}</div><div class="check-group">${A("\u062D\u0641\u0638 \u0643\u0642\u0627\u0644\u0628 \u0642\u0627\u0628\u0644 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645","isTemplate",e.isTemplate)}${e.id?A("\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u0627\u062A \u0625\u0644\u0649 \u0623\u062D\u062F\u062B \u0623\u0633\u0639\u0627\u0631\u0647\u0627 \u0639\u0646\u062F \u0627\u0644\u062D\u0641\u0638","refreshDefinitions",!1):""}</div>${he("\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u062F\u0627\u062E\u0644\u064A\u0629","notes",e.notes)}<div class="section inline">${l("\u0627\u062D\u0633\u0628 \u0627\u0644\u0623\u0633\u0639\u0627\u0631","pricing.calculate","","primary")}<small><span id="sale-currency-hint">\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631 \u0627\u0644\u0644\u064A\u0628\u064A</span></small></div><div id="pricing-result" class="result"></div>${j("\u062D\u0641\u0638 \u0627\u0644\u062A\u0633\u0639\u064A\u0631")}</form>`,{type:"pricing",row:e}),pe(),e.result&&K(e.result)}function pe(){let e=d("[name=kind]").value==="program";d("#program-inputs").hidden=!e,d("#service-inputs").hidden=e,d("#madinah-inputs").hidden=!d("[name=includeMadinah]").checked,d("#sale-currency-hint").textContent=e?"\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631 \u0627\u0644\u0644\u064A\u0628\u064A":"\u0639\u0645\u0644\u0629 \u0628\u064A\u0639 \u0627\u0644\u062E\u062F\u0645\u0629 \u0648\u0627\u0644\u0631\u0628\u062D \u0627\u0644\u062B\u0627\u0628\u062A: "+$(d("[name=saleCurrency]").value)}function ei(){let e=d("#pricing-form"),i=Object.fromEntries(new FormData(e)),a=s.editor.row,n={};for(let t of["makkahRate","makkahNights","madinahRate","madinahNights","extraBed","visaUsd","ticketLyd","transportLyd","otherLyd","sarPerUsd","usdToLyd","profitValue","rounding"])n[t]=Number(i[t]);return Object.assign(n,{includeMadinah:!!i.includeMadinah,profitType:i.profitType,makkahHotelId:i.makkahHotelId,madinahHotelId:i.madinahHotelId,cost:i.cost,sell:i.sell,saleCurrency:i.saleCurrency,serviceIds:new FormData(e).getAll("serviceIds"),roomOverrides:{}}),x("[data-room]").forEach(t=>{var r,o;(r=n.roomOverrides)[o=t.dataset.room]||(r[o]={}),n.roomOverrides[t.dataset.room][t.dataset.field]=t.value}),{id:a.id,version:a.version,sourcePricingId:a.sourcePricingId,sourcePricingVersion:a.sourcePricingVersion,name:i.name,kind:i.kind,input:n,roomIds:new FormData(e).getAll("roomIds"),serviceId:i.serviceId,isTemplate:!!i.isTemplate,notes:i.notes,refreshDefinitions:!!i.refreshDefinitions}}function K(e,i="pricing-result"){d("#"+i).innerHTML=M(["\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u062E\u062F\u0645\u0629","\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0648\u062D\u062F\u0629","\u0627\u0644\u0631\u0628\u062D \u0627\u0644\u0641\u0639\u0644\u064A","\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639"],e.results.map(a=>R([c(a.label)+"<br><small>"+G(a.unit)+"</small>",f(a.baseCost,a.currency),f(a.profit,a.currency),'<span class="money">'+f(a.sell,a.currency)+"</span>"])))}var Ie=()=>({name:"",kind:"program",input:{makkahNights:10,makkahRate:0,madinahNights:3,madinahRate:0,includeMadinah:!1,extraBed:0,visaUsd:0,ticketLyd:0,transportLyd:0,otherLyd:0,profitType:"percent",profitValue:15,rounding:1,sarPerUsd:3.72,usdToLyd:9.5},rooms:[{id:crypto.randomUUID(),name:"\u063A\u0631\u0641\u0629 \u0632\u0648\u062C\u064A\u0629",occupancy:2}],service:{name:"",cost:0,currency:"LYD",saleCurrency:"LYD",unit:"item"}});function Te(e){e=e||Ie();let i=e.input;s.editor={type:"cp",row:e,rooms:structuredClone(e.rooms||Ie().rooms)};let a=`<form id="cp-form"><div class="grid">${w("\u0627\u0633\u0645 \u0627\u0644\u062D\u0633\u0627\u0628","name",e.name||"","text",'required maxlength="200"')}${y("\u0646\u0648\u0639 \u0627\u0644\u062D\u0633\u0627\u0628","kind",[["program","\u0628\u0631\u0646\u0627\u0645\u062C \u2014 \u0633\u0639\u0631 \u0644\u0644\u0641\u0631\u062F \u062D\u0633\u0628 \u0627\u0644\u063A\u0631\u0641\u0629"],["service","\u062E\u062F\u0645\u0629 \u0645\u0633\u062A\u0642\u0644\u0629 \u2014 \u0633\u0639\u0631 \u0627\u0644\u0648\u062D\u062F\u0629 \u0643\u0627\u0645\u0644\u0629"]],e.kind)}</div><div class="hint section">\u0647\u0630\u0647 \u0627\u0644\u0623\u062F\u0627\u0629 \u0645\u0633\u062A\u0642\u0644\u0629 \u062A\u0645\u0627\u0645\u0627\u064B \u0639\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0648\u062A\u0639\u0631\u064A\u0641\u0627\u062A\u0647\u0627 \u2014 \u0623\u062F\u062E\u0644 \u062A\u0643\u0627\u0644\u064A\u0641\u0643 \u0623\u0646\u062A \u0645\u0646 \u0627\u0644\u0635\u0641\u0631\u060C \u0648\u0644\u0646 \u062A\u0624\u062B\u0631 \u0623\u0648 \u062A\u062A\u0623\u062B\u0631 \u0628\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0645\u0635\u062F\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629.</div><div id="cp-program" class="section"><div class="grid four">${m("\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u0644\u064A\u0644\u0629 \u2014 \u0645\u0643\u0629 (SAR)","makkahRate",i.makkahRate)}${m("\u0644\u064A\u0627\u0644\u064A \u0645\u0643\u0629","makkahNights",i.makkahNights,'step="1" max="365"')}${m("\u0627\u0644\u0633\u0631\u064A\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u064A / \u0627\u0644\u0644\u064A\u0644\u0629 (SAR)","extraBed",i.extraBed)}${A("\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0641\u064A \u0627\u0644\u0645\u062F\u064A\u0646\u0629","includeMadinah",i.includeMadinah)}</div><div class="grid three" id="cp-madinah">${m("\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u0644\u064A\u0644\u0629 \u2014 \u0627\u0644\u0645\u062F\u064A\u0646\u0629 (SAR)","madinahRate",i.madinahRate)}${m("\u0644\u064A\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u064A\u0646\u0629","madinahNights",i.madinahNights,'step="1" max="365"')}</div><div class="divider"></div><div class="grid four">${m("\u0627\u0644\u062A\u0623\u0634\u064A\u0631\u0629 \u0644\u0644\u0641\u0631\u062F (USD)","visaUsd",i.visaUsd)}${m("\u0627\u0644\u062A\u0630\u0643\u0631\u0629 \u0644\u0644\u0641\u0631\u062F (LYD)","ticketLyd",i.ticketLyd)}${m("\u0627\u0644\u0646\u0642\u0644 \u0644\u0644\u0641\u0631\u062F (LYD)","transportLyd",i.transportLyd)}${m("\u062A\u0643\u0627\u0644\u064A\u0641 \u0623\u062E\u0631\u0649 \u0644\u0644\u0641\u0631\u062F (LYD)","otherLyd",i.otherLyd)}</div><div class="section"><h3>\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u063A\u0631\u0641</h3><div id="cp-rooms"></div>${l("\uFF0B \u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u063A\u0631\u0641\u0629","cp.room.add")}</div></div><div id="cp-service" class="section"><div class="grid">${w("\u0627\u0633\u0645 \u0627\u0644\u062E\u062F\u0645\u0629","serviceName",e.service?.name||"","text",'required maxlength="200"')}${m("\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0648\u062D\u062F\u0629","serviceCost",e.service?.cost||0)}${y("\u0639\u0645\u0644\u0629 \u0627\u0644\u062A\u0643\u0644\u0641\u0629","serviceCurrency",re,e.service?.currency||"LYD")}${y("\u0639\u0645\u0644\u0629 \u0627\u0644\u0628\u064A\u0639","serviceSaleCurrency",re,e.service?.saleCurrency||"LYD")}${w("\u0648\u062D\u062F\u0629 \u0627\u0644\u0628\u064A\u0639 (\u0645\u062B\u0627\u0644: \u0627\u0644\u0644\u064A\u0644\u0629\u060C \u0627\u0644\u0634\u062E\u0635)","serviceUnit",e.service?.unit||"item")}</div></div><div class="divider"></div><div class="grid four">${m("\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0648\u0627\u062D\u062F \u0628\u0627\u0644\u0631\u064A\u0627\u0644","sarPerUsd",i.sarPerUsd,'min="0.0001" step="0.0001" required')}${m("\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0648\u0627\u062D\u062F \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631","usdToLyd",i.usdToLyd,'min="0.0001" step="0.0001" required')}${y("\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0631\u0628\u062D","profitType",[["percent","\u0646\u0633\u0628\u0629 \u0645\u0646 \u0627\u0644\u062A\u0643\u0644\u0641\u0629 %"],["fixed","\u0645\u0628\u0644\u063A \u062B\u0627\u0628\u062A \u0644\u0644\u0648\u062D\u062F\u0629"]],i.profitType)}${m("\u0642\u064A\u0645\u0629 \u0627\u0644\u0631\u0628\u062D","profitValue",i.profitValue)}</div>${he("\u0645\u0644\u0627\u062D\u0638\u0627\u062A","notes",e.notes)}<div class="section inline">${l("\u0627\u062D\u0633\u0628 \u0627\u0644\u0623\u0633\u0639\u0627\u0631","cp.calculate","","primary")}</div><div id="cp-result" class="result"></div>${j("\u062D\u0641\u0638 \u0627\u0644\u062D\u0633\u0627\u0628")}</form>`;D(e.id?"\u062A\u0639\u062F\u064A\u0644 \u062D\u0633\u0627\u0628 \u0627\u0644\u062A\u0633\u0639\u064A\u0631":"\u062D\u0633\u0627\u0628 \u062A\u0633\u0639\u064A\u0631 \u062C\u062F\u064A\u062F",a,{type:"cp",row:e,rooms:s.editor.rooms}),ke(),ii(),e.result&&K(e.result,"cp-result")}function ii(){let e=d("[name=kind]").value==="program";d("#cp-program").hidden=!e,d("#cp-service").hidden=e,d("#cp-madinah").hidden=!d("[name=includeMadinah]").checked}function ke(){d("#cp-rooms").innerHTML=M(["\u0627\u0633\u0645 \u0627\u0644\u063A\u0631\u0641\u0629","\u0639\u062F\u062F \u0627\u0644\u0623\u0634\u062E\u0627\u0635","\u0623\u0633\u0631\u0651\u0629 \u0625\u0636\u0627\u0641\u064A\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)","\u2014"],s.editor.rooms.map((e,i)=>R([`<input aria-label="\u0627\u0633\u0645 \u0627\u0644\u063A\u0631\u0641\u0629" data-cp-room="${i}" data-field="name" value="${c(e.name)}" required>`,`<input aria-label="\u0639\u062F\u062F \u0627\u0644\u0623\u0634\u062E\u0627\u0635" data-cp-room="${i}" data-field="occupancy" type="number" min="1" max="20" step="1" value="${c(e.occupancy)}">`,`<input aria-label="\u0623\u0633\u0631\u0651\u0629 \u0625\u0636\u0627\u0641\u064A\u0629" data-cp-room="${i}" data-field="extraBeds" type="number" min="0" max="20" step="1" value="${c(e.extraBeds??"")}">`,s.editor.rooms.length>1?l("\u062D\u0630\u0641","cp.room.remove",i,"small"):""])))}function De(){return x("[data-cp-room]").forEach(e=>{let i=s.editor.rooms[Number(e.dataset.cpRoom)];i[e.dataset.field]=e.dataset.field==="name"?e.value:e.value===""?void 0:Number(e.value)}),s.editor.rooms}function ti(){let e=d("#cp-form"),i=Object.fromEntries(new FormData(e)),a=s.editor.row,n={};for(let t of["makkahRate","makkahNights","madinahRate","madinahNights","extraBed","visaUsd","ticketLyd","transportLyd","otherLyd","sarPerUsd","usdToLyd","profitValue"])n[t]=Number(i[t]);return Object.assign(n,{includeMadinah:!!i.includeMadinah,profitType:i.profitType,rounding:0}),{id:a.id,version:a.version,name:i.name,notes:i.notes,kind:i.kind,input:n,rooms:De(),service:{name:i.serviceName,cost:Number(i.serviceCost),currency:i.serviceCurrency,saleCurrency:i.serviceSaleCurrency,unit:i.serviceUnit}}}function we(e={},i){let a=s.boot.pricings||[];D(e.id?"\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0639\u0631\u0636":"\u0625\u0646\u0634\u0627\u0621 \u0639\u0631\u0636",`<form id="offer-form"><div class="grid">${w("\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0636","name",e.name||"","text",'required maxlength="200"')}${y("\u0645\u0635\u062F\u0631 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0645\u062D\u0641\u0648\u0638","pricingId",[["","\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0633\u0639\u064A\u0631"],...a.map(n=>[n.id,n.name])],i||e.pricingId)}${w("\u0635\u0627\u0644\u062D \u062D\u062A\u0649 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)","validUntil",e.validUntil||"","date")}${he("\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0631\u0636 \u0648\u0634\u0631\u0648\u0637\u0647 \u0644\u0644\u0634\u0631\u0643\u0629","description",e.description)}</div><div class="hint section">\u064A\u062D\u0641\u0638 \u0627\u0644\u0639\u0631\u0636 \u0646\u0633\u062E\u0629 \u0645\u0646 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0645\u0635\u062F\u0631. \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u064A\u0639\u064A\u062F\u0647 \u0625\u0644\u0649 \u0645\u0633\u0648\u062F\u0629 \u0644\u0644\u0627\u0639\u062A\u0645\u0627\u062F\u060C \u0648\u062A\u0638\u0644 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629 \u0633\u0627\u0628\u0642\u0627\u064B \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0643\u0645\u0627 \u0647\u064A \u062D\u062A\u0649 \u062A\u0639\u064A\u062F \u0627\u0644\u0646\u0634\u0631.</div>${j("\u062D\u0641\u0638 \u0627\u0644\u0645\u0633\u0648\u062F\u0629")}</form>`,{type:"offer",row:e})}function bi(e){let i=(b()?s.boot.assignments:s.boot.offers).find(a=>a.id===e);D(i.name,`<div class="preview"><p>${c(i.description)}</p><p class="muted">\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629: ${c(i.validUntil||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F\u0629")}</p>${M(b()?["\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u062E\u062F\u0645\u0629","\u0627\u0644\u0623\u0633\u0627\u0633\u064A","\u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0627\u0644\u0645\u0645\u0646\u0648\u062D\u0629","\u0627\u0644\u0635\u0627\u0641\u064A \u0644\u0634\u0631\u0643\u062A\u0643\u0645"]:["\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u062E\u062F\u0645\u0629","\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639"],i.lines.map(a=>R([c(a.label)+"<br><small>"+G(a.unit)+"</small>",f(a.basePrice,a.currency),...b()?[f(a.commission,a.currency),'<span class="money">'+f(a.netPrice,a.currency)+"</span>"]:[]])))}${b()?'<div class="hint section">\u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0638\u0627\u0647\u0631\u0629 \u0648\u0645\u062E\u0635\u0648\u0645\u0629 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629. \u0635\u0627\u0641\u064A \u0627\u0644\u0633\u0639\u0631 \u0647\u0648 \u0623\u0633\u0627\u0633 \u062A\u0633\u0639\u064A\u0631\u062A\u0643 \u0644\u0639\u0645\u064A\u0644\u0643.</div>':""}<div class="form-actions">${b()||L("export")?l("\u0637\u0628\u0627\u0639\u0629 / \u062D\u0641\u0638 PDF","offer.print",e)+l("\u062A\u0635\u062F\u064A\u0631 Excel","offer.export",e):""}${b()&&!i.expired?l("\u0625\u0646\u0634\u0627\u0621 \u062A\u0633\u0639\u064A\u0631\u0629 \u0644\u0639\u0645\u064A\u0644","quote.new",e,"primary"):""}</div></div>`)}function wi(e){let i=s.boot.offers.find(n=>n.id===e),a=(s.boot.companies||[]).filter(n=>n.active);D("\u0646\u0634\u0631 \u0627\u0644\u0639\u0631\u0636 \u0648\u062A\u062E\u0635\u064A\u0635 \u0627\u0644\u0639\u0645\u0648\u0644\u0629",`<form id="publish-form"><h3>${c(i.name)} \u2014 ${c($(i.lines[0]?.currency))}</h3><div class="hint section">\u062D\u062F\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u0629. \u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0647\u0646\u0627 \u0644\u0643\u0644 \u0634\u062E\u0635 \u0641\u064A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C\u060C \u0623\u0648 \u0644\u0643\u0644 \u0648\u062D\u062F\u0629 \u0644\u0644\u062E\u062F\u0645\u0629. \u064A\u0645\u0643\u0646\u0643 \u062A\u0639\u062F\u064A\u0644 \u0639\u0645\u0648\u0644\u0629 \u0643\u0644 \u0628\u0646\u062F \u0644\u0644\u0634\u0631\u0643\u0629.</div><div class="toolbar section">${m("\u0639\u0645\u0648\u0644\u0629 \u0645\u0648\u062D\u062F\u0629","bulkCommission",0)}${l("\u062A\u0637\u0628\u064A\u0642 \u0639\u0644\u0649 \u0627\u0644\u0645\u062D\u062F\u062F","publish.bulk")}${A("\u064A\u0634\u0645\u0644 \u0627\u0644\u0627\u0633\u062A\u062B\u0646\u0627\u0621\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629","replaceSpecial",!1)}</div><div class="check-group">${A("\u062A\u062D\u062F\u064A\u062F \u062C\u0645\u064A\u0639 \u0627\u0644\u0634\u0631\u0643\u0627\u062A","selectAll",!1)}</div>${M(["\u0627\u062E\u062A\u064A\u0627\u0631","\u0627\u0644\u0634\u0631\u0643\u0629","\u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0627\u0644\u0639\u0627\u0645\u0629","\u0627\u0633\u062A\u062B\u0646\u0627\u0621 \u062E\u0627\u0635","\u0639\u0645\u0648\u0644\u0627\u062A \u0627\u0644\u0628\u0646\u0648\u062F"],a.map(n=>{let t=(s.boot.assignments||[]).find(r=>r.offerId===e&&r.companyId===n.id);return R([A("","companySelected",!!t?.active,n.id),"<b>"+c(n.name)+"</b>",`<input type="number" min="0" step="0.001" aria-label="\u0639\u0645\u0648\u0644\u0629 ${c(n.name)}" data-commission="${c(n.id)}" value="${t?.commission||0}">`,A("\u062E\u0627\u0635","special",t?.special,n.id),`<details><summary>\u062A\u0641\u0635\u064A\u0644 ${i.lines.length} \u0628\u0646\u0648\u062F</summary>${i.lines.map(r=>m(c(r.label)+" \u2014 "+G(r.unit),"lineCommission",t?.lines.find(o=>o.key===r.key)?.commission??"",'data-company="'+c(n.id)+'" data-line="'+c(r.key)+'"')).join("")}</details>`])}))}<div class="hint section">\u0625\u0632\u0627\u0644\u0629 \u0627\u062E\u062A\u064A\u0627\u0631 \u0634\u0631\u0643\u0629 \u0645\u0646\u0634\u0648\u0631 \u0644\u0647\u0627 \u0627\u0644\u0639\u0631\u0636 \u0633\u062A\u0648\u0642\u0641 \u0638\u0647\u0648\u0631\u0647 \u0644\u0647\u0627 \u0628\u0639\u062F \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0646\u0634\u0631. \u0644\u0646 \u062A\u064F\u062D\u0630\u0641 \u062A\u0633\u0639\u064A\u0631\u0627\u062A\u0647\u0627 \u0627\u0644\u0633\u0627\u0628\u0642\u0629.</div><div id="publish-review" class="section"></div>${j("\u0645\u0631\u0627\u062C\u0639\u0629 \u0642\u0628\u0644 \u0627\u0644\u0646\u0634\u0631")}</form>`,{type:"publish",row:i})}function Ze(e){let i=s.boot.offers.find(r=>r.id===e),a=(s.boot.assignments||[]).filter(r=>r.offerId===e),n=r=>{let o=(s.boot.companies||[]).find(u=>u.id===r.companyId);return R([c(o?.name||"\u2014"),P(r.active?"\u0645\u0646\u0634\u0648\u0631 \u2014 \u064A\u0638\u0647\u0631 \u0644\u0647\u0627":"\u0645\u0648\u0642\u0648\u0641 \u0645\u0624\u0642\u062A\u0627\u064B",r.active?"ok":"danger"),l(r.active?"\u0625\u064A\u0642\u0627\u0641 \u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0643\u0629":"\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0641\u0639\u064A\u0644","assignment.toggle",r.id,"small"+(r.active?"":" primary"))])},t=a.length?M(["\u0627\u0644\u0634\u0631\u0643\u0629","\u0627\u0644\u062D\u0627\u0644\u0629","\u2014"],a.map(n)):'<div class="empty"><strong>\u0644\u0645 \u064A\u064F\u0646\u0634\u0631 \u0647\u0630\u0627 \u0627\u0644\u0639\u0631\u0636 \u0644\u0623\u064A \u0634\u0631\u0643\u0629 \u0628\u0639\u062F</strong>\u0627\u0633\u062A\u062E\u062F\u0645 \xAB\u0646\u0634\u0631 / \u0639\u0645\u0648\u0644\u0629\xBB \u0623\u0648\u0644\u0627\u064B.</div>';D("\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A \u0644\u0643\u0644 \u0634\u0631\u0643\u0629 \u2014 "+c(i.name),t+'<div class="hint section">\u0627\u0644\u0625\u064A\u0642\u0627\u0641 \u0647\u0646\u0627 \u0633\u0631\u064A\u0639 \u0648\u0644\u0627 \u064A\u063A\u064A\u0651\u0631 \u0623\u064A \u0639\u0645\u0648\u0644\u0629 \u0645\u062D\u0641\u0648\u0638\u0629\u061B \u064A\u062E\u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629 \u0641\u0648\u0631\u0627\u064B \u0648\u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0631\u0627\u062C\u0639 \u0641\u064A \u0623\u064A \u0648\u0642\u062A. \u0644\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0639\u0631\u0636 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0639\u0646 \u0643\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u062F\u0641\u0639\u0629 \u0648\u0627\u062D\u062F\u0629\u060C \u0627\u0633\u062A\u062E\u062F\u0645 \xAB\u0623\u0631\u0634\u0641\u0629\xBB \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0630\u0644\u0643.</div>',{type:"pause",row:i})}function ki(){let e=s.editor.row;return{offerId:e.id,offerVersion:e.version,companies:(s.boot.companies||[]).filter(i=>i.active).flatMap(i=>{let a=(s.boot.assignments||[]).find(r=>r.offerId===e.id&&r.companyId===i.id),n=x("input[name=companySelected]:checked").some(r=>r.value===i.id);if(!a&&!n)return[];let t={};return x("[data-company]").filter(r=>r.dataset.company===i.id).forEach(r=>{r.value!==""&&(t[r.dataset.line]=Number(r.value))}),[{companyId:i.id,version:a?.version||0,active:n,commission:Number(x("[data-commission]").find(r=>r.dataset.commission===i.id).value),special:x("input[name=special]:checked").some(r=>r.value===i.id),lineCommissions:t}]})}}function Di(){let e=d("[name=bulkCommission]").value,i=d("[name=replaceSpecial]").checked;x("input[name=companySelected]:checked").forEach(a=>{x("input[name=special]:checked").some(t=>t.value===a.value)&&!i||(x("[data-commission]").find(t=>t.dataset.commission===a.value).value=e,x("[data-company]").filter(t=>t.dataset.company===a.value).forEach(t=>t.value=""))}),C(),q("\u062A\u0645 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u0645\u0639 \u0645\u0631\u0627\u0639\u0627\u0629 \u0627\u0644\u0627\u0633\u062A\u062B\u0646\u0627\u0621\u0627\u062A.")}function ai(e,i){let a=e.lines.find(n=>n.key===i)||e.lines[0];return{id:"",assignmentId:e.id,key:a.key,source:{...a,assignmentId:e.id,assignmentVersion:e.version,offerName:e.name,validUntil:e.validUntil},quantity:1,nights:1,extras:[],mode:"margin",marginType:"fixed",marginValue:0,sellUnit:a.netPrice}}function Oe(e,i){let a=s.boot.assignments.filter(r=>!r.expired),n=i?s.boot.assignments.find(r=>r.id===i):null,t=e?structuredClone(e.lines):n?[ai(n)]:[];D(e?"\u062A\u0639\u062F\u064A\u0644 \u062A\u0633\u0639\u064A\u0631\u0629 \u0627\u0644\u0634\u0631\u0643\u0629":"\u062A\u0633\u0639\u064A\u0631\u0629 \u0644\u0639\u0645\u064A\u0644\u0643",`<form id="quote-form"><div class="grid">${w("\u0627\u0633\u0645 \u0627\u0644\u062A\u0633\u0639\u064A\u0631\u0629","name",e?.name||n?.name||"","text",'required maxlength="200"')}${w("\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644","customer",e?.customer||"")}${w("\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u062A\u0633\u0639\u064A\u0631\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)","validUntil",e?.validUntil||"","date")}</div><div class="hint section">\u0625\u0636\u0627\u0641\u0627\u062A\u0643 \u0648\u0647\u0627\u0645\u0634 \u0631\u0628\u062D\u0643 \u062E\u0627\u0635\u0629 \u0628\u0634\u0631\u0643\u062A\u0643. \u0646\u0633\u062E\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 \u062A\u0639\u0631\u0636 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629.</div><div id="quote-lines" class="section"></div><div class="toolbar">${y("\u0625\u0636\u0627\u0641\u0629 \u063A\u0631\u0641\u0629 \u0623\u0648 \u062E\u062F\u0645\u0629 \u0645\u0646 \u0639\u0631\u0648\u0636\u0643","newSource",[["","\u0627\u062E\u062A\u0631 \u0627\u0644\u0628\u0646\u062F"],...a.flatMap(r=>r.lines.map(o=>[r.id+"|"+o.key,r.name+" \u2014 "+o.label+" \xB7 "+ne(o.netPrice)+" "+$(o.currency)]))],"")}${l("\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u0646\u062F","quote.add")}</div><div class="check-group">${e?A("\u062A\u062D\u062F\u064A\u062B \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0645\u0635\u062F\u0631 \u0625\u0644\u0649 \u0623\u062D\u062F\u062B \u0639\u0631\u0636 \u0645\u0639 \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0641\u0631\u0642","refreshSources",!1):""}</div>${he("\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u062A\u0638\u0647\u0631 \u0644\u0644\u0639\u0645\u064A\u0644","notes",e?.notes||"")}<div id="quote-total" class="section"></div><div id="quote-review" class="section"></div>${j("\u0645\u0631\u0627\u062C\u0639\u0629 \u0648\u062D\u0633\u0627\u0628 \u0627\u0644\u062A\u0633\u0639\u064A\u0631\u0629")}</form>`,{type:"quote",row:e||{},lines:t}),te()}function te(){d("#quote-lines").innerHTML=s.editor.lines.map((e,i)=>`<section class="line-editor" data-index="${i}"><div class="split"><div><h3>${c(e.source.offerName)} \u2014 ${c(e.source.label)}</h3><div class="source-price">\u0635\u0627\u0641\u064A \u0627\u0644\u0634\u0631\u0627\u0621 ${f(e.source.netPrice,e.source.currency)} ${G(e.source.unit)}</div></div>${l("\u062D\u0630\u0641 \u0627\u0644\u0628\u0646\u062F","quote.remove",String(i),"small danger")}</div><div class="grid four">${m(e.source.unit==="person"?"\u0639\u062F\u062F \u0627\u0644\u0623\u0634\u062E\u0627\u0635":e.source.unit==="roomNight"?"\u0639\u062F\u062F \u0627\u0644\u063A\u0631\u0641":"\u0639\u062F\u062F \u0627\u0644\u062E\u062F\u0645\u0627\u062A","quantity",e.quantity,'min="1" max="10000" step="1" required')}${e.source.unit==="roomNight"?m("\u0639\u062F\u062F \u0627\u0644\u0644\u064A\u0627\u0644\u064A","nights",e.nights,'min="1" max="365" step="1" required'):""}${y("\u0637\u0631\u064A\u0642\u0629 \u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639","mode",[["margin","\u062D\u0633\u0627\u0628 \u0627\u0644\u062A\u0643\u0644\u0641\u0629 \u0645\u0639 \u0627\u0644\u0631\u0628\u062D"],["manual","\u0625\u062F\u062E\u0627\u0644 \u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064A"]],e.mode)}${y("\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0631\u0628\u062D","marginType",[["fixed","\u0645\u0628\u0644\u063A \u0631\u0628\u062D \u0644\u0643\u0644 \u0648\u062D\u062F\u0629"],["percent","\u0646\u0633\u0628\u0629 \u0645\u0646 \u0627\u0644\u062A\u0643\u0644\u0641\u0629 %"]],e.marginType)}${m("\u0642\u064A\u0645\u0629 \u0627\u0644\u0631\u0628\u062D","marginValue",e.marginValue)}${m("\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0644\u0644\u0648\u062D\u062F\u0629","sellUnit",e.sellUnit,"required")}</div><div class="section"><div class="section-title"><h3>\u062A\u0643\u0627\u0644\u064A\u0641 \u0625\u0636\u0627\u0641\u064A\u0629 \u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0647\u0630\u0627 \u0627\u0644\u0628\u0646\u062F (${c($(e.source.currency))})</h3>${l("\uFF0B \u062A\u0643\u0644\u0641\u0629","quote.extra",String(i),"small")}</div><div class="extras">${e.extras.map((a,n)=>extraFields(a,n,e,i)).join("")}</div></div><div class="line-summary section"></div></section>`).join(""),Pe()}function Q(){return x(".line-editor").map(e=>{let i=s.editor.lines[Number(e.dataset.index)],a=n=>e.querySelector('[name="'+n+'"]')?.value;return{...i,quantity:Number(a("quantity")),nights:Number(a("nights")||1),mode:a("mode"),marginType:a("marginType"),marginValue:Number(a("marginValue")),sellUnit:Number(a("sellUnit")),extras:[...e.querySelectorAll(".extra-row")].map(n=>({label:n.querySelector("[data-extra=label]").value,amount:Number(n.querySelector("[data-extra=amount]").value),currency:n.querySelector("[data-extra=currency]").value,rate:Number(n.querySelector("[data-extra=rate]").value)}))}})}function Pe(){if(!d("#quote-form"))return;let e=Q(),i=[];e.forEach((a,n)=>{let t=x(".line-editor")[n];t.querySelector("[name=sellUnit]").disabled=a.mode!=="manual",t.querySelector("[name=marginValue]").disabled=a.mode==="manual",t.querySelector("[name=marginType]").disabled=a.mode==="manual";try{let r=li(a.source,a);i.push(r),t.querySelector(".line-summary").innerHTML=`<div class="split"><small>\u0627\u0644\u0634\u0631\u0627\u0621 ${f(r.purchase,r.currency)} \xB7 \u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062A ${f(r.extraTotal,r.currency)} \xB7 \u0627\u0644\u0631\u0628\u062D ${f(r.profit,r.currency)}</small><strong>${f(r.total,r.currency)}</strong></div>${r.belowCost?'<div class="hint warn section">\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639 \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u062A\u0643\u0644\u0641\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0628\u0646\u062F.</div>':""}`}catch(r){t.querySelector(".line-summary").textContent=r.message}}),d("#quote-total").innerHTML=mi(i).map(a=>`<div class="total-card"><div><small>\u0625\u062C\u0645\u0627\u0644\u064A ${c($(a.currency))}</small><p>\u0627\u0644\u0631\u0628\u062D \u0627\u0644\u0645\u062A\u0648\u0642\u0639 ${f(a.profit,a.currency)}</p></div><strong>${f(a.total,a.currency)}</strong></div>`).join("")}function Si(){let e=Object.fromEntries(new FormData(d("#quote-form")));return{id:s.editor.row.id,version:s.editor.row.version,name:e.name,customer:e.customer,validUntil:e.validUntil,notes:e.notes,refreshSources:!!e.refreshSources,lines:Q()}}function C(){s.pending=null,d("#publish-review")&&(d("#publish-review").innerHTML=""),d("#quote-review")&&(d("#quote-review").innerHTML="")}function Pi(){let e=s.boot.settings;d("#content").innerHTML=Y("\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u0646\u0633\u062E \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629","\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0648\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0635\u0631\u0641 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 \u0648\u0633\u062C\u0644 \u0627\u0644\u0625\u062F\u0627\u0631\u0629.")+`<div class="panel panel-pad"><form id="settings-form"><div class="grid three">${w("\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u0634\u0623\u0629","name",e.name,"text","required")}${m("\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0648\u0627\u062D\u062F \u0628\u0627\u0644\u0631\u064A\u0627\u0644","sarPerUsd",e.sarPerUsd,'min="0.0001" step="0.0001" required')}${m("\u0627\u0644\u062F\u0648\u0644\u0627\u0631 \u0627\u0644\u0648\u0627\u062D\u062F \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631","usdToLyd",e.usdToLyd,'min="0.0001" step="0.0001" required')}</div><div class="form-actions"><button type="submit" class="btn primary">\u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</button></div></form></div><div class="panel panel-pad section"><div class="split"><div><h2>\u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u062E\u0627\u0635\u0629</h2><p class="muted">\u0646\u0633\u062E\u0629 \u064A\u0648\u0645\u064A\u0629 \u0628\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u060C \u0648\u064A\u0645\u0643\u0646\u0643 \u0625\u0646\u0634\u0627\u0621 \u0646\u0633\u062E\u0629 \u0625\u0636\u0627\u0641\u064A\u0629 \u0627\u0644\u0622\u0646.</p></div>${l("\u0625\u0646\u0634\u0627\u0621 \u0646\u0633\u062E\u0629 \u0627\u0644\u0622\u0646","backup.create","","primary")}</div><div class="hint section">\u0627\u0644\u0646\u0633\u062E \u0645\u062D\u0641\u0648\u0638\u0629 \u0641\u064A \u0645\u062C\u0644\u062F\u0643 \u0627\u0644\u062E\u0627\u0635 \u0639\u0644\u0649 Drive. \u0627\u0644\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u062A\u064F\u0646\u0634\u0626 \u0646\u0633\u062E\u0629 \u0645\u0646\u0641\u0635\u0644\u0629 \u0644\u0644\u0641\u062D\u0635 \u0642\u0628\u0644 \u062A\u0628\u062F\u064A\u0644 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u0645\u0644\u061B \u0627\u0644\u062E\u0637\u0648\u0627\u062A \u0641\u064A \u062F\u0644\u064A\u0644 \u0627\u0644\u0625\u0639\u062F\u0627\u062F.</div><div id="backup-result" class="section"></div></div><div class="panel section"><div class="toolbar"><h3>\u0622\u062E\u0631 \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0625\u062F\u0627\u0631\u0629</h3></div>${M(["\u0627\u0644\u062A\u0627\u0631\u064A\u062E","\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645","\u0627\u0644\u0625\u062C\u0631\u0627\u0621"],(s.boot.audit||[]).map(i=>R([c(i.at.replace("T"," ").slice(0,19)),c(i.actorName),c(Li(i.action))])))}</div>`}function Li(e){return{"definition.save":"\u062D\u0641\u0638 \u062A\u0639\u0631\u064A\u0641","definition.import":"\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u062A\u0639\u0631\u064A\u0641\u0627\u062A","company.save":"\u062A\u0639\u062F\u064A\u0644 \u0634\u0631\u0643\u0629","user.save":"\u062A\u0639\u062F\u064A\u0644 \u062D\u0633\u0627\u0628","pricing.save":"\u062D\u0641\u0638 \u062A\u0633\u0639\u064A\u0631","offer.save":"\u062D\u0641\u0638 \u0639\u0631\u0636","offer.approve":"\u0627\u0639\u062A\u0645\u0627\u062F \u0639\u0631\u0636","offer.archive":"\u0623\u0631\u0634\u0641\u0629 \u0639\u0631\u0636","publish.commit":"\u0646\u0634\u0631 \u0623\u0633\u0639\u0627\u0631 \u0648\u0639\u0645\u0648\u0644\u0627\u062A","settings.save":"\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","account.password":"\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631","company.pricing.save":"\u062D\u0641\u0638 \u062A\u0633\u0639\u064A\u0631 \u062E\u0627\u0635 \u0628\u0627\u0644\u0634\u0631\u0643\u0629","company.pricing.archive":"\u0623\u0631\u0634\u0641\u0629 \u062A\u0633\u0639\u064A\u0631 \u062E\u0627\u0635 \u0628\u0627\u0644\u0634\u0631\u0643\u0629","assignment.toggle":"\u0625\u064A\u0642\u0627\u0641/\u062A\u0641\u0639\u064A\u0644 \u0634\u0631\u0643\u0629 \u0639\u0644\u0649 \u0639\u0631\u0636"}[e]||e}function Ue(e){let i=e.kind==="quote";return`<h1>${c(e.company||s.boot.settings.name)}</h1><h2>${c(e.name)}</h2><div class="print-meta"><p>${i?"\u0627\u0644\u0639\u0645\u064A\u0644: "+c(e.customer||"\u2014"):""}</p><p>\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629: ${c(e.validUntil||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F\u0629")}</p><p class="break-text">${c(e.description||"")}</p></div>${M(i?["\u0627\u0644\u0628\u0646\u062F","\u0627\u0644\u0639\u062F\u062F","\u0627\u0644\u0644\u064A\u0627\u0644\u064A","\u0628\u064A\u0639 \u0627\u0644\u0648\u062D\u062F\u0629","\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"]:["\u0627\u0644\u063A\u0631\u0641\u0629 / \u0627\u0644\u062E\u062F\u0645\u0629","\u0627\u0644\u0648\u062D\u062F\u0629","\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064A",...e.lines.some(a=>a.netPrice!=null)?["\u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0627\u0644\u0645\u0645\u0646\u0648\u062D\u0629","\u0627\u0644\u0635\u0627\u0641\u064A \u0644\u0634\u0631\u0643\u062A\u0643\u0645"]:[]],e.lines.map(a=>R(i?[c(a.offerName)+" \u2014 "+c(a.label),a.quantity,a.nights,f(a.sellUnit,a.currency),f(a.total,a.currency)]:[c(a.label),G(a.unit),f(a.basePrice,a.currency),...a.netPrice!=null?[f(a.commission,a.currency),f(a.netPrice,a.currency)]:[]])))}${i?'<div class="print-total">\u0625\u062C\u0645\u0627\u0644\u064A \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631: '+se(e)+"</div>":""}<p class="break-text section">${c(e.notes||"")}</p>`}async function Ce(e,i){let a=await v("export."+e,{id:i});d("#print-root").innerHTML=Ue(a),D("\u0645\u0639\u0627\u064A\u0646\u0629 \u0646\u0633\u062E\u0629 "+(e==="quote"?"\u0627\u0644\u0639\u0645\u064A\u0644":"\u0627\u0644\u0639\u0631\u0636"),'<div class="preview">'+Ue(a)+'</div><div class="form-actions">'+l("\u0637\u0628\u0627\u0639\u0629 / \u062D\u0641\u0638 PDF","print.current","","primary")+"</div>")}async function ae(e,i,a,n="\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"){let t=await F(),r=new t.Workbook;r.creator="RIHLA";let o=r.addWorksheet(n,{views:[{rightToLeft:!0}],pageSetup:{orientation:"landscape",fitToPage:!0,fitToWidth:1,fitToHeight:0,paperSize:9}});o.addRow(i),a.forEach(h=>o.addRow(h)),o.getRow(1).font={bold:!0,color:{argb:"FFFFFFFF"}},o.getRow(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:"FF142A43"}},o.getRow(1).height=30,o.columns.forEach(h=>h.width=25),o.eachRow(h=>{h.alignment={vertical:"middle",wrapText:!0,readingOrder:"rtl"},h.eachCell(k=>{k.border={bottom:{style:"thin",color:{argb:"FFDCE4EB"}}},typeof k.value=="number"&&(k.numFmt="#,##0.000")})}),o.pageSetup.printTitlesRow="1:1";let u=new Blob([await r.xlsx.writeBuffer()],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),S=URL.createObjectURL(u),p=e.replace(/[<>:"/\\|?*]/g,"_")+".xlsx";ae.previousUrl&&URL.revokeObjectURL(ae.previousUrl),ae.previousUrl=S,D("\u0645\u0644\u0641 Excel \u062C\u0627\u0647\u0632",`<p>${c(p)}</p><div class="form-actions"><a class="btn primary" id="excel-download" href="${S}" download="${c(p)}">\u062A\u0646\u0632\u064A\u0644 \u0645\u0644\u0641 Excel</a></div>`)}async function Ee(e,i){let a=await v("export."+e,{id:i}),n=ui(a);await ae(a.name,n.headers,n.rows)}var Se=["type","name","occupancy","extraBeds","cityId","rate","cost","currency","saleCurrency","unit","active"];async function Ai(){await ae("RIHLA_Definitions_Template",Se,[],"Definitions"),q("\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0644\u0644\u0646\u0648\u0639: room \u0623\u0648 city \u0623\u0648 hotel \u0623\u0648 service. \u0631\u0627\u062C\u0639 \u062F\u0644\u064A\u0644 \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0642\u0628\u0644 \u0627\u0644\u062A\u0639\u0628\u0626\u0629.")}function xi(){D("\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u0627\u062A \u0645\u0646 Excel",`<form id="import-form"><div class="hint">\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0642\u0627\u0644\u0628 \u0627\u0644\u0645\u062D\u062F\u062F \u062F\u0648\u0646 \u062A\u063A\u064A\u064A\u0631 \u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u0639\u0645\u062F\u0629. \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u064A\u0636\u064A\u0641 \u062A\u0639\u0631\u064A\u0641\u0627\u062A \u062C\u062F\u064A\u062F\u0629\u060C \u0648\u064A\u0645\u0646\u0639 \u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0646\u0648\u0639 \u0648\u0627\u0644\u0627\u0633\u0645. \u0627\u0644\u062D\u062F 200 \u0635\u0641 \u0641\u064A \u0627\u0644\u062F\u0641\u0639\u0629.</div><label class="section">\u0645\u0644\u0641 Excel<input name="file" type="file" accept=".xlsx" required></label><div id="import-review" class="section"></div>${j("\u0642\u0631\u0627\u0621\u0629 \u0648\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0645\u0644\u0641")}</form>`,{type:"import"})}async function Mi(e){if(e.size>2*1024*1024)throw Error("\u0627\u0644\u0645\u0644\u0641 \u0623\u0643\u0628\u0631 \u0645\u0646 2 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A");let i=await F(),a=new i.Workbook;await a.xlsx.load(await e.arrayBuffer());let n=a.getWorksheet("Definitions");if(!n)throw Error("\u0648\u0631\u0642\u0629 Definitions \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629");if(Se.some((r,o)=>n.getRow(1).getCell(o+1).value!==r))throw Error("\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u0639\u0645\u062F\u0629 \u0644\u0627 \u062A\u0637\u0627\u0628\u0642 \u0627\u0644\u0642\u0627\u0644\u0628");if(n.rowCount>201)throw Error("\u0627\u0644\u062D\u062F 200 \u0635\u0641");let t=[];if(n.eachRow((r,o)=>{if(o===1)return;let u={};Se.forEach((S,p)=>{let h=r.getCell(p+1).value;if(h&&typeof h=="object")throw Error("\u0627\u0644\u0645\u0644\u0641 \u064A\u062C\u0628 \u0623\u0646 \u064A\u062D\u062A\u0648\u064A \u0642\u064A\u0645\u0627\u064B \u0645\u0628\u0627\u0634\u0631\u0629 \u062F\u0648\u0646 \u0635\u064A\u063A \u0623\u0648 \u0631\u0648\u0627\u0628\u0637");u[S]=h??""}),!(!u.name&&!u.type)&&(u.active=![!1,0,"false","0"].includes(u.active),t.push(u))}),!t.length)throw Error("\u0627\u0644\u0645\u0644\u0641 \u0644\u0627 \u064A\u062D\u062A\u0648\u064A \u0628\u064A\u0627\u0646\u0627\u062A");return t}async function Ri(e,i,a){let n=s.boot;switch(e){case"dialog.close":oe();break;case"menu":d(".sidebar").classList.toggle("open");break;case"navigate":s.tab=i,s.filter="",s.kind="all",Qe();break;case"refresh":await z(),q("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");break;case"logout":await v("logout"),fe(""),oe(),d("#print-root").innerHTML="",ce();break;case"account.open":D("\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",`<form id="password"><div class="grid">${Fe()}</div>${j("\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")}</form>`);break;case"definition.new":Ye();break;case"definition.edit":Ye(n.definitions.find(t=>t.id===i));break;case"company.new":ze();break;case"company.edit":ze(n.companies.find(t=>t.id===i));break;case"user.new":Ge();break;case"user.edit":Ge(n.users.find(t=>t.id===i));break;case"pricing.new":be();break;case"pricing.edit":be(n.pricings.find(t=>t.id===i));break;case"pricing.copy":{let t=structuredClone(n.pricings.find(r=>r.id===i));t.sourcePricingId=t.id,t.sourcePricingVersion=t.version,delete t.id,delete t.version,t.name+=" \u2014 \u0646\u0633\u062E\u0629",be(t);break}case"pricing.view":{let t=n.pricings.find(r=>r.id===i);D(t.name,'<div id="pricing-result"></div><p class="break-text section">'+c(t.notes)+"</p>"),K(t.result);break}case"pricing.calculate":{let t=await v("pricing.calculate",ei());K(t.result);break}case"cp.new":Te();break;case"cp.edit":Te(structuredClone((n.companyPricings||[]).find(t=>t.id===i)));break;case"cp.view":{let t=(n.companyPricings||[]).find(r=>r.id===i);D(t.name,'<div id="cp-result"></div><p class="break-text section">'+c(t.notes)+"</p>"),K(t.result,"cp-result");break}case"cp.room.add":s.editor.rooms=De(),s.editor.rooms.push({id:crypto.randomUUID(),name:"",occupancy:2}),ke();break;case"cp.room.remove":s.editor.rooms=De(),s.editor.rooms.splice(Number(i),1),ke();break;case"cp.calculate":{let t=await v("company.pricing.calculate",ti());K(t.result,"cp-result");break}case"cp.archive":{let t=(n.companyPricings||[]).find(r=>r.id===i);await v("company.pricing.archive",{id:i,version:t.version,archived:!t.archived}),await z(),q(t.archived?"\u062A\u0645\u062A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628":"\u062A\u0645\u062A \u0623\u0631\u0634\u0641\u0629 \u0627\u0644\u062D\u0633\u0627\u0628");break}case"offer.new":we();break;case"offer.fromPricing":we({},i);break;case"offer.edit":we(n.offers.find(t=>t.id===i));break;case"offer.view":bi(i);break;case"offer.approve":{let t=n.offers.find(r=>r.id===i);D("\u0627\u0639\u062A\u0645\u0627\u062F \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0639\u0631\u0636",`<p>\u0627\u0639\u062A\u0645\u0627\u062F \xAB${c(t.name)}\xBB \u0628\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u062A\u0627\u0644\u064A\u0629:</p>${M(["\u0627\u0644\u0628\u0646\u062F","\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639"],t.lines.map(r=>R([c(r.label),f(r.basePrice,r.currency)])))}<div class="form-actions">${l("\u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0623\u0633\u0639\u0627\u0631","offer.approveConfirm",i,"primary")}</div>`,{type:"approve",row:t});break}case"offer.approveConfirm":await v("offer.approve",{id:i,version:s.editor.row.version}),await N("\u062A\u0645 \u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0639\u0631\u0636");break;case"offer.archive":{let t=n.offers.find(r=>r.id===i);D(t.archived?"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0639\u0631\u0636":"\u0623\u0631\u0634\u0641\u0629 \u0627\u0644\u0639\u0631\u0636",`<p>${t.archived?"\u0633\u064A\u0639\u0648\u062F \u0627\u0644\u0639\u0631\u0636 \u0644\u0644\u0638\u0647\u0648\u0631 \u062D\u0633\u0628 \u062A\u062E\u0635\u064A\u0635\u0627\u062A\u0647 \u0627\u0644\u0633\u0627\u0628\u0642\u0629.":"\u0633\u064A\u062A\u0648\u0642\u0641 \u0638\u0647\u0648\u0631 \u0627\u0644\u0639\u0631\u0636 \u0644\u0644\u0634\u0631\u0643\u0627\u062A\u060C \u0648\u062A\u0628\u0642\u0649 \u0627\u0644\u062A\u0633\u0639\u064A\u0631\u0627\u062A \u0627\u0644\u0633\u0627\u0628\u0642\u0629 \u0645\u062D\u0641\u0648\u0638\u0629."}</p><div class="form-actions">${l("\u062A\u0623\u0643\u064A\u062F","offer.archiveConfirm",i,"primary")}</div>`,{type:"archive",row:t});break}case"offer.archiveConfirm":await v("offer.archive",{id:i,version:s.editor.row.version,archived:!s.editor.row.archived}),await N("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0631\u0636");break;case"publish.open":wi(i);break;case"pause.open":Ze(i);break;case"assignment.toggle":{let t=(s.boot.assignments||[]).find(r=>r.id===i);await v("assignment.toggle",{id:i,version:t.version,active:!t.active}),await z(),Ze(s.editor.row.id),q(t.active?"\u062A\u0645 \u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0639\u0631\u0636 \u0644\u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0643\u0629":"\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0639\u0631\u0636 \u0644\u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0643\u0629");break}case"publish.bulk":Di();break;case"publish.commit":if(!s.pending)throw Error("\u0631\u0627\u062C\u0639 \u0627\u0644\u0646\u0634\u0631 \u0623\u0648\u0644\u0627\u064B");await v("publish.commit",s.pending),await N("\u062A\u0645 \u0646\u0634\u0631 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629");break;case"quote.new":Oe(null,i);break;case"quote.edit":Oe(n.quotes.find(t=>t.id===i));break;case"quote.add":{let[t,r]=d("[name=newSource]").value.split("|");if(!t)throw Error("\u0627\u062E\u062A\u0631 \u0627\u0644\u0628\u0646\u062F");s.editor.lines=Q(),s.editor.lines.push(ai(n.assignments.find(o=>o.id===t),r)),te(),C();break}case"quote.remove":s.editor.lines=Q(),s.editor.lines.splice(Number(i),1),te(),C();break;case"quote.extra":s.editor.lines=Q(),s.editor.lines[Number(i)].extras.push({label:"",amount:0}),te(),C();break;case"quote.extraRemove":{let[t,r]=i.split(":").map(Number);s.editor.lines=Q(),s.editor.lines[t].extras.splice(r,1),te(),C();break}case"quote.commit":if(!s.pending)throw Error("\u0631\u0627\u062C\u0639 \u0627\u0644\u062A\u0633\u0639\u064A\u0631\u0629 \u0623\u0648\u0644\u0627\u064B");await v("quote.save",s.pending),await N("\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u062A\u0633\u0639\u064A\u0631\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0634\u0631\u0643\u062A\u0643");break;case"quote.archive":{let t=n.quotes.find(r=>r.id===i);await v("quote.archive",{id:i,version:t.version,archived:!t.archived}),await z(),q("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0633\u0639\u064A\u0631\u0629");break}case"offer.print":await Ce("offer",i);break;case"quote.print":await Ce("quote",i);break;case"offer.export":await Ee("offer",i);break;case"quote.export":await Ee("quote",i);break;case"print.current":window.print();break;case"import.template":await Ai();break;case"import.open":xi();break;case"import.commit":if(!s.pending)throw Error("\u0631\u0627\u062C\u0639 \u0627\u0644\u0645\u0644\u0641 \u0623\u0648\u0644\u0627\u064B");await v("definition.import",{rows:s.pending}),await N("\u062A\u0645 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u0627\u062A");break;case"backup.create":{let t=await v("backup.create");d("#backup-result").textContent="\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0646\u0633\u062E\u0629: "+t.name;break}}}async function N(e){oe(),await z(),q(e)}async function qi(e){let i=new FormData(e),a=Object.fromEntries(i),n=s.editor?.row||{};switch(e.id){case"login":{let t=await v("login",a);fe(t.token),await z();break}case"password":if(a.password!==a.confirmPassword)throw Error("\u0643\u0644\u0645\u062A\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u062A\u064A\u0646");await v("account.password",{oldPassword:a.oldPassword,password:a.password}),fe(""),oe(),d("#print-root").innerHTML="",ce(),q("\u062A\u0645 \u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631. \u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0643\u0644\u0645\u062A\u0643 \u0627\u0644\u062C\u062F\u064A\u062F\u0629.");break;case"definition-form":await v("definition.save",{...a,type:n.id?n.type:a.type,id:n.id,version:n.version,active:!!a.active}),await N("\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u0631\u064A\u0641");break;case"company-form":await v("company.save",{...a,id:n.id,version:n.version,active:!!a.active}),await N("\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0634\u0631\u0643\u0629");break;case"user-form":await v("user.save",{...a,id:n.id,version:n.version,active:!!a.active,permissions:i.getAll("permission")}),await N("\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u062D\u0633\u0627\u0628");break;case"pricing-form":await v("pricing.save",ei()),await N("\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u062A\u0633\u0639\u064A\u0631");break;case"cp-form":await v("company.pricing.save",ti()),await N("\u062A\u0645 \u062D\u0641\u0638 \u062D\u0633\u0627\u0628 \u0627\u0644\u062A\u0633\u0639\u064A\u0631 \u0627\u0644\u062E\u0627\u0635 \u0628\u0634\u0631\u0643\u062A\u0643");break;case"offer-form":{let t=s.boot.pricings.find(r=>r.id===a.pricingId);if(!t)throw Error("\u0627\u062E\u062A\u0631 \u0645\u0635\u062F\u0631 \u0627\u0644\u0623\u0633\u0639\u0627\u0631");await v("offer.save",{...a,id:n.id,version:n.version,pricingVersion:t.version}),await N("\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0639\u0631\u0636 \u0643\u0645\u0633\u0648\u062F\u0629");break}case"publish-form":{let t=ki(),r=await v("publish.preview",t);s.pending={...t,previewHash:r.previewHash},d("#publish-review").innerHTML=`<h3>\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0646\u0634\u0631 \u0644\u0643\u0644 \u0634\u0631\u0643\u0629</h3>${r.currencyChanges?.length?'<div class="hint warn">\u062A\u063A\u064A\u0631\u062A \u0639\u0645\u0644\u0629 \u0628\u0646\u0648\u062F \u0645\u0646\u0634\u0648\u0631\u0629 \u0633\u0627\u0628\u0642\u0627\u064B \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629: '+r.currencyChanges.map(c).join("\u060C ")+". \u0631\u0627\u062C\u0639 \u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A \u0628\u0639\u0645\u0644\u0629 \u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0642\u0628\u0644 \u0627\u0644\u062A\u0623\u0643\u064A\u062F\u061B \u0644\u0627 \u064A\u062C\u0631\u064A \u062A\u062D\u0648\u064A\u0644\u0647\u0627 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B.</div>":""}${M(["\u0627\u0644\u0634\u0631\u0643\u0629","\u0627\u0644\u0628\u0646\u062F","\u0627\u0644\u0623\u0633\u0627\u0633\u064A","\u0627\u0644\u0639\u0645\u0648\u0644\u0629","\u0627\u0644\u0635\u0627\u0641\u064A","\u0627\u0644\u0625\u062C\u0631\u0627\u0621"],r.assignments.flatMap(o=>o.lines.map(u=>R([c(o.companyName),c(u.label),f(u.basePrice,u.currency),f(u.commission,u.currency),f(u.netPrice,u.currency),P(o.active?"\u0646\u0634\u0631":"\u0625\u064A\u0642\u0627\u0641",o.active?"ok":"danger")]))))}<div class="form-actions">${l("\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0646\u0634\u0631","publish.commit","","primary")}</div>`,d("#publish-review").scrollIntoView({behavior:"smooth",block:"start"});break}case"quote-form":{let t=Si(),r=await v("quote.preview",t);s.pending={...t,previewHash:r.previewHash},d("#quote-review").innerHTML=`<h3>\u0645\u0631\u0627\u062C\u0639\u0629 \u0642\u0628\u0644 \u0627\u0644\u062D\u0641\u0638</h3>${M(["\u0627\u0644\u0628\u0646\u062F","\u0627\u0644\u0634\u0631\u0627\u0621","\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062A","\u0627\u0644\u0631\u0628\u062D \u0627\u0644\u0641\u0639\u0644\u064A","\u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064A"],r.quote.lines.map(o=>R([c(o.label),f(o.purchase,o.currency),f(o.extraTotal,o.currency),f(o.profit,o.currency),f(o.total,o.currency)])))}<div class="hint section">${r.previousTotals?.length?"\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0627\u062A \u0627\u0644\u0633\u0627\u0628\u0642\u0629: "+se({totals:r.previousTotals})+" \xB7 ":""}\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0627\u062A \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0628\u062D\u0633\u0628 \u0627\u0644\u0639\u0645\u0644\u0629: <strong>${se(r.quote)}</strong>${t.refreshSources?"<br>\u0633\u064A\u062A\u0645 \u0627\u0639\u062A\u0645\u0627\u062F \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0645\u0635\u062F\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0639\u0646\u062F \u0627\u0644\u062A\u0623\u0643\u064A\u062F.":""}</div><div class="form-actions">${l("\u062A\u0623\u0643\u064A\u062F \u062D\u0641\u0638 \u0627\u0644\u062A\u0633\u0639\u064A\u0631\u0629","quote.commit","","primary")}</div>`,d("#quote-review").scrollIntoView({behavior:"smooth",block:"start"});break}case"settings-form":await v("settings.save",{...a,version:s.boot.settings.version}),await z(),q("\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A");break;case"import-form":{let t=await Mi(i.get("file"));s.pending=t,d("#import-review").innerHTML=M(["\u0627\u0644\u0646\u0648\u0639","\u0627\u0644\u0627\u0633\u0645","\u0627\u0644\u0639\u062F\u062F / \u0627\u0644\u062A\u0643\u0644\u0641\u0629"],t.map(r=>R([c(r.type),c(r.name),c(r.type==="room"?r.occupancy:r.cost)])))+'<div class="form-actions">'+l("\u062A\u0623\u0643\u064A\u062F \u0627\u0633\u062A\u064A\u0631\u0627\u062F "+t.length+" \u0635\u0641\u0627\u064B","import.commit","","primary")+"</div>";break}}}function Le(e){let i=d("#dialog").open?d("#dialog-error"):d("#login-error");i?i.innerHTML='<div class="hint error">'+c(e.message||e)+"</div>":q(e.message||String(e))}document.addEventListener("click",async e=>{let i=e.target.closest("[data-action]");if(!(!i||i.disabled)){i.disabled=!0;try{d("#dialog-error")&&(d("#dialog-error").innerHTML=""),await Ri(i.dataset.action,i.dataset.id,i)}catch(a){Le(a)}finally{i.disabled=!1}}});document.addEventListener("submit",async e=>{e.preventDefault();let i=e.target,a=i.querySelector("[type=submit]");if(!a?.disabled){a&&(a.disabled=!0);try{d("#dialog-error")&&(d("#dialog-error").innerHTML=""),d("#login-error")&&(d("#login-error").innerHTML=""),await qi(i)}catch(n){Le(n)}finally{a&&(a.disabled=!1)}}});document.addEventListener("input",e=>{if(e.target.id==="search"){s.filter=e.target.value,ve();return}(e.target.closest("#publish-form")||e.target.closest("#quote-form"))&&C(),e.target.dataset.commission&&x("[data-company]").filter(i=>i.dataset.company===e.target.dataset.commission).forEach(i=>i.value=""),e.target.closest("#quote-form")&&Pe()});document.addEventListener("change",e=>{if(e.target.name==="saleCurrency"&&d("#pricing-form")&&pe(),e.target.name==="serviceId"&&d("#pricing-form")){let i=s.boot.definitions.find(a=>a.id===e.target.value);i&&(d("[name=saleCurrency]").value=i.saleCurrency||"LYD"),pe()}if(e.target.dataset.extra==="currency"){let i=e.target.closest(".extra-row"),a=e.target.closest(".line-editor"),n=s.editor.lines[Number(a.dataset.index)].source.currency||"LYD",t=i.querySelector("[data-extra=rate]");t.value=e.target.value===n?"1":"",t.disabled=e.target.value===n}if(e.target.id==="sort-order"&&(s.sort=e.target.value,ve()),e.target.id==="kind-filter"&&(s.kind=e.target.value,ve()),e.target.name==="type"&&d("#definition-form")&&$e(),e.target.name==="role"&&_e(),(e.target.name==="kind"||e.target.name==="includeMadinah")&&d("#pricing-form")&&pe(),(e.target.name==="kind"||e.target.name==="includeMadinah")&&d("#cp-form")&&ii(),e.target.name==="selectAll"&&x("[name=companySelected]").forEach(i=>i.checked=e.target.checked),e.target.name==="makkahHotelId"||e.target.name==="madinahHotelId"){let i=s.boot.definitions.find(a=>a.id===e.target.value);i&&(d("[name="+e.target.name.replace("HotelId","Rate")+"]").value=i.rate)}(e.target.closest("#publish-form")||e.target.closest("#quote-form"))&&C(),e.target.closest("#quote-form")&&Pe()});d("#dialog").addEventListener("cancel",()=>{s.editor=null,s.pending=null});window.addEventListener("offline",()=>q("\u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0645\u0646\u0642\u0637\u0639. \u062A\u0628\u0642\u0649 \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0634\u0627\u0634\u0629 \u062D\u062A\u0649 \u064A\u0639\u0648\u062F \u0627\u0644\u0627\u062A\u0635\u0627\u0644."));if(document.modelContext?.registerTool){let e=new AbortController;Promise.resolve(document.modelContext.registerTool({name:"search_my_company_offers",title:"\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0639\u0631\u0648\u0636 \u0634\u0631\u0643\u062A\u064A",description:"Read published offers assigned to the currently signed-in company. Returns its own approved selling prices and commissions only.",inputSchema:{type:"object",properties:{query:{type:"string",maxLength:200}},additionalProperties:!1},annotations:{readOnlyHint:!0,untrustedContentHint:!0},async execute(i){if(!i||typeof i!="object"||Object.keys(i).some(n=>n!=="query")||i.query!=null&&typeof i.query!="string"||String(i.query||"").length>200)throw Error("\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");let a=await v("bootstrap");if(a.user.role!=="company")throw Error("\u0647\u0630\u0647 \u0627\u0644\u0623\u062F\u0627\u0629 \u0645\u062A\u0627\u062D\u0629 \u0644\u062D\u0633\u0627\u0628 \u0634\u0631\u0643\u0629");return a.assignments.filter(n=>n.name.includes(i.query||"")).map(n=>({id:n.id,name:n.name,expired:n.expired,lines:n.lines.map(t=>({label:t.label,unit:t.unit,currency:t.currency,basePrice:t.basePrice,commission:t.commission,netPrice:t.netPrice}))}))}},{signal:e.signal})).catch(()=>{}),window.addEventListener("pagehide",()=>e.abort(),{once:!0})}/* Runs inside the existing application closure. Keeps API, calculations and action IDs. */
const proOriginalList = ve, proOriginalPage = gi, proOriginalPrint = Ue;
const proFilters = {company:'',status:'all',validity:'all',definition:'all'};
let proMenu = null, proMenuTrigger = null, proMenuSource = null;
const proNormalize = value => String(value || '').normalize('NFKC').replace(/[\u064B-\u065F\u0670]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').toLowerCase().trim();
const proToday = () => new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Tripoli',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const proExpired = row => row.expired === true || !!row.validUntil && row.validUntil < proToday();
function proCompanies(){return !b() ? s.boot.companies || [] : [];}
function proCanCompanyFilter(){return !b() && (s.tab==='users' || s.tab==='offers' && Array.isArray(s.boot.assignments)) && proCompanies().length>0;}
function proCompanyName(id){return proCompanies().find(row=>row.id===id)?.name || '';}
function proAssignments(offerId){return (s.boot.assignments || []).filter(row=>row.offerId===offerId);}
function proReset(){s.filter='';s.kind='all';s.sort='newest';Object.assign(proFilters,{company:'',status:'all',validity:'all',definition:'all'});}
function proStatusOptions(){
  if(s.tab==='offers')return b()?[['all','كل الحالات'],['available','متاح'],['expired','منتهي']]:[['all','كل الحالات'],['approved','معتمد'],['draft','مسودة'],['archived','مؤرشف']];
  if(['definitions','companies','users'].includes(s.tab))return [['all','كل الحالات'],['active','فعال'],['inactive','موقوف']];
  if(['quotes','companyPricing'].includes(s.tab))return [['all','كل الحالات'],['active','نشط'],['archived','مؤرشف']];
  return [['all','كل الأنواع'],['template','قوالب'],['pricing','تسعيرات']];
}
function proOptions(options,value){return options.map(([id,label])=>`<option value="${c(id)}" ${id===value?'selected':''}>${c(label)}</option>`).join('');}
X = function(rows){
  const query=proNormalize(s.filter),status=proFilters.status;
  return rows.filter(row=>{
    const text=[row.name,row.username,row.customer,row.contact,...(row.lines||[]).map(line=>line.label)];
    if(s.tab==='users')text.push(proCompanyName(row.companyId));
    if(s.tab==='offers'&&!b())text.push(...proAssignments(row.id).map(a=>a.companyName));
    if(query&&!proNormalize(text.join(' ')).includes(query))return false;
    if(s.kind!=='all'&&row.kind&&row.kind!==s.kind)return false;
    if(proCanCompanyFilter()&&proFilters.company){
      if(s.tab==='users'&&row.companyId!==proFilters.company)return false;
      if(s.tab==='offers'&&!proAssignments(row.id).some(a=>a.companyId===proFilters.company))return false;
    }
    if(s.tab==='definitions'&&proFilters.definition!=='all'&&row.type!==proFilters.definition)return false;
    if(s.tab==='offers'){
      if(status==='archived'&&!row.archived)return false;
      if(['approved','draft'].includes(status)&&(row.archived||row.status!==status))return false;
      if(status==='available'&&(row.archived||proExpired(row)))return false;
      if(status==='expired'&&!proExpired(row))return false;
      if(proFilters.validity==='valid'&&proExpired(row)||proFilters.validity==='expired'&&!proExpired(row))return false;
    }else if(['companies','definitions','users'].includes(s.tab)){
      if(status==='active'&&row.active===false||status==='inactive'&&row.active!==false)return false;
    }else if(['quotes','companyPricing'].includes(s.tab)){
      if(status==='active'&&row.archived||status==='archived'&&!row.archived)return false;
    }else if(s.tab==='pricing'){
      if(status==='template'&&!row.isTemplate||status==='pricing'&&row.isTemplate)return false;
    }
    return true;
  }).sort((a,b)=>s.sort==='name'?String(a.name||'').localeCompare(String(b.name||''),'ar'):String(b.updatedAt||'').localeCompare(String(a.updatedAt||'')));
};
function proRoomLabel(line){return `<div class="room-label"><span class="room-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 18V6m18 12V10H3m0 5h18M7 10V7h5v3M3 18v3m18-3v3"/></svg></span><div>${c(line.label)}<small>${c(G(line.unit))}</small></div></div>`;}
function proOfferActions(row){
  let html=l('عرض التفاصيل','offer.view',row.id,'small');
  if(b()){
    if(!proExpired(row))html+=l('تسعير لعميل','quote.new',row.id,'small primary');
  }else{
    if(L('editPricing'))html+=l('تعديل العرض','offer.edit',row.id,'small');
    if(L('approve')&&row.status!=='approved'&&!row.archived)html+=l('اعتماد الأسعار','offer.approve',row.id,'small');
    if(L('publish')&&row.status==='approved'&&!row.archived)html+=l('نشر / عمولة','publish.open',row.id,'small');
    if(L('publish')&&proAssignments(row.id).length)html+=l('إيقاف / تفعيل للشركات','pause.open',row.id,'small');
  }
  if(b()||L('export'))html+=l('طباعة / حفظ PDF','offer.print',row.id,'small')+l('تصدير Excel','offer.export',row.id,'small');
  if(!b()&&L('publish'))html+=l(row.archived?'استعادة العرض':'أرشفة العرض','offer.archive',row.id,'small');
  return V(html);
}
function proOfferCard(row){
  const assigned=!b()&&proFilters.company?proAssignments(row.id).find(a=>a.companyId===proFilters.company):null;
  const lines=assigned?.lines||row.lines||[],net=b()||!!assigned;
  const status=row.archived?P('مؤرشف'):b()?P(proExpired(row)?'منتهي':'متاح',proExpired(row)?'danger':'ok'):P(row.status==='approved'?'معتمد':'مسودة',row.status==='approved'?'ok':'');
  const prices=M(net?['الغرفة / الخدمة','السعر الأساسي','العمولة','الصافي للشركة']:['الغرفة / الخدمة','سعر البيع'],lines.map(line=>R([proRoomLabel(line),...(net?[f(line.basePrice,line.currency),f(line.commission,line.currency),`<span class="price-value">${f(line.netPrice,line.currency)}</span>`]:[`<span class="price-value">${f(line.basePrice,line.currency)}</span>`])])));
  return `<article class="offer-card"><div class="offer-card-head"><div><span class="offer-kind">${row.kind==='program'?'برنامج سياحي':'خدمة مستقلة'}</span><h2>${c(row.name)}</h2><div class="offer-meta"><span>${lines.length} ${row.kind==='program'?'أنواع غرف':'بنود'}</span><span>الصلاحية: <bdi>${c(row.validUntil||'غير محددة')}</bdi></span></div></div><div>${status}${!b()&&proExpired(row)?' '+P('منتهي','danger'):''}</div></div>${assigned?`<div class="company-context">أسعار ${c(assigned.companyName||proCompanyName(assigned.companyId))} · ${assigned.active?'التخصيص مفعّل':'التخصيص موقوف'}${assigned.offerVersion!==row.version?' · تخصيص من إصدار سابق؛ راجع النشر لتحديثه':''}</div>`:''}<div class="${net?'price-net':'price-only'}">${prices}</div>${row.description?`<details class="offer-description"><summary>تفاصيل البرنامج والشروط</summary><p>${c(row.description)}</p></details>`:''}<div class="offer-card-actions"><small>${net?'الصافي بعد خصم العمولة مرة واحدة':'كل الأسعار ظاهرة حسب نوع الغرفة والوحدة'}</small>${proOfferActions(row)}</div></article>`;
}
ve = function(){
  proCloseMenu();
  if(s.tab==='offers'){
    const rows=X(b()?s.boot.assignments||[]:s.boot.offers||[]);
    d('#result-count').textContent=rows.length+' عرض مطابق';
    d('#list-results').innerHTML=(proFilters.company&&proCanCompanyFilter()?`<div class="filter-note">عرض التخصيصات الخاصة بـ ${c(proCompanyName(proFilters.company))}. قد تختلف أسعار التخصيص عن أحدث إصدار للعرض.</div>`:'')+(rows.length?`<div class="offer-grid">${rows.map(proOfferCard).join('')}</div>`:'<div class="empty"><strong>لا توجد عروض مطابقة</strong>غيّر البحث أو امسح الفلاتر لعرض النتائج المتاحة.</div>');
  }else proOriginalList();
  proUpgradeActions();
};
gi = function(){
  proOriginalPage();
  d('#sort-order')?.remove();
  const sidebar=d('.sidebar'),menu=d('[data-action="menu"]');
  if(sidebar){sidebar.id='pro-sidebar';if(!sidebar.querySelector('.drawer-close'))sidebar.insertAdjacentHTML('afterbegin','<button type="button" class="drawer-close" data-pro="drawer-close" aria-label="إغلاق القائمة">×</button>');}
  if(menu){menu.setAttribute('aria-label','فتح القائمة الرئيسية');menu.setAttribute('aria-controls','pro-sidebar');menu.setAttribute('aria-expanded','false');}
};
K = function(result,id='pricing-result'){
  const rows=result.results||[],program=rows.length>0&&rows.every(row=>row.unit==='person');
  const table=M([program?'الغرفة / الإشغال':'الخدمة / الوحدة',program?'تكلفة الفرد':'تكلفة الوحدة','الربح الفعلي',program?'سعر البيع للفرد':'سعر بيع الوحدة'],rows.map(row=>R([proRoomLabel(row)+(row.count?`<small>${ne(row.count)} أشخاص بالغرفة</small>`:''),f(row.baseCost,row.currency),`<span class="${row.profit<0?'profit-negative':'profit-positive'}">${f(row.profit,row.currency)}</span><small class="profit-rate">${row.baseCost>0?ne(row.profit/row.baseCost*100)+'% من التكلفة':'النسبة غير متاحة عند تكلفة صفر'}</small>`,`<span class="money">${f(row.sell,row.currency)}</span>${row.sell<row.baseCost?'<small class="profit-negative">تنبيه: البيع أقل من التكلفة</small>':''}`])));
  const detailed=rows.filter(row=>Number.isFinite(row.accommodationLYD));
  d('#'+id).innerHTML=`<div class="calculation-head"><div><h3>${program?'أسعار البرنامج · الدينار الليبي':'نتيجة تسعير الخدمة'}</h3><p>${program?'الأسعار التالية للفرد، وليست إجمالي الغرفة.':'كل سعر حسب وحدة الخدمة وعملة البيع.'}</p></div>${P(program?'LYD':'نتيجة الاحتساب','gold')}</div><div class="calculation-table">${table}</div>${detailed.length?`<details class="cost-breakdown"><summary>تفصيل تكلفة الفرد حسب الغرفة</summary>${M(['الغرفة','الإقامة LYD','التأشيرة LYD','الخدمات LYD','التذكرة والنقل وأخرى LYD'],detailed.map(row=>R([c(row.label),f(row.accommodationLYD,'LYD'),f(row.visaLYD,'LYD'),f(row.serviceCostLYD,'LYD'),f(row.baseCost-row.accommodationLYD-row.visaLYD-row.serviceCostLYD,'LYD')])))}<small>تفاصيل مشتقة من نتيجة الحساب الحالية؛ دون تغيير أسعار الصرف أو التقريب.</small></details>`:''}`;
};
Ue = function(data){return `<img class="print-brand" src="${Ke}" alt="الأولمبي لخدمات الحج والعمرة">`+proOriginalPrint(data);};
function proUpgradeActions(){
  d('#list-results')?.querySelectorAll('.actions').forEach(group=>{
    if(group.querySelector('.actions-trigger'))return;
    const buttons=[...group.children].filter(el=>el.tagName==='BUTTON');
    if(!buttons.length)return;
    const source=document.createElement('div');source.className='action-source';source.hidden=true;
    buttons.forEach(button=>{if(/archive$/.test(button.dataset.action||'')&&!/استعادة/.test(button.textContent))button.classList.add('danger-action');source.appendChild(button);});
    const trigger=document.createElement('button');trigger.type='button';trigger.className='btn small actions-trigger';trigger.dataset.pro='actions';trigger.setAttribute('aria-haspopup','menu');trigger.setAttribute('aria-expanded','false');trigger.innerHTML='<span>الإجراءات</span><span aria-hidden="true">⌄</span>';
    group.append(trigger,source);
  });
}
function proCloseMenu(focus=false){
  if(!proMenu)return;
  [...proMenu.children].forEach(button=>{button.removeAttribute('role');proMenuSource.appendChild(button);});
  proMenu.remove();proMenu=null;proMenuTrigger?.setAttribute('aria-expanded','false');
  if(focus&&proMenuTrigger?.isConnected)proMenuTrigger.focus();
  proMenuTrigger=null;proMenuSource=null;
}
function proOpenMenu(trigger){
  if(proMenuTrigger===trigger){proCloseMenu(true);return;}
  proCloseMenu();proMenuTrigger=trigger;proMenuSource=trigger.parentElement.querySelector('.action-source');
  proMenu=document.createElement('div');proMenu.className='pro-menu';proMenu.id='pro-actions-menu';proMenu.setAttribute('role','menu');proMenu.setAttribute('aria-label','إجراءات العنصر');
  [...proMenuSource.children].forEach(button=>{button.setAttribute('role','menuitem');proMenu.appendChild(button);});
  (d('#dialog').open?d('#dialog'):document.body).appendChild(proMenu);
  trigger.setAttribute('aria-expanded','true');trigger.setAttribute('aria-controls','pro-actions-menu');
  const box=trigger.getBoundingClientRect(),width=proMenu.offsetWidth,height=proMenu.offsetHeight;
  const top=box.bottom+height+8<innerHeight?box.bottom+6:Math.max(12,box.top-height-6);
  proMenu.style.top=top+'px';proMenu.style.left=Math.max(12,Math.min(innerWidth-width-12,box.right-width))+'px';
  proMenu.querySelector('button')?.focus();
}
function proDrawer(open){
  const sidebar=d('.sidebar'),workspace=d('.workspace');if(!sidebar)return;
  sidebar.classList.toggle('open',open);document.body.classList.toggle('drawer-open',open);
  let backdrop=d('.drawer-backdrop');if(!backdrop){backdrop=document.createElement('button');backdrop.className='drawer-backdrop';backdrop.setAttribute('aria-label','إغلاق القائمة');backdrop.dataset.pro='drawer-close';document.body.appendChild(backdrop);}backdrop.hidden=!open;
  if(workspace)workspace.inert=open;
  d('[data-action="menu"]')?.setAttribute('aria-expanded',String(open));
  if(open)sidebar.querySelector('.drawer-close')?.focus();else d('[data-action="menu"]')?.focus();
}
document.addEventListener('click',event=>{
  const own=event.target.closest('[data-pro]'),action=event.target.closest('[data-action]');
  if(own){event.preventDefault();event.stopImmediatePropagation();switch(own.dataset.pro){
    case'actions':proOpenMenu(own);break;
    case'filters':{const panel=d('#pro-filter-panel');if(!panel)break;const open=panel.hidden;panel.hidden=!open;d('.filter-toggle')?.setAttribute('aria-expanded',String(open));if(open)panel.querySelector('button,select')?.focus();else d('.filter-toggle')?.focus();break;}
    case'reset':proReset();gi();break;
    case'drawer-close':proDrawer(false);break;
    default:proHandleAction(own);break;
  }return;}
  if(action?.dataset.action==='menu'){event.preventDefault();event.stopImmediatePropagation();proDrawer(!d('.sidebar').classList.contains('open'));return;}
  if(action?.dataset.action==='navigate'){proReset();proDrawer(false);}
  if(proMenu&&!proMenu.contains(event.target))proCloseMenu();
  else if(proMenu&&action)setTimeout(()=>proCloseMenu(),0);
},true);
document.addEventListener('input',event=>{
  if(event.target.id==='pro-company-search'){
    const query=proNormalize(event.target.value),select=d('#pro-company');
    const rows=proCompanies().filter(row=>proNormalize(row.name).includes(query));
    select.innerHTML=proOptions([['','كل الشركات'],...rows.map(row=>[row.id,row.name])],proFilters.company);
    const exact=rows.filter(row=>proNormalize(row.name)===query);
    if(exact.length===1){proFilters.company=exact[0].id;select.value=proFilters.company;ve();}
    else{proFilters.company='';select.value='';ve();}
  }
  if(event.target.closest('#pricing-form,#cp-form')&&!event.target.closest('.cost-breakdown')){
    const result=d('#pricing-result')||d('#cp-result');if(result?.children.length&&!result.querySelector('.pro-stale'))result.insertAdjacentHTML('afterbegin','<div class="hint warn pro-stale">تغيّرت المدخلات. اضغط «احسب الأسعار» لتحديث هذه النتائج.</div>');
  }
});
document.addEventListener('change',event=>{
  const key=event.target.dataset&&event.target.dataset.proFilter;
  if(key){proSetFilter(key,event.target.value);proRefreshFilters();}
});
document.addEventListener('keydown',event=>{
  if(proMenu){
    const items=[...proMenu.querySelectorAll('button:not(:disabled)')],index=items.indexOf(document.activeElement);
    if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();proCloseMenu(true);return;}
    if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?items.length-1:(index+(event.key==='ArrowDown'?1:-1)+items.length)%items.length;items[next]?.focus();return;}
    if(event.key==='Tab'){proCloseMenu(true);return;}
  }
  if(document.body.classList.contains('drawer-open')){
    if(event.key==='Escape'){event.preventDefault();proDrawer(false);return;}
    if(event.key==='Tab'){const nodes=[...d('.sidebar').querySelectorAll('button')].filter(el=>el.offsetParent!==null),first=nodes[0],last=nodes.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}
  }
},true);
window.addEventListener('resize',()=>{proCloseMenu();if(innerWidth>760&&document.body.classList.contains('drawer-open'))proDrawer(false);});
document.addEventListener('scroll',event=>{if(proMenu&&!proMenu.contains(event.target))proCloseMenu();},true);

/* ===== Release 2 ===== Trips, view switch, live pricing workspace, quote builder, faster sign-in.
   Calculations, action names and API contracts are untouched; the server stays authoritative. */
const {calculateProgram:proCalcProgram,calculateService:proCalcService}=Be();
const proOriginalApi=v,proOriginalBootstrap=z,proOriginalShell=Qe,proOriginalAction=Ri,proOriginalSubmit=qi;
const proOriginalDefDialog=Ye,proOriginalDefFields=$e,proOriginalPricing=be,proOriginalCompanyPricing=Te,proOriginalQuote=Oe,proOriginalLines=te;
let proPrefetchedBoot=null,proLastQuotePreview=null;
proFilters.trip='';
const proView={offers:sessionStorage.getItem('rihla_view')||''};
const proNightPresets=[3,7,10,11,12,14];

/* ---- faster sign-in and sign-out ---- */
let proLastMeta=null;
/* The bundle keeps only `data` from each response, so the timing block is picked up here. */
if(typeof window!=='undefined'&&typeof window.fetch==='function'){
  const proBaseFetch=window.fetch.bind(window);
  window.fetch=async function(...args){
    const response=await proBaseFetch(...args);
    try{
      const readJson=response.json.bind(response);
      response.json=async()=>{
        const body=await readJson();
        if(body&&body.meta)proLastMeta=body.meta;
        return body;
      };
    }catch(e){}
    return response;
  };
}
function proObserveApi(action,data){
  if(action==='login'&&data&&data.boot)proPrefetchedBoot=data.boot;
  if(action==='quote.preview')proLastQuotePreview=data;
  return data;
}
v=async function(action,payload={},requestId){
  return proObserveApi(action,await proOriginalApi(action,payload,requestId));
};
z=async function(){
  const ready=proPrefetchedBoot;proPrefetchedBoot=null;
  if(!ready)return proOriginalBootstrap();
  s.boot=ready;
  if(s.boot.mustChange){vi();return;}
  Qe();
};
Qe=function(){
  if(b()&&s.boot?.company?.allowPricing===false&&s.tab==='companyPricing')s.tab='offers';
  proOriginalShell();
  if(b()&&s.boot?.company?.allowPricing===false)d('.nav button[data-id="companyPricing"]')?.remove();
};
/* The drawer state lives on <body>, not inside #app, so replacing #app alone used to leave the
   backdrop and the scroll lock sitting on top of the login screen. Every route back to the login
   screen tears that state down first. */
function proTeardownChrome(){
  proCloseMenu();
  document.body.classList.remove('drawer-open');
  d('.drawer-backdrop')?.remove();
  d('.sidebar')?.classList.remove('open');
  const workspace=d('.workspace');if(workspace)workspace.inert=false;
  document.body.style.removeProperty('overflow');
}
function proToLogin(){proTeardownChrome();fe('');oe();d('#print-root').innerHTML='';ce();}
/* bootstrap now ships pricings without their inputs, results and snapshots, and no audit trail
   at all. Both are fetched the moment a screen actually needs them. */
const proOriginalSettings=Pi;
let proAuditLoading=false;
Pi=function(){
  proOriginalSettings();
  if(Array.isArray(s.boot.audit)||proAuditLoading)return;
  proAuditLoading=true;
  const host=[...x('#content .panel.section')].pop();
  if(host)host.insertAdjacentHTML('beforeend','<p class="hint section" id="pro-audit-loading">يُحمَّل سجل الإجراءات…</p>');
  v('audit.list').then(data=>{
    s.boot.audit=data.audit||[];
    if(s.tab==='settings')Pi();
  }).catch(()=>{
    d('#pro-audit-loading')&&(d('#pro-audit-loading').textContent='تعذر تحميل سجل الإجراءات. حدّث الصفحة للمحاولة من جديد.');
  }).finally(()=>{proAuditLoading=false;});
};
async function proFullPricing(id){
  const row=(s.boot.pricings||[]).find(x=>x.id===id);
  if(row&&!row.summary)return row;
  const full=await v('pricing.get',{id});
  s.boot.pricings=(s.boot.pricings||[]).map(x=>x.id===id?full:x);
  return full;
}
Ri=async function(action,id,el){
  // Hydrate the record in place first, then let the original handler run unchanged.
  if(['pricing.edit','pricing.copy','pricing.view'].includes(action))await proFullPricing(id);
  if(action==='logout'){
    const pending=v('logout');
    proToLogin();
    pending.catch(()=>{});
    return;
  }
  return proOriginalAction(action,id,el);
};
/* Session expiry reaches the login screen through its own path inside the bundle, so the same
   teardown runs whenever the login screen is rendered, however it was reached. */
const proOriginalLoginScreen=ce;
ce=function(){proTeardownChrome();return proOriginalLoginScreen();};

/* ---- trips ---- */
function proTripDefs(){return b()?[]:(s.boot?.definitions||[]).filter(row=>row.type==='trip');}
function proActiveTrips(current){return proTripDefs().filter(row=>row.active!==false||row.id===current);}
function proTripNames(){
  const rows=b()?s.boot?.assignments||[]:s.boot?.offers||[];
  const names=new Set(rows.map(row=>row.tripName).filter(Boolean));
  proTripDefs().filter(row=>row.active!==false).forEach(row=>names.add(row.name));
  return [...names].sort((a,x)=>a.localeCompare(x,'ar'));
}
function proTripOf(row){
  if(row.tripName)return row.tripName;
  const pricing=(s.boot?.pricings||[]).find(p=>p.id===row.pricingId);
  return pricing?.tripName||'';
}
Ye=function(row={type:'room',active:true,occupancy:1}){
  proOriginalDefDialog(row);
  const select=d('[name=type]');
  if(select&&!select.querySelector('option[value="trip"]'))select.insertAdjacentHTML('beforeend','<option value="trip">رحلة</option>');
  if(select&&row.type)select.value=row.type;
  $e(row);
  if(row.id)select.disabled=true;
};
$e=function(row={}){
  proOriginalDefFields(row);
  if(d('[name=type]')?.value!=='trip')return;
  d('#definition-fields').innerHTML='<div class="grid">'+m('المدة بالليالي (اختياري)','nights',row.nights??'','max="365" step="1"')+he('ملاحظات الرحلة','notes',row.notes||'')+'</div>';
};

/* ---- toolbar ---- */
function proFilterDefs(){
  const defs=[];
  const status=proStatusOptions();
  if(status.length>1)defs.push({key:'status',label:'الحالة',chips:true,options:status,value:proFilters.status,empty:'all'});
  if(s.tab==='offers')defs.push({key:'kind',label:'النوع',chips:true,options:[['all','الكل'],['program','برامج'],['service','خدمات']],value:s.kind,empty:'all'});
  if(proShowTripFilter())defs.push({key:'trip',label:'الرحلة',options:[['','كل الرحلات'],...proTripNames().map(name=>[name,name]),['__none','بلا رحلة']],value:proFilters.trip,empty:''});
  if(proCanCompanyFilter())defs.push({key:'company',label:'الشركة',options:[['','كل الشركات'],...proCompanies().map(row=>[row.id,row.name])],value:proFilters.company,empty:''});
  if(s.tab==='offers')defs.push({key:'validity',label:'الصلاحية',options:[['all','جميع المدد'],['valid','ساري أو غير محدد'],['expired','منتهي']],value:proFilters.validity,empty:'all'});
  if(s.tab==='definitions')defs.push({key:'definition',label:'التعريف',options:[['all','كل التعريفات'],['trip','الرحلات'],['room','الغرف'],['hotel','الفنادق'],['city','المدن'],['service','الخدمات']],value:proFilters.definition,empty:'all'});
  defs.push({key:'sort',label:'الترتيب',options:[['newest','الأحدث أولاً'],['name','الاسم أبجدياً']],value:s.sort||'newest',empty:'newest'});
  return defs;
}
function proFilterValue(key){
  if(key==='kind')return s.kind;
  if(key==='sort')return s.sort||'newest';
  return proFilters[key];
}
function proSetFilter(key,value){
  if(key==='kind')s.kind=value;
  else if(key==='sort')s.sort=value;
  else proFilters[key]=value;
}
function proActiveFilters(){
  return proFilterDefs().filter(def=>String(proFilterValue(def.key))!==String(def.empty)).map(def=>({
    key:def.key,label:def.label,
    text:(def.options.find(([id])=>String(id)===String(proFilterValue(def.key)))||[,proFilterValue(def.key)])[1],
    empty:def.empty
  }));
}
function proActiveFilterCount(){return proActiveFilters().length;}
function proShowTripFilter(){return ['offers','pricing'].includes(s.tab);}
function proViewMode(){
  if(s.tab!=='offers')return 'cards';
  if(proView.offers)return proView.offers;
  return proNarrow()?'cards':'table';
}
function proFilterPanel(){
  return `<div class="filter-panel" id="pro-filter-panel" hidden><div class="filter-panel-head"><b>الفلاتر</b><button type="button" class="btn small" data-pro="filters" aria-label="إغلاق الفلاتر">إغلاق</button></div><div class="filter-panel-body">${proFilterDefs().map(def=>def.chips
    ?`<div class="filter-group"><span class="filter-group-label">${c(def.label)}</span><div class="chips" role="group" aria-label="${c(def.label)}">${def.options.map(([id,label])=>`<button type="button" class="chip" data-pro="chip" data-field="${c(def.key)}" data-value="${c(id)}" aria-pressed="${String(id)===String(proFilterValue(def.key))}">${c(label)}</button>`).join('')}</div></div>`
    :`<label class="filter-group">${c(def.label)}<select data-pro-filter="${c(def.key)}" aria-label="${c(def.label)}">${proOptions(def.options,proFilterValue(def.key))}</select></label>`).join('')}</div><div class="filter-panel-foot">${proActiveFilterCount()?'<button type="button" class="btn" data-pro="reset">مسح الكل</button>':''}<button type="button" class="btn primary" data-pro="filters">عرض النتائج</button></div></div>`;
}
function proActiveChips(){
  const active=proActiveFilters();
  if(!active.length)return '';
  return `<div class="active-filters">${active.map(item=>`<button type="button" class="active-chip" data-pro="unset" data-field="${c(item.key)}" data-value="${c(item.empty)}"><span>${c(item.text)}</span><span aria-hidden="true">✕</span><span class="sr-only">إزالة فلتر ${c(item.label)}</span></button>`).join('')}<button type="button" class="filter-clear" data-pro="reset">مسح الكل</button></div>`;
}
U=function(){
  const count=proActiveFilterCount();
  const view=s.tab==='offers'?`<div class="view-switch" role="group" aria-label="طريقة العرض"><button type="button" data-pro="view" data-value="table" aria-pressed="${proViewMode()==='table'}">جدول</button><button type="button" data-pro="view" data-value="cards" aria-pressed="${proViewMode()==='cards'}">بطاقات</button></div>`:'';
  return `<div class="toolbar"><div class="toolbar-main"><label class="search-field">بحث<input type="search" id="search" aria-label="البحث في النتائج" placeholder="اسم العرض، الغرفة أو الشركة…" value="${c(s.filter)}"></label>${view}<button type="button" class="btn filter-toggle" aria-expanded="false" aria-controls="pro-filter-panel" data-pro="filters">الفلاتر${count?`<span class="filter-count">${count}</span>`:''}</button></div>${proFilterPanel()}</div><div class="result-summary"><span id="result-count" role="status" aria-live="polite"></span><span id="pro-value-switch"></span></div><div id="pro-active-filters">${proActiveChips()}</div><div id="list-results"></div>`;
};
/* Re-render the list but keep the panel open, so several filters can be set in one pass. */
function proRefreshFilters(){
  const open=d('#pro-filter-panel')&&!d('#pro-filter-panel').hidden;
  gi();
  const panel=d('#pro-filter-panel');
  if(open&&panel){panel.hidden=false;d('.filter-toggle')?.setAttribute('aria-expanded','true');}
}
const proBaseReset=proReset;
proReset=function(){proBaseReset();proFilters.trip='';};

/* ---- offers ---- */
function proOfferLines(row){
  const assigned=!b()&&proFilters.company?proAssignments(row.id).find(a=>a.companyId===proFilters.company):null;
  return {assigned,lines:assigned?.lines||row.lines||[],net:b()||!!assigned};
}
function proValueMode(net){
  if(!net)return 'basePrice';
  const stored=sessionStorage.getItem('rihla_value');
  return ['basePrice','commission','netPrice'].includes(stored)?stored:'netPrice';
}
function proValueLabel(mode){return {basePrice:'السعر الأساسي',commission:'العمولة',netPrice:'الصافي'}[mode];}
function proOfferStatus(row){
  if(row.archived)return P('مؤرشف');
  if(b())return P(proExpired(row)?'منتهي':'متاح',proExpired(row)?'danger':'ok');
  return P(row.status==='approved'?'معتمد':'مسودة',row.status==='approved'?'ok':'');
}
function proTripBadge(row){
  const trip=proTripOf(row);
  return trip?`<span class="offer-trip">${c(trip)}</span>`:'';
}
function proMinPrice(lines,mode){
  const values=lines.map(line=>line[mode]).filter(Number.isFinite);
  return values.length?Math.min(...values):0;
}
function proOfferCard(row){
  const {assigned,lines,net}=proOfferLines(row);
  const mode=proValueMode(net);
  const tiles=lines.map(line=>`<div class="price-tile"><b>${c(line.label)}</b><span class="num">${ne(line[mode]??line.basePrice)}</span><small>${c($(line.currency))} · ${c(G(line.unit))}</small></div>`).join('');
  const detail=M(net?['الغرفة / الخدمة','السعر الأساسي','العمولة','الصافي للشركة']:['الغرفة / الخدمة','سعر البيع'],lines.map(line=>R([proRoomLabel(line),...(net?[f(line.basePrice,line.currency),f(line.commission,line.currency),`<span class="price-value">${f(line.netPrice,line.currency)}</span>`]:[`<span class="price-value">${f(line.basePrice,line.currency)}</span>`])])));
  return `<article class="offer-card"><div class="offer-card-head"><div><span class="offer-kind">${row.kind==='program'?'برنامج سياحي':'خدمة مستقلة'}</span><h2>${c(row.name)}</h2><div class="offer-meta">${proTripBadge(row)}<span>${lines.length} ${row.kind==='program'?'أنواع غرف':'بنود'}</span><span>الصلاحية: <bdi>${c(row.validUntil||'غير محددة')}</bdi></span></div></div><div>${proOfferStatus(row)}</div></div>${assigned?`<div class="company-context">أسعار ${c(assigned.companyName||proCompanyName(assigned.companyId))} · ${assigned.active?'التخصيص مفعّل':'التخصيص موقوف'}${assigned.offerVersion!==row.version?' · تخصيص من إصدار سابق؛ راجع النشر لتحديثه':''}</div>`:''}<div class="offer-from"><small>${proValueLabel(mode)} يبدأ من</small><span class="price-value">${f(proMinPrice(lines,mode),lines[0]?.currency)}</span></div><div class="price-tiles">${tiles}</div><details class="details-toggle"><summary>كل الأسعار بالتفصيل</summary>${detail}</details>${row.description?`<details class="offer-description"><summary>تفاصيل البرنامج والشروط</summary><p>${c(row.description)}</p></details>`:''}<div class="offer-card-actions"><small>${net?'الصافي بعد خصم العمولة مرة واحدة':'كل الأسعار حسب نوع الغرفة والوحدة'}</small>${proOfferActions(row)}</div></article>`;
}
function proRoomColumns(rows){
  const seen=new Map();
  rows.forEach(row=>proOfferLines(row).lines.forEach(line=>{if(!seen.has(line.label))seen.set(line.label,line.count||99);}));
  return [...seen.entries()].sort((a,x)=>a[1]-x[1]||a[0].localeCompare(x[0],'ar')).map(entry=>entry[0]);
}
function proCompareSection(rows,programs){
  if(!rows.length)return '';
  const net=rows.some(row=>proOfferLines(row).net);
  const mode=proValueMode(net);
  const columns=programs?proRoomColumns(rows):[];
  const showTrip=rows.some(row=>proTripOf(row));
  // The currency belongs in the header once, not repeated in every cell.
  const currency=$(((rows[0]&&proOfferLines(rows[0]).lines[0])||{}).currency||'LYD');
  const columnHead=label=>label+' · '+currency;
  const headers=['العرض',...(showTrip?['الرحلة']:[]),...(programs?columns.map(columnHead):['البنود','يبدأ من · '+currency]),'الصلاحية','الحالة','الإجراءات'];
  // Narrow containers fold the trip and validity columns away rather than scrolling sideways.
  const optional=[];
  if(showTrip)optional.push(1);
  optional.push(headers.length-3);
  const body=rows.map(row=>{
    const {lines}=proOfferLines(row);
    const cells=[`<span class="table-title">${c(row.name)}</span><small>${lines.length} ${programs?'أنواع غرف':'بنود'}</small>`];
    if(showTrip)cells.push(c(proTripOf(row)||'—'));
    if(programs)columns.forEach(label=>{
      const line=lines.find(x=>x.label===label);
      cells.push(line?`<span class="num">${ne(line[mode]??line.basePrice)}</span>`:'<span class="empty-cell">—</span>');
    });
    else cells.push(String(lines.length),`<span class="num">${ne(proMinPrice(lines,mode))}</span>`);
    cells.push(c(row.validUntil||'غير محددة'),proOfferStatus(row),proOfferActions(row));
    let index=0;
    const html=R(cells).replace(/<td>/g,()=>{
      const classes=[];
      const first=showTrip?2:1;
      if(programs&&index>=first&&index<first+columns.length)classes.push('room-cell');
      if(optional.includes(index))classes.push('col-optional');
      index++;return classes.length?'<td class="'+classes.join(' ')+'">':'<td>';
    });
    return row.archived?html.replace('<tr>','<tr class="archived-row">'):html;
  }).join('');
  let headIndex=0;
  const table=M(headers,[]).replace('<tbody></tbody>','<tbody>'+body+'</tbody>').replace('class="table-wrap"','class="table-wrap compare-wrap"').replace('<table>','<table class="compare-table">').replace(/<th>/g,()=>{
    const cls=optional.includes(headIndex)?' class="col-optional"':'';
    headIndex++;return '<th'+cls+'>';
  });
  const hint='<p class="scroll-hint">مرّر الجدول أفقياً لرؤية باقي الأعمدة · اسم العرض يبقى ثابتاً</p>';
  return (programs?'<div class="compare-group">البرامج · سعر الفرد حسب نوع الغرفة</div>':'<div class="compare-group">الخدمات المستقلة</div>')+hint+table;
}
function proValueSwitch(rows){
  if(!rows.some(row=>proOfferLines(row).net))return '';
  const mode=proValueMode(true);
  return `<span class="value-switch" role="group" aria-label="القيمة المعروضة">${[['basePrice','أساسي'],['commission','عمولة'],['netPrice','صافي']].map(([id,label])=>`<button type="button" data-pro="value" data-value="${id}" aria-pressed="${mode===id}">${label}</button>`).join('')}</span>`;
}
function proDefinitionRows(rows){
  const label={room:'غرفة',city:'مدينة',hotel:'فندق',service:'خدمة',trip:'رحلة'};
  const detail=row=>{
    if(row.type==='room')return row.occupancy+' أشخاص'+(row.extraBeds!=null?' · '+row.extraBeds+' أسرّة إضافية':'');
    if(row.type==='service')return ne(row.cost)+' '+c(row.currency)+' · '+G(row.unit);
    if(row.type==='hotel')return ne(row.rate)+' SAR / ليلة';
    if(row.type==='trip')return row.nights!=null?row.nights+' ليالٍ':'المدة غير محددة';
    return '—';
  };
  return M(['الاسم','النوع','التفاصيل','الحالة','الإجراءات'],rows.map(row=>R([
    `<b>${c(row.name)}</b>${row.type==='trip'&&row.notes?`<small>${c(row.notes)}</small>`:''}`,
    c(label[row.type]||row.type),c(detail(row)),
    P(row.active?'فعال':'موقوف',row.active?'ok':''),
    L('editDefinitions')?V(l('تعديل','definition.edit',row.id,'small')):'—'
  ])));
}
ve=function(){
  proCloseMenu();
  if(s.tab==='offers'){
    const rows=X(b()?s.boot.assignments||[]:s.boot.offers||[]);
    d('#result-count').textContent=rows.length+' عرض مطابق';
    const valueSwitch=d('#pro-value-switch');if(valueSwitch)valueSwitch.innerHTML=proValueSwitch(rows);
    const note=proFilters.company&&proCanCompanyFilter()?`<div class="filter-note">عرض التخصيصات الخاصة بـ ${c(proCompanyName(proFilters.company))}. قد تختلف أسعار التخصيص عن أحدث إصدار للعرض.</div>`:'';
    if(!rows.length){d('#list-results').innerHTML=note+'<div class="empty"><strong>لا توجد عروض مطابقة</strong>غيّر البحث أو امسح الفلاتر لعرض النتائج المتاحة.</div>';proUpgradeActions();return;}
    if(proViewMode()==='cards')d('#list-results').innerHTML=note+`<div class="offer-grid">${rows.map(proOfferCard).join('')}</div>`;
    else{
      d('#list-results').innerHTML=note+proCompareSection(rows.filter(row=>row.kind==='program'),true)+proCompareSection(rows.filter(row=>row.kind!=='program'),false);
      x('.compare-wrap').forEach(wrap=>proObserveWidth(wrap,width=>wrap.classList.toggle('is-wide',width>=760)));
    }
  }else if(s.tab==='definitions'){
    const rows=X(s.boot.definitions||[]);
    d('#result-count').textContent=rows.length+' تعريف';
    d('#list-results').innerHTML=rows.length?proDefinitionRows(rows):'<div class="empty"><strong>لا توجد تعريفات مطابقة</strong>ابدأ بإضافة تعريف أو غيّر البحث.</div>';
  }else proOriginalList();
  proUpgradeActions();
};
const proBaseFilter=X;
X=function(rows){
  const filtered=proBaseFilter(rows);
  if(!proFilters.trip)return filtered;
  if(s.tab==='offers')return filtered.filter(row=>proFilters.trip==='__none'?!proTripOf(row):proTripOf(row)===proFilters.trip);
  if(s.tab==='pricing')return filtered.filter(row=>proFilters.trip==='__none'?!row.tripName:row.tripName===proFilters.trip);
  return filtered;
};

/* ---- pricing workspace: split panel on desktop, steps on mobile, live figures on both ---- */
function proNarrow(){return innerWidth<=760;}
function proSnapshotDefs(){return [...new Map([...(s.boot?.definitions||[]),...(s.editor?.row?.definitionsSnapshot||[])].map(row=>[row.id,row])).values()];}
function proLivePricing(){
  const payload=ei(),defs=proSnapshotDefs();
  payload.input=proMadinahFromNights(payload.input);
  if(payload.kind==='program'){
    const rooms=payload.roomIds.map(id=>defs.find(row=>row.id===id&&row.type==='room')).filter(Boolean);
    return {kind:'program',result:proCalcProgram(payload.input,rooms,defs.filter(row=>row.type==='service'))};
  }
  return {kind:'service',result:proCalcService(payload.input,defs.find(row=>row.id===payload.serviceId))};
}
function proLiveCompanyPricing(){
  const payload=ti();
  payload.input=proMadinahFromNights(payload.input);
  if(payload.kind==='program')return {kind:'program',result:proCalcProgram(payload.input,payload.rooms,[])};
  return {kind:'service',result:proCalcService(payload.input,{...payload.service,active:true})};
}
function proLiveMarkup(view){
  const rows=view.result.results||[];
  if(!rows.length)return '<div class="live-error">اختر نوع غرفة واحداً على الأقل.</div>';
  const first=rows[0],program=view.kind==='program';
  const rate=first.baseCost>0?ne(first.profit/first.baseCost*100)+'%':'—';
  const list=rows.map(row=>`<div class="live-row${row.sell<row.baseCost?' below':''}"><span>${c(row.label)}</span><b class="num">${ne(row.sell)}</b></div>`).join('');
  return `<div class="live-stat"><span>${program?'تكلفة الفرد':'تكلفة الوحدة'} · ${c(first.label)}</span><strong class="num">${ne(first.baseCost)}</strong></div><div class="live-stat"><span>${program?'سعر البيع للفرد':'سعر بيع الوحدة'}</span><strong class="num">${ne(first.sell)}</strong></div><div class="live-stat profit${first.profit<0?' negative':''}"><span>الربح · ${rate} من التكلفة</span><strong class="num">${ne(first.profit)}</strong></div><div class="live-rooms"><h4>${program?'سعر البيع حسب الغرفة':'البنود'} · ${c($(first.currency))}</h4>${list}</div>${rows.some(row=>row.sell<row.baseCost)?'<div class="live-error">أحد البنود يُباع تحت التكلفة.</div>':''}`;
}
function proLiveBarMarkup(view){
  const first=(view.result.results||[])[0];
  if(!first)return '';
  return `<div class="live-bar-figures"><span>التكلفة <b class="num">${ne(first.baseCost)}</b></span><span>البيع <b class="num">${ne(first.sell)}</b></span><span class="profit${first.profit<0?' negative':''}">الربح <b class="num">${ne(first.profit)}</b></span></div>`;
}
function proRenderLive(compute){
  const body=d('#pro-live-body'),bar=d('#pro-live-bar');
  if(!body)return;
  let view=null,error='';
  try{view=compute();}catch(e){error=e.message||String(e);}
  body.innerHTML='<h3><span class="live-dot"></span>النتائج اللحظية</h3>'+(view?proLiveMarkup(view):`<div class="live-error">${c(error)}</div>`);
  const figures=bar&&bar.querySelector('#pro-live-figures');
  if(figures)figures.innerHTML=view?proLiveBarMarkup(view):`<div class="live-error">${c(error)}</div>`;
}
function proStepPanes(form,groups){
  const main=form.querySelector('.workbench-form');
  groups.forEach((group,index)=>{
    const pane=document.createElement('div');
    pane.className='step-pane';pane.dataset.step=String(index);pane.dataset.title=group.title;
    group.nodes.filter(Boolean).forEach(node=>pane.appendChild(node));
    main.appendChild(pane);
  });
}
/* Measures the element's own box. Inside a dialog the window is the wrong ruler. */
function proObserveWidth(el,apply){
  if(!el)return;
  const run=()=>apply(el.getBoundingClientRect().width||el.offsetWidth||0);
  if(typeof ResizeObserver==='function'){const ro=new ResizeObserver(run);ro.observe(el);el._proRO=ro;}
  run();
}
function proSyncSteps(form){
  const panes=[...form.querySelectorAll('.step-pane')],head=form.querySelector('.step-head'),bar=form.querySelector('#pro-live-bar');
  const narrow=proNarrow();
  const step=Math.min(Number(form.dataset.step||0),panes.length-1);
  form.dataset.step=String(step);
  panes.forEach((pane,index)=>{pane.hidden=narrow&&index!==step;});
  if(head){
    head.hidden=!narrow;
    head.innerHTML=narrow?`<div class="step-bar">${panes.map((p,i)=>`<i class="${i<=step?'done':''}"></i>`).join('')}</div><div class="step-index">خطوة ${step+1} من ${panes.length}</div><div class="step-title">${c(panes[step].dataset.title)}</div>`:'';
  }
  if(bar){
    const nav=bar.querySelector('#pro-live-nav');
    nav.innerHTML=narrow?`<div class="step-nav">${step>0?'<button type="button" class="btn" data-pro="step" data-value="-1">السابق</button>':''}${step<panes.length-1?'<button type="button" class="btn primary" data-pro="step" data-value="1">التالي</button>':''}</div>`:'';
    bar.classList.toggle('live-bar',narrow);
  }
  form.querySelector('.form-actions').hidden=narrow&&step<panes.length-1;
}
function proBuildWorkbench(formId,groupsOf){
  const form=d('#'+formId);if(!form)return;
  const actions=form.querySelector('.form-actions');
  const wb=document.createElement('div');wb.className='workbench';
  const main=document.createElement('div');main.className='workbench-form';
  const side=document.createElement('aside');side.className='workbench-side';
  const head=document.createElement('div');head.className='step-head';
  const bar=document.createElement('div');bar.id='pro-live-bar';
  bar.innerHTML='<div id="pro-live-figures"></div><div id="pro-live-nav"></div>';
  side.innerHTML='<div id="pro-live-body"></div>';
  const kept=[...form.childNodes].filter(node=>node!==actions);
  form.insertBefore(wb,actions);
  wb.append(main,side);
  main.appendChild(head);
  proStepPanes(form,groupsOf(kept));
  form.insertBefore(bar,actions);
  form.dataset.step='0';
  proObserveWidth(wb,width=>wb.classList.toggle('is-wide',width>=820));
  proSyncSteps(form);
}
function proPricingGroups(kept){
  const pick=selector=>kept.find(node=>node.nodeType===1&&node.matches(selector));
  const basics=pick('.grid'),program=pick('#program-inputs'),service=pick('#service-inputs'),trip=pick('#pro-trip-field');
  const rest=kept.filter(node=>node.nodeType===1&&![basics,program,service,trip].includes(node));
  const resultIndex=rest.findIndex(node=>node.classList.contains('result')||node.classList.contains('inline'));
  return [
    {title:'الأساسيات والرحلة',nodes:[basics,trip]},
    {title:'تفاصيل التسعير',nodes:[program,service]},
    {title:'الصرف والربح',nodes:rest.slice(0,resultIndex<0?rest.length:resultIndex)},
    {title:'النتيجة والحفظ',nodes:resultIndex<0?[]:rest.slice(resultIndex)}
  ].filter(group=>group.nodes.filter(Boolean).length);
}
function proTripField(current){
  const trips=proActiveTrips(current);
  const options=[['','بلا رحلة'],...trips.map(row=>[row.id,row.name+(row.nights!=null?' · '+row.nights+' ليالٍ':'')])];
  return `<div class="trip-field" id="pro-trip-field">${y('الرحلة','tripId',options,current||'')}<small>مطلوبة للبرامج، واختيارية للخدمات المستقلة. تُعرّف الرحلات من تبويب التعريفات.</small></div>`;
}
/* The chips sit under the nights input. Putting them under a two-line label pushed the two
   fields out of line with each other on a phone. */
function proAttachNightChips(form){
  if(!form)return;
  ['makkahNights','madinahNights'].forEach(name=>{
    const input=form.querySelector('[name='+name+']');
    const label=input&&input.closest('label');
    if(!label||label.querySelector('.night-quick'))return;
    label.insertAdjacentHTML('afterend',proNightQuick(name,input.value));
    label.parentNode.classList.add('has-night-chips');
  });
}
function proNightQuick(name,value){
  return `<div class="night-quick" role="group" aria-label="اختيار سريع لعدد الليالي">${proNightPresets.map(n=>`<button type="button" data-pro="nights" data-field="${name}" data-value="${n}" aria-pressed="${Number(value)===n}">${n}</button>`).join('')}</div>`;
}
be=function(row){
  proOriginalPricing(row);
  const current=s.editor?.row?.tripId||'';
  d('#program-inputs').insertAdjacentHTML('beforebegin',proTripField(current));
  const trip=proActiveTrips(current).find(x=>x.id===current);
  proAttachNightChips(d('#pricing-form'));
  proBuildWorkbench('pricing-form',proPricingGroups);
  proRenderLive(proLivePricing);
  if(trip)d('#pro-trip-field small').textContent='مدة الرحلة المسجلة: '+(trip.nights!=null?trip.nights+' ليالٍ':'غير محددة')+'. يمكنك تعديل الليالي في خطوة التسعير.';
};
const proBasePricingPayload=ei;
ei=function(){
  const payload=proBasePricingPayload();
  payload.tripId=d('[name=tripId]')?.value||'';
  payload.input=proMadinahFromNights(payload.input);
  return payload;
};
Te=function(row){
  proOriginalCompanyPricing(row);
  proAttachNightChips(d('#cp-form'));
  proBuildWorkbench('cp-form',kept=>{
    const pick=selector=>kept.find(node=>node.nodeType===1&&node.matches(selector));
    const basics=pick('.grid'),hint=pick('.hint'),program=pick('#cp-program'),service=pick('#cp-service');
    const rest=kept.filter(node=>node.nodeType===1&&![basics,hint,program,service].includes(node));
    const resultIndex=rest.findIndex(node=>node.classList.contains('result')||node.classList.contains('inline'));
    return [
      {title:'الأساسيات',nodes:[basics,hint]},
      {title:'تفاصيل الحساب',nodes:[program,service]},
      {title:'الصرف والربح',nodes:rest.slice(0,resultIndex<0?rest.length:resultIndex)},
      {title:'النتيجة والحفظ',nodes:resultIndex<0?[]:rest.slice(resultIndex)}
    ].filter(group=>group.nodes.filter(Boolean).length);
  });
  proRenderLive(proLiveCompanyPricing);
};
function proActiveLive(){
  if(d('#pricing-form'))return proLivePricing;
  if(d('#cp-form'))return proLiveCompanyPricing;
  return null;
}

/* ---- customer quotes: add a whole offer at once, one shared margin, clear per-room result ---- */
function extraFields(extra,index,line,lineIndex){
  const same=(extra.currency||line.source.currency||'LYD')===(line.source.currency||'LYD');
  return `<div class="extra-row line-grid"><label>وصف التكلفة<input data-extra="label" value="${c(extra.label||'')}" maxlength="200"></label><label>المبلغ<input data-extra="amount" type="number" min="0" step="0.001" value="${c(extra.amount??0)}"></label><label>العملة<select data-extra="currency">${re.map(([id,label])=>`<option value="${id}" ${(extra.currency||line.source.currency||'LYD')===id?'selected':''}>${c(label)}</option>`).join('')}</select></label><label>سعر التحويل<input data-extra="rate" type="number" min="0.000001" step="0.000001" value="${c(same?1:extra.rate??'')}" ${same?'disabled':''}></label><div>${l('حذف','quote.extraRemove',lineIndex+':'+index,'small danger')}</div></div>`;
}
function proQuoteOffers(){return (s.boot?.assignments||[]).filter(row=>!row.expired);}
function proQuoteToolbar(){
  const offers=proQuoteOffers();
  return `<div class="quote-toolbar">${y('إضافة عرض كامل بكل غرفه','newOffer',[['','اختر العرض'],...offers.map(row=>[row.id,row.name+(row.tripName?' · '+row.tripName:'')+' — '+row.lines.length+(row.kind==='program'?' أنواع غرف':' بنود')])],'')}<button type="button" class="btn primary" data-pro="quote-offer">إضافة كل البنود</button>${y('أو بند واحد','newSource',[['','اختر البند'],...offers.flatMap(row=>row.lines.map(line=>[row.id+'|'+line.key,row.name+' — '+line.label+' · '+ne(line.netPrice)+' '+$(line.currency)]))],'')}${l('إضافة البند','quote.add')}<div class="bulk-margin">${y('ربح موحّد لكل البنود','bulkMarginType',[['fixed','مبلغ لكل وحدة'],['percent','نسبة من التكلفة %']],'fixed')}${m('قيمة الربح','bulkMarginValue',0)}<button type="button" class="btn" data-pro="quote-margin">تطبيق على كل البنود</button></div></div>`;
}
Oe=function(quote,assignmentId){
  proOriginalQuote(quote,assignmentId);
  const bar=d('#quote-form .toolbar');
  if(bar)bar.outerHTML=proQuoteToolbar();
};
te=function(){
  d('#quote-lines').innerHTML=s.editor.lines.map((line,index)=>{
    const unit=line.source.unit;
    const countLabel=unit==='person'?'عدد الأشخاص':unit==='roomNight'?'عدد الغرف':'عدد الخدمات';
    return `<section class="line-editor line-row" data-index="${index}"><div class="line-row-head"><div><h3>${c(line.source.label)}</h3><small>${c(line.source.offerName)}${line.source.tripName?' · '+c(line.source.tripName):''} · صافي الشراء ${f(line.source.netPrice,line.source.currency)} ${c(G(unit))}</small></div>${l('حذف','quote.remove',String(index),'small danger')}</div><div class="line-grid">${m(countLabel,'quantity',line.quantity,'min="1" max="10000" step="1" required')}${unit==='roomNight'?m('عدد الليالي','nights',line.nights,'min="1" max="365" step="1" required'):''}${y('طريقة السعر','mode',[['margin','تكلفة + ربح'],['manual','سعر بيع نهائي']],line.mode)}${y('طريقة الربح','marginType',[['fixed','مبلغ لكل وحدة'],['percent','نسبة %']],line.marginType)}${m('قيمة الربح','marginValue',line.marginValue)}${m('بيع الوحدة','sellUnit',line.sellUnit,'required')}</div><details class="line-extras" ${line.extras.length?'open':''}><summary>تكاليف إضافية لهذا البند (${line.extras.length})</summary><div class="extras">${line.extras.map((extra,i)=>extraFields(extra,i,line,index)).join('')}</div>${l('+ تكلفة إضافية','quote.extra',String(index),'small')}</details><div class="line-summary section"></div></section>`;
  }).join('');
  Pe();
};
function proQuoteResult(preview){
  const lines=preview.quote.lines||[];
  const programs=lines.filter(line=>line.unit==='person');
  const others=lines.filter(line=>line.unit!=='person');
  const block=(rows,title,countHead)=>rows.length?`<div class="compare-group">${title}</div>`+M(['الغرفة / البند',countHead,'صافي الشراء','الإضافات','الربح','بيع الوحدة','إجمالي البند'],rows.map(line=>R([
    proRoomLabel(line),
    `<span class="num">${ne(line.units)}</span>`,
    f(line.purchase,line.currency),
    f(line.extraTotal,line.currency),
    `<span class="${line.profit<0?'profit-negative':'profit-positive'}">${f(line.profit,line.currency)}</span>`,
    f(line.sellUnit,line.currency),
    `<span class="money">${f(line.total,line.currency)}</span>${line.belowCost?'<small class="profit-negative">تحت التكلفة</small>':''}`
  ]))):'';
  const totals=(preview.quote.totals||[]).map(total=>`<div class="quote-total-row"><div><small>إجمالي ${c($(total.currency))}</small><p>الربح المتوقع ${f(total.profit,total.currency)}</p></div><strong>${ne(total.total)}</strong></div>`).join('');
  const previous=preview.previousTotals?.length?`<div class="hint section">الإجماليات السابقة: ${se({totals:preview.previousTotals})}</div>`:'';
  return `<div class="quote-result"><h3>تفاصيل التسعيرة قبل الحفظ</h3>${block(programs,'البرامج · حسب نوع الغرفة','عدد الأشخاص')}${block(others,'الغرف والخدمات','عدد الوحدات')}${totals}${previous}<div class="form-actions">${l('تأكيد حفظ التسعيرة','quote.commit','','primary')}</div></div>`;
}
qi=async function(form){
  await proOriginalSubmit(form);
  if(form.id==='quote-form'&&proLastQuotePreview&&d('#quote-review')?.children.length){
    d('#quote-review').innerHTML=proQuoteResult(proLastQuotePreview);
    d('#quote-review').scrollIntoView({behavior:'smooth',block:'start'});
  }
};
Ue=function(data){
  const trip=data.tripName||data.lines?.find(line=>line.tripName)?.tripName||'';
  return `<img class="print-brand" src="${Ke}" alt="الأولمبي لخدمات الحج والعمرة">`+proOriginalPrint(data).replace('<div class="print-meta">',`<div class="print-meta">${trip?`<p>الرحلة: ${c(trip)}</p>`:''}`);
};

/* ---- wiring ---- */
function proHandleAction(own){
  switch(own.dataset.pro){
    case'chip':
    case'unset':{
      proSetFilter(own.dataset.field,own.dataset.value);
      proRefreshFilters();break;
    }
    case'view':{
            proView.offers=own.dataset.value;sessionStorage.setItem('rihla_view',own.dataset.value);gi();break;
    }
    case'value':{
            sessionStorage.setItem('rihla_value',own.dataset.value);ve();break;
    }
    case'nights':{
            const input=d('[name='+own.dataset.field+']');
      if(!input)break;
      input.value=own.dataset.value;
      input.dispatchEvent(new Event('input',{bubbles:true}));
      [...own.parentElement.children].forEach(button=>button.setAttribute('aria-pressed',String(button===own)));
      break;
    }
    case'step':{
            const form=own.closest('form');
      form.dataset.step=String(Number(form.dataset.step||0)+Number(own.dataset.value));
      proSyncSteps(form);
      const live=proActiveLive();if(live)proRenderLive(live);
      form.scrollIntoView({block:'start'});
      break;
    }
    case'quote-offer':{
            const id=d('[name=newOffer]').value;
      const assignment=proQuoteOffers().find(row=>row.id===id);
      if(!assignment){q('اختر العرض أولاً.');break;}
      s.editor.lines=Q();
      const room=60-s.editor.lines.length;
      if(room<=0){q('بلغت الحد الأقصى 60 بنداً في التسعيرة الواحدة.');break;}
      assignment.lines.slice(0,room).forEach(line=>s.editor.lines.push(ai(assignment,line.key)));
      te();C();
      q('أُضيفت '+Math.min(room,assignment.lines.length)+' بنود من «'+assignment.name+'».');
      break;
    }
    case'quote-margin':{
            const type=d('[name=bulkMarginType]').value,value=d('[name=bulkMarginValue]').value;
      x('.line-editor').forEach(row=>{
        row.querySelector('[name=mode]').value='margin';
        row.querySelector('[name=marginType]').value=type;
        row.querySelector('[name=marginValue]').value=value;
      });
      Pe();C();q('طُبّق الربح الموحّد على كل البنود. يمكنك تعديل أي بند بعدها.');
      break;
    }
  }
}
document.addEventListener('change',event=>{
  if(event.target.name==='tripId'||event.target.name==='kind'){
    const live=proActiveLive();if(live)proRenderLive(live);
  }
},true);
document.addEventListener('input',event=>{
  if(!event.target.closest('#pricing-form,#cp-form'))return;
  if(event.target.closest('.cost-breakdown'))return;
  const live=proActiveLive();if(live)proRenderLive(live);
},true);
document.addEventListener('change',event=>{
  if(!event.target.closest('#pricing-form,#cp-form'))return;
  const live=proActiveLive();if(live)proRenderLive(live);
});
window.addEventListener('resize',()=>{
  const form=d('#pricing-form')||d('#cp-form');
  if(form&&form.querySelector('.step-pane'))proSyncSteps(form);
});
/* END ARKAN PRO */

/* ===== Release 4 ===== Quick pricing tab, company switches, readable table on phones. */
const proOriginalCompanyForm=ze,proOriginalShell4=Qe,proOriginalAction4=Ri,proOriginalSubmit4=qi,proOriginalPageRender=gi;
const proQuickModes=[['compact','مضغوط'],['negotiate','تفاوض'],['guided','إرشادي']];
function proQuickMode(value){return ['compact','negotiate','guided'].includes(value)?value:'compact';}
const proQuickState={mode:'compact',step:0,draft:null,input:null};

/* ---- the company switches the admin could not reach before ---- */
ze=function(row={active:true}){
  proOriginalCompanyForm(row);
  const active=d('#company-form .check-group')||d('#company-form [name=active]')?.closest('label');
  if(!active)return;
  // A hidden companion before each box: FormData keeps the last entry, so an unchecked box
  // still sends "no" instead of vanishing and being read as "not false".
  const toggle=(label,name,on)=>`<input type="hidden" name="${name}" value="no">${A(label,name,on,'yes')}`;
  active.insertAdjacentHTML('afterend',`<div class="switch-group">${toggle('أداة التسعير الخاصة بالشركة','allowPricing',row.allowPricing!==false)}${toggle('التسعيرة السريعة','allowQuickPricing',row.allowQuickPricing!==false)}<p class="hint">إطفاء أي منهما يخفي تبويبه عن حسابات الشركة ويمنع الحساب والحفظ من الخادم. الحسابات المحفوظة تبقى وتعود عند إعادة التفعيل.</p></div>`);
};

/* ---- quick pricing ---- */
function proQuickAllowed(){return b()?s.boot?.company?.allowQuickPricing!==false:L('viewCost');}
function proQuickDefs(type){return (b()?proQuickCompanyDefs(type):(s.boot?.definitions||[]).filter(row=>row.type===type&&row.active!==false));}
function proQuickCompanyDefs(){return [];}
function proQuickCompanyRooms(){
  const latest=(s.boot?.companyPricings||[]).find(row=>Array.isArray(row.rooms)&&row.rooms.length);
  return latest?latest.rooms:[];
}
const PRO_DEFAULT_ROOMS=[{id:'q1',name:'فردية',occupancy:1,extraBeds:0},{id:'q2',name:'زوجية',occupancy:2,extraBeds:0},{id:'q3',name:'ثلاثية',occupancy:3,extraBeds:0},{id:'q4',name:'رباعية',occupancy:4,extraBeds:0},{id:'q5',name:'خماسية',occupancy:5,extraBeds:0}];
const PRO_CUSTOM_ROOMS_KEY='rihla_custom_rooms';
const proRoomManager={adding:false};
function proQuickCustomRooms(){
  try{const rows=JSON.parse(localStorage.getItem(PRO_CUSTOM_ROOMS_KEY)||'[]');return Array.isArray(rows)?rows:[];}catch(e){return [];}
}
function proSaveCustomRooms(rows){
  try{localStorage.setItem(PRO_CUSTOM_ROOMS_KEY,JSON.stringify(rows.slice(0,20)));}catch(e){}
}
function proQuickRooms(){
  const source=b()?proQuickCompanyRooms():proQuickDefs('room');
  const base=source.length?source:PRO_DEFAULT_ROOMS;
  const ids=new Set(base.map(row=>row.id));
  return [...base,...proQuickCustomRooms().filter(row=>!ids.has(row.id)).map(row=>({...row,localCustom:true}))];
}
function proQuickSettings(){const settings=s.boot?.settings||{};return {sarPerUsd:settings.sarPerUsd||3.75,usdToLyd:settings.usdToLyd||9.5};}
function proQuickInput(){
  const get=name=>d('[name=q-'+name+']');
  const num=name=>{const el=get(name);return el?Number(el.value||0):0;};
  const rates=proQuickSettings();
  const makkahNights=num('makkahNights'),madinahNights=num('madinahNights');
  const makkahExtraBed=num('makkahExtraBed'),madinahExtraBed=num('madinahExtraBed');
  const totalNights=makkahNights+madinahNights;
  const sarPerUsd=num('sarPerUsd')||rates.sarPerUsd,usdToLyd=num('usdToLyd')||rates.usdToLyd;
  const extraItems=x('#quick-form [data-extra-item]').map(row=>({
    name:row.querySelector('[data-extra-name]')?.value?.trim()||'',
    amount:Number(row.querySelector('[data-extra-amount]')?.value||0),
    currency:row.querySelector('[data-extra-currency]')?.value||'LYD'
  }));
  const baseBedCounts={},extraBedCounts={};
  x('#quick-form [data-base-bed-count]').forEach(field=>{baseBedCounts[field.dataset.baseBedCount]=Math.max(1,Number(field.value||1));});
  x('#quick-form [data-extra-bed-count]').forEach(field=>{extraBedCounts[field.dataset.extraBedCount]=Math.max(0,Number(field.value||0));});
  const extraTotalLyd=extraItems.reduce((sum,item)=>sum+(item.currency==='USD'?item.amount*usdToLyd:item.currency==='SAR'?item.amount/sarPerUsd*usdToLyd:item.amount),0);
  return {
    tripName:(get('tripName')?.value||'').trim().slice(0,100),
    makkahHotelName:get('makkahHotelName')?.value||'',
    makkahHotelId:get('makkahHotelId')?.value||'',
    makkahRate:num('makkahRate'),makkahNights,
    includeMadinah:madinahNights>0,
    madinahHotelName:get('madinahHotelName')?.value||'',
    madinahHotelId:get('madinahHotelId')?.value||'',
    madinahRate:num('madinahRate'),madinahNights,
    makkahExtraBed,madinahExtraBed,baseBedCounts,extraBedCounts,
    extraBed:totalNights?(makkahExtraBed*makkahNights+madinahExtraBed*madinahNights)/totalNights:0,
    extraItems,visaUsd:num('visaUsd'),ticketLyd:num('ticketLyd'),transportLyd:num('transportLyd'),otherLyd:extraTotalLyd,
    profitType:get('profitType')?.value||'fixed',profitValue:get('profitValue')?num('profitValue'):200,
    rounding:num('rounding'),
    sarPerUsd,usdToLyd,
    serviceIds:[],overrides:{}
  };
}
function proQuickRoomPayload(){
  const rooms=proQuickRooms();
  return {rooms:rooms.map(row=>({id:row.id,name:row.name,occupancy:row.occupancy,extraBeds:row.extraBeds})),roomIds:rooms.map(row=>row.id)};
}
function proQuickCompute(){
  const input=proQuickInput();
  const off=proRoomsOff();
  const rooms=proQuickRooms().filter(room=>!off.has(String(room.id))).map(room=>{const extra=input.extraBedCounts?.[room.id]??(room.localCustom?room.extraBeds??0:0),base=input.baseBedCounts?.[room.id]??Math.max(1,Number(room.occupancy||1));return {...room,occupancy:base+extra,extraBeds:extra};});
  return {rooms,result:proCalcProgram(input,rooms,[])};
}
function proQuickSummaryText(view){
  const hotelName=d('[name=q-makkahHotelName]')?.value?.trim()||'';
  const nights=Number(d('[name=q-makkahNights]')?.value||0);
  const head=[proQuickInput().tripName,hotelName||'تسعيرة سريعة'].filter(Boolean).join(' — ')+' — '+nights+' ليالٍ';
  return head+'\n'+view.result.results.map(row=>row.label+': '+ne(row.sell)+' '+$(row.currency)).join('\n');
}

function proQuickHotelOptions(){
  const hotels=proQuickDefs('hotel');
  return [['','اختر الفندق أو أدخل السعر يدوياً'],...hotels.map(row=>[row.id,row.name+' · '+ne(row.rate)+' SAR/ليلة'])];
}
function proQuickStoredExtraItems(draft){
  if(Array.isArray(draft.extraItems))return draft.extraItems;
  const rows=[];
  if(Number(draft.otherLyd))rows.push({name:'تكلفة إضافية',amount:Number(draft.otherLyd),currency:'LYD'});
  return rows;
}
const PRO_COST_TEMPLATES_KEY='rihla_cost_templates';
function proQuickCostTemplates(){
  try{
    const saved=localStorage.getItem(PRO_COST_TEMPLATES_KEY);
    if(saved!==null){const rows=JSON.parse(saved);return Array.isArray(rows)?rows.filter(row=>!['cost-visa','cost-ticket','cost-transport'].includes(row.id)):[];}
  }catch(e){}
  return [];
}
function proSaveCostTemplates(rows){
  try{localStorage.setItem(PRO_COST_TEMPLATES_KEY,JSON.stringify(rows.filter(row=>!['cost-visa','cost-ticket','cost-transport'].includes(row.id)).slice(0,50)));}catch(e){}
}
function proQuickTemplateCards(){
  const currency={LYD:'دينار',SAR:'ريال',USD:'دولار'};
  const rows=proQuickCostTemplates();
  if(!rows.length)return '<div class="cost-template-empty">لا توجد بنود محفوظة. احفظ أي بند من القائمة ليظهر هنا.</div>';
  return rows.map(row=>`<div class="cost-template-card"><button type="button" class="cost-template-use" data-pro="quick-template-use" data-value="${c(row.id)}"><span>${c(row.name)}</span><small>${ne(row.amount||0)} ${currency[row.currency]||c(row.currency)}</small></button><button type="button" class="cost-template-delete" data-pro="quick-template-delete" data-value="${c(row.id)}" aria-label="حذف ${c(row.name)}">×</button></div>`).join('');
}
function proQuickExtraRows(items){
  return items.map((item,index)=>`<div class="quick-cost-item" data-extra-item data-index="${index}"><label>اسم البند<input type="text" data-extra-name value="${c(item.name||'')}" placeholder="مثال: نقل خاص أو إفطار" maxlength="120"></label><label>المبلغ<input type="number" data-extra-amount value="${c(item.amount??0)}" min="0" step="0.001" inputmode="decimal"></label><label>العملة<select data-extra-currency>${[['LYD','دينار ليبي'],['SAR','ريال سعودي'],['USD','دولار أمريكي']].map(([id,label])=>`<option value="${id}" ${(item.currency||'LYD')===id?'selected':''}>${label}</option>`).join('')}</select></label><div class="quick-cost-actions"><button type="button" class="btn small" data-pro="quick-template-store" data-value="${index}">حفظ البند</button><button type="button" class="btn small danger" data-pro="quick-extra-remove" data-value="${index}" aria-label="حذف بند ${c(item.name||'التكلفة')}">حذف</button></div></div>`).join('');
}
const PRO_ROOMS_OFF_KEY='olympi_disabled_rooms';
function proRoomsOff(){try{const v=JSON.parse(localStorage.getItem(PRO_ROOMS_OFF_KEY)||'[]');return new Set(Array.isArray(v)?v:[]);}catch(e){return new Set();}}
function proRoomOff(id){return proRoomsOff().has(String(id));}
function proToggleRoom(id){
  // keep negotiated prices attached to their room while the list of active rooms changes
  const before=proQuickRooms().filter(r=>!proRoomOff(r.id)).map(r=>String(r.id));
  const off=proRoomsOff();id=String(id);off.has(id)?off.delete(id):off.add(id);
  try{localStorage.setItem(PRO_ROOMS_OFF_KEY,JSON.stringify([...off]));}catch(e){}
  const after=proQuickRooms().filter(r=>!off.has(String(r.id))).map(r=>String(r.id));
  const byId={};before.forEach((rid,i)=>{if(proQuickExtra.sells[i]!=null)byId[rid]=proQuickExtra.sells[i];});
  proQuickExtra.sells={};after.forEach((rid,i)=>{if(byId[rid]!=null)proQuickExtra.sells[i]=byId[rid];});
}
function proQuickBedRows(draft){
  const savedBase=draft.baseBedCounts||{};
  const saved=draft.extraBedCounts||{};
  return proQuickRooms().map(room=>{const extra=saved[room.id]??(room.localCustom?room.extraBeds??0:0),base=savedBase[room.id]??Math.max(1,Number(room.occupancy||1));const off=proRoomOff(room.id),dis=off?' disabled':'';return `<div class="bed-room-row${off?' is-disabled':''}"><div class="bed-room-title"><span aria-hidden="true">▦</span><b>${c(room.name)}</b><button type="button" class="room-toggle" data-pro="quick-room-toggle" data-value="${c(room.id)}" role="switch" aria-checked="${!off}" aria-label="${off?'تفعيل':'تعطيل'} ${c(room.name)}"><i aria-hidden="true"></i><span>${off?'معطّلة':'مفعّلة'}</span></button>${room.localCustom?`<button type="button" class="room-delete" data-pro="quick-room-delete" data-value="${c(room.id)}" aria-label="حذف ${c(room.name)}">حذف</button>`:'<small>أساسية</small>'}</div><div class="bed-room-fields"><label><span>أسِرّة أساسية</span><input type="number" data-base-bed-count="${c(room.id)}" value="${c(base)}" min="1" max="20" step="1" inputmode="numeric"${dis}></label><span class="bed-plus">+</span><label><span>أسِرّة إضافية</span><input type="number" data-extra-bed-count="${c(room.id)}" value="${c(extra)}" min="0" max="20" step="1" inputmode="numeric"${dis}></label></div><span class="bed-total"><small>إجمالي النزلاء</small><strong>${Number(base)+Number(extra)}</strong></span></div>`;}).join('');
}
function proQuickRoomBuilder(){
  if(!proRoomManager.adding)return '';
  return `<div class="room-builder"><label>اسم نوع الغرفة<input type="text" data-new-room-name placeholder="مثال: غرفة خماسية" maxlength="80" autocomplete="off"></label><label>الأسرّة الأساسية<input type="number" data-new-room-base value="1" min="1" max="20" step="1" inputmode="numeric"></label><label>الأسرّة الإضافية<input type="number" data-new-room-extra value="0" min="0" max="20" step="1" inputmode="numeric"></label><div class="room-builder-actions"><button type="button" class="btn small primary" data-pro="quick-room-save">حفظ الغرفة</button><button type="button" class="btn small" data-pro="quick-room-add-cancel">إلغاء</button></div></div>`;
}
function proQuickForm(){
  const rates=proQuickSettings();
  const draft=proQuickState.input||proQuickState.draft?.input||{};
   ['makkahHotelName','madinahHotelName'].forEach(key=>{if(typeof draft[key]==='string')draft[key]=draft[key].replace('إعامر المنار','إعمار المنار').replace('إمار النور','إعمار النور');});
  const extraItems=proQuickStoredExtraItems(draft);
  const v=(key,fallback)=>draft[key]!=null&&draft[key]!==''?draft[key]:fallback;
  return `<section class="quick-trip-heading"><div class="quick-trip-heading-icon" aria-hidden="true">✦</div><div><label for="q-trip-name">اسم الرحلة <span>عنوان البطاقة</span></label><input id="q-trip-name" name="q-tripName" type="text" maxlength="100" value="${c(v('tripName',''))}" placeholder="مثال: رحلة 15-2-2026" aria-describedby="q-trip-help"><small id="q-trip-help">يظهر في جميع قوالب المشاركة وفيسبوك عند تعبئته.</small></div></section><div class="quick-strip hotel-cards" data-step="0">
    <section class="hotel-card"><div class="hotel-card-head"><b>فندق مكة</b><span>أساسي</span></div>
      ${w('اسم الفندق','q-makkahHotelName',v('makkahHotelName',''),'text','placeholder="اكتب اسم فندق مكة" autocomplete="off"')}
      <div class="quick-two">${m('سعر الغرفة / الليلة (SAR)','q-makkahRate',v('makkahRate',0))}<div class="nights-field">${m('عدد الليالي','q-makkahNights',v('makkahNights',10),'min="1" max="365" step="1"')}${proNightQuick('q-makkahNights',v('makkahNights',10))}</div></div>
    </section>
    <section class="hotel-card" id="q-madinah-card"><div class="hotel-card-head"><b>فندق المدينة</b><span>اتركه صفراً إن لم يكن مشمولاً</span></div>
      ${w('اسم الفندق','q-madinahHotelName',v('madinahHotelName',''),'text','placeholder="اكتب اسم فندق المدينة" autocomplete="off"')}
      <div class="quick-two">${m('سعر الغرفة / الليلة (SAR)','q-madinahRate',v('madinahRate',0))}<div class="nights-field">${m('ليالي المدينة','q-madinahNights',v('madinahNights',0),'min="0" max="365" step="1"')}${proNightQuick('q-madinahNights',v('madinahNights',0))}</div></div>
    </section>
  </div>
  <section class="fixed-costs" data-step="1"><div class="fixed-costs-head"><div><b>التكاليف الأساسية</b><small>تظهر دائماً وتُضاف تلقائياً إلى تكلفة الفرد</small></div><span>بنود ثابتة</span></div><div class="fixed-cost-grid"><div class="fixed-cost-card"><i aria-hidden="true">✈</i><div>${m('التأشيرة للفرد (USD)','q-visaUsd',v('visaUsd',0))}<small>بالدولار الأمريكي</small></div></div><div class="fixed-cost-card"><i aria-hidden="true">🎫</i><div>${m('تذكرة السفر للفرد (LYD)','q-ticketLyd',v('ticketLyd',0))}<small>بالدينار الليبي</small></div></div><div class="fixed-cost-card"><i aria-hidden="true">↔</i><div>${m('النقل للفرد (LYD)','q-transportLyd',v('transportLyd',0))}<small>بالدينار الليبي</small></div></div></div></section>
  <div class="quick-strip" data-step="1">
    <div class="quick-two">${y('طريقة الربح','q-profitType',[['percent','نسبة %'],['fixed','مبلغ ثابت']],v('profitType','fixed'))}${m('قيمة الربح','q-profitValue',v('profitValue',200))}</div>
  </div>
  <details class="quick-extra" data-step="2" ${extraItems.length?'open':''}>
    <summary><span class="ex-title"><b>تكاليف إضافية</b><small id="quick-extra-sum">أضف بنود التكلفة بالعملة المناسبة</small></span><span class="ex-side"><b id="quick-extra-total"></b><span class="ex-label">إظهار التفاصيل</span><span class="ex-arrow" aria-hidden="true">▾</span></span></summary>
    <div class="quick-extra-body">
      <div class="quick-two">${m('سرير إضافي — مكة (SAR)','q-makkahExtraBed',v('makkahExtraBed',v('extraBed',0)))}${m('سرير إضافي — المدينة (SAR)','q-madinahExtraBed',v('madinahExtraBed',v('extraBed',0)))}</div>
      <div class="bed-distribution"><div class="bed-distribution-head"><div><b>تركيب الأسرّة حسب نوع الغرفة</b><small>الأسِرّة الأساسية موجودة دائماً، وأضف الإضافية عند استخدامها</small></div><button type="button" class="btn small primary" data-pro="quick-room-add-open">+ إضافة غرفة</button></div>${proQuickRoomBuilder()}<div class="bed-distribution-grid">${proQuickBedRows(draft)}</div><p>إجمالي النزلاء = الأسرّة الأساسية + الإضافية. تضاف تكلفة السرير الإضافي ثم تقسم التكلفة على إجمالي النزلاء.</p></div>
      <div class="quick-cost-head"><div><b>بنود التكلفة</b><small>تُحوّل إلى الدينار تلقائياً حسب سعر الصرف</small></div><button type="button" class="btn small primary" data-pro="quick-extra-add">+ إضافة بند تكلفة</button></div>
      <div class="cost-templates"><div class="cost-templates-head"><b>البنود المحفوظة</b><small>اضغط على البند لإضافته إلى التسعيرة</small></div><div class="cost-template-list">${proQuickTemplateCards()}</div></div>
      <div id="quick-cost-items">${proQuickExtraRows(extraItems)}</div>
      ${extraItems.length?'':'<div class="quick-cost-empty">لا توجد بنود إضافية بعد. اضغط «إضافة بند تكلفة».</div>'}
      <div class="quick-two">${m('الريال مقابل الدولار','q-sarPerUsd',v('sarPerUsd',rates.sarPerUsd),'step="0.0001"')}${m('الدولار مقابل الدينار','q-usdToLyd',v('usdToLyd',rates.usdToLyd),'step="0.0001"')}</div>
      ${m('التقريب لأقرب','q-rounding',v('rounding',1))}
    </div>
  </details>`;
}
function proQuickPrices(view){
  const rows=view.result.results||[];
  if(!rows.length)return (proRoomsOff().size?'<div class="live-error">كل الغرف معطّلة. فعّل غرفة واحدة على الأقل من قسم «الغرف والأسرّة الإضافية».</div>':'<div class="live-error">لا توجد أنواع غرف معرّفة.</div>');
  const lead=rows.reduce((best,row)=>!best||Math.abs(row.count-2)<Math.abs(best.count-2)?row:best,null);
  return rows.map(row=>{
    const below=row.sell<row.baseCost;
    return `<div class="quick-card${row===lead?' lead':''}${below?' below':''}"><span class="quick-card-label">${c(row.label)} · للفرد</span><strong class="money"><bdi class="num">${ne(row.sell)}</bdi> <span class="cur">${c($(row.currency))}</span></strong><small>تكلفة ${ne(row.baseCost)} · ربح ${ne(row.profit)}${below?' · تحت التكلفة':''}</small></div>`;
  }).join('');
}
function proQuickRender(){
  if(d('#quick-form')){proQuickState.input=proQuickInput();proSyncMadinah(d('#quick-form'));}
  let view=null,error='';
  try{view=proQuickCompute();}catch(e){error=e.message||String(e);}
  const prices=d('#quick-prices');
  if(prices){
    prices.innerHTML=!view?`<div class="live-error">${c(error)}</div>`
      :proQuickExtra.customer?proCustomerRows(view)
      :proQuickState.mode==='negotiate'?proNegotiateRows(view)
      :proQuickPrices(view);
  }
  const copy=d('#quick-copy');
  if(copy)copy.disabled=!view;
  proQuickSyncSteps();
}
function proQuickSyncSteps(){
  const panes=x('#quick-form [data-step]');
  if(!panes.length)return;
  const guided=proQuickState.mode==='guided';
  const step=Math.min(proQuickState.step,panes.length-1);
  panes.forEach((pane,index)=>{pane.hidden=guided&&index!==step;});
  const head=d('#quick-step-head');
  if(head){
    head.hidden=!guided;
    head.innerHTML=guided?`<div class="step-bar">${panes.map((p,i)=>`<i class="${i<=step?'done':''}"></i>`).join('')}</div><div class="step-index">خطوة ${step+1} من ${panes.length}</div>`:'';
  }
  const nav=d('#quick-nav');
  if(nav)nav.innerHTML=guided?`${step>0?'<button type="button" class="btn" data-pro="quick-step" data-value="-1">السابق</button>':''}${step<panes.length-1?'<button type="button" class="btn primary" data-pro="quick-step" data-value="1">التالي</button>':''}`:'';
}
function proQuickDraftList(){
  const drafts=s.boot?.quickDrafts||[];
  if(!drafts.length)return '<p class="hint">لا توجد مسودات محفوظة. تُحفظ المسودة 30 يوماً ثم تُحذف تلقائياً.</p>';
  return M(['المسودة','آخر تحديث','الإجراءات'],drafts.map(row=>R([
    `<b>${c(row.name)}</b>`,
    c(String(row.updatedAt||'').replace('T',' ').slice(0,16)),
    V(l('فتح','quick.open',row.id,'small')+l('حذف','quick.delete',row.id,'small danger'))
  ])));
}
function proQuickPage(){
  d('#content').innerHTML=Y('التسعيرة السريعة','سعر فوري لزبون على الهاتف أو أمامك. بلا عرض ولا رحلة ولا نشر.',
    l('تسعيرة جديدة','quick.reset','','primary'))+
  `<div class="quick-modes" role="group" aria-label="وضع العرض">${proQuickModes.map(([id,label])=>`<button type="button" data-pro="quick-mode" data-value="${id}" aria-pressed="${proQuickState.mode===id}">${label}</button>`).join('')}</div>
  ${proPresetsMarkup()}
  <div class="quick-layout mode-${c(proQuickState.mode)}">
    <div class="quick-inputs panel"><div id="quick-step-head" class="step-head" hidden></div><form id="quick-form" autocomplete="off">${proQuickForm()}</form><div id="quick-nav" class="step-nav"></div></div>
    <div class="quick-results">
      <div class="quick-actions">
        <button type="button" class="btn" id="quick-copy" data-pro="quick-copy">نسخ نصاً</button>
        <button type="button" class="btn share-whatsapp" data-pro="quick-card"><svg class="share-social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#25D366" d="M12 1a10.8 10.8 0 0 0-9.35 16.2L1 23l5.96-1.56A10.9 10.9 0 1 0 12 1Z"/><path fill="#fff" d="M17.6 14.3c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.95 1.19-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.89-.8-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52s1.08 2.94 1.23 3.14c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.8-.73 2.05-1.44.25-.71.25-1.32.17-1.44-.07-.13-.27-.2-.57-.36Z"/></svg>مشاركة واتس أب</button>
        <button type="button" class="btn fb-share share-facebook" data-pro="quick-fb"><svg class="share-social-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#1877F2"/><path fill="#fff" d="M13.65 23v-8.4h2.83l.42-3.28h-3.25V9.23c0-.95.27-1.6 1.63-1.6h1.74V4.7a23 23 0 0 0-2.53-.13c-2.5 0-4.22 1.53-4.22 4.34v2.41H7.43v3.28h2.84V23Z"/></svg>مشاركة فيسبوك</button>
        <button type="button" class="btn" data-pro="quick-customer">${proQuickExtra.customer?'عودة للتحرير':'اعرض للزبون'}</button>
        ${l('حفظ مسودة','quick.draft')}
        ${l('تحويل إلى عرض','quick.promote')}
        <button type="button" class="quick-more" data-pro="quick-more">المزيد من الإجراءات</button>
      </div>
      <div id="quick-prices"></div>
    </div>
  </div>
  <div class="panel section"><div class="toolbar"><h3>المسودات المحفوظة</h3></div>${proQuickDraftList()}</div>`;
  proQuickRender();
  proUpgradeActions();
}

/* ---- wiring the tab into the shell ---- */
/* The bundle's own shell resets any tab it does not know to "offers", so the quick tab is
   restored after the shell is built rather than fought with. */
Qe=function(){
  const wanted=s.tab==='quickPricing'&&proQuickAllowed();
  proOriginalShell4();
  const nav=d('.nav');
  if(nav&&proQuickAllowed()&&!nav.querySelector('[data-id="quickPricing"]')){
    const anchor=nav.querySelector('[data-id="companyPricing"]')||nav.querySelector('[data-id="pricing"]')||nav.querySelector('[data-id="offers"]');
    anchor?.insertAdjacentHTML('afterend','<button type="button" data-action="navigate" data-id="quickPricing">التسعيرة السريعة</button>');
  }
  if(!wanted)return;
  s.tab='quickPricing';
  x('.nav button').forEach(button=>button.classList.toggle('active',button.dataset.id==='quickPricing'));
  proQuickPage();
};
gi=function(){
  if(s.tab==='quickPricing'){proQuickPage();return;}
  proOriginalPageRender();
};
Ri=async function(action,id,el){
  switch(action){
    case'quick.reset':proQuickState.draft=null;proQuickState.input=null;proQuickState.step=0;proQuickExtra.sells={};proRoomManager.adding=false;proQuickPage();return;
    case'quick.open':{
      const row=(s.boot.quickDrafts||[]).find(x=>x.id===id);
      if(!row){q('المسودة غير متاحة.');return;}
      proQuickState.draft=row;proQuickState.input=null;proQuickState.step=0;
      proRestoreNegotiation(row);
      proQuickPage();
      q('فُتحت المسودة «'+row.name+'».');return;
    }
    case'quick.draft':{
      const name=prompt('اسم المسودة',proQuickState.draft?.name||'تسعيرة '+new Date().toLocaleDateString('ar-LY'));
      if(name==null)return;
      const saved=await v('quick.save',{id:proQuickState.draft?.id,version:proQuickState.draft?.version,name,notes:JSON.stringify({sells:proQuickExtra.sells}),kind:'program',quick:true,input:proQuickInput(),...proQuickRoomPayload()});
      s.boot.quickDrafts=[saved,...(s.boot.quickDrafts||[]).filter(row=>row.id!==saved.id)];
      proQuickState.draft=saved;proQuickState.input=null;proQuickPage();q('حُفظت المسودة. تنتهي تلقائياً بعد 30 يوماً.');return;
    }
    case'quick.delete':{
      const row=(s.boot.quickDrafts||[]).find(x=>x.id===id);
      if(!row)return;
      if(!confirm('حذف المسودة «'+row.name+'»؟'))return;
      await v('quick.delete',{id:row.id,version:row.version});
      s.boot.quickDrafts=(s.boot.quickDrafts||[]).filter(x=>x.id!==row.id);
      if(proQuickState.draft?.id===row.id)proQuickState.draft=null;
      proQuickPage();q('حُذفت المسودة.');return;
    }
  }
  return proOriginalAction4(action,id,el);
};
function proQuickHandle(own){
  switch(own.dataset.pro){
    case'quick-mode':
      proQuickState.input=d('#quick-form')?proQuickInput():proQuickState.input;
      proQuickState.mode=own.dataset.value;proQuickState.step=0;
      try{localStorage.setItem('rihla_quick_mode',own.dataset.value);}catch(e){sessionStorage.setItem('rihla_quick_mode',own.dataset.value);}
      proQuickPage();return true;
    case'quick-step':
      proQuickState.step=Math.max(0,proQuickState.step+Number(own.dataset.value));
      proQuickSyncSteps();return true;
    case'quick-copy':{
      let view=null;
      try{view=proQuickCompute();}catch(e){q('أكمل المدخلات أولاً.');return true;}
      const text=proQuickSummaryText(view);
      const done=()=>{own.textContent='نُسخ ✓';setTimeout(()=>{own.textContent='نسخ للزبون';},1600);};
      if(navigator.clipboard?.writeText)navigator.clipboard.writeText(text).then(done).catch(()=>q(text));
      else q(text);
      return true;
    }
  }
  return false;
}
const proBaseHandleAction=proHandleAction;
proHandleAction=function(own){if(proQuickHandle(own))return;return proBaseHandleAction(own);};
let proQuickRenderFrame=0;
function proScheduleQuickRender(){
  if(proQuickRenderFrame)cancelAnimationFrame(proQuickRenderFrame);
  proQuickRenderFrame=requestAnimationFrame(()=>{proQuickRenderFrame=0;if(d('#quick-form'))proQuickRender();});
}
document.addEventListener('input',event=>{
  if(event.target.closest('#quick-form'))proScheduleQuickRender();
},true);
document.addEventListener('keyup',event=>{
  if(event.target.closest?.('#quick-form')&&event.target.matches('input[type="number"]'))proScheduleQuickRender();
},true);
document.addEventListener('compositionend',event=>{
  if(event.target.closest?.('#quick-form'))proScheduleQuickRender();
},true);
document.addEventListener('change',event=>{
  if(!event.target.closest('#quick-form'))return;
  const hotelField=event.target.name==='q-makkahHotelId'?'q-makkahRate':event.target.name==='q-madinahHotelId'?'q-madinahRate':'';
  if(hotelField){
    const hotel=proQuickDefs('hotel').find(row=>row.id===event.target.value);
    if(hotel&&d('[name='+hotelField+']'))d('[name='+hotelField+']').value=hotel.rate;
  }
  proQuickRender();
});
/* END ARKAN PRO R4 */

/* ===== Release 5 ===== Madinah as a first-class card, negotiation mode, presets, share card. */
const proR5={submit:qi,action:Ri,pricing:be,cpPricing:Te,list:ve,shell:Qe,handle:proHandleAction};

/* ---- Madinah: always visible, always editable. Nights decide inclusion, so a record saved
   with the old flag off opens at zero nights and keeps exactly the price it had. ---- */
function proMadinahFromNights(input){
  const nights=Number(input.madinahNights||0);
  return {...input,madinahNights:nights,includeMadinah:nights>0};
}
function proNormaliseStored(input){
  if(!input)return input;
  return input.includeMadinah===true?input:{...input,madinahNights:0};
}
function proHotelCard(title,badge,fields){
  return `<section class="hotel-card"><div class="hotel-card-head"><b>${c(title)}</b><span>${c(badge)}</span></div><div class="grid three">${fields}</div></section>`;
}
function proRestructureHotels(form){
  // The two forms name the block differently and place the old checkbox differently, so the
  // rebuild works from the fields themselves rather than from a fixed DOM shape.
  if(!form||form.querySelector('.hotel-card'))return;
  const madinah=form.querySelector('#madinah-inputs,#cp-madinah');
  const makkahGrid=form.querySelector('[name=makkahNights]')?.closest('.grid');
  if(!madinah||!makkahGrid||makkahGrid===madinah)return;
  const wrap=document.createElement('div');
  wrap.className='hotel-cards';
  makkahGrid.parentNode.insertBefore(wrap,makkahGrid);
  const card=(title,badge,node)=>{
    const section=document.createElement('section');
    section.className='hotel-card';
    section.innerHTML=`<div class="hotel-card-head"><b>${c(title)}</b><span>${c(badge)}</span></div>`;
    section.appendChild(node);
    wrap.appendChild(section);
  };
  card('فندق مكة','أساسي',makkahGrid);
  card('فندق المدينة','اتركه صفراً إن لم يكن مشمولاً',madinah);
  madinah.hidden=false;
  // The checkbox stays a real checkbox (FormData only reports it when checked) but is hidden;
  // its state is derived from the nights field on every keystroke.
  const box=form.querySelector('[name=includeMadinah]');
  if(box){
    box.closest('label')?.setAttribute('hidden','');
    box.closest('.check-group')?.setAttribute('hidden','');
  }
  proSyncMadinah(form);
}
function proSyncMadinah(form){
  const field=form.querySelector('[name=madinahNights],[name=q-madinahNights]');
  const nights=Number(field?.value||0);
  const box=form.querySelector('[name=includeMadinah]');
  if(box)box.checked=nights>0;
  (field?.closest('.hotel-card')||form.querySelector('#madinah-inputs,#cp-madinah')?.closest('.hotel-card'))?.classList.toggle('is-off',nights<=0);
}

/* Opening an old record: a stored flag of false meant "ignore these nights", so the field opens
   at zero and the saved price is reproduced exactly. */
be=function(row){
  const safe=row?{...row,input:proNormaliseStored(row.input)}:row;
  proR5.pricing(safe);
  proRestructureHotels(d('#pricing-form'));
  proRenderLive(proLivePricing);
};
Te=function(row){
  const safe=row?{...row,input:proNormaliseStored(row.input)}:row;
  proR5.cpPricing(safe);
  proRestructureHotels(d('#cp-form'));
  proRenderLive(proLiveCompanyPricing);
};
const proBaseCompanyPayload=ti;
ti=function(){
  const payload=proBaseCompanyPayload();
  payload.input=proMadinahFromNights(payload.input);
  return payload;
};
document.addEventListener('input',event=>{
  const form=event.target.closest('#pricing-form,#cp-form');
  if(form&&event.target.name==='madinahNights')proSyncMadinah(form);
},true);
document.addEventListener('input',event=>{
  if(event.target.dataset?.baseBedCount==null&&event.target.dataset?.extraBedCount==null)return;
  const row=event.target.closest('.bed-room-row');if(!row)return;
  const base=Math.max(1,Number(row.querySelector('[data-base-bed-count]')?.value||1));
  const extra=Math.max(0,Number(row.querySelector('[data-extra-bed-count]')?.value||0));
  const total=row.querySelector('.bed-total strong');if(total)total.textContent=String(base+extra);
},true);

/* ---- quick pricing: presets, negotiation, customer view, share card ---- */
const proQuickExtra={sells:{},customer:false,card:false};
function proQuickPresets(){
  try{return JSON.parse(localStorage.getItem('rihla_presets')||'[]');}catch(e){return [];}
}
function proSavePresets(list){
  try{localStorage.setItem('rihla_presets',JSON.stringify(list.slice(0,8)));}catch(e){}
}
function proPresetPrice(preset){
  try{
    const rooms=proQuickRooms().map(room=>{const extra=preset.input.extraBedCounts?.[room.id]??(room.localCustom?room.extraBeds??0:0),base=preset.input.baseBedCounts?.[room.id]??Math.max(1,Number(room.occupancy||1));return {...room,occupancy:base+extra,extraBeds:extra};});
    const result=proCalcProgram(proMadinahFromNights({...preset.input}),rooms,[]);
    const values=(result.results||[]).map(row=>row.sell).filter(Number.isFinite);
    return values.length?Math.min(...values):0;
  }catch(e){return 0;}
}
function proPresetsMarkup(){
  const presets=proQuickPresets();
  return `<div class="preset-row">${presets.map((preset,index)=>`<button type="button" class="preset" data-pro="preset" data-value="${index}"><b>${c(preset.name)}</b><small>${preset.input.makkahNights||0} ليالٍ${preset.input.madinahNights?' + '+preset.input.madinahNights+' بالمدينة':''} · ربح ${preset.input.profitValue||0}${preset.input.profitType==='fixed'?'':'٪'}</small><span class="num">من ${ne(proPresetPrice(preset))}</span><i data-pro="preset-remove" data-value="${index}" role="button" tabindex="0" aria-label="حذف القالب ${c(preset.name)}">✕</i></button>`).join('')}<button type="button" class="preset preset-add" data-pro="preset-save">+ احفظ الإعداد الحالي كقالب</button></div>`;
}
function proNegotiateRows(view){
  const rows=view.result.results||[];
  if(!rows.length)return (proRoomsOff().size?'<div class="live-error">كل الغرف معطّلة. فعّل غرفة واحدة على الأقل من قسم «الغرف والأسرّة الإضافية».</div>':'<div class="live-error">لا توجد أنواع غرف معرّفة.</div>');
  return rows.map((row,index)=>{
    const cost=row.baseCost,list=row.sell;
    const sell=proQuickExtra.sells[index]!=null?proQuickExtra.sells[index]:list;
    const profit=sell-cost,pct=cost>0?Math.round(profit/cost*100):0;
    const span=Math.max(list*1.12-cost,1);
    const fill=Math.max(0,Math.min(100,(sell-cost)/span*100));
    const state=sell<cost?'bad':'good';
    const status=state==='bad'?'خسارة':'سعر مربح';
    return `<div class="neg-row is-${state}" data-neg-row="${index}">
      <div class="neg-title"><div><b>${c(row.label)}</b><small>سعر البيع للفرد</small></div><span class="neg-status">${status}</span></div>
      <div class="neg-price-editor"><button type="button" data-pro="quick-price-step" data-index="${index}" data-value="-50" aria-label="خفض السعر 50">−50</button><label><span>السعر المقترح</span><input type="number" data-neg="${index}" value="${Number(Number(sell).toFixed(3))}" step="0.001" min="0" inputmode="decimal" aria-label="سعر بيع ${c(row.label)}"><i>د.ل</i></label><button type="button" data-pro="quick-price-step" data-index="${index}" data-value="50" aria-label="زيادة السعر 50">+50</button></div>
      <div class="neg-metrics"><span><small>التكلفة</small><b>${ne(cost)}</b></span><span><small>الربح</small><b>${profit<0?'−':'+'}${ne(Math.abs(profit))}</b></span><span><small>هامش الربح</small><b>${pct}٪</b></span></div>
      <div class="neg-bar"><i style="width:${fill}%"></i></div>
    </div>`;
  }).join('');
}
function proCustomerRows(view){
  return `<div class="cust-view">${(view.result.results||[]).map((row,index)=>{
    const sell=proQuickExtra.sells[index]!=null?proQuickExtra.sells[index]:row.sell;
    return `<div class="cust-row"><span>${c(row.label)}</span><b class="money"><bdi class="num">${ne(sell)}</bdi> <span class="cur">${c($(row.currency))}</span></b></div>`;
  }).join('')}</div>`;
}

/* ---- share card: drawn on a canvas so it leaves as an image, not a screenshot ---- */
function proShareLines(view){
  return (view.result.results||[]).map((row,index)=>({
    label:row.label,
    value:ne(proQuickExtra.sells[index]!=null?proQuickExtra.sells[index]:row.sell)+' '+$(row.currency)
  }));
}
function proShareSubtitle(){
  const hotelName=d('[name=q-makkahHotelName]')?.value?.trim()||'';
  const makkah=Number(d('[name=q-makkahNights]')?.value||0);
  const madinah=Number(d('[name=q-madinahNights]')?.value||0);
  const parts=[];
  if(hotelName)parts.push(hotelName);
  if(makkah)parts.push(makkah+' ليالٍ بمكة');
  if(madinah)parts.push(madinah+' بالمدينة');
  return parts.join(' · ');
}
/* ---- share card v2: three professional templates, drawn on canvas ---- */
const SHARE_TPL_KEY='olympi_share_template';
const SHARE_TEMPLATES=[
  {id:'kaaba',name:'الكعبة'},
  {id:'royal',name:'الملكي'},
  {id:'clean',name:'الأبيض الأنيق'},
  {id:'ticket',name:'تذكرة السفر'},
  {id:'arch',name:'القوس'},
  {id:'luxe',name:'الفاخر'}
];
const SC={blue:'#051b95',deep:'#03125e',ink:'#141a3a',muted:'#5d6480',soft:'#eef1fb',line:'#dfe3f3',white:'#ffffff',paper:'#f5f6fb'};
const SF=(w,px)=>`${w} ${px}px Tajawal, Tahoma, sans-serif`;
function shareTpl(){try{const v=localStorage.getItem(SHARE_TPL_KEY);return SHARE_TEMPLATES.some(t=>t.id===v)?v:'royal';}catch(e){return 'royal';}}
function shareSetTpl(id){try{localStorage.setItem(SHARE_TPL_KEY,id);}catch(e){}}
function arNights(n){n=Number(n)||0;if(n===1)return 'ليلة واحدة';if(n===2)return 'ليلتان';if(n>=3&&n<=10)return n+' ليالٍ';return n+' ليلة';}
function arDays(n){n=Number(n)||0;if(n===1)return 'يوم واحد';if(n===2)return 'يومان';if(n>=3&&n<=10)return n+' أيام';return n+' يوماً';}
function shareStay(){
  const val=n=>d('[name=q-'+n+']')?.value?.trim()||'';
  const mk=Number(val('makkahNights')||0),md=Number(val('madinahNights')||0),total=mk+md;
  return {
    makkah:{hotel:val('makkahHotelName'),nights:mk},
    madinah:md>0?{hotel:val('madinahHotelName'),nights:md}:null,
    total,totalText:total?arNights(total):''
  };
}
function shareData(view){
  const rows=(view.result.results||[]).map((row,index)=>({
    label:row.label,
    value:Number(proQuickExtra.sells[index]!=null?proQuickExtra.sells[index]:row.sell)||0,
    amount:ne(proQuickExtra.sells[index]!=null?proQuickExtra.sells[index]:row.sell),
    currency:$(row.currency)
  }));
  const until=new Date(Date.now()+14*864e5).toLocaleDateString('ar-LY',{year:'numeric',month:'long',day:'numeric'});
  const today=new Date().toLocaleDateString('ar-LY',{year:'numeric',month:'long',day:'numeric'});
  const contact=String(s.boot?.company?.contact||s.boot?.settings?.contact||'');
  const name=s.boot?.settings?.name||'الأولمبي لخدمات الحج والعمرة';
  return {rows,stay:shareStay(),until,today,contact,name,tripName:(d('[name=q-tripName]')?.value||'').trim().slice(0,100)};
}
/* drawing helpers */
function rr(ctx,x,y,w,h,r){r=Math.min(r,h/2,w/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function fit(ctx,text,max,weight,size,min=20){text=String(text||'');let px=size;ctx.font=SF(weight,px);while(ctx.measureText(text).width>max&&px>min){px-=2;ctx.font=SF(weight,px);}
  if(ctx.measureText(text).width>max){while(text.length>1&&ctx.measureText(text+'…').width>max)text=text.slice(0,-1);text+='…';}return text;}
function txt(ctx,text,x,y,{w=400,size=30,color=SC.ink,align='right',max=0,min=20}={}){
  ctx.save();ctx.direction='rtl';ctx.textAlign=align;ctx.fillStyle=color;ctx.font=SF(w,size);
  const t=max?fit(ctx,text,max,w,size,min):String(text);ctx.fillText(t,x,y);ctx.restore();
}
function priceTxt(ctx,amount,currency,x,y,{size=46,color=SC.blue,curColor=null,align='left'}={}){
  // Arabic order "1350 د.ل": the number sits on the right, the currency on its left.
  ctx.save();ctx.direction='ltr';ctx.textAlign='left';
  ctx.font=SF(800,size);const aw=ctx.measureText(amount).width;
  const cs=Math.round(size*.55);ctx.font=SF(500,cs);const cw=ctx.measureText(currency).width;const gap=10;
  const left=align==='left'?x:x-(aw+gap+cw);
  ctx.fillStyle=curColor||color;ctx.font=SF(500,cs);ctx.fillText(currency,left,y);
  ctx.fillStyle=color;ctx.font=SF(800,size);ctx.fillText(amount,left+cw+gap,y);
  ctx.restore();
}

function tintLogo(img,color){
  const c=document.createElement('canvas');c.width=img.width;c.height=img.height;
  const x=c.getContext('2d');x.drawImage(img,0,0);x.globalCompositeOperation='source-in';x.fillStyle=color;x.fillRect(0,0,c.width,c.height);return c;
}
function drawLogo(ctx,img,cx,y,h,{color=null,align='center'}={}){
  if(!img)return 0;const src=color?tintLogo(img,color):img;const w=img.width/img.height*h;
  const x=align==='center'?cx-w/2:align==='right'?cx-w:cx;ctx.drawImage(src,x,y,w,h);return w;
}
function drawEmblem(ctx,img,x,y,h,alpha,color){
  if(!img)return;const sx=img.width*0.12,sw=img.width*0.77,sh=img.height*0.60;const src=color?tintLogo(img,color):img;
  const w=sw/sh*h;ctx.save();ctx.globalAlpha=alpha;ctx.drawImage(src,sx,0,sw,sh,x,y,w,h);ctx.restore();
}
function pin(ctx,x,y,r,fill,dot){ctx.save();ctx.fillStyle=fill;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.fillStyle=dot;ctx.beginPath();ctx.arc(x,y,r*.42,0,Math.PI*2);ctx.fill();ctx.restore();}
function dashed(ctx,x1,y1,x2,y2,color,dash=[10,10],wid=3){ctx.save();ctx.strokeStyle=color;ctx.lineWidth=wid;ctx.setLineDash(dash);ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.restore();}

/* Template 1 — royal: deep blue, white logo, glass info panel, white price cards */
function shareRoyal(ctx,W,D,logo,measure){
  const pad=64,rowH=112,rowGap=16;
  const stayRows=[D.stay.makkah,D.stay.madinah].filter(Boolean);
  const stayH=40+stayRows.length*118+(D.stay.total?96:0);
  const top=372,pricesTop=top+stayH+70;
  const H=pricesTop+60+D.rows.length*(rowH+rowGap)+(D.contact?230:190);
  if(measure)return H;
  const g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#0a2ab8');g.addColorStop(.55,SC.blue);g.addColorStop(1,SC.deep);
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  drawEmblem(ctx,logo,-120,H-620,700,.06,'#ffffff');
  drawEmblem(ctx,logo,W-260,-80,380,.05,'#ffffff');
  drawLogo(ctx,logo,W/2,48,210,{color:'#ffffff'});
  // title
  ctx.save();ctx.fillStyle='rgba(255,255,255,.14)';rr(ctx,W/2-170,284,340,54,27);ctx.fill();ctx.restore();
  txt(ctx,'عرض سعر خاص',W/2,321,{w:700,size:28,color:'#fff',align:'center'});
  // stay panel
  ctx.save();ctx.fillStyle='rgba(255,255,255,.09)';ctx.strokeStyle='rgba(255,255,255,.22)';ctx.lineWidth=2;rr(ctx,pad,top,W-pad*2,stayH,28);ctx.fill();ctx.stroke();ctx.restore();
  let y=top+40;
  stayRows.forEach((st,i)=>{
    const city=i===0?'مكة المكرمة':'المدينة المنورة';
    pin(ctx,W-pad-44,y+36,16,'rgba(255,255,255,.95)',SC.blue);
    txt(ctx,city,W-pad-78,y+22,{w:500,size:24,color:'rgba(255,255,255,.72)'});
    txt(ctx,st.hotel||'—',W-pad-78,y+68,{w:700,size:36,color:'#fff',max:560});
    ctx.save();ctx.fillStyle='rgba(255,255,255,.95)';rr(ctx,pad+36,y+18,220,58,29);ctx.fill();ctx.restore();
    txt(ctx,arNights(st.nights),pad+146,y+57,{w:800,size:28,color:SC.blue,align:'center'});
    y+=118;
  });
  if(D.stay.total){
    ctx.save();ctx.strokeStyle='rgba(255,255,255,.22)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(pad+36,y+4);ctx.lineTo(W-pad-36,y+4);ctx.stroke();ctx.restore();
    txt(ctx,'مدة الإقامة كاملة',W-pad-40,y+62,{w:500,size:28,color:'rgba(255,255,255,.8)'});
    txt(ctx,D.stay.totalText,pad+40,y+64,{w:800,size:34,color:'#fff',align:'left'});
  }
  // prices
  txt(ctx,'الأسعار للفرد',W-pad,pricesTop+14,{w:700,size:30,color:'#fff'});
  txt(ctx,'بالدينار الليبي',pad,pricesTop+14,{w:400,size:24,color:'rgba(255,255,255,.7)',align:'left'});
  let py=pricesTop+44;
  D.rows.forEach(row=>{
    ctx.save();ctx.shadowColor='rgba(0,0,0,.18)';ctx.shadowBlur=24;ctx.shadowOffsetY=8;ctx.fillStyle='#fff';rr(ctx,pad,py,W-pad*2,rowH,22);ctx.fill();ctx.restore();
    ctx.save();ctx.fillStyle=SC.blue;rr(ctx,W-pad-10,py+24,10,rowH-48,5);ctx.fill();ctx.restore();
    txt(ctx,row.label,W-pad-40,py+rowH/2+12,{w:700,size:34,color:SC.ink,max:420});
    priceTxt(ctx,row.amount,row.currency,pad+36,py+rowH/2+16,{size:48,color:SC.blue,curColor:SC.muted});
    py+=rowH+rowGap;
  });
  // footer
  const fy=py+40;
  txt(ctx,'ساري حتى '+D.until,W/2,fy+10,{w:500,size:26,color:'rgba(255,255,255,.85)',align:'center'});
  if(D.contact)txt(ctx,D.contact,W/2,fy+58,{w:700,size:30,color:'#fff',align:'center'});
  txt(ctx,D.name,W/2,H-44,{w:500,size:22,color:'rgba(255,255,255,.55)',align:'center'});
  return H;
}

/* Template 2 — clean: white paper, blue header strip, three info tiles, zebra price list */
function shareClean(ctx,W,D,logo,measure){
  const pad=60,rowH=96;
  const tiles=[D.stay.makkah&&{k:'فندق مكة',v:D.stay.makkah.hotel||'—',s:arNights(D.stay.makkah.nights)},
    D.stay.madinah&&{k:'فندق المدينة',v:D.stay.madinah.hotel||'—',s:arNights(D.stay.madinah.nights)}].filter(Boolean);
  const tilesTop=350,tileH=176,totalH=D.stay.total?104:0;
  const listTop=tilesTop+tileH+(totalH?totalH+24:0)+64;
  const H=listTop+70+D.rows.length*rowH+60+170;
  if(measure)return H;
  ctx.fillStyle=SC.paper;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#fff';rr(ctx,24,24,W-48,H-48,34);ctx.fill();
  // header
  ctx.save();rr(ctx,24,24,W-48,270,34);ctx.clip();ctx.fillStyle=SC.soft;ctx.fillRect(24,24,W-48,270);
  drawEmblem(ctx,logo,W/2-120,40,260,.06);ctx.restore();
  drawLogo(ctx,logo,W-pad-10,52,200,{align:'right'});
  txt(ctx,'عرض أسعار',pad+10,140,{w:800,size:44,color:SC.blue,align:'left'});
  txt(ctx,D.today,pad+10,186,{w:400,size:24,color:SC.muted,align:'left'});
  ctx.fillStyle=SC.blue;ctx.fillRect(24,290,W-48,6);
  // tiles
  const gap=22,n=tiles.length,tw=(W-pad*2-gap*(n-1))/n;
  tiles.forEach((t,i)=>{
    const x=W-pad-tw-(tw+gap)*i;
    ctx.fillStyle='#fff';ctx.strokeStyle=SC.line;ctx.lineWidth=2;rr(ctx,x,tilesTop,tw,tileH,24);ctx.fill();ctx.stroke();
    ctx.fillStyle=SC.blue;rr(ctx,x+tw-8,tilesTop+30,8,tileH-60,4);ctx.fill();
    txt(ctx,t.k,x+tw-34,tilesTop+50,{w:500,size:24,color:SC.muted});
    txt(ctx,t.v,x+tw-34,tilesTop+100,{w:800,size:34,color:SC.ink,max:tw-64});
    ctx.fillStyle=SC.soft;rr(ctx,x+tw-34-190,tilesTop+118,190,40,20);ctx.fill();
    txt(ctx,t.s,x+tw-34-95,tilesTop+146,{w:700,size:22,color:SC.blue,align:'center'});
  });
  if(D.stay.total){
    const y=tilesTop+tileH+24;
    const g=ctx.createLinearGradient(0,0,W,0);g.addColorStop(0,SC.deep);g.addColorStop(1,SC.blue);
    ctx.fillStyle=g;rr(ctx,pad,y,W-pad*2,totalH,24);ctx.fill();
    txt(ctx,'مدة الإقامة كاملة',W-pad-36,y+totalH/2+10,{w:500,size:28,color:'rgba(255,255,255,.85)'});
    txt(ctx,D.stay.totalText,pad+36,y+totalH/2+12,{w:800,size:36,color:'#fff',align:'left'});
  }
  // list
  txt(ctx,'نوع الغرفة',W-pad-24,listTop+24,{w:700,size:24,color:SC.muted});
  txt(ctx,'السعر للفرد',pad+24,listTop+24,{w:700,size:24,color:SC.muted,align:'left'});
  let y=listTop+50;
  D.rows.forEach((row,i)=>{
    if(i%2===0){ctx.fillStyle='#f7f8fd';rr(ctx,pad,y,W-pad*2,rowH,18);ctx.fill();}
    txt(ctx,row.label,W-pad-24,y+rowH/2+12,{w:700,size:34,color:SC.ink,max:440});
    priceTxt(ctx,row.amount,row.currency,pad+24,y+rowH/2+15,{size:44,color:SC.blue,curColor:SC.muted});
    y+=rowH;
  });
  // footer
  const fy=H-24-150;
  ctx.save();rr(ctx,24,fy,W-48,150,34);ctx.clip();ctx.fillStyle=SC.blue;ctx.fillRect(24,fy,W-48,150);ctx.fillRect(24,fy,W-48,40);ctx.restore();
  ctx.fillStyle=SC.blue;ctx.fillRect(24,fy,W-48,40);
  txt(ctx,'الأسعار بالدينار الليبي · ساري حتى '+D.until,W/2,fy+(D.contact?62:84),{w:500,size:26,color:'#fff',align:'center'});
  if(D.contact)txt(ctx,D.contact,W/2,fy+112,{w:800,size:30,color:'#fff',align:'center'});
  return H;
}

/* Template 3 — ticket: boarding-pass layout with journey route and perforation */
function shareTicket(ctx,W,D,logo,measure){
  const m=48,pad=m+44,cols=2,cellH=150,cellGap=18;
  const rowsN=Math.ceil(D.rows.length/cols);
  const routeTop=300,routeH=D.stay.madinah?330:230;
  const perfY=routeTop+routeH+30;
  const gridTop=perfY+70;
  const H=gridTop+60+rowsN*(cellH+cellGap)+(D.contact?190:150)+m;
  if(measure)return H;
  const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,SC.blue);g.addColorStop(1,SC.deep);
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  drawEmblem(ctx,logo,W-330,H-420,460,.07,'#ffffff');
  // ticket body with notches
  ctx.save();ctx.fillStyle='#fff';rr(ctx,m,m,W-m*2,H-m*2,36);ctx.fill();
  ctx.fillStyle=g;
  [m,W-m].forEach(x=>{ctx.beginPath();ctx.arc(x,perfY,30,0,Math.PI*2);ctx.fill();});ctx.restore();
  dashed(ctx,m+44,perfY,W-m-44,perfY,SC.line,[14,12],3);
  // header
  drawLogo(ctx,logo,W-pad,m+30,170,{align:'right'});
  txt(ctx,'بطاقة عرض سعر',pad,m+100,{w:800,size:36,color:SC.blue,align:'left'});
  txt(ctx,D.today,pad,m+140,{w:400,size:22,color:SC.muted,align:'left'});
  ctx.fillStyle=SC.soft;ctx.fillRect(m,m+226,W-m*2,2);
  // route
  const st=D.stay,y0=routeTop+30;
  const node=(x,city,hotel,nights,align)=>{
    txt(ctx,city,x,y0+26,{w:500,size:24,color:SC.muted,align});
    txt(ctx,hotel||'—',x,y0+76,{w:800,size:34,color:SC.ink,align,max:380});
    const bw=180,bx=align==='right'?x-bw:x;
    ctx.fillStyle=SC.soft;rr(ctx,bx,y0+100,bw,46,23);ctx.fill();
    txt(ctx,arNights(nights),bx+bw/2,y0+132,{w:700,size:24,color:SC.blue,align:'center'});
  };
  if(st.madinah){
    node(W-pad,'مكة المكرمة',st.makkah.hotel,st.makkah.nights,'right');
    node(pad,'المدينة المنورة',st.madinah.hotel,st.madinah.nights,'left');
    const ly=y0+196;
    pin(ctx,W-pad-14,ly,14,SC.blue,'#fff');pin(ctx,pad+14,ly,14,SC.blue,'#fff');
    dashed(ctx,pad+34,ly,W-pad-34,ly,SC.blue,[4,10],4);
    ctx.save();ctx.fillStyle=SC.blue;rr(ctx,W/2-210,ly-32,420,64,32);ctx.fill();ctx.restore();
    txt(ctx,st.totalText,W/2,ly+11,{w:800,size:28,color:'#fff',align:'center',max:390});
    txt(ctx,'مدة الإقامة كاملة',W/2,ly+72,{w:500,size:22,color:SC.muted,align:'center'});
  }else{
    node(W-pad,'مكة المكرمة',st.makkah.hotel,st.makkah.nights,'right');
    if(st.total){
      ctx.fillStyle=SC.blue;rr(ctx,pad,y0+10,330,120,24);ctx.fill();
      txt(ctx,'مدة الإقامة كاملة',pad+165,y0+54,{w:500,size:22,color:'rgba(255,255,255,.8)',align:'center'});
      txt(ctx,st.totalText,pad+165,y0+100,{w:800,size:28,color:'#fff',align:'center',max:300});
    }
  }
  // price grid
  txt(ctx,'الأسعار للفرد بالدينار الليبي',W-pad,gridTop+20,{w:700,size:26,color:SC.muted});
  const cw=(W-pad*2-cellGap)/cols;
  D.rows.forEach((row,i)=>{
    const c=i%cols,r=Math.floor(i/cols);
    const last=i===D.rows.length-1&&D.rows.length%cols===1;
    const w=last?W-pad*2:cw,x=last?pad:W-pad-cw-(cw+cellGap)*c,y=gridTop+50+r*(cellH+cellGap);
    ctx.fillStyle='#f6f7fd';ctx.strokeStyle=SC.line;ctx.lineWidth=2;rr(ctx,x,y,w,cellH,22);ctx.fill();ctx.stroke();
    txt(ctx,row.label,x+w-28,y+50,{w:700,size:28,color:SC.muted,max:w-56});
    priceTxt(ctx,row.amount,row.currency,x+w-28,y+116,{size:46,color:SC.blue,curColor:SC.muted,align:'right'});
  });
  const fy=H-m-(D.contact?150:110);
  ctx.fillStyle=SC.soft;ctx.fillRect(m,fy,W-m*2,2);
  txt(ctx,'ساري حتى '+D.until,W/2,fy+56,{w:500,size:26,color:SC.muted,align:'center'});
  if(D.contact)txt(ctx,D.contact,W/2,fy+104,{w:800,size:30,color:SC.blue,align:'center'});
  return H;
}
/* ---- Facebook post format: 1080 × 1350 (4:5, Meta's recommended feed post size) ---- */
const FB_W=1080,FB_H=1350;
const FB_NAMES={royal:'الكعبة',clean:'القوس',ticket:'الفاخر'};
function star8(ctx,cx,cy,r){
  ctx.beginPath();
  for(let i=0;i<16;i++){const a=Math.PI/8*i-Math.PI/2,rad=i%2?r*.72:r;ctx.lineTo(cx+Math.cos(a)*rad,cy+Math.sin(a)*rad);}
  ctx.closePath();
}
function starPattern(ctx,x,y,w,h,step,color){
  ctx.save();ctx.strokeStyle=color;ctx.lineWidth=2;
  for(let yy=y;yy<y+h+step;yy+=step)for(let xx=x+((yy/step)%2?step/2:0);xx<x+w+step;xx+=step){star8(ctx,xx,yy,step*.3);ctx.stroke();}
  ctx.restore();
}
function fbMinPrice(D){
  let best=null;D.rows.forEach(r=>{if(r.value>0&&(!best||r.value<best.value))best=r;});return best;
}
function fbChips(ctx,items,cy,{bg,color,size=26,h=54,gap=14,W}){
  ctx.font=SF(700,size);
  const ws=items.map(t=>ctx.measureText(t).width+48),total=ws.reduce((a,b)=>a+b,0)+gap*(items.length-1);
  let xr=W/2+total/2;
  items.forEach((t,i)=>{const w=ws[i];ctx.fillStyle=bg;rr(ctx,xr-w,cy-h/2,w,h,h/2);ctx.fill();
    txt(ctx,t,xr-w/2,cy+size*.36,{w:700,size,color,align:'center'});xr-=w+gap;});
}
function fbStayChips(D){
  const out=[];
  if(D.stay.makkah)out.push('مكة · '+arNights(D.stay.makkah.nights));
  if(D.stay.madinah)out.push('المدينة · '+arNights(D.stay.madinah.nights));
  return out;
}
/* menu-style price list with dotted leaders; switches to two columns when rooms are many */
function fbMenu(ctx,rows,x,y,w,h,{label=SC.ink,price=SC.blue,cur=SC.muted,dots=SC.line,zebra=null}={}){
  const cols=rows.length>7?2:1,per=Math.ceil(rows.length/cols),gap=40;
  const cw=(w-gap*(cols-1))/cols,rh=Math.min(92,h/Math.max(per,1));
  const used=rh*per,oy=y+(h-used)/2;
  const ls=Math.round(Math.min(34,rh*.4)),ps=Math.round(Math.min(44,rh*.5));
  rows.forEach((row,i)=>{
    const c=Math.floor(i/per),r=i%per,R=x+w-(cw+gap)*c,L=R-cw,cy=oy+r*rh+rh/2;
    if(zebra&&r%2===0){ctx.fillStyle=zebra;rr(ctx,L,cy-rh/2+4,cw,rh-8,16);ctx.fill();}
    const inset=zebra?22:0;
    let lpx=Math.round(ls);ctx.font=SF(700,lpx);while(ctx.measureText(row.label).width>cw*.45&&lpx>14){lpx-=2;ctx.font=SF(700,lpx);}
    const lab=fit(ctx,row.label,cw*.45,700,lpx,lpx);ctx.font=SF(700,lpx);const lw=ctx.measureText(lab).width;
    txt(ctx,lab,R-inset,cy+lpx*.36,{w:700,size:lpx,color:label});
    ctx.font=SF(800,ps);const aw=ctx.measureText(row.amount).width;ctx.font=SF(500,Math.round(ps*.55));const pw=aw+10+ctx.measureText(row.currency).width;
    priceTxt(ctx,row.amount,row.currency,L+inset,cy+ps*.36,{size:ps,color:price,curColor:cur,align:'left'});
    const d1=L+inset+pw+18,d2=R-inset-lw-18;
    if(d2-d1>20){ctx.save();ctx.fillStyle=dots;for(let dx=d2;dx>d1;dx-=14){ctx.beginPath();ctx.arc(dx,cy,2.4,0,Math.PI*2);ctx.fill();}ctx.restore();}
  });
}
function fbHotels(ctx,D,x,y,w,{label=SC.muted,name=SC.blue,pinFill=SC.blue,pinDot='#fff'}={}){
  const list=[D.stay.makkah&&{city:'فندق مكة المكرمة',...D.stay.makkah},D.stay.madinah&&{city:'فندق المدينة المنورة',...D.stay.madinah}].filter(Boolean);
  const cw=w/list.length;
  list.forEach((h,i)=>{const R=x+w-cw*i;
    pin(ctx,R-16,y+14,14,pinFill,pinDot);
    txt(ctx,h.city,R-42,y+22,{w:500,size:24,color:label});
    txt(ctx,h.hotel||'—',R-42,y+66,{w:800,size:32,color:name,max:cw-70,min:16});
  });
}

/* 1 — الكعبة: night sky over Masjid al-Haram with the Kaaba and tawaf rings */
function seedRand(seed){return ()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};}
function drawCrescent(ctx,x,y,r,color){
  const c=document.createElement('canvas');c.width=c.height=Math.ceil(r*2+4);const k=c.getContext('2d');
  k.fillStyle=color;k.beginPath();k.arc(r+2,r+2,r,0,Math.PI*2);k.fill();
  k.globalCompositeOperation='destination-out';k.beginPath();k.arc(r+2+r*.42,r+2-r*.18,r*.86,0,Math.PI*2);k.fill();
  ctx.drawImage(c,x-r-2,y-r-2);
}
function drawMinaret(ctx,x,base,h,w,color){
  ctx.fillStyle=color;
  ctx.fillRect(x-w/2,base-h,w,h);
  [0.42,0.68].forEach(f=>ctx.fillRect(x-w*.9,base-h*f,w*1.8,7));   // balconies
  ctx.beginPath();ctx.moveTo(x-w*.62,base-h);ctx.lineTo(x,base-h-w*2.6);ctx.lineTo(x+w*.62,base-h);ctx.closePath();ctx.fill();
  ctx.fillRect(x-1.5,base-h-w*2.6-16,3,16);
}
function drawKaaba(ctx,cx,base,fw,sw,h,sd){
  const L=cx-(fw+sw)/2,F=L+fw,T=base-h;
  // glow
  const glow=ctx.createRadialGradient(cx,base-h*.5,10,cx,base-h*.5,fw*1.8);glow.addColorStop(0,'rgba(220,228,255,.35)');glow.addColorStop(1,'rgba(220,228,255,0)');
  ctx.fillStyle=glow;ctx.fillRect(cx-fw*2,base-h*1.6,fw*4,h*2);
  // top
  ctx.fillStyle='#3a3a3f';ctx.beginPath();ctx.moveTo(L,T);ctx.lineTo(F,T);ctx.lineTo(F+sw,T-sd);ctx.lineTo(L+sw,T-sd);ctx.closePath();ctx.fill();
  // front
  ctx.fillStyle='#15151a';ctx.fillRect(L,T,fw,h);
  // side
  ctx.fillStyle='#0a0a0e';ctx.beginPath();ctx.moveTo(F,T);ctx.lineTo(F+sw,T-sd);ctx.lineTo(F+sw,base-sd);ctx.lineTo(F,base);ctx.closePath();ctx.fill();
  // gold belt (hizam)
  const by=T+h*.2,bh=h*.075,gold=ctx.createLinearGradient(L,0,F+sw,0);gold.addColorStop(0,'#b88a2e');gold.addColorStop(.5,'#f0d27a');gold.addColorStop(1,'#a57a26');
  ctx.fillStyle=gold;ctx.fillRect(L,by,fw,bh);
  ctx.beginPath();ctx.moveTo(F,by);ctx.lineTo(F+sw,by-sd);ctx.lineTo(F+sw,by-sd+bh);ctx.lineTo(F,by+bh);ctx.closePath();ctx.fill();
  // belt pattern
  ctx.fillStyle='rgba(20,20,26,.55)';for(let x=L+8;x<F-6;x+=18)ctx.fillRect(x,by+bh*.3,9,bh*.4);
  // door
  const dw=fw*.2,dx=F-fw*.34,dt=T+h*.38,db=base-h*.12;
  ctx.fillStyle=gold;ctx.fillRect(dx,dt,dw,db-dt);
  ctx.fillStyle='rgba(90,60,10,.45)';ctx.fillRect(dx+dw/2-1,dt+6,2,db-dt-12);
  // hijr ismail (semi-circle wall) on the left
  ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(L-2,base-6,fw*.42,16,0,Math.PI*.5,Math.PI*1.5);ctx.stroke();
}
function fbKaabaPhoto(ctx,W,D,logo,ground){
  const img=D.photo,h=ground+12,k=Math.max(W/img.width,h/img.height),dw=img.width*k,dh=img.height*k;
  ctx.save();ctx.beginPath();ctx.rect(0,0,W,h);ctx.clip();
  ctx.drawImage(img,(W-dw)/2,(h-dh)*D.photoFocus,dw,dh);
  // brand grade: deep navy at the top for the logo and title, clear in the middle, blue at the bottom edge
  const g=ctx.createLinearGradient(0,0,0,h);
  g.addColorStop(0,'rgba(2,10,54,.88)');g.addColorStop(.30,'rgba(3,18,94,.62)');g.addColorStop(.55,'rgba(5,27,149,.10)');
  g.addColorStop(.82,'rgba(5,27,149,.18)');g.addColorStop(1,'rgba(3,18,94,.78)');
  ctx.fillStyle=g;ctx.fillRect(0,0,W,h);
  const v=ctx.createRadialGradient(W/2,h*.62,h*.25,W/2,h*.55,W*.85);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(2,10,54,.45)');
  ctx.fillStyle=v;ctx.fillRect(0,0,W,h);
  ctx.restore();
  ctx.save();ctx.shadowColor='rgba(0,0,0,.35)';ctx.shadowBlur=18;
  drawLogo(ctx,logo,W/2,34,150,{color:'#ffffff'});
  if(!D.callig)txt(ctx,D.calligHeader===false?'رحلة عمرة':'لبيك اللهم لبيك',W/2,254,{w:800,size:66,color:'#fff',align:'center'});
  ctx.restore();
  const chips=fbStayChips(D);if(D.stay.madinah&&D.stay.total)chips.push('الإجمالي '+D.stay.totalText);
  fbChips(ctx,chips,306,{bg:'rgba(2,10,54,.45)',color:'#fff',size:24,W});
}
/* Kaaba template with a real photo — cinematic full-bleed photo, brand colour grade,
   frosted-glass chips and a floating content card */
function fbKaabaPro(ctx,W,D,logo){
  const H=FB_H,PH=860,cardX=40,cardTop=742,cardW=W-80,cardH=H-cardTop-28;
  // 1) graded photo on an offscreen layer (reused for the frosted glass)
  const L=document.createElement('canvas');L.width=W;L.height=PH;const g=L.getContext('2d');
  const img=D.photo,k=Math.max(W/img.width,PH/img.height),dw=img.width*k,dh=img.height*k;
  g.filter='contrast(1.08) saturate(1.06) brightness(1.02)';
  g.drawImage(img,(W-dw)/2,(PH-dh)*D.photoFocus,dw,dh);g.filter='none';
  g.globalCompositeOperation='soft-light';g.fillStyle='rgba(5,27,149,.55)';g.fillRect(0,0,W,PH);   // brand tint
  g.globalCompositeOperation='source-over';
  const top=g.createLinearGradient(0,0,0,300);top.addColorStop(0,'rgba(3,18,107,.78)');top.addColorStop(1,'rgba(3,18,107,0)');
  g.fillStyle=top;g.fillRect(0,0,W,300);
  const bot=g.createLinearGradient(0,PH*.52,0,PH);bot.addColorStop(0,'rgba(3,18,107,0)');bot.addColorStop(.4,'rgba(3,18,107,.6)');bot.addColorStop(.78,'rgba(3,18,107,.94)');bot.addColorStop(1,'#03126b');
  g.fillStyle=bot;g.fillRect(0,PH*.52,W,PH*.48);
  const vg=g.createRadialGradient(W/2,PH*.42,PH*.3,W/2,PH*.45,W*.9);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(3,18,107,.5)');
  g.fillStyle=vg;g.fillRect(0,0,W,PH);
  // 2) page: navy base, the photo, then a soft blend into the base
  const base=ctx.createLinearGradient(0,PH-40,0,H);base.addColorStop(0,'#03126b');base.addColorStop(1,'#03126b');
  ctx.fillStyle=base;ctx.fillRect(0,0,W,H);
  ctx.drawImage(L,0,0);
  starPattern(ctx,0,PH-10,W,H-PH+10,170,'rgba(255,255,255,.035)');
  const glass=(x,y,w,h,r,alpha=.16)=>{
    ctx.save();rr(ctx,x,y,w,h,r);ctx.clip();ctx.filter='blur(16px)';ctx.drawImage(L,0,0);ctx.filter='none';
    ctx.fillStyle=`rgba(255,255,255,${alpha})`;ctx.fillRect(x,y,w,h);ctx.restore();
    ctx.save();rr(ctx,x+.5,y+.5,w-1,h-1,r);ctx.strokeStyle='rgba(255,255,255,.38)';ctx.lineWidth=1.5;ctx.stroke();ctx.restore();
  };
  // 3) brand + headline
  ctx.save();ctx.shadowColor='rgba(0,0,0,.35)';ctx.shadowBlur=20;
  drawLogo(ctx,logo,W/2,36,132,{color:'#ffffff'});ctx.restore();
  if(D.callig){
    const ch0=470,cw0=D.callig.width/D.callig.height*ch0,b=calligAdj(D.calligOpts,W-52-cw0,118,cw0,ch0,W,FB_H,'h'),ch=b.h,cw=b.w,cx=b.x,cy=b.y;
    const sh=ctx.createRadialGradient(cx+cw/2,cy+ch/2,20,cx+cw/2,cy+ch/2,ch*.62);sh.addColorStop(0,`rgba(3,18,107,${.55*b.a})`);sh.addColorStop(1,'rgba(3,18,107,0)');
    ctx.fillStyle=sh;ctx.fillRect(cx-ch*.4,cy-40,cw+ch*.8,ch+80);
    ctx.save();ctx.globalAlpha=b.a;drawCallig(ctx,D.callig,cx,cy,ch,{finish:shareCalligFinish(D.calligOpts?.hColor,'pearl')});ctx.restore();
  }else{ctx.save();ctx.shadowColor='rgba(0,0,0,.45)';ctx.shadowBlur=24;
  txt(ctx,D.calligHeader===false?'رحلة عمرة':'لبيك اللهم لبيك',W/2,556,{w:800,size:70,color:'#fff',align:'center'});ctx.restore();}
  const gold=ctx.createLinearGradient(W/2-90,0,W/2+90,0);gold.addColorStop(0,'rgba(255,255,255,0)');gold.addColorStop(.5,'#ffffff');gold.addColorStop(1,'rgba(255,255,255,0)');
  ctx.fillStyle=gold;ctx.fillRect(W/2-150,576,300,3);
  txt(ctx,D.stay.madinah?'رحلة إلى مكة المكرمة والمدينة المنورة':'رحلة إلى مكة المكرمة',W/2,614,{w:500,size:26,color:'rgba(255,255,255,.88)',align:'center'});
  // frosted chips
  const chips=fbStayChips(D);if(D.stay.madinah&&D.stay.total)chips.push('الإجمالي '+D.stay.totalText);
  ctx.font=SF(700,24);const ws=chips.map(t=>ctx.measureText(t).width+50),gap=12,tot=ws.reduce((a,b)=>a+b,0)+gap*(chips.length-1);
  let xr=W/2+tot/2;chips.forEach((t,i)=>{const w=ws[i];glass(xr-w,634,w,48,24);txt(ctx,t,xr-w/2,666,{w:700,size:24,color:'#fff',align:'center'});xr-=w+gap;});
  // 4) floating content card
  ctx.save();ctx.shadowColor='rgba(0,0,0,.35)';ctx.shadowBlur=50;ctx.shadowOffsetY=18;ctx.fillStyle='#fff';rr(ctx,cardX,cardTop,cardW,cardH,34);ctx.fill();ctx.restore();
  const min=fbMinPrice(D);let y=cardTop+34;
  if(min){ // "starting from" badge riding the card edge
    ctx.font=SF(800,40);const aw=ctx.measureText(min.amount).width;ctx.font=SF(500,22);const cw=ctx.measureText(min.currency).width;ctx.font=SF(500,24);const lw=ctx.measureText('ابتداءً من').width;
    const bw=lw+aw+cw+84,bx=W/2-bw/2,by=cardTop-36;
    ctx.save();ctx.shadowColor='rgba(0,0,0,.25)';ctx.shadowBlur=20;ctx.shadowOffsetY=6;
    const bg=ctx.createLinearGradient(bx,0,bx+bw,0);bg.addColorStop(0,'#0b2cc0');bg.addColorStop(1,SC.blue);ctx.fillStyle=bg;rr(ctx,bx,by,bw,72,36);ctx.fill();ctx.restore();
    ctx.save();rr(ctx,bx+1.5,by+1.5,bw-3,69,35);ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineWidth=2;ctx.stroke();ctx.restore();
    txt(ctx,'ابتداءً من',bx+bw-26,by+45,{w:500,size:24,color:'rgba(255,255,255,.85)'});
    priceTxt(ctx,min.amount,min.currency,bx+26,by+50,{size:40,color:'#fff',curColor:'#c9d4ff'});
    y=cardTop+56;
  }
  const inner=cardX+40,iw=cardW-80;
  fbHotels(ctx,D,inner,y,iw);
  y+=88;ctx.fillStyle=SC.line;ctx.fillRect(inner,y,iw,2);y+=4;
  txt(ctx,'الأسعار للفرد بالدينار الليبي',inner+iw,y+30,{w:700,size:22,color:SC.muted});
  const footH=D.contact?92:62,footY=cardTop+cardH-footH;
  fbMenu(ctx,D.rows,inner,y+40,iw,footY-y-46,{zebra:'#f5f6fc'});
  ctx.fillStyle=SC.line;ctx.fillRect(inner,footY,iw,2);
  txt(ctx,'ساري حتى '+D.until,W/2,footY+42,{w:500,size:22,color:SC.muted,align:'center'});
  if(D.contact)txt(ctx,'للحجز: '+D.contact,W/2,footY+80,{w:800,size:28,color:SC.blue,align:'center'});
  return H;
}

function fbKaaba(ctx,W,D,logo,measure){
  if(measure)return FB_H;
  if(D.photo)return fbKaabaPro(ctx,W,D,logo);const H=FB_H,m=44,ground=640;
  const sky=ctx.createLinearGradient(0,0,0,ground);sky.addColorStop(0,'#03126b');sky.addColorStop(.7,'#061a8a');sky.addColorStop(1,'#0b2cc0');
  ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
  if(D.photo){fbKaabaPhoto(ctx,W,D,logo,ground);}else{
  const rnd=seedRand(7);ctx.fillStyle='#fff';
  for(let i=0;i<90;i++){const x=rnd()*W,y=rnd()*ground*.8,r=rnd()*1.8+.4;ctx.globalAlpha=.25+rnd()*.6;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();}
  ctx.globalAlpha=1;
  drawCrescent(ctx,D.callig?120:W-120,110,44,'rgba(255,255,255,.95)');
  drawLogo(ctx,logo,W/2,34,150,{color:'#ffffff'});
  if(!D.callig)txt(ctx,D.calligHeader===false?'رحلة عمرة':'لبيك اللهم لبيك',W/2,254,{w:800,size:66,color:'#fff',align:'center'});
  const chips=fbStayChips(D);if(D.stay.madinah&&D.stay.total)chips.push('الإجمالي '+D.stay.totalText);
  fbChips(ctx,chips,306,{bg:'rgba(255,255,255,.14)',color:'#fff',size:24,W});
  // haram silhouette: colonnade + minarets
  const sil='rgba(255,255,255,.13)';
  ctx.fillStyle=sil;ctx.fillRect(0,ground-120,W,120);
  ctx.fillStyle='rgba(3,18,107,.55)';
  for(let x=10;x<W;x+=62){ctx.beginPath();ctx.moveTo(x,ground-20);ctx.lineTo(x,ground-78);ctx.arc(x+22,ground-78,22,Math.PI,0);ctx.lineTo(x+44,ground-20);ctx.closePath();ctx.fill();}
  [[110,250],[250,300],[830,300],[970,250]].forEach(([x,h])=>drawMinaret(ctx,x,ground-110,h,16,sil));
  // courtyard + tawaf rings
  const court=ctx.createLinearGradient(0,ground-30,0,ground+40);court.addColorStop(0,'#dfe5f7');court.addColorStop(1,'#c3cdf0');
  ctx.fillStyle=court;ctx.beginPath();ctx.ellipse(W/2,ground+10,W*.62,70,0,Math.PI,0);ctx.fill();
  ctx.strokeStyle='rgba(5,27,149,.18)';ctx.lineWidth=2;
  [[330,46],[270,38],[210,30]].forEach(([rx,ry])=>{ctx.beginPath();ctx.ellipse(W/2,ground-8,rx,ry,0,Math.PI,0);ctx.stroke();});
  drawKaaba(ctx,W/2,ground-14,170,96,190,36);
  if(D.callig){const ch0=400,cw0=D.callig.width/D.callig.height*ch0,b=calligAdj(D.calligOpts,W-60-cw0,190,cw0,ch0,W,FB_H,'h');ctx.save();ctx.globalAlpha=b.a;drawCallig(ctx,D.callig,b.x,b.y,b.h,{finish:shareCalligFinish(D.calligOpts?.hColor,'pearl')});ctx.restore();}
  }
  // content card
  const top=ground+12;
  ctx.fillStyle='#fff';ctx.fillRect(0,top,W,H-top);
  const g=ctx.createLinearGradient(0,0,W,0);g.addColorStop(0,SC.deep);g.addColorStop(.5,SC.blue);g.addColorStop(1,SC.deep);ctx.fillStyle=g;ctx.fillRect(0,top,W,8);
  const inner=m+26;let y=top+44;
  fbHotels(ctx,D,inner,y,W-inner*2);
  y+=100;ctx.fillStyle=SC.line;ctx.fillRect(inner,y,W-inner*2,2);y+=8;
  txt(ctx,'الأسعار للفرد بالدينار الليبي',W-inner,y+34,{w:700,size:24,color:SC.muted});
  const footH=D.contact?120:90,footY=H-footH;
  fbMenu(ctx,D.rows,inner,y+48,W-inner*2,footY-y-64,{zebra:'#f5f6fc'});
  ctx.fillStyle=SC.blue;ctx.fillRect(0,footY,W,footH);
  txt(ctx,'ساري حتى '+D.until,W/2,footY+(D.contact?44:56),{w:500,size:24,color:'rgba(255,255,255,.9)',align:'center'});
  if(D.contact)txt(ctx,'للحجز: '+D.contact,W/2,footY+90,{w:800,size:30,color:'#fff',align:'center'});
  return H;
}

/* 2 — القوس: blue mosque-arch window over a white card */
function fbArch(ctx,W,D,logo,measure){
  if(measure)return FB_H;const H=FB_H,ax=110,aw=W-220,r=aw/2,top=40,base=640;
  ctx.fillStyle='#eef1fa';ctx.fillRect(0,0,W,H);
  starPattern(ctx,0,0,W,H,190,'rgba(5,27,149,.05)');
  const arch=()=>{ctx.beginPath();ctx.moveTo(ax,base);ctx.lineTo(ax,top+r);ctx.arc(ax+r,top+r,r,Math.PI,0);ctx.lineTo(ax+aw,base);ctx.closePath();};
  ctx.save();arch();const g=ctx.createLinearGradient(0,top,0,base);g.addColorStop(0,'#0b2cc0');g.addColorStop(1,SC.deep);ctx.fillStyle=g;ctx.fill();
  ctx.clip();starPattern(ctx,ax,top,aw,base-top,130,'rgba(255,255,255,.07)');ctx.restore();
  ctx.save();ctx.strokeStyle='rgba(5,27,149,.25)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(ax-18,base);ctx.lineTo(ax-18,top+r);ctx.arc(ax+r,top+r,r+18,Math.PI,0);ctx.lineTo(ax+aw+18,base);ctx.stroke();ctx.restore();
  drawLogo(ctx,logo,W/2,120,180,{color:'#ffffff'});
  txt(ctx,'عرض خاص',W/2,400,{w:800,size:74,color:'#fff',align:'center'});
  fbChips(ctx,fbStayChips(D),462,{bg:'rgba(255,255,255,.15)',color:'#fff',size:25,W});
  if(D.stay.total)txt(ctx,'مدة الإقامة '+D.stay.totalText,W/2,540,{w:700,size:28,color:'rgba(255,255,255,.85)',align:'center'});
  const cx=60,cy=600,cw=W-120,ch=H-cy-60;
  ctx.save();ctx.shadowColor='rgba(5,27,149,.18)';ctx.shadowBlur=40;ctx.shadowOffsetY=12;ctx.fillStyle='#fff';rr(ctx,cx,cy,cw,ch,36);ctx.fill();ctx.restore();
  const inner=cx+44;let y=cy+50;
  fbHotels(ctx,D,inner,y,cw-88);y+=112;
  ctx.fillStyle=SC.line;ctx.fillRect(inner,y,cw-88,2);y+=20;
  const footY=H-60-(D.contact?112:80);
  fbMenu(ctx,D.rows,inner,y,cw-88,footY-y-10,{zebra:'#f5f6fc'});
  ctx.fillStyle=SC.blue;ctx.save();rr(ctx,cx,footY,cw,H-60-footY,36);ctx.clip();ctx.fillRect(cx,footY,cw,H);ctx.restore();ctx.fillRect(cx,footY,cw,36);
  txt(ctx,'الأسعار للفرد بالدينار الليبي · ساري حتى '+D.until,W/2,footY+(D.contact?46:52),{w:500,size:23,color:'rgba(255,255,255,.9)',align:'center',max:cw-60});
  if(D.contact)txt(ctx,'للحجز: '+D.contact,W/2,footY+90,{w:800,size:28,color:'#fff',align:'center'});
  return H;
}

/* 3 — الفاخر: white certificate frame, ornaments and menu-style prices */
function fbLuxe(ctx,W,D,logo,measure){
  if(measure)return FB_H;const H=FB_H;
  ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.5;starPattern(ctx,0,0,W,H,200,'rgba(5,27,149,.06)');ctx.restore();
  ctx.fillStyle='#fff';ctx.fillRect(58,58,W-116,H-116);
  ctx.strokeStyle=SC.blue;ctx.lineWidth=4;ctx.strokeRect(30,30,W-60,H-60);
  ctx.lineWidth=1.5;ctx.strokeRect(46,46,W-92,H-92);
  [[46,46],[W-46,46],[46,H-46],[W-46,H-46]].forEach(([x,y])=>{ctx.fillStyle='#fff';star8(ctx,x,y,26);ctx.fill();ctx.fillStyle=SC.blue;star8(ctx,x,y,20);ctx.fill();ctx.fillStyle='#fff';star8(ctx,x,y,8);ctx.fill();});
  drawLogo(ctx,logo,W/2,96,190,{});
  txt(ctx,'عرض أسعار الإقامة',W/2,380,{w:800,size:58,color:SC.blue,align:'center'});
  const orn=y=>{ctx.fillStyle=SC.blue;ctx.fillRect(W/2-260,y,210,2);ctx.fillRect(W/2+50,y,210,2);star8(ctx,W/2,y+1,14);ctx.fill();};
  orn(420);
  const list=[D.stay.makkah&&{city:'مكة المكرمة',...D.stay.makkah},D.stay.madinah&&{city:'المدينة المنورة',...D.stay.madinah}].filter(Boolean);
  const colW=(W-200)/list.length;
  list.forEach((h,i)=>{const cx=W-100-colW*i-colW/2;
    txt(ctx,h.city,cx,486,{w:500,size:24,color:SC.muted,align:'center'});
    txt(ctx,h.hotel||'—',cx,530,{w:800,size:32,color:SC.ink,align:'center',max:colW-30,min:16});
    txt(ctx,arNights(h.nights),cx,572,{w:700,size:26,color:SC.blue,align:'center'});
  });
  if(list.length>1){ctx.fillStyle=SC.line;ctx.fillRect(W/2-1,468,2,110);}
  let y=606;
  if(D.stay.total){ctx.font=SF(800,28);const t='مدة الإقامة: '+D.stay.totalText,tw=ctx.measureText(t).width+60;
    ctx.fillStyle=SC.blue;rr(ctx,W/2-tw/2,y,tw,56,28);ctx.fill();txt(ctx,t,W/2,y+38,{w:800,size:28,color:'#fff',align:'center'});y+=90;}
  txt(ctx,'الأسعار للفرد بالدينار الليبي',W/2,y+24,{w:500,size:24,color:SC.muted,align:'center'});
  const footY=H-100-(D.contact?96:60);
  fbMenu(ctx,D.rows,130,y+44,W-260,footY-y-70,{dots:'#c9cfe8'});
  orn(footY);
  txt(ctx,'ساري حتى '+D.until,W/2,footY+50,{w:500,size:24,color:SC.muted,align:'center'});
  if(D.contact)txt(ctx,'للحجز: '+D.contact,W/2,footY+92,{w:800,size:30,color:SC.blue,align:'center'});
  return H;
}

/* ---- 4:5 versions of the three share-card designs (Royal / Clean / Ticket) ---- */
function vStayList(D){return [D.stay.makkah&&{city:'مكة المكرمة',label:'فندق مكة',...D.stay.makkah},D.stay.madinah&&{city:'المدينة المنورة',label:'فندق المدينة',...D.stay.madinah}].filter(Boolean);}
function vLayout(n,h,gap,maxH=112,minH=62){
  const cols=n>6?2:1,rows=Math.max(1,Math.ceil(n/cols));
  const ch=Math.max(minH,Math.min(maxH,(h-gap*(rows-1))/rows));
  return {cols,rows,ch,used:rows*ch+(rows-1)*gap};
}
/* white price cards with a blue accent, like the Royal share card */
function vCards(ctx,rows,x,y,w,h,{gap=14,cell='#fff',stroke=null,shadow=true,accent=true,label=SC.ink,maxH=112}={}){
  const L=vLayout(rows.length,h,gap,maxH),cg=24,cw=(w-cg*(L.cols-1))/L.cols,oy=y+(h-L.used)/2;
  rows.forEach((row,i)=>{
    const c=Math.floor(i/L.rows),r=i%L.rows,cx=x+w-(cw+cg)*c-cw,cy=oy+r*(L.ch+gap);
    ctx.save();if(shadow){ctx.shadowColor='rgba(0,0,0,.18)';ctx.shadowBlur=22;ctx.shadowOffsetY=7;}
    ctx.fillStyle=cell;rr(ctx,cx,cy,cw,L.ch,20);ctx.fill();ctx.restore();
    if(stroke){ctx.save();ctx.strokeStyle=stroke;ctx.lineWidth=2;rr(ctx,cx,cy,cw,L.ch,20);ctx.stroke();ctx.restore();}
    if(accent){ctx.fillStyle=SC.blue;rr(ctx,cx+cw-9,cy+L.ch*.24,9,L.ch*.52,4);ctx.fill();}
    const ls=Math.round(Math.min(34,L.ch*.32)),ps=Math.round(Math.min(48,L.ch*.44));
    txt(ctx,row.label,cx+cw-34,cy+L.ch/2+ls*.36,{w:700,size:ls,color:label,max:cw*.46,min:14});
    priceTxt(ctx,row.amount,row.currency,cx+30,cy+L.ch/2+ps*.36,{size:ps,color:SC.blue,curColor:SC.muted});
  });
}
/* two-line price tiles, like the Ticket share card */
function vTiles(ctx,rows,x,y,w,h,{gap=16}={}){
  const n=rows.length,cols=n<=2?n:n<=6?2:3,rn=Math.ceil(n/cols);
  const ch=Math.max(70,Math.min(150,(h-gap*(rn-1))/rn)),cw=(w-gap*(cols-1))/cols,used=rn*ch+(rn-1)*gap,oy=y+(h-used)/2;
  rows.forEach((row,i)=>{
    const c=i%cols,r=Math.floor(i/cols),last=i===n-1&&n%cols!==0,span=last?cols-c:1;
    const tw=cw*span+gap*(span-1),tx=x+w-(cw+gap)*c-tw,ty=oy+r*(ch+gap);
    ctx.fillStyle='#f6f7fd';ctx.strokeStyle=SC.line;ctx.lineWidth=2;rr(ctx,tx,ty,tw,ch,22);ctx.fill();ctx.stroke();
    const ls=Math.round(Math.min(28,ch*.2)),ps=Math.round(Math.min(46,ch*.33));
    txt(ctx,row.label,tx+tw-28,ty+ch*.36,{w:700,size:ls,color:SC.muted,max:tw-56,min:14});
    priceTxt(ctx,row.amount,row.currency,tx+tw-28,ty+ch*.8,{size:ps,color:SC.blue,curColor:SC.muted,align:'right'});
  });
}

/* Royal 4:5 */
function vRoyal(ctx,W,D,logo,measure){
  if(measure)return FB_H;const H=FB_H,pad=60;
  const g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#0a2ab8');g.addColorStop(.55,SC.blue);g.addColorStop(1,SC.deep);
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  drawEmblem(ctx,logo,-120,H-600,680,.06,'#ffffff');drawEmblem(ctx,logo,W-240,-70,360,.05,'#ffffff');
  drawLogo(ctx,logo,W/2,38,170,{color:'#ffffff'});
  ctx.save();ctx.fillStyle='rgba(255,255,255,.14)';rr(ctx,W/2-160,226,320,50,25);ctx.fill();ctx.restore();
  txt(ctx,'عرض سعر خاص',W/2,261,{w:700,size:26,color:'#fff',align:'center'});
  const list=vStayList(D),rowH=92,panelTop=304,panelH=24+list.length*rowH+(D.stay.total?70:0)+8;
  ctx.save();ctx.fillStyle='rgba(255,255,255,.09)';ctx.strokeStyle='rgba(255,255,255,.22)';ctx.lineWidth=2;rr(ctx,pad,panelTop,W-pad*2,panelH,26);ctx.fill();ctx.stroke();ctx.restore();
  let y=panelTop+24;
  list.forEach(st=>{
    pin(ctx,W-pad-40,y+34,14,'rgba(255,255,255,.95)',SC.blue);
    txt(ctx,st.city,W-pad-70,y+22,{w:500,size:22,color:'rgba(255,255,255,.72)'});
    txt(ctx,st.hotel||'—',W-pad-70,y+62,{w:700,size:32,color:'#fff',max:560,min:16});
    ctx.fillStyle='rgba(255,255,255,.95)';rr(ctx,pad+30,y+18,200,52,26);ctx.fill();
    txt(ctx,arNights(st.nights),pad+130,y+53,{w:800,size:25,color:SC.blue,align:'center'});
    y+=rowH;
  });
  if(D.stay.total){
    ctx.fillStyle='rgba(255,255,255,.22)';ctx.fillRect(pad+30,y+2,W-pad*2-60,2);
    txt(ctx,'مدة الإقامة كاملة',W-pad-36,y+48,{w:500,size:25,color:'rgba(255,255,255,.8)'});
    txt(ctx,D.stay.totalText,pad+36,y+50,{w:800,size:31,color:'#fff',align:'left'});
  }
  const pt=panelTop+panelH+46;
  txt(ctx,'الأسعار للفرد',W-pad,pt,{w:700,size:28,color:'#fff'});
  txt(ctx,'بالدينار الليبي',pad,pt,{w:400,size:22,color:'rgba(255,255,255,.7)',align:'left'});
  const foot=D.contact?120:80;
  vCards(ctx,D.rows,pad,pt+22,W-pad*2,H-foot-(pt+22)-10,{});
  txt(ctx,'ساري حتى '+D.until,W/2,H-foot+44,{w:500,size:24,color:'rgba(255,255,255,.85)',align:'center'});
  if(D.contact)txt(ctx,'للحجز: '+D.contact,W/2,H-foot+88,{w:700,size:28,color:'#fff',align:'center'});
  return H;
}

/* Clean 4:5 */
function vClean(ctx,W,D,logo,measure){
  if(measure)return FB_H;const H=FB_H,pad=60,m=24;
  ctx.fillStyle=SC.paper;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#fff';rr(ctx,m,m,W-m*2,H-m*2,34);ctx.fill();
  ctx.save();rr(ctx,m,m,W-m*2,250,34);ctx.clip();ctx.fillStyle=SC.soft;ctx.fillRect(m,m,W-m*2,250);drawEmblem(ctx,logo,W/2-120,34,250,.06);ctx.restore();
  drawLogo(ctx,logo,W-pad-8,44,190,{align:'right'});
  txt(ctx,'عرض أسعار',pad+8,128,{w:800,size:46,color:SC.blue,align:'left'});
  txt(ctx,D.today,pad+8,172,{w:400,size:24,color:SC.muted,align:'left'});
  ctx.fillStyle=SC.blue;ctx.fillRect(m,270,W-m*2,6);
  const list=vStayList(D),tTop=306,tH=150,gap=20,n=list.length,tw=(W-pad*2-gap*(n-1))/n;
  list.forEach((t,i)=>{
    const x=W-pad-tw-(tw+gap)*i;
    ctx.fillStyle='#fff';ctx.strokeStyle=SC.line;ctx.lineWidth=2;rr(ctx,x,tTop,tw,tH,22);ctx.fill();ctx.stroke();
    ctx.fillStyle=SC.blue;rr(ctx,x+tw-8,tTop+26,8,tH-52,4);ctx.fill();
    txt(ctx,t.label,x+tw-32,tTop+44,{w:500,size:23,color:SC.muted});
    txt(ctx,t.hotel||'—',x+tw-32,tTop+90,{w:800,size:32,color:SC.ink,max:tw-60,min:16});
    ctx.fillStyle=SC.soft;rr(ctx,x+tw-32-180,tTop+104,180,34,17);ctx.fill();
    txt(ctx,arNights(t.nights),x+tw-32-90,tTop+128,{w:700,size:21,color:SC.blue,align:'center'});
  });
  let y=tTop+tH+18;
  if(D.stay.total){
    const g=ctx.createLinearGradient(0,0,W,0);g.addColorStop(0,SC.deep);g.addColorStop(1,SC.blue);
    ctx.fillStyle=g;rr(ctx,pad,y,W-pad*2,84,22);ctx.fill();
    txt(ctx,'مدة الإقامة كاملة',W-pad-34,y+52,{w:500,size:26,color:'rgba(255,255,255,.85)'});
    txt(ctx,D.stay.totalText,pad+34,y+54,{w:800,size:34,color:'#fff',align:'left'});
    y+=84;
  }
  y+=44;
  txt(ctx,'نوع الغرفة',W-pad-22,y,{w:700,size:22,color:SC.muted});
  txt(ctx,'السعر للفرد',pad+22,y,{w:700,size:22,color:SC.muted,align:'left'});
  const foot=D.contact?150:118,fy=H-m-foot;
  fbMenu(ctx,D.rows,pad,y+14,W-pad*2,fy-(y+14)-12,{zebra:'#f7f8fd',dots:'rgba(0,0,0,0)'});
  ctx.save();rr(ctx,m,fy,W-m*2,foot,34);ctx.clip();ctx.fillStyle=SC.blue;ctx.fillRect(m,fy,W-m*2,foot);ctx.restore();
  ctx.fillStyle=SC.blue;ctx.fillRect(m,fy,W-m*2,40);
  txt(ctx,'الأسعار بالدينار الليبي · ساري حتى '+D.until,W/2,fy+(D.contact?58:70),{w:500,size:25,color:'#fff',align:'center'});
  if(D.contact)txt(ctx,'للحجز: '+D.contact,W/2,fy+106,{w:800,size:30,color:'#fff',align:'center'});
  return H;
}

/* Ticket 4:5 */
function vTicket(ctx,W,D,logo,measure){
  if(measure)return FB_H;const H=FB_H,m=44,pad=m+44;
  const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,SC.blue);g.addColorStop(1,SC.deep);
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  drawEmblem(ctx,logo,W-330,H-420,460,.07,'#ffffff');
  const st=D.stay,routeTop=m+212,routeH=st.madinah?300:200,perfY=routeTop+routeH;
  ctx.fillStyle='#fff';rr(ctx,m,m,W-m*2,H-m*2,36);ctx.fill();
  ctx.fillStyle=g;[m,W-m].forEach(x=>{ctx.beginPath();ctx.arc(x,perfY,30,0,Math.PI*2);ctx.fill();});
  dashed(ctx,m+44,perfY,W-m-44,perfY,SC.line,[14,12],3);
  drawLogo(ctx,logo,W-pad,m+26,160,{align:'right'});
  txt(ctx,'بطاقة عرض سعر',pad,m+96,{w:800,size:38,color:SC.blue,align:'left'});
  txt(ctx,D.today,pad,m+138,{w:400,size:23,color:SC.muted,align:'left'});
  ctx.fillStyle=SC.soft;ctx.fillRect(m,m+206,W-m*2,2);
  const y0=routeTop+26;
  const node=(x,city,hotel,nights,align)=>{
    txt(ctx,city,x,y0+26,{w:500,size:24,color:SC.muted,align});
    txt(ctx,hotel||'—',x,y0+74,{w:800,size:32,color:SC.ink,align,max:390,min:16});
    const bw=180,bx=align==='right'?x-bw:x;ctx.fillStyle=SC.soft;rr(ctx,bx,y0+96,bw,44,22);ctx.fill();
    txt(ctx,arNights(nights),bx+bw/2,y0+126,{w:700,size:23,color:SC.blue,align:'center'});
  };
  node(W-pad,'مكة المكرمة',st.makkah.hotel,st.makkah.nights,'right');
  if(st.madinah){
    node(pad,'المدينة المنورة',st.madinah.hotel,st.madinah.nights,'left');
    const ly=y0+196;pin(ctx,W-pad-14,ly,14,SC.blue,'#fff');pin(ctx,pad+14,ly,14,SC.blue,'#fff');
    dashed(ctx,pad+34,ly,W-pad-34,ly,SC.blue,[4,10],4);
    ctx.fillStyle=SC.blue;rr(ctx,W/2-190,ly-30,380,60,30);ctx.fill();
    txt(ctx,'الإقامة '+st.totalText,W/2,ly+10,{w:800,size:27,color:'#fff',align:'center',max:350});
  }else if(st.total){
    ctx.fillStyle=SC.blue;rr(ctx,pad,y0+14,320,116,24);ctx.fill();
    txt(ctx,'مدة الإقامة كاملة',pad+160,y0+58,{w:500,size:22,color:'rgba(255,255,255,.8)',align:'center'});
    txt(ctx,st.totalText,pad+160,y0+104,{w:800,size:30,color:'#fff',align:'center'});
  }
  const gt=perfY+56;
  txt(ctx,'الأسعار للفرد بالدينار الليبي',W-pad,gt,{w:700,size:25,color:SC.muted});
  const foot=D.contact?128:92,fy=H-m-foot;
  vTiles(ctx,D.rows,pad,gt+24,W-pad*2,fy-(gt+24)-16);
  ctx.fillStyle=SC.soft;ctx.fillRect(m,fy,W-m*2,2);
  txt(ctx,'ساري حتى '+D.until,W/2,fy+(D.contact?48:58),{w:500,size:25,color:SC.muted,align:'center'});
  if(D.contact)txt(ctx,'للحجز: '+D.contact,W/2,fy+96,{w:800,size:30,color:SC.blue,align:'center'});
  return H;
}

const SHARE_FORMATS={
  story:{title:'مشاركة واتس أب',W:1080,file:'olympi-prices.png',key:SHARE_TPL_KEY,def:'royal',draw:{royal:shareRoyal,clean:shareClean,ticket:shareTicket,kaaba:fbKaaba,arch:fbArch,luxe:fbLuxe}},
  fb:{title:'مشاركة فيسبوك',W:FB_W,file:'olympi-facebook-post.png',key:SHARE_TPL_KEY+'_fb2',def:'kaaba',draw:{royal:vRoyal,clean:vClean,ticket:vTicket,kaaba:fbKaaba,arch:fbArch,luxe:fbLuxe}}
};
function shareTplFor(fmt){const def=SHARE_FORMATS[fmt].def;try{const v=localStorage.getItem(SHARE_FORMATS[fmt].key);return SHARE_TEMPLATES.some(t=>t.id===v)?v:def;}catch(e){return def;}}
function shareSetTplFor(fmt,id){try{localStorage.setItem(SHARE_FORMATS[fmt].key,id);}catch(e){}}
/* QR Code Generator for JavaScript — (c) 2009 Kazuhiko Arase, MIT licence */
const OLY_QR=(function(){
//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

var qrcode = function() {

  //---------------------------------------------------------------------
  // qrcode
  //---------------------------------------------------------------------

  /**
   * qrcode
   * @param typeNumber 1 to 40
   * @param errorCorrectionLevel 'L','M','Q','H'
   */
  var qrcode = function(typeNumber, errorCorrectionLevel) {

    var PAD0 = 0xEC;
    var PAD1 = 0x11;

    var _typeNumber = typeNumber;
    var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = [];

    var _this = {};

    var makeImpl = function(test, maskPattern) {

      _moduleCount = _typeNumber * 4 + 17;
      _modules = function(moduleCount) {
        var modules = new Array(moduleCount);
        for (var row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);
          for (var col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }
        return modules;
      }(_moduleCount);

      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);

      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }

      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
      }

      mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function(row, col) {

      for (var r = -1; r <= 7; r += 1) {

        if (row + r <= -1 || _moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c += 1) {

          if (col + c <= -1 || _moduleCount <= col + c) continue;

          if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
              || (0 <= c && c <= 6 && (r == 0 || r == 6) )
              || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };

    var getBestMaskPattern = function() {

      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i += 1) {

        makeImpl(true, i);

        var lostPoint = QRUtil.getLostPoint(_this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    };

    var setupTimingPattern = function() {

      for (var r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = (r % 2 == 0);
      }

      for (var c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = (c % 2 == 0);
      }
    };

    var setupPositionAdjustPattern = function() {

      var pos = QRUtil.getPatternPosition(_typeNumber);

      for (var i = 0; i < pos.length; i += 1) {

        for (var j = 0; j < pos.length; j += 1) {

          var row = pos[i];
          var col = pos[j];

          if (_modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r += 1) {

            for (var c = -2; c <= 2; c += 1) {

              if (r == -2 || r == 2 || c == -2 || c == 2
                  || (r == 0 && c == 0) ) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };

    var setupTypeNumber = function(test) {

      var bits = QRUtil.getBCHTypeNumber(_typeNumber);

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };

    var setupTypeInfo = function(test, maskPattern) {

      var data = (_errorCorrectionLevel << 3) | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      _modules[_moduleCount - 8][8] = (!test);
    };

    var mapData = function(data, maskPattern) {

      var inc = -1;
      var row = _moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = QRUtil.getMaskFunction(maskPattern);

      for (var col = _moduleCount - 1; col > 0; col -= 2) {

        if (col == 6) col -= 1;

        while (true) {

          for (var c = 0; c < 2; c += 1) {

            if (_modules[row][col - c] == null) {

              var dark = false;

              if (byteIndex < data.length) {
                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              _modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };

    var createBytes = function(buffer, rsBlocks) {

      var offset = 0;

      var maxDcCount = 0;
      var maxEcCount = 0;

      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r += 1) {

        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;

        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);

        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
        }
        offset += dcCount;

        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i += 1) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }

      for (var i = 0; i < maxEcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }

      return data;
    };

    var createData = function(typeNumber, errorCorrectionLevel, dataList) {

      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);

      var buffer = qrBitBuffer();

      for (var i = 0; i < dataList.length; i += 1) {
        var data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
        data.write(buffer);
      }

      // calc num max data.
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw 'code length overflow. ('
          + buffer.getLengthInBits()
          + '>'
          + totalDataCount * 8
          + ')';
      }

      // end code
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }

      // padding
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }

      // padding
      while (true) {

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }

      return createBytes(buffer, rsBlocks);
    };

    _this.addData = function(data, mode) {

      mode = mode || 'Byte';

      var newData = null;

      switch(mode) {
      case 'Numeric' :
        newData = qrNumber(data);
        break;
      case 'Alphanumeric' :
        newData = qrAlphaNum(data);
        break;
      case 'Byte' :
        newData = qr8BitByte(data);
        break;
      case 'Kanji' :
        newData = qrKanji(data);
        break;
      default :
        throw 'mode:' + mode;
      }

      _dataList.push(newData);
      _dataCache = null;
    };

    _this.isDark = function(row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw row + ',' + col;
      }
      return _modules[row][col];
    };

    _this.getModuleCount = function() {
      return _moduleCount;
    };

    _this.make = function() {
      if (_typeNumber < 1) {
        var typeNumber = 1;

        for (; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
          var buffer = qrBitBuffer();

          for (var i = 0; i < _dataList.length; i++) {
            var data = _dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
            data.write(buffer);
          }

          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            break;
          }
        }

        _typeNumber = typeNumber;
      }

      makeImpl(false, getBestMaskPattern() );
    };

    _this.createTableTag = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var qrHtml = '';

      qrHtml += '<table style="';
      qrHtml += ' border-width: 0px; border-style: none;';
      qrHtml += ' border-collapse: collapse;';
      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
      qrHtml += '">';
      qrHtml += '<tbody>';

      for (var r = 0; r < _this.getModuleCount(); r += 1) {

        qrHtml += '<tr>';

        for (var c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += ' border-width: 0px; border-style: none;';
          qrHtml += ' border-collapse: collapse;';
          qrHtml += ' padding: 0px; margin: 0px;';
          qrHtml += ' width: ' + cellSize + 'px;';
          qrHtml += ' height: ' + cellSize + 'px;';
          qrHtml += ' background-color: ';
          qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
          qrHtml += ';';
          qrHtml += '"/>';
        }

        qrHtml += '</tr>';
      }

      qrHtml += '</tbody>';
      qrHtml += '</table>';

      return qrHtml;
    };

    _this.createSvgTag = function(cellSize, margin, alt, title) {

      var opts = {};
      if (typeof arguments[0] == 'object') {
        // Called by options.
        opts = arguments[0];
        // overwrite cellSize and margin.
        cellSize = opts.cellSize;
        margin = opts.margin;
        alt = opts.alt;
        title = opts.title;
      }

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      // Compose alt property surrogate
      alt = (typeof alt === 'string') ? {text: alt} : alt || {};
      alt.text = alt.text || null;
      alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;

      // Compose title property surrogate
      title = (typeof title === 'string') ? {text: title} : title || {};
      title.text = title.text || null;
      title.id = (title.text) ? title.id || 'qrcode-title' : null;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var c, mc, r, mr, qrSvg='', rect;

      rect = 'l' + cellSize + ',0 0,' + cellSize +
        ' -' + cellSize + ',0 0,-' + cellSize + 'z ';

      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
      qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
      qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
          escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
      qrSvg += '>';
      qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
          escapeXml(title.text) + '</title>' : '';
      qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
          escapeXml(alt.text) + '</description>' : '';
      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
      qrSvg += '<path d="';

      for (r = 0; r < _this.getModuleCount(); r += 1) {
        mr = r * cellSize + margin;
        for (c = 0; c < _this.getModuleCount(); c += 1) {
          if (_this.isDark(r, c) ) {
            mc = c*cellSize+margin;
            qrSvg += 'M' + mc + ',' + mr + rect;
          }
        }
      }

      qrSvg += '" stroke="transparent" fill="black"/>';
      qrSvg += '</svg>';

      return qrSvg;
    };

    _this.createDataURL = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      return createDataURL(size, size, function(x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = Math.floor( (x - min) / cellSize);
          var r = Math.floor( (y - min) / cellSize);
          return _this.isDark(r, c)? 0 : 1;
        } else {
          return 1;
        }
      } );
    };

    _this.createImgTag = function(cellSize, margin, alt) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;

      var img = '';
      img += '<img';
      img += '\u0020src="';
      img += _this.createDataURL(cellSize, margin);
      img += '"';
      img += '\u0020width="';
      img += size;
      img += '"';
      img += '\u0020height="';
      img += size;
      img += '"';
      if (alt) {
        img += '\u0020alt="';
        img += escapeXml(alt);
        img += '"';
      }
      img += '/>';

      return img;
    };

    var escapeXml = function(s) {
      var escaped = '';
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charAt(i);
        switch(c) {
        case '<': escaped += '&lt;'; break;
        case '>': escaped += '&gt;'; break;
        case '&': escaped += '&amp;'; break;
        case '"': escaped += '&quot;'; break;
        default : escaped += c; break;
        }
      }
      return escaped;
    };

    var _createHalfASCII = function(margin) {
      var cellSize = 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r1, r2, p;

      var blocks = {
        '██': '█',
        '█ ': '▀',
        ' █': '▄',
        '  ': ' '
      };

      var blocksLastLineNoMargin = {
        '██': '▀',
        '█ ': '▀',
        ' █': ' ',
        '  ': ' '
      };

      var ascii = '';
      for (y = 0; y < size; y += 2) {
        r1 = Math.floor((y - min) / cellSize);
        r2 = Math.floor((y + 1 - min) / cellSize);
        for (x = 0; x < size; x += 1) {
          p = '█';

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
            p = ' ';
          }

          if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
            p += ' ';
          }
          else {
            p += '█';
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
        }

        ascii += '\n';
      }

      if (size % 2 && margin > 0) {
        return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.createASCII = function(cellSize, margin) {
      cellSize = cellSize || 1;

      if (cellSize < 2) {
        return _createHalfASCII(margin);
      }

      cellSize -= 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r, p;

      var white = Array(cellSize+1).join('██');
      var black = Array(cellSize+1).join('  ');

      var ascii = '';
      var line = '';
      for (y = 0; y < size; y += 1) {
        r = Math.floor( (y - min) / cellSize);
        line = '';
        for (x = 0; x < size; x += 1) {
          p = 1;

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
            p = 0;
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          line += p ? white : black;
        }

        for (r = 0; r < cellSize; r += 1) {
          ascii += line + '\n';
        }
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.renderTo2dContext = function(context, cellSize) {
      cellSize = cellSize || 2;
      var length = _this.getModuleCount();
      for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {
          context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
          context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
        }
      }
    }

    return _this;
  };

  //---------------------------------------------------------------------
  // qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytesFuncs = {
    'default' : function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        bytes.push(c & 0xff);
      }
      return bytes;
    }
  };

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];

  //---------------------------------------------------------------------
  // qrcode.createStringToBytes
  //---------------------------------------------------------------------

  /**
   * @param unicodeData base64 string of byte array.
   * [16bit Unicode],[16bit Bytes], ...
   * @param numChars
   */
  qrcode.createStringToBytes = function(unicodeData, numChars) {

    // create conversion map.

    var unicodeMap = function() {

      var bin = base64DecodeInputStream(unicodeData);
      var read = function() {
        var b = bin.read();
        if (b == -1) throw 'eof';
        return b;
      };

      var count = 0;
      var unicodeMap = {};
      while (true) {
        var b0 = bin.read();
        if (b0 == -1) break;
        var b1 = read();
        var b2 = read();
        var b3 = read();
        var k = String.fromCharCode( (b0 << 8) | b1);
        var v = (b2 << 8) | b3;
        unicodeMap[k] = v;
        count += 1;
      }
      if (count != numChars) {
        throw count + ' != ' + numChars;
      }

      return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);

    return function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        if (c < 128) {
          bytes.push(c);
        } else {
          var b = unicodeMap[s.charAt(i)];
          if (typeof b == 'number') {
            if ( (b & 0xff) == b) {
              // 1byte
              bytes.push(b);
            } else {
              // 2bytes
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER :    1 << 0,
    MODE_ALPHA_NUM : 1 << 1,
    MODE_8BIT_BYTE : 1 << 2,
    MODE_KANJI :     1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectionLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectionLevel = {
    L : 1,
    M : 0,
    Q : 3,
    H : 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000 : 0,
    PATTERN001 : 1,
    PATTERN010 : 2,
    PATTERN011 : 3,
    PATTERN100 : 4,
    PATTERN101 : 5,
    PATTERN110 : 6,
    PATTERN111 : 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = function() {

    var PATTERN_POSITION_TABLE = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

    var _this = {};

    var getBCHDigit = function(data) {
      var digit = 0;
      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }
      return digit;
    };

    _this.getBCHTypeInfo = function(data) {
      var d = data << 10;
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
      }
      return ( (data << 10) | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function(data) {
      var d = data << 12;
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
      }
      return (data << 12) | d;
    };

    _this.getPatternPosition = function(typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function(maskPattern) {

      switch (maskPattern) {

      case QRMaskPattern.PATTERN000 :
        return function(i, j) { return (i + j) % 2 == 0; };
      case QRMaskPattern.PATTERN001 :
        return function(i, j) { return i % 2 == 0; };
      case QRMaskPattern.PATTERN010 :
        return function(i, j) { return j % 3 == 0; };
      case QRMaskPattern.PATTERN011 :
        return function(i, j) { return (i + j) % 3 == 0; };
      case QRMaskPattern.PATTERN100 :
        return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
      case QRMaskPattern.PATTERN101 :
        return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
      case QRMaskPattern.PATTERN110 :
        return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
      case QRMaskPattern.PATTERN111 :
        return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

      default :
        throw 'bad maskPattern:' + maskPattern;
      }
    };

    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
      var a = qrPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
      }
      return a;
    };

    _this.getLengthInBits = function(mode, type) {

      if (1 <= type && type < 10) {

        // 1 - 9

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 10;
        case QRMode.MODE_ALPHA_NUM : return 9;
        case QRMode.MODE_8BIT_BYTE : return 8;
        case QRMode.MODE_KANJI     : return 8;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 27) {

        // 10 - 26

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 12;
        case QRMode.MODE_ALPHA_NUM : return 11;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 10;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 41) {

        // 27 - 40

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 14;
        case QRMode.MODE_ALPHA_NUM : return 13;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 12;
        default :
          throw 'mode:' + mode;
        }

      } else {
        throw 'type:' + type;
      }
    };

    _this.getLostPoint = function(qrcode) {

      var moduleCount = qrcode.getModuleCount();

      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount; col += 1) {

          var sameCount = 0;
          var dark = qrcode.isDark(row, col);

          for (var r = -1; r <= 1; r += 1) {

            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c += 1) {

              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrcode.isDark(row + r, col + c) ) {
                sameCount += 1;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += (3 + sameCount - 5);
          }
        }
      };

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row += 1) {
        for (var col = 0; col < moduleCount - 1; col += 1) {
          var count = 0;
          if (qrcode.isDark(row, col) ) count += 1;
          if (qrcode.isDark(row + 1, col) ) count += 1;
          if (qrcode.isDark(row, col + 1) ) count += 1;
          if (qrcode.isDark(row + 1, col + 1) ) count += 1;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row, col + 1)
              &&  qrcode.isDark(row, col + 2)
              &&  qrcode.isDark(row, col + 3)
              &&  qrcode.isDark(row, col + 4)
              && !qrcode.isDark(row, col + 5)
              &&  qrcode.isDark(row, col + 6) ) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row + 1, col)
              &&  qrcode.isDark(row + 2, col)
              &&  qrcode.isDark(row + 3, col)
              &&  qrcode.isDark(row + 4, col)
              && !qrcode.isDark(row + 5, col)
              &&  qrcode.isDark(row + 6, col) ) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount; row += 1) {
          if (qrcode.isDark(row, col) ) {
            darkCount += 1;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;

      return lostPoint;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = function() {

    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);

    // initialize tables
    for (var i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4]
        ^ EXP_TABLE[i - 5]
        ^ EXP_TABLE[i - 6]
        ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i] ] = i;
    }

    var _this = {};

    _this.glog = function(n) {

      if (n < 1) {
        throw 'glog(' + n + ')';
      }

      return LOG_TABLE[n];
    };

    _this.gexp = function(n) {

      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return EXP_TABLE[n];
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrPolynomial
  //---------------------------------------------------------------------

  function qrPolynomial(num, shift) {

    if (typeof num.length == 'undefined') {
      throw num.length + '/' + shift;
    }

    var _num = function() {
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset += 1;
      }
      var _num = new Array(num.length - offset + shift);
      for (var i = 0; i < num.length - offset; i += 1) {
        _num[i] = num[i + offset];
      }
      return _num;
    }();

    var _this = {};

    _this.getAt = function(index) {
      return _num[index];
    };

    _this.getLength = function() {
      return _num.length;
    };

    _this.multiply = function(e) {

      var num = new Array(_this.getLength() + e.getLength() - 1);

      for (var i = 0; i < _this.getLength(); i += 1) {
        for (var j = 0; j < e.getLength(); j += 1) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
        }
      }

      return qrPolynomial(num, 0);
    };

    _this.mod = function(e) {

      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }

      var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

      var num = new Array(_this.getLength() );
      for (var i = 0; i < _this.getLength(); i += 1) {
        num[i] = _this.getAt(i);
      }

      for (var i = 0; i < e.getLength(); i += 1) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
      }

      // recursive call
      return qrPolynomial(num, 0).mod(e);
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  var QRRSBlock = function() {

    var RS_BLOCK_TABLE = [

      // L
      // M
      // Q
      // H

      // 1
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],

      // 2
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],

      // 3
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],

      // 4
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],

      // 5
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],

      // 6
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],

      // 7
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],

      // 8
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],

      // 9
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],

      // 10
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],

      // 11
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],

      // 12
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],

      // 13
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],

      // 14
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],

      // 15
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],

      // 16
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],

      // 17
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],

      // 18
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],

      // 19
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],

      // 20
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],

      // 21
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],

      // 22
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],

      // 23
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],

      // 24
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],

      // 25
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],

      // 26
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],

      // 27
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],

      // 28
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],

      // 29
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],

      // 30
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],

      // 31
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],

      // 32
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],

      // 33
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],

      // 34
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],

      // 35
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],

      // 36
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],

      // 37
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],

      // 38
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],

      // 39
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],

      // 40
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];

    var qrRSBlock = function(totalCount, dataCount) {
      var _this = {};
      _this.totalCount = totalCount;
      _this.dataCount = dataCount;
      return _this;
    };

    var _this = {};

    var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {

      switch(errorCorrectionLevel) {
      case QRErrorCorrectionLevel.L :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectionLevel.M :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectionLevel.Q :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectionLevel.H :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default :
        return undefined;
      }
    };

    _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {

      var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

      if (typeof rsBlock == 'undefined') {
        throw 'bad rs block @ typeNumber:' + typeNumber +
            '/errorCorrectionLevel:' + errorCorrectionLevel;
      }

      var length = rsBlock.length / 3;

      var list = [];

      for (var i = 0; i < length; i += 1) {

        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount) );
        }
      }

      return list;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrBitBuffer
  //---------------------------------------------------------------------

  var qrBitBuffer = function() {

    var _buffer = [];
    var _length = 0;

    var _this = {};

    _this.getBuffer = function() {
      return _buffer;
    };

    _this.getAt = function(index) {
      var bufIndex = Math.floor(index / 8);
      return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    };

    _this.put = function(num, length) {
      for (var i = 0; i < length; i += 1) {
        _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
      }
    };

    _this.getLengthInBits = function() {
      return _length;
    };

    _this.putBit = function(bit) {

      var bufIndex = Math.floor(_length / 8);
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }

      if (bit) {
        _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
      }

      _length += 1;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrNumber
  //---------------------------------------------------------------------

  var qrNumber = function(data) {

    var _mode = QRMode.MODE_NUMBER;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var data = _data;

      var i = 0;

      while (i + 2 < data.length) {
        buffer.put(strToNum(data.substring(i, i + 3) ), 10);
        i += 3;
      }

      if (i < data.length) {
        if (data.length - i == 1) {
          buffer.put(strToNum(data.substring(i, i + 1) ), 4);
        } else if (data.length - i == 2) {
          buffer.put(strToNum(data.substring(i, i + 2) ), 7);
        }
      }
    };

    var strToNum = function(s) {
      var num = 0;
      for (var i = 0; i < s.length; i += 1) {
        num = num * 10 + chatToNum(s.charAt(i) );
      }
      return num;
    };

    var chatToNum = function(c) {
      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      }
      throw 'illegal char :' + c;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrAlphaNum
  //---------------------------------------------------------------------

  var qrAlphaNum = function(data) {

    var _mode = QRMode.MODE_ALPHA_NUM;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var s = _data;

      var i = 0;

      while (i + 1 < s.length) {
        buffer.put(
          getCode(s.charAt(i) ) * 45 +
          getCode(s.charAt(i + 1) ), 11);
        i += 2;
      }

      if (i < s.length) {
        buffer.put(getCode(s.charAt(i) ), 6);
      }
    };

    var getCode = function(c) {

      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      } else {
        switch (c) {
        case ' ' : return 36;
        case '$' : return 37;
        case '%' : return 38;
        case '*' : return 39;
        case '+' : return 40;
        case '-' : return 41;
        case '.' : return 42;
        case '/' : return 43;
        case ':' : return 44;
        default :
          throw 'illegal char :' + c;
        }
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qr8BitByte
  //---------------------------------------------------------------------

  var qr8BitByte = function(data) {

    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _bytes = qrcode.stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _bytes.length;
    };

    _this.write = function(buffer) {
      for (var i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrKanji
  //---------------------------------------------------------------------

  var qrKanji = function(data) {

    var _mode = QRMode.MODE_KANJI;
    var _data = data;

    var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
    if (!stringToBytes) {
      throw 'sjis not supported.';
    }
    !function(c, code) {
      // self test for sjis support.
      var test = stringToBytes(c);
      if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
        throw 'sjis not supported.';
      }
    }('\u53cb', 0x9746);

    var _bytes = stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return ~~(_bytes.length / 2);
    };

    _this.write = function(buffer) {

      var data = _bytes;

      var i = 0;

      while (i + 1 < data.length) {

        var c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);

        if (0x8140 <= c && c <= 0x9FFC) {
          c -= 0x8140;
        } else if (0xE040 <= c && c <= 0xEBBF) {
          c -= 0xC140;
        } else {
          throw 'illegal char at ' + (i + 1) + '/' + c;
        }

        c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);

        buffer.put(c, 13);

        i += 2;
      }

      if (i < data.length) {
        throw 'illegal char at ' + (i + 1);
      }
    };

    return _this;
  };

  //=====================================================================
  // GIF Support etc.
  //

  //---------------------------------------------------------------------
  // byteArrayOutputStream
  //---------------------------------------------------------------------

  var byteArrayOutputStream = function() {

    var _bytes = [];

    var _this = {};

    _this.writeByte = function(b) {
      _bytes.push(b & 0xff);
    };

    _this.writeShort = function(i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    };

    _this.writeBytes = function(b, off, len) {
      off = off || 0;
      len = len || b.length;
      for (var i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };

    _this.writeString = function(s) {
      for (var i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i) );
      }
    };

    _this.toByteArray = function() {
      return _bytes;
    };

    _this.toString = function() {
      var s = '';
      s += '[';
      for (var i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ',';
        }
        s += _bytes[i];
      }
      s += ']';
      return s;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64EncodeOutputStream
  //---------------------------------------------------------------------

  var base64EncodeOutputStream = function() {

    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';

    var _this = {};

    var writeEncoded = function(b) {
      _base64 += String.fromCharCode(encode(b & 0x3f) );
    };

    var encode = function(n) {
      if (n < 0) {
        // error.
      } else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }
      throw 'n:' + n;
    };

    _this.writeByte = function(n) {

      _buffer = (_buffer << 8) | (n & 0xff);
      _buflen += 8;
      _length += 1;

      while (_buflen >= 6) {
        writeEncoded(_buffer >>> (_buflen - 6) );
        _buflen -= 6;
      }
    };

    _this.flush = function() {

      if (_buflen > 0) {
        writeEncoded(_buffer << (6 - _buflen) );
        _buffer = 0;
        _buflen = 0;
      }

      if (_length % 3 != 0) {
        // padding
        var padlen = 3 - _length % 3;
        for (var i = 0; i < padlen; i += 1) {
          _base64 += '=';
        }
      }
    };

    _this.toString = function() {
      return _base64;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64DecodeInputStream
  //---------------------------------------------------------------------

  var base64DecodeInputStream = function(str) {

    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;

    var _this = {};

    _this.read = function() {

      while (_buflen < 8) {

        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw 'unexpected end of file./' + _buflen;
        }

        var c = _str.charAt(_pos);
        _pos += 1;

        if (c == '=') {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/) ) {
          // ignore if whitespace.
          continue;
        }

        _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
        _buflen += 6;
      }

      var n = (_buffer >>> (_buflen - 8) ) & 0xff;
      _buflen -= 8;
      return n;
    };

    var decode = function(c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw 'c:' + c;
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // gifImage (B/W)
  //---------------------------------------------------------------------

  var gifImage = function(width, height) {

    var _width = width;
    var _height = height;
    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function(x, y, pixel) {
      _data[y * _width + x] = pixel;
    };

    _this.write = function(out) {

      //---------------------------------
      // GIF Signature

      out.writeString('GIF87a');

      //---------------------------------
      // Screen Descriptor

      out.writeShort(_width);
      out.writeShort(_height);

      out.writeByte(0x80); // 2bit
      out.writeByte(0);
      out.writeByte(0);

      //---------------------------------
      // Global Color Map

      // black
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00);

      // white
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff);

      //---------------------------------
      // Image Descriptor

      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);

      //---------------------------------
      // Local Color Map

      //---------------------------------
      // Raster Data

      var lzwMinCodeSize = 2;
      var raster = getLZWRaster(lzwMinCodeSize);

      out.writeByte(lzwMinCodeSize);

      var offset = 0;

      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }

      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00);

      //---------------------------------
      // GIF Terminator
      out.writeString(';');
    };

    var bitOutputStream = function(out) {

      var _out = out;
      var _bitLength = 0;
      var _bitBuffer = 0;

      var _this = {};

      _this.write = function(data, length) {

        if ( (data >>> length) != 0) {
          throw 'length over';
        }

        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
          length -= (8 - _bitLength);
          data >>>= (8 - _bitLength);
          _bitBuffer = 0;
          _bitLength = 0;
        }

        _bitBuffer = (data << _bitLength) | _bitBuffer;
        _bitLength = _bitLength + length;
      };

      _this.flush = function() {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };

      return _this;
    };

    var getLZWRaster = function(lzwMinCodeSize) {

      var clearCode = 1 << lzwMinCodeSize;
      var endCode = (1 << lzwMinCodeSize) + 1;
      var bitLength = lzwMinCodeSize + 1;

      // Setup LZWTable
      var table = lzwTable();

      for (var i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i) );
      }
      table.add(String.fromCharCode(clearCode) );
      table.add(String.fromCharCode(endCode) );

      var byteOut = byteArrayOutputStream();
      var bitOut = bitOutputStream(byteOut);

      // clear code
      bitOut.write(clearCode, bitLength);

      var dataIndex = 0;

      var s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      while (dataIndex < _data.length) {

        var c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        if (table.contains(s + c) ) {

          s = s + c;

        } else {

          bitOut.write(table.indexOf(s), bitLength);

          if (table.size() < 0xfff) {

            if (table.size() == (1 << bitLength) ) {
              bitLength += 1;
            }

            table.add(s + c);
          }

          s = c;
        }
      }

      bitOut.write(table.indexOf(s), bitLength);

      // end code
      bitOut.write(endCode, bitLength);

      bitOut.flush();

      return byteOut.toByteArray();
    };

    var lzwTable = function() {

      var _map = {};
      var _size = 0;

      var _this = {};

      _this.add = function(key) {
        if (_this.contains(key) ) {
          throw 'dup key:' + key;
        }
        _map[key] = _size;
        _size += 1;
      };

      _this.size = function() {
        return _size;
      };

      _this.indexOf = function(key) {
        return _map[key];
      };

      _this.contains = function(key) {
        return typeof _map[key] != 'undefined';
      };

      return _this;
    };

    return _this;
  };

  var createDataURL = function(width, height, getPixel) {
    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y) );
      }
    }

    var b = byteArrayOutputStream();
    gif.write(b);

    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();

    return 'data:image/gif;base64,' + base64;
  };

  //---------------------------------------------------------------------
  // returns qrcode function.

  return qrcode;
}();

// multibyte support
!function() {

  qrcode.stringToBytesFuncs['UTF-8'] = function(s) {
    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    function toUTF8Array(str) {
      var utf8 = [];
      for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
          i++;
          // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves
          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
            | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >>18),
              0x80 | ((charcode>>12) & 0x3f),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
      }
      return utf8;
    }
    return toUTF8Array(s);
  };

}();

(function (factory) {
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else if (typeof exports === 'object') {
      module.exports = factory();
  }
}(function () {
    return qrcode;
}));

return qrcode;})();
const OFFER=(()=>{
/* ===== Al-Olympi "hotel offer" template family — 1080 × 1350 ===== */
const OC={blue:'#051b95',deep:'#03126b',night:'#03126b',sky:'#1c3be0',ink:'#0b1a6e',muted:'#4a5aa8',line:'#dfe4f7',soft:'#eef1fb',gold:'#c9d4ff',gold2:'#8ea2f0',white:'#fff'};
const OF=(w,px)=>`${w} ${px}px Tajawal, Tahoma, sans-serif`;
function oRR(c,x,y,w,h,r){r=Math.min(r,h/2,w/2);c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
function oT(c,t,x,y,{w=400,s=30,col=OC.ink,a='right',max=0,min=16,ls=0}={}){
  c.save();c.direction='rtl';c.textAlign=a;c.fillStyle=col;let px=s;c.font=OF(w,px);t=String(t??'');
  if(max){while(c.measureText(t).width>max&&px>min){px-=2;c.font=OF(w,px);}}
  if(ls)c.letterSpacing=ls+'px';c.fillText(t,x,y);c.restore();return px;
}
function oW(c,t,w,s){c.font=OF(w,s);return c.measureText(String(t)).width;}
function oCover(c,img,x,y,w,h,{fx=.5,fy=.5,zoom=1}={}){
  const k=Math.max(w/img.width,h/img.height)*zoom,dw=img.width*k,dh=img.height*k;
  c.save();c.beginPath();c.rect(x,y,w,h);c.clip();c.drawImage(img,x+(w-dw)*fx,y+(h-dh)*fy,dw,dh);c.restore();
}
function oTint(img,col){const cv=document.createElement('canvas');cv.width=img.width;cv.height=img.height;const k=cv.getContext('2d');k.drawImage(img,0,0);k.globalCompositeOperation='source-in';k.fillStyle=col;k.fillRect(0,0,cv.width,cv.height);return cv;}
function oLogo(c,img,cx,y,h,{col=null,align='center'}={}){const src=col?oTint(img,col):img,w=img.width/img.height*h,x=align==='center'?cx-w/2:align==='right'?cx-w:cx;c.drawImage(src,x,y,w,h);return w;}
function oStar(c,cx,cy,r,fill){c.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rad=i%2?r*.45:r;c.lineTo(cx+Math.cos(a)*rad,cy+Math.sin(a)*rad);}c.closePath();c.fillStyle=fill;c.fill();}
function oStars(c,n,cx,cy,r,{gap=10,col='#ffffff'}={}){
  const g=col;
  const tot=n*r*2+(n-1)*gap;let x=cx+tot/2-r;for(let i=0;i<n;i++){c.save();c.shadowColor='rgba(3,18,107,.25)';c.shadowBlur=6;oStar(c,x,cy,r,g);c.restore();x-=r*2+gap;}
}
function oPin(c,x,y,s,col){c.save();c.fillStyle=col;c.beginPath();c.arc(x,y-s*.35,s*.42,Math.PI,0);c.lineTo(x,y+s*.45);c.closePath();c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x,y-s*.35,s*.16,0,Math.PI*2);c.fill();c.restore();}
function oCheck(c,x,y,s,col){c.save();c.strokeStyle=col;c.lineWidth=s*.16;c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(x-s*.32,y);c.lineTo(x-s*.08,y+s*.24);c.lineTo(x+s*.34,y-s*.26);c.stroke();c.restore();}
function oPeople(c,n,cx,cy,s,col){const gap=s*.2,tot=n*s+(n-1)*gap;let x=cx+tot/2-s/2;c.save();c.fillStyle=col;
  for(let i=0;i<n;i++){c.beginPath();c.arc(x,cy-s*.18,s*.22,0,Math.PI*2);c.fill();c.beginPath();c.ellipse(x,cy+s*.34,s*.42,s*.26,0,Math.PI,0);c.fill();x-=s+gap;}c.restore();}
const O_OCC={'غرفة فردية':1,'غرفة زوجية':2,'غرفة ثلاثية':3,'غرفة رباعية':4,'غرفة خماسية':5};
const oShort=l=>String(l).replace(/^غرفة\s+/,'');

/* ---- shared blocks ---- */
function oTiles(c,rows,x,y,w,{tabH=50,bodyH=108,gap=16,tab=OC.blue,body='#fff',price=OC.ink,icons=false,shadow=true,cols:fc=0}={}){
  const n=rows.length,cols=fc||(n<=5?n:Math.ceil(n/2)),rn=Math.ceil(n/cols),tw=(w-gap*(cols-1))/cols;
  rows.forEach((r,i)=>{const col=i%cols,row=Math.floor(i/cols),tx=x+w-(tw+gap)*col-tw,ty=y+row*(tabH+bodyH+gap);
    c.save();if(shadow){c.shadowColor='rgba(2,10,54,.28)';c.shadowBlur=22;c.shadowOffsetY=8;}c.fillStyle=body;oRR(c,tx,ty,tw,tabH+bodyH,20);c.fill();c.restore();
    c.save();oRR(c,tx,ty,tw,tabH+bodyH,20);c.clip();c.fillStyle=tab;c.fillRect(tx,ty,tw,tabH);c.restore();
    if(icons&&O_OCC[r.label])oPeople(c,O_OCC[r.label],tx+tw/2,ty+tabH/2,Math.min(22,tw/(O_OCC[r.label]*1.35)),'#fff');
    else oT(c,oShort(r.label),tx+tw/2,ty+tabH/2+9,{w:700,s:25,col:'#fff',a:'center',max:tw-20});
    oT(c,r.amount,tx+tw/2,ty+tabH+bodyH*.52,{w:800,s:46,col:price,a:'center',max:tw-24});
    oT(c,'دينار',tx+tw/2,ty+tabH+bodyH*.84,{w:500,s:22,col:OC.muted,a:'center'});
  });
  return rn*(tabH+bodyH)+(rn-1)*gap;
}
function oInfoCard(c,x,y,w,h,tag,title,sub,{dark=false}={}){
  c.save();c.shadowColor='rgba(2,10,54,.22)';c.shadowBlur=18;c.shadowOffsetY=6;c.fillStyle=dark?'rgba(255,255,255,.1)':'#fff';oRR(c,x,y,w,h,20);c.fill();c.restore();
  if(dark){c.save();c.strokeStyle='rgba(255,255,255,.3)';c.lineWidth=1.5;oRR(c,x,y,w,h,20);c.stroke();c.restore();}
  const tw=oW(c,tag,700,20)+32;c.fillStyle=OC.blue;oRR(c,x+18,y+h/2-19,tw,38,19);c.fill();
  if(dark){c.strokeStyle='rgba(255,255,255,.5)';c.lineWidth=1.5;oRR(c,x+18,y+h/2-19,tw,38,19);c.stroke();}
  oT(c,tag,x+18+tw/2,y+h/2+7,{w:700,s:20,col:'#fff',a:'center'});
  oT(c,title,x+w-24,y+h/2-4,{w:800,s:32,col:dark?'#fff':OC.ink,max:w-tw-70});
  if(sub)oT(c,sub,x+w-24,y+h/2+32,{w:500,s:21,col:dark?'rgba(255,255,255,.75)':OC.muted,max:w-tw-70});
}
function oIncludes(c,items,y,W,{col='#fff',chip='rgba(255,255,255,.12)',title='الأسعار تشمل'}={}){
  oT(c,title,W/2,y,{w:800,s:28,col,a:'center'});
  c.font=OF(600,22);const ws=items.map(t=>c.measureText(t).width+62),gap=10,tot=ws.reduce((a,b)=>a+b,0)+gap*(items.length-1);
  let xr=W/2+tot/2;items.forEach((t,i)=>{const w=ws[i];c.fillStyle=chip;oRR(c,xr-w,y+18,w,46,23);c.fill();
    oCheck(c,xr-24,y+41,20,col===OC.ink?OC.blue:OC.gold);oT(c,t,xr-44,y+49,{w:600,s:22,col});xr-=w+gap;});
}
function oFooter(c,W,H,qr,B,{h=150,bg='#fff'}={}){
  const y=H-h;c.fillStyle=bg;c.fillRect(0,y,W,h);
  // QR block (right)
  const qs=108,qx=W-40-qs,qy=y+(h-qs)/2;c.fillStyle='#fff';oRR(c,qx-6,qy-6,qs+12,qs+12,12);c.fill();c.drawImage(qr,qx,qy,qs,qs);
  oT(c,'امسح',qx-22,qy+34,{w:800,s:28,col:OC.blue});oT(c,'الرمز',qx-22,qy+70,{w:800,s:28,col:OC.blue});oT(c,'QR CODE',qx-22,qy+98,{w:600,s:15,col:OC.muted});
  c.fillStyle=OC.line;c.fillRect(qx-140,y+30,2,h-60);
  oT(c,'زورونا عبر صفحتنا',qx-165,y+h/2-6,{w:600,s:22,col:OC.ink});oT(c,'على فيسبوك',qx-165,y+h/2+26,{w:600,s:22,col:OC.ink});
  // branches (left)
  const bx=40,fy0=y+h/2-(B.branches.length*34)/2;oT(c,'يمكنكم زيارة فروعنا:',bx+470,fy0,{w:800,s:26,col:OC.blue});
  B.branches.forEach((b,i)=>{const by=fy0+40+i*34;oPin(c,bx+452,by-8,22,OC.blue);oT(c,b,bx+432,by,{w:500,s:20,col:OC.ink,max:420,min:13});});
}
function oBrandTop(c,W,logo,{col='#fff',tag=true,tagCol='#fff'}={}){
  oLogo(c,logo,W-48,34,128,{col,align:'right'});
  if(tag){oT(c,D.tagTitle,48,72,{w:800,s:30,col:tagCol,a:'left'});oT(c,D.tagline,48,106,{w:500,s:21,col:tagCol,a:'left'});}
}
function oBigNumber(c,num,cx,y,size){ // gold extruded number
  c.save();c.direction='ltr';c.textAlign='center';c.font=OF(800,size);
  for(let i=14;i>0;i--){c.fillStyle=i>10?'#020c52':'#03126b';c.fillText(num,cx+i*.6,y+i);}
  const g=c.createLinearGradient(0,y-size*.85,0,y);g.addColorStop(0,'#4a67f2');g.addColorStop(.4,'#1c3be0');g.addColorStop(.62,'#051b95');g.addColorStop(1,'#2a48e6');
  c.shadowColor='rgba(0,0,0,.35)';c.shadowBlur=30;c.shadowOffsetY=12;c.fillStyle=g;c.fillText(num,cx,y);
  c.shadowColor='transparent';c.lineWidth=2;c.strokeStyle='rgba(255,255,255,.65)';c.strokeText(num,cx,y);c.restore();
}

/* ===== T1 — واجهة الفندق (Hotel Facade) ===== */
function tFacade(c,W,H,D,A){
  const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,OC.sky);g.addColorStop(.55,OC.blue);g.addColorStop(1,OC.deep);c.fillStyle=g;c.fillRect(0,0,W,H);
  const pX=24,pY=24,pW=W-48,pH=760;
  c.save();oRR(c,pX,pY,pW,pH,40);c.clip();oCover(c,A.hotel,pX,pY,pW,pH,{fy:.35});
  const sh=c.createLinearGradient(0,pY,0,pY+pH);sh.addColorStop(0,'rgba(3,18,94,.55)');sh.addColorStop(.25,'rgba(3,18,94,0)');sh.addColorStop(.52,'rgba(3,18,94,.05)');sh.addColorStop(.86,'rgba(5,27,149,.88)');sh.addColorStop(1,OC.blue);
  c.fillStyle=sh;c.fillRect(pX,pY,pW,pH);c.restore();
  oBrandTop(c,W,A.logo);
  // title block
  const rx=W-64;let y=500;
  c.save();c.fillStyle='rgba(2,10,54,.55)';oRR(c,rx-196,y-44,196,56,28);c.fill();c.restore();oStars(c,D.stars,rx-98,y-16,16);
  oT(c,'فندق',rx,y+56,{w:400,s:46,col:'#fff'});
  c.save();c.shadowColor='rgba(0,0,0,.35)';c.shadowBlur=18;oT(c,D.hotel,rx,y+142,{w:800,s:92,col:'#fff',max:W-128});c.restore();
  oPin(c,rx-8,y+190,26,OC.gold);oT(c,D.distance,rx-32,y+198,{w:500,s:26,col:'rgba(255,255,255,.92)'});
  // prices
  const t0=pY+pH-52,th=oTiles(c,D.rows,48,t0,W-96,{});
  const ty=t0+th+24;
  const half=(W-96-20)/2;
  oInfoCard(c,W-48-half,ty,half,104,D.madLabel,D.madinah.hotel,D.madinah.distance,{dark:true});
  oInfoCard(c,48,ty,half,104,'مدة الإقامة',D.nightsText,D.splitText,{dark:true});
  oIncludes(c,D.includes,ty+150,W,{});
  oFooter(c,W,H,A.qr,D);
}


/* ===== T3 — مقارنة البرامج (Makkah only vs Makkah + Madinah) ===== */
function tCompare(c,W,H,D,A){
  const g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,'#1540d8');g.addColorStop(.5,OC.blue);g.addColorStop(1,OC.deep);c.fillStyle=g;c.fillRect(0,0,W,H);
  oLogo(c,A.logo,W/2,30,140,{col:'#fff'});
  oT(c,D.yearsText,W-48,76,{w:800,s:28,col:'#fff'});oT(c,'في خدمة ضيوف الرحمن',W-48,108,{w:500,s:21,col:'rgba(255,255,255,.8)'});
  oT(c,D.tagTitle,48,76,{w:800,s:28,col:'#fff',a:'left'});oT(c,D.tagline,48,108,{w:500,s:21,col:'rgba(255,255,255,.8)',a:'left'});
  const sec=(y,label,rows)=>{const lw=oW(c,label,800,26)+60;c.fillStyle='#fff';oRR(c,W/2-lw/2,y,lw,48,24);c.fill();oT(c,label,W/2,y+33,{w:800,s:26,col:OC.blue,a:'center'});
    return oTiles(c,rows,48,y+66,W-96,{tabH:46,bodyH:96,gap:14});};
  let y=196;if(D.rowsMakkahOnly)y+=sec(y,'مكة فقط · '+D.makkahOnlyText,D.rowsMakkahOnly)+96;else y+=40;
  y+=sec(y,(D.rowsMakkahOnly?'مكة والمدينة · ':'الأسعار · ')+D.splitText,D.rows)+84;
  const half=(W-96-20)/2;
  oInfoCard(c,W-48-half,y,half,96,D.madLabel,D.madinah.hotel,D.madinah.distance,{dark:true});
  oInfoCard(c,48,y,half,96,'مدة الإقامة',D.nightsText,'',{dark:true});
  // hotel photo strip with name
  const sy=y+120,sh=H-150-sy;
  c.save();oRR(c,24,sy,W-48,sh+40,30);c.clip();oCover(c,A.hotel,24,sy,W-48,sh+40,{fy:.25});
  const gg=c.createLinearGradient(0,sy,0,sy+sh);gg.addColorStop(0,'rgba(3,18,94,.1)');gg.addColorStop(1,'rgba(3,18,94,.85)');c.fillStyle=gg;c.fillRect(24,sy,W-48,sh+40);c.restore();
  oStars(c,D.stars,W/2,sy+sh-130,15);
  c.save();c.shadowColor='rgba(0,0,0,.5)';c.shadowBlur=16;oT(c,'فندق '+D.hotel,W/2,sy+sh-70,{w:800,s:54,col:'#fff',a:'center',max:W-120});c.restore();
  oT(c,D.distance,W/2,sy+sh-30,{w:500,s:22,col:'rgba(255,255,255,.9)',a:'center'});
  oFooter(c,W,H,A.qr,D);
}

/* ===== T4 — موسمي (Seasonal: Ramadan / Hajj / Summer) ===== */
function oLantern(c,x,top,len,s,col){
  c.save();c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.moveTo(x,top);c.lineTo(x,top+len);c.stroke();const y=top+len;
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-s*.25,y);c.lineTo(x+s*.25,y);c.lineTo(x+s*.45,y+s*.35);c.lineTo(x+s*.45,y+s*1.2);c.lineTo(x,y+s*1.55);c.lineTo(x-s*.45,y+s*1.2);c.lineTo(x-s*.45,y+s*.35);c.closePath();c.stroke();
  c.beginPath();c.moveTo(x-s*.45,y+s*.35);c.lineTo(x+s*.45,y+s*.35);c.moveTo(x-s*.45,y+s*1.2);c.lineTo(x+s*.45,y+s*1.2);c.moveTo(x,y+s*.35);c.lineTo(x,y+s*1.2);c.stroke();
  const gl=c.createRadialGradient(x,y+s*.8,2,x,y+s*.8,s);gl.addColorStop(0,'rgba(210,222,255,.45)');gl.addColorStop(1,'rgba(210,222,255,0)');c.fillStyle=gl;c.fillRect(x-s,y,s*2,s*1.8);c.restore();
}
function tSeason(c,W,H,D,A){
  const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,OC.night);g.addColorStop(.55,OC.deep);g.addColorStop(1,OC.blue);c.fillStyle=g;c.fillRect(0,0,W,H);
  // subtle star field
  let seed=11;const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};c.fillStyle='#fff';
  for(let i=0;i<70;i++){c.globalAlpha=.2+rnd()*.5;c.beginPath();c.arc(rnd()*W,rnd()*620,rnd()*1.6+.3,0,Math.PI*2);c.fill();}c.globalAlpha=1;
  [[570,0,70,24],[660,0,150,30],[760,0,40,20]].forEach(([x,t,l,s])=>oLantern(c,x,t,l,s,'rgba(255,255,255,.85)'));
  // hotel photo panel (left)
  const px=36,py=36,pw=470,ph=690;
  c.save();c.shadowColor='rgba(0,0,0,.45)';c.shadowBlur=40;c.fillStyle='#fff';oRR(c,px,py,pw,ph,36);c.fill();c.restore();
  c.save();oRR(c,px,py,pw,ph,36);c.clip();oCover(c,A.hotelTall,px,py,pw,ph,{fy:.2});
  const pg=c.createLinearGradient(0,py+ph*.55,0,py+ph);pg.addColorStop(0,'rgba(2,10,54,0)');pg.addColorStop(1,'rgba(2,10,54,.85)');c.fillStyle=pg;c.fillRect(px,py,pw,ph);c.restore();
  if(A.callig){const ch=200,cw=A.callig.width/A.callig.height*ch;c.save();c.shadowColor='rgba(0,0,0,.5)';c.shadowBlur=14;c.drawImage(oTint(A.callig,'#ffffff'),px+pw/2-cw/2,py+ph-ch-24,cw,ch);c.restore();}
  // brand + title (right)
  const rx=W-56;oLogo(c,A.logo,rx,40,140,{col:'#fff',align:'right'});
  c.fillStyle='rgba(255,255,255,.1)';oRR(c,rx-500,262,500,62,18);c.fill();oStars(c,D.stars,rx-250,293,19);
  oT(c,'فنــــدق',rx,410,{w:500,s:58,col:'#fff'});
  oT(c,D.hotel,rx,500,{w:800,s:80,col:'#fff',max:510});
  oT(c,D.distance,rx,552,{w:500,s:24,col:'rgba(255,255,255,.85)',max:510});
  const sw=oW(c,D.season,800,40)+80;const sg=c.createLinearGradient(rx-sw,0,rx,0);sg.addColorStop(0,'#1c3be0');sg.addColorStop(1,OC.blue);
  c.save();c.shadowColor='rgba(44,86,255,.6)';c.shadowBlur=26;c.fillStyle=sg;oRR(c,rx-sw,600,sw,78,20);c.fill();c.restore();
  c.strokeStyle='rgba(255,255,255,.9)';c.lineWidth=2;oRR(c,rx-sw,600,sw,78,20);c.stroke();
  oT(c,D.season,rx-sw/2,653,{w:800,s:40,col:'#fff',a:'center'});
  // inclusions line + prices
  oT(c,'الأسعار تشمل',W/2,784,{w:800,s:30,col:'#fff',a:'center'});
  oT(c,'«'+D.includes.join(' · ')+'»',W/2,824,{w:500,s:24,col:'rgba(255,255,255,.8)',a:'center',max:W-100});
  const th=oTiles(c,D.rows,48,858,W-96,{tabH:46,bodyH:106,gap:14});
  const half=(W-96-20)/2,iy=858+th+24;
  oInfoCard(c,W-48-half,iy,half,96,D.madLabel,D.madinah.hotel,D.madinah.distance,{dark:true});
  oInfoCard(c,48,iy,half,96,'مدة الإقامة',D.nightsText,D.splitText,{dark:true});
  oFooter(c,W,H,A.qr,D,{h:150});
}

/* ===== Round 2 — stronger offer templates (uses helpers from offer.js) ===== */
function oLayer(W,H,draw){const cv=document.createElement('canvas');cv.width=W;cv.height=H;draw(cv.getContext('2d'));return cv;}
function oGlass(c,bg,x,y,w,h,r,{alpha=.14,blur=18,stroke='rgba(255,255,255,.35)',tint='255,255,255'}={}){
  c.save();oRR(c,x,y,w,h,r);c.clip();c.filter=`blur(${blur}px)`;c.drawImage(bg,0,0);c.filter='none';
  c.fillStyle=`rgba(${tint},${alpha})`;c.fillRect(x,y,w,h);c.restore();
  if(stroke){c.save();c.strokeStyle=stroke;c.lineWidth=1.5;oRR(c,x+.75,y+.75,w-1.5,h-1.5,r);c.stroke();c.restore();}
}
function oGoldGrad(c,x0,y0,x1,y1){const g=c.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,'#ffffff');g.addColorStop(.35,'#e3e9ff');g.addColorStop(.65,'#b9c7fb');g.addColorStop(1,'#f4f6ff');return g;}
function oSeal(c,cx,cy,r,top,num,bottom,rot=-.14){
  c.save();c.translate(cx,cy);c.rotate(rot);
  c.shadowColor='rgba(0,0,0,.4)';c.shadowBlur=30;c.shadowOffsetY=10;c.fillStyle=oGoldGrad(c,-r,-r,r,r);
  c.beginPath();for(let i=0;i<48;i++){const a=i/48*Math.PI*2,rad=i%2?r:r*.94;c.lineTo(Math.cos(a)*rad,Math.sin(a)*rad);}c.closePath();c.fill();
  c.shadowColor='transparent';c.strokeStyle='rgba(5,27,149,.45)';c.lineWidth=2;c.setLineDash([4,6]);c.beginPath();c.arc(0,0,r*.8,0,Math.PI*2);c.stroke();c.setLineDash([]);
  oT(c,top,0,-r*.3,{w:700,s:r*.2,col:OC.deep,a:'center'});
  oT(c,num,0,r*.2,{w:800,s:r*.42,col:OC.deep,a:'center',max:r*1.5});
  oT(c,bottom,0,r*.48,{w:700,s:r*.19,col:OC.deep,a:'center'});c.restore();
}
function oPolaroid(c,img,cx,cy,w,h,rot,cap=''){
  c.save();c.translate(cx,cy);c.rotate(rot);
  c.shadowColor='rgba(0,0,0,.45)';c.shadowBlur=40;c.shadowOffsetY=18;c.fillStyle='#fff';c.fillRect(-w/2,-h/2,w,h);c.shadowColor='transparent';
  const b=14;oCover(c,img,-w/2+b,-h/2+b,w-2*b,h-2*b-40,{fy:.4});
  if(cap)oT(c,cap,0,h/2-18,{w:700,s:22,col:OC.deep,a:'center'});
  c.restore();
}
function oStar8(c,cx,cy,r){c.beginPath();for(let i=0;i<16;i++){const a=Math.PI/8*i-Math.PI/2,rad=i%2?r*.72:r;c.lineTo(cx+Math.cos(a)*rad,cy+Math.sin(a)*rad);}c.closePath();}
function oPattern(c,x,y,w,h,step,col,lw=1.5){c.save();c.beginPath();c.rect(x,y,w,h);c.clip();c.strokeStyle=col;c.lineWidth=lw;
  for(let yy=y;yy<y+h+step;yy+=step)for(let xx=x+((Math.round((yy-y)/step))%2?step/2:0);xx<x+w+step;xx+=step){oStar8(c,xx,yy,step*.32);c.stroke();}c.restore();}
function oDarkFooter(c,W,H,qr,B,{h=132,x=40,w=W-80,bgLayer=null,y=null}={}){
  y=y??H-h-34;if(bgLayer)oGlass(c,bgLayer,x,y,w,h,26,{alpha:.1});else{c.fillStyle='rgba(255,255,255,.08)';oRR(c,x,y,w,h,26);c.fill();}
  const qs=92,qx=x+w-24-qs,qy=y+(h-qs)/2;c.fillStyle='#fff';oRR(c,qx-6,qy-6,qs+12,qs+12,12);c.fill();c.drawImage(qr,qx,qy,qs,qs);
  oT(c,'امسح الرمز',qx-20,qy+38,{w:800,s:24,col:'#fff'});oT(c,'صفحتنا على فيسبوك',qx-20,qy+72,{w:500,s:19,col:'rgba(255,255,255,.75)'});
  c.fillStyle='rgba(255,255,255,.25)';c.fillRect(qx-230,y+26,1.5,h-52);
  const bx=x+26,fy0=y+h/2-(B.branches.length*32)/2+4;
  oT(c,'فروعنا',qx-260,fy0,{w:800,s:22,col:OC.gold});
  B.branches.forEach((b,i)=>{const by=fy0+36+i*32;oPin(c,qx-270,by-7,19,OC.gold);oT(c,b,qx-288,by,{w:500,s:19,col:'#fff',max:qx-300-bx,min:12});});
}




/* ===== R4 — الليلة الفاخرة: black-navy & gold for premium hotels ===== */
function rLuxury(c,W,H,D,A){
  const g=c.createRadialGradient(W/2,480,40,W/2,560,900);g.addColorStop(0,'#1c3be0');g.addColorStop(.55,'#051b95');g.addColorStop(1,'#03126b');c.fillStyle=g;c.fillRect(0,0,W,H);
  oPattern(c,0,0,W,H,120,'rgba(255,255,255,.07)',1.2);
  const gold=oGoldGrad(c,0,0,W,H);c.strokeStyle=gold;c.lineWidth=3;c.strokeRect(26,26,W-52,H-52);c.lineWidth=1.2;c.strokeRect(40,40,W-80,H-80);
  [[40,40],[W-40,40],[40,H-40],[W-40,H-40]].forEach(([x,y])=>{c.fillStyle='#03126b';oStar8(c,x,y,24);c.fill();c.fillStyle=gold;oStar8(c,x,y,18);c.fill();});
  oLogo(c,A.logo,W/2,70,120,{col:'#ffffff'});
  // arch
  const ax=300,aw=480,atop=230,abase=770,r=aw/2;
  const arch=(o=0)=>{c.beginPath();c.moveTo(ax-o,abase);c.lineTo(ax-o,atop+r);c.arc(ax+r,atop+r,r+o,Math.PI,0);c.lineTo(ax+aw+o,abase);};
  const gl=c.createRadialGradient(W/2,480,50,W/2,480,420);gl.addColorStop(0,'rgba(210,222,255,.3)');gl.addColorStop(1,'rgba(210,222,255,0)');c.fillStyle=gl;c.fillRect(0,100,W,900);
  c.save();arch();c.closePath();c.clip();oCover(c,A.hotelTall,ax,atop,aw,abase-atop,{fy:.25});
  const ag=c.createLinearGradient(0,abase-220,0,abase);ag.addColorStop(0,'rgba(3,18,107,0)');ag.addColorStop(1,'rgba(3,18,107,.85)');c.fillStyle=ag;c.fillRect(ax,abase-220,aw,220);c.restore();
  c.strokeStyle=gold;c.lineWidth=5;arch();c.stroke();c.lineWidth=1.5;arch(16);c.stroke();
  // side elements: calligraphy right, seal left
  if(A.callig){const ch=330,cw=A.callig.width/A.callig.height*ch;const t=oTint(A.callig,'#fff');const L=oLayer(Math.ceil(cw),ch,k=>{k.drawImage(t,0,0,cw,ch);k.globalCompositeOperation='source-in';k.fillStyle=oGoldGrad(k,0,0,cw,ch);k.fillRect(0,0,cw,ch);});
    c.drawImage(L,W-70-cw,330);}
  oSeal(c,160,500,96,'ابتداءً من',D.fromPrice,'دينار',-.08);
  oStars(c,D.stars,W/2,812,17);
  c.save();c.fillStyle=oGoldGrad(c,W/2-300,840,W/2+300,900);c.direction='rtl';c.textAlign='center';c.font=OF(800,76);c.shadowColor='rgba(0,0,0,.5)';c.shadowBlur=18;c.fillText('فندق '+D.hotel,W/2,900);c.restore();
  oT(c,D.distance,W/2,944,{w:500,s:23,col:'rgba(201,212,255,.85)',a:'center'});
  // gold outlined price boxes
  const n=D.rows.length,bw=(W-120-(n-1)*14)/n,by=980,bh=150;
  D.rows.forEach((r,i)=>{const x=W-60-bw-(bw+14)*i;c.fillStyle='rgba(255,255,255,.04)';oRR(c,x,by,bw,bh,18);c.fill();c.strokeStyle=gold;c.lineWidth=1.5;oRR(c,x,by,bw,bh,18);c.stroke();
    oT(c,oShort(r.label),x+bw/2,by+40,{w:700,s:23,col:'#c9d4ff',a:'center'});oT(c,r.amount,x+bw/2,by+98,{w:800,s:46,col:'#fff',a:'center',max:bw-16});oT(c,'دينار',x+bw/2,by+130,{w:500,s:19,col:'rgba(255,255,255,.6)',a:'center'});});
  oT(c,D.madLabel+': '+D.madinah.hotel+'  ·  '+D.nightsText+' ('+D.splitText+')',W/2,1180,{w:600,s:22,col:'#fff',a:'center'});
  oT(c,'الأسعار تشمل: '+D.includes.join(' · '),W/2,1218,{w:500,s:20,col:'rgba(201,212,255,.85)',a:'center'});
  c.fillStyle='#fff';oRR(c,W/2-44,1240,88,88,10);c.fill();c.drawImage(A.qr,W/2-38,1246,76,76);
  oT(c,'فروعنا',W-84,1272,{w:800,s:22,col:'#c9d4ff'});oT(c,'طرابلس · الزاوية',W-84,1306,{w:500,s:20,col:'rgba(255,255,255,.8)'});
  oT(c,'امسح الرمز',84,1272,{w:800,s:22,col:'#c9d4ff',a:'left'});oT(c,'وزورونا على فيسبوك',84,1306,{w:500,s:20,col:'rgba(255,255,255,.8)',a:'left'});
}

/* ===== R5 — الحديث: clean white, big photo card, modern type ===== */
function rModern(c,W,H,D,A){
  c.fillStyle='#eef1f8';c.fillRect(0,0,W,H);
  c.fillStyle='#fff';oRR(c,28,28,W-56,H-56,44);c.fill();
  oLogo(c,A.logo,W-64,52,104,{align:'right'});
  const chip='عرض خاص · '+D.nightsText,cw=oW(c,chip,700,24)+56;c.fillStyle=OC.soft;oRR(c,64,78,cw,54,27);c.fill();oT(c,chip,64+cw/2,114,{w:700,s:24,col:OC.blue,a:'center'});
  // photo card
  const px=64,py=180,pw=W-128,ph=480;
  const bg=oLayer(W,H,k=>{k.save();oRR(k,px,py,pw,ph,34);k.clip();oCover(k,A.hotel,px,py,pw,ph,{fy:.35});k.restore();});
  c.save();c.shadowColor='rgba(5,27,149,.25)';c.shadowBlur=40;c.shadowOffsetY=16;c.fillStyle='#fff';oRR(c,px,py,pw,ph,34);c.fill();c.restore();c.drawImage(bg,0,0);
  c.save();oRR(c,px,py,pw,ph,34);c.clip();const pg=c.createLinearGradient(0,py+ph*.5,0,py+ph);pg.addColorStop(0,'rgba(3,18,107,0)');pg.addColorStop(1,'rgba(3,18,107,.55)');c.fillStyle=pg;c.fillRect(px,py,pw,ph);c.restore();
  oGlass(c,bg,px+pw-24-190,py+24,190,54,27,{alpha:.25});oStars(c,D.stars,px+pw-24-95,py+51,15);
  const bx=px+24,bw2=330,bh2=120,byy=py+ph-24-bh2;oGlass(c,bg,bx,byy,bw2,bh2,24,{alpha:.2});
  oT(c,'ابتداءً من',bx+bw2-26,byy+42,{w:600,s:22,col:'rgba(255,255,255,.9)'});oT(c,D.fromPrice,bx+bw2-26,byy+98,{w:800,s:54,col:'#fff'});oT(c,'دينار',bx+26,byy+98,{w:600,s:22,col:'rgba(255,255,255,.9)',a:'left'});
  // title
  oT(c,'فندق '+D.hotel,W-64,764,{w:800,s:78,col:OC.ink,max:640});
  oPin(c,W-74,808,22,OC.blue);oT(c,D.distance,W-94,816,{w:500,s:23,col:OC.muted,max:600});
  oT(c,D.madLabel,64,738,{w:600,s:20,col:OC.muted,a:'left'});oT(c,D.madinah.hotel,64,774,{w:800,s:28,col:OC.blue,a:'left',max:300});oT(c,D.splitText,64,812,{w:500,s:20,col:OC.muted,a:'left'});
  // prices
  const n=D.rows.length,gap=14,tw=(W-128-gap*(n-1))/n,ty=852,th=156;
  D.rows.forEach((r,i)=>{const x=W-64-tw-(tw+gap)*i;const best=r.amount===D.fromPrice;
    c.fillStyle=best?OC.blue:'#f2f4fb';oRR(c,x,ty,tw,th,24);c.fill();
    oT(c,oShort(r.label),x+tw/2,ty+44,{w:700,s:23,col:best?'rgba(255,255,255,.85)':OC.muted,a:'center'});
    oT(c,r.amount,x+tw/2,ty+104,{w:800,s:48,col:best?'#fff':OC.ink,a:'center',max:tw-16});
    oT(c,'دينار',x+tw/2,ty+138,{w:500,s:19,col:best?'rgba(255,255,255,.75)':OC.muted,a:'center'});
    if(best){const t='الأوفر';const w=oW(c,t,800,17)+26;c.fillStyle=OC.gold;oRR(c,x+tw/2-w/2,ty-15,w,30,15);c.fill();oT(c,t,x+tw/2,ty+6,{w:800,s:17,col:OC.deep,a:'center'});}});
  // includes
  c.font=OF(600,21);const items=D.includes,ws=items.map(t=>c.measureText(t).width+58),tot=ws.reduce((a,b)=>a+b,0)+10*(items.length-1);let xr=W/2+tot/2;
  items.forEach((t,i)=>{const w=ws[i];c.strokeStyle=OC.line;c.lineWidth=2;oRR(c,xr-w,1040,w,46,23);c.stroke();oCheck(c,xr-22,1063,18,OC.blue);oT(c,t,xr-40,1071,{w:600,s:21,col:OC.ink});xr-=w+10;});
  c.fillStyle=OC.line;c.fillRect(64,1116,W-128,2);
  // footer inside card
  const qs=100,qx=W-64-qs,qy=1150;c.drawImage(A.qr,qx,qy,qs,qs);
  oT(c,'امسح الرمز',qx-22,qy+42,{w:800,s:26,col:OC.blue});oT(c,'وزورونا على فيسبوك',qx-22,qy+78,{w:500,s:20,col:OC.muted});
  oT(c,'فروعنا',64+440,qy+26,{w:800,s:22,col:OC.blue,a:'right'});
  D.branches.forEach((b,i)=>{oPin(c,64+428,qy+58+i*34,19,OC.blue);oT(c,b,64+410,qy+64+i*34,{w:500,s:19,col:OC.ink,max:400,min:12});});
}

/* ===== Round 3 — strict brand palette: logo blue #051B95, its lighter/darker tones, white ===== */
const BR={b:'#051b95',b2:'#0a26c2',b3:'#1c3be0',d:'#03126b',tint:'#e9edfb',tint2:'#f4f6fd',w:'#ffffff',txt:'#051b95',sub:'#4a5aa8'};
function bEmblem(c,logo,x,y,h,col,alpha){const sx=logo.width*.12,sw=logo.width*.77,sh=logo.height*.6,w=sw/sh*h;const t=oTint(logo,col);c.save();c.globalAlpha=alpha;c.drawImage(t,sx,0,sw,sh,x,y,w,h);c.restore();return w;}
function bStars(c,n,cx,cy,r,col){const gap=r*.7,tot=n*r*2+(n-1)*gap;let x=cx+tot/2-r;for(let i=0;i<n;i++){oStar(c,x,cy,r,col);x-=r*2+gap;}}
function bLogoCard(c,logo,x,y,h,{pad=18,r=22,bg='#fff',shadow=true}={}){const w=logo.width/logo.height*h;
  c.save();if(shadow){c.shadowColor='rgba(3,18,107,.25)';c.shadowBlur=24;c.shadowOffsetY=8;}c.fillStyle=bg;oRR(c,x-w-pad*2,y,w+pad*2,h+pad*2,r);c.fill();c.restore();
  c.drawImage(logo,x-w-pad,y+pad,w,h);return w+pad*2;}
/* white price cards: tinted header with the room name, big blue price */
function bCards(c,rows,x,y,w,{h=150,head=46,gap=14,radius=20,shadow=true,headBg=BR.tint,body='#fff',icons=false}={}){
  const n=rows.length,cols=n<=5?n:Math.ceil(n/2),rn=Math.ceil(n/cols),cw=(w-gap*(cols-1))/cols;
  rows.forEach((r,i)=>{const col=i%cols,row=Math.floor(i/cols),cx=x+w-(cw+gap)*col-cw,cy=y+row*(h+gap);
    c.save();if(shadow){c.shadowColor='rgba(3,18,107,.28)';c.shadowBlur=22;c.shadowOffsetY=8;}c.fillStyle=body;oRR(c,cx,cy,cw,h,radius);c.fill();c.restore();
    c.save();oRR(c,cx,cy,cw,h,radius);c.clip();c.fillStyle=headBg;c.fillRect(cx,cy,cw,head);c.restore();
    if(icons&&O_OCC[r.label])oPeople(c,O_OCC[r.label],cx+cw/2,cy+head/2,Math.min(20,cw/(O_OCC[r.label]*1.4)),BR.b);
    else oT(c,oShort(r.label),cx+cw/2,cy+head/2+9,{w:700,s:24,col:BR.b,a:'center',max:cw-16});
    oT(c,r.amount,cx+cw/2,cy+head+(h-head)*.56,{w:800,s:48,col:BR.b,a:'center',max:cw-20});
    oT(c,'دينار',cx+cw/2,cy+h-16,{w:500,s:20,col:BR.sub,a:'center'});});
  return rn*h+(rn-1)*gap;
}
function bInfo(c,x,y,w,h,label,title,sub,{onBlue=true}={}){
  c.fillStyle=onBlue?'rgba(255,255,255,.12)':BR.tint2;oRR(c,x,y,w,h,20);c.fill();
  c.strokeStyle=onBlue?'rgba(255,255,255,.28)':BR.tint;c.lineWidth=2;oRR(c,x,y,w,h,20);c.stroke();
  oT(c,label,x+w-24,y+36,{w:600,s:20,col:onBlue?'rgba(255,255,255,.75)':BR.sub});
  oT(c,title,x+w-24,y+76,{w:800,s:30,col:onBlue?'#fff':BR.b,max:w-48});
  if(sub)oT(c,sub,x+24,y+76,{w:500,s:19,col:onBlue?'rgba(255,255,255,.75)':BR.sub,a:'left',max:w*.4});
}
function bIncludes(c,items,y,W,{col='#fff',check='#fff'}={}){
  const lab='الأسعار تشمل:';c.font=OF(800,24);const lw=c.measureText(lab).width;c.font=OF(600,22);
  const ws=items.map(t=>c.measureText(t).width+46),tot=lw+24+ws.reduce((a,b)=>a+b,0);let xr=W/2+tot/2;
  oT(c,lab,xr,y,{w:800,s:24,col});xr-=lw+24;
  items.forEach((t,i)=>{oCheck(c,xr-12,y-8,18,check);oT(c,t,xr-30,y,{w:600,s:22,col});xr-=ws[i];});
}
function bFooter(c,W,H,qr,B,{h=140,dark=false}={}){
  const y=H-h;c.fillStyle=dark?BR.b:'#fff';c.fillRect(0,y,W,h);
  const tc=dark?'#fff':BR.b,sc=dark?'rgba(255,255,255,.8)':BR.sub;
  const qs=96,qx=W-44-qs,qy=y+(h-qs)/2;c.fillStyle='#fff';oRR(c,qx-7,qy-7,qs+14,qs+14,12);c.fill();c.drawImage(qr,qx,qy,qs,qs);
  oT(c,'امسح الرمز',qx-22,qy+40,{w:800,s:25,col:tc});oT(c,'وزورونا على فيسبوك',qx-22,qy+74,{w:500,s:20,col:sc});
  c.fillStyle=dark?'rgba(255,255,255,.3)':BR.tint;c.fillRect(qx-250,y+28,2,h-56);
  const fy0=y+h/2-(B.branches.length*32)/2+4;oT(c,'فروعنا',qx-280,fy0,{w:800,s:23,col:tc});
  B.branches.forEach((b,i)=>{const by=fy0+36+i*32;oPin(c,qx-290,by-7,19,tc);oT(c,b,qx-308,by,{w:500,s:19,col:tc,max:qx-360,min:12});});
}

/* ===== B1 — الموجة: hotel photo above, a blue wave shaped like the logo swoosh ===== */
function bWave(c,W,H,D,A){
  c.fillStyle=BR.b;c.fillRect(0,0,W,H);
  oCover(c,A.hotel,0,0,W,800,{fy:.3});
  const tg=c.createLinearGradient(0,0,0,240);tg.addColorStop(0,'rgba(5,27,149,.55)');tg.addColorStop(1,'rgba(5,27,149,0)');c.fillStyle=tg;c.fillRect(0,0,W,240);
  const wave=(dy)=>{c.beginPath();c.moveTo(0,700+dy);c.bezierCurveTo(W*.3,560+dy,W*.62,760+dy,W,560+dy);c.lineTo(W,H);c.lineTo(0,H);c.closePath();};
  c.fillStyle='rgba(28,59,224,.55)';wave(-34);c.fill();
  const g=c.createLinearGradient(0,560,0,H);g.addColorStop(0,BR.b2);g.addColorStop(.45,BR.b);g.addColorStop(1,BR.d);c.fillStyle=g;wave(0);c.fill();
  c.save();c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(0,700-14);c.bezierCurveTo(W*.3,560-14,W*.62,760-14,W,560-14);c.stroke();c.restore();
  c.save();wave(0);c.clip();bEmblem(c,A.logo,-120,760,520,'#fff',.06);c.restore();
  bLogoCard(c,A.logo,W-40,34,112);
  oT(c,D.tagTitle,44,78,{w:800,s:30,col:'#fff',a:'left'});oT(c,D.tagline,44,112,{w:500,s:21,col:'#fff',a:'left'});
  const rx=W-56;c.fillStyle='rgba(255,255,255,.16)';oRR(c,rx-176,612,176,48,24);c.fill();bStars(c,D.stars,rx-88,636,13,'#fff');
  oT(c,'فنــدق',rx,708,{w:400,s:42,col:'#fff'});
  oT(c,D.hotel,rx,796,{w:800,s:92,col:'#fff',max:W-112});
  oPin(c,rx-8,840,22,'#fff');oT(c,D.distance,rx-28,848,{w:500,s:23,col:'rgba(255,255,255,.9)'});
  const ty=880,th=bCards(c,D.rows,48,ty,W-96,{h:146});
  const iy=ty+th+20,half=(W-96-16)/2;
  bInfo(c,W-48-half,iy,half,100,D.madLabel,D.madinah.hotel,'',{});bInfo(c,48,iy,half,100,'مدة الإقامة',D.nightsText,D.splitText,{});
  bIncludes(c,D.includes,iy+140,W,{});
  bFooter(c,W,H,A.qr,D,{h:130});
}

/* ===== B2 — الإطار الأبيض: white page, framed photo with a blue name plate ===== */
function bFrame(c,W,H,D,A){
  c.fillStyle='#fff';c.fillRect(0,0,W,H);
  bEmblem(c,A.logo,W-560,520,640,BR.b,.04);
  oLogo(c,A.logo,W-48,30,118,{align:'right'});
  oT(c,D.tagTitle,48,76,{w:800,s:30,col:BR.b,a:'left'});oT(c,D.tagline,48,110,{w:500,s:21,col:BR.sub,a:'left'});
  const px=48,py=176,pw=W-96,ph=560;
  c.save();c.shadowColor='rgba(3,18,107,.25)';c.shadowBlur=34;c.shadowOffsetY=14;c.fillStyle='#fff';oRR(c,px,py,pw,ph,36);c.fill();c.restore();
  c.save();oRR(c,px,py,pw,ph,36);c.clip();oCover(c,A.hotel,px,py,pw,ph,{fy:.3});c.restore();
  // blue name plate overlapping the photo's lower edge
  const nw=620,nh=196,nx=W-48-nw,ny=py+ph-120;
  c.save();c.shadowColor='rgba(3,18,107,.35)';c.shadowBlur=30;c.shadowOffsetY=10;const g=c.createLinearGradient(nx,0,nx+nw,0);g.addColorStop(0,BR.b);g.addColorStop(1,BR.b2);c.fillStyle=g;oRR(c,nx,ny,nw,nh,28);c.fill();c.restore();
  bStars(c,D.stars,nx+nw-72,ny+40,12,'#fff');
  oT(c,'فندق '+D.hotel,nx+nw-32,ny+118,{w:800,s:66,col:'#fff',max:nw-64});
  oPin(c,nx+nw-40,ny+158,20,'#fff');oT(c,D.distance,nx+nw-58,ny+165,{w:500,s:20,col:'rgba(255,255,255,.9)',max:nw-90});
  const ty=py+ph+116;const th=oTiles(c,D.rows,48,ty,W-96,{tabH:48,bodyH:100,gap:14,tab:BR.b,body:BR.tint2,price:BR.b,shadow:false});
  const iy=ty+th+18,half=(W-96-16)/2;
  bInfo(c,W-48-half,iy,half,100,D.madLabel,D.madinah.hotel,'',{onBlue:false});bInfo(c,48,iy,half,100,'مدة الإقامة',D.nightsText,D.splitText,{onBlue:false});
  bIncludes(c,D.includes,iy+146,W,{col:BR.b,check:BR.b});
  bFooter(c,W,H,A.qr,D,{h:128,dark:true});
}


/* ===== B4 — النصف: photo on one side, brand panel on the other (like the Abeer design, cleaner) ===== */
function bSplit(c,W,H,D,A){
  const g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,BR.b2);g.addColorStop(.6,BR.b);g.addColorStop(1,BR.d);c.fillStyle=g;c.fillRect(0,0,W,H);
  bEmblem(c,A.logo,W-520,470,560,'#fff',.06);
  const pw=480,ph=760;c.save();c.beginPath();c.moveTo(0,0);c.lineTo(pw-60,0);c.quadraticCurveTo(pw,0,pw,60);c.lineTo(pw,ph-120);c.quadraticCurveTo(pw,ph,pw-120,ph);c.lineTo(0,ph);c.closePath();c.clip();
  oCover(c,A.hotelTall,0,0,pw,ph,{fy:.2});c.restore();
  c.strokeStyle='#fff';c.lineWidth=8;c.beginPath();c.moveTo(pw-60,0);c.quadraticCurveTo(pw,0,pw,60);c.lineTo(pw,ph-120);c.quadraticCurveTo(pw,ph,pw-120,ph);c.lineTo(0,ph);c.stroke();
  const rx=W-52;bLogoCard(c,A.logo,rx,36,104);
  c.fillStyle='rgba(255,255,255,.16)';oRR(c,rx-180,256,180,48,24);c.fill();bStars(c,D.stars,rx-90,280,13,'#fff');
  oT(c,'فنـــدق',rx,370,{w:400,s:50,col:'#fff'});
  oT(c,D.hotel,rx,462,{w:800,s:84,col:'#fff',max:W-pw-100});
  oT(c,D.distance,rx,512,{w:500,s:22,col:'rgba(255,255,255,.9)',max:W-pw-100});
  bInfo(c,pw+36,552,W-pw-88,96,D.madLabel,D.madinah.hotel,'',{});
  bInfo(c,pw+36,664,W-pw-88,96,'مدة الإقامة',D.nightsText,D.splitText,{});
  const ty=820,th=bCards(c,D.rows,48,ty,W-96,{h:156,icons:true});
  bIncludes(c,D.includes,ty+th+78,W,{});
  bFooter(c,W,H,A.qr,D,{h:132});
}

/* ===== Refined: الغلاف / ابتداءً من / الرقم البطل / السعر البطل / القُطري ===== */
/* price columns separated by hairlines — the calm, editorial way to list prices */
function eCols(c,rows,x,y,w,{h=150,col='#fff',sub='rgba(255,255,255,.72)',line='rgba(255,255,255,.28)',ps=52,maxPer=5}={}){
  const n=rows.length,per=Math.min(n,n>maxPer?Math.ceil(n/2):n),rn=Math.ceil(n/per),rh=rn>1?h*.78:h,cw=w/per;
  rows.forEach((r,i)=>{const ri=Math.floor(i/per),ci=i%per,cx=x+w-cw*ci-cw/2,cy=y+ri*rh;
    if(ci)(c.fillStyle=line,c.fillRect(x+w-cw*ci-.75,cy+rh*.18,1.5,rh*.64));
    oT(c,oShort(r.label),cx,cy+rh*.28,{w:600,s:Math.min(24,rh*.17),col:sub,a:'center',max:cw-16});
    oT(c,r.amount,cx,cy+rh*.66,{w:800,s:Math.min(ps,rh*.36),col,a:'center',max:cw-18});
    oT(c,'دينار',cx,cy+rh*.88,{w:500,s:Math.min(19,rh*.14),col:sub,a:'center'});});
  return rn*rh;
}
/* a single centred information line: "فندق المدينة: … · 14 ليلة (11 مكة · 3 المدينة)" */
function eInfo(c,parts,cx,y,{col='#fff',sub='rgba(255,255,255,.7)',s=23,max=960}={}){
  const text=parts.filter(Boolean).join('   ·   ');oT(c,text,cx,y,{w:600,s,col,a:'center',max});
}
function eStarsR(c,n,rx,cy,r,{gap=10,col='#fff'}={}){oStars(c,n,rx-(n*2*r+(n-1)*gap)/2,cy,r,{gap,col});}
function eRule(c,cx,y,w,col){const g=c.createLinearGradient(cx-w/2,0,cx+w/2,0);g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(.5,col);g.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=g;c.fillRect(cx-w/2,y,w,2);}
function eSpaced(t){return String(t).split('').join('\u200a');}
/* slim footer strip: QR + branches, light or dark */
function eFooter(c,W,H,qr,B,{h=112,dark=true,m=0}={}){
  const y=H-h-m;
  c.fillStyle=dark?'rgba(255,255,255,.08)':'#fff';c.fillRect(m,y,W-m*2,h);
  c.fillStyle=dark?'rgba(255,255,255,.22)':OC.line;c.fillRect(m,y,W-m*2,1.5);
  const tc=dark?'#fff':OC.blue,sc=dark?'rgba(255,255,255,.72)':OC.muted,qs=72,qx=W-m-48-qs,qy=y+(h-qs)/2;
  c.fillStyle='#fff';oRR(c,qx-6,qy-6,qs+12,qs+12,10);c.fill();c.drawImage(qr,qx,qy,qs,qs);
  oT(c,'امسح الرمز',qx-20,qy+30,{w:800,s:22,col:tc});oT(c,'صفحتنا على فيسبوك',qx-20,qy+60,{w:500,s:18,col:sc});
  const bx=m+48,text=B.branches.join('   |   ');
  oT(c,'فروعنا',qx-270,qy+30,{w:800,s:20,col:tc});oT(c,text,qx-270,qy+60,{w:500,s:18,col:sc,max:qx-270-bx,min:12});
}

/* ===== الغلاف — full-bleed hotel photo, magazine masthead, editorial price row ===== */
function rCover(c,W,H,D,A){
  const bg=oLayer(W,H,g=>{g.filter='contrast(1.06) saturate(1.04)';oCover(g,A.hotel,0,0,W,H,{fy:.3});g.filter='none';
    const t=g.createLinearGradient(0,0,0,H);t.addColorStop(0,'rgba(3,18,107,.72)');t.addColorStop(.18,'rgba(3,18,107,.18)');t.addColorStop(.42,'rgba(5,27,149,.08)');
    t.addColorStop(.6,'rgba(5,27,149,.72)');t.addColorStop(.78,'rgba(3,18,107,.95)');t.addColorStop(1,'#03126b');g.fillStyle=t;g.fillRect(0,0,W,H);});
  c.drawImage(bg,0,0);
  // masthead
  oLogo(c,A.logo,W/2,34,112,{col:'#fff'});
  c.fillStyle='rgba(255,255,255,.35)';c.fillRect(64,190,W-128,1.5);
  oT(c,'عروض الحج والعمرة',W-64,226,{w:700,s:22,col:'rgba(255,255,255,.85)'});oT(c,D.nightsText,64,226,{w:700,s:22,col:'rgba(255,255,255,.85)',a:'left'});
  // "starting from" tag (top-left, outlined)
  const tag='ابتداءً من '+D.fromPrice+' دينار',tw=oW(c,tag,700,24)+48;
  c.fillStyle='rgba(3,18,107,.45)';oRR(c,64,256,tw,52,26);c.fill();c.strokeStyle='rgba(255,255,255,.85)';c.lineWidth=2;oRR(c,64,256,tw,52,26);c.stroke();oT(c,tag,64+tw/2,291,{w:700,s:24,col:'#fff',a:'center'});
  // title block
  const rx=W-64;let y=780;
  eStarsR(c,D.stars,rx,y-8,12,{gap:10});
  oT(c,'فنـــدق',rx,y+46,{w:500,s:34,col:'rgba(255,255,255,.85)'});
  c.save();c.shadowColor='rgba(3,18,107,.5)';c.shadowBlur=20;oT(c,D.hotel,rx,y+160,{w:800,s:132,col:'#fff',max:W-128});c.restore();
  c.fillStyle='#fff';c.fillRect(rx-120,y+184,120,4);
  oT(c,D.distance,rx,y+226,{w:500,s:24,col:'rgba(255,255,255,.88)',max:W-128});
  // prices
  const py=y+262;c.fillStyle='rgba(255,255,255,.22)';c.fillRect(64,py,W-128,1.5);
  const ph=eCols(c,D.rows,64,py+6,W-128,{h:128,ps:46});
  eInfo(c,[D.madLabel+': '+D.madinah.hotel,D.nightsText+' ('+D.splitText+')'],W/2,py+ph+42,{s:21,col:'rgba(255,255,255,.85)'});
  eFooter(c,W,H,A.qr,D,{h:104});
}

/* ===== ابتداءً من — light page, arch photo, flat blue price, clean cards ===== */
function tHero(c,W,H,D,A){
  c.fillStyle='#f4f6fd';c.fillRect(0,0,W,H);
  oPattern(c,0,0,W,H,150,'rgba(5,27,149,.045)');
  // arch photo (left)
  const ax=56,aw=440,atop=64,abase=820,r=aw/2;
  const arch=(o=0)=>{c.beginPath();c.moveTo(ax-o,abase+o);c.lineTo(ax-o,atop+r);c.arc(ax+r,atop+r,r+o,Math.PI,0);c.lineTo(ax+aw+o,abase+o);};
  c.save();c.strokeStyle='rgba(5,27,149,.35)';c.lineWidth=2;arch(18);c.stroke();c.restore();
  c.save();c.shadowColor='rgba(3,18,107,.3)';c.shadowBlur=40;c.shadowOffsetY=18;c.fillStyle='#fff';arch();c.closePath();c.fill();c.restore();
  c.save();arch();c.closePath();c.clip();oCover(c,A.hotelTall,ax,atop,aw,abase-atop,{fy:.3});c.restore();
  // text column (right)
  const rx=W-64,cw=W-64-(ax+aw+56);
  oLogo(c,A.logo,rx,56,112,{align:'right'});
  eStarsR(c,D.stars,rx,262,12,{col:OC.blue});
  oT(c,'فنـــدق',rx,322,{w:500,s:34,col:OC.muted});
  oT(c,D.hotel,rx,410,{w:800,s:86,col:OC.blue,max:cw});
  oT(c,D.distance,rx,456,{w:500,s:21,col:OC.muted,max:cw});
  c.fillStyle=OC.line;c.fillRect(rx-cw,500,cw,2);
  oT(c,'ابتداءً من',rx,558,{w:700,s:28,col:OC.muted});
  c.save();c.direction='ltr';c.textAlign='right';let fs=150;c.font=OF(800,fs);while(c.measureText(D.fromPrice).width>cw-10&&fs>80){fs-=6;c.font=OF(800,fs);}
  c.fillStyle=OC.blue;c.fillText(D.fromPrice,rx,558+fs*.82);c.restore();
  oT(c,'دينار للفرد · '+D.nightsText,rx,558+150*.82+48,{w:600,s:24,col:OC.blue,max:cw});
  oT(c,D.splitText,rx,558+150*.82+84,{w:500,s:20,col:OC.muted,max:cw});
  // prices
  const ty=872,th=bCards(c,D.rows,56,ty,W-112,{h:132,head:42,shadow:true,icons:false});
  eInfo(c,[D.madLabel+': '+D.madinah.hotel,'الأسعار تشمل: '+D.includes.join('، ')],W/2,ty+th+48,{col:OC.blue,s:21});
  bFooter(c,W,H,A.qr,D,{h:120,dark:true});
}

/* ===== الرقم البطل — giant numerals filled with the Kaaba (brand duotone), white info card ===== */
function rNumber(c,W,H,D,A){
  const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1c3be0');g.addColorStop(.45,OC.blue);g.addColorStop(1,'#03126b');c.fillStyle=g;c.fillRect(0,0,W,H);
  oPattern(c,0,0,W,760,150,'rgba(255,255,255,.05)');
  const glow=c.createRadialGradient(W/2,430,30,W/2,430,520);glow.addColorStop(0,'rgba(120,150,255,.35)');glow.addColorStop(1,'rgba(120,150,255,0)');c.fillStyle=glow;c.fillRect(0,0,W,900);
  oLogo(c,A.logo,W/2,34,108,{col:'#fff'});
  oT(c,'فندق '+D.hotel,W/2,232,{w:800,s:46,col:'#fff',a:'center',max:W-160});
  oStars(c,D.stars,W/2,270,11,{gap:9});
  oT(c,'ابتداءً من',W/2,352,{w:600,s:28,col:'rgba(255,255,255,.8)',a:'center'});
  const num=D.fromPrice;let fs=300;c.font=OF(800,fs);while(c.measureText(num).width>W-120&&fs>160){fs-=10;c.font=OF(800,fs);}
  const ny=362+fs*.82;
  const L=oLayer(W,H,k=>{k.direction='ltr';k.textAlign='center';k.font=OF(800,fs);k.fillStyle='#000';k.fillText(num,W/2,ny);
    k.globalCompositeOperation='source-in';k.filter='brightness(1.35) contrast(1.05)';oCover(k,A.kaabaNight,0,ny-fs*.85,W,fs*.95,{fy:.55});k.filter='none';
    k.globalCompositeOperation='color';k.fillStyle='#2f50ee';k.fillRect(0,0,W,H);
    k.globalCompositeOperation='screen';k.fillStyle='rgba(28,59,224,.45)';k.fillRect(0,0,W,H);
    k.globalCompositeOperation='destination-in';k.fillStyle='#000';k.fillText(num,W/2,ny);});
  c.save();c.shadowColor='rgba(3,18,107,.55)';c.shadowBlur=36;c.shadowOffsetY=14;c.drawImage(L,0,0);c.restore();
  c.save();c.direction='ltr';c.textAlign='center';c.font=OF(800,fs);c.lineWidth=3;c.strokeStyle='rgba(255,255,255,.9)';c.strokeText(num,W/2,ny);c.restore();
  oT(c,'دينار للفرد · '+D.nightsText,W/2,ny+54,{w:600,s:27,col:'#fff',a:'center'});
  // white card
  const cy=ny+170,ch=H-cy-40;
  c.save();c.shadowColor='rgba(3,18,107,.35)';c.shadowBlur=40;c.shadowOffsetY=12;c.fillStyle='#fff';oRR(c,40,cy,W-80,ch,34);c.fill();c.restore();
  // hotel photo medallion riding the card edge
  const mr=78,mx=W/2,my=cy;c.save();c.shadowColor='rgba(3,18,107,.35)';c.shadowBlur=20;c.fillStyle='#fff';c.beginPath();c.arc(mx,my,mr+8,0,Math.PI*2);c.fill();c.restore();
  c.save();c.beginPath();c.arc(mx,my,mr,0,Math.PI*2);c.clip();oCover(c,A.hotel,mx-mr,my-mr,mr*2,mr*2,{fy:.4});c.restore();
  oT(c,D.distance,W/2,cy+mr+44,{w:600,s:21,col:OC.muted,a:'center',max:W-160});
  const ph=eCols(c,D.rows,72,cy+mr+62,W-144,{h:124,col:OC.blue,sub:OC.muted,line:OC.line,ps:44});
  eInfo(c,[D.madLabel+': '+D.madinah.hotel,D.splitText],W/2,cy+mr+62+ph+36,{col:OC.blue,s:20});
  eInfo(c,['الأسعار تشمل: '+D.includes.join('، ')],W/2,cy+mr+62+ph+80,{col:OC.muted,s:19});
  // compact footer inside the card
  const fy=cy+ch-92;c.fillStyle=OC.line;c.fillRect(72,fy,W-144,1.5);
  const qs=64;c.drawImage(A.qr,W-72-qs,fy+14,qs,qs);
  oT(c,'امسح الرمز لزيارة صفحتنا',W-72-qs-18,fy+54,{w:700,s:20,col:OC.blue});
  oT(c,'فروعنا: '+D.branches.map(b=>b.split(' - ')[0]).join(' · '),72,fy+54,{w:600,s:20,col:OC.muted,a:'left'});
}

/* ===== السعر البطل — hotel photo on top, floating price card, prices on blue ===== */
function bPrice(c,W,H,D,A){
  c.fillStyle=BR.d;c.fillRect(0,0,W,H);
  const PH=640;oCover(c,A.hotel,0,0,W,PH,{fy:.3});
  const tg=c.createLinearGradient(0,0,0,PH);tg.addColorStop(0,'rgba(3,18,107,.6)');tg.addColorStop(.3,'rgba(3,18,107,0)');tg.addColorStop(.75,'rgba(5,27,149,.15)');tg.addColorStop(1,BR.b);c.fillStyle=tg;c.fillRect(0,0,W,PH);
  const g=c.createLinearGradient(0,PH,0,H);g.addColorStop(0,BR.b);g.addColorStop(1,BR.d);c.fillStyle=g;c.fillRect(0,PH,W,H-PH);
  c.save();c.beginPath();c.rect(0,PH,W,H-PH);c.clip();bEmblem(c,A.logo,W-520,PH+60,520,'#fff',.05);c.restore();
  oLogo(c,A.logo,W-56,40,112,{col:'#fff',align:'right'});
  oT(c,D.tagTitle,56,86,{w:800,s:28,col:'#fff',a:'left'});oT(c,D.tagline,56,120,{w:500,s:20,col:'rgba(255,255,255,.9)',a:'left'});
  // floating card
  const cx=110,cw=W-220,cy=470,ch=300;
  c.save();c.shadowColor='rgba(3,18,107,.45)';c.shadowBlur=50;c.shadowOffsetY=18;c.fillStyle='#fff';oRR(c,cx,cy,cw,ch,34);c.fill();c.restore();
  oStars(c,D.stars,W/2,cy+44,11,{col:BR.b,gap:9});
  oT(c,'فندق '+D.hotel,W/2,cy+104,{w:800,s:48,col:BR.b,a:'center',max:cw-60});
  c.fillStyle=BR.tint;c.fillRect(cx+60,cy+128,cw-120,2);
  oT(c,'ابتداءً من',W/2,cy+170,{w:600,s:24,col:BR.sub,a:'center'});
  c.save();c.direction='ltr';c.textAlign='center';let fs=112;c.font=OF(800,fs);const nw=c.measureText(D.fromPrice).width;c.fillStyle=BR.b;c.fillText(D.fromPrice,W/2+34,cy+268);c.restore();
  oT(c,'دينار',W/2+34-nw/2-12,cy+262,{w:800,s:34,col:BR.b,a:'right'});
  // on blue
  oT(c,D.distance,W/2,cy+ch+50,{w:500,s:22,col:'rgba(255,255,255,.88)',a:'center'});
  const py=cy+ch+80,ph=eCols(c,D.rows,64,py,W-128,{h:136,ps:48});
  eInfo(c,[D.madLabel+': '+D.madinah.hotel,D.nightsText+' ('+D.splitText+')'],W/2,py+ph+34,{s:21,col:'rgba(255,255,255,.88)'});
  bFooter(c,W,H,A.qr,D,{h:118});
}

/* ===== القُطري — clean diagonal, hotel above, editorial list below ===== */
function rDiagonal(c,W,H,D,A){
  const yl=700,yr=520;
  c.fillStyle=BR.d;c.fillRect(0,0,W,H);
  c.save();c.beginPath();c.moveTo(0,0);c.lineTo(W,0);c.lineTo(W,yr);c.lineTo(0,yl);c.closePath();c.clip();
  oCover(c,A.hotel,0,0,W,yl,{fy:.3});const tg=c.createLinearGradient(0,0,0,240);tg.addColorStop(0,'rgba(3,18,107,.65)');tg.addColorStop(1,'rgba(3,18,107,0)');c.fillStyle=tg;c.fillRect(0,0,W,240);c.restore();
  const bg=c.createLinearGradient(0,yr,0,H);bg.addColorStop(0,'#1c3be0');bg.addColorStop(.35,BR.b);bg.addColorStop(1,BR.d);
  c.save();c.beginPath();c.moveTo(0,yl);c.lineTo(W,yr);c.lineTo(W,H);c.lineTo(0,H);c.closePath();c.fillStyle=bg;c.fill();c.clip();
  bEmblem(c,A.logo,-80,yl+40,560,'#fff',.05);c.restore();
  // thin double white seam
  c.save();c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(0,yl);c.lineTo(W,yr);c.stroke();
  c.strokeStyle='rgba(255,255,255,.4)';c.lineWidth=1.5;c.beginPath();c.moveTo(0,yl-16);c.lineTo(W,yr-16);c.stroke();c.restore();
  oLogo(c,A.logo,W-56,36,112,{col:'#fff',align:'right'});
  oT(c,D.tagTitle,56,82,{w:800,s:28,col:'#fff',a:'left'});oT(c,D.tagline,56,116,{w:500,s:20,col:'rgba(255,255,255,.9)',a:'left'});
  // title (right, below the seam)
  const rx=W-64;
  eStarsR(c,D.stars,rx,yr+62,12,{gap:10});
  oT(c,'فنـــدق',rx,yr+120,{w:500,s:34,col:'rgba(255,255,255,.85)'});
  oT(c,D.hotel,rx,yr+214,{w:800,s:100,col:'#fff',max:W-128});
  oT(c,D.distance,rx,yr+258,{w:500,s:22,col:'rgba(255,255,255,.88)',max:W-128});
  // editorial price list (two columns with leaders)
  const ly=yr+300;c.fillStyle='rgba(255,255,255,.25)';c.fillRect(64,ly,W-128,1.5);
  const n=D.rows.length,cols=n>3?2:1,per=Math.ceil(n/cols),gap=64,colW=(W-128-gap*(cols-1))/cols,rh=Math.min(70,300/per);
  D.rows.forEach((r,i)=>{const ci=Math.floor(i/per),ri=i%per,R=W-64-(colW+gap)*ci,L=R-colW,y=ly+26+ri*rh+rh/2;
    const ls=Math.min(26,rh*.42),ps=Math.min(38,rh*.56);
    oT(c,oShort(r.label),R,y+ls*.36,{w:700,s:ls,col:'rgba(255,255,255,.9)'});
    c.font=OF(800,ps);const aw=c.measureText(r.amount).width;c.font=OF(500,18);const dw=c.measureText('دينار').width;
    oT(c,'دينار',L,y+ps*.36,{w:500,s:18,col:'rgba(255,255,255,.65)',a:'left'});
    c.save();c.direction='ltr';c.textAlign='left';c.font=OF(800,ps);c.fillStyle='#fff';c.fillText(r.amount,L+dw+10,y+ps*.36);c.restore();
    c.font=OF(700,ls);const lw=c.measureText(oShort(r.label)).width;
    c.fillStyle='rgba(255,255,255,.35)';for(let dx=R-lw-16;dx>L+dw+aw+26;dx-=12){c.beginPath();c.arc(dx,y,1.8,0,Math.PI*2);c.fill();}
    if(cols>1&&ci===0&&ri===0){c.fillStyle='rgba(255,255,255,.2)';c.fillRect(L-gap/2,ly+24,1.5,per*rh);}
  });
  const iy=ly+26+per*rh+44;
  eInfo(c,[D.madLabel+': '+D.madinah.hotel,D.nightsText+' ('+D.splitText+')'],W/2,iy,{s:21,col:'rgba(255,255,255,.88)'});
  bFooter(c,W,H,A.qr,D,{h:H-iy-34>150?140:Math.max(110,H-iy-34)});
}

return {facade:tFacade,hero:tHero,compare:tCompare,season:tSeason,cover:rCover,number:rNumber,diagonal:rDiagonal,luxury:rLuxury,modern:rModern,wave:bWave,frame:bFrame,price:bPrice,split:bSplit};
})();

/* ===== Hotel offer templates (13 designs, brand colours only) ===== */
const OFFER_LIST=[['o_wave','wave','الموجة'],['o_frame','frame','الإطار الأبيض'],['o_price','price','السعر البطل'],['o_split','split','النصف'],
  ['o_facade','facade','واجهة الفندق'],['o_hero','hero','ابتداءً من'],['o_compare','compare','مقارنة البرامج'],['o_season','season','موسمي'],
  ['o_cover','cover','الغلاف'],['o_number','number','الرقم البطل'],['o_diagonal','diagonal','القُطري'],['o_luxury','luxury','المحراب'],['o_modern','modern','الحديث']];
const isOfferTpl=id=>String(id||'').startsWith('o_');
OFFER_LIST.forEach(([id,key,name])=>{
  SHARE_TEMPLATES.push({id,name,offer:true});
  const fn=(ctx,W,D,logo,measure)=>{if(measure)return 1350;OFFER[key](ctx,1080,1350,D.offer,D.offerA);return 1350;};
  SHARE_FORMATS.story.draw[id]=fn;SHARE_FORMATS.fb.draw[id]=fn;
});
const OFFER_SET_KEY='olympi_offer_settings_v1',OFFER_HOTEL_KEY='olympi_offer_hotel:';
const OFFER_DEFAULTS={tagline:'خطوة منك والباقي علينا',years:'18',season:'عرض خاص',includes:'التأشيرة، التذاكر، المواصلات، المزارات',
  branches:'طرابلس - شارع النصر\nالزاوية - شارع جمال عبد الناصر مقابل المستشفى',fbUrl:'https://www.facebook.com/'};
const offerMem={set:null,hotels:{}};
function offerSettings(){let v=offerMem.set||{};try{const raw=localStorage.getItem(OFFER_SET_KEY);if(raw)v=JSON.parse(raw)||{};}catch(e){}return {...OFFER_DEFAULTS,...v};}
function offerSaveSettings(p){const v={...offerSettings(),...p};offerMem.set=v;try{localStorage.setItem(OFFER_SET_KEY,JSON.stringify(v));}catch(e){}}
function offerHotel(name){name=String(name||'').trim();if(!name)return {};let v=offerMem.hotels[name];try{const raw=localStorage.getItem(OFFER_HOTEL_KEY+name);if(raw)v=JSON.parse(raw);}catch(e){}return v||{};}
function offerSaveHotel(name,p){name=String(name||'').trim();if(!name)return false;const v={...offerHotel(name),...p};Object.keys(v).forEach(k=>{if(v[k]==null||v[k]==='')delete v[k];});
  offerMem.hotels[name]=v;try{localStorage.setItem(OFFER_HOTEL_KEY+name,JSON.stringify(v));return true;}catch(e){return false;}}
function offerDist(v,kind){v=String(v||'').trim();if(!v)return kind==='mk'?'بالقرب من ساحة الحرم المكي':'';
  if(/^\d+([.,]\d+)?$/.test(v))return kind==='mk'?`على بعد ${v}م تقريباً من ساحة الحرم المكي`:`${v} متر من ساحة الحرم`;return v;}
const offerList=s=>String(s||'').split(/[،,\n]/).map(t=>t.trim()).filter(Boolean);
function offerMakkahOnly(view){
  try{const input=proQuickInput(),mk=Number(input.makkahNights)||0,md=Number(input.madinahNights)||0;if(!md||!view?.rooms)return null;
    const res=proCalcProgram({...input,makkahNights:mk+md,madinahNights:0,includeMadinah:false,totalNights:mk+md},view.rooms,[]);
    return (res.results||[]).map(r=>({label:r.label,amount:ne(r.sell),value:Number(r.sell)||0}));}catch(e){return null;}
}
function offerData(data,view){
  const st=data.stay,S=offerSettings(),mkName=(st.makkah.hotel||'').trim(),mdName=(st.madinah?.hotel||'').trim();
  const H=offerHotel(mkName),M=offerHotel('md:'+mdName),rows=data.rows.map(r=>({label:r.label,amount:r.amount,value:r.value}));
  let min=null;rows.forEach(r=>{if(r.value>0&&(!min||r.value<min.value))min=r;});
  const mk=st.makkah.nights,md=st.madinah?st.madinah.nights:0;
  return {hotel:mkName.replace(/^فندق\s+/,'')||'مكة المكرمة',stars:Math.min(5,Math.max(1,Number(H.stars||3))),distance:offerDist(H.dist,'mk'),
    rows,rowsMakkahOnly:st.madinah?offerMakkahOnly(view):null,
    madinah:st.madinah?{hotel:mdName.replace(/^فندق\s+/,'')||'—',distance:offerDist(M.dist,'md')}:{hotel:'مكة المكرمة فقط',distance:''},
    madLabel:st.madinah?'فندق المدينة':'البرنامج',nightsText:arNights(mk+md),makkahOnlyText:arNights(mk+md),
    splitText:st.madinah?`${mk} مكة · ${md} المدينة`:`${arNights(mk)} في مكة`,
    fromPrice:min?min.amount:(rows[0]?.amount||''),season:S.season||'عرض خاص',includes:offerList(S.includes),
    branches:String(S.branches||'').split('\n').map(t=>t.trim()).filter(Boolean),
    tagTitle:'مع الأولمبي',tagline:S.tagline||'',yearsText:S.years?S.years+' عاماً من الخبرة':'خبرة في خدمة ضيوف الرحمن'};
}
const offerImgCache={};
function offerImg(src){if(!src)return Promise.resolve(null);if(!offerImgCache[src])offerImgCache[src]=new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src;});return offerImgCache[src];}
function offerQR(url){
  url=String(url||'').trim()||'https://www.facebook.com/';const key='qr:'+url;if(offerImgCache[key])return offerImgCache[key];
  let cv=null;try{const q=OLY_QR(0,'M');q.addData(url);q.make();const n=q.getModuleCount(),m=2,s=8;cv=document.createElement('canvas');cv.width=cv.height=(n+m*2)*s;
    const k=cv.getContext('2d');k.fillStyle='#fff';k.fillRect(0,0,cv.width,cv.height);k.fillStyle='#051b95';
    for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(q.isDark(r,c))k.fillRect((c+m)*s,(r+m)*s,s,s);}catch(e){}
  return offerImgCache[key]=Promise.resolve(cv);
}
async function offerAssets(data,logo){
  const H=offerHotel((data.stay.makkah.hotel||'').trim()),S=offerSettings();
  const b=id=>(SHARE_BUILTIN_PHOTOS.find(p=>p.id===id)||SHARE_BUILTIN_PHOTOS[0]).src;
  const [hotel,backdrop,kn,kg,callig,qr]=await Promise.all([offerImg(H.photo||b('hakam')),offerImg(b('hakam')),offerImg(b('cehar')),offerImg(b('belal')),proShareCallig(),offerQR(S.fbUrl)]);
  return {logo,qr,hotel,hotelTall:hotel,hotelWide:hotel,backdrop,kaabaNight:kn,kaabaGold:kg,callig};
}
/* ---- editable offer data inside the share dialog ---- */
function offerPanel(){
  const st=shareStay(),mk=(st.makkah.hotel||'').trim(),md=(st.madinah?.hotel||'').trim(),H=offerHotel(mk),M=offerHotel('md:'+md),S=offerSettings();
  const esc=v=>c(String(v??'')),dis=mk?'':' disabled';
  const stars=[1,2,3,4,5].map(n=>`<option value="${n}"${Number(H.stars||3)===n?' selected':''}>${n} نجوم</option>`).join('');
  return `<div class="offer-panel" id="offer-panel"${isOfferTpl(proShare.tpl)?'':' hidden'}>
  <div class="offer-head"><b>بيانات إعلان الفندق</b><small>${mk?'تُحفظ لفندق «'+esc(mk)+'» على هذا الجهاز وتظهر في كل قوالب إعلانات الفنادق.':'أدخل اسم فندق مكة في التسعيرة أولاً لحفظ صورته وبياناته.'}</small></div>
  <div class="offer-grid">
    <div class="offer-photo"><div class="offer-thumb" id="offer-thumb">${H.photo?`<img src="${H.photo}" alt="">`:'<span>لا توجد صورة للفندق<br>تُستخدم صورة الحرم مؤقتاً</span>'}</div>
      <div class="offer-photo-actions"><label class="btn small primary${mk?'':' is-disabled'}">${H.photo?'تغيير صورة الفندق':'رفع صورة الفندق'}<input type="file" accept="image/*" data-offer-photo hidden${dis}></label>${H.photo?'<button type="button" class="btn small danger" data-offer-photo-remove="1">حذف</button>':''}</div></div>
    <label>تصنيف الفندق<select data-offer-hotel="stars"${dis}>${stars}</select></label>
    <label>بُعد فندق مكة عن الحرم<input data-offer-hotel="dist" value="${esc(H.dist)}" placeholder="مثال: 1000 أو «مقابل الحرم»"${dis}></label>
    ${st.madinah?`<label>بُعد فندق المدينة عن الحرم<input data-offer-md="dist" value="${esc(M.dist)}" placeholder="مثال: 250"${md?'':' disabled'}></label>`:''}
    <label>عنوان الموسم <small>(قالب «موسمي»)</small><input data-offer-set="season" value="${esc(S.season)}" placeholder="مثال: النصف الأول · رمضان"></label>
  </div>
  <details class="offer-fixed"><summary>بيانات ثابتة: الفروع، صفحة فيسبوك، ما تشمله الأسعار</summary><div class="offer-grid">
    <label class="wide">الأسعار تشمل <small>(افصل بينها بفاصلة)</small><input data-offer-set="includes" value="${esc(S.includes)}"></label>
    <label class="wide">الفروع <small>(كل فرع في سطر)</small><textarea rows="3" data-offer-set="branches">${esc(S.branches)}</textarea></label>
    <label class="wide">رابط صفحة فيسبوك <small>(يُولَّد منه رمز QR)</small><input dir="ltr" data-offer-set="fbUrl" value="${esc(S.fbUrl)}"></label>
    <label>الشعار النصي<input data-offer-set="tagline" value="${esc(S.tagline)}"></label>
    <label>سنوات الخبرة<input type="number" min="0" data-offer-set="years" value="${esc(S.years)}"></label>
  </div></details></div>`;
}
async function offerRerender(){
  if(!proShare.view)return;const token=proShare.fillToken=(proShare.fillToken||0)+1;
  OFFER_LIST.forEach(([id])=>{delete proShare.renders[id];});
  if(isOfferTpl(proShare.tpl))await proShareSelect(proShare.tpl);
  proShareFill(proShare.view,proShare.fmt,token);
}
let offerTimer=null;
document.addEventListener('input',event=>{
  const el=event.target.closest?.('[data-offer-hotel],[data-offer-md],[data-offer-set]');if(!el)return;
  const st=shareStay();
  if(el.dataset.offerHotel)offerSaveHotel((st.makkah.hotel||'').trim(),{[el.dataset.offerHotel]:el.value});
  else if(el.dataset.offerMd)offerSaveHotel('md:'+(st.madinah?.hotel||'').trim(),{[el.dataset.offerMd]:el.value});
  else offerSaveSettings({[el.dataset.offerSet]:el.value});
  clearTimeout(offerTimer);offerTimer=setTimeout(offerRerender,350);
},true);
document.addEventListener('change',async event=>{
  const el=event.target.closest?.('[data-offer-hotel]');
  if(el&&el.tagName==='SELECT'){offerSaveHotel((shareStay().makkah.hotel||'').trim(),{[el.dataset.offerHotel]:el.value});offerRerender();return;}
  const input=event.target.closest?.('[data-offer-photo]');if(!input)return;
  const file=input.files&&input.files[0];if(!file)return;const name=(shareStay().makkah.hotel||'').trim();
  try{const data=await shareReadPhoto(file);if(!offerSaveHotel(name,{photo:data}))q('ذاكرة الجهاز ممتلئة؛ ستُستخدم الصورة في هذه الجلسة فقط.');
    const th=d('#offer-thumb');if(th)th.innerHTML=`<img src="${data}" alt="">`;await offerRerender();}
  catch(e){q('تعذّر قراءة الصورة. جرّب صورة بصيغة JPG أو PNG.');}
},true);
document.addEventListener('click',async event=>{
  if(!event.target.closest?.('[data-offer-photo-remove]'))return;event.preventDefault();event.stopPropagation();
  const name=(shareStay().makkah.hotel||'').trim(),v=offerHotel(name);delete v.photo;offerMem.hotels[name]=v;
  try{localStorage.setItem(OFFER_HOTEL_KEY+name,JSON.stringify(v));}catch(e){}
  const th=d('#offer-thumb');if(th)th.innerHTML='<span>لا توجد صورة للفندق<br>تُستخدم صورة الحرم مؤقتاً</span>';
  event.target.closest('[data-offer-photo-remove]').remove();await offerRerender();
},true);
/* thumbnails are rendered in the background so the dialog opens immediately */
async function proShareFill(view,fmt,token){
  token=token??(proShare.fillToken=(proShare.fillToken||0)+1);
  for(const t of SHARE_TEMPLATES){
    if(proShare.fillToken!==token||proShare.view!==view||proShare.fmt!==fmt)return;
    if(!proShare.renders[t.id]){await new Promise(r=>setTimeout(r,0));
      try{const r=await shareRender(view,t.id,fmt);if(!r)return;proShare.renders[t.id]=r;}catch(e){continue;}
      if(proShare.fillToken!==token)return;}
    const im=d('[data-share-tpl="'+t.id+'"] img');if(im&&im.src!==proShare.renders[t.id].url){im.src=proShare.renders[t.id].url;im.closest('.share-tpl')?.classList.remove('is-loading');}
  }
}

let shareFontsPromise;
function proShareFonts(){return shareFontsPromise ||= Promise.all(['400','500','700','800'].map(w=>document.fonts.load(w+' 30px Tajawal','عرض أسعار 123'))).catch(()=>{});}
const LABBAIK_SRC='assets/resource-a73f0242127f.png';
let labbaikImg=null;
function proShareCallig(){return offerImg(LABBAIK_SRC);}
/* draws the "لبيك اللهم لبيك" calligraphy (white artwork) with a gold or white finish */
function drawCallig(ctx,img,x,y,h,{finish='gold',glow=true}={}){
  if(!img)return 0;const w=img.width/img.height*h;
  const c=document.createElement('canvas');c.width=Math.ceil(w);c.height=Math.ceil(h);const k=c.getContext('2d');
  k.drawImage(img,0,0,w,h);k.globalCompositeOperation='source-in';
  if(finish==='gold'||finish==='pearl'){const g=k.createLinearGradient(0,0,w,h);const colors=finish==='gold'?['#fff1bd','#dfb44e','#a87420','#f8dfa0']:['#ffffff','#e6ecff','#c3cffb','#ffffff'];[0,.4,.75,1].forEach((stop,i)=>g.addColorStop(stop,colors[i]));k.fillStyle=g;}
  else k.fillStyle=finish==='white'?'#ffffff':finish;
  k.fillRect(0,0,w,h);
  ctx.save();if(glow){ctx.shadowColor='rgba(0,0,0,.55)';ctx.shadowBlur=22;ctx.shadowOffsetY=4;}
  ctx.drawImage(c,x,y);ctx.restore();return w;
}
/* Independent, per-template calligraphy preferences shared by both export sizes. */
const SHARE_CALLIG_COLORS=[['auto','تلقائي','#dce4fa'],['gold','ذهبي','#d6ab45'],['brand','لون الشعار','#051b95'],['white','أبيض','#ffffff'],['silver','فضي','#aebbd0']];
function shareCalligFinish(value,fallback){return value==='gold'?'gold':value==='brand'?SC.blue:value==='white'?'white':value==='silver'?'#b9c5d9':fallback;}
const SHARE_CALLIG_KEY='olympi_share_calligraphy_v1';
let shareCalligMemory={};
function shareCalligOptions(tpl){
  let saved=shareCalligMemory;
  try{saved=JSON.parse(localStorage.getItem(SHARE_CALLIG_KEY)||'{}')||{};}catch(e){}
  const item=shareCalligMemory[tpl]||saved[tpl]||{};
  const num=(k,d)=>Number.isFinite(Number(item[k]))&&item[k]!==null&&item[k]!==''?Number(item[k]):d;
  const color=k=>SHARE_CALLIG_COLORS.some(row=>row[0]===item[k])?item[k]:'auto';
  return {hColor:color('hColor'),wColor:color('wColor'),header:typeof item.header==='boolean'?item.header:tpl==='kaaba',watermark:item.watermark===true,
    hSize:num('hSize',100),hAlpha:num('hAlpha',100),hX:num('hX',0),hY:num('hY',0),
    wSize:num('wSize',100),wAlpha:num('wAlpha',tpl==='royal'?13:9),wX:num('wX',0),wY:num('wY',0)};
}
function shareCalligSet(tpl,option,value){
  let saved={};try{saved=JSON.parse(localStorage.getItem(SHARE_CALLIG_KEY)||'{}')||{};}catch(e){}
  shareCalligMemory[tpl]={...shareCalligOptions(tpl),[option]:option.endsWith('Color')?(SHARE_CALLIG_COLORS.some(row=>row[0]===value)?value:'auto'):typeof value==='boolean'?value:value===null?null:Number(value)};
  if(value===null)delete shareCalligMemory[tpl][option];
  try{localStorage.setItem(SHARE_CALLIG_KEY,JSON.stringify({...saved,...shareCalligMemory}));}catch(e){}
}
function shareCalligControls(tpl){
  const o=shareCalligOptions(tpl);
  const range=(p,key,label,min,max,step,val,unit,ends)=>`<div class="callig-range"><span class="callig-range-label">${label} <output data-callig-out="${p}${key}">${val}${unit}</output></span><input class="callig-number" type="number" min="${min}" max="${max}" step="${step}" value="${val}" data-callig-number="${p}${key}" aria-label="${label}">${ends?`<small>${ends[0]}</small>`:''}<input type="range" dir="ltr" min="${min}" max="${max}" step="${step}" value="${val}" aria-label="${label}" data-callig-range="${p}${key}" data-unit="${unit}">${ends?`<small>${ends[1]}</small>`:''}</div>`;
  const tools=(p,on)=>`<div class="callig-tools"${on?'':' hidden'} data-callig-tools="${p}">
    <div class="callig-color-picker"><b>لون المخطوطة</b><div role="group" aria-label="لون المخطوطة">${SHARE_CALLIG_COLORS.map(([value,label,color])=>`<button type="button" data-callig-color="${p}Color" data-color="${value}" aria-pressed="${o[p+'Color']===value}"><i style="background:${color}" aria-hidden="true"></i><span>${label}</span></button>`).join('')}</div></div>
    ${range(p,'Size','الحجم',20,300,1,o[p+'Size'],'%')}
    ${range(p,'Alpha','الوضوح — 0% شفاف، 100% ظاهر',0,100,1,o[p+'Alpha'],'%')}
    ${range(p,'X','المكان أفقياً',-50,50,1,o[p+'X'],'',['يسار','يمين'])}
    ${range(p,'Y','المكان عمودياً',-50,50,1,o[p+'Y'],'',['أعلى','أسفل'])}
    <div class="callig-nudge" role="group" aria-label="تحريك دقيق"><button type="button" data-callig-nudge="${p}Y:-2" title="أعلى">▲</button><button type="button" data-callig-nudge="${p}X:2" title="يمين">▶</button><button type="button" data-callig-nudge="${p}X:-2" title="يسار">◀</button><button type="button" data-callig-nudge="${p}Y:2" title="أسفل">▼</button><button type="button" class="callig-reset" data-callig-reset="${p}">إعادة الضبط</button></div>
  </div>`;
  return `<fieldset class="share-callig"><legend>مخطوطة لبيك اللهم لبيك</legend><div class="share-callig-options">
    <div class="callig-mode"><label><input type="checkbox" data-share-callig="header" ${o.header?'checked':''}><span><b>إظهار المخطوطة مثل قالب الكعبة</b><small>المخطوطة بلون الهوية مع حرية تعديل الحجم والموقع</small></span></label>${tools('h',o.header)}</div>
    <div class="callig-mode"><label><input type="checkbox" data-share-callig="watermark" ${o.watermark?'checked':''}><span><b>علامة مائية كبيرة في منتصف الورقة</b><small>شفافية هادئة تحافظ على وضوح البيانات والأسعار</small></span></label>${tools('w',o.watermark)}</div>
  </div><p>يمكن تفعيل الخيارين معًا، ولكل منهما حجمه وظهوره ومكانه. يُحفظ اختيارك لكل قالب.</p></fieldset>`;
}
function calligAdj(o,x,y,w,h,W,H,p='h'){
  o=o||{};const s=(o[p+'Size']??100)/100,nh=h*s,nw=w*s;
  return {x:x+(w-nw)/2+(o[p+'X']??0)/100*W,y:y+(h-nh)/2+(o[p+'Y']??0)/100*H,w:nw,h:nh,a:Math.max(0,Math.min(1,(o[p+'Alpha']??100)/100))};
}
function drawShareCalligraphy(ctx,W,H,img,tpl,fmt,options){
  if(!img)return;
  const ratio=img.width/img.height;
  if(options.watermark){
    const h0=Math.min(H*.66,W*.72/ratio),w0=ratio*h0,b=calligAdj(options,(W-w0)/2,(H-h0)/2,w0,h0,W,H,'w');
    ctx.save();
    // Multiply keeps dark lettering crisp; screen keeps white lettering crisp on navy.
    ctx.globalCompositeOperation=options.wColor==='auto'?(tpl==='royal'?'screen':'multiply'):'source-over';
    ctx.globalAlpha=b.a;
    drawCallig(ctx,img,b.x,b.y,b.h,{finish:shareCalligFinish(options.wColor,tpl==='royal'?'white':SC.blue),glow:false});
    ctx.restore();
  }
  if(options.header&&tpl!=='kaaba'){
    const boxes={royal:{right:64,y:44,h:fmt==='story'?235:200},clean:{center:W/2,y:58,h:175},ticket:{center:W/2,y:78,h:150},arch:{right:185,y:155,h:185},luxe:{right:115,y:105,h:220}};
    const box=boxes[tpl]||{center:W/2,y:Math.round(H*.2),h:Math.round(H*.24)};
    const h=box.h,w=ratio*h,x=box.center!=null?box.center-w/2:W-box.right-w,b=calligAdj(options,x,box.y,w,h,W,H,'h');
    const light=['clean','ticket','luxe','o_frame','o_hero','o_modern'].includes(tpl);
    ctx.save();ctx.globalAlpha=b.a;drawCallig(ctx,img,b.x,b.y,b.h,{finish:shareCalligFinish(options.hColor,light?SC.blue:'pearl'),glow:!light});ctx.restore();
  }
}
document.addEventListener('click',event=>{const b=event.target.closest?.('[data-callig-color]');if(!b)return;event.preventDefault();shareCalligSet(proShare.tpl,b.dataset.calligColor,b.dataset.color);shareCalligSync(proShare.tpl);shareCalligQueue();},true);
const shareCalligRevisions={};
let shareCalligTimer=null;
function shareCalligSync(tpl){const o=shareCalligOptions(tpl);
  x('[data-callig-color]').forEach(b=>b.setAttribute('aria-pressed',String(o[b.dataset.calligColor]===b.dataset.color)));
  x('[data-callig-number]').forEach(r=>{if(r!==document.activeElement)r.value=o[r.dataset.calligNumber];});
  x('[data-callig-range]').forEach(r=>{const k=r.dataset.calligRange;r.value=o[k];const out=d('[data-callig-out="'+k+'"]');if(out)out.textContent=o[k]+(r.dataset.unit||'');});
  ['h','w'].forEach(p=>{const t=d('[data-callig-tools="'+p+'"]');if(t)t.hidden=!o[p==='h'?'header':'watermark'];});}
function shareCalligQueue(){clearTimeout(shareCalligTimer);shareCalligTimer=setTimeout(proShareRefreshCalligraphy,110);}
document.addEventListener('input',event=>{
  const r=event.target.closest?.('[data-callig-range],[data-callig-number]');if(!r)return;
  const key=r.dataset.calligRange||r.dataset.calligNumber;
  if(r.value===''||!Number.isFinite(Number(r.value)))return;
  if(r.dataset.calligNumber&&(Number(r.value)<Number(r.min)||Number(r.value)>Number(r.max)))return;
  const value=Math.max(Number(r.min),Math.min(Number(r.max),Number(r.value)));
  shareCalligSet(proShare.tpl,key,value);shareCalligSync(proShare.tpl);
  shareCalligQueue();
},true);
document.addEventListener('change',event=>{
  const r=event.target.closest?.('[data-callig-number]');if(!r)return;
  const key=r.dataset.calligNumber,old=shareCalligOptions(proShare.tpl)[key];
  const value=r.value===''?old:Math.max(Number(r.min),Math.min(Number(r.max),Number(r.value)));
  r.value=value;shareCalligSet(proShare.tpl,key,value);shareCalligSync(proShare.tpl);shareCalligQueue();
},true);
document.addEventListener('click',event=>{
  const n=event.target.closest?.('[data-callig-nudge]'),rs=event.target.closest?.('[data-callig-reset]');if(!n&&!rs)return;
  event.preventDefault();event.stopPropagation();const tpl=proShare.tpl;
  if(n){const [k,step]=n.dataset.calligNudge.split(':'),o=shareCalligOptions(tpl);shareCalligSet(tpl,k,Math.max(-50,Math.min(50,o[k]+Number(step))));}
  else{const p=rs.dataset.calligReset;['Size','Alpha','X','Y','Color'].forEach(k=>shareCalligSet(tpl,p+k,null));}
  shareCalligSync(tpl);shareCalligQueue();
},true);
async function proShareRefreshCalligraphy(){
  const tpl=proShare.tpl,fmt=proShare.fmt,view=proShare.view;
  proShare.fillToken=(proShare.fillToken||0)+1;proShare.pending={};
  const revision=shareCalligRevisions[tpl]=(shareCalligRevisions[tpl]||0)+1;
  if(!view)return;
  try{
    const render=await proDrawShareCard(view,tpl,fmt);
    if(revision!==shareCalligRevisions[tpl]||view!==proShare.view||fmt!==proShare.fmt)return;
    proShare.renders[tpl]=render;
    const thumb=d('[data-share-tpl="'+tpl+'"] img');if(thumb)thumb.src=render.url;
    if(proShare.tpl===tpl)await proShareSelect(tpl);
    proShareFill(view,fmt,proShare.fillToken);
  }catch(e){q('تعذّر تحديث المخطوطة. حاول مرة أخرى.');}
}
document.addEventListener('change',event=>{
  const input=event.target.closest?.('[data-share-callig]');if(!input)return;
  shareCalligSet(proShare.tpl,input.dataset.shareCallig,input.checked);
  const tools=d('[data-callig-tools="'+(input.dataset.shareCallig==='header'?'h':'w')+'"]');if(tools)tools.hidden=!input.checked;
  proShareRefreshCalligraphy();
},true);
function proShareLogo(){return offerImg(Ke);}
/* real photo for the Kaaba template: uploaded once by the user, kept on this device */
const SHARE_PHOTO_KEY='olympi_share_photo',SHARE_FOCUS_KEY='olympi_share_photo_focus';
let sharePhotoCache={src:null,img:null},sharePhotoMem=null;
/* built-in photos (Pexels licence: free for commercial use, no attribution required) */
const SHARE_BUILTIN_PHOTOS=[
  {id:'hakam',name:'الكعبة والساعة',focus:86,src:'assets/resource-5d672ecc7d01.jpg',thumb:'assets/resource-7ffe647cea3a.jpg'},
  {id:'cehar',name:'الطواف ليلاً',focus:50,src:'assets/resource-4fab153f7ba4.jpg',thumb:'assets/resource-5ddd51dbef4e.jpg'},
  {id:'belal',name:'الكسوة الذهبية',focus:100,src:'assets/resource-1b397d3413c1.jpg',thumb:'assets/resource-b586cd1561c4.jpg'},
  {id:'hajara',name:'نافذة الحرم',focus:62,src:'assets/resource-4f445a49be5e.jpg',thumb:'assets/resource-cb59ac59d50a.jpg'}
];
const SHARE_PICK_KEY='olympi_share_photo_pick';
function sharePhotoPick(){try{const v=localStorage.getItem(SHARE_PICK_KEY);if(v==='custom'&&!shareCustomSrc())return SHARE_BUILTIN_PHOTOS[0].id;return v||SHARE_BUILTIN_PHOTOS[0].id;}catch(e){return sharePhotoMem?'custom':SHARE_BUILTIN_PHOTOS[0].id;}}
function sharePhotoSetPick(v){try{localStorage.setItem(SHARE_PICK_KEY,v);}catch(e){}}
function shareCustomSrc(){try{return localStorage.getItem(SHARE_PHOTO_KEY)||sharePhotoMem;}catch(e){return sharePhotoMem;}}
function sharePhotoSrc(){const pick=sharePhotoPick();if(pick==='none')return null;if(pick==='custom')return shareCustomSrc();return (SHARE_BUILTIN_PHOTOS.find(p=>p.id===pick)||SHARE_BUILTIN_PHOTOS[0]).src;}
function sharePhotoFocus(){const pick=sharePhotoPick(),def=(SHARE_BUILTIN_PHOTOS.find(p=>p.id===pick)||{}).focus??45;
  try{const raw=localStorage.getItem(SHARE_FOCUS_KEY+'_'+pick);const v=Number(raw);return raw!==null&&Number.isFinite(v)?v:def;}catch(e){return def;}}
function sharePhotoSetFocus(v){try{localStorage.setItem(SHARE_FOCUS_KEY+'_'+sharePhotoPick(),String(v));}catch(e){}}
function sharePhoto(){
  const src=sharePhotoSrc();if(!src)return Promise.resolve(null);
  if(sharePhotoCache.src===src&&sharePhotoCache.img)return Promise.resolve(sharePhotoCache.img);
  return offerImg(src).then(img=>{sharePhotoCache={src,img};return img;});
}
function shareReadPhoto(file){
  return new Promise((res,rej)=>{
    if(!file||!/^image\//.test(file.type)){rej(new Error('type'));return;}
    const url=URL.createObjectURL(file),img=new Image();
    img.onload=()=>{const max=1600,k=Math.min(1,max/Math.max(img.width,img.height));
      const c=document.createElement('canvas');c.width=Math.round(img.width*k);c.height=Math.round(img.height*k);
      c.getContext('2d').drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(url);res(c.toDataURL('image/jpeg',.86));};
    img.onerror=()=>{URL.revokeObjectURL(url);rej(new Error('load'));};img.src=url;
  });
}
function shareTripCanvas(canvas,tripName,tpl,fmt){
  if(!tripName)return canvas;
  tripName=tripName.replace(/[0-9٠-٩]+(?:[-/][0-9٠-٩]+){1,2}/g,value=>'\u2066'+value+'\u2069');
  const W=canvas.width,H=canvas.height;
  const light=['clean','ticket','luxe','o_frame','o_hero','o_modern'].includes(tpl);
  const bg=light?'#f7f8fc':'#03126b',ink=light?SC.blue:'#ffffff',accent=light?'#c6d0f0':'#a7baf1';
  const out=document.createElement('canvas');out.width=W;out.height=fmt==='fb'?H:H+108;
  const ctx=out.getContext('2d');ctx.imageSmoothingQuality='high';ctx.fillStyle=bg;ctx.fillRect(0,0,W,out.height);
  const available=out.height-108,scale=Math.min(1,available/H),width=W*scale,height=H*scale;
  ctx.drawImage(canvas,(W-width)/2,108,width,height);
  ctx.fillStyle=accent;ctx.fillRect(56,32,5,44);ctx.fillRect(W-61,32,5,44);
  ctx.direction='rtl';ctx.textAlign='center';ctx.textBaseline='middle';
  let size=42;ctx.font='800 '+size+'px Tajawal';while(size>22&&ctx.measureText(tripName).width>W-180){size--;ctx.font='800 '+size+'px Tajawal';}
  ctx.fillStyle=ink;ctx.fillText(tripName,W/2,53,W-180);
  ctx.fillStyle=light?'#e0e5f2':'#33468d';ctx.fillRect(56,96,W-112,1);
  return out;
}
async function proDrawShareCard(view,tpl='royal',fmt='story'){
  await proShareFonts();
  const F=SHARE_FORMATS[fmt]||SHARE_FORMATS.story,logo=await proShareLogo(),data=shareData(view),draw=F.draw[tpl]||F.draw.royal,W=F.W;
  const calligOptions=shareCalligOptions(tpl),callig=await proShareCallig();
  data.callig=calligOptions.header?callig:null;data.calligHeader=calligOptions.header;data.calligOpts=calligOptions;data.photo=await sharePhoto();data.photoFocus=sharePhotoFocus()/100;
  if(isOfferTpl(tpl)){data.offer=offerData(data,view);data.offerA=await offerAssets(data,logo);}
  const probe=document.createElement('canvas').getContext('2d');
  const H=Math.ceil(draw(probe,W,data,logo,true));
  const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
  const ctx=canvas.getContext('2d');ctx.imageSmoothingQuality='high';
  draw(ctx,W,data,logo,false);
  drawShareCalligraphy(ctx,W,H,callig,tpl,fmt,calligOptions);
  const output=shareTripCanvas(canvas,data.tripName,tpl,fmt);
  return new Promise((resolve,reject)=>output.toBlob(blob=>blob?resolve({blob,url:URL.createObjectURL(blob)}):reject(new Error('PNG encoding failed')),'image/png'));
}
const SHARE_ICON_WA='<svg class="share-social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#25D366" d="M12 1a10.8 10.8 0 0 0-9.35 16.2L1 23l5.96-1.56A10.9 10.9 0 1 0 12 1Z"/><path fill="#fff" d="M17.6 14.3c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.95 1.19-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.89-.8-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52s1.08 2.94 1.23 3.14c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.8-.73 2.05-1.44.25-.71.25-1.32.17-1.44-.07-.13-.27-.2-.57-.36Z"/></svg>';
const SHARE_ICON_FB='<svg class="share-social-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#1877F2"/><path fill="#fff" d="M13.65 23v-8.4h2.83l.42-3.28h-3.25V9.23c0-.95.27-1.6 1.63-1.6h1.74V4.7a23 23 0 0 0-2.53-.13c-2.5 0-4.22 1.53-4.22 4.34v2.41H7.43v3.28h2.84V23Z"/></svg>';
const proShare={fmt:'story',tpl:'royal',renders:{},pending:{}};
function shareRender(view,tpl,fmt){
 const token=proShare.fillToken,pending=proShare.pending;
 return pending[tpl] ||= proDrawShareCard(view,tpl,fmt).then(r=>{if(token!==proShare.fillToken){URL.revokeObjectURL(r.url);return null;}return r;}).finally(()=>{delete pending[tpl];});
}
async function proShareSelect(tpl){
  const token=proShare.fillToken;proShare.tpl=tpl;
  const status=d('.share-preview-status');if(status)status.innerHTML='<i aria-hidden="true"></i><b>جارٍ تجهيز المعاينة</b><small>ستظهر البطاقة هنا فور اكتمالها</small>';
  const box=d('#share-preview');if(box){box.classList.add('is-loading');box.setAttribute('aria-busy','true');}
  const download=d('#share-card-download');if(download){download.removeAttribute('href');download.setAttribute('aria-disabled','true');}
  x('[data-share-send],[data-share-fb-open],[data-share-wa-open]').forEach(b=>b.disabled=true);
  if(!proShare.renders[tpl]&&proShare.view){try{const r=await shareRender(proShare.view,tpl,proShare.fmt);if(!r||token!==proShare.fillToken)return;proShare.renders[tpl]=r;}catch(e){if(token===proShare.fillToken&&proShare.tpl===tpl){const status=d('.share-preview-status');if(status)status.innerHTML='<b>تعذّر تجهيز المعاينة</b><button type="button" class="btn" data-share-retry>إعادة المحاولة</button>';q('تعذّر تجهيز المعاينة. حاول مرة أخرى.');}return;}
    const th=d('[data-share-tpl="'+tpl+'"] img');if(th){th.src=proShare.renders[tpl].url;th.closest('.share-tpl')?.classList.remove('is-loading');}}
  const r=proShare.renders[tpl];if(!r||token!==proShare.fillToken||proShare.tpl!==tpl)return;
  proShare.tpl=tpl;shareSetTplFor(proShare.fmt,tpl);
  const img=d('#share-card-img'),link=d('#share-card-download');
  if(img){const preview=d('#share-preview');if(preview){preview.classList.add('is-loading');preview.setAttribute('aria-busy','true');}img.onload=()=>{if(preview){preview.classList.remove('is-loading');preview.setAttribute('aria-busy','false');}img.style.minHeight='';};img.src=r.url;if(img.complete&&img.naturalWidth)img.onload();}if(link){link.href=r.url;link.removeAttribute('aria-disabled');}
  x('[data-share-tpl]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.shareTpl===tpl)));
  const title=d('#share-selected-name');if(title)title.textContent=SHARE_TEMPLATES.find(t=>t.id===tpl)?.name||'';
  const empty=d('#share-details-empty');if(empty)empty.hidden=tpl==='kaaba'||isOfferTpl(tpl);
  const pp=d('#share-photo-panel');if(pp)pp.hidden=tpl!=='kaaba';
  const op=d('#offer-panel');if(op)op.hidden=!isOfferTpl(tpl);
  x('[data-share-send],[data-share-fb-open],[data-share-wa-open]').forEach(b=>b.disabled=false);
  const options=shareCalligOptions(tpl);x('[data-share-callig]').forEach(input=>{input.checked=options[input.dataset.shareCallig];});shareCalligSync(tpl);
}
function sharePhotoPanelMarkup(){
  const pick=sharePhotoPick(),custom=shareCustomSrc();
  const tiles=[...SHARE_BUILTIN_PHOTOS.map(p=>`<button type="button" class="share-photo-tile" data-share-photo-pick="${p.id}" aria-pressed="${pick===p.id}"><img src="${p.thumb}" alt=""><span>${p.name}</span></button>`),
    custom?`<button type="button" class="share-photo-tile" data-share-photo-pick="custom" aria-pressed="${pick==='custom'}"><img src="${custom}" alt=""><span>صورتي</span></button>`:'',
    `<button type="button" class="share-photo-tile is-plain" data-share-photo-pick="none" aria-pressed="${pick==='none'}"><i aria-hidden="true">✦</i><span>رسم بدون صورة</span></button>`,
    `<label class="share-photo-tile is-upload"><i aria-hidden="true">+</i><span>${custom?'تغيير صورتي':'رفع صورة'}</span><input type="file" accept="image/*" data-share-photo hidden></label>`].join('');
  return true?`<div class="share-photo" id="share-photo-panel"${proShare.tpl==='kaaba'?'':' hidden'}><div class="share-photo-text"><b>صورة نموذج «الكعبة»</b><small>اختر إحدى الصور الجاهزة أو ارفع صورتك. يُحفظ اختيارك على هذا الجهاز.</small></div><div class="share-photo-grid">${tiles}</div>${pick!=='none'?`<label class="share-photo-focus">موضع الصورة<input type="range" min="0" max="100" step="1" value="${sharePhotoFocus()}" data-share-photo-focus></label>`:''}${pick==='custom'?'<button type="button" class="btn small danger share-photo-remove" data-share-photo-remove="1">حذف صورتي</button>':''}</div>`:'';
}
async function proShareOpen(fmt){
  let view=null;
  try{view=proQuickCompute();}catch(e){q('أكمل المدخلات أولاً.');return;}
  const F=SHARE_FORMATS[fmt];Object.values(proShare.renders).forEach(r=>{if(r?.url?.startsWith('blob:'))URL.revokeObjectURL(r.url);});proShare.fmt=fmt;proShare.tpl=shareTplFor(fmt);proShare.renders={};proShare.pending={};
  proShare.view=view;proShare.fillToken=(proShare.fillToken||0)+1;
  const cur={url:'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'};
  const file=new File([],F.file,{type:'image/png'});
  const canShare=!!(navigator.canShare&&navigator.canShare({files:[file]}));
  const tplBtn=t=>`<button type="button" class="share-tpl${proShare.renders[t.id]?'':' is-loading'}" data-share-tpl="${t.id}" aria-pressed="${t.id===proShare.tpl}"><img src="${proShare.renders[t.id]?.url||'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}" alt=""><span>${t.name}</span></button>`;
  const picker=`<p class="share-group">بطاقات الأسعار</p><div class="share-tpl-row">${SHARE_TEMPLATES.filter(t=>!t.offer).map(tplBtn).join('')}</div><p class="share-group">إعلانات الفنادق <small>بصورة الفندق وبياناته</small></p><div class="share-tpl-row">${SHARE_TEMPLATES.filter(t=>t.offer).map(tplBtn).join('')}</div>`;
  const channel=fmt==='fb'?'فيسبوك':'واتس أب';
  const fbBtns=`<button type="button" class="btn ${fmt==='fb'?'share-facebook':'share-whatsapp'}" ${canShare?'data-share-send="1"':fmt==='fb'?'data-share-fb-open="1"':'data-share-wa-open="1"'} disabled>${fmt==='fb'?SHARE_ICON_FB:SHARE_ICON_WA}مشاركة ${channel}</button>`;
  const hint=canShare?`اختر ${channel} من قائمة المشاركة لإرسال الصورة.`:`عند المشاركة تُنزّل الصورة ويُفتح ${channel}؛ أرفق الصورة المحفوظة لإرسالها.`;
  proShare.view=view;
  const photoPanel=sharePhotoPanelMarkup();
  D(F.title,`<div class="share-card share-${fmt}" data-editor-view="templates">
    <nav class="share-editor-tabs" role="tablist" aria-label="أدوات تصميم البطاقة">
      <button type="button" role="tab" id="share-tab-templates" aria-controls="share-panel-templates" aria-selected="true" data-editor-tab="templates">القوالب</button>
      <button type="button" role="tab" id="share-tab-calligraphy" aria-controls="share-panel-calligraphy" aria-selected="false" tabindex="-1" data-editor-tab="calligraphy">المخطوطة</button>
      <button type="button" role="tab" id="share-tab-details" aria-controls="share-panel-details" aria-selected="false" tabindex="-1" data-editor-tab="details">الصور والبيانات</button>
      <button type="button" role="tab" id="share-tab-preview" aria-controls="share-panel-preview" aria-selected="false" tabindex="-1" data-editor-tab="preview">المعاينة</button>
    </nav>
    <div class="share-editor-workspace">
      <div class="share-editor-tools">
        <section id="share-panel-templates" role="tabpanel" aria-labelledby="share-tab-templates" data-editor-panel="templates"><div class="share-section-heading"><b>اختر تصميم البطاقة</b><small>اضغط على القالب لمعاينته؛ يُحفظ اختيارك تلقائياً.</small></div><div class="share-tpl-groups" role="group" aria-label="اختر شكل البطاقة">${picker}</div></section>
        <section id="share-panel-calligraphy" role="tabpanel" aria-labelledby="share-tab-calligraphy" data-editor-panel="calligraphy" hidden>${shareCalligControls(proShare.tpl)}</section>
        <section id="share-panel-details" role="tabpanel" aria-labelledby="share-tab-details" data-editor-panel="details" hidden><div class="share-section-heading"><b>صور البطاقة وبياناتها</b><small>الخيارات المتاحة تتغير حسب القالب المختار.</small></div><p id="share-details-empty" class="share-empty"${proShare.tpl==='kaaba'||isOfferTpl(proShare.tpl)?' hidden':''}>هذا القالب يستخدم بيانات التسعيرة الحالية. اختر قالب الكعبة لتعديل الخلفية أو أحد إعلانات الفنادق لإضافة صورة الفندق وبياناته.</p>${photoPanel}${offerPanel()}</section>
      </div>
      <section class="share-editor-preview" id="share-panel-preview" aria-label="معاينة البطاقة">
        <div class="share-preview-heading"><div><b>المعاينة</b><small id="share-selected-name"></small></div><span>${fmt==='fb'?'1080 × 1350':'عرض 1080 بكسل'}</span></div>
        <div class="share-preview is-loading" id="share-preview" aria-busy="true"><div class="share-preview-status" role="status"><i aria-hidden="true"></i><b>جارٍ تجهيز المعاينة</b><small>ستظهر البطاقة هنا فور اكتمالها</small></div><img id="share-card-img" src="${cur.url}" alt="معاينة البطاقة"></div>
        <p class="share-preview-note">تظهر تعديلاتك هنا، وتُنزَّل الصورة بجودتها الكاملة.</p>
      </section>
    </div>
    <footer class="form-actions share-editor-footer"><button type="button" class="share-mobile-preview-hint" data-editor-open-preview aria-label="لعرض معاينة الصورة اضغط هنا" aria-controls="share-panel-preview"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg><span><b>لعرض معاينة الصورة</b><small>اضغط هنا لرؤية تعديلاتك</small></span><i aria-hidden="true">←</i></button><p>${hint}</p><div>${fbBtns}<a class="btn" id="share-card-download" aria-disabled="true" download="${F.file}">تنزيل الصورة</a></div></footer>
  </div>`);
  const token=proShare.fillToken;
  const preview=d('#share-card-img');if(preview){preview.style.minHeight='180px';preview.alt='جارٍ تجهيز المعاينة…';}
  const download=d('#share-card-download');if(download){download.removeAttribute('href');download.setAttribute('aria-disabled','true');}
  await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
  await proShareSelect(proShare.tpl);
  if(token!==proShare.fillToken)return;
  if(download&&proShare.renders[proShare.tpl])download.removeAttribute('aria-disabled');
  proShareFill(view,fmt,token);
}
let sharePhotoRevision=0;
async function proShareRefreshPhoto(rebuild){
  const fmt=proShare.fmt||'fb',view=proShare.view,token=proShare.fillToken,revision=++sharePhotoRevision;
  if(!view)return;
  if(rebuild){
    const panel=d('#share-photo-panel'),scroll=d('.share-editor-tools'),top=scroll?.scrollTop||0;
    if(panel)panel.outerHTML=sharePhotoPanelMarkup();
    if(scroll)scroll.scrollTop=top;
    d('[data-share-photo-pick="'+sharePhotoPick()+'"]')?.focus({preventScroll:true});
  }
  try{
    const r=await proDrawShareCard(view,'kaaba',fmt);
    if(token!==proShare.fillToken||revision!==sharePhotoRevision){URL.revokeObjectURL(r.url);return;}
    const old=proShare.renders.kaaba;proShare.renders.kaaba=r;
    const th=d('[data-share-tpl="kaaba"] img');if(th){th.src=r.url;th.closest('.share-tpl')?.classList.remove('is-loading');}
    if(proShare.tpl==='kaaba')await proShareSelect('kaaba');
    if(old?.url)URL.revokeObjectURL(old.url);
  }catch(e){q('تعذّر تحديث الصورة. حاول مرة أخرى.');}
}
document.addEventListener('change',async event=>{
  const input=event.target.closest?.('[data-share-photo]');if(!input)return;
  const file=input.files&&input.files[0];if(!file)return;
  try{
    const data=await shareReadPhoto(file);
    sharePhotoMem=data;try{localStorage.setItem(SHARE_PHOTO_KEY,data);}catch(e){q('الصورة كبيرة على ذاكرة الجهاز؛ ستُستخدم في هذه الجلسة فقط.');}
    sharePhotoSetPick('custom');
    await proShareRefreshPhoto(true);
  }catch(e){q('تعذّر قراءة الصورة. جرّب صورة بصيغة JPG أو PNG.');}
},true);
let sharePhotoTimer=null;
document.addEventListener('input',event=>{
  const r=event.target.closest?.('[data-share-photo-focus]');if(!r)return;
  sharePhotoSetFocus(r.value);
  clearTimeout(sharePhotoTimer);sharePhotoTimer=setTimeout(()=>proShareRefreshPhoto(false),120);
},true);
document.addEventListener('click',async event=>{
  const pk=event.target.closest?.('[data-share-photo-pick]');
  if(pk){event.preventDefault();event.stopPropagation();sharePhotoSetPick(pk.dataset.sharePhotoPick);await proShareRefreshPhoto(true);return;}
  if(!event.target.closest?.('[data-share-photo-remove]'))return;
  event.preventDefault();event.stopPropagation();
  sharePhotoMem=null;try{localStorage.removeItem(SHARE_PHOTO_KEY);}catch(e){}
  sharePhotoSetPick(SHARE_BUILTIN_PHOTOS[0].id);
  await proShareRefreshPhoto(true);
},true);
function shareEditorTab(name){
  const card=d('.share-card');if(!card)return;card.dataset.editorView=name;
  const tools=d('.share-editor-tools');if(tools)tools.scrollTop=0;
  const notice=d('.share-mobile-preview-hint');
  if(notice&&name!=='preview'&&window.matchMedia('(max-width:760px)').matches&&!window.matchMedia('(prefers-reduced-motion:reduce)').matches){notice.getAnimations().forEach(a=>a.cancel());notice.animate([{opacity:.3,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'ease-out'});}
  x('[data-editor-tab]').forEach(b=>{const active=b.dataset.editorTab===name;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
  x('[data-editor-panel]').forEach(p=>{p.hidden=p.dataset.editorPanel!==name;});
}
document.addEventListener('click',event=>{if(event.target.closest?.('[data-editor-open-preview]')){event.preventDefault();shareEditorTab('preview');d('[data-editor-tab=preview]')?.focus({preventScroll:true});return;}const tab=event.target.closest?.('[data-editor-tab]');if(tab){event.preventDefault();shareEditorTab(tab.dataset.editorTab);}},true);
document.addEventListener('keydown',event=>{
  const tab=event.target.closest?.('[data-editor-tab]');if(!tab||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  const tabs=x('[data-editor-tab]').filter(b=>b.getClientRects().length),i=tabs.indexOf(tab);let next=i;
  if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else next=(i+(event.key==='ArrowLeft'?1:-1)+tabs.length)%tabs.length;
  event.preventDefault();tabs[next].focus();shareEditorTab(tabs[next].dataset.editorTab);
},true);
window.matchMedia('(max-width:760px)').addEventListener('change',event=>{if(!event.matches&&d('.share-card')?.dataset.editorView==='preview')shareEditorTab('templates');});
d('#dialog')?.addEventListener('close',()=>{if(d('#dialog').classList.contains('share-editor-dialog')){proShare.fillToken=(proShare.fillToken||0)+1;proShare.pending={};clearTimeout(shareCalligTimer);}});
function proShareCard(){return proShareOpen('story');}
function proShareFacebook(){return proShareOpen('fb');}
document.addEventListener('click',async event=>{
  if(event.target.closest?.('[data-share-retry]')){event.preventDefault();proShareSelect(proShare.tpl);return;}
  const t=event.target.closest?.('[data-share-tpl]');
  if(t){event.preventDefault();event.stopPropagation();proShareSelect(t.dataset.shareTpl);return;}
  const cur=proShare.renders[proShare.tpl];if(!cur)return;
  const F=SHARE_FORMATS[proShare.fmt];
  if(event.target.closest?.('[data-share-send]')){
    event.preventDefault();event.stopPropagation();
    const file=new File([cur.blob],F.file,{type:'image/png'});
    try{await navigator.share({files:[file],title:'عرض أسعار'});}catch(e){}
    return;
  }
  if(event.target.closest?.('[data-share-fb-open],[data-share-wa-open]')){
    event.preventDefault();event.stopPropagation();
    const a=document.createElement('a');a.href=cur.url;a.download=F.file;document.body.appendChild(a);a.click();a.remove();
    window.open(event.target.closest('[data-share-wa-open]')?'https://web.whatsapp.com/':'https://www.facebook.com/','_blank','noopener');
  }
},true);

/* ---- quick pricing actions ---- */
/* Negotiated prices are per draft. Opening one restores its own, and a new quote starts clean,
   so a price agreed with one customer can never appear in another customer's quote. */
function proRestoreNegotiation(row){
  proQuickExtra.sells={};
  try{
    const saved=JSON.parse(row?.notes||'{}');
    if(saved&&typeof saved==='object'){
      proQuickExtra.sells=saved.sells&&typeof saved.sells==='object'?{...saved.sells}:{};
    }
  }catch(e){proQuickExtra.sells={};}
}
function proQuickHandle2(own){
  switch(own.dataset.pro){
    case'quick-room-add-open':{
      const rows=proQuickCustomRooms();if(rows.length>=20){q('الحد الأقصى 20 غرفة مضافة.');return true;}
      proQuickState.input=proQuickInput();proRoomManager.adding=true;proQuickPage();d('[data-new-room-name]')?.focus();return true;
    }
    case'quick-room-toggle':proQuickState.input=proQuickInput();proToggleRoom(own.dataset.value);proQuickPage();return true;
    case'quick-room-add-cancel':proQuickState.input=proQuickInput();proRoomManager.adding=false;proQuickPage();return true;
    case'quick-room-save':{
      const input=proQuickInput(),name=d('[data-new-room-name]')?.value?.trim()||'',base=Math.max(1,Number(d('[data-new-room-base]')?.value||1)),extra=Math.max(0,Number(d('[data-new-room-extra]')?.value||0));
      if(!name){q('اكتب اسم نوع الغرفة.');d('[data-new-room-name]')?.focus();return true;}
      if(proQuickRooms().some(row=>String(row.name).trim().toLowerCase()===name.toLowerCase())){q('يوجد نوع غرفة بهذا الاسم بالفعل.');return true;}
      const rows=proQuickCustomRooms();rows.push({id:'room-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7),name,occupancy:base,extraBeds:extra});
      proSaveCustomRooms(rows);proQuickState.input=input;proRoomManager.adding=false;proQuickPage();q('تم حفظ الغرفة وإضافتها إلى التسعير.');return true;
    }
    case'quick-room-delete':{
      const rows=proQuickCustomRooms(),room=rows.find(row=>row.id===own.dataset.value);if(!room)return true;
      if(!confirm('حذف نوع الغرفة «'+room.name+'» من الغرف المحفوظة؟'))return true;
      const input=proQuickInput();delete input.baseBedCounts?.[room.id];delete input.extraBedCounts?.[room.id];
      proSaveCustomRooms(rows.filter(row=>row.id!==room.id));proQuickState.input=input;proQuickPage();q('تم حذف نوع الغرفة.');return true;
    }
    case'quick-template-use':{
      const template=proQuickCostTemplates().find(row=>row.id===own.dataset.value);if(!template)return true;
      const input=proQuickInput(),items=Array.isArray(input.extraItems)?input.extraItems:[];
      if(items.length>=30){q('الحد الأقصى 30 بند تكلفة في التسعيرة الواحدة.');return true;}
      proQuickState.input={...input,extraItems:[...items,{name:template.name,amount:Number(template.amount||0),currency:template.currency||'LYD'}]};
      proQuickPage();q('تمت إضافة البند المحفوظ إلى التسعيرة.');return true;
    }
    case'quick-template-store':{
      const input=proQuickInput(),item=input.extraItems?.[Number(own.dataset.value)];
      if(!item?.name?.trim()){q('اكتب اسم البند أولاً ثم احفظه.');return true;}
      const rows=proQuickCostTemplates(),match=rows.find(row=>row.name.trim()===item.name.trim()&&row.currency===item.currency);
      if(match){match.amount=Number(item.amount||0);}else rows.push({id:'cost-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7),name:item.name.trim(),amount:Number(item.amount||0),currency:item.currency||'LYD'});
      proSaveCostTemplates(rows);proQuickState.input=input;proQuickPage();q(match?'تم تحديث البند المحفوظ.':'تم حفظ البند للاستخدام لاحقاً.');return true;
    }
    case'quick-template-delete':{
      const rows=proQuickCostTemplates(),item=rows.find(row=>row.id===own.dataset.value);if(!item)return true;
      if(!confirm('حذف البند المحفوظ «'+item.name+'»؟'))return true;
      proSaveCostTemplates(rows.filter(row=>row.id!==item.id));proQuickState.input=proQuickInput();proQuickPage();q('تم حذف البند المحفوظ.');return true;
    }
    case'quick-extra-add':{
      const input=proQuickInput(),items=Array.isArray(input.extraItems)?input.extraItems:[];
      if(items.length>=30){q('الحد الأقصى 30 بند تكلفة في التسعيرة الواحدة.');return true;}
      proQuickState.input={...input,extraItems:[...items,{name:'',amount:0,currency:'LYD'}]};
      proQuickPage();d('#quick-cost-items [data-extra-item]:last-child [data-extra-name]')?.focus();return true;
    }
    case'quick-extra-remove':{
      const input=proQuickInput(),items=[...(input.extraItems||[])];items.splice(Number(own.dataset.value),1);
      proQuickState.input={...input,extraItems:items};proQuickPage();return true;
    }
    case'quick-price-step':{
      let view=null;try{view=proQuickCompute();}catch(e){return true;}
      const index=Number(own.dataset.index),row=view.result.results[index];if(!row)return true;
      proQuickExtra.sells[index]=Math.max(0,(proQuickExtra.sells[index]!=null?proQuickExtra.sells[index]:row.sell)+Number(own.dataset.value));
      proQuickRender();return true;
    }
    case'preset':{
      const preset=proQuickPresets()[Number(own.dataset.value)];
      if(!preset)return true;
      proQuickState.input={...preset.input};proQuickState.draft=null;proQuickExtra.sells={};
      proQuickPage();q('طُبّق قالب «'+preset.name+'».');return true;
    }
    case'preset-remove':{
      const list=proQuickPresets(),index=Number(own.dataset.value);
      if(!list[index])return true;
      if(!confirm('حذف القالب «'+list[index].name+'»؟'))return true;
      list.splice(index,1);proSavePresets(list);proQuickPage();return true;
    }
    case'preset-save':{
      const name=prompt('اسم القالب','قالب '+(proQuickPresets().length+1));
      if(name==null||!name.trim())return true;
      proSavePresets([{name:name.trim(),input:proQuickInput()},...proQuickPresets()]);
      proQuickPage();q('حُفظ القالب على هذا الجهاز.');return true;
    }
    case'quick-discount':{
      const kind=own.dataset.kind,value=Number(own.dataset.value);
      if(kind==='reset'){proQuickExtra.sells={};proQuickRender();return true;}
      let view=null;try{view=proQuickCompute();}catch(e){return true;}
      (view.result.results||[]).forEach((row,index)=>{
        const current=proQuickExtra.sells[index]!=null?proQuickExtra.sells[index]:row.sell;
        proQuickExtra.sells[index]=kind==='pct'?Math.round(current*(1-value/100)/5)*5:current-value;
      });
      proQuickRender();return true;
    }
    case'quick-swap':{
      const hotel=proQuickDefs('hotel').find(row=>row.id===own.dataset.value);
      if(!hotel)return true;
      const select=d('[name=q-makkahHotelId]'),rate=d('[name=q-makkahRate]');
      if(select)select.value=hotel.id;
      if(rate)rate.value=hotel.rate;
      proQuickExtra.sells={};proQuickRender();q('حُوّل إلى '+hotel.name+'.');return true;
    }
    case'quick-customer':
      proQuickExtra.customer=!proQuickExtra.customer;proQuickPage();return true;
    case'quick-more':{
      const row=own.closest('.quick-actions');
      const open=row.classList.toggle('show-all');
      own.textContent=open?'إخفاء الإجراءات':'المزيد من الإجراءات';
      return true;
    }
    case'quick-card':
      proShareCard();return true;
    case'quick-fb':
      proShareFacebook();return true;
  }
  return false;
}
const proQuickBaseHandle=proHandleAction;
proHandleAction=function(own){if(proQuickHandle2(own))return;return proQuickBaseHandle(own);};
function proUpdateNegotiationLive(index,value){
  const card=d(`[data-neg-row="${index}"]`);if(!card)return;
  let view=null;try{view=proQuickCompute();}catch(e){return;}
  const priced=view.result.results?.[Number(index)];if(!priced)return;
  const sell=Math.max(0,Number(value)||0),cost=priced.baseCost,profit=sell-cost,pct=cost>0?Math.round(profit/cost*100):0;
  const span=Math.max(priced.sell*1.12-cost,1),fill=Math.max(0,Math.min(100,(sell-cost)/span*100)),bad=sell<cost;
  card.classList.toggle('is-bad',bad);card.classList.toggle('is-good',!bad);card.classList.remove('is-low');
  const status=card.querySelector('.neg-status');if(status)status.textContent=bad?'خسارة':'سعر مربح';
  const metrics=card.querySelectorAll('.neg-metrics b');
  if(metrics[0])metrics[0].textContent=ne(cost);
  if(metrics[1])metrics[1].textContent=(profit<0?'−':'+')+ne(Math.abs(profit));
  if(metrics[2])metrics[2].textContent=pct+'٪';
  const bar=card.querySelector('.neg-bar i');if(bar)bar.style.width=fill+'%';
}
document.addEventListener('input',event=>{
  const index=event.target.dataset&&event.target.dataset.neg;
  if(index!=null){proQuickExtra.sells[index]=Number(event.target.value)||0;proUpdateNegotiationLive(index,event.target.value);}
},true);
document.addEventListener('change',event=>{
  const index=event.target.dataset&&event.target.dataset.neg;
  if(index!=null){proQuickExtra.sells[index]=Number(event.target.value)||0;proQuickRender();}
},true);
const proQuickBaseAction=Ri;
Ri=async function(action,id,el){
  if(action==='quick.promote'){
    const input=proQuickInput();
    s.tab='pricing';Qe();
    be({name:'',kind:'program',input,roomIds:proQuickRooms().map(row=>row.id),definitionsSnapshot:[]});
    q('نُقلت الأرقام. أضف اسم التسعيرة والرحلة ثم احفظ.');
    return;
  }
  if(action==='quick.reset')proQuickExtra.sells={};
  return proQuickBaseAction(action,id,el);
};

/* ---- offers table on phones: one room type at a time, chosen by chips, no sideways scroll ---- */
let proRoomFocus='';
function proNarrowTable(rows,columns){
  const pick=columns.includes(proRoomFocus)?proRoomFocus:columns[0];
  const net=rows.some(row=>proOfferLines(row).net);
  const mode=proValueMode(net);
  const currency=$(((rows[0]&&proOfferLines(rows[0]).lines[0])||{}).currency||'LYD');
  const chips=`<div class="chips room-chips" role="group" aria-label="نوع الغرفة">${columns.map(label=>`<button type="button" class="chip" data-pro="room-focus" data-value="${c(label)}" aria-pressed="${label===pick}">${c(label)}</button>`).join('')}</div>`;
  const body=rows.map(row=>{
    const line=proOfferLines(row).lines.find(item=>item.label===pick);
    const trip=proTripOf(row);
    return `<div class="narrow-row${row.archived?' is-archived':''}"><div class="narrow-main"><b>${c(row.name)}</b><small>${trip?c(trip)+' · ':''}${row.status==='approved'||b()?'متاح':'مسودة'}${row.validUntil?' · حتى '+c(row.validUntil):''}</small></div><div class="narrow-price">${line?`<span class="num">${ne(line[mode]??line.basePrice)}</span>`:'<span class="empty-cell">—</span>'}</div><div class="narrow-act">${proOfferActions(row)}</div></div>`;
  }).join('');
  return chips+`<div class="narrow-table"><div class="narrow-head"><span>العرض</span><span>${c(pick)} · ${c(currency)}</span><span></span></div>${body}</div>`;
}
const proWideCompare=proCompareSection;
proCompareSection=function(rows,programs){
  if(!rows.length)return '';
  if(programs&&proNarrow()){
    const columns=proRoomColumns(rows);
    if(columns.length)return '<div class="compare-group">البرامج · سعر الفرد</div>'+proNarrowTable(rows,columns);
  }
  if(!programs&&proNarrow())return '<div class="compare-group">الخدمات المستقلة</div>'+proNarrowServices(rows);
  return proWideCompare(rows,programs);
};
function proNarrowServices(rows){
  const currency=$(((rows[0]&&proOfferLines(rows[0]).lines[0])||{}).currency||'LYD');
  const net=rows.some(row=>proOfferLines(row).net);
  const mode=proValueMode(net);
  return `<div class="narrow-table"><div class="narrow-head"><span>الخدمة</span><span>يبدأ من · ${c(currency)}</span><span></span></div>${rows.map(row=>{
    const lines=proOfferLines(row).lines;
    return `<div class="narrow-row${row.archived?' is-archived':''}"><div class="narrow-main"><b>${c(row.name)}</b><small>${lines.length} بنود${row.validUntil?' · حتى '+c(row.validUntil):''}</small></div><div class="narrow-price"><span class="num">${ne(proMinPrice(lines,mode))}</span></div><div class="narrow-act">${proOfferActions(row)}</div></div>`;
  }).join('')}</div>`;
}
const proR5Handle=proHandleAction;
proHandleAction=function(own){
  if(own.dataset.pro==='room-focus'){proRoomFocus=own.dataset.value;ve();return;}
  return proR5Handle(own);
};

/* ---- tab label, top-bar shortcut, company quote delete ---- */
Qe=function(){
  proR5.shell();
  const pricingTab=d('.nav button[data-id="pricing"]');
  if(pricingTab)pricingTab.textContent='أداة التسعير والعروض';
  // The name appears twice: the sidebar button and the heading on the page itself.
  const heading=d('#content .page-head h1,#content .page-head h2');
  if(heading&&heading.textContent.includes('أداة التسعير والقوالب'))heading.textContent='أداة التسعير والعروض';
  const topbar=d('.topbar .inline');
  if(topbar&&proQuickAllowed()&&!d('#quick-shortcut'))
    topbar.insertAdjacentHTML('beforeend','<button type="button" id="quick-shortcut" class="btn quick-shortcut" data-action="navigate" data-id="quickPricing"><span aria-hidden="true">⚡</span> تسعيرة سريعة</button>');
  d('#quick-shortcut')?.classList.toggle('is-active',s.tab==='quickPricing');
};
const proR5Action=Ri;
Ri=async function(action,id,el){
  if(action==='quote.delete'){
    const quote=(s.boot.quotes||[]).find(row=>row.id===id);
    if(!quote)return;
    if(!confirm('حذف التسعيرة «'+quote.name+'» نهائياً؟ لا يمكن التراجع.'))return;
    await v('quote.delete',{id:quote.id,version:quote.version});
    s.boot.quotes=(s.boot.quotes||[]).filter(row=>row.id!==quote.id);
    gi();q('حُذفت التسعيرة.');
    return;
  }
  return proR5Action(action,id,el);
};
ve=function(){
  proR5.list();
  if(s.tab!=='quotes'||!b())return;
  x('#list-results tbody tr').forEach(row=>{
    const trigger=row.querySelector('[data-action="quote.archive"]');
    const id=trigger?.dataset.id;
    if(!id||row.querySelector('[data-action="quote.delete"]'))return;
    trigger.insertAdjacentHTML('afterend',l('حذف','quote.delete',id,'small danger'));
  });
  proUpgradeActions();
};

/* ===== Release 6 ===== Merge the saved record instead of reloading everything. */
const proR6={after:N,observe:proObserveApi};
let proLastSave=null;
/* Which boot list each save writes into. Anything absent falls back to a full reload, and the
   three below are excluded on purpose because one call changes many records at once. */
const proMergeTargets={
  'definition.save':'definitions','company.save':'companies','user.save':'users',
  'pricing.save':'pricings','offer.save':'offers','offer.approve':'offers','offer.archive':'offers',
  'quote.save':'quotes','quote.archive':'quotes','settings.save':'settings',
  'company.pricing.save':'companyPricings','company.pricing.archive':'companyPricings',
  'assignment.toggle':'assignments'
};
const proFullReloadActions=['publish.commit','definition.import','account.password'];
proObserveApi=function(action,data){
  if(proMergeTargets[action]&&!proFullReloadActions.includes(action))proLastSave={action,data};
  return proR6.observe(action,data);
};
N=async function(message){
  const save=proLastSave;proLastSave=null;
  const table=save&&proMergeTargets[save.action];
  if(!table||!save.data)return proR6.after(message);
  if(table!=='settings'&&!save.data.id)return proR6.after(message);
  oe();
  if(table==='settings')s.boot.settings={...s.boot.settings,...save.data};
  else{
    const list=(s.boot[table]||[]).slice();
    const index=list.findIndex(row=>row.id===save.data.id);
    if(index>=0)list[index]=save.data;else list.unshift(save.data);
    s.boot[table]=list;
  }
  gi();
  q(message);
};
/* A visible saving state, and no second submit while the first is still in flight. */
document.addEventListener('submit',event=>{
  const button=event.target.querySelector('[type=submit]');
  if(!button||button.dataset.proBusy)return;
  const label=button.textContent;
  button.dataset.proBusy='1';
  button.textContent=event.target.id==='login'?'جارٍ الدخول…'
    :/مراجعة|احسب/.test(label)?'جارٍ الحساب…'
    :'جارٍ الحفظ…';
  button.classList.add('is-busy');
  const restore=()=>{
    button.textContent=label;
    button.classList.remove('is-busy');
    delete button.dataset.proBusy;
  };
  setTimeout(function check(){
    if(button.disabled){setTimeout(check,60);return;}
    restore();
  },60);
},true);

/* ---- extras summary, negotiation persistence, floor as percent or amount ---- */
function proQuickExtrasSummary(){
  const summary=d('#quick-extra-sum'),total=d('#quick-extra-total'),details=d('.quick-extra');
  if(!summary)return;
  const input=proQuickInput();
  const parts=[];
  (input.extraItems||[]).filter(item=>item.name||item.amount).forEach(item=>parts.push(item.name||'بند تكلفة'));
  if(input.makkahExtraBed)parts.push('سرير مكة');
  if(input.madinahExtraBed)parts.push('سرير المدينة');
  const value=input.otherLyd;
  summary.textContent=parts.length?parts.join(' · ')+' · على كل فرد':'أضف بنود التكلفة بالعملة المناسبة';
  if(total)total.innerHTML=value?'<span class="money"><bdi dir="ltr">+'+ne(value)+'</bdi> <span class="cur">د.ل</span></span>':'';
  const label=details?.querySelector('.ex-label');
  if(label)label.textContent=details.open?'طي التفاصيل':'إظهار التفاصيل';
}
document.addEventListener('toggle',event=>{
  if(event.target.classList?.contains('quick-extra'))proQuickExtrasSummary();
},true);
const proR6Render=proQuickRender;
proQuickRender=function(){proR6Render();proQuickExtrasSummary();};

/* ---- deleting a definition: show what depends on it first ---- */
function proUses(row,id){
  if(Array.isArray(row.definitionIds))return row.definitionIds.includes(id);
  if(row.tripId===id||row.serviceId===id)return true;
  if((row.roomIds||[]).includes(id))return true;
  if((row.lines||[]).some(line=>line.key===id))return true;
  if((row.definitionsSnapshot||[]).some(def=>def.id===id))return true;
  const input=row.input||{};
  return input.makkahHotelId===id||input.madinahHotelId===id||(input.serviceIds||[]).includes(id);
}
function proDefinitionUsage(id){
  const pricings=(s.boot.pricings||[]).filter(row=>proUses(row,id));
  return {
    pricings:pricings.length,
    quickDrafts:(s.boot.quickDrafts||[]).filter(row=>proUses(row,id)).length,
    offers:(s.boot.offers||[]).filter(row=>proUses(row,id)).length,
    assignments:(s.boot.assignments||[]).filter(row=>proUses(row,id)).length
  };
}
const proR6Action=Ri;
Ri=async function(action,id,el){
  if(action==='definition.delete'){
    const row=(s.boot.definitions||[]).find(x=>x.id===id);
    if(!row)return;
    // Counted from data already in the browser: no second round trip before the dialog opens.
    const usage=proDefinitionUsage(id);
    const links=[['تسعيرة',usage.pricings],['مسودة سريعة',usage.quickDrafts],['عرض',usage.offers],['تخصيص شركة',usage.assignments]].filter(([,count])=>count>0);
    const body=links.length
      ? `<div class="usage-warn"><p><b>${c(row.name)}</b> مرتبط بـ:</p><ul>${links.map(([label,count])=>`<li>${count} ${c(label)}</li>`).join('')}</ul><p class="hint">السجلات القائمة لن تتأثر — كل تسعيرة وكل عرض يحفظ لقطة من تعريفاته وأسعاره وقت إنشائه. الأثر الوحيد أن هذا التعريف سيختفي من التسعيرات حين تفتحها للتعديل لاحقاً.</p></div>`
      : `<p class="hint">لا توجد سجلات مرتبطة بـ <b>${c(row.name)}</b>. الحذف آمن.</p>`;
    D('حذف التعريف',body+`<div class="form-actions">${l('إلغاء','dialog.close')}${l('تعطيل بدل الحذف','definition.disable',id)}${l('حذف نهائياً','definition.delete.confirm',id,'danger')}</div>`);
    return;
  }
  if(action==='definition.delete.confirm'){
    const row=(s.boot.definitions||[]).find(x=>x.id===id);
    if(!row)return;
    await v('definition.delete',{id,version:row.version});
    s.boot.definitions=(s.boot.definitions||[]).filter(x=>x.id!==id);
    oe();gi();q('حُذف التعريف «'+row.name+'».');
    return;
  }
  if(action==='definition.disable'){
    const row=(s.boot.definitions||[]).find(x=>x.id===id);
    if(!row)return;
    const saved=await v('definition.save',{...row,active:false});
    s.boot.definitions=(s.boot.definitions||[]).map(x=>x.id===id?saved:x);
    oe();gi();q('عُطّل التعريف «'+row.name+'». السجلات المرتبطة سليمة.');
    return;
  }
  return proR6Action(action,id,el);
};
const proR6List=ve;
ve=function(){
  proR6List();
  if(s.tab!=='definitions'||!L('editDefinitions'))return;
  x('#list-results tbody tr').forEach(row=>{
    const trigger=row.querySelector('[data-action="definition.edit"]');
    const id=trigger?.dataset.id;
    if(!id||row.querySelector('[data-action="definition.delete"]'))return;
    trigger.insertAdjacentHTML('afterend',l('حذف','definition.delete',id,'small danger'));
  });
  proUpgradeActions();
};

/* ===== Release 7 ===== Announce a front end and a server that came from different builds. */
function proBuildMismatch(){
  const front=typeof window!=='undefined'?window.RIHLA_BUILD:null;
  const back=s.boot&&s.boot.build;
  if(!front||!back)return back===undefined?'missing':'';
  return front===back?'':'mismatch';
}
function proRenderBuildNotice(){
  d('#pro-build-notice')?.remove();
  const state=proBuildMismatch();
  if(!state)return;
  const message=state==='missing'
    ? 'الخادم يعمل بنسخة أقدم من هذه الواجهة. بعض الإجراءات ستفشل برسالة «العملية غير متاحة»، والدخول والحفظ سيبقيان بطيئين حتى ترفع Apps Script.'
    : 'الواجهة والخادم من إصدارين مختلفين. ارفع ملفات Apps Script عبر deploy.cmd ثم حدّث هذه الصفحة.';
  d('#content')?.insertAdjacentHTML('afterbegin',`<div class="build-notice" id="pro-build-notice" role="alert"><b>تعارض في الإصدار</b><p>${c(message)}</p></div>`);
}
const proR7Page=gi;
gi=function(){proR7Page();proRenderBuildNotice();};

/* ===== Release 8 ===== Measure each request so the split between network and server is visible. */
const proTimings=[];
const proR8Api=v;
v=async function(action,payload={},requestId){
  const started=Date.now();
  const before=proLastMeta;
  try{
    return await proR8Api(action,payload,requestId);
  }finally{
    const total=Date.now()-started;
    const meta=proLastMeta!==before?proLastMeta:null;
    proTimings.unshift({action,total,server:meta?meta.ms:null,read:meta?meta.read:null,write:meta?meta.write:null,lock:meta?meta.lock:null,tables:meta?meta.tables:null,at:Date.now()});
    proTimings.length=Math.min(proTimings.length,25);
  }
};
function proPerfPanel(){
  if(proTimings.length===0)return '<p class="hint">لم تُسجَّل عمليات بعد. استخدم المنظومة قليلاً ثم عد إلى هنا.</p>';
  const withServer=proTimings.filter(row=>row.server!=null);
  const avg=list=>list.length?Math.round(list.reduce((a,b)=>a+b,0)/list.length):0;
  const totalAvg=avg(withServer.map(row=>row.total));
  const serverAvg=avg(withServer.map(row=>row.server));
  const networkAvg=Math.max(0,totalAvg-serverAvg);
  const verdict=!withServer.length?'الخادم لا يرسل قياساً — ارفع Apps Script.'
    :networkAvg>serverAvg*1.5?'أغلب الوقت في الاتصال، لا في الخادم. جرّب شبكة أخرى.'
    :serverAvg>networkAvg*1.5?'أغلب الوقت داخل الخادم، لا في اتصالك.'
    :'الوقت موزّع بين الاتصال والخادم بالتساوي تقريباً.';
  return `<div class="perf-summary"><div class="perf-stat"><span>متوسط العملية</span><strong>${totalAvg} م.ث</strong></div><div class="perf-stat"><span>داخل الخادم</span><strong>${serverAvg} م.ث</strong></div><div class="perf-stat"><span>الاتصال والتوجيه</span><strong>${networkAvg} م.ث</strong></div></div><p class="hint">${c(verdict)}</p>`+
    M(['العملية','الإجمالي','الخادم','قراءة Sheets','كتابة Sheets','انتظار القفل'],proTimings.slice(0,12).map(row=>R([
      c(row.action),row.total+' م.ث',row.server==null?'—':row.server+' م.ث',
      row.read==null?'—':row.read+' م.ث'+(row.tables?' · '+row.tables+' جداول':''),
      row.write==null?'—':row.write+' م.ث',row.lock==null?'—':row.lock+' م.ث'
    ])));
}
const proR8Settings=Pi;
Pi=function(){
  proR8Settings();
  const host=[...x('#content .panel.section')].pop();
  if(!host||d('#pro-perf'))return;
  host.insertAdjacentHTML('afterend',`<section class="panel section" id="pro-perf"><div class="toolbar"><h3>قياس الأداء</h3>${l('تحديث','perf.refresh','','small')}</div><p class="hint">آخر العمليات في هذه الجلسة. «الخادم» هو ما استغرقه Apps Script فعلاً، والفرق بينه وبين الإجمالي هو الاتصال والتوجيه.</p>${proPerfPanel()}</section>`);
  proUpgradeActions();
};
const proR8Action=Ri;
Ri=async function(action,id,el){
  if(action==='perf.refresh'){d('#pro-perf')?.remove();Pi();return;}
  return proR8Action(action,id,el);
};

/* ===== Release 13 ===== One request per action.
   Apps Script adds a redirect of about three seconds to every web-app call regardless of payload,
   so the measured cost of a flow is the number of calls, not the number of bytes. These four
   flows used two calls each; the arithmetic in the first call was already being done in the
   browser with the very same functions the server uses, and the server still recalculates
   everything on save, so nothing is taken on trust. */
const proR13={api:v,action:Ri,submit:qi};

function proLocalPricing(payload){
  const defs=proSnapshotDefs();
  const rooms=(payload.roomIds||[]).map(id=>defs.find(row=>row.id===id&&row.type==='room')).filter(Boolean);
  const services=defs.filter(row=>row.type==='service');
  const input=proMadinahFromNights(payload.input);
  return payload.kind==='service'
    ? {kind:'service',input,serviceId:payload.serviceId,tripId:payload.tripId||'',roomIds:[],definitionsSnapshot:[],result:proCalcService(input,defs.find(row=>row.id===payload.serviceId))}
    : {kind:'program',input,tripId:payload.tripId||'',roomIds:payload.roomIds||[],definitionsSnapshot:[],result:proCalcProgram(input,rooms,services)};
}
function proLocalCompanyPricing(payload){
  const input=proMadinahFromNights(payload.input);
  return payload.kind==='service'
    ? {kind:'service',input,service:payload.service,result:proCalcService(input,{...payload.service,active:true})}
    : {kind:'program',input,rooms:payload.rooms,result:proCalcProgram(input,payload.rooms||[],[])};
}
/* The four calculations below never wrote anything, so answering them from the browser removes a
   round trip without removing a safeguard: every save still recomputes on the server. */
const proLocalActions={
  'pricing.calculate':proLocalPricing,
  'company.pricing.calculate':proLocalCompanyPricing,
  'quick.calculate':proLocalPricing
};
/* quote.preview deliberately still goes to the server. Its hash is compared on save to catch
   prices that changed between the review and the save, and answering it locally would turn that
   comparison into a value checked against itself. Three seconds is not worth losing a guard that
   stops a customer quote being saved at prices nobody approved. */
v=async function(action,payload={},requestId){
  const local=proLocalActions[action];
  if(local){
    const started=Date.now();
    try{
      const data=local(payload);
      proTimings.unshift({action:action+' (محلي)',total:Date.now()-started,server:0,read:0,write:0,lock:0,tables:0,at:Date.now()});
      proTimings.length=Math.min(proTimings.length,25);
      return proObserveApi(action,data);
    }catch(e){
      if(e&&e.message)throw e;
    }
  }
  return proR13.api(action,payload,requestId);
};

/* ===== Release 14 ===== The pricings list reads its own summary.
   bootstrap returns pricings from the summary column, which carries lineCount and deliberately
   leaves out the calculation result. The bundled list renderer reads result.results.length, so a
   summarised record broke the screen with "Cannot read properties of undefined". The row is now
   rendered from the fields the summary actually declares, and a full record still works because
   lineCount falls back to the calculation it came from. */
function proPricingLineCount(row){
  if(typeof row.lineCount==='number')return row.lineCount;
  if(row.result&&Array.isArray(row.result.results))return row.result.results.length;
  if(Array.isArray(row.roomIds))return row.roomIds.length;
  return 0;
}
const proR14List=ve;
ve=function(){
  if(s.tab!=='pricing')return proR14List();
  proCloseMenu();
  const rows=X(s.boot.pricings||[]);
  d('#result-count').textContent=rows.length+' تسعيرة';
  d('#list-results').innerHTML=rows.length?M(['الاسم','النوع','الاستخدام','عدد البنود','الإجراءات'],rows.map(row=>R([
    `<b>${c(row.name)}</b>${row.tripName?`<small>${c(row.tripName)}</small>`:''}`,
    row.kind==='program'?'برنامج':'خدمة',
    P(row.isTemplate?'قالب تسعير':'تسعيرة'),
    String(proPricingLineCount(row)),
    V(l('عرض','pricing.view',row.id,'small')+(L('editPricing')?l('تعديل','pricing.edit',row.id,'small')+l('نسخة','pricing.copy',row.id,'small'):''))
  ]))):'<div class="empty"><strong>لا توجد تسعيرات مطابقة</strong>أنشئ تسعيرة جديدة أو غيّر البحث.</div>';
  proUpgradeActions();
};


/* ===== offline preview harness — demo data only ===== */
const qaRole="admin",qaAllowPricing=true;
const qaLocalDraftKey='rihla_quick_local_drafts_v1';
const qaRatesKey='rihla_quick_exchange_rates_v1';
const qaLocalDrafts=()=>{try{return JSON.parse(localStorage.getItem(qaLocalDraftKey)||'[]')}catch(e){return[]}};
const qaSaveLocalDrafts=rows=>localStorage.setItem(qaLocalDraftKey,JSON.stringify(rows));
const qaLocalRates=()=>{try{return {...{sarPerUsd:3.75,usdToLyd:9.5,rounding:1},...JSON.parse(localStorage.getItem(qaRatesKey)||'{}')}}catch(e){return {sarPerUsd:3.75,usdToLyd:9.5,rounding:1}}};
const qaTrips=[
 {id:'t1',type:'trip',name:'عمرة رمضان — 13 ليلة',nights:13,notes:'موسم مزدحم، يلزم حجز مبكر',active:true,version:1},
 {id:'t2',type:'trip',name:'عمرة شعبان الاقتصادية',nights:7,notes:'',active:true,version:1},
 {id:'t3',type:'trip',name:'عمرة موسم ماضٍ',nights:10,notes:'',active:false,version:1}];
const qaRooms=[
 {id:'r1',type:'room',name:'غرفة فردية',occupancy:1,extraBeds:0,active:true,version:1},
 {id:'r2',type:'room',name:'غرفة زوجية',occupancy:2,extraBeds:0,active:true,version:1},
 {id:'r3',type:'room',name:'غرفة ثلاثية',occupancy:3,extraBeds:0,active:true,version:1},
 {id:'r4',type:'room',name:'غرفة رباعية',occupancy:4,extraBeds:0,active:true,version:1},
 {id:'r5',type:'room',name:'غرفة خماسية',occupancy:5,extraBeds:0,active:true,version:1}];
const qaService={id:'svc',type:'service',name:'استقبال المطار',cost:120,currency:'SAR',saleCurrency:'LYD',unit:'item',active:true,version:1};
const qaInput={makkahNights:10,madinahNights:3,includeMadinah:true,makkahRate:240,madinahRate:180,extraBed:35,visaUsd:110,ticketLyd:1400,transportLyd:180,otherLyd:60,profitType:'fixed',profitValue:200,rounding:1,sarPerUsd:3.75,usdToLyd:9.5,serviceIds:[]};
const qaResult=Be().calculateProgram(qaInput,qaRooms,[]);
const qaLines=qaResult.results.map(row=>({key:row.key,label:row.label,unit:'person',currency:'LYD',count:row.count,baseCost:row.baseCost,basePrice:row.basePrice,sell:row.sell,profit:row.profit}));
const qaSome=qaLines.filter(row=>row.count>1);
const qaOffer={id:'offer-1',version:2,name:'برنامج العمرة الشامل',kind:'program',tripId:'t1',tripName:'عمرة رمضان — 13 ليلة',description:'يشمل الإقامة والتنقل والتأشيرة. لا يشمل التذاكر الداخلية.',validUntil:'2030-06-30',status:'approved',archived:false,pricingId:'p1',updatedAt:'2026-09-11',lines:qaLines};
const qaOffer2={id:'offer-2',version:1,name:'عمرة شعبان الاقتصادية',kind:'program',tripId:'t2',tripName:'عمرة شعبان الاقتصادية',description:'',validUntil:'2030-03-01',status:'draft',archived:false,pricingId:'p2',updatedAt:'2026-09-10',lines:qaSome};
const qaOffer3={id:'offer-3',version:1,name:'استقبال المطار — خدمة مستقلة',kind:'service',tripId:'',tripName:'',description:'',validUntil:'',status:'approved',archived:false,pricingId:'p3',updatedAt:'2026-09-09',lines:[{key:'svc',label:'استقبال المطار',unit:'item',currency:'SAR',baseCost:120,basePrice:350,sell:350,profit:230}]};
const qaArchived={...qaOffer2,id:'offer-4',name:'برنامج موسم ماضٍ',archived:true,validUntil:'2025-01-01',updatedAt:'2026-01-01'};
const qaAssign=(id,offer,commission,company)=>({id,offerId:offer.id,offerVersion:offer.version,version:1,companyId:company.id,companyName:company.name,name:offer.name,kind:offer.kind,tripId:offer.tripId,tripName:offer.tripName,description:offer.description,validUntil:offer.validUntil,active:true,expired:false,commission,special:false,updatedAt:offer.updatedAt,lines:offer.lines.map(row=>({...row,commission,netPrice:row.basePrice-commission}))});
const qaCompanies=[{id:'c1',name:'شركة النخبة للسفر',contact:'طرابلس',active:true,allowPricing:true,version:1},{id:'c2',name:'شركة الأفق للسياحة',contact:'بنغازي',active:true,allowPricing:false,version:1}];
const qaAssignments=[qaAssign('a1',qaOffer,120,qaCompanies[0]),qaAssign('a2',qaOffer3,40,qaCompanies[0]),qaAssign('a3',qaOffer,200,qaCompanies[1])];
const qaBoot=()=>{
 const boot={user:{id:'demo',name:qaRole==='company'?'أحمد · شركة النخبة':qaRole==='employee'?'موظف التسعير':'مدير المنظومة',username:'demo',role:qaRole,companyId:qaRole==='company'?'c1':'',permissions:qaRole==='employee'?['viewCost','editPricing']:[]},
  settings:{id:'main',name:'الأولمبي لخدمات الحج والعمرة',version:1,sarPerUsd:3.75,usdToLyd:9.5},
  offers:[qaOffer,qaOffer2,qaOffer3,qaArchived],
  definitions:[...qaTrips,...qaRooms,qaService],
  pricings:[{id:'p1',version:1,name:'قالب العمرة — 13 ليلة',kind:'program',tripId:'t1',tripName:'عمرة رمضان — 13 ليلة',isTemplate:true,input:qaInput,roomIds:qaRooms.map(r=>r.id),definitionsSnapshot:[],result:qaResult,notes:'',updatedAt:'2026-09-12'}],
  companies:qaCompanies,assignments:qaAssignments,
  users:[{id:'u1',name:'مدير الشركة',username:'company.demo',role:'company',companyId:'c1',active:true,version:1}],
  audit:[{at:'2026-09-12T09:14:00.000Z',actorName:'مدير المنظومة',action:'offer.approve'}],
  quotes:[],companyPricings:[],quickDrafts:qaLocalDrafts()};
 if(qaRole==='company'){
  return {user:boot.user,company:{id:'c1',name:'شركة النخبة للسفر',contact:'طرابلس',allowPricing:qaAllowPricing,allowQuickPricing:true},
   settings:{name:boot.settings.name},assignments:qaAssignments.filter(a=>a.companyId==='c1'),quotes:[],
   companyPricings:qaAllowPricing?[{id:'cp1',version:1,name:'حساب عمرة خاص',kind:'program',input:qaInput,rooms:qaRooms,result:qaResult,notes:'',updatedAt:'2026-09-12'}]:[],quickDrafts:[]};
 }
 if(qaRole==='employee'){delete boot.companies;delete boot.assignments;delete boot.users;delete boot.audit;}
 return boot;
};
const qaDemoOnly=()=>{throw Error('معاينة محلية ببيانات تجريبية: الحفظ والنشر والتصدير غير متاحة هنا.');};
const qaRespond=async function(action,payload={}){
 if(action==='bootstrap')return structuredClone(qaBoot());
 if(action==='login')return {token:'PREVIEW_ONLY_TOKEN_0000000000000000',user:qaBoot().user,boot:structuredClone(qaBoot())};
 if(action==='logout')return {ok:true};
 if(action==='pricing.calculate')return {kind:payload.kind,input:payload.input,tripId:payload.tripId,tripName:(qaTrips.find(t=>t.id===payload.tripId)||{}).name||'',roomIds:payload.roomIds,result:payload.kind==='service'?Be().calculateService(payload.input,qaService):Be().calculateProgram(payload.input,qaRooms.filter(r=>(payload.roomIds||[]).includes(r.id)),[qaService])};
 if(action==='quick.calculate')return {kind:'program',input:payload.input,result:Be().calculateProgram(payload.input,payload.rooms||qaRooms.filter(r=>(payload.roomIds||[]).includes(r.id)),[])};
 if(action==='quick.save'){
  const old=qaLocalDrafts().find(row=>row.id===payload.id);
  const sourceRooms=Array.isArray(payload.rooms)&&payload.rooms.length?payload.rooms:qaRooms;
  const pricedRooms=sourceRooms.map(room=>{const extra=payload.input.extraBedCounts?.[room.id]??room.extraBeds,base=payload.input.baseBedCounts?.[room.id]??Math.max(1,room.occupancy);return {...room,occupancy:base+extra,extraBeds:extra};});
  const saved={id:payload.id||crypto.randomUUID(),version:(old?.version||0)+1,quick:true,name:payload.name,notes:payload.notes||'',input:payload.input,roomIds:payload.roomIds||qaRooms.map(row=>row.id),result:Be().calculateProgram(payload.input,pricedRooms,[]),updatedAt:new Date().toISOString()};
  qaSaveLocalDrafts([saved,...qaLocalDrafts().filter(row=>row.id!==saved.id)]);return saved;
 }
 if(action==='quick.delete'){qaSaveLocalDrafts(qaLocalDrafts().filter(row=>row.id!==payload.id));return {ok:true};}
 if(action==='company.pricing.calculate')return {kind:payload.kind,input:payload.input,result:payload.kind==='service'?Be().calculateService(payload.input,{...payload.service,active:true}):Be().calculateProgram(payload.input,payload.rooms,[])};
 if(action==='quote.preview'){
  const lines=(payload.lines||[]).map(input=>Be().quoteLine(input.source,input));
  return {previewHash:'preview',quote:{name:payload.name,customer:payload.customer,lines,totals:Be().totalsByCurrency(lines)}};
 }
 if(action==='export.offer'){const row=qaRole==='company'?qaAssignments[0]:qaOffer;return {...row,kind:'offer',company:qaRole==='company'?'شركة النخبة للسفر':undefined};}
 return qaDemoOnly();
};
/* keep the release-2 interception (login bootstrap, quote preview) working in preview too */
v=async function(action,payload={}){return proObserveApi(action,await qaRespond(action,payload));};
s.token='PREVIEW_ONLY_TOKEN_0000000000000000';
s.tab='quickPricing';
const qaBaseQuickPage=proQuickPage;
proQuickSettings=function(){return qaLocalRates();};
function qaEnsureLocalNav(){const nav=d('.nav'),quick=nav?.querySelector('[data-id="quickPricing"]');if(quick&&!nav.querySelector('[data-local-tab="rates"]'))quick.insertAdjacentHTML('afterend','<button type="button" data-local-tab="rates">إعدادات سعر الصرف</button>');}
function qaRatesPage(){
 const rates=qaLocalRates();s.tab='localRates';
 x('.nav button').forEach(button=>button.classList.toggle('active',button.dataset.localTab==='rates'));
 d('#quick-shortcut')?.classList.remove('is-active');
 d('#content').innerHTML=Y('إعدادات سعر الصرف','تُحفظ على هذا الجهاز وتُستخدم تلقائياً في كل تسعيرة جديدة.')+'<div class="panel rates-page-card"><h3 style="margin-bottom:14px">أسعار الصرف الافتراضية</h3><div class="exchange-settings-body"><label>الريال مقابل الدولار<input type="number" id="local-sar-rate" min="0.0001" step="0.0001" value="'+rates.sarPerUsd+'"></label><label>الدولار مقابل الدينار<input type="number" id="local-usd-rate" min="0.0001" step="0.0001" value="'+rates.usdToLyd+'"></label><button type="button" class="btn primary" data-local-action="save-rates">حفظ أسعار الصرف</button></div><div class="rates-note">عند بدء «تسعيرة جديدة» ستظهر هذه القيم تلقائياً داخل حاسبة التكاليف.</div></div>';
}
proQuickPage=function(){qaBaseQuickPage();
 document.body.classList.add('quick-local-only');
 qaEnsureLocalNav();
 const note=d('.page-head p');if(note)note.textContent='سعر فوري للزبون وحفظ محلي على هذا الجهاز.';
 const promote=d('[data-action="quick.promote"]');if(promote)promote.remove();
 const topbar=d('.topbar');if(topbar)topbar.innerHTML='<span id="quick-local-top-logo" class="quick-local-logo"><img src="'+Ke+'" alt="الأولمبي لخدمات الحج والعمرة"></span><button type="button" class="quick-local-menu" data-action="menu" aria-label="فتح القائمة">☰</button>';
 const customer=d('#quick-prices .cust-view');if(customer&&!customer.querySelector('.quick-customer-brand'))customer.insertAdjacentHTML('afterbegin','<div class="quick-customer-brand"><img src="'+Ke+'" alt="الأولمبي لخدمات الحج والعمرة"></div>');
};
document.addEventListener('focusin',event=>{const input=event.target;if(input.matches?.('input[type="number"]')&&input.value==='0')input.select();},true);

document.addEventListener('click',event=>{const ratesTab=event.target.closest?.('[data-local-tab="rates"]');if(ratesTab){qaRatesPage();return;}const button=event.target.closest?.('[data-local-action="save-rates"]');if(!button)return;const sar=Number(d('#local-sar-rate')?.value),usd=Number(d('#local-usd-rate')?.value);if(!(sar>0&&usd>0)){q('أدخل سعري صرف صحيحين.');return;}localStorage.setItem(qaRatesKey,JSON.stringify({sarPerUsd:sar,usdToLyd:usd}));const sarField=d('[name=q-sarPerUsd]'),usdField=d('[name=q-usdToLyd]');if(sarField){sarField.value=sar;sarField.dispatchEvent(new Event('input',{bubbles:true}));}if(usdField){usdField.value=usd;usdField.dispatchEvent(new Event('input',{bubbles:true}));}q('حُفظت أسعار الصرف وستظهر تلقائياً في كل تسعيرة جديدة.');},true);
const qaIcon=document.createElement('link');qaIcon.rel='icon';qaIcon.href=Ke;document.head.appendChild(qaIcon);

/* UI/UX layer. No change to pricing formulas, API actions, permissions or stored keys. */
let uxExtrasOpen=null,uxBedsOpen=false;
const uxBaseForm=proQuickForm,uxBasePage=proQuickPage,uxBaseRender=proQuickRender;
// Every customer-facing representation uses the current negotiated price.
const uxBasePrices=proQuickPrices;
proQuickPrices=function(view){
  const rows=view.result.results.map((row,index)=>{
    const sell=proQuickExtra.sells[index]!=null?proQuickExtra.sells[index]:row.sell;
    return {...row,sell,profit:sell-row.baseCost};
  });
  return uxBasePrices({...view,result:{...view.result,results:rows}});
};
proQuickSummaryText=function(view){
  return (proShareSubtitle()||'تسعيرة سريعة')+'\nالسعر للفرد بالدينار الليبي\n'+proShareLines(view).map(line=>line.label+': '+line.value).join('\n');
};
function uxAdvanced(title,content,open=false,cls=''){
  const el=document.createElement('details');el.className='ux-advanced '+cls;el.open=open;
  el.innerHTML='<summary>'+title+'</summary><div class="ux-advanced-body"></div>';
  content.forEach(node=>{if(node)el.lastElementChild.appendChild(node);});return el;
}
proQuickForm=function(){
  const template=document.createElement('template');template.innerHTML=uxBaseForm();
  const root=template.content,extras=root.querySelector('.quick-extra'),body=extras?.querySelector('.quick-extra-body');
  root.querySelectorAll('.hotel-card .quick-two label').forEach(label=>{
    const caption=document.createElement('span');caption.className='ux-field-caption';
    while(label.firstChild&&label.firstChild.nodeName!=='INPUT')caption.appendChild(label.firstChild);
    label.prepend(caption);
  });
  const hotel=root.querySelector('.hotel-cards');
  if(hotel)hotel.insertAdjacentHTML('afterbegin','<h3 class="ux-section-head"><span class="ux-section-number">1</span>الإقامة والليالي</h3>');
  const profit=root.querySelector('.quick-strip:not(.hotel-cards)');
  if(profit){profit.classList.add('ux-profit-block');profit.insertAdjacentHTML('afterbegin','<h3 class="ux-section-head"><span class="ux-section-number">2</span>الربح المقترح</h3>');}
  const draft=proQuickState.input||proQuickState.draft?.input||{};
   ['makkahHotelName','madinahHotelName'].forEach(key=>{if(typeof draft[key]==='string')draft[key]=draft[key].replace('إعامر المنار','إعمار المنار').replace('إمار النور','إعمار النور');});
  ['makkah','madinah'].forEach(city=>{
    const label=root.querySelector('[name="q-'+city+'HotelName"]')?.closest('label');
    if(label)label.replaceWith(uxHotelField(city,draft));
    const caption=root.querySelector('[name="q-'+city+'Rate"]')?.closest('label')?.querySelector('.ux-field-caption');
    if(caption&&Object.keys(draft.hotelRoomRates?.[city]||{}).length)caption.textContent='سعر الليلة الافتراضي (SAR)';
  });
  if(body){
    if(uxExtrasOpen===null)uxExtrasOpen=extras.open;
    extras.open=uxExtrasOpen;
    extras.querySelector('.ex-label').textContent=uxExtrasOpen?'طيّ القسم':'فتح القسم';
    const bedRates=body.querySelector('.quick-two'),bedGrid=body.querySelector('.bed-distribution');
    const bed=uxAdvanced('الغرف والأسرّة الإضافية',[bedRates,bedGrid],uxBedsOpen||proRoomManager.adding,'ux-bed-settings');
    bed.dataset.step='0';
    bed.querySelector('summary').innerHTML='<span class="ex-title"><b>الغرف والأسرّة الإضافية</b><small>'+proQuickRooms().length+' أنواع غرف · اضبط الأسرّة عند الحاجة</small></span><span class="ex-side"><span class="ex-label">'+(bed.open?'طيّ القسم':'فتح القسم')+'</span><span class="ex-arrow" aria-hidden="true">▾</span></span>';
    hotel?.after(bed);
    const rateFields=body.querySelector('.quick-two'),rounding=body.querySelector('[name=q-rounding]')?.closest('label');
    [rateFields,rounding].forEach(node=>{
      node?.querySelectorAll('input').forEach(input=>{input.type='hidden';if(input.name==='q-rounding'&&draft.rounding==null)input.value=String(uxSettings().rounding);root.append(input);});
      node?.remove();
    });
    const saved=body.querySelector('.cost-templates');
    if(saved&&!proQuickCostTemplates().length)saved.hidden=true;
  }
  return template.innerHTML;
};
// Group panes by their declared step. Basic costs and profit share one step.
proQuickSyncSteps=function(){
  const panes=x('#quick-form [data-step]');if(!panes.length)return;
  const guided=proQuickState.mode==='guided',names=['الإقامة','التكاليف والربح','إضافات'];
  proQuickState.step=Math.max(0,Math.min(2,proQuickState.step));
  panes.forEach(pane=>pane.hidden=guided&&Number(pane.dataset.step)!==proQuickState.step);
  const head=d('#quick-step-head');
  if(head){head.hidden=!guided;head.innerHTML=guided?'<div class="ux-step-tabs" role="group" aria-label="خطوات التسعير">'+names.map((name,i)=>'<button type="button" data-ux="step" data-value="'+i+'" aria-pressed="'+(i===proQuickState.step)+'">'+(i+1)+' · '+name+'</button>').join('')+'</div><div class="step-index">خطوة '+(proQuickState.step+1)+' من 3</div>':'';}
  const nav=d('#quick-nav');
  if(nav)nav.innerHTML=guided?(proQuickState.step>0?'<button type="button" class="btn" data-pro="quick-step" data-value="-1">السابق</button>':'')+(proQuickState.step<2?'<button type="button" class="btn primary" data-pro="quick-step" data-value="1">التالي</button>':'<button type="button" class="btn primary" data-ux="results">عرض النتائج</button>'):'';
};
function uxResultStatus(){
  const badge=d('#ux-result-state');if(!badge)return;
  let ready=false;try{ready=proQuickCompute().result.results.some(row=>row.baseCost>0);}catch(e){}
  badge.textContent=ready?'يتحدّث تلقائياً مع المدخلات':'أدخل التكاليف لبدء التسعير';badge.classList.toggle('is-ready',ready);
  d('.quick-results')?.classList.toggle('ux-pending-pricing',!ready);
  const customer=proQuickExtra.customer;
  d('.ux-results-head h2').textContent=customer?'أسعار الزبون':'أسعار البيع للفرد';
  d('.ux-results-head p').textContent=customer?'الأسعار النهائية بالدينار الليبي':'كل غرفة بسعر مستقل · الدينار الليبي';
  x('#quick-copy,[data-pro="quick-card"],[data-pro="quick-fb"],[data-pro="quick-customer"]').forEach(button=>{button.disabled=!ready&&!customer;});
  if(!ready)x('.neg-status').forEach(badge=>{badge.textContent='بانتظار التكاليف';});
}
proQuickRender=function(){uxBaseRender();uxResultStatus();};
proQuickPage=function(){
  uxBasePage();
  const modes=d('.quick-modes');
  if(modes){
    modes.querySelector('[data-value=compact]').textContent='عرض مختصر';
    modes.querySelector('[data-value=negotiate]').textContent='تعديل السعر';
    modes.querySelector('[data-value=guided]').textContent='خطوة بخطوة';
    const help={compact:'اقرأ أسعار الغرف بسرعة من دون تفاصيل التفاوض.',negotiate:'عدّل سعر كل غرفة، وتابع التكلفة والربح مباشرة.',guided:'أكمل الإقامة، ثم التكاليف والربح، ثم الإضافات.'};
    modes.insertAdjacentHTML('afterend','<p class="ux-mode-help">'+help[proQuickState.mode]+'</p>');
  }
  const results=d('.quick-results');
  if(results){results.id='ux-results';results.insertAdjacentHTML('afterbegin','<div class="ux-results-head"><h2>أسعار البيع للفرد</h2><p>كل غرفة بسعر مستقل · الدينار الليبي</p><span class="ux-results-state" id="ux-result-state"></span></div>');}
  const inputs=d('.quick-inputs');if(inputs)inputs.id='ux-inputs';
  d('.quick-layout')?.insertAdjacentHTML('afterend','<nav class="ux-mobile-jump" aria-label="التنقل داخل التسعيرة"><button type="button" data-ux="inputs">تعديل المدخلات</button><button type="button" data-ux="results">عرض الأسعار ↓</button></nav>');
  const more=d('.quick-more');if(more)more.hidden=true;
  const reset=d('[data-action="quick.reset"]');if(reset)reset.textContent='+ تسعيرة جديدة';
  if(proQuickExtra.customer){
    d('.quick-layout')?.classList.add('ux-customer-mode');
    x('.quick-modes,.ux-mode-help,.preset-row,[data-action="quick.reset"],.panel.section').forEach(el=>el.hidden=true);
    x('.quick-actions [data-action]').forEach(el=>el.hidden=true);
    const jump=d('.ux-mobile-jump');if(jump)jump.hidden=true;
  }
  uxResultStatus();
};
const uxBaseSummary=proQuickExtrasSummary;
proQuickExtrasSummary=function(){
  uxBaseSummary();
  const details=d('.quick-extra'),label=details?.querySelector('.ex-label');
  if(label)label.textContent=details.open?'طيّ القسم':'فتح القسم';
  const text=d('#quick-extra-sum');
  const input=proQuickInput(),parts=(input.extraItems||[]).filter(item=>item.name||item.amount).map(item=>item.name||'بند تكلفة');
  if(text)text.textContent=parts.length?parts.join(' · ')+' · على كل فرد':'اختياري · أضف النقل الخاص أو الإفطار أو أي بند آخر';
  const total=d('#quick-extra-total'),amount=input.otherLyd;
  if(total)total.innerHTML=amount?'<span class="money"><bdi dir="ltr">+'+c(ne(amount))+'</bdi> <span class="cur">د.ل</span></span>':'';
};
document.addEventListener('toggle',event=>{
  const el=event.target;
  if(el.matches?.('.quick-extra'))uxExtrasOpen=el.open;
  if(el.matches?.('.ux-bed-settings')){uxBedsOpen=el.open;const label=el.querySelector('.ex-label');if(label)label.textContent=el.open?'طيّ القسم':'فتح القسم';}
},true);
function uxScroll(target){
  const el=d(target);if(!el)return;
  el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});
  const heading=el.querySelector('h2,h3')||el;heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-ux]');if(!button)return;
  event.preventDefault();
  if(button.dataset.ux==='inputs')uxScroll('#ux-inputs');
  if(button.dataset.ux==='results')uxScroll('#ux-results');
  if(button.dataset.ux==='step'){proQuickState.step=Number(button.dataset.value);proQuickSyncSteps();d('#quick-step-head [data-value="'+proQuickState.step+'"]')?.focus();}
  if(button.dataset.ux==='reset-confirm'){d('#dialog').close();uxBaseAction('quick.reset','','').catch(Le);}
});
// Keep new cost fields visible after a re-render, and use proper dialogs for naming and reset.
const uxBaseHandle=proHandleAction;
proHandleAction=function(button){
  uxClosePicker();
  if(['quick-extra-add','quick-template-use'].includes(button.dataset.pro))uxExtrasOpen=true;
  if(button.dataset.pro==='quick-room-add-open'){uxExtrasOpen=true;uxBedsOpen=true;}
  return uxBaseHandle(button);
};
const uxBaseAction=Ri;
Ri=async function(action,id,el){
  uxClosePicker();
  if(action==='quick.draft'){
    D('حفظ مسودة التسعيرة','<form id="ux-save-form" class="ux-save-form"><p class="hint">احفظ الأسعار والحقول لتعود إليها لاحقاً على هذا الجهاز.</p><div class="grid"><label class="full">اسم المسودة<input name="draftName" maxlength="120" required value="'+c(proQuickState.draft?.name||'تسعيرة '+new Date().toLocaleDateString('ar-LY'))+'"></label></div><div id="ux-save-error" role="alert"></div><div class="form-actions">'+l('إلغاء','dialog.close')+'<button type="submit" class="btn primary">حفظ المسودة</button></div></form>');
    d('#ux-save-form input')?.select();return;
  }
  if(action==='quick.reset'){
    const input=proQuickInput(),dirty=input.tripName||input.makkahHotelName||input.madinahHotelName||input.makkahRate||input.madinahRate||input.visaUsd||input.ticketLyd||input.transportLyd||input.extraItems.length||proQuickState.draft||Object.keys(proQuickExtra.sells).length;
    if(dirty){D('بدء تسعيرة جديدة','<p>سيتم مسح المدخلات الحالية. احفظ مسودة أولاً إذا أردت الرجوع إليها.</p><div class="form-actions">'+l('الرجوع للتسعيرة','dialog.close')+'<button type="button" class="btn primary" data-ux="reset-confirm">بدء تسعيرة جديدة</button></div>');return;}
  }
  return uxBaseAction(action,id,el);
};
document.addEventListener('submit',async event=>{
  if(event.target.id!=='ux-save-form')return;
  event.preventDefault();event.stopImmediatePropagation();
  const form=event.target,button=form.querySelector('[type=submit]');if(button.disabled)return;
  const name=form.elements.draftName.value.trim();
  if(!name){d('#ux-save-error').textContent='أدخل اسماً للمسودة.';form.elements.draftName.focus();return;}
  button.disabled=true;button.textContent='جارٍ الحفظ…';
  try{
    const saved=await v('quick.save',{id:proQuickState.draft?.id,version:proQuickState.draft?.version,name,notes:JSON.stringify({sells:proQuickExtra.sells}),kind:'program',quick:true,input:proQuickInput(),...proQuickRoomPayload()});
    s.boot.quickDrafts=[saved,...(s.boot.quickDrafts||[]).filter(row=>row.id!==saved.id)];
    proQuickState.draft=saved;proQuickState.input=null;d('#dialog').close();proQuickPage();q('حُفظت المسودة «'+name+'».');
  }catch(error){d('#ux-save-error').textContent=error.message||String(error);}
  finally{if(button.isConnected){button.disabled=false;button.textContent='حفظ المسودة';}}
},true);
// Scrollable data tables are reachable by keyboard; help appears only when needed.
let uxFrame=0;
function uxEnhanceTables(){
  uxFrame=0;
  uxAppObserver.disconnect();uxDialogObserver.disconnect();
  x('.table-wrap').forEach(wrap=>{
    const scroll=wrap.scrollWidth>wrap.clientWidth+2;
    if(scroll){wrap.tabIndex=0;wrap.setAttribute('role','region');wrap.setAttribute('aria-label','جدول بيانات قابل للتمرير أفقياً');}
    else{wrap.removeAttribute('tabindex');wrap.removeAttribute('role');wrap.removeAttribute('aria-label');}
    let hint=wrap.previousElementSibling?.classList.contains('ux-scroll-note')?wrap.previousElementSibling:null;
    if(scroll&&!hint){hint=document.createElement('small');hint.className='ux-scroll-note';hint.textContent='اسحب الجدول أفقياً لرؤية بقية الأعمدة ↔';wrap.before(hint);}
    if(hint)hint.hidden=!scroll;
  });
  x('.nav button.active').forEach(button=>button.setAttribute('aria-current','page'));
  x('.nav button:not(.active)').forEach(button=>button.removeAttribute('aria-current'));
  uxAppObserver.observe(d('#app'),{childList:true,subtree:true});
  uxDialogObserver.observe(d('#dialog'),{childList:true,subtree:true});
}
const uxSchedule=()=>{if(!uxFrame)uxFrame=requestAnimationFrame(uxEnhanceTables);};
const uxTableMutations=records=>{if(records.some(record=>[...record.addedNodes,...record.removedNodes].some(node=>node.nodeType===1&&(node.matches?.('.table-wrap,.nav,table')||node.querySelector?.('.table-wrap,.nav,table')))))uxSchedule();};
const uxAppObserver=new MutationObserver(uxTableMutations),uxDialogObserver=new MutationObserver(uxTableMutations);
uxAppObserver.observe(d('#app'),{childList:true,subtree:true});
uxDialogObserver.observe(d('#dialog'),{childList:true,subtree:true});
window.addEventListener('resize',uxSchedule);

/* Local hotel catalog. Prices remain snapshots inside each quote/draft. */
const UX_HOTELS_KEY='rihla_hotel_catalog_v1';
const uxRoomNames={'1':'فردية','2':'زوجية','3':'ثلاثية','4':'رباعية','5':'خماسية'};
const uxCityNames={makkah:'مكة المكرمة',madinah:'المدينة المنورة'};
const uxCatalogFilter={query:'',city:'all'};
let uxPicker=null,uxPickerIndex=-1,uxSuppressPickerFocus=false;
const UX_DEFAULT_HOTELS=[{"id": "rihla-default-makkah-1", "name": "أمجاد الضيافة", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-1"}, {"id": "rihla-default-makkah-2", "name": "سما الضيافة", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-2"}, {"id": "rihla-default-makkah-3", "name": "سرايا الضيافة", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-3"}, {"id": "rihla-default-makkah-4", "name": "عبير الضيافة", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-4"}, {"id": "rihla-default-makkah-5", "name": "تاج بارك", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-5"}, {"id": "rihla-default-makkah-6", "name": "أبراج الوحدة", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-6"}, {"id": "rihla-default-makkah-7", "name": "أبراج التيسير", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-7"}, {"id": "rihla-default-makkah-8", "name": "أنجم", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-8"}, {"id": "rihla-default-makkah-9", "name": "فيرمونت", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-9"}, {"id": "rihla-default-makkah-10", "name": "سويس أوتيل", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-10"}, {"id": "rihla-default-makkah-11", "name": "رافلز", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-11"}, {"id": "rihla-default-makkah-12", "name": "إعمار جراند", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-12"}, {"id": "rihla-default-makkah-13", "name": "إعمار المنار", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-13"}, {"id": "rihla-default-makkah-14", "name": "إعمار النور", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-14"}, {"id": "rihla-default-makkah-15", "name": "منارة العزيزية", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-15"}, {"id": "rihla-default-makkah-16", "name": "المثابة", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-16"}, {"id": "rihla-default-makkah-17", "name": "أبراج الريان", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-17"}, {"id": "rihla-default-makkah-18", "name": "أبراج الكسوة", "city": "makkah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-makkah-18"}, {"id": "rihla-default-madinah-1", "name": "المنطقة المركزية", "city": "madinah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-madinah-1"}, {"id": "rihla-default-madinah-2", "name": "إعمار إيليت", "city": "madinah", "defaultRate": 0, "extraBedRate": 0, "roomRates": {}, "notes": "", "defaultHotelId": "rihla-default-madinah-2"}];
function uxMergeDefaultHotels(rows){
  const merged=rows.map(row=>({...row}));
  UX_DEFAULT_HOTELS.forEach(seed=>{
    let row=merged.find(value=>value.defaultHotelId===seed.id||value.id===seed.id);
    if(!row)row=merged.find(value=>!value.defaultHotelId&&value.city===seed.city&&proNormalize(value.name)===proNormalize(seed.name));
    if(row)row.defaultHotelId=seed.id;
    else merged.push({...seed,roomRates:{}});
  });
  return merged;
}
function uxHotels(){
  let rows=[];
  try{const value=JSON.parse(localStorage.getItem(UX_HOTELS_KEY)||'[]');if(Array.isArray(value))rows=value.filter(row=>row&&typeof row.id==='string'&&typeof row.name==='string'&&['makkah','madinah'].includes(row.city));}catch(e){}
  rows=rows.map(row=>({...row,name:row.name.replace('إعامر المنار','إعمار المنار').replace('إمار النور','إعمار النور')}));
  return uxMergeDefaultHotels(rows);
}
function uxStoreHotels(rows){
  const current=uxHotels();
  const protectedRows=current.filter(row=>row.defaultHotelId&&!rows.some(value=>value.id===row.id));
  const merged=rows.map(row=>{const previous=current.find(value=>value.id===row.id);return previous?.defaultHotelId?{...row,defaultHotelId:previous.defaultHotelId}:row;});
  localStorage.setItem(UX_HOTELS_KEY,JSON.stringify(uxMergeDefaultHotels([...merged,...protectedRows])));
}
function uxSettings(){const value=qaLocalRates();return {...value,rounding:value.rounding!=null&&value.rounding!==''&&Number.isFinite(Number(value.rounding))&&Number(value.rounding)>=0?Number(value.rounding):1};}
proQuickSettings=function(){return uxSettings();};
const uxOriginalRooms=proQuickRooms;
proQuickRooms=function(){
  return uxOriginalRooms().filter(row=>!(row.localCustom&&Number(row.occupancy)===5&&Number(row.extraBeds||0)===0&&/^(غرفة )?خماسية$/.test(proNormalize(row.name))));
};
const uxOriginalInput=proQuickInput;
proQuickInput=function(){
  const input=uxOriginalInput(),snapshots=proQuickState.input?.hotelRoomRates||proQuickState.draft?.input?.hotelRoomRates||{};
  input.hotelRoomRates=structuredClone(snapshots);input.roomOverrides={};
  proQuickRooms().forEach(room=>{
    const key=String(room.occupancy),override={};
    ['makkah','madinah'].forEach(city=>{const rate=snapshots[city]?.[key];if(rate!=null&&rate!==''&&Number.isFinite(Number(rate)))override[city+'Rate']=Number(rate);});
    if(Object.keys(override).length)input.roomOverrides[room.id]=override;
  });
  return input;
};
function uxHotelField(city,draft){
  const widget=document.createElement('div');widget.className='ux-hotel-picker';widget.dataset.city=city;
  const id='ux-hotel-'+city,selected=draft[city+'HotelId']||'',name=draft[city+'HotelName']||'';
  const snapshot=draft.hotelRoomRates?.[city]||{};
  const rates=Object.entries(snapshot).filter(([key,value])=>uxRoomNames[key]&&value!=null&&value!=='');
  widget.innerHTML='<label for="'+id+'">اسم الفندق</label><div class="ux-hotel-input-wrap"><input id="'+id+'" name="q-'+city+'HotelName" type="text" value="'+c(name)+'" placeholder="ابحث أو اكتب اسم الفندق" autocomplete="off" maxlength="160" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="'+id+'-list"><button type="button" data-ux-hotel="toggle" data-city="'+city+'" aria-label="فتح قائمة فنادق '+uxCityNames[city]+'" tabindex="-1">▾</button></div><input type="hidden" name="q-'+city+'HotelId" value="'+c(selected)+'"><div class="ux-hotel-popover" hidden><div class="ux-hotel-list" id="'+id+'-list" role="listbox" aria-label="فنادق '+uxCityNames[city]+'"></div><button type="button" class="ux-hotel-add" data-ux-hotel="new" data-city="'+city+'">+ تعريف فندق جديد</button></div><small class="ux-hotel-hint">'+(rates.length?'أسعار الفندق مطبّقة لكل نوع غرفة؛ تعديل سعر الليلة يطبّق سعراً موحّداً.':'اختر فندقاً لجلب أسعاره، أو أدخل الاسم والسعر يدوياً.')+'</small>';
  if(rates.length){const summary=document.createElement('div');summary.className='ux-hotel-rate-chips';summary.innerHTML=rates.map(([key,rate])=>'<span>'+uxRoomNames[key]+' <bdi>'+c(ne(Number(rate)))+'</bdi> ر.س</span>').join('');widget.append(summary);}
  return widget;
}
function uxClosePicker(){
  if(!uxPicker)return;
  uxPicker.querySelector('.ux-hotel-popover').hidden=true;
  const input=uxPicker.querySelector('[role=combobox]');input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');
  uxPicker=null;uxPickerIndex=-1;
}
function uxOpenPicker(widget,query=''){
  if(uxPicker&&uxPicker!==widget)uxClosePicker();uxPicker=widget;
  const city=widget.dataset.city,list=widget.querySelector('.ux-hotel-list'),input=widget.querySelector('[role=combobox]');
  const normalized=proNormalize(query),selected=widget.querySelector('[type=hidden]').value;
  const rows=uxHotels().filter(row=>row.city===city&&(!normalized||proNormalize(row.name).includes(normalized))).sort((a,b)=>a.name.localeCompare(b.name,'ar'));
  list.innerHTML=(rows.length?rows.map((row,index)=>'<button type="button" class="ux-hotel-option" role="option" id="'+input.id+'-option-'+index+'" aria-selected="'+(selected===row.id)+'" data-ux-hotel="select" data-id="'+c(row.id)+'"><span><b>'+c(row.name)+'</b><small>'+c(uxCityNames[row.city])+'</small></span><span><bdi>'+c(ne(Number(row.defaultRate)||0))+'</bdi><small>ر.س / ليلة افتراضياً</small></span></button>').join(''):'<p class="ux-hotel-no-results">'+(uxHotels().some(row=>row.city===city)?'لا توجد فنادق تطابق البحث.':'لم تُعرّف فنادق لهذه المدينة بعد.')+'</p>')+'<button type="button" class="ux-hotel-option ux-hotel-manual" role="option" id="'+input.id+'-manual" aria-selected="'+(!selected)+'" data-ux-hotel="manual">إدخال الاسم والسعر يدوياً</button>';
  widget.querySelector('.ux-hotel-popover').hidden=false;input.setAttribute('aria-expanded','true');uxPickerIndex=-1;
}
function uxSelectHotel(city,hotel){
  const input=proQuickInput(),snapshots={...input.hotelRoomRates};
  if(hotel){input[city+'HotelId']=hotel.id;input[city+'HotelName']=hotel.name;input[city+'Rate']=Number(hotel.defaultRate)||0;input[city+'ExtraBed']=Number(hotel.extraBedRate)||0;snapshots[city]={...hotel.roomRates};}
  else{input[city+'HotelId']='';delete snapshots[city];}
  input.hotelRoomRates=snapshots;proQuickState.input=input;
  uxClosePicker();proQuickPage();
  uxSuppressPickerFocus=true;d('[name="q-'+city+'HotelName"]')?.focus();
  if(hotel)q('تم جلب أسعار «'+hotel.name+'» للغرف تلقائياً.');
}
const uxOriginalNav=qaEnsureLocalNav;
qaEnsureLocalNav=function(){
  uxOriginalNav();const nav=d('.nav');
  if(nav&&!nav.querySelector('[data-local-tab=hotels]'))nav.querySelector('[data-id=quickPricing]')?.insertAdjacentHTML('afterend','<button type="button" data-local-tab="hotels">فنادق مكة والمدينة</button>');
};
function uxLocalRoute(tab){
  uxClosePicker();if(document.body.classList.contains('drawer-open'))proDrawer(false);
  s.tab=tab;qaEnsureLocalNav();
  x('.nav button').forEach(button=>{const active=button.dataset.localTab===(tab==='localHotels'?'hotels':'rates');button.classList.toggle('active',active);if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});
  d('#quick-shortcut')?.classList.remove('is-active');
}
function uxHotelCard(row){
  const rates=Object.entries(uxRoomNames).map(([key,name])=>'<span><small>'+name+'</small><b><bdi>'+ne(Number(row.roomRates?.[key]??row.defaultRate)||0)+'</bdi><small> ر.س</small></b></span>').join('');
  return '<article class="ux-hotel-card"><div class="ux-hotel-card-head"><div><span class="badge gold">'+uxCityNames[row.city]+'</span><h2>'+c(row.name)+'</h2></div><div class="inline"><button type="button" class="btn small" data-ux-hotel="edit" data-id="'+c(row.id)+'">تعديل</button>'+(row.defaultHotelId?'<span class="badge">فندق افتراضي · قابل للتعديل</span>':'<button type="button" class="btn small danger" data-ux-hotel="delete" data-id="'+c(row.id)+'">حذف</button>')+'</div></div><p class="ux-hotel-card-note">سعر الغرفة لليلة · ريال سعودي</p><div class="ux-hotel-room-prices">'+rates+'</div><div class="ux-hotel-card-foot"><span>السعر الافتراضي: <bdi>'+ne(Number(row.defaultRate)||0)+'</bdi> ر.س</span><span>السرير الإضافي: <bdi>'+ne(Number(row.extraBedRate)||0)+'</bdi> ر.س / ليلة</span></div>'+(row.notes?'<p class="ux-hotel-notes">'+c(row.notes)+'</p>':'')+'</article>';
}
function uxRenderHotelCatalog(){
  const rows=uxHotels().filter(row=>(uxCatalogFilter.city==='all'||row.city===uxCatalogFilter.city)&&(!uxCatalogFilter.query||proNormalize(row.name).includes(proNormalize(uxCatalogFilter.query)))).sort((a,b)=>a.name.localeCompare(b.name,'ar'));
  d('#ux-hotel-count').textContent=rows.length+' فندق';
  d('#ux-hotel-results').innerHTML=rows.length?'<div class="ux-hotel-grid">'+rows.map(uxHotelCard).join('')+'</div>':'<div class="empty"><strong>لا توجد فنادق '+(uxHotels().length?'مطابقة':'محفوظة')+'</strong><p>'+(uxHotels().length?'غيّر البحث أو المدينة لعرض بقية الفنادق.':'عرّف الفندق وأسعار غرفه ليظهر في قائمة التسعير الخاصة بمدينته.')+'</p><button type="button" class="btn primary" data-ux-hotel="new">+ تعريف فندق</button></div>';
  x('[data-ux-hotel=city]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.city===uxCatalogFilter.city)));
}
function uxHotelsPage(){
  uxLocalRoute('localHotels');
  d('#content').innerHTML=Y('فنادق مكة والمدينة','عرّف الفنادق وأسعار الغرف لكل ليلة. تُحفظ التعريفات على هذا الجهاز وتظهر في التسعير.', '<button type="button" class="btn primary" data-ux-hotel="new">+ تعريف فندق</button>')+'<div class="panel ux-hotel-catalog"><div class="ux-hotel-catalog-toolbar"><label for="ux-hotel-search">البحث عن فندق<input type="search" id="ux-hotel-search" value="'+c(uxCatalogFilter.query)+'" placeholder="اكتب اسم الفندق…"></label><div class="ux-city-tabs" role="group" aria-label="تصفية حسب المدينة">'+[['all','كل الفنادق'],['makkah','مكة'],['madinah','المدينة']].map(([id,name])=>'<button type="button" data-ux-hotel="city" data-city="'+id+'" aria-pressed="'+(uxCatalogFilter.city===id)+'">'+name+'</button>').join('')+'</div></div><div class="result-summary"><strong id="ux-hotel-count"></strong><span>جميع الأسعار بالريال السعودي لكل غرفة / ليلة</span></div><div id="ux-hotel-results"></div></div>';
  uxRenderHotelCatalog();
}
function uxHotelDialog(row={},origin=''){
  D(row.id?'تعديل الفندق وأسعاره':'تعريف فندق جديد','<form id="ux-hotel-form" data-id="'+c(row.id||'')+'" data-origin="'+c(origin)+'"><p class="hint">السعر للغرفة كاملة لكل ليلة بالريال السعودي. يُستخدم السعر الافتراضي لأي نوع غرفة لم تحدد له سعراً.</p><div class="grid ux-hotel-form-grid"><label>اسم الفندق<input name="hotelName" maxlength="160" required value="'+c(row.name||'')+'" placeholder="مثال: فندق الصفوة"></label><label>المدينة<select name="hotelCity">'+[['makkah','مكة المكرمة'],['madinah','المدينة المنورة']].map(([id,name])=>'<option value="'+id+'" '+((row.city||origin||'makkah')===id?'selected':'')+'>'+name+'</option>').join('')+'</select></label><label>سعر الغرفة الافتراضي / ليلة (SAR)<input name="defaultRate" type="number" min="0" max="1000000000" step="0.001" inputmode="decimal" required value="'+c(row.defaultRate??0)+'"></label><label>سعر السرير الإضافي / ليلة (SAR)<input name="extraBedRate" type="number" min="0" max="1000000000" step="0.001" inputmode="decimal" required value="'+c(row.extraBedRate??0)+'"></label></div><section class="ux-hotel-specific"><h3>أسعار الغرف حسب النوع</h3><p class="hint">اترك الحقل فارغاً لاستخدام السعر الافتراضي. السعر هنا للغرفة كاملة، ويقسمه التسعير على عدد النزلاء.</p><div class="ux-hotel-specific-grid">'+Object.entries(uxRoomNames).map(([key,name])=>'<label>'+name+' · '+key+' أسِرّة<input name="roomRate'+key+'" type="number" min="0" max="1000000000" step="0.001" inputmode="decimal" value="'+c(row.roomRates?.[key]??'')+'" placeholder="السعر الافتراضي"></label>').join('')+'</div></section><label>ملاحظات (اختياري)<textarea name="hotelNotes" maxlength="1000" rows="2">'+c(row.notes||'')+'</textarea></label><div id="ux-hotel-error" class="ux-form-error" role="alert"></div><div class="form-actions">'+l('إلغاء','dialog.close')+'<button type="submit" class="btn primary">حفظ الفندق والأسعار</button></div></form>');
  d('#ux-hotel-form [name=hotelName]')?.focus();
}
qaRatesPage=function(){
  uxLocalRoute('localRates');const rates=uxSettings();
  d('#content').innerHTML=Y('إعدادات سعر الصرف','أسعار الصرف وتقريب سعر البيع، بإعدادات موحّدة تُحفظ على هذا الجهاز وتُطبّق على التسعيرة الحالية والجديدة.')+'<form id="ux-settings-form" class="panel rates-page-card"><h3>أسعار الصرف الافتراضية</h3><div class="grid ux-settings-grid"><label>الريال مقابل الدولار<input type="number" name="sarPerUsd" id="local-sar-rate" min="0.0001" max="1000000" step="0.0001" required inputmode="decimal" value="'+c(rates.sarPerUsd)+'"><small>عدد الريالات السعودية لكل دولار أمريكي</small></label><label>الدولار مقابل الدينار<input type="number" name="usdToLyd" id="local-usd-rate" min="0.0001" max="1000000" step="0.0001" required inputmode="decimal" value="'+c(rates.usdToLyd)+'"><small>عدد الدنانير الليبية لكل دولار أمريكي</small></label><label class="full">التقريب لأقرب (د.ل)<input type="number" name="rounding" id="local-rounding" min="0" max="1000000" step="0.001" required inputmode="decimal" value="'+c(rates.rounding)+'"><small>مثال: 5 لتقريب سعر البيع لأقرب 5 دنانير. أدخل 0 لتعطيل التقريب.</small></label></div><div id="ux-settings-error" class="ux-form-error" role="alert"></div><div class="form-actions"><button type="submit" class="btn primary">حفظ الإعدادات وتطبيقها</button></div><p class="rates-note">تُستعاد المسودات المحفوظة بأسعار الصرف والتقريب التي حُفظت معها.</p></form>';
};
document.addEventListener('click',event=>{
  const tab=event.target.closest('[data-local-tab=hotels]');if(tab){uxHotelsPage();return;}
  const button=event.target.closest('[data-ux-hotel]');
  if(!button){if(uxPicker&&!uxPicker.contains(event.target))uxClosePicker();return;}
  event.preventDefault();
  const action=button.dataset.uxHotel,widget=button.closest('.ux-hotel-picker'),city=widget?.dataset.city||button.dataset.city;
  if(action==='toggle'){if(uxPicker===widget){uxClosePicker();}else{uxOpenPicker(widget);uxSuppressPickerFocus=true;widget.querySelector('[role=combobox]').focus();}return;}
  if(action==='select'){const hotel=uxHotels().find(row=>row.id===button.dataset.id);if(hotel&&hotel.city===city)uxSelectHotel(city,hotel);return;}
  if(action==='manual'){uxSelectHotel(city,null);return;}
  if(action==='new'){uxClosePicker();uxHotelDialog({city:city==='all'?'makkah':city},d('#quick-form')?city:'');return;}
  if(action==='edit'){const row=uxHotels().find(row=>row.id===button.dataset.id);if(row)uxHotelDialog(row);return;}
  if(action==='city'){uxCatalogFilter.city=city;uxRenderHotelCatalog();return;}
  if(action==='delete'){
    const row=uxHotels().find(row=>row.id===button.dataset.id);if(!row)return;
    if(row.defaultHotelId){q('الفنادق الافتراضية قابلة للتعديل ولا تقبل الحذف.');return;}
    D('حذف تعريف الفندق','<p>هل تريد حذف «'+c(row.name)+'» من قائمة الفنادق؟</p><p class="hint">تبقى الأسعار في المسودات المحفوظة كما هي.</p><div class="form-actions">'+l('إلغاء','dialog.close')+'<button type="button" class="btn danger" data-ux-hotel="delete-confirm" data-id="'+c(row.id)+'">حذف الفندق</button></div>');return;
  }
  if(action==='delete-confirm'){
    if(uxHotels().find(row=>row.id===button.dataset.id)?.defaultHotelId){q('الفنادق الافتراضية قابلة للتعديل ولا تقبل الحذف.');return;}
    try{uxStoreHotels(uxHotels().filter(row=>row.id!==button.dataset.id));d('#dialog').close();uxRenderHotelCatalog();q('حُذف تعريف الفندق.');}catch(e){Le(e);}return;
  }
});
document.addEventListener('focusin',event=>{
  if(!event.target.matches?.('.ux-hotel-picker [role=combobox]'))return;
  if(uxSuppressPickerFocus){uxSuppressPickerFocus=false;return;}
  uxOpenPicker(event.target.closest('.ux-hotel-picker'));
});
document.addEventListener('input',event=>{
  const input=event.target;
  if(input.id==='ux-hotel-search'){uxCatalogFilter.query=input.value;uxRenderHotelCatalog();return;}
  const widget=input.closest('.ux-hotel-picker');
  if(widget&&input.matches('[role=combobox]')){
    const city=widget.dataset.city;widget.querySelector('[type=hidden]').value='';
    const state=proQuickState.input||proQuickInput();state.hotelRoomRates={...(state.hotelRoomRates||{})};delete state.hotelRoomRates[city];proQuickState.input=state;
    widget.querySelector('.ux-hotel-rate-chips')?.remove();widget.querySelector('.ux-hotel-hint').textContent='اختر نتيجة لجلب أسعارها، أو أدخل السعر يدوياً.';
    uxOpenPicker(widget,input.value);return;
  }
  if(input.name==='q-makkahRate'||input.name==='q-madinahRate'){
    const city=input.name.includes('makkah')?'makkah':'madinah',widget=d('.ux-hotel-picker[data-city='+city+']');
    if(widget){widget.querySelector('[type=hidden]').value='';widget.querySelector('.ux-hotel-rate-chips')?.remove();widget.querySelector('.ux-hotel-hint').textContent='سعر يدوي موحّد لكل أنواع الغرف.';}
    const caption=input.closest('label')?.querySelector('.ux-field-caption');if(caption)caption.textContent='سعر الغرفة / الليلة (SAR)';
    const state=proQuickState.input||proQuickInput();state.hotelRoomRates={...(state.hotelRoomRates||{})};delete state.hotelRoomRates[city];proQuickState.input=state;
  }
},true);
document.addEventListener('keydown',event=>{
  if(!event.target.matches?.('.ux-hotel-picker [role=combobox]'))return;
  const widget=event.target.closest('.ux-hotel-picker');
  if(event.key==='Escape'){event.preventDefault();uxClosePicker();return;}
  if(event.key==='Tab'){uxClosePicker();return;}
  if(!['ArrowDown','ArrowUp','Enter','Home','End'].includes(event.key))return;
  if(uxPicker!==widget){if(event.key==='Enter')return;uxOpenPicker(widget);}
  const options=[...widget.querySelectorAll('[role=option]')];if(!options.length)return;
  if(event.key==='Enter'){event.preventDefault();options[uxPickerIndex<0?0:uxPickerIndex]?.click();return;}
  event.preventDefault();
  uxPickerIndex=event.key==='Home'?0:event.key==='End'?options.length-1:event.key==='ArrowDown'?(uxPickerIndex+1)%options.length:uxPickerIndex<0?options.length-1:(uxPickerIndex-1+options.length)%options.length;
  options.forEach((option,index)=>option.classList.toggle('is-focused',index===uxPickerIndex));
  event.target.setAttribute('aria-activedescendant',options[uxPickerIndex].id);options[uxPickerIndex].scrollIntoView({block:'nearest'});
});
document.addEventListener('submit',event=>{
  const form=event.target;if(!['ux-hotel-form','ux-settings-form'].includes(form.id))return;
  event.preventDefault();event.stopImmediatePropagation();
  const error=d(form.id==='ux-hotel-form'?'#ux-hotel-error':'#ux-settings-error');error.textContent='';
  try{
    const money=name=>{const value=form.elements[name].value;if(value.trim()==='')return null;const number=Number(value);if(!Number.isFinite(number)||number<0||number>1e9)throw Error('أدخل قيمة رقمية صحيحة وغير سالبة.');return number;};
    if(form.id==='ux-settings-form'){
      const rates={sarPerUsd:money('sarPerUsd'),usdToLyd:money('usdToLyd'),rounding:money('rounding')};
      if(!(rates.sarPerUsd>0&&rates.usdToLyd>0)||rates.rounding==null)throw Error('أدخل أسعار صرف أكبر من صفر، والتقريب صفراً أو قيمة موجبة.');
      localStorage.setItem(qaRatesKey,JSON.stringify(rates));if(proQuickState.input)proQuickState.input={...proQuickState.input,...rates};
      q('حُفظت أسعار الصرف والتقريب وطُبّقت على التسعيرة الحالية.');return;
    }
    const name=form.elements.hotelName.value.trim(),city=form.elements.hotelCity.value;
    if(!name)throw Error('أدخل اسم الفندق.');
    const rows=uxHotels(),id=form.dataset.id||'hotel-'+crypto.randomUUID();
    if(rows.some(row=>row.id!==id&&row.city===city&&proNormalize(row.name)===proNormalize(name)))throw Error('يوجد فندق بهذا الاسم في المدينة نفسها.');
    const row={id,name,city,defaultRate:money('defaultRate')??0,extraBedRate:money('extraBedRate')??0,roomRates:Object.fromEntries(Object.keys(uxRoomNames).map(key=>[key,money('roomRate'+key)]).filter(([key,value])=>value!==null)),notes:form.elements.hotelNotes.value.trim(),updatedAt:new Date().toISOString()};
    uxStoreHotels([row,...rows.filter(value=>value.id!==id)]);const origin=form.dataset.origin;d('#dialog').close();
    if(origin&&d('#quick-form')&&origin===city)uxSelectHotel(origin,row);else if(d('#quick-form')){proQuickState.input=proQuickInput();proQuickPage();}else uxHotelsPage();
    q('حُفظ الفندق وأسعار غرفه.');
  }catch(e){error.textContent=e.message||String(e);}
},true);

s.token?z().catch(e=>{ce(),Le(e)}):ce();})();
