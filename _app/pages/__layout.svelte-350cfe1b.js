import{S as $,i as y,s as b,e as p,c as k,a as v,d as _,b as m,f as g,D as w,E as H,F as D,x as h,u as d,G as F,r as I,H as M,w as j,I as A,J as E,t as J,g as K,K as N,L as P,h as L,M as O,N as Q,O as U,P as z,Q as R,R as W,T as X,U as Y,j as C,k as Z,m as G,n as x,o as S,v as T}from"../chunks/vendor-324c65f5.js";function V(r){let l,a,e;const n=r[2].default,t=A(n,r,r[1],null);return{c(){l=p("div"),t&&t.c(),this.h()},l(s){l=k(s,"DIV",{class:!0});var u=v(l);t&&t.l(u),u.forEach(_),this.h()},h(){m(l,"class","main-center")},m(s,u){g(s,l,u),t&&t.m(l,null),e=!0},p(s,u){t&&t.p&&(!e||u&2)&&w(t,n,s,s[1],e?D(n,s[1],u,null):H(s[1]),null)},i(s){e||(h(t,s),a&&a.end(1),e=!0)},o(s){d(t,s),a=F(l,E,{delay:50,duration:400}),e=!1},d(s){s&&_(l),t&&t.d(s),s&&a&&a.end()}}}function ee(r){let l,a=r[0],e,n=V(r);return{c(){l=p("main"),n.c()},l(t){l=k(t,"MAIN",{});var s=v(l);n.l(s),s.forEach(_)},m(t,s){g(t,l,s),n.m(l,null),e=!0},p(t,[s]){s&1&&b(a,a=t[0])?(I(),d(n,1,1,M),j(),n=V(t),n.c(),h(n),n.m(l,null)):n.p(t,s)},i(t){e||(h(n),e=!0)},o(t){d(n),e=!1},d(t){t&&_(l),n.d(t)}}}function te(r,l,a){let{$$slots:e={},$$scope:n}=l,{refresh:t=""}=l;return r.$$set=s=>{"refresh"in s&&a(0,t=s.refresh),"$$scope"in s&&a(1,n=s.$$scope)},[t,n,e]}class le extends ${constructor(l){super();y(this,l,te,ee,b,{refresh:0})}}function q(r,l,a){const e=r.slice();return e[1]=l[a].href,e[2]=l[a].label,e[3]=l[a].visible,e}function B(r,l){let a,e=l[2]+"",n,t,s,u,i=M,o;return{key:r,first:null,c(){a=p("a"),n=J(e),this.h()},l(f){a=k(f,"A",{href:!0,class:!0});var c=v(a);n=K(c,e),c.forEach(_),this.h()},h(){m(a,"href",t=l[1]),m(a,"class","svelte-dkcntm"),N(a,"invisible",!l[3]),this.first=a},m(f,c){g(f,a,c),P(a,n),o=!0},p(f,c){l=f,(!o||c&1)&&e!==(e=l[2]+"")&&L(n,e),(!o||c&1&&t!==(t=l[1]))&&m(a,"href",t),c&1&&N(a,"invisible",!l[3])},r(){u=a.getBoundingClientRect()},f(){O(a),i(),Q(a,u)},a(){i(),i=U(a,u,X,{})},i(f){o||(z(()=>{s||(s=R(a,E,{duration:1e3},!0)),s.run(1)}),o=!0)},o(f){s||(s=R(a,E,{duration:1e3},!1)),s.run(0),o=!1},d(f){f&&_(a),f&&s&&s.end()}}}function se(r){let l,a,e=[],n=new Map,t,s=r[0];const u=i=>({href:i[1]});for(let i=0;i<s.length;i+=1){let o=q(r,s,i),f=u(o);n.set(f,e[i]=B(f,o))}return{c(){l=p("header"),a=p("div");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){l=k(i,"HEADER",{class:!0});var o=v(l);a=k(o,"DIV",{class:!0});var f=v(a);for(let c=0;c<e.length;c+=1)e[c].l(f);f.forEach(_),o.forEach(_),this.h()},h(){m(a,"class","svelte-dkcntm"),m(l,"class","svelte-dkcntm")},m(i,o){g(i,l,o),P(l,a);for(let f=0;f<e.length;f+=1)e[f].m(a,null);t=!0},p(i,[o]){if(o&1){s=i[0],I();for(let f=0;f<e.length;f+=1)e[f].r();e=W(e,o,u,1,i,s,n,a,Y,B,null,q);for(let f=0;f<e.length;f+=1)e[f].a();j()}},i(i){if(!t){for(let o=0;o<s.length;o+=1)h(e[o]);t=!0}},o(i){for(let o=0;o<e.length;o+=1)d(e[o]);t=!1},d(i){i&&_(l);for(let o=0;o<e.length;o+=1)e[o].d()}}}function ae(r,l,a){let{links:e=[{href:"../",label:"Home",visible:!0}]}=l;return r.$$set=n=>{"links"in n&&a(0,e=n.links)},[e]}class ne extends ${constructor(l){super();y(this,l,ae,se,b,{links:0})}}function re(r){let l;const a=r[2].default,e=A(a,r,r[3],null);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,t){e&&e.m(n,t),l=!0},p(n,t){e&&e.p&&(!l||t&8)&&w(e,a,n,n[3],l?D(a,n[3],t,null):H(n[3]),null)},i(n){l||(h(e,n),l=!0)},o(n){d(e,n),l=!1},d(n){e&&e.d(n)}}}function ie(r){let l,a,e,n;return l=new ne({props:{links:r[1]}}),e=new le({props:{refresh:r[0],$$slots:{default:[re]},$$scope:{ctx:r}}}),{c(){C(l.$$.fragment),a=Z(),C(e.$$.fragment)},l(t){G(l.$$.fragment,t),a=x(t),G(e.$$.fragment,t)},m(t,s){S(l,t,s),g(t,a,s),S(e,t,s),n=!0},p(t,[s]){const u={};s&2&&(u.links=t[1]),l.$set(u);const i={};s&1&&(i.refresh=t[0]),s&8&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(h(l.$$.fragment,t),h(e.$$.fragment,t),n=!0)},o(t){d(l.$$.fragment,t),d(e.$$.fragment,t),n=!1},d(t){T(l,t),t&&_(a),T(e,t)}}}const ue=async({page:r})=>({props:{key:r.path}});function oe(r,l,a){let{$$slots:e={},$$scope:n}=l,{key:t}=l,s=[{href:"../",label:"Home",visible:!1},{href:"https://github.com/el3um4s/svelte-component-info",label:"GitHub",visible:!0},{href:"https://www.npmjs.com/package/@el3um4s/svelte-component-info",label:"NPM",visible:!0}];return r.$$set=u=>{"key"in u&&a(0,t=u.key),"$$scope"in u&&a(3,n=u.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&(t!=="/"?a(1,s[0].visible=!0,s):a(1,s[0].visible=!1,s))},[t,s,e,n]}class ce extends ${constructor(l){super();y(this,l,oe,ie,b,{key:0})}}export{ce as default,ue as load};
