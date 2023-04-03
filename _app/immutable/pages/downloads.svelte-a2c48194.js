import{S as Et,i as St,s as Tt,x as Ct,a as me,l as G,u as O,y as kt,c as fe,m as D,p as U,v as P,h as $,q as _,z as Rt,b as X,G as k,f as It,t as xt,C as $t,F as Lt,n as Ne}from"../chunks/index-83fb3bf0.js";import{T as Nt}from"../chunks/Title-c986be92.js";var z={exports:{}};const Ot="2.0.0",Pt=256,Bt=Number.MAX_SAFE_INTEGER||9007199254740991,Ft=16;var ge={SEMVER_SPEC_VERSION:Ot,MAX_LENGTH:Pt,MAX_SAFE_INTEGER:Bt,MAX_SAFE_COMPONENT_LENGTH:Ft};const Gt=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...r)=>console.error("SEMVER",...r):()=>{};var we=Gt;(function(r,e){const{MAX_SAFE_COMPONENT_LENGTH:t}=ge,n=we;e=r.exports={};const s=e.re=[],a=e.src=[],i=e.t={};let c=0;const o=(w,l,d)=>{const A=c++;n(w,A,l),i[w]=A,a[A]=l,s[A]=new RegExp(l,d?"g":void 0)};o("NUMERICIDENTIFIER","0|[1-9]\\d*"),o("NUMERICIDENTIFIERLOOSE","[0-9]+"),o("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),o("MAINVERSION",`(${a[i.NUMERICIDENTIFIER]})\\.(${a[i.NUMERICIDENTIFIER]})\\.(${a[i.NUMERICIDENTIFIER]})`),o("MAINVERSIONLOOSE",`(${a[i.NUMERICIDENTIFIERLOOSE]})\\.(${a[i.NUMERICIDENTIFIERLOOSE]})\\.(${a[i.NUMERICIDENTIFIERLOOSE]})`),o("PRERELEASEIDENTIFIER",`(?:${a[i.NUMERICIDENTIFIER]}|${a[i.NONNUMERICIDENTIFIER]})`),o("PRERELEASEIDENTIFIERLOOSE",`(?:${a[i.NUMERICIDENTIFIERLOOSE]}|${a[i.NONNUMERICIDENTIFIER]})`),o("PRERELEASE",`(?:-(${a[i.PRERELEASEIDENTIFIER]}(?:\\.${a[i.PRERELEASEIDENTIFIER]})*))`),o("PRERELEASELOOSE",`(?:-?(${a[i.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[i.PRERELEASEIDENTIFIERLOOSE]})*))`),o("BUILDIDENTIFIER","[0-9A-Za-z-]+"),o("BUILD",`(?:\\+(${a[i.BUILDIDENTIFIER]}(?:\\.${a[i.BUILDIDENTIFIER]})*))`),o("FULLPLAIN",`v?${a[i.MAINVERSION]}${a[i.PRERELEASE]}?${a[i.BUILD]}?`),o("FULL",`^${a[i.FULLPLAIN]}$`),o("LOOSEPLAIN",`[v=\\s]*${a[i.MAINVERSIONLOOSE]}${a[i.PRERELEASELOOSE]}?${a[i.BUILD]}?`),o("LOOSE",`^${a[i.LOOSEPLAIN]}$`),o("GTLT","((?:<|>)?=?)"),o("XRANGEIDENTIFIERLOOSE",`${a[i.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),o("XRANGEIDENTIFIER",`${a[i.NUMERICIDENTIFIER]}|x|X|\\*`),o("XRANGEPLAIN",`[v=\\s]*(${a[i.XRANGEIDENTIFIER]})(?:\\.(${a[i.XRANGEIDENTIFIER]})(?:\\.(${a[i.XRANGEIDENTIFIER]})(?:${a[i.PRERELEASE]})?${a[i.BUILD]}?)?)?`),o("XRANGEPLAINLOOSE",`[v=\\s]*(${a[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[i.XRANGEIDENTIFIERLOOSE]})(?:${a[i.PRERELEASELOOSE]})?${a[i.BUILD]}?)?)?`),o("XRANGE",`^${a[i.GTLT]}\\s*${a[i.XRANGEPLAIN]}$`),o("XRANGELOOSE",`^${a[i.GTLT]}\\s*${a[i.XRANGEPLAINLOOSE]}$`),o("COERCE",`(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?(?:$|[^\\d])`),o("COERCERTL",a[i.COERCE],!0),o("LONETILDE","(?:~>?)"),o("TILDETRIM",`(\\s*)${a[i.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",o("TILDE",`^${a[i.LONETILDE]}${a[i.XRANGEPLAIN]}$`),o("TILDELOOSE",`^${a[i.LONETILDE]}${a[i.XRANGEPLAINLOOSE]}$`),o("LONECARET","(?:\\^)"),o("CARETTRIM",`(\\s*)${a[i.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",o("CARET",`^${a[i.LONECARET]}${a[i.XRANGEPLAIN]}$`),o("CARETLOOSE",`^${a[i.LONECARET]}${a[i.XRANGEPLAINLOOSE]}$`),o("COMPARATORLOOSE",`^${a[i.GTLT]}\\s*(${a[i.LOOSEPLAIN]})$|^$`),o("COMPARATOR",`^${a[i.GTLT]}\\s*(${a[i.FULLPLAIN]})$|^$`),o("COMPARATORTRIM",`(\\s*)${a[i.GTLT]}\\s*(${a[i.LOOSEPLAIN]}|${a[i.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",o("HYPHENRANGE",`^\\s*(${a[i.XRANGEPLAIN]})\\s+-\\s+(${a[i.XRANGEPLAIN]})\\s*$`),o("HYPHENRANGELOOSE",`^\\s*(${a[i.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[i.XRANGEPLAINLOOSE]})\\s*$`),o("STAR","(<|>)?=?\\s*\\*"),o("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),o("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(z,z.exports);const Dt=["includePrerelease","loose","rtl"],Ut=r=>r?typeof r!="object"?{loose:!0}:Dt.filter(e=>r[e]).reduce((e,t)=>(e[t]=!0,e),{}):{};var Ae=Ut;const _e=/^[0-9]+$/,ct=(r,e)=>{const t=_e.test(r),n=_e.test(e);return t&&n&&(r=+r,e=+e),r===e?0:t&&!n?-1:n&&!t?1:r<e?-1:1},_t=(r,e)=>ct(e,r);var Le={compareIdentifiers:ct,rcompareIdentifiers:_t};const de=we,{MAX_LENGTH:He,MAX_SAFE_INTEGER:he}=ge,{re:Me,t:Ve}=z.exports,Ht=Ae,{compareIdentifiers:Q}=Le;class H{constructor(e,t){if(t=Ht(t),e instanceof H){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid Version: ${e}`);if(e.length>He)throw new TypeError(`version is longer than ${He} characters`);de("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const n=e.trim().match(t.loose?Me[Ve.LOOSE]:Me[Ve.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>he||this.major<0)throw new TypeError("Invalid major version");if(this.minor>he||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>he||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(s=>{if(/^[0-9]+$/.test(s)){const a=+s;if(a>=0&&a<he)return a}return s}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(de("SemVer.compare",this.version,this.options,e),!(e instanceof H)){if(typeof e=="string"&&e===this.version)return 0;e=new H(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof H||(e=new H(e,this.options)),Q(this.major,e.major)||Q(this.minor,e.minor)||Q(this.patch,e.patch)}comparePre(e){if(e instanceof H||(e=new H(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const n=this.prerelease[t],s=e.prerelease[t];if(de("prerelease compare",t,n,s),n===void 0&&s===void 0)return 0;if(s===void 0)return 1;if(n===void 0)return-1;if(n===s)continue;return Q(n,s)}while(++t)}compareBuild(e){e instanceof H||(e=new H(e,this.options));let t=0;do{const n=this.build[t],s=e.build[t];if(de("prerelease compare",t,n,s),n===void 0&&s===void 0)return 0;if(s===void 0)return 1;if(n===void 0)return-1;if(n===s)continue;return Q(n,s)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",t),this.inc("pre",t);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{let n=this.prerelease.length;for(;--n>=0;)typeof this.prerelease[n]=="number"&&(this.prerelease[n]++,n=-2);n===-1&&this.prerelease.push(0)}t&&(Q(this.prerelease[0],t)===0?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}}var B=H;const{MAX_LENGTH:Mt}=ge,{re:We,t:je}=z.exports,qe=B,Vt=Ae,Wt=(r,e)=>{if(e=Vt(e),r instanceof qe)return r;if(typeof r!="string"||r.length>Mt||!(e.loose?We[je.LOOSE]:We[je.FULL]).test(r))return null;try{return new qe(r,e)}catch{return null}};var re=Wt;const jt=re,qt=(r,e)=>{const t=jt(r,e);return t?t.version:null};var Xt=qt;const zt=re,Yt=(r,e)=>{const t=zt(r.trim().replace(/^[=v]+/,""),e);return t?t.version:null};var Jt=Yt;const Xe=B,Zt=(r,e,t,n)=>{typeof t=="string"&&(n=t,t=void 0);try{return new Xe(r instanceof Xe?r.version:r,t).inc(e,n).version}catch{return null}};var Kt=Zt;const ze=B,Qt=(r,e,t)=>new ze(r,t).compare(new ze(e,t));var V=Qt;const er=V,tr=(r,e,t)=>er(r,e,t)===0;var Oe=tr;const Ye=re,rr=Oe,nr=(r,e)=>{if(rr(r,e))return null;{const t=Ye(r),n=Ye(e),s=t.prerelease.length||n.prerelease.length,a=s?"pre":"",i=s?"prerelease":"";for(const c in t)if((c==="major"||c==="minor"||c==="patch")&&t[c]!==n[c])return a+c;return i}};var ar=nr;const sr=B,ir=(r,e)=>new sr(r,e).major;var or=ir;const lr=B,dr=(r,e)=>new lr(r,e).minor;var hr=dr;const cr=B,ur=(r,e)=>new cr(r,e).patch;var br=ur;const mr=re,fr=(r,e)=>{const t=mr(r,e);return t&&t.prerelease.length?t.prerelease:null};var pr=fr;const gr=V,wr=(r,e,t)=>gr(e,r,t);var Ar=wr;const vr=V,yr=(r,e)=>vr(r,e,!0);var Er=yr;const Je=B,Sr=(r,e,t)=>{const n=new Je(r,t),s=new Je(e,t);return n.compare(s)||n.compareBuild(s)};var Pe=Sr;const Tr=Pe,Cr=(r,e)=>r.sort((t,n)=>Tr(t,n,e));var kr=Cr;const Rr=Pe,Ir=(r,e)=>r.sort((t,n)=>Rr(n,t,e));var xr=Ir;const $r=V,Lr=(r,e,t)=>$r(r,e,t)>0;var ve=Lr;const Nr=V,Or=(r,e,t)=>Nr(r,e,t)<0;var Be=Or;const Pr=V,Br=(r,e,t)=>Pr(r,e,t)!==0;var ut=Br;const Fr=V,Gr=(r,e,t)=>Fr(r,e,t)>=0;var Fe=Gr;const Dr=V,Ur=(r,e,t)=>Dr(r,e,t)<=0;var Ge=Ur;const _r=Oe,Hr=ut,Mr=ve,Vr=Fe,Wr=Be,jr=Ge,qr=(r,e,t,n)=>{switch(e){case"===":return typeof r=="object"&&(r=r.version),typeof t=="object"&&(t=t.version),r===t;case"!==":return typeof r=="object"&&(r=r.version),typeof t=="object"&&(t=t.version),r!==t;case"":case"=":case"==":return _r(r,t,n);case"!=":return Hr(r,t,n);case">":return Mr(r,t,n);case">=":return Vr(r,t,n);case"<":return Wr(r,t,n);case"<=":return jr(r,t,n);default:throw new TypeError(`Invalid operator: ${e}`)}};var bt=qr;const Xr=B,zr=re,{re:ce,t:ue}=z.exports,Yr=(r,e)=>{if(r instanceof Xr)return r;if(typeof r=="number"&&(r=String(r)),typeof r!="string")return null;e=e||{};let t=null;if(!e.rtl)t=r.match(ce[ue.COERCE]);else{let n;for(;(n=ce[ue.COERCERTL].exec(r))&&(!t||t.index+t[0].length!==r.length);)(!t||n.index+n[0].length!==t.index+t[0].length)&&(t=n),ce[ue.COERCERTL].lastIndex=n.index+n[1].length+n[2].length;ce[ue.COERCERTL].lastIndex=-1}return t===null?null:zr(`${t[2]}.${t[3]||"0"}.${t[4]||"0"}`,e)};var Jr=Yr,Se,Ze;function Zr(){return Ze||(Ze=1,Se=function(r){r.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}),Se}var Kr=T;T.Node=K;T.create=T;function T(r){var e=this;if(e instanceof T||(e=new T),e.tail=null,e.head=null,e.length=0,r&&typeof r.forEach=="function")r.forEach(function(s){e.push(s)});else if(arguments.length>0)for(var t=0,n=arguments.length;t<n;t++)e.push(arguments[t]);return e}T.prototype.removeNode=function(r){if(r.list!==this)throw new Error("removing node which does not belong to this list");var e=r.next,t=r.prev;return e&&(e.prev=t),t&&(t.next=e),r===this.head&&(this.head=e),r===this.tail&&(this.tail=t),r.list.length--,r.next=null,r.prev=null,r.list=null,e};T.prototype.unshiftNode=function(r){if(r!==this.head){r.list&&r.list.removeNode(r);var e=this.head;r.list=this,r.next=e,e&&(e.prev=r),this.head=r,this.tail||(this.tail=r),this.length++}};T.prototype.pushNode=function(r){if(r!==this.tail){r.list&&r.list.removeNode(r);var e=this.tail;r.list=this,r.prev=e,e&&(e.next=r),this.tail=r,this.head||(this.head=r),this.length++}};T.prototype.push=function(){for(var r=0,e=arguments.length;r<e;r++)en(this,arguments[r]);return this.length};T.prototype.unshift=function(){for(var r=0,e=arguments.length;r<e;r++)tn(this,arguments[r]);return this.length};T.prototype.pop=function(){if(!!this.tail){var r=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,r}};T.prototype.shift=function(){if(!!this.head){var r=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,r}};T.prototype.forEach=function(r,e){e=e||this;for(var t=this.head,n=0;t!==null;n++)r.call(e,t.value,n,this),t=t.next};T.prototype.forEachReverse=function(r,e){e=e||this;for(var t=this.tail,n=this.length-1;t!==null;n--)r.call(e,t.value,n,this),t=t.prev};T.prototype.get=function(r){for(var e=0,t=this.head;t!==null&&e<r;e++)t=t.next;if(e===r&&t!==null)return t.value};T.prototype.getReverse=function(r){for(var e=0,t=this.tail;t!==null&&e<r;e++)t=t.prev;if(e===r&&t!==null)return t.value};T.prototype.map=function(r,e){e=e||this;for(var t=new T,n=this.head;n!==null;)t.push(r.call(e,n.value,this)),n=n.next;return t};T.prototype.mapReverse=function(r,e){e=e||this;for(var t=new T,n=this.tail;n!==null;)t.push(r.call(e,n.value,this)),n=n.prev;return t};T.prototype.reduce=function(r,e){var t,n=this.head;if(arguments.length>1)t=e;else if(this.head)n=this.head.next,t=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var s=0;n!==null;s++)t=r(t,n.value,s),n=n.next;return t};T.prototype.reduceReverse=function(r,e){var t,n=this.tail;if(arguments.length>1)t=e;else if(this.tail)n=this.tail.prev,t=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var s=this.length-1;n!==null;s--)t=r(t,n.value,s),n=n.prev;return t};T.prototype.toArray=function(){for(var r=new Array(this.length),e=0,t=this.head;t!==null;e++)r[e]=t.value,t=t.next;return r};T.prototype.toArrayReverse=function(){for(var r=new Array(this.length),e=0,t=this.tail;t!==null;e++)r[e]=t.value,t=t.prev;return r};T.prototype.slice=function(r,e){e=e||this.length,e<0&&(e+=this.length),r=r||0,r<0&&(r+=this.length);var t=new T;if(e<r||e<0)return t;r<0&&(r=0),e>this.length&&(e=this.length);for(var n=0,s=this.head;s!==null&&n<r;n++)s=s.next;for(;s!==null&&n<e;n++,s=s.next)t.push(s.value);return t};T.prototype.sliceReverse=function(r,e){e=e||this.length,e<0&&(e+=this.length),r=r||0,r<0&&(r+=this.length);var t=new T;if(e<r||e<0)return t;r<0&&(r=0),e>this.length&&(e=this.length);for(var n=this.length,s=this.tail;s!==null&&n>e;n--)s=s.prev;for(;s!==null&&n>r;n--,s=s.prev)t.push(s.value);return t};T.prototype.splice=function(r,e,...t){r>this.length&&(r=this.length-1),r<0&&(r=this.length+r);for(var n=0,s=this.head;s!==null&&n<r;n++)s=s.next;for(var a=[],n=0;s&&n<e;n++)a.push(s.value),s=this.removeNode(s);s===null&&(s=this.tail),s!==this.head&&s!==this.tail&&(s=s.prev);for(var n=0;n<t.length;n++)s=Qr(this,s,t[n]);return a};T.prototype.reverse=function(){for(var r=this.head,e=this.tail,t=r;t!==null;t=t.prev){var n=t.prev;t.prev=t.next,t.next=n}return this.head=e,this.tail=r,this};function Qr(r,e,t){var n=e===r.head?new K(t,null,e,r):new K(t,e,e.next,r);return n.next===null&&(r.tail=n),n.prev===null&&(r.head=n),r.length++,n}function en(r,e){r.tail=new K(e,r.tail,null,r),r.head||(r.head=r.tail),r.length++}function tn(r,e){r.head=new K(e,null,r.head,r),r.tail||(r.tail=r.head),r.length++}function K(r,e,t,n){if(!(this instanceof K))return new K(r,e,t,n);this.list=n,this.value=r,e?(e.next=this,this.prev=e):this.prev=null,t?(t.prev=this,this.next=t):this.next=null}try{Zr()(T)}catch{}const rn=Kr,J=Symbol("max"),q=Symbol("length"),ee=Symbol("lengthCalculator"),oe=Symbol("allowStale"),Z=Symbol("maxAge"),j=Symbol("dispose"),Ke=Symbol("noDisposeOnSet"),N=Symbol("lruList"),M=Symbol("cache"),mt=Symbol("updateAgeOnGet"),Te=()=>1;class nn{constructor(e){if(typeof e=="number"&&(e={max:e}),e||(e={}),e.max&&(typeof e.max!="number"||e.max<0))throw new TypeError("max must be a non-negative number");this[J]=e.max||1/0;const t=e.length||Te;if(this[ee]=typeof t!="function"?Te:t,this[oe]=e.stale||!1,e.maxAge&&typeof e.maxAge!="number")throw new TypeError("maxAge must be a number");this[Z]=e.maxAge||0,this[j]=e.dispose,this[Ke]=e.noDisposeOnSet||!1,this[mt]=e.updateAgeOnGet||!1,this.reset()}set max(e){if(typeof e!="number"||e<0)throw new TypeError("max must be a non-negative number");this[J]=e||1/0,se(this)}get max(){return this[J]}set allowStale(e){this[oe]=!!e}get allowStale(){return this[oe]}set maxAge(e){if(typeof e!="number")throw new TypeError("maxAge must be a non-negative number");this[Z]=e,se(this)}get maxAge(){return this[Z]}set lengthCalculator(e){typeof e!="function"&&(e=Te),e!==this[ee]&&(this[ee]=e,this[q]=0,this[N].forEach(t=>{t.length=this[ee](t.value,t.key),this[q]+=t.length})),se(this)}get lengthCalculator(){return this[ee]}get length(){return this[q]}get itemCount(){return this[N].length}rforEach(e,t){t=t||this;for(let n=this[N].tail;n!==null;){const s=n.prev;Qe(this,e,n,t),n=s}}forEach(e,t){t=t||this;for(let n=this[N].head;n!==null;){const s=n.next;Qe(this,e,n,t),n=s}}keys(){return this[N].toArray().map(e=>e.key)}values(){return this[N].toArray().map(e=>e.value)}reset(){this[j]&&this[N]&&this[N].length&&this[N].forEach(e=>this[j](e.key,e.value)),this[M]=new Map,this[N]=new rn,this[q]=0}dump(){return this[N].map(e=>pe(this,e)?!1:{k:e.key,v:e.value,e:e.now+(e.maxAge||0)}).toArray().filter(e=>e)}dumpLru(){return this[N]}set(e,t,n){if(n=n||this[Z],n&&typeof n!="number")throw new TypeError("maxAge must be a number");const s=n?Date.now():0,a=this[ee](t,e);if(this[M].has(e)){if(a>this[J])return te(this,this[M].get(e)),!1;const o=this[M].get(e).value;return this[j]&&(this[Ke]||this[j](e,o.value)),o.now=s,o.maxAge=n,o.value=t,this[q]+=a-o.length,o.length=a,this.get(e),se(this),!0}const i=new an(e,t,a,s,n);return i.length>this[J]?(this[j]&&this[j](e,t),!1):(this[q]+=i.length,this[N].unshift(i),this[M].set(e,this[N].head),se(this),!0)}has(e){if(!this[M].has(e))return!1;const t=this[M].get(e).value;return!pe(this,t)}get(e){return Ce(this,e,!0)}peek(e){return Ce(this,e,!1)}pop(){const e=this[N].tail;return e?(te(this,e),e.value):null}del(e){te(this,this[M].get(e))}load(e){this.reset();const t=Date.now();for(let n=e.length-1;n>=0;n--){const s=e[n],a=s.e||0;if(a===0)this.set(s.k,s.v);else{const i=a-t;i>0&&this.set(s.k,s.v,i)}}}prune(){this[M].forEach((e,t)=>Ce(this,t,!1))}}const Ce=(r,e,t)=>{const n=r[M].get(e);if(n){const s=n.value;if(pe(r,s)){if(te(r,n),!r[oe])return}else t&&(r[mt]&&(n.value.now=Date.now()),r[N].unshiftNode(n));return s.value}},pe=(r,e)=>{if(!e||!e.maxAge&&!r[Z])return!1;const t=Date.now()-e.now;return e.maxAge?t>e.maxAge:r[Z]&&t>r[Z]},se=r=>{if(r[q]>r[J])for(let e=r[N].tail;r[q]>r[J]&&e!==null;){const t=e.prev;te(r,e),e=t}},te=(r,e)=>{if(e){const t=e.value;r[j]&&r[j](t.key,t.value),r[q]-=t.length,r[M].delete(t.key),r[N].removeNode(e)}};class an{constructor(e,t,n,s,a){this.key=e,this.value=t,this.length=n,this.now=s,this.maxAge=a||0}}const Qe=(r,e,t,n)=>{let s=t.value;pe(r,s)&&(te(r,t),r[oe]||(s=void 0)),s&&e.call(n,s.value,s.key,r)};var sn=nn,ke,et;function W(){if(et)return ke;et=1;class r{constructor(h,g){if(g=n(g),h instanceof r)return h.loose===!!g.loose&&h.includePrerelease===!!g.includePrerelease?h:new r(h.raw,g);if(h instanceof s)return this.raw=h.value,this.set=[[h]],this.format(),this;if(this.options=g,this.loose=!!g.loose,this.includePrerelease=!!g.includePrerelease,this.raw=h,this.set=h.split("||").map(f=>this.parseRange(f.trim())).filter(f=>f.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${h}`);if(this.set.length>1){const f=this.set[0];if(this.set=this.set.filter(p=>!A(p[0])),this.set.length===0)this.set=[f];else if(this.set.length>1){for(const p of this.set)if(p.length===1&&b(p[0])){this.set=[p];break}}}this.format()}format(){return this.range=this.set.map(h=>h.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(h){h=h.trim();const f=`parseRange:${Object.keys(this.options).join(",")}:${h}`,p=t.get(f);if(p)return p;const m=this.options.loose,v=m?c[o.HYPHENRANGELOOSE]:c[o.HYPHENRANGE];h=h.replace(v,vt(this.options.includePrerelease)),a("hyphen replace",h),h=h.replace(c[o.COMPARATORTRIM],w),a("comparator trim",h),h=h.replace(c[o.TILDETRIM],l),h=h.replace(c[o.CARETTRIM],d),h=h.split(/\s+/).join(" ");let C=h.split(" ").map(L=>y(L,this.options)).join(" ").split(/\s+/).map(L=>At(L,this.options));m&&(C=C.filter(L=>(a("loose invalid filter",L,this.options),!!L.match(c[o.COMPARATORLOOSE])))),a("range list",C);const E=new Map,x=C.map(L=>new s(L,this.options));for(const L of x){if(A(L))return[L];E.set(L.value,L)}E.size>1&&E.has("")&&E.delete("");const F=[...E.values()];return t.set(f,F),F}intersects(h,g){if(!(h instanceof r))throw new TypeError("a Range is required");return this.set.some(f=>R(f,g)&&h.set.some(p=>R(p,g)&&f.every(m=>p.every(v=>m.intersects(v,g)))))}test(h){if(!h)return!1;if(typeof h=="string")try{h=new i(h,this.options)}catch{return!1}for(let g=0;g<this.set.length;g++)if(yt(this.set[g],h,this.options))return!0;return!1}}ke=r;const e=sn,t=new e({max:1e3}),n=Ae,s=ye(),a=we,i=B,{re:c,t:o,comparatorTrimReplace:w,tildeTrimReplace:l,caretTrimReplace:d}=z.exports,A=u=>u.value==="<0.0.0-0",b=u=>u.value==="",R=(u,h)=>{let g=!0;const f=u.slice();let p=f.pop();for(;g&&f.length;)g=f.every(m=>p.intersects(m,h)),p=f.pop();return g},y=(u,h)=>(a("comp",u,h),u=le(u,h),a("caret",u),u=I(u,h),a("tildes",u),u=pt(u,h),a("xrange",u),u=wt(u,h),a("stars",u),u),S=u=>!u||u.toLowerCase()==="x"||u==="*",I=(u,h)=>u.trim().split(/\s+/).map(g=>Y(g,h)).join(" "),Y=(u,h)=>{const g=h.loose?c[o.TILDELOOSE]:c[o.TILDE];return u.replace(g,(f,p,m,v,C)=>{a("tilde",u,f,p,m,v,C);let E;return S(p)?E="":S(m)?E=`>=${p}.0.0 <${+p+1}.0.0-0`:S(v)?E=`>=${p}.${m}.0 <${p}.${+m+1}.0-0`:C?(a("replaceTilde pr",C),E=`>=${p}.${m}.${v}-${C} <${p}.${+m+1}.0-0`):E=`>=${p}.${m}.${v} <${p}.${+m+1}.0-0`,a("tilde return",E),E})},le=(u,h)=>u.trim().split(/\s+/).map(g=>ne(g,h)).join(" "),ne=(u,h)=>{a("caret",u,h);const g=h.loose?c[o.CARETLOOSE]:c[o.CARET],f=h.includePrerelease?"-0":"";return u.replace(g,(p,m,v,C,E)=>{a("caret",u,p,m,v,C,E);let x;return S(m)?x="":S(v)?x=`>=${m}.0.0${f} <${+m+1}.0.0-0`:S(C)?m==="0"?x=`>=${m}.${v}.0${f} <${m}.${+v+1}.0-0`:x=`>=${m}.${v}.0${f} <${+m+1}.0.0-0`:E?(a("replaceCaret pr",E),m==="0"?v==="0"?x=`>=${m}.${v}.${C}-${E} <${m}.${v}.${+C+1}-0`:x=`>=${m}.${v}.${C}-${E} <${m}.${+v+1}.0-0`:x=`>=${m}.${v}.${C}-${E} <${+m+1}.0.0-0`):(a("no pr"),m==="0"?v==="0"?x=`>=${m}.${v}.${C}${f} <${m}.${v}.${+C+1}-0`:x=`>=${m}.${v}.${C}${f} <${m}.${+v+1}.0-0`:x=`>=${m}.${v}.${C} <${+m+1}.0.0-0`),a("caret return",x),x})},pt=(u,h)=>(a("replaceXRanges",u,h),u.split(/\s+/).map(g=>gt(g,h)).join(" ")),gt=(u,h)=>{u=u.trim();const g=h.loose?c[o.XRANGELOOSE]:c[o.XRANGE];return u.replace(g,(f,p,m,v,C,E)=>{a("xRange",u,f,p,m,v,C,E);const x=S(m),F=x||S(v),L=F||S(C),ae=L;return p==="="&&ae&&(p=""),E=h.includePrerelease?"-0":"",x?p===">"||p==="<"?f="<0.0.0-0":f="*":p&&ae?(F&&(v=0),C=0,p===">"?(p=">=",F?(m=+m+1,v=0,C=0):(v=+v+1,C=0)):p==="<="&&(p="<",F?m=+m+1:v=+v+1),p==="<"&&(E="-0"),f=`${p+m}.${v}.${C}${E}`):F?f=`>=${m}.0.0${E} <${+m+1}.0.0-0`:L&&(f=`>=${m}.${v}.0${E} <${m}.${+v+1}.0-0`),a("xRange return",f),f})},wt=(u,h)=>(a("replaceStars",u,h),u.trim().replace(c[o.STAR],"")),At=(u,h)=>(a("replaceGTE0",u,h),u.trim().replace(c[h.includePrerelease?o.GTE0PRE:o.GTE0],"")),vt=u=>(h,g,f,p,m,v,C,E,x,F,L,ae,Qn)=>(S(f)?g="":S(p)?g=`>=${f}.0.0${u?"-0":""}`:S(m)?g=`>=${f}.${p}.0${u?"-0":""}`:v?g=`>=${g}`:g=`>=${g}${u?"-0":""}`,S(x)?E="":S(F)?E=`<${+x+1}.0.0-0`:S(L)?E=`<${x}.${+F+1}.0-0`:ae?E=`<=${x}.${F}.${L}-${ae}`:u?E=`<${x}.${F}.${+L+1}-0`:E=`<=${E}`,`${g} ${E}`.trim()),yt=(u,h,g)=>{for(let f=0;f<u.length;f++)if(!u[f].test(h))return!1;if(h.prerelease.length&&!g.includePrerelease){for(let f=0;f<u.length;f++)if(a(u[f].semver),u[f].semver!==s.ANY&&u[f].semver.prerelease.length>0){const p=u[f].semver;if(p.major===h.major&&p.minor===h.minor&&p.patch===h.patch)return!0}return!1}return!0};return ke}var Re,tt;function ye(){if(tt)return Re;tt=1;const r=Symbol("SemVer ANY");class e{static get ANY(){return r}constructor(l,d){if(d=t(d),l instanceof e){if(l.loose===!!d.loose)return l;l=l.value}i("comparator",l,d),this.options=d,this.loose=!!d.loose,this.parse(l),this.semver===r?this.value="":this.value=this.operator+this.semver.version,i("comp",this)}parse(l){const d=this.options.loose?n[s.COMPARATORLOOSE]:n[s.COMPARATOR],A=l.match(d);if(!A)throw new TypeError(`Invalid comparator: ${l}`);this.operator=A[1]!==void 0?A[1]:"",this.operator==="="&&(this.operator=""),A[2]?this.semver=new c(A[2],this.options.loose):this.semver=r}toString(){return this.value}test(l){if(i("Comparator.test",l,this.options.loose),this.semver===r||l===r)return!0;if(typeof l=="string")try{l=new c(l,this.options)}catch{return!1}return a(l,this.operator,this.semver,this.options)}intersects(l,d){if(!(l instanceof e))throw new TypeError("a Comparator is required");if((!d||typeof d!="object")&&(d={loose:!!d,includePrerelease:!1}),this.operator==="")return this.value===""?!0:new o(l.value,d).test(this.value);if(l.operator==="")return l.value===""?!0:new o(this.value,d).test(l.semver);const A=(this.operator===">="||this.operator===">")&&(l.operator===">="||l.operator===">"),b=(this.operator==="<="||this.operator==="<")&&(l.operator==="<="||l.operator==="<"),R=this.semver.version===l.semver.version,y=(this.operator===">="||this.operator==="<=")&&(l.operator===">="||l.operator==="<="),S=a(this.semver,"<",l.semver,d)&&(this.operator===">="||this.operator===">")&&(l.operator==="<="||l.operator==="<"),I=a(this.semver,">",l.semver,d)&&(this.operator==="<="||this.operator==="<")&&(l.operator===">="||l.operator===">");return A||b||R&&y||S||I}}Re=e;const t=Ae,{re:n,t:s}=z.exports,a=bt,i=we,c=B,o=W();return Re}const on=W(),ln=(r,e,t)=>{try{e=new on(e,t)}catch{return!1}return e.test(r)};var Ee=ln;const dn=W(),hn=(r,e)=>new dn(r,e).set.map(t=>t.map(n=>n.value).join(" ").trim().split(" "));var cn=hn;const un=B,bn=W(),mn=(r,e,t)=>{let n=null,s=null,a=null;try{a=new bn(e,t)}catch{return null}return r.forEach(i=>{a.test(i)&&(!n||s.compare(i)===-1)&&(n=i,s=new un(n,t))}),n};var fn=mn;const pn=B,gn=W(),wn=(r,e,t)=>{let n=null,s=null,a=null;try{a=new gn(e,t)}catch{return null}return r.forEach(i=>{a.test(i)&&(!n||s.compare(i)===1)&&(n=i,s=new pn(n,t))}),n};var An=wn;const Ie=B,vn=W(),rt=ve,yn=(r,e)=>{r=new vn(r,e);let t=new Ie("0.0.0");if(r.test(t)||(t=new Ie("0.0.0-0"),r.test(t)))return t;t=null;for(let n=0;n<r.set.length;++n){const s=r.set[n];let a=null;s.forEach(i=>{const c=new Ie(i.semver.version);switch(i.operator){case">":c.prerelease.length===0?c.patch++:c.prerelease.push(0),c.raw=c.format();case"":case">=":(!a||rt(c,a))&&(a=c);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),a&&(!t||rt(t,a))&&(t=a)}return t&&r.test(t)?t:null};var En=yn;const Sn=W(),Tn=(r,e)=>{try{return new Sn(r,e).range||"*"}catch{return null}};var Cn=Tn;const kn=B,ft=ye(),{ANY:Rn}=ft,In=W(),xn=Ee,nt=ve,at=Be,$n=Ge,Ln=Fe,Nn=(r,e,t,n)=>{r=new kn(r,n),e=new In(e,n);let s,a,i,c,o;switch(t){case">":s=nt,a=$n,i=at,c=">",o=">=";break;case"<":s=at,a=Ln,i=nt,c="<",o="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(xn(r,e,n))return!1;for(let w=0;w<e.set.length;++w){const l=e.set[w];let d=null,A=null;if(l.forEach(b=>{b.semver===Rn&&(b=new ft(">=0.0.0")),d=d||b,A=A||b,s(b.semver,d.semver,n)?d=b:i(b.semver,A.semver,n)&&(A=b)}),d.operator===c||d.operator===o||(!A.operator||A.operator===c)&&a(r,A.semver))return!1;if(A.operator===o&&i(r,A.semver))return!1}return!0};var De=Nn;const On=De,Pn=(r,e,t)=>On(r,e,">",t);var Bn=Pn;const Fn=De,Gn=(r,e,t)=>Fn(r,e,"<",t);var Dn=Gn;const st=W(),Un=(r,e,t)=>(r=new st(r,t),e=new st(e,t),r.intersects(e));var _n=Un;const Hn=Ee,Mn=V;var Vn=(r,e,t)=>{const n=[];let s=null,a=null;const i=r.sort((l,d)=>Mn(l,d,t));for(const l of i)Hn(l,e,t)?(a=l,s||(s=l)):(a&&n.push([s,a]),a=null,s=null);s&&n.push([s,null]);const c=[];for(const[l,d]of n)l===d?c.push(l):!d&&l===i[0]?c.push("*"):d?l===i[0]?c.push(`<=${d}`):c.push(`${l} - ${d}`):c.push(`>=${l}`);const o=c.join(" || "),w=typeof e.raw=="string"?e.raw:String(e);return o.length<w.length?o:e};const it=W(),be=ye(),{ANY:xe}=be,ie=Ee,Ue=V,Wn=(r,e,t={})=>{if(r===e)return!0;r=new it(r,t),e=new it(e,t);let n=!1;e:for(const s of r.set){for(const a of e.set){const i=jn(s,a,t);if(n=n||i!==null,i)continue e}if(n)return!1}return!0},jn=(r,e,t)=>{if(r===e)return!0;if(r.length===1&&r[0].semver===xe){if(e.length===1&&e[0].semver===xe)return!0;t.includePrerelease?r=[new be(">=0.0.0-0")]:r=[new be(">=0.0.0")]}if(e.length===1&&e[0].semver===xe){if(t.includePrerelease)return!0;e=[new be(">=0.0.0")]}const n=new Set;let s,a;for(const b of r)b.operator===">"||b.operator===">="?s=ot(s,b,t):b.operator==="<"||b.operator==="<="?a=lt(a,b,t):n.add(b.semver);if(n.size>1)return null;let i;if(s&&a){if(i=Ue(s.semver,a.semver,t),i>0)return null;if(i===0&&(s.operator!==">="||a.operator!=="<="))return null}for(const b of n){if(s&&!ie(b,String(s),t)||a&&!ie(b,String(a),t))return null;for(const R of e)if(!ie(b,String(R),t))return!1;return!0}let c,o,w,l,d=a&&!t.includePrerelease&&a.semver.prerelease.length?a.semver:!1,A=s&&!t.includePrerelease&&s.semver.prerelease.length?s.semver:!1;d&&d.prerelease.length===1&&a.operator==="<"&&d.prerelease[0]===0&&(d=!1);for(const b of e){if(l=l||b.operator===">"||b.operator===">=",w=w||b.operator==="<"||b.operator==="<=",s){if(A&&b.semver.prerelease&&b.semver.prerelease.length&&b.semver.major===A.major&&b.semver.minor===A.minor&&b.semver.patch===A.patch&&(A=!1),b.operator===">"||b.operator===">="){if(c=ot(s,b,t),c===b&&c!==s)return!1}else if(s.operator===">="&&!ie(s.semver,String(b),t))return!1}if(a){if(d&&b.semver.prerelease&&b.semver.prerelease.length&&b.semver.major===d.major&&b.semver.minor===d.minor&&b.semver.patch===d.patch&&(d=!1),b.operator==="<"||b.operator==="<="){if(o=lt(a,b,t),o===b&&o!==a)return!1}else if(a.operator==="<="&&!ie(a.semver,String(b),t))return!1}if(!b.operator&&(a||s)&&i!==0)return!1}return!(s&&w&&!a&&i!==0||a&&l&&!s&&i!==0||A||d)},ot=(r,e,t)=>{if(!r)return e;const n=Ue(r.semver,e.semver,t);return n>0?r:n<0||e.operator===">"&&r.operator===">="?e:r},lt=(r,e,t)=>{if(!r)return e;const n=Ue(r.semver,e.semver,t);return n<0?r:n>0||e.operator==="<"&&r.operator==="<="?e:r};var qn=Wn;const $e=z.exports;$e.re,$e.src,$e.t,ge.SEMVER_SPEC_VERSION,Le.compareIdentifiers,Le.rcompareIdentifiers,ye(),W();function dt(r,e,t){const n=r.slice();return n[1]=e[t],n}function Xn(r){let e,t,n,s=r[1].mcVersion+"",a,i,c=r[1].version+"",o;return{c(){e=G("a"),t=G("h3"),n=O("ChaosAwakens Beta - "),a=O(s),i=O(" - "),o=O(c),this.h()},l(w){e=D(w,"A",{href:!0});var l=U(e);t=D(l,"H3",{class:!0});var d=U(t);n=P(d,"ChaosAwakens Beta - "),a=P(d,s),i=P(d," - "),o=P(d,c),d.forEach($),l.forEach($),this.h()},h(){_(t,"class","svelte-1rm1xus"),_(e,"href","downloads/ChaosAwakensBeta"+r[1].mcVersion+"v"+r[1].version+".jar")},m(w,l){X(w,e,l),k(e,t),k(t,n),k(t,a),k(t,i),k(t,o)},p:Ne,d(w){w&&$(e)}}}function zn(r){let e,t,n,s=r[1].mcVersion+"",a,i,c=r[1].version+"",o;return{c(){e=G("a"),t=G("h3"),n=O("ChaosAwakens Alpha - "),a=O(s),i=O(" - "),o=O(c),this.h()},l(w){e=D(w,"A",{href:!0});var l=U(e);t=D(l,"H3",{class:!0});var d=U(t);n=P(d,"ChaosAwakens Alpha - "),a=P(d,s),i=P(d," - "),o=P(d,c),d.forEach($),l.forEach($),this.h()},h(){_(t,"class","svelte-1rm1xus"),_(e,"href","downloads/ChaosAwakensAlpha"+r[1].mcVersion+"v"+r[1].version+".jar")},m(w,l){X(w,e,l),k(e,t),k(t,n),k(t,a),k(t,i),k(t,o)},p:Ne,d(w){w&&$(e)}}}function Yn(r){let e,t,n,s=r[1].mcVersion+"",a,i,c=r[1].version+"",o;return{c(){e=G("a"),t=G("h3"),n=O("ChaosAwakens - "),a=O(s),i=O(" - "),o=O(c),this.h()},l(w){e=D(w,"A",{href:!0});var l=U(e);t=D(l,"H3",{class:!0});var d=U(t);n=P(d,"ChaosAwakens - "),a=P(d,s),i=P(d," - "),o=P(d,c),d.forEach($),l.forEach($),this.h()},h(){_(t,"class","svelte-1rm1xus"),_(e,"href","downloads/chaosawakens-"+r[1].mcVersion+"-"+r[1].version+".jar")},m(w,l){X(w,e,l),k(e,t),k(t,n),k(t,a),k(t,i),k(t,o)},p:Ne,d(w){w&&$(e)}}}function ht(r){let e,t,n,s,a=r[1].changelog+"",i;function c(l,d){return l[1].branch=="stable"?Yn:l[1].branch=="alpha"?zn:Xn}let w=c(r)(r);return{c(){e=G("details"),t=G("summary"),w.c(),n=me(),s=G("p"),i=me(),this.h()},l(l){e=D(l,"DETAILS",{class:!0});var d=U(e);t=D(d,"SUMMARY",{class:!0});var A=U(t);w.l(A),A.forEach($),n=fe(d),s=D(d,"P",{class:!0});var b=U(s);b.forEach($),i=fe(d),d.forEach($),this.h()},h(){_(t,"class","svelte-1rm1xus"),_(s,"class","svelte-1rm1xus"),_(e,"class","svelte-1rm1xus")},m(l,d){X(l,e,d),k(e,t),w.m(t,null),k(e,n),k(e,s),s.innerHTML=a,k(e,i)},p(l,d){w.p(l,d)},d(l){l&&$(e),w.d()}}}function Jn(r){let e,t,n,s,a,i,c,o,w,l,d,A;e=new Nt({props:{title:"Downloads"}});let b=r[0],R=[];for(let y=0;y<b.length;y+=1)R[y]=ht(dt(r,b,y));return{c(){Ct(e.$$.fragment),t=me(),n=G("h3"),s=G("a"),a=O("GeckoLib"),i=O(" and "),c=G("a"),o=O("AttributeFix (for versions 0.10.0.2 and below)"),w=O(" are required for the mod to function!"),l=me(),d=G("div");for(let y=0;y<R.length;y+=1)R[y].c();this.h()},l(y){kt(e.$$.fragment,y),t=fe(y),n=D(y,"H3",{class:!0});var S=U(n);s=D(S,"A",{href:!0});var I=U(s);a=P(I,"GeckoLib"),I.forEach($),i=P(S," and "),c=D(S,"A",{href:!0});var Y=U(c);o=P(Y,"AttributeFix (for versions 0.10.0.2 and below)"),Y.forEach($),w=P(S," are required for the mod to function!"),S.forEach($),l=fe(y),d=D(y,"DIV",{class:!0});var le=U(d);for(let ne=0;ne<R.length;ne+=1)R[ne].l(le);le.forEach($),this.h()},h(){_(s,"href","https://www.curseforge.com/minecraft/mc-mods/geckolib/"),_(c,"href","https://www.curseforge.com/minecraft/mc-mods/attributefix"),_(n,"class","svelte-1rm1xus"),_(d,"class","versions")},m(y,S){Rt(e,y,S),X(y,t,S),X(y,n,S),k(n,s),k(s,a),k(n,i),k(n,c),k(c,o),k(n,w),X(y,l,S),X(y,d,S);for(let I=0;I<R.length;I+=1)R[I].m(d,null);A=!0},p(y,[S]){if(S&1){b=y[0];let I;for(I=0;I<b.length;I+=1){const Y=dt(y,b,I);R[I]?R[I].p(Y,S):(R[I]=ht(Y),R[I].c(),R[I].m(d,null))}for(;I<R.length;I+=1)R[I].d(1);R.length=b.length}},i(y){A||(It(e.$$.fragment,y),A=!0)},o(y){xt(e.$$.fragment,y),A=!1},d(y){$t(e,y),y&&$(t),y&&$(n),y&&$(l),y&&$(d),Lt(R,y)}}}function Zn(r,e){var t,n,s;for(r=(r.version+"").split("."),e=(e.version+"").split("."),s=Math.max(r.length,e.length),t=0;t<s;t++)if(r[t]===void 0&&(r[t]="0"),e[t]===void 0&&(e[t]="0"),n=parseInt(r[t],10)-parseInt(e[t],10),n!==0)return n<0?-1:1;return 0}function Kn(r){let e=[{version:"0.9.0.0",mcVersion:"1.16.5",branch:"stable",changelog:`
                    - Added corn and tomato crops work *and* generate in the world. <br>
					- Added tube worms. <br>
					- Added Advancements. <br>
					- Ant and termite nests now spawn and function! Added crystal termite nest. <br>
					- Illusioners can now spawn in village raids! <br>
					- Giants now have some AI! <br>
					- You can trade for some Chaos Awakens items from villagers! Try a farmer, butcher, fletcher or a wandering trader, you may get lucky. <br>
					- Added spawn eggs for some vanilla mobs. The illusioner, the giant, the wither and the ender dragon. <br>
					- Added 7 new variants of Ent(for every vanilla wood type), for your Ent-y needs! <br>
					- Added 7 new variants of Ent Tree dungeons and updated the trap! Gotta see 'em all! <br>
					- Added Wasps and their hives. Also added a "nest block" that is a decorative bees nest. <br>
					- Added the Stinkbug and the Dead Stinkbug item. <br>
					- Ore generation rebalances! <br>
					- Added nether ruby ore. Now you can find rubies in Nether lava pockets. <br>
					- Royal guardian boots now give slow falling only when shifting. <br>
					- Added apple, cherry and peach trees with delicious fruits! <br>
					- Added dupe tree wood, currently has no function! <br>
					- Added ender pearl and eye of ender blocks! <br>
					- Added big bertha and the blade, the guard and the handle! (currently unobtainable) <br>
					- Added battleaxe and queen scale battleaxe! (currently unobtainable) <br>
					- Added ultimate fishing rod! (doesn't work properly yet) <br>
					- Added moth scale, royal guardian and queen scale armors! (currently unobtainable) <br>
					- Added miners dream! The mines are mineier! Added moldy wood planks and mining lamps. <br>
					- Added fossilised wtf, scorpion, wasp and piraporu. Only the wasp is usable. <br>
					- Added queen scale, ender dragon scale, mantis claw, moth scales, nightmare scale, vortex eye and triffid goo! (Only the ender dragon scale is obtainable)<br>
					- Added some coins. <br>
					- Added random teleport block! <br>
					- Added custom tooltip descriptions. <br>
					- Changes to village mania. Fruit trees and crops spawn here and more mob spawning! <br>
					- Changes to mining dimension. Stalagmite valley biome! <br>
					- Added extra config options. <br>
					- You can now breed enchanted golden apple cows if you enable a config option. <br>
					- You can make zombie, skeletons, creepers and the ender dragon drop their mob heads or disable it with a config option. <br>
					- You can make the ender dragon place a dragon egg after each death instead of only the first death. <br>
					- Bug fixes! <br>
					- <i>Lore intensifies!</i> You can disable tooltips if you want to, they exist now. <br>
					- Some nice updated textures! <br>
					- And a lot more!`},{version:"0.9.0.1",mcVersion:"1.16.5",branch:"stable",changelog:`
                    - Fixed ultimate gear being uncraftable. <br>
					- Netherite ingots no longer can be used to craft ultimate gear, only platinum can. <br>
					- Fixed hercules beetle and stink bug animations. <br>
					- Read 0.9.0.0 changelog.`},{version:"0.9.0.2",mcVersion:"1.16.5",branch:"stable",changelog:`
                    - Peacock and queen scale boots now cause feather falling only when you press shift. Be advised the slow fall lasts for 3 seconds! <br>
					- Village mania is now fixed! Go explore some villages and kill some robos. <br>
					- Dirt no longer spawns in the stalagmite valley biome in the mining paradise. <br>
					- Ent trees no longer spawn in village mania, crystalworld or mining paradise. <br>
					- Caves do not spawn in the village mania. <br>
					- Fixed not being able to start servers with the mod installed. <br>
					- Read 0.9.0.0 and 0.9.0.1 changelogs.`},{version:"0.9.0.3",mcVersion:"1.16.5",branch:"stable",changelog:`
                    - Fixed crash when trying to use Royal Guardian Armor on an Anvil. <br>
					- Fixed crash when attempting to use the Ent Spawn Egg. <br>
					- Stink bug now gives nausea when attacked. <br>
					<b>PATCH:</b> <br>
					- Fixed crash on startup. <br>
					- Added some tags. Fixes not being able to use custom logs and planks for vanilla recipes that use them like sticks. <br>
					- Apple Cows can now sometimes spawn with a new fancy texture! Happy Halloween!`},{version:"0.9.0.4 (April Fools Update)",mcVersion:"1.16.5",branch:"stable",changelog:`
                    <b>Items</b> <br>
					- Spawn Eggs for the Ents have been separated. Each Ent has its own spawn egg now. <br>
					- Added the Poppy Sword. Also gives the poison effect. <br>
					- Poison Sword now gives Confusion. I mean why did it give every effect except the one the mob it came from gives. lol <br>
					- All foods that give good effects now give bad effects instead. (Except the item below) <br>
					- Hot Flaming Cheetos have been added to Chaos Awakens. <br> <br>
					<b>Blocks</b> <br>
					- Ant Infested Ores now show up as the ore in The One Probe UI instead of the Infested Ores. <br>
					- Ant Nest Blocks now only spawn ants if a player is nearby and if there aren't many ants nearby. Ant nests don't spawn ants if there is rain on the block above it. Ant Nests spawn more common in Red Ant and Termite Dimensions. <br>
					- Cherry Cobblestone was added to the mod. IF you light it on fire you get Cherry Fire. <br>
					- Standing in Cherry Fire or on a Cherry Campfire you get Regeneration and Health Boost. <br>
					- Cherry Lanterns and Cherry Torches are in the mod. Based on the Cherry Fire. <br>
					- Separate Fossilised Ent Fossils. There is now a fossil for all 8 Ents. <br> <br>
					<b>Structures</b> <br>
					- A structure called the ultimate house has been added to Chaos Awakens. The structure has a basement with some ultimate ores. You could call this an Ultimate Basement. <br> <br>
					<b>Entities</b> <br>
					- A feature from the last update that was forgotten in the changelog was that Golden Apple Cows and the Enchanted Golden Apple Cows give off sparkle particle effects. <br>
					- Apple Cows have new animations now. The Enchanted Golden Apple Cow has a better glint now. <br>
					- Ants seem to be a little bigger now and drop more exp. <br>
					- Ants seem to teleport you to the wrong dimension. Oops! who messed up the teleporter. <br>
					- Ents are 80% cuter. Ents have shrunk to a very small size. <br>
					- Some villager trades that are in the mod were updated a bit. Wandering Traders, Farmers, Fletchers and Fisherman now give more items. <br> <br>
					<b>Advancements</b> <br>
					- Added an Advancement for killing Ants. They seem big enough for an advancement. <br>
					- Added an Advancement for obtaining the Poppy Sword. Why was the Rose Sword even in Orespawn... <br>
					- Fixed All Armor Advancement requiring Moth Scale Armour which is unobtainable. <br>
					- Shiny Cows advancement can now be gotten by breeding Enchanted Golden Apple Cows. <br> <br>
					<b>Dimensions</b> <br>
					- Teleporting to the Crystal World now requires an empty inventory. You can disable this in the config. <br> <br>
					<b>Commands</b> <br>
					- Added the "/chaosawakens" command. Syntax includes "website", "discord", "github", "wiki", "reddit" and "version". <br> <br>
					<b>Chat</b> <br>
					- Typing "April Fools!" in chat will make you drop any items in your inventory. Clumsy!`},{version:"0.10.0.0",mcVersion:"1.16.5",branch:"stable",changelog:`
                    <b>From April Fools Update | Anything mentioned in the April Fools 0.9.0.4 Changelog but not listed here is not in this version.</b> <br>
					- Spawn Eggs for the Ents have been separated. Each Ent has its own spawn egg now. <br>
					- Poison Sword now gives Confusion. I mean why did it give every effect except the one the mob it came from gives. lol <br>
					- Ant Infested Ores now show up as the ore in The One Probe UI instead of the Infested Ores. <br>
					- Ant Nest Blocks now only spawn ants if a player is nearby and if there aren't many ants nearby. <br>
					- Ant Nests do not spawn ants if there is rain on the block above it. <br>
					- Ant Nests spawn more common in Red Ant and Termite Dimensions. <br>
					- Separate Fossilised Ent Fossils. There is now a fossil for all 8 Ents. <br>
					- A feature from the last update that was forgotten in the changelog was that Golden Apple Cows and the Enchanted Golden Apple Cows give off sparkle particle effects. <br>
					- Apple Cows have new animations now. The Enchanted Golden Apple Cow has a better glint now. <br>
					- Some villager trades that are in the mod were updated a bit. Wandering Traders, Farmers, Fletchers and Fisherman now give more items. <br>
					- Fixed All Armor Advancement requiring Moth Scale Armour which is unobtainable. <br>
					- Shiny Cows advancement can now be gotten by breeding Enchanted Golden Apple Cows. <br>
					- Teleporting to the Crystal World now requires an empty inventory. You can disable this in the config. Teleporting out of the Crystal Dimension does not require an empty inventory. <br>
					- Added the "/chaosawakens" command. Syntax includes "website", "discord", "github", "wiki", "reddit" and "version". <br> <br>

					<b>IMPORTANT:</b> <br>
					- AttributeFix is now required.
					- Geckolib 3.0.77 is the required version of Geckolib.

					<b>Blocks:</b> <br>
					- Apple Log and Block of Platinum textures were changed. <br>
					- Added Skywood and Ginkgo Wood. <br>
					- Added Buttons, Fences, Fence Gates, Pressure Plates, Signs, Slabs, Stairs and Trapdoors for all woods from this mod. <br>
					- Peach Leaves now have their colour. Adding colour to the grey things in life. <br>
					- Added Salt Block. If ants walk on this block they will die. <br>
					- Added Ruby Ore in Blackstone. This has caused a rename for Nether Ruby Ore to Netherrack Ruby Ore. <br>
					- Gate Blocks no longer make loud anvil sounds when being dissipated. <br>
					- Leaves drop their fruit, saplings and sticks now. <br>
					- Uranium Ore no longer explodes. <br>
					- Crystal Furnace now requires Crystal Energy to be the fuel source it uses. <br>
					- Added Gate Blocks for all Vanilla Woods, Chaos Awakens Woods and Mushrooms. <br>
					- Gate Blocks have a new cool top texture! <br>
					- Updated Crystalworld Blocks, so they do not X-Ray in the Overworld. They also connect with each other. <br>
					- Added the Cyan Rose, Red Rose and Paeonia, the nostalgia is strong with this one. <br>
					- Added Potted Plants for all Chaos Awakens Flowers and Saplings. <br>
					- Added Radish and Lettuce Plants. <br>
					- Mining Level to break some Ores and Blocks have been updated. <br>
					- Gate Blocks and the Nest Blocks in Wasp Nests can now be obtained. <br>
					- Added Dense Grass Block, Dense Dirt and Dense Red Ant Nest. The Grass Blocks and Ant Nests for the Mining Paradise. <br>
					- Added Dense Grass, Tall Dense Grass, Thorny Sun, Blue Bulb, Purple Bulb, Pink Bulb. All are Plants for the Mining Paradise. <br>
					- Added Crystal Grass, Tall Crystal Grass Crystal Growths and Crystal Flowers. <br>
					- Added Leaf Carpets to all Vanilla and Chaos Awakens Leaf Blocks. <br>
					- Added Robo Blocks, Lamps and Pillars. (Slabs, Stairs and Walls!) [Unobtainable in Survival] <br>
					- Added Marble and Limestone and their Polished, Brick (Cracked and Mossy), Pillar and Chiseled variants. (Slabs, Stairs and Walls!) <br>
					- Added Bricks and Cracked Bricks for all Terracotta Colours. (Slabs, Stairs and Walls!) <br>
					- Lower DZ Ore Spawning rates in the overworld in case the overworld DZ ores are enabled. <br>
					- Updated the loot tables of copper, platinum, silver and tin. They no longer just drop their ores. <br> <br>

					<b>Items:</b> <br>
					- Amethyst, Titanium Ingot and Uranium Ingot textures were changed. <br>
					- Updated the Ultimate Pickaxe, Ultimate Axe, Ultimate Shovel and Ultimate Bow Textures. <br>
					- Ultimate Armour Model texture while being worn has been immensely updated. <br>
					- Queen Scale Armour now has enchantments by default just like Royal Guardian Armour. <br>
					- Added the Attitude Adjuster. Go EXPLODE some Mobs. <br>
					- Added the Slayer Chainsaw. Bye, Bye Wood. <br>
					- Battle Axe, Queen Scale Battleaxe have a new model when held. <br>
					- Added the Royal Guardian Sword. <br>
					- Added Mobzilla Scale Armour <br>
					- Added the Aluminium Nugget. <br>
					- Added Reach to the Attitude Adjuster, Battle Axe, Big Bertha, Prismatic Reaper, Queen Scale Battle Axe, Royal Guardian Sword and Slayer Chainsaw <br>
					- Removed Tree Seeds. <br>
					- Added Water Dragon Scale. <br>
					- Ultimate Gear Recipes now require Uranium and Titanium from Chaos Awakens and not just the forge:ingots/uranium and forge:ingots/titanium tags. Some other mods have these materials being much easier to get. It was kind of broken lol. <br>
					- Fixed Glint appearing on pre-enchanted tools after using a grindstone on them. <br>
					- Removed all Golden Foods except for the Plant ones. Added Golden Beetroot and Golden Baked Potato. <br>
					- Removed Silver, Gold and Platinum Coins. <br>
					- Added Venison and Cooked Venison. <br>
					- Added Crystal Carrots, Crystal Beetroot and Crystal Potatoes. <br>
					- Ultimate Apple is actually Ultimate now. Texture and Recipe updated. Also Updated its effects. <br>
					- Emerald Tools now all come pre-enchanted with Silk Touch just like the pickaxe. <br>
					- Ultimate Stuff comes enchanted with Unbreaking 3 instead of Unbreaking 2. Fixed/Changed other Enchantments as well. <br>
					- Rock Fish can no longer be eaten. They are still found in the Food Creative Tab. <br>
					- Nutrition and Saturation have been updated on a bunch of foods. <br>
					- Mining Level of some tools have been upped. <br>
					- Ultimate Shovel and Ultimate Axe right click abilities are now also 3x3 just like the Ultimate Hoe. <br>
					- Added the Critter Cage. It is not throwable, you just right-click the entity. There is an entity tag to blacklist entities from being picked up. The entity tag is "chaosawakens:critter_cage_blacklisted". Shows enchanted if you pick up an enchanted mob. <br>
					- Miners Dream can now break more blocks. <br>
					- Added Beetroot on a Stick, Crystal Beetroot on a Stick and Golden Beetroot on a Stick. <br>
					- Big Hammer not launches entities up based on their knockback resistance. Entities with a high knockback resistance will not go up as far as entities with low knockback resistance. <br> <br>

					<b>Entities:</b> <br>
					- Added the Bird. Has multiple texture variants. <br>
					- Added Carrot Pig, Golden Carrot Pig, Enchanted Golden Carrot Pig and Crystal Carrot Pig. You can put a saddle on them and ride them. <br>
					- Added a Crystal Gator. Has multiple texture variants. <br>
					- Added the Dimetrodon. Spawns in the Stalagmite Valley. Has multiple texture variants. <br>
					- Added the Green Fish, Rock Fish, Spark Fish, Wood Fish and Lava Eel. <br>
					- Added the Frog. Spawns in Swamps. If a frog is named "Froakie" it will become Blue. If a frog is spawned in the nether it will always be a hostile black frog. Has multiple texture variants. <br>
					- Added the Gazelle. Has multiple texture variants. <br>
					- Added the Robo Pounder. <br>
					- Added the Whale. <br>
					- Added drops for many of the entities above. You can view their drops using Just Enough Resources. <br>
					- Entities like the Ents, the Hercules Beetle and the Wasp now attack entities back if the entity attacks them first. <br>
					- Dark Oak Ent now drops a Cornflower. <br>
					- Jungle Ent can now drop Cocoa Beans. <br>
					- Fixed Spruce Ent dropping Oak Wood, it also drops Mossy Cobblestone now <br>
					- Removed vines from Oak Ent Loot Table. <br>
					- Updated Ent Models and Textures. Fixing various texture stitching issues as well. <br>
					- Enderman no longer spawn in the Crystal Dimension. <br>
					- Robo Warrior sometimes shoots Explosives now. <br>
					- Emerald Gator had a complete model and texture revamp. Also, Baby Emerald Gators can now happen by breeding two adults with any vanilla raw fish. <br>
					- Robo Entities now have a Layer that glows in the dark. <br>
					- Wandering Trader can now sell Triffid Goo making Battle Axe and Attitude Adjuster craft-able. <br>
					- Ants and Termites now die instantly in water. <br>
					- Ants and Termites now die instantly if they step on salt blocks. <br>
					- Ants and Termites no longer drop xp. <br>
					- Updated the message when clicking the Unstable and Brown Ants. It should now be more obvious that these dimensions have not been added yet. <br>
					- Enchanted Golden Apple Cow and Enchanted Golden Carrot Pig now breed non-enchanted versions if the enchanted animal breeding config is disabled. <br>
					- Add Wasp Ambient Sound. Protect your ears! <br>
					- Ranged Robo Entities will try to keep distance from the Player. <br>
					- All Apple Cow Variants will become their Carrot Pig Variant when struck by lightning. <br>
					- Robo Entities Only spawn if the block they spawn on can see the sky. (So they do not spawn inside the Mansion) <br>
					- Rabbits spawn the correct variants in Village Desert (Sandy Coloured One) and Village Snowy (White and White with Black Spot Ones). <br>
					- A Rabbit named "Oreo" will have a custom texture. Just like the already existing "Toast" Easter egg as well as the "Froakie" Easter egg on the new frog mob. <br>
					- Illusioner can now also drop a Totem of Undying. <br> <br>

					<b>Fossils:</b> <br>
					- Added a new block called the Copper Defossilizer. Can only defossilize stone and gravel fossilised mobs. <br>
					- Added a new block called the Iron Defossilizer. Can defossilize any fossilised, frozen or crystallized mobs. Is 4 times slower than the Copper Defossilizer. <br>
					- When right-clicking either Defossilizer the Interact with Defossilizer Statistic on the Statistics menu will be increased. <br>
					- Added a separate Creative Tab for Fossils. Upon launch of the game the icon for the Creative Tab has the chance to be either the Copper Defossilizer or the Iron Defossilizer. <br>
					- Added a new item called Aluminium Power Chip. <br>
					- Added Fossils for Many, Many Creatures. Normally going by the name "Fossilized (Mob Name)", If they are in ice it is "Frozen (Mob Name)" and if they are in Kyanite they are "Crystalised (Mob Name)". <br>
					- Fossils are no longer made into spawn eggs through the Crafting Table. <br>
					- To get Fossils you must now get a Defossilizer and when opening it you will see 3 input slots and the output slot. <br>
					- The top input slot is for the fossil. <br>
					- The bottom left input slot requires a water bucket (lava bucket for nether fossils). <br>
					- The last input slot requires the Aluminium Power Chip. <br> <br>

					<b>Advancements:</b> <br>
					- Robo Slayer Advancement now requires killing the Robo Pounder. <br>
					- Go Fish Advancement now requires killing the Green Fish. <br>
					- Fixed All Armors Advancement being unobtainable. Moth Scale Armour is no longer required. <br>
					- Added Advancement for obtaining a Defossilizer. <br> <br>

					<b>Misc:</b> <br>
					- The /chaosawakens command can now be used with /ca instead. <br>
					- A new syntax option for the /chaosawakens command is locate. This works like the vanilla locate command but only shows the structures from this mod and without the mod id. You can type /ca locate wasp_dungeon instead of /locate chaosawakens:wasp_dungeon. <br>
					- Changed enableEnchantedGoldenAppleCowBreeding config option to enableEnchantedAnimalBreeding. <br>
					- Support for Flammability and Compostability have been added for any items/blocks that need it. <br>
					- Spawn Eggs can not be used on a Spawner in Survival. There is a Config option to change this. <br>
					- Made more Blocks/Items into Fuel Sources. <br>
					- Added Separate Stats for interacting with the Crystal Crafting Table and Crystal Furnace. They no longer use interact with Crafting Table and Furnace Statistics in the Statistics menu. <br>
					- Attitude Adjuster explosion is customizable in the config just like the Freakin' Ray Gun and Thunder Staff explosions. <br>
					- Structures can now be disabled with the config. <br> <br>

					<b>World Generation:</b> <br>
					- Added Bamboo and Cocoa Beans to Jungle Ent Tree Chest Loot. <br>
					- Stalagmite Valley now spawns giant patches of Andesite and Gravel. <br>
					- Fixed Stronghold appearing in dimensions. <br>
					- Villagers are way more common in the Village Mania now. Mansions and Igloos also spawn here sometimes. <br>
					- Teleporting under bedrock when right-clicking ants should now be fixed. <br>
					- Corn and Tomato Plants are a bit less common. <br>
					- Strawberry bushes can spawn in forests. <br>
					- You can enter the Crystal World with items in your inventory if you are in creative. <br>
					- Fixed Warped Ent Dungeon containing Water Buckets instead of Lava Buckets in the Trap. <br>
					- Added Fog and Particles to Crystal World. <br>
					- The Crystal World was revamped with new plants.
					- Renamed Mining Biome to Dense Mountain and was completely revamped with new grass and dirt blocks and new plants. You look at this biome at night. It looks beautiful at night. <br>
					- Mineshafts can now spawn in the Mining Paradise. <br>
					- Fixed some vegetation in the Village Mania dimension. Acacia Trees actually generate in the Savanna. <br> <br>

					<b>Integration: (All mod names mentioned here have a link to their curseforge page.)</b> <br>
					- Added Defossilizer compatibility with <a href="https://www.curseforge.com/minecraft/mc-mods/jei">JEI</a> so you can see the recipes. The Defossilizers also have Information pages when viewing the recipes or uses of them. <br>
					- Added <a href="https://www.curseforge.com/minecraft/mc-mods/the-one-probe">The One Probe</a> compatibility so if you see a mob that has multiple textures The One Probe will say which variant it is and the id associated with the texture. <br>
					- Ant Infested Ores now show up as the ore they look like while using <a href="https://www.curseforge.com/minecraft/mc-mods/jade">Jade</a>. Just like the support that was added for The One Probe to do this in the April Fools Update. <br>
					- Added <a href="https://www.curseforge.com/minecraft/mc-mods/just-enough-resources-jer">Just Enough Resources</a> support for Ore World Generation settings. Ores that are disabled in the config do not show their World Generation Settings. <br>
					- Items that give effects are now shown in <a href="https://www.curseforge.com/minecraft/mc-mods/just-enough-effect-descriptions-jeed">Just Enough Effect Descriptions Effects</a> that show up in Just Enough Items if the mod is installed.`},{version:"0.10.0.1",mcVersion:"1.16.5",branch:"stable",changelog:`
                    - Fixed a critical bug where you would crash if you hit any non-living entity with a weapon that has reach. <br>
					- Add recipe for the Slayer Chainsaw. <br>
					- For all the features of 0.10.0.0 see the changelog below this one.`},{version:"0.10.0.2",mcVersion:"1.16.5",branch:"stable",changelog:`
            - Fixed Critter Cage Default Filled Texture. <br>
			- Reverted the Uranium Texture to the old better one. <br>
			- Fixed a crash on servers with the extended reach tools.`},{version:"0.11.0.0",mcVersion:"1.16.5",branch:"stable",changelog:`
				IMPORTANT:<br>
				- Geckolib version 3.0.90 or above is now required.<br>
				- AttributeFix is no longer required.<br>
<br>
				GENERAL:<br>
				- Expanded the config. Many more options have been added to the common and client config, and there is now also a server config (Which is still a W.I.P).<br>
				- Added 2 new effects - Paralysis and Burns (W.I.P). <br>
				- Added a new enchantment - Ignition (W.I.P).<br>
				- Added many new advancements, some with XP rewards being bestowed upon completion.<br>
				- Miner's dream now breaks 45 blocks when used, and has a 20 tick (1 second) use cooldown.<br>
				- Added durability tooltips (enabled in the client config by default).<br>
				- Added more compatibility between Vanilla Minecraft and CA (for example, crops and seeds added by CA are now compostable, dispensers properly shoot arrows added by CA, etc.).<br>
				- Added a new "Screen Shake" effect, which triggers during certain events.<br>
				- Auto-enchantable items no longer fail to enchant when crafted using shift-click.<br>
				- Added 16 new paintings.
<br>
				ITEMS:<br>
				- Fixed right clicking with an extended reach item/weapon killing villagers. You can no longer interact with villagers if you hold an extended reach weapon.<br>
				- Added some more Critter Cage textures, as well as better support for caging interactable entities (such as villagers, or tameable mobs).<br>
				- Added 5 new armor set bonuses - "Experienced" (Experience Armor), "Merchant's Aura" (Emerald Armor), "Enchanter's Delight" (Lapis Armor) (W.I.P), "Dragon Wings" (Ender Dragon Scale Armor) (W.I.P), and "Eel-Like" (Lava Eel Armor) (W.I.P). Each of these can be tweaked down to every nook and cranny in the common config. You can see their effects in detail using the in-game tooltips. The Ender Dragon Scale Armor can be worn to see the full effects of its armor set bonus.<br>
				- Rebalanced essentially all tool sets, armor sets, and weapons.<br>
				- Added Nightmare Scales, Basilisk Scales, Moth Scales, Mobzille Scales, Emperor Scorpion Scales, Sea Viper Tongues, Vortex Eyes, and Worm Teeth.<br>
				- Added new boat variants for every wood type in CA.<br>
				- Added Basilisk Sword, and a recipe for it.<br>
				- Reworked several recipes - specifically for the Battle Axe, Slayer Chainsaw, Big Bertha, and Attitude Adjuster.<br>
				- Added recipe for the Nightmare Sword, .<br>
				- Added Blue Fish, Sun Fish, Gray Fish, Pink Fish, and Fire Fish.<br>
				- Added Popcorn.<br>
				- Updated Whale Spawn Egg texture.<br>
				- Updated Giant Spawn Egg texture.<br>
				- Updated Poison Sword texture.<br>
				- Updated Slayer Chainsaw. Upon right clicking, it will turn on, making it effective for destroying trees and large chunks of wood but consuming more durability.<br>
				- The Ray Gun and Thunder Staff can now be enchanted.<br>
				- Added several tags for all fossils, alongside an all-inclusive "fossils" tag.<br>
<br>
				BLOCKS:<br>
				- Added many new blocks and vegetation to accomodate for every color variant of the crystal blocks.<br>
				- Crystal blocks now have 3 new colors - Pink, Orange, and Blue.<br>
				- Added new door variants for every wood type in CA.<br>
				- Added Nightmare Scale Block, Basilisk Scale Block, Mobzilla Scale Block, Moth Scale Block, Water Dragon Scale Block, and Emperor Scale Block.<br>
				- Fixed leaf carpets not placing several on 1 block due to hitbox inaccuracies.<br>
				- Added signs for every wood type in CA.<br>
				- Added new crystal vegetation.<br>
				- Re-organized the CA Fossils tab.<br>
				- Added new fossils - The Fossilised Beaver, Crystalized Carrot Pig, and Fossilised Lettuce Chicken.<br>
				- Tweaked the light values of all torches added by CA.<br>
				- Added Rhinestone, alongside a new set of blocks made of Rhinestone. Rhinestone generates in Mining Paradise by default, but that can be edited in the common config.<br>
				- Sandstone fossils can now be defossilized in a Copper Defossilizer.<br>
<br>
				ENTITIES:<br>
				Oh boy, now THIS is the main part of the update..<br>
				(Almost every mob here is subject to being updated, improved, or straight up overhauled in future patches/major updates)<br>
				- Added a new villager type - The Archaeologist. His trades revolve around fossils, and defossilizer-related items.<br>
				- All necessary ground AI has been reworked and majorly improved (Swimming AI has only been slightly tweaked, Flying AI remains the same until a future update).<br>
				- The Robo Pounder has been overhauled:<br>
				  * He can now break any block under harvest level 3 (except Robo Blocks). <br>
				  * He has 3 attacks, 2 of which including varying animations.<br>
				  * His first new attack is the "Robo Punch". It's a basic punch attack which deals a lot of damage and knockback. It is, however, a bit slow to charge up.<br>
				  * His second new attack is the "Side Sweep". It's a quick AOE attack which he uses frequently if surrounded by several enemies.<br>
				  * His final attack, and perhaps his most powerful, is the "Rage Run". Once he activates the rage run, his AI will become similar to that of an enraged bull. He will be triple armored for the first 2 seconds of his rage run, breaking ANY block, then revert to his old properties, but having double armor. As he rage runs, he will deflect all projectiles launched at him and armor himself against explosions, meaning the only means of damaging him while he's enraged is through melee combat. The lower his health gets, the faster and shorter (and more frequent) his rage runs will be. There are 4 stages to this: Stage 1 (above 150 HP/full health, 300HP), Stage 2 (under 150 HP), Stage 3 (Under 75 HP), and Stage 4 (Under 50 HP). While he's most powerful when enraged, he's also vulnerable. Placing enough blocks of harvest level 3 or higher (or Robo Blocks) in front of him and causing him to collide, or luring him underwater/under lava, will cause him to enter a state called "Rage Crash". He will be disabled for any time between 3 and 10 seconds. He will be vulnerable to all projectiles and melee attacks, but still remain resistant to explosions. Once he has rebooted, if he is critically low on health, chances are that he'll start rage running again immediately.<br>
				  * Every time he is damaged, he will emit pink spark particles to indicate damage.<br>
				  * Under 25 HP, the Robo Pounder will emit smoke to indicate that he's close to death.<br>
				  * He will only spawn at night in Village Mania.<br>
				- The Hercules Beetle has been overhauled:<br>
				  * It now has 3 states of being.<br>
				  * It now also has 2 attacks, and a defense mechanism.<br>
				  * Its first state is "Docile". It will usually spawn docile, sleeping undisturbed. While docile, if it has lost any health, it will regenerate (1HP/sec). If it is damaged by any means, or triggered by a nearby target, it will enter its second state of being.
				  * If the Hercules Beetle is undisturbed for a while when it's awake, and is on land, it will quickly go back to being docile.<br>
				  * Its second state is "Defensive". It will only become defensive if it is below half health (125 HP), or if it is awakened from its docile state. Currently, its defensive state involves it flapping its wings at an immense force, repelling almost all projectiles, any items, and any entities that happen to be near it. If it is in a battle and is getting lower on HP, it will enter this state more frequently in order to attempt to increase its survivability as much as possible. While defensive, it will prove difficult, if not almost impossible, to get to it, but its armor is halved during this state, as it exposes itself to flap its wings. So any projectiles that do reach it will deal increased damage.<br>
				  * Its third state is "Offensive". This will be its state for the majority of the battle, as it uses its 2 attacks to force the opposition down to defeat.<br>
				  * Its first attack is the "Hard Swing". This attack causes any enemies without an immense amount of knockback resistance to fly in the air, as well as dealing a lot of damage.<br>
				  * Its second (and as of now, final) attack is the "Munch" attack. The Hercules Beetle will attempt to grab its target with its mouth. If it is successful, it will munch on the target for a total of 100 ticks (5 seconds) before throwing them up in the air. If a grab is unsuccessful but the target is still within attack range, it will deal half the damage of the "Hard Swing" attack.<br>
				  * It will only spawn during night time on mountains, including Dense Mountains inside Mining Paradise.<br>
				- The Ent has been overhauled:<br>
				  * He now has 4 new variants - Apple, Cherry, Peach, and Skywood, none of which have a dungeon or fossil as of now.<br>
				  * He now has 2 attacks.<br>
				  * His first attack is the standard "Wooden Punch". It is a standard punch attack which deals decent damage and some knockback.<br>
				  * His second attack is the "Ent Smash". This attack is an AOE attack which he will use if he is surrounded by enemies/targets, or too far away from his target(s). It deals decent damage, and knocks anybody without decent knockback resistance up into the air.<br>
				  * He will only spawn in his dungeons, with the respective variant.<br>
				- Fish AI has been slightly tweaked.<br>
				- The Whale has been remodeled and retextured (and is still W.I.P). It can also become beached. When on land, the Whale will only take accumilating damage from sunburn, not loss of breath. Upon a whale's death, there is a chance that it will explode. This chance is higher if it has died beached or due to sunburn.<br>
				- The Wasp has recieved a remodel and retexture.<br>
				- The Stink Bug now has 16 variants, and emits these disgusting, new fart particles.<br>
				- Added Baby Stink Bug.<br>
				- The Frog has been renamed to the Tree Frog.<br>
				- Added a new variant for the Apple Cow - The Ultimate Apple Cow. It is only obtainable by breeding 2 Enchanted Golden Apple Cows, very rarely. It cannot be bred, and there is no config option for the Ultimate Apple Cow to be bred.<br>
				- Beavers will now occasionally go up to wooden logs and chomp on them.<br>
				- Lava Eels can now actually move around in lava lakes.<br>
				- Fish entities now rotate on land.<br>
				- Dimetrodon AI has been slightly tweaked.<br>
				- Added a new animal - The Lettuce Chicken.<br>
				- All other entities will be updated and overhauled in future patches/major updates.<br>
<br>
				WORLD GENERATION:<br>
				- Overhauled the Acacia, Birch, Dark Oak, Jungle Ent Trees.<br>
				- Added a new type of Wasp Nest - the Giant "Mining" Wasp Nest. This Wasp Nest can be found within the Stalagmite Valley in Mining Paradise.<br>
				- Reworked Mining Paradise - the Stalagmite Valley now features better cave generation and giant stalagmites, while the Dense Mountains have significantly increased in size.<br>
				- Tweaked spawn rates in Mining Paradise and Village Mania.<br>
				- Added new variants for the crystal trees inside Crystal World, each featuring a set of new blocks corresponding to each new color/variant.<br>
				- Added a config option for enabling/disabling ore generation on stalagmites, as it is still quite unoptimized and thus may require a more powerful computer due to the server thread lagging/freezing.<br>
				- Reworked tree generation for Apple, Cherry, and Peach trees. They now look a little nicer, and are a bit bigger.<br>
				- Tweaked some ore spawning rates.`},{version:"0.11.0.1",mcVersion:"1.16.5",branch:"stable",changelog:`
				PATCH NOTES:<br>
				- Bumped required Geckolib version up to 3.0.92.<br>
                                - Fixed a crash with Ender Dragon Scale Armor being worn on other mobs and armor stands.<br>
                                - Fixed Ender Dragon Scale Armor freezing server thread.<br>
                                - Fixed some slight AI inconsistencies.<br>
                                - Fixed a mobs with extended reach weapons/items crashing the game.<br>
                                - Fixed a visual bug where the Extreme Torch wouldn't render.<br>
                                - Fixed a crash with the Hercules Beetle.<br>
                                - Added Throwback variant for the Hercules Beetle. The Modern Hercules Beetle will now only spawn in the Dense Mountains, in Mining Paradise, whereas the Throwback Hercules Beetle will spawn on normal Overworld Mountains.<br>
                                - Updated Poison Sword texture.<br>
                                - Re-balanced some ore-generation.<br>
                                - Reduced Dimetrodon spawn rates.<br>
                                - Added new Lettuce Chicken throwable egg.`},{version:"0.11.1.0 (April Fools Update)",mcVersion:"1.16.5",branch:"stable",changelog:`
                    <b>Title Menu</b> <br>
                    - It says "Chaos Awakens" and "April Fools 2023" at the top of the Title Screen. <br>
                    - Splash Text always says "Happy April Fools!" <br>
                    - The April Fools Warning Screen looks WAY better this year! <br>
                    - You now get the April Fools Warning Screen when clicking Single Player instead of before you reach the Title Screen. <br>
                    <b>Items</b> <br>
                    - Added the Cyan Rose Sword, Red Rose Sword and Crystal Rose Sword. These swords give the poison potion effect. <br>
                    - Hot Flaming Cheetos are back! They will always drop from a new mob mentioned further down. <br>
                    - Many foods had their Nutrition and Saturation values tweaked. Cooked Bacon no longer gives any effects. <br>
                    - All foods that give Special Effects now give a bad effect instead. Included foods are: Crystal Apple, Crystal Beetroot, Crystal Carrot, Crystal Potato, Butter Candy, Candycane, Spark Fish, Fire Fish, Lava Eel, Sun Fish, Golden Potato, Golden Baked Potato, Enchanted Golden Carrot and Ultimate Apple. <br>
                    - Lava Eel Armour Full Set Bonus has mysteriously stopped working. <br>
                    <b>Blocks</b> <br>
					- Cherry Cobblestone was added to the mod. If you light it on fire you get Cherry Fire. <br>
					- Standing in Cherry Fire or on a Cherry Campfire you get Regeneration and Health Boost. It also no longer crashes your game if you throw items in the Cherry Fire this year! <br>
					- Cherry Lanterns and Cherry Torches are in the mod. Matching the Cherry Fire. <br>
                    <b>Structures</b> <br>
                    - Added the Ultimate House. This structure has a secret basement with many good ores under some of the carpet. <br>
                    <b>Entities</b> <br>
                    - Added the Man Meme Coin. This mob always drops the Flaming Hot Cheetos, but will also drop one of... a Diamond, an Uranium Nugget, a Titanium Nugget, an Emerald, an Emerald Sword, an Emerald Pickaxe, an Emerald Axe, an Emerald Shovel, an Emerald Hoe, a Man Meme Coin Spawn Egg or it can drop 3 of any random item in the game that is not in the <b>chaosawakens:undroppable</b> item tag. <br>
                    - The Lettuce Chicken now drops any Spawn Egg (Except Robos) in the game instead of throwable Lettuce Chicken Eggs. Now go put the Lettuce Chickens on hoppers in cages for your Spawn Eggs, Just like the Easter Bunny. <br>
					- Ants seem to be a little bigger now and drop more exp. <br>
					- Ants seem to teleport you to the wrong dimension. Oops! who messed up the teleporter. Brown Ant takes you to the Village Mania, Unstable Ant takes you to the Crystal World and Termite takes you to the Mining Paradise. <br>
					- Ents are 80% cuter. Ents have shrunk to a very small size. <br>
					<b>Advancements</b> <br>
					- Added an Advancement for killing Ants. They seem big enough for an advancement. <br>
					- Added a specific advancement for obtaining each Rose Sword. Seriously though... WHY did the sword even exist in Orespawn... <br>
					<b>World Generation</b> <br>
					- Changed Ore Spawning of multiples ores. <br>
					- Amethyst now spawns in geodes underground. <br>
					- Aluminium now spawns in the Overworld. It spawns between y20 and y80. <br>
					- Ruby Ore spawning in the Nether has had its values tweaked. <br>
					- Aluminium, Copper, Tin and Salt Ore spawning in the Mining Paradise have had their values tweaked. <br>
					- Crystal Energy spawning in the Crystal World has had its values tweaked. <br>
					- Cat's Eye and Pink Tourmaline also spawn in geodes in the Crystal World. <br>
					<b>Chat</b> <br>
					- Typing "April Fools!" in chat will make you drop any items in your inventory. Clumsy! <br> <br>
					<b>DISCLAIMER:</b> Some of these features are from last years April Fools update with or without some changes.`},{version:"0.11.1.1 (April Fools Update)",mcVersion:"1.16.5",branch:"stable",changelog:`
                    <b>Servers</b> <br>
                    - Fixes crash on servers.`},{version:"0.1",mcVersion:"1.16.5",branch:"alpha",changelog:`
                    - Added Emerald Sword, Pickaxe, Shovel, Axe and Hoe. <br>
                    - Added Emerald Helmet, Chestplate, Leggings and Boots. <br>
					- Added Amethyst and Ruby. <br>
					- Added Untextured Tigers Eye, Titanium, Titanium Nugget, Uranium, Uranium Nugget and Aluminium. <br>
					- Added Untextured Ruby Block, Tigers Eye Block, Titanium Block, Uranium Block, Aluminium Block.`},{version:"0.2",mcVersion:"1.16.5",branch:"alpha",changelog:`
                    - Added Amethyst Ore, Ruby Ore. <br>
					- Added Untextured Tigers Eye Ore, Titanium Ore, Uranium Ore and Aluminium Ore. <br>
					- Added Amethyst Sword, Pickaxe, Shovel, Axe and Hoe. <br>
					- Added Amethyst Helmet, Chestplate, Leggings and Boots. <br>
					- Added Ruby Sword, Pickaxe, Shovel, Axe and Hoe. <br>
					- Added Untextured Ruby Helmet, Chestplate, Leggings and Boots. <br>
					- Added Untextured Tigers Eye Sword, Pickaxe, Shovel, Axe and Hoe. <br>
					- Added Untextured Tigers Eye Helmet, Chestplate, Leggings and Boots.`},{version:"0.3",mcVersion:"1.16.5",branch:"alpha",changelog:`
                    - Added Titanium Ore and Uranium Ore Textures. <br>
					- Added Amethyst Block, Ruby Block, Titanium Block and Uranium Block Textures. <br>
					- Added Titanium Ingot and Uranium Ingot Textures. <br>
					- Added Titanium Nugget and Uranium Nugget Textures. <br>
					- Added Ruby Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Updated Amethyst and Ruby Textures. <br>
					- Updated Amethyst Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Updated Amethyst Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Updated Ruby Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Updated Emerald Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Updated Emerald Helmet, Chestplate, Leggings and Boots Textures.`},{version:"0.4",mcVersion:"1.16.5",branch:"alpha",changelog:`
                    - Added Aluminium Ore Textures. <br>
					- Added Tigers Eye Block and Aluminium Block Textures. <br>
					- Added Cooked Corndog, Raw Corndog, Cooked Bacon and Raw Bacon. <br>
					- Added Corn, Tomato, Lettuce, Cheese, Garden Salad and BLT. <br>
					- Added Aluminium Ingot Textures. <br>
					- Added Tigers Eye Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Added Ultimate Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Added Ultimate Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Added Thunder Staff. <br>
					- Added Tigers Eye Texture. <br>
					- Fixed Titanium, Uranium and Aluminium not having Ingot in their names.`},{version:"0.5",mcVersion:"1.16.5",branch:"beta",changelog:`
                    - Added Ent. <br>
					- Added Tigers Eye Ore Texture. <br>
					- Added Tigers Eye Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Updated Tigers Eye Block, Titanium Block, Uranium Block and Aluminium Block Textures. <br>
					- Updated Titanium Ingot, Uranium Ingot and Aluminium Ingot Textures. <br>
					- Updated Titanium Nugget, Uranium Nugget Textures. <br>
					- Updated Tigers Eye Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Updated Tigers Eye Texture.`},{version:"0.6",mcVersion:"1.16.5",branch:"beta",changelog:`
                    - Added Experience Sword. <br>
					- Added Experience Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Added Auto Enchants to Ultimate Set and Emerald Pickaxe.`},{version:"0.7",mcVersion:"1.16.5",branch:"beta",changelog:`
                    - Added Creative Tabs. <br>
					- Added Cooked Peacock Leg, Raw Peacock Leg, Cooked Crab Meat and Raw Crab Meat. <br>
					- Added Strawberry, Peach, Radish, Radish Stew, Cherries Butter and Salt. <br>
					- Added Green Fish, Rock Fish, Wood Fish, Spark Fish and Lava Eel. <br>
					- Added Strawberry Seeds, Cherry Seeds, Apple Tree Seeds, Peach Seeds, Corn Seeds, Lettuce Seeds and Radish Seeds. <br>
					- Added Ultimate Bow. <br>
					- Added Nightmare Sword, Poison Sword, Rat Sword, Fairy Sword and Big Hammer. <br>
					- Added Prismatic Reaper. <br>
					- Added Salt Ore, Red Ant Infested Ore and Termite Infested Ore. <br>
					- Added Fossilised Ent, Fossilised Hercules Beetle, Fossilised Ruby Bug, Fossilised Emerald Gator. <br>
					- Added Gate Block and Ent Dungeon Wood. <br>
					- Added Ent Dungeon. <br>
					- Added Ent, Red Ant, Brown Ant, Rainbow Ant, Unstable Ant, Termite, Hercules Beetle, Ruby Bug, Emerald Gator, Robo Sniper, Beaver, Apple Cow and Golden Apple Cow. <br>
					- Added Iron Golem and Snow Golem Spawn Eggs. <br>
					- Added Ant Nests and Termite Nests. (UNUSED) <br>
					- Updated Cooked Corndog, Raw Corndog, Cooked Bacon and Raw Bacon Textures. <br>
					- Updated Corn, Tomato, Lettuce, Cheese and BLT Textures. <br>
					- Updated Ultimate Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Updated Lava Eel Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Updated Lapis Lazuli Helmet, Chestplate, Leggings and Boots Textures.`},{version:"0.7b",mcVersion:"1.16.5",branch:"beta",changelog:"<u><b>UNKNOWN CHANGES</b></u>"},{version:"0.8",mcVersion:"1.16.5",branch:"beta",changelog:`
                    - Updated Amethyst Ore and Ruby Ore Textures. <br>
					- Added Copper Ore, Tin Ore, Silver Ore, Platinum Ore, Sunstone Ore and Bloodstone Ore. <br>
					- Added Copper Block, Tin Block, Silver Block, Platinum Block, Sunstone Block and Bloodstone Block. <br>
					- Added Pink Tourmaline Block, Cat's Eye Block, Crystal Grass Block, Kyanite Block. <br>
					- Added Pink Tourmaline Cluster, Cat's Eye Cluster and Crystal Energy. <br>
					- Added Budding Pink Tourmaline and Budding Cat's Eye <br>
					- Added Crystal Log, Crystal Wood, Crystal Wood Planks, Red Crystal Leaves, Green Crystal Leaves and Yellow Crystal Leaves. <br>
					- Added Crystal Crafting Table and Crystal Furnace. <br>
					- Added Crystal Apple. <br>
					- Added Golden Foods. <br>
					- Added Candy Cane and Ultimate Apple. <br>
					- Added Copper Lump, Tin Lump, Silver Lump and Platinum Lump. <br>
					- Added Pink Tourmaline Ingot and Cat's Eye Ingot. <br>
					- Added Pink Tourmaline Nugget and Cat's Eye Nugget. <br>
					- Added Dead Irukandji, Peacock Feather and Crystal Wood Shard. <br>
					- Added Irukandji Arrow, Skate String Bow and A Freakin' Ray Gun. <br>
					- Added Crystal Torch and Sunstone Torch. <br>
					- Added Copper Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Added Copper Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Added Tin Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Added Tin Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Added Silver Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Added Silver Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Added Platinum Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Added Platinum Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Added Peacock Feather Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Added Crystal Wood Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Added Kyanite Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Added Pink Tourmaline Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Added Pink Tourmaline Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Added Cat's Eye Sword, Pickaxe, Shovel, Axe and Hoe Textures. <br>
					- Added Cat's Eye Helmet, Chestplate, Leggings and Boots Textures. <br>
					- Added Instant Survival Shelter. <br>
					- Added Extra Small Zoo Cage, Small Zoo Cage, Medium Zoo Cage, Large Zoo Cage and Extra Large Zoo Cage. <br>
					- Added Robo Warrior, Enchanted Golden Apple Cow and Crystal Apple Cow. <br>
					- Ant Nests and Termite Nests now have Biome Dependent coloring. <br>
					- Item and Food Creative Tabs are now separate. <br>
					- Removed Ent Dungeon Wood.`},{version:"0.8b",mcVersion:"1.16.5",branch:"beta",changelog:"<u><b>UNKNOWN CHANGES</b></u>"},{version:"0.8c",mcVersion:"1.16.5",branch:"beta",changelog:"- Added Extreme Torch."},{version:"0.8d",mcVersion:"1.16.5",branch:"beta",changelog:"- Added Random Teleport Block."}];return e.sort(Zn),e.sort((t,n)=>t.branch>n.branch?1:n.branch>t.branch?-1:0).reverse(),[e]}class ra extends Et{constructor(e){super(),St(this,e,Kn,Jn,Tt,{})}}export{ra as default};
