/*! asynquence
    v0.1.1-a (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c():"function"==typeof define&&define.amd?define(c):b[a]=c(a,b)}("ASQ",this,function(a,b){function f(a){return"undefined"!=typeof setImmediate?setImmediate(a):setTimeout(a,0)}function g(){function a(){function a(){clearTimeout(v),v=null,r.length=0,s.length=0,t.length=0,u.length=0}function b(){return p?c():(v||(v=f(c)),void 0)}function c(){var c,e;if(v=null,p)a();else if(o)for(;s.length;){c=s.shift();try{c.apply(c,u)}catch(f){u.push(f),f.stack&&u.push(f.stack),0===s.length&&console.error.apply(console,u)}}else if(q&&r.length>0){q=!1,c=r.shift(),e=t.slice(),t.length=0,e.unshift(d());try{c.apply(c,e)}catch(f){u.push(f),o=!0,b()}}}function d(){function a(){o||p||q||(q=!0,t.push.apply(t,arguments),u.length=0,b())}return a.fail=function(){o||p||q||(o=!0,t.length=0,u.push.apply(u,arguments),b())},a.abort=function(){o||p||(q=!1,p=!0,t.length=0,u.length=0,b())},a}function g(a,b,c){function d(){clearTimeout(v),v=s=t=u=null}function g(){return l?h():(v||(v=f(h)),void 0)}function h(){if(!(o||p||m)){var b,c=[];if(v=null,k)a.fail.apply(a,u),d();else if(l)a.abort(),d();else if(i()){for(m=!0,b=0;b<s.length;b++)c.push(t["m"+b]);a.apply(a,c),d()}}}function i(){if(!(o||p||k||l||m||0===s.length)){var a,b=!0;for(a=0;a<s.length;a++)if(null===s[a]){b=!1;break}return b}}function j(){function a(){if(!(o||p||k||l||m||s[b])){var a=e.call(arguments);t["m"+b]=a.length>1?a:a[0],s[b]=!0,g()}}var b=s.length;return a.fail=function(){o||p||k||l||m||s[b]||(k=!0,u=e.call(arguments),g())},a.abort=function(){o||p||k||l||m||(l=!0,h())},s[b]=null,a}var n,q,r,u,v,k=!1,l=!1,m=!1,s=[],t={};for(n=0;n<b.length&&!k&&!l;n++){q=c.slice(),q.unshift(j());try{b[n].apply(b[n],q)}catch(w){r=w,k=!0;break}}r&&a.fail(r)}function h(){return o||p?w:(arguments.length>0&&r.push.apply(r,arguments),b(),w)}function i(){return p?w:(s.push.apply(s,arguments),b(),w)}function j(){if(o||p||0===arguments.length)return w;var a=e.apply(arguments);return h(function(b){var c=e.call(arguments);c.shift(),g(b,a,c)}),w}function k(){if(o||p||0===arguments.length)return w;var a,b=e.call(arguments);for(a=0;a<b.length;a++)!function(a){h(function(b){var c=e.call(arguments,1);a.apply(a,c),b()}).or(a.fail)}(b[a]);return w}function l(){if(o||p||0===arguments.length)return w;var a,b=e.call(arguments);for(a=0;a<b.length;a++)!function(a){h(function(b){var c=e.call(arguments,1);a.apply(a,c).pipe(b)})}(b[a]);return w}function m(){if(o||p||0===arguments.length)return w;var a,b=e.call(arguments);for(a=0;a<b.length;a++)!function(a){h(function(b){var c=e.call(arguments,1);b(a.apply(a,c))})}(b[a]);return w}function n(){return o?w:(p=!0,c(),w)}var v,o=!1,p=!1,q=!0,r=[],s=[],t=[],u=[],w={then:h,or:i,gate:j,pipe:k,seq:l,val:m,abort:n};return arguments.length>0&&w.then.apply(w,arguments),w}return a}var c,d=(b||{})[a],e=Array.prototype.slice;return c=g(),c.noConflict=function(){return b&&(b[a]=d),c},c});
