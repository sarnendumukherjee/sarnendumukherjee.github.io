import"../chunks/CWj6FrbW.js";import{o as m,p as z,D as S,aY as H,n as J,E as K,B as Q,aZ as U,Z as ee,a_ as te,G as ae,X as se,z as W,y as j,_ as oe,C as ne,A as re,ax as ie,Y as O,a$ as le,at as $,aA as T,aq as C,as as _,av as D,au as b,$ as I,e as B,an as v,a4 as x,aB as de,b0 as ce,ap as Z,b1 as ue,u as fe}from"../chunks/D6ZRmTeS.js";import{w as me,a as he}from"../chunks/5PuxMdTZ.js";import{l as k,p as g,s as F,a as G,b as R}from"../chunks/Djqo9m9m.js";import{i as ge}from"../chunks/DbahKoEX.js";import{i as _e}from"../chunks/CK54CeLj.js";import{a as L,e as ve,i as pe}from"../chunks/oPyyvvYQ.js";function A(s,e,l,r,n){var a;m&&z();var i=(a=e.$$slots)==null?void 0:a[l],t=!1;i===!0&&(i=e.children,t=!0),i===void 0||i(s,t?()=>r:r)}function ye(s,e,l,r,n,i){let t=m;m&&z();var a,o,d=null;m&&S.nodeType===H&&(d=S,z());var p=m?S:s,c;J(()=>{const u=e()||null;var E=U;u!==a&&(c&&(u===null?ne(c,()=>{c=null,o=null}):u===o?re(c):ie(c)),u&&u!==o&&(c=Q(()=>{if(d=m?d:document.createElementNS(E,u),ee(d,d),r){m&&te(u)&&d.append(document.createComment(""));var f=m?ae(d):d.appendChild(se());m&&(f===null?W(!1):j(f)),r(d,f)}oe.nodes_end=d,p.before(d)})),a=u,a&&(o=a))},K),t&&(W(!0),j(p))}const $e=!0,Oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:$e},Symbol.toStringTag,{value:"Module"})),be=typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches,ke=typeof localStorage<"u"&&localStorage.getItem("theme")||(be?"dark":"light"),w=me(ke);w.subscribe(s=>{typeof localStorage<"u"&&localStorage.setItem("theme",s),typeof document<"u"&&(s==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"))});function M(){w.update(s=>s==="light"?"dark":"light")}/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const we={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ee=le("<svg><!><!></svg>");function Y(s,e){const l=k(e,["children","$$slots","$$events","$$legacy"]),r=k(l,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);O(e,!1);let n=g(e,"name",8,void 0),i=g(e,"color",8,"currentColor"),t=g(e,"size",8,24),a=g(e,"strokeWidth",8,2),o=g(e,"absoluteStrokeWidth",8,!1),d=g(e,"iconNode",24,()=>[]);const p=(...f)=>f.filter((h,y,N)=>!!h&&N.indexOf(h)===y).join(" ");ge();var c=Ee();L(c,(f,h)=>({...we,...r,width:t(),height:t(),stroke:i(),"stroke-width":f,class:h}),[()=>(v(o()),v(a()),v(t()),B(()=>o()?Number(a())*24/Number(t()):a())),()=>(v(n()),v(l),B(()=>p("lucide-icon","lucide",n()?`lucide-${n()}`:"",l.class)))]);var u=$(c);ve(u,1,d,pe,(f,h)=>{var y=de(()=>ce(x(h),2));let N=()=>x(y)[0],q=()=>x(y)[1];var P=T(),V=C(P);ye(V,N,!0,(X,Te)=>{L(X,()=>({...q()}))}),_(f,P)});var E=D(u);A(E,e,"default",{}),b(c),_(s,c),I()}function Ne(s,e){const l=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];Y(s,F({name:"moon"},()=>l,{get iconNode(){return r},children:(n,i)=>{var t=T(),a=C(t);A(a,e,"default",{}),_(n,t)},$$slots:{default:!0}}))}function Se(s,e){const l=k(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];Y(s,F({name:"sun"},()=>l,{get iconNode(){return r},children:(n,i)=>{var t=T(),a=C(t);A(a,e,"default",{}),_(n,t)},$$slots:{default:!0}}))}var xe=Z('<button class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition-colors duration-300" aria-label="Toggle theme"><!></button>');function Me(s){const[e,l]=G(),r=()=>R(w,"$theme",e);var n=xe(),i=$(n);{var t=o=>{Se(o,{class:"h-6 w-6"})},a=o=>{Ne(o,{class:"h-6 w-6"})};_e(i,o=>{r()==="light"?o(t):o(a,!1)})}b(n),ue("click",n,function(...o){M==null||M.apply(this,o)}),_(s,n),l()}var ze=Z('<div class="relative min-h-screen"><div class="absolute top-4 right-4 z-10"><!></div> <!></div>');function De(s,e){O(e,!0);const[l,r]=G(),n=()=>R(w,"$theme",l);fe(()=>{typeof document<"u"&&document.documentElement.classList.toggle("dark",n()==="dark")});var i=ze(),t=$(i),a=$(t);Me(a),b(t);var o=D(t,2);he(o,()=>e.children),b(i),_(s,i),I(),r()}export{De as component,Oe as universal};
