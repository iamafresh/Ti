"use strict";var precacheConfig=[["/Ti/about.html","0a625e428a52489c6a8eef019bd4f874"],["/Ti/index.html","509f308b0fd4c93672e7bbc6e1666117"],["/Ti/static/css/about.b2a58ea2.css","e0b5e6bd17a4da2d5ef753d7fe11e746"],["/Ti/static/css/index.3cc7d777.css","356d95e5b5a56eb630a006a754dfba6c"],["/Ti/static/js/about.24ac4c33.js","3027deb0dc349ce20b81a32a1a3fae02"],["/Ti/static/js/index.55fb68b3.js","ce01317a1f6903f85825b18b1fbb7920"],["/Ti/static/media/aboutBg.60b4b1a3.png","60b4b1a3f1c67771b2c6a224df63635c"],["/Ti/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/Ti/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/Ti/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/Ti/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/Ti/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/Ti/static/media/consulteBg.a5eda3db.png","a5eda3db851af701997f9fdbdd921ba2"],["/Ti/static/media/developBg.4fa16405.png","4fa16405e17c776deb45c25fcd1fa496"],["/Ti/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/Ti/static/media/headerBg.aa70cd05.jpg","aa70cd0518af5e9a7bc5bdd995e53422"],["/Ti/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/Ti/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/Ti/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/Ti/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/Ti/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/Ti/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/Ti/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/Ti/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/Ti/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/Ti/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/Ti/static/media/platform.f1327707.jpg","f1327707ecfa4847331d5661a1cdbfe0"],["/Ti/static/media/social.97ccbbe6.png","97ccbbe68bb465b1af3e2afbf73f47b8"],["/Ti/static/media/unionChain.5b33d9f1.jpg","5b33d9f1bccab7afd14963870dc12512"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/Ti/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});