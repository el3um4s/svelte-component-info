import{S as Q,i as W,s as X,V as ne,W as ae,a as P,d as h,b as E,f as $,L as v,X as ze,H,Y as De,e as S,c as w,D as Ve,E as ye,F as Te,x as z,P as Le,Q as ie,Z as re,J as ce,u as D,j as U,k as C,t as k,m as F,n as I,g as b,o as J,h as y,r as Y,w as Z,v as M,I as Oe,l as oe,_ as G,$ as x}from"./vendor-324c65f5.js";function Be(r){let e,a,s,l,t;return{c(){e=ne("svg"),a=ne("path"),this.h()},l(n){e=ae(n,"svg",{xmlns:!0,viewBox:!0,transform:!0,class:!0});var i=P(e);a=ae(i,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),P(a).forEach(h),i.forEach(h),this.h()},h(){E(a,"fill-rule","evenodd"),E(a,"d","M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"),E(a,"clip-rule","evenodd"),E(e,"xmlns","http://www.w3.org/2000/svg"),E(e,"viewBox","0 0 20 20"),E(e,"transform",s="rotate("+r[0]+")"),E(e,"class","svelte-pwegsn")},m(n,i){$(n,e,i),v(e,a),l||(t=ze(e,"click",r[1]),l=!0)},p(n,[i]){i&1&&s!==(s="rotate("+n[0]+")")&&E(e,"transform",s)},i:H,o:H,d(n){n&&h(e),l=!1,t()}}}function je(r,e,a){let{deg:s="90"}=e;function l(t){De.call(this,r,t)}return r.$$set=t=>{"deg"in t&&a(0,s=t.deg)},[s,l]}class He extends Q{constructor(e){super();W(this,e,je,Be,X,{deg:0})}}function fe(r){let e,a,s;const l=r[4].default,t=Oe(l,r,r[3],null);return{c(){e=S("div"),t&&t.c(),this.h()},l(n){e=w(n,"DIV",{class:!0});var i=P(e);t&&t.l(i),i.forEach(h),this.h()},h(){E(e,"class","content svelte-q6ktvg")},m(n,i){$(n,e,i),t&&t.m(e,null),s=!0},p(n,i){r=n,t&&t.p&&(!s||i&8)&&Ve(t,l,r,r[3],s?Te(l,r[3],i,null):ye(r[3]),null)},i(n){s||(z(t,n),Le(()=>{a||(a=ie(e,ce,{duration:400,easing:re},!0)),a.run(1)}),s=!0)},o(n){D(t,n),a||(a=ie(e,ce,{duration:400,easing:re},!1)),a.run(0),s=!1},d(n){n&&h(e),t&&t.d(n),n&&a&&a.end()}}}function Re(r){let e,a,s,l,t,n,i,c;l=new He({props:{deg:r[2]}}),l.$on("click",r[5]);let o=r[0]&&fe(r);return{c(){e=S("section"),a=S("div"),s=S("span"),U(l.$$.fragment),t=C(),n=k(r[1]),i=C(),o&&o.c(),this.h()},l(_){e=w(_,"SECTION",{class:!0});var p=P(e);a=w(p,"DIV",{class:!0});var u=P(a);s=w(u,"SPAN",{class:!0});var f=P(s);F(l.$$.fragment,f),f.forEach(h),t=I(u),n=b(u,r[1]),u.forEach(h),i=I(p),o&&o.l(p),p.forEach(h),this.h()},h(){E(s,"class","chevron svelte-q6ktvg"),E(a,"class","header svelte-q6ktvg"),E(e,"class","svelte-q6ktvg")},m(_,p){$(_,e,p),v(e,a),v(a,s),J(l,s,null),v(a,t),v(a,n),v(e,i),o&&o.m(e,null),c=!0},p(_,[p]){const u={};p&4&&(u.deg=_[2]),l.$set(u),(!c||p&2)&&y(n,_[1]),_[0]?o?(o.p(_,p),p&1&&z(o,1)):(o=fe(_),o.c(),z(o,1),o.m(e,null)):o&&(Y(),D(o,1,1,()=>{o=null}),Z())},i(_){c||(z(l.$$.fragment,_),z(o),c=!0)},o(_){D(l.$$.fragment,_),D(o),c=!1},d(_){_&&h(e),M(l),o&&o.d()}}}function Ue(r,e,a){let{$$slots:s={},$$scope:l}=e,{title:t="Title"}=e,{visible:n=!0}=e,i;const c=()=>{a(0,n=!n)};return r.$$set=o=>{"title"in o&&a(1,t=o.title),"visible"in o&&a(0,n=o.visible),"$$scope"in o&&a(3,l=o.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&a(2,i=n?270:90)},[n,t,i,l,s,c]}class ee extends Q{constructor(e){super();W(this,e,Ue,Re,X,{title:1,visible:0})}}function Fe(r){let e,a;return{c(){e=S("div"),a=k(r[0]),this.h()},l(s){e=w(s,"DIV",{class:!0});var l=P(e);a=b(l,r[0]),l.forEach(h),this.h()},h(){E(e,"class","svelte-1ki1g3x")},m(s,l){$(s,e,l),v(e,a)},p(s,[l]){l&1&&y(a,s[0])},i:H,o:H,d(s){s&&h(e)}}}function Je(r,e,a){let{code:s=""}=e;return r.$$set=l=>{"code"in l&&a(0,s=l.code)},[s]}class Me extends Q{constructor(e){super();W(this,e,Je,Fe,X,{code:0})}}function Qe(r){let e,a,s,l,t,n,i,c,o,_,p,u,f,d,g,q,m,A,N,V,O;return{c(){e=S("div"),a=S("span"),s=k(r[2]),l=C(),t=S("p"),n=k("import "),i=k(ue),c=C(),o=S("span"),_=k(r[0]),p=C(),u=k(_e),f=k(` from\r
		`),d=S("span"),g=k('"'),q=k(r[1]),m=k('"'),A=k(";"),N=C(),V=S("span"),O=k(r[3]),this.h()},l(R){e=w(R,"DIV",{class:!0});var B=P(e);a=w(B,"SPAN",{class:!0});var te=P(a);s=b(te,r[2]),te.forEach(h),l=I(B),t=w(B,"P",{class:!0});var j=P(t);n=b(j,"import "),i=b(j,ue),c=I(j),o=w(j,"SPAN",{class:!0});var le=P(o);_=b(le,r[0]),le.forEach(h),p=I(j),u=b(j,_e),f=b(j,` from\r
		`),d=w(j,"SPAN",{class:!0});var K=P(d);g=b(K,'"'),q=b(K,r[1]),m=b(K,'"'),K.forEach(h),A=b(j,";"),j.forEach(h),N=I(B),V=w(B,"SPAN",{class:!0});var se=P(V);O=b(se,r[3]),se.forEach(h),B.forEach(h),this.h()},h(){E(a,"class","tag svelte-1pkq5y3"),E(o,"class","import svelte-1pkq5y3"),E(d,"class","import svelte-1pkq5y3"),E(t,"class","svelte-1pkq5y3"),E(V,"class","tag svelte-1pkq5y3"),E(e,"class","svelte-1pkq5y3")},m(R,B){$(R,e,B),v(e,a),v(a,s),v(e,l),v(e,t),v(t,n),v(t,i),v(t,c),v(t,o),v(o,_),v(t,p),v(t,u),v(t,f),v(t,d),v(d,g),v(d,q),v(d,m),v(t,A),v(e,N),v(e,V),v(V,O)},p(R,[B]){B&1&&y(_,R[0]),B&2&&y(q,R[1])},i:H,o:H,d(R){R&&h(e)}}}const ue="{",_e="}";function We(r,e,a){let{name:s="CustomComponent"}=e,{urlPackage:l="-"}=e;const t="<script>",n="<\/script>";return r.$$set=i=>{"name"in i&&a(0,s=i.name),"urlPackage"in i&&a(1,l=i.urlPackage)},[s,l,t,n]}class Xe extends Q{constructor(e){super();W(this,e,We,Qe,X,{name:0,urlPackage:1})}}function he(r,e,a){const s=r.slice();return s[6]=e[a],s}function ve(r,e,a){const s=r.slice();return s[9]=e[a],s}function pe(r,e,a){const s=r.slice();return s[12]=e[a],s}function Ye(r){let e,a,s,l,t,n;return{c(){e=S("span"),a=k(L),s=S("span"),l=k(r[0]),t=k(" /"),n=k(T),this.h()},l(i){e=w(i,"SPAN",{class:!0});var c=P(e);a=b(c,L),s=w(c,"SPAN",{class:!0});var o=P(s);l=b(o,r[0]),o.forEach(h),t=b(c," /"),n=b(c,T),c.forEach(h),this.h()},h(){E(s,"class","name svelte-rwt77q"),E(e,"class","tag svelte-rwt77q")},m(i,c){$(i,e,c),v(e,a),v(e,s),v(s,l),v(e,t),v(e,n)},p(i,c){c&1&&y(l,i[0])},d(i){i&&h(e)}}}function Ze(r){let e,a,s,l,t,n,i,c,o,_=r[1].props,p=[];for(let m=0;m<_.length;m+=1)p[m]=me(pe(r,_,m));let u=r[1].actions,f=[];for(let m=0;m<u.length;m+=1)f[m]=de(ve(r,u,m));function d(m,A){return m[2]?Ke:Ge}let q=d(r)(r);return{c(){e=S("span"),a=k(L),s=S("span"),l=k(r[0]),t=C(),n=S("ul");for(let m=0;m<p.length;m+=1)p[m].c();i=C();for(let m=0;m<f.length;m+=1)f[m].c();c=C(),q.c(),o=oe(),this.h()},l(m){e=w(m,"SPAN",{class:!0});var A=P(e);a=b(A,L),s=w(A,"SPAN",{class:!0});var N=P(s);l=b(N,r[0]),N.forEach(h),A.forEach(h),t=I(m),n=w(m,"UL",{});var V=P(n);for(let O=0;O<p.length;O+=1)p[O].l(V);i=I(V);for(let O=0;O<f.length;O+=1)f[O].l(V);V.forEach(h),c=I(m),q.l(m),o=oe(),this.h()},h(){E(s,"class","name svelte-rwt77q"),E(e,"class","tag svelte-rwt77q")},m(m,A){$(m,e,A),v(e,a),v(e,s),v(s,l),$(m,t,A),$(m,n,A);for(let N=0;N<p.length;N+=1)p[N].m(n,null);v(n,i);for(let N=0;N<f.length;N+=1)f[N].m(n,null);$(m,c,A),q.m(m,A),$(m,o,A)},p(m,A){if(A&1&&y(l,m[0]),A&2){_=m[1].props;let N;for(N=0;N<_.length;N+=1){const V=pe(m,_,N);p[N]?p[N].p(V,A):(p[N]=me(V),p[N].c(),p[N].m(n,i))}for(;N<p.length;N+=1)p[N].d(1);p.length=_.length}if(A&2){u=m[1].actions;let N;for(N=0;N<u.length;N+=1){const V=ve(m,u,N);f[N]?f[N].p(V,A):(f[N]=de(V),f[N].c(),f[N].m(n,null))}for(;N<f.length;N+=1)f[N].d(1);f.length=u.length}q.p(m,A)},d(m){m&&h(e),m&&h(t),m&&h(n),G(p,m),G(f,m),m&&h(c),q.d(m),m&&h(o)}}}function me(r){let e,a,s,l,t=r[12].name+"",n,i,c;return{c(){e=S("li"),a=k(ke),s=C(),l=S("span"),n=k(t),i=C(),c=k(be),this.h()},l(o){e=w(o,"LI",{class:!0});var _=P(e);a=b(_,ke),s=I(_),l=w(_,"SPAN",{class:!0});var p=P(l);n=b(p,t),p.forEach(h),i=I(_),c=b(_,be),_.forEach(h),this.h()},h(){E(l,"class","prop svelte-rwt77q"),E(e,"class","svelte-rwt77q")},m(o,_){$(o,e,_),v(e,a),v(e,s),v(e,l),v(l,n),v(e,i),v(e,c)},p(o,_){_&2&&t!==(t=o[12].name+"")&&y(n,t)},d(o){o&&h(e)}}}function de(r){let e,a,s,l=r[9].name+"",t;return{c(){e=S("li"),a=k("on:"),s=S("span"),t=k(l),this.h()},l(n){e=w(n,"LI",{class:!0});var i=P(e);a=b(i,"on:"),s=w(i,"SPAN",{class:!0});var c=P(s);t=b(c,l),c.forEach(h),i.forEach(h),this.h()},h(){E(s,"class","action svelte-rwt77q"),E(e,"class","svelte-rwt77q")},m(n,i){$(n,e,i),v(e,a),v(e,s),v(s,t)},p(n,i){i&2&&l!==(l=n[9].name+"")&&y(t,l)},d(n){n&&h(e)}}}function Ge(r){let e,a,s;return{c(){e=S("span"),a=k("/"),s=k(T),this.h()},l(l){e=w(l,"SPAN",{class:!0});var t=P(e);a=b(t,"/"),s=b(t,T),t.forEach(h),this.h()},h(){E(e,"class","tag svelte-rwt77q")},m(l,t){$(l,e,t),v(e,a),v(e,s)},p:H,d(l){l&&h(e)}}}function Ke(r){let e,a,s,l,t,n,i,c,o,_,p=r[1].slots,u=[];for(let f=0;f<p.length;f+=1)u[f]=ge(he(r,p,f));return{c(){e=S("span"),a=k(T),s=C();for(let f=0;f<u.length;f+=1)u[f].c();l=C(),t=S("span"),n=k(L),i=k("/"),c=S("span"),o=k(r[0]),_=k(T),this.h()},l(f){e=w(f,"SPAN",{class:!0});var d=P(e);a=b(d,T),d.forEach(h),s=I(f);for(let m=0;m<u.length;m+=1)u[m].l(f);l=I(f),t=w(f,"SPAN",{class:!0});var g=P(t);n=b(g,L),i=b(g,"/"),c=w(g,"SPAN",{class:!0});var q=P(c);o=b(q,r[0]),q.forEach(h),_=b(g,T),g.forEach(h),this.h()},h(){E(e,"class","tag svelte-rwt77q"),E(c,"class","name svelte-rwt77q"),E(t,"class","tag svelte-rwt77q")},m(f,d){$(f,e,d),v(e,a),$(f,s,d);for(let g=0;g<u.length;g+=1)u[g].m(f,d);$(f,l,d),$(f,t,d),v(t,n),v(t,i),v(t,c),v(c,o),v(t,_)},p(f,d){if(d&2){p=f[1].slots;let g;for(g=0;g<p.length;g+=1){const q=he(f,p,g);u[g]?u[g].p(q,d):(u[g]=ge(q),u[g].c(),u[g].m(l.parentNode,l))}for(;g<u.length;g+=1)u[g].d(1);u.length=p.length}d&1&&y(o,f[0])},d(f){f&&h(e),f&&h(s),G(u,f),f&&h(l),f&&h(t)}}}function xe(r){let e,a,s,l,t,n=r[6].name+"",i,c,o,_,p,u,f,d,g;return{c(){e=S("span"),a=k(L),s=k("div "),l=S("span"),t=k('slot="'),i=k(n),c=k('"'),o=C(),_=k(T),p=k(`\r
						Named slot\r
						`),u=S("span"),f=k(L),d=k("/div"),g=k(T),this.h()},l(q){e=w(q,"SPAN",{class:!0});var m=P(e);a=b(m,L),s=b(m,"div "),l=w(m,"SPAN",{class:!0});var A=P(l);t=b(A,'slot="'),i=b(A,n),c=b(A,'"'),A.forEach(h),o=I(m),_=b(m,T),m.forEach(h),p=b(q,`\r
						Named slot\r
						`),u=w(q,"SPAN",{class:!0});var N=P(u);f=b(N,L),d=b(N,"/div"),g=b(N,T),N.forEach(h),this.h()},h(){E(l,"class","slot svelte-rwt77q"),E(e,"class","tag svelte-rwt77q"),E(u,"class","tag svelte-rwt77q")},m(q,m){$(q,e,m),v(e,a),v(e,s),v(e,l),v(l,t),v(l,i),v(l,c),v(e,o),v(e,_),$(q,p,m),$(q,u,m),v(u,f),v(u,d),v(u,g)},p(q,m){m&2&&n!==(n=q[6].name+"")&&y(i,n)},d(q){q&&h(e),q&&h(p),q&&h(u)}}}function et(r){let e,a,s,l,t,n,i,c,o;return{c(){e=S("span"),a=k(L),s=k("div"),l=k(T),t=k(` Slot anonymous\r
						`),n=S("span"),i=k(L),c=k("/div"),o=k(T),this.h()},l(_){e=w(_,"SPAN",{class:!0});var p=P(e);a=b(p,L),s=b(p,"div"),l=b(p,T),p.forEach(h),t=b(_,` Slot anonymous\r
						`),n=w(_,"SPAN",{class:!0});var u=P(n);i=b(u,L),c=b(u,"/div"),o=b(u,T),u.forEach(h),this.h()},h(){E(e,"class","tag svelte-rwt77q"),E(n,"class","tag svelte-rwt77q")},m(_,p){$(_,e,p),v(e,a),v(e,s),v(e,l),$(_,t,p),$(_,n,p),v(n,i),v(n,c),v(n,o)},p:H,d(_){_&&h(e),_&&h(t),_&&h(n)}}}function ge(r){let e;function a(t,n){return t[6].anonymous?et:xe}let s=a(r),l=s(r);return{c(){e=S("p"),l.c(),this.h()},l(t){e=w(t,"P",{class:!0});var n=P(e);l.l(n),n.forEach(h),this.h()},h(){E(e,"class","svelte-rwt77q")},m(t,n){$(t,e,n),l.m(e,null)},p(t,n){s===(s=a(t))&&l?l.p(t,n):(l.d(1),l=s(t),l&&(l.c(),l.m(e,null)))},d(t){t&&h(e),l.d()}}}function tt(r){let e;function a(t,n){return t[3]?Ze:Ye}let l=a(r)(r);return{c(){e=S("div"),l.c(),this.h()},l(t){e=w(t,"DIV",{class:!0});var n=P(e);l.l(n),n.forEach(h),this.h()},h(){E(e,"class","svelte-rwt77q")},m(t,n){$(t,e,n),l.m(e,null)},p(t,[n]){l.p(t,n)},i:H,o:H,d(t){t&&h(e),l.d()}}}const L="<",T=">",ke="{",be="}";function lt(r,e,a){let{name:s="CustomComponent"}=e,{info:l}=e;const t=l.props.length>0,n=l.actions.length>0,i=l.slots.length>0,c=t||n;return r.$$set=o=>{"name"in o&&a(0,s=o.name),"info"in o&&a(1,l=o.info)},[s,l,i,c]}class st extends Q{constructor(e){super();W(this,e,lt,tt,X,{name:0,info:1})}}function Ee(r){let e,a,s,l;return e=new Xe({props:{name:r[0],urlPackage:r[1]}}),{c(){U(e.$$.fragment),a=C(),s=S("br")},l(t){F(e.$$.fragment,t),a=I(t),s=w(t,"BR",{})},m(t,n){J(e,t,n),$(t,a,n),$(t,s,n),l=!0},p(t,n){const i={};n&1&&(i.name=t[0]),n&2&&(i.urlPackage=t[1]),e.$set(i)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){M(e,t),t&&h(a),t&&h(s)}}}function nt(r){let e,a,s,l,t=r[1]!=="-"&&Ee(r);return s=new st({props:{name:r[0],info:r[2]}}),{c(){e=S("div"),t&&t.c(),a=C(),U(s.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var i=P(e);t&&t.l(i),a=I(i),F(s.$$.fragment,i),i.forEach(h),this.h()},h(){E(e,"class","svelte-1d7i6f2")},m(n,i){$(n,e,i),t&&t.m(e,null),v(e,a),J(s,e,null),l=!0},p(n,[i]){n[1]!=="-"?t?(t.p(n,i),i&2&&z(t,1)):(t=Ee(n),t.c(),z(t,1),t.m(e,a)):t&&(Y(),D(t,1,1,()=>{t=null}),Z());const c={};i&1&&(c.name=n[0]),i&4&&(c.info=n[2]),s.$set(c)},i(n){l||(z(t),z(s.$$.fragment,n),l=!0)},o(n){D(t),D(s.$$.fragment,n),l=!1},d(n){n&&h(e),t&&t.d(),M(s)}}}function at(r,e,a){let{name:s="CustomComponent"}=e,{urlPackage:l="-"}=e,{info:t}=e;return r.$$set=n=>{"name"in n&&a(0,s=n.name),"urlPackage"in n&&a(1,l=n.urlPackage),"info"in n&&a(2,t=n.info)},[s,l,t]}class it extends Q{constructor(e){super();W(this,e,at,nt,X,{name:0,urlPackage:1,info:2})}}function Pe(r,e,a){const s=r.slice();return s[5]=e[a],s}function Se(r,e,a){const s=r.slice();return s[8]=e[a],s}function we(r){let e,a;return{c(){e=S("h1"),a=k(r[0]),this.h()},l(s){e=w(s,"H1",{class:!0});var l=P(e);a=b(l,r[0]),l.forEach(h),this.h()},h(){E(e,"class","svelte-hv42zv")},m(s,l){$(s,e,l),v(e,a)},p(s,l){l&1&&y(a,s[0])},d(s){s&&h(e)}}}function Ne(r){let e,a,s;return{c(){e=S("div"),a=S("i"),s=k(r[1]),this.h()},l(l){e=w(l,"DIV",{"data-testid":!0,class:!0});var t=P(e);a=w(t,"I",{class:!0});var n=P(a);s=b(n,r[1]),n.forEach(h),t.forEach(h),this.h()},h(){E(a,"class","svelte-hv42zv"),E(e,"data-testid","description"),E(e,"class","svelte-hv42zv")},m(l,t){$(l,e,t),v(e,a),v(a,s)},p(l,t){t&2&&y(s,l[1])},d(l){l&&h(e)}}}function $e(r){let e,a,s,l,t;return l=new Me({props:{code:"npm i -D "+r[3]}}),{c(){e=S("div"),a=k("To import the package in a project:"),s=C(),U(l.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var i=P(e);a=b(i,"To import the package in a project:"),i.forEach(h),s=I(n),F(l.$$.fragment,n),this.h()},h(){E(e,"class","svelte-hv42zv")},m(n,i){$(n,e,i),v(e,a),$(n,s,i),J(l,n,i),t=!0},p(n,i){const c={};i&8&&(c.code="npm i -D "+n[3]),l.$set(c)},i(n){t||(z(l.$$.fragment,n),t=!0)},o(n){D(l.$$.fragment,n),t=!1},d(n){n&&h(e),n&&h(s),M(l,n)}}}function rt(r){let e,a,s,l,t,n,i=r[3]!=="-"&&$e(r);return t=new it({props:{urlPackage:r[3],name:r[0],info:r[2]}}),{c(){i&&i.c(),e=C(),a=S("div"),s=k("To use in a file:"),l=C(),U(t.$$.fragment),this.h()},l(c){i&&i.l(c),e=I(c),a=w(c,"DIV",{class:!0});var o=P(a);s=b(o,"To use in a file:"),o.forEach(h),l=I(c),F(t.$$.fragment,c),this.h()},h(){E(a,"class","svelte-hv42zv")},m(c,o){i&&i.m(c,o),$(c,e,o),$(c,a,o),v(a,s),$(c,l,o),J(t,c,o),n=!0},p(c,o){c[3]!=="-"?i?(i.p(c,o),o&8&&z(i,1)):(i=$e(c),i.c(),z(i,1),i.m(e.parentNode,e)):i&&(Y(),D(i,1,1,()=>{i=null}),Z());const _={};o&8&&(_.urlPackage=c[3]),o&1&&(_.name=c[0]),o&4&&(_.info=c[2]),t.$set(_)},i(c){n||(z(i),z(t.$$.fragment,c),n=!0)},o(c){D(i),D(t.$$.fragment,c),n=!1},d(c){i&&i.d(c),c&&h(e),c&&h(a),c&&h(l),M(t,c)}}}function qe(r){let e,a;return e=new ee({props:{title:"Props",visible:!1,$$slots:{default:[ct]},$$scope:{ctx:r}}}),{c(){U(e.$$.fragment)},l(s){F(e.$$.fragment,s)},m(s,l){J(e,s,l),a=!0},p(s,l){const t={};l&2052&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){a||(z(e.$$.fragment,s),a=!0)},o(s){D(e.$$.fragment,s),a=!1},d(s){M(e,s)}}}function Ae(r){let e,a=r[8].name+"",s,l,t,n=r[8].type+"",i,c,o,_,p=r[8].defaultValue+"",u,f;return{c(){e=S("span"),s=k(a),l=C(),t=S("span"),i=k(n),o=C(),_=S("span"),u=k(p),this.h()},l(d){e=w(d,"SPAN",{class:!0});var g=P(e);s=b(g,a),g.forEach(h),l=I(d),t=w(d,"SPAN",{class:!0});var q=P(t);i=b(q,n),q.forEach(h),o=I(d),_=w(d,"SPAN",{class:!0});var m=P(_);u=b(m,p),m.forEach(h),this.h()},h(){E(e,"class","svelte-hv42zv"),E(t,"class",c=""+(x(r[8].type?"":"undefined")+" svelte-hv42zv")),E(_,"class",f=""+(x(r[8].defaultValue?"":"undefined")+" svelte-hv42zv"))},m(d,g){$(d,e,g),v(e,s),$(d,l,g),$(d,t,g),v(t,i),$(d,o,g),$(d,_,g),v(_,u)},p(d,g){g&4&&a!==(a=d[8].name+"")&&y(s,a),g&4&&n!==(n=d[8].type+"")&&y(i,n),g&4&&c!==(c=""+(x(d[8].type?"":"undefined")+" svelte-hv42zv"))&&E(t,"class",c),g&4&&p!==(p=d[8].defaultValue+"")&&y(u,p),g&4&&f!==(f=""+(x(d[8].defaultValue?"":"undefined")+" svelte-hv42zv"))&&E(_,"class",f)},d(d){d&&h(e),d&&h(l),d&&h(t),d&&h(o),d&&h(_)}}}function ct(r){let e,a,s,l,t,n,i,c,o,_,p=r[2].props,u=[];for(let f=0;f<p.length;f+=1)u[f]=Ae(Se(r,p,f));return{c(){e=S("div"),a=S("span"),s=k("Name"),l=C(),t=S("span"),n=k("Type"),i=C(),c=S("span"),o=k("Default"),_=C();for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){e=w(f,"DIV",{class:!0});var d=P(e);a=w(d,"SPAN",{class:!0});var g=P(a);s=b(g,"Name"),g.forEach(h),l=I(d),t=w(d,"SPAN",{class:!0});var q=P(t);n=b(q,"Type"),q.forEach(h),i=I(d),c=w(d,"SPAN",{class:!0});var m=P(c);o=b(m,"Default"),m.forEach(h),_=I(d);for(let A=0;A<u.length;A+=1)u[A].l(d);d.forEach(h),this.h()},h(){E(a,"class","table-header svelte-hv42zv"),E(t,"class","table-header svelte-hv42zv"),E(c,"class","table-header svelte-hv42zv"),E(e,"class","table svelte-hv42zv")},m(f,d){$(f,e,d),v(e,a),v(a,s),v(e,l),v(e,t),v(t,n),v(e,i),v(e,c),v(c,o),v(e,_);for(let g=0;g<u.length;g+=1)u[g].m(e,null)},p(f,d){if(d&4){p=f[2].props;let g;for(g=0;g<p.length;g+=1){const q=Se(f,p,g);u[g]?u[g].p(q,d):(u[g]=Ae(q),u[g].c(),u[g].m(e,null))}for(;g<u.length;g+=1)u[g].d(1);u.length=p.length}},d(f){f&&h(e),G(u,f)}}}function Ce(r){let e,a;return e=new ee({props:{title:"Actions",visible:!1,$$slots:{default:[ot]},$$scope:{ctx:r}}}),{c(){U(e.$$.fragment)},l(s){F(e.$$.fragment,s)},m(s,l){J(e,s,l),a=!0},p(s,l){const t={};l&2052&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){a||(z(e.$$.fragment,s),a=!0)},o(s){D(e.$$.fragment,s),a=!1},d(s){M(e,s)}}}function Ie(r){let e,a,s,l=r[5].name+"",t;return{c(){e=S("li"),a=k("on:"),s=S("span"),t=k(l),this.h()},l(n){e=w(n,"LI",{class:!0});var i=P(e);a=b(i,"on:"),s=w(i,"SPAN",{class:!0});var c=P(s);t=b(c,l),c.forEach(h),i.forEach(h),this.h()},h(){E(s,"class","svelte-hv42zv"),E(e,"class","list-of-actions-name svelte-hv42zv")},m(n,i){$(n,e,i),v(e,a),v(e,s),v(s,t)},p(n,i){i&4&&l!==(l=n[5].name+"")&&y(t,l)},d(n){n&&h(e)}}}function ot(r){let e,a,s=r[2].actions,l=[];for(let t=0;t<s.length;t+=1)l[t]=Ie(Pe(r,s,t));return{c(){e=S("div"),a=S("ul");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=w(t,"DIV",{class:!0});var n=P(e);a=w(n,"UL",{class:!0});var i=P(a);for(let c=0;c<l.length;c+=1)l[c].l(i);i.forEach(h),n.forEach(h),this.h()},h(){E(a,"class","svelte-hv42zv"),E(e,"class","list-actions svelte-hv42zv")},m(t,n){$(t,e,n),v(e,a);for(let i=0;i<l.length;i+=1)l[i].m(a,null)},p(t,n){if(n&4){s=t[2].actions;let i;for(i=0;i<s.length;i+=1){const c=Pe(t,s,i);l[i]?l[i].p(c,n):(l[i]=Ie(c),l[i].c(),l[i].m(a,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=s.length}},d(t){t&&h(e),G(l,t)}}}function ft(r){let e,a,s,l,t,n,i,c=r[0]&&we(r),o=r[1]!=="-"&&Ne(r);l=new ee({props:{title:"How to use",visible:!0,$$slots:{default:[rt]},$$scope:{ctx:r}}});let _=r[2]&&r[2].props.length>0&&qe(r),p=r[2]&&r[2].actions.length>0&&Ce(r);return{c(){e=S("section"),c&&c.c(),a=C(),o&&o.c(),s=C(),U(l.$$.fragment),t=C(),_&&_.c(),n=C(),p&&p.c(),this.h()},l(u){e=w(u,"SECTION",{class:!0});var f=P(e);c&&c.l(f),a=I(f),o&&o.l(f),s=I(f),F(l.$$.fragment,f),t=I(f),_&&_.l(f),n=I(f),p&&p.l(f),f.forEach(h),this.h()},h(){E(e,"class","svelte-hv42zv")},m(u,f){$(u,e,f),c&&c.m(e,null),v(e,a),o&&o.m(e,null),v(e,s),J(l,e,null),v(e,t),_&&_.m(e,null),v(e,n),p&&p.m(e,null),i=!0},p(u,[f]){u[0]?c?c.p(u,f):(c=we(u),c.c(),c.m(e,a)):c&&(c.d(1),c=null),u[1]!=="-"?o?o.p(u,f):(o=Ne(u),o.c(),o.m(e,s)):o&&(o.d(1),o=null);const d={};f&2061&&(d.$$scope={dirty:f,ctx:u}),l.$set(d),u[2]&&u[2].props.length>0?_?(_.p(u,f),f&4&&z(_,1)):(_=qe(u),_.c(),z(_,1),_.m(e,n)):_&&(Y(),D(_,1,1,()=>{_=null}),Z()),u[2]&&u[2].actions.length>0?p?(p.p(u,f),f&4&&z(p,1)):(p=Ce(u),p.c(),z(p,1),p.m(e,null)):p&&(Y(),D(p,1,1,()=>{p=null}),Z())},i(u){i||(z(l.$$.fragment,u),z(_),z(p),i=!0)},o(u){D(l.$$.fragment,u),D(_),D(p),i=!1},d(u){u&&h(e),c&&c.d(),o&&o.d(),M(l),_&&_.d(),p&&p.d()}}}function ut(r,e,a){let{name:s}=e,{description:l="-"}=e,{info:t}=e,{urlPackage:n="-"}=e,{class:i=""}=e;return r.$$set=c=>{"name"in c&&a(0,s=c.name),"description"in c&&a(1,l=c.description),"info"in c&&a(2,t=c.info),"urlPackage"in c&&a(3,n=c.urlPackage),"class"in c&&a(4,i=c.class)},r.$$.update=()=>{r.$$.dirty&16&&a(4,i=i||""),r.$$.dirty&1&&a(0,s=s||void 0)},[s,l,t,n,i]}class ht extends Q{constructor(e){super();W(this,e,ut,ft,X,{name:0,description:1,info:2,urlPackage:3,class:4})}}export{ht as S};
