import{S as F,i as J,s as K,e as N,V as fe,c as A,a as w,W as ce,d as u,b,K as ue,f as C,L as c,X as Oe,H as j,Y as He,D as le,E as se,F as ne,x as q,P as ze,Q as _e,J as me,u as y,j as L,k as I,t as E,m as O,n as D,g as P,o as H,h as T,r as Z,w as G,v as z,I as ae,l as X,Z as x,_ as Y,$ as Ue}from"./vendor-90320fc7.js";function Re(i){let e,l,t,s,n;return{c(){e=N("button"),l=fe("svg"),t=fe("path"),this.h()},l(a){e=A(a,"BUTTON",{class:!0});var o=w(e);l=ce(o,"svg",{xmlns:!0,viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0});var r=w(l);t=ce(r,"path",{d:!0}),w(t).forEach(u),r.forEach(u),o.forEach(u),this.h()},h(){b(t,"d","M19 9l-7 7-7-7"),b(l,"xmlns","http://www.w3.org/2000/svg"),b(l,"viewBox","0 0 24 24"),b(l,"fill","none"),b(l,"stroke-linecap","round"),b(l,"stroke-linejoin","round"),b(l,"stroke-width","3"),b(l,"class","svelte-1cmzbrg"),ue(l,"open",i[0]),b(e,"class","svelte-1cmzbrg")},m(a,o){C(a,e,o),c(e,l),c(l,t),s||(n=Oe(e,"click",function(){He(i[1])&&i[1].apply(this,arguments)}),s=!0)},p(a,[o]){i=a,o&1&&ue(l,"open",i[0])},i:j,o:j,d(a){a&&u(e),s=!1,n()}}}function Fe(i,e,l){let{open:t=!1}=e,{onClick:s=()=>{l(0,t=!t)}}=e;return i.$$set=n=>{"open"in n&&l(0,t=n.open),"onClick"in n&&l(1,s=n.onClick)},[t,s]}class Je extends F{constructor(e){super();J(this,e,Fe,Re,K,{open:0,onClick:1})}}function he(i){let e,l,t;const s=i[4].default,n=ae(s,i,i[3],null);return{c(){e=N("div"),n&&n.c(),this.h()},l(a){e=A(a,"DIV",{"data-testid":!0,class:!0});var o=w(e);n&&n.l(o),o.forEach(u),this.h()},h(){b(e,"data-testid","accordion-open"),b(e,"class","svelte-6xg35u")},m(a,o){C(a,e,o),n&&n.m(e,null),t=!0},p(a,o){n&&n.p&&(!t||o&8)&&le(n,s,a,a[3],t?ne(s,a[3],o,null):se(a[3]),null)},i(a){t||(q(n,a),ze(()=>{l||(l=_e(e,me,{duration:500},!0)),l.run(1)}),t=!0)},o(a){y(n,a),l||(l=_e(e,me,{duration:500},!1)),l.run(0),t=!1},d(a){a&&u(e),n&&n.d(a),a&&l&&l.end()}}}function Ke(i){let e,l,t,s,n,a,o;t=new Je({props:{open:i[0],onClick:i[2]}});let r=i[0]&&he(i);return{c(){e=N("section"),l=N("header"),L(t.$$.fragment),s=I(),n=E(i[1]),a=I(),r&&r.c(),this.h()},l(p){e=A(p,"SECTION",{class:!0});var h=w(e);l=A(h,"HEADER",{class:!0});var d=w(l);O(t.$$.fragment,d),s=D(d),n=P(d,i[1]),d.forEach(u),a=D(h),r&&r.l(h),h.forEach(u),this.h()},h(){b(l,"class","svelte-6xg35u"),b(e,"class","svelte-6xg35u")},m(p,h){C(p,e,h),c(e,l),H(t,l,null),c(l,s),c(l,n),c(e,a),r&&r.m(e,null),o=!0},p(p,[h]){const d={};h&1&&(d.open=p[0]),t.$set(d),(!o||h&2)&&T(n,p[1]),p[0]?r?(r.p(p,h),h&1&&q(r,1)):(r=he(p),r.c(),q(r,1),r.m(e,null)):r&&(Z(),y(r,1,1,()=>{r=null}),G())},i(p){o||(q(t.$$.fragment,p),q(r),o=!0)},o(p){y(t.$$.fragment,p),y(r),o=!1},d(p){p&&u(e),z(t),r&&r.d()}}}function Me(i,e,l){let{$$slots:t={},$$scope:s}=e,{title:n="Title"}=e,{open:a=!0}=e,o=()=>{l(0,a=!a)};return i.$$set=r=>{"title"in r&&l(1,n=r.title),"open"in r&&l(0,a=r.open),"$$scope"in r&&l(3,s=r.$$scope)},[a,n,o,s,t]}class ee extends F{constructor(e){super();J(this,e,Me,Ke,K,{title:1,open:0})}}function pe(i){let e,l;return{c(){e=N("h1"),l=E(i[0])},l(t){e=A(t,"H1",{});var s=w(e);l=P(s,i[0]),s.forEach(u)},m(t,s){C(t,e,s),c(e,l)},p(t,s){s&1&&T(l,t[0])},d(t){t&&u(e)}}}function Qe(i){let e,l=i[0]&&pe(i);return{c(){l&&l.c(),e=X()},l(t){l&&l.l(t),e=X()},m(t,s){l&&l.m(t,s),C(t,e,s)},p(t,[s]){t[0]?l?l.p(t,s):(l=pe(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:j,o:j,d(t){l&&l.d(t),t&&u(e)}}}function We(i,e,l){let{name:t}=e;return i.$$set=s=>{"name"in s&&l(0,t=s.name)},[t]}class Xe extends F{constructor(e){super();J(this,e,We,Qe,K,{name:0})}}function de(i){let e,l,t;return{c(){e=N("div"),l=N("i"),t=E(i[0])},l(s){e=A(s,"DIV",{});var n=w(e);l=A(n,"I",{});var a=w(l);t=P(a,i[0]),a.forEach(u),n.forEach(u)},m(s,n){C(s,e,n),c(e,l),c(l,t)},p(s,n){n&1&&T(t,s[0])},d(s){s&&u(e)}}}function Ye(i){let e,l=i[0]!=="-"&&de(i);return{c(){l&&l.c(),e=X()},l(t){l&&l.l(t),e=X()},m(t,s){l&&l.m(t,s),C(t,e,s)},p(t,[s]){t[0]!=="-"?l?l.p(t,s):(l=de(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:j,o:j,d(t){l&&l.d(t),t&&u(e)}}}function Ze(i,e,l){let{description:t="-"}=e;return i.$$set=s=>{"description"in s&&l(0,t=s.description)},[t]}class Ge extends F{constructor(e){super();J(this,e,Ze,Ye,K,{description:0})}}function ve(i){let e,l;return{c(){e=N("div"),l=E(i[0]),this.h()},l(t){e=A(t,"DIV",{class:!0});var s=w(e);l=P(s,i[0]),s.forEach(u),this.h()},h(){b(e,"class","svelte-1ki1g3x")},m(t,s){C(t,e,s),c(e,l)},p(t,s){s&1&&T(l,t[0])},d(t){t&&u(e)}}}function xe(i){let e,l=i[0]&&ve(i);return{c(){l&&l.c(),e=X()},l(t){l&&l.l(t),e=X()},m(t,s){l&&l.m(t,s),C(t,e,s)},p(t,[s]){t[0]?l?l.p(t,s):(l=ve(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:j,o:j,d(t){l&&l.d(t),t&&u(e)}}}function et(i,e,l){let{code:t}=e;return i.$$set=s=>{"code"in s&&l(0,t=s.code)},[t]}class tt extends F{constructor(e){super();J(this,e,et,xe,K,{code:0})}}function lt(i){let e,l,t,s,n,a,o,r,p,h,d,k,_,m,g,v,f,$,S,V,U;return{c(){e=N("div"),l=N("span"),t=E(i[2]),s=I(),n=N("p"),a=E("import "),o=E(ge),r=I(),p=N("span"),h=E(i[0]),d=I(),k=E($e),_=E(` from\r
		`),m=N("span"),g=E('"'),v=E(i[1]),f=E('"'),$=E(";"),S=I(),V=N("span"),U=E(i[3]),this.h()},l(W){e=A(W,"DIV",{class:!0});var M=w(e);l=A(M,"SPAN",{class:!0});var ie=w(l);t=P(ie,i[2]),ie.forEach(u),s=D(M),n=A(M,"P",{class:!0});var Q=w(n);a=P(Q,"import "),o=P(Q,ge),r=D(Q),p=A(Q,"SPAN",{class:!0});var oe=w(p);h=P(oe,i[0]),oe.forEach(u),d=D(Q),k=P(Q,$e),_=P(Q,` from\r
		`),m=A(Q,"SPAN",{class:!0});var te=w(m);g=P(te,'"'),v=P(te,i[1]),f=P(te,'"'),te.forEach(u),$=P(Q,";"),Q.forEach(u),S=D(M),V=A(M,"SPAN",{class:!0});var re=w(V);U=P(re,i[3]),re.forEach(u),M.forEach(u),this.h()},h(){b(l,"class","tag svelte-1pkq5y3"),b(p,"class","import svelte-1pkq5y3"),b(m,"class","import svelte-1pkq5y3"),b(n,"class","svelte-1pkq5y3"),b(V,"class","tag svelte-1pkq5y3"),b(e,"class","svelte-1pkq5y3")},m(W,M){C(W,e,M),c(e,l),c(l,t),c(e,s),c(e,n),c(n,a),c(n,o),c(n,r),c(n,p),c(p,h),c(n,d),c(n,k),c(n,_),c(n,m),c(m,g),c(m,v),c(m,f),c(n,$),c(e,S),c(e,V),c(V,U)},p(W,[M]){M&1&&T(h,W[0]),M&2&&T(v,W[1])},i:j,o:j,d(W){W&&u(e)}}}const ge="{",$e="}";function st(i,e,l){let{name:t="CustomComponent"}=e,{urlPackage:s="-"}=e;const n="<script>",a="<\/script>";return i.$$set=o=>{"name"in o&&l(0,t=o.name),"urlPackage"in o&&l(1,s=o.urlPackage)},[t,s,n,a]}class nt extends F{constructor(e){super();J(this,e,st,lt,K,{name:0,urlPackage:1})}}function ke(i,e,l){const t=i.slice();return t[6]=e[l],t}function be(i,e,l){const t=i.slice();return t[9]=e[l],t}function Ee(i,e,l){const t=i.slice();return t[12]=e[l],t}function at(i){let e,l,t,s,n,a;return{c(){e=N("span"),l=E(R),t=N("span"),s=E(i[0]),n=E(" /"),a=E(B),this.h()},l(o){e=A(o,"SPAN",{class:!0,"data-testid":!0});var r=w(e);l=P(r,R),t=A(r,"SPAN",{class:!0});var p=w(t);s=P(p,i[0]),p.forEach(u),n=P(r," /"),a=P(r,B),r.forEach(u),this.h()},h(){b(t,"class","name svelte-rwt77q"),b(e,"class","tag svelte-rwt77q"),b(e,"data-testid","only-name")},m(o,r){C(o,e,r),c(e,l),c(e,t),c(t,s),c(e,n),c(e,a)},p(o,r){r&1&&T(s,o[0])},d(o){o&&u(e)}}}function it(i){let e,l,t,s,n,a,o,r,p,h=i[1].props,d=[];for(let f=0;f<h.length;f+=1)d[f]=Pe(Ee(i,h,f));let k=i[1].actions,_=[];for(let f=0;f<k.length;f+=1)_[f]=we(be(i,k,f));function m(f,$){return f[2]?rt:ot}let v=m(i)(i);return{c(){e=N("span"),l=E(R),t=N("span"),s=E(i[0]),n=I(),a=N("ul");for(let f=0;f<d.length;f+=1)d[f].c();o=I();for(let f=0;f<_.length;f+=1)_[f].c();r=I(),v.c(),p=X(),this.h()},l(f){e=A(f,"SPAN",{class:!0});var $=w(e);l=P($,R),t=A($,"SPAN",{class:!0});var S=w(t);s=P(S,i[0]),S.forEach(u),$.forEach(u),n=D(f),a=A(f,"UL",{"data-testid":!0});var V=w(a);for(let U=0;U<d.length;U+=1)d[U].l(V);o=D(V);for(let U=0;U<_.length;U+=1)_[U].l(V);V.forEach(u),r=D(f),v.l(f),p=X(),this.h()},h(){b(t,"class","name svelte-rwt77q"),b(e,"class","tag svelte-rwt77q"),b(a,"data-testid","props-actions")},m(f,$){C(f,e,$),c(e,l),c(e,t),c(t,s),C(f,n,$),C(f,a,$);for(let S=0;S<d.length;S+=1)d[S].m(a,null);c(a,o);for(let S=0;S<_.length;S+=1)_[S].m(a,null);C(f,r,$),v.m(f,$),C(f,p,$)},p(f,$){if($&1&&T(s,f[0]),$&2){h=f[1].props;let S;for(S=0;S<h.length;S+=1){const V=Ee(f,h,S);d[S]?d[S].p(V,$):(d[S]=Pe(V),d[S].c(),d[S].m(a,o))}for(;S<d.length;S+=1)d[S].d(1);d.length=h.length}if($&2){k=f[1].actions;let S;for(S=0;S<k.length;S+=1){const V=be(f,k,S);_[S]?_[S].p(V,$):(_[S]=we(V),_[S].c(),_[S].m(a,null))}for(;S<_.length;S+=1)_[S].d(1);_.length=k.length}v.p(f,$)},d(f){f&&u(e),f&&u(n),f&&u(a),x(d,f),x(_,f),f&&u(r),v.d(f),f&&u(p)}}}function Pe(i){let e,l,t,s,n=i[12].name+"",a,o,r;return{c(){e=N("li"),l=E(Ne),t=I(),s=N("span"),a=E(n),o=I(),r=E(Ae),this.h()},l(p){e=A(p,"LI",{class:!0});var h=w(e);l=P(h,Ne),t=D(h),s=A(h,"SPAN",{class:!0});var d=w(s);a=P(d,n),d.forEach(u),o=D(h),r=P(h,Ae),h.forEach(u),this.h()},h(){b(s,"class","prop svelte-rwt77q"),b(e,"class","svelte-rwt77q")},m(p,h){C(p,e,h),c(e,l),c(e,t),c(e,s),c(s,a),c(e,o),c(e,r)},p(p,h){h&2&&n!==(n=p[12].name+"")&&T(a,n)},d(p){p&&u(e)}}}function we(i){let e,l,t,s=i[9].name+"",n;return{c(){e=N("li"),l=E("on:"),t=N("span"),n=E(s),this.h()},l(a){e=A(a,"LI",{class:!0});var o=w(e);l=P(o,"on:"),t=A(o,"SPAN",{class:!0});var r=w(t);n=P(r,s),r.forEach(u),o.forEach(u),this.h()},h(){b(t,"class","action svelte-rwt77q"),b(e,"class","svelte-rwt77q")},m(a,o){C(a,e,o),c(e,l),c(e,t),c(t,n)},p(a,o){o&2&&s!==(s=a[9].name+"")&&T(n,s)},d(a){a&&u(e)}}}function ot(i){let e,l,t;return{c(){e=N("span"),l=E("/"),t=E(B),this.h()},l(s){e=A(s,"SPAN",{class:!0});var n=w(e);l=P(n,"/"),t=P(n,B),n.forEach(u),this.h()},h(){b(e,"class","tag svelte-rwt77q")},m(s,n){C(s,e,n),c(e,l),c(e,t)},p:j,d(s){s&&u(e)}}}function rt(i){let e,l,t,s,n,a,o,r,p,h,d,k=i[1].slots,_=[];for(let m=0;m<k.length;m+=1)_[m]=Se(ke(i,k,m));return{c(){e=N("span"),l=E(B),t=I(),s=N("span");for(let m=0;m<_.length;m+=1)_[m].c();n=I(),a=N("span"),o=E(R),r=E("/"),p=N("span"),h=E(i[0]),d=E(B),this.h()},l(m){e=A(m,"SPAN",{class:!0});var g=w(e);l=P(g,B),g.forEach(u),t=D(m),s=A(m,"SPAN",{"data-testid":!0});var v=w(s);for(let S=0;S<_.length;S+=1)_[S].l(v);v.forEach(u),n=D(m),a=A(m,"SPAN",{class:!0});var f=w(a);o=P(f,R),r=P(f,"/"),p=A(f,"SPAN",{class:!0});var $=w(p);h=P($,i[0]),$.forEach(u),d=P(f,B),f.forEach(u),this.h()},h(){b(e,"class","tag svelte-rwt77q"),b(s,"data-testid","slots"),b(p,"class","name svelte-rwt77q"),b(a,"class","tag svelte-rwt77q")},m(m,g){C(m,e,g),c(e,l),C(m,t,g),C(m,s,g);for(let v=0;v<_.length;v+=1)_[v].m(s,null);C(m,n,g),C(m,a,g),c(a,o),c(a,r),c(a,p),c(p,h),c(a,d)},p(m,g){if(g&2){k=m[1].slots;let v;for(v=0;v<k.length;v+=1){const f=ke(m,k,v);_[v]?_[v].p(f,g):(_[v]=Se(f),_[v].c(),_[v].m(s,null))}for(;v<_.length;v+=1)_[v].d(1);_.length=k.length}g&1&&T(h,m[0])},d(m){m&&u(e),m&&u(t),m&&u(s),x(_,m),m&&u(n),m&&u(a)}}}function ft(i){let e,l,t,s,n,a=i[6].name+"",o,r,p,h,d,k,_,m,g;return{c(){e=N("span"),l=E(R),t=E("div "),s=N("span"),n=E('slot="'),o=E(a),r=E('"'),p=I(),h=E(B),d=E(`\r
							Named slot\r
							`),k=N("span"),_=E(R),m=E("/div"),g=E(B),this.h()},l(v){e=A(v,"SPAN",{class:!0});var f=w(e);l=P(f,R),t=P(f,"div "),s=A(f,"SPAN",{class:!0});var $=w(s);n=P($,'slot="'),o=P($,a),r=P($,'"'),$.forEach(u),p=D(f),h=P(f,B),f.forEach(u),d=P(v,`\r
							Named slot\r
							`),k=A(v,"SPAN",{class:!0});var S=w(k);_=P(S,R),m=P(S,"/div"),g=P(S,B),S.forEach(u),this.h()},h(){b(s,"class","slot svelte-rwt77q"),b(e,"class","tag svelte-rwt77q"),b(k,"class","tag svelte-rwt77q")},m(v,f){C(v,e,f),c(e,l),c(e,t),c(e,s),c(s,n),c(s,o),c(s,r),c(e,p),c(e,h),C(v,d,f),C(v,k,f),c(k,_),c(k,m),c(k,g)},p(v,f){f&2&&a!==(a=v[6].name+"")&&T(o,a)},d(v){v&&u(e),v&&u(d),v&&u(k)}}}function ct(i){let e,l,t,s,n,a,o,r,p;return{c(){e=N("span"),l=E(R),t=E("div"),s=E(B),n=E(` Slot anonymous\r
							`),a=N("span"),o=E(R),r=E("/div"),p=E(B),this.h()},l(h){e=A(h,"SPAN",{class:!0});var d=w(e);l=P(d,R),t=P(d,"div"),s=P(d,B),d.forEach(u),n=P(h,` Slot anonymous\r
							`),a=A(h,"SPAN",{class:!0});var k=w(a);o=P(k,R),r=P(k,"/div"),p=P(k,B),k.forEach(u),this.h()},h(){b(e,"class","tag svelte-rwt77q"),b(a,"class","tag svelte-rwt77q")},m(h,d){C(h,e,d),c(e,l),c(e,t),c(e,s),C(h,n,d),C(h,a,d),c(a,o),c(a,r),c(a,p)},p:j,d(h){h&&u(e),h&&u(n),h&&u(a)}}}function Se(i){let e,l;function t(a,o){return a[6].anonymous?ct:ft}let s=t(i),n=s(i);return{c(){e=N("p"),n.c(),l=I(),this.h()},l(a){e=A(a,"P",{class:!0});var o=w(e);n.l(o),l=D(o),o.forEach(u),this.h()},h(){b(e,"class","svelte-rwt77q")},m(a,o){C(a,e,o),n.m(e,null),c(e,l)},p(a,o){s===(s=t(a))&&n?n.p(a,o):(n.d(1),n=s(a),n&&(n.c(),n.m(e,l)))},d(a){a&&u(e),n.d()}}}function ut(i){let e;function l(n,a){return n[3]?it:at}let s=l(i)(i);return{c(){e=N("div"),s.c(),this.h()},l(n){e=A(n,"DIV",{class:!0});var a=w(e);s.l(a),a.forEach(u),this.h()},h(){b(e,"class","svelte-rwt77q")},m(n,a){C(n,e,a),s.m(e,null)},p(n,[a]){s.p(n,a)},i:j,o:j,d(n){n&&u(e),s.d()}}}const R="<",B=">",Ne="{",Ae="}";function _t(i,e,l){let{name:t="CustomComponent"}=e,{info:s}=e;const n=(s==null?void 0:s.props.length)>0,a=(s==null?void 0:s.actions.length)>0,o=(s==null?void 0:s.slots.length)>0,r=n||a;return i.$$set=p=>{"name"in p&&l(0,t=p.name),"info"in p&&l(1,s=p.info)},[t,s,o,r]}class mt extends F{constructor(e){super();J(this,e,_t,ut,K,{name:0,info:1})}}function Ce(i){let e,l,t,s;return e=new nt({props:{name:i[0],urlPackage:i[1]}}),{c(){L(e.$$.fragment),l=I(),t=N("br")},l(n){O(e.$$.fragment,n),l=D(n),t=A(n,"BR",{})},m(n,a){H(e,n,a),C(n,l,a),C(n,t,a),s=!0},p(n,a){const o={};a&1&&(o.name=n[0]),a&2&&(o.urlPackage=n[1]),e.$set(o)},i(n){s||(q(e.$$.fragment,n),s=!0)},o(n){y(e.$$.fragment,n),s=!1},d(n){z(e,n),n&&u(l),n&&u(t)}}}function ht(i){let e,l,t,s,n=i[1]!=="-"&&Ce(i);return t=new mt({props:{name:i[0],info:i[2]}}),{c(){e=N("div"),n&&n.c(),l=I(),L(t.$$.fragment),this.h()},l(a){e=A(a,"DIV",{class:!0});var o=w(e);n&&n.l(o),l=D(o),O(t.$$.fragment,o),o.forEach(u),this.h()},h(){b(e,"class","svelte-1d7i6f2")},m(a,o){C(a,e,o),n&&n.m(e,null),c(e,l),H(t,e,null),s=!0},p(a,[o]){a[1]!=="-"?n?(n.p(a,o),o&2&&q(n,1)):(n=Ce(a),n.c(),q(n,1),n.m(e,l)):n&&(Z(),y(n,1,1,()=>{n=null}),G());const r={};o&1&&(r.name=a[0]),o&4&&(r.info=a[2]),t.$set(r)},i(a){s||(q(n),q(t.$$.fragment,a),s=!0)},o(a){y(n),y(t.$$.fragment,a),s=!1},d(a){a&&u(e),n&&n.d(),z(t)}}}function pt(i,e,l){let{name:t="CustomComponent"}=e,{urlPackage:s="-"}=e,{info:n}=e;return i.$$set=a=>{"name"in a&&l(0,t=a.name),"urlPackage"in a&&l(1,s=a.urlPackage),"info"in a&&l(2,n=a.info)},[t,s,n]}class dt extends F{constructor(e){super();J(this,e,pt,ht,K,{name:0,urlPackage:1,info:2})}}function qe(i){let e,l,t,s,n;return s=new tt({props:{code:"npm i -D "+i[0]}}),{c(){e=N("div"),l=E("To import the package in a project:"),t=I(),L(s.$$.fragment)},l(a){e=A(a,"DIV",{});var o=w(e);l=P(o,"To import the package in a project:"),o.forEach(u),t=D(a),O(s.$$.fragment,a)},m(a,o){C(a,e,o),c(e,l),C(a,t,o),H(s,a,o),n=!0},p(a,o){const r={};o&1&&(r.code="npm i -D "+a[0]),s.$set(r)},i(a){n||(q(s.$$.fragment,a),n=!0)},o(a){y(s.$$.fragment,a),n=!1},d(a){a&&u(e),a&&u(t),z(s,a)}}}function vt(i){let e,l,t,s,n,a,o,r=i[0]!=="-"&&qe(i);return a=new dt({props:{urlPackage:i[0],name:i[1],info:i[2]}}),{c(){e=N("div"),r&&r.c(),l=I(),t=N("div"),s=E("To use in a file:"),n=I(),L(a.$$.fragment),this.h()},l(p){e=A(p,"DIV",{"data-testid":!0});var h=w(e);r&&r.l(h),l=D(h),t=A(h,"DIV",{});var d=w(t);s=P(d,"To use in a file:"),d.forEach(u),n=D(h),O(a.$$.fragment,h),h.forEach(u),this.h()},h(){b(e,"data-testid","how-to-use")},m(p,h){C(p,e,h),r&&r.m(e,null),c(e,l),c(e,t),c(t,s),c(e,n),H(a,e,null),o=!0},p(p,[h]){p[0]!=="-"?r?(r.p(p,h),h&1&&q(r,1)):(r=qe(p),r.c(),q(r,1),r.m(e,l)):r&&(Z(),y(r,1,1,()=>{r=null}),G());const d={};h&1&&(d.urlPackage=p[0]),h&2&&(d.name=p[1]),h&4&&(d.info=p[2]),a.$set(d)},i(p){o||(q(r),q(a.$$.fragment,p),o=!0)},o(p){y(r),y(a.$$.fragment,p),o=!1},d(p){p&&u(e),r&&r.d(),z(a)}}}function gt(i,e,l){let{urlPackage:t="-"}=e,{name:s}=e,{info:n}=e;return i.$$set=a=>{"urlPackage"in a&&l(0,t=a.urlPackage),"name"in a&&l(1,s=a.name),"info"in a&&l(2,n=a.info)},[t,s,n]}class $t extends F{constructor(e){super();J(this,e,gt,vt,K,{urlPackage:0,name:1,info:2})}}function Ie(i,e,l){const t=i.slice();return t[1]=e[l],t}function De(i){let e,l=i[1].name+"",t,s,n,a=i[1].type+"",o,r,p,h,d=i[1].defaultValue+"",k,_;return{c(){e=N("span"),t=E(l),s=I(),n=N("span"),o=E(a),p=I(),h=N("span"),k=E(d),this.h()},l(m){e=A(m,"SPAN",{class:!0});var g=w(e);t=P(g,l),g.forEach(u),s=D(m),n=A(m,"SPAN",{class:!0});var v=w(n);o=P(v,a),v.forEach(u),p=D(m),h=A(m,"SPAN",{class:!0});var f=w(h);k=P(f,d),f.forEach(u),this.h()},h(){b(e,"class","svelte-8nsnja"),b(n,"class",r=""+(Y(i[1].type?"":"undefined")+" svelte-8nsnja")),b(h,"class",_=""+(Y(i[1].defaultValue?"":"undefined")+" svelte-8nsnja"))},m(m,g){C(m,e,g),c(e,t),C(m,s,g),C(m,n,g),c(n,o),C(m,p,g),C(m,h,g),c(h,k)},p(m,g){g&1&&l!==(l=m[1].name+"")&&T(t,l),g&1&&a!==(a=m[1].type+"")&&T(o,a),g&1&&r!==(r=""+(Y(m[1].type?"":"undefined")+" svelte-8nsnja"))&&b(n,"class",r),g&1&&d!==(d=m[1].defaultValue+"")&&T(k,d),g&1&&_!==(_=""+(Y(m[1].defaultValue?"":"undefined")+" svelte-8nsnja"))&&b(h,"class",_)},d(m){m&&u(e),m&&u(s),m&&u(n),m&&u(p),m&&u(h)}}}function kt(i){let e,l,t,s,n,a,o,r,p,h,d=i[0].props,k=[];for(let _=0;_<d.length;_+=1)k[_]=De(Ie(i,d,_));return{c(){e=N("div"),l=N("span"),t=E("Name"),s=I(),n=N("span"),a=E("Type"),o=I(),r=N("span"),p=E("Default"),h=I();for(let _=0;_<k.length;_+=1)k[_].c();this.h()},l(_){e=A(_,"DIV",{class:!0,"data-testid":!0});var m=w(e);l=A(m,"SPAN",{class:!0});var g=w(l);t=P(g,"Name"),g.forEach(u),s=D(m),n=A(m,"SPAN",{class:!0});var v=w(n);a=P(v,"Type"),v.forEach(u),o=D(m),r=A(m,"SPAN",{class:!0});var f=w(r);p=P(f,"Default"),f.forEach(u),h=D(m);for(let $=0;$<k.length;$+=1)k[$].l(m);m.forEach(u),this.h()},h(){b(l,"class","table-header svelte-8nsnja"),b(n,"class","table-header svelte-8nsnja"),b(r,"class","table-header svelte-8nsnja"),b(e,"class","table svelte-8nsnja"),b(e,"data-testid","props")},m(_,m){C(_,e,m),c(e,l),c(l,t),c(e,s),c(e,n),c(n,a),c(e,o),c(e,r),c(r,p),c(e,h);for(let g=0;g<k.length;g+=1)k[g].m(e,null)},p(_,[m]){if(m&1){d=_[0].props;let g;for(g=0;g<d.length;g+=1){const v=Ie(_,d,g);k[g]?k[g].p(v,m):(k[g]=De(v),k[g].c(),k[g].m(e,null))}for(;g<k.length;g+=1)k[g].d(1);k.length=d.length}},i:j,o:j,d(_){_&&u(e),x(k,_)}}}function bt(i,e,l){let{info:t}=e;return i.$$set=s=>{"info"in s&&l(0,t=s.info)},[t]}class Et extends F{constructor(e){super();J(this,e,bt,kt,K,{info:0})}}function ye(i,e,l){const t=i.slice();return t[1]=e[l],t}function Ve(i){let e,l,t,s=i[1].name+"",n;return{c(){e=N("li"),l=E("on:"),t=N("span"),n=E(s),this.h()},l(a){e=A(a,"LI",{class:!0});var o=w(e);l=P(o,"on:"),t=A(o,"SPAN",{class:!0});var r=w(t);n=P(r,s),r.forEach(u),o.forEach(u),this.h()},h(){b(t,"class","svelte-1fyuw54"),b(e,"class","list-of-actions-name svelte-1fyuw54")},m(a,o){C(a,e,o),c(e,l),c(e,t),c(t,n)},p(a,o){o&1&&s!==(s=a[1].name+"")&&T(n,s)},d(a){a&&u(e)}}}function Pt(i){let e,l,t=i[0].actions,s=[];for(let n=0;n<t.length;n+=1)s[n]=Ve(ye(i,t,n));return{c(){e=N("div"),l=N("ul");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=A(n,"DIV",{class:!0,"data-testid":!0});var a=w(e);l=A(a,"UL",{});var o=w(l);for(let r=0;r<s.length;r+=1)s[r].l(o);o.forEach(u),a.forEach(u),this.h()},h(){b(e,"class","list-actions"),b(e,"data-testid","actions")},m(n,a){C(n,e,a),c(e,l);for(let o=0;o<s.length;o+=1)s[o].m(l,null)},p(n,[a]){if(a&1){t=n[0].actions;let o;for(o=0;o<t.length;o+=1){const r=ye(n,t,o);s[o]?s[o].p(r,a):(s[o]=Ve(r),s[o].c(),s[o].m(l,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},i:j,o:j,d(n){n&&u(e),x(s,n)}}}function wt(i,e,l){let{info:t}=e;return i.$$set=s=>{"info"in s&&l(0,t=s.info)},[t]}class St extends F{constructor(e){super();J(this,e,wt,Pt,K,{info:0})}}const Nt=i=>({}),je=i=>({}),At=i=>({}),Te=i=>({});function Be(i){let e,l;return e=new ee({props:{title:"About",$$slots:{default:[Ct]},$$scope:{ctx:i}}}),{c(){L(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){H(e,t,s),l=!0},p(t,s){const n={};s&512&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Ct(i){let e;const l=i[8].about,t=ae(l,i,i[9],Te);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&512)&&le(t,l,s,s[9],e?ne(l,s[9],n,At):se(s[9]),Te)},i(s){e||(q(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function qt(i){let e,l;return e=new $t({props:{urlPackage:i[4],name:i[0],info:i[3]}}),{c(){L(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){H(e,t,s),l=!0},p(t,s){const n={};s&16&&(n.urlPackage=t[4]),s&1&&(n.name=t[0]),s&8&&(n.info=t[3]),e.$set(n)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function It(i){let e,l;return e=new ee({props:{title:"Props",open:!1,$$slots:{default:[Dt]},$$scope:{ctx:i}}}),{c(){L(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){H(e,t,s),l=!0},p(t,s){const n={};s&520&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Dt(i){let e,l;return e=new Et({props:{info:i[3]}}),{c(){L(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){H(e,t,s),l=!0},p(t,s){const n={};s&8&&(n.info=t[3]),e.$set(n)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function yt(i){let e,l;return e=new ee({props:{title:"Actions",open:!1,$$slots:{default:[Vt]},$$scope:{ctx:i}}}),{c(){L(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){H(e,t,s),l=!0},p(t,s){const n={};s&520&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Vt(i){let e,l;return e=new St({props:{info:i[3]}}),{c(){L(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){H(e,t,s),l=!0},p(t,s){const n={};s&8&&(n.info=t[3]),e.$set(n)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function Le(i){let e,l;return e=new ee({props:{title:"Tests",open:!1,$$slots:{default:[jt]},$$scope:{ctx:i}}}),{c(){L(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){H(e,t,s),l=!0},p(t,s){const n={};s&512&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function jt(i){let e;const l=i[8].test,t=ae(l,i,i[9],je);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&512)&&le(t,l,s,s[9],e?ne(l,s[9],n,Nt):se(s[9]),je)},i(s){e||(q(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function Tt(i){let e,l,t,s,n,a,o,r,p,h,d,k;l=new Xe({props:{name:i[0]}}),s=new Ge({props:{description:i[2]}});let _=i[7].about&&Be(i);o=new ee({props:{title:"How to use",open:!0,$$slots:{default:[qt]},$$scope:{ctx:i}}});let m=i[6]&&It(i),g=i[5]&&yt(i),v=i[7].test&&Le(i);return{c(){e=N("section"),L(l.$$.fragment),t=I(),L(s.$$.fragment),n=I(),_&&_.c(),a=I(),L(o.$$.fragment),r=I(),m&&m.c(),p=I(),g&&g.c(),h=I(),v&&v.c(),this.h()},l(f){e=A(f,"SECTION",{class:!0});var $=w(e);O(l.$$.fragment,$),t=D($),O(s.$$.fragment,$),n=D($),_&&_.l($),a=D($),O(o.$$.fragment,$),r=D($),m&&m.l($),p=D($),g&&g.l($),h=D($),v&&v.l($),$.forEach(u),this.h()},h(){b(e,"class",d=""+(Y(i[1])+" svelte-yzliv3"))},m(f,$){C(f,e,$),H(l,e,null),c(e,t),H(s,e,null),c(e,n),_&&_.m(e,null),c(e,a),H(o,e,null),c(e,r),m&&m.m(e,null),c(e,p),g&&g.m(e,null),c(e,h),v&&v.m(e,null),k=!0},p(f,[$]){const S={};$&1&&(S.name=f[0]),l.$set(S);const V={};$&4&&(V.description=f[2]),s.$set(V),f[7].about?_?(_.p(f,$),$&128&&q(_,1)):(_=Be(f),_.c(),q(_,1),_.m(e,a)):_&&(Z(),y(_,1,1,()=>{_=null}),G());const U={};$&537&&(U.$$scope={dirty:$,ctx:f}),o.$set(U),f[6]&&m.p(f,$),f[5]&&g.p(f,$),f[7].test?v?(v.p(f,$),$&128&&q(v,1)):(v=Le(f),v.c(),q(v,1),v.m(e,null)):v&&(Z(),y(v,1,1,()=>{v=null}),G()),(!k||$&2&&d!==(d=""+(Y(f[1])+" svelte-yzliv3")))&&b(e,"class",d)},i(f){k||(q(l.$$.fragment,f),q(s.$$.fragment,f),q(_),q(o.$$.fragment,f),q(m),q(g),q(v),k=!0)},o(f){y(l.$$.fragment,f),y(s.$$.fragment,f),y(_),y(o.$$.fragment,f),y(m),y(g),y(v),k=!1},d(f){f&&u(e),z(l),z(s),_&&_.d(),z(o),m&&m.d(),g&&g.d(),v&&v.d()}}}function Bt(i,e,l){let{$$slots:t={},$$scope:s}=e;const n=Ue(t);let{name:a}=e,{description:o="-"}=e,{info:r}=e,{urlPackage:p="-"}=e,{class:h=""}=e;const d=(r==null?void 0:r.actions.length)>0,k=(r==null?void 0:r.props.length)>0;return i.$$set=_=>{"name"in _&&l(0,a=_.name),"description"in _&&l(2,o=_.description),"info"in _&&l(3,r=_.info),"urlPackage"in _&&l(4,p=_.urlPackage),"class"in _&&l(1,h=_.class),"$$scope"in _&&l(9,s=_.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&l(1,h=h||""),i.$$.dirty&1&&l(0,a=a||void 0)},[a,h,o,r,p,d,k,n,t,s]}class Ot extends F{constructor(e){super();J(this,e,Bt,Tt,K,{name:0,description:2,info:3,urlPackage:4,class:1})}}export{Ot as S};
