(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=l(i);fetch(i.href,a)}})();function q(){}const rt=t=>t;function Ct(t,e){for(const l in e)t[l]=e[l];return t}function st(t){return t()}function Oe(){return Object.create(null)}function te(t){t.forEach(st)}function se(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Pt(t){return Object.keys(t).length===0}function Mt(t,...e){if(t==null)return q;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function Le(t,e,l){t.$$.on_destroy.push(Mt(e,l))}function ot(t,e,l,n){if(t){const i=ct(t,e,l,n);return t[0](i)}}function ct(t,e,l,n){return t[1]&&n?Ct(l.ctx.slice(),t[1](n(e))):l.ctx}function ft(t,e,l,n){if(t[2]&&n){const i=t[2](n(l));if(e.dirty===void 0)return i;if(typeof i=="object"){const a=[],c=Math.max(e.dirty.length,i.length);for(let r=0;r<c;r+=1)a[r]=e.dirty[r]|i[r];return a}return e.dirty|i}return e.dirty}function ut(t,e,l,n,i,a){if(i){const c=ct(e,l,n,a);t.p(c,i)}}function ht(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}const mt=typeof window<"u";let dt=mt?()=>window.performance.now():()=>Date.now(),Ce=mt?t=>requestAnimationFrame(t):q;const ae=new Set;function _t(t){ae.forEach(e=>{e.c(t)||(ae.delete(e),e.f())}),ae.size!==0&&Ce(_t)}function pt(t){let e;return ae.size===0&&Ce(_t),{promise:new Promise(l=>{ae.add(e={c:t,f:l})}),abort(){ae.delete(e)}}}function f(t,e){t.appendChild(e)}function gt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=m("style");return Nt(gt(t),e),e.sheet}function Nt(t,e){return f(t.head||t,e),e.sheet}function O(t,e,l){t.insertBefore(e,l||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function oe(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function m(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function C(){return N(" ")}function Ot(){return N("")}function ee(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function _(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Lt(t){return Array.from(t.childNodes)}function F(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ie(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}function bt(t,e,{bubbles:l=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,l,n,e),i}const be=new Map;let ve=0;function Tt(t){let e=5381,l=t.length;for(;l--;)e=(e<<5)-e^t.charCodeAt(l);return e>>>0}function zt(t,e){const l={stylesheet:Et(e),rules:{}};return be.set(t,l),l}function vt(t,e,l,n,i,a,c,r=0){const o=16.666/n;let s=`{
`;for(let p=0;p<=1;p+=o){const g=e+(l-e)*a(p);s+=p*100+`%{${c(g,1-g)}}
`}const u=s+`100% {${c(l,1-l)}}
}`,h=`__svelte_${Tt(u)}_${r}`,v=gt(t),{stylesheet:b,rules:y}=be.get(v)||zt(v,t);y[h]||(y[h]=!0,b.insertRule(`@keyframes ${h} ${u}`,b.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${h} ${n}ms linear ${i}ms 1 both`,ve+=1,h}function je(t,e){const l=(t.style.animation||"").split(", "),n=l.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),i=l.length-n.length;i&&(t.style.animation=n.join(", "),ve-=i,ve||Bt())}function Bt(){Ce(()=>{ve||(be.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&M(e)}),be.clear())})}let he;function ue(t){he=t}function qt(){if(!he)throw new Error("Function called outside component initialization");return he}function ke(){const t=qt();return(e,l,{cancelable:n=!1}={})=>{const i=t.$$.callbacks[e];if(i){const a=bt(e,l,{cancelable:n});return i.slice().forEach(c=>{c.call(t,a)}),!a.defaultPrevented}return!0}}const fe=[],Te=[],pe=[],ze=[],At=Promise.resolve();let Se=!1;function Ft(){Se||(Se=!0,At.then(yt))}function re(t){pe.push(t)}const we=new Set;let de=0;function yt(){const t=he;do{for(;de<fe.length;){const e=fe[de];de++,ue(e),Ht(e.$$)}for(ue(null),fe.length=0,de=0;Te.length;)Te.pop()();for(let e=0;e<pe.length;e+=1){const l=pe[e];we.has(l)||(we.add(l),l())}pe.length=0}while(fe.length);for(;ze.length;)ze.pop()();Se=!1,we.clear(),ue(t)}function Ht(t){if(t.fragment!==null){t.update(),te(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}let ce;function kt(){return ce||(ce=Promise.resolve(),ce.then(()=>{ce=null})),ce}function ye(t,e,l){t.dispatchEvent(bt(`${e?"intro":"outro"}${l}`))}const ge=new Set;let x;function V(){x={r:0,c:[],p:x}}function Y(){x.r||te(x.c),x=x.p}function j(t,e){t&&t.i&&(ge.delete(t),t.i(e))}function E(t,e,l,n){if(t&&t.o){if(ge.has(t))return;ge.add(t),x.c.push(()=>{ge.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}const wt={duration:0};function Jt(t,e,l){const n={direction:"in"};let i=e(t,l,n),a=!1,c,r,o=0;function s(){c&&je(t,c)}function u(){const{delay:v=0,duration:b=300,easing:y=rt,tick:d=q,css:p}=i||wt;p&&(c=vt(t,0,1,b,v,y,p,o++)),d(0,1);const g=dt()+v,$=g+b;r&&r.abort(),a=!0,re(()=>ye(t,!0,"start")),r=pt(z=>{if(a){if(z>=$)return d(1,0),ye(t,!0,"end"),s(),a=!1;if(z>=g){const P=y((z-g)/b);d(P,1-P)}}return a})}let h=!1;return{start(){h||(h=!0,je(t),se(i)?(i=i(n),kt().then(u)):u())},invalidate(){h=!1},end(){a&&(s(),a=!1)}}}function Dt(t,e,l){const n={direction:"out"};let i=e(t,l,n),a=!0,c;const r=x;r.r+=1;function o(){const{delay:s=0,duration:u=300,easing:h=rt,tick:v=q,css:b}=i||wt;b&&(c=vt(t,1,0,u,s,h,b));const y=dt()+s,d=y+u;re(()=>ye(t,!1,"start")),pt(p=>{if(a){if(p>=d)return v(0,1),ye(t,!1,"end"),--r.r||te(r.c),!1;if(p>=y){const g=h((p-y)/u);v(1-g,g)}}return a})}return se(i)?kt().then(()=>{i=i(n),o()}):o(),{end(s){s&&i.tick&&i.tick(1,0),a&&(c&&je(t,c),a=!1)}}}function K(t){t&&t.c()}function W(t,e,l,n){const{fragment:i,after_update:a}=t.$$;i&&i.m(e,l),n||re(()=>{const c=t.$$.on_mount.map(st).filter(se);t.$$.on_destroy?t.$$.on_destroy.push(...c):te(c),t.$$.on_mount=[]}),a.forEach(re)}function I(t,e){const l=t.$$;l.fragment!==null&&(te(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(fe.push(t),Ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,l,n,i,a,c,r=[-1]){const o=he;ue(t);const s=t.$$={fragment:null,ctx:[],props:a,update:q,not_equal:i,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Oe(),dirty:r,skip_bound:!1,root:e.target||o.$$.root};c&&c(s.root);let u=!1;if(s.ctx=l?l(t,e.props||{},(h,v,...b)=>{const y=b.length?b[0]:v;return s.ctx&&i(s.ctx[h],s.ctx[h]=y)&&(!s.skip_bound&&s.bound[h]&&s.bound[h](y),u&&Rt(t,h)),v}):[],s.update(),u=!0,te(s.before_update),s.fragment=n?n(s.ctx):!1,e.target){if(e.hydrate){const h=Lt(e.target);s.fragment&&s.fragment.l(h),h.forEach(M)}else s.fragment&&s.fragment.c();e.intro&&j(t.$$.fragment),W(t,e.target,e.anchor,e.customElement),yt()}ue(o)}class X{$destroy(){I(this,1),this.$destroy=q}$on(e,l){if(!se(l))return q;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const i=n.indexOf(l);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Wt(t){const e=t-1;return e*e*e+1}function Be(t,{delay:e=0,duration:l=400,easing:n=Wt}={}){const i=getComputedStyle(t),a=+i.opacity,c=parseFloat(i.height),r=parseFloat(i.paddingTop),o=parseFloat(i.paddingBottom),s=parseFloat(i.marginTop),u=parseFloat(i.marginBottom),h=parseFloat(i.borderTopWidth),v=parseFloat(i.borderBottomWidth);return{delay:e,duration:l,easing:n,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*a};height: ${b*c}px;padding-top: ${b*r}px;padding-bottom: ${b*o}px;margin-top: ${b*s}px;margin-bottom: ${b*u}px;border-top-width: ${b*h}px;border-bottom-width: ${b*v}px;`}}function It(t){let e;return{c(){e=N("Loves it")},m(l,n){O(l,e,n)},d(l){l&&M(e)}}}function Ut(t){let e;return{c(){e=N("Likes it")},m(l,n){O(l,e,n)},d(l){l&&M(e)}}}function Kt(t){let e;return{c(){e=N("Normal")},m(l,n){O(l,e,n)},d(l){l&&M(e)}}}function Qt(t){let e;function l(a,c){if(a[0]==0)return Kt;if(a[0]==1)return Ut;if(a[0]==2)return It}let n=l(t),i=n&&n(t);return{c(){e=m("span"),i&&i.c(),_(e,"class","badge bg-primary")},m(a,c){O(a,e,c),i&&i.m(e,null)},p(a,[c]){n!==(n=l(a))&&(i&&i.d(1),i=n&&n(a),i&&(i.c(),i.m(e,null)))},i:q,o:q,d(a){a&&M(e),i&&i.d()}}}function Vt(t,e,l){let{amount:n=2}=e;return t.$$set=i=>{"amount"in i&&l(0,n=i.amount)},[n]}class Yt extends X{constructor(e){super(),G(this,e,Vt,Qt,Q,{amount:0})}}function qe(t,e,l){const n=t.slice();return n[7]=e[l],n}function Ae(t){let e,l,n=t[1].skills,i=[];for(let c=0;c<n.length;c+=1)i[c]=Fe(qe(t,n,c));const a=c=>E(i[c],1,1,()=>{i[c]=null});return{c(){e=m("table");for(let c=0;c<i.length;c+=1)i[c].c();_(e,"class","table")},m(c,r){O(c,e,r);for(let o=0;o<i.length;o+=1)i[o].m(e,null);l=!0},p(c,r){if(r&2){n=c[1].skills;let o;for(o=0;o<n.length;o+=1){const s=qe(c,n,o);i[o]?(i[o].p(s,r),j(i[o],1)):(i[o]=Fe(s),i[o].c(),j(i[o],1),i[o].m(e,null))}for(V(),o=n.length;o<i.length;o+=1)a(o);Y()}},i(c){if(!l){for(let r=0;r<n.length;r+=1)j(i[r]);l=!0}},o(c){i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)E(i[r]);l=!1},d(c){c&&M(e),oe(i,c)}}}function Fe(t){let e,l,n=t[7].base.name+"",i,a,c,r=t[7].level+"",o,s,u,h,v,b;return h=new Yt({props:{amount:t[7].affinity}}),{c(){e=m("tr"),l=m("td"),i=N(n),a=C(),c=m("td"),o=N(r),s=C(),u=m("td"),K(h.$$.fragment),v=C()},m(y,d){O(y,e,d),f(e,l),f(l,i),f(e,a),f(e,c),f(c,o),f(e,s),f(e,u),W(h,u,null),f(e,v),b=!0},p(y,d){(!b||d&2)&&n!==(n=y[7].base.name+"")&&F(i,n),(!b||d&2)&&r!==(r=y[7].level+"")&&F(o,r);const p={};d&2&&(p.amount=y[7].affinity),h.$set(p)},i(y){b||(j(h.$$.fragment,y),b=!0)},o(y){E(h.$$.fragment,y),b=!1},d(y){y&&M(e),I(h)}}}function Gt(t){let e,l,n,i=t[1].name+"",a,c,r,o=t[1].description+"",s,u,h,v,b,y,d,p,g,$,z,P,k,L,w=t[0]&&Ae(t);const H=t[4].default,A=ot(H,t,t[3],null);return{c(){e=m("div"),l=m("div"),n=m("h5"),a=N(i),c=C(),r=m("h6"),s=N(o),u=C(),h=m("div"),v=m("div"),b=m("button"),b.textContent="Skills",y=C(),d=m("button"),d.textContent="Take a break",p=C(),w&&w.c(),g=C(),A&&A.c(),_(n,"class","card-title"),_(r,"class","card-subtitle mb-2"),_(b,"class","btn btn-secondary"),_(d,"class","btn btn-secondary"),_(h,"class","card-text"),_(l,"class","card-body"),_(e,"class","card window")},m(B,R){O(B,e,R),f(e,l),f(l,n),f(n,a),f(l,c),f(l,r),f(r,s),f(l,u),f(l,h),f(h,v),f(v,b),f(v,y),f(v,d),f(h,p),w&&w.m(h,null),f(l,g),A&&A.m(l,null),P=!0,k||(L=[ee(b,"click",t[5]),ee(d,"click",t[6])],k=!0)},p(B,[R]){(!P||R&2)&&i!==(i=B[1].name+"")&&F(a,i),(!P||R&2)&&o!==(o=B[1].description+"")&&F(s,o),B[0]?w?(w.p(B,R),R&1&&j(w,1)):(w=Ae(B),w.c(),j(w,1),w.m(h,null)):w&&(V(),E(w,1,1,()=>{w=null}),Y()),A&&A.p&&(!P||R&8)&&ut(A,H,B,B[3],P?ft(H,B[3],R,null):ht(B[3]),null)},i(B){P||(j(w),j(A,B),re(()=>{z&&z.end(1),$=Jt(e,Be,{}),$.start()}),P=!0)},o(B){E(w),E(A,B),$&&$.invalidate(),z=Dt(e,Be,{}),P=!1},d(B){B&&M(e),w&&w.d(),A&&A.d(B),B&&z&&z.end(),k=!1,te(L)}}}function Xt(t,e,l){let{$$slots:n={},$$scope:i}=e,{char:a}=e,{showSkills:c=!0}=e,r=ke();const o=()=>l(0,c=!c),s=()=>r("break",a);return t.$$set=u=>{"char"in u&&l(1,a=u.char),"showSkills"in u&&l(0,c=u.showSkills),"$$scope"in u&&l(3,i=u.$$scope)},[c,a,r,i,n,o,s]}class $t extends X{constructor(e){super(),G(this,e,Xt,Gt,Q,{char:1,showSkills:0})}}let S={javascript:{id:"javascript",name:"Javascript",category:"programming_language",mental_health:-3,physical_health:-1},php:{id:"php",name:"PHP",category:"programming_language",mental_health:-3,physical_health:-1},python:{id:"python",name:"Python",category:"programming_language",mental_health:-3,physical_health:-1},html:{id:"html",name:"HTML",category:"frontend_skill",mental_health:-3,physical_health:-1},css:{id:"css",name:"CSS",category:"frontend_skill",mental_health:-3,physical_health:-1},restapi:{id:"restapi",name:"Rest API",category:"backend_skill",mental_health:-3,physical_health:-1},mysql:{id:"mysql",name:"MySQL",category:"backend_skill",mental_health:-3,physical_health:-1},mongodb:{id:"mongodb",name:"MongoDB",category:"backend_skill",mental_health:-3,physical_health:-1},elastic:{id:"elastic",name:"ElasticSearch",category:"backend_skill",mental_health:-3,physical_health:-1},organization:{id:"organization",name:"Organize tasks",category:"soft_skill",mental_health:-3,physical_health:-1},teammeeting:{id:"teammeeting",name:"Team meeting",category:"soft_skill",mental_health:-3,physical_health:-1},stretch:{id:"stretch",name:"Stretch",category:"exercise",mental_health:0,physical_health:1},walk:{id:"walk",name:"Walk",category:"exercise",mental_health:1,physical_health:1},videogames:{id:"videogames",name:"Play video games",category:"break",mental_health:2,physical_health:-1},watchtv:{id:"watchtv",name:"Watch TV",category:"break",mental_health:1,physical_health:-1},sleep:{id:"sleep",name:"Sleep",category:"break",mental_health:2,physical_health:0}},He=[{name:"Alex",description:"40 year old developer who has worked on multiple different projects",max_mental_health:20,max_physical_health:20,mental_health:20,physical_health:20,time:0,skills:[{base:S.organization,affinity:1,level:7},{base:S.teammeeting,affinity:2,level:7},{base:S.javascript,affinity:2,level:9},{base:S.php,affinity:1,level:9},{base:S.html,affinity:1,level:8},{base:S.css,affinity:1,level:7},{base:S.restapi,affinity:2,level:8},{base:S.mysql,affinity:2,level:8},{base:S.stretch,affinity:2,level:10},{base:S.walk,affinity:0,level:10},{base:S.videogames,affinity:2,level:10},{base:S.watchtv,affinity:0,level:10}]},{name:"Max",description:"Junior developer eager to learn and create cool new stuff",max_mental_health:100,max_physical_health:100,mental_health:100,physical_health:100,time:0,skills:[{base:S.organization,affinity:0,level:5},{base:S.teammeeting,affinity:2,level:5},{base:S.javascript,affinity:2,level:6},{base:S.html,affinity:2,level:5},{base:S.css,affinity:2,level:5},{base:S.mysql,affinity:2,level:6},{base:S.stretch,affinity:0,level:10},{base:S.walk,affinity:0,level:10},{base:S.videogames,affinity:2,level:10},{base:S.watchtv,affinity:0,level:10}]}],Je=[{name:"Create a blog",description:"Create a website where we can post simple articles. Can be done using Javascript, PHP or Python",requirements:[{name:"Programming",options:[{skill:S.javascript,total:50},{skill:S.php,total:50},{skill:S.python,total:70}]},{name:"HTML",options:[{skill:S.html,total:10}]},{name:"CSS",options:[{skill:S.css,total:10}]},{name:"Organization",options:[{skill:S.organization,total:30}]}]},{name:"Create a product catalog",description:"Create a website to show and maintain our product catalog. Can be done using Javascript, PHP or Python.",requirements:[{name:"Programming",options:[{skill:S.javascript,total:60},{skill:S.php,total:60},{skill:S.python,total:75}]},{name:"HTML",options:[{skill:S.html,total:15}]},{name:"CSS",options:[{skill:S.css,total:15}]},{name:"Organization",options:[{skill:S.organization,total:50}]}]},{name:"Create a payment API mechanism",description:"Upgrade an app to support paying using a credit card, using a bank provider. You can use either Javascript or Python.",requirements:[{name:"Programming",options:[{skill:S.javascript,total:60},{skill:S.python,total:75}]},{name:"Rest API",options:[{skill:S.restapi,total:50}]},{name:"Organization",options:[{skill:S.organization,total:90}]}]}];function De(t,e,l){const n=t.slice();return n[2]=e[l],n}function Zt(t){let e,l,n;return{c(){e=m("button"),e.textContent="Select",_(e,"class","btn btn-primary")},m(i,a){O(i,e,a),l||(n=ee(e,"click",t[0](t[2])),l=!0)},p(i,a){t=i},d(i){i&&M(e),l=!1,n()}}}function Re(t){let e,l,n,i;return l=new $t({props:{char:t[2],$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){e=m("div"),K(l.$$.fragment),n=C(),_(e,"class","col-3 me-auto ms-auto")},m(a,c){O(a,e,c),W(l,e,null),f(e,n),i=!0},p(a,c){const r={};c&32&&(r.$$scope={dirty:c,ctx:a}),l.$set(r)},i(a){i||(j(l.$$.fragment,a),i=!0)},o(a){E(l.$$.fragment,a),i=!1},d(a){a&&M(e),I(l)}}}function xt(t){let e,l,n,i=He,a=[];for(let r=0;r<i.length;r+=1)a[r]=Re(De(t,i,r));const c=r=>E(a[r],1,1,()=>{a[r]=null});return{c(){e=m("div"),l=m("div");for(let r=0;r<a.length;r+=1)a[r].c();_(l,"class","row"),_(e,"class","container")},m(r,o){O(r,e,o),f(e,l);for(let s=0;s<a.length;s+=1)a[s].m(l,null);n=!0},p(r,[o]){if(o&1){i=He;let s;for(s=0;s<i.length;s+=1){const u=De(r,i,s);a[s]?(a[s].p(u,o),j(a[s],1)):(a[s]=Re(u),a[s].c(),j(a[s],1),a[s].m(l,null))}for(V(),s=i.length;s<a.length;s+=1)c(s);Y()}},i(r){if(!n){for(let o=0;o<i.length;o+=1)j(a[o]);n=!0}},o(r){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)E(a[o]);n=!1},d(r){r&&M(e),oe(a,r)}}}function el(t){let e=ke();function l(n){return()=>e("select",n)}return[l]}class tl extends X{constructor(e){super(),G(this,e,el,xt,Q,{})}}const ne=[];function jt(t,e=q){let l;const n=new Set;function i(r){if(Q(t,r)&&(t=r,l)){const o=!ne.length;for(const s of n)s[1](),ne.push(s,t);if(o){for(let s=0;s<ne.length;s+=2)ne[s][0](ne[s+1]);ne.length=0}}}function a(r){i(r(t))}function c(r,o=q){const s=[r,o];return n.add(s),n.size===1&&(l=e(i)||q),r(t),()=>{n.delete(s),n.size===0&&(l(),l=null)}}return{set:i,update:a,subscribe:c}}let _e=jt(null),$e=jt(null);function ll(t){let e,l,n,i;return{c(){e=m("div"),l=m("div"),n=N(t[0]),_(l,"class",i="progress-bar "+t[2]),_(l,"role","progressbar"),_(l,"aria-label",t[1]),ie(l,"width",t[3]+"%"),_(l,"aria-valuenow",t[3]),_(l,"aria-valuemin",0),_(l,"aria-valuemax",100),_(e,"class","progress mb-1")},m(a,c){O(a,e,c),f(e,l),f(l,n)},p(a,[c]){c&1&&F(n,a[0]),c&4&&i!==(i="progress-bar "+a[2])&&_(l,"class",i),c&2&&_(l,"aria-label",a[1]),c&8&&ie(l,"width",a[3]+"%"),c&8&&_(l,"aria-valuenow",a[3])},i:q,o:q,d(a){a&&M(e)}}}function nl(t,e,l){let n,{value:i}=e,{max:a}=e,{aria_label:c=""}=e,{color:r="bg-dark"}=e;return t.$$set=o=>{"value"in o&&l(0,i=o.value),"max"in o&&l(4,a=o.max),"aria_label"in o&&l(1,c=o.aria_label),"color"in o&&l(2,r=o.color)},t.$$.update=()=>{t.$$.dirty&17&&l(3,n=Math.floor(i/a*100))},[i,c,r,n,a]}class al extends X{constructor(e){super(),G(this,e,nl,ll,Q,{value:0,max:4,aria_label:1,color:2})}}const il=t=>({}),We=t=>({});function Ie(t,e,l){const n=t.slice();return n[6]=e[l],n}function Ue(t){let e,l,n,i,a,c,r,o;l=new al({props:{value:t[6].progress,max:100}});function s(){return t[5](t[6])}return{c(){e=m("td"),K(l.$$.fragment),n=C(),i=m("td"),a=m("button"),a.textContent="Work",_(e,"width","100%"),_(a,"class","btn btn-primary")},m(u,h){O(u,e,h),W(l,e,null),O(u,n,h),O(u,i,h),f(i,a),c=!0,r||(o=ee(a,"click",s),r=!0)},p(u,h){t=u;const v={};h&1&&(v.value=t[6].progress),l.$set(v)},i(u){c||(j(l.$$.fragment,u),c=!0)},o(u){E(l.$$.fragment,u),c=!1},d(u){u&&M(e),I(l),u&&M(n),u&&M(i),r=!1,o()}}}function Ke(t){let e,l,n=t[6].name+"",i,a,c,r,o=t[1]&&Ue(t);return{c(){e=m("tr"),l=m("td"),i=N(n),a=C(),o&&o.c(),c=C()},m(s,u){O(s,e,u),f(e,l),f(l,i),f(e,a),o&&o.m(e,null),f(e,c),r=!0},p(s,u){(!r||u&1)&&n!==(n=s[6].name+"")&&F(i,n),s[1]?o?(o.p(s,u),u&2&&j(o,1)):(o=Ue(s),o.c(),j(o,1),o.m(e,c)):o&&(V(),E(o,1,1,()=>{o=null}),Y())},i(s){r||(j(o),r=!0)},o(s){E(o),r=!1},d(s){s&&M(e),o&&o.d()}}}function rl(t){let e,l,n,i=t[0].name+"",a,c,r,o=t[0].description+"",s,u,h,v,b,y,d,p=t[0].requirements,g=[];for(let k=0;k<p.length;k+=1)g[k]=Ke(Ie(t,p,k));const $=k=>E(g[k],1,1,()=>{g[k]=null}),z=t[4].buttons,P=ot(z,t,t[3],We);return{c(){e=m("div"),l=m("div"),n=m("div"),a=N(i),c=C(),r=m("div"),s=N(o),u=C(),h=m("h5"),h.textContent="Requirements",v=C(),b=m("table");for(let k=0;k<g.length;k+=1)g[k].c();y=C(),P&&P.c(),_(n,"class","card-title"),_(b,"width","100%"),_(r,"class","card-text"),_(l,"class","card-body"),_(e,"class","card window")},m(k,L){O(k,e,L),f(e,l),f(l,n),f(n,a),f(l,c),f(l,r),f(r,s),f(r,u),f(r,h),f(r,v),f(r,b);for(let w=0;w<g.length;w+=1)g[w].m(b,null);f(r,y),P&&P.m(r,null),d=!0},p(k,[L]){if((!d||L&1)&&i!==(i=k[0].name+"")&&F(a,i),(!d||L&1)&&o!==(o=k[0].description+"")&&F(s,o),L&7){p=k[0].requirements;let w;for(w=0;w<p.length;w+=1){const H=Ie(k,p,w);g[w]?(g[w].p(H,L),j(g[w],1)):(g[w]=Ke(H),g[w].c(),j(g[w],1),g[w].m(b,null))}for(V(),w=p.length;w<g.length;w+=1)$(w);Y()}P&&P.p&&(!d||L&8)&&ut(P,z,k,k[3],d?ft(z,k[3],L,il):ht(k[3]),We)},i(k){if(!d){for(let L=0;L<p.length;L+=1)j(g[L]);j(P,k),d=!0}},o(k){g=g.filter(Boolean);for(let L=0;L<g.length;L+=1)E(g[L]);E(P,k),d=!1},d(k){k&&M(e),oe(g,k),P&&P.d(k)}}}function sl(t,e,l){let{$$slots:n={},$$scope:i}=e,{project:a}=e,{active:c=!1}=e,r=ke();const o=s=>r("work",s);return t.$$set=s=>{"project"in s&&l(0,a=s.project),"active"in s&&l(1,c=s.active),"$$scope"in s&&l(3,i=s.$$scope)},[a,c,r,i,n,o]}class St extends X{constructor(e){super(),G(this,e,sl,rl,Q,{project:0,active:1})}}function Qe(t,e,l){const n=t.slice();return n[2]=e[l],n}function ol(t){let e,l,n,i;return{c(){e=m("div"),l=m("button"),l.textContent="Take",_(l,"class","btn btn-primary"),_(e,"slot","buttons")},m(a,c){O(a,e,c),f(e,l),n||(i=ee(l,"click",t[0](t[2])),n=!0)},p(a,c){t=a},d(a){a&&M(e),n=!1,i()}}}function Ve(t){let e,l,n,i;return l=new St({props:{project:t[2],$$slots:{buttons:[ol]},$$scope:{ctx:t}}}),{c(){e=m("div"),K(l.$$.fragment),n=C(),_(e,"class","col-4 ms-auto me-auto")},m(a,c){O(a,e,c),W(l,e,null),f(e,n),i=!0},p(a,c){const r={};c&32&&(r.$$scope={dirty:c,ctx:a}),l.$set(r)},i(a){i||(j(l.$$.fragment,a),i=!0)},o(a){E(l.$$.fragment,a),i=!1},d(a){a&&M(e),I(l)}}}function cl(t){let e,l,n,i=Je,a=[];for(let r=0;r<i.length;r+=1)a[r]=Ve(Qe(t,i,r));const c=r=>E(a[r],1,1,()=>{a[r]=null});return{c(){e=m("div"),l=m("div");for(let r=0;r<a.length;r+=1)a[r].c();_(l,"class","row"),_(e,"class","container mt-2")},m(r,o){O(r,e,o),f(e,l);for(let s=0;s<a.length;s+=1)a[s].m(l,null);n=!0},p(r,[o]){if(o&1){i=Je;let s;for(s=0;s<i.length;s+=1){const u=Qe(r,i,s);a[s]?(a[s].p(u,o),j(a[s],1)):(a[s]=Ve(u),a[s].c(),j(a[s],1),a[s].m(l,null))}for(V(),s=i.length;s<a.length;s+=1)c(s);Y()}},i(r){if(!n){for(let o=0;o<i.length;o+=1)j(a[o]);n=!0}},o(r){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)E(a[o]);n=!1},d(r){r&&M(e),oe(a,r)}}}function fl(t){let e=ke();function l(n){return()=>e("select",n)}return[l]}class ul extends X{constructor(e){super(),G(this,e,fl,cl,Q,{})}}function hl(t){let e,l,n=t[0].mental_health+"",i;return{c(){e=m("div"),l=m("div"),i=N(n),_(l,"class","progress-bar bg-danger"),_(l,"role","progressbar"),_(l,"aria-label","Mental health"),ie(l,"width",t[1]+"%"),_(l,"aria-valuenow",t[1]),_(l,"aria-valuemin",0),_(l,"aria-valuemax",100),_(e,"class","progress mb-1")},m(a,c){O(a,e,c),f(e,l),f(l,i)},p(a,[c]){c&1&&n!==(n=a[0].mental_health+"")&&F(i,n),c&2&&ie(l,"width",a[1]+"%"),c&2&&_(l,"aria-valuenow",a[1])},i:q,o:q,d(a){a&&M(e)}}}function ml(t,e,l){let n,{char:i}=e;return t.$$set=a=>{"char"in a&&l(0,i=a.char)},t.$$.update=()=>{t.$$.dirty&1&&l(1,n=i.mental_health/i.max_mental_health*100)},[i,n]}class dl extends X{constructor(e){super(),G(this,e,ml,hl,Q,{char:0})}}function _l(t){let e,l,n=t[0].physical_health+"",i;return{c(){e=m("div"),l=m("div"),i=N(n),_(l,"class","progress-bar bg-success"),_(l,"role","progressbar"),_(l,"aria-label","Mental health"),ie(l,"width",t[1]+"%"),_(l,"aria-valuenow",t[1]),_(l,"aria-valuemin",0),_(l,"aria-valuemax",100),_(e,"class","progress mb-1")},m(a,c){O(a,e,c),f(e,l),f(l,i)},p(a,[c]){c&1&&n!==(n=a[0].physical_health+"")&&F(i,n),c&2&&ie(l,"width",a[1]+"%"),c&2&&_(l,"aria-valuenow",a[1])},i:q,o:q,d(a){a&&M(e)}}}function pl(t,e,l){let n,{char:i}=e;return t.$$set=a=>{"char"in a&&l(0,i=a.char)},t.$$.update=()=>{t.$$.dirty&1&&l(1,n=i.physical_health/i.max_physical_health*100)},[i,n]}class gl extends X{constructor(e){super(),G(this,e,pl,_l,Q,{char:0})}}function Ye(t,e,l){const n=t.slice();return n[12]=e[l],n}function Ge(t,e,l){const n=t.slice();return n[12]=e[l],n}function Xe(t){let e,l;return e=new tl({}),e.$on("select",t[6]),{c(){K(e.$$.fragment)},m(n,i){W(e,n,i),l=!0},p:q,i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){E(e.$$.fragment,n),l=!1},d(n){I(e,n)}}}function Ze(t){let e,l;return e=new ul({}),e.$on("select",t[7]),{c(){K(e.$$.fragment)},m(n,i){W(e,n,i),l=!0},p:q,i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){E(e.$$.fragment,n),l=!1},d(n){I(e,n)}}}function xe(t){let e,l,n,i,a,c,r,o,s,u,h,v,b,y=t[4].name+"",d,p,g,$,z,P,k,L,w,H,A,B,R,me,Z,le;$=new dl({props:{char:t[4]}}),k=new gl({props:{char:t[4]}});let J=t[3]&&et(t);A=new St({props:{project:t[5],active:!0}}),A.$on("work",t[9]);let D=t[1]&&lt(t);return Z=new $t({props:{char:t[4],showSkills:!1}}),Z.$on("break",t[10]),{c(){e=m("div"),l=m("div"),n=m("div"),i=m("div"),a=m("div"),c=N("Time: "),r=N(t[0]),o=N(` hours
        `),s=m("table"),u=m("thead"),u.innerHTML=`<tr><th>Name</th> 
            <th>Mental</th> 
            <th>Physical</th></tr>`,h=C(),v=m("tr"),b=m("td"),d=N(y),p=C(),g=m("td"),K($.$$.fragment),z=C(),P=m("td"),K(k.$$.fragment),L=C(),J&&J.c(),w=C(),H=m("div"),K(A.$$.fragment),B=C(),D&&D.c(),R=C(),me=m("div"),K(Z.$$.fragment),_(s,"width","100%"),_(a,"class","card-body"),_(i,"class","card window"),_(n,"class","col-4"),_(H,"class","col-4"),_(me,"class","col-4 me-auto ms-auto"),_(l,"class","row"),_(e,"class","container")},m(T,U){O(T,e,U),f(e,l),f(l,n),f(n,i),f(i,a),f(a,c),f(a,r),f(a,o),f(a,s),f(s,u),f(s,h),f(s,v),f(v,b),f(b,d),f(v,p),f(v,g),W($,g,null),f(v,z),f(v,P),W(k,P,null),f(n,L),J&&J.m(n,null),f(l,w),f(l,H),W(A,H,null),f(H,B),D&&D.m(H,null),f(l,R),f(l,me),W(Z,me,null),le=!0},p(T,U){(!le||U&1)&&F(r,T[0]),(!le||U&16)&&y!==(y=T[4].name+"")&&F(d,y);const Pe={};U&16&&(Pe.char=T[4]),$.$set(Pe);const Me={};U&16&&(Me.char=T[4]),k.$set(Me),T[3]?J?J.p(T,U):(J=et(T),J.c(),J.m(n,null)):J&&(J.d(1),J=null);const Ee={};U&32&&(Ee.project=T[5]),A.$set(Ee),T[1]?D?D.p(T,U):(D=lt(T),D.c(),D.m(H,null)):D&&(D.d(1),D=null);const Ne={};U&16&&(Ne.char=T[4]),Z.$set(Ne)},i(T){le||(j($.$$.fragment,T),j(k.$$.fragment,T),j(A.$$.fragment,T),j(Z.$$.fragment,T),le=!0)},o(T){E($.$$.fragment,T),E(k.$$.fragment,T),E(A.$$.fragment,T),E(Z.$$.fragment,T),le=!1},d(T){T&&M(e),I($),I(k),J&&J.d(),I(A),D&&D.d(),I(Z)}}}function et(t){let e,l,n=t[4].name+"",i,a,c,r=t[3],o=[];for(let s=0;s<r.length;s+=1)o[s]=tt(Ge(t,r,s));return{c(){e=m("div"),l=m("div"),i=N(n),a=N(` can take a break doing these activities:
        `),c=m("table");for(let s=0;s<o.length;s+=1)o[s].c();_(c,"width","100%"),_(l,"class","card-body"),_(e,"class","card window mt-2")},m(s,u){O(s,e,u),f(e,l),f(l,i),f(l,a),f(l,c);for(let h=0;h<o.length;h+=1)o[h].m(c,null)},p(s,u){if(u&16&&n!==(n=s[4].name+"")&&F(i,n),u&2056){r=s[3];let h;for(h=0;h<r.length;h+=1){const v=Ge(s,r,h);o[h]?o[h].p(v,u):(o[h]=tt(v),o[h].c(),o[h].m(c,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=r.length}},d(s){s&&M(e),oe(o,s)}}}function tt(t){let e,l,n=t[12].base.name+"",i,a,c,r,o,s,u;return{c(){e=m("tr"),l=m("td"),i=N(n),a=C(),c=m("td"),r=m("button"),r.textContent="Do",o=C(),_(r,"class","btn btn-primary")},m(h,v){O(h,e,v),f(e,l),f(l,i),f(e,a),f(e,c),f(c,r),f(e,o),s||(u=ee(r,"click",function(){se(t[11](t[12]))&&t[11](t[12]).apply(this,arguments)}),s=!0)},p(h,v){t=h,v&8&&n!==(n=t[12].base.name+"")&&F(i,n)},d(h){h&&M(e),s=!1,u()}}}function lt(t){let e,l,n,i=t[4].name+"",a,c,r=t[1].name+"",o,s,u,h,v,b=t[2],y=[];for(let p=0;p<b.length;p+=1)y[p]=at(Ye(t,b,p));let d=null;return b.length||(d=nt()),{c(){e=m("div"),l=m("div"),n=m("h5"),a=N(i),c=N("'s skills available for "),o=N(r),s=C(),u=m("table"),h=m("tr"),h.innerHTML=`<th>Name</th> 
            <th>Character skill Level</th> 
            <th>Total time</th>`,v=C();for(let p=0;p<y.length;p+=1)y[p].c();d&&d.c(),_(u,"width","100%"),_(l,"class","card-body"),_(e,"class","card window mt-2")},m(p,g){O(p,e,g),f(e,l),f(l,n),f(n,a),f(n,c),f(n,o),f(l,s),f(l,u),f(u,h),f(u,v);for(let $=0;$<y.length;$+=1)y[$].m(u,null);d&&d.m(u,null)},p(p,g){if(g&16&&i!==(i=p[4].name+"")&&F(a,i),g&2&&r!==(r=p[1].name+"")&&F(o,r),g&262){b=p[2];let $;for($=0;$<b.length;$+=1){const z=Ye(p,b,$);y[$]?y[$].p(z,g):(y[$]=at(z),y[$].c(),y[$].m(u,null))}for(;$<y.length;$+=1)y[$].d(1);y.length=b.length,!b.length&&d?d.p(p,g):b.length?d&&(d.d(1),d=null):(d=nt(),d.c(),d.m(u,null))}},d(p){p&&M(e),oe(y,p),d&&d.d()}}}function nt(t){let e;return{c(){e=m("tr"),e.innerHTML=`<td>Nothing</td> 
            `},m(l,n){O(l,e,n)},p:q,d(l){l&&M(e)}}}function at(t){let e,l,n=t[12].skill.name+"",i,a,c,r=t[12].character_skill.level+"",o,s,u,h,v=Math.floor(t[12].total/t[12].character_skill.level)+"",b,y,d,p,g,$,z,P;return{c(){e=m("tr"),l=m("td"),i=N(n),a=C(),c=m("td"),o=N(r),s=C(),u=m("td"),h=N("> "),b=N(v),y=N("h"),d=C(),p=m("td"),g=m("button"),g.textContent="Do",$=C(),_(g,"class","btn btn-primary")},m(k,L){O(k,e,L),f(e,l),f(l,i),f(e,a),f(e,c),f(c,o),f(e,s),f(e,u),f(u,h),f(u,b),f(u,y),f(e,d),f(e,p),f(p,g),f(e,$),z||(P=ee(g,"click",function(){se(t[8](t[1],t[12],t[12].character_skill))&&t[8](t[1],t[12],t[12].character_skill).apply(this,arguments)}),z=!0)},p(k,L){t=k,L&4&&n!==(n=t[12].skill.name+"")&&F(i,n),L&4&&r!==(r=t[12].character_skill.level+"")&&F(o,r),L&4&&v!==(v=Math.floor(t[12].total/t[12].character_skill.level)+"")&&F(b,v)},d(k){k&&M(e),z=!1,P()}}}function bl(t){let e,l,n,i,a=!t[4]&&Xe(t),c=t[4]&&!t[5]&&Ze(t),r=t[4]&&t[5]&&xe(t);return{c(){a&&a.c(),e=C(),c&&c.c(),l=C(),r&&r.c(),n=Ot()},m(o,s){a&&a.m(o,s),O(o,e,s),c&&c.m(o,s),O(o,l,s),r&&r.m(o,s),O(o,n,s),i=!0},p(o,[s]){o[4]?a&&(V(),E(a,1,1,()=>{a=null}),Y()):a?(a.p(o,s),s&16&&j(a,1)):(a=Xe(o),a.c(),j(a,1),a.m(e.parentNode,e)),o[4]&&!o[5]?c?(c.p(o,s),s&48&&j(c,1)):(c=Ze(o),c.c(),j(c,1),c.m(l.parentNode,l)):c&&(V(),E(c,1,1,()=>{c=null}),Y()),o[4]&&o[5]?r?(r.p(o,s),s&48&&j(r,1)):(r=xe(o),r.c(),j(r,1),r.m(n.parentNode,n)):r&&(V(),E(r,1,1,()=>{r=null}),Y())},i(o){i||(j(a),j(c),j(r),i=!0)},o(o){E(a),E(c),E(r),i=!1},d(o){a&&a.d(o),o&&M(e),c&&c.d(o),o&&M(l),r&&r.d(o),o&&M(n)}}}function it(t,e){t.update(l=>{let n=l.physical_health==0?-e.affinity-e.base.mental_health-1:0;return l.mental_health=Math.max(Math.min(l.mental_health+e.affinity+e.base.mental_health+n,l.max_mental_health),0),l.physical_health=Math.max(Math.min(l.physical_health+e.base.physical_health,l.max_physical_health),0),l})}function vl(t,e,l){let n,i;Le(t,_e,d=>l(4,n=d)),Le(t,$e,d=>l(5,i=d));let a=0;function c(d){let p=JSON.parse(JSON.stringify(d.detail));_e.set(p)}function r(d){let p=JSON.parse(JSON.stringify(d.detail));p.requirements.forEach(g=>g.progress=0),$e.set(p)}function o(d,p,g){let $=n.mental_health/n.max_mental_health;return()=>{p.progress=Math.min((p.progress??0)+g.level*$,p.total),d.progress=Math.floor(d.options.reduce((P,k)=>P+(k.progress??0)/k.total*100,0));let z=i;$e.set(z),l(0,a++,a),it(_e,g)}}let s=null,u=[];function h(d){let p=d.detail;l(1,s=p),l(2,u=[]),l(3,v=null),s.options.forEach(g=>{g.character_skill=n.skills.find($=>g.skill.id==$.base.id),g.character_skill&&u.push(g)})}let v=null;function b(d){let p=d.detail;l(3,v=p.skills.filter(g=>["break","exercise"].includes(g.base.category))),l(1,s=null),l(2,u=[])}function y(d){return()=>{it(_e,d),l(0,a++,a)}}return[a,s,u,v,n,i,c,r,o,h,b,y]}class yl extends X{constructor(e){super(),G(this,e,vl,bl,Q,{})}}new yl({target:document.getElementById("app")});
