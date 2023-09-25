"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{8050:function(e,t,r){r.d(t,{IO:function(){return nQ},PL:function(){return n0},Xo:function(){return nW},ad:function(){return nR},b9:function(){return nX},hJ:function(){return nb}});var n,s,i,a=r(9452),o=r(1715),l=r(4277),u=r(7365),h=r(4923);r(2040);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="9.1.0",f=new l.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=l.in.DEBUG){let r=t.map(w);f.debug(`Firestore (${d}): ${e}`,...r)}}function p(e,...t){if(f.logLevel<=l.in.ERROR){let r=t.map(w);f.error(`Firestore (${d}): ${e}`,...r)}}function y(e,...t){if(f.logLevel<=l.in.WARN){let r=t.map(w);f.warn(`Firestore (${d}): ${e}`,...r)}}function w(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class N{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),s=new I;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new I,e.enqueueRetryable(()=>n(this.currentUser))};let i=()=>{let t=s;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{g("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new I)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||E(),new S(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||E(),new c(e)}}class _{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){let e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class D{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new _(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */C.T=-1;class b{static I(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let s=0;s<n.length;++s)r.length<20&&n[s]<t&&(r+=e.charAt(n[s]%e.length))}return r}}function k(e,t){return e<t?-1:e>t?1:0}function L(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return R.fromMillis(Date.now())}static fromDate(e){return R.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new R(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?k(this.nanoseconds,e.nanoseconds):k(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new R(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function F(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,r){void 0===t?t=0:t>e.length&&E(),void 0===r?r=e.length-t:r>e.length-t&&E(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===M.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof M?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),s=t.get(n);if(r<s)return -1;if(r>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends M{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new T(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new O(t)}static emptyPath(){return new O([])}}let U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends M{construct(e,t,r){return new P(e,t,r)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new P(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,s=()=>{if(0===r.length)throw new T(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},i=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new T(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?(i=!i,n++):"."!==t||i?(r+=t,n++):(s(),n++)}if(s(),i)throw new T(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new P(t)}static emptyPath(){return new P([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new q(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new q(t)}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return k(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}q.EMPTY_BYTE_STRING=new q("");let B=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function K(e){if(e||E(),"string"==typeof e){let t=0,r=B.exec(e);if(r||E(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:z(e.seconds),nanos:z(e.nanos)}}function z(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function G(e){return"string"==typeof e?q.fromBase64String(e):q.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function H(e){let t=K(e.mapValue.fields.__local_write_time__.timestampValue);return new R(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){return null==e}function j(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(O.fromString(e))}static fromName(e){return new W(O.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===O.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new O(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$(e)?4:10:E()}function X(e,t){let r=Y(e);if(r!==Y(t))return!1;switch(r){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return H(e).isEqual(H(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=K(e.timestampValue),n=K(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return G(e.bytesValue).isEqual(G(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return z(e.geoPointValue.latitude)===z(t.geoPointValue.latitude)&&z(e.geoPointValue.longitude)===z(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return z(e.integerValue)===z(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=z(e.doubleValue),n=z(t.doubleValue);return r===n?j(r)===j(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],X);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(x(r)!==x(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!X(r[e],n[e])))return!1;return!0}(e,t);default:return E()}}function J(e,t){return void 0!==(e.values||[]).find(e=>X(e,t))}function Z(e,t){let r=Y(e),n=Y(t);if(r!==n)return k(r,n);switch(r){case 0:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=z(e.integerValue||e.doubleValue),n=z(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return ee(e.timestampValue,t.timestampValue);case 4:return ee(H(e),H(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(e,t){let r=G(e),n=G(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=k(r[e],n[e]);if(0!==t)return t}return k(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=k(z(e.latitude),z(t.latitude));return 0!==r?r:k(z(e.longitude),z(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=Z(r[e],n[e]);if(t)return t}return k(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){let r=e.fields||{},n=Object.keys(r),s=t.fields||{},i=Object.keys(s);n.sort(),i.sort();for(let e=0;e<n.length&&e<i.length;++e){let t=k(n[e],i[e]);if(0!==t)return t;let a=Z(r[n[e]],s[i[e]]);if(0!==a)return a}return k(n.length,i.length)}(e.mapValue,t.mapValue);default:throw E()}}function ee(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return k(e,t);let r=K(e),n=K(t),s=k(r.seconds,n.seconds);return 0!==s?s:k(r.nanos,n.nanos)}function et(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=K(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?G(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,W.fromName(r).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=et(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let s of t)n?n=!1:r+=",",r+=`${s}:${et(e.fields[s])}`;return r+"}"}(e.mapValue):E()}function er(e){return!!e&&"integerValue"in e}function en(e){return!!e&&"arrayValue"in e}function es(e){return!!e&&"nullValue"in e}function ei(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ea(e){return!!e&&"mapValue"in e}function eo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return F(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eo(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=eo(e.arrayValue.values[r]);return t}return Object.assign({},e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.value=e}static empty(){return new el({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!ea(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(t)}setAll(e){let t=P.emptyPath(),r={},n=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=s.popLast()}e?r[s.lastSegment()]=eo(e):n.push(s.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,n)}delete(e){let t=this.field(e.popLast());ea(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return X(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];ea(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(F(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new el(eo(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,r,n,s){this.key=e,this.documentType=t,this.version=r,this.data=n,this.documentState=s}static newInvalidDocument(e){return new eu(e,0,V.min(),el.empty(),0)}static newFoundDocument(e,t,r){return new eu(e,1,t,r,0)}static newNoDocument(e,t){return new eu(e,2,t,el.empty(),0)}static newUnknownDocument(e,t){return new eu(e,3,t,el.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=el.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=el.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new eu(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t=null,r=[],n=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=s,this.startAt=i,this.endAt=a,this.A=null}}function ec(e,t=null,r=[],n=[],s=null,i=null,a=null){return new eh(e,t,r,n,s,i,a)}function ed(e){if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>e.field.canonicalString()+e.op.toString()+et(e.value)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),Q(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+eN(e.startAt)),e.endAt&&(t+="|ub:"+eN(e.endAt)),e.A=t}return e.A}function ef(e,t){var r,n,s,i;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(s=e.orderBy[r],i=t.orderBy[r],!(s.dir===i.dir&&s.field.isEqual(i.field)))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(r=e.filters[s],n=t.filters[s],r.op!==n.op||!r.field.isEqual(n.field)||!X(r.value,n.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eC(e.startAt,t.startAt)&&eC(e.endAt,t.endAt)}function em(e){return W.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class eg extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,r):new ep(e,t,r):"array-contains"===t?new ev(e,r):"in"===t?new eT(e,r):"not-in"===t?new eI(e,r):"array-contains-any"===t?new eS(e,r):new eg(e,t,r)}static R(e,t,r){return"in"===t?new ey(e,r):new ew(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(Z(t,this.value)):null!==t&&Y(this.value)===Y(t)&&this.P(Z(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return E()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ep extends eg{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){let t=W.comparator(e.key,this.key);return this.P(t)}}class ey extends eg{constructor(e,t){super(e,"in",t),this.keys=eE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ew extends eg{constructor(e,t){super(e,"not-in",t),this.keys=eE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eE(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>W.fromName(e.referenceValue))}class ev extends eg{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return en(t)&&J(t.arrayValue,this.value)}}class eT extends eg{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&J(this.value.arrayValue,t)}}class eI extends eg{constructor(e,t){super(e,"not-in",t)}matches(e){if(J(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!J(this.value.arrayValue,t)}}class eS extends eg{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!en(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>J(this.value.arrayValue,e))}}class eA{constructor(e,t){this.position=e,this.before=t}}function eN(e){return`${e.before?"b":"a"}:${e.position.map(e=>et(e)).join(",")}`}class e_{constructor(e,t="asc"){this.field=e,this.dir=t}}function eD(e,t,r){let n=0;for(let s=0;s<e.position.length;s++){let i=t[s],a=e.position[s];if(n=i.field.isKeyField()?W.comparator(W.fromName(a.referenceValue),r.key):Z(a,r.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return e.before?n<=0:n<0}function eC(e,t){if(null===e)return null===t;if(null===t||e.before!==t.before||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!X(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t=null,r=[],n=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.V=null,this.S=null,this.startAt,this.endAt}}function ek(e){return!Q(e.limit)&&"F"===e.limitType}function eL(e){return!Q(e.limit)&&"L"===e.limitType}function eR(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function eV(e){for(let t of e.filters)if(t.v())return t.field;return null}function ex(e){if(null===e.V){e.V=[];let t=eV(e),r=eR(e);if(null!==t&&null===r)t.isKeyField()||e.V.push(new e_(t)),e.V.push(new e_(P.keyField(),"asc"));else{let t=!1;for(let r of e.explicitOrderBy)e.V.push(r),r.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new e_(P.keyField(),t))}}}return e.V}function eF(e){if(!e.S){if("F"===e.limitType)e.S=ec(e.path,e.collectionGroup,ex(e),e.filters,e.limit,e.startAt,e.endAt);else{let t=[];for(let r of ex(e)){let e="desc"===r.dir?"asc":"desc";t.push(new e_(r.field,e))}let r=e.endAt?new eA(e.endAt.position,!e.endAt.before):null,n=e.startAt?new eA(e.startAt.position,!e.startAt.before):null;e.S=ec(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}return e.S}function eM(e,t,r){return new eb(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function eO(e,t){return ef(eF(e),eF(t))&&e.limitType===t.limitType}function eU(e){return`${ed(eF(e))}|lt:${e.limitType}`}function eP(e){var t;let r;return`Query(target=${r=(t=eF(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>`${e.field.canonicalString()} ${e.op} ${et(e.value)}`).join(", ")}]`),Q(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+eN(t.startAt)),t.endAt&&(r+=", endAt: "+eN(t.endAt)),`Target(${r})`}; limitType=${e.limitType})`}function eq(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):W.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of e.explicitOrderBy)if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&!(e.startAt&&!eD(e.startAt,ex(e),t)||e.endAt&&eD(e.endAt,ex(e),t))}function eB(e){return(t,r)=>{let n=!1;for(let s of ex(e)){let e=function(e,t,r){let n=e.field.isKeyField()?W.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),s=r.data.field(e);return null!==n&&null!==s?Z(n,s):E()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return E()}}(s,t,r);if(0!==e)return e;n=n||s.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK{constructor(){this._=void 0}}class ez extends eK{}class eG extends eK{constructor(e){super(),this.elements=e}}function e$(e,t){let r=eY(t);for(let t of e.elements)r.some(e=>X(e,t))||r.push(t);return{arrayValue:{values:r}}}class eH extends eK{constructor(e){super(),this.elements=e}}function eQ(e,t){let r=eY(t);for(let t of e.elements)r=r.filter(e=>!X(e,t));return{arrayValue:{values:r}}}class ej extends eK{constructor(e,t){super(),this.N=e,this.C=t}}function eW(e){return z(e.integerValue||e.doubleValue)}function eY(e){return en(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function eX(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class eJ{}function eZ(e,t,r){e instanceof e2?function(e,t,r){if(!eX(e.precondition,t))return;let n=e.value.clone(),s=e8(e.fieldTransforms,r,t);n.setAll(s),t.convertToFoundDocument(e1(t),n).setHasLocalMutations()}(e,t,r):e instanceof e4?function(e,t,r){if(!eX(e.precondition,t))return;let n=e8(e.fieldTransforms,r,t),s=t.data;s.setAll(e3(e)),s.setAll(n),t.convertToFoundDocument(e1(t),s).setHasLocalMutations()}(e,t,r):eX(e.precondition,t)&&t.convertToNoDocument(V.min())}function e0(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&L(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof eG&&n instanceof eG||r instanceof eH&&n instanceof eH?L(r.elements,n.elements,X):r instanceof ej&&n instanceof ej?X(r.C,n.C):r instanceof ez&&n instanceof ez)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function e1(e){return e.isFoundDocument()?e.version:V.min()}class e2 extends eJ{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}}class e4 extends eJ{constructor(e,t,r,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=s,this.type=1}}function e3(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function e6(e,t,r){var n;let s=new Map;e.length===r.length||E();for(let i=0;i<r.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);s.set(a.field,(n=r[i],o instanceof eG?e$(o,l):o instanceof eH?eQ(o,l):n))}return s}function e8(e,t,r){let n=new Map;for(let s of e){let e=s.transform,i=r.data.field(s.field);n.set(s.field,e instanceof ez?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,i):e instanceof eG?e$(e,i):e instanceof eH?eQ(e,i):function(e,t){var r,n;let s=(r=e,n=t,r instanceof ej?er(n)||n&&"doubleValue"in n?n:{integerValue:0}:null),i=eW(s)+eW(e.C);return er(s)&&er(e.C)?{integerValue:""+i}:/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:j(t)?"-0":t}}(e.N,i)}(e,i))}return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e){this.count=e}}function e9(e){if(void 0===e)return p("GRPC error has no .code"),v.UNKNOWN;switch(e){case n.OK:return v.OK;case n.CANCELLED:return v.CANCELLED;case n.UNKNOWN:return v.UNKNOWN;case n.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case n.INTERNAL:return v.INTERNAL;case n.UNAVAILABLE:return v.UNAVAILABLE;case n.UNAUTHENTICATED:return v.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case n.NOT_FOUND:return v.NOT_FOUND;case n.ALREADY_EXISTS:return v.ALREADY_EXISTS;case n.PERMISSION_DENIED:return v.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case n.ABORTED:return v.ABORTED;case n.OUT_OF_RANGE:return v.OUT_OF_RANGE;case n.UNIMPLEMENTED:return v.UNIMPLEMENTED;case n.DATA_LOSS:return v.DATA_LOSS;default:return E()}}(s=n||(n={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e7{constructor(e,t){this.comparator=e,this.root=t||tt.EMPTY}insert(e,t){return new e7(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new e7(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new te(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new te(this.root,e,this.comparator,!1)}getReverseIterator(){return new te(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new te(this.root,e,this.comparator,!0)}}class te{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,t,r,n,s){this.key=e,this.value=t,this.color=null!=r?r:tt.RED,this.left=null!=n?n:tt.EMPTY,this.right=null!=s?s:tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,s){return new tt(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,s=r(e,n.key);return(n=s<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===s?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return tt.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();let e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1,tt.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(e,t,r,n,s){return this}insert(e,t,r){return new tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.comparator=e,this.data=new e7(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tn(this.data.getIterator())}getIteratorFrom(e){return new tn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof tr)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new tr(this.comparator);return t.data=e,t}}class tn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts=new e7(W.comparator),ti=new e7(W.comparator);new e7(W.comparator);let ta=new tr(W.comparator);function to(...e){let t=ta;for(let r of e)t=t.add(r);return t}let tl=new tr(k);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,r,n,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){let r=new Map;return r.set(e,th.createSynthesizedTargetChangeForCurrentChange(e,t)),new tu(V.min(),r,tl,ts,to())}}class th{constructor(e,t,r,n,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new th(q.EMPTY_BYTE_STRING,t,to(),to(),to())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,r,n){this.k=e,this.removedTargetIds=t,this.key=r,this.$=n}}class td{constructor(e,t){this.targetId=e,this.O=t}}class tf{constructor(e,t,r=q.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class tm{constructor(){this.F=0,this.M=ty(),this.L=q.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=to(),t=to(),r=to();return this.M.forEach((n,s)=>{switch(s){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:E()}}),new th(this.L,this.B,e,t,r)}G(){this.U=!1,this.M=ty()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class tg{constructor(e){this.tt=e,this.et=new Map,this.nt=ts,this.st=tp(),this.it=new tr(k)}rt(e){for(let t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.at(t,e.key,e.$);for(let t of e.removedTargetIds)this.at(t,e.key,e.$)}ct(e){this.forEachTarget(e,t=>{let r=this.ut(t);switch(e.state){case 0:this.ht(t)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(t);break;case 3:this.ht(t)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),r.j(e.resumeToken));break;default:E()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((e,r)=>{this.ht(r)&&t(r)})}ft(e){let t=e.targetId,r=e.O.count,n=this.dt(t);if(n){let e=n.target;if(em(e)){if(0===r){let r=new W(e.path);this.at(t,r,eu.newNoDocument(r,V.min()))}else 1===r||E()}else this.wt(t)!==r&&(this.lt(t),this.it=this.it.add(t))}}_t(e){let t=new Map;this.et.forEach((r,n)=>{let s=this.dt(n);if(s){if(r.current&&em(s.target)){let t=new W(s.target.path);null!==this.nt.get(t)||this.gt(n,t)||this.at(n,t,eu.newNoDocument(t,e))}r.K&&(t.set(n,r.W()),r.G())}});let r=to();this.st.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.dt(e);return!t||2===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))});let n=new tu(e,t,this.it,this.nt,r);return this.nt=ts,this.st=tp(),this.it=new tr(k),n}ot(e,t){if(!this.ht(e))return;let r=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,r),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}at(e,t,r){if(!this.ht(e))return;let n=this.ut(e);this.gt(e,t)?n.H(t,1):n.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),r&&(this.nt=this.nt.insert(t,r))}removeTarget(e){this.et.delete(e)}wt(e){let t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new tm,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new tr(k),this.st=this.st.insert(e,t)),t}ht(e){let t=null!==this.dt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}dt(e){let t=this.et.get(e);return t&&t.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new tm),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function tp(){return new e7(W.comparator)}function ty(){return new e7(W.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tw={asc:"ASCENDING",desc:"DESCENDING"},tE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class tv{constructor(e,t){this.databaseId=e,this.D=t}}function tT(e){return e||E(),V.fromTimestamp(function(e){let t=K(e);return new R(t.seconds,t.nanos)}(e))}function tI(e){let t=O.fromString(e);return tL(t)||E(),t}function tS(e,t){let r=tI(t);if(r.get(1)!==e.databaseId.projectId)throw new T(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new T(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new W(t_(r))}function tA(e,t){var r;return r=e.databaseId,new O(["projects",r.projectId,"databases",r.database]).child("documents").child(t).canonicalString()}function tN(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function t_(e){return e.length>4&&"documents"===e.get(4)||E(),e.popFirst(5)}function tD(e){return{before:e.before,values:e.position}}function tC(e){let t=!!e.before,r=e.values||[];return new eA(r,t)}function tb(e){return{fieldPath:e.canonicalString()}}function tk(e){return P.fromServerFormat(e.fieldPath)}function tL(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(e){var t,r;let n="";for(let t=0;t<e.length;t++)n.length>0&&(n+="\x01\x01"),n=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\x00":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(t),n);return n+"\x01\x01"}class tV{constructor(e,t,r){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=r}}tV.store="owner",tV.key="owner";class tx{constructor(e,t,r){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=r}}tx.store="mutationQueues",tx.keyPath="userId";class tF{constructor(e,t,r,n,s){this.userId=e,this.batchId=t,this.localWriteTimeMs=r,this.baseMutations=n,this.mutations=s}}tF.store="mutations",tF.keyPath="batchId",tF.userMutationsIndex="userMutationsIndex",tF.userMutationsKeyPath=["userId","batchId"];class tM{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,tR(t)]}static key(e,t,r){return[e,tR(t),r]}}tM.store="documentMutations",tM.PLACEHOLDER=new tM;class tO{constructor(e,t,r,n,s,i){this.unknownDocument=e,this.noDocument=t,this.document=r,this.hasCommittedMutations=n,this.readTime=s,this.parentPath=i}}tO.store="remoteDocuments",tO.readTimeIndex="readTimeIndex",tO.readTimeIndexPath="readTime",tO.collectionReadTimeIndex="collectionReadTimeIndex",tO.collectionReadTimeIndexPath=["parentPath","readTime"];class tU{constructor(e){this.byteSize=e}}tU.store="remoteDocumentGlobal",tU.key="remoteDocumentGlobalKey";class tP{constructor(e,t,r,n,s,i,a){this.targetId=e,this.canonicalId=t,this.readTime=r,this.resumeToken=n,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=i,this.query=a}}tP.store="targets",tP.keyPath="targetId",tP.queryTargetsIndexName="queryTargetsIndex",tP.queryTargetsKeyPath=["canonicalId","targetId"];class tq{constructor(e,t,r){this.targetId=e,this.path=t,this.sequenceNumber=r}}tq.store="targetDocuments",tq.keyPath=["targetId","path"],tq.documentTargetsIndex="documentTargetsIndex",tq.documentTargetsKeyPath=["path","targetId"];class tB{constructor(e,t,r,n){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=r,this.targetCount=n}}tB.key="targetGlobalKey",tB.store="targetGlobal";class tK{constructor(e,t){this.collectionId=e,this.parent=t}}tK.store="collectionParents",tK.keyPath=["collectionId","parent"];class tz{constructor(e,t,r,n){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=r,this.inForeground=n}}tz.store="clientMetadata",tz.keyPath="clientId";class tG{constructor(e,t,r){this.bundleId=e,this.createTime=t,this.version=r}}tG.store="bundles",tG.keyPath="bundleId";class t${constructor(e,t,r){this.name=e,this.readTime=t,this.bundledQuery=r}}t$.store="namedQueries",t$.keyPath="name",tx.store,tF.store,tM.store,tO.store,tP.store,tV.store,tB.store,tq.store,tz.store,tU.store,tK.store,tG.store,t$.store;class tH{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tQ{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new tQ((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof tQ?t:tQ.resolve(t)}catch(e){return tQ.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):tQ.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):tQ.reject(t)}static resolve(e){return new tQ((t,r)=>{t(e)})}static reject(e){return new tQ((t,r)=>{r(e)})}static waitFor(e){return new tQ((t,r)=>{let n=0,s=0,i=!1;e.forEach(e=>{++n,e.next(()=>{++s,i&&s===n&&t()},e=>r(e))}),i=!0,s===n&&t()})}static or(e){let t=tQ.resolve(!1);for(let r of e)t=t.next(e=>e?tQ.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}}function tj(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tW{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let s=this.mutations[t];if(s.key.isEqual(e.key)){var n;n=r[t],s instanceof e2?function(e,t,r){let n=e.value.clone(),s=e6(e.fieldTransforms,t,r.transformResults);n.setAll(s),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(s,e,n):s instanceof e4?function(e,t,r){if(!eX(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=e6(e.fieldTransforms,t,r.transformResults),s=t.data;s.setAll(e3(e)),s.setAll(n),t.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(s,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e){for(let t of this.baseMutations)t.key.isEqual(e.key)&&eZ(t,e,this.localWriteTime);for(let t of this.mutations)t.key.isEqual(e.key)&&eZ(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{let r=e.get(t.key);this.applyToLocalView(r),r.isValidDocument()||r.convertToNoDocument(V.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),to())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>e0(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>e0(e,t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tY{constructor(e,t,r,n,s=V.min(),i=V.min(),a=q.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(e){return new tY(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new tY(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new tY(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{constructor(e){this.Wt=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tJ{constructor(){this.Gt=new tZ}addToCollectionParentIndex(e,t){return this.Gt.add(t),tQ.resolve()}getCollectionParents(e,t){return tQ.resolve(this.Gt.getEntries(t))}}class tZ{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new tr(O.comparator),s=!n.has(r);return this.index[t]=n.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new tr(O.comparator)).toArray()}}class t0{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new t0(e,t0.DEFAULT_COLLECTION_PERCENTILE,t0.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t0.DEFAULT_COLLECTION_PERCENTILE=10,t0.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,t0.DEFAULT=new t0(41943040,t0.DEFAULT_COLLECTION_PERCENTILE,t0.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),t0.DISABLED=new t0(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new t1(0)}static ie(){return new t1(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(e){if(e.code!==v.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0!==n){for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t])}else this.inner[r]=[[e,t]]}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),!0;return!1}forEach(e){F(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(){this.changes=new t4(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){let t=this.changes.get(e);return t?t.readTime:V.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:eu.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?tQ.resolve(r.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e,t,r){this.He=e,this.In=t,this.Ht=r}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(r=>this.Rn(e,t,r))}Rn(e,t,r){return this.He.getEntry(e,t).next(e=>{for(let t of r)t.applyToLocalView(e);return e})}bn(e,t){e.forEach((e,r)=>{for(let e of t)e.applyToLocalView(r)})}Pn(e,t){return this.He.getEntries(e,t).next(t=>this.vn(e,t).next(()=>t))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.bn(t,e))}getDocumentsMatchingQuery(e,t,r){return W.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.Vn(e,t.path):null!==t.collectionGroup?this.Sn(e,t,r):this.Dn(e,t,r)}Vn(e,t){return this.An(e,new W(t)).next(e=>{let t=ti;return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Sn(e,t,r){let n=t.collectionGroup,s=ti;return this.Ht.getCollectionParents(e,n).next(i=>tQ.forEach(i,i=>{var a;let o=(a=i.child(n),new eb(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.Dn(e,o,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}Dn(e,t,r){let n,s;return this.He.getDocumentsMatchingQuery(e,t,r).next(r=>(n=r,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(s=t,this.Cn(e,s,n).next(e=>{for(let t of(n=e,s))for(let e of t.mutations){let r=e.key,s=n.get(r);null==s&&(s=eu.newInvalidDocument(r),n=n.insert(r,s)),eZ(e,s,t.localWriteTime),s.isFoundDocument()||(n=n.remove(r))}}))).next(()=>(n.forEach((e,r)=>{eq(t,r)||(n=n.remove(e))}),n))}Cn(e,t,r){let n=to();for(let e of t)for(let t of e.mutations)t instanceof e4&&null===r.get(t.key)&&(n=n.add(t.key));let s=r;return this.He.getEntries(e,n).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(s=s.insert(e,t))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t8{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Nn=r,this.xn=n}static kn(e,t){let r=to(),n=to();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new t8(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,r,n){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())||r.isEqual(V.min())?this.Fn(e,t):this.On.Pn(e,n).next(s=>{let i=this.Mn(t,s);return(ek(t)||eL(t))&&this.Ln(t.limitType,i,n,r)?this.Fn(e,t):(m()<=l.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),eP(t)),this.On.getDocumentsMatchingQuery(e,t,r).next(e=>(i.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Mn(e,t){let r=new tr(eB(e));return t.forEach((t,n)=>{eq(e,n)&&(r=r.add(n))}),r}Ln(e,t,r,n){if(r.size!==t.size)return!0;let s="F"===e?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Fn(e,t){return m()<=l.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",eP(t)),this.On.getDocumentsMatchingQuery(e,t,V.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t9{constructor(e,t,r,n){this.persistence=e,this.Bn=t,this.N=n,this.Un=new e7(k),this.qn=new t4(e=>ed(e),ef),this.Kn=V.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new t6(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}async function t7(e,t){let r=e.In,n=e.Qn,s=await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.In.getAllMutationBatches(s).next(a=>(i=a,r=e.persistence.getMutationQueue(t),n=new t6(e.jn,r,e.persistence.getIndexManager()),r.getAllMutationBatches(s))).next(e=>{let t=[],r=[],a=to();for(let e of i)for(let r of(t.push(e.batchId),e.mutations))a=a.add(r.key);for(let t of e)for(let e of(r.push(t.batchId),t.mutations))a=a.add(e.key);return n.Pn(s,a).next(e=>({Wn:e,removedBatchIds:t,addedBatchIds:r}))})});return e.In=r,e.Qn=n,e.Bn.$n(e.Qn),s}function re(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}async function rt(e,t,r){let n=e.Un.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!tj(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.Un=e.Un.remove(t),e.qn.delete(n.target)}function rr(e,t,r){let n=V.min(),s=to();return e.persistence.runTransaction("Execute query","readonly",i=>(function(e,t,r){let n=e.qn.get(r);return void 0!==n?tQ.resolve(e.Un.get(n)):e.ze.getTargetData(t,r)})(e,i,eF(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.ze.getMatchingKeysForTargetId(i,t.targetId).next(e=>{s=e})}).next(()=>e.Bn.getDocumentsMatchingQuery(i,t,r?n:V.min(),r?s:to())).next(e=>({documents:e,Gn:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return tQ.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){return this.Yn.set(t.id,{id:t.id,version:t.version,createTime:tT(t.createTime)}),tQ.resolve()}getNamedQuery(e,t){return tQ.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,n,s,i,a,o,l;let u,h=function(e){let t=tI(e);return 4===t.length?O.emptyPath():t_(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||E();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function e(t){return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=tk(e.unaryFilter.field);return eg.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=tk(e.unaryFilter.field);return eg.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=tk(e.unaryFilter.field);return eg.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=tk(e.unaryFilter.field);return eg.create(s,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(t)]:void 0!==t.fieldFilter?[eg.create(tk(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(t.fieldFilter.op),t.fieldFilter.value)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):E():[]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new e_(tk(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;c.limit&&(p=Q(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=tC(c.startAt));let w=null;return c.endAt&&(w=tC(c.endAt)),r=h,n=f,s=g,i=m,a=p,o=y,l=w,new eb(r,n,s,i,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?eM(t,t.limit,"L"):t}(t.bundledQuery),readTime:tT(t.readTime)}),tQ.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.Zn=new tr(ri.ts),this.es=new tr(ri.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){let r=new ri(e,t);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.rs(new ri(e,t))}os(e,t){e.forEach(e=>this.removeReference(e,t))}cs(e){let t=new W(new O([])),r=new ri(t,e),n=new ri(t,e+1),s=[];return this.es.forEachInRange([r,n],e=>{this.rs(e),s.push(e.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){let t=new W(new O([])),r=new ri(t,e),n=new ri(t,e+1),s=to();return this.es.forEachInRange([r,n],e=>{s=s.add(e.key)}),s}containsKey(e){let t=new ri(e,0),r=this.Zn.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class ri{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return W.comparator(e.key,t.key)||k(e.ls,t.ls)}static ns(e,t){return k(e.ls,t.ls)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new tr(ri.ts)}checkEmpty(e){return tQ.resolve(0===this.In.length)}addMutationBatch(e,t,r,n){let s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];let i=new tW(s,t,r,n);for(let t of(this.In.push(i),n))this.ds=this.ds.add(new ri(t.key,s)),this.Ht.addToCollectionParentIndex(e,t.key.path.popLast());return tQ.resolve(i)}lookupMutationBatch(e,t){return tQ.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){let r=this._s(t+1),n=r<0?0:r;return tQ.resolve(this.In.length>n?this.In[n]:null)}getHighestUnacknowledgedBatchId(){return tQ.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return tQ.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ri(t,0),n=new ri(t,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,n],e=>{let t=this.ws(e.ls);s.push(t)}),tQ.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tr(k);return t.forEach(e=>{let t=new ri(e,0),n=new ri(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,n],e=>{r=r.add(e.ls)})}),tQ.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,s=r;W.isDocumentKey(s)||(s=s.child(""));let i=new ri(new W(s),0),a=new tr(k);return this.ds.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.ls)),!0)},i),tQ.resolve(this.gs(a))}gs(e){let t=[];return e.forEach(e=>{let r=this.ws(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.ys(t.batchId,"removed")||E(),this.In.shift();let r=this.ds;return tQ.forEach(t.mutations,n=>{let s=new ri(n.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,t){let r=new ri(t,0),n=this.ds.firstAfterOrEqual(r);return tQ.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.In.length,tQ.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){let t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new e7(W.comparator),this.size=0}addEntry(e,t,r){let n=t.key,s=this.docs.get(n),i=s?s.size:0,a=this.ps(t);return this.docs=this.docs.insert(n,{document:t.clone(),size:a,readTime:r}),this.size+=a-i,this.Ht.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return tQ.resolve(r?r.document.clone():eu.newInvalidDocument(t))}getEntries(e,t){let r=ts;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.clone():eu.newInvalidDocument(e))}),tQ.resolve(r)}getDocumentsMatchingQuery(e,t,r){let n=ts,s=new W(t.path.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){let{key:e,value:{document:s,readTime:a}}=i.getNext();if(!t.path.isPrefixOf(e.path))break;0>=a.compareTo(r)||eq(t,s)&&(n=n.insert(s.key,s.clone()))}return tQ.resolve(n)}Es(e,t){return tQ.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rl(this)}getSize(e){return tQ.resolve(this.size)}}class rl extends t3{constructor(e){super(),this.Se=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.document.isValidDocument()?t.push(this.Se.addEntry(e,n.document,this.getReadTime(r))):this.Se.removeEntry(r)}),tQ.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.persistence=e,this.Ts=new t4(e=>ed(e),ef),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Is=0,this.As=new rs,this.targetCount=0,this.Rs=t1.se()}forEachTarget(e,t){return this.Ts.forEach((e,r)=>t(r)),tQ.resolve()}getLastRemoteSnapshotVersion(e){return tQ.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return tQ.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),tQ.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Is&&(this.Is=t),tQ.resolve()}ae(e){this.Ts.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Rs=new t1(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,tQ.resolve()}updateTargetData(e,t){return this.ae(t),tQ.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,tQ.resolve()}removeTargets(e,t,r){let n=0,s=[];return this.Ts.forEach((i,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),tQ.waitFor(s).next(()=>n)}getTargetCount(e){return tQ.resolve(this.targetCount)}getTargetData(e,t){let r=this.Ts.get(t)||null;return tQ.resolve(r)}addMatchingKeys(e,t,r){return this.As.ss(t,r),tQ.resolve()}removeMatchingKeys(e,t,r){this.As.os(t,r);let n=this.persistence.referenceDelegate,s=[];return n&&t.forEach(t=>{s.push(n.markPotentiallyOrphaned(e,t))}),tQ.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),tQ.resolve()}getMatchingKeysForTargetId(e,t){let r=this.As.hs(t);return tQ.resolve(r)}containsKey(e,t){return tQ.resolve(this.As.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){var r;this.bs={},this.Le=new C(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new ru(this),this.Ht=new tJ,this.He=(r=this.Ht,new ro(r,e=>this.referenceDelegate.Ps(e))),this.N=new tX(t),this.Je=new rn(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new ra(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,r){g("MemoryPersistence","Starting transaction:",e);let n=new rc(this.Le.next());return this.referenceDelegate.vs(),r(n).next(e=>this.referenceDelegate.Vs(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ss(e,t){return tQ.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,t)))}}class rc extends tH{constructor(e){super(),this.currentSequenceNumber=e}}class rd{constructor(e){this.persistence=e,this.Ds=new rs,this.Cs=null}static Ns(e){return new rd(e)}get xs(){if(this.Cs)return this.Cs;throw E()}addReference(e,t,r){return this.Ds.addReference(r,t),this.xs.delete(r.toString()),tQ.resolve()}removeReference(e,t,r){return this.Ds.removeReference(r,t),this.xs.add(r.toString()),tQ.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),tQ.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(e=>this.xs.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tQ.forEach(this.xs,r=>{let n=W.fromPath(r);return this.ks(e,n).next(e=>{e||t.removeEntry(n)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}Ps(e){return 0}ks(e,t){return tQ.or([()=>tQ.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}class rf{constructor(){this.activeTargetIds=tl}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rm{constructor(){this.yi=new rf,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,r){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new rf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.bi))e(0)}Ri(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.bi))e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,r,n){let s=this.Bi(e,t);g("RestConnection","Sending: ",s,r);let i={};return this.Ui(i,n),this.qi(e,s,i,r).then(e=>(g("RestConnection","Received: ",e),e),t=>{throw y("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",r),t})}Ki(e,t,r,n){return this.Li(e,t,r,n)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(let r in t.authHeaders)t.authHeaders.hasOwnProperty(r)&&(e[r]=t.authHeaders[r])}Bi(e,t){let r=ry[e];return`${this.Fi}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,r,n){return new Promise((s,i)=>{let a=new h.JJ;a.listenOnce(h.tw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case h.jK.NO_ERROR:let t=a.getResponseJson();g("Connection","XHR received:",JSON.stringify(t)),s(t);break;case h.jK.TIMEOUT:g("Connection",'RPC "'+e+'" timed out'),i(new T(v.DEADLINE_EXCEEDED,"Request time out"));break;case h.jK.HTTP_ERROR:let r=a.getStatus();if(g("Connection",'RPC "'+e+'" failed with status:',r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson().error;if(e&&e.status&&e.message){let t=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(t)>=0?t:v.UNKNOWN}(e.status);i(new T(t,e.message))}else i(new T(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else i(new T(v.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{g("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(n);a.send(t,"POST",o,r,15)})}ji(e,t){let r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=(0,h.UE)(),i=(0,h.FJ)(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new h.zI({})),this.Ui(a.initMessageHeaders,t),(0,u.uI)()||(0,u.b$)()||(0,u.d)()||(0,u.w1)()||(0,u.Mn)()||(0,u.ru)()||(a.httpHeadersOverwriteParam="$httpHeaders");let o=r.join("");g("Connection","Creating WebChannel: "+o,a);let l=s.createWebChannel(o,a),c=!1,d=!1,f=new rw({vi:e=>{d?g("Connection","Not sending because WebChannel is closed:",e):(c||(g("Connection","Opening WebChannel transport."),l.open(),c=!0),g("Connection","WebChannel sending:",e),l.send(e))},Vi:()=>l.close()}),m=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(l,h.ii.EventType.OPEN,()=>{d||g("Connection","WebChannel transport opened.")}),m(l,h.ii.EventType.CLOSE,()=>{d||(d=!0,g("Connection","WebChannel transport closed"),f.$i())}),m(l,h.ii.EventType.ERROR,e=>{d||(d=!0,y("Connection","WebChannel transport errored:",e),f.$i(new T(v.UNAVAILABLE,"The operation could not be completed")))}),m(l,h.ii.EventType.MESSAGE,e=>{var t;if(!d){let r=e.data[0];r||E();let s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){g("Connection","WebChannel received error:",s);let e=s.status,t=function(e){let t=n[e];if(void 0!==t)return e9(t)}(e),r=s.message;void 0===t&&(t=v.INTERNAL,r="Unknown error status: "+e+" with message "+s.message),d=!0,f.$i(new T(t,r)),l.close()}else g("Connection","WebChannel received:",r),f.Oi(r)}}),m(i,h.ju.STAT_EVENT,e=>{e.stat===h.kN.PROXY?g("Connection","Detected buffering proxy"):e.stat===h.kN.NOPROXY&&g("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ki()},0),f}}function rv(){return"undefined"!=typeof document?document:null}class rT{constructor(e,t,r=1e3,n=1.5,s=6e4){this.Oe=e,this.timerId=t,this.Qi=r,this.Wi=n,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();let t=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),n=Math.max(0,t-r);n>0&&g("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,n,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t,r,n,s,i){this.Oe=e,this.er=r,this.nr=n,this.credentialsProvider=s,this.listener=i,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new rT(e,t)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this._r(),this.rr.cancel(),this.sr++,3!==e?this.rr.reset():t&&t.code===v.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):t&&t.code===v.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}mr(){}auth(){this.state=1;let e=this.gr(this.sr),t=this.sr;this.credentialsProvider.getToken().then(e=>{this.sr===t&&this.yr(e)},t=>{e(()=>{let e=new T(v.UNKNOWN,"Fetching auth token failed: "+t.message);return this.pr(e)})})}yr(e){let t=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si(()=>{t(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(e=>{t(()=>this.pr(e))}),this.stream.onMessage(e=>{t(()=>this.onMessage(e))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return t=>{this.Oe.enqueueAndForget(()=>this.sr===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rS extends rI{constructor(e,t,r,n,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,r,s),this.N=n}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();let t=function(e,t){let r;if("targetChange"in t){var n,s;t.targetChange;let i="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:E(),a=t.targetChange.targetIds||[],o=(s=t.targetChange.resumeToken,e.D?(void 0===s||"string"==typeof s||E(),q.fromBase64String(s||"")):(void 0===s||s instanceof Uint8Array||E(),q.fromUint8Array(s||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?v.UNKNOWN:e9(e.code);return new T(t,e.message||"")}(l);r=new tf(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let s=tS(e,n.document.name),i=tT(n.document.updateTime),a=new el({mapValue:{fields:n.document.fields}}),o=eu.newFoundDocument(s,i,a),l=n.targetIds||[],u=n.removedTargetIds||[];r=new tc(l,u,o.key,o)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let s=tS(e,n.document),i=n.readTime?tT(n.readTime):V.min(),a=eu.newNoDocument(s,i),o=n.removedTargetIds||[];r=new tc([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let s=tS(e,n.document),i=n.removedTargetIds||[];r=new tc([],i,s,null)}else{if(!("filter"in t))return E();{t.filter;let e=t.filter;e.targetId;let n=e.count||0,s=new e5(n),i=e.targetId;r=new td(i,s)}}return r}(this.N,e),r=function(e){if(!("targetChange"in e))return V.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?tT(t.readTime):V.min()}(e);return this.listener.Tr(t,r)}Ir(e){let t={};t.database=tN(this.N),t.addTarget=function(e,t){var r,n;let s;let i=t.target;return(s=em(i)?{documents:{documents:[tA(e,i.path)]}}:{query:function(e,t){var r;let n={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(n.parent=tA(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=tA(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);let i=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){if("=="===e.op){if(ei(e.value))return{unaryFilter:{field:tb(e.field),op:"IS_NAN"}};if(es(e.value))return{unaryFilter:{field:tb(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ei(e.value))return{unaryFilter:{field:tb(e.field),op:"IS_NOT_NAN"}};if(es(e.value))return{unaryFilter:{field:tb(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tb(e.field),op:tE[e.op],value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);let a=function(e){if(0!==e.length)return e.map(e=>({field:tb(e.field),direction:tw[e.dir]}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);let o=(r=t.limit,e.D||Q(r)?r:{value:r});return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=tD(t.startAt)),t.endAt&&(n.structuredQuery.endAt=tD(t.endAt)),n}(e,i)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?s.resumeToken=(r=t.resumeToken,e.D?r.toBase64():r.toUint8Array()):t.snapshotVersion.compareTo(V.min())>0&&(s.readTime=(n=t.snapshotVersion.toTimestamp(),e.D?`${new Date(1e3*n.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+n.nanoseconds).slice(-9)}Z`:{seconds:""+n.seconds,nanos:n.nanoseconds})),s}(this.N,e);let r=function(e,t){let r=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.N,e);r&&(t.labels=r),this.wr(t)}Ar(e){let t={};t.database=tN(this.N),t.removeTarget=e,this.wr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA extends class{}{constructor(e,t,r){super(),this.credentials=e,this.nr=t,this.N=r,this.Dr=!1}Cr(){if(this.Dr)throw new T(v.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,r){return this.Cr(),this.credentials.getToken().then(n=>this.nr.Li(e,t,r,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===v.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new T(v.UNKNOWN,e.toString())})}Ki(e,t,r){return this.Cr(),this.credentials.getToken().then(n=>this.nr.Ki(e,t,r,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===v.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new T(v.UNKNOWN,e.toString())})}terminate(){this.Dr=!0}}class rN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,"Online"===e&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(p(t),this.$r=!1):g("OnlineStateTracker",t)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,r,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ei(e=>{r.enqueueAndForget(async()=>{rF(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.Kr.add(4),await rC(e),e.Wr.set("Unknown"),e.Kr.delete(4),await rD(e)}(this))})}),this.Wr=new rN(r,n)}}async function rD(e){if(rF(e))for(let t of e.jr)await t(!0)}async function rC(e){for(let t of e.jr)await t(!1)}function rb(e,t){e.qr.has(t.targetId)||(e.qr.set(t.targetId,t),rx(e)?rV(e):rB(e).cr()&&rL(e,t))}function rk(e,t){let r=rB(e);e.qr.delete(t),r.cr()&&rR(e,t),0===e.qr.size&&(r.cr()?r.lr():rF(e)&&e.Wr.set("Unknown"))}function rL(e,t){e.Gr.Y(t.targetId),rB(e).Ir(t)}function rR(e,t){e.Gr.Y(t),rB(e).Ar(t)}function rV(e){e.Gr=new tg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.qr.get(t)||null}),rB(e).start(),e.Wr.Or()}function rx(e){return rF(e)&&!rB(e).ar()&&e.qr.size>0}function rF(e){return 0===e.Kr.size}async function rM(e){e.qr.forEach((t,r)=>{rL(e,t)})}async function rO(e,t){e.Gr=void 0,rx(e)?(e.Wr.Lr(t),rV(e)):e.Wr.set("Unknown")}async function rU(e,t,r){if(e.Wr.set("Online"),t instanceof tf&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.qr.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.qr.delete(n),e.Gr.removeTarget(n))}(e,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await rP(e,r)}else if(t instanceof tc?e.Gr.rt(t):t instanceof td?e.Gr.ft(t):e.Gr.ct(t),!r.isEqual(V.min()))try{let t=await re(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.Gr._t(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let s=e.qr.get(n);s&&e.qr.set(n,s.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach(t=>{let r=e.qr.get(t);if(!r)return;e.qr.set(t,r.withResumeToken(q.EMPTY_BYTE_STRING,r.snapshotVersion)),rR(e,t);let n=new tY(r.target,t,1,r.sequenceNumber);rL(e,n)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await rP(e,t)}}async function rP(e,t,r){if(!tj(t))throw t;e.Kr.add(1),await rC(e),e.Wr.set("Offline"),r||(r=()=>re(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await r(),e.Kr.delete(1),await rD(e)})}async function rq(e,t){t?(e.Kr.delete(2),await rD(e)):t||(e.Kr.add(2),await rC(e),e.Wr.set("Unknown"))}function rB(e){var t,r,n;return e.zr||(e.zr=(t=e.datastore,r=e.asyncQueue,n={Si:rM.bind(null,e),Ci:rO.bind(null,e),Tr:rU.bind(null,e)},t.Cr(),new rS(r,t.nr,t.credentials,t.N,n)),e.jr.push(async t=>{t?(e.zr.hr(),rx(e)?rV(e):e.Wr.set("Unknown")):(await e.zr.stop(),e.Gr=void 0)})),e.zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK{constructor(e,t,r,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=s,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,r,n,s){let i=Date.now()+r,a=new rK(e,t,i,n,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rz(e,t){if(p("AsyncQueue",`${t}: ${e}`),tj(e))return new T(v.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rG{constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(e,t)=>W.comparator(e.key,t.key),this.keyedMap=ti,this.sortedSet=new e7(this.comparator)}static emptySet(e){return new rG(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rG)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new rG;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(){this.Jr=new e7(W.comparator)}track(e){let t=e.doc.key,r=this.Jr.get(t);r?0!==e.type&&3===r.type?this.Jr=this.Jr.insert(t,e):3===e.type&&1!==r.type?this.Jr=this.Jr.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Jr=this.Jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Jr=this.Jr.remove(t):1===e.type&&2===r.type?this.Jr=this.Jr.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):E():this.Jr=this.Jr.insert(t,e)}Yr(){let e=[];return this.Jr.inorderTraversal((t,r)=>{e.push(r)}),e}}class rH{constructor(e,t,r,n,s,i,a,o){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o}static fromInitialDocuments(e,t,r,n){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new rH(e,t,rG.emptySet(t),s,r,n,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eO(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rQ{constructor(){this.Xr=void 0,this.listeners=[]}}class rj{constructor(){this.queries=new t4(e=>eU(e),eO),this.onlineState="Unknown",this.Zr=new Set}}async function rW(e,t){let r=t.query,n=!1,s=e.queries.get(r);if(s||(n=!0,s=new rQ),n)try{s.Xr=await e.onListen(r)}catch(r){let e=rz(r,`Initialization of query '${eP(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,s),s.listeners.push(t),t.eo(e.onlineState),s.Xr&&t.no(s.Xr)&&rZ(e)}async function rY(e,t){let r=t.query,n=!1,s=e.queries.get(r);if(s){let e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),n=0===s.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function rX(e,t){let r=!1;for(let n of t){let t=n.query,s=e.queries.get(t);if(s){for(let e of s.listeners)e.no(n)&&(r=!0);s.Xr=n}}r&&rZ(e)}function rJ(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);e.queries.delete(t)}function rZ(e){e.Zr.forEach(e=>{e.next()})}class r0{constructor(e,t,r){this.query=e,this.so=t,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=r||{}}no(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new rH(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.io?this.oo(e)&&(this.so.next(e),t=!0):this.ao(e,this.onlineState)&&(this.co(e),t=!0),this.ro=e,t}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let t=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),t=!0),t}ao(e,t){return!e.fromCache||(!this.options.uo||!("Offline"!==t))&&(!e.docs.isEmpty()||"Offline"===t)}oo(e){if(e.docChanges.length>0)return!0;let t=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}co(e){e=rH.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.key=e}}class r2{constructor(e){this.key=e}}class r4{constructor(e,t){this.query=e,this._o=t,this.mo=null,this.current=!1,this.yo=to(),this.mutatedKeys=to(),this.po=eB(e),this.Eo=new rG(this.po)}get To(){return this._o}Io(e,t){let r=t?t.Ao:new r$,n=t?t.Eo:this.Eo,s=t?t.mutatedKeys:this.mutatedKeys,i=n,a=!1,o=ek(this.query)&&n.size===this.query.limit?n.last():null,l=eL(this.query)&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=eq(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.Ro(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this.po(h,o)>0||l&&0>this.po(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),ek(this.query)||eL(this.query))for(;i.size>this.query.limit;){let e=ek(this.query)?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),r.track({type:1,doc:e})}return{Eo:i,Ao:r,Ln:a,mutatedKeys:s}}Ro(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;let s=e.Ao.Yr();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return r(e)-r(t)})(e.type,t.type)||this.po(e.doc,t.doc)),this.bo(r);let i=t?this.Po():[],a=0===this.yo.size&&this.current?1:0,o=a!==this.mo;return(this.mo=a,0!==s.length||o)?{snapshot:new rH(this.query,e.Eo,n,s,e.mutatedKeys,0===a,o,!1),vo:i}:{vo:i}}eo(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new r$,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(e=>this._o=this._o.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this._o=this._o.delete(e)),this.current=e.current)}Po(){if(!this.current)return[];let e=this.yo;this.yo=to(),this.Eo.forEach(e=>{this.Vo(e.key)&&(this.yo=this.yo.add(e.key))});let t=[];return e.forEach(e=>{this.yo.has(e)||t.push(new r2(e))}),this.yo.forEach(r=>{e.has(r)||t.push(new r1(r))}),t}So(e){this._o=e.Gn,this.yo=to();let t=this.Io(e.documents);return this.applyChanges(t,!0)}Do(){return rH.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class r3{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class r6{constructor(e){this.key=e,this.Co=!1}}class r8{constructor(e,t,r,n,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.No={},this.xo=new t4(e=>eU(e),eO),this.ko=new Map,this.$o=new Set,this.Oo=new e7(W.comparator),this.Fo=new Map,this.Mo=new rs,this.Lo={},this.Bo=new Map,this.Uo=t1.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function r5(e,t){var r,n;let s,i;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=ne.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nr.bind(null,e),e.No.Tr=rX.bind(null,e.eventManager),e.No.jo=rJ.bind(null,e.eventManager),e),o=a.xo.get(t);if(o)s=o.targetId,a.sharedClientState.addLocalQueryTarget(s),i=o.view.Do();else{let e=await (r=a.localStore,n=eF(t),r.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return r.ze.getTargetData(e,n).next(s=>s?(t=s,tQ.resolve(t)):r.ze.allocateTargetId(e).next(s=>(t=new tY(n,s,0,e.currentSequenceNumber),r.ze.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=r.Un.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(r.Un=r.Un.insert(e.targetId,e),r.qn.set(n,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);s=e.targetId,i=await r9(a,t,s,"current"===o),a.isPrimaryClient&&rb(a.remoteStore,e)}return i}async function r9(e,t,r,n){e.Ko=(t,r,n)=>(async function(e,t,r,n){let s=t.view.Io(r);s.Ln&&(s=await rr(e.localStore,t.query,!1).then(({documents:e})=>t.view.Io(e,s)));let i=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i);return ni(e,t.targetId,a.vo),a.snapshot})(e,t,r,n);let s=await rr(e.localStore,t,!0),i=new r4(t,s.Gn),a=i.Io(s.documents),o=th.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState),l=i.applyChanges(a,e.isPrimaryClient,o);ni(e,r,l.vo);let u=new r3(t,r,i);return e.xo.set(t,u),e.ko.has(r)?e.ko.get(r).push(t):e.ko.set(r,[t]),l.snapshot}async function r7(e,t){let r=e.xo.get(t),n=e.ko.get(r.targetId);if(n.length>1)return e.ko.set(r.targetId,n.filter(e=>!eO(e,t))),void e.xo.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await rt(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),rk(e.remoteStore,r.targetId),nn(e,r.targetId)}).catch(t2)):(nn(e,r.targetId),await rt(e.localStore,r.targetId,!0))}async function ne(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.Un;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{var i,a;let o;let l=e.jn.newChangeBuffer({trackRemovals:!0});n=e.Un;let u=[];t.targetChanges.forEach((t,i)=>{let a=n.get(i);if(!a)return;u.push(e.ze.removeMatchingKeys(s,t.removedDocuments,i).next(()=>e.ze.addMatchingKeys(s,t.addedDocuments,i)));let o=t.resumeToken;if(o.approximateByteSize()>0){let l=a.withResumeToken(o,r).withSequenceNumber(s.currentSequenceNumber);n=n.insert(i,l),l.resumeToken.approximateByteSize()>0||E(),(0===a.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-a.snapshotVersion.toMicroseconds()>=3e8||t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size>0)&&u.push(e.ze.updateTargetData(s,l))}});let h=ts;if(t.documentUpdates.forEach((r,n)=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(s,r))}),u.push((i=t.documentUpdates,a=void 0,o=to(),i.forEach(e=>o=o.add(e)),l.getEntries(s,o).next(e=>{let t=ts;return i.forEach((n,s)=>{let i=e.get(n),o=(null==a?void 0:a.get(n))||r;s.isNoDocument()&&s.version.isEqual(V.min())?(l.removeEntry(n,o),t=t.insert(n,s)):!i.isValidDocument()||s.version.compareTo(i.version)>0||0===s.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(s,o),t=t.insert(n,s)):g("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",s.version)}),t})).next(e=>{h=e})),!r.isEqual(V.min())){let t=e.ze.getLastRemoteSnapshotVersion(s).next(t=>e.ze.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(t)}return tQ.waitFor(u).next(()=>l.apply(s)).next(()=>e.Qn.vn(s,h)).next(()=>h)}).then(t=>(e.Un=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Fo.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||E(),t.addedDocuments.size>0?n.Co=!0:t.modifiedDocuments.size>0?n.Co||E():t.removedDocuments.size>0&&(n.Co||E(),n.Co=!1))}),await no(e,r,t)}catch(e){await t2(e)}}function nt(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let s=[];e.xo.forEach((e,r)=>{let n=r.view.eo(t);n.snapshot&&s.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.listeners)e.eo(t)&&(r=!0)}),r&&rZ(n),s.length&&e.No.Tr(s),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function nr(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Fo.get(t),s=n&&n.key;if(s){let r=new e7(W.comparator);r=r.insert(s,eu.newNoDocument(s,V.min()));let n=to().add(s),i=new tu(V.min(),new Map,new tr(k),r,n);await ne(e,i),e.Oo=e.Oo.remove(s),e.Fo.delete(t),na(e)}else await rt(e.localStore,t,!1).then(()=>nn(e,t,r)).catch(t2)}function nn(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.ko.get(t)))e.xo.delete(n),r&&e.No.jo(n,r);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach(t=>{e.Mo.containsKey(t)||ns(e,t)})}function ns(e,t){e.$o.delete(t.path.canonicalString());let r=e.Oo.get(t);null!==r&&(rk(e.remoteStore,r),e.Oo=e.Oo.remove(t),e.Fo.delete(r),na(e))}function ni(e,t,r){for(let n of r)n instanceof r1?(e.Mo.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.Oo.get(r)||e.$o.has(n)||(g("SyncEngine","New document in limbo: "+r),e.$o.add(n),na(e))}(e,n)):n instanceof r2?(g("SyncEngine","Document no longer in limbo: "+n.key),e.Mo.removeReference(n.key,t),e.Mo.containsKey(n.key)||ns(e,n.key)):E()}function na(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){var t;let r=e.$o.values().next().value;e.$o.delete(r);let n=new W(O.fromString(r)),s=e.Uo.next();e.Fo.set(s,new r6(n)),e.Oo=e.Oo.insert(n,s),rb(e.remoteStore,new tY(eF((t=n.path,new eb(t))),s,2,C.T))}}async function no(e,t,r){let n=[],s=[],i=[];e.xo.isEmpty()||(e.xo.forEach((a,o)=>{i.push(e.Ko(o,t,r).then(t=>{if(t){e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,t.fromCache?"not-current":"current"),n.push(t);let r=t8.kn(o.targetId,t);s.push(r)}}))}),await Promise.all(i),e.No.Tr(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>tQ.forEach(t,t=>tQ.forEach(t.Nn,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>tQ.forEach(t.xn,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!tj(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.Un.get(t),n=r.snapshotVersion,s=r.withLastLimboFreeSnapshotVersion(n);e.Un=e.Un.insert(t,s)}}}(e.localStore,s))}async function nl(e,t){if(!e.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let r=await t7(e.localStore,t);e.currentUser=t,e.Bo.forEach(e=>{e.forEach(e=>{e.reject(new T(v.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Bo.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await no(e,r.Wn)}}function nu(e,t){let r=e.Fo.get(t);if(r&&r.Co)return to().add(r.key);{let r=to(),n=e.ko.get(t);if(!n)return r;for(let t of n){let n=e.xo.get(t);r=r.unionWith(n.view.To)}return r}}class nh{constructor(){this.synchronizeTabs=!1}async initialize(e){var t;this.N=(t=e.databaseInfo.databaseId,new tv(t,!0)),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){var t,r,n,s;return t=this.persistence,r=new t5,n=e.initialUser,s=this.N,new t9(t,r,n,s)}Go(e){return new rh(rd.Ns,this.N)}Wo(e){return new rm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nt(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nl.bind(null,this.syncEngine),await rq(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rj}createDatastore(e){var t,r,n;let s=(r=e.databaseInfo.databaseId,new tv(r,!0)),i=(t=e.databaseInfo,new rE(t));return n=e.credentials,new rA(n,i,s)}createRemoteStore(e){var t,r,n,s;return t=this.localStore,r=this.datastore,n=e.asyncQueue,s=rp.bt()?new rp:new rg,new r_(t,r,n,e=>nt(this.syncEngine,e,0),s)}createSyncEngine(e,t){return function(e,t,r,n,s,i,a){let o=new r8(e,t,r,n,s,i);return a&&(o.qo=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await rC(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,r){this.credentials=e,this.asyncQueue=t,this.databaseInfo=r,this.user=c.UNAUTHENTICATED,this.clientId=b.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async e=>{g("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(r){let t=rz(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function nm(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await t7(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function ng(e,t){e.asyncQueue.verifyOperationInProgress();let r=await np(e);g("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>(async function(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let r=rF(e);e.Kr.add(3),await rC(e),r&&e.Wr.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Kr.delete(3),await rD(e)})(t.remoteStore,e)),e.onlineComponents=t}async function np(e){return e.offlineComponents||(g("FirestoreClient","Using default OfflineComponentProvider"),await nm(e,new nh)),e.offlineComponents}async function ny(e){return e.onlineComponents||(g("FirestoreClient","Using default OnlineComponentProvider"),await ng(e,new nc)),e.onlineComponents}async function nw(e){let t=await ny(e),r=t.eventManager;return r.onListen=r5.bind(null,t.syncEngine),r.onUnlisten=r7.bind(null,t.syncEngine),r}class nE{constructor(e,t,r,n,s,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class nv{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof nv&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nT=new Map;function nI(e){if(W.isDocumentKey(e))throw new T(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function nS(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":E()}(e);throw new T(v.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,r,n){if(!0===t&&!0===n)throw new T(v.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nA({}),this._settingsFrozen=!1,e instanceof nv?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nv(e.options.projectId)}(e))}get app(){if(!this._app)throw new T(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nA(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new A;switch(e.type){case"gapi":let t=e.client;return"object"==typeof t&&null!==t&&t.auth&&t.auth.getAuthHeaderValueForFirstParty||E(),new D(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new T(v.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=nT.get(e);t&&(g("ComponentProvider","Removing Datastore"),nT.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nC(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n_(this.firestore,e,this._key)}}class nD{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nD(this.firestore,e,this._query)}}class nC extends nD{constructor(e,t,r){super(e,t,new eb(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new n_(this.firestore,null,new W(e))}withConverter(e){return new nC(this.firestore,e,this._path)}}function nb(e,t,...r){if(e=(0,u.m9)(e),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){if(!r)throw new T(v.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof nN){let n=O.fromString(t,...r);return nI(n),new nC(e,null,n)}{if(!(e instanceof n_||e instanceof nC))throw new T(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(O.fromString(t,...r));return nI(n),new nC(e.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new rT(this,"async_queue_retry"),this.Ea=()=>{let e=rv();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};let e=rv();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;let t=rv();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});let t=new I;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!tj(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){let t=this.fa.then(()=>(this.ga=!0,e().catch(e=>{let t;throw this.ma=e,this.ga=!1,p("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.ga=!1,e))));return this.fa=t,t}enqueueAfterDelay(e,t,r){this.Ta(),this.pa.indexOf(e)>-1&&(t=0);let n=rK.createAndSchedule(this,e,t,r,e=>this.Ra(e));return this._a.push(n),n}Ta(){this.ma&&E()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(let t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{for(let t of(this._a.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this._a))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){let t=this._a.indexOf(e);this._a.splice(t,1)}}class nL extends nN{constructor(e,t){super(e,t),this.type="firestore",this._queue=new nk,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||nV(this),this._firestoreClient.terminate()}}function nR(e=(0,a.Mq)()){return(0,a.qX)(e,"firestore").getImmediate()}function nV(e){var t,r,n,s;let i=e._freezeSettings(),a=(r=e._databaseId,n=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",s=e._persistenceKey,new nE(r,n,s,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams));e._firestoreClient=new nf(e._credentials,e._queue,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new P(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nF(q.fromBase64String(e))}catch(e){throw new T(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new nF(q.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return k(this._lat,e._lat)||k(this._long,e._long)}}let nO=RegExp("[~\\*/\\[\\]]");function nU(e,t,r,n,s){let i=n&&!n.isEmpty(),a=void 0!==s,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new T(v.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t,r,n,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new n_(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new nq(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(nB("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class nq extends nP{data(){return super.data()}}function nB(e,t){return"string"==typeof t?function(e,t,r){if(t.search(nO)>=0)throw nU(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new nx(...t.split("."))._internalPath}catch(n){throw nU(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}(e,t):t instanceof nx?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nz extends nP{constructor(e,t,r,n,s,i){super(e,t,r,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new nG(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(nB("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class nG extends nz{data(e={}){return super.data(e)}}class n${constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new nK(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new nG(this._firestore,this._userDataWriter,r.key,r,new nK(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>({type:"added",doc:new nG(e._firestore,e._userDataWriter,r.doc.key,r.doc,new nK(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new nG(e._firestore,e._userDataWriter,t.doc.key,t.doc,new nK(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),s=-1,i=-1;return 0!==t.type&&(s=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(i=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}(t.type),doc:n,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class nH{}function nQ(e,...t){for(let r of t)e=r._apply(e);return e}class nj extends nH{constructor(e,t){super(),this.Ka=e,this.Wa=t,this.type="orderBy"}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new T(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new T(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let n=new e_(t,r);return function(e,t){if(null===eR(e)){let r=eV(e);null!==r&&function(e,t,r){if(!r.isEqual(t))throw new T(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}(0,r,t.field)}}(e,n),n}(e._query,this.Ka,this.Wa);return new nD(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new eb(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function nW(e,t="asc"){let r=nB("orderBy",e);return new nj(r,t)}class nY extends nH{constructor(e,t,r){super(),this.type=e,this.Ga=t,this.za=r}_apply(e){return new nD(e.firestore,e.converter,eM(e._query,this.Ga,this.za))}}function nX(e){return function(e,t){if(t<=0)throw new T(v.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}("limit",e),new nY("limit",e,"F")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{convertValue(e,t="none"){switch(Y(e)){case 0:return null;case 1:return e.booleanValue;case 2:return z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(G(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw E()}}convertObject(e,t){let r={};return F(e.fields,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new nM(z(e.latitude),z(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=function e(t){let r=t.mapValue.fields.__previous_value__;return $(r)?e(r):r}(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(H(e));default:return null}}convertTimestamp(e){let t=K(e);return new R(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=O.fromString(e);tL(r)||E();let n=new nv(r.get(1),r.get(3)),s=new W(r.popFirst(5));return n.isEqual(t)||p(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}class nZ extends nJ{constructor(e){super(),this.firestore=e}convertBytes(e){return new nF(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new n_(this.firestore,null,t)}}function n0(e){e=nS(e,nD);let t=nS(e.firestore,nL),r=(t._firestoreClient||nV(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),n=new nZ(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(eL(e)&&0===e.explicitOrderBy.length)throw new T(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new I;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,s){let i=new nd({next:r=>{t.enqueueAndForget(()=>rY(e,a)),r.fromCache&&"server"===n.source?s.reject(new T(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(r)},error:e=>s.reject(e)}),a=new r0(r,i,{includeMetadataChanges:!0,uo:!0});return rW(e,a)})(await nw(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new n$(t,n,e,r)))}d=a.Jn,(0,a.Xd)(new o.wA("firestore",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=new nL(r,new N(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),n._setSettings(t),n},"PUBLIC")),(0,a.KN)("@firebase/firestore","3.1.0",i)}}]);