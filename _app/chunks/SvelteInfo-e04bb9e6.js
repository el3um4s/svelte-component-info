import{S as M,i as Q,s as W,e as S,V as ne,c as w,a as P,W as ae,d as u,b as E,K as ie,f as A,L as _,X as ze,H,Y as De,D as ye,E as Ve,F as Te,x as z,P as je,Q as re,J as oe,u as D,j as R,k as $,t as k,m as F,n as I,g as b,o as J,h as V,r as X,w as Y,v as K,I as Be,l as ce,Z,_ as x}from"./vendor-2a94d0a0.js";function Le(o){let e,a,l,s,t;return{c(){e=S("button"),a=ne("svg"),l=ne("path"),this.h()},l(n){e=w(n,"BUTTON",{class:!0});var i=P(e);a=ae(i,"svg",{xmlns:!0,viewBox:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0});var r=P(a);l=ae(r,"path",{d:!0}),P(l).forEach(u),r.forEach(u),i.forEach(u),this.h()},h(){E(l,"d","M19 9l-7 7-7-7"),E(a,"xmlns","http://www.w3.org/2000/svg"),E(a,"viewBox","0 0 24 24"),E(a,"fill","none"),E(a,"stroke-linecap","round"),E(a,"stroke-linejoin","round"),E(a,"stroke-width","3"),E(a,"class","svelte-1cmzbrg"),ie(a,"open",o[0]),E(e,"class","svelte-1cmzbrg")},m(n,i){A(n,e,i),_(e,a),_(a,l),s||(t=ze(e,"click",function(){De(o[1])&&o[1].apply(this,arguments)}),s=!0)},p(n,[i]){o=n,i&1&&ie(a,"open",o[0])},i:H,o:H,d(n){n&&u(e),s=!1,t()}}}function Oe(o,e,a){let{open:l=!1}=e,{onClick:s=()=>{a(0,l=!l)}}=e;return o.$$set=t=>{"open"in t&&a(0,l=t.open),"onClick"in t&&a(1,s=t.onClick)},[l,s]}class He extends M{constructor(e){super();Q(this,e,Oe,Le,W,{open:0,onClick:1})}}function fe(o){let e,a,l;const s=o[4].default,t=Be(s,o,o[3],null);return{c(){e=S("div"),t&&t.c(),this.h()},l(n){e=w(n,"DIV",{class:!0});var i=P(e);t&&t.l(i),i.forEach(u),this.h()},h(){E(e,"class","svelte-6xg35u")},m(n,i){A(n,e,i),t&&t.m(e,null),l=!0},p(n,i){t&&t.p&&(!l||i&8)&&ye(t,s,n,n[3],l?Te(s,n[3],i,null):Ve(n[3]),null)},i(n){l||(z(t,n),je(()=>{a||(a=re(e,oe,{duration:500},!0)),a.run(1)}),l=!0)},o(n){D(t,n),a||(a=re(e,oe,{duration:500},!1)),a.run(0),l=!1},d(n){n&&u(e),t&&t.d(n),n&&a&&a.end()}}}function Ue(o){let e,a,l,s,t,n,i;l=new He({props:{open:o[0],onClick:o[2]}});let r=o[0]&&fe(o);return{c(){e=S("section"),a=S("header"),R(l.$$.fragment),s=$(),t=k(o[1]),n=$(),r&&r.c(),this.h()},l(f){e=w(f,"SECTION",{class:!0});var h=P(e);a=w(h,"HEADER",{class:!0});var p=P(a);F(l.$$.fragment,p),s=I(p),t=b(p,o[1]),p.forEach(u),n=I(h),r&&r.l(h),h.forEach(u),this.h()},h(){E(a,"class","svelte-6xg35u"),E(e,"class","svelte-6xg35u")},m(f,h){A(f,e,h),_(e,a),J(l,a,null),_(a,s),_(a,t),_(e,n),r&&r.m(e,null),i=!0},p(f,[h]){const p={};h&1&&(p.open=f[0]),l.$set(p),(!i||h&2)&&V(t,f[1]),f[0]?r?(r.p(f,h),h&1&&z(r,1)):(r=fe(f),r.c(),z(r,1),r.m(e,null)):r&&(X(),D(r,1,1,()=>{r=null}),Y())},i(f){i||(z(l.$$.fragment,f),z(r),i=!0)},o(f){D(l.$$.fragment,f),D(r),i=!1},d(f){f&&u(e),K(l),r&&r.d()}}}function Re(o,e,a){let{$$slots:l={},$$scope:s}=e,{title:t="Title"}=e,{open:n=!0}=e,i=()=>{a(0,n=!n)};return o.$$set=r=>{"title"in r&&a(1,t=r.title),"open"in r&&a(0,n=r.open),"$$scope"in r&&a(3,s=r.$$scope)},[n,t,i,s,l]}class ee extends M{constructor(e){super();Q(this,e,Re,Ue,W,{title:1,open:0})}}function Fe(o){let e,a;return{c(){e=S("div"),a=k(o[0]),this.h()},l(l){e=w(l,"DIV",{class:!0});var s=P(e);a=b(s,o[0]),s.forEach(u),this.h()},h(){E(e,"class","svelte-1ki1g3x")},m(l,s){A(l,e,s),_(e,a)},p(l,[s]){s&1&&V(a,l[0])},i:H,o:H,d(l){l&&u(e)}}}function Je(o,e,a){let{code:l=""}=e;return o.$$set=s=>{"code"in s&&a(0,l=s.code)},[l]}class Ke extends M{constructor(e){super();Q(this,e,Je,Fe,W,{code:0})}}function Me(o){let e,a,l,s,t,n,i,r,f,h,p,v,c,d,g,C,m,q,N,y,B;return{c(){e=S("div"),a=S("span"),l=k(o[2]),s=$(),t=S("p"),n=k("import "),i=k(ue),r=$(),f=S("span"),h=k(o[0]),p=$(),v=k(_e),c=k(` from\r
		`),d=S("span"),g=k('"'),C=k(o[1]),m=k('"'),q=k(";"),N=$(),y=S("span"),B=k(o[3]),this.h()},l(U){e=w(U,"DIV",{class:!0});var L=P(e);a=w(L,"SPAN",{class:!0});var te=P(a);l=b(te,o[2]),te.forEach(u),s=I(L),t=w(L,"P",{class:!0});var O=P(t);n=b(O,"import "),i=b(O,ue),r=I(O),f=w(O,"SPAN",{class:!0});var le=P(f);h=b(le,o[0]),le.forEach(u),p=I(O),v=b(O,_e),c=b(O,` from\r
		`),d=w(O,"SPAN",{class:!0});var G=P(d);g=b(G,'"'),C=b(G,o[1]),m=b(G,'"'),G.forEach(u),q=b(O,";"),O.forEach(u),N=I(L),y=w(L,"SPAN",{class:!0});var se=P(y);B=b(se,o[3]),se.forEach(u),L.forEach(u),this.h()},h(){E(a,"class","tag svelte-1pkq5y3"),E(f,"class","import svelte-1pkq5y3"),E(d,"class","import svelte-1pkq5y3"),E(t,"class","svelte-1pkq5y3"),E(y,"class","tag svelte-1pkq5y3"),E(e,"class","svelte-1pkq5y3")},m(U,L){A(U,e,L),_(e,a),_(a,l),_(e,s),_(e,t),_(t,n),_(t,i),_(t,r),_(t,f),_(f,h),_(t,p),_(t,v),_(t,c),_(t,d),_(d,g),_(d,C),_(d,m),_(t,q),_(e,N),_(e,y),_(y,B)},p(U,[L]){L&1&&V(h,U[0]),L&2&&V(C,U[1])},i:H,o:H,d(U){U&&u(e)}}}const ue="{",_e="}";function Qe(o,e,a){let{name:l="CustomComponent"}=e,{urlPackage:s="-"}=e;const t="<script>",n="<\/script>";return o.$$set=i=>{"name"in i&&a(0,l=i.name),"urlPackage"in i&&a(1,s=i.urlPackage)},[l,s,t,n]}class We extends M{constructor(e){super();Q(this,e,Qe,Me,W,{name:0,urlPackage:1})}}function he(o,e,a){const l=o.slice();return l[6]=e[a],l}function ve(o,e,a){const l=o.slice();return l[9]=e[a],l}function pe(o,e,a){const l=o.slice();return l[12]=e[a],l}function Xe(o){let e,a,l,s,t,n;return{c(){e=S("span"),a=k(j),l=S("span"),s=k(o[0]),t=k(" /"),n=k(T),this.h()},l(i){e=w(i,"SPAN",{class:!0});var r=P(e);a=b(r,j),l=w(r,"SPAN",{class:!0});var f=P(l);s=b(f,o[0]),f.forEach(u),t=b(r," /"),n=b(r,T),r.forEach(u),this.h()},h(){E(l,"class","name svelte-rwt77q"),E(e,"class","tag svelte-rwt77q")},m(i,r){A(i,e,r),_(e,a),_(e,l),_(l,s),_(e,t),_(e,n)},p(i,r){r&1&&V(s,i[0])},d(i){i&&u(e)}}}function Ye(o){let e,a,l,s,t,n,i,r,f,h=o[1].props,p=[];for(let m=0;m<h.length;m+=1)p[m]=me(pe(o,h,m));let v=o[1].actions,c=[];for(let m=0;m<v.length;m+=1)c[m]=de(ve(o,v,m));function d(m,q){return m[2]?Ge:Ze}let C=d(o)(o);return{c(){e=S("span"),a=k(j),l=S("span"),s=k(o[0]),t=$(),n=S("ul");for(let m=0;m<p.length;m+=1)p[m].c();i=$();for(let m=0;m<c.length;m+=1)c[m].c();r=$(),C.c(),f=ce(),this.h()},l(m){e=w(m,"SPAN",{class:!0});var q=P(e);a=b(q,j),l=w(q,"SPAN",{class:!0});var N=P(l);s=b(N,o[0]),N.forEach(u),q.forEach(u),t=I(m),n=w(m,"UL",{});var y=P(n);for(let B=0;B<p.length;B+=1)p[B].l(y);i=I(y);for(let B=0;B<c.length;B+=1)c[B].l(y);y.forEach(u),r=I(m),C.l(m),f=ce(),this.h()},h(){E(l,"class","name svelte-rwt77q"),E(e,"class","tag svelte-rwt77q")},m(m,q){A(m,e,q),_(e,a),_(e,l),_(l,s),A(m,t,q),A(m,n,q);for(let N=0;N<p.length;N+=1)p[N].m(n,null);_(n,i);for(let N=0;N<c.length;N+=1)c[N].m(n,null);A(m,r,q),C.m(m,q),A(m,f,q)},p(m,q){if(q&1&&V(s,m[0]),q&2){h=m[1].props;let N;for(N=0;N<h.length;N+=1){const y=pe(m,h,N);p[N]?p[N].p(y,q):(p[N]=me(y),p[N].c(),p[N].m(n,i))}for(;N<p.length;N+=1)p[N].d(1);p.length=h.length}if(q&2){v=m[1].actions;let N;for(N=0;N<v.length;N+=1){const y=ve(m,v,N);c[N]?c[N].p(y,q):(c[N]=de(y),c[N].c(),c[N].m(n,null))}for(;N<c.length;N+=1)c[N].d(1);c.length=v.length}C.p(m,q)},d(m){m&&u(e),m&&u(t),m&&u(n),Z(p,m),Z(c,m),m&&u(r),C.d(m),m&&u(f)}}}function me(o){let e,a,l,s,t=o[12].name+"",n,i,r;return{c(){e=S("li"),a=k(ke),l=$(),s=S("span"),n=k(t),i=$(),r=k(be),this.h()},l(f){e=w(f,"LI",{class:!0});var h=P(e);a=b(h,ke),l=I(h),s=w(h,"SPAN",{class:!0});var p=P(s);n=b(p,t),p.forEach(u),i=I(h),r=b(h,be),h.forEach(u),this.h()},h(){E(s,"class","prop svelte-rwt77q"),E(e,"class","svelte-rwt77q")},m(f,h){A(f,e,h),_(e,a),_(e,l),_(e,s),_(s,n),_(e,i),_(e,r)},p(f,h){h&2&&t!==(t=f[12].name+"")&&V(n,t)},d(f){f&&u(e)}}}function de(o){let e,a,l,s=o[9].name+"",t;return{c(){e=S("li"),a=k("on:"),l=S("span"),t=k(s),this.h()},l(n){e=w(n,"LI",{class:!0});var i=P(e);a=b(i,"on:"),l=w(i,"SPAN",{class:!0});var r=P(l);t=b(r,s),r.forEach(u),i.forEach(u),this.h()},h(){E(l,"class","action svelte-rwt77q"),E(e,"class","svelte-rwt77q")},m(n,i){A(n,e,i),_(e,a),_(e,l),_(l,t)},p(n,i){i&2&&s!==(s=n[9].name+"")&&V(t,s)},d(n){n&&u(e)}}}function Ze(o){let e,a,l;return{c(){e=S("span"),a=k("/"),l=k(T),this.h()},l(s){e=w(s,"SPAN",{class:!0});var t=P(e);a=b(t,"/"),l=b(t,T),t.forEach(u),this.h()},h(){E(e,"class","tag svelte-rwt77q")},m(s,t){A(s,e,t),_(e,a),_(e,l)},p:H,d(s){s&&u(e)}}}function Ge(o){let e,a,l,s,t,n,i,r,f,h,p=o[1].slots,v=[];for(let c=0;c<p.length;c+=1)v[c]=ge(he(o,p,c));return{c(){e=S("span"),a=k(T),l=$();for(let c=0;c<v.length;c+=1)v[c].c();s=$(),t=S("span"),n=k(j),i=k("/"),r=S("span"),f=k(o[0]),h=k(T),this.h()},l(c){e=w(c,"SPAN",{class:!0});var d=P(e);a=b(d,T),d.forEach(u),l=I(c);for(let m=0;m<v.length;m+=1)v[m].l(c);s=I(c),t=w(c,"SPAN",{class:!0});var g=P(t);n=b(g,j),i=b(g,"/"),r=w(g,"SPAN",{class:!0});var C=P(r);f=b(C,o[0]),C.forEach(u),h=b(g,T),g.forEach(u),this.h()},h(){E(e,"class","tag svelte-rwt77q"),E(r,"class","name svelte-rwt77q"),E(t,"class","tag svelte-rwt77q")},m(c,d){A(c,e,d),_(e,a),A(c,l,d);for(let g=0;g<v.length;g+=1)v[g].m(c,d);A(c,s,d),A(c,t,d),_(t,n),_(t,i),_(t,r),_(r,f),_(t,h)},p(c,d){if(d&2){p=c[1].slots;let g;for(g=0;g<p.length;g+=1){const C=he(c,p,g);v[g]?v[g].p(C,d):(v[g]=ge(C),v[g].c(),v[g].m(s.parentNode,s))}for(;g<v.length;g+=1)v[g].d(1);v.length=p.length}d&1&&V(f,c[0])},d(c){c&&u(e),c&&u(l),Z(v,c),c&&u(s),c&&u(t)}}}function xe(o){let e,a,l,s,t,n=o[6].name+"",i,r,f,h,p,v,c,d,g;return{c(){e=S("span"),a=k(j),l=k("div "),s=S("span"),t=k('slot="'),i=k(n),r=k('"'),f=$(),h=k(T),p=k(`\r
						Named slot\r
						`),v=S("span"),c=k(j),d=k("/div"),g=k(T),this.h()},l(C){e=w(C,"SPAN",{class:!0});var m=P(e);a=b(m,j),l=b(m,"div "),s=w(m,"SPAN",{class:!0});var q=P(s);t=b(q,'slot="'),i=b(q,n),r=b(q,'"'),q.forEach(u),f=I(m),h=b(m,T),m.forEach(u),p=b(C,`\r
						Named slot\r
						`),v=w(C,"SPAN",{class:!0});var N=P(v);c=b(N,j),d=b(N,"/div"),g=b(N,T),N.forEach(u),this.h()},h(){E(s,"class","slot svelte-rwt77q"),E(e,"class","tag svelte-rwt77q"),E(v,"class","tag svelte-rwt77q")},m(C,m){A(C,e,m),_(e,a),_(e,l),_(e,s),_(s,t),_(s,i),_(s,r),_(e,f),_(e,h),A(C,p,m),A(C,v,m),_(v,c),_(v,d),_(v,g)},p(C,m){m&2&&n!==(n=C[6].name+"")&&V(i,n)},d(C){C&&u(e),C&&u(p),C&&u(v)}}}function et(o){let e,a,l,s,t,n,i,r,f;return{c(){e=S("span"),a=k(j),l=k("div"),s=k(T),t=k(` Slot anonymous\r
						`),n=S("span"),i=k(j),r=k("/div"),f=k(T),this.h()},l(h){e=w(h,"SPAN",{class:!0});var p=P(e);a=b(p,j),l=b(p,"div"),s=b(p,T),p.forEach(u),t=b(h,` Slot anonymous\r
						`),n=w(h,"SPAN",{class:!0});var v=P(n);i=b(v,j),r=b(v,"/div"),f=b(v,T),v.forEach(u),this.h()},h(){E(e,"class","tag svelte-rwt77q"),E(n,"class","tag svelte-rwt77q")},m(h,p){A(h,e,p),_(e,a),_(e,l),_(e,s),A(h,t,p),A(h,n,p),_(n,i),_(n,r),_(n,f)},p:H,d(h){h&&u(e),h&&u(t),h&&u(n)}}}function ge(o){let e;function a(t,n){return t[6].anonymous?et:xe}let l=a(o),s=l(o);return{c(){e=S("p"),s.c(),this.h()},l(t){e=w(t,"P",{class:!0});var n=P(e);s.l(n),n.forEach(u),this.h()},h(){E(e,"class","svelte-rwt77q")},m(t,n){A(t,e,n),s.m(e,null)},p(t,n){l===(l=a(t))&&s?s.p(t,n):(s.d(1),s=l(t),s&&(s.c(),s.m(e,null)))},d(t){t&&u(e),s.d()}}}function tt(o){let e;function a(t,n){return t[3]?Ye:Xe}let s=a(o)(o);return{c(){e=S("div"),s.c(),this.h()},l(t){e=w(t,"DIV",{class:!0});var n=P(e);s.l(n),n.forEach(u),this.h()},h(){E(e,"class","svelte-rwt77q")},m(t,n){A(t,e,n),s.m(e,null)},p(t,[n]){s.p(t,n)},i:H,o:H,d(t){t&&u(e),s.d()}}}const j="<",T=">",ke="{",be="}";function lt(o,e,a){let{name:l="CustomComponent"}=e,{info:s}=e;const t=s.props.length>0,n=s.actions.length>0,i=s.slots.length>0,r=t||n;return o.$$set=f=>{"name"in f&&a(0,l=f.name),"info"in f&&a(1,s=f.info)},[l,s,i,r]}class st extends M{constructor(e){super();Q(this,e,lt,tt,W,{name:0,info:1})}}function Ee(o){let e,a,l,s;return e=new We({props:{name:o[0],urlPackage:o[1]}}),{c(){R(e.$$.fragment),a=$(),l=S("br")},l(t){F(e.$$.fragment,t),a=I(t),l=w(t,"BR",{})},m(t,n){J(e,t,n),A(t,a,n),A(t,l,n),s=!0},p(t,n){const i={};n&1&&(i.name=t[0]),n&2&&(i.urlPackage=t[1]),e.$set(i)},i(t){s||(z(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){K(e,t),t&&u(a),t&&u(l)}}}function nt(o){let e,a,l,s,t=o[1]!=="-"&&Ee(o);return l=new st({props:{name:o[0],info:o[2]}}),{c(){e=S("div"),t&&t.c(),a=$(),R(l.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var i=P(e);t&&t.l(i),a=I(i),F(l.$$.fragment,i),i.forEach(u),this.h()},h(){E(e,"class","svelte-1d7i6f2")},m(n,i){A(n,e,i),t&&t.m(e,null),_(e,a),J(l,e,null),s=!0},p(n,[i]){n[1]!=="-"?t?(t.p(n,i),i&2&&z(t,1)):(t=Ee(n),t.c(),z(t,1),t.m(e,a)):t&&(X(),D(t,1,1,()=>{t=null}),Y());const r={};i&1&&(r.name=n[0]),i&4&&(r.info=n[2]),l.$set(r)},i(n){s||(z(t),z(l.$$.fragment,n),s=!0)},o(n){D(t),D(l.$$.fragment,n),s=!1},d(n){n&&u(e),t&&t.d(),K(l)}}}function at(o,e,a){let{name:l="CustomComponent"}=e,{urlPackage:s="-"}=e,{info:t}=e;return o.$$set=n=>{"name"in n&&a(0,l=n.name),"urlPackage"in n&&a(1,s=n.urlPackage),"info"in n&&a(2,t=n.info)},[l,s,t]}class it extends M{constructor(e){super();Q(this,e,at,nt,W,{name:0,urlPackage:1,info:2})}}function Pe(o,e,a){const l=o.slice();return l[5]=e[a],l}function Se(o,e,a){const l=o.slice();return l[8]=e[a],l}function we(o){let e,a;return{c(){e=S("h1"),a=k(o[0]),this.h()},l(l){e=w(l,"H1",{class:!0});var s=P(e);a=b(s,o[0]),s.forEach(u),this.h()},h(){E(e,"class","svelte-hv42zv")},m(l,s){A(l,e,s),_(e,a)},p(l,s){s&1&&V(a,l[0])},d(l){l&&u(e)}}}function Ne(o){let e,a,l;return{c(){e=S("div"),a=S("i"),l=k(o[1]),this.h()},l(s){e=w(s,"DIV",{"data-testid":!0,class:!0});var t=P(e);a=w(t,"I",{class:!0});var n=P(a);l=b(n,o[1]),n.forEach(u),t.forEach(u),this.h()},h(){E(a,"class","svelte-hv42zv"),E(e,"data-testid","description"),E(e,"class","svelte-hv42zv")},m(s,t){A(s,e,t),_(e,a),_(a,l)},p(s,t){t&2&&V(l,s[1])},d(s){s&&u(e)}}}function Ae(o){let e,a,l,s,t;return s=new Ke({props:{code:"npm i -D "+o[3]}}),{c(){e=S("div"),a=k("To import the package in a project:"),l=$(),R(s.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var i=P(e);a=b(i,"To import the package in a project:"),i.forEach(u),l=I(n),F(s.$$.fragment,n),this.h()},h(){E(e,"class","svelte-hv42zv")},m(n,i){A(n,e,i),_(e,a),A(n,l,i),J(s,n,i),t=!0},p(n,i){const r={};i&8&&(r.code="npm i -D "+n[3]),s.$set(r)},i(n){t||(z(s.$$.fragment,n),t=!0)},o(n){D(s.$$.fragment,n),t=!1},d(n){n&&u(e),n&&u(l),K(s,n)}}}function rt(o){let e,a,l,s,t,n,i=o[3]!=="-"&&Ae(o);return t=new it({props:{urlPackage:o[3],name:o[0],info:o[2]}}),{c(){i&&i.c(),e=$(),a=S("div"),l=k("To use in a file:"),s=$(),R(t.$$.fragment),this.h()},l(r){i&&i.l(r),e=I(r),a=w(r,"DIV",{class:!0});var f=P(a);l=b(f,"To use in a file:"),f.forEach(u),s=I(r),F(t.$$.fragment,r),this.h()},h(){E(a,"class","svelte-hv42zv")},m(r,f){i&&i.m(r,f),A(r,e,f),A(r,a,f),_(a,l),A(r,s,f),J(t,r,f),n=!0},p(r,f){r[3]!=="-"?i?(i.p(r,f),f&8&&z(i,1)):(i=Ae(r),i.c(),z(i,1),i.m(e.parentNode,e)):i&&(X(),D(i,1,1,()=>{i=null}),Y());const h={};f&8&&(h.urlPackage=r[3]),f&1&&(h.name=r[0]),f&4&&(h.info=r[2]),t.$set(h)},i(r){n||(z(i),z(t.$$.fragment,r),n=!0)},o(r){D(i),D(t.$$.fragment,r),n=!1},d(r){i&&i.d(r),r&&u(e),r&&u(a),r&&u(s),K(t,r)}}}function Ce(o){let e,a;return e=new ee({props:{title:"Props",open:!1,$$slots:{default:[ot]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,s){J(e,l,s),a=!0},p(l,s){const t={};s&2052&&(t.$$scope={dirty:s,ctx:l}),e.$set(t)},i(l){a||(z(e.$$.fragment,l),a=!0)},o(l){D(e.$$.fragment,l),a=!1},d(l){K(e,l)}}}function qe(o){let e,a=o[8].name+"",l,s,t,n=o[8].type+"",i,r,f,h,p=o[8].defaultValue+"",v,c;return{c(){e=S("span"),l=k(a),s=$(),t=S("span"),i=k(n),f=$(),h=S("span"),v=k(p),this.h()},l(d){e=w(d,"SPAN",{class:!0});var g=P(e);l=b(g,a),g.forEach(u),s=I(d),t=w(d,"SPAN",{class:!0});var C=P(t);i=b(C,n),C.forEach(u),f=I(d),h=w(d,"SPAN",{class:!0});var m=P(h);v=b(m,p),m.forEach(u),this.h()},h(){E(e,"class","svelte-hv42zv"),E(t,"class",r=""+(x(o[8].type?"":"undefined")+" svelte-hv42zv")),E(h,"class",c=""+(x(o[8].defaultValue?"":"undefined")+" svelte-hv42zv"))},m(d,g){A(d,e,g),_(e,l),A(d,s,g),A(d,t,g),_(t,i),A(d,f,g),A(d,h,g),_(h,v)},p(d,g){g&4&&a!==(a=d[8].name+"")&&V(l,a),g&4&&n!==(n=d[8].type+"")&&V(i,n),g&4&&r!==(r=""+(x(d[8].type?"":"undefined")+" svelte-hv42zv"))&&E(t,"class",r),g&4&&p!==(p=d[8].defaultValue+"")&&V(v,p),g&4&&c!==(c=""+(x(d[8].defaultValue?"":"undefined")+" svelte-hv42zv"))&&E(h,"class",c)},d(d){d&&u(e),d&&u(s),d&&u(t),d&&u(f),d&&u(h)}}}function ot(o){let e,a,l,s,t,n,i,r,f,h,p=o[2].props,v=[];for(let c=0;c<p.length;c+=1)v[c]=qe(Se(o,p,c));return{c(){e=S("div"),a=S("span"),l=k("Name"),s=$(),t=S("span"),n=k("Type"),i=$(),r=S("span"),f=k("Default"),h=$();for(let c=0;c<v.length;c+=1)v[c].c();this.h()},l(c){e=w(c,"DIV",{class:!0});var d=P(e);a=w(d,"SPAN",{class:!0});var g=P(a);l=b(g,"Name"),g.forEach(u),s=I(d),t=w(d,"SPAN",{class:!0});var C=P(t);n=b(C,"Type"),C.forEach(u),i=I(d),r=w(d,"SPAN",{class:!0});var m=P(r);f=b(m,"Default"),m.forEach(u),h=I(d);for(let q=0;q<v.length;q+=1)v[q].l(d);d.forEach(u),this.h()},h(){E(a,"class","table-header svelte-hv42zv"),E(t,"class","table-header svelte-hv42zv"),E(r,"class","table-header svelte-hv42zv"),E(e,"class","table svelte-hv42zv")},m(c,d){A(c,e,d),_(e,a),_(a,l),_(e,s),_(e,t),_(t,n),_(e,i),_(e,r),_(r,f),_(e,h);for(let g=0;g<v.length;g+=1)v[g].m(e,null)},p(c,d){if(d&4){p=c[2].props;let g;for(g=0;g<p.length;g+=1){const C=Se(c,p,g);v[g]?v[g].p(C,d):(v[g]=qe(C),v[g].c(),v[g].m(e,null))}for(;g<v.length;g+=1)v[g].d(1);v.length=p.length}},d(c){c&&u(e),Z(v,c)}}}function $e(o){let e,a;return e=new ee({props:{title:"Actions",open:!1,$$slots:{default:[ct]},$$scope:{ctx:o}}}),{c(){R(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,s){J(e,l,s),a=!0},p(l,s){const t={};s&2052&&(t.$$scope={dirty:s,ctx:l}),e.$set(t)},i(l){a||(z(e.$$.fragment,l),a=!0)},o(l){D(e.$$.fragment,l),a=!1},d(l){K(e,l)}}}function Ie(o){let e,a,l,s=o[5].name+"",t;return{c(){e=S("li"),a=k("on:"),l=S("span"),t=k(s),this.h()},l(n){e=w(n,"LI",{class:!0});var i=P(e);a=b(i,"on:"),l=w(i,"SPAN",{class:!0});var r=P(l);t=b(r,s),r.forEach(u),i.forEach(u),this.h()},h(){E(l,"class","svelte-hv42zv"),E(e,"class","list-of-actions-name svelte-hv42zv")},m(n,i){A(n,e,i),_(e,a),_(e,l),_(l,t)},p(n,i){i&4&&s!==(s=n[5].name+"")&&V(t,s)},d(n){n&&u(e)}}}function ct(o){let e,a,l=o[2].actions,s=[];for(let t=0;t<l.length;t+=1)s[t]=Ie(Pe(o,l,t));return{c(){e=S("div"),a=S("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=w(t,"DIV",{class:!0});var n=P(e);a=w(n,"UL",{class:!0});var i=P(a);for(let r=0;r<s.length;r+=1)s[r].l(i);i.forEach(u),n.forEach(u),this.h()},h(){E(a,"class","svelte-hv42zv"),E(e,"class","list-actions svelte-hv42zv")},m(t,n){A(t,e,n),_(e,a);for(let i=0;i<s.length;i+=1)s[i].m(a,null)},p(t,n){if(n&4){l=t[2].actions;let i;for(i=0;i<l.length;i+=1){const r=Pe(t,l,i);s[i]?s[i].p(r,n):(s[i]=Ie(r),s[i].c(),s[i].m(a,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=l.length}},d(t){t&&u(e),Z(s,t)}}}function ft(o){let e,a,l,s,t,n,i,r=o[0]&&we(o),f=o[1]!=="-"&&Ne(o);s=new ee({props:{title:"How to use",open:!0,$$slots:{default:[rt]},$$scope:{ctx:o}}});let h=o[2]&&o[2].props.length>0&&Ce(o),p=o[2]&&o[2].actions.length>0&&$e(o);return{c(){e=S("section"),r&&r.c(),a=$(),f&&f.c(),l=$(),R(s.$$.fragment),t=$(),h&&h.c(),n=$(),p&&p.c(),this.h()},l(v){e=w(v,"SECTION",{class:!0});var c=P(e);r&&r.l(c),a=I(c),f&&f.l(c),l=I(c),F(s.$$.fragment,c),t=I(c),h&&h.l(c),n=I(c),p&&p.l(c),c.forEach(u),this.h()},h(){E(e,"class","svelte-hv42zv")},m(v,c){A(v,e,c),r&&r.m(e,null),_(e,a),f&&f.m(e,null),_(e,l),J(s,e,null),_(e,t),h&&h.m(e,null),_(e,n),p&&p.m(e,null),i=!0},p(v,[c]){v[0]?r?r.p(v,c):(r=we(v),r.c(),r.m(e,a)):r&&(r.d(1),r=null),v[1]!=="-"?f?f.p(v,c):(f=Ne(v),f.c(),f.m(e,l)):f&&(f.d(1),f=null);const d={};c&2061&&(d.$$scope={dirty:c,ctx:v}),s.$set(d),v[2]&&v[2].props.length>0?h?(h.p(v,c),c&4&&z(h,1)):(h=Ce(v),h.c(),z(h,1),h.m(e,n)):h&&(X(),D(h,1,1,()=>{h=null}),Y()),v[2]&&v[2].actions.length>0?p?(p.p(v,c),c&4&&z(p,1)):(p=$e(v),p.c(),z(p,1),p.m(e,null)):p&&(X(),D(p,1,1,()=>{p=null}),Y())},i(v){i||(z(s.$$.fragment,v),z(h),z(p),i=!0)},o(v){D(s.$$.fragment,v),D(h),D(p),i=!1},d(v){v&&u(e),r&&r.d(),f&&f.d(),K(s),h&&h.d(),p&&p.d()}}}function ut(o,e,a){let{name:l}=e,{description:s="-"}=e,{info:t}=e,{urlPackage:n="-"}=e,{class:i=""}=e;return o.$$set=r=>{"name"in r&&a(0,l=r.name),"description"in r&&a(1,s=r.description),"info"in r&&a(2,t=r.info),"urlPackage"in r&&a(3,n=r.urlPackage),"class"in r&&a(4,i=r.class)},o.$$.update=()=>{o.$$.dirty&16&&a(4,i=i||""),o.$$.dirty&1&&a(0,l=l||void 0)},[l,s,t,n,i]}class ht extends M{constructor(e){super();Q(this,e,ut,ft,W,{name:0,description:1,info:2,urlPackage:3,class:4})}}export{ht as S};