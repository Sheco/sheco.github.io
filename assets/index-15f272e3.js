(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function l(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=l(i);fetch(i.href,n)}})();function L(){}const bt=t=>t;function Wt(t,e){for(const l in e)t[l]=e[l];return t}function vt(t){return t()}function Ie(){return Object.create(null)}function ce(t){t.forEach(vt)}function fe(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Dt(t){return Object.keys(t).length===0}function Ft(t,...e){if(t==null)return L;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function Ue(t,e,l){t.$$.on_destroy.push(Ft(e,l))}function yt(t,e,l,a){if(t){const i=kt(t,e,l,a);return t[0](i)}}function kt(t,e,l,a){return t[1]&&a?Wt(l.ctx.slice(),t[1](a(e))):l.ctx}function wt(t,e,l,a){if(t[2]&&a){const i=t[2](a(l));if(e.dirty===void 0)return i;if(typeof i=="object"){const n=[],r=Math.max(e.dirty.length,i.length);for(let s=0;s<r;s+=1)n[s]=e.dirty[s]|i[s];return n}return e.dirty|i}return e.dirty}function $t(t,e,l,a,i,n){if(i){const r=kt(e,l,a,n);t.p(r,i)}}function jt(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let a=0;a<l;a++)e[a]=-1;return e}return-1}const Ct=typeof window<"u";let Pt=Ct?()=>window.performance.now():()=>Date.now(),Oe=Ct?t=>requestAnimationFrame(t):L;const re=new Set;function Mt(t){re.forEach(e=>{e.c(t)||(re.delete(e),e.f())}),re.size!==0&&Oe(Mt)}function St(t){let e;return re.size===0&&Oe(Mt),{promise:new Promise(l=>{re.add(e={c:t,f:l})}),abort(){re.delete(e)}}}function f(t,e){t.appendChild(e)}function Et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Jt(t){const e=m("style");return Rt(Et(t),e),e.sheet}function Rt(t,e){return f(t.head||t,e),e.sheet}function N(t,e,l){t.insertBefore(e,l||null)}function q(t){t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function m(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function M(){return E(" ")}function qt(){return E("")}function ge(t,e,l,a){return t.addEventListener(e,l,a),()=>t.removeEventListener(e,l,a)}function g(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function It(t){return Array.from(t.childNodes)}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e,l,a){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,a?"important":"")}function Nt(t,e,{bubbles:l=!1,cancelable:a=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,l,a,e),i}const je=new Map;let Ce=0;function Ut(t){let e=5381,l=t.length;for(;l--;)e=(e<<5)-e^t.charCodeAt(l);return e>>>0}function Gt(t,e){const l={stylesheet:Jt(e),rules:{}};return je.set(t,l),l}function Tt(t,e,l,a,i,n,r,s=0){const c=16.666/a;let o=`{
`;for(let d=0;d<=1;d+=c){const p=e+(l-e)*n(d);o+=d*100+`%{${r(p,1-p)}}
`}const h=o+`100% {${r(l,1-l)}}
}`,_=`__svelte_${Ut(h)}_${s}`,$=Et(t),{stylesheet:u,rules:y}=je.get($)||Gt($,t);y[_]||(y[_]=!0,u.insertRule(`@keyframes ${_} ${h}`,u.cssRules.length));const k=t.style.animation||"";return t.style.animation=`${k?`${k}, `:""}${_} ${a}ms linear ${i}ms 1 both`,Ce+=1,_}function Ne(t,e){const l=(t.style.animation||"").split(", "),a=l.filter(e?n=>n.indexOf(e)<0:n=>n.indexOf("__svelte")===-1),i=l.length-a.length;i&&(t.style.animation=a.join(", "),Ce-=i,Ce||Kt())}function Kt(){Oe(()=>{Ce||(je.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&q(e)}),je.clear())})}let pe;function _e(t){pe=t}function Qt(){if(!pe)throw new Error("Function called outside component initialization");return pe}function ze(){const t=Qt();return(e,l,{cancelable:a=!1}={})=>{const i=t.$$.callbacks[e];if(i){const n=Nt(e,l,{cancelable:a});return i.slice().forEach(r=>{r.call(t,n)}),!n.defaultPrevented}return!0}}const de=[],Ge=[],we=[],Ke=[],Vt=Promise.resolve();let Te=!1;function Yt(){Te||(Te=!0,Vt.then(Ot))}function oe(t){we.push(t)}const Ee=new Set;let ye=0;function Ot(){const t=pe;do{for(;ye<de.length;){const e=de[ye];ye++,_e(e),Xt(e.$$)}for(_e(null),de.length=0,ye=0;Ge.length;)Ge.pop()();for(let e=0;e<we.length;e+=1){const l=we[e];Ee.has(l)||(Ee.add(l),l())}we.length=0}while(de.length);for(;Ke.length;)Ke.pop()();Te=!1,Ee.clear(),_e(t)}function Xt(t){if(t.fragment!==null){t.update(),ce(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}let me;function zt(){return me||(me=Promise.resolve(),me.then(()=>{me=null})),me}function Pe(t,e,l){t.dispatchEvent(Nt(`${e?"intro":"outro"}${l}`))}const $e=new Set;let Z;function x(){Z={r:0,c:[],p:Z}}function ee(){Z.r||ce(Z.c),Z=Z.p}function S(t,e){t&&t.i&&($e.delete(t),t.i(e))}function O(t,e,l,a){if(t&&t.o){if($e.has(t))return;$e.add(t),Z.c.push(()=>{$e.delete(t),a&&(l&&t.d(1),a())}),t.o(e)}else a&&a()}const Bt={duration:0};function Zt(t,e,l){const a={direction:"in"};let i=e(t,l,a),n=!1,r,s,c=0;function o(){r&&Ne(t,r)}function h(){const{delay:$=0,duration:u=300,easing:y=bt,tick:k=L,css:d}=i||Bt;d&&(r=Tt(t,0,1,u,$,y,d,c++)),k(0,1);const p=Pt()+$,v=p+u;s&&s.abort(),n=!0,oe(()=>Pe(t,!0,"start")),s=St(T=>{if(n){if(T>=v)return k(1,0),Pe(t,!0,"end"),o(),n=!1;if(T>=p){const z=y((T-p)/u);k(z,1-z)}}return n})}let _=!1;return{start(){_||(_=!0,Ne(t),fe(i)?(i=i(a),zt().then(h)):h())},invalidate(){_=!1},end(){n&&(o(),n=!1)}}}function xt(t,e,l){const a={direction:"out"};let i=e(t,l,a),n=!0,r;const s=Z;s.r+=1;function c(){const{delay:o=0,duration:h=300,easing:_=bt,tick:$=L,css:u}=i||Bt;u&&(r=Tt(t,1,0,h,o,_,u));const y=Pt()+o,k=y+h;oe(()=>Pe(t,!1,"start")),St(d=>{if(n){if(d>=k)return $(0,1),Pe(t,!1,"end"),--s.r||ce(s.c),!1;if(d>=y){const p=_((d-y)/h);$(1-p,p)}}return n})}return fe(i)?zt().then(()=>{i=i(a),c()}):c(),{end(o){o&&i.tick&&i.tick(1,0),n&&(r&&Ne(t,r),n=!1)}}}function U(t){t&&t.c()}function R(t,e,l,a){const{fragment:i,after_update:n}=t.$$;i&&i.m(e,l),a||oe(()=>{const r=t.$$.on_mount.map(vt).filter(fe);t.$$.on_destroy?t.$$.on_destroy.push(...r):ce(r),t.$$.on_mount=[]}),n.forEach(oe)}function I(t,e){const l=t.$$;l.fragment!==null&&(ce(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function el(t,e){t.$$.dirty[0]===-1&&(de.push(t),Yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,l,a,i,n,r,s=[-1]){const c=pe;_e(t);const o=t.$$={fragment:null,ctx:[],props:n,update:L,not_equal:i,bound:Ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ie(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};r&&r(o.root);let h=!1;if(o.ctx=l?l(t,e.props||{},(_,$,...u)=>{const y=u.length?u[0]:$;return o.ctx&&i(o.ctx[_],o.ctx[_]=y)&&(!o.skip_bound&&o.bound[_]&&o.bound[_](y),h&&el(t,_)),$}):[],o.update(),h=!0,ce(o.before_update),o.fragment=a?a(o.ctx):!1,e.target){if(e.hydrate){const _=It(e.target);o.fragment&&o.fragment.l(_),_.forEach(q)}else o.fragment&&o.fragment.c();e.intro&&S(t.$$.fragment),R(t,e.target,e.anchor,e.customElement),Ot()}_e(c)}class V{$destroy(){I(this,1),this.$destroy=L}$on(e,l){if(!fe(l))return L;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(l),()=>{const i=a.indexOf(l);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!Dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function tl(t){const e=t-1;return e*e*e+1}function Qe(t,{delay:e=0,duration:l=400,easing:a=tl}={}){const i=getComputedStyle(t),n=+i.opacity,r=parseFloat(i.height),s=parseFloat(i.paddingTop),c=parseFloat(i.paddingBottom),o=parseFloat(i.marginTop),h=parseFloat(i.marginBottom),_=parseFloat(i.borderTopWidth),$=parseFloat(i.borderBottomWidth);return{delay:e,duration:l,easing:a,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*n};height: ${u*r}px;padding-top: ${u*s}px;padding-bottom: ${u*c}px;margin-top: ${u*o}px;margin-bottom: ${u*h}px;border-top-width: ${u*_}px;border-bottom-width: ${u*$}px;`}}function ll(t){let e;return{c(){e=E("😁")},m(l,a){N(l,e,a)},d(l){l&&q(e)}}}function nl(t){let e;return{c(){e=E("😃")},m(l,a){N(l,e,a)},d(l){l&&q(e)}}}function al(t){let e;return{c(){e=E("🙂")},m(l,a){N(l,e,a)},d(l){l&&q(e)}}}function il(t){let e;function l(n,r){if(n[0]==0)return al;if(n[0]==1)return nl;if(n[0]==2)return ll}let a=l(t),i=a&&a(t);return{c(){i&&i.c(),e=qt()},m(n,r){i&&i.m(n,r),N(n,e,r)},p(n,[r]){a!==(a=l(n))&&(i&&i.d(1),i=a&&a(n),i&&(i.c(),i.m(e.parentNode,e)))},i:L,o:L,d(n){i&&i.d(n),n&&q(e)}}}function rl(t,e,l){let{amount:a=2}=e;return t.$$set=i=>{"amount"in i&&l(0,a=i.amount)},[a]}class sl extends V{constructor(e){super(),Q(this,e,rl,il,G,{amount:0})}}function Ve(t,e,l){const a=t.slice();return a[3]=e[l],a}function Ye(t){let e,l,a,i,n=t[3].base.name+"",r,s,c,o=t[3].level+"",h,_,$;return a=new sl({props:{amount:t[3].affinity}}),{c(){e=m("tr"),l=m("td"),U(a.$$.fragment),i=M(),r=E(n),s=M(),c=m("td"),h=E(o),_=M()},m(u,y){N(u,e,y),f(e,l),R(a,l,null),f(l,i),f(l,r),f(e,s),f(e,c),f(c,h),f(e,_),$=!0},p(u,y){const k={};y&1&&(k.amount=u[3].affinity),a.$set(k),(!$||y&1)&&n!==(n=u[3].base.name+"")&&A(r,n),(!$||y&1)&&o!==(o=u[3].level+"")&&A(h,o)},i(u){$||(S(a.$$.fragment,u),$=!0)},o(u){O(a.$$.fragment,u),$=!1},d(u){u&&q(e),I(a)}}}function ol(t){let e,l,a,i=t[0].name+"",n,r,s,c=t[0].description+"",o,h,_,$,u,y,k,d,p=t[0].skills,v=[];for(let b=0;b<p.length;b+=1)v[b]=Ye(Ve(t,p,b));const T=b=>O(v[b],1,1,()=>{v[b]=null}),z=t[2].default,w=yt(z,t,t[1],null);return{c(){e=m("div"),l=m("div"),a=m("h5"),n=E(i),r=M(),s=m("h6"),o=E(c),h=M(),_=m("div"),$=m("table");for(let b=0;b<v.length;b+=1)v[b].c();u=M(),w&&w.c(),g(a,"class","card-title"),g(s,"class","card-subtitle mb-2"),g($,"class","table"),g(_,"class","card-text"),g(l,"class","card-body"),g(e,"class","card window")},m(b,C){N(b,e,C),f(e,l),f(l,a),f(a,n),f(l,r),f(l,s),f(s,o),f(l,h),f(l,_),f(_,$);for(let B=0;B<v.length;B+=1)v[B].m($,null);f(l,u),w&&w.m(l,null),d=!0},p(b,[C]){if((!d||C&1)&&i!==(i=b[0].name+"")&&A(n,i),(!d||C&1)&&c!==(c=b[0].description+"")&&A(o,c),C&1){p=b[0].skills;let B;for(B=0;B<p.length;B+=1){const K=Ve(b,p,B);v[B]?(v[B].p(K,C),S(v[B],1)):(v[B]=Ye(K),v[B].c(),S(v[B],1),v[B].m($,null))}for(x(),B=p.length;B<v.length;B+=1)T(B);ee()}w&&w.p&&(!d||C&2)&&$t(w,z,b,b[1],d?wt(z,b[1],C,null):jt(b[1]),null)},i(b){if(!d){for(let C=0;C<p.length;C+=1)S(v[C]);S(w,b),oe(()=>{k&&k.end(1),y=Zt(e,Qe,{}),y.start()}),d=!0}},o(b){v=v.filter(Boolean);for(let C=0;C<v.length;C+=1)O(v[C]);O(w,b),y&&y.invalidate(),k=xt(e,Qe,{}),d=!1},d(b){b&&q(e),ue(v,b),w&&w.d(b),b&&k&&k.end()}}}function cl(t,e,l){let{$$slots:a={},$$scope:i}=e,{char:n}=e;return t.$$set=r=>{"char"in r&&l(0,n=r.char),"$$scope"in r&&l(1,i=r.$$scope)},[n,i,a]}class Lt extends V{constructor(e){super(),Q(this,e,cl,ol,G,{char:0})}}let j={javascript:{id:"javascript",name:"Javascript",category:"programming_language",mental_health:-3,physical_health:-1},php:{id:"php",name:"PHP",category:"programming_language",mental_health:-3,physical_health:-1},python:{id:"python",name:"Python",category:"programming_language",mental_health:-3,physical_health:-1},html:{id:"html",name:"HTML",category:"frontend_skill",mental_health:-3,physical_health:-1},css:{id:"css",name:"CSS",category:"frontend_skill",mental_health:-3,physical_health:-1},restapi:{id:"restapi",name:"Rest API",category:"backend_skill",mental_health:-3,physical_health:-1},mysql:{id:"mysql",name:"MySQL",category:"backend_skill",mental_health:-3,physical_health:-1},mongodb:{id:"mongodb",name:"MongoDB",category:"backend_skill",mental_health:-3,physical_health:-1},elastic:{id:"elastic",name:"ElasticSearch",category:"backend_skill",mental_health:-3,physical_health:-1},organization:{id:"organization",name:"Organize tasks",category:"soft_skill",mental_health:-3,physical_health:-1},teammeeting:{id:"teammeeting",name:"Team meeting",category:"soft_skill",mental_health:-3,physical_health:-1},stretch:{id:"stretch",name:"Stretch",category:"exercise",mental_health:0,physical_health:2},walk:{id:"walk",name:"Walk",category:"exercise",mental_health:1,physical_health:1},videogames:{id:"videogames",name:"Play video games",category:"break",mental_health:2,physical_health:-1},watchtv:{id:"watchtv",name:"Watch TV",category:"break",mental_health:1,physical_health:-1},sleep:{id:"sleep",name:"Sleep",category:"break",mental_health:3,physical_health:0}},Xe=[{name:"Alex",description:"40 year old developer who has worked on multiple different projects",max_mental_health:20,max_physical_health:20,mental_health:20,physical_health:20,time:0,skills:[{base:j.organization,affinity:1,level:7},{base:j.teammeeting,affinity:2,level:7},{base:j.javascript,affinity:2,level:9},{base:j.php,affinity:1,level:9},{base:j.html,affinity:1,level:8},{base:j.css,affinity:1,level:7},{base:j.restapi,affinity:2,level:8},{base:j.mysql,affinity:2,level:8},{base:j.stretch,affinity:2,level:10},{base:j.walk,affinity:0,level:10},{base:j.videogames,affinity:2,level:10},{base:j.watchtv,affinity:0,level:10},{base:j.sleep,affinity:2,level:10}]},{name:"Max",description:"Junior developer eager to learn and create cool new stuff",max_mental_health:20,max_physical_health:20,mental_health:20,physical_health:20,time:0,skills:[{base:j.organization,affinity:0,level:5},{base:j.teammeeting,affinity:2,level:5},{base:j.javascript,affinity:2,level:6},{base:j.html,affinity:2,level:5},{base:j.css,affinity:2,level:5},{base:j.mysql,affinity:2,level:6},{base:j.stretch,affinity:0,level:10},{base:j.walk,affinity:0,level:10},{base:j.videogames,affinity:2,level:10},{base:j.watchtv,affinity:0,level:10},{base:j.sleep,affinity:2,level:10}]}],Ze=[{name:"Create a blog",description:"Create a website where we can post simple articles. Can be done using Javascript, PHP or Python",requirements:[{name:"Programming",options:[{skill:j.javascript,total:50},{skill:j.php,total:50},{skill:j.python,total:70}]},{name:"HTML",options:[{skill:j.html,total:10}]},{name:"CSS",options:[{skill:j.css,total:10}]},{name:"Organization",options:[{skill:j.organization,total:30}]}]},{name:"Create a product catalog",description:"Create a website to show and maintain our product catalog. Can be done using Javascript, PHP or Python.",requirements:[{name:"Programming",options:[{skill:j.javascript,total:60},{skill:j.php,total:60},{skill:j.python,total:75}]},{name:"HTML",options:[{skill:j.html,total:15}]},{name:"CSS",options:[{skill:j.css,total:15}]},{name:"Organization",options:[{skill:j.organization,total:50}]}]},{name:"Create a payment API mechanism",description:"Upgrade an app to support paying using a credit card, using a bank provider. You can use either Javascript or Python.",requirements:[{name:"Programming",options:[{skill:j.javascript,total:60},{skill:j.python,total:75}]},{name:"Rest API",options:[{skill:j.restapi,total:50}]},{name:"Organization",options:[{skill:j.organization,total:90}]}]}];function xe(t,e,l){const a=t.slice();return a[2]=e[l],a}function fl(t){let e,l,a;return{c(){e=m("button"),e.textContent="Select",g(e,"class","btn btn-primary")},m(i,n){N(i,e,n),l||(a=ge(e,"click",t[0](t[2])),l=!0)},p(i,n){t=i},d(i){i&&q(e),l=!1,a()}}}function et(t){let e,l,a,i;return l=new Lt({props:{char:t[2],$$slots:{default:[fl]},$$scope:{ctx:t}}}),{c(){e=m("div"),U(l.$$.fragment),a=M(),g(e,"class","col-3")},m(n,r){N(n,e,r),R(l,e,null),f(e,a),i=!0},p(n,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:n}),l.$set(s)},i(n){i||(S(l.$$.fragment,n),i=!0)},o(n){O(l.$$.fragment,n),i=!1},d(n){n&&q(e),I(l)}}}function ul(t){let e,l,a,i=Xe,n=[];for(let s=0;s<i.length;s+=1)n[s]=et(xe(t,i,s));const r=s=>O(n[s],1,1,()=>{n[s]=null});return{c(){e=m("div"),l=m("div");for(let s=0;s<n.length;s+=1)n[s].c();g(l,"class","row"),g(e,"class","container")},m(s,c){N(s,e,c),f(e,l);for(let o=0;o<n.length;o+=1)n[o].m(l,null);a=!0},p(s,[c]){if(c&1){i=Xe;let o;for(o=0;o<i.length;o+=1){const h=xe(s,i,o);n[o]?(n[o].p(h,c),S(n[o],1)):(n[o]=et(h),n[o].c(),S(n[o],1),n[o].m(l,null))}for(x(),o=i.length;o<n.length;o+=1)r(o);ee()}},i(s){if(!a){for(let c=0;c<i.length;c+=1)S(n[c]);a=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)O(n[c]);a=!1},d(s){s&&q(e),ue(n,s)}}}function hl(t){let e=ze();function l(a){return()=>e("select",a)}return[l]}class ml extends V{constructor(e){super(),Q(this,e,hl,ul,G,{})}}const ie=[];function At(t,e=L){let l;const a=new Set;function i(s){if(G(t,s)&&(t=s,l)){const c=!ie.length;for(const o of a)o[1](),ie.push(o,t);if(c){for(let o=0;o<ie.length;o+=2)ie[o][0](ie[o+1]);ie.length=0}}}function n(s){i(s(t))}function r(s,c=L){const o=[s,c];return a.add(o),a.size===1&&(l=e(i)||L),s(t),()=>{a.delete(o),a.size===0&&(l(),l=null)}}return{set:i,update:n,subscribe:r}}let ke=At(null),qe=At(null);function dl(t){let e,l,a,i;return{c(){e=m("div"),l=m("div"),a=E(t[0]),g(l,"class",i="progress-bar "+t[2]),g(l,"role","progressbar"),g(l,"aria-label",t[1]),se(l,"width",t[3]+"%"),g(l,"aria-valuenow",t[3]),g(l,"aria-valuemin",0),g(l,"aria-valuemax",100),g(e,"class","progress mb-1")},m(n,r){N(n,e,r),f(e,l),f(l,a)},p(n,[r]){r&1&&A(a,n[0]),r&4&&i!==(i="progress-bar "+n[2])&&g(l,"class",i),r&2&&g(l,"aria-label",n[1]),r&8&&se(l,"width",n[3]+"%"),r&8&&g(l,"aria-valuenow",n[3])},i:L,o:L,d(n){n&&q(e)}}}function _l(t,e,l){let a,{value:i}=e,{max:n}=e,{aria_label:r=""}=e,{color:s="bg-dark"}=e;return t.$$set=c=>{"value"in c&&l(0,i=c.value),"max"in c&&l(4,n=c.max),"aria_label"in c&&l(1,r=c.aria_label),"color"in c&&l(2,s=c.color)},t.$$.update=()=>{t.$$.dirty&17&&l(3,a=Math.floor(i/n*100))},[i,r,s,a,n]}class pl extends V{constructor(e){super(),Q(this,e,_l,dl,G,{value:0,max:4,aria_label:1,color:2})}}const gl=t=>({}),tt=t=>({});function lt(t,e,l){const a=t.slice();return a[6]=e[l],a}function bl(t){let e=t[6].options.map(at).join(", ")+"",l;return{c(){l=E(e)},m(a,i){N(a,l,i)},p(a,i){i&1&&e!==(e=a[6].options.map(at).join(", ")+"")&&A(l,e)},i:L,o:L,d(a){a&&q(l)}}}function vl(t){let e,l,a,i,n,r,s,c;l=new pl({props:{value:t[6].progress,max:100}});function o(){return t[5](t[6])}return{c(){e=m("td"),U(l.$$.fragment),a=M(),i=m("td"),n=m("button"),n.textContent="Work",g(e,"width","100%"),g(n,"class","btn btn-primary")},m(h,_){N(h,e,_),R(l,e,null),N(h,a,_),N(h,i,_),f(i,n),r=!0,s||(c=ge(n,"click",o),s=!0)},p(h,_){t=h;const $={};_&1&&($.value=t[6].progress),l.$set($)},i(h){r||(S(l.$$.fragment,h),r=!0)},o(h){O(l.$$.fragment,h),r=!1},d(h){h&&q(e),I(l),h&&q(a),h&&q(i),s=!1,c()}}}function nt(t){let e,l,a=t[6].name+"",i,n,r,s,c,o;const h=[vl,bl],_=[];function $(u,y){return u[1]?0:1}return r=$(t),s=_[r]=h[r](t),{c(){e=m("tr"),l=m("td"),i=E(a),n=M(),s.c(),c=M()},m(u,y){N(u,e,y),f(e,l),f(l,i),f(e,n),_[r].m(e,null),f(e,c),o=!0},p(u,y){(!o||y&1)&&a!==(a=u[6].name+"")&&A(i,a);let k=r;r=$(u),r===k?_[r].p(u,y):(x(),O(_[k],1,1,()=>{_[k]=null}),ee(),s=_[r],s?s.p(u,y):(s=_[r]=h[r](u),s.c()),S(s,1),s.m(e,c))},i(u){o||(S(s),o=!0)},o(u){O(s),o=!1},d(u){u&&q(e),_[r].d()}}}function yl(t){let e,l,a,i=t[0].name+"",n,r,s,c=t[0].description+"",o,h,_,$,u,y,k,d=t[0].requirements,p=[];for(let w=0;w<d.length;w+=1)p[w]=nt(lt(t,d,w));const v=w=>O(p[w],1,1,()=>{p[w]=null}),T=t[4].buttons,z=yt(T,t,t[3],tt);return{c(){e=m("div"),l=m("div"),a=m("div"),n=E(i),r=M(),s=m("div"),o=E(c),h=M(),_=m("h5"),_.textContent="Requirements",$=M(),u=m("table");for(let w=0;w<p.length;w+=1)p[w].c();y=M(),z&&z.c(),g(a,"class","card-title"),g(u,"width","100%"),g(s,"class","card-text"),g(l,"class","card-body"),g(e,"class","card window")},m(w,b){N(w,e,b),f(e,l),f(l,a),f(a,n),f(l,r),f(l,s),f(s,o),f(s,h),f(s,_),f(s,$),f(s,u);for(let C=0;C<p.length;C+=1)p[C].m(u,null);f(s,y),z&&z.m(s,null),k=!0},p(w,[b]){if((!k||b&1)&&i!==(i=w[0].name+"")&&A(n,i),(!k||b&1)&&c!==(c=w[0].description+"")&&A(o,c),b&7){d=w[0].requirements;let C;for(C=0;C<d.length;C+=1){const B=lt(w,d,C);p[C]?(p[C].p(B,b),S(p[C],1)):(p[C]=nt(B),p[C].c(),S(p[C],1),p[C].m(u,null))}for(x(),C=d.length;C<p.length;C+=1)v(C);ee()}z&&z.p&&(!k||b&8)&&$t(z,T,w,w[3],k?wt(T,w[3],b,gl):jt(w[3]),tt)},i(w){if(!k){for(let b=0;b<d.length;b+=1)S(p[b]);S(z,w),k=!0}},o(w){p=p.filter(Boolean);for(let b=0;b<p.length;b+=1)O(p[b]);O(z,w),k=!1},d(w){w&&q(e),ue(p,w),z&&z.d(w)}}}const at=t=>t.skill.name;function kl(t,e,l){let{$$slots:a={},$$scope:i}=e,{project:n}=e,{active:r=!1}=e,s=ze();const c=o=>s("work",o);return t.$$set=o=>{"project"in o&&l(0,n=o.project),"active"in o&&l(1,r=o.active),"$$scope"in o&&l(3,i=o.$$scope)},[n,r,s,i,a,c]}class Ht extends V{constructor(e){super(),Q(this,e,kl,yl,G,{project:0,active:1})}}function it(t,e,l){const a=t.slice();return a[2]=e[l],a}function wl(t){let e,l,a,i;return{c(){e=m("div"),l=m("button"),l.textContent="Take",g(l,"class","btn btn-primary"),g(e,"slot","buttons")},m(n,r){N(n,e,r),f(e,l),a||(i=ge(l,"click",t[0](t[2])),a=!0)},p(n,r){t=n},d(n){n&&q(e),a=!1,i()}}}function rt(t){let e,l,a,i;return l=new Ht({props:{project:t[2],$$slots:{buttons:[wl]},$$scope:{ctx:t}}}),{c(){e=m("div"),U(l.$$.fragment),a=M(),g(e,"class","col-4 ms-auto me-auto")},m(n,r){N(n,e,r),R(l,e,null),f(e,a),i=!0},p(n,r){const s={};r&32&&(s.$$scope={dirty:r,ctx:n}),l.$set(s)},i(n){i||(S(l.$$.fragment,n),i=!0)},o(n){O(l.$$.fragment,n),i=!1},d(n){n&&q(e),I(l)}}}function $l(t){let e,l,a,i=Ze,n=[];for(let s=0;s<i.length;s+=1)n[s]=rt(it(t,i,s));const r=s=>O(n[s],1,1,()=>{n[s]=null});return{c(){e=m("div"),l=m("div");for(let s=0;s<n.length;s+=1)n[s].c();g(l,"class","row"),g(e,"class","container mt-2")},m(s,c){N(s,e,c),f(e,l);for(let o=0;o<n.length;o+=1)n[o].m(l,null);a=!0},p(s,[c]){if(c&1){i=Ze;let o;for(o=0;o<i.length;o+=1){const h=it(s,i,o);n[o]?(n[o].p(h,c),S(n[o],1)):(n[o]=rt(h),n[o].c(),S(n[o],1),n[o].m(l,null))}for(x(),o=i.length;o<n.length;o+=1)r(o);ee()}},i(s){if(!a){for(let c=0;c<i.length;c+=1)S(n[c]);a=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)O(n[c]);a=!1},d(s){s&&q(e),ue(n,s)}}}function jl(t){let e=ze();function l(a){return()=>e("select",a)}return[l]}class Cl extends V{constructor(e){super(),Q(this,e,jl,$l,G,{})}}function Pl(t){let e,l,a=t[0].mental_health+"",i;return{c(){e=m("div"),l=m("div"),i=E(a),g(l,"class","progress-bar bg-danger"),g(l,"role","progressbar"),g(l,"aria-label","Mental health"),se(l,"width",t[1]+"%"),g(l,"aria-valuenow",t[1]),g(l,"aria-valuemin",0),g(l,"aria-valuemax",100),g(e,"class","progress mb-1")},m(n,r){N(n,e,r),f(e,l),f(l,i)},p(n,[r]){r&1&&a!==(a=n[0].mental_health+"")&&A(i,a),r&2&&se(l,"width",n[1]+"%"),r&2&&g(l,"aria-valuenow",n[1])},i:L,o:L,d(n){n&&q(e)}}}function Ml(t,e,l){let a,{char:i}=e;return t.$$set=n=>{"char"in n&&l(0,i=n.char)},t.$$.update=()=>{t.$$.dirty&1&&l(1,a=i.mental_health/i.max_mental_health*100)},[i,a]}class Sl extends V{constructor(e){super(),Q(this,e,Ml,Pl,G,{char:0})}}function El(t){let e,l,a=t[0].physical_health+"",i;return{c(){e=m("div"),l=m("div"),i=E(a),g(l,"class","progress-bar bg-success"),g(l,"role","progressbar"),g(l,"aria-label","Mental health"),se(l,"width",t[1]+"%"),g(l,"aria-valuenow",t[1]),g(l,"aria-valuemin",0),g(l,"aria-valuemax",100),g(e,"class","progress mb-1")},m(n,r){N(n,e,r),f(e,l),f(l,i)},p(n,[r]){r&1&&a!==(a=n[0].physical_health+"")&&A(i,a),r&2&&se(l,"width",n[1]+"%"),r&2&&g(l,"aria-valuenow",n[1])},i:L,o:L,d(n){n&&q(e)}}}function ql(t,e,l){let a,{char:i}=e;return t.$$set=n=>{"char"in n&&l(0,i=n.char)},t.$$.update=()=>{t.$$.dirty&1&&l(1,a=i.physical_health/i.max_physical_health*100)},[i,a]}class Nl extends V{constructor(e){super(),Q(this,e,ql,El,G,{char:0})}}function st(t,e,l){const a=t.slice();return a[13]=e[l],a}function ot(t,e,l){const a=t.slice();return a[13]=e[l],a}function ct(t){let e,l,a,i,n;return i=new ml({}),i.$on("select",t[7]),{c(){e=m("div"),l=m("h3"),l.textContent="Select a developer you would like to play as.",a=M(),U(i.$$.fragment),g(e,"class","container")},m(r,s){N(r,e,s),f(e,l),f(e,a),R(i,e,null),n=!0},p:L,i(r){n||(S(i.$$.fragment,r),n=!0)},o(r){O(i.$$.fragment,r),n=!1},d(r){r&&q(e),I(i)}}}function ft(t){let e,l,a,i,n;return i=new Cl({}),i.$on("select",t[8]),{c(){e=m("div"),l=m("h3"),l.textContent="Select a project you would like to work on.",a=M(),U(i.$$.fragment),g(e,"class","container")},m(r,s){N(r,e,s),f(e,l),f(e,a),R(i,e,null),n=!0},p:L,i(r){n||(S(i.$$.fragment,r),n=!0)},o(r){O(i.$$.fragment,r),n=!1},d(r){r&&q(e),I(i)}}}function ut(t){let e,l,a,i,n,r,s,c,o,h,_,$,u,y,k=t[5].name+"",d,p,v,T,z,w,b,C,B,K,be=t[5].name+"",Me,Be,he,Le,te,Y,Ae,He,ve,X,We,Se,le,H=t[1]&&ht(t);T=new Sl({props:{char:t[5]}}),b=new Nl({props:{char:t[5]}});let ne=t[4],W=[];for(let P=0;P<ne.length;P+=1)W[P]=mt(ot(t,ne,P));Y=new Ht({props:{project:t[6],active:!0}}),Y.$on("work",t[10]);let D=t[2]&&dt(t);return X=new Lt({props:{char:t[5]}}),X.$on("break",t[11]),{c(){e=m("div"),H&&H.c(),l=M(),a=m("div"),i=m("div"),n=m("div"),r=m("div"),s=E("Time: "),c=E(t[0]),o=E(` hours
        `),h=m("table"),_=m("thead"),_.innerHTML=`<tr><th>Name</th> 
            <th>Mental</th> 
            <th>Physical</th></tr>`,$=M(),u=m("tr"),y=m("td"),d=E(k),p=M(),v=m("td"),U(T.$$.fragment),z=M(),w=m("td"),U(b.$$.fragment),C=M(),B=m("div"),K=m("div"),Me=E(be),Be=E(` can take a break doing these activities:
        `),he=m("table");for(let P=0;P<W.length;P+=1)W[P].c();Le=M(),te=m("div"),U(Y.$$.fragment),Ae=M(),D&&D.c(),He=M(),ve=m("div"),U(X.$$.fragment),We=M(),Se=m("div"),Se.innerHTML=`Documentation: 
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
    The goal is to complete the project as fast as possible, to do this you need to balance the working time and the cool down activities.`,g(h,"width","100%"),g(r,"class","card-body"),g(n,"class","card window"),g(he,"width","100%"),g(K,"class","card-body"),g(B,"class","card window mt-2"),g(i,"class","col-4"),g(te,"class","col-4"),g(ve,"class","col-4 me-auto ms-auto"),g(a,"class","row"),g(e,"class","container mt-3")},m(P,F){N(P,e,F),H&&H.m(e,null),f(e,l),f(e,a),f(a,i),f(i,n),f(n,r),f(r,s),f(r,c),f(r,o),f(r,h),f(h,_),f(h,$),f(h,u),f(u,y),f(y,d),f(u,p),f(u,v),R(T,v,null),f(u,z),f(u,w),R(b,w,null),f(i,C),f(i,B),f(B,K),f(K,Me),f(K,Be),f(K,he);for(let ae=0;ae<W.length;ae+=1)W[ae].m(he,null);f(a,Le),f(a,te),R(Y,te,null),f(te,Ae),D&&D.m(te,null),f(a,He),f(a,ve),R(X,ve,null),f(e,We),f(e,Se),le=!0},p(P,F){P[1]?H?H.p(P,F):(H=ht(P),H.c(),H.m(e,l)):H&&(H.d(1),H=null),(!le||F&1)&&A(c,P[0]),(!le||F&32)&&k!==(k=P[5].name+"")&&A(d,k);const ae={};F&32&&(ae.char=P[5]),T.$set(ae);const De={};if(F&32&&(De.char=P[5]),b.$set(De),(!le||F&32)&&be!==(be=P[5].name+"")&&A(Me,be),F&4112){ne=P[4];let J;for(J=0;J<ne.length;J+=1){const Re=ot(P,ne,J);W[J]?W[J].p(Re,F):(W[J]=mt(Re),W[J].c(),W[J].m(he,null))}for(;J<W.length;J+=1)W[J].d(1);W.length=ne.length}const Fe={};F&64&&(Fe.project=P[6]),Y.$set(Fe),P[2]?D?D.p(P,F):(D=dt(P),D.c(),D.m(te,null)):D&&(D.d(1),D=null);const Je={};F&32&&(Je.char=P[5]),X.$set(Je)},i(P){le||(S(T.$$.fragment,P),S(b.$$.fragment,P),S(Y.$$.fragment,P),S(X.$$.fragment,P),le=!0)},o(P){O(T.$$.fragment,P),O(b.$$.fragment,P),O(Y.$$.fragment,P),O(X.$$.fragment,P),le=!1},d(P){P&&q(e),H&&H.d(),I(T),I(b),ue(W,P),I(Y),D&&D.d(),I(X)}}}function ht(t){let e,l,a,i;return{c(){e=m("div"),l=E("Congratulations, you finished the project in "),a=E(t[0]),i=E(" hours!"),g(e,"class","alert alert-success")},m(n,r){N(n,e,r),f(e,l),f(e,a),f(e,i)},p(n,r){r&1&&A(a,n[0])},d(n){n&&q(e)}}}function mt(t){let e,l,a=t[13].base.name+"",i,n,r,s,c,o,h;return{c(){e=m("tr"),l=m("td"),i=E(a),n=M(),r=m("td"),s=m("button"),s.textContent="Do",c=M(),g(s,"class","btn btn-primary")},m(_,$){N(_,e,$),f(e,l),f(l,i),f(e,n),f(e,r),f(r,s),f(e,c),o||(h=ge(s,"click",function(){fe(t[12](t[13]))&&t[12](t[13]).apply(this,arguments)}),o=!0)},p(_,$){t=_,$&16&&a!==(a=t[13].base.name+"")&&A(i,a)},d(_){_&&q(e),o=!1,h()}}}function dt(t){let e,l,a,i=t[5].name+"",n,r,s=t[2].name+"",c,o,h,_,$,u=t[3],y=[];for(let d=0;d<u.length;d+=1)y[d]=pt(st(t,u,d));let k=null;return u.length||(k=_t()),{c(){e=m("div"),l=m("div"),a=m("h5"),n=E(i),r=E("'s skills available for "),c=E(s),o=M(),h=m("table"),_=m("tr"),_.innerHTML=`<th>Name</th> 
            <th>Character skill Level</th> 
            <th>Total time</th>`,$=M();for(let d=0;d<y.length;d+=1)y[d].c();k&&k.c(),g(h,"width","100%"),g(l,"class","card-body"),g(e,"class","card window mt-2")},m(d,p){N(d,e,p),f(e,l),f(l,a),f(a,n),f(a,r),f(a,c),f(l,o),f(l,h),f(h,_),f(h,$);for(let v=0;v<y.length;v+=1)y[v].m(h,null);k&&k.m(h,null)},p(d,p){if(p&32&&i!==(i=d[5].name+"")&&A(n,i),p&4&&s!==(s=d[2].name+"")&&A(c,s),p&524){u=d[3];let v;for(v=0;v<u.length;v+=1){const T=st(d,u,v);y[v]?y[v].p(T,p):(y[v]=pt(T),y[v].c(),y[v].m(h,null))}for(;v<y.length;v+=1)y[v].d(1);y.length=u.length,!u.length&&k?k.p(d,p):u.length?k&&(k.d(1),k=null):(k=_t(),k.c(),k.m(h,null))}},d(d){d&&q(e),ue(y,d),k&&k.d()}}}function _t(t){let e;return{c(){e=m("tr"),e.innerHTML=`<td>Nothing</td> 
            `},m(l,a){N(l,e,a)},p:L,d(l){l&&q(e)}}}function pt(t){let e,l,a=t[13].skill.name+"",i,n,r,s=t[13].character_skill.level+"",c,o,h,_,$=Math.floor(t[13].total/t[13].character_skill.level)+"",u,y,k,d,p,v,T,z;return{c(){e=m("tr"),l=m("td"),i=E(a),n=M(),r=m("td"),c=E(s),o=M(),h=m("td"),_=E("> "),u=E($),y=E("h"),k=M(),d=m("td"),p=m("button"),p.textContent="Do",v=M(),g(p,"class","btn btn-primary")},m(w,b){N(w,e,b),f(e,l),f(l,i),f(e,n),f(e,r),f(r,c),f(e,o),f(e,h),f(h,_),f(h,u),f(h,y),f(e,k),f(e,d),f(d,p),f(e,v),T||(z=ge(p,"click",function(){fe(t[9](t[2],t[13],t[13].character_skill))&&t[9](t[2],t[13],t[13].character_skill).apply(this,arguments)}),T=!0)},p(w,b){t=w,b&8&&a!==(a=t[13].skill.name+"")&&A(i,a),b&8&&s!==(s=t[13].character_skill.level+"")&&A(c,s),b&8&&$!==($=Math.floor(t[13].total/t[13].character_skill.level)+"")&&A(u,$)},d(w){w&&q(e),T=!1,z()}}}function Tl(t){let e,l,a,i,n=!t[5]&&ct(t),r=t[5]&&!t[6]&&ft(t),s=t[5]&&t[6]&&ut(t);return{c(){n&&n.c(),e=M(),r&&r.c(),l=M(),s&&s.c(),a=qt()},m(c,o){n&&n.m(c,o),N(c,e,o),r&&r.m(c,o),N(c,l,o),s&&s.m(c,o),N(c,a,o),i=!0},p(c,[o]){c[5]?n&&(x(),O(n,1,1,()=>{n=null}),ee()):n?(n.p(c,o),o&32&&S(n,1)):(n=ct(c),n.c(),S(n,1),n.m(e.parentNode,e)),c[5]&&!c[6]?r?(r.p(c,o),o&96&&S(r,1)):(r=ft(c),r.c(),S(r,1),r.m(l.parentNode,l)):r&&(x(),O(r,1,1,()=>{r=null}),ee()),c[5]&&c[6]?s?(s.p(c,o),o&96&&S(s,1)):(s=ut(c),s.c(),S(s,1),s.m(a.parentNode,a)):s&&(x(),O(s,1,1,()=>{s=null}),ee())},i(c){i||(S(n),S(r),S(s),i=!0)},o(c){O(n),O(r),O(s),i=!1},d(c){n&&n.d(c),c&&q(e),r&&r.d(c),c&&q(l),s&&s.d(c),c&&q(a)}}}function gt(t,e){t.update(l=>(l.mental_health=Math.max(Math.min(l.mental_health+e.affinity+e.base.mental_health,l.max_mental_health),0),l.physical_health=Math.min(l.physical_health+e.base.physical_health,l.max_physical_health),l.physical_health<0&&(l.physical_health=0,l.mental_health=Math.max(l.mental_health-3,0)),l))}function Ol(t,e,l){let a,i;Ue(t,ke,d=>l(5,a=d)),Ue(t,qe,d=>l(6,i=d));let n=0,r=!1;function s(d){let p=JSON.parse(JSON.stringify(d.detail));ke.set(p),y(p)}function c(d){let p=JSON.parse(JSON.stringify(d.detail));p.requirements.forEach(v=>v.progress=0),qe.set(p)}function o(d,p,v){let T=a.mental_health/a.max_mental_health;return()=>{p.progress=Math.min((p.progress??0)+v.level*T,p.total),d.progress=Math.min(Math.floor(d.options.reduce((w,b)=>w+(b.progress??0)/b.total*100,0)),100);let z=i;qe.set(z),l(0,n++,n),gt(ke,v),l(1,r=!z.requirements.find(w=>w.progress<100))}}let h=null,_=[];function $(d){let p=d.detail;l(2,h=p),l(3,_=[]),h.options.forEach(v=>{v.character_skill=a.skills.find(T=>v.skill.id==T.base.id),v.character_skill&&_.push(v)})}let u=null;function y(d){l(4,u=d.skills.filter(p=>["break","exercise"].includes(p.base.category)))}function k(d){return()=>{gt(ke,d),l(0,n++,n)}}return[n,r,h,_,u,a,i,s,c,o,$,y,k]}class zl extends V{constructor(e){super(),Q(this,e,Ol,Tl,G,{})}}new zl({target:document.getElementById("app")});
