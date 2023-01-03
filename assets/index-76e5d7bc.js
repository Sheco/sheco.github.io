(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=l(a);fetch(a.href,i)}})();function B(){}const yt=t=>t;function Jt(t,e){for(const l in e)t[l]=e[l];return t}function wt(t){return t()}function Qe(){return Object.create(null)}function ue(t){t.forEach(wt)}function he(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function It(t){return Object.keys(t).length===0}function Ut(t,...e){if(t==null)return B;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function Ve(t,e,l){t.$$.on_destroy.push(Ut(e,l))}function $t(t,e,l,n){if(t){const a=jt(t,e,l,n);return t[0](a)}}function jt(t,e,l,n){return t[1]&&n?Jt(l.ctx.slice(),t[1](n(e))):l.ctx}function Pt(t,e,l,n){if(t[2]&&n){const a=t[2](n(l));if(e.dirty===void 0)return a;if(typeof a=="object"){const i=[],s=Math.max(e.dirty.length,a.length);for(let r=0;r<s;r+=1)i[r]=e.dirty[r]|a[r];return i}return e.dirty|a}return e.dirty}function qt(t,e,l,n,a,i){if(a){const s=jt(e,l,n,i);t.p(s,a)}}function Ct(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}const Mt=typeof window<"u";let St=Mt?()=>window.performance.now():()=>Date.now(),Le=Mt?t=>requestAnimationFrame(t):B;const oe=new Set;function Et(t){oe.forEach(e=>{e.c(t)||(oe.delete(e),e.f())}),oe.size!==0&&Le(Et)}function Nt(t){let e;return oe.size===0&&Le(Et),{promise:new Promise(l=>{oe.add(e={c:t,f:l})}),abort(){oe.delete(e)}}}function u(t,e){t.appendChild(e)}function Tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Gt(t){const e=_("style");return Kt(Tt(t),e),e.sheet}function Kt(t,e){return u(t.head||t,e),e.sheet}function O(t,e,l){t.insertBefore(e,l||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function me(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function _(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function S(){return T(" ")}function Ot(){return T("")}function de(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function p(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Qt(t){return Array.from(t.childNodes)}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}function Rt(t,e,{bubbles:l=!1,cancelable:n=!1}={}){const a=document.createEvent("CustomEvent");return a.initCustomEvent(t,l,n,e),a}const Pe=new Map;let qe=0;function Vt(t){let e=5381,l=t.length;for(;l--;)e=(e<<5)-e^t.charCodeAt(l);return e>>>0}function Yt(t,e){const l={stylesheet:Gt(e),rules:{}};return Pe.set(t,l),l}function zt(t,e,l,n,a,i,s,r=0){const c=16.666/n;let o=`{
`;for(let E=0;E<=1;E+=c){const N=e+(l-e)*i(E);o+=E*100+`%{${s(N,1-N)}}
`}const m=o+`100% {${s(l,1-l)}}
}`,f=`__svelte_${Vt(m)}_${r}`,d=Tt(t),{stylesheet:h,rules:b}=Pe.get(d)||Yt(d,t);b[f]||(b[f]=!0,h.insertRule(`@keyframes ${f} ${m}`,h.cssRules.length));const M=t.style.animation||"";return t.style.animation=`${M?`${M}, `:""}${f} ${n}ms linear ${a}ms 1 both`,qe+=1,f}function Oe(t,e){const l=(t.style.animation||"").split(", "),n=l.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),a=l.length-n.length;a&&(t.style.animation=n.join(", "),qe-=a,qe||Xt())}function Xt(){Le(()=>{qe||(Pe.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),Pe.clear())})}let ve;function be(t){ve=t}function Zt(){if(!ve)throw new Error("Function called outside component initialization");return ve}function Ae(){const t=Zt();return(e,l,{cancelable:n=!1}={})=>{const a=t.$$.callbacks[e];if(a){const i=Rt(e,l,{cancelable:n});return a.slice().forEach(s=>{s.call(t,i)}),!i.defaultPrevented}return!0}}const ge=[],Re=[],$e=[],ze=[],xt=Promise.resolve();let Be=!1;function el(){Be||(Be=!0,xt.then(Bt))}function fe(t){$e.push(t)}function tl(t){ze.push(t)}const Ne=new Set;let ye=0;function Bt(){const t=ve;do{for(;ye<ge.length;){const e=ge[ye];ye++,be(e),ll(e.$$)}for(be(null),ge.length=0,ye=0;Re.length;)Re.pop()();for(let e=0;e<$e.length;e+=1){const l=$e[e];Ne.has(l)||(Ne.add(l),l())}$e.length=0}while(ge.length);for(;ze.length;)ze.pop()();Be=!1,Ne.clear(),be(t)}function ll(t){if(t.fragment!==null){t.update(),ue(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}let pe;function Lt(){return pe||(pe=Promise.resolve(),pe.then(()=>{pe=null})),pe}function Ce(t,e,l){t.dispatchEvent(Rt(`${e?"intro":"outro"}${l}`))}const je=new Set;let te;function Y(){te={r:0,c:[],p:te}}function X(){te.r||ue(te.c),te=te.p}function P(t,e){t&&t.i&&(je.delete(t),t.i(e))}function z(t,e,l,n){if(t&&t.o){if(je.has(t))return;je.add(t),te.c.push(()=>{je.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}const At={duration:0};function nl(t,e,l){const n={direction:"in"};let a=e(t,l,n),i=!1,s,r,c=0;function o(){s&&Oe(t,s)}function m(){const{delay:d=0,duration:h=300,easing:b=yt,tick:M=B,css:E}=a||At;E&&(s=zt(t,0,1,h,d,b,E,c++)),M(0,1);const N=St()+d,j=N+h;r&&r.abort(),i=!0,fe(()=>Ce(t,!0,"start")),r=Nt(w=>{if(i){if(w>=j)return M(1,0),Ce(t,!0,"end"),o(),i=!1;if(w>=N){const R=b((w-N)/h);M(R,1-R)}}return i})}let f=!1;return{start(){f||(f=!0,Oe(t),he(a)?(a=a(n),Lt().then(m)):m())},invalidate(){f=!1},end(){i&&(o(),i=!1)}}}function il(t,e,l){const n={direction:"out"};let a=e(t,l,n),i=!0,s;const r=te;r.r+=1;function c(){const{delay:o=0,duration:m=300,easing:f=yt,tick:d=B,css:h}=a||At;h&&(s=zt(t,1,0,m,o,f,h));const b=St()+o,M=b+m;fe(()=>Ce(t,!1,"start")),Nt(E=>{if(i){if(E>=M)return d(0,1),Ce(t,!1,"end"),--r.r||ue(r.c),!1;if(E>=b){const N=f((E-b)/m);d(1-N,N)}}return i})}return he(a)?Lt().then(()=>{a=a(n),c()}):c(),{end(o){o&&a.tick&&a.tick(1,0),i&&(s&&Oe(t,s),i=!1)}}}function al(t,e,l,n){const a=t.$$.props[e];a!==void 0&&(t.$$.bound[a]=l,n===void 0&&l(t.$$.ctx[a]))}function K(t){t&&t.c()}function U(t,e,l,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,l),n||fe(()=>{const s=t.$$.on_mount.map(wt).filter(he);t.$$.on_destroy?t.$$.on_destroy.push(...s):ue(s),t.$$.on_mount=[]}),i.forEach(fe)}function G(t,e){const l=t.$$;l.fragment!==null&&(ue(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function rl(t,e){t.$$.dirty[0]===-1&&(ge.push(t),el(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,l,n,a,i,s,r=[-1]){const c=ve;be(t);const o=t.$$={fragment:null,ctx:[],props:i,update:B,not_equal:a,bound:Qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Qe(),dirty:r,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let m=!1;if(o.ctx=l?l(t,e.props||{},(f,d,...h)=>{const b=h.length?h[0]:d;return o.ctx&&a(o.ctx[f],o.ctx[f]=b)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](b),m&&rl(t,f)),d}):[],o.update(),m=!0,ue(o.before_update),o.fragment=n?n(o.ctx):!1,e.target){if(e.hydrate){const f=Qt(e.target);o.fragment&&o.fragment.l(f),f.forEach(C)}else o.fragment&&o.fragment.c();e.intro&&P(t.$$.fragment),U(t,e.target,e.anchor,e.customElement),Bt()}be(c)}class x{$destroy(){G(this,1),this.$destroy=B}$on(e,l){if(!he(l))return B;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const a=n.indexOf(l);a!==-1&&n.splice(a,1)}}$set(e){this.$$set&&!It(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function sl(t){const e=t-1;return e*e*e+1}function Ye(t,{delay:e=0,duration:l=400,easing:n=sl}={}){const a=getComputedStyle(t),i=+a.opacity,s=parseFloat(a.height),r=parseFloat(a.paddingTop),c=parseFloat(a.paddingBottom),o=parseFloat(a.marginTop),m=parseFloat(a.marginBottom),f=parseFloat(a.borderTopWidth),d=parseFloat(a.borderBottomWidth);return{delay:e,duration:l,easing:n,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*i};height: ${h*s}px;padding-top: ${h*r}px;padding-bottom: ${h*c}px;margin-top: ${h*o}px;margin-bottom: ${h*m}px;border-top-width: ${h*f}px;border-bottom-width: ${h*d}px;`}}function ol(t){let e;return{c(){e=T("😁")},m(l,n){O(l,e,n)},d(l){l&&C(e)}}}function cl(t){let e;return{c(){e=T("😃")},m(l,n){O(l,e,n)},d(l){l&&C(e)}}}function fl(t){let e;return{c(){e=T("🙂")},m(l,n){O(l,e,n)},d(l){l&&C(e)}}}function ul(t){let e;function l(i,s){if(i[0]==0)return fl;if(i[0]==1)return cl;if(i[0]==2)return ol}let n=l(t),a=n&&n(t);return{c(){a&&a.c(),e=Ot()},m(i,s){a&&a.m(i,s),O(i,e,s)},p(i,[s]){n!==(n=l(i))&&(a&&a.d(1),a=n&&n(i),a&&(a.c(),a.m(e.parentNode,e)))},i:B,o:B,d(i){a&&a.d(i),i&&C(e)}}}function hl(t,e,l){let{amount:n=2}=e;return t.$$set=a=>{"amount"in a&&l(0,n=a.amount)},[n]}class ml extends x{constructor(e){super(),Z(this,e,hl,ul,Q,{amount:0})}}function Xe(t,e,l){const n=t.slice();return n[3]=e[l],n}function Ze(t){let e,l,n,a,i=t[3].base.name+"",s,r,c,o=t[3].level+"",m,f,d;return n=new ml({props:{amount:t[3].affinity}}),{c(){e=_("tr"),l=_("td"),K(n.$$.fragment),a=S(),s=T(i),r=S(),c=_("td"),m=T(o),f=S()},m(h,b){O(h,e,b),u(e,l),U(n,l,null),u(l,a),u(l,s),u(e,r),u(e,c),u(c,m),u(e,f),d=!0},p(h,b){const M={};b&1&&(M.amount=h[3].affinity),n.$set(M),(!d||b&1)&&i!==(i=h[3].base.name+"")&&A(s,i),(!d||b&1)&&o!==(o=h[3].level+"")&&A(m,o)},i(h){d||(P(n.$$.fragment,h),d=!0)},o(h){z(n.$$.fragment,h),d=!1},d(h){h&&C(e),G(n)}}}function dl(t){let e,l,n,a=t[0].name+"",i,s,r,c=t[0].description+"",o,m,f,d,h,b,M,E,N=t[0].skills,j=[];for(let g=0;g<N.length;g+=1)j[g]=Ze(Xe(t,N,g));const w=g=>z(j[g],1,1,()=>{j[g]=null}),R=t[2].default,y=$t(R,t,t[1],null);return{c(){e=_("div"),l=_("div"),n=_("h5"),i=T(a),s=S(),r=_("h6"),o=T(c),m=S(),f=_("div"),d=_("table");for(let g=0;g<j.length;g+=1)j[g].c();h=S(),y&&y.c(),p(n,"class","card-title"),p(r,"class","card-subtitle mb-2"),p(d,"class","table"),p(f,"class","card-text"),p(l,"class","card-body"),p(e,"class","card window")},m(g,q){O(g,e,q),u(e,l),u(l,n),u(n,i),u(l,s),u(l,r),u(r,o),u(l,m),u(l,f),u(f,d);for(let v=0;v<j.length;v+=1)j[v].m(d,null);u(l,h),y&&y.m(l,null),E=!0},p(g,[q]){if((!E||q&1)&&a!==(a=g[0].name+"")&&A(i,a),(!E||q&1)&&c!==(c=g[0].description+"")&&A(o,c),q&1){N=g[0].skills;let v;for(v=0;v<N.length;v+=1){const W=Xe(g,N,v);j[v]?(j[v].p(W,q),P(j[v],1)):(j[v]=Ze(W),j[v].c(),P(j[v],1),j[v].m(d,null))}for(Y(),v=N.length;v<j.length;v+=1)w(v);X()}y&&y.p&&(!E||q&2)&&qt(y,R,g,g[1],E?Pt(R,g[1],q,null):Ct(g[1]),null)},i(g){if(!E){for(let q=0;q<N.length;q+=1)P(j[q]);P(y,g),fe(()=>{M&&M.end(1),b=nl(e,Ye,{}),b.start()}),E=!0}},o(g){j=j.filter(Boolean);for(let q=0;q<j.length;q+=1)z(j[q]);z(y,g),b&&b.invalidate(),M=il(e,Ye,{}),E=!1},d(g){g&&C(e),me(j,g),y&&y.d(g),g&&M&&M.end()}}}function _l(t,e,l){let{$$slots:n={},$$scope:a}=e,{char:i}=e;return t.$$set=s=>{"char"in s&&l(0,i=s.char),"$$scope"in s&&l(1,a=s.$$scope)},[i,a,n]}class Wt extends x{constructor(e){super(),Z(this,e,_l,dl,Q,{char:0})}}let $={javascript:{id:"javascript",name:"Javascript",category:"programming_language",mental_health:-3,physical_health:-1},php:{id:"php",name:"PHP",category:"programming_language",mental_health:-3,physical_health:-1},python:{id:"python",name:"Python",category:"programming_language",mental_health:-3,physical_health:-1},html:{id:"html",name:"HTML",category:"frontend_skill",mental_health:-3,physical_health:-1},css:{id:"css",name:"CSS",category:"frontend_skill",mental_health:-3,physical_health:-1},restapi:{id:"restapi",name:"Rest API",category:"backend_skill",mental_health:-3,physical_health:-1},mysql:{id:"mysql",name:"MySQL",category:"backend_skill",mental_health:-3,physical_health:-1},mongodb:{id:"mongodb",name:"MongoDB",category:"backend_skill",mental_health:-3,physical_health:-1},elastic:{id:"elastic",name:"ElasticSearch",category:"backend_skill",mental_health:-3,physical_health:-1},organization:{id:"organization",name:"Organize tasks",category:"soft_skill",mental_health:-3,physical_health:-1},teammeeting:{id:"teammeeting",name:"Team meeting",category:"soft_skill",mental_health:-3,physical_health:-1},stretch:{id:"stretch",name:"Stretch",category:"exercise",mental_health:0,physical_health:2},walk:{id:"walk",name:"Walk",category:"exercise",mental_health:1,physical_health:1},videogames:{id:"videogames",name:"Play video games",category:"break",mental_health:2,physical_health:-1},watchtv:{id:"watchtv",name:"Watch TV",category:"break",mental_health:1,physical_health:-1},sleep:{id:"sleep",name:"Sleep",category:"break",mental_health:3,physical_health:0}},xe=[{name:"Alex",description:"40 year old developer who has worked on multiple different projects",max_mental_health:20,max_physical_health:20,mental_health:20,physical_health:20,time:0,skills:[{base:$.organization,affinity:1,level:7},{base:$.teammeeting,affinity:2,level:7},{base:$.javascript,affinity:2,level:9},{base:$.php,affinity:1,level:9},{base:$.html,affinity:1,level:8},{base:$.css,affinity:1,level:7},{base:$.restapi,affinity:2,level:8},{base:$.mysql,affinity:2,level:8},{base:$.stretch,affinity:2,level:10},{base:$.walk,affinity:0,level:10},{base:$.videogames,affinity:2,level:10},{base:$.watchtv,affinity:0,level:10},{base:$.sleep,affinity:2,level:10}]},{name:"Max",description:"Junior developer eager to learn and create cool new stuff",max_mental_health:20,max_physical_health:20,mental_health:20,physical_health:20,time:0,skills:[{base:$.organization,affinity:0,level:5},{base:$.teammeeting,affinity:2,level:5},{base:$.javascript,affinity:2,level:6},{base:$.html,affinity:2,level:5},{base:$.css,affinity:2,level:5},{base:$.mysql,affinity:2,level:6},{base:$.stretch,affinity:0,level:10},{base:$.walk,affinity:0,level:10},{base:$.videogames,affinity:2,level:10},{base:$.watchtv,affinity:0,level:10},{base:$.sleep,affinity:2,level:10}]}],et=[{name:"Create a blog",description:"Create a website where we can post simple articles. Can be done using Javascript, PHP or Python",requirements:[{name:"Programming",options:[{skill:$.javascript,total:50},{skill:$.php,total:50},{skill:$.python,total:70}]},{name:"HTML",options:[{skill:$.html,total:10}]},{name:"CSS",options:[{skill:$.css,total:10}]},{name:"Organization",options:[{skill:$.organization,total:30}]}]},{name:"Create a product catalog",description:"Create a website to show and maintain our product catalog. Can be done using Javascript, PHP or Python.",requirements:[{name:"Programming",options:[{skill:$.javascript,total:60},{skill:$.php,total:60},{skill:$.python,total:75}]},{name:"HTML",options:[{skill:$.html,total:15}]},{name:"CSS",options:[{skill:$.css,total:15}]},{name:"Organization",options:[{skill:$.organization,total:50}]}]},{name:"Create a payment API mechanism",description:"Upgrade an app to support paying using a credit card, using a bank provider. You can use either Javascript or Python.",requirements:[{name:"Programming",options:[{skill:$.javascript,total:60},{skill:$.python,total:75}]},{name:"Rest API",options:[{skill:$.restapi,total:50}]},{name:"Organization",options:[{skill:$.organization,total:90}]}]}];function tt(t,e,l){const n=t.slice();return n[2]=e[l],n}function pl(t){let e,l,n;return{c(){e=_("button"),e.textContent="Select",p(e,"class","btn btn-primary")},m(a,i){O(a,e,i),l||(n=de(e,"click",t[0](t[2])),l=!0)},p(a,i){t=a},d(a){a&&C(e),l=!1,n()}}}function lt(t){let e,l,n,a;return l=new Wt({props:{char:t[2],$$slots:{default:[pl]},$$scope:{ctx:t}}}),{c(){e=_("div"),K(l.$$.fragment),n=S(),p(e,"class","col-3 me-auto ms-auto")},m(i,s){O(i,e,s),U(l,e,null),u(e,n),a=!0},p(i,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:i}),l.$set(r)},i(i){a||(P(l.$$.fragment,i),a=!0)},o(i){z(l.$$.fragment,i),a=!1},d(i){i&&C(e),G(l)}}}function gl(t){let e,l,n,a=xe,i=[];for(let r=0;r<a.length;r+=1)i[r]=lt(tt(t,a,r));const s=r=>z(i[r],1,1,()=>{i[r]=null});return{c(){e=_("div"),l=_("div");for(let r=0;r<i.length;r+=1)i[r].c();p(l,"class","row"),p(e,"class","container")},m(r,c){O(r,e,c),u(e,l);for(let o=0;o<i.length;o+=1)i[o].m(l,null);n=!0},p(r,[c]){if(c&1){a=xe;let o;for(o=0;o<a.length;o+=1){const m=tt(r,a,o);i[o]?(i[o].p(m,c),P(i[o],1)):(i[o]=lt(m),i[o].c(),P(i[o],1),i[o].m(l,null))}for(Y(),o=a.length;o<i.length;o+=1)s(o);X()}},i(r){if(!n){for(let c=0;c<a.length;c+=1)P(i[c]);n=!0}},o(r){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)z(i[c]);n=!1},d(r){r&&C(e),me(i,r)}}}function bl(t){let e=Ae();function l(n){return()=>e("select",n)}return[l]}class vl extends x{constructor(e){super(),Z(this,e,bl,gl,Q,{})}}const se=[];function Ht(t,e=B){let l;const n=new Set;function a(r){if(Q(t,r)&&(t=r,l)){const c=!se.length;for(const o of n)o[1](),se.push(o,t);if(c){for(let o=0;o<se.length;o+=2)se[o][0](se[o+1]);se.length=0}}}function i(r){a(r(t))}function s(r,c=B){const o=[r,c];return n.add(o),n.size===1&&(l=e(a)||B),r(t),()=>{n.delete(o),n.size===0&&(l(),l=null)}}return{set:a,update:i,subscribe:s}}let we=Ht(null),Te=Ht(null);function kl(t){let e,l,n,a;return{c(){e=_("div"),l=_("div"),n=T(t[0]),p(l,"class",a="progress-bar "+t[2]),p(l,"role","progressbar"),p(l,"aria-label",t[1]),ce(l,"width",t[3]+"%"),p(l,"aria-valuenow",t[3]),p(l,"aria-valuemin",0),p(l,"aria-valuemax",100),p(e,"class","progress mb-1")},m(i,s){O(i,e,s),u(e,l),u(l,n)},p(i,[s]){s&1&&A(n,i[0]),s&4&&a!==(a="progress-bar "+i[2])&&p(l,"class",a),s&2&&p(l,"aria-label",i[1]),s&8&&ce(l,"width",i[3]+"%"),s&8&&p(l,"aria-valuenow",i[3])},i:B,o:B,d(i){i&&C(e)}}}function yl(t,e,l){let n,{value:a}=e,{max:i}=e,{aria_label:s=""}=e,{color:r="bg-dark"}=e;return t.$$set=c=>{"value"in c&&l(0,a=c.value),"max"in c&&l(4,i=c.max),"aria_label"in c&&l(1,s=c.aria_label),"color"in c&&l(2,r=c.color)},t.$$.update=()=>{t.$$.dirty&17&&l(3,n=Math.floor(a/i*100))},[a,s,r,n,i]}class wl extends x{constructor(e){super(),Z(this,e,yl,kl,Q,{value:0,max:4,aria_label:1,color:2})}}const $l=t=>({}),nt=t=>({});function it(t,e,l){const n=t.slice();return n[7]=e[l],n}function at(t){let e,l,n,a,i,s=t[0].requirements,r=[];for(let f=0;f<s.length;f+=1)r[f]=rt(it(t,s,f));const c=f=>z(r[f],1,1,()=>{r[f]=null}),o=t[5].buttons,m=$t(o,t,t[4],nt);return{c(){e=_("h5"),e.textContent="Requirements",l=S(),n=_("table");for(let f=0;f<r.length;f+=1)r[f].c();a=S(),m&&m.c(),p(n,"width","100%")},m(f,d){O(f,e,d),O(f,l,d),O(f,n,d);for(let h=0;h<r.length;h+=1)r[h].m(n,null);O(f,a,d),m&&m.m(f,d),i=!0},p(f,d){if(d&11){s=f[0].requirements;let h;for(h=0;h<s.length;h+=1){const b=it(f,s,h);r[h]?(r[h].p(b,d),P(r[h],1)):(r[h]=rt(b),r[h].c(),P(r[h],1),r[h].m(n,null))}for(Y(),h=s.length;h<r.length;h+=1)c(h);X()}m&&m.p&&(!i||d&16)&&qt(m,o,f,f[4],i?Pt(o,f[4],d,$l):Ct(f[4]),nt)},i(f){if(!i){for(let d=0;d<s.length;d+=1)P(r[d]);P(m,f),i=!0}},o(f){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)z(r[d]);z(m,f),i=!1},d(f){f&&C(e),f&&C(l),f&&C(n),me(r,f),f&&C(a),m&&m.d(f)}}}function jl(t){let e=t[7].options.map(st).join(", ")+"",l;return{c(){l=T(e)},m(n,a){O(n,l,a)},p(n,a){a&1&&e!==(e=n[7].options.map(st).join(", ")+"")&&A(l,e)},i:B,o:B,d(n){n&&C(l)}}}function Pl(t){let e,l,n,a,i,s,r,c;l=new wl({props:{value:t[7].progress,max:100}});function o(){return t[6](t[7])}return{c(){e=_("td"),K(l.$$.fragment),n=S(),a=_("td"),i=_("button"),i.textContent="Work",p(e,"width","100%"),p(i,"class","btn btn-primary")},m(m,f){O(m,e,f),U(l,e,null),O(m,n,f),O(m,a,f),u(a,i),s=!0,r||(c=de(i,"click",o),r=!0)},p(m,f){t=m;const d={};f&1&&(d.value=t[7].progress),l.$set(d)},i(m){s||(P(l.$$.fragment,m),s=!0)},o(m){z(l.$$.fragment,m),s=!1},d(m){m&&C(e),G(l),m&&C(n),m&&C(a),r=!1,c()}}}function rt(t){let e,l,n=t[7].name+"",a,i,s,r,c,o;const m=[Pl,jl],f=[];function d(h,b){return h[1]?0:1}return s=d(t),r=f[s]=m[s](t),{c(){e=_("tr"),l=_("td"),a=T(n),i=S(),r.c(),c=S()},m(h,b){O(h,e,b),u(e,l),u(l,a),u(e,i),f[s].m(e,null),u(e,c),o=!0},p(h,b){(!o||b&1)&&n!==(n=h[7].name+"")&&A(a,n);let M=s;s=d(h),s===M?f[s].p(h,b):(Y(),z(f[M],1,1,()=>{f[M]=null}),X(),r=f[s],r?r.p(h,b):(r=f[s]=m[s](h),r.c()),P(r,1),r.m(e,c))},i(h){o||(P(r),o=!0)},o(h){z(r),o=!1},d(h){h&&C(e),f[s].d()}}}function ql(t){let e,l,n,a=t[0].name+"",i,s,r,c=t[0].description+"",o,m,f,d=t[2]&&at(t);return{c(){e=_("div"),l=_("div"),n=_("div"),i=T(a),s=S(),r=_("div"),o=T(c),m=S(),d&&d.c(),p(n,"class","card-title"),p(r,"class","card-text"),p(l,"class","card-body"),p(e,"class","card window")},m(h,b){O(h,e,b),u(e,l),u(l,n),u(n,i),u(l,s),u(l,r),u(r,o),u(r,m),d&&d.m(r,null),f=!0},p(h,[b]){(!f||b&1)&&a!==(a=h[0].name+"")&&A(i,a),(!f||b&1)&&c!==(c=h[0].description+"")&&A(o,c),h[2]?d?(d.p(h,b),b&4&&P(d,1)):(d=at(h),d.c(),P(d,1),d.m(r,null)):d&&(Y(),z(d,1,1,()=>{d=null}),X())},i(h){f||(P(d),f=!0)},o(h){z(d),f=!1},d(h){h&&C(e),d&&d.d()}}}const st=t=>t.skill.name;function Cl(t,e,l){let{$$slots:n={},$$scope:a}=e,{project:i}=e,{active:s=!1}=e,{showRequirements:r=!0}=e,c=Ae();const o=m=>c("work",m);return t.$$set=m=>{"project"in m&&l(0,i=m.project),"active"in m&&l(1,s=m.active),"showRequirements"in m&&l(2,r=m.showRequirements),"$$scope"in m&&l(4,a=m.$$scope)},[i,s,r,c,a,n,o]}class Dt extends x{constructor(e){super(),Z(this,e,Cl,ql,Q,{project:0,active:1,showRequirements:2})}}function ot(t,e,l){const n=t.slice();return n[2]=e[l],n}function Ml(t){let e,l,n,a;return{c(){e=_("div"),l=_("button"),l.textContent="Take",p(l,"class","btn btn-primary"),p(e,"slot","buttons")},m(i,s){O(i,e,s),u(e,l),n||(a=de(l,"click",t[0](t[2])),n=!0)},p(i,s){t=i},d(i){i&&C(e),n=!1,a()}}}function ct(t){let e,l,n,a;return l=new Dt({props:{project:t[2],$$slots:{buttons:[Ml]},$$scope:{ctx:t}}}),{c(){e=_("div"),K(l.$$.fragment),n=S(),p(e,"class","col-4 ms-auto me-auto")},m(i,s){O(i,e,s),U(l,e,null),u(e,n),a=!0},p(i,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:i}),l.$set(r)},i(i){a||(P(l.$$.fragment,i),a=!0)},o(i){z(l.$$.fragment,i),a=!1},d(i){i&&C(e),G(l)}}}function Sl(t){let e,l,n,a=et,i=[];for(let r=0;r<a.length;r+=1)i[r]=ct(ot(t,a,r));const s=r=>z(i[r],1,1,()=>{i[r]=null});return{c(){e=_("div"),l=_("div");for(let r=0;r<i.length;r+=1)i[r].c();p(l,"class","row"),p(e,"class","container mt-2")},m(r,c){O(r,e,c),u(e,l);for(let o=0;o<i.length;o+=1)i[o].m(l,null);n=!0},p(r,[c]){if(c&1){a=et;let o;for(o=0;o<a.length;o+=1){const m=ot(r,a,o);i[o]?(i[o].p(m,c),P(i[o],1)):(i[o]=ct(m),i[o].c(),P(i[o],1),i[o].m(l,null))}for(Y(),o=a.length;o<i.length;o+=1)s(o);X()}},i(r){if(!n){for(let c=0;c<a.length;c+=1)P(i[c]);n=!0}},o(r){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)z(i[c]);n=!1},d(r){r&&C(e),me(i,r)}}}function El(t){let e=Ae();function l(n){return()=>e("select",n)}return[l]}class Nl extends x{constructor(e){super(),Z(this,e,El,Sl,Q,{})}}function Tl(t){let e,l,n=t[0].mental_health+"",a;return{c(){e=_("div"),l=_("div"),a=T(n),p(l,"class","progress-bar bg-danger"),p(l,"role","progressbar"),p(l,"aria-label","Mental health"),ce(l,"width",t[1]+"%"),p(l,"aria-valuenow",t[1]),p(l,"aria-valuemin",0),p(l,"aria-valuemax",100),p(e,"class","progress mb-1")},m(i,s){O(i,e,s),u(e,l),u(l,a)},p(i,[s]){s&1&&n!==(n=i[0].mental_health+"")&&A(a,n),s&2&&ce(l,"width",i[1]+"%"),s&2&&p(l,"aria-valuenow",i[1])},i:B,o:B,d(i){i&&C(e)}}}function Ol(t,e,l){let n,{char:a}=e;return t.$$set=i=>{"char"in i&&l(0,a=i.char)},t.$$.update=()=>{t.$$.dirty&1&&l(1,n=a.mental_health/a.max_mental_health*100)},[a,n]}class Rl extends x{constructor(e){super(),Z(this,e,Ol,Tl,Q,{char:0})}}function zl(t){let e,l,n=t[0].physical_health+"",a;return{c(){e=_("div"),l=_("div"),a=T(n),p(l,"class","progress-bar bg-success"),p(l,"role","progressbar"),p(l,"aria-label","Mental health"),ce(l,"width",t[1]+"%"),p(l,"aria-valuenow",t[1]),p(l,"aria-valuemin",0),p(l,"aria-valuemax",100),p(e,"class","progress mb-1")},m(i,s){O(i,e,s),u(e,l),u(l,a)},p(i,[s]){s&1&&n!==(n=i[0].physical_health+"")&&A(a,n),s&2&&ce(l,"width",i[1]+"%"),s&2&&p(l,"aria-valuenow",i[1])},i:B,o:B,d(i){i&&C(e)}}}function Bl(t,e,l){let n,{char:a}=e;return t.$$set=i=>{"char"in i&&l(0,a=i.char)},t.$$.update=()=>{t.$$.dirty&1&&l(1,n=a.physical_health/a.max_physical_health*100)},[a,n]}class Ll extends x{constructor(e){super(),Z(this,e,Bl,zl,Q,{char:0})}}function ft(t,e,l){const n=t.slice();return n[16]=e[l],n}function ut(t,e,l){const n=t.slice();return n[16]=e[l],n}function ht(t){let e,l;return e=new vl({}),e.$on("select",t[8]),{c(){K(e.$$.fragment)},m(n,a){U(e,n,a),l=!0},p:B,i(n){l||(P(e.$$.fragment,n),l=!0)},o(n){z(e.$$.fragment,n),l=!1},d(n){G(e,n)}}}function mt(t){let e,l;return e=new Nl({}),e.$on("select",t[9]),{c(){K(e.$$.fragment)},m(n,a){U(e,n,a),l=!0},p:B,i(n){l||(P(e.$$.fragment,n),l=!0)},o(n){z(e.$$.fragment,n),l=!1},d(n){G(e,n)}}}function dt(t){let e,l,n,a,i,s,r,c,o,m,f,d,h,b,M=t[0].name+"",E,N,j,w,R,y,g,q,v,W,L=t[0].name+"",ie,We,_e,He,le,V,Me,De,Fe,ke,ee,Je,Se,ne,H=t[2]&&_t(t);w=new Rl({props:{char:t[0]}}),g=new Ll({props:{char:t[0]}});let ae=t[6],D=[];for(let k=0;k<ae.length;k+=1)D[k]=pt(ut(t,ae,k));function Ft(k){t[15](k)}let Ie={project:t[7],active:!0};t[3]!==void 0&&(Ie.showRequirements=t[3]),V=new Dt({props:Ie}),Re.push(()=>al(V,"showRequirements",Ft,t[3])),V.$on("work",t[11]);let F=t[4]&&gt(t);return ee=new Wt({props:{char:t[0]}}),ee.$on("break",t[13]),{c(){e=_("div"),H&&H.c(),l=S(),n=_("div"),a=_("div"),i=_("div"),s=_("div"),r=T("Time: "),c=T(t[1]),o=T(` hours
        `),m=_("table"),f=_("thead"),f.innerHTML=`<tr><th>Name</th> 
            <th>Mental</th> 
            <th>Physical</th></tr>`,d=S(),h=_("tr"),b=_("td"),E=T(M),N=S(),j=_("td"),K(w.$$.fragment),R=S(),y=_("td"),K(g.$$.fragment),q=S(),v=_("div"),W=_("div"),ie=T(L),We=T(` can take a break doing these activities:
        `),_e=_("table");for(let k=0;k<D.length;k+=1)D[k].c();He=S(),le=_("div"),K(V.$$.fragment),De=S(),F&&F.c(),Fe=S(),ke=_("div"),K(ee.$$.fragment),Je=S(),Se=_("div"),Se.innerHTML=`Documentation: 
    <h5>Characters</h5>
    Each character has a set of skills, each skill with their own level and affinity (Whether he likes or loves to practice the given skill, represented by a smiley emoji).<br/>
    The level represents how much progress a working session will have.<br/>
    The affinity reduces the mental stress taken when working with this skill.<br/> 

    <h5>Projects</h5>
    Each project has a set of requirements.<br/>
    Each requirement has a list of skills that can fulfil the requirement, progress with any of those skills progress the whole requirement, which means the skills are the options available to progress.

    <h5>Mechanics</h5>
    Once there is an active character and an active project, there are two options: Working or taking a break.

    <h5>Working</h5>
    Selecting a project requirement will show a list of available skills that can be used to progress it.
    When using a skill, it will:
    <ul><li>Spend time, 1 time block, which currently is 1 hour.</li> 
      <li>Damage the character&#39;s physical health, if it goes to 0, it will damage the character&#39;s mental health</li> 
      <li>Damage the character&#39;s mental health.</li> 
      <li>Progress the project&#39;s selected requirement based on the mental health percent and the character&#39;s level on that skill</li></ul> 

    <h5>Taking a break</h5>
    Working will take a toll on the character&#39;s health, which will reduce the character&#39;s efficiency, so to stay in 
    good shape, the character needs to take a break using one of their available break skills, like sleeping or watching tv.

    <h5>Goal</h5>
    The goal is to complete the project as fast as possible, to do this you need to balance the working time and the cool down activities.`,p(m,"width","100%"),p(s,"class","card-body"),p(i,"class","card window"),p(_e,"width","100%"),p(W,"class","card-body"),p(v,"class","card window mt-2"),p(a,"class","col-4"),p(le,"class","col-4"),p(ke,"class","col-4 me-auto ms-auto"),p(n,"class","row"),p(e,"class","container mt-3")},m(k,J){O(k,e,J),H&&H.m(e,null),u(e,l),u(e,n),u(n,a),u(a,i),u(i,s),u(s,r),u(s,c),u(s,o),u(s,m),u(m,f),u(m,d),u(m,h),u(h,b),u(b,E),u(h,N),u(h,j),U(w,j,null),u(h,R),u(h,y),U(g,y,null),u(a,q),u(a,v),u(v,W),u(W,ie),u(W,We),u(W,_e);for(let re=0;re<D.length;re+=1)D[re].m(_e,null);u(n,He),u(n,le),U(V,le,null),u(le,De),F&&F.m(le,null),u(n,Fe),u(n,ke),U(ee,ke,null),u(e,Je),u(e,Se),ne=!0},p(k,J){k[2]?H?H.p(k,J):(H=_t(k),H.c(),H.m(e,l)):H&&(H.d(1),H=null),(!ne||J&2)&&A(c,k[1]),(!ne||J&1)&&M!==(M=k[0].name+"")&&A(E,M);const re={};J&1&&(re.char=k[0]),w.$set(re);const Ue={};if(J&1&&(Ue.char=k[0]),g.$set(Ue),(!ne||J&1)&&L!==(L=k[0].name+"")&&A(ie,L),J&16448){ae=k[6];let I;for(I=0;I<ae.length;I+=1){const Ke=ut(k,ae,I);D[I]?D[I].p(Ke,J):(D[I]=pt(Ke),D[I].c(),D[I].m(_e,null))}for(;I<D.length;I+=1)D[I].d(1);D.length=ae.length}const Ee={};J&128&&(Ee.project=k[7]),!Me&&J&8&&(Me=!0,Ee.showRequirements=k[3],tl(()=>Me=!1)),V.$set(Ee),k[4]?F?F.p(k,J):(F=gt(k),F.c(),F.m(le,null)):F&&(F.d(1),F=null);const Ge={};J&1&&(Ge.char=k[0]),ee.$set(Ge)},i(k){ne||(P(w.$$.fragment,k),P(g.$$.fragment,k),P(V.$$.fragment,k),P(ee.$$.fragment,k),ne=!0)},o(k){z(w.$$.fragment,k),z(g.$$.fragment,k),z(V.$$.fragment,k),z(ee.$$.fragment,k),ne=!1},d(k){k&&C(e),H&&H.d(),G(w),G(g),me(D,k),G(V),F&&F.d(),G(ee)}}}function _t(t){let e,l,n,a;return{c(){e=_("div"),l=T("Congratulations, you finished the project in "),n=T(t[1]),a=T(" hours!"),p(e,"class","alert alert-success")},m(i,s){O(i,e,s),u(e,l),u(e,n),u(e,a)},p(i,s){s&2&&A(n,i[1])},d(i){i&&C(e)}}}function pt(t){let e,l,n=t[16].base.name+"",a,i,s,r,c,o,m;return{c(){e=_("tr"),l=_("td"),a=T(n),i=S(),s=_("td"),r=_("button"),r.textContent="Do",c=S(),p(r,"class","btn btn-primary")},m(f,d){O(f,e,d),u(e,l),u(l,a),u(e,i),u(e,s),u(s,r),u(e,c),o||(m=de(r,"click",function(){he(t[14](t[16]))&&t[14](t[16]).apply(this,arguments)}),o=!0)},p(f,d){t=f,d&64&&n!==(n=t[16].base.name+"")&&A(a,n)},d(f){f&&C(e),o=!1,m()}}}function gt(t){let e,l,n,a=t[0].name+"",i,s,r=t[4].name+"",c,o,m,f,d,h,b,M,E,N,j,w,R,y=t[5],g=[];for(let v=0;v<y.length;v+=1)g[v]=vt(ft(t,y,v));let q=null;return y.length||(q=bt()),{c(){e=_("div"),l=_("div"),n=_("h5"),i=T(a),s=T("'s skills available for "),c=T(r),o=S(),m=_("table"),f=_("tr"),f.innerHTML=`<th>Name</th> 
            <th>Character skill Level</th> 
            <th>Total time</th>`,d=S();for(let v=0;v<g.length;v+=1)g[v].c();q&&q.c(),h=S(),b=_("tr"),M=_("td"),E=S(),N=_("td"),j=_("button"),j.textContent="Stop working on this",p(j,"class","btn btn-secondary"),p(N,"colspan","3"),p(N,"class","text-end"),p(m,"width","100%"),p(l,"class","card-body"),p(e,"class","card window mt-2")},m(v,W){O(v,e,W),u(e,l),u(l,n),u(n,i),u(n,s),u(n,c),u(l,o),u(l,m),u(m,f),u(m,d);for(let L=0;L<g.length;L+=1)g[L].m(m,null);q&&q.m(m,null),u(m,h),u(m,b),u(b,M),u(b,E),u(b,N),u(N,j),w||(R=de(j,"click",t[12]),w=!0)},p(v,W){if(W&1&&a!==(a=v[0].name+"")&&A(i,a),W&16&&r!==(r=v[4].name+"")&&A(c,r),W&1072){y=v[5];let L;for(L=0;L<y.length;L+=1){const ie=ft(v,y,L);g[L]?g[L].p(ie,W):(g[L]=vt(ie),g[L].c(),g[L].m(m,h))}for(;L<g.length;L+=1)g[L].d(1);g.length=y.length,!y.length&&q?q.p(v,W):y.length?q&&(q.d(1),q=null):(q=bt(),q.c(),q.m(m,h))}},d(v){v&&C(e),me(g,v),q&&q.d(),w=!1,R()}}}function bt(t){let e;return{c(){e=_("tr"),e.innerHTML="<td>Nothing</td>"},m(l,n){O(l,e,n)},p:B,d(l){l&&C(e)}}}function vt(t){let e,l,n=t[16].skill.name+"",a,i,s,r=t[16].character_skill.level+"",c,o,m,f,d=Math.floor(t[16].total/t[16].character_skill.level)+"",h,b,M,E,N,j,w;return{c(){e=_("tr"),l=_("td"),a=T(n),i=S(),s=_("td"),c=T(r),o=S(),m=_("td"),f=T("> "),h=T(d),b=T("h"),M=S(),E=_("td"),N=_("button"),N.textContent="Do",p(N,"class","btn btn-primary")},m(R,y){O(R,e,y),u(e,l),u(l,a),u(e,i),u(e,s),u(s,c),u(e,o),u(e,m),u(m,f),u(m,h),u(m,b),u(e,M),u(e,E),u(E,N),j||(w=de(N,"click",function(){he(t[10](t[4],t[16],t[16].character_skill))&&t[10](t[4],t[16],t[16].character_skill).apply(this,arguments)}),j=!0)},p(R,y){t=R,y&32&&n!==(n=t[16].skill.name+"")&&A(a,n),y&32&&r!==(r=t[16].character_skill.level+"")&&A(c,r),y&32&&d!==(d=Math.floor(t[16].total/t[16].character_skill.level)+"")&&A(h,d)},d(R){R&&C(e),j=!1,w()}}}function Al(t){let e,l,n,a,i=!t[0]&&ht(t),s=t[0]&&!t[7]&&mt(t),r=t[0]&&t[7]&&dt(t);return{c(){i&&i.c(),e=S(),s&&s.c(),l=S(),r&&r.c(),n=Ot()},m(c,o){i&&i.m(c,o),O(c,e,o),s&&s.m(c,o),O(c,l,o),r&&r.m(c,o),O(c,n,o),a=!0},p(c,[o]){c[0]?i&&(Y(),z(i,1,1,()=>{i=null}),X()):i?(i.p(c,o),o&1&&P(i,1)):(i=ht(c),i.c(),P(i,1),i.m(e.parentNode,e)),c[0]&&!c[7]?s?(s.p(c,o),o&129&&P(s,1)):(s=mt(c),s.c(),P(s,1),s.m(l.parentNode,l)):s&&(Y(),z(s,1,1,()=>{s=null}),X()),c[0]&&c[7]?r?(r.p(c,o),o&129&&P(r,1)):(r=dt(c),r.c(),P(r,1),r.m(n.parentNode,n)):r&&(Y(),z(r,1,1,()=>{r=null}),X())},i(c){a||(P(i),P(s),P(r),a=!0)},o(c){z(i),z(s),z(r),a=!1},d(c){i&&i.d(c),c&&C(e),s&&s.d(c),c&&C(l),r&&r.d(c),c&&C(n)}}}function kt(t,e){t.update(l=>(l.mental_health=Math.max(Math.min(l.mental_health+e.affinity+e.base.mental_health,l.max_mental_health),0),l.physical_health=Math.min(l.physical_health+e.base.physical_health,l.max_physical_health),l.physical_health<0&&(l.physical_health=0,l.mental_health=Math.max(l.mental_health-3,0)),l))}function Wl(t,e,l){let n,a;Ve(t,we,w=>l(0,n=w)),Ve(t,Te,w=>l(7,a=w));let i=0,s=!1,r=!0;function c(w){let R=JSON.parse(JSON.stringify(w.detail));we.set(R)}function o(w){let R=JSON.parse(JSON.stringify(w.detail));R.requirements.forEach(y=>y.progress=0),Te.set(R)}function m(w,R,y){let g=n.mental_health/n.max_mental_health;return()=>{R.progress=Math.min((R.progress??0)+y.level*g,R.total),w.progress=Math.min(Math.floor(w.options.reduce((v,W)=>v+(W.progress??0)/W.total*100,0)),100);let q=a;Te.set(q),l(1,i++,i),kt(we,y),l(2,s=!q.requirements.find(v=>v.progress<100))}}let f=null,d=[];function h(w){let R=w.detail;l(4,f=R),l(5,d=[]),f.options.forEach(y=>{y.character_skill=n.skills.find(g=>y.skill.id==g.base.id),y.character_skill&&d.push(y)}),l(3,r=!1)}function b(){l(3,r=!0),l(4,f=null)}let M=null;function E(w){w&&l(6,M=w.skills.filter(R=>["break","exercise"].includes(R.base.category)))}function N(w){return()=>{kt(we,w),l(1,i++,i)}}function j(w){r=w,l(3,r)}return t.$$.update=()=>{t.$$.dirty&1&&E(n)},[n,i,s,r,f,d,M,a,c,o,m,h,b,E,N,j]}class Hl extends x{constructor(e){super(),Z(this,e,Wl,Al,Q,{})}}new Hl({target:document.getElementById("app")});
