function y(){}const I=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function J(){return Object.create(null)}function b(t){t.forEach(G)}function B(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ft(t){return Object.keys(t).length===0}function Rt(t,e,n,r){if(t){const o=K(t,e,n,r);return t[0](o)}}function K(t,e,n,r){return t[1]&&r?ut(n.ctx.slice(),t[1](r(e))):n.ctx}function qt(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const u=[],i=Math.max(e.dirty.length,o.length);for(let c=0;c<i;c+=1)u[c]=e.dirty[c]|o[c];return u}return e.dirty|o}return e.dirty}function zt(t,e,n,r,o,u){if(o){const i=K(e,n,r,u);t.p(i,o)}}function Dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Lt(t){return t==null?"":t}const Q=typeof window!="undefined";let U=Q?()=>window.performance.now():()=>Date.now(),R=Q?t=>requestAnimationFrame(t):y;const $=new Set;function V(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&R(V)}function X(t){let e;return $.size===0&&R(V),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let C=!1;function _t(){C=!0}function dt(){C=!1}function ht(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&s.push(d)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,d=(o>0&&e[n[o]].claim_order<=l?o+1:ht(1,o,a=>e[n[a]].claim_order,l))-1;r[s]=n[d]+1;const f=d+1;n[f]=s,o=Math.max(f,o)}const u=[],i=[];let c=e.length-1;for(let s=n[o]+1;s!=0;s=r[s-1]){for(u.push(e[s-1]);c>=s;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);u.reverse(),i.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<i.length;s++){for(;l<u.length&&i[s].claim_order>=u[l].claim_order;)l++;const d=l<u.length?u[l]:null;t.insertBefore(i[s],d)}}function pt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=Z("style");return yt(Y(t),e),e}function yt(t,e){pt(t.head||t,e)}function bt(t,e){if(C){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Pt(t,e,n){C&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function q(t){return document.createTextNode(t)}function Ht(){return q(" ")}function It(){return q("")}function Gt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,r,o=!1){vt(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const s=n(c);return s===void 0?t.splice(i,1):t[i]=s,o||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const s=n(c);return s===void 0?t.splice(i,1):t[i]=s,o?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,r){return tt(t,o=>o.nodeName===e,o=>{const u=[];for(let i=0;i<o.attributes.length;i++){const c=o.attributes[i];n[c.name]||u.push(c.name)}u.forEach(i=>o.removeAttribute(i))},()=>r(e))}function Kt(t,e,n){return et(t,e,n,Z)}function Qt(t,e,n){return et(t,e,n,$t)}function Et(t,e){return tt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>q(e),!0)}function Ut(t){return Et(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function kt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}const z=new Set;let j=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function D(t,e,n,r,o,u,i,c=0){const s=16.666/r;let l=`{
`;for(let m=0;m<=1;m+=s){const x=e+(n-e)*u(m);l+=m*100+`%{${i(x,1-x)}}
`}const d=l+`100% {${i(n,1-n)}}
}`,f=`__svelte_${St(d)}_${c}`,a=Y(t);z.add(a);const _=a.__svelte_stylesheet||(a.__svelte_stylesheet=gt(t).sheet),h=a.__svelte_rules||(a.__svelte_rules={});h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${o}ms 1 both`,j+=1,f}function nt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),j-=o,j||Nt())}function Nt(){R(()=>{j||(z.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),z.clear())})}let A;function F(t){A=t}function L(){if(!A)throw new Error("Function called outside component initialization");return A}function Xt(t){L().$$.on_mount.push(t)}function Yt(t){L().$$.after_update.push(t)}function Zt(t,e){L().$$.context.set(t,e)}function te(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const v=[],it=[],M=[],rt=[],Ct=Promise.resolve();let P=!1;function jt(){P||(P=!0,Ct.then(ot))}function E(t){M.push(t)}let W=!1;const H=new Set;function ot(){if(!W){W=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];F(e),At(e.$$)}for(F(null),v.length=0;it.length;)it.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];H.has(e)||(H.add(e),e())}M.length=0}while(v.length);for(;rt.length;)rt.pop()();P=!1,W=!1,H.clear()}}function At(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let k;function st(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function S(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const O=new Set;let g;function ee(){g={r:0,c:[],p:g}}function ne(){g.r||b(g.c),g=g.p}function Ft(t,e){t&&t.i&&(O.delete(t),t.i(e))}function ie(t,e,n,r){if(t&&t.o){if(O.has(t))return;O.add(t),g.c.push(()=>{O.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ct={duration:0};function re(t,e,n){let r=e(t,n),o=!0,u;const i=g;i.r+=1;function c(){const{delay:s=0,duration:l=300,easing:d=I,tick:f=y,css:a}=r||ct;a&&(u=D(t,1,0,l,s,d,a));const _=U()+s,h=_+l;E(()=>S(t,!1,"start")),X(p=>{if(o){if(p>=h)return f(0,1),S(t,!1,"end"),--i.r||b(i.c),!1;if(p>=_){const m=d((p-_)/l);f(1-m,m)}}return o})}return B(r)?st().then(()=>{r=r(),c()}):c(),{end(s){s&&r.tick&&r.tick(1,0),o&&(u&&nt(t,u),o=!1)}}}function oe(t,e,n,r){let o=e(t,n),u=r?0:1,i=null,c=null,s=null;function l(){s&&nt(t,s)}function d(a,_){const h=a.b-u;return _*=Math.abs(h),{a:u,b:a.b,d:h,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:h=300,easing:p=I,tick:m=y,css:x}=o||ct,T={start:U()+_,b:a};a||(T.group=g,g.r+=1),i||c?c=T:(x&&(l(),s=D(t,u,a,h,_,p,x)),a&&m(0,1),i=d(T,h),E(()=>S(t,a,"start")),X(N=>{if(c&&N>c.start&&(i=d(c,h),c=null,S(t,i.b,"start"),x&&(l(),s=D(t,u,i.b,i.duration,0,p,o.css))),i){if(N>=i.end)m(u=i.b,1-u),S(t,i.b,"end"),c||(i.b?l():--i.group.r||b(i.group.c)),i=null;else if(N>=i.start){const lt=N-i.start;u=i.a+i.d*p(lt/i.duration),m(u,1-u)}}return!!(i||c)}))}return{run(a){B(o)?st().then(()=>{o=o(),f(a)}):f(a)},end(){l(),i=c=null}}}function se(t,e){const n={},r={},o={$$scope:1};let u=t.length;for(;u--;){const i=t[u],c=e[u];if(c){for(const s in i)s in c||(r[s]=1);for(const s in c)o[s]||(n[s]=c[s],o[s]=1);t[u]=c}else for(const s in i)o[s]=1}for(const i in r)i in n||(n[i]=void 0);return n}function ce(t){return typeof t=="object"&&t!==null?t:{}}function le(t){t&&t.c()}function ue(t,e){t&&t.l(e)}function Mt(t,e,n,r){const{fragment:o,on_mount:u,on_destroy:i,after_update:c}=t.$$;o&&o.m(e,n),r||E(()=>{const s=u.map(G).filter(B);i?i.push(...s):b(s),t.$$.on_mount=[]}),c.forEach(E)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(v.push(t),jt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,r,o,u,i,c=[-1]){const s=A;F(t);const l=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:o,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:J(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};i&&i(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(f,a,..._)=>{const h=_.length?_[0]:a;return l.ctx&&o(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),d&&Tt(t,f)),a}):[],l.update(),d=!0,b(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){_t();const f=wt(e.target);l.fragment&&l.fragment.l(f),f.forEach(xt)}else l.fragment&&l.fragment.c();e.intro&&Ft(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),dt(),ot()}F(s)}class fe{$destroy(){Ot(this,1),this.$destroy=y}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const w=[];function _e(t,e=y){let n;const r=new Set;function o(c){if(at(t,c)&&(t=c,n)){const s=!w.length;for(const l of r)l[1](),w.push(l,t);if(s){for(let l=0;l<w.length;l+=2)w[l][0](w[l+1]);w.length=0}}}function u(c){o(c(t))}function i(c,s=y){const l=[c,s];return r.add(l),r.size===1&&(n=e(o)||y),c(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:o,update:u,subscribe:i}}function Bt(t){const e=t-1;return e*e*e+1}function de(t){return--t*t*t*t*t+1}function he(t,{delay:e=0,duration:n=400,easing:r=Bt}={}){const o=getComputedStyle(t),u=+o.opacity,i=parseFloat(o.height),c=parseFloat(o.paddingTop),s=parseFloat(o.paddingBottom),l=parseFloat(o.marginTop),d=parseFloat(o.marginBottom),f=parseFloat(o.borderTopWidth),a=parseFloat(o.borderBottomWidth);return{delay:e,duration:n,easing:r,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*u};height: ${_*i}px;padding-top: ${_*c}px;padding-bottom: ${_*s}px;margin-top: ${_*l}px;margin-bottom: ${_*d}px;border-top-width: ${_*f}px;border-bottom-width: ${_*a}px;`}}export{Xt as A,ut as B,_e as C,Rt as D,zt as E,Dt as F,qt as G,re as H,y as I,he as J,bt as K,$t as L,Qt as M,Gt as N,te as O,E as P,oe as Q,de as R,fe as S,Wt as T,Lt as U,wt as a,Jt as b,Kt as c,xt as d,Z as e,Pt as f,Et as g,Vt as h,ae as i,le as j,Ht as k,It as l,ue as m,Ut as n,Mt as o,se as p,ce as q,ee as r,at as s,q as t,ie as u,Ot as v,ne as w,Ft as x,Zt as y,Yt as z};
