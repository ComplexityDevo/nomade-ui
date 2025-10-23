import{c as S,l as k,a as q}from"../chunks/Bll8GQtB.js";import{i as Ke}from"../chunks/DS0WpG5T.js";import{J as dt,v as te,K as vt,g as H,ac as Ge,N as ut,w as mt,O as Be,P as ke,Q as Ee,Z as re,C as pt,x as ft,T as He,W as gt,U as ht,aJ as Ue,a2 as et,a9 as Ye,R as tt,aK as at,aL as _t,aM as Ne,X as nt,Y as xt,aN as Me,aO as $t,aP as Ie,aQ as st,aR as wt,aS as bt,aT as yt,aU as Tt,aV as At,a8 as Nt,a0 as Mt,aW as ot,aX as Ct,p as E,s as C,m as h,n as g,t as U,o as V,j as M,k as I,F as $,l as F,az as b,aB as Y,aG as Qe,aC as Pt,aH as be,ay as St,aY as kt,aA as Z,i as L,aZ as Et,aE as It,b as Ze,e as ie,a_ as le,a$ as zt,a6 as Ht}from"../chunks/CQePj_-2.js";import{p as W,a as Te,s as ye,f as rt,i as Ae,l as D,g as K,e as We,d as Xe}from"../chunks/N2kIsiQG.js";import{s as xe,H as Wt,a as Je,b as X,i as qt,j as Qt,k as jt,l as Ft}from"../chunks/CwXnJjsV.js";import"../chunks/SEI3YJsl.js";function je(s,e){return e}function Vt(s,e,t){for(var n=s.items,r=[],i=e.length,o=0;o<i;o++)bt(e[o].e,r,!0);var a=i>0&&r.length===0&&t!==null;if(a){var l=t.parentNode;yt(l),l.append(t),n.clear(),O(s,e[0].prev,e[i-1].next)}Tt(r,()=>{for(var f=0;f<i;f++){var m=e[f];a||(n.delete(m.k),O(s,m.prev,m.next)),st(m.e,!a)}})}function Fe(s,e,t,n,r,i=null){var o=s,a={flags:e,items:new Map,first:null},l=(e&ot)!==0;if(l){var f=s;o=te?ke(At(f)):f.appendChild(tt())}te&&vt();var m=null,y=!1,_=new Map,T=Ge(()=>{var p=t();return _t(p)?p:p==null?[]:at(p)}),d,v;function u(){Dt(v,d,a,_,o,r,e,n,t),i!==null&&(d.length===0?m?nt(m):m=He(()=>i(o)):m!==null&&xt(m,()=>{m=null}))}dt(()=>{v??(v=Nt),d=H(T);var p=d.length;if(y&&p===0)return;y=p===0;let A=!1;if(te){var P=ut(o)===mt;P!==(p===0)&&(o=Be(),ke(o),Ee(!1),A=!0)}if(te){for(var N=null,w,c=0;c<p;c++){if(re.nodeType===pt&&re.data===ft){o=re,A=!0,Ee(!1);break}var x=d[c],z=n(x,c);w=qe(re,a,N,null,x,z,c,r,e,t),a.items.set(z,w),N=w}p>0&&ke(Be())}if(te)p===0&&i&&(m=He(()=>i(o)));else if(gt()){var se=new Set,$e=ht;for(c=0;c<p;c+=1){x=d[c],z=n(x,c);var ee=a.items.get(z)??_.get(z);ee?(e&(Me|Ne))!==0&&it(ee,x,c,e):(w=qe(null,a,null,null,x,z,c,r,e,t,!0),_.set(z,w)),se.add(z)}for(const[R,we]of a.items)se.has(R)||$e.skipped_effects.add(we.e);$e.add_callback(u)}else u();A&&Ee(!0),H(T)}),te&&(o=re)}function Dt(s,e,t,n,r,i,o,a,l){var Ve,De,Le,Re;var f=(o&Ct)!==0,m=(o&(Me|Ne))!==0,y=e.length,_=t.items,T=t.first,d=T,v,u=null,p,A=[],P=[],N,w,c,x;if(f)for(x=0;x<y;x+=1)N=e[x],w=a(N,x),c=_.get(w),c!==void 0&&((Ve=c.a)==null||Ve.measure(),(p??(p=new Set)).add(c));for(x=0;x<y;x+=1){if(N=e[x],w=a(N,x),c=_.get(w),c===void 0){var z=n.get(w);if(z!==void 0){n.delete(w),_.set(w,z);var se=u?u.next:d;O(t,u,z),O(t,z,se),ze(z,se,r),u=z}else{var $e=d?d.e.nodes_start:r;u=qe($e,t,u,u===null?t.first:u.next,N,w,x,i,o,l)}_.set(w,u),A=[],P=[],d=u.next;continue}if(m&&it(c,N,x,o),(c.e.f&Ie)!==0&&(nt(c.e),f&&((De=c.a)==null||De.unfix(),(p??(p=new Set)).delete(c))),c!==d){if(v!==void 0&&v.has(c)){if(A.length<P.length){var ee=P[0],R;u=ee.prev;var we=A[0],Pe=A[A.length-1];for(R=0;R<A.length;R+=1)ze(A[R],ee,r);for(R=0;R<P.length;R+=1)v.delete(P[R]);O(t,we.prev,Pe.next),O(t,u,we),O(t,Pe,ee),d=ee,u=Pe,x-=1,A=[],P=[]}else v.delete(c),ze(c,d,r),O(t,c.prev,c.next),O(t,c,u===null?t.first:u.next),O(t,u,c),u=c;continue}for(A=[],P=[];d!==null&&d.k!==w;)(d.e.f&Ie)===0&&(v??(v=new Set)).add(d),P.push(d),d=d.next;if(d===null)continue;c=d}A.push(c),u=c,d=c.next}if(d!==null||v!==void 0){for(var oe=v===void 0?[]:at(v);d!==null;)(d.e.f&Ie)===0&&oe.push(d),d=d.next;var Se=oe.length;if(Se>0){var lt=(o&ot)!==0&&y===0?r:null;if(f){for(x=0;x<Se;x+=1)(Le=oe[x].a)==null||Le.measure();for(x=0;x<Se;x+=1)(Re=oe[x].a)==null||Re.fix()}Vt(t,oe,lt)}}f&&Mt(()=>{var Oe;if(p!==void 0)for(c of p)(Oe=c.a)==null||Oe.apply()}),s.first=t.first&&t.first.e,s.last=u&&u.e;for(var ct of n.values())st(ct.e);n.clear()}function it(s,e,t,n){(n&Me)!==0&&Ue(s.v,e),(n&Ne)!==0?Ue(s.i,t):s.i=t}function qe(s,e,t,n,r,i,o,a,l,f,m){var y=(l&Me)!==0,_=(l&$t)===0,T=y?_?et(r,!1,!1):Ye(r):r,d=(l&Ne)===0?o:Ye(o);y&&(T.trace=()=>{var p=typeof d=="number"?o:d.v;f()[p]});var v={i:d,v:T,k:i,a:null,e:null,prev:t,next:n};try{if(s===null){var u=document.createDocumentFragment();u.append(s=tt())}return v.e=He(()=>a(s,T,d,f),te),v.e.prev=t&&t.e,v.e.next=n&&n.e,t===null?m||(e.first=v):(t.next=v,t.e.next=v.e),n!==null&&(n.prev=v,n.e.prev=v.e),v}finally{}}function ze(s,e,t){for(var n=s.next?s.next.e.nodes_start:t,r=e?e.e.nodes_start:t,i=s.e.nodes_start;i!==null&&i!==n;){var o=wt(i);r.before(i),i=o}}function O(s,e,t){e===null?s.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}Ce[$]="src/lib/components/ContactWhap.svelte";var Lt=q(F('<a target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl bg-green-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-green-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 h-5 w-5"><path d="M20.52 3.48A11.79 11.79 0 0012.04 0a11.93 11.93 0 00-10.6 17.66L0 24l6.52-1.7A11.93 11.93 0 0012 24h.01A11.98 11.98 0 0024 12a11.78 11.78 0 00-3.48-8.52zM12.01 22a9.89 9.89 0 01-5.06-1.38l-.36-.22-3.86 1.01 1.03-3.76-.25-.39A9.91 9.91 0 1112 22zm5.49-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17-.35.22-.65.07a8.12 8.12 0 01-2.39-1.47 8.9 8.9 0 01-1.64-2.05c-.17-.3 0-.46.13-.61.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.18-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.08-.8.37s-1.05 1.03-1.05 2.52 1.08 2.92 1.23 3.13c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.07-.12-.27-.19-.57-.34z"></path></svg> </a>'),Ce[$],[[11,0,[[17,2,[[23,4]]]]]]);function Ce(s,e){S(new.target),E(e,!0,Ce);let t=W(e,"mensaje",3,"¡Hola! Quisiera más info sobre tus servicios, gracias!"),n=W(e,"title",3,"WhatsApp");const r="59892633838",i=encodeURIComponent(t()),o=`https://wa.me/${r}?text=${i}`;var a={...k()},l=Lt(),f=C(h(l));return g(l),U(()=>{xe(l,"href",o),V(f,` ${n()??""}`)}),M(s,l),I(a)}J[$]="src/lib/sections/Hero.svelte";var Rt=q(F('<div class="flex h-100 flex-1 items-center justify-center"><div class="h-100 transform overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:scale-102"><img alt="Veterinaria a domicilio" class="h-auto w-full object-cover"/></div></div>'),J[$],[[51,4,[[52,6,[[55,8]]]]]]),Ot=q(F('<div class="m-auto flex max-w-[1600px] flex-col-reverse items-center justify-between gap-10 px-6 py-6 lg:flex-row lg:px-16"><div class="flex-1 text-center lg:text-left"><!> <p class="text-md max-w-prose text-gray-700 dark:text-gray-300"> </p> <div class="my-8 rounded-lg text-lg font-semibold"><!></div></div> <!></div>'),J[$],[[20,0,[[24,2,[[31,4],[41,4]]]]]]);function J(s,e){S(new.target),E(e,!0,J);const t=()=>(be(Ae,"isPhone"),ye(Ae,"$isPhone",n)),[n,r]=rt();let i=W(e,"title",3,"Veterinaria a domicilio"),o=W(e,"subtitle",3,"Llevamos la atención directamente a tu casa, para que tu mascota se sienta cómoda y segura sin el estrés de salir o esperar en una clínica. Vos ganás comodidad y tiempo."),a=W(e,"sectionButton",19,()=>({value:"Reservar Turno",href:"/turnos"}));const l="/images/nomade_hero.png";var f={...k()},m=Ot(),y=h(m),_=h(y);b(()=>Wt(_,{tag:"h1",class:"mb-6 text-4xl leading-tight font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-100",children:Y(J,(N,w)=>{Qe();var c=Pt();U(()=>V(c,i())),M(N,c)}),$$slots:{default:!0}}),"component",J,25,4,{componentTag:"Heading"});var T=C(_,2),d=h(T,!0);g(T);var v=C(T,2),u=h(v);b(()=>Ce(u,{get title(){return a().value},mensaje:"Hola Nomade! Quisiera reservar una consulta"}),"component",J,42,6,{componentTag:"ContactWhap"}),g(v),g(y);var p=C(y,2);{var A=N=>{var w=Rt(),c=h(w),x=h(c);xe(x,"src",l),g(c),g(w),M(N,w)};b(()=>Te(p,N=>{t()||N(A)}),"if",J,50,2)}g(m),U(()=>V(d,o())),M(s,m);var P=I(f);return r(),P}ne[$]="src/lib/components/SectionTitle.svelte";var Bt=q(F('<h2 class="mb-10 text-center text-3xl font-extrabold text-gray-800 md:text-4xl"> </h2>'),ne[$],[[5,0]]);function ne(s,e){S(new.target),E(e,!0,ne);var t={...k()},n=Bt(),r=h(n,!0);return g(n),U(()=>V(r,e.title)),M(s,n),I(t)}he[$]="src/lib/sections/PetCaring.svelte";var Ut=q(F('<section class="w-full bg-white px-6 py-16 text-center md:px-12 lg:px-24"><div class="mx-auto max-w-4xl"><!> <p class="mb-10 text-gray-500"> </p> <div class="flex justify-center "><img alt="Veterinaria a domicilio" class="max-h-[400px] w-full rounded-xl object-cover shadow-lg md:w-3/4 lg:w-2/3" loading="lazy"/></div></div></section>'),he[$],[[13,0,[[14,2,[[16,4],[18,4,[[19,6]]]]]]]]);function he(s,e){S(new.target),E(e,!0,he);let t=W(e,"titulo",3,"Tu mascota, segura y tranquila en su hogar"),n=W(e,"subtitulo",3,"Atención veterinaria profesional sin estrés, sin traslados, sin esperas.");const r="/images/nomade_care.png";var i={...k()},o=Ut(),a=h(o),l=h(a);b(()=>ne(l,{get title(){return t()}}),"component",he,15,4,{componentTag:"SectionTitle"});var f=C(l,2),m=h(f,!0);g(f);var y=C(f,2),_=h(y);return xe(_,"src",r),g(y),g(a),g(o),U(()=>V(m,n())),M(s,o),I(i)}/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Yt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};j[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/Icon.svelte";var Zt=q(It("<svg><!><!></svg>"),j[$],[[14,0]]);function j(s,e){S(new.target);const t=D(e,["children","$$slots","$$events","$$legacy"]),n=D(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);E(e,!1,j);let r=W(e,"name",8,void 0),i=W(e,"color",8,"currentColor"),o=W(e,"size",8,24),a=W(e,"strokeWidth",8,2),l=W(e,"absoluteStrokeWidth",8,!1),f=W(e,"iconNode",24,()=>[]);const m=(...v)=>v.filter((u,p,A)=>!!u&&le(A.indexOf(u),p)).join(" ");var y={...k()};Ke();var _=Zt();Je(_,(v,u)=>({...Yt,...n,width:o(),height:o(),stroke:i(),"stroke-width":v,class:u}),[()=>(ie(l()),ie(a()),ie(o()),Ze(()=>l()?Number(a())*24/Number(o()):a())),()=>(ie(r()),ie(t),Ze(()=>m("lucide-icon","lucide",r()?`lucide-${r()}`:"",t.class)))]);var T=h(_);b(()=>Fe(T,1,f,je,(v,u)=>{var p=St(()=>kt(H(u),2));let A=()=>H(p)[0];A();let P=()=>H(p)[1];P();var N=Z(),w=L(N);Et(A),qt(w,A,!0,(c,x)=>{Je(c,()=>({...P()}))},void 0,[35,4]),M(v,N)}),"each",j,34,2);var d=C(T);return X(d,e,"default",{}),g(_),M(s,_),I(y)}ce[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/arrow-left.svelte";function ce(s,e){S(new.target);const t=D(e,["children","$$slots","$$events","$$legacy"]);E(e,!1,ce);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];var r={...k()};return b(()=>j(s,K({name:"arrow-left"},()=>t,{get iconNode(){return n},children:Y(ce,(i,o)=>{var a=Z(),l=L(a);X(l,e,"default",{},null),M(i,a)}),$$slots:{default:!0}})),"component",ce,60,0,{componentTag:"Icon"}),I(r)}de[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/chevron-down.svelte";function de(s,e){S(new.target);const t=D(e,["children","$$slots","$$events","$$legacy"]);E(e,!1,de);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];var r={...k()};return b(()=>j(s,K({name:"chevron-down"},()=>t,{get iconNode(){return n},children:Y(de,(i,o)=>{var a=Z(),l=L(a);X(l,e,"default",{},null),M(i,a)}),$$slots:{default:!0}})),"component",de,60,0,{componentTag:"Icon"}),I(r)}ve[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/file-text.svelte";function ve(s,e){S(new.target);const t=D(e,["children","$$slots","$$events","$$legacy"]);E(e,!1,ve);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];var r={...k()};return b(()=>j(s,K({name:"file-text"},()=>t,{get iconNode(){return n},children:Y(ve,(i,o)=>{var a=Z(),l=L(a);X(l,e,"default",{},null),M(i,a)}),$$slots:{default:!0}})),"component",ve,60,0,{componentTag:"Icon"}),I(r)}ue[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/flask-conical.svelte";function ue(s,e){S(new.target);const t=D(e,["children","$$slots","$$events","$$legacy"]);E(e,!1,ue);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]];var r={...k()};return b(()=>j(s,K({name:"flask-conical"},()=>t,{get iconNode(){return n},children:Y(ue,(i,o)=>{var a=Z(),l=L(a);X(l,e,"default",{},null),M(i,a)}),$$slots:{default:!0}})),"component",ue,60,0,{componentTag:"Icon"}),I(r)}ae[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/paw-print.svelte";function ae(s,e){S(new.target);const t=D(e,["children","$$slots","$$events","$$legacy"]);E(e,!1,ae);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]];var r={...k()};return b(()=>j(s,K({name:"paw-print"},()=>t,{get iconNode(){return n},children:Y(ae,(i,o)=>{var a=Z(),l=L(a);X(l,e,"default",{},null),M(i,a)}),$$slots:{default:!0}})),"component",ae,60,0,{componentTag:"Icon"}),I(r)}me[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/phone-call.svelte";function me(s,e){S(new.target);const t=D(e,["children","$$slots","$$events","$$legacy"]);E(e,!1,me);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13 2a9 9 0 0 1 9 9"}],["path",{d:"M13 6a5 5 0 0 1 5 5"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];var r={...k()};return b(()=>j(s,K({name:"phone-call"},()=>t,{get iconNode(){return n},children:Y(me,(i,o)=>{var a=Z(),l=L(a);X(l,e,"default",{},null),M(i,a)}),$$slots:{default:!0}})),"component",me,60,0,{componentTag:"Icon"}),I(r)}pe[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/stethoscope.svelte";function pe(s,e){S(new.target);const t=D(e,["children","$$slots","$$events","$$legacy"]);E(e,!1,pe);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]];var r={...k()};return b(()=>j(s,K({name:"stethoscope"},()=>t,{get iconNode(){return n},children:Y(pe,(i,o)=>{var a=Z(),l=L(a);X(l,e,"default",{},null),M(i,a)}),$$slots:{default:!0}})),"component",pe,60,0,{componentTag:"Icon"}),I(r)}fe[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/syringe.svelte";function fe(s,e){S(new.target);const t=D(e,["children","$$slots","$$events","$$legacy"]);E(e,!1,fe);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]];var r={...k()};return b(()=>j(s,K({name:"syringe"},()=>t,{get iconNode(){return n},children:Y(fe,(i,o)=>{var a=Z(),l=L(a);X(l,e,"default",{},null),M(i,a)}),$$slots:{default:!0}})),"component",fe,60,0,{componentTag:"Icon"}),I(r)}ge[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/user.svelte";function ge(s,e){S(new.target);const t=D(e,["children","$$slots","$$events","$$legacy"]);E(e,!1,ge);/**
 * @license lucide-svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];var r={...k()};return b(()=>j(s,K({name:"user"},()=>t,{get iconNode(){return n},children:Y(ge,(i,o)=>{var a=Z(),l=L(a);X(l,e,"default",{},null),M(i,a)}),$$slots:{default:!0}})),"component",ge,60,0,{componentTag:"Icon"}),I(r)}G[$]="src/lib/sections/Services.svelte";var Xt=q(F('<div class="flex h-full flex-col items-center text-center"><div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white"><!></div> <h3 class="text-lg font-semibold text-gray-800"> </h3> <p class="text-sm text-black"> </p></div>'),G[$],[[54,8,[[55,10],[60,10],[62,10]]]]),Jt=q(F('<div class="py-6"><!> <section class="bg-transparent text-center"><div class="mx-2 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6 lg:m-auto"></div></section></div>'),G[$],[[46,0,[[49,2,[[50,4]]]]]]);function G(s,e){S(new.target),E(e,!1,G);const t=[{icon:pe,titulo:"Consultas a domicilio",descripcion:"Medicina general y de especialidad a domicilio"},{icon:fe,titulo:"Vacunas a domicilio",descripcion:"Anuales, gatitos y cachorros"},{icon:ue,titulo:"Laboratorio",descripcion:"Sangre, orina."},{icon:me,titulo:"Teleconsultas",descripcion:"Con 1 o 2 horas de anticipación."},{icon:ge,titulo:"Eutanasia",descripcion:"Dormimos tu mascota en su casa"},{icon:ve,titulo:"Certificados de viaje",descripcion:"Para viajar al extranjero sin agobios"}];var n={...k()},r=Jt(),i=h(r);b(()=>ne(i,{title:"Servicios"}),"component",G,47,2,{componentTag:"SectionTitle"});var o=C(i,2),a=h(o);return b(()=>Fe(a,5,()=>t,je,(l,f)=>{var m=Xt(),y=h(m),_=h(y);b(()=>H(f).icon(_,{class:"h-7 w-7"}),"component",G,58,12,{componentTag:"s.icon"}),g(y);var T=C(y,2),d=h(T,!0);g(T);var v=C(T,2),u=h(v,!0);g(v),g(m),U(()=>{V(d,H(f).titulo),V(u,H(f).descripcion)}),M(l,m)}),"each",G,53,6),g(a),g(o),g(r),M(s,r),I(n)}_e[$]="src/lib/sections/WhoAreWe.svelte";var Kt=q(F(`<section class="w-full bg-white px-6 py-6 md:px-12 lg:px-24"><div class="mx-auto max-w-6xl"><!> <div class="grid items-center gap-10 md:grid-cols-2"><div class="text-base leading-relaxed text-gray-700"><p class="mb-4">¡Hola! Soy <span class="font-semibold"> </span> </p> <p class="mb-4">Creé este servicio de <span class="font-semibold">veterinaria móvil</span> para que tu compañero reciba atención de calidad <span class="font-semibold">sin salir de casa</span>, en un ambiente
          tranquilo y sin estrés.</p> <p class="mb-4">Mi objetivo es ofrecer una atención personalizada, basada en el
          cariño, la paciencia y la prevención. Creo que cada mascota es única y
          merece ser tratada con respeto, empatía y dedicación.</p> <p class="mt-4 font-semibold text-gray-900">Cuidar de ellos no es solo mi trabajo, <span class="text-pink-600">es mi vocación ❤️</span></p></div> <div class="flex transform justify-center overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:scale-102"><img alt="Veterinaria con gato" class="max-h-[400px] w-full rounded-2xl object-cover shadow-lg" loading="lazy"/></div></div></div></section>`),_e[$],[[9,0,[[10,2,[[13,4,[[15,6,[[16,8,[[17,21]]],[22,8,[[23,32],[27,10]]],[31,8],[37,8,[[38,49]]]]],[45,6,[[48,8]]]]]]]]]]);function _e(s,e){S(new.target),E(e,!0,_e);let t=W(e,"nombre",3,"NOMADE"),n=W(e,"anios",3,"10");const r="/images/nomade_waw.png";var i={...k()},o=Kt(),a=h(o),l=h(a);b(()=>ne(l,{title:"¿Quiénes somos?"}),"component",_e,11,4,{componentTag:"SectionTitle"});var f=C(l,2),m=h(f),y=h(m),_=C(h(y)),T=h(_,!0);g(_);var d=C(_);g(y),Qe(6),g(m);var v=C(m,2),u=h(v);return xe(u,"src",r),g(v),g(f),g(a),g(o),U(()=>{V(T,t()),V(d,`, médica
          veterinaria con pasión por los animales y más de ${n()??""} años de experiencia
          en el cuidado de mascotas.`)}),M(s,o),I(i)}B[$]="src/lib/sections/FAQ.svelte";var Gt=()=>{We.set(!1)},ea=q(F('<div class="mt-2 leading-relaxed text-gray-600"><p> </p></div>'),B[$],[[83,10,[[84,12]]]]),ta=q(F('<div class="p-4 "><button class="cursor-pointer flex w-full items-center justify-between text-left text-lg font-semibold text-gray-800 transition-colors hover:text-green-700"><span> </span> <!></button> <!></div>'),B[$],[[68,6,[[69,8,[[74,10]]]]]]),aa=q(F('<section class="mx-auto max-w-3xl px-4 py-10"><button class="mb-6 flex cursor-pointer items-center gap-2 transition-colors hover:text-green-900"><!> <span class="font-medium">Volver al inicio</span></button> <h2 class="mb-8 text-center text-3xl font-extrabold">Preguntas Frecuentes</h2> <div class="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-md"></div></section>'),B[$],[[52,0,[[54,2,[[59,4]]],[62,2],[64,2]]]]);function B(s,e){S(new.target),E(e,!1,B);let t=[{question:"¿Cómo funciona el servicio de veterinaria a domicilio?",answer:"Nos trasladamos hasta tu casa para atender a tu mascota en su ambiente. Solo necesitás agendar un turno por WhatsApp o desde nuestra web."},{question:"¿Qué zonas cubren?",answer:"Atendemos en distintas zonas de la ciudad y alrededores. Consultanos si estás cerca y vemos si podemos llegar."},{question:"¿Qué servicios realizan a domicilio?",answer:"Consultas clínicas, vacunación, desparasitación, controles de rutina, asesoramiento y urgencias leves."},{question:"¿Atienden urgencias?",answer:"Sí, atendemos urgencias leves. En casos graves te orientaremos al centro veterinario más cercano disponible."},{question:"¿Qué necesito tener preparado para la visita?",answer:"Un espacio tranquilo donde tu mascota se sienta cómoda, su libreta sanitaria y cualquier estudio previo que tengas."},{question:"¿Qué formas de pago aceptan?",answer:"Efectivo, transferencia y tarjeta (a través de link de pago o lector móvil)."}],n=et(null);const r=m=>{Ht(n,le(H(n),m)?null:m)};var i={...k()};Ke();var o=aa(),a=h(o);a.__click=[Gt];var l=h(a);b(()=>ce(l,{class:"h-5 w-5"}),"component",B,58,4,{componentTag:"ArrowLeft"}),Qe(2),g(a);var f=C(a,4);return b(()=>Fe(f,5,()=>t,je,(m,y,_)=>{var T=ta(),d=h(T);d.__click=()=>r(_);var v=h(d),u=h(v,!0);g(v);var p=C(v,2);{let N=Ge(()=>`h-5 w-5 transition-transform duration-300 ${le(H(n),_)?"rotate-180 text-green-700":"text-gray-500"}`);b(()=>de(p,{get class(){return H(N)}}),"component",B,75,10,{componentTag:"ChevronDown"})}g(d);var A=C(d,2);{var P=N=>{var w=ea(),c=h(w),x=h(c,!0);g(c),g(w),U(()=>V(x,H(y).answer)),Qt(3,w,()=>jt),M(N,w)};b(()=>Te(A,N=>{le(H(n),_)&&N(P)}),"if",B,82,8)}g(T),U(()=>{xe(d,"aria-expanded",le(H(n),_)),V(u,H(y).question)}),M(m,T)}),"each",B,67,4),g(f),g(o),M(s,o),I(i)}zt(["click"]);Q[$]="src/routes/+page.svelte";var na=q(F("<!> <!> <!> <!>",1),Q[$],[]),sa=q(F("<div><section><!> <!> <!></section></div>"),Q[$],[[19,0,[[20,2]]]]);function Q(s,e){S(new.target),E(e,!1,Q);const t=()=>(be(Xe,"deviceWidth"),ye(Xe,"$deviceWidth",i)),n=()=>(be(Ae,"isPhone"),ye(Ae,"$isPhone",i)),r=()=>(be(We,"showFreqQues"),ye(We,"$showFreqQues",i)),[i,o]=rt();var a={...k()},l=sa(),f=h(l),m=h(f);{var y=p=>{b(()=>ae(p,{class:"pointer-events-none absolute top-25 left-5 -z-10 h-48 w-48 text-green-300 opacity-20","aria-hidden":"true"}),"component",Q,23,6,{componentTag:"PawPrint"})};b(()=>Te(m,p=>{n()||p(y)}),"if",Q,22,4)}var _=C(m,2);b(()=>ae(_,{class:" pointer-events-none absolute right-16 bottom-20 -z-10 h-64 w-64 text-green-200 opacity-15","aria-hidden":"true"}),"component",Q,28,4,{componentTag:"PawPrint"});var T=C(_,2);{var d=p=>{b(()=>B(p,{}),"component",Q,34,6,{componentTag:"FAQ"})},v=p=>{var A=na(),P=L(A);b(()=>J(P,{}),"component",Q,36,6,{componentTag:"Hero"});var N=C(P,2);b(()=>G(N,{}),"component",Q,37,6,{componentTag:"Services"});var w=C(N,2);b(()=>_e(w,{}),"component",Q,38,6,{componentTag:"WhoAreWe"});var c=C(w,2);b(()=>he(c,{}),"component",Q,39,6,{componentTag:"PetCaring"}),M(p,A)};b(()=>Te(T,p=>{r()?p(d):p(v,!1)}),"if",Q,33,4)}g(f),g(l),U(()=>Ft(l,1,`max-w-[${t()}px] mb-32`)),M(s,l);var u=I(a);return o(),u}export{Q as component};
