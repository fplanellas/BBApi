(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,i){"use strict";i.r(e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=o.get(this.cssText);return s&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,n)},l=(t,e)=>{s?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",n))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var d;const c=window.trustedTypes,p=c?c.emptyScript:"",u=window.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:v};class $ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=m){var s,n;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:g.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var i,s,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:g.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,e)=>this[e]=t),this._$Et=void 0);let e=!1;const i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach((t,e)=>this._$ES(e,this[e],t)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:$}),(null!==(d=globalThis.reactiveElementVersions)&&void 0!==d?d:globalThis.reactiveElementVersions=[]).push("1.0.2");const f=globalThis.trustedTypes,y=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,A="?"+b,x=`<${A}>`,w=document,E=(t="")=>w.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,k=t=>{var e;return C(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,H=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,R=/'/g,B=/"/g,I=/^(?:script|style|textarea)$/i,M=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),N=M(1),L=(M(2),Symbol.for("lit-noChange")),O=Symbol.for("lit-nothing"),z=new WeakMap,D=(t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new K(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r},j=w.createTreeWalker(w,129,null,!1),V=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,null!==(l=r.exec(i)));)d=r.lastIndex,r===T?"!--"===l[1]?r=U:void 0!==l[1]?r=H:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=P):void 0!==l[3]&&(r=P):r===P?">"===l[0]?(r=null!=n?n:T,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?P:'"'===l[3]?B:R):r===B||r===R?r=P:r===U||r===H?r=T:(r=P,n=void 0);const c=r===P&&t[e+1].startsWith("/>")?" ":"";o+=r===T?i+x:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+b+c):i+b+(-2===h?(s.push(void 0),e):c)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==y?y.createHTML(a):a,s]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=V(t,e);if(this.el=W.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=j.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?Q:"@"===e[1]?X:Z})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(I.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],E()),j.nextNode(),a.push({type:2,index:++n});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===A)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)a.push({type:7,index:n}),t+=b.length-1}n++}}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,s){var n,o,r,a;if(e===L)return e;let l=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const h=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t))._$AT(t,i,s),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,s)),e}class J{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(i,!0);j.currentNode=n;let o=j.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new K(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Y(o,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=j.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),S(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==L&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):k(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==O&&S(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=W.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new J(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new W(t)),e}M(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new K(this.A(E()),this.A(E()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,s,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=q(this,t,e,0),(o=!S(t)||t!==this._$AH&&t!==L)&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)(a=q(this,s[i+r],e,r))===L&&(a=this._$AH[r]),o||(o=!S(a)||a!==this._$AH[r]),a===O?t=O:t!==O&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.k(t)}k(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends Z{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===O?void 0:t}}const G=f?f.emptyScript:"";class Q extends Z{constructor(){super(...arguments),this.type=4}k(t){t&&t!==O?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class X extends Z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:O)===L)return;const s=this._$AH,n=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==O&&(s===O||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const tt=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et,it;null==tt||tt(W,K),(null!==(_=globalThis.litHtmlVersions)&&void 0!==_?_:globalThis.litHtmlVersions=[]).push("2.0.2");class st extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=D(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return L}}st.finalized=!0,st._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:st});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:st});(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");customElements.define("get-search",class extends st{render(){return N`
            <div class="buscador">
                <input id="searchId" type="search" name="buscar" value="">         
                <input @click="${this.search}"type="submit" value="Buscar">
            </div>
        `}search(){let t=this.shadowRoot.getElementById("searchId").value;this.dispatchEvent(new CustomEvent("SearchData",{bubbles:!0,composed:!0,detail:{data:t}}))}});customElements.define("get-apidata",class extends st{static get styles(){return a`
            :host {
                display: block;
                width: 100%;
                font-family: sans-serif;
            }

            input {
                border: 1px solid #9b9b9b;
                width: 500px;
                height: 30px;
                border-radius: 12px;
                margin-right: 8px;
                padding: 0 15px;
            }

            .buscador {
                position: absolute;
                right: 0;
                left: 0;
                margin: auto;
                top: 120px;
                display: flex;
                justify-content: center;
            }

            `}static get properties(){return{url:{type:String},method:{type:String}}}firstUpdated(){this.getData()}render(){return N`
            <div class="buscador">
                <input id="searchId" type="search" name="buscar" @input="${this.getData}">
                ${this.getIcon()}
            </div>
        `}_sedData(t){this.dispatchEvent(new CustomEvent("ApiData",{bubbles:!0,composed:!0,detail:{data:t}}))}getData(){fetch(this.url,{method:this.method}).then(t=>t.ok?t.json():Promise.reject(t)).then(t=>{let e=this.shadowRoot.getElementById("searchId").value,i=t.filter(t=>-1!=t.name.toLowerCase().indexOf(e));this._sedData(i)}).catch(t=>{console.warn("Something went wrong",t)})}getIcon(){return N`
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#9b9b9b"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg
        `}});customElements.define("fopc-breakingbad",class extends st{static get styles(){return a`
            :host {
                display: block;
                width: 100%;
                font-family: sans-serif;
            }

            h1 {
                display: flex;
                justify-content: center;
                margin-bottom: 45px;
            }

            h1 img {
                width: 150px;
            }

            article {
                display: grid;
                gap: 1rem;
                grid-auto-flow: dense;
                grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
                text-align: center;
                padding: 15px;
                padding-top:0;
                margin: 0 130px;
                position: relative;
            }

            .character-container{
                padding: 10px;
                height: 220px;
                overflow: hidden;
            }

            .character-container div {
                height: 90%;
                padding: 10px;
                position: relative;             
                transition: box-shadow 500ms;
                border: 1px solid transparent;
            }

            .character-container .character-content {
                cursor: pointer;
            }

            .character-container .character-content:hover {
                box-shadow: rgba(0, 0, 0, 3) 0px 3px 10px;
                border: 1px solid silver;
                transition: box-shadow 500ms;
            }

            .character-container h2 {
                background: rgba(255, 255, 255, 0.5);
                text-align: center;
                font-size: 20px;
                margin:0;
            }

            span.hidden {
                width: auto;
                margin-right: 8px;
            }

            .character-container .details {
                background: rgba(0, 0, 0, 0.6);
                color: #e0e0e0;
                text-align: center;
                width: 98%;
                height: 17px;
                position: absolute;
                bottom:0;
                margin:0 -10px;
                padding: 1px 0 10px;             
            }

            .character-container p {
                margin: 6px 0;
                font-size: 12px;
                font-weight: normal;
                display: inline-flex;
            }

            span {
                font-weight: bold;
                color: #565656;
            }

            .character-container.character-detail{
                position: absolute;
                right: 0;
                left: 0;
                margin: auto;
                top: -60px;
                background: transparent);
                opacity: 0;
                transition: opacity 500ms;
                width:97%;
                height:590px; 
                padding: 15px;   
                box-sizing: border-box;          
            }

            .character-container.character-detail .character-content {   
                cursor: auto;            
                background: rgba(240,240,240)!important;              
                box-shadow: rgba(0, 0, 0, 3) 0px 3px 10px;
                display: flex;
                color: #565656;
            }

            .character-container .hidden {
                display: none
            }

            .character-container.character-detail .hidden {
                display: block;
            }

            .character-detail .detail-container {
                display: flex;
                flex-direction: column;
                width: 60%;
    
            }

            .character-container.character-detail .details {
                background: transparent;
                color: #565656;
                text-align: left;
                position: relative;
                padding: 8px 0 8px 15px;;  
                display: flex;
                flex-direction: column;                          
            }
            .character-container.character-detail .details p{
                font-size: 15px;  
            }

            .character-detail .detail-container h2 {                
                display: inline-flex;
                height: 40px;
                text-align: left;
                background: transparent;
                font-size: 25px
            }

            .character-container.character-detail div img {
                width: 350px;
                height: auto;
            }

            .character-container .iconClose {
                position: absolute;
                right: 10px;
                top: 10px;
                cursor: pointer;
                z-index: 100;
                transition: background 500ms;
            }

            .pagination {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                
            }

            .pagination button {
                margin: 0 5px;
                padding: 4px 10px;
                border-radius: 6px;
                background: transparent;
                border: 0;
                cursor: pointer;
                transition: box-shadow 500ms;
            }
            .pagination button:hover {
                box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 6px;
                transition: box-shadow 500ms;
            }

            .pagination button.active {
                border: 1px solid #9b9b9b;
                background: #f8f8f8;
            }

        `}static get properties(){return{wiki:{type:Array},url:{type:String},search:{type:String}}}constructor(){super(),this.search="",this.url="https://breakingbadapi.com/api/characters",this.wiki=[],this.addEventListener("ApiData",t=>{this._pagination(t.detail.data)})}_paintingData(t){let e=[];t.map(t=>{e.push({img:t.img,name:t.name,nickname:t.nickname,status:t.status,id:t.char_id,birthday:t.birthday,portrayed:t.portrayed,occupation:t.occupation})}),this.wiki=e}render(){return N`
            <h1><img src="./img/pngegg.png"></h1>
            <div class="pagination" id="paginationId"></div>
            <get-apidata url="${this.url}"  ></get-apidata>  
            <article id="BBContent">                
                ${this.dataTemplate} 
            </article>         
                
        `}_pagination(t){this.shadowRoot.getElementById("paginationId");let e=1,i=(t,e,i)=>{let s=e*--i,n=s+e,o=t.slice(s,n);this._paintingData(o)},s=(t,s)=>{let n=this.shadowRoot.getElementById("paginationId"),o=document.createElement("button");o.innerText=t,n.appendChild(o),e==t?o.classList.add("active"):o.classList.remove("mystyle"),o.addEventListener("click",()=>{i(s,10,e=t),this.shadowRoot.querySelector("button.active").classList.remove("active"),o.classList.add("active")})};i(t,10,e),((t,e)=>{this.shadowRoot.getElementById("paginationId").innerHTML="";let i=Math.ceil(t.length/e);for(let e=1;e<i+1;e++)s(e,t)})(t,10)}cloneDiv(t){let e=t.path[2].id,i=this.shadowRoot.getElementById(e).cloneNode(!0);i.classList.add("character-detail"),this.shadowRoot.getElementById("BBContent").appendChild(i),i.setAttribute("id","cloned");let s=document.createElement("div");s.classList.add("iconClose"),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',this.shadowRoot.getElementById("cloned").appendChild(s),this.shadowRoot.getElementById("cloned").addEventListener("click",()=>{this.removeDiv()}),setTimeout(()=>{i.style.opacity="1"},1)}removeDiv(){let t=this.shadowRoot.getElementById("BBContent"),e=this.shadowRoot.getElementById("cloned");setTimeout(()=>{e.style.opacity="0"},1),setTimeout(()=>{t.removeChild(e)},500)}get dataTemplate(){return N`
            ${this.wiki.map(t=>N`           
                <div class="character-container" id="${t.id}" >               
                    <div class="character-content" @click=${this.cloneDiv} style="background: transparent url('${t.img}') no-repeat center top; background-size: cover">                                     
                    <img class="hidden" src="${t.img}" > 
                        <div class="detail-container">
                            <h2><span class="hidden">Name: </span>${t.name}</h2>
                            <div class="details">
                                <p><span class="hidden">Nickname: </span>${t.nickname}</p>
                                <p class="hidden"><span>Status: </span>${t.status}</p>
                                <p class="hidden"><span>Occupation: </span> ${t.occupation} </p>
                                <p  class="hidden"><span>Birthday: </span>${t.birthday}</p>
                                <p  class="hidden"><span>Interpreted by: </span>${t.portrayed}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `)}
        `}})}],[[0,1]]]);