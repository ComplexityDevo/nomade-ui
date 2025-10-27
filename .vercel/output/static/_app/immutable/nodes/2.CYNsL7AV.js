import"../chunks/Bzak7iHL.js";import{i as Me}from"../chunks/DZnedSJp.js";import{O as Fe,P as L,Q as Le,A as E,ah as Ce,T as Oe,U as Re,V as we,W as ne,X as ie,a3 as B,ax as Be,ay as Ue,Z as ce,a0 as Ye,_ as Ze,az as be,Y as Ee,a7 as ke,ai as ye,aA as ze,i as Ge,aB as X,a1 as Pe,a2 as Je,aC as ee,aD as Ke,aE as oe,aF as Se,aG as Xe,aH as ea,aI as aa,aJ as ta,af as sa,aK as ra,aL as He,q as na,aM as ia,E as ae,au as H,G as P,av as qe,aN as oa,I as b,J as te,F as S,M as C,K as g,L as m,H as Q,N as q,aO as ue,aw as la,aP as ca,u as Ne,B as U,aQ as da,aR as va,aa as ua}from"../chunks/DPwVBxdz.js";import{p as k,r as fa,a as K,s as J,b as Te,i as Ie,l as T,c as V,e as We,d as ma}from"../chunks/D3nok1X8.js";import{g as ha,e as Qe,a as de,h as pa,c as ga,s as Y,b as j,t as xa,f as _a,d as $a}from"../chunks/jqg5k7wm.js";import"../chunks/DGfU8dUN.js";function fe(r,e){return e}function wa(r,e,a){for(var s=r.items,o=[],l=e.length,t=0;t<l;t++)ea(e[t].e,o,!0);var i=l>0&&o.length===0&&a!==null;if(i){var h=a.parentNode;aa(h),h.append(a),s.clear(),W(r,e[0].prev,e[l-1].next)}ta(o,()=>{for(var v=0;v<l;v++){var d=e[v];i||(s.delete(d.k),W(r,d.prev,d.next)),Se(d.e,!i)}})}function me(r,e,a,s,o,l=null){var t=r,i={flags:e,items:new Map,first:null},h=(e&He)!==0;if(h){var v=r;t=L?ne(ra(v)):v.appendChild(Ee())}L&&Le();var d=null,p=!1,$=new Map,N=Ce(()=>{var x=a();return Ge(x)?x:x==null?[]:ze(x)}),n,u;function f(){ba(u,n,i,$,t,o,e,s,a),l!==null&&(n.length===0?d?Pe(d):d=ce(()=>l(t)):d!==null&&Je(d,()=>{d=null}))}Fe(()=>{u??(u=sa),n=E(N);var x=n.length;if(p&&x===0)return;p=x===0;let w=!1;if(L){var y=Oe(t)===Re;y!==(x===0)&&(t=we(),ne(t),ie(!1),w=!0)}if(L){for(var M=null,A,c=0;c<x;c++){if(B.nodeType===Be&&B.data===Ue){t=B,w=!0,ie(!1);break}var _=n[c],z=s(_,c);A=ve(B,i,M,null,_,z,c,o,e,a),i.items.set(z,A),M=A}x>0&&ne(we())}if(L)x===0&&l&&(d=ce(()=>l(t)));else if(Ye()){var O=new Set,Z=Ze;for(c=0;c<x;c+=1){_=n[c],z=s(_,c);var F=i.items.get(z)??$.get(z);F?(e&(ee|X))!==0&&je(F,_,c,e):(A=ve(null,i,null,null,_,z,c,o,e,a,!0),$.set(z,A)),O.add(z)}for(const[I,G]of i.items)O.has(I)||Z.skipped_effects.add(G.e);Z.add_callback(f)}else f();w&&ie(!0),E(N)}),L&&(t=B)}function ba(r,e,a,s,o,l,t,i,h){var pe,ge,xe,_e;var v=(t&ia)!==0,d=(t&(ee|X))!==0,p=e.length,$=a.items,N=a.first,n=N,u,f=null,x,w=[],y=[],M,A,c,_;if(v)for(_=0;_<p;_+=1)M=e[_],A=i(M,_),c=$.get(A),c!==void 0&&((pe=c.a)==null||pe.measure(),(x??(x=new Set)).add(c));for(_=0;_<p;_+=1){if(M=e[_],A=i(M,_),c=$.get(A),c===void 0){var z=s.get(A);if(z!==void 0){s.delete(A),$.set(A,z);var O=f?f.next:n;W(a,f,z),W(a,z,O),le(z,O,o),f=z}else{var Z=n?n.e.nodes_start:o;f=ve(Z,a,f,f===null?a.first:f.next,M,A,_,l,t,h)}$.set(A,f),w=[],y=[],n=f.next;continue}if(d&&je(c,M,_,t),(c.e.f&oe)!==0&&(Pe(c.e),v&&((ge=c.a)==null||ge.unfix(),(x??(x=new Set)).delete(c))),c!==n){if(u!==void 0&&u.has(c)){if(w.length<y.length){var F=y[0],I;f=F.prev;var G=w[0],se=w[w.length-1];for(I=0;I<w.length;I+=1)le(w[I],F,o);for(I=0;I<y.length;I+=1)u.delete(y[I]);W(a,G.prev,se.next),W(a,f,G),W(a,se,F),n=F,f=se,_-=1,w=[],y=[]}else u.delete(c),le(c,n,o),W(a,c.prev,c.next),W(a,c,f===null?a.first:f.next),W(a,f,c),f=c;continue}for(w=[],y=[];n!==null&&n.k!==A;)(n.e.f&oe)===0&&(u??(u=new Set)).add(n),y.push(n),n=n.next;if(n===null)continue;c=n}w.push(c),f=c,n=c.next}if(n!==null||u!==void 0){for(var R=u===void 0?[]:ze(u);n!==null;)(n.e.f&oe)===0&&R.push(n),n=n.next;var re=R.length;if(re>0){var Ve=(t&He)!==0&&p===0?o:null;if(v){for(_=0;_<re;_+=1)(xe=R[_].a)==null||xe.measure();for(_=0;_<re;_+=1)(_e=R[_].a)==null||_e.fix()}wa(a,R,Ve)}}v&&na(()=>{var $e;if(x!==void 0)for(c of x)($e=c.a)==null||$e.apply()}),r.first=a.first&&a.first.e,r.last=f&&f.e;for(var De of s.values())Se(De.e);s.clear()}function je(r,e,a,s){(s&ee)!==0&&be(r.v,e),(s&X)!==0?be(r.i,a):r.i=a}function ve(r,e,a,s,o,l,t,i,h,v,d){var p=(h&ee)!==0,$=(h&Ke)===0,N=p?$?ke(o,!1,!1):ye(o):o,n=(h&X)===0?t:ye(t),u={i:n,v:N,k:l,a:null,e:null,prev:a,next:s};try{if(r===null){var f=document.createDocumentFragment();f.append(r=Ee())}return u.e=ce(()=>i(r,N,n,v),L),u.e.prev=a&&a.e,u.e.next=s&&s.e,a===null?d||(e.first=u):(a.next=u,a.e.next=u.e),s!==null&&(s.prev=u,s.e.prev=u.e),u}finally{}}function le(r,e,a){for(var s=r.next?r.next.e.nodes_start:a,o=e?e.e.nodes_start:a,l=r.e.nodes_start;l!==null&&l!==s;){var t=Xe(l);o.before(l),l=t}}function W(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function ya(r,e){ae(e,!0);let a=k(e,"tag",3,"h1"),s=fa(e,["$$slots","$$events","$$legacy","children","tag","class"]);const o=ha("heading");let l=qe(()=>pa({tag:a(),class:ga(o,e.class)}));var t=H(),i=P(t);Qe(i,a,!1,(h,v)=>{de(h,()=>({...s,class:E(l)}));var d=H(),p=P(d);oa(p,()=>e.children),b(v,d)}),b(r,t),te()}var Na=S('<a target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl bg-green-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-green-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 h-5 w-5"><path d="M20.52 3.48A11.79 11.79 0 0012.04 0a11.93 11.93 0 00-10.6 17.66L0 24l6.52-1.7A11.93 11.93 0 0012 24h.01A11.98 11.98 0 0024 12a11.78 11.78 0 00-3.48-8.52zM12.01 22a9.89 9.89 0 01-5.06-1.38l-.36-.22-3.86 1.01 1.03-3.76-.25-.39A9.91 9.91 0 1112 22zm5.49-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17-.35.22-.65.07a8.12 8.12 0 01-2.39-1.47 8.9 8.9 0 01-1.64-2.05c-.17-.3 0-.46.13-.61.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.18-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.08-.8.37s-1.05 1.03-1.05 2.52 1.08 2.92 1.23 3.13c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.07-.12-.27-.19-.57-.34z"></path></svg> </a>');function Aa(r,e){let a=k(e,"mensaje",3,"¡Hola! Quisiera más info sobre tus servicios, gracias!"),s=k(e,"title",3,"WhatsApp");const o="59892633838",l=encodeURIComponent(a()),t=`https://wa.me/${o}?text=${l}`;var i=Na(),h=C(g(i));m(i),Q(()=>{Y(i,"href",t),q(h,` ${s()??""}`)}),b(r,i)}var Ma=S('<div class="flex h-100 flex-1 items-center justify-center"><div class="h-100 transform overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:scale-102"><img alt="Veterinaria a domicilio" class="h-auto w-full object-cover"/></div></div>'),Ca=S('<div class="m-auto flex max-w-[1600px] flex-col-reverse items-center justify-between gap-10 px-6 py-6 lg:flex-row lg:px-16"><div class="flex-1 text-center lg:text-left"><!> <p class="text-md max-w-prose text-gray-700 dark:text-gray-300"> </p> <div class="my-8 rounded-lg text-lg font-semibold"><!></div></div> <!></div>');function Ea(r,e){ae(e,!0);const a=()=>J(Ie,"$isPhone",s),[s,o]=Te();let l=k(e,"title",3,"Veterinaria a domicilio"),t=k(e,"subtitle",3,"Llevamos la atención directamente a tu casa, para que tu mascota se sienta cómoda y segura sin el estrés de salir o esperar en una clínica. Vos ganás comodidad y tiempo."),i=k(e,"sectionButton",19,()=>({value:"Reservar Turno",href:"/turnos"}));const h="/images/nomade_hero.png";var v=Ca(),d=g(v),p=g(d);ya(p,{tag:"h1",class:"mb-6 text-4xl leading-tight font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-100",children:(w,y)=>{ue();var M=la();Q(()=>q(M,l())),b(w,M)},$$slots:{default:!0}});var $=C(p,2),N=g($,!0);m($);var n=C($,2),u=g(n);Aa(u,{get title(){return i().value},mensaje:"Hola Nomade! Quisiera reservar una consulta"}),m(n),m(d);var f=C(d,2);{var x=w=>{var y=Ma(),M=g(y),A=g(M);Y(A,"src",h),m(M),m(y),b(w,y)};K(f,w=>{a()||w(x)})}m(v),Q(()=>q(N,t())),b(r,v),te(),o()}var ka=S('<h2 class="mb-10 text-center text-3xl font-extrabold text-gray-800 md:text-4xl"> </h2>');function he(r,e){var a=ka(),s=g(a,!0);m(a),Q(()=>q(s,e.title)),b(r,a)}var za=S('<section class="w-full bg-white px-6 py-16 text-center md:px-12 lg:px-24"><div class="mx-auto max-w-4xl"><!> <p class="mb-10 text-gray-500"> </p> <div class="flex justify-center "><img alt="Veterinaria a domicilio" class="max-h-[400px] w-full rounded-xl object-cover shadow-lg md:w-3/4 lg:w-2/3" loading="lazy"/></div></div></section>');function Pa(r,e){let a=k(e,"titulo",3,"Tu mascota, segura y tranquila en su hogar"),s=k(e,"subtitulo",3,"Atención veterinaria profesional sin estrés, sin traslados, sin esperas.");const o="/images/nomade_care.png";var l=za(),t=g(l),i=g(t);he(i,{get title(){return a()}});var h=C(i,2),v=g(h,!0);m(h);var d=C(h,2),p=g(d);Y(p,"src",o),m(d),m(t),m(l),Q(()=>q(v,s())),b(r,l)}/**
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
 */const Sa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ha=ca("<svg><!><!></svg>");function D(r,e){const a=T(e,["children","$$slots","$$events","$$legacy"]),s=T(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ae(e,!1);let o=k(e,"name",8,void 0),l=k(e,"color",8,"currentColor"),t=k(e,"size",8,24),i=k(e,"strokeWidth",8,2),h=k(e,"absoluteStrokeWidth",8,!1),v=k(e,"iconNode",24,()=>[]);const d=(...n)=>n.filter((u,f,x)=>!!u&&x.indexOf(u)===f).join(" ");Me();var p=Ha();de(p,(n,u)=>({...Sa,...s,width:t(),height:t(),stroke:l(),"stroke-width":n,class:u}),[()=>(U(h()),U(i()),U(t()),Ne(()=>h()?Number(i())*24/Number(t()):i())),()=>(U(o()),U(a),Ne(()=>d("lucide-icon","lucide",o()?`lucide-${o()}`:"",a.class)))]);var $=g(p);me($,1,v,fe,(n,u)=>{var f=qe(()=>da(E(u),2));let x=()=>E(f)[0],w=()=>E(f)[1];var y=H(),M=P(y);Qe(M,x,!0,(A,c)=>{de(A,()=>({...w()}))}),b(n,y)});var N=C($);j(N,e,"default",{}),m(p),b(r,p),te()}function qa(r,e){const a=T(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];D(r,V({name:"arrow-left"},()=>a,{get iconNode(){return s},children:(o,l)=>{var t=H(),i=P(t);j(i,e,"default",{}),b(o,t)},$$slots:{default:!0}}))}function Ta(r,e){const a=T(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"m6 9 6 6 6-6"}]];D(r,V({name:"chevron-down"},()=>a,{get iconNode(){return s},children:(o,l)=>{var t=H(),i=P(t);j(i,e,"default",{}),b(o,t)},$$slots:{default:!0}}))}function Ia(r,e){const a=T(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];D(r,V({name:"file-text"},()=>a,{get iconNode(){return s},children:(o,l)=>{var t=H(),i=P(t);j(i,e,"default",{}),b(o,t)},$$slots:{default:!0}}))}function Wa(r,e){const a=T(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]];D(r,V({name:"flask-conical"},()=>a,{get iconNode(){return s},children:(o,l)=>{var t=H(),i=P(t);j(i,e,"default",{}),b(o,t)},$$slots:{default:!0}}))}function Ae(r,e){const a=T(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]];D(r,V({name:"paw-print"},()=>a,{get iconNode(){return s},children:(o,l)=>{var t=H(),i=P(t);j(i,e,"default",{}),b(o,t)},$$slots:{default:!0}}))}function Qa(r,e){const a=T(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M13 2a9 9 0 0 1 9 9"}],["path",{d:"M13 6a5 5 0 0 1 5 5"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];D(r,V({name:"phone-call"},()=>a,{get iconNode(){return s},children:(o,l)=>{var t=H(),i=P(t);j(i,e,"default",{}),b(o,t)},$$slots:{default:!0}}))}function ja(r,e){const a=T(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]];D(r,V({name:"stethoscope"},()=>a,{get iconNode(){return s},children:(o,l)=>{var t=H(),i=P(t);j(i,e,"default",{}),b(o,t)},$$slots:{default:!0}}))}function Va(r,e){const a=T(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]];D(r,V({name:"syringe"},()=>a,{get iconNode(){return s},children:(o,l)=>{var t=H(),i=P(t);j(i,e,"default",{}),b(o,t)},$$slots:{default:!0}}))}function Da(r,e){const a=T(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const s=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];D(r,V({name:"user"},()=>a,{get iconNode(){return s},children:(o,l)=>{var t=H(),i=P(t);j(i,e,"default",{}),b(o,t)},$$slots:{default:!0}}))}var Fa=S('<div class="flex h-full flex-col items-center text-center"><div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white"><!></div> <h3 class="text-lg font-semibold text-gray-800"> </h3> <p class="text-sm text-black"> </p></div>'),La=S('<div class="py-6"><!> <section class="bg-transparent text-center"><div class="mx-2 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6 lg:m-auto"></div></section></div>');function Oa(r){const e=[{icon:ja,titulo:"Consultas a domicilio",descripcion:"Medicina general y de especialidad a domicilio"},{icon:Va,titulo:"Vacunas a domicilio",descripcion:"Anuales, gatitos y cachorros"},{icon:Wa,titulo:"Laboratorio",descripcion:"Sangre, orina."},{icon:Qa,titulo:"Teleconsultas",descripcion:"Con 1 o 2 horas de anticipación."},{icon:Da,titulo:"Eutanasia",descripcion:"Dormimos tu mascota en su casa"},{icon:Ia,titulo:"Certificados de viaje",descripcion:"Para viajar al extranjero sin agobios"}];var a=La(),s=g(a);he(s,{title:"Servicios"});var o=C(s,2),l=g(o);me(l,5,()=>e,fe,(t,i)=>{var h=Fa(),v=g(h),d=g(v);E(i).icon(d,{class:"h-7 w-7"}),m(v);var p=C(v,2),$=g(p,!0);m(p);var N=C(p,2),n=g(N,!0);m(N),m(h),Q(()=>{q($,E(i).titulo),q(n,E(i).descripcion)}),b(t,h)}),m(l),m(o),m(a),b(r,a)}var Ra=S(`<section class="w-full bg-white px-6 py-6 md:px-12 lg:px-24"><div class="mx-auto max-w-6xl"><!> <div class="grid items-center gap-10 md:grid-cols-2"><div class="text-base leading-relaxed text-gray-700"><p class="mb-4">¡Hola! Soy <span class="font-semibold"> </span> </p> <p class="mb-4">Creé este servicio de <span class="font-semibold">veterinaria móvil</span> para que tu compañero reciba atención de calidad <span class="font-semibold">sin salir de casa</span>, en un ambiente
          tranquilo y sin estrés.</p> <p class="mb-4">Mi objetivo es ofrecer una atención personalizada, basada en el
          cariño, la paciencia y la prevención. Creo que cada mascota es única y
          merece ser tratada con respeto, empatía y dedicación.</p> <p class="mt-4 font-semibold text-gray-900">Cuidar de ellos no es solo mi trabajo, <span class="text-pink-600">es mi vocación ❤️</span></p></div> <div class="flex transform justify-center overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:scale-102"><img alt="Veterinaria con gato" class="max-h-[400px] w-full rounded-2xl object-cover shadow-lg" loading="lazy"/></div></div></div></section>`);function Ba(r,e){let a=k(e,"nombre",3,"NOMADE"),s=k(e,"anios",3,"10");const o="/images/nomade_waw.png";var l=Ra(),t=g(l),i=g(t);he(i,{title:"¿Quiénes somos?"});var h=C(i,2),v=g(h),d=g(v),p=C(g(d)),$=g(p,!0);m(p);var N=C(p);m(d),ue(6),m(v);var n=C(v,2),u=g(n);Y(u,"src",o),m(n),m(h),m(t),m(l),Q(()=>{q($,a()),q(N,`, médica
          veterinaria con pasión por los animales y más de ${s()??""} años de experiencia
          en el cuidado de mascotas.`)}),b(r,l)}var Ua=()=>{We.set(!1)},Ya=S('<div class="mt-2 leading-relaxed text-gray-600"><p> </p></div>'),Za=S('<div class="p-4 "><button class="cursor-pointer flex w-full items-center justify-between text-left text-lg font-semibold text-gray-800 transition-colors hover:text-green-700"><span> </span> <!></button> <!></div>'),Ga=S('<section class="mx-auto max-w-3xl px-4 py-10"><button class="mb-6 flex cursor-pointer items-center gap-2 transition-colors hover:text-green-900"><!> <span class="font-medium">Volver al inicio</span></button> <h2 class="mb-8 text-center text-3xl font-extrabold">Preguntas Frecuentes</h2> <div class="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-md"></div></section>');function Ja(r,e){ae(e,!1);let a=[{question:"¿Cómo funciona el servicio de veterinaria a domicilio?",answer:"Nos trasladamos hasta tu casa para atender a tu mascota en su ambiente. Solo necesitás agendar un turno por WhatsApp o desde nuestra web."},{question:"¿Qué zonas cubren?",answer:"Atendemos en distintas zonas de la ciudad y alrededores. Consultanos si estás cerca y vemos si podemos llegar."},{question:"¿Qué servicios realizan a domicilio?",answer:"Consultas clínicas, vacunación, desparasitación, controles de rutina, asesoramiento y urgencias leves."},{question:"¿Atienden urgencias?",answer:"Sí, atendemos urgencias leves. En casos graves te orientaremos al centro veterinario más cercano disponible."},{question:"¿Qué necesito tener preparado para la visita?",answer:"Un espacio tranquilo donde tu mascota se sienta cómoda, su libreta sanitaria y cualquier estudio previo que tengas."},{question:"¿Qué formas de pago aceptan?",answer:"Efectivo, transferencia y tarjeta (a través de link de pago o lector móvil)."}],s=ke(null);const o=v=>{ua(s,E(s)===v?null:v)};Me();var l=Ga(),t=g(l);t.__click=[Ua];var i=g(t);qa(i,{class:"h-5 w-5"}),ue(2),m(t);var h=C(t,4);me(h,5,()=>a,fe,(v,d,p)=>{var $=Za(),N=g($);N.__click=()=>o(p);var n=g(N),u=g(n,!0);m(n);var f=C(n,2);{let y=Ce(()=>`h-5 w-5 transition-transform duration-300 ${E(s)===p?"rotate-180 text-green-700":"text-gray-500"}`);Ta(f,{get class(){return E(y)}})}m(N);var x=C(N,2);{var w=y=>{var M=Ya(),A=g(M),c=g(A,!0);m(A),m(M),Q(()=>q(c,E(d).answer)),xa(3,M,()=>_a),b(y,M)};K(x,y=>{E(s)===p&&y(w)})}m($),Q(()=>{Y(N,"aria-expanded",E(s)===p),q(u,E(d).question)}),b(v,$)}),m(h),m(l),b(r,l),te()}va(["click"]);var Ka=S("<!> <!> <!> <!>",1),Xa=S("<div><section><!> <!> <!></section></div>");function it(r){const e=()=>J(ma,"$deviceWidth",o),a=()=>J(Ie,"$isPhone",o),s=()=>J(We,"$showFreqQues",o),[o,l]=Te();var t=Xa(),i=g(t),h=g(i);{var v=n=>{Ae(n,{class:"pointer-events-none absolute top-25 left-5 -z-10 h-48 w-48 text-green-300 opacity-20","aria-hidden":"true"})};K(h,n=>{a()||n(v)})}var d=C(h,2);Ae(d,{class:" pointer-events-none absolute right-16 bottom-20 -z-10 h-64 w-64 text-green-200 opacity-15","aria-hidden":"true"});var p=C(d,2);{var $=n=>{Ja(n,{})},N=n=>{var u=Ka(),f=P(u);Ea(f,{});var x=C(f,2);Oa(x);var w=C(x,2);Ba(w,{});var y=C(w,2);Pa(y,{}),b(n,u)};K(p,n=>{s()?n($):n(N,!1)})}m(i),m(t),Q(()=>$a(t,1,`max-w-[${e()}px] mb-32`)),b(r,t),l()}export{it as component};
