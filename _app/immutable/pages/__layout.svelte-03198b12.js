import{S as b,i as y,s as w,l as f,m as h,p as d,h as _,q as u,b as p,n as v,F as S,u as I,a as A,v as z,c as E,G as m,w as F,x as q,y as C,H as J,z as D,f as $,t as k,C as G,I as K,J as L,K as M,L as P}from"../chunks/index-83fb3bf0.js";function H(r,t,n){const a=r.slice();return a[1]=t[n],a}function N(r){let t,n,a=r[1].name+"",s,l,e,o;return{c(){t=f("a"),n=f("span"),s=I(a),l=A(),this.h()},l(i){t=h(i,"A",{href:!0,target:!0,class:!0});var c=d(t);n=h(c,"SPAN",{});var g=d(n);s=z(g,a),g.forEach(_),l=E(c),c.forEach(_),this.h()},h(){u(t,"href",e=r[1].link),u(t,"target",o=r[1].target),u(t,"class","nav-link svelte-17vydr7")},m(i,c){p(i,t,c),m(t,n),m(n,s),m(t,l)},p(i,c){c&1&&a!==(a=i[1].name+"")&&F(s,a),c&1&&e!==(e=i[1].link)&&u(t,"href",e),c&1&&o!==(o=i[1].target)&&u(t,"target",o)},d(i){i&&_(t)}}}function R(r){let t,n=r[0],a=[];for(let s=0;s<n.length;s+=1)a[s]=N(H(r,n,s));return{c(){t=f("nav");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){t=h(s,"NAV",{class:!0});var l=d(t);for(let e=0;e<a.length;e+=1)a[e].l(l);l.forEach(_),this.h()},h(){u(t,"class","svelte-17vydr7")},m(s,l){p(s,t,l);for(let e=0;e<a.length;e+=1)a[e].m(t,null)},p(s,[l]){if(l&1){n=s[0];let e;for(e=0;e<n.length;e+=1){const o=H(s,n,e);a[e]?a[e].p(o,l):(a[e]=N(o),a[e].c(),a[e].m(t,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=n.length}},i:v,o:v,d(s){s&&_(t),S(a,s)}}}function V(r,t,n){let{items:a=[]}=t;return r.$$set=s=>{"items"in s&&n(0,a=s.items)},[a]}class j extends b{constructor(t){super(),y(this,t,V,R,w,{items:0})}}function x(r){let t,n,a,s,l,e,o;return e=new j({props:{items:[{link:"/downloads",name:"Downloads"},{link:"/about",name:"About"},{link:"https://discord.gg/chaosawakens",name:"Discord",target:"_blank"},{link:"https://github.com/chaosawakens",name:"GitHub",target:"_blank"}]}}),{c(){t=f("header"),n=f("a"),a=f("img"),l=A(),q(e.$$.fragment),this.h()},l(i){t=h(i,"HEADER",{class:!0});var c=d(t);n=h(c,"A",{href:!0});var g=d(n);a=h(g,"IMG",{src:!0,alt:!0,class:!0}),g.forEach(_),l=E(c),C(e.$$.fragment,c),c.forEach(_),this.h()},h(){J(a.src,s=B)||u(a,"src",s),u(a,"alt","ChaosAwakens logo"),u(a,"class","svelte-c49tku"),u(n,"href","/"),u(t,"class","svelte-c49tku")},m(i,c){p(i,t,c),m(t,n),m(n,a),m(t,l),D(e,t,null),o=!0},p:v,i(i){o||($(e.$$.fragment,i),o=!0)},o(i){k(e.$$.fragment,i),o=!1},d(i){i&&_(t),G(e)}}}let B="images/logo.png";class O extends b{constructor(t){super(),y(this,t,null,x,w,{})}}function Q(r){let t,n,a;t=new O({});const s=r[1].default,l=K(s,r,r[0],null);return{c(){q(t.$$.fragment),n=A(),l&&l.c()},l(e){C(t.$$.fragment,e),n=E(e),l&&l.l(e)},m(e,o){D(t,e,o),p(e,n,o),l&&l.m(e,o),a=!0},p(e,[o]){l&&l.p&&(!a||o&1)&&L(l,s,e,e[0],a?P(s,e[0],o,null):M(e[0]),null)},i(e){a||($(t.$$.fragment,e),$(l,e),a=!0)},o(e){k(t.$$.fragment,e),k(l,e),a=!1},d(e){G(t,e),e&&_(n),l&&l.d(e)}}}function T(r,t,n){let{$$slots:a={},$$scope:s}=t;return r.$$set=l=>{"$$scope"in l&&n(0,s=l.$$scope)},[s,a]}class W extends b{constructor(t){super(),y(this,t,T,Q,w,{})}}export{W as default};