"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[525],{525:function(n,e,r){r.r(e),r.d(e,{default:function(){return cn}});var i=r(982),t=r(885),o=r(791),l=r(871),u=r(181);function a(n,e){var r="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=(0,u.Z)(n))||e&&n&&"number"===typeof n.length){r&&(n=r);var i=0,t=function(){};return{s:t,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,a=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return l=n.done,n},e:function(n){a=!0,o=n},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw o}}}}var f=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function c(n){var e=(0,i.Z)(n),r=(0,t.Z)(e,9),o=r[0],l=r[1],u=r[2],c=r[3],d=r[4],s=r[5],v=r[6],p=r[7],h=r[8];return d?o||l||u||c||!d||s||v||p||h?function(n){var e,r=(0,i.Z)(n),o=null,l=a(f);try{for(l.s();!(e=l.n()).done;){var u=(0,t.Z)(e.value,3),c=u[0],d=u[1],s=u[2];if(r[c]===r[d]&&null!==r[c]&&"O"===r[c]||r[c]===r[s]&&null!==r[c]&&"O"===r[c]||r[d]===r[s]&&null!==r[d]&&"O"===r[c]){if(null===r[c]){r[c]="O",o=1;break}if(null===r[d]){r[d]="O",o=1;break}if(null===r[s]){r[s]="O",o=1;break}}}}catch(E){l.e(E)}finally{l.f()}if(1!==o){var v,p=a(f);try{for(p.s();!(v=p.n()).done;){var h=(0,t.Z)(v.value,3),x=h[0],m=h[1],b=h[2];if(r[x]===r[m]&&null!==r[x]||r[x]===r[b]&&null!==r[x]||r[m]===r[b]&&null!==r[m]){if(null===r[x]){r[x]="O",o=1;break}if(null===r[m]){r[m]="O",o=1;break}if(null===r[b]){r[b]="O",o=1;break}}}}catch(E){p.e(E)}finally{p.f()}}if(1!==o){var w,y=a(f);try{for(y.s();!(w=y.n()).done;){var g=(0,t.Z)(w.value,3),Z=g[0],k=g[1],O=g[2];if("O"===r[Z]&&null===r[k]&&null===r[O]||"O"===r[k]&&null===r[Z]&&null===r[O]||"O"===r[O]&&null===r[k]&&null===r[Z]){if("O"!==r[Z]){r[Z]="O",o=2;break}if("O"!==r[O]){r[O]="O",o=2;break}r[k]="O",o=2}}}catch(E){y.e(E)}finally{y.f()}}if(1!==o&&2!==o)for(var j=0;j<8;j++)if(!r[j]){r[j]="O";break}return r}(n):(e[0]="O",e):(e[4]="O",e)}var d=r(388),s=r(968),v=r(199);function p(){var n=(0,o.useRef)(!1);return(0,v.L)((function(){return n.current=!0,function(){n.current=!1}}),[]),n}var h=r(131),x=r(829),m=r(174),b=function(n){var e=n.children,r=n.initial,i=n.isPresent,t=n.onExitComplete,l=n.custom,u=n.presenceAffectsLayout,a=(0,x.h)(w),f=(0,m.M)(),c=(0,o.useMemo)((function(){return{id:f,initial:r,isPresent:i,custom:l,onExitComplete:function(n){var e,r;a.set(n,!0);try{for(var i=(0,d.XA)(a.values()),o=i.next();!o.done;o=i.next()){if(!o.value)return}}catch(l){e={error:l}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}null===t||void 0===t||t()},register:function(n){return a.set(n,!1),function(){return a.delete(n)}}}}),u?void 0:[i]);return(0,o.useMemo)((function(){a.forEach((function(n,e){return a.set(e,!1)}))}),[i]),o.useEffect((function(){!i&&!a.size&&(null===t||void 0===t||t())}),[i]),o.createElement(h.O.Provider,{value:c},e)};function w(){return new Map}var y=r(497),g=r(475),Z=function(n){return n.key||""};var k,O,j,E,F,P,C,X,z,R,S,A,B,L,T=function(n){var e=n.children,r=n.custom,i=n.initial,t=void 0===i||i,l=n.onExitComplete,u=n.exitBeforeEnter,a=n.presenceAffectsLayout,f=void 0===a||a,c=(0,d.CR)(function(){var n=p(),e=(0,d.CR)((0,o.useState)(0),2),r=e[0],i=e[1],t=(0,o.useCallback)((function(){n.current&&i(r+1)}),[r]);return[(0,o.useCallback)((function(){return s.ZP.postRender(t)}),[t]),r]}(),1),h=c[0],x=(0,o.useContext)(y.p).forceRender;x&&(h=x);var m=p(),w=function(n){var e=[];return o.Children.forEach(n,(function(n){(0,o.isValidElement)(n)&&e.push(n)})),e}(e),k=w,O=new Set,j=(0,o.useRef)(k),E=(0,o.useRef)(new Map).current,F=(0,o.useRef)(!0);if((0,v.L)((function(){F.current=!1,function(n,e){n.forEach((function(n){var r=Z(n);e.set(r,n)}))}(w,E),j.current=k})),(0,g.z)((function(){F.current=!0,E.clear(),O.clear()})),F.current)return o.createElement(o.Fragment,null,k.map((function(n){return o.createElement(b,{key:Z(n),isPresent:!0,initial:!!t&&void 0,presenceAffectsLayout:f},n)})));k=(0,d.ev)([],(0,d.CR)(k),!1);for(var P=j.current.map(Z),C=w.map(Z),X=P.length,z=0;z<X;z++){var R=P[z];-1===C.indexOf(R)&&O.add(R)}return u&&O.size&&(k=[]),O.forEach((function(n){if(-1===C.indexOf(n)){var e=E.get(n);if(e){var i=P.indexOf(n);k.splice(i,0,o.createElement(b,{key:Z(e),isPresent:!1,onExitComplete:function(){E.delete(n),O.delete(n);var e=j.current.findIndex((function(e){return e.key===n}));if(j.current.splice(e,1),!O.size){if(j.current=w,!1===m.current)return;h(),l&&l()}},custom:r,presenceAffectsLayout:f},e))}}})),k=k.map((function(n){var e=n.key;return O.has(e)?n:o.createElement(b,{key:Z(n),isPresent:!0,presenceAffectsLayout:f},n)})),o.createElement(o.Fragment,null,O.size?k:k.map((function(n){return(0,o.cloneElement)(n)})))},W=r(168),Y=r(31),M=r(149),D=Y.ZP.li(k||(k=(0,W.Z)(["\n  width: calc(100% / 3);\n  height: calc(100% / 3);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:nth-child(1) {\n    border-right: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n  }\n  &:nth-child(2) {\n    border-right: 1px solid #fff;\n    border-left: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n  }\n  &:nth-child(3) {\n    border-left: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n  }\n  &:nth-child(4) {\n    border-right: 1px solid #fff;\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n  }\n  &:nth-child(5) {\n    border: 1px solid #fff;\n  }\n  &:nth-child(6) {\n    border-left: 1px solid #fff;\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n  }\n  &:nth-child(7) {\n    border-right: 1px solid #fff;\n    border-top: 1px solid #fff;\n  }\n  &:nth-child(8) {\n    border-right: 1px solid #fff;\n    border-left: 1px solid #fff;\n    border-top: 1px solid #fff;\n  }\n  &:nth-child(9) {\n    border-left: 1px solid #fff;\n    border-top: 1px solid #fff;\n  }\n"]))),I=Y.ZP.button(O||(O=(0,W.Z)(["\n  width: 100%;\n  height: 100%;\n\n  font-size: 80px;\n\n  border: none;\n  background-color: ",";\n  cursor: pointer;\n  transition: background-color 500ms;\n\n  &:active {\n    background-color: #ffffff50;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 120px;\n  }\n"])),(function(n){return n.isWinner?"#5eff9f":"transparent"})),q=(0,Y.ZP)(M.E.p)(j||(j=(0,W.Z)(["\n  color: #fff;\n"]))),_=r(184),N=function(n){var e=n.value,r=n.onClick,i=n.disabled,t=n.isWinner;return(0,_.jsx)(D,{children:(0,_.jsx)(I,{isWinner:t,type:"button",onClick:r,disabled:i,children:(0,_.jsx)(T,{children:e&&(0,_.jsx)(q,{initial:{scale:.5},animate:{scale:1},transition:{duration:.2},exit:{opacity:0},children:e})})})})},U=Y.ZP.ul(E||(E=(0,W.Z)(["\n  width: 90vw;\n  height: 90vw;\n  max-width: 500px;\n  max-height: 500px;\n  margin: 0 auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  flex-wrap: wrap;\n\n  background-color: #ffffff20;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n    height: 500px;\n  }\n"]))),H=function(n){var e=n.squares,r=n.onClick,i=n.disabled,t=n.winner;return(0,_.jsx)(U,{children:Array(9).fill(1).map((function(n,o){return(0,_.jsx)(N,{isWinner:(null===t||void 0===t?void 0:t.winner)&&(null===t||void 0===t?void 0:t.lines[0])===o||(null===t||void 0===t?void 0:t.lines[1])===o||(null===t||void 0===t?void 0:t.lines[2])===o,value:e[o],onClick:function(){return r(o)},disabled:i},o)}))})},V=r(504),G=Y.ZP.div(F||(F=(0,W.Z)(["\n  position: relative;\n\n  margin-bottom: 70px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n  }\n"]))),J=Y.ZP.div(P||(P=(0,W.Z)(["\n  padding: 0 10px;\n  width: 100%;\n  position: relative;\n"]))),K=(0,Y.ZP)(V.rU)(C||(C=(0,W.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  transform: translateY(-50%);\n\n  font-size: 40px;\n\n  color: #fff;\n"]))),Q=Y.ZP.p(X||(X=(0,W.Z)(["\n  text-align: center;\n  font-size: 30px;\n\n  color: #fff;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n  }\n"]))),$=function(n){var e=n.winner,r=n.xIsNext;return(0,_.jsx)(G,{children:(0,_.jsxs)(J,{children:[(0,_.jsx)(K,{to:"/menu",children:"\u21d0"}),(0,_.jsx)(Q,{children:null!==e&&void 0!==e&&e.winner?"Winner: ".concat(e.winner):"Next player: ".concat(r?"X":"O")})]})})},nn=r(561),en=(0,Y.ZP)(M.E.div)(z||(z=(0,W.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 320px;\n\n  /* display: ","; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  overflow: hidden;\n  border-radius: 20px;\n  background-color: #391898;\n"])),(function(n){return n.winner?"flex":"none"})),rn=Y.ZP.p(R||(R=(0,W.Z)(["\n  margin-bottom: 15px;\n  font-size: 32px;\n\n  color: ",";\n"])),(function(n){return n.color})),tn=(0,Y.ZP)(M.E.div)(S||(S=(0,W.Z)(["\n  height: 150px;\n  width: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.bgc})),on=(0,Y.ZP)(M.E.svg)(A||(A=(0,W.Z)(["\n  width: 100px;\n  height: 100px;\n"]))),ln=Y.ZP.div(B||(B=(0,W.Z)(["\n  margin-top: 25px;\n"]))),un=Y.ZP.button(L||(L=(0,W.Z)(["\n  width: 100px;\n  padding: 10px 0px;\n\n  font-size: 12px;\n\n  border: none;\n  border-radius: 20px;\n  color: #fff;\n  background-color: ",";\n  cursor: pointer;\n  transition: background-color 250ms;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"])),(function(n){return n.bgc}),(function(n){return n.bgc+"90"})),an=function(n){var e=n.winner,r=n.onClick,i=n.squares,t=n.players,o=(0,l.s0)();return(0,_.jsx)(T,{children:((null===e||void 0===e?void 0:e.winner)||function(){var n,e=a(i);try{for(e.s();!(n=e.n()).done;){if(!n.value)return!1}}catch(r){e.e(r)}finally{e.f()}return!0}())&&(0,_.jsxs)(en,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0},children:[t&&(0,_.jsx)(rn,{color:"X"===(null===e||void 0===e?void 0:e.winner)||"O"===(null===e||void 0===e?void 0:e.winner)?"#FFE03B":"#fff",children:"X"===(null===e||void 0===e?void 0:e.winner)?"Player One win!":"O"===(null===e||void 0===e?void 0:e.winner)?"Player Two Win!":"Draw"}),!t&&(0,_.jsx)(rn,{color:"X"===(null===e||void 0===e?void 0:e.winner)?"#FFE03B":"O"===(null===e||void 0===e?void 0:e.winner)?"#FF3B3B":"#fff",children:"X"===(null===e||void 0===e?void 0:e.winner)?"You Win!":"O"===(null===e||void 0===e?void 0:e.winner)?"You Lose!":"Draw"}),(0,_.jsx)(tn,{initial:{opacity:0,scaleY:.9},animate:{opacity:1,scaleY:1},transition:{duration:.3,delay:.5},bgc:!t||"X"!==(null===e||void 0===e?void 0:e.winner)&&"O"!==(null===e||void 0===e?void 0:e.winner)?"X"===(null===e||void 0===e?void 0:e.winner)?"#FF9900":"O"===(null===e||void 0===e?void 0:e.winner)?"#FF0000":"#4C8BD4":"#FF9900",children:(0,_.jsx)(on,{initial:{opacity:0,scaleY:.7},animate:{opacity:1,scaleY:1},transition:{duration:.3,delay:.6},children:(0,_.jsx)("use",{href:nn.Z+"".concat(!t||"X"!==(null===e||void 0===e?void 0:e.winner)&&"O"!==(null===e||void 0===e?void 0:e.winner)?"X"===(null===e||void 0===e?void 0:e.winner)?"#trophy":"O"===(null===e||void 0===e?void 0:e.winner)?"#lose":"#handshake":"#trophy")})})}),(0,_.jsxs)(ln,{children:[(0,_.jsx)(un,{type:"button",onClick:function(){o("/menu")},bgc:!t||"X"!==(null===e||void 0===e?void 0:e.winner)&&"O"!==(null===e||void 0===e?void 0:e.winner)?"X"===(null===e||void 0===e?void 0:e.winner)?"#FF9900":"O"===(null===e||void 0===e?void 0:e.winner)?"#FF0000":"#4C8BD4":"#FF9900",children:"Back"}),(0,_.jsx)(un,{type:"button",onClick:r,bgc:!t||"X"!==(null===e||void 0===e?void 0:e.winner)&&"O"!==(null===e||void 0===e?void 0:e.winner)?"X"===(null===e||void 0===e?void 0:e.winner)?"#FF9900":"O"===(null===e||void 0===e?void 0:e.winner)?"#FF0000":"#4C8BD4":"#FF9900",children:"Play again"})]})]})})},fn=r(385),cn=function(){var n=Array(9).fill(null),e=(0,o.useState)(n),r=(0,t.Z)(e,2),u=r[0],a=r[1],f=(0,o.useState)(null),d=(0,t.Z)(f,2),s=d[0],v=d[1],p=(0,o.useState)(!1),h=(0,t.Z)(p,2),x=h[0],m=h[1],b=(0,o.useState)(!0),w=(0,t.Z)(b,2),y=w[0],g=w[1],Z=(0,o.useState)(!1),k=(0,t.Z)(Z,2),O=k[0],j=k[1],E=(0,o.useRef)(null),F=(0,l.TH)(),P=new URLSearchParams(F.search).get("type");(0,o.useEffect)((function(){v(function(n){for(var e=0,r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];e<r.length;e++){var i=r[e],o=(0,t.Z)(i,3),l=o[0],u=o[1],a=o[2];if(n[l]&&n[l]===n[u]&&n[l]===n[a])return{winner:n[l],lines:[l,u,a]}}return null}(u))}),[u]),(0,o.useEffect)((function(){"one-player"===P?m(!1):"two-players"===P&&m(!0)}),[]),(0,o.useEffect)((function(){return function(){return clearTimeout(E.current)}}),[]);return(0,_.jsxs)(fn.Z,{children:[(0,_.jsx)($,{winner:s,xIsNext:y}),(0,_.jsx)(H,{winner:s,squares:u,onClick:function(n){var e=(0,i.Z)(u);null!==s&&void 0!==s&&s.winner||e[n]?clearTimeout(E.current):(e[n]=y?"X":"O",x?(a(e),g(!y)):(g(!1),j(!0),a(e),E.current=setTimeout((function(){var n=c(e);a(n),j(!1),g(!0)}),1500*Math.random())))},disabled:O}),(0,_.jsx)(an,{winner:s,onClick:function(){a(n),g(!0),j(!1),clearTimeout(E.current)},squares:u,players:x})]})}},385:function(n,e,r){r.d(e,{Z:function(){return u}});r(791);var i,t=r(168),o=r(31).ZP.div(i||(i=(0,t.Z)(["\n  min-height: 100vh;\n  padding: 20px 15px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n  }\n"]))),l=r(184),u=function(n){var e=n.children;return(0,l.jsx)(o,{children:e})}}}]);
//# sourceMappingURL=525.e18f3142.chunk.js.map