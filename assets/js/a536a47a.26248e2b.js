/*! For license information please see a536a47a.26248e2b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[830076],{950351:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var t=n(824246),o=n(511151);const c={id:"backend-common.cachemanager.fromconfig",title:"CacheManager.fromConfig()",description:"API reference for CacheManager.fromConfig()"},a=void 0,i={id:"reference/backend-common.cachemanager.fromconfig",title:"CacheManager.fromConfig()",description:"API reference for CacheManager.fromConfig()",source:"@site/../docs/reference/backend-common.cachemanager.fromconfig.md",sourceDirName:"reference",slug:"/reference/backend-common.cachemanager.fromconfig",permalink:"/docs/reference/backend-common.cachemanager.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.cachemanager.fromconfig.md",tags:[],version:"current",frontMatter:{id:"backend-common.cachemanager.fromconfig",title:"CacheManager.fromConfig()",description:"API reference for CacheManager.fromConfig()"}},s={},u=[{value:"Parameters",id:"parameters",level:2}];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common",children:(0,t.jsx)(r.code,{children:"@backstage/backend-common"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.cachemanager",children:(0,t.jsx)(r.code,{children:"CacheManager"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.cachemanager.fromconfig",children:(0,t.jsx)(r.code,{children:"fromConfig"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Creates a new ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.cachemanager",children:"CacheManager"})," instance by reading from the ",(0,t.jsx)(r.code,{children:"backend"})," config section, specifically the ",(0,t.jsx)(r.code,{children:".cache"})," key."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"static fromConfig(config: Config, options?: CacheManagerOptions): CacheManager;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"config"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"})}),(0,t.jsx)(r.td,{children:"The loaded application configuration."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.cachemanageroptions",children:"CacheManagerOptions"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.cachemanager",children:"CacheManager"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,c={},u=null,f=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,t)&&!s.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:u,ref:f,props:c,_owner:i.current}}r.Fragment=c,r.jsx=u,r.jsxs=u},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}function b(){}function _(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var j=_.prototype=new b;j.constructor=_,m(j,g.prototype),j.isPureReactComponent=!0;var x=Array.isArray,v=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,t){var o,c={},a=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)v.call(r,o)&&!C.hasOwnProperty(o)&&(c[o]=r[o]);var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];c.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:i,props:c,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,o,c,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case t:s=!0}}if(s)return a=a(s=e),e=""===c?"."+R(s,0):c,x(a)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),O(a,r,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),r.push(a)),1;if(s=0,c=""===c?".":c+":",x(e))for(var u=0;u<e.length;u++){var f=c+R(i=e[u],u);s+=O(i,r,o,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(i=e.next()).done;)s+=O(i=i.value,r,o,f=c+R(i,u++),a);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,r,n){if(null==e)return e;var t=[],o=0;return O(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},I={transition:null},T={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};r.Children={map:$,forEach:function(e,r,n){$(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=o,r.Profiler=a,r.PureComponent=_,r.StrictMode=c,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,i=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in r)v.call(r,u)&&!C.hasOwnProperty(u)&&(o[u]=void 0===r[u]&&void 0!==s?s[u]:r[u])}var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:n,type:e.type,key:c,ref:a,props:o,_owner:i}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return M.current.useCallback(e,r)},r.useContext=function(e){return M.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return M.current.useDeferredValue(e)},r.useEffect=function(e,r){return M.current.useEffect(e,r)},r.useId=function(){return M.current.useId()},r.useImperativeHandle=function(e,r,n){return M.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return M.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return M.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return M.current.useMemo(e,r)},r.useReducer=function(e,r,n){return M.current.useReducer(e,r,n)},r.useRef=function(e){return M.current.useRef(e)},r.useState=function(e){return M.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return M.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return M.current.useTransition()},r.version="18.2.0"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>c});var t=n(667294);const o=t.createContext({});function c(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:c(e),t.createElement(o.Provider,{value:i},r)}}}]);