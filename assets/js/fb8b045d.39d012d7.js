/*! For license information please see fb8b045d.39d012d7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[347443],{725955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var n=r(824246),o=r(511151);const s={id:"backend-test-utils.mockservices.permissions.factory",title:"mockServices.permissions.factory",description:"API reference for mockServices.permissions.factory"},c=void 0,i={id:"reference/backend-test-utils.mockservices.permissions.factory",title:"mockServices.permissions.factory",description:"API reference for mockServices.permissions.factory",source:"@site/../docs/reference/backend-test-utils.mockservices.permissions.factory.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.mockservices.permissions.factory",permalink:"/docs/reference/backend-test-utils.mockservices.permissions.factory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-test-utils.mockservices.permissions.factory.md",tags:[],version:"current",frontMatter:{id:"backend-test-utils.mockservices.permissions.factory",title:"mockServices.permissions.factory",description:"API reference for mockServices.permissions.factory"}},u={},a=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/backend-test-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockservices",children:(0,n.jsx)(t.code,{children:"mockServices"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockservices.permissions",children:(0,n.jsx)(t.code,{children:"permissions"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockservices.permissions.factory",children:(0,n.jsx)(t.code,{children:"factory"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'factory: () => ServiceFactory<import("@backstage/backend-plugin-api").PermissionsService, "plugin">\n'})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,f=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:f,props:s,_owner:i.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var k=_.prototype=new b;k.constructor=_,m(k,v.prototype),k.isPureReactComponent=!0;var S=Array.isArray,g=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,s={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)g.call(t,o)&&!x.hasOwnProperty(o)&&(s[o]=t[o]);var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){for(var a=Array(u),f=0;f<u;f++)a[f]=arguments[f+2];s.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===s[o]&&(s[o]=u[o]);return{$$typeof:r,type:e,key:c,ref:i,props:s,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,s,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return c=c(u=e),e=""===s?"."+C(u,0):s,S(c)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(c,t,o,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),t.push(c)),1;if(u=0,s=""===s?".":s+":",S(e))for(var a=0;a<e.length;a++){var f=s+C(i=e[a],a);u+=$(i,t,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(i=e.next()).done;)u+=$(i=i.value,t,o,f=s+C(i,a++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function O(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:j};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=s,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),s=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=j.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)g.call(t,a)&&!x.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==u?u[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){u=Array(a);for(var f=0;f<a;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:r,type:e.type,key:s,ref:c,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>s});var n=r(667294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:s(e),n.createElement(o.Provider,{value:i},t)}}}]);