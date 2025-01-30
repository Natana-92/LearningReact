/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={221:(e,t,n)=>{var r=n(540);Symbol.for("react.portal"),r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE},961:(e,t,n)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(221)},869:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d=Object.assign,_={};function h(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||y}function v(){}function E(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=E.prototype=new v;b.constructor=E,d(b,h.prototype),b.isPureReactComponent=!0;var S=Array.isArray,g={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function w(e,t,r,o,u,a){return r=a.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}function C(){}function H(e,t,o,u,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c,i,l=!1;if(null===e)l=!0;else switch(s){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0;break;case p:return H((l=e._init)(e._payload),t,o,u,a)}}if(l)return a=a(e),l=""===u?"."+k(e,0):u,S(a)?(o="",null!=l&&(o=l.replace(j,"$&/")+"/"),H(a,t,o,"",(function(e){return e}))):null!=a&&(R(a)&&(c=a,i=o+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+l,a=w(c.type,i,void 0,0,0,c.props)),t.push(a)),1;l=0;var f,y=""===u?".":u+":";if(S(e))for(var d=0;d<e.length;d++)l+=H(u=e[d],t,o,s=y+k(u,d),a);else if("function"==typeof(d=null===(f=e)||"object"!=typeof f?null:"function"==typeof(f=m&&f[m]||f["@@iterator"])?f:null))for(e=d.call(e),d=0;!(u=e.next()).done;)l+=H(u=u.value,t,o,s=y+k(u,d++),a);else if("object"===s){if("function"==typeof e.then)return H(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(C,C):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,u,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function T(e,t,n){if(null==e)return e;var r=[],o=0;return H(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function x(){}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=a,t.PureComponent=E,t.StrictMode=u,t.Suspense=l,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=d({},e.props),o=e.key;if(null!=t)for(u in t.ref,void 0!==t.key&&(o=""+t.key),t)!O.call(t,u)||"key"===u||"__self"===u||"__source"===u||"ref"===u&&void 0===t.ref||(r[u]=t[u]);var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return w(e.type,o,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,o={},u=null;if(null!=t)for(r in void 0!==t.key&&(u=""+t.key),t)O.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return w(e,u,void 0,0,0,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=g.T,n={};g.T=n;try{var r=e(),o=g.S;null!==o&&o(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(x,$)}catch(e){$(e)}finally{g.T=t}},t.unstable_useCacheRefresh=function(){return g.H.useCacheRefresh()},t.use=function(e){return g.H.use(e)},t.useActionState=function(e,t,n){return g.H.useActionState(e,t,n)},t.useCallback=function(e,t){return g.H.useCallback(e,t)},t.useContext=function(e){return g.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return g.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return g.H.useEffect(e,t)},t.useId=function(){return g.H.useId()},t.useImperativeHandle=function(e,t,n){return g.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return g.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return g.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return g.H.useMemo(e,t)},t.useOptimistic=function(e,t){return g.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return g.H.useReducer(e,t,n)},t.useRef=function(e){return g.H.useRef(e)},t.useState=function(e){return g.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return g.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return g.H.useTransition()},t.version="19.0.0"},540:(e,t,n)=>{e.exports=n(869)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}var r=n(540),o=n(961);function u(e){var t=e.amount,n=e.measurement,o=e.name;return r.createElement("li",null,t," ",n," ",o)}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(null,arguments)}function s(e){var t=e.list;return r.createElement("ul",{className:"ingredients"},t.map((function(e,t){return r.createElement(u,a({key:t},e))})))}function c(e){var t=e.title,n=e.steps;return r.createElement("section",{className:"instructions"},r.createElement("h2",null,t),n.map((function(e,t){})))}function i(e){var t=e.name,n=e.ingredients;return e.steps,r.createElement("section",{id:t.toLowerCase().replace(/ /g," ")},r.createElement("h1",null,t),r.createElement(s,{list:n}),r.createElement(c,{title:"조리절차",steps:stpes}))}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(null,arguments)}function f(e){var t=e.recipes;return r.createElement("article",null,r.createElement("header",null,r.createElement("h1",null,"맛있는 조리법")),r.createElement("div",{className:"recipes"},t.map((function(e,t){return r.createElement(i,l({key:t},e))}))))}const p=JSON.parse('[{"name":"Baked Salmon","ingredients":[{"name":"연어","amount":500,"measurement":"그램"},{"name":"잣","amount":1,"measurement":"컵"},{"name":"버터 상추","amount":2,"measurement":"컵"},{"name":"엘로 스쿼시","amount":1,"measurement":"개"},{"name":"올리브 오일","amount":3,"measurement":"컵"},{"name":"마늘","amount":3,"measurement":"쪽"}],"steps":["오븐을 180도로 예열한다","유리 베이킹 그릇에 올리브 오일을 두른다.","연어, 마늘, 잣을 그릇에 담는다","오븐에서 15분간 익힌다","옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다.","오븐에서 그릇을 꺼내서 15분간 식힌 다음에 상추를 곁들여서 내놓는다"]},{"name":"생성 타코","ingredients":[{"name":"흰살 생선","amount":500,"measurement":"그램"},{"name":"치즈","amount":1,"measurement":"컵"},{"name":"아이스버그 상추","amount":2,"measurement":"컵"},{"name":"토마토","amount":2,"measurement":"개"}],"steps":["생선을 그릴에 익힌다.","또띠야 3장 위에 생선을 얹는다","또띠야에 얹은 생선 위에 상추, 토마토, 치즈를 얹는다."]}]');(0,o.render)(r.createElement(f,{recipes:p}),document.getElementById("root"))})();