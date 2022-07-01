(()=>{"use strict";var t={614:(t,e,n)=>{var r;n.r(e),n.d(e,{NIL:()=>T,parse:()=>d,stringify:()=>p,v1:()=>v,v3:()=>j,v4:()=>x,v5:()=>C,validate:()=>u,version:()=>z});var o=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u=function(t){return"string"==typeof t&&s.test(t)};for(var a=[],c=0;c<256;++c)a.push((c+256).toString(16).substr(1));const p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};var f,l,h=0,y=0;const v=function(t,e,n){var r=e&&n||0,o=e||new Array(16),s=(t=t||{}).node||f,u=void 0!==t.clockseq?t.clockseq:l;if(null==s||null==u){var a=t.random||(t.rng||i)();null==s&&(s=f=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==u&&(u=l=16383&(a[6]<<8|a[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),v=void 0!==t.nsecs?t.nsecs:y+1,d=c-h+(v-y)/1e4;if(d<0&&void 0===t.clockseq&&(u=u+1&16383),(d<0||c>h)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");h=c,y=v,l=u;var m=(1e4*(268435455&(c+=122192928e5))+v)%4294967296;o[r++]=m>>>24&255,o[r++]=m>>>16&255,o[r++]=m>>>8&255,o[r++]=255&m;var g=c/4294967296*1e4&268435455;o[r++]=g>>>8&255,o[r++]=255&g,o[r++]=g>>>24&15|16,o[r++]=g>>>16&255,o[r++]=u>>>8|128,o[r++]=255&u;for(var b=0;b<6;++b)o[r+b]=s[b];return e||p(o)},d=function(t){if(!u(t))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n};function m(t,e,n){function r(t,r,o,i){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],n=0;n<t.length;++n)e.push(t.charCodeAt(n));return e}(t)),"string"==typeof r&&(r=d(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+t.length);if(s.set(r),s.set(t,r.length),(s=n(s))[6]=15&s[6]|e,s[8]=63&s[8]|128,o){i=i||0;for(var u=0;u<16;++u)o[i+u]=s[u];return o}return p(s)}try{r.name=t}catch(t){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function g(t){return 14+(t+64>>>9<<4)+1}function b(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function w(t,e,n,r,o,i){return b((s=b(b(e,t),b(r,i)))<<(u=o)|s>>>32-u,n);var s,u}function _(t,e,n,r,o,i,s){return w(e&n|~e&r,t,e,o,i,s)}function P(t,e,n,r,o,i,s){return w(e&r|n&~r,t,e,o,i,s)}function O(t,e,n,r,o,i,s){return w(e^n^r,t,e,o,i,s)}function M(t,e,n,r,o,i,s){return w(n^(e|~r),t,e,o,i,s)}const j=m("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return function(t){for(var e=[],n=32*t.length,r="0123456789abcdef",o=0;o<n;o+=8){var i=t[o>>5]>>>o%32&255,s=parseInt(r.charAt(i>>>4&15)+r.charAt(15&i),16);e.push(s)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[g(e)-1]=e;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,s=0;s<t.length;s+=16){var u=n,a=r,c=o,p=i;n=_(n,r,o,i,t[s],7,-680876936),i=_(i,n,r,o,t[s+1],12,-389564586),o=_(o,i,n,r,t[s+2],17,606105819),r=_(r,o,i,n,t[s+3],22,-1044525330),n=_(n,r,o,i,t[s+4],7,-176418897),i=_(i,n,r,o,t[s+5],12,1200080426),o=_(o,i,n,r,t[s+6],17,-1473231341),r=_(r,o,i,n,t[s+7],22,-45705983),n=_(n,r,o,i,t[s+8],7,1770035416),i=_(i,n,r,o,t[s+9],12,-1958414417),o=_(o,i,n,r,t[s+10],17,-42063),r=_(r,o,i,n,t[s+11],22,-1990404162),n=_(n,r,o,i,t[s+12],7,1804603682),i=_(i,n,r,o,t[s+13],12,-40341101),o=_(o,i,n,r,t[s+14],17,-1502002290),n=P(n,r=_(r,o,i,n,t[s+15],22,1236535329),o,i,t[s+1],5,-165796510),i=P(i,n,r,o,t[s+6],9,-1069501632),o=P(o,i,n,r,t[s+11],14,643717713),r=P(r,o,i,n,t[s],20,-373897302),n=P(n,r,o,i,t[s+5],5,-701558691),i=P(i,n,r,o,t[s+10],9,38016083),o=P(o,i,n,r,t[s+15],14,-660478335),r=P(r,o,i,n,t[s+4],20,-405537848),n=P(n,r,o,i,t[s+9],5,568446438),i=P(i,n,r,o,t[s+14],9,-1019803690),o=P(o,i,n,r,t[s+3],14,-187363961),r=P(r,o,i,n,t[s+8],20,1163531501),n=P(n,r,o,i,t[s+13],5,-1444681467),i=P(i,n,r,o,t[s+2],9,-51403784),o=P(o,i,n,r,t[s+7],14,1735328473),n=O(n,r=P(r,o,i,n,t[s+12],20,-1926607734),o,i,t[s+5],4,-378558),i=O(i,n,r,o,t[s+8],11,-2022574463),o=O(o,i,n,r,t[s+11],16,1839030562),r=O(r,o,i,n,t[s+14],23,-35309556),n=O(n,r,o,i,t[s+1],4,-1530992060),i=O(i,n,r,o,t[s+4],11,1272893353),o=O(o,i,n,r,t[s+7],16,-155497632),r=O(r,o,i,n,t[s+10],23,-1094730640),n=O(n,r,o,i,t[s+13],4,681279174),i=O(i,n,r,o,t[s],11,-358537222),o=O(o,i,n,r,t[s+3],16,-722521979),r=O(r,o,i,n,t[s+6],23,76029189),n=O(n,r,o,i,t[s+9],4,-640364487),i=O(i,n,r,o,t[s+12],11,-421815835),o=O(o,i,n,r,t[s+15],16,530742520),n=M(n,r=O(r,o,i,n,t[s+2],23,-995338651),o,i,t[s],6,-198630844),i=M(i,n,r,o,t[s+7],10,1126891415),o=M(o,i,n,r,t[s+14],15,-1416354905),r=M(r,o,i,n,t[s+5],21,-57434055),n=M(n,r,o,i,t[s+12],6,1700485571),i=M(i,n,r,o,t[s+3],10,-1894986606),o=M(o,i,n,r,t[s+10],15,-1051523),r=M(r,o,i,n,t[s+1],21,-2054922799),n=M(n,r,o,i,t[s+8],6,1873313359),i=M(i,n,r,o,t[s+15],10,-30611744),o=M(o,i,n,r,t[s+6],15,-1560198380),r=M(r,o,i,n,t[s+13],21,1309151649),n=M(n,r,o,i,t[s+4],6,-145523070),i=M(i,n,r,o,t[s+11],10,-1120210379),o=M(o,i,n,r,t[s+2],15,718787259),r=M(r,o,i,n,t[s+9],21,-343485551),n=b(n,u),r=b(r,a),o=b(o,c),i=b(i,p)}return[n,r,o,i]}(function(t){if(0===t.length)return[];for(var e=8*t.length,n=new Uint32Array(g(e)),r=0;r<e;r+=8)n[r>>5]|=(255&t[r/8])<<r%32;return n}(t),8*t.length))})),x=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return p(r)};function A(t,e,n,r){switch(t){case 0:return e&n^~e&r;case 1:case 3:return e^n^r;case 2:return e&n^e&r^n&r}}function I(t,e){return t<<e|t>>>32-e}const C=m("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var r=unescape(encodeURIComponent(t));t=[];for(var o=0;o<r.length;++o)t.push(r.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var i=t.length/4+2,s=Math.ceil(i/16),u=new Array(s),a=0;a<s;++a){for(var c=new Uint32Array(16),p=0;p<16;++p)c[p]=t[64*a+4*p]<<24|t[64*a+4*p+1]<<16|t[64*a+4*p+2]<<8|t[64*a+4*p+3];u[a]=c}u[s-1][14]=8*(t.length-1)/Math.pow(2,32),u[s-1][14]=Math.floor(u[s-1][14]),u[s-1][15]=8*(t.length-1)&4294967295;for(var f=0;f<s;++f){for(var l=new Uint32Array(80),h=0;h<16;++h)l[h]=u[f][h];for(var y=16;y<80;++y)l[y]=I(l[y-3]^l[y-8]^l[y-14]^l[y-16],1);for(var v=n[0],d=n[1],m=n[2],g=n[3],b=n[4],w=0;w<80;++w){var _=Math.floor(w/20),P=I(v,5)+A(_,d,m,g)+b+e[_]+l[w]>>>0;b=g,g=m,m=I(d,30)>>>0,d=v,v=P}n[0]=n[0]+v>>>0,n[1]=n[1]+d>>>0,n[2]=n[2]+m>>>0,n[3]=n[3]+g>>>0,n[4]=n[4]+b>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),T="00000000-0000-0000-0000-000000000000",z=function(t){if(!u(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}},919:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Color=void 0;var i=function(t){function e(e,n,r,o){return e instanceof Array?t.call(this,e)||this:"number"==typeof e?t.call(this,[e,n,r,null!=o?o:0])||this:t.call(this,[0,0,0,null!=o?o:0])||this}return o(e,t),Object.defineProperty(e.prototype,"red",{get:function(){return this.x},set:function(t){this.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.y},set:function(t){this.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.z},set:function(t){this.z=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.w},set:function(t){this.w=t},enumerable:!1,configurable:!0}),e.prototype.plus=function(n){return new e(t.prototype.plus.call(this,n).vals)},e.prototype.minus=function(n){return new e(t.prototype.minus.call(this,n).vals)},e.prototype.times=function(n){return new e(t.prototype.times.call(this,n).vals)},e.black=function(){return new e(0,0,0)},e}(n(212).Tuple);e.Color=i},244:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Intersection=void 0;var n=function(){function t(t,e){this.obj=t,this.t=e}return t.prototype.prepareComputations=function(t){var e=t.position(this.t),n=t.direction.negate(),r=this.obj.normalAt(e),o=!1;return r.dot(n)<0&&(o=!0,r=r.negate()),{t:this.t,obj:this.obj,point:e,eyev:n,normalv:r,inside:o}},t}();e.Intersection=n},852:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.IntersectionGroup=void 0;var r=n(244),o=function(){function t(t){var e;this.sortByT=function(t,e){return t.t>e.t?1:-1},this.intersections=null!==(e=null==t?void 0:t.sort(this.sortByT))&&void 0!==e?e:[]}return Object.defineProperty(t.prototype,"count",{get:function(){return this.intersections.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"xs",{get:function(){return this.intersections},enumerable:!1,configurable:!0}),t.prototype.add=function(t,e){this.pushSort(t instanceof r.Intersection?t:new r.Intersection(e,t))},t.prototype.hit=function(){for(var t=0;t<this.count;t++)if(this.intersections[t].t>0)return this.intersections[t];return null},t.prototype.sort=function(){this.xs.sort(this.sortByT)},t.prototype.combine=function(t){this.intersections=[].concat(this.intersections,t.intersections)},t.prototype.pushSort=function(t){return this.intersections.push(t),this.sort(),this.count},t}();e.IntersectionGroup=o},402:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Material=void 0;var r=n(919),o=function(){function t(){this.color=new r.Color(1,1,1),this.ambient=.1,this.diffuse=.9,this.specular=.9,this.shininess=200}return t.prototype.lighting=function(t,e,n,o){var i,s,u=this.color.times(t.intensity),a=t.position.minus(e).normalize(),c=u.times(this.ambient),p=a.dot(o);if(p<0)i=r.Color.black(),s=r.Color.black();else{i=u.times(this.diffuse).times(p);var f=a.negate().reflect(o).dot(n);if(f<=0)s=r.Color.black();else{var l=Math.pow(f,this.shininess);s=t.intensity.times(this.specular).times(l)}}return c.plus(i).plus(s)},t}();e.Material=o},532:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Object3d=void 0;var r=n(614),o=n(869),i=n(402),s=n(858),u=function(){function t(){this.id=(0,r.v4)(),this.position=new s.Point,this.transform=o.Matrix.identity(),this.material=new i.Material}return t.prototype.intersect=function(t){return t.transform(this.transform.inverse()).intersects(this)},t}();e.Object3d=u},858:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Point=void 0;var i=n(869),s=function(t){function e(e,n,r){return e instanceof Array?t.call(this,e)||this:"number"==typeof e?t.call(this,[e,n,r,1])||this:t.call(this,[0,0,0,1])||this}return o(e,t),e.prototype.plus=function(e){return t.prototype.plus.call(this,e)},e.prototype.minus=function(e){return t.prototype.minus.call(this,e)},e.prototype.negate=function(){return e.zero().minus(this)},e.zero=function(){return new e},e.prototype.toMatrix=function(){var t=[];return this.vals.map((function(e,n){t.push([e])})),t.push([1]),new i.Matrix(t)},e}(n(212).Tuple);e.Point=s},986:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PointLight=void 0;e.PointLight=function(t,e){this.intensity=t,this.position=e}},524:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Ray=void 0;var r=n(852),o=function(){function t(t,e){this.origin=t,this.direction=e}return t.prototype.position=function(t){return this.origin.plus(this.direction.times(t))},t.prototype.intersects=function(t){var e=new r.IntersectionGroup,n=this.origin.minus(t.position),o=this.direction.dot(this.direction),i=2*this.direction.dot(n),s=n.dot(n)-1,u=this.discriminant(o,i,s);if(u<0)return e;var a=(-i-Math.sqrt(u))/(2*o),c=(-i+Math.sqrt(u))/(2*o);return e.add(a,t),e.add(c,t),e},t.prototype.discriminant=function(t,e,n){return Math.pow(e,2)-4*t*n},t.prototype.transform=function(e){var n=e.times(this.direction);return new t(e.times(this.origin),n)},t}();e.Ray=o},168:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Sphere=void 0;var i=n(532),s=n(858),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.normalAt=function(t){var e=this.transform.inverse().times(t).minus(new s.Point);return(t=this.transform.inverse().transpose().times(e)).w=0,t.normalize()},e}(i.Object3d);e.Sphere=u},212:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Tuple=void 0;var r=n(869),o=function(){function t(t,e,n,r){this.vals=t instanceof Array?t:"number"==typeof t?[t,e,n,null!=r?r:0]:[0,0,0,null!=r?r:0]}return Object.defineProperty(t.prototype,"x",{get:function(){return this.vals[0]},set:function(t){this.vals[0]=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.vals[1]},set:function(t){this.vals[1]=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"z",{get:function(){return this.vals[2]},set:function(t){this.vals[2]=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"w",{get:function(){return this.vals[3]},set:function(t){this.vals[3]=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isPoint",{get:function(){return 1==this.w},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isVector",{get:function(){return 0==this.w},enumerable:!1,configurable:!0}),t.prototype.plus=function(e){return new t(this.vals.map((function(t,n){return t+e.vals[n]})))},t.prototype.minus=function(e){return new t(this.vals.map((function(t,n){return t-e.vals[n]})))},t.prototype.negate=function(){return t.zero().minus(this)},t.prototype.times=function(e){return new t(e instanceof t?this.vals.map((function(t,n){return t*e.vals[n]})):this.vals.map((function(t){return t*e})))},t.prototype.dividedBy=function(e){return new t(this.vals.map((function(t){return t/e})))},t.prototype.magnitude=function(){var t=this.vals.map((function(t){return t*t})).reduce((function(t,e){return t+e}));return Math.sqrt(t)},t.prototype.normalize=function(){var e=this.magnitude();return new t(this.vals.map((function(t){return t/e})))},t.prototype.dot=function(t){return this.vals.map((function(e,n){return e*t.vals[n]})).reduce((function(t,e){return t+e}))},t.prototype.cross=function(e){var n=this,r=[0,1,2].map((function(t){var r=(t+1)%3,o=(r+1)%3;return n.vals[r]*e.vals[o]-n.vals[o]*e.vals[r]}));return r.push(0),new t(r)},t.prototype.reflect=function(t){return this.minus(t.times(2).times(this.dot(t)))},t.prototype.toMatrix=function(){var t=[];return this.vals.map((function(e,n){t.push([e])})),new r.Matrix(t)},t.zero=function(){return new t},t}();e.Tuple=o},894:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Map=void 0,e.Map=function(t,e,n,r,o){var i=(t-e)*(o-r)/(n-e)+r;return i=Math.min(o,i),i=Math.max(r,i),Math.round(i)}},869:function(t,e,n){var r=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.Matrix=void 0;var o=n(212),i=function(){function t(t){if(Array.isArray(t))this.m=t;else{var e=null!=t?t:4;this.m=Array(e);for(var n=0;n<e;n++)this.m[n]=Array(e).fill(0)}}return t.create=function(e){return Object.create(t.prototype)},Object.defineProperty(t.prototype,"columns",{get:function(){return this.m[0].length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rows",{get:function(){return this.m.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this.columns},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"invertible",{get:function(){return 0!=this.determinant()},enumerable:!1,configurable:!0}),t.prototype.times=function(e){for(var n=e instanceof o.Tuple?e.toMatrix():e,r=new t,i=function(t){for(var e=0;e<s.rows;e++){var o=s.m[e].map((function(e,r){return e*n.m[r][t]})).reduce((function(t,e){return t+e}),0);r.m[e][t]=o}},s=this,u=0;u<this.columns;u++)i(u);return e instanceof o.Tuple?r.toTuple():r},t.prototype.transpose=function(){for(var e=new t,n=0;n<this.rows;n++)for(var r=0;r<this.columns;r++)e.m[n][r]=this.m[r][n];return e},t.prototype.inverse=function(){if(!this.invertible)return new t;for(var e=new t(this.size),n=0;n<this.size;n++)for(var r=0;r<this.size;r++){var o=this.cofactor(n,r);e.m[r][n]=o/this.determinant()}return e},t.prototype.determinant=function(){var t=0;if(2==this.size)t=this.m[0][0]*this.m[1][1]-this.m[0][1]*this.m[1][0];else for(var e=0;e<this.size;e++)t+=this.m[0][e]*this.cofactor(0,e);return t},t.prototype.clone=function(){return this.m.map((function(t){return r([],t,!0)}))},t.prototype.submatrix=function(e,n){var r=this.clone().map((function(t){return t.splice(n,1),t}));return r.splice(e,1),new t(r)},t.prototype.minor=function(t,e){return this.submatrix(t,e).determinant()},t.prototype.cofactor=function(t,e){var n=this.minor(t,e);return(t+e)%2==0?n:-n},t.prototype.toTuple=function(){for(var t=[],e=0;e<4;e++)t.push(this.m[e][0]);return new o.Tuple(t)},t.prototype.toVector=function(){return this.toTuple()},t.prototype.getIdentity=function(){return t.identity().times(this)},t.prototype.rotate=function(e,n){return t.rotate(e,n).times(this)},t.rotate=function(e,n){var r=t.identity();switch(e){case"x":return t.rotation_x(n).times(r);case"y":return t.rotation_y(n).times(r);case"z":return t.rotation_z(n).times(r)}},t.prototype.scale=function(e,n,r){return t.scale(e,n,r).times(this)},t.prototype.shear=function(e,n,r,o,i,s){return t.shear(e,n,r,o,i,s).times(this)},t.prototype.translate=function(e,n,r){return t.translate(e,n,r).times(this)},t.identity=function(){for(var e=new t,n=0;n<e.columns;n++)e.m[n][n]=1;return e},t.translate=function(e,n,r){var o=t.identity();return o.m[0][3]=e,o.m[1][3]=n,o.m[2][3]=r,o},t.scale=function(e,n,r){var o=t.identity();return o.m[0][0]=e,o.m[1][1]=n,o.m[2][2]=r,o},t.rotation_x=function(e){var n=t.identity();return n.m[1][1]=Math.cos(e),n.m[1][2]=-Math.sin(e),n.m[2][1]=Math.sin(e),n.m[2][2]=Math.cos(e),n},t.rotation_y=function(e){var n=t.identity();return n.m[0][0]=Math.cos(e),n.m[2][0]=-Math.sin(e),n.m[0][2]=Math.sin(e),n.m[2][2]=Math.cos(e),n},t.rotation_z=function(e){var n=t.identity();return n.m[0][0]=Math.cos(e),n.m[0][1]=-Math.sin(e),n.m[1][0]=Math.sin(e),n.m[1][1]=Math.cos(e),n},t.shear=function(e,n,r,o,i,s){var u=t.identity();return u.m[0][1]=e,u.m[0][2]=n,u.m[1][0]=r,u.m[1][2]=o,u.m[2][0]=i,u.m[2][1]=s,u},t}();e.Matrix=i},149:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Canvas=void 0;var r=n(919),o=n(894),i=function(){function t(t,e){this.colorRange=255,this.width=t,this.height=e,this.pixels=new Array(t*e)}return t.prototype.writePixel=function(t,e,n){this.pixels[this.getIndex(t,e)]=n},t.prototype.writeAllPixels=function(t){for(var e=0;e<this.pixels.length;e++)this.pixels[e]=t},t.prototype.getPixels=function(){var t=this;return this.pixels.map((function(e){return new r.Color(t.colorOf(e.red),t.colorOf(e.green),t.colorOf(e.blue))}))},t.prototype.pixelAt=function(t,e){return this.pixels[this.getIndex(t,e)]},t.prototype.colorOf=function(t){return(0,o.Map)(t,0,1,0,this.colorRange)},t.prototype.getIndex=function(t,e){return e*this.width+t},t.prototype.toPPM=function(){var t=new Array;return t.push("P3"),t.push("".concat(this.width," ").concat(this.height)),t.push("".concat(this.colorRange)),t.concat(this.writePPMBody())},t.prototype.writePPMBody=function(){for(var t,e=new Array,n=0;n<this.height;n++){for(var o=new Array,i=0;i<this.width;i++){var s=null!==(t=this.pixelAt(i,n))&&void 0!==t?t:new r.Color;o.push(s)}var u=this.splitIntoRowsForLengthRequirement(o);e=e.concat(u)}return e},t.prototype.splitIntoRowsForLengthRequirement=function(t){var e=this,n=new Array,r="";return t.forEach((function(t){for(var o=0;o<3;o++){var i="".concat(e.colorOf(t.vals[o])," ");r.length+i.length>71&&(n.push(r.trim()),r=""),r+=i}})),n.push(r.trim()),n},t}();e.Canvas=i}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t=n(919),e=n(858),r=n(986),o=n(524),i=n(168),s=n(149),u=(document.getElementById("app"),document.getElementById("kami-canvas")),a=u.getContext("2d"),c=u.width,p=u.height,f=new s.Canvas(c,p),l=new e.Point(0,0,-5),h=7/c,y=new i.Sphere;y.material.color=new t.Color(1,.2,1);for(var v=new e.Point(-10,-10,-10),d=new t.Color(1,1,1),m=new r.PointLight(d,v),g=0;g<p-1;g++)for(var b=3.5-h*g,w=0;w<c-1;w++){var _=h*w-3.5,P=new e.Point(_,b,10),O=new o.Ray(l,P.minus(l).normalize()),M=y.intersect(O).hit();if(null!=M){var j=O.position(M.t),x=M.obj.normalAt(j),A=O.direction.negate(),I=M.obj.material.lighting(m,j,A,x);f.writePixel(w,g,I)}}for(var C=f.getPixels(),T=a.createImageData(c,p),z=T.data,R=0;R<z.length;R+=4){var S=C[R/4];null!=S&&(z[R+0]=S.red,z[R+1]=S.green,z[R+2]=S.blue,z[R+3]=255)}a.putImageData(T,0,0)})()})();