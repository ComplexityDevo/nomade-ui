import{c as k,l as E,a as q}from"../chunks/DYhKvx7k.js";import{i as Ke}from"../chunks/CDU1V1RO.js";import{J as dt,v as ne,K as vt,g as H,ac as Ge,N as ut,w as mt,O as Be,P as ke,Q as Ee,Z as ie,C as pt,x as ft,T as He,W as gt,U as ht,aJ as Ue,a2 as et,a9 as Ye,R as tt,aK as at,aL as _t,aM as Ne,X as nt,Y as xt,aN as Me,aO as $t,aP as Ie,aQ as st,aR as wt,aS as bt,aT as yt,aU as Tt,aV as At,a8 as Nt,a0 as Mt,aW as ot,aX as Ct,p as I,s as C,m as x,n as f,t as F,o as V,j as N,k as z,F as $,l as j,aY as G,az as b,aB as Y,aG as De,aC as Pt,aH as be,ay as St,aZ as kt,aA as Z,i as R,a_ as Et,aE as It,b as Ze,e as le,a$ as zt,a6 as Ht}from"../chunks/BgnLJJam.js";import{p as W,a as Te,s as ye,f as rt,i as Ae,l as L,g as K,e as We,d as Xe}from"../chunks/BuKnbdXY.js";import{s as xe,H as Wt,a as Je,b as X,i as qt,j as Dt,k as Qt,l as jt}from"../chunks/B4iAgADC.js";import"../chunks/eZsbNdHT.js";function Qe(s,e){return e}function Ft(s,e,t){for(var a=s.items,o=[],l=e.length,r=0;r<l;r++)bt(e[r].e,o,!0);var n=l>0&&o.length===0&&t!==null;if(n){var c=t.parentNode;yt(c),c.append(t),a.clear(),B(s,e[0].prev,e[l-1].next)}Tt(o,()=>{for(var h=0;h<l;h++){var p=e[h];n||(a.delete(p.k),B(s,p.prev,p.next)),st(p.e,!n)}})}function je(s,e,t,a,o,l=null){var r=s,n={flags:e,items:new Map,first:null},c=(e&ot)!==0;if(c){var h=s;r=ne?ke(At(h)):h.appendChild(tt())}ne&&vt();var p=null,y=!1,_=new Map,w=Ge(()=>{var v=t();return _t(v)?v:v==null?[]:at(v)}),i,u;function m(){Vt(u,i,n,_,r,o,e,a,t),l!==null&&(i.length===0?p?nt(p):p=He(()=>l(r)):p!==null&&xt(p,()=>{p=null}))}dt(()=>{u??(u=Nt),i=H(w);var v=i.length;if(y&&v===0)return;y=v===0;let T=!1;if(ne){var S=ut(r)===mt;S!==(v===0)&&(r=Be(),ke(r),Ee(!1),T=!0)}if(ne){for(var M=null,A,d=0;d<v;d++){if(ie.nodeType===pt&&ie.data===ft){r=ie,T=!0,Ee(!1);break}var g=i[d],P=a(g,d);A=qe(ie,n,M,null,g,P,d,o,e,t),n.items.set(P,A),M=A}v>0&&ke(Be())}if(ne)v===0&&l&&(p=He(()=>l(r)));else if(gt()){var te=new Set,$e=ht;for(d=0;d<v;d+=1){g=i[d],P=a(g,d);var ae=n.items.get(P)??_.get(P);ae?(e&(Me|Ne))!==0&&it(ae,g,d,e):(A=qe(null,n,null,null,g,P,d,o,e,t,!0),_.set(P,A)),te.add(P)}for(const[O,we]of n.items)te.has(O)||$e.skipped_effects.add(we.e);$e.add_callback(m)}else m();T&&Ee(!0),H(w)}),ne&&(r=ie)}function Vt(s,e,t,a,o,l,r,n,c){var Fe,Ve,Le,Re;var h=(r&Ct)!==0,p=(r&(Me|Ne))!==0,y=e.length,_=t.items,w=t.first,i=w,u,m=null,v,T=[],S=[],M,A,d,g;if(h)for(g=0;g<y;g+=1)M=e[g],A=n(M,g),d=_.get(A),d!==void 0&&((Fe=d.a)==null||Fe.measure(),(v??(v=new Set)).add(d));for(g=0;g<y;g+=1){if(M=e[g],A=n(M,g),d=_.get(A),d===void 0){var P=a.get(A);if(P!==void 0){a.delete(A),_.set(A,P);var te=m?m.next:i;B(t,m,P),B(t,P,te),ze(P,te,o),m=P}else{var $e=i?i.e.nodes_start:o;m=qe($e,t,m,m===null?t.first:m.next,M,A,g,l,r,c)}_.set(A,m),T=[],S=[],i=m.next;continue}if(p&&it(d,M,g,r),(d.e.f&Ie)!==0&&(nt(d.e),h&&((Ve=d.a)==null||Ve.unfix(),(v??(v=new Set)).delete(d))),d!==i){if(u!==void 0&&u.has(d)){if(T.length<S.length){var ae=S[0],O;m=ae.prev;var we=T[0],Pe=T[T.length-1];for(O=0;O<T.length;O+=1)ze(T[O],ae,o);for(O=0;O<S.length;O+=1)u.delete(S[O]);B(t,we.prev,Pe.next),B(t,m,we),B(t,Pe,ae),i=ae,m=Pe,g-=1,T=[],S=[]}else u.delete(d),ze(d,i,o),B(t,d.prev,d.next),B(t,d,m===null?t.first:m.next),B(t,m,d),m=d;continue}for(T=[],S=[];i!==null&&i.k!==A;)(i.e.f&Ie)===0&&(u??(u=new Set)).add(i),S.push(i),i=i.next;if(i===null)continue;d=i}T.push(d),m=d,i=d.next}if(i!==null||u!==void 0){for(var re=u===void 0?[]:at(u);i!==null;)(i.e.f&Ie)===0&&re.push(i),i=i.next;var Se=re.length;if(Se>0){var lt=(r&ot)!==0&&y===0?o:null;if(h){for(g=0;g<Se;g+=1)(Le=re[g].a)==null||Le.measure();for(g=0;g<Se;g+=1)(Re=re[g].a)==null||Re.fix()}Ft(t,re,lt)}}h&&Mt(()=>{var Oe;if(v!==void 0)for(d of v)(Oe=d.a)==null||Oe.apply()}),s.first=t.first&&t.first.e,s.last=m&&m.e;for(var ct of a.values())st(ct.e);a.clear()}function it(s,e,t,a){(a&Me)!==0&&Ue(s.v,e),(a&Ne)!==0?Ue(s.i,t):s.i=t}function qe(s,e,t,a,o,l,r,n,c,h,p){var y=(c&Me)!==0,_=(c&$t)===0,w=y?_?et(o,!1,!1):Ye(o):o,i=(c&Ne)===0?r:Ye(r);y&&(w.trace=()=>{var v=typeof i=="number"?r:i.v;h()[v]});var u={i,v:w,k:l,a:null,e:null,prev:t,next:a};try{if(s===null){var m=document.createDocumentFragment();m.append(s=tt())}return u.e=He(()=>n(s,w,i,h),ne),u.e.prev=t&&t.e,u.e.next=a&&a.e,t===null?p||(e.first=u):(t.next=u,t.e.next=u.e),a!==null&&(a.prev=u,a.e.prev=u.e),u}finally{}}function ze(s,e,t){for(var a=s.next?s.next.e.nodes_start:t,o=e?e.e.nodes_start:t,l=s.e.nodes_start;l!==null&&l!==a;){var r=wt(l);o.before(l),l=r}}function B(s,e,t){e===null?s.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}Ce[$]="src/lib/components/ContactWhap.svelte";var Lt=q(j('<a target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl bg-green-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-green-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 h-5 w-5"><path d="M20.52 3.48A11.79 11.79 0 0012.04 0a11.93 11.93 0 00-10.6 17.66L0 24l6.52-1.7A11.93 11.93 0 0012 24h.01A11.98 11.98 0 0024 12a11.78 11.78 0 00-3.48-8.52zM12.01 22a9.89 9.89 0 01-5.06-1.38l-.36-.22-3.86 1.01 1.03-3.76-.25-.39A9.91 9.91 0 1112 22zm5.49-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17-.35.22-.65.07a8.12 8.12 0 01-2.39-1.47 8.9 8.9 0 01-1.64-2.05c-.17-.3 0-.46.13-.61.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.18-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.08-.8.37s-1.05 1.03-1.05 2.52 1.08 2.92 1.23 3.13c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.07-.12-.27-.19-.57-.34z"></path></svg> </a>'),Ce[$],[[11,0,[[17,2,[[23,4]]]]]]);function Ce(s,e){k(new.target),I(e,!0,Ce);let t=W(e,"mensaje",3,"¡Hola! Quisiera más info sobre tus servicios, gracias!"),a=W(e,"title",3,"WhatsApp");const o="59892633838",l=encodeURIComponent(t()),r=`https://wa.me/${o}?text=${l}`;var n={...E()},c=Lt(),h=C(x(c));return f(c),F(()=>{xe(c,"href",r),V(h,` ${a()??""}`)}),N(s,c),z(n)}J[$]="src/lib/sections/Hero.svelte";var Rt=q(j('<div class="flex h-100 flex-1 items-center justify-center"><div class="h-100 transform overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:scale-102"><img alt="Veterinaria a domicilio" class="h-auto w-full object-cover"/></div></div>'),J[$],[[56,4,[[57,6,[[60,8]]]]]]),Ot=q(j('<div class="m-auto flex max-w-[1600px] flex-col-reverse items-center justify-between gap-10 px-6 py-6 lg:flex-row lg:px-16"><div class="flex-1 text-center lg:text-left"><!> <p class="text-md max-w-prose text-gray-700 dark:text-gray-300"> </p> <div class="my-8 rounded-lg text-lg font-semibold"><!></div></div> <!></div>'),J[$],[[25,0,[[29,2,[[36,4],[46,4]]]]]]);function J(s,e){k(new.target),I(e,!0,J);const t=()=>(be(Ae,"isPhone"),ye(Ae,"$isPhone",a)),[a,o]=rt();let l=W(e,"title",3,"Veterinaria a domicilio"),r=W(e,"subtitle",3,"Llevamos la atención directamente a tu casa, para que tu mascota se sienta cómoda y segura sin el estrés de salir o esperar en una clínica. Vos ganás comodidad y tiempo."),n=W(e,"sectionButton",19,()=>({value:"Reservar Turno",href:"/turnos"}));const p=G("production","development")?".//images/nomade_hero.png":"/uploads/avatars/nomade_hero.png";var y={...E()},_=Ot(),w=x(_),i=x(w);b(()=>Wt(i,{tag:"h1",class:"mb-6 text-4xl leading-tight font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-100",children:Y(J,(d,g)=>{De();var P=Pt();F(()=>V(P,l())),N(d,P)}),$$slots:{default:!0}}),"component",J,30,4,{componentTag:"Heading"});var u=C(i,2),m=x(u,!0);f(u);var v=C(u,2),T=x(v);b(()=>Ce(T,{get title(){return n().value},mensaje:"Hola Nomade! Quisiera reservar una consulta"}),"component",J,47,6,{componentTag:"ContactWhap"}),f(v),f(w);var S=C(w,2);{var M=d=>{var g=Rt(),P=x(g),te=x(P);f(P),f(g),F(()=>xe(te,"src",p)),N(d,g)};b(()=>Te(S,d=>{t()||d(M)}),"if",J,55,2)}f(_),F(()=>V(m,r())),N(s,_);var A=z(y);return o(),A}oe[$]="src/lib/components/SectionTitle.svelte";var Bt=q(j('<h2 class="mb-10 text-center text-3xl font-extrabold text-gray-800 md:text-4xl"> </h2>'),oe[$],[[5,0]]);function oe(s,e){k(new.target),I(e,!0,oe);var t={...E()},a=Bt(),o=x(a,!0);return f(a),F(()=>V(o,e.title)),N(s,a),z(t)}he[$]="src/lib/sections/PetCaring.svelte";var Ut=q(j('<section class="w-full bg-white px-6 py-16 text-center md:px-12 lg:px-24"><div class="mx-auto max-w-4xl"><!> <p class="mb-10 text-gray-500"> </p> <div class="flex justify-center "><img alt="Veterinaria a domicilio" class="max-h-[400px] w-full rounded-xl object-cover shadow-lg md:w-3/4 lg:w-2/3" loading="lazy"/></div></div></section>'),he[$],[[18,0,[[19,2,[[21,4],[23,4,[[24,6]]]]]]]]);function he(s,e){k(new.target),I(e,!0,he);let t=W(e,"titulo",3,"Tu mascota, segura y tranquila en su hogar"),a=W(e,"subtitulo",3,"Atención veterinaria profesional sin estrés, sin traslados, sin esperas.");const r=G("production","development")?".//images/nomade_care.png":"/uploads/avatars/nomade_care.png";var n={...E()},c=Ut(),h=x(c),p=x(h);b(()=>oe(p,{get title(){return t()}}),"component",he,20,4,{componentTag:"SectionTitle"});var y=C(p,2),_=x(y,!0);f(y);var w=C(y,2),i=x(w);return f(w),f(h),f(c),F(()=>{V(_,a()),xe(i,"src",r)}),N(s,c),z(n)}/**
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
 */const Yt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};Q[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/Icon.svelte";var Zt=q(It("<svg><!><!></svg>"),Q[$],[[14,0]]);function Q(s,e){k(new.target);const t=L(e,["children","$$slots","$$events","$$legacy"]),a=L(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);I(e,!1,Q);let o=W(e,"name",8,void 0),l=W(e,"color",8,"currentColor"),r=W(e,"size",8,24),n=W(e,"strokeWidth",8,2),c=W(e,"absoluteStrokeWidth",8,!1),h=W(e,"iconNode",24,()=>[]);const p=(...u)=>u.filter((m,v,T)=>!!m&&G(T.indexOf(m),v)).join(" ");var y={...E()};Ke();var _=Zt();Je(_,(u,m)=>({...Yt,...a,width:r(),height:r(),stroke:l(),"stroke-width":u,class:m}),[()=>(le(c()),le(n()),le(r()),Ze(()=>c()?Number(n())*24/Number(r()):n())),()=>(le(o()),le(t),Ze(()=>p("lucide-icon","lucide",o()?`lucide-${o()}`:"",t.class)))]);var w=x(_);b(()=>je(w,1,h,Qe,(u,m)=>{var v=St(()=>kt(H(m),2));let T=()=>H(v)[0];T();let S=()=>H(v)[1];S();var M=Z(),A=R(M);Et(T),qt(A,T,!0,(d,g)=>{Je(d,()=>({...S()}))},void 0,[35,4]),N(u,M)}),"each",Q,34,2);var i=C(w);return X(i,e,"default",{}),f(_),N(s,_),z(y)}ce[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/arrow-left.svelte";function ce(s,e){k(new.target);const t=L(e,["children","$$slots","$$events","$$legacy"]);I(e,!1,ce);/**
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
 */const a=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];var o={...E()};return b(()=>Q(s,K({name:"arrow-left"},()=>t,{get iconNode(){return a},children:Y(ce,(l,r)=>{var n=Z(),c=R(n);X(c,e,"default",{},null),N(l,n)}),$$slots:{default:!0}})),"component",ce,60,0,{componentTag:"Icon"}),z(o)}de[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/chevron-down.svelte";function de(s,e){k(new.target);const t=L(e,["children","$$slots","$$events","$$legacy"]);I(e,!1,de);/**
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
 */const a=[["path",{d:"m6 9 6 6 6-6"}]];var o={...E()};return b(()=>Q(s,K({name:"chevron-down"},()=>t,{get iconNode(){return a},children:Y(de,(l,r)=>{var n=Z(),c=R(n);X(c,e,"default",{},null),N(l,n)}),$$slots:{default:!0}})),"component",de,60,0,{componentTag:"Icon"}),z(o)}ve[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/file-text.svelte";function ve(s,e){k(new.target);const t=L(e,["children","$$slots","$$events","$$legacy"]);I(e,!1,ve);/**
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
 */const a=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];var o={...E()};return b(()=>Q(s,K({name:"file-text"},()=>t,{get iconNode(){return a},children:Y(ve,(l,r)=>{var n=Z(),c=R(n);X(c,e,"default",{},null),N(l,n)}),$$slots:{default:!0}})),"component",ve,60,0,{componentTag:"Icon"}),z(o)}ue[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/flask-conical.svelte";function ue(s,e){k(new.target);const t=L(e,["children","$$slots","$$events","$$legacy"]);I(e,!1,ue);/**
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
 */const a=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]];var o={...E()};return b(()=>Q(s,K({name:"flask-conical"},()=>t,{get iconNode(){return a},children:Y(ue,(l,r)=>{var n=Z(),c=R(n);X(c,e,"default",{},null),N(l,n)}),$$slots:{default:!0}})),"component",ue,60,0,{componentTag:"Icon"}),z(o)}se[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/paw-print.svelte";function se(s,e){k(new.target);const t=L(e,["children","$$slots","$$events","$$legacy"]);I(e,!1,se);/**
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
 */const a=[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]];var o={...E()};return b(()=>Q(s,K({name:"paw-print"},()=>t,{get iconNode(){return a},children:Y(se,(l,r)=>{var n=Z(),c=R(n);X(c,e,"default",{},null),N(l,n)}),$$slots:{default:!0}})),"component",se,60,0,{componentTag:"Icon"}),z(o)}me[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/phone-call.svelte";function me(s,e){k(new.target);const t=L(e,["children","$$slots","$$events","$$legacy"]);I(e,!1,me);/**
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
 */const a=[["path",{d:"M13 2a9 9 0 0 1 9 9"}],["path",{d:"M13 6a5 5 0 0 1 5 5"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];var o={...E()};return b(()=>Q(s,K({name:"phone-call"},()=>t,{get iconNode(){return a},children:Y(me,(l,r)=>{var n=Z(),c=R(n);X(c,e,"default",{},null),N(l,n)}),$$slots:{default:!0}})),"component",me,60,0,{componentTag:"Icon"}),z(o)}pe[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/stethoscope.svelte";function pe(s,e){k(new.target);const t=L(e,["children","$$slots","$$events","$$legacy"]);I(e,!1,pe);/**
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
 */const a=[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]];var o={...E()};return b(()=>Q(s,K({name:"stethoscope"},()=>t,{get iconNode(){return a},children:Y(pe,(l,r)=>{var n=Z(),c=R(n);X(c,e,"default",{},null),N(l,n)}),$$slots:{default:!0}})),"component",pe,60,0,{componentTag:"Icon"}),z(o)}fe[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/syringe.svelte";function fe(s,e){k(new.target);const t=L(e,["children","$$slots","$$events","$$legacy"]);I(e,!1,fe);/**
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
 */const a=[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]];var o={...E()};return b(()=>Q(s,K({name:"syringe"},()=>t,{get iconNode(){return a},children:Y(fe,(l,r)=>{var n=Z(),c=R(n);X(c,e,"default",{},null),N(l,n)}),$$slots:{default:!0}})),"component",fe,60,0,{componentTag:"Icon"}),z(o)}ge[$]="node_modules/.pnpm/lucide-svelte@0.545.0_svelte@5.39.11/node_modules/lucide-svelte/dist/icons/user.svelte";function ge(s,e){k(new.target);const t=L(e,["children","$$slots","$$events","$$legacy"]);I(e,!1,ge);/**
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
 */const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];var o={...E()};return b(()=>Q(s,K({name:"user"},()=>t,{get iconNode(){return a},children:Y(ge,(l,r)=>{var n=Z(),c=R(n);X(c,e,"default",{},null),N(l,n)}),$$slots:{default:!0}})),"component",ge,60,0,{componentTag:"Icon"}),z(o)}ee[$]="src/lib/sections/Services.svelte";var Xt=q(j('<div class="flex h-full flex-col items-center text-center"><div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white"><!></div> <h3 class="text-lg font-semibold text-gray-800"> </h3> <p class="text-sm text-black"> </p></div>'),ee[$],[[54,8,[[55,10],[60,10],[62,10]]]]),Jt=q(j('<div class="py-6"><!> <section class="bg-transparent text-center"><div class="mx-2 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6 lg:m-auto"></div></section></div>'),ee[$],[[46,0,[[49,2,[[50,4]]]]]]);function ee(s,e){k(new.target),I(e,!1,ee);const t=[{icon:pe,titulo:"Consultas a domicilio",descripcion:"Medicina general y de especialidad a domicilio"},{icon:fe,titulo:"Vacunas a domicilio",descripcion:"Anuales, gatitos y cachorros"},{icon:ue,titulo:"Laboratorio",descripcion:"Sangre, orina."},{icon:me,titulo:"Teleconsultas",descripcion:"Con 1 o 2 horas de anticipación."},{icon:ge,titulo:"Eutanasia",descripcion:"Dormimos tu mascota en su casa"},{icon:ve,titulo:"Certificados de viaje",descripcion:"Para viajar al extranjero sin agobios"}];var a={...E()},o=Jt(),l=x(o);b(()=>oe(l,{title:"Servicios"}),"component",ee,47,2,{componentTag:"SectionTitle"});var r=C(l,2),n=x(r);return b(()=>je(n,5,()=>t,Qe,(c,h)=>{var p=Xt(),y=x(p),_=x(y);b(()=>H(h).icon(_,{class:"h-7 w-7"}),"component",ee,58,12,{componentTag:"s.icon"}),f(y);var w=C(y,2),i=x(w,!0);f(w);var u=C(w,2),m=x(u,!0);f(u),f(p),F(()=>{V(i,H(h).titulo),V(m,H(h).descripcion)}),N(c,p)}),"each",ee,53,6),f(n),f(r),f(o),N(s,o),z(a)}_e[$]="src/lib/sections/WhoAreWe.svelte";var Kt=q(j(`<section class="w-full bg-white px-6 py-6 md:px-12 lg:px-24"><div class="mx-auto max-w-6xl"><!> <div class="grid items-center gap-10 md:grid-cols-2"><div class="text-base leading-relaxed text-gray-700"><p class="mb-4">¡Hola! Soy <span class="font-semibold"> </span> </p> <p class="mb-4">Creé este servicio de <span class="font-semibold">veterinaria móvil</span> para que tu compañero reciba atención de calidad <span class="font-semibold">sin salir de casa</span>, en un ambiente
          tranquilo y sin estrés.</p> <p class="mb-4">Mi objetivo es ofrecer una atención personalizada, basada en el
          cariño, la paciencia y la prevención. Creo que cada mascota es única y
          merece ser tratada con respeto, empatía y dedicación.</p> <p class="mt-4 font-semibold text-gray-900">Cuidar de ellos no es solo mi trabajo, <span class="text-pink-600">es mi vocación ❤️</span></p></div> <div class="flex transform justify-center overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:scale-102"><img alt="Veterinaria con gato" class="max-h-[400px] w-full rounded-2xl object-cover shadow-lg" loading="lazy"/></div></div></div></section>`),_e[$],[[14,0,[[15,2,[[18,4,[[20,6,[[21,8,[[22,21]]],[27,8,[[28,32],[32,10]]],[36,8],[42,8,[[43,49]]]]],[50,6,[[53,8]]]]]]]]]]);function _e(s,e){k(new.target),I(e,!0,_e);let t=W(e,"nombre",3,"NOMADE"),a=W(e,"anios",3,"10");const r=G("production","development")?".//images/nomade_waw.png":"/uploads/avatars/nomade_waw.png";var n={...E()},c=Kt(),h=x(c),p=x(h);b(()=>oe(p,{title:"¿Quiénes somos?"}),"component",_e,16,4,{componentTag:"SectionTitle"});var y=C(p,2),_=x(y),w=x(_),i=C(x(w)),u=x(i,!0);f(i);var m=C(i);f(w),De(6),f(_);var v=C(_,2),T=x(v);return f(v),f(y),f(h),f(c),F(()=>{V(u,t()),V(m,`, médica
          veterinaria con pasión por los animales y más de ${a()??""} años de experiencia
          en el cuidado de mascotas.`),xe(T,"src",r)}),N(s,c),z(n)}U[$]="src/lib/sections/FAQ.svelte";var Gt=()=>{We.set(!1)},ea=q(j('<div class="mt-2 leading-relaxed text-gray-600"><p> </p></div>'),U[$],[[83,10,[[84,12]]]]),ta=q(j('<div class="p-4 "><button class="cursor-pointer flex w-full items-center justify-between text-left text-lg font-semibold text-gray-800 transition-colors hover:text-green-700"><span> </span> <!></button> <!></div>'),U[$],[[68,6,[[69,8,[[74,10]]]]]]),aa=q(j('<section class="mx-auto max-w-3xl px-4 py-10"><button class="mb-6 flex cursor-pointer items-center gap-2 transition-colors hover:text-green-900"><!> <span class="font-medium">Volver al inicio</span></button> <h2 class="mb-8 text-center text-3xl font-extrabold">Preguntas Frecuentes</h2> <div class="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-md"></div></section>'),U[$],[[52,0,[[54,2,[[59,4]]],[62,2],[64,2]]]]);function U(s,e){k(new.target),I(e,!1,U);let t=[{question:"¿Cómo funciona el servicio de veterinaria a domicilio?",answer:"Nos trasladamos hasta tu casa para atender a tu mascota en su ambiente. Solo necesitás agendar un turno por WhatsApp o desde nuestra web."},{question:"¿Qué zonas cubren?",answer:"Atendemos en distintas zonas de la ciudad y alrededores. Consultanos si estás cerca y vemos si podemos llegar."},{question:"¿Qué servicios realizan a domicilio?",answer:"Consultas clínicas, vacunación, desparasitación, controles de rutina, asesoramiento y urgencias leves."},{question:"¿Atienden urgencias?",answer:"Sí, atendemos urgencias leves. En casos graves te orientaremos al centro veterinario más cercano disponible."},{question:"¿Qué necesito tener preparado para la visita?",answer:"Un espacio tranquilo donde tu mascota se sienta cómoda, su libreta sanitaria y cualquier estudio previo que tengas."},{question:"¿Qué formas de pago aceptan?",answer:"Efectivo, transferencia y tarjeta (a través de link de pago o lector móvil)."}],a=et(null);const o=p=>{Ht(a,G(H(a),p)?null:p)};var l={...E()};Ke();var r=aa(),n=x(r);n.__click=[Gt];var c=x(n);b(()=>ce(c,{class:"h-5 w-5"}),"component",U,58,4,{componentTag:"ArrowLeft"}),De(2),f(n);var h=C(n,4);return b(()=>je(h,5,()=>t,Qe,(p,y,_)=>{var w=ta(),i=x(w);i.__click=()=>o(_);var u=x(i),m=x(u,!0);f(u);var v=C(u,2);{let M=Ge(()=>`h-5 w-5 transition-transform duration-300 ${G(H(a),_)?"rotate-180 text-green-700":"text-gray-500"}`);b(()=>de(v,{get class(){return H(M)}}),"component",U,75,10,{componentTag:"ChevronDown"})}f(i);var T=C(i,2);{var S=M=>{var A=ea(),d=x(A),g=x(d,!0);f(d),f(A),F(()=>V(g,H(y).answer)),Dt(3,A,()=>Qt),N(M,A)};b(()=>Te(T,M=>{G(H(a),_)&&M(S)}),"if",U,82,8)}f(w),F(()=>{xe(i,"aria-expanded",G(H(a),_)),V(m,H(y).question)}),N(p,w)}),"each",U,67,4),f(h),f(r),N(s,r),z(l)}zt(["click"]);D[$]="src/routes/+page.svelte";var na=q(j("<!> <!> <!> <!>",1),D[$],[]),sa=q(j("<div><section><!> <!> <!></section></div>"),D[$],[[19,0,[[20,2]]]]);function D(s,e){k(new.target),I(e,!1,D);const t=()=>(be(Xe,"deviceWidth"),ye(Xe,"$deviceWidth",l)),a=()=>(be(Ae,"isPhone"),ye(Ae,"$isPhone",l)),o=()=>(be(We,"showFreqQues"),ye(We,"$showFreqQues",l)),[l,r]=rt();var n={...E()},c=sa(),h=x(c),p=x(h);{var y=v=>{b(()=>se(v,{class:"pointer-events-none absolute top-25 left-5 -z-10 h-48 w-48 text-green-300 opacity-20","aria-hidden":"true"}),"component",D,23,6,{componentTag:"PawPrint"})};b(()=>Te(p,v=>{a()||v(y)}),"if",D,22,4)}var _=C(p,2);b(()=>se(_,{class:" pointer-events-none absolute right-16 bottom-20 -z-10 h-64 w-64 text-green-200 opacity-15","aria-hidden":"true"}),"component",D,28,4,{componentTag:"PawPrint"});var w=C(_,2);{var i=v=>{b(()=>U(v,{}),"component",D,34,6,{componentTag:"FAQ"})},u=v=>{var T=na(),S=R(T);b(()=>J(S,{}),"component",D,36,6,{componentTag:"Hero"});var M=C(S,2);b(()=>ee(M,{}),"component",D,37,6,{componentTag:"Services"});var A=C(M,2);b(()=>_e(A,{}),"component",D,38,6,{componentTag:"WhoAreWe"});var d=C(A,2);b(()=>he(d,{}),"component",D,39,6,{componentTag:"PetCaring"}),N(v,T)};b(()=>Te(w,v=>{o()?v(i):v(u,!1)}),"if",D,33,4)}f(h),f(c),F(()=>jt(c,1,`max-w-[${t()}px] mb-32`)),N(s,c);var m=z(n);return r(),m}export{D as component};
