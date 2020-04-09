/*
 Highcharts JS v6.1.4 (2018-09-25)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(T,K){"object"===typeof module&&module.exports?module.exports=T.document?K(T):K:"function"===typeof define&&define.amd?define(function(){return K(T)}):T.Highcharts=K(T)})("undefined"!==typeof window?window:this,function(T){var K=function(){var a="undefined"===typeof T?window:T,C=a.document,E=a.navigator&&a.navigator.userAgent||"",F=C&&C.createElementNS&&!!C.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,m=/(edge|msie|trident)/i.test(E)&&!a.opera,h=-1!==E.indexOf("Firefox"),
e=-1!==E.indexOf("Chrome"),t=h&&4>parseInt(E.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",version:"6.1.4",deg2rad:2*Math.PI/360,doc:C,hasBidiBug:t,hasTouch:C&&void 0!==C.documentElement.ontouchstart,isMS:m,isWebKit:-1!==E.indexOf("AppleWebKit"),isFirefox:h,isChrome:e,isSafari:!e&&-1!==E.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(E),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:F,win:a,marginNames:["plotTop",
"marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){a.timers=[];var C=a.charts,E=a.doc,F=a.win;a.error=function(m,h){m=a.isNumber(m)?"Highcharts error #"+m+": www.highcharts.com/errors/"+m:m;if(h)throw Error(m);F.console&&console.log(m)};a.Fx=function(a,h,e){this.options=h;this.elem=a;this.prop=e};a.Fx.prototype={dSetter:function(){var a=this.paths[0],h=this.paths[1],e=[],t=this.now,x=a.length,p;if(1===t)e=this.toD;else if(x===h.length&&1>t)for(;x--;)p=parseFloat(a[x]),
e[x]=isNaN(p)?h[x]:t*parseFloat(h[x]-p)+p;else e=h;this.elem.attr("d",e,null,!0)},update:function(){var a=this.elem,h=this.prop,e=this.now,t=this.options.step;if(this[h+"Setter"])this[h+"Setter"]();else a.attr?a.element&&a.attr(h,e,null,!0):a.style[h]=e+this.unit;t&&t.call(a,e,this)},run:function(m,h,e){var t=this,x=t.options,p=function(a){return p.stopped?!1:t.step(a)},u=F.requestAnimationFrame||function(a){setTimeout(a,13)},f=function(){for(var c=0;c<a.timers.length;c++)a.timers[c]()||a.timers.splice(c--,
1);a.timers.length&&u(f)};m!==h||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=m,this.end=h,this.unit=e,this.now=this.start,this.pos=0,p.elem=this.elem,p.prop=this.prop,p()&&1===a.timers.push(p)&&u(f)):(delete x.curAnim[this.prop],x.complete&&0===a.keys(x.curAnim).length&&x.complete.call(this.elem))},step:function(m){var h=+new Date,e,t=this.options,x=this.elem,p=t.complete,u=t.duration,f=t.curAnim;x.attr&&!x.element?m=!1:m||h>=u+this.startTime?(this.now=this.end,this.pos=
1,this.update(),e=f[this.prop]=!0,a.objectEach(f,function(a){!0!==a&&(e=!1)}),e&&p&&p.call(x),m=!1):(this.pos=t.easing((h-this.startTime)/u),this.now=this.start+(this.end-this.start)*this.pos,this.update(),m=!0);return m},initPath:function(m,h,e){function t(a){var d,l;for(b=a.length;b--;)d="M"===a[b]||"L"===a[b],l=/[a-zA-Z]/.test(a[b+3]),d&&l&&a.splice(b+1,0,a[b+1],a[b+2],a[b+1],a[b+2])}function x(a,d){for(;a.length<l;){a[0]=d[l-a.length];var c=a.slice(0,r);[].splice.apply(a,[0,0].concat(c));v&&(c=
a.slice(a.length-r),[].splice.apply(a,[a.length,0].concat(c)),b--)}a[0]="M"}function p(a,b){for(var c=(l-a.length)/r;0<c&&c--;)d=a.slice().splice(a.length/q-r,r*q),d[0]=b[l-r-c*r],k&&(d[r-6]=d[r-2],d[r-5]=d[r-1]),[].splice.apply(a,[a.length/q,0].concat(d)),v&&c--}h=h||"";var u,f=m.startX,c=m.endX,k=-1<h.indexOf("C"),r=k?7:3,l,d,b;h=h.split(" ");e=e.slice();var v=m.isArea,q=v?2:1,I;k&&(t(h),t(e));if(f&&c){for(b=0;b<f.length;b++)if(f[b]===c[0]){u=b;break}else if(f[0]===c[c.length-f.length+b]){u=b;I=
!0;break}void 0===u&&(h=[])}h.length&&a.isNumber(u)&&(l=e.length+u*q*r,I?(x(h,e),p(e,h)):(x(e,h),p(h,e)));return[h,e]},fillSetter:function(){a.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)}};a.merge=function(){var m,h=arguments,e,t={},x=function(e,m){"object"!==typeof e&&(e={});a.objectEach(m,function(f,c){!a.isObject(f,!0)||a.isClass(f)||a.isDOMElement(f)?e[c]=m[c]:e[c]=x(e[c]||{},
f)});return e};!0===h[0]&&(t=h[1],h=Array.prototype.slice.call(h,2));e=h.length;for(m=0;m<e;m++)t=x(t,h[m]);return t};a.pInt=function(a,h){return parseInt(a,h||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(m,h){return!!m&&"object"===typeof m&&(!h||!a.isArray(m))};a.isDOMElement=function(m){return a.isObject(m)&&"number"===typeof m.nodeType};a.isClass=function(m){var h=
m&&m.constructor;return!(!a.isObject(m,!0)||a.isDOMElement(m)||!h||!h.name||"Object"===h.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,h){for(var e=a.length;e--;)if(a[e]===h){a.splice(e,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(m,h,e){var t;a.isString(h)?a.defined(e)?m.setAttribute(h,e):m&&m.getAttribute&&((t=m.getAttribute(h))||"class"!==h||(t=m.getAttribute(h+"Name"))):a.defined(h)&&a.isObject(h)&&
a.objectEach(h,function(a,e){m.setAttribute(e,a)});return t};a.splat=function(m){return a.isArray(m)?m:[m]};a.syncTimeout=function(a,h,e){if(h)return setTimeout(a,h,e);a.call(0,e)};a.clearTimeout=function(m){a.defined(m)&&clearTimeout(m)};a.extend=function(a,h){var e;a||(a={});for(e in h)a[e]=h[e];return a};a.pick=function(){var a=arguments,h,e,t=a.length;for(h=0;h<t;h++)if(e=a[h],void 0!==e&&null!==e)return e};a.css=function(m,h){a.isMS&&!a.svg&&h&&void 0!==h.opacity&&(h.filter="alpha(opacity\x3d"+
100*h.opacity+")");a.extend(m.style,h)};a.createElement=function(m,h,e,t,x){m=E.createElement(m);var p=a.css;h&&a.extend(m,h);x&&p(m,{padding:0,border:"none",margin:0});e&&p(m,e);t&&t.appendChild(m);return m};a.extendClass=function(m,h){var e=function(){};e.prototype=new m;a.extend(e.prototype,h);return e};a.pad=function(a,h,e){return Array((h||2)+1-String(a).replace("-","").length).join(e||0)+a};a.relativeLength=function(a,h,e){return/%$/.test(a)?h*parseFloat(a)/100+(e||0):parseFloat(a)};a.wrap=
function(a,h,e){var m=a[h];a[h]=function(){var a=Array.prototype.slice.call(arguments),p=arguments,u=this;u.proceed=function(){m.apply(u,arguments.length?arguments:p)};a.unshift(m);a=e.apply(this,a);u.proceed=null;return a}};a.formatSingle=function(m,h,e){var t=/\.([0-9])/,x=a.defaultOptions.lang;/f$/.test(m)?(e=(e=m.match(t))?e[1]:-1,null!==h&&(h=a.numberFormat(h,e,x.decimalPoint,-1<m.indexOf(",")?x.thousandsSep:""))):h=(e||a.time).dateFormat(m,h);return h};a.format=function(m,h,e){for(var t="{",
x=!1,p,u,f,c,k=[],r;m;){t=m.indexOf(t);if(-1===t)break;p=m.slice(0,t);if(x){p=p.split(":");u=p.shift().split(".");c=u.length;r=h;for(f=0;f<c;f++)r&&(r=r[u[f]]);p.length&&(r=a.formatSingle(p.join(":"),r,e));k.push(r)}else k.push(p);m=m.slice(t+1);t=(x=!x)?"}":"{"}k.push(m);return k.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(m,h,e,t,x){var p,u=m;e=a.pick(e,1);p=m/e;h||(h=x?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],
!1===t&&(1===e?h=a.grep(h,function(a){return 0===a%1}):.1>=e&&(h=[1/e])));for(t=0;t<h.length&&!(u=h[t],x&&u*e>=m||!x&&p<=(h[t]+(h[t+1]||h[t]))/2);t++);return u=a.correctFloat(u*e,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,h){var e=a.length,m,x;for(x=0;x<e;x++)a[x].safeI=x;a.sort(function(a,e){m=h(a,e);return 0===m?a.safeI-e.safeI:m});for(x=0;x<e;x++)delete a[x].safeI};a.arrayMin=function(a){for(var h=a.length,e=a[0];h--;)a[h]<e&&(e=a[h]);return e};a.arrayMax=function(a){for(var h=
a.length,e=a[0];h--;)a[h]>e&&(e=a[h]);return e};a.destroyObjectProperties=function(m,h){a.objectEach(m,function(a,t){a&&a!==h&&a.destroy&&a.destroy();delete m[t]})};a.discardElement=function(m){var h=a.garbageBin;h||(h=a.createElement("div"));m&&h.appendChild(m);h.innerHTML=""};a.correctFloat=function(a,h){return parseFloat(a.toPrecision(h||14))};a.setAnimation=function(m,h){h.renderer.globalAnimation=a.pick(m,h.options.chart.animation,!0)};a.animObject=function(m){return a.isObject(m)?a.merge(m):
{duration:m?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(m,h,e,t){m=+m||0;h=+h;var x=a.defaultOptions.lang,p=(m.toString().split(".")[1]||"").split("e")[0].length,u,f,c=m.toString().split("e");-1===h?h=Math.min(p,20):a.isNumber(h)?h&&c[1]&&0>c[1]&&(u=h+ +c[1],0<=u?(c[0]=(+c[0]).toExponential(u).split("e")[0],h=u):(c[0]=c[0].split(".")[0]||0,m=20>h?(c[0]*Math.pow(10,c[1])).toFixed(h):0,c[1]=0)):h=2;f=(Math.abs(c[1]?
c[0]:m)+Math.pow(10,-Math.max(h,p)-1)).toFixed(h);p=String(a.pInt(f));u=3<p.length?p.length%3:0;e=a.pick(e,x.decimalPoint);t=a.pick(t,x.thousandsSep);m=(0>m?"-":"")+(u?p.substr(0,u)+t:"");m+=p.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+t);h&&(m+=e+f.slice(-h));c[1]&&0!==+m&&(m+="e"+c[1]);return m};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(m,h,e){if("width"===h)return Math.max(0,Math.min(m.offsetWidth,m.scrollWidth)-a.getStyle(m,"padding-left")-a.getStyle(m,
"padding-right"));if("height"===h)return Math.max(0,Math.min(m.offsetHeight,m.scrollHeight)-a.getStyle(m,"padding-top")-a.getStyle(m,"padding-bottom"));F.getComputedStyle||a.error(27,!0);if(m=F.getComputedStyle(m,void 0))m=m.getPropertyValue(h),a.pick(e,"opacity"!==h)&&(m=a.pInt(m));return m};a.inArray=function(m,h,e){return(a.indexOfPolyfill||Array.prototype.indexOf).call(h,m,e)};a.grep=function(m,h){return(a.filterPolyfill||Array.prototype.filter).call(m,h)};a.find=Array.prototype.find?function(a,
h){return a.find(h)}:function(a,h){var e,t=a.length;for(e=0;e<t;e++)if(h(a[e],e))return a[e]};a.some=function(m,h,e){return(a.somePolyfill||Array.prototype.some).call(m,h,e)};a.map=function(a,h){for(var e=[],t=0,x=a.length;t<x;t++)e[t]=h.call(a[t],a[t],t,a);return e};a.keys=function(m){return(a.keysPolyfill||Object.keys).call(void 0,m)};a.reduce=function(m,h,e){return(a.reducePolyfill||Array.prototype.reduce).apply(m,2<arguments.length?[h,e]:[h])};a.offset=function(a){var h=E.documentElement;a=a.parentElement||
a.parentNode?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(F.pageYOffset||h.scrollTop)-(h.clientTop||0),left:a.left+(F.pageXOffset||h.scrollLeft)-(h.clientLeft||0)}};a.stop=function(m,h){for(var e=a.timers.length;e--;)a.timers[e].elem!==m||h&&h!==a.timers[e].prop||(a.timers[e].stopped=!0)};a.each=function(m,h,e){return(a.forEachPolyfill||Array.prototype.forEach).call(m,h,e)};a.objectEach=function(a,h,e){for(var t in a)a.hasOwnProperty(t)&&h.call(e||a[t],a[t],t,a)};a.addEvent=function(m,
h,e,t){var x,p=m.addEventListener||a.addEventListenerPolyfill;x="function"===typeof m&&m.prototype?m.prototype.protoEvents=m.prototype.protoEvents||{}:m.hcEvents=m.hcEvents||{};a.Point&&m instanceof a.Point&&m.series&&m.series.chart&&(m.series.chart.runTrackerClick=!0);p&&p.call(m,h,e,!1);x[h]||(x[h]=[]);x[h].push(e);t&&a.isNumber(t.order)&&(e.order=t.order,x[h].sort(function(a,f){return a.order-f.order}));return function(){a.removeEvent(m,h,e)}};a.removeEvent=function(m,h,e){function t(f,c){var k=
m.removeEventListener||a.removeEventListenerPolyfill;k&&k.call(m,f,c,!1)}function x(f){var c,k;m.nodeName&&(h?(c={},c[h]=!0):c=f,a.objectEach(c,function(a,c){if(f[c])for(k=f[c].length;k--;)t(c,f[c][k])}))}var p,u;a.each(["protoEvents","hcEvents"],function(f){var c=m[f];c&&(h?(p=c[h]||[],e?(u=a.inArray(e,p),-1<u&&(p.splice(u,1),c[h]=p),t(h,e)):(x(c),c[h]=[])):(x(c),m[f]={}))})};a.fireEvent=function(m,h,e,t){var x,p,u,f,c;e=e||{};E.createEvent&&(m.dispatchEvent||m.fireEvent)?(x=E.createEvent("Events"),
x.initEvent(h,!0,!0),a.extend(x,e),m.dispatchEvent?m.dispatchEvent(x):m.fireEvent(h,x)):a.each(["protoEvents","hcEvents"],function(k){if(m[k])for(p=m[k][h]||[],u=p.length,e.target||a.extend(e,{preventDefault:function(){e.defaultPrevented=!0},target:m,type:h}),f=0;f<u;f++)(c=p[f])&&!1===c.call(m,e)&&e.preventDefault()});t&&!e.defaultPrevented&&t.call(m,e)};a.animate=function(m,h,e){var t,x="",p,u,f;a.isObject(e)||(f=arguments,e={duration:f[2],easing:f[3],complete:f[4]});a.isNumber(e.duration)||(e.duration=
400);e.easing="function"===typeof e.easing?e.easing:Math[e.easing]||Math.easeInOutSine;e.curAnim=a.merge(h);a.objectEach(h,function(c,f){a.stop(m,f);u=new a.Fx(m,e,f);p=null;"d"===f?(u.paths=u.initPath(m,m.d,h.d),u.toD=h.d,t=0,p=1):m.attr?t=m.attr(f):(t=parseFloat(a.getStyle(m,f))||0,"opacity"!==f&&(x="px"));p||(p=c);p&&p.match&&p.match("px")&&(p=p.replace(/px/g,""));u.run(t,p,x)})};a.seriesType=function(m,h,e,t,x){var p=a.getOptions(),u=a.seriesTypes;p.plotOptions[m]=a.merge(p.plotOptions[h],e);
u[m]=a.extendClass(u[h]||function(){},t);u[m].prototype.type=m;x&&(u[m].prototype.pointClass=a.extendClass(a.Point,x));return u[m]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),h=0;return function(){return"highcharts-"+a+"-"+h++}}();F.jQuery&&(F.jQuery.fn.highcharts=function(){var m=[].slice.call(arguments);if(this[0])return m[0]?(new (a[a.isString(m[0])?m.shift():"Chart"])(this[0],m[0],m[1]),this):C[a.attr(this[0],"data-highcharts-chart")]})})(K);(function(a){var C=a.each,
E=a.isNumber,F=a.map,m=a.merge,h=a.pInt;a.Color=function(e){if(!(this instanceof a.Color))return new a.Color(e);this.init(e)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[h(a[1]),h(a[2]),h(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[h(a[1]),h(a[2]),h(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(e){var h,
x,p,u;if((this.input=e=this.names[e&&e.toLowerCase?e.toLowerCase():""]||e)&&e.stops)this.stops=F(e.stops,function(f){return new a.Color(f[1])});else if(e&&e.charAt&&"#"===e.charAt()&&(h=e.length,e=parseInt(e.substr(1),16),7===h?x=[(e&16711680)>>16,(e&65280)>>8,e&255,1]:4===h&&(x=[(e&3840)>>4|(e&3840)>>8,(e&240)>>4|e&240,(e&15)<<4|e&15,1])),!x)for(p=this.parsers.length;p--&&!x;)u=this.parsers[p],(h=u.regex.exec(e))&&(x=u.parse(h));this.rgba=x||[]},get:function(a){var e=this.input,h=this.rgba,p;this.stops?
(p=m(e),p.stops=[].concat(p.stops),C(this.stops,function(e,f){p.stops[f]=[p.stops[f][0],e.get(a)]})):p=h&&E(h[0])?"rgb"===a||!a&&1===h[3]?"rgb("+h[0]+","+h[1]+","+h[2]+")":"a"===a?h[3]:"rgba("+h.join(",")+")":e;return p},brighten:function(a){var e,x=this.rgba;if(this.stops)C(this.stops,function(e){e.brighten(a)});else if(E(a)&&0!==a)for(e=0;3>e;e++)x[e]+=h(255*a),0>x[e]&&(x[e]=0),255<x[e]&&(x[e]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,h){var e=this.rgba,
p=a.rgba;p.length&&e&&e.length?(a=1!==p[3]||1!==e[3],h=(a?"rgba(":"rgb(")+Math.round(p[0]+(e[0]-p[0])*(1-h))+","+Math.round(p[1]+(e[1]-p[1])*(1-h))+","+Math.round(p[2]+(e[2]-p[2])*(1-h))+(a?","+(p[3]+(e[3]-p[3])*(1-h)):"")+")"):h=a.input||"none";return h}};a.color=function(e){return new a.Color(e)}})(K);(function(a){var C,E,F=a.addEvent,m=a.animate,h=a.attr,e=a.charts,t=a.color,x=a.css,p=a.createElement,u=a.defined,f=a.deg2rad,c=a.destroyObjectProperties,k=a.doc,r=a.each,l=a.extend,d=a.erase,b=a.grep,
v=a.hasTouch,q=a.inArray,I=a.isArray,w=a.isFirefox,L=a.isMS,B=a.isObject,H=a.isString,n=a.isWebKit,D=a.merge,A=a.noop,M=a.objectEach,G=a.pick,g=a.pInt,y=a.removeEvent,Q=a.stop,N=a.svg,J=a.SVG_NS,P=a.symbolSizes,O=a.win;C=a.SVGElement=function(){return this};l(C.prototype,{opacity:1,SVG_NS:J,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),init:function(a,g){this.element="span"===g?p(g):k.createElementNS(this.SVG_NS,
g);this.renderer=a},animate:function(z,g,b){g=a.animObject(G(g,this.renderer.globalAnimation,!0));0!==g.duration?(b&&(g.complete=b),m(this,z,g)):(this.attr(z,null,b),g.step&&g.step.call(this));return this},complexColor:function(z,g,b){var y=this.renderer,d,c,l,n,f,J,A,k,R,v,q,w=[],N;a.fireEvent(this.renderer,"complexColor",{args:arguments},function(){z.radialGradient?c="radialGradient":z.linearGradient&&(c="linearGradient");c&&(l=z[c],f=y.gradients,A=z.stops,v=b.radialReference,I(l)&&(z[c]=l={x1:l[0],
y1:l[1],x2:l[2],y2:l[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===c&&v&&!u(l.gradientUnits)&&(n=l,l=D(l,y.getRadialAttr(v,n),{gradientUnits:"userSpaceOnUse"})),M(l,function(a,z){"id"!==z&&w.push(z,a)}),M(A,function(a){w.push(a)}),w=w.join(","),f[w]?q=f[w].attr("id"):(l.id=q=a.uniqueKey(),f[w]=J=y.createElement(c).attr(l).add(y.defs),J.radAttr=n,J.stops=[],r(A,function(z){0===z[1].indexOf("rgba")?(d=a.color(z[1]),k=d.get("rgb"),R=d.get("a")):(k=z[1],R=1);z=y.createElement("stop").attr({offset:z[0],
"stop-color":k,"stop-opacity":R}).add(J);J.stops.push(z)})),N="url("+y.url+"#"+q+")",b.setAttribute(g,N),b.gradient=w,z.toString=function(){return N})})},applyTextOutline:function(z){var g=this.element,b,y,c,l,n;-1!==z.indexOf("contrast")&&(z=z.replace(/contrast/g,this.renderer.getContrast(g.style.fill)));z=z.split(" ");y=z[z.length-1];if((c=z[0])&&"none"!==c&&a.svg){this.fakeTS=!0;z=[].slice.call(g.getElementsByTagName("tspan"));this.ySetter=this.xSetter;c=c.replace(/(^[\d\.]+)(.*?)$/g,function(a,
z,g){return 2*z+g});for(n=z.length;n--;)b=z[n],"highcharts-text-outline"===b.getAttribute("class")&&d(z,g.removeChild(b));l=g.firstChild;r(z,function(a,z){0===z&&(a.setAttribute("x",g.getAttribute("x")),z=g.getAttribute("y"),a.setAttribute("y",z||0),null===z&&g.setAttribute("y",0));a=a.cloneNode(1);h(a,{"class":"highcharts-text-outline",fill:y,stroke:y,"stroke-width":c,"stroke-linejoin":"round"});g.insertBefore(a,l)})}},attr:function(a,g,b,y){var z,d=this.element,c,l=this,n,f;"string"===typeof a&&
void 0!==g&&(z=a,a={},a[z]=g);"string"===typeof a?l=(this[a+"Getter"]||this._defaultGetter).call(this,a,d):(M(a,function(z,g){n=!1;y||Q(this,g);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(g)&&(c||(this.symbolAttr(a),c=!0),n=!0);!this.rotation||"x"!==g&&"y"!==g||(this.doTransform=!0);n||(f=this[g+"Setter"]||this._defaultSetter,f.call(this,z,g,d),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g)&&this.updateShadows(g,z,f))},this),this.afterSetters());
b&&b.call(this);return l},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,g,b){for(var z=this.shadows,y=z.length;y--;)b.call(z[y],"height"===a?Math.max(g-(z[y].cutHeight||0),0):"d"===a?this.d:g,a,z[y])},addClass:function(a,g){var z=this.attr("class")||"";-1===z.indexOf(a)&&(g||(a=(z+(z?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==q(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",
(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var z=this;r("x y r start end width height innerR anchorX anchorY".split(" "),function(g){z[g]=G(a[g],z[g])});z.attr({d:z.renderer.symbols[z.symbolName](z.x,z.y,z.width,z.height,z)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,g){var z;g=g||a.strokeWidth||0;z=Math.round(g)%2/2;a.x=Math.floor(a.x||this.x||0)+z;a.y=Math.floor(a.y||this.y||0)+z;a.width=Math.floor((a.width||
this.width||0)-2*z);a.height=Math.floor((a.height||this.height||0)-2*z);u(a.strokeWidth)&&(a.strokeWidth=g);return a},css:function(a){var z=this.styles,b={},y=this.element,d,c="",n,f=!z,J=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);z&&M(a,function(a,g){a!==z[g]&&(b[g]=a,f=!0)});f&&(z&&(a=l(z,b)),a&&(null===a.width||"auto"===a.width?delete this.textWidth:"text"===y.nodeName.toLowerCase()&&a.width&&(d=this.textWidth=g(a.width))),this.styles=a,d&&!N&&this.renderer.forExport&&
delete a.width,y.namespaceURI===this.SVG_NS?(n=function(a,z){return"-"+z.toLowerCase()},M(a,function(a,z){-1===q(z,J)&&(c+=z.replace(/([A-Z])/g,n)+":"+a+";")}),c&&h(y,"style",c)):x(y,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,g){var z=this,b=z.element;v&&"click"===a?(b.ontouchstart=function(a){z.touchEventFired=Date.now();a.preventDefault();
g.call(b,a)},b.onclick=function(a){(-1===O.navigator.userAgent.indexOf("Android")||1100<Date.now()-(z.touchEventFired||0))&&g.call(b,a)}):b["on"+a]=g;return this},setRadialReference:function(a){var z=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;z&&z.radAttr&&z.animate(this.renderer.getRadialAttr(a,z.radAttr));return this},translate:function(a,g){return this.attr({translateX:a,translateY:g})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=
this.translateX||0,g=this.translateY||0,b=this.scaleX,y=this.scaleY,d=this.inverted,c=this.rotation,l=this.matrix,n=this.element;d&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];u(l)&&a.push("matrix("+l.join(",")+")");d?a.push("rotate(90) scale(-1,1)"):c&&a.push("rotate("+c+" "+G(this.rotationOriginX,n.getAttribute("x"),0)+" "+G(this.rotationOriginY,n.getAttribute("y")||0)+")");(u(b)||u(y))&&a.push("scale("+G(b,1)+" "+G(y,1)+")");a.length&&n.setAttribute("transform",a.join(" "))},toFront:function(){var a=
this.element;a.parentNode.appendChild(a);return this},align:function(a,g,b){var z,y,c,l,n={};y=this.renderer;c=y.alignedObjects;var f,J;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!b||H(b))this.alignTo=z=b||"renderer",d(c,this),c.push(this),b=null}else a=this.alignOptions,g=this.alignByTranslate,z=this.alignTo;b=G(b,y[z],y);z=a.align;y=a.verticalAlign;c=(b.x||0)+(a.x||0);l=(b.y||0)+(a.y||0);"right"===z?f=1:"center"===z&&(f=2);f&&(c+=(b.width-(a.width||0))/f);n[g?"translateX":"x"]=Math.round(c);
"bottom"===y?J=1:"middle"===y&&(J=2);J&&(l+=(b.height-(a.height||0))/J);n[g?"translateY":"y"]=Math.round(l);this[this.placed?"animate":"attr"](n);this.placed=!0;this.alignAttr=n;return this},getBBox:function(a,g){var z,b=this.renderer,y,d=this.element,c=this.styles,n,J=this.textStr,A,k=b.cache,v=b.cacheKeys,q;g=G(g,this.rotation);y=g*f;n=c&&c.fontSize;u(J)&&(q=J.toString(),-1===q.indexOf("\x3c")&&(q=q.replace(/[0-9]/g,"0")),q+=["",g||0,n,this.textWidth,c&&c.textOverflow].join());q&&!a&&(z=k[q]);if(!z){if(d.namespaceURI===
this.SVG_NS||b.forExport){try{(A=this.fakeTS&&function(a){r(d.querySelectorAll(".highcharts-text-outline"),function(z){z.style.display=a})})&&A("none"),z=d.getBBox?l({},d.getBBox()):{width:d.offsetWidth,height:d.offsetHeight},A&&A("")}catch(W){}if(!z||0>z.width)z={width:0,height:0}}else z=this.htmlGetBBox();b.isSVG&&(a=z.width,b=z.height,c&&"11px"===c.fontSize&&17===Math.round(b)&&(z.height=b=14),g&&(z.width=Math.abs(b*Math.sin(y))+Math.abs(a*Math.cos(y)),z.height=Math.abs(b*Math.cos(y))+Math.abs(a*
Math.sin(y))));if(q&&0<z.height){for(;250<v.length;)delete k[v.shift()];k[q]||v.push(q);k[q]=z}}return z},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var z=this;z.animate({opacity:0},{duration:a||150,complete:function(){z.attr({y:-9999})}})},add:function(a){var z=this.renderer,g=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&z.buildText(this);this.added=
!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:z.box).appendChild(g);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var z=a.parentNode;z&&z.removeChild(a)},destroy:function(){var a=this,g=a.element||{},b=a.renderer.isSVG&&"SPAN"===g.nodeName&&a.parentGroup,y=g.ownerSVGElement,c=a.clipPath;g.onclick=g.onmouseout=g.onmouseover=g.onmousemove=g.point=null;Q(a);c&&y&&(r(y.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var g=a.getAttribute("clip-path"),
z=c.element.id;(-1<g.indexOf("(#"+z+")")||-1<g.indexOf('("#'+z+'")'))&&a.removeAttribute("clip-path")}),a.clipPath=c.destroy());if(a.stops){for(y=0;y<a.stops.length;y++)a.stops[y]=a.stops[y].destroy();a.stops=null}a.safeRemoveChild(g);for(a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)g=b.parentGroup,a.safeRemoveChild(b.div),delete b.div,b=g;a.alignTo&&d(a.renderer.alignedObjects,a);M(a,function(g,z){delete a[z]});return null},shadow:function(a,g,b){var z=[],y,d,c=this.element,l,n,f,J;
if(!a)this.destroyShadows();else if(!this.shadows){n=G(a.width,3);f=(a.opacity||.15)/n;J=this.parentInverted?"(-1,-1)":"("+G(a.offsetX,1)+", "+G(a.offsetY,1)+")";for(y=1;y<=n;y++)d=c.cloneNode(0),l=2*n+1-2*y,h(d,{stroke:a.color||"#000000","stroke-opacity":f*y,"stroke-width":l,transform:"translate"+J,fill:"none"}),d.setAttribute("class",(d.getAttribute("class")||"")+" highcharts-shadow"),b&&(h(d,"height",Math.max(h(d,"height")-l,0)),d.cutHeight=l),g?g.element.appendChild(d):c.parentNode&&c.parentNode.insertBefore(d,
c),z.push(d);this.shadows=z}return this},destroyShadows:function(){r(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=G(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,g,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&
(a="M 0 0");this[g]!==a&&(b.setAttribute(g,a),this[g]=a)},dashstyleSetter:function(a){var b,z=this["stroke-width"];"inherit"===z&&(z=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=g(a[b])*z;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",
a)}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,g,b){this[g]=a;b.setAttribute(g,a)},titleSetter:function(a){var g=this.element.getElementsByTagName("title")[0];g||(g=k.createElementNS(this.SVG_NS,"title"),this.element.appendChild(g));g.firstChild&&g.removeChild(g.firstChild);g.appendChild(k.createTextNode(String(G(a),"").replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},
textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,g,b){"string"===typeof a?b.setAttribute(g,a):a&&this.complexColor(a,g,b)},visibilitySetter:function(a,g,b){"inherit"===a?b.removeAttribute(g):this[g]!==a&&b.setAttribute(g,a);this[g]=a},zIndexSetter:function(a,b){var y=this.renderer,z=this.parentGroup,d=(z||y).element||y.box,c,l=this.element,n,f,y=d===y.box;c=this.added;var J;u(a)?(l.setAttribute("data-z-index",
a),a=+a,this[b]===a&&(c=!1)):u(this[b])&&l.removeAttribute("data-z-index");this[b]=a;if(c){(a=this.zIndex)&&z&&(z.handleZ=!0);b=d.childNodes;for(J=b.length-1;0<=J&&!n;J--)if(z=b[J],c=z.getAttribute("data-z-index"),f=!u(c),z!==l)if(0>a&&f&&!y&&!J)d.insertBefore(l,b[J]),n=!0;else if(g(c)<=a||f&&(!u(a)||0<=a))d.insertBefore(l,b[J+1]||null),n=!0;n||(d.insertBefore(l,b[y?3:0]||null),n=!0)}return n},_defaultSetter:function(a,g,b){b.setAttribute(g,a)}});C.prototype.yGetter=C.prototype.xGetter;C.prototype.translateXSetter=
C.prototype.translateYSetter=C.prototype.rotationSetter=C.prototype.verticalAlignSetter=C.prototype.rotationOriginXSetter=C.prototype.rotationOriginYSetter=C.prototype.scaleXSetter=C.prototype.scaleYSetter=C.prototype.matrixSetter=function(a,g){this[g]=a;this.doTransform=!0};C.prototype["stroke-widthSetter"]=C.prototype.strokeSetter=function(a,g,b){this[g]=a;this.stroke&&this["stroke-width"]?(C.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),
this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};E=a.SVGRenderer=function(){this.init.apply(this,arguments)};l(E.prototype,{Element:C,SVG_NS:J,init:function(a,g,b,y,d,c){var z;y=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(y));z=y.element;a.appendChild(z);h(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&h(z,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=z;this.boxWrapper=y;this.alignedObjects=
[];this.url=(w||n)&&k.getElementsByTagName("base").length?O.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(k.createTextNode("Created with Highcharts 6.1.4"));this.defs=this.createElement("defs").add();this.allowHTML=c;this.forExport=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,b,!1);var l;w&&a.getBoundingClientRect&&(g=function(){x(a,{left:0,top:0});l=
a.getBoundingClientRect();x(a,{left:Math.ceil(l.left)-l.left+"px",top:Math.ceil(l.top)-l.top+"px"})},g(),this.unSubPixelFix=F(O,"resize",g))},getStyle:function(a){return this.style=l({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();c(this.gradients||
{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;g.init(this,a);return g},draw:A,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-a[2]/2+g.cy*a[2],r:g.r*a[2]}},truncate:function(a,g,b,y,d,c,l){var z=this,n=a.rotation,f,J=y?1:0,A=(b||y).length,v=A,q=[],r=function(a){g.firstChild&&g.removeChild(g.firstChild);a&&g.appendChild(k.createTextNode(a))},w=function(c,
n){n=n||c;if(void 0===q[n])if(g.getSubStringLength)try{q[n]=d+g.getSubStringLength(0,y?n+1:n)}catch(X){}else r(l(b||y,c)),q[n]=d+z.getSpanWidth(a,g);return q[n]},D,N;a.rotation=0;D=w(g.textContent.length);if(N=d+D>c){for(;J<=A;)v=Math.ceil((J+A)/2),y&&(f=l(y,v)),D=w(v,f&&f.length-1),J===A?J=A+1:D>c?A=v-1:J=v;0===A?r(""):b&&A===b.length-1||r(f||l(b||y,v))}y&&y.splice(0,v);a.actualWidth=D;a.rotation=n;return N},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},
buildText:function(a){var y=a.element,d=this,c=d.forExport,l=G(a.textStr,"").toString(),n=-1!==l.indexOf("\x3c"),z=y.childNodes,f,A=h(y,"x"),v=a.styles,w=a.textWidth,D=v&&v.lineHeight,e=v&&v.textOutline,B=v&&"ellipsis"===v.textOverflow,Q=v&&"nowrap"===v.whiteSpace,P=v&&v.fontSize,u,p,I=z.length,v=w&&!a.added&&this.box,H=function(a){var b;b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:P||d.style.fontSize||12;return D?g(D):d.fontMetrics(b,a.getAttribute("style")?a:y).h},O=function(a,g){M(d.escapes,
function(b,y){g&&-1!==q(b,g)||(a=a.toString().replace(new RegExp(b,"g"),y))});return a},m=function(a,g){var b;b=a.indexOf("\x3c");a=a.substring(b,a.indexOf("\x3e")-b);b=a.indexOf(g+"\x3d");if(-1!==b&&(b=b+g.length+1,g=a.charAt(b),'"'===g||"'"===g))return a=a.substring(b+1),a.substring(0,a.indexOf(g))};u=[l,B,Q,D,e,P,w].join();if(u!==a.textCache){for(a.textCache=u;I--;)y.removeChild(z[I]);n||e||B||w||-1!==l.indexOf(" ")?(v&&v.appendChild(y),l=n?l.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[l],l=b(l,function(a){return""!==a}),r(l,function(g,b){var l,n=0,z=0;g=g.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");l=g.split("|||");r(l,function(g){if(""!==g||1===l.length){var v={},q=k.createElementNS(d.SVG_NS,"tspan"),r,D;(r=m(g,"class"))&&h(q,"class",r);if(r=m(g,"style"))r=r.replace(/(;| |^)color([ :])/,
"$1fill$2"),h(q,"style",r);(D=m(g,"href"))&&!c&&(h(q,"onclick",'location.href\x3d"'+D+'"'),h(q,"class","highcharts-anchor"),x(q,{cursor:"pointer"}));g=O(g.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==g){q.appendChild(k.createTextNode(g));n?v.dx=0:b&&null!==A&&(v.x=A);h(q,v);y.appendChild(q);!n&&p&&(!N&&c&&x(q,{display:"block"}),h(q,"dy",H(q)));if(w){var e=g.replace(/([^\^])-/g,"$1- ").split(" "),v=!Q&&(1<l.length||b||1<e.length);D=0;var u=H(q);if(B)f=d.truncate(a,q,g,void 0,0,Math.max(0,w-parseInt(P||
12,10)),function(a,g){return a.substring(0,g)+"\u2026"});else if(v)for(;e.length;)e.length&&!Q&&0<D&&(q=k.createElementNS(J,"tspan"),h(q,{dy:u,x:A}),r&&h(q,"style",r),q.appendChild(k.createTextNode(e.join(" ").replace(/- /g,"-"))),y.appendChild(q)),d.truncate(a,q,null,e,0===D?z:0,w,function(a,g){return e.slice(0,g).join(" ").replace(/- /g,"-")}),z=a.actualWidth,D++}n++}}});p=p||y.childNodes.length}),B&&f&&a.attr("title",O(a.textStr,["\x26lt;","\x26gt;"])),v&&v.removeChild(y),e&&a.applyTextOutline&&
a.applyTextOutline(e)):y.appendChild(k.createTextNode(O(l)))}},getContrast:function(a){a=t(a).rgba;a[0]*=1;a[1]*=1.2;a[2]*=.5;return 459<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,b,y,d,c,n,f,J){var z=this.label(a,g,b,J,null,null,null,null,"button"),A=0;z.attr(D({padding:8,r:2},d));var v,q,k,r;d=D({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},d);v=d.style;delete d.style;c=D(d,{fill:"#e6e6e6"},c);q=c.style;delete c.style;
n=D(d,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},n);k=n.style;delete n.style;f=D(d,{style:{color:"#cccccc"}},f);r=f.style;delete f.style;F(z.element,L?"mouseover":"mouseenter",function(){3!==A&&z.setState(1)});F(z.element,L?"mouseout":"mouseleave",function(){3!==A&&z.setState(A)});z.setState=function(a){1!==a&&(z.state=A=a);z.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);z.attr([d,c,n,f][a||
0]).css([v,q,k,r][a||0])};z.attr(d).css(l({cursor:"default"},v));return z.on("click",function(a){3!==A&&y.call(z,a)})},crispLine:function(a,g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};I(a)?g.d=a:B(a)&&l(g,a);return this.createElement("path").attr(g)},circle:function(a,g,b){a=B(a)?a:{x:a,y:g,r:b};g=this.createElement("circle");g.xSetter=g.ySetter=function(a,g,b){b.setAttribute("c"+g,a)};return g.attr(a)},
arc:function(a,g,b,y,d,c){B(a)?(y=a,g=y.y,b=y.r,a=y.x):y={innerR:y,start:d,end:c};a=this.symbol("arc",a,g,b,b,y);a.r=b;return a},rect:function(a,g,b,y,d,c){d=B(a)?a.r:d;var l=this.createElement("rect");a=B(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(b,0),height:Math.max(y,0)};void 0!==c&&(a.strokeWidth=c,a=l.crisp(a));a.fill="none";d&&(a.r=d);l.rSetter=function(a,g,b){h(b,{rx:a,ry:a})};return l.attr(a)},setSize:function(a,g,b){var y=this.alignedObjects,d=y.length;this.width=a;this.height=g;for(this.boxWrapper.animate({width:a,
height:g},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:G(b,!0)?void 0:0});d--;)y[d].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,b,y,d,c){var n={preserveAspectRatio:"none"},f,J=function(a,g){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",g):a.setAttribute("hc-svg-href",g)},z=function(g){J(f.element,a);c.call(f,g)};1<arguments.length&&l(n,{x:g,y:b,width:y,
height:d});f=this.createElement("image").attr(n);c?(J(f.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),n=new O.Image,F(n,"load",z),n.src=a,n.complete&&z({})):J(f.element,a);return f},symbol:function(a,g,b,y,d,c){var n=this,f,J=/^url\((.*?)\)$/,z=J.test(a),A=!z&&(this.symbols[a]?a:"circle"),v=A&&this.symbols[A],q=u(g)&&v&&v.call(this.symbols,Math.round(g),Math.round(b),y,d,c),D,w;v?(f=this.path(q),f.attr("fill","none"),l(f,{symbolName:A,x:g,y:b,width:y,
height:d}),c&&l(f,c)):z&&(D=a.match(J)[1],f=this.image(D),f.imgwidth=G(P[D]&&P[D].width,c&&c.width),f.imgheight=G(P[D]&&P[D].height,c&&c.height),w=function(){f.attr({width:f.width,height:f.height})},r(["width","height"],function(a){f[a+"Setter"]=function(a,g){var b={},y=this["img"+g],d="width"===g?"translateX":"translateY";this[g]=a;u(y)&&(this.element&&this.element.setAttribute(g,y),this.alignByTranslate||(b[d]=((this[g]||0)-y)/2,this.attr(b)))}}),u(g)&&f.attr({x:g,y:b}),f.isImg=!0,u(f.imgwidth)&&
u(f.imgheight)?w():(f.attr({width:0,height:0}),p("img",{onload:function(){var a=e[n.chartIndex];0===this.width&&(x(this,{position:"absolute",top:"-999em"}),k.body.appendChild(this));P[D]={width:this.width,height:this.height};f.imgwidth=this.width;f.imgheight=this.height;f.element&&w();this.parentNode&&this.parentNode.removeChild(this);n.imgCount--;if(!n.imgCount&&a&&a.onload)a.onload()},src:D}),this.imgCount++));return f},symbols:{circle:function(a,g,b,y){return this.arc(a+b/2,g+y/2,b/2,y/2,{start:0,
end:2*Math.PI,open:!1})},square:function(a,g,b,y){return["M",a,g,"L",a+b,g,a+b,g+y,a,g+y,"Z"]},triangle:function(a,g,b,y){return["M",a+b/2,g,"L",a+b,g+y,a,g+y,"Z"]},"triangle-down":function(a,g,b,y){return["M",a,g,"L",a+b,g,a+b/2,g+y,"Z"]},diamond:function(a,g,b,y){return["M",a+b/2,g,"L",a+b,g+y/2,a+b/2,g+y,a,g+y/2,"Z"]},arc:function(a,g,b,y,d){var c=d.start,l=d.r||b,n=d.r||y||b,f=d.end-.001;b=d.innerR;y=G(d.open,.001>Math.abs(d.end-d.start-2*Math.PI));var J=Math.cos(c),A=Math.sin(c),v=Math.cos(f),
f=Math.sin(f);d=.001>d.end-c-Math.PI?0:1;l=["M",a+l*J,g+n*A,"A",l,n,0,d,1,a+l*v,g+n*f];u(b)&&l.push(y?"M":"L",a+b*v,g+b*f,"A",b,b,0,d,0,a+b*J,g+b*A);l.push(y?"":"Z");return l},callout:function(a,g,b,y,d){var c=Math.min(d&&d.r||0,b,y),l=c+6,n=d&&d.anchorX;d=d&&d.anchorY;var f;f=["M",a+c,g,"L",a+b-c,g,"C",a+b,g,a+b,g,a+b,g+c,"L",a+b,g+y-c,"C",a+b,g+y,a+b,g+y,a+b-c,g+y,"L",a+c,g+y,"C",a,g+y,a,g+y,a,g+y-c,"L",a,g+c,"C",a,g,a,g,a+c,g];n&&n>b?d>g+l&&d<g+y-l?f.splice(13,3,"L",a+b,d-6,a+b+6,d,a+b,d+6,a+b,
g+y-c):f.splice(13,3,"L",a+b,y/2,n,d,a+b,y/2,a+b,g+y-c):n&&0>n?d>g+l&&d<g+y-l?f.splice(33,3,"L",a,d+6,a-6,d,a,d-6,a,g+c):f.splice(33,3,"L",a,y/2,n,d,a,y/2,a,g+c):d&&d>y&&n>a+l&&n<a+b-l?f.splice(23,3,"L",n+6,g+y,n,g+y+6,n-6,g+y,a+c,g+y):d&&0>d&&n>a+l&&n<a+b-l&&f.splice(3,3,"L",n-6,g,n,g-6,n+6,g,b-c,g);return f}},clipRect:function(g,b,y,d){var c=a.uniqueKey(),n=this.createElement("clipPath").attr({id:c}).add(this.defs);g=this.rect(g,b,y,d,0).add(n);g.id=c;g.clipPath=n;g.count=0;return g},text:function(a,
g,b,y){var d={};if(y&&(this.allowHTML||!this.forExport))return this.html(a,g,b);d.x=Math.round(g||0);b&&(d.y=Math.round(b));if(a||0===a)d.text=a;a=this.createElement("text").attr(d);y||(a.xSetter=function(a,g,b){var y=b.getElementsByTagName("tspan"),d,c=b.getAttribute(g),n;for(n=0;n<y.length;n++)d=y[n],d.getAttribute(g)===c&&d.setAttribute(g,a);b.setAttribute(g,a)});return a},fontMetrics:function(a,b){a=a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?g(a):/em/.test(a)?
parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,g,b){var y=a;g&&b&&(y=Math.max(y*Math.cos(g*f),4));return{x:-a/3*Math.sin(g*f),y:y}},label:function(g,b,d,c,n,f,J,A,v){var q=this,k=q.g("button"!==v&&"label"),w=k.text=q.text("",0,0,J).attr({zIndex:1}),z,N,e=0,B=3,Q=0,h,P,p,G,I,H={},O,M,x=/^url\((.*?)\)$/.test(c),m=x,t,L,R,U;v&&k.addClass("highcharts-"+v);m=x;t=function(){return(O||0)%2/2};L=function(){var a=
w.element.style,g={};N=(void 0===h||void 0===P||I)&&u(w.textStr)&&w.getBBox();k.width=(h||N.width||0)+2*B+Q;k.height=(P||N.height||0)+2*B;M=B+q.fontMetrics(a&&a.fontSize,w).b;m&&(z||(k.box=z=q.symbols[c]||x?q.symbol(c):q.rect(),z.addClass(("button"===v?"":"highcharts-label-box")+(v?" highcharts-"+v+"-box":"")),z.add(k),a=t(),g.x=a,g.y=(A?-M:0)+a),g.width=Math.round(k.width),g.height=Math.round(k.height),z.attr(l(g,H)),H={})};R=function(){var a=Q+B,g;g=A?0:M;u(h)&&N&&("center"===I||"right"===I)&&(a+=
{center:.5,right:1}[I]*(h-N.width));if(a!==w.x||g!==w.y)w.attr("x",a),w.hasBoxWidthChanged&&(N=w.getBBox(!0),L()),void 0!==g&&w.attr("y",g);w.x=a;w.y=g};U=function(a,g){z?z.attr(a,g):H[a]=g};k.onAdd=function(){w.add(k);k.attr({text:g||0===g?g:"",x:b,y:d});z&&u(n)&&k.attr({anchorX:n,anchorY:f})};k.widthSetter=function(g){h=a.isNumber(g)?g:null};k.heightSetter=function(a){P=a};k["text-alignSetter"]=function(a){I=a};k.paddingSetter=function(a){u(a)&&a!==B&&(B=k.padding=a,R())};k.paddingLeftSetter=function(a){u(a)&&
a!==Q&&(Q=a,R())};k.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==e&&(e=a,N&&k.attr({x:p}))};k.textSetter=function(a){void 0!==a&&w.textSetter(a);L();R()};k["stroke-widthSetter"]=function(a,g){a&&(m=!0);O=this["stroke-width"]=a;U(g,a)};k.strokeSetter=k.fillSetter=k.rSetter=function(a,g){"r"!==g&&("fill"===g&&a&&(m=!0),k[g]=a);U(g,a)};k.anchorXSetter=function(a,g){n=k.anchorX=a;U(g,Math.round(a)-t()-p)};k.anchorYSetter=function(a,g){f=k.anchorY=a;U(g,a-G)};k.xSetter=function(a){k.x=a;
e&&(a-=e*((h||N.width)+2*B),k["forceAnimate:x"]=!0);p=Math.round(a);k.attr("translateX",p)};k.ySetter=function(a){G=k.y=Math.round(a);k.attr("translateY",G)};var S=k.css;return l(k,{css:function(a){if(a){var g={};a=D(a);r(k.textProps,function(b){void 0!==a[b]&&(g[b]=a[b],delete a[b])});w.css(g);"width"in g&&L()}return S.call(k,a)},getBBox:function(){return{width:N.width+2*B,height:N.height+2*B,x:N.x-B,y:N.y-B}},shadow:function(a){a&&(L(),z&&z.shadow(a));return k},destroy:function(){y(k.element,"mouseenter");
y(k.element,"mouseleave");w&&(w=w.destroy());z&&(z=z.destroy());C.prototype.destroy.call(k);k=q=L=R=U=null}})}});a.Renderer=E})(K);(function(a){var C=a.attr,E=a.createElement,F=a.css,m=a.defined,h=a.each,e=a.extend,t=a.isFirefox,x=a.isMS,p=a.isWebKit,u=a.pick,f=a.pInt,c=a.SVGRenderer,k=a.win,r=a.wrap;e(a.SVGElement.prototype,{htmlCss:function(a){var d="SPAN"===this.element.tagName&&a&&"width"in a,b=u(d&&a.width,void 0);d&&(delete a.width,this.textWidth=b,this.htmlUpdateTransform());a&&"ellipsis"===
a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=e(this.styles,a);F(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,d=this.element,b=this.translateX||0,c=this.translateY||0,k=this.x||0,r=this.y||0,w=this.textAlign||"left",e={left:0,center:.5,right:1}[w],B=this.styles,u=B&&B.whiteSpace;F(d,{marginLeft:b,marginTop:c});
this.shadows&&h(this.shadows,function(a){F(a,{marginLeft:b+1,marginTop:c+1})});this.inverted&&h(d.childNodes,function(b){a.invertChild(b,d)});if("SPAN"===d.tagName){var B=this.rotation,n=this.textWidth&&f(this.textWidth),D=[B,w,d.innerHTML,this.textWidth,this.textAlign].join(),A;(A=n!==this.oldTextWidth)&&!(A=n>this.oldTextWidth)&&((A=this.textPxLength)||(F(d,{width:"",whiteSpace:u||"nowrap"}),A=d.offsetWidth),A=A>n);A&&/[ \-]/.test(d.textContent||d.innerText)?(F(d,{width:n+"px",display:"block",whiteSpace:u||
"normal"}),this.oldTextWidth=n,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;D!==this.cTT&&(u=a.fontMetrics(d.style.fontSize).b,!m(B)||B===(this.oldRotation||0)&&w===this.oldAlign||this.setSpanRotation(B,e,u),this.getSpanCorrection(!m(B)&&this.textPxLength||d.offsetWidth,u,e,B,w));F(d,{left:k+(this.xCorr||0)+"px",top:r+(this.yCorr||0)+"px"});this.cTT=D;this.oldRotation=B;this.oldAlign=w}}else this.alignOnAdd=!0},setSpanRotation:function(a,d,b){var c={},l=this.renderer.getTransformKey();c[l]=
c.transform="rotate("+a+"deg)";c[l+(t?"Origin":"-origin")]=c.transformOrigin=100*d+"% "+b+"px";F(this.element,c)},getSpanCorrection:function(a,d,b){this.xCorr=-a*b;this.yCorr=-d}});e(c.prototype,{getTransformKey:function(){return x&&!/Edge/.test(k.navigator.userAgent)?"-ms-transform":p?"-webkit-transform":t?"MozTransform":k.opera?"-o-transform":""},html:function(a,d,b){var c=this.createElement("span"),l=c.element,f=c.renderer,k=f.isSVG,p=function(a,b){h(["opacity","visibility"],function(d){r(a,d+
"Setter",function(a,d,c,n){a.call(this,d,c,n);b[c]=d})});a.addedSetters=!0};c.textSetter=function(a){a!==l.innerHTML&&delete this.bBox;this.textStr=a;l.innerHTML=u(a,"");c.doTransform=!0};k&&p(c,c.element.style);c.xSetter=c.ySetter=c.alignSetter=c.rotationSetter=function(a,b){"align"===b&&(b="textAlign");c[b]=a;c.doTransform=!0};c.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};c.attr({text:a,x:Math.round(d),y:Math.round(b)}).css({fontFamily:this.style.fontFamily,
fontSize:this.style.fontSize,position:"absolute"});l.style.whiteSpace="nowrap";c.css=c.htmlCss;k&&(c.add=function(a){var b,d=f.box.parentNode,k=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)k.push(a),a=a.parentGroup;h(k.reverse(),function(a){function n(g,b){a[b]=g;"translateX"===b?l.left=g+"px":l.top=g+"px";a.doTransform=!0}var l,g=C(a.element,"class");g&&(g={className:g});b=a.div=a.div||E("div",g,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,
pointerEvents:a.styles&&a.styles.pointerEvents},b||d);l=b.style;e(a,{classSetter:function(a){return function(g){this.element.setAttribute("class",g);a.className=g}}(b),on:function(){k[0].div&&c.on.apply({element:k[0].div},arguments);return a},translateXSetter:n,translateYSetter:n});a.addedSetters||p(a,l)})}}else b=d;b.appendChild(l);c.added=!0;c.alignOnAdd&&c.htmlUpdateTransform();return c});return c}})})(K);(function(a){var C=a.defined,E=a.each,F=a.extend,m=a.merge,h=a.pick,e=a.timeUnits,t=a.win;
a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(a){var e=h(a&&a.useUTC,!0),u=this;this.options=a=m(!0,this.options||{},a);this.Date=a.Date||t.Date;this.timezoneOffset=(this.useUTC=e)&&a.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(e&&!a.getTimezoneOffset&&!a.timezone))||this.timezoneOffset?(this.get=function(a,c){var f=c.getTime(),r=f-u.getTimezoneOffset(c);c.setTime(r);a=c["getUTC"+a]();c.setTime(f);return a},
this.set=function(a,c,k){var f;if("Milliseconds"===a||"Seconds"===a||"Minutes"===a&&0===c.getTimezoneOffset()%60)c["set"+a](k);else f=u.getTimezoneOffset(c),f=c.getTime()-f,c.setTime(f),c["setUTC"+a](k),a=u.getTimezoneOffset(c),f=c.getTime()+a,c.setTime(f)}):e?(this.get=function(a,c){return c["getUTC"+a]()},this.set=function(a,c,k){return c["setUTC"+a](k)}):(this.get=function(a,c){return c["get"+a]()},this.set=function(a,c,k){return c["set"+a](k)})},makeTime:function(e,p,u,f,c,k){var r,l,d;this.useUTC?
(r=this.Date.UTC.apply(0,arguments),l=this.getTimezoneOffset(r),r+=l,d=this.getTimezoneOffset(r),l!==d?r+=d-l:l-36E5!==this.getTimezoneOffset(r-36E5)||a.isSafari||(r-=36E5)):r=(new this.Date(e,p,h(u,1),h(f,0),h(c,0),h(k,0))).getTime();return r},timezoneOffsetFunction:function(){var e=this,h=this.options,u=t.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(h.timezone){if(u)return function(a){return 6E4*-u.tz(a,h.timezone).utcOffset()};a.error(25)}return this.useUTC&&
h.getTimezoneOffset?function(a){return 6E4*h.getTimezoneOffset(a)}:function(){return 6E4*(e.timezoneOffset||0)}},dateFormat:function(e,h,u){if(!a.defined(h)||isNaN(h))return a.defaultOptions.lang.invalidDate||"";e=a.pick(e,"%Y-%m-%d %H:%M:%S");var f=this,c=new this.Date(h),k=this.get("Hours",c),r=this.get("Day",c),l=this.get("Date",c),d=this.get("Month",c),b=this.get("FullYear",c),v=a.defaultOptions.lang,q=v.weekdays,I=v.shortWeekdays,w=a.pad,c=a.extend({a:I?I[r]:q[r].substr(0,3),A:q[r],d:w(l),e:w(l,
2," "),w:r,b:v.shortMonths[d],B:v.months[d],m:w(d+1),o:d+1,y:b.toString().substr(2,2),Y:b,H:w(k),k:k,I:w(k%12||12),l:k%12||12,M:w(f.get("Minutes",c)),p:12>k?"AM":"PM",P:12>k?"am":"pm",S:w(c.getSeconds()),L:w(Math.floor(h%1E3),3)},a.dateFormats);a.objectEach(c,function(a,b){for(;-1!==e.indexOf("%"+b);)e=e.replace("%"+b,"function"===typeof a?a.call(f,h):a)});return u?e.substr(0,1).toUpperCase()+e.substr(1):e},getTimeTicks:function(a,p,u,f){var c=this,k=[],r,l={},d;r=new c.Date(p);var b=a.unitRange,
v=a.count||1,q;f=h(f,1);if(C(p)){c.set("Milliseconds",r,b>=e.second?0:v*Math.floor(c.get("Milliseconds",r)/v));b>=e.second&&c.set("Seconds",r,b>=e.minute?0:v*Math.floor(c.get("Seconds",r)/v));b>=e.minute&&c.set("Minutes",r,b>=e.hour?0:v*Math.floor(c.get("Minutes",r)/v));b>=e.hour&&c.set("Hours",r,b>=e.day?0:v*Math.floor(c.get("Hours",r)/v));b>=e.day&&c.set("Date",r,b>=e.month?1:v*Math.floor(c.get("Date",r)/v));b>=e.month&&(c.set("Month",r,b>=e.year?0:v*Math.floor(c.get("Month",r)/v)),d=c.get("FullYear",
r));b>=e.year&&c.set("FullYear",r,d-d%v);b===e.week&&(d=c.get("Day",r),c.set("Date",r,c.get("Date",r)-d+f+(d<f?-7:0)));d=c.get("FullYear",r);f=c.get("Month",r);var I=c.get("Date",r),w=c.get("Hours",r);p=r.getTime();c.variableTimezone&&(q=u-p>4*e.month||c.getTimezoneOffset(p)!==c.getTimezoneOffset(u));p=r.getTime();for(r=1;p<u;)k.push(p),p=b===e.year?c.makeTime(d+r*v,0):b===e.month?c.makeTime(d,f+r*v):!q||b!==e.day&&b!==e.week?q&&b===e.hour&&1<v?c.makeTime(d,f,I,w+r*v):p+b*v:c.makeTime(d,f,I+r*v*(b===
e.day?1:7)),r++;k.push(p);b<=e.hour&&1E4>k.length&&E(k,function(a){0===a%18E5&&"000000000"===c.dateFormat("%H%M%S%L",a)&&(l[a]="day")})}k.info=F(a,{higherRanks:l,totalRange:b*v});return k}}})(K);(function(a){var C=a.color,E=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,
height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",
fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,
dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:C("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(C){a.defaultOptions=E(!0,a.defaultOptions,C);a.time.update(E(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};
a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(E(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(C,m,h){return a.time.dateFormat(C,m,h)}})(K);(function(a){var C=a.correctFloat,E=a.defined,F=a.destroyObjectProperties,m=a.fireEvent,h=a.isNumber,e=a.merge,t=a.pick,x=a.deg2rad;a.Tick=function(a,e,f,c){this.axis=a;this.pos=e;this.type=f||"";this.isNewLabel=this.isNew=!0;f||c||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,h=a.options,f=
a.chart,c=a.categories,k=a.names,r=this.pos,l=h.labels,d=a.tickPositions,b=r===d[0],v=r===d[d.length-1],k=c?t(c[r],k[r],r):r,c=this.label,d=d.info,q;a.isDatetimeAxis&&d&&(q=h.dateTimeLabelFormats[d.higherRanks[r]||d.unitName]);this.isFirst=b;this.isLast=v;h={axis:a,chart:f,isFirst:b,isLast:v,dateTimeLabelFormat:q,value:a.isLog?C(a.lin2log(k)):k,pos:r};h=a.labelFormatter.call(h,h);if(E(c))c&&c.textStr!==h&&(!c.textWidth||l.style&&l.style.width||c.styles.width||c.css({width:null}),c.attr({text:h}));
else{if(this.label=c=E(h)&&l.enabled?f.renderer.text(h,0,0,l.useHTML).css(e(l.style)).add(a.labelGroup):null)c.textPxLength=c.getBBox().width;this.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var e=this.axis,f=e.options.labels,c=a.x,k=e.chart.chartWidth,r=e.chart.spacing,l=t(e.labelLeft,Math.min(e.pos,r[3])),r=t(e.labelRight,Math.max(e.isRadial?0:e.pos+e.len,k-r[1])),d=this.label,b=this.rotation,v={left:0,
center:.5,right:1}[e.labelAlign||d.attr("align")],q=d.getBBox().width,h=e.getSlotWidth(this),w=h,p=1,B,H={};if(b||"justify"!==t(f.overflow,"justify"))0>b&&c-v*q<l?B=Math.round(c/Math.cos(b*x)-l):0<b&&c+v*q>r&&(B=Math.round((k-c)/Math.cos(b*x)));else if(k=c+(1-v)*q,c-v*q<l?w=a.x+w*(1-v)-l:k>r&&(w=r-a.x+w*v,p=-1),w=Math.min(h,w),w<h&&"center"===e.labelAlign&&(a.x+=p*(h-w-v*(h-Math.min(q,w)))),q>w||e.autoRotation&&(d.styles||{}).width)B=w;B&&(H.width=B,(f.style||{}).textOverflow||(H.textOverflow="ellipsis"),
d.css(H))},getPosition:function(e,h,f,c){var k=this.axis,r=k.chart,l=c&&r.oldChartHeight||r.chartHeight;e={x:e?a.correctFloat(k.translate(h+f,null,null,c)+k.transB):k.left+k.offset+(k.opposite?(c&&r.oldChartWidth||r.chartWidth)-k.right-k.left:0),y:e?l-k.bottom+k.offset-(k.opposite?k.height:0):a.correctFloat(l-k.translate(h+f,null,null,c)-k.transB)};m(this,"afterGetPosition",{pos:e});return e},getLabelPosition:function(a,e,f,c,k,r,l,d){var b=this.axis,v=b.transA,q=b.reversed,h=b.staggerLines,w=b.tickRotCorr||
{x:0,y:0},u=k.y,B=c||b.reserveSpaceDefault?0:-b.labelOffset*("center"===b.labelAlign?.5:1),H={};E(u)||(u=0===b.side?f.rotation?-8:-f.getBBox().height:2===b.side?w.y+8:Math.cos(f.rotation*x)*(w.y-f.getBBox(!1,0).height/2));a=a+k.x+B+w.x-(r&&c?r*v*(q?-1:1):0);e=e+u-(r&&!c?r*v*(q?1:-1):0);h&&(f=l/(d||1)%h,b.opposite&&(f=h-f-1),e+=b.labelOffset/h*f);H.x=a;H.y=Math.round(e);m(this,"afterGetLabelPosition",{pos:H});return H},getMarkPath:function(a,e,f,c,k,r){return r.crispLine(["M",a,e,"L",a+(k?0:-f),e+
(k?f:0)],c)},renderGridLine:function(a,e,f){var c=this.axis,k=c.options,r=this.gridLine,l={},d=this.pos,b=this.type,v=c.tickmarkOffset,q=c.chart.renderer,h=b?b+"Grid":"grid",w=k[h+"LineWidth"],u=k[h+"LineColor"],k=k[h+"LineDashStyle"];r||(l.stroke=u,l["stroke-width"]=w,k&&(l.dashstyle=k),b||(l.zIndex=1),a&&(l.opacity=0),this.gridLine=r=q.path().attr(l).addClass("highcharts-"+(b?b+"-":"")+"grid-line").add(c.gridGroup));if(!a&&r&&(a=c.getPlotLinePath(d+v,r.strokeWidth()*f,a,!0)))r[this.isNew?"attr":
"animate"]({d:a,opacity:e})},renderMark:function(a,e,f){var c=this.axis,k=c.options,r=c.chart.renderer,l=this.type,d=l?l+"Tick":"tick",b=c.tickSize(d),v=this.mark,q=!v,h=a.x;a=a.y;var w=t(k[d+"Width"],!l&&c.isXAxis?1:0),k=k[d+"Color"];b&&(c.opposite&&(b[0]=-b[0]),q&&(this.mark=v=r.path().addClass("highcharts-"+(l?l+"-":"")+"tick").add(c.axisGroup),v.attr({stroke:k,"stroke-width":w})),v[q?"attr":"animate"]({d:this.getMarkPath(h,a,b[0],v.strokeWidth()*f,c.horiz,r),opacity:e}))},renderLabel:function(a,
e,f,c){var k=this.axis,r=k.horiz,l=k.options,d=this.label,b=l.labels,v=b.step,k=k.tickmarkOffset,q=!0,I=a.x;a=a.y;d&&h(I)&&(d.xy=a=this.getLabelPosition(I,a,d,r,b,k,c,v),this.isFirst&&!this.isLast&&!t(l.showFirstLabel,1)||this.isLast&&!this.isFirst&&!t(l.showLastLabel,1)?q=!1:!r||b.step||b.rotation||e||0===f||this.handleOverflow(a),v&&c%v&&(q=!1),q&&h(a.y)?(a.opacity=f,d[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(d.attr("y",-9999),this.isNewLabel=!0))},render:function(e,h,f){var c=
this.axis,k=c.horiz,r=this.getPosition(k,this.pos,c.tickmarkOffset,h),l=r.x,d=r.y,c=k&&l===c.pos+c.len||!k&&d===c.pos?-1:1;f=t(f,1);this.isActive=!0;this.renderGridLine(h,f,c);this.renderMark(r,f,c);this.renderLabel(r,h,f,e);this.isNew=!1;a.fireEvent(this,"afterRender")},destroy:function(){F(this,this.axis)}}})(K);var V=function(a){var C=a.addEvent,E=a.animObject,F=a.arrayMax,m=a.arrayMin,h=a.color,e=a.correctFloat,t=a.defaultOptions,x=a.defined,p=a.deg2rad,u=a.destroyObjectProperties,f=a.each,c=
a.extend,k=a.fireEvent,r=a.format,l=a.getMagnitude,d=a.grep,b=a.inArray,v=a.isArray,q=a.isNumber,I=a.isString,w=a.merge,L=a.normalizeTickInterval,B=a.objectEach,H=a.pick,n=a.removeEvent,D=a.splat,A=a.syncTimeout,M=a.Tick,G=function(){this.init.apply(this,arguments)};a.extend(G.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,x:0,style:{color:"#666666",
cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,
tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},
defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,y){var g=y.isX,d=this;d.chart=a;d.horiz=a.inverted&&!d.isZAxis?!g:g;d.isXAxis=g;d.coll=d.coll||(g?"xAxis":"yAxis");k(this,"init",{userOptions:y});d.opposite=y.opposite;d.side=y.side||(d.horiz?d.opposite?0:2:d.opposite?1:3);d.setOptions(y);var c=this.options,n=c.type;d.labelFormatter=c.labels.formatter||d.defaultLabelFormatter;d.userOptions=y;d.minPixelPadding=0;d.reversed=c.reversed;d.visible=!1!==c.visible;
d.zoomEnabled=!1!==c.zoomEnabled;d.hasNames="category"===n||!0===c.categories;d.categories=c.categories||d.hasNames;d.names||(d.names=[],d.names.keys={});d.plotLinesAndBandsGroups={};d.isLog="logarithmic"===n;d.isDatetimeAxis="datetime"===n;d.positiveValuesOnly=d.isLog&&!d.allowNegativeLog;d.isLinked=x(c.linkedTo);d.ticks={};d.labelEdge=[];d.minorTicks={};d.plotLinesAndBands=[];d.alternateBands={};d.len=0;d.minRange=d.userMinRange=c.minRange||c.maxZoom;d.range=c.range;d.offset=c.offset||0;d.stacks=
{};d.oldStacks={};d.stacksTouched=0;d.max=null;d.min=null;d.crosshair=H(c.crosshair,D(a.options.tooltip.crosshairs)[g?0:1],!1);y=d.options.events;-1===b(d,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,d):a.axes.push(d),a[d.coll].push(d));d.series=d.series||[];a.inverted&&!d.isZAxis&&g&&void 0===d.reversed&&(d.reversed=!0);B(y,function(a,g){C(d,g,a)});d.lin2log=c.linearToLogConverter||d.lin2log;d.isLog&&(d.val2lin=d.log2lin,d.lin2val=d.lin2log);k(this,"afterInit")},setOptions:function(a){this.options=
w(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],w(t[this.coll],a));k(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var g=this.axis,b=this.value,d=g.chart.time,c=g.categories,n=this.dateTimeLabelFormat,l=t.lang,f=l.numericSymbols,l=l.numericSymbolMagnitude||1E3,k=f&&f.length,A,q=g.options.labels.format,g=g.isLog?Math.abs(b):g.tickInterval;
if(q)A=r(q,this,d);else if(c)A=b;else if(n)A=d.dateFormat(n,b);else if(k&&1E3<=g)for(;k--&&void 0===A;)d=Math.pow(l,k+1),g>=d&&0===10*b%d&&null!==f[k]&&0!==b&&(A=a.numberFormat(b/d,-1)+f[k]);void 0===A&&(A=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return A},getSeriesExtremes:function(){var a=this,b=a.chart;k(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();f(a.series,
function(g){if(g.visible||!b.options.chart.ignoreHiddenSeries){var y=g.options,c=y.threshold,n;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=c&&(c=null);if(a.isXAxis)y=g.xData,y.length&&(g=m(y),n=F(y),q(g)||g instanceof Date||(y=d(y,q),g=m(y),n=F(y)),y.length&&(a.dataMin=Math.min(H(a.dataMin,y[0],g),g),a.dataMax=Math.max(H(a.dataMax,y[0],n),n)));else if(g.getExtremes(),n=g.dataMax,g=g.dataMin,x(g)&&x(n)&&(a.dataMin=Math.min(H(a.dataMin,g),g),a.dataMax=Math.max(H(a.dataMax,n),n)),x(c)&&(a.threshold=
c),!y.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});k(this,"afterGetSeriesExtremes")},translate:function(a,b,d,c,n,l){var g=this.linkedParent||this,y=1,f=0,k=c?g.oldTransA:g.transA;c=c?g.oldMin:g.min;var J=g.minPixelPadding;n=(g.isOrdinal||g.isBroken||g.isLog&&n)&&g.lin2val;k||(k=g.transA);d&&(y*=-1,f=g.len);g.reversed&&(y*=-1,f-=y*(g.sector||g.len));b?(a=(a*y+f-J)/k+c,n&&(a=g.lin2val(a))):(n&&(a=g.val2lin(a)),a=q(c)?y*(a-c)*k+f+y*J+(q(l)?k*l:0):void 0);return a},toPixels:function(a,
b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,d,c,n){var g=this.chart,y=this.left,l=this.top,f,k,J=d&&g.oldChartHeight||g.chartHeight,A=d&&g.oldChartWidth||g.chartWidth,v;f=this.transB;var e=function(a,g,b){if(a<g||a>b)c?a=Math.min(Math.max(g,a),b):v=!0;return a};n=H(n,this.translate(a,null,null,d));n=Math.min(Math.max(-1E5,n),1E5);a=d=Math.round(n+f);f=k=Math.round(J-
n-f);q(n)?this.horiz?(f=l,k=J-this.bottom,a=d=e(a,y,y+this.width)):(a=y,d=A-this.right,f=k=e(f,l,l+this.height)):(v=!0,c=!1);return v&&!c?null:g.renderer.crispLine(["M",a,f,"L",d,k],b||1)},getLinearTickPositions:function(a,b,d){var g,c=e(Math.floor(b/a)*a);d=e(Math.ceil(d/a)*a);var y=[],n;e(c+a)===c&&(n=20);if(this.single)return[b];for(b=c;b<=d;){y.push(b);b=e(b+a,n);if(b===g)break;g=b}return y},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?H(a.minorTickInterval,"auto"):
!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,d=a.tickPositions,c=a.minorTickInterval,n=[],l=a.pointRangePadding||0,k=a.min-l,l=a.max+l,A=l-k;if(A&&A/c<a.len/3)if(a.isLog)f(this.paddedTicks,function(g,b,d){b&&n.push.apply(n,a.getLogTickPositions(c,d[b-1],d[b],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())n=n.concat(a.getTimeTicks(a.normalizeTimeTickInterval(c),k,l,b.startOfWeek));else for(b=k+(d[0]-k)%c;b<=l&&b!==n[0];b+=
c)n.push(b);0!==n.length&&a.trimTicks(n);return n},adjustForMinRange:function(){var a=this.options,b=this.min,d=this.max,c,n,l,k,A,q,v,e;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(x(a.min)||x(a.max)?this.minRange=null:(f(this.series,function(a){q=a.xData;for(k=v=a.xIncrement?1:q.length-1;0<k;k--)if(A=q[k]-q[k-1],void 0===l||A<l)l=A}),this.minRange=Math.min(5*l,this.dataMax-this.dataMin)));d-b<this.minRange&&(n=this.dataMax-this.dataMin>=this.minRange,e=this.minRange,c=(e-d+b)/2,c=[b-c,H(a.min,
b-c)],n&&(c[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=F(c),d=[b+e,H(a.max,b+e)],n&&(d[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),d=m(d),d-b<e&&(c[0]=d-e,c[1]=H(a.min,d-e),b=F(c)));this.min=b;this.max=d},getClosest:function(){var a;this.categories?a=1:f(this.series,function(g){var b=g.closestPointRange,d=g.visible||!g.chart.options.chart.ignoreHiddenSeries;!g.noSharedTooltip&&x(b)&&d&&(a=x(a)?Math.min(a,b):b)});return a},nameToX:function(a){var g=v(this.categories),d=g?this.categories:
this.names,c=a.options.x,n;a.series.requireSorting=!1;x(c)||(c=!1===this.options.uniqueNames?a.series.autoIncrement():g?b(a.name,d):H(d.keys[a.name],-1));-1===c?g||(n=d.length):n=c;v�wZ|, 	0, a` RJ�Kr�T��9y�@�t�n=k���:B����u����p�`��Gȅ�w��m��6�g/�O�D=>����oG}��#b�wf�������7g��8���Y����!����$y���h�[|�.�@�7X?a�j�4� c +���<@� �_FHi��R`X X`��ɌU$G}T��mO�3���z�O�3���y�W�� �� (�k�����Ws�|���
L\ 3FEp�sB#�+yp�Ę
���
����������\�"��;���p��rv���uG�O��d&VӥO�7Z�,��pJ�����.m�QKh�;�]�  6d���Ӵ2l��o-�8< ]� ��E tT�=�n���^Af�L�;:� +�ǩ W��}*e�����j�v�.�U�뷇s�O��-4��@ի������^X����n%�u��	&`�]o��
�`
�F�;�a7�RK˾5��!��8 p�zU�"ш���#0o�e.�v�M<�I=�7���]�!ŦeF� �)H��2^��	?�\mUQu�kF��k����70~�W���J,l(��N���o� G'�� h{�r'�,�x�� D�����>�O��>'���{�@�t�W�WLj�fY���:�ā$;?k����>B:wO����Z�Na��t�/�b[�2lq�}Ā��&E�4�qj9u��[A���ee��.��8�k�I��{"����lѐ ���*����LI�
X�3�l>�-`[BR%$��PGw*�͗w�YrK�2 �,bvσ�?Q��
��ZX�'y�W�u׹��\���T�7.�˫.��c�ט�v�.c���Ρi��Έ�u����Ll�՗��U�wy���U��f[�sV�E��n�E/�cku�)�E5Q�N�uXu~��<N�斪Z�q�6Z�y�-��|X�:�:�d������i7��,�����s����s�5\��&/�[m�	��p�~����Z_�%�߉�ך��Y�ҋnE��[o� h��u����UP����p\��Ix� 2��激�@ػ��?���G���;B����e���B�s����Z`��>�a\��S��g�� �7�s�������~��a�b�.����" #!	�����o���=����~
�y@W��(h/���K�d8�%��F5�S���ĸ+)�
v�a&�5E4SI�f��_� h��(
��P�(
�qqzn��x���}9���k%��A�������WΐH-d����o�`�x��6;�����1����B�	�(��yo*���-��B�Y]����u����n�ݨtn�ãV�ѫ_� H�_}3S�q�:����t�.��H��i�#̓U4�(�p�嗮[Ҷ��[����~�71c�U�����Uu
��?�B��I��_ճ�6��8
��L%�W�
����4�W�#�ƫ�h
�TX�%S�����G��w�
P��%XT��{��F�P�[-��H/�+����A������r9GJP�i����ae2e�Ȁ�����Z���
��w��@#µ2q��E��ШB�g&Jg��
�Z�w��^��K�����z�[b��襑�0��o�@°������,a_@VM8��p8����[`�}�j�,b�b	��>>
��AKG��Zy`<6��
*b���
D���P���V��yC?,|�Z"@�Z��1�^į�b=O
D6�����9�Ȕ:��h�L�3�b�W��@��j	r)�%�WЦ�0K�#�ȷGܬ{���OĈj��#�Z��r�JC����������7V�k�W9a9&����`>�l(��ӪLr_���Х�u�X�!_������4'E4��Z����h��A�rP-MP4G�~|��=¦�^ �������u���i
�b ���⽾^�5�
a���X8
{�����>�Y>�������q�g�A�0�L��i�x�T����a`�B���x� B( �� <�4�tx �C��H=	l$�`�}kZ����@�p���:�5V�g���'�H92̵@��1�	t�ݣ3'�x4*�
�X�0�Y�e ��F�2f�h)��dAP�P����PP
�$}��<H��5;��t�^;F�=�G���W���M����c=|g�h�b�ߙlo�7���.�Z�#�������H��-�����;��$d�Y�����6�b���f=:�.�j�?�2��N8��<�?��6�9�m��H\ٚ����m�_Y��G�dF�]8�{e߃��a�u�\K����si?���=�+����c�6��/T������0�4����!�,?n�b��4����K����.Q�7������+��CzxS
���UA.@P)��Zh�)k?����1��� �V�&�80�8l !H�GlLh�	�}a���[�J��Uf �[��'����RBYI3��r��1	u��'������ԣ5�3UMj~o���m�v�/�A 6)�h��,��.���S0oC���%0 �����-��
Th��GԒ� F�j�Ɛ�,�F(�B-�phppdf1�����#m4�aDr����>1�Glnf��_:���1����H:f��G�9"�[X+-`��M����zF5��6�Bth:B|p��
1��^:8�{٬���ױ��zL/��-�ч,	N�^U�=8t���S)����������G�?��H�M�ð����
|m��������$	�Y
63��������5�����`H���0�4�ʯ|G���cK�����k� q��嵵�QE|�"��m���&������|cfҊ�Д�Qb#j7,�5��>�r�3Q����:�����9��T��Dâ��&�Y�5�8��sP��+�����3��~4�����n`=W�f'� �e�o���j��|p$���k����r�r���g�+��,�/�M��j��n2/e���v��h����,��m6�)���r��\�w�N3�k��,�w�N΂[M�D����`������+��cʞ�6�|F��e�хG�=?���j`y�e��@����mt�U�ڇ��g-Ƙ,����֛V92"��^ H�<�Y`y�e��@�̎��K,1,� ;��h�Z�N{�����X�
 ,򃏡��`�栆2���8��cX��|~!c�/��m���l=�� �D
e
��Սeh�0  ��L2����1u��<rnJ���@�x����r�g`	1� b-a�#�1�FI�Q��`�+);_�G���xp��K< 4
*?��uML�O�kF�m_N[9]�D�v�ɱ*�lYH�~,Ex�q>���
_�uj�\�:��-Us�clf5������49�o�O���愞;�ʎ�T����X��k���c�WJ��܌N���)��:[�WHW'%��g���q��SYa�;���x{=bN
U�$�z{������߸����~�v;h�L���\]L���k�<#3�{ H�L{�`�(�cU]%�մe����{�m��7���V�7E4�p��>ǃ�o�ƾ�~6�v�h�$<����V-�j(����F�?>ȫ"gܺ]�4F�=Y�Q^���I�7�Rt�eO׫�����7wȂ:m(��-̠���b&�u��&��C�, euT$xX�	Ht��c$* ��<��֜��~?��Z㦉�������	��#0{�}e8 8Ԇ��Xz��-wZ�_� 8	p�0�g"��x�D�m6�&|l�tYu=u#j}X֚�O���7�K;*���ԉJ�1諍�o�F­�ب�`m�@��Nɣ�:�±���;��X�gh�� �>�|!T����f�Z�osm��)����:`[>������Gz�u�F��-M��=��!�G��LtI.�$l�n�,I&����ʹJ����p���5���ߑ΃k���>]�߯��;�b�j�`|��GVei���6�$3L��8cm��rWHZ-V�J����O	k��56��lm;�u-� f��(��{m��d¾�!�����������z�s�O�\�br�A��7�ue��
D+�L9a�[L��`刎�嫗�4c^���`�-
�a,Riݗ)��e���X�~rP *k�
Z���*����a¬���fv1��S���v���=z�f��b��a��'���'�������>�O��?�YQ������p� :����qL\_78�.����4����[��^HڭE����uQqqC)J�lR����<<w�wˌ�?���|���
/�݁��L�x�,4�rݘ��S-����ĹbR֌����^՝ố{W⿐X�����E�fm�F��s���
?�|B[],��[P��sV��伇�����'�GHSH����+@�޿-�g/]8��QQQ��Mc��|G�D�~�6�h� l��5�(.Q�����=6Y
֪*��S�F�,����iBZ�3�ˋ��`מl��<��'����b����J9;*P~k�����rY��e�^�
d�4/����R�G��UҼ}3[�i�����T�8�g�q��R����2F���-H���&��-�ц#z�^3z�Gx�?�$����XB�����0�$��8h��N���Qh�<)4@4�di)�ٌƌn_񰹱(JǝGb커r�U��`��P^��	'B�-�s{a�=3V:`7���bF��9q����*#a���aK�@l�6o-�3<���A;�n�>���=�M"��zp	ku��� ��i�N����%U6N�;)�,Lo��:7��%@HШ,K��>�h����R؅���X:��ӋL�j������;R�	/����cmvt�
��~hz��b
f���p�q���<
DH�'?�d���M��`��Ih=����xX4��+1m���u&d߄-�
�1�p�nyVf�M�ߓ��I�US� B�R�V�j������rc�`�R~~�݌���)���
�-�l2B�r������@+6��{����+�~\	  F�G/�����?�qDd���A��W���F��KC�#��_�S��V�K�<7���W�
����|J�W
����	�æ=�L��|O��>'����7�����@H�� ��"�8X � <� e�XP ��� +@#DX��8HP /, � �� � �R|������_��h� 'A�d��d @ @
�*�ʀ �` @�H �))sK�1�
���3x@ ǀ � � |[ ���$ jx ����>�m�͏$l� +� , �� 	�028d<X�	��| � m�� �� �MC
�0�x7� �q��O��ā$?�n[�����_S�Qwf�:��'Z�M"�aZ��G�13���6�ꕏ����nث>�����E���SM��b �7���6�g����a�M�z&V_�1�M�j��>�!��<�L�X�9��T����L���9+7��[�'�/�G�qA�a��q��Ā�i�l'!��z�:8#0^߯č� ��آ 9��dC`	[�]� @�������#�  F���Z��tӛ[��8�����l%Տ��윓���d/���Ll�QX��,( -V��(��@ �H�FZ
�`<�&���`v+��WD@V�X �h���P=�/��}q��!���p�� ��"U8�2����&�&(�m��>�﮿�R-z�QZ~��ظ�Ь�Ò���nZ���N5��Ů��/���79[��Ec��ixs5	��$gp�4�
=����?��H`n�6/6�����TZ���.�E�ˆ�#GR���8i7����mb��dv��������a3'�B�"!�6���GT��*U�%�0]췓�������-��vG�Պ��C�H�N��o�7J:��z0�P�a�|�r �הۛ���خ��-B��RI�7�ƞ7LCc�=_��W�2�
�������>�S̰ߧ�� 	g���˓/��aX�Գ*h��Vc�=�m�������?%�{����H`|X��_��B'�ޟ�`�Ų}t���� /�����?�C���Tz���ͬ��K����6�|�#����ϣ�ҍ��R_o�=9�i���Y��k�*�F����������a�]7�Z�ȸws�i~�9���z˘�G �މϵ�nH%�� �' :��&���%�P2�?��`�Z
��}L�i�
�E:= 
�h�K�����d
�b�_v�߄w17��C�m�M,�ˌX�����)���
g�$�[�nw�)�����N32��F���q5n��+.j��c�e��g/��of��X��̵�b��(t]�gS�GA-�/8J��F+>5ИX��ƛof�ߵ�uK9 ������#�8Q�ce��k��X �7�e���i��B�0d.��Ъ�FB�Jt^y�U�*��96���q��c�D����j:�_�&[�|�"�2�;�tU�#`ps���ǩ`��@b�.�((E~zJ!� 5P�����A*����>��[[tm��jN�L�n|�$����F�J49����U�E���윰�{������8��t����o��lw���¸v�ß|'Y�!%�	 �l���*�*��8H'�Ĥ�d . B'k�}�?�K�ʺRE0�>�l�Hl
>�� �$���a�����p�(�̷����]<˥���+qNȔ<�	��"ca�!�
px����נ��O���X�PE�n�-�J(��ޮ�����,���El�1�#�F�!a^�A�D�.�^�� R�f����C������#��p8���q���_�2��`H�+��l�yˁ�3_�\
��?/��f2c:I`"a�R�V�R�D��e����Xȫa0���@��9a�9l���D��rʭ�/yc'a0�����,D,AAHbG,n��P�{�0D��K,�ܲ�r�E[	���KL1��I�*�YW�$��YW�_,����b1,�<�凭�eW�I�I�*����/KK�`�29`y�e���ʭ�̎XbNXz�,���N&�I�I�*����I�̎Xz�YU��O�%�@ �\�95�*��U7,Mr��\���eW�~�Xb5��rʭ�*�����eSrʦ咯�K�y�X�9eSrʦ��NXk�U7,�nY*�"��A�`y�YTܲ��`y�Xk�U7,�ܲU�
�U͘��^��2p�@Ŝ��4��G��E@U�A�h2��P~���>�!���� 3A� �, 
�& :� �#HkP0��� ��
��jB dr���|<� jzF��ۆ�b@�6�B�c=��L��	�70,p�X����s��k�� N���O�p>Y_�#�>?���k�NPY�-?��|N�M�4��������T�ĩ[zZ^ lݫ� X�0@l���ԢVf<r���)����W��@v����,�e����'�9�}������O�Y?X��c�Y��d��U`|~���P`8�� �y�?�� �
��  ��k	U��<��m�+�Ȃ]���ŝ�M�%��ã��p�^���} ��e�Ll&	0[aH�=dR*����ϛ��0t���j*��ت���	�Q�&�^ͼ#p�)P*����
�pP�e��V5@� �X��uc@R@�tt8�縵5��Z����?��~�$m]�Q
����ROHR-���W�o|oG~7>�A��&ʙQ��L_�����&`���e��C/H���ܔ^	LDO~i��!K��>'?����څt�<45,��h��{�>�1č���EAo2
x��ʫ<��|9��C��{P������CpPe���$� �/12����>�b|O��;������(�(55����a�_*��|ʪ�'���N}@w����j�w�?���zM�w��l]UU&7fE�B����R�S�M�m2�8jZ�l�r�
9hZe�h8c�LjZ)�H��2|[���ۅ��ޗm����X{�8����k�.�@=�b��S\�5(�J��jyt����LexRƲ t��x?������?�Ǣ}"������ƥ�jX<Y�<R�sC�A�V�x��_�p�p�N�x���ѩ$Zz8[��mm�t��o0�0:��Zٔ��u�1�:�QԲU���ٰ~!��{1��w����A+�AK��$l��wLk�;����*tG[PU.�n��(
Z��32�ln�V����Z��
h�d�׿��4k_S�uvk�7�aW�t�ɡ='\�X�[�����3���)��X�,�ªf6��PD�T��b7�����-��Ù<7�m��m��^���O�  � ���	��1<'İ�OH����Nk�{��u�G[��� �i$��Q�ؓ�s�$>�k� sb+���Lk
�����S�h (|�k�A��1�؁賀x��:a�V�P�T��W��9�;s�v��Hk"�#���'tK3[�i�)y��E��3����u�-���
�&�4s^dma�#ѐsB�Φ�j��Ѱp(�&W����
/���(�Xޛ��H E��@T��dp~F@�E@=2T>��~��1r  ��0� ������ �)D @
O����ɒ�D�q�٫|2A�����}�m.#n��U�[�wzͥ+5J����/�?����sC���%�Tt��tjq�����:�����U&�Y6K��E�J;Q�'�y�rE� �z���[��}�'�az��C
z�Y�5?�����k���_�DHz��������F��������Axa��9�����P��I����/"OL�F%��ŝS6�^�2�?�����|�N�[�"ę=!��x���� ��_���_~ @ع&�40�cs0��RJ:{=?Lw��dHޑ14�Lnю�I=벸����,G��������$\b���D�x(Y�eo_ �tuۃ�S���mP礨ae�FX�[�@�Z�|\I�aY��F&Jd��<
�K�c�,D��q7D�g��Y��qE|�!�ޮR,дF�У�C�Q, �	+���X��:��}���l T��'ŀ�h�x /�����������߷Zi�caP l��
h<��,{�ě
=�*����|�=ɿ
���
�hJ���d��|��WxW)���¹X���>'�ne})]q>'X���*�b|O��>%|@�grX�@
�� ��`�Bp��@ ��q >. 0�
y��-�(*��J�� �|@��ݩ�(��B�x�J�۰ /B� �:� g�'` MCZ ~��c� "dȍ��6�^] ꖇ-,/o��?�t V�[�#���(�>���͓��@�������3e����ùu�O����^P���m�f1T�ް�Aꝿ����M< I�n����T0n�&���9����/� �ج��v��X��^[~)q�h҃��Qx�d�@V�9����U��2`8�LY�;r������+���~���J^����bq��!
s�\��6|���%U����VL����J���Z�_���mg+2c�x�F��X�1>|i6'ဇ�egg�c�~9R��F�q�$͵�vc�.��������x��CC~D��>C��`
.�����d	%���>}8��|+��� 
T��,)���rky����c��}��˩�
��ك!�=д�?��"S���$a�W-W��>�bZ���!�a�&_������G<\.|~��|A^����wʁ�@uQ�;�U��]f��Z�|u
���  Ai�b� h�N�hPVX(PRe��7� @b5�^e�k�D��]��������c��#�����J��_��@c�
�5��/�?�~1/�X�v;����>�1�ׁ&����9oH��R9k�{ӯ�׉���(t�娋�����忿}�A �A,R9`qH��,g����+�XRr�1�8�9oN�߂Xq새N�È��t���-yL�L� �a�"�v^9I��})�	��L��`�X����L����H����$�K}��
���y��č�:�Y����nL)[�/��}�l�`24�ZYL��  � q  �a>��@zT�6L�[��2%�H~��E�W�L�&_�R�2uӫ�p�&�W��o�M=4��K���]'w��ж��j�uC������n�Tӆ�,�����嘉���  F�wr�{OF+.  �2���>h�,�n$
�i�ڂ�@<����g&��`� B��
������k��]�G�@K/��;b������^F�����w�L�W,>+�_K� ����
�c:����2޽�,�Q��KK.���a�ѭ����p���ۂ6�����m{~p�b�����zӶ���e��i�d(�7ٔ&%���3�C��鯀�'���n*㦞 m1`>��N@ ��K� P`����F��=����
,�}�7��<'����Eֆ�εs�n!��S^��O���O�o�HC��טi&�R͙�1�k�Ɏ�+y��JQi��W>՚1��MA����U�|����7M���|@�"�sB��)h-��~���>�7�}?�����?L�����X�W�|O��'�� �u���č�̘Y�.$�fq�ͱv�2jAfY����~P�#���].-�m��@��TS��M�$\\�,5�T`Sj˩�:���po=�9���h������������S$c��ʧW6-��Ke��(˽�=H���F������jót���=��p���AT�:i�ș��;RT(���n&?�?����-`�f����;�:ڄsJc����:��_A��v�Eh���_-��8G�0���#���A�)�_��� �{��ҽ��? O���*�p���fg��]��������~ ��v�D,f�v=N�{�DH)��uvQ�������L�>a(p]��ώ��'�)v%g����ozL���r���fb<�i�Ɍ�CT��k� ���a[%l�ڄ�T9Yce�L�Ĉ�-XZ*Z�%�Yh��
]�Tr�k�}��q���Y�����Ll�����e�T�#�6uG5��H��n����ߣ,W׾�sm�2�cC��vu�2�/����,�SV����PT�u�ltb�J�5cY���>�cw�����Tr=�3���Vf:1�����M�����D|�W1�S�L��:���WB�L�zH�=����ʗ�s (��B�l���mx+,�p�,X��ʬ=8˷=��X'��me9�f�Q$�]y������N
=��L[���7��T�6:��8���h�V��>��4���[���L�H���I���#!:�m
������~SТ�j�AI5���eVX��SB���w���p��eS��Ђt�RUNY���r���:4��0�~�gLyó�o�a�$L��HI�V���x��4/�<Y�+Sd���'���=�	��TB��4e`	��?d�$Z��M���`6,���慭�kș�'��䦧�L�k{�fN�)=@��RTI����kGDM��i��`s_H�����
74k�p��3T>`��ّ��BT=.�Xϝc���Oaa�f��B�\�\b�4?+WPt�%�jˢ�i��hn��,#�a:��ͬ�o��h��)F�UIWO�:`;`��j$ꢄ)��ǈ��<Z�E�Ñc�ź�C�ŭ���d�,T~S�����ȁ�87�z ��4��:B��,B>� x�,Wk 8$Y�W���n�,C�Z6Y�S7@�*��.��S�7�� lh���F��\��w1����Bi�BJh@m=pjzI�f#�uG�K/���#Ŗ0^���ɽ/� F�3�IL�����@���p�x�,�z@���5Ph��qw;?�*u�<e�wG�����[�����@�r����LN
�H:VB{ v҂?;��bj^��l%i"d	P�x?���	"Fҫ y��<��6�#>����g�L$���pyJ��� �?����?�6�����DtZ�{�\�17�d�*��AX�m��,�[	��~qտ��`_?�B�'xW_�{��W.ѯ�����LDᗢ~H��e�Q̿�o|n6���>'��|nz�>%~6
50��
��U-i�6/Z�`�3���2xf!�K	a��$#��=�陲�<
�߃z�|�̞ψg�������L]6b�����le��}�]i�f'i�կ�@Zh��2&ê�om�Z
 hU\^�'{2�`%_.Z��T$.�����N��ø/�������߉���R��Qؘ

�>|��r���4��R&JS'��O���8)ʾ'_���`��:g��fk[�j��/���'����Ri'b�Ц�'����tuT����"���-↸��_�w�����W�@��������*5��a6kl{�6�~��o�C����h~�9K�3���:ό����47�L1��]����O�� �~�b|O��H��~$#qWyw��quR�]lC��a��9�t���qM�˴�k��mj.�XS�./*)�b9���K���o�a������Ʒ�Sz��2�z7d�@�G)�?�=�݇���g.C���컭��Z�!}��X�������*�o%_M;L�SQ�A�2�u�ŭ��F7_:��j�]����$;�[������R����U�&���Ǆ`ߑ!�3;aS�=$ۦ�c��"F�E<��?�G����SF��mM���!5�^
p}�	�lF8E��5ˏw�� ��J�>�l�,���D���� @�[���{>I��A;Z+F��u��p�5$}	����yb|n^�=���]O£���孿#=X�XQ��G�&s�PS@�P��u�'Y�	MiX �6��K>�a�E�7�������J�$t�u������_�������P��⢬�����xכt~�;��
��F�g�>#����"3�]�/qp���� ��:������3���%�A����
X�!���C5[@>=h�[��G�����0 .
o���Z�[�6 �K9���a�B��3 ��[�O�0��"V{�P?BNr���f�� �i��d�$��\ߴ����L@:�?�s�8X�Mɲ`�A��r%1���K�k�ܣ�C���Z�5`v)�x�˘���k�1�E���g�IP���A��s�jkt��>"���$mu����r���Q4cJ��	SZ֩�8���4�G`cp>�~
+�Ak���U�窺]�c�\����k�� l���ѡgT�p���� �\����
���fe̽���b�Ho�#cEZ0�}�%�z�c�ά�R�*��y��OR(eLK��w M'}��U���z g���<ل��eM8QS�mŦ��Y��w���5ɤ�mq�m�ZQ- �k�l�7� AlO�
?-�w1����g�#]�`Y��������2��-����d��'8�� �7%�f��0�12��&?�`�Тt�ƴJì����� �d�YMP��$���(�j�º��`��@�xӣ���貁��&�<��2ydXZ@����OYk/�H@l��d�rI�3�79%KZ˳���ݬ�sy��u���$X��
�e��|���2� x���}|�B���v�V�T5{Q
��]ҍ�����e�u�3�x����gH��"$����C	,4_8Iv�rPh��4H�6��D
�|��S)�v�Ňp	�dDGֲ�t�璅��[�a�h.{ƿ�Aw��򽭱����*�k�Y��.!�6�Ӏ���py���i]������I�V�x��`�e��2�?��]����j����<m���0�Xb/-W�V]�Kv�ø�b\��K-�D��K��ȄZRf_�D��y_�_-�Lk��;,��Dpn���L?� qRI33L@^�
�,�_.:�}w>�
�^�*������#7���H�x���W�~�@c��q���W���T�ϸ!�=r��a�^I��9YoZ	��߆ �]e�Ⱥ�x9y`p�yo]��X9� �]e����-�X�����p�ڿ%�X<�h���PƔ1X���%��x	"���E7�8��C%��1(Ǌ�"�x� �T�S�R�q �0���RX"�F��
D��,X.A[�MK�Dl��f
D�6�"MI�~8�qa�9nd<���h���i��,�j�:�bd�3o_o�������� �.)��T�a#eKϰO#h�ѝۧ��)�d	��x�ʲ%A듚|�����o���E�,%Pm[g�g{�<����+v�k�}�lٹ��#��vq��3��#ߤ�o�ٳ҄?�����<�$"/���@~'���R�n�H��n�p|@ۃ���C�
�^SeT˦:ʬ5�4Ax����h���;�.�D������o�23�|`b�ك�x$�yfAt-ᗠ�負'�{{_A��������=�-��y�`���n1��BL�6�H(xl��_��6oQi̱�O���e�Z��R�s��F�K�����t�M��Ȁ,ҭ]y���=F����"ͮ�u��Q�I�꣰h����7���������eUd ����[�9oYf"_%�\�_�|�?����T�l�����!Oi��O�G�~�����l��jR��|��HzN	�^���Ů�G;����Oõy
�	~.a��^��)��6��d� ��_��SE<�i���?1���n�3ͤY�O�9�/�w̩[/��z�'�ud�F�F���k��r�䜷�^-��Z|)q�S��~O�
����������1���0:��6��Y�T����*�z[0�� ��9��S� �^��e�����@x�
�W�1���~�@+�%�@H�Y6*[fQj�ܒ|m�F�ˉ
b�VyXA����hĐ?�������g�w=�sm��x@n:4Fa�­
[Ndj�3�zc��ZqK�G}�s�|Dm-������>��G�w�0�(�k����:P��0����H
4�Vz��TϽ�b̢O��>Ԓ��v���+j��<hV���X0!������L&`��WK~j.����
@�6 P88�֌� =h��K�W�G_��s� � kz�
)���$ �L| 
1x 	
-`#�����MC��L{̀ K����Y�H��\l���H�  �P '̬� 4�� ���eL=ch��R9lb�p�:  ݡ�1#���B�� ����#B`3��ɱV?��L��@?-��,���^���ug7��x�_��e��*1PMf�<;���N���v�j?XuK���h:~PDZ�?���T�?��7���������GC��QW�IH�+~���} �"���+-d� U1}L' �jdш5m[w�R	=/|]�� O��{��Q/�a r	�����p�	�r�@�%5���"��� O�(��zE��v ��K� z���T{n�#E�
u���������Js� �qtcX������.|}9T���s�kC����O�G�žh~�xc�
N��]��8���F�i`�FW�T�p;�??���B�+�L4�������bw��?'�I�\n��AQz��
Vu"+v�����(��_O$��2���m�x@o�^3[o{���d�Ų�z�6�B��a��9� L�\��@�:�y�h��8�z��zk�s�H1f6gNE4N� (]"}���@����h�@��u
8�*S�OVz�$�-w�Xp���m�;$@�� 
ی����隉�m`�c$y�QDk������#�-x{���%�(�#�óm׍�
�1F#Yf �g�8zP7z0/,�RD��Y�.!��u�`�$��,��k$h�|�O���r�]��%j��N�!_"��x�[
)EH7��>-X �6� �Y ��
jђeeJ��"6�z郜]e���IÓ����&
v0�/g�����.���KLӌ9�qx %���r��j3�t߃���,�M�%Y�t�k��Aľ+�|�/��?-�Q�{h��!��xd�1�w�뾷��̝�� �/��U���zz��~~*��2�)�M?����+�ʀհu.X"9l
yL���x!�"B����qY`q$rȯ��1��@�����H��萲�:Hr��NX��oL�p0�q�0y��,dQ�˸�8��̸\^��I
8���G�~�Hc��pw�E[bf��p�-���nm6������������淚��O�e�� A0:�P  �0 �
[�L5j���.�V�ս����iPҦ�8n���FU�Co_zX�#1����?�B҅ܰ#��������w���8�F$@{���&�P�EQ���ܣ�j���rg���LT�i�k,\���6�V����^��b���7k���gF5��5Z�b*��խ��bƎ��4�h�5�c?�^��E�0�h��[\��\8]C�X����_j֐e�<Ck���x
ң2˽�v��P^��z����,�`՞7��Q�U���W�(�e�@�uk�L+�
T��ϲ���x��LŪ�G�yfW�e~d_��6��wBv][@���W���q�r�ZxPOޯˍ�6Z7�#��Fz��Zj�4SYY���V�D��;S�F%��(�����S�%g�uk���%���j�l�9y`N$��=)����$�?��v��I	ZL��<�O��{t�ØbsA�e�M����+$�2UR��?�O$l��!e���a~�F��(�/YQ���yZ��nBV��*��
P���ʪ$�	� �-�+����,8�L���������⌡�����ЄȫS-��O�
�G�
#��5e�tt4ft0��@K�0�<{F J�`4�Dp�]3n�{���!�� �x%Vs%���aL�'-F�G�!e��С�-�I���x8��!�Ȣ�+���ٜ0�C��+N©+KG��=���Ɗ7��_��6�N��4�R���q�S��N9��"�(Ջl�����T��AOa
��3�#�b�|���H5 棌�vH���āl[���s�`����#��Ρw���$C:�RT�:��XU�����C��P4�?h��{��ɿ/(�
�1���t���1:�c�Q�5���+%�Ej�l�>e�u����"��Z�I���:���~,� ���/��Z�U�ȃ!$2�#��F6�J:����=���PTBybA��@��
�2wb�A*�|?��k�{'~�����"�������q�VN��"I��UP�s���+ā�N��=�NY�.T�������x`���׆��	���)���cE�a�廾h�R��8�`�ʲ��ʲ��_,!�e����+F�X|���,���~}�,�Ҡ��^p3��ùk�Vⱐ�^�񱇵&�a��0.q�� ӗ�<� �`e�<�:`��jp>�T�BPnb����W�l���1H��v�6X b0bq� 0bsp{ϡ  ����D�͒���� 7|�i��j�+�Z��Nv�g�\%���/�F~��A����@4�~5UYL�@����y����t����D� )+�qL��� +� �`#�� ��m �x �wg�穠g��LW��Q��0X�z7�v􇯀��U�u��ĭH� �ڦ��W��4��U{\<��8�ׄT| &I��\q�㘰�T����uO�	�ɇ�����J�}pP�m�qX�V+xQ���YQc9�)
Jf�2����v��q�R��j��߯�k��"��lt�� 0X�H*&�{2#��K841��%���+*�|m���LP1a���>�Ğo}��H�cr��s���c{fS}���`���	
U���ê�L��ƨX��?�������%fڶp<+-��%���+�n�6�7�k߶f+�8LQ�f�Vy��"�;���gF�W�MB)Jb��I�	I��	|�������� 
 @&�ub8�3F��m��� �a���NX��C�Ia� �U����.T&2�����Ke�k�0������*������
�4@���� TX�0��i�yAkd�KB?���������� �
�xJ�܇� ��3���@��y�F@��R������J�g� T��p�7� ��ǀ��Ѷ-ŕ`X��F팴��cA7��đWB�0�P� f��fJs��Q�@T�� PqӉ>��n�]Y��!۳Lrw��|<vlj'�6�돶��"�+N� �1P���N~�7�ɝ>���S}��w�l����1�Oo
Z�X2��}D�����|!���N��lU�D
R�ĩ��3`��2C���7�S����F�5��_��`C�beE^m�?϶��{�i�%R����U�_�1ٕ$��E����$��L�|FI�����$D\G��]J��3"��� IDF��x�.��Ì�8��w��>'��_�$��.�}�1�n߈@ڨ��\\��������.�I�pډ}?O����v2��� x7�4&:M�1Y��E&�J��PW�M�KO���%4DoF�?��@��H�؄�&�d��v�G�1����v���o��ӖdࢦM��'���>������,���:�����r���_v�5���_/���Q�(Ǥޟ��"�Z;����ZL�{���A�\����m/\GI����O�M�-WVy����>��_��Ȣ���B���o}�޳��d��6�8�<���a�Y���0yF2����~�^+ƀ>�O�, ������V�"�zu���m��^���_������ @��&�r�����u��ǻ{�q��B&��FǼ��c�[�ڎ�Ԓ�Fx����_���c���
�4��� xC�d	���v����zi����<�!S�qN���B����@��<Vڅ�%j6�I/��_��!�q�q\.S^���bR@cr�ӣD�
�m쫵]�����1[�,��V����-.�Ǿ�����KN9-d��k��i���>|��{��[�/�����z���}"�� �
��������LW�'4�
�Ҏ@�/q�	�|�[�S��
����2,�<dYk�BD�8�$]ƥ�߆cn�B�+����~�:߆�����,�������E{(��!��ߝ������p@�h,|���	�1��< �=� p�#�T+%�
���%D��cL�H��o����(�����Y��^[6P�� 
�g��%��nڔb����b��@Tn��������pn��?����|!�ZWӷ��0�.x��ﶝp�������i�������[ko�
���#k@ �1pR���7)  X{�   E%Q��L��w��F�բQj�*^AC������� ��t��|���Om���aa���4�<��7m��`��9�V�:�� �V,イ �v�}G��F�� ��f�n.:��L`:��	��p[Z=��y1⧇T�?��5Im�� P��5�&��k+t���j���?� F7��A>����� ����cx��8� �A	�&邱�n"�K戇3�kn<%g�ODl�|?w���_��,�߫�	
2(ޯ.�:��w��'�z�m�a�P:�|��&/��r���;އ��&.����5�h ���	r����    �}�   �`_@ F�  ��
�}�4�GQ}������Q�s��S�mۍľ+L��n,e�8D���A�9�]�O�@�6����&�&���DL��*z����>�dLS�/�Ae���w(�-�;�a~�`,D�~�0`��fy=v8@
�N���7�'��`��T>�c�����x�D�|�[�겫��t��~-����{M����V�� )U�^1Rd00�^t�JY@��(~W��,lln�c�}��Q6JZ�Y<8�I&LEm
	Ʊ�o�?o���=��P6 x:p���#*�� �� 
��"-
��Y��?מ�KΆRD5�Дׂ�`,i�آ8��g�L�8Pe��v���\�u��(�yaNy�:���u�B�)`�M��z=җ�����\H�+������ `'/��+�����4�!\f���'�A�'���"�L���)��~'��w/��\o|Nz5B���p�Ѯ6��+�t��Q������>
�O���'�_�`�|#�)	��"�o��������R���.�gҷ��#n+w�z�b���3K�YR*jz� 
c  j�1�t� ��Mv�fP  DR�� @1!��=9Q�4�W9� �5z�^�
��b���#���d���_���1�������c%���wd��y3s�(��Df6���U�ܷZ!
�x��NfVg������T/�G"�16&!}����yZ\�������������vSL�^&69�\�(���23'��t��Ng�Ll���1>*IEޫ���HT�n���j%�J-Q��||-q�e�zf������+5�������q�]�}���*�J�_*���E+���+�_���o�6��u��o���:c���߅�L0%��dj���>�S���le����:K������]`��0"�D��,�ǵ-�%���n
�"��f�vr-B��٥�4 2}?;Az�8 F;1@  Z�!�P�O�"3��0�Ȫ���+z��Eve����5<���D�fMy��3RI�#�})3"��Ă*�����̥u�Y��$��f�����r�t�a^~���λ����D)�����"�F�bx���c`0&i?M>
b~�n�t�B�~�翿� ����r��?o�
��%_�HU��xx L7������� $1�����$|�!c����w��~E�WW���eኑ�Cy�vY`����/DN��$�"G��]�����y^��Z0y�
a�
 b`ym�#����i�
Of�#V���J��E#�i�`eS�`!�%
X� ���TS�`7�zo�B��C�Q�LՍ�L~�V� p��p5����E������
��lSAC9�;����Ø%�@�щ�tsX7N�<K?�����΍~X��L��<��m�G�g�-���� �6ZΦ�nX�uoK#U������,�̆�d,�9�FR�m=L��mﵦ���[��������,�({�R�����}FdQ;���Wy�����:�{C�M��dT�[�X.p
*F�O�A'O�F�e;���C<Z,ǌ��2���BH${��'��f"g�
I�+"\JguJ��!�c�xvV�陦\��y~~���x��zb�^��
[���Y��V��!���a��9�yX�@)�f���R�vI��(�X���@��ە�1����b���/o��r�XeBQ7A�E\���b2%�\B�W/���dB������/�V0�F��~8��"�|��~��H�ۤ����s��';�H�_��p�s����4��*��*߾��%^%q9�j��+�����5w����6  (Q��"L�
�(8HH �x��p�����$$�`p`9A��  B&݅��[�!���t��.� x����+�:1-3瘚@8g�B����e�����8d �A�����K��/�߭��m��M�`�ĉ��%���9kb��P�U1��g�{�@�<����j�H[��������0
�V�]v�S����k=S��
:�n�UjT�Xw�T��R���0�U}���S�mcBt�`>���'�x�J��;zW�����=��%h��I����V>��wU�j^�
4}=��KU˕��"���\O��~߁�@�]��C�R�vc?��H���и6F�Y_Es-���R�t";z^���4O����k|����}�����9��c-����C����k��RK.r����}kKB�t��k��4w�����~�������;i��|��\>����� }�>ý��6�6;���97�11�{Cp{g�[��%��)Rd 

{��C����R~�~�/;-�����!LW/�|@�?F��o���ā )��\W�/l���� @�㸾!����� )�|�!������1!K{��?�Q����/�~]�j6npb$e��.	��^�A`A� ��W���SφN�Z	�Bߩ�w�8����-�������Ig@u\D��%�J��g/O��}kG�
����  S���2 ��a4ˠ E<S�l�d���$���6
�m���ֺ5{&C��@)N��MPEhπ��0�ڹN�."5m��
sO�!�7
�n`�S"T�O�� 4  ����� X��^ULd�`Bi����c�
��	8����.;_�`S3 3@CI�z�ˀ�@��d����?����W	���#�����Sd���uC�p���-�;��ȷ�t�1�dޝ�q�����%���*D�$ۧ��6��_��Ԛ���l�-�Q���&�ܷN��$m����0�[�(�d^ҍ�,$�,�X	)��)X����� W�?@De��{����1�������G!���a�*�_{��. c��?�	1lb�+�u-�I����Ұ��^�j����@)U�����5N$pʇ���ze��)���-Ǎ��5[3��h>R5�	Ra��X-�f����_6F~��R��`���m����"@�:ֱ!�3����g`5[�7���~M�����׉ ���Ǭ��t�ZÔ��!8���i�"z��\]4�W��d@ ���TG���F��U�:����ַ]�৏&��+��:�]�&2jl�B�\Y����K
��;�b���"|O��'������@��p,��k\HB���ek�$
��� � �!�e ]�A!��_�
��??a��~~h��x0�r�q�3��!^+�2����"e���k�A>3���z��o�@ۛF��F���*�>��-�T�Im��~	���b�NI�eI�KAB�=K@g ����ی�}�ܡ�4thφ��4'SN.�t!e����vy7�R�
����:�ZO�������W81��o8�V����2XQ
���,%�,5��a��d��������=�Ck��M�D#o��K��t� �g<S�t��I(�"Ye@d��@���Mc���s+����N���Z�-&�@_��8z��(��me2]� @B^~��h�Q'�o����Խ�[O��q9�D���g�U�����	{���g5���ݩW�ֹ�@��� ,.����e�ѿ����[g�
ç�jn[ʯ�8�~����e���9�m�o�DHVͩN����Lr�q ��/;R9`qH����oޝ}�0��͘}�3B����}�8��^�@V
, kɄ����� ΘL�y�1�HHs
CC@G�hg�}�=w�l �`i]����E���� 7f9� �\�� �>t	�U(�X�|�$V��H��s�?֐�e��PUR(MJT��1��a8E���$�;ϼ��W��8�@-	�T> �ņXb!���p���A���p� d%�Nv��-^6�m3U��,O�/��r�zm���"�R�"Ӥ��������g&�L��a{I?������J������ZV� �;wIUd��+8��7� ��E��?�#yy�ݖRaPV
�'r�������fL+x;w��?���>7j,~
��<�4� �ET���v��4�x:�4���'�3���ű����'� �t�	xY����@ �� n��@	�0<�B��C{C�,:_���Ax��f�)T����1@��~tR������>l$:�� �x4�!���祈{�����W_�b!Gq�4�
�����݁�io��ű�&���� �,H��C�$~���eX��� ���� �4�`��LI`�`X��-�x�@��. *��N�I�H��ݷ��s����Q�>FN�Y��&?
��V�;4w6�X�>��zZd�I'S��I�6������zK�8��q�_��
�q�#e�M��Iפ��$ý���Ʃ1M�}���@W�@��`�,2�\ƴW/�I��
��ʅ|W�ӧK�?@��6`��ua���j�߁DHbN�~pe��ܷ��~�U��7�/xp�Z����HϠ���m�,#1�����"C�wwn`�~�e���-����Đi�A�p�Y`���?�t�Q�kx�~K��Y���
���` g�T�+��2F[�����fVM���-pZ� c�T�j#�F*�7N�� ��4�������� �<x*�\�,�M�"�I�(��٧���$l�ƅ ����  ϖ@ �<�o[cJ�%����_��a�
�Taf 2˽��Ay�<lY��, N����1Hn�������]���*�m��[�b�ā�l�\����*g��,�N�մϓ�@z��qu�~���@-w&,�2��ĭ�Z������{b~R*�'�w����}^�sM^���[b[E-xx8;�6.lW���C}I��J�	P���7T��Ut�M��Q��T���W䲜�]�o-|eӘ��=:Y�;(�F2!� ~�#5_kLV����F��~m����f��|���#����Cj�B3i��dF�!����Ys�7H�a��E
�Ş��|H�]Z��@C#2�2��p�0='`�7~�e���tRf��tlP�)@��9����(���Ē"��2�SP��}�`W�y�\���
�mr��݋���x�LAOi��!�˹��#ys����?�
��Y�)��a�t��0��k=��H�;c�3��Ăh�����'of*�?u��1�U0���0PN   s H(� % s
?Д�1�<lc�wJ���}�hJ�KX�9�������f��QP�9�v6"bBZ6n���^$@�䬊��+ʏۡ��p,�:�<��j0�M�-��_��A��!ZE�A��7����dI%��1��)T�|��q3�M���H�;R��l��,��:�I�������A�`�b�|�2Kڮu2�>��;���M�0�$į�G­�i���F�=��6��Qmxi��Ę��M?�,�˘��!���˧�L���`$;)��<�j�c�o�����!��f$;�K�h�`i6,/�h�e��Po�>���U���8�,��`��
[���q�׍R��F����6#\�*��@�K�i!�O�v���#�"6*
4l�����Q�>�����ѯ����6;ߟ/>^ܻ����ɤ�|���$�Ń51v�GG
��)��^[or���F�'���b�ٮ
T	c���nR��@�'7�e�G�����
�	a5U>�Z���P;��N
 �
Av���\��:���u�3����iF_���v�yy(o�U��H��Nўb��FZc+�b\�R
sx��b'T���X��a��̯u ��{��ʏw��Ă ��5��Lj�cѻ�Yֆ�X�ƾ�<:��n����x|$�����Vն�����i�Z�î6L'����$ گ����#"���mp�c=�u{�t"��߁ o;
��M�:9r���s���]�� y뮵U����� M���5ːK����үYY�a���c}ό�Ϳ�m5�ʖN�������T�Jbܷ��ѡ��u.7��$S�;�������؉��G��V�V�?fk�gޤu���x�]�s𦁩r��H�W������'�Dg^�1�Z��/�b�(����,�|c��Ʈ��|N�*(|C�˩����|�|O��>#��m+��Qy~6�c��LA��K�M�mJ�Te� ���V���1Z�;I�[~6<�FJ<n�XE9
�YH:����M�Lli��!��
�)hC���a �,��Ʊ�Q}5��@0\�yԕҒ-��*���(�"cn��W�����t�!z^���7�,�?���TR)�n}�%�M��eqp� ��-H�va�Y��,(��� ����PB������{��g�f0AT��x�f�h�h�۹���<�%�Cm1�L�gO ����� @�Q��i�XwcO֟��m�n�q�A�����l�xaL�v��

���8[v�\a�� P�U��
Yq��?i>��`�El{�e��{&#��  FȲ
�z� �1��n��8�L�fLƩ����e�ꪢ�8)��M�S� `
\��ٓ��#ia��w��3csw����{�D���~'_�i/��ab!~�_����.�t]���/l,7n�s�)����|O��'�������bs����$
ֵ�|O��Dn
���q%��cE.6��m[���2�(�d����AǫM�N����e�Hq#i_����"&��Ɂ�7Q�8��/<�]�'q�8Y Av����
������#��i�R��ę�%���s����髚q�#��I	��6ȟtw��UP�6�`��1�]�#R�3SJ?�� �����&�_���R��
���r��C.��$���l��x����Ǻ_�W����]�������!i�]��tk]]��Y��aAV��h�Aґ`Qnpdq���TvWA/�� �]KIO
ٙ`�f<v��g!����NkzC�5�ZNy$K�۵�#���_Z������H�}y+�t��=��>R�s��c��HV������T����@�g��jh�SS�N;C_/SL5!����i�D��!�0�iW��M}&aU�ޙ*1�gO��������\+��K;����@�6އ�CL����=��`n9;b�;�؃�)���Q����|�w�ܻ�G���|@@ly2�&[��Zcɗ<&k�[?g��	#7/[�.�Zg�{�x�P���߼N�f�<�c�H�=�Q^^n?���<!���ܬ;�u���o�� .�:�ٞ��Y!ѳ��׽��>'���� @�8?bTƬ��+į�>$@����{�����5�Lk-}��o�C
���_�!/?��H�=�@�F��y(��$ؓ������,e@!��æ]G�����a��\���0uK�o1�̓?�Y��$; r*`ܿ^��_�� ~(%E�9,��Rz\tBg	�8"�@x7���
u'�)� �>�8q����3h $}�Pq� �&���q�C�&�<o7&.�=�u�C[���%��}}@�S�e@sÜb��D��������%�� c�ƣ�� r�9Ґ��A񅟵ڰFxQ����k1�]{rT�(iտ`bǲ���x+1��~�7b�}P��t��^�9�Mo�;�3�l������mR��O�����،�w�*��*[���"��v-Qo�ê'���-m��o/?���'��#b��T @ S��` �j` �  N� 
�H�    � (�(  R� 
P��T��݄ٚ
����v��zs19-�}/�/i��C�Z�xl���m��n,(��������-�I�E]��ljf�+��}�|O��'���9�O��� aO��b��Ѧ'�K�p��_��.ͭ�H������{��ݞ
F�ɤ�B�Nz��1�\rA ��Һi�Xf	�]'�8�F�m��>��t�Oy>^B�3����Z���.	$3j�ݰIs���dɝ�'�z�=�{���+@cL�������!������O��CR&Y�Wk����I-v��3���)��iVlG���4\���}_���Uץj^�|�횛�KVk��qA�*f�a|��⭦��M�ê�{m�Fյ_O�z�Zn����7:�Y:���pۂ��Sv�wH��I����3�/��3�F��,z��eT���8�L���o�Kh�̿�������u1��ڇeE���3^�A6L\�ʳ@u���o�����Z�u�ߎ���13~���5���
xlzXh%��D�'[��3������:�,T����</������x� �0
>�n]�č�"�1ֆ⟺�.q�a�ZT�D��Z�Rï
-��S�l�E��H�m}֑�RTe�F���.����[]:��(F�I �/���RU?'�b�^!
�i����.&6�z\�B��qj�qS\��?��t�n�I���IC��/n����@Dm���D�Z`q��3ط���, |�h-t���j͏ÈL���� A]K�c�u�����Us�K� �l�T3rۘo{2�n����8�����V�C�k'������
�%�T[W�)��qAb`\������$e�q,��ux�s0��=7��e�w"bQ6����� �W���KG��o>�y�}Э������8
)�v�v��dHb
x6�
�V����!5��4�8����w��1t�G�b�����>
&�.itG�SA�:lҬL_-�߄b�h+߈�����/o��%`������ˁ`@-�E���D_�j��&c���D�6��Xq@��4�Š}��ץ�GFZ�ݸq��i�Қ���ו�
��j~+�@ �A�&��`_�Cvb�K]=����L}��:@�����1vq�����U�i%�@����L���!�,Xg�����0^B�Aid�e����-,�24
�ث�1�YW�w�ߍ�0��h)m��n��>�~�ck�c_y����0�I�u�K�
�|��m}�U���K�������z�w��N��J�P�0lz���}�cߝ&���06M��|0�C��/X>¿����\�������w�1�^n�%I���^\B��̻R�������i�����vs�&�σ�Ԋڊ<���:��̚�w��:/���ſ�v^[ ƍ�Vdx���z��@���������"3�-����� �G6�]��'؟����į� �y��ڦ�xF�����~߄b#D�a��oy~�\�e�iΜ°��Se����^���2߆![�Y��֗� �c��0:o¢��q�&�����Z�~ׂ�{��hnk����!��bG,T/�'�~�;Ѫ�W�Lo�͕�^����_.�""� ����#�  �@����)7-��P2�� �lN+�C��B`�L8	j�nNh�����C�/�	@(5��� ��0YPĀ�#��K �@��j��|4n�	�X@��x����,&��XѪ����_�� �`�'w2�m�q����V�%�5ˑh�G��!����0�����A%mj�������_�qװ)�}-,{��hξ�8Ec���g�W_�{]){�7	�i����� �`�Ҁ��"�� ��z�*�?�0��L��odJ��?� �7�ph! Bq��	Dj�qa I��e��	̀�$��~&6�����V^�{�x��]�6��a�4
 
�"Ҋ ����@v}�o5�$C���L��6C�<�~������;���|@�!��J�no��+�$��Q4_��JsU���i��{F
��~�}!C
�u ���K!2�
Xw����˷�'�^7̏\���9x�d�@��V���0���A��-Z`)]�T��m
��X�`�k�!n���g׷�����D)�ՏMz_c_�K�!��~xa~��q1U��W,�d1�dN���ϥ�����E1�����6��ٝu��}��{�kS�mι����6�4��;:U��o���Ÿ�yp�+������K���_>gƖ֗�����h���o�H3��L���S�=���u�Y�K�c-z�HUoJ�oĂ����N�2�L��]!�j�{� @�7Z�Y��P�D�Y�V�� ����(B"��
U�w�s�"F���P
�a�8<p����e�w4?��D����s�_����܍z�G���� ���?c��:�m�0dx1�4�a�ϼ��m��خ�I�*1Ŗt��]F�Z0ǽw4����8_�xu�
���J�X�Cɘ���� �����K�� �?z.�]V��Q���6Q�O�1�rji�Y(�����쪲��L�jY�-�X��ƍ�|0[$k1pF��9a"p8O9`L�x�Pg,<�  �Ø3�2F�9��Yb$D�oWD���:���&O�?_F[��#U�|�
�{J�����9|�����cuu6����-�k�3
yp��]:�_�&
���Nx��4�ԙ�D^�ȯ����!ONӤ���	���3S�z�/5p�&���zg�W���U74�}�NS��mԵ��[?��4�"p�gfN��F�;y���K����u���k{S[i7�K��n3WC�+�ǽ���(Fr���ק� ��5��471����~�%�������5��a�@5�@ R ��"{/6��o���	�&GT ��m�ͼ�o F6e�?�^�a�3SH,�,�q�V�{8�(�6�ߟ/�qW���	��Zτuö��ye�q�uϝ�$|1��/��H�����?;<n��N����O�a�9�	�������B��a2���a�^���>��@��Y��h/�m������u��
�bYI�厔�kln/��$=�߇�`���N��Zxl683�u�~!����r�3�f�ҭ��('ѯwX2fU��m� D��7�PĎXb����1\��g�1v
����SX`��u����D��D�-F+)�
��8x�à( ��@�e�@�5
?��sL�C��t�/�F��uZ�#��
���5��A@��j�(�u]�h	YU6�7��H����3V����}�}
"��M�*�h�ljذZ�!L��5.���k�M��x�MzI"�.5t#�j4�'�`2�Go�!1�S�'�(���.�o�޸v�m[���H�3	�X�u����TT_�O����;�����5��:��)����LD�~�BۂY>�3M��Ӽ��v�x�{6����?�,� ^�k�楐|t�b�#��x��\D\�M��3n�C_,��_�G3#��.�d��_A,����^g���Ĝ���Kֱ+��n r�+
k��4:;�����0!
>%�����m��@|���G<����5�<���|�:��o���E�������7fP�u%��l����D��
��l��۾|@C���{br?�5h~!d����{����$R��_�0ŤpȪ����&
��Il�mU� ��OA��K�1�;fj6�EJ]r����gA�	}"��	y:�e��"�< >W`Y�BҌ��bM$VO��Ӛ&{�O3����u�m��~���Ҧ���z�aW��^,�vea��_�\I*�PYlQ��_�����sV��z�'<�ɎV9?��v�n}S�]8ɧ�l�)�
ր
(����0�W,�E_�_�g# _�i�1{KGq���hW�
=��bC%W�t�?�ؐ4�e���9ZI;��\Vb �V:[mk�n����/%��3�î���� _��A��]*p��T���yw6p@�;���M��u҆�����Ѣ����m�M�*Ar��
� Ïw�<� $I�� �`}��u�E�D��\Lmd�{�=��׵�o@������ P�}ˍ?��
�	y�+���%av��d
3e���H �]D|�fY��(==�E�N�o�ޝ��h�����
����~a�7��8fJ����A��i�Z�nX�[o�_f��߄@l��
��uĀ��5��Y�w��T�TRk^�o5c�jDMzI���6�J4�
`������O�n,z���Zi��
#b|����ɒc���b�@iz��Q�  ��#�% ��\��)c����q>'�xi7�}���^���$l^/�1x�������w�����u��8=V���O�
��H����m�З���\k�L�ӯ�+f4�|~U=���>��A-����="�Ϳ���_�8�>�C�2��_�1���;��t6��k�֓��}o��ca�g�ˌ���/����_i"h�����2�\����t� 7��T}�N���[�c_��c�	����tz
o\�����W�C.ŧ	%a��0�w���Gbݔ�La\F���B�J��K~��Hg�!���*�C\����f�*��8�T覹�|"B�5�b��.ׁ$H{�
��}j��j*�Y�K���6�A��v��`ļH0��?IS� (�Id�V"��Y�I���O����b}
?ӄ0��o�7�?_�CQ��Gm4����?���ZO�n�����D�Xs��~��ܤ����g�	`H�������2!��@P<�D� �'��G�X���6�Kڜ�]S叶�������6�d/���K��:�)O�?�Z��x*L��Y>EI���  F��f�I]
ck��{�$�[(�AO�Π��7V�{^26^8��ϔ�g����ޙohU�������{}�K�@�6�򛹰�+��kq@���0SG���m����#n[,jQL��l�{�%�o��.5�I�8<�Y-�����o>Yv���mv��H4Ӫ^ 	���f�u^��@m�� 5��_���W��J�U,�������wj�6�$�U�j�8|:Y��?�<uaT��M����CD��b�(Nr,�F2�
��&>.�+�e	0�1���N*�3&{SON��T��K�u���iw�J;�ZZ@�~&�t�����z�7J���Ӷ�V�B!�!�Z�v���jሾZ����ҿ�Ʈ�W�s����v�D���9YLq�����[�H�A-j<%g����o���K�=h��\����A��=>5��q����-�>��J����[t�oSp�ft�����ϙ�B>���������'���5�i�����M��#-�?����V;d�e�oU�����IF0�����s\�LǞ����a�g�����>/�q0Ǿ͜Z]���ܑ�q�Ŀ���5!E!-��.����R�wE�oR�=�ӷ�EzL�9��������@���VMO>�q>"7.��n\s,�ŝf.�z�/� ��u��i0�)�����}��v��8�Z?/텥�1�^3���k�q����j�o�
ʯ�_�{��^���!-���|3
ŮX�e�ƚ:/=���V�IMM�;��/�D�l��vX���!�ͽ/�z3K߅I�W�@'���C������D]�����r��3�}�b_9�H1����1�� 	Fу�otC�pd7Ž1�
��F�����6< ai�Ǩ< ai�bcTVs���%�
nᆄD����bB�o�a��ᦘ
� K HT8DQ^ɦ� �m�^��Y��f����p,��ߛ�c��3����q���G�6�N0�c��o7���b���+#�μ�s4Q�b�L��b�U����6,�n3V���}�%A�-��\1��gF�Y���8�`�����q)�����ͺB岼������=�=�ݦ�QZ?����pU�lw�P|J"�Ƞ�
�pkQd۪Э��o�x<a,1^�M���Y���	��9�ɞ��*���gᜟU�7:wA�c󼲠�����g��,�q�ѭ���O���l�7U�?k��͊�;ڑ㇟�KH|�o�[Ƿӥ�#yx諸3T�}b�xY�IW�m,#l��{?�t�pH'�$��JY)��_������r��J']t�m�@���
�{���]�5�8�4�L+.~j+_��+�:ĸ|_����%䴰0�5�o��D�K��?��{>}�4T�![��G&�.�!Ů���潅�k�|�@�(�rX7�eKh�dU��1�#��R\Hc���:��mľ'����|O��>7/F>{�h��Ҕ#��b@;B�4c�:�8��t��bգ9F���<�z��z7B�����u��B0��Ѐ�/����G1�?b �6�.۳�oy
�-'  O���> H"���6��@��B���=��� !z�����
zT����B�n��p��4�?��_�������1�߯��1}w��+�}�����õ��u=��=-�駈�5��X���4�����5GRtw�o��V��y�4+o����Q�h{��)��Α��*�����W��f���q�g-���m�C6�������:��s�&��1��;�=[���Ɠ����^�S4�6I�?itY�6���u��iI�Do{R�16�긪6S-��{6�b}/�2��K����j�f�{������ޕ�ٜ��%�/OO�5��^��b�CW��#�����G�m��� �lYn$#e������c#/�>*�J?���Ā���F�qpKa[zL�ziX�ϟč����B�er<O��.0
m�k2|��zF�1�����џ��m3�}}/�'ט���os��
HўW ����yS�K�݋�k2ϯ���l���Q~l���i����/�@no?���ٙr�1��"6K^�'8F"&E.��^ɗ�q�`������mP�܋���k��3��I/�m!_9o���z;G���}rcS��Y�)˅}$r����N��~��ڣɝ����sS*���}���ESM���Yz>��zjf�1jSM"����9dBM�C'�_�ۅ��eF��e��#�K��uG���>���1����c�x��'���<�v��p�I���&�w��@�ª⍗��ގ�W�4�	$��������P|d�Y��K��б���� �f�e������|K�:�����x �`�,0I�c�v?}:.�q�w�r$?͗�k
�f�e��J�H��(����ֱ����1���e�5�g�}�z`9ͦ
���
��7.Xm ��M��D/�!��蕪��p���2���:�0���t5_҆�Jv���t�'�O�k�j�|[���GJi�׆��!�-�t[�@<f_�B6HV.���w +� �	Y{a����:��v ?��:� 
�]��gٿ�x`d�����nQ׀�*T�駂B7x����+��W�x@H����'(�Gl���hx�	���;�f m� 2a}U1P �?�`@��c{P!<��|;�j2���(W��O��� Pw�F�O_��iv���!���{���R�����` ��t(����^����D#�GJWŢ�����2\ �% � �/��#`~D�4 �T P 	�sQ��@Mπ8�=��:�@<�WM��)k����u~6�Jܽ��4qPU!{�Qؕø7����H7�GJ�]	�#�!�M/"F��F� n� ?�N!`����`������`�[D�:��G���a�ۧ%�X,Ma���o��N���`ǚ��|�KRG�h�h済�?-�^'�y&����J
B�H3.=N��r�-�PfB�Qj�
��U�����gO�VO� Kd��� ���CO	)�F\��Q�1���W�C�����w��J�w��r�O.q�����c��-��)o��.���0�tx_v����J�h�����R�>g7���Sϖ0/����HR���Ҿ���/������zV�����@C������G�|�G�R$I}-��!=t��f�Lt��J�s�^&
���"ъ՚]�� H|i��{ �a��VX���磮�#�CbC������;Ա�JW�c�Cњ��{uӺ]�T�����z�MT���ф{���k�l�aA�����$2�1�;>f3
���w@���+l�V4C��tU�5��`�� �<0 Ii �'G<r2�(�i�� �;��+����ь���W��v��z_������_�������'A�X? ���y��%��^�A	y��� �����������S�g/���f��n�z�N Ȼ��x�bŷM$�`�߇������Dv�^�ޫT�Cm���|{��!8�x�~�&j��Q%�#^��_�7Os���U���n`�����@ӗ��@G���Q=�?�U�Vhr��q"I��53a*�Xɷ��2����Q�[5=���$�|-l�U嬜f��u��b�;Eȗ��
�Ǖ�����s���o�~&75���B
5OD�����kݭ���;�N�y�i�6'
`j�Q��z+�I�V�v~dނ4J��8��z	����@VZ�,�o¤���� �Ԧ���j�JeR[�H��6��Hc>gyk�1�=Ẅi�ڕTѐ��??rJ2��9}��m��`tVS��gX$�� P/�����uC� 6�C��$Ft���"R��x��"���Ԗ��b6
�I �8��+jĽ��åO����*E�s��Yq:~= �a
��aCJ��6~;�[qK���~���|CJ��/K����+o��'����z\J�W�3�4�� �W0��	J/�0x�z`<dT�`���<l���' �Q�-��a��\��i�W��~>��-.�$�M��<;H	��[�� Y!X��^���bA ��A��*al�+��<�=�du��������m<#��3>ݾT?�튓�ųV< X{�i>ݰ�`��d�g>_�8]���K6�Z�b��QZ�j���2oM�6��hN۫���H�K��o����E� ��8-�  ���` L��C��zb� &���o`  v��L��>7OOON�>'���+V�
�Pg�x   �I�ǋ�  � "�,HB���6|� _4QT �z9֑�a$�𳕖Ʊ���#��v�F[��H?���
j����*a�{cu�}ٌ�CY����6K��08�sk���/�j:��r'�gFx��M<L�x�,��ac)�-)5�x5Br�J+
��ك��Gx;h�z����tX���r����0q\%�ӟ�#u�w�u�4�Ƈ։S���QE$�cU9���8F3�T��6�����o�G_GN�I����>��#91i/�6p�)]��gV~�"�yi���gg���˵�&Ѥ���"Қ�:��������C����6������xb*)����e��8FnY�����b��d��J��=�̑��#���qyV�2$����X/PӗI�8�p�e�b8���.m�%2%� �<<Y���|	����Zf�0��D�Ku�{���0�"�^+ 7xq�?PEK��Xv�B�5�"�+%�2�9<U���8ܘ��=|3������0	ix�[��� �l��%��� F|�3%*S����$ꍥ�/�:�ݬZ�oS�-c��{5͆��m5���4�L�O��*�GP���|�R�զ��߱0��}�v֟���7�|���l���"���k�C�I��m����{G���������C4oi}&��#{$������Z�DlZ������`���I��Q�4jץ}��Z9�;��-k.%����R�U���cw�F�sQ	,3���2�/�![�n��l~���4C{�R���L�6Ȥth�Vu��U��2����_z�%Y1��~6�������_��WK���
a�L�,_&�g��F!�V<o������K��T�C��<�� xV���U��Q$�� ����4驉e>�z������i]7�w�e�m55}W��F� I��s24� �ʞ y�%�{��Q�0��4���\`�Q����WM�:~"�'���i�7���nU%����jJ
�l����<���t�xD�$������>�)-3�+�\D_��L#p{�&30�t�vw��8����"��J�,ZRpbT���L��0X���y�L���o[�#k������8H
��9��+=2� ��� P�$��j�|���}=8�����QBC���� 
�^���A���psG{���{�G8L���g�#�2h$r��=ڦ����6� �
����5�)֛� "$�8< ����I��\gN4̦�w���?�q�u��
|}���v�U5�f��G��3*K��. 0
GT��X�!�p{r���"�;-�:�I��ݘ��A��s�K�%��;���?G�ˉbc{���:�/
�㼐�'���(����S���&��q�/ ���&�����(���Q������b�p��>	F4b������������;0h�P'?��Y��ު�"
i$�;3޺Lp �:��ǖkV����}�&�� J4/eqK���`���o�(�7��'��%��"�@*��~
���� ��� X=1u�s|��˼Hؼ�L��'�.'P�쮲�����n�%�Ƅ��1@ �2	�1=K�B^�3���ү�k�~�b�����[�|�@@?ͥ��UHם���D��:��jxb	��l�1�"B�]���G}_�K�x�ĉ$���%�u:�;8�>�!xD���~�$�
�4�����<���3˕���0��J�m�"Cv���O����Uc����կ�m���Y�!�|`��R�S�R���>�K�?�Y��~�$UT��<?^�j\�����|k_��`��4���uk�7��Mg����vk�Ih\��F����Js�HT�n��a�/V�J�;�kT�/״��K�A�
��s:}/������^���5��0����wd��6,%�>o���r�@*@-��y0W��ɇ Sl2���V���m	�  ��`9���� �C�� s\��8o"�RhA���T� Oˁd�$�<G`�`�0���#v7�Www?�=�+�Γkø�����rպ|;�6�V��o+3tɷO��$`�v�ũ.G�"fQ�eFsŷ��p�8t�����F���8s����,�N�t� I��;Le  $�:+S� ����č�k  L�:^�\� �B��q}��O�{�o���.65}�p���ӿ_U�[� �r~��]>�Ă���ݺLr{��q������1�����L���� pN�֟�j ��4���a�A��;����� �`2����* >Mg�:~���g
��u�
B����4�O;���\!3���#B�� `����
��<�y!.X���Si� p�	a�&<��[�D1��L�aJ�!e�X�'o�2���Lq4 ��
��| I{{��m;U�:�c���QI?��ۂ�#��{�_� q�*�� nn�Ƈ� S[X�@` 
�W&�!� 4�����@  Z�h|��tt��!M�amI$��>DI���$L�3�!�W��c,o[Ŷ����e?_�2�p�>����mn�j-��(mC�>��O�A��;��������N������;�>���q%�7Ž��6x4 ��'�|I鹲R9H���#�*A���L�@j��[�U���^#j��j���5�c�
bt�"������i���$l^��W��C����s�Nݤ�N��n���!�Ӭ��;P넋i7���"���p٢q�a�86���6���G����(���UZJ..�T�����p(5����O��C�}W�S��"�/i���:�?�"����w��Y{닞[�˻xuO�4m5�îQ�O���y~Â����ъ�p��IϸE��>�.P�������C��;�����9?��r����t�� �O��F��p���i<ڟ�0ʭ�?��:k�W�)���l}���TպT��wZ�Q5Y�ڶ�:�喟���FD�o����f�&1�V֮W�$
��W�cK�cO��\�u
U�!��a��Ө�ܹS@*`a�P�(z�'��~��W��L�3����h.�
��x%!��  +:-���T͕ �^�0ɚv��LoK�IF�W��(M���`Y��*��FH���XXT�Rskc�ܺ����z5 =��3F,a9�i�;J�q�@	���z\�|#���QJ�Eb�R%B�; MÇf"�R�œ�]Z&r�f�,ƾ�}k������T��?���_
��Z_�r��_�D}$�.�k�D+�����/��4�[�m��/��^��]�).ܬ����|O��N�>"#>g���""�b�|�{��G�Hy���";\ĸ�V�+��_�0��V`��[Y���&z�/�"�+� ��}�ֿ��W��߯��_�|O��?�X�b�1��8��W�2O���1��6�
�H2�_!��>*_��^y(��I��a^�=�y}y�xF7�;Ӟ񖁝�{���)
r`�P(�z��r� @ ��;J���	i�JV�EB�:��� ������%4P�|�Cn	���������Q��$��q��N�N&�nQ��ۯG��t�n�pↆ8�_��ZIe��/���G	Y�=�]�F�j���C|l�������4��@���LP4 ��=4�`� �
c&Sf20@ A0<�J��� @�0A�>����Q�'��|�XG��z�
3�D���EcI �A�=G�g�:|��l�w���kB�aeޠ
�RR�v�1( ����Dh���b��-Yn�H\�����T�k�#ybl����y��]bԻ�o��AMv�7�ȑ��>�8�c�+)��3�+1<�kK&H���*eSX��Y}?�]/	J��Ҟz*�{V�eØGO��(#�H#�{� �6�o﮼�Mi-a���zr_���	=��#v�w$�������U�����o�Kᕇ�4�J�B��͝xEA������<����� �+�����"'��JP"������[K��G�p�|����û���S�O�@S�%��S�iJ��_O��<�&��!oY3:v�M>r���Ϳ^�W���}��p�4T���p�1{����.!�����y����8Rd��i��낀�v��?�Qx蚧|#�8��Ú__�3����!��~��C�n���&�o���AwV�����8���b�>UT^T\�/�&��p����?�8^Y��//�1qLS����@�6w	J̏ �#c�����VlV���P�a�&�AInҙC�y@ �@ �����M��	�4  x<  4<*��n?\h�  L82� '������ߕ1m�j�i��&�-�3��[�鲊!#S7��|��{zlփ�|f3�x�B�8�H�Rc$��S��\ �}�Li�ܮVw5�M���Jڧ�m��`�A��L�` [�k�0� �C���B��a8��9%T��k�Υ�c��	Q�;i75���N ��y�&�
���駒08�V�N a,�fb���$��V�,�i�§��ׇ0�
ߥEA[���tX
j�R�|0 5��A��;�)��Q^vfˀ���*{0���B#|�IxtT
�Д}����7�$R�ADwβe��SSf/i�8�|1�4�2��R~]�����C9�)*e����ub,8��!
����^"���O�cs�=��C��O�D�O�C]���]��|O����%�>'�Aɩ�ľ'�`*���͏�M�^|3$���D��Z�6~� �`���@���A��1�b
�j��l'a�z�Bз�&6X����8
�n�� 4��������|�馍<;�9��� zi�"����@ȕ��ӳjP���o�˿�PFiͭ�E�����ժ��:��O�Ӈ��	��I?�p6�7��?o��ӷê
���	��^�Ҁ @�x
�j[�B�Ԇ� ��d���΀�/`&0�.^dU�nY[���� �{=��@�C�ؖ�TZ}�?����$�
�J�uS�]/�7�i_3�gw'T�?��������K���g�A�k��_�����f���_�����|O��>'į��������7���|#
�gδ���R<�~���+.u]}������G��V�p�1���x�"�|����������q��}(�.��&�9/H���!&���9b)�������4Jc8��6� ��L�<%1{�|@ڳI�H�L,�����&�Vi0�	����0�"U��۸�B�c��M��B6���id���e�Z���O�~Vy��1n�e���ig�4��۹��\7�z��7�,��p3�YQN{�u�_�����ߥ�Z_�m�t����m'�ۄ�����?Z� �us��㄄�; �2�	��,S,����$�`��c�W[���Z<�b&X���c�F"e�!�.^��*��_���������@(c�7K��{Zno�îs��⻯� QG}����O��p*N��v���a"�O�!�7�O��@u������~"7�V)��#�
��7s6GQ�4��:�߇�أO�����E�u5�
c���ӡ��f�H�`6�h�G8F6-�!22	hI/T�]�XQ�w�~��"6��
���fc:��w0���?��mϪ��r'cX#XQ^���s���ye���P oI*�D(a@��a
p���/���\��K"Fե��G�L<QJr9�x�B �m�FK��"��ҦV~�:D q� ��M���
� �Fץi�!�C��Q�&nW�o�6��ˢ�p��������t�:�Z|r�m�X�@Z2
!��U� [j��<6�U��[6g֚�
5iwYE{)�aLP H�r�-��@����� ������� &�@>���1*����aTcd���I�q�x�8��s�\o��� o,%������ ��=��
C�7R��#�ꥦteM��pT+ק���ݬ9����k�������!�����k���
�>�����zv� @?��}��(��F�P��-���0�4�w��ү�/vC�:�����k�{eû�ԉ���~Ы>ØPPs��ɷ����*���a� � M:i��U (�� @*�`uv>  \ 
c��Xc:C�b�{:���4P�SX����\Y��Ql[��ɧ��L����[�ȅ�c��3a�bD6?���޷�	�`��
�� �Gi`8�j�֚͌1�`$B#v�_�4�H�W�F��]��N���%o�"}'m(�L�'i�z`�L�U/$m'���� )@q�@ ���:��b哂v��Xw�o��/n��.��������s������K��29]�%zi�O�iO�ʒ��]������w�k�x;����n���d�?�P��G���Q%�k1��3�
="�٧a������@(��yZRf*��$D]߭�4��uo�=(��ӧ�Pׯ� �����8�N
+�7��Ӥ�m����צ�P��~�N�p�c^�?���-���$�u�b�[L�T:�����M�m�(o�-�E���O�w�?��ѿ���Jo��)
��)���a�"����x�;۟���T���H&T��H0U�������z[i��0T�^(�g׏��L;�=��lS�[�Z}��F��N���J'�{;G��z���5HSq$�mt�B��ܡ���/L9���ܴ���r!�I���_�gh\ 0��k�V"��a0�8;�%%D& O5�h��U�q��I;֟�h4��IQ�(��l�B�B���y�L��}=&���B�/`�P�ʔ��s��r�T
.hE��^�y|p�L�ܪ�����hGF$�K���ܺ��*y2:��2$�d�A8�ds��%��
Y���C�>6v��W�B�%~�	�3��g�<�IMO�M����c`11�,]�->�p %�4X˹���KdB���G h`����� �����{}f�m
�5C����Fn�v�=@��P�.�M��Y�Tj����������8'+���7�ȲU�.֘fC�  ��`���CV�t��t�@Ih;: -p �i������ �Xtn �´�,7���K`Ɠ�8D� �Q̖ �a'�R��������G���� m�! 	C((�.`�.�ܰ,����1`9 �� �3!���-��� tP �#��DG� @ ���KeA���	y0�����!�p�}_�DDc��nL9/����m���Z��j|5��*�kɒ�QQ���&�:���H�Nc^!.k���߽|7R��t��	<D^kˋ�p9	9+�
�,�=�DJS|8
��J)�@��d ��(����ֻ.���|�~�b�#e[����^ �ߕV"��z�GD�Z�Ն���)�=�Q���:��y�����"��+�:�3�_�`��wN�uD!����!rM-6�o�����ڞ���X��Ȼ����/ܘ y�ɮA  ���Q��i��  �� ���  ��a�yd��!����&X�D&X�"9	���F!I�,w�������$ �6(�\�2�m�b�{� �m���G����tŚ�n��&��ct��N����#q�R��A�Pb9��(����3	�çxG�?Y�}��.B$.�k�@v��U��1�q�K��؅����޾�m:�2���	�����z����������`��Pw/���l��6>�h��o��H��@�n�:��/���c���
@���]t��Î	��?�n0Co�����{b�m���@��*�Ùu![}��y�F�v�4���[�$���C����[6À����B����qB���Om���L���nP[ԛ���1�,�]��&\3K�iۧoѽ�ٗ�����n�ۧ��6ͼ#���+Fo��ݥҺ��q2
�M���-mø#���oJo���S�ׯ�z��p��G_����O�8K<7wv<���_LU�G�����o�\�v
�*���!�*EM�k�`pﾘ�m&����N����������C�����Ӯ/,p$�_ҭcT�XD؛ɐ��
�_|!��\���P}Z_�Tp����dޞ�w���om�v�xECHFru����o������J*sxw/o������@ ڥk�!PM�gO�C���1�~�(ED���M�t��d-P��ČR���pO�E�z�+7���5n���?F��Ø5������T���!�˯����wn�}o������:�����P)��I8EO�Ǥ�|;�U���!t��T2	�vf�|:����t��G	{Y�v�R�R:j\Z�8��3���T��}��"�����mĞSKF�6>�Ma�޵�]+���Ht�ϵ��q��������[t�c�K��]ڌ����7�����3�'D�!@���	��v�|nd�/UQu�:�e���@v���"�N`����� J(1{G��!��tQwۚ���H�A0�%�I�b��7�����3!��Î_�<%n����㣠z$ �@��?E3o�  6�-֜2��Ǌ7�!q~TG�
ZYu�[t�4w�2QW���B���i�Æ�?|w1�R��پ6�m	�d��h�u��˯jC6n?���\
��Ǘo�gԳ�1'6�T���1Փ1�J�z����A�*��ZP�JWV���=s���*(h��:�˓j���mtK�������Yb�gr"I�8H���$jr��f_!�i�Y6
 �-_kv�Ŕ]L��vH�׏����i%�̥�T��b�$ �D�U/: �OL�	 �O��.��(4g�Y��}���	��x�[r!�jp� ���0H&��[\��<x�tk�x�bI�Ha�/:A
!줸�[أ�
�=���3�*g=���� �0"���x, g @b-:�4{�XZ�����  `dC�WcWp��aC��ט�@D���bh
��X ��B��+�������q�:>iHVN�00f�� �z_�W�WRK��1��ht�@2�.��|����X <���-���{[��Feͦ���W�r��WH1�=�W�%]!.���ǙVH�- �s��o$�v��u"�_?\�xG�'U�I�R�ݘ-x0��Yأ�߀������ K�:N�� �����\���
�w���iS��\<¯m��j�����O�S#����D���a�t����c��O��<�u��8�g���;��p m/_6.�2������`��v�~? ��?�����C����M3x��_dZ����K�6�_.� @
u��馟(L4F����:N��$�����UOoJ�??��������
���7��hgg��P�y � ����	��k&������	��
w{���b��T1,�Y�j&f��j�� 2� 9@ �� `�L�8h�r��t\`�,���8"�0A�^�?����1�( �G	F_7v_o�hꧯ=���8�LA��Z�"�2w�F���+d����n���g��W����X��8ߠCు)�,������l��%������&X>���-�7�0Dmj�o^j2��+�]L�����w�KF�$�d�qÊc�����j�|
�s#��:�m�g�����M|6��Cn?������x�� A�}���'�"U�O ;��l񨶴�P1&:�O�0Nޗ`��QG�_�t;V��dlQ�Pa@RqL>A@��8 8 ��*"% *J�+�[V�5�\VP�PJ�m>_�]������������NQn�|_������)�Z.l]��X�(M�%ݸw �����K�y�6�-X���AH��!���4Z�����\	&�����ʹ[���2o�h����>�DV��͵
"���S��:�0���O������6���êߺ���)�We��ie�˼9���َ��ݿ���v�{Xg!m?���8Ê��_���I�M�Xs#zi����'��8�#��>��8 �������J���O(d}��<�����x򴩦��Y�����#e�5�.cz����vE���:^��6������R05�����p�F�������c��=?�m�ܼ^'�k v}1/u��������=1'm7�1����;`p�^�~��S4�Oi.��28�L)1c��k�o�L�C�mEɘb6�H�#����Z�I��~�O)�Z��l��l�h܉ 7
�?:6  ]H)��hze�Od|�&�`���D�Y�lF��[[�^\w�PY��ϸ�8�1�  �@ �:T:S(�aE����l`
@b/?��܃J��d<h���Dj�����Zf��RNj;� ��h�Y0���~�b*�` @'o��B"i���0��l`��BԺ��ie�kM�#�|�Κ_�q
�lWK��T1��_��-���KA��$�p�����Pn�Np�� ۮ��lFB:�6�-[��oj�	� 8U�� � ���<�)�� �N2m�Vn�����;�2Px�
�̔ ý1� ý0����3^1�r`�`   �\a�@3��w���<�#�$�Y8��oZk-� �v��X�~����a*�X��oϑ�6j���ê؇�_��l����� ��=zx.�����,�V�b��@�	`   A�0@�N� 8 .�\����x�/  �
{m`���L���ā
с�6��D��Ù���� 3ЊQ̜(d�CuP
 E9Q� ����A�Pw�cN¼�l.q�CX�
��� @�<L�� 6��� 0J�\��
&��	ϭD�'�Z��11�A��U�#]��)����[����#�L�'� �9ךĻmb �s<�����,^&7������Ly��\��SƐ(
P�H�� P����(]�w��A�?����M�4�&|l�d������~�ޜ��n��'�|� ���fCd � ?�3 `. ��*8�+Yi�W �.+|�J 6�5x��V{��8S��zjH�^+ixq@PH�'���:��
�iY�f4@2>���
,�� ��{0PK�C+��G1)�!��d�X'�#+��#y��V�)߻���L��P��
�C�E��<s�o�ѻҩ�)i/�3�����zC's���m8�0+Ð����F ���
�K``�a��kb�>� �)�_Q�
#b
{:�Vω=��Q�  �  =��+j �̡($��X �w�l@� V�B�& T
A���%Gb'�wD$�P.P�������h�;�3��`�lUh� ����1	�<x����3�����ơ�L�:�`PH�`UX�x!�n�5�
+��=u����4!�.C��`�b��	Zj0���z�9`fp: d�  E� En@�3�2����` m�z�p��J?��"cfd�:8:ϕ�ZC���u-�Fન�`�&��5\p��[}c`�z @���BU�i�p
��D?�N��S�j�����kL7�b��&����y�X���J��0u�c@b����	� �1��,|���  �vπZJq\���Br�0
�5JB�Y�Zz�90�Ǿ�j(0YF��d���)��߆d���@�@�
ͬG<��^Ni� p�b�)C��es����D�P �0�7P�=,��U�@P�Z�� � �1��d3.8RJ��y �� q�;=x�h.� f7��J�و������� �G�0 � @�@RzU��(9P� `�
 ��v�����T |�^�f)g�_�"� iQ� /��N	A��/<7��H``���ư �Nj���'5�"6�FX�@ϐ`p6sDny< +` @?_�;�}5y��,��B ㊄цL9k��Ñ G�
�
(�=Cd3����4
�Ո� �y����J�-��PB�o� b�!��ʓ�p &H�	�[ 
��DB���f@B�����_�m�o �M�-����	����qPu�F
�����Ԛ`�P���N(�A�`0Du�A=�X�C��� 
��[P`�WU����a\�ΘĲ��� ��d4`	Zh8/���`���;@ W�w��26Z�Ԃ2���`k
�����ul#�q)��n�W�?��8��g��D 		��@)%р/��L<�V	V� @{M ���	�T�  �$8 �()� �(	��r��g��ӗ��W�! ��L<���)
 � 9��d3J��p #��fa�&�.e��h8�
�9'��O��N�#�F�g-:�Q��aVI��w}KNB�<>MB�pA�?J |�e0��*�?��0g���2T�R�����P0@��]���� bXN?����O�x�	�*�|XFD�;(�
O�d
�p C��s,��V��(a�u$�n`�Ȕ�8E  2�C`�4@   �f	�i��b���tNs�ݗ��7ox��5�${�^'���,DQ�p��ܬ� �U J�3vx ��A�½�qfw���?��i@�/�IqAE��̇P�@G����u��J vo}< d�C����� ��hC� �#�. o� �� T�  ��C� � p��N1�k>ve�:*q���� v��"�␽�~���
�ˀ���Y)�jn �<���@�Z��a���.�,]�6 D�����������)�б� ր)�8:&���3A�AL���DV�,T` MH  
��2Q,V��ؙ 14�, T+�� @	� ��� �����p �
R	L���z�!����ـ
�U�L Z� ��P��� ���S
9=� )�������T�M��Z�R�` qT,ʐ`
Ԕ|�7�
v.@0�@��ʓf�Lxx-BCRW�b���O�bY�Ōu���49`o�F�P�` �	{8����Saz��Ma�¾��� j5 P.��^rP�2 ������  -� Ek1�)��G�&l��֒�! �Vk�O�;�F�@���E�P0�0����B�&�s�V@�@
��ʯ  �.i�1�*�*����xR�@\ig)I�>@�s�!�]����1_���@x� �$�#�G?8=x`Z{�  9dPb�XJ�
��<�a璅G���)�� �����$n�'�I��a b�}>E g�K�%���*�1�X@�Ř��s¥���(T1�h9��Ƽp�q1���<	�f�<[.\��<�.X@��&g��l�T=��lC�XX��dzQk[��St�x�a����\�c�ӣ��6<<�e��q� �AU ��: 	��$ 2�j�m��P�x����0����D��H�%�"�?��LlX�-��#�ൗ�G`��߈��q��nX�Y�b�@t����5?�1- �Oq��O,��?�D�1�CSI$�I$���1�A3?�զ���D
cb^:��t���V����\�Sc *
�����w
mσ��
��l�A���b� ��:� ���� c�f��p�.�'d�� � `�(w -�1��{�O�ĩ��j"�x| 	P0:�BbXd���}|m�Q��xE�R���=�+ ]���*�J�H:�pP������8��~� �H(u����b�r�h(��D6�
É V�\���
���]����������� yv��KC�Mo�t��	@4e=?�6��M�@��ȡ����t5|�پ!�a�P
AI8BT�,�����l-�!`�9��[Ȱ-9�M�M����q ao�o�CX�2�cq�~ 
���   	�|�IQ  @ &2d  5N������;1�`�{t�Ӵ�sx0#n�
� q
(� ��8@��daǶ��   �q4 � )�$vc�q�[G�F���� EUø' C �O��� ����V�
������yAH�]
p�"��W6c� \���Ǆ 'H������3 M��D6Q�����)_��ˑD���`�g�c���4	S�ڐb1?hБ�������(�T晙�l�H	5�W�����*��K��H�z�
9 p����J I
 L�rO<]���[a����T�� �D1���oL�	���(c$�L8�-�)��4�Jܜ���&���  (u�ḱ����Q�7Г�1B ��G `�_8�yc �:��2�b:���=De;�0X*�U�<E[47��^�Zo�k����蟃 ���oJ@ @)O[�1��|��"�@ 0%� ��[C�P�.Zc:d3��H�"p����~�1=M����! �Xw��W��8TP����~
+���a�\�A@������������by�o� Hܦs�`�=�ـ��猀��6���� ]�(�,֏���os�2
� ?�y�9܃)����#�O��icR;�n�=R�<	d���։`��U�20���
8>g� .:���"@�-m�=o
�E��t�h/U���0��;�~$l�_����l=�@����}ӈ ELPB>1�  �7��� !���ѵN���
3i 
�XGAS5��y�` C[.C���ț�+ @�e��{�,O��h6)0qB� u�
��!���@:Aӷjqk%���	]�x*ܬ����C�=͕�#�x lP�m�$ l�zy�
3u`=����{{ !�83�ZL��'}�!HŇHʁ�HF���Ir\E(Qq������)5��B;0)�4 8A
|H 4
S��W%�I$���	�@5@���� c0&��s58���r΋����|�L�F&��րҰ�A�6iB`X�P�����I��JX��=j�ӏ+�'��p��h-�S('b2�Q����6A�?g `VYA(?�@a��l�Kh;�H �X�}K���q5]`�r���m�x��F�/������ }?��@��o��&�����nz}���� ��Z����[�U1���h)�)��2P낶S�N1�<��)e�׈7��"���P�0M�����hVo�nG�yu�b�c�O�� �����H�6�Y"��
�ƄS
p	�Jʈ�
� �u��`A��ǒRA�Ħ
;�25�0y��h�Y �d�0vax����k���J����9��i"�
\!��&(��<�Xm@Ԑ6@j|�E��5�żW��W��.�5��T��~R#P�cap�0c�P�������t ,G�)�$�1�hxS0X���*�e����<U����-��u��:�L �{�u����q�CyU�:.h�G�L��,�[NV��@e(X��dBg��a"tF�l�qN�UJ��X˧;����*�������x�Q�Z��Ǯk��W����� jH�-a�J�y���Pbn��Ԗ�{�x�c=�LR�+��9�' ��ǣ_J"�>��l;�.����$oɣ����E.
 ����y)XG�V��q}��#B��A'v2l(?
� ��@�F�JkL
bí����>ik���_��5?	���YX`L�����q4S�>��Gč��Q����o��a2$i���@� �F�7�>� p/��  ɀ��EU����r@���(B#���HAD}f4`D�
>��ƣǘ��C�F�[	��+�xDc9����PU���ҳ�1 	d}Q J^V��ױ�Q4o��~�Y���9�gB��x��3�&0�N����@$�Pيa�}�7x͊1����з��O����-P�.�H�2�m^K����� j�)� �m�Z�e��J� d/%!��p��!T�]����:l�f
z��Q ��u�8�?6�#�*���5�,VÀ�M���b�ů+f�9@;����<�1@�s�Ǖ_�}��������⹮���ao�{-�OHi�#`��ӂQ��]#�m�A�g� � P|�F8�F�,^���.�   �=V��+"�jx  �5�}�-1R[s�f���7_�� b�gA�\�����ll,n`򁗸ƥ�O�S>MÉ�?s X.[�[lX!��f`�Ī�ŷ7��&@�H�CYG���3L�:¾�L���4 @�P)Z�7���'K� a����@�A�R�� M�{�8��
@�D0r��@�������KF ��Y%1>��H_\K]��(�| �)��-}_
Q�տJ5¿p���Fv�����Ă�w�#s��de�����3`9o n�$��F��'�	�|8k�|.��h�4�9�
c��@TC&�aP`��
] �?F�A�a�F��8��OHH3�d.��S\���S�3a���M�i�B1=�2�1F���y�dJ�!�>	�H�4�g�1(V��x�&ߣ]�H������g��?y�:��l 3�fN�` 
J���;)�7�-���>���],���D���"��r����2�;�bg�N��C�<T�Fd��X}�禞+� ҡ���� �����eOZK$ >)Ŏ)��a���`E�LjU���:؊m�W��D������߾t\>�^�0���`D"� 	�M�- ��yy�5��#@�d
���?��UI<^�K���eo�!��b�8��[4Z��X6ts0�G�Q���2a�6�T u�*���A�c�ЪN� 0|CN� |��S
���)��P86(cxSH��!�G�x6��f,����%�`�?q�p(�ג7�1Wč� ��k@Ԙ��������AqI!U�D�B qr�r��0lKM��o
f簻g��
�=?��R�#�9���|�� J���E�z,��O�W���V�7 ʁ%G@�����5 G{Л�a���"��てgn�������@����:5דe������ceˇ��������q�@���C��}�U���
�K��ρyd�x;��#a�����#���M�
@�6Ҏ\��AE���l���Р�`0QURs�#�e"n�8)S�x�/�@
�liWH�ZC��ɽ v�h���Fб�LJ�x���;!�\t�ۈ`Q�
~�=���KÊ3�ݻ���暻@���`:PK��a� �:Q�)�a����K�Fm���f� gKb#�{H���Ġ���" P ��BF����4��(�` 
AШ�< ,pE��B�.�e*�ª�D�@A
�WՐ����Tfrk1�0=���̢�	h,L*u-|K�UŰ- &�L��� ��Q'I�`	PZ���\����G
��! pC/H�
H<\�'�+��Q2;�#aP_��?
JQ� `
4��_��@ۀ|�r~�zx������
�]
�ax�r�-�f�\	(� ���;	�0�X�B��G=0=�=iF���|�t��r��j(����N ���x@���%}t`�\Lo�L��l/y�$޴�،�Z ��*���g��S4�P��A�J�O����	�%	$
�^#C|�scP���|n|  ������0 *@ 	�� � *�B�)`@0�"Z�n߈�������}��x(@��Ũ�a`oK���c���i����{��i�*d�4���	t3P�K�/L�+6@�B �73�6,@ʬr�:>R��|F���ȟ���ۅ݁�� �2P��@ �Dg�A�m'�a&�Ǽ�( &�s�`(Ꙑ��  I�M�! ˇ��@��X  ބ 4#MD #b�����2���"|,A�f�r�(<4I��O 
 ǣ"Q��<�
٠�Q���������u��~��"���1��juƋ�ͬ��;�X��$c����r�o����+;;(PX�>�i-��w�W��{BD�A^|R��̀����� �����t��� *�+�����k<5�94��H_1�@;�����"��X�F��y�Nm9-��e
)c��Pn%� `��R�8� �/�@���;@� �O�*�m����[7��bkPX�0޻����d. H�qp���@4.0�t���؛S�DM,�fJ�l90l��X;����� m�@K
�ivgH�l�[�E�Y1��C�+&�zKP��
+ y�f���M�M��OC3b�CEpg;���'�q�B�6��-:�Ȇm=���%k����
�r%
�a,`>{�N�mr5R��P�`��p ��>`  ��� ���(�[V�o� d�ˣ� A  @���Ѕ.,`���b����������v��&��q�c�̭t��j]Q�#w��2V-��.�xU�d0���
�`�,=03�r<F��ы+��?֞�#b�Qh�ىp����M��q:  �  ;`?!�Hoߒ�L@��XO3��~�2�B{�H���30�O
�,lAh �
��5j`�X�+B�O�C�d����� H��j�� #���2aP��00fp� +�xt 	و�)���@ �z�ԃwC���g��
1�` �&������G�X5 �ELO jL'     �*`�   㥆�(u`x���������OAl���
#b�} 6� ��]��>�[U�� N`K�#@ ;@�[������SLg[���D
  � *���2� R i��  �  壠S�Np0
to��ƶ/Ԗ_�u�v�RM�,��A��z=�D���#c�W����k,Cl��L)̈<�Z�!�)�Ђ��3�+M1y���چ�����v��&�	��4��I�0�'�k���UN���	l5�,;�T�rc�:cI�����g��(g1�G�Z��H�8x�%�k|aXL�
��$�SfH�W.��`d;7C��Jwi��B��nl�:7ńj�df�a�	|{�^[]�j�~�b#c>^e�7@<�z���"�Y(�=��8
��Z0g��$9.9��hA�Ї��A+NCHHm���P!6�yq%0����e�K��[
�1���m:1�X�#��v�J�����<	�) ٜ
:\`1xU���\Jh��� n�ac�����\!>���xa��� c$�Bz)C��� �&HɏS �S��@ @��K	�,~��8 �e�0��̨��f6m���\�����I���$B6M�@0��0 .���z����CR~�P
�`��a�ˍE��1�݀K��S����,�� �X*F <�ÜR��L��`}��Y	�k%���xa�b�3��/���,�^g��3)p hh��MTW����5�3��Ӏax�U�U3���P��qt]���PpKǓ��8�@Ӵ�UbccK g�0a�`
A�M�5�f#c���t;A�
�����s	u5/3  ��T2/�J��8SC�xj!�������R�Dl�8 ᬰ9�t౫��D��Z2�b�;�?�f��nܺ�qU�6��t�+�p;��� o�*ZK)��'��zh = �k �̩�  }�9ᦣL*='�ђقD	����')�"$�XQ��eqF�1%"�lMK I�@9�x#u( ?8��v#�r��ߒ� =@
�pa����Sv�M����g�T�#�pBw�4;T[(\�b���������O ,����GS
����p�nA��2N?j#�>������L����UV�c�ʲ�]qFҀ��dQ�L�� 셩�@:�\/%��T`ǰ
S�8��dH�O"|$pth(��U��dY���� l������US�x�%�{ �1[�(:s����8X[0`;���#���&��
(��h]�iC����5�F <A�#��P;��?5m6]���Dl��:J	�[, Jdd�U��-�U���~� � AGY	���Gk8�MPC�0$
�ЯZh�;^���i< 3�8��@Uu�
X8"L� x ɀ��0x��&,ɖ�&Z"���!~�t��;'��/�_ �j���B�Ц^ ¼�Å/�S�E8P�E��ېՔ	)��Q�G#D$K��A��h��D"6����n)�nܤ1�2�>�`�+�O_�ژ�$roM6v�� �m��ڗU�C�l��u��8��#W���:��7�����?;�2�*B�"~M��Mx�ΡA���l�u'�cqh�;p�d�H6�{	�6ۼo`��#tC{�6�p��;0���:q.���L��
  1�Pc�A׮�0�=���}��+ �1'�J9��7�6&B@x�s�@K<=� �P4A�/��g��F�$
o��P/œ���~i�<\�D�H���:����[Q\ge84N ���q!��?P��6��K�3��oX#��4�ɝz��Y�Y1 �cp����x F�Q0�!`��pP݄wOɩ�#g�j�H?~\"�뇘�I��0Tp3(
Q�+2\ղ�/ e`��K�(���s�U�j��0J>� ?0c!ޛe�G	���R�
�XL�v�k2����5��C����T���0C���-& <��P
*�y�Ra��C��r��7\g 
�i�SxN�
�LD#I��>J!ib�A`���hC�zE�މK 4����FDt�vQ�v�S��s��P�
5�9�?{�����̜~��o `����kl�J��;��B�0������.)�
�/�l���# ��:�
���A�^*��~6���:A�Ũ>|0��AX�`�����4�����@T�UoTF �yj�9����#�@���D >aPf\  �<΄���t3���8�\耄XV��1�CA�}!
��v|$H��:<�?���
!xCD����D
���
:� d�� ��ʛ	�
�L�8�hZ�nh.�X�+c��=3��`$��1��Kt�m�mG��J}p���ǐa��@�K& �iɀ&�M��NT� !�0Py#@���m�c�� l4���
��s�`��=�a@�1X�oNR6:\�!�"��h�Bh�h C&�  �d�	�H���`  /��L0h0|�#K	�
���6] �Ut��B+�ޅ�0;@�]NR�,��
�4��`	|a��8N���@���ǅ$`唘9k�y�i p��Zq��J���� m��s�6@�<NT �ƨ �F�a�B��D"�t:�H`�}�5l�O�G%5�O���v¾�=6>\б/�o�X� �殝��n�����iA�H�ō@��#q8��0 b��� �ӝ��t��g�(���h4L��
р�f��K���i|�w�@�7�"�!`�s~z:�2%���@�86

(P����Y���@-��]A-d+�tj�*(�/� ?��w)� dM�  �4�dV��-�$�!��ᑇq�X����,�큻���D���|�����, 1�`�i���HT ���b=i���}5�ި�Z���� �
e11�8ߺ^��@����Ͷ�S3� �s����g���L54jȩ�Mx��)�;��Iw�Pd�f�L  si��z�X`/l���!f��] I����
SH���4���c��PV^Y�>�NXL�1=��2x�� (��!T�!�Ծ��_Z�Ξ8�ǩǤ�Rb���쟺�:���������4f��}�G%��.���ux��� ��p ��x �@"A���{@?��%,P|�� � R d�n��� @P b��A�@�R�eʈ�]J&�z  t��XH쒅����E s��*��2���$�����y�8�6��
�" S��Jv<}t��L�
����7]ƀ� @�@V�o   � .� �� �B|  @y��   B�s��A����%t�O���4��`��~]�o��26� `� 
X�ຜL@#�}O�n��M�z�|��ھ�M�Q�tn�� �Ջ�
a�����]E�h�$�g���=u�O�i?�@���]?�#j�z
�j��p�\�ŝa pjD�z��Q� 
,3/�h���ߛ��2�J]��~��a�� �6��ݓ�t�[X`H�n���T��4��>�Q��+�ez��8M� ���M���4;�4�ʽ �-Ӧ���T�>�B�|:�k�MW�eu��K o�A��sN0 8qG@@Wg�� x:KXGE.�����w75��'�@'��SHi=x�?Y볶Z�F�Q8x:`��p�СQ1� kS�L�%OF6�&+�@-A��hSG��Ԥ� �.��X(j۸Ź_)��i���K��ne�Q�_�����Y|`n?��كbfE��01ᆔ
x	 tO�+���i�"6��PY'��]o��	��l�uC�р�EFB)bU�"��lB�U@F� �a�  5��t��� �go å�
M����[0+��� G ���T��ރ���b:g}B>�w�݆Q�B:S�ZCL�@0XO�����N����8�K-��"7/z���S�I�va�(�s#>�Ʊ��>#x?�h5�1�� �jGf"6r���E�@�% di> w��p|�nԄ�R���KTb ,��pފ�]�� ����   �Y����F������]C@mJ+pM�� V;�q�	!�w��h��n��_�T[98m����e]� 1v\OY� N���u��E\��,�zW[�G���T�ն�#0��bc� `�4L�cfД����v�_�����F�.���wI8	��'9�p��[*YxV��M�и	Ϥ۰VSQ�V�IjѲK��)@ ��"­B���R�� �`I
��Yaz�� )T��,�����
�S�6�	B���=>��=� Th�&�k8m����2��c}a����6�~F��kl�g���7}�ߪ���b�������\;�� 
�dP��5E%�@�V�>��F���q.����r�	��9�@H�e���w�-�X�6D ���q�6�
��@��g��@xm��3_G�_�� ������-G4�2&i#.:����,<�,F�4P:�X��Ƃ��pT��<��(}�ҋ�  (u:8��Fk=� �&�Ѥ�����?�L� Au��`3
SS?�03d^Ҁ @��rт���Mxe��!�TJ�[����Zje5�mm?uZ  [rx���%9�aTpcL ���y�LsC��f��Q�!�iI�ʧ3İ\ł��;C�T��
���̃dHv18��R�F
��?@�@�r���jc�#�AZ�ާ�:�S��oO=0������09���dڠ�p�T�D},���$������%7��ο�d#DX08�,��v�Əǘ=��@��;,���X����i�6H2��m*ˀ �JN` ������ Yk�F �1��p��d�]���F���
�"_��b 부G�}l�.)��9b��Y��c X!��	k�	(�XL�[)w�Ĵ _?"���A�-҃\@��m�3��a�V�'�����,	���ֿj�`RO=��XF'�����B}��J~��c�C�c���}�(c��v4F'���{��\�T�	��6���?��T�]c෰{Cz���i!P�&d"�]k]��Z�6s0� ����߂ �PU�o� �+����uZ�*q�b�p{}Hʶ�̮��y�n���-� ���ݦ�*�g�^��e�[qB ��H�1�F_�[�B�+��X$iZr� �z�р �	��p!&R�}%`��%��GF7�5@ @�( �~v�o �@ @D��3����%J�q�qvT,K��w=����Ɛ
�v��_���^�}��^5Ú��d�� #�Ψ���i1�:yP2��R��@h���Ż���@R����m���k��*��ܯ��%\�{���7m\ �%x0FF�Kh#I@8�Z)���Yb#g�84�*pny�rrXj3i���|�`��ڎvɥ�ȸ��/^~�pu��b �
IV�W�Q@����\P��!T9�G��h}���#��0�$qOjF!W*F&g���z��Nd$Q�h�,�Q
|�(�X���v��pIy^O�>0�}�����xb�4���ԼoS�xIz����(�Wqw�v�X,/��o��H	N	�4.AM��
�O�����m� ���8=g�����"Li%e�����!BZ���10l����e�<hn��I�R���k��l�H��q�8Zk�|�z%���^�����}��,n�����̀&��1A��h6ᱬy�s��{w�T.<��b����������G��w�$�.��(\U�<�Ψ�Dob��2� �儃��CCX ����xV@�E�k�S� ��ڔC�(�Mq?���a�YnݯO@j Wآ�T=��6+�w^깾�:+f���Z���K���%j7G�`�
����R���)�K� h ��E�B�,�a�*���)L�@g�N?�]lǆD�f��^�b#z2x�L<���r}��ōR� �x�߻&�~�0PŦ�4��Ҿ��  �ӄ��
���+]�<� �Oȅ���sq �
�2�7��@�� /����G`,����S8� p���"�P^m��w�����	<�*Xb܊�*�/��.���O��Ǥ	܊eB�&7Q�����8x+=������zm�lrk)��Q ��l�<����и@�i��u�<BQ�
 ���ʰ!�~1�O=�Dm�c��*9�ȯC� ���!����s��̵)�\�@RD\1�+����E :I��#QH '��6��0����!��%�M�|����%��>4�@�2:$�Q�  �1^q�'@ @Zs��d����*(�_ݸ��(; *� 	�D\	Ȅ "��z1�FHXj�!h� K�F�k^Ǹ6�|}�cDB��<!����s���qBc��Oۜ�o'6��j7��y�Q����KMzxs���i~p2L�����5za�[�� 
����t�@ @y�H�r� �ʎ�L�k%%]sU`tZ f6J��̀�:2�*F�c�[�F��1Ӆ�� �zE@( C�
�e�A�����: ��1/���'  lCgKr5N^ lb ����Mp$�@+ �0 ��륉�P����<S=u�t�X y+  ��0��`C�Z@� � 	� %�{6���@�"���R]���a�`�����4��d�Es��*�:�6�,���� mc�"s�d�v�Jb�֒�%b��IG}�i�R��&zL˪���/�8иy������Q �5PɥD! {�
F�61B G� Pu��\�ej�<@�\7;{q�~7��u1I�rf`e9��ذ�����Iv�����:�o�@�l�XZ
�O ��<��Hi�@V����@���~6�`6��ݚG��
��O<����m(iP6�/(����9[x��:��  ���l�6����G|l�|4���o������� @ /��Dtg6% TuP 	@�. ��1�h{ 	�L�-���k���R�:�m�C����� 
�I  ��'b��ׅ�s	�5м�/yhz��/|j���>���Ǝ�TXA�b��a$��W�� �$ar��-�}�
D��c�Uy~��D;��ʾI��d}����p/��O��t��F����1QV$˗�э�M-��>#��b6�����^�^�TvgV��G�N�i�q@�	�ϋb�����eٵ��.��@��骚���Z�8�c�����p�����-֠�<jA�+o�-lſ�A�" �aR����>�R�n�����3zY	��F	OM���Q� �]i@ C	r��:��X�N}h��׋����Y��ՀZR�Jݚ�a���`$��CF� �x'	kڥ�
a�n��x��'��h���Y��R�ڱ����ǧk@	LP
�>����aC`3�VC ap��0,�cq�������"R�a�$�8j�0IP
�KS ���hJK�=E�/;l�af*��'�N	�K�\O2
~������H���%����;wRT'id���7��TK
"����C܀�%����.P h�#�|��d-)������X ���|p �D��� �:I�("�ؽ6L#Û��<� �����4o �z֎�TqG���s&����� m����{ �v:"��vKdF������9��I�:'�d��A�q���
W�1�Z�Gh��&� �fh8�Ƞ�Pd���+l$-���L�<x��ld��  QA �02� ����T
(� #�$-Gy  F��*�7�ΐPyp<�����H]��Sp��O��A��|qq�&����
��J�=x5��N��OoԔ6 M� ��`b�A�@QF8U�> d`� �BA���ݟ�)#���b2f��7n�AO��[� w�*���?���I�_��K���H܃<� 1Y����౏��DEfb�@�^C�v @�|)�lM�ݠ���^�������_�Q0oe�# 9�jnU�	k1(z� 4��PV�c���������t.��GmVb2®�nN^��DF��.�CB���� �@�f~"`2ל	� /�-b  TD� ����[�� ���d0A�p�� w#��.���\i☷�Q�~�K��8���'�CC	�딋��`�ᅾX)���b���!��� �Q| �c��Ȃ�ʢX�7��*��1�䃄�*$.�*x`@
�SϤ<(����4��3��黀��D��ˉ@S#��W�`��`qJ^@  
�xU����7�*k0�/p`H�@���f����Q����@N6����6�eD� H�h`M�3�c����d`��*�@ F�P�D.�� �ô�H|*�ihZh�hiB�9C�
E��a����?z$Q�:�9��}()��!�V|@��;��	�X&ND�AÌC��i��#p�%`. `�)Ƶ�q��D3��f  *�C�rf�}� @C�=,�!Ĩj?;��"�ɪ��ճ0��_�+Q��;@ ar����	
���q�a�؇K����S��������2��n� 9� �K���N.Hޣ�

�/�灴Λ��厾n��� �RZ��og��@`��p��i��4�w44��*7I�-�e��X�4�/�y�8R/��52��T�5~D��%C��D$�l��7 aJ3�;��a���@�A�}0�#��?�Ե�����F������KZk�ח<�DC1I�Dp�����u�űl9�(ba����7�����O�M�\x��ym!?k�j�:a�F���!�z���4ޛt�X���V N�j�|R���W� @h��U���s�ƨQE+���Qd�� ��q��^����A�ޥpi����݂Kj�����~����{�P�ͪ!��$��	R��8~��B�y���4%��
���������a|��6%�k���₞Jϑ� @`�j�� @  E���+�\��b �j�Q�cCCK�ia>�S?,�@˾�(1)�!奛��l�2~�=�Î��>6�%�u;$�_����%fǲ
l4�Xe�Q����o�m�
�"�t�$?��l��f�M&�x �-�#���q.� o\����@h�#�ԑ�� D�La���@`D}�̳�����f&��"�GUZơZ	%�����%f'�o�uNn��c�Rh)��8Yaa6
�)�ޘoYD�G��d ȅF8�X�� [[���l��30C8�h
.���QJN�c�'�V�Z,D�ʦ>�.Tr2& �
X��� ���`�銎�6���4ш7z ��0�KݰB��
W�2�e��(��jנ�Dpzֿf�QN,�%�=�f82�Y���-��
2���TAe_�ZY��l�0Lҋ
oY7�`N���\� �P����4r6!.��သ�`���H ٘M TEUK ��N����Иk��+)�nZ�����2ՙn�a:�M�wT�fi��X[D[~�� � x�֑�e٦�1�����#s��᦮�F7@��}�\��A��� T�x��fD��u�+�NP��-� ��~ة���l: ���#�gj��d�T ߺ9H� N�60����L�ɕ	Q�X5�����`b�]�f��	�̉��_�C1� ��Ҿ�� C�Z�� mN��@eD�ʓ�s�4��,�d���@�j�P %0:rf?�\'c�f(���{]F�bX��an��ًb�T��"7����4���0Ę���?Q�&��0���F,q��u���*,�|��eZ�#����5 `P�T�y���nk�f� �wX�C�P}�E�*K��>�'e�#���(c?�F`ЌUXD,a2 ��`A�D�L��)W��W~,�lDmV�_�
���Ԋd Қ,pn�:��dC���*���L�	CE7O�:�Q?�JĢ��b�1�!J'�S��Vb���<���v���5p1�;�S�A�bυ  �"�&į��%�P��v��`� �a.*d%Q!_�/m�Jp#B��~KH6�X��w��� %@z���.J�t2�0�am��G���P�����	�~>�b���	 0v$�����a��BdLm�f�
1`nc$�	�$��׉�
t����F�Ii �8�~���d42���b�
���d�8�M/+�p;�"�Iw�I�e���ڈ]��:�[5��G�#����8j�1e���%��������H�#�u

S D�{  
�U���* i �l�B0?���/{�#,jq�F��t��L#�O���HS��g�]É�jQK\CXoXok���;�2ӌ \��@��E��H�MC���4�� ��=K#3	ʫ�hr 8[�B��nH���2�p6v"�֢P��h�q1�\�7(�D���a
��֘�8p���)�bF`�������dL�("��V-���y�>�凩�y�l�{F`B��.�i
!��#4�$�*�� ��p�^�E�AB���E7d����I�*x.3������C����72a��
�lI��
�����Tۤ����&p��}?����x�?�Ӫ~
��_�W��K�X�ێ��{�����rI5�o���q
�a @DT�p �S<��QS D�D�  �2f�&|OK��� �����K�|3����
 (C�[�:��  ���#�BO�d�FU3����@
{��Ȳ�o:
ĺ�.W2&*VB9��d��
!>8�8����"%��i�J�5���~x�
���"�K��p�> =�t' =9V�H6�
��/�� *r�8X�˚<�
�>�-����<�]�K�&�߁F6�NDp|��T�\�^�v�� �(�8��L�_�~�H�8� |{�a=8[��Ꙃ�]PT�cUp4�䄕Ρ����	�d�caʓ�J0�_)S�4B� �- ��Y�T��f)ԙ� �S#?���չ��Y���i3��qZJ+
*\��s����	mZ�7�F�-&�����j���E%0�������˃��d��@��,���2*W����
�1�D�A޷�P�%Kt�u|����l[�$@��c�9��� ��D)�i��@H��3��AV��i�3�� l�o!D;��g�NZb��������c�]�><�)�I�2�O���2�y2;��p��H7�E-���Z/����0kw���`#�09�n�m�sh��z'�qC�}L����2`�����x �����J��<�����F��St�ycĬ����o6��{�ޕ8ؐ��ۓ��0v��ܟ����I��ƣ�}��'[U�L�u�[#�R�s�}?
b��F��6=�61�	ז�=u� �����v[��� �6.$<I�$� ���`���)��d�`�)L'=�t�m�O�QE�5H�ǰ(8��L2�*Gܛ�� ��T#8Ѹ���9v���� #��'�Ƴ��fm��'嬙��iC3���ݗ��kS�}��%�~�!��3@̄�84�6�q�oM#�Th���0�<]�0��R~!��l�,)gn{`r��������i�@\�����7��(͍�%��~�zN�z�/����l����%:<=ɢ>sZI7?���@���K��G�;�Q�@�B�^Hd��cCϜ��U�B���)��<��L�Z�pQ5�0T�2pӈ��6U�P�"��H 8֓&k��,�Xr�01%'�&Tp��J^��(�כ�	\��3��f �\L���������Q8��X4����ڗ���W�!���z�X��j�ͱ�.\�<��-�)��ª���M�_�@�Ӓ���q�(D
�%Q�c��
�T7�
����E��� &dS���KP�dg$�����A��,��n�L�c}�г�@a���(���������^�Dn���
y�IbQA�I��{Ƙ��Xť`%�s�%=���a�T
�MT���-�)ʹ2�m�]��_��d���LN��LU�X�r�Ɉ��7��6zI`vI�$�|� .j�ʹ��Z�`�ׁWC����^@�Ur�H��@h����\"�Q
��{h㟹��o���F�cbD��s��h��i?�2J��󸿃9RY;�>h� 1�3���gb���q��ґ���]�C.N���F�^:��k�%�MJI	����])���	C@���Ȍ�J?��:����T}�>5C�N��iO��T�}<�BNj� sPrZ���#����Jp�v���`Q�䟕���*(kG��ݿs׃��cN��+1��!�C�0 i���{� �H�� ���  �p��K�
�F6�?�Q
����:����H޺���s P=���Aɝ0|Q��\p������Y6�m0Cb�Ԅ�v �^ѻ�����d� `;0̠1����-�+��o�l�#�̋a�������� �=�mp�m&k9�d��@2أN#tY D�A�T���e ��k$P��&N`���]%�@l����,J"��E�6���V�hk��!���A�)ar
!"h=�h�i
o6����Y���� �������Sk*~�nKD�c��#
s�O��%�l�����h�b����{�.��)�"s����� ��T��
R�d٭��9H�SB^�I�y	AW5����j��*��3�0������� o|�H @����h�+�wg��@�9"��лEĕ���2��G��M�أE82�Wmo�U�x�4�*Twxtv�>k�n�rK�
�H��9��-�TKU  ��2{��5pM��ý.¦).joLn`$!�/}�E� :�N����X���gI]�$F$//W���!�X"�_%��Ж/J�܍q�8@b�E��2���W\�Y�
1�pa���$<������3T�g��0"�g��@�*�d>>�Ԋ�HvL�ks�s������ �� %g�$�k2�\
�pu�O�D
��"*ݔ3+`Q�"��d?�"Kneȸ_%�I�e>�\��5WMҩ ���s^P���!S�>$jP�ޒD"؈�̒T��f��A!�Elį�R@���U���g�����8�wv�վ��8�:�X���mb�����M���r�t@Λ�N=�9�D����]�w�h���{8�˶{ Ȳ��׫p�9�b:��շ�,� ���c�p��@���������}ԨWU��Xu�i����:��O�i�l�%�=,:�-���^{�����b����F�(L�' � �� 6�A�@.�@>��B' ��Q�AE;K���G`a��64N��/tB�!�!D'S�3�C�`X�a�~�TB;�p	7���p�0%6u���-����XG
nsy'��T�i+�_�td�����������2��?��*1�.+�n�n�7���G�u���#���o��9���������ȍ_����g��F�mm�;��G���0jo�҃�(>������0����\Ԅ��p�M_�k����_��"�K��/���q.-h���v�� ���x
@ƜU0$�x88Jas�pp���X.�S
 �5\X*�����#b_���  �����S�y�=�?�"��F-a���,�� ��t�;�N����8�����K�ϒ�v&�=XK�;�>�H����=��|�|�
�����!�r��HP%CA�/��� 
���&L�!2fy���x9��