(this["webpackJsonpconways-game-of-life"]=this["webpackJsonpconways-game-of-life"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),u=(n(10),n(1)),i=(n(11),n(2)),l=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],s=function(){for(var e=[],t=0;t<70;t++)e.push(Array.from(Array(70),(function(){return 0})));return e};var m=function(){var e=Object(a.useState)((function(){return s()})),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),m=Object(u.a)(c,2),f=m[0],b=m[1],d=Object(a.useState)(!1),v=Object(u.a)(d,2),h=v[0],p=v[1],g=Object(a.useRef)(f);g.current=f;var y=Object(a.useCallback)((function(){g.current&&(r((function(e){return Object(i.a)(e,(function(t){for(var n=function(n){for(var a=function(a){var o=0;l.forEach((function(t){var r=Object(u.a)(t,2),c=r[0],i=r[1],l=n+c,s=a+i;l>=0&&l<70&&s>=0&&s<70&&(o+=e[l][s])})),o<2||o>3?t[n][a]=0:0===e[n][a]&&3===o&&(t[n][a]=1)},o=0;o<70;o++)a(o)},a=0;a<70;a++)n(a)}))})),setTimeout(y,100))}),[]);return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:"header"},o.a.createElement("button",{className:"button",onClick:function(){b(!f),f||(g.current=!0,y())}},f?"stop":"start"),o.a.createElement("button",{className:"button",onClick:function(){b(!1),r(s())}},"Clear"),o.a.createElement("button",{className:"button",onClick:function(){r(function(){for(var e=[],t=0;t<70;t++)e.push(Array.from(Array(70),(function(){return Math.random()>.7?1:0})));return e}())}},"Random"),o.a.createElement("button",{className:"button",onClick:function(){p(!h)}},"Toggle Grid")),o.a.createElement("div",{className:"memory"},o.a.createElement("h2",null,"In memory of John Horton Conway - December 26, 1937 - April 11, 2020")),o.a.createElement("div",{className:"game-area"},o.a.createElement("div",{className:"flex-grid",style:{display:"grid",gridTemplateColumns:"repeat(".concat(70,", 10px)")}},n.map((function(e,t){return e.map((function(e,a){return o.a.createElement("div",{className:"col",key:"".concat(t,"-").concat(a),onClick:function(){var e=Object(i.a)(n,(function(e){e[t][a]=n[t][a]?0:1}));r(e)},style:{backgroundColor:n[t][a]?"#408697":void 0,border:h?"1px solid #8D8C8A":"none"}})}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.b6855404.chunk.js.map