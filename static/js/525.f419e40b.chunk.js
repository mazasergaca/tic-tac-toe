"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[525],{525:function(n,e,r){r.r(e),r.d(e,{default:function(){return sn}});var t=r(982),i=r(885),o=r(791),l=r(871),u=r(181);function f(n,e){var r="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=(0,u.Z)(n))||e&&n&&"number"===typeof n.length){r&&(n=r);var t=0,i=function(){};return{s:i,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return l=n.done,n},e:function(n){f=!0,o=n},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw o}}}}var a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function c(n){var e=(0,t.Z)(n),r=(0,i.Z)(e,9),o=r[0],l=r[1],u=r[2],c=r[3],d=r[4],s=r[5],p=r[6],v=r[7],h=r[8];return d?o||l||u||c||!d||s||p||v||h?function(n){var e,r=(0,t.Z)(n),o=null,l=f(a);try{for(l.s();!(e=l.n()).done;){var u=(0,i.Z)(e.value,3),c=u[0],d=u[1],s=u[2];if(r[c]===r[d]&&null!==r[c]&&"O"===r[c]||r[c]===r[s]&&null!==r[c]&&"O"===r[c]||r[d]===r[s]&&null!==r[d]&&"O"===r[c]){if(null===r[c]){r[c]="O",o=1;break}if(null===r[d]){r[d]="O",o=1;break}if(null===r[s]){r[s]="O",o=1;break}}}}catch(P){l.e(P)}finally{l.f()}if(1!==o){var p,v=f(a);try{for(v.s();!(p=v.n()).done;){var h=(0,i.Z)(p.value,3),x=h[0],b=h[1],m=h[2];if(r[x]===r[b]&&null!==r[x]||r[x]===r[m]&&null!==r[x]||r[b]===r[m]&&null!==r[b]){if(null===r[x]){r[x]="O",o=1;break}if(null===r[b]){r[b]="O",o=1;break}if(null===r[m]){r[m]="O",o=1;break}}}}catch(P){v.e(P)}finally{v.f()}}if(1!==o){var w,y=f(a);try{for(y.s();!(w=y.n()).done;){var g=(0,i.Z)(w.value,3),O=g[0],Z=g[1],k=g[2];if("O"===r[O]&&null===r[Z]&&null===r[k]||"O"===r[Z]&&null===r[O]&&null===r[k]||"O"===r[k]&&null===r[Z]&&null===r[O]){if("O"!==r[O]){r[O]="O",o=2;break}if("O"!==r[k]){r[k]="O",o=2;break}r[Z]="O",o=2}}}catch(P){y.e(P)}finally{y.f()}}if(1!==o&&2!==o)for(var j=0;j<8;j++)if(!r[j]){r[j]="O";break}return r}(n):(e[0]="O",e):(e[4]="O",e)}var d=r(413),s=r(388),p=r(968),v=r(199);function h(){var n=(0,o.useRef)(!1);return(0,v.L)((function(){return n.current=!0,function(){n.current=!1}}),[]),n}var x=r(131),b=r(829),m=r(174),w=function(n){var e=n.children,r=n.initial,t=n.isPresent,i=n.onExitComplete,l=n.custom,u=n.presenceAffectsLayout,f=(0,b.h)(y),a=(0,m.M)(),c=(0,o.useMemo)((function(){return{id:a,initial:r,isPresent:t,custom:l,onExitComplete:function(n){var e,r;f.set(n,!0);try{for(var t=(0,s.XA)(f.values()),o=t.next();!o.done;o=t.next()){if(!o.value)return}}catch(l){e={error:l}}finally{try{o&&!o.done&&(r=t.return)&&r.call(t)}finally{if(e)throw e.error}}null===i||void 0===i||i()},register:function(n){return f.set(n,!1),function(){return f.delete(n)}}}}),u?void 0:[t]);return(0,o.useMemo)((function(){f.forEach((function(n,e){return f.set(e,!1)}))}),[t]),o.useEffect((function(){!t&&!f.size&&(null===i||void 0===i||i())}),[t]),o.createElement(x.O.Provider,{value:c},e)};function y(){return new Map}var g=r(497),O=r(475),Z=function(n){return n.key||""};var k,j,P,E,F,C,X,S,z,R,A,B,D,L,Y=function(n){var e=n.children,r=n.custom,t=n.initial,i=void 0===t||t,l=n.onExitComplete,u=n.exitBeforeEnter,f=n.presenceAffectsLayout,a=void 0===f||f,c=(0,s.CR)(function(){var n=h(),e=(0,s.CR)((0,o.useState)(0),2),r=e[0],t=e[1],i=(0,o.useCallback)((function(){n.current&&t(r+1)}),[r]);return[(0,o.useCallback)((function(){return p.ZP.postRender(i)}),[i]),r]}(),1),d=c[0],x=(0,o.useContext)(g.p).forceRender;x&&(d=x);var b=h(),m=function(n){var e=[];return o.Children.forEach(n,(function(n){(0,o.isValidElement)(n)&&e.push(n)})),e}(e),y=m,k=new Set,j=(0,o.useRef)(y),P=(0,o.useRef)(new Map).current,E=(0,o.useRef)(!0);if((0,v.L)((function(){E.current=!1,function(n,e){n.forEach((function(n){var r=Z(n);e.set(r,n)}))}(m,P),j.current=y})),(0,O.z)((function(){E.current=!0,P.clear(),k.clear()})),E.current)return o.createElement(o.Fragment,null,y.map((function(n){return o.createElement(w,{key:Z(n),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:a},n)})));y=(0,s.ev)([],(0,s.CR)(y),!1);for(var F=j.current.map(Z),C=m.map(Z),X=F.length,S=0;S<X;S++){var z=F[S];-1===C.indexOf(z)&&k.add(z)}return u&&k.size&&(y=[]),k.forEach((function(n){if(-1===C.indexOf(n)){var e=P.get(n);if(e){var t=F.indexOf(n);y.splice(t,0,o.createElement(w,{key:Z(e),isPresent:!1,onExitComplete:function(){P.delete(n),k.delete(n);var e=j.current.findIndex((function(e){return e.key===n}));if(j.current.splice(e,1),!k.size){if(j.current=m,!1===b.current)return;d(),l&&l()}},custom:r,presenceAffectsLayout:a},e))}}})),y=y.map((function(n){var e=n.key;return k.has(e)?n:o.createElement(w,{key:Z(n),isPresent:!0,presenceAffectsLayout:a},n)})),o.createElement(o.Fragment,null,k.size?y:y.map((function(n){return(0,o.cloneElement)(n)})))},T=r(737),W=r(168),M=r(242),I=r(76),q=M.ZP.li(k||(k=(0,W.Z)(["\n  width: calc(100% / 3);\n  height: calc(100% / 3);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:nth-child(1) {\n    border-right: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n  }\n  &:nth-child(2) {\n    border-right: 1px solid #fff;\n    border-left: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n  }\n  &:nth-child(3) {\n    border-left: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n  }\n  &:nth-child(4) {\n    border-right: 1px solid #fff;\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n  }\n  &:nth-child(5) {\n    border: 1px solid #fff;\n  }\n  &:nth-child(6) {\n    border-left: 1px solid #fff;\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n  }\n  &:nth-child(7) {\n    border-right: 1px solid #fff;\n    border-top: 1px solid #fff;\n  }\n  &:nth-child(8) {\n    border-right: 1px solid #fff;\n    border-left: 1px solid #fff;\n    border-top: 1px solid #fff;\n  }\n  &:nth-child(9) {\n    border-left: 1px solid #fff;\n    border-top: 1px solid #fff;\n  }\n"]))),_=M.ZP.button(j||(j=(0,W.Z)(["\n  width: 100%;\n  height: 100%;\n\n  font-size: 80px;\n  line-height: 1.1;\n\n  border: none;\n  background-color: ",";\n  cursor: pointer;\n  transition: background-color 500ms;\n\n  &:active {\n    background-color: #ffffff50;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 120px;\n  }\n"])),(function(n){return n.isWinner?"#5eff9f":"transparent"})),N=(0,M.ZP)(I.E.p)(P||(P=(0,W.Z)(["\n  color: #fff;\n"]))),U=r(184),H=function(n){var e=n.value,r=n.onClick,t=n.disabled,i=n.isWinner,o=(0,T.U)().skin;return(0,U.jsx)(q,{children:(0,U.jsx)(_,{isWinner:i,type:"button",onClick:r,disabled:t,children:(0,U.jsx)(Y,{children:e&&(0,U.jsx)(N,{initial:{scale:.5},animate:{scale:1},transition:{duration:.2},exit:{opacity:0},style:(0,d.Z)((0,d.Z)({},o),{},{fontSize:80}),children:e})})})})},V=M.ZP.ul(E||(E=(0,W.Z)(["\n  width: 90vw;\n  height: 90vw;\n  max-width: 500px;\n  max-height: 500px;\n  margin: 0 auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  flex-wrap: wrap;\n\n  background-color: #ffffff20;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n    height: 500px;\n  }\n"]))),G=function(n){var e=n.squares,r=n.onClick,t=n.disabled,i=n.winner;return(0,U.jsx)(V,{children:Array(9).fill(1).map((function(n,o){return(0,U.jsx)(H,{isWinner:(null===i||void 0===i?void 0:i.winner)&&(null===i||void 0===i?void 0:i.lines[0])===o||(null===i||void 0===i?void 0:i.lines[1])===o||(null===i||void 0===i?void 0:i.lines[2])===o,value:e[o],onClick:function(){return r(o)},disabled:t},o)}))})},J=r(504),K=M.ZP.div(F||(F=(0,W.Z)(["\n  position: relative;\n\n  margin-bottom: 70px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n  }\n"]))),Q=M.ZP.div(C||(C=(0,W.Z)(["\n  padding: 0 10px;\n  width: 100%;\n  position: relative;\n"]))),$=(0,M.ZP)(J.rU)(X||(X=(0,W.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  transform: translateY(-50%);\n\n  font-size: 40px;\n\n  color: #fff;\n  transition: transform 250ms;\n\n  &:hover {\n    transform: translateY(-50%) scale(1.1);\n  }\n"]))),nn=M.ZP.p(S||(S=(0,W.Z)(["\n  text-align: center;\n  font-size: 30px;\n\n  color: #fff;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n  }\n"]))),en=function(n){var e=n.winner,r=n.xIsNext;return(0,U.jsx)(K,{children:(0,U.jsxs)(Q,{children:[(0,U.jsx)($,{to:"/menu",children:"\u21d0"}),(0,U.jsx)(nn,{children:null!==e&&void 0!==e&&e.winner?"Winner: ".concat(e.winner):"Next player: ".concat(r?"X":"O")})]})})},rn=r(561),tn=(0,M.ZP)(I.E.div)(z||(z=(0,W.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 320px;\n\n  /* display: ","; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  overflow: hidden;\n  border-radius: 20px;\n  background-color: #391898;\n"])),(function(n){return n.winner?"flex":"none"})),on=M.ZP.p(R||(R=(0,W.Z)(["\n  margin-bottom: 15px;\n  font-size: 32px;\n\n  color: ",";\n"])),(function(n){return n.color})),ln=(0,M.ZP)(I.E.div)(A||(A=(0,W.Z)(["\n  height: 150px;\n  width: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.bgc})),un=(0,M.ZP)(I.E.svg)(B||(B=(0,W.Z)(["\n  width: 100px;\n  height: 100px;\n"]))),fn=M.ZP.div(D||(D=(0,W.Z)(["\n  margin-top: 25px;\n"]))),an=M.ZP.button(L||(L=(0,W.Z)(["\n  width: 100px;\n  padding: 10px 0px;\n\n  font-size: 12px;\n\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  background-color: ",";\n  cursor: pointer;\n  transition: background-color 250ms;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"])),(function(n){return n.bgc}),(function(n){return n.bgc+"90"})),cn=function(n){var e=n.winner,r=n.onClick,t=n.squares,i=n.players,o=(0,l.s0)();return(0,U.jsx)(Y,{children:((null===e||void 0===e?void 0:e.winner)||function(){var n,e=f(t);try{for(e.s();!(n=e.n()).done;){if(!n.value)return!1}}catch(r){e.e(r)}finally{e.f()}return!0}())&&(0,U.jsxs)(tn,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:[i&&(0,U.jsx)(on,{color:"X"===(null===e||void 0===e?void 0:e.winner)||"O"===(null===e||void 0===e?void 0:e.winner)?"#FFE03B":"#fff",children:"X"===(null===e||void 0===e?void 0:e.winner)?"Player One win!":"O"===(null===e||void 0===e?void 0:e.winner)?"Player Two Win!":"Draw"}),!i&&(0,U.jsx)(on,{color:"X"===(null===e||void 0===e?void 0:e.winner)?"#FFE03B":"O"===(null===e||void 0===e?void 0:e.winner)?"#FF3B3B":"#fff",children:"X"===(null===e||void 0===e?void 0:e.winner)?"You Win!":"O"===(null===e||void 0===e?void 0:e.winner)?"You Lose!":"Draw"}),(0,U.jsx)(ln,{initial:{opacity:0,scaleY:.9},animate:{opacity:1,scaleY:1},transition:{duration:.3,delay:.3},bgc:!i||"X"!==(null===e||void 0===e?void 0:e.winner)&&"O"!==(null===e||void 0===e?void 0:e.winner)?"X"===(null===e||void 0===e?void 0:e.winner)?"#FF9900":"O"===(null===e||void 0===e?void 0:e.winner)?"#FF0000":"#4C8BD4":"#FF9900",children:(0,U.jsx)(un,{initial:{opacity:0,scaleY:.7},animate:{opacity:1,scaleY:1},transition:{duration:.3,delay:.6},children:(0,U.jsx)("use",{href:rn.Z+"".concat(!i||"X"!==(null===e||void 0===e?void 0:e.winner)&&"O"!==(null===e||void 0===e?void 0:e.winner)?"X"===(null===e||void 0===e?void 0:e.winner)?"#trophy":"O"===(null===e||void 0===e?void 0:e.winner)?"#lose":"#handshake":"#trophy")})})}),(0,U.jsxs)(fn,{children:[(0,U.jsx)(an,{type:"button",onClick:function(){o("/menu")},bgc:!i||"X"!==(null===e||void 0===e?void 0:e.winner)&&"O"!==(null===e||void 0===e?void 0:e.winner)?"X"===(null===e||void 0===e?void 0:e.winner)?"#FF9900":"O"===(null===e||void 0===e?void 0:e.winner)?"#FF0000":"#4C8BD4":"#FF9900",children:"Back"}),(0,U.jsx)(an,{type:"button",onClick:r,bgc:!i||"X"!==(null===e||void 0===e?void 0:e.winner)&&"O"!==(null===e||void 0===e?void 0:e.winner)?"X"===(null===e||void 0===e?void 0:e.winner)?"#FF9900":"O"===(null===e||void 0===e?void 0:e.winner)?"#FF0000":"#4C8BD4":"#FF9900",children:"Play again"})]})]})})},dn=r(385),sn=function(){var n=Array(9).fill(null),e=(0,o.useState)(n),r=(0,i.Z)(e,2),u=r[0],f=r[1],a=(0,o.useState)(null),d=(0,i.Z)(a,2),s=d[0],p=d[1],v=(0,o.useState)(!1),h=(0,i.Z)(v,2),x=h[0],b=h[1],m=(0,o.useState)(!0),w=(0,i.Z)(m,2),y=w[0],g=w[1],O=(0,o.useState)(!1),Z=(0,i.Z)(O,2),k=Z[0],j=Z[1],P=(0,o.useRef)(null),E=(0,l.TH)(),F=new URLSearchParams(E.search).get("type");(0,o.useEffect)((function(){null!==s&&void 0!==s&&s.winner&&clearTimeout(P.current)}),[s]),(0,o.useEffect)((function(){p(function(n){for(var e=0,r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];e<r.length;e++){var t=r[e],o=(0,i.Z)(t,3),l=o[0],u=o[1],f=o[2];if(n[l]&&n[l]===n[u]&&n[l]===n[f])return{winner:n[l],lines:[l,u,f]}}return null}(u))}),[u]),(0,o.useEffect)((function(){"one-player"===F?b(!1):"two-players"===F&&b(!0)}),[]),(0,o.useEffect)((function(){return function(){return clearTimeout(P.current)}}),[]);return(0,U.jsxs)(dn.Z,{children:[(0,U.jsx)(en,{winner:s,xIsNext:y}),(0,U.jsx)(G,{winner:s,squares:u,onClick:function(n){var e=(0,t.Z)(u);null!==s&&void 0!==s&&s.winner||e[n]||(e[n]=y?"X":"O",x?(f(e),g(!y)):(g(!1),j(!0),f(e),P.current=setTimeout((function(){var n=c(e);f(n),j(!1),g(!0)}),1500*Math.random())))},disabled:k}),(0,U.jsx)(cn,{winner:s,onClick:function(){f(n),g(!0),j(!1),p(null),clearTimeout(P.current)},squares:u,players:x})]})}},385:function(n,e,r){r.d(e,{Z:function(){return u}});r(791);var t,i=r(168),o=r(242).ZP.div(t||(t=(0,i.Z)(["\n  min-height: 100vh;\n  max-width: 500px;\n  padding: 20px 15px;\n  margin: 0 auto;\n"]))),l=r(184),u=function(n){var e=n.children;return(0,l.jsx)(o,{children:e})}},413:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(942);function i(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function o(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,t.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}}}]);
//# sourceMappingURL=525.f419e40b.chunk.js.map