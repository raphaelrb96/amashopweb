(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{6167:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return a},default:function(){return i}});var n,r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){var t=e.type,n=e.props,o=document.createElement(t);for(var a in n)if(n.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==n[a]){var i=r[a]||a.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[a]:o.setAttribute(i,n[a])}var u=n.children,c=n.dangerouslySetInnerHTML;return c?o.innerHTML=c.__html||"":u&&(o.textContent="string"==typeof u?u:Array.isArray(u)?u.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){var n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){var r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:function(e){var t={};e.forEach(function(e){if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}var n=t[e.type]||[];n.push(e),t[e.type]=n});var r=t.title?t.title[0]:null,o="";if(r){var a=r.props.children;o="string"==typeof a?a:Array.isArray(a)?a.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(function(e){n(e,t[e]||[])})}}}n=function(e,t){for(var n,r=document.getElementsByTagName("head")[0],i=r.querySelector("meta[name=next-head-count]"),u=Number(i.content),c=[],l=0,d=i.previousElementSibling;l<u;l++,d=(null==d?void 0:d.previousElementSibling)||null)(null==d?void 0:null==(n=d.tagName)?void 0:n.toLowerCase())===e&&c.push(d);var s=t.map(o).filter(function(e){for(var t=0,n=c.length;t<n;t++)if(a(c[t],e))return c.splice(t,1),!1;return!0});c.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(function(e){return r.insertBefore(e,i)}),i.content=(u-c.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7986),o=n(4978),a=n(8344),i=n(3435);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return g},initScriptLoader:function(){return m},default:function(){return E}});var u=n(6927),c=n(5909),l=u._(n(8431)),d=c._(n(6006)),s=n(5415),f=n(6167),p=n(1722),v=new Map,y=new Set,h=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],_=function(e){var t=e.src,n=e.id,r=e.onLoad,o=void 0===r?function(){}:r,i=e.onReady,u=void 0===i?null:i,c=e.dangerouslySetInnerHTML,l=e.children,d=void 0===l?"":l,s=e.strategy,p=void 0===s?"afterInteractive":s,_=e.onError,g=n||t;if(!(g&&y.has(g))){if(v.has(t)){y.add(g),v.get(t).then(o,_);return}var m=function(){u&&u(),y.add(g)},b=document.createElement("script"),E=new Promise(function(e,t){b.addEventListener("load",function(t){e(),o&&o.call(this,t),m()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){_&&_(e)});c?(b.innerHTML=c.__html||"",m()):d?(b.textContent="string"==typeof d?d:Array.isArray(d)?d.join(""):"",m()):t&&(b.src=t,v.set(t,E));var L=!0,M=!1,S=void 0;try{for(var I,w=Object.entries(e)[Symbol.iterator]();!(L=(I=w.next()).done);L=!0){var A=a._(I.value,2),O=A[0],j=A[1];if(!(void 0===j||h.includes(O))){var C=f.DOMAttributeNames[O]||O.toLowerCase();b.setAttribute(C,j)}}}catch(e){M=!0,S=e}finally{try{L||null==w.return||w.return()}finally{if(M)throw S}}"worker"===p&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",p),document.body.appendChild(b)}};function g(e){var t=e.strategy;"lazyOnload"===(void 0===t?"afterInteractive":t)?window.addEventListener("load",function(){(0,p.requestIdleCallback)(function(){return _(e)})}):_(e)}function m(e){e.forEach(g),i._(document.querySelectorAll('[data-nscript="beforeInteractive"]')).concat(i._(document.querySelectorAll('[data-nscript="beforePageRender"]'))).forEach(function(e){var t=e.id||e.getAttribute("src");y.add(t)})}function b(e){var t=e.id,n=e.src,a=void 0===n?"":n,i=e.onLoad,u=e.onReady,c=void 0===u?null:u,f=e.strategy,v=void 0===f?"afterInteractive":f,h=e.onError,g=o._(e,["id","src","onLoad","onReady","strategy","onError"]),m=(0,d.useContext)(s.HeadManagerContext),b=m.updateScripts,E=m.scripts,L=m.getIsSsr,M=m.appDir,S=m.nonce,I=(0,d.useRef)(!1);(0,d.useEffect)(function(){var e=t||a;I.current||(c&&e&&y.has(e)&&c(),I.current=!0)},[c,t,a]);var w=(0,d.useRef)(!1);if((0,d.useEffect)(function(){!w.current&&("afterInteractive"===v?_(e):"lazyOnload"===v&&("complete"===document.readyState?(0,p.requestIdleCallback)(function(){return _(e)}):window.addEventListener("load",function(){(0,p.requestIdleCallback)(function(){return _(e)})})),w.current=!0)},[e,v]),("beforeInteractive"===v||"worker"===v)&&(b?(E[v]=(E[v]||[]).concat([r._({id:t,src:a,onLoad:void 0===i?function(){}:i,onReady:c,onError:h},g)]),b(E)):L&&L()?y.add(t||a):L&&!L()&&_(e)),M){if("beforeInteractive"===v)return a?(l.default.preload(a,g.integrity?{as:"script",integrity:g.integrity}:{as:"script"}),d.default.createElement("script",{nonce:S,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([a])+")"}})):(g.dangerouslySetInnerHTML&&(g.children=g.dangerouslySetInnerHTML.__html,delete g.dangerouslySetInnerHTML),d.default.createElement("script",{nonce:S,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,r._({},g)])+")"}}));"afterInteractive"===v&&a&&l.default.preload(a,g.integrity?{as:"script",integrity:g.integrity}:{as:"script"})}return null}Object.defineProperty(b,"__nextScript",{value:!0});var E=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6341:function(e,t,n){e.exports=n(6642)}}]);