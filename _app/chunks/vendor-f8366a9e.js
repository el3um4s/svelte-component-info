function b(){}const I=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function et(){return Object.create(null)}function E(t){t.forEach(tt)}function T(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function yt(t){return Object.keys(t).length===0}function It(t,e,n,o){if(t){const i=nt(t,e,n,o);return t[0](i)}}function nt(t,e,n,o){return t[1]&&o?pt(n.ctx.slice(),t[1](o(e))):n.ctx}function Gt(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const a=[],s=Math.max(e.dirty.length,i.length);for(let c=0;c<s;c+=1)a[c]=e.dirty[c]|i[c];return a}return e.dirty|i}return e.dirty}function Jt(t,e,n,o,i,a){if(i){const s=nt(e,n,o,a);t.p(s,i)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}function Qt(t){const e={};for(const n in t)e[n]=!0;return e}function Ut(t){return t==null?"":t}const it=typeof window!="undefined";let G=it?()=>window.performance.now():()=>Date.now(),J=it?t=>requestAnimationFrame(t):b;const S=new Set;function st(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&J(st)}function K(t){let e;return S.size===0&&J(st),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let q=!1;function xt(){q=!0}function bt(){q=!1}function wt(t,e,n,o){for(;t<e;){const i=t+(e-t>>1);n(i)<=o?t=i+1:e=i}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&r.push(_)}e=r}const n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let i=0;for(let r=0;r<e.length;r++){const l=e[r].claim_order,_=(i>0&&e[n[i]].claim_order<=l?i+1:wt(1,i,u=>e[n[u]].claim_order,l))-1;o[r]=n[_]+1;const d=_+1;n[d]=r,i=Math.max(d,i)}const a=[],s=[];let c=e.length-1;for(let r=n[i]+1;r!=0;r=o[r-1]){for(a.push(e[r-1]);c>=r;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);a.reverse(),s.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<s.length;r++){for(;l<a.length&&s[r].claim_order>=a[l].claim_order;)l++;const _=l<a.length?a[l]:null;t.insertBefore(s[r],_)}}function vt(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=rt("style");return Et(ot(t),e),e}function Et(t,e){vt(t.head||t,e)}function St(t,e){if(q){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){q&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Ct(t){t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Yt(){return Q(" ")}function Zt(){return Q("")}function te(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,o,i=!1){jt(t);const a=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const r=n(c);return r===void 0?t.splice(s,1):t[s]=r,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const r=n(c);return r===void 0?t.splice(s,1):t[s]=r,i?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return o()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function lt(t,e,n,o){return ct(t,i=>i.nodeName===e,i=>{const a=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||a.push(c.name)}a.forEach(s=>i.removeAttribute(s))},()=>o(e))}function ne(t,e,n){return lt(t,e,n,rt)}function ie(t,e,n){return lt(t,e,n,Mt)}function At(t,e){return ct(t,n=>n.nodeType===3,n=>{const o=""+e;if(n.data.startsWith(o)){if(n.data.length!==o.length)return n.splitText(o.length)}else n.data=o},()=>Q(e),!0)}function se(t){return At(t," ")}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e,n){t.classList[n?"add":"remove"](e)}function Ft(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}const U=new Set;let z=0;function Bt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function D(t,e,n,o,i,a,s,c=0){const r=16.666/o;let l=`{
`;for(let m=0;m<=1;m+=r){const y=e+(n-e)*a(m);l+=m*100+`%{${s(y,1-y)}}
`}const _=l+`100% {${s(n,1-n)}}
}`,d=`__svelte_${Bt(_)}_${c}`,u=ot(t);U.add(u);const f=u.__svelte_stylesheet||(u.__svelte_stylesheet=kt(t).sheet),h=u.__svelte_rules||(u.__svelte_rules={});h[d]||(h[d]=!0,f.insertRule(`@keyframes ${d} ${_}`,f.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${o}ms linear ${i}ms 1 both`,z+=1,d}function V(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),i=n.length-o.length;i&&(t.style.animation=o.join(", "),z-=i,z||Rt())}function Rt(){J(()=>{z||(U.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),U.clear())})}function ce(t,e,n,o){if(!e)return b;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return b;const{delay:a=0,duration:s=300,easing:c=I,start:r=G()+a,end:l=r+s,tick:_=b,css:d}=n(t,{from:e,to:i},o);let u=!0,f=!1,h;function p(){d&&(h=D(t,0,1,s,a,c,d)),a||(f=!0)}function m(){d&&V(t,h),u=!1}return K(y=>{if(!f&&y>=r&&(f=!0),f&&y>=l&&(_(1,0),m()),!u)return!1;if(f){const x=y-r,w=0+1*c(x/s);_(w,1-w)}return!0}),p(),_(0,1),m}function le(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:o}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,Ot(t,i)}}function Ot(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),i=o.transform==="none"?"":o.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let M;function N(t){M=t}function X(){if(!M)throw new Error("Function called outside component initialization");return M}function ae(t){X().$$.on_mount.push(t)}function ue(t){X().$$.after_update.push(t)}function fe(t,e){X().$$.context.set(t,e)}const j=[],at=[],L=[],ut=[],Tt=Promise.resolve();let Y=!1;function qt(){Y||(Y=!0,Tt.then(ft))}function A(t){L.push(t)}const Z=new Set;let P=0;function ft(){const t=M;do{for(;P<j.length;){const e=j[P];P++,N(e),zt(e.$$)}for(N(null),j.length=0,P=0;at.length;)at.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];Z.has(n)||(Z.add(n),n())}L.length=0}while(j.length);for(;ut.length;)ut.pop()();Y=!1,Z.clear(),N(t)}function zt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let F;function dt(){return F||(F=Promise.resolve(),F.then(()=>{F=null})),F}function B(t,e,n){t.dispatchEvent(Ft(`${e?"intro":"outro"}${n}`))}const W=new Set;let k;function de(){k={r:0,c:[],p:k}}function _e(){k.r||E(k.c),k=k.p}function _t(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Dt(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),k.c.push(()=>{W.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const ht={duration:0};function he(t,e,n){let o=e(t,n),i=!0,a;const s=k;s.r+=1;function c(){const{delay:r=0,duration:l=300,easing:_=I,tick:d=b,css:u}=o||ht;u&&(a=D(t,1,0,l,r,_,u));const f=G()+r,h=f+l;A(()=>B(t,!1,"start")),K(p=>{if(i){if(p>=h)return d(0,1),B(t,!1,"end"),--s.r||E(s.c),!1;if(p>=f){const m=_((p-f)/l);d(1-m,m)}}return i})}return T(o)?dt().then(()=>{o=o(),c()}):c(),{end(r){r&&o.tick&&o.tick(1,0),i&&(a&&V(t,a),i=!1)}}}function me(t,e,n,o){let i=e(t,n),a=o?0:1,s=null,c=null,r=null;function l(){r&&V(t,r)}function _(u,f){const h=u.b-a;return f*=Math.abs(h),{a,b:u.b,d:h,duration:f,start:u.start,end:u.start+f,group:u.group}}function d(u){const{delay:f=0,duration:h=300,easing:p=I,tick:m=b,css:y}=i||ht,x={start:G()+f,b:u};u||(x.group=k,k.r+=1),s||c?c=x:(y&&(l(),r=D(t,a,u,h,f,p,y)),u&&m(0,1),s=_(x,h),A(()=>B(t,u,"start")),K(w=>{if(c&&w>c.start&&(s=_(c,h),c=null,B(t,s.b,"start"),y&&(l(),r=D(t,a,s.b,s.duration,0,p,i.css))),s){if(w>=s.end)m(a=s.b,1-a),B(t,s.b,"end"),c||(s.b?l():--s.group.r||E(s.group.c)),s=null;else if(w>=s.start){const R=w-s.start;a=s.a+s.d*p(R/s.duration),m(a,1-a)}}return!!(s||c)}))}return{run(u){T(i)?dt().then(()=>{i=i(),d(u)}):d(u)},end(){l(),s=c=null}}}function Lt(t,e){Dt(t,1,1,()=>{e.delete(t.key)})}function pe(t,e){t.f(),Lt(t,e)}function ge(t,e,n,o,i,a,s,c,r,l,_,d){let u=t.length,f=a.length,h=u;const p={};for(;h--;)p[t[h].key]=h;const m=[],y=new Map,x=new Map;for(h=f;h--;){const g=d(i,a,h),$=n(g);let v=s.get($);v?o&&v.p(g,e):(v=l($,g),v.c()),y.set($,m[h]=v),$ in p&&x.set($,Math.abs(h-p[$]))}const w=new Set,R=new Set;function H(g){_t(g,1),g.m(c,_),s.set(g.key,g),_=g.first,f--}for(;u&&f;){const g=m[f-1],$=t[u-1],v=g.key,O=$.key;g===$?(_=g.first,u--,f--):y.has(O)?!s.has(v)||w.has(v)?H(g):R.has(O)?u--:x.get(v)>x.get(O)?(R.add(v),H(g)):(w.add(O),u--):(r($,s),u--)}for(;u--;){const g=t[u];y.has(g.key)||r(g,s)}for(;f;)H(m[f-1]);return m}function ye(t,e){const n={},o={},i={$$scope:1};let a=t.length;for(;a--;){const s=t[a],c=e[a];if(c){for(const r in s)r in c||(o[r]=1);for(const r in c)i[r]||(n[r]=c[r],i[r]=1);t[a]=c}else for(const r in s)i[r]=1}for(const s in o)s in n||(n[s]=void 0);return n}function xe(t){return typeof t=="object"&&t!==null?t:{}}function be(t){t&&t.c()}function we(t,e){t&&t.l(e)}function Pt(t,e,n,o){const{fragment:i,on_mount:a,on_destroy:s,after_update:c}=t.$$;i&&i.m(e,n),o||A(()=>{const r=a.map(tt).filter(T);s?s.push(...r):E(r),t.$$.on_mount=[]}),c.forEach(A)}function Wt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(j.push(t),qt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,o,i,a,s,c=[-1]){const r=M;N(t);const l=t.$$={fragment:null,ctx:null,props:a,update:b,not_equal:i,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:et(),dirty:c,skip_bound:!1,root:e.target||r.$$.root};s&&s(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(d,u,...f)=>{const h=f.length?f[0]:u;return l.ctx&&i(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),_&&Ht(t,d)),u}):[],l.update(),_=!0,E(l.before_update),l.fragment=o?o(l.ctx):!1,e.target){if(e.hydrate){xt();const d=Nt(e.target);l.fragment&&l.fragment.l(d),d.forEach(Ct)}else l.fragment&&l.fragment.c();e.intro&&_t(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),bt(),ft()}N(r)}class ve{$destroy(){Wt(this,1),this.$destroy=b}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const C=[];function ke(t,e=b){let n;const o=new Set;function i(c){if(gt(t,c)&&(t=c,n)){const r=!C.length;for(const l of o)l[1](),C.push(l,t);if(r){for(let l=0;l<C.length;l+=2)C[l][0](C[l+1]);C.length=0}}}function a(c){i(c(t))}function s(c,r=b){const l=[c,r];return o.add(l),o.size===1&&(n=e(i)||b),c(t),()=>{o.delete(l),o.size===0&&(n(),n=null)}}return{set:i,update:a,subscribe:s}}function mt(t){const e=t-1;return e*e*e+1}function Ee(t,{delay:e=0,duration:n=400,easing:o=mt}={}){const i=getComputedStyle(t),a=+i.opacity,s=parseFloat(i.height),c=parseFloat(i.paddingTop),r=parseFloat(i.paddingBottom),l=parseFloat(i.marginTop),_=parseFloat(i.marginBottom),d=parseFloat(i.borderTopWidth),u=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:o,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*a};height: ${f*s}px;padding-top: ${f*c}px;padding-bottom: ${f*r}px;margin-top: ${f*l}px;margin-bottom: ${f*_}px;border-top-width: ${f*d}px;border-bottom-width: ${f*u}px;`}}function Se(t,{from:e,to:n},o={}){const i=getComputedStyle(t),a=i.transform==="none"?"":i.transform,[s,c]=i.transformOrigin.split(" ").map(parseFloat),r=e.left+e.width*s/n.width-(n.left+s),l=e.top+e.height*c/n.height-(n.top+c),{delay:_=0,duration:d=f=>Math.sqrt(f)*120,easing:u=mt}=o;return{delay:_,duration:T(d)?d(Math.sqrt(r*r+l*l)):d,easing:u,css:(f,h)=>{const p=h*r,m=h*l,y=f+h*e.width/n.width,x=f+h*e.height/n.height;return`transform: ${a} translate(${p}px, ${m}px) scale(${y}, ${x});`}}}export{Qt as $,ae as A,pt as B,ke as C,Jt as D,Kt as E,Gt as F,he as G,b as H,It as I,Ee as J,re as K,St as L,le as M,Ot as N,ce as O,A as P,me as Q,ge as R,ve as S,Se as T,pe as U,Mt as V,ie as W,te as X,T as Y,Xt as Z,Ut as _,Nt as a,ee as b,ne as c,Ct as d,rt as e,Vt as f,At as g,oe as h,$e as i,be as j,Yt as k,Zt as l,we as m,se as n,Pt as o,ye as p,xe as q,de as r,gt as s,Q as t,Dt as u,Wt as v,_e as w,_t as x,fe as y,ue as z};
