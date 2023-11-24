/*! For license information please see b2c286a3.cc5880b5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[931669],{973889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const c={id:"plugin-search-backend-node.testpipeline",title:"TestPipeline",description:"API reference for TestPipeline"},i=void 0,s={id:"reference/plugin-search-backend-node.testpipeline",title:"TestPipeline",description:"API reference for TestPipeline",source:"@site/../docs/reference/plugin-search-backend-node.testpipeline.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.testpipeline",permalink:"/docs/reference/plugin-search-backend-node.testpipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.testpipeline.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.testpipeline",title:"TestPipeline",description:"API reference for TestPipeline"}},a={},l=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline",children:(0,r.jsx)(t.code,{children:"TestPipeline"})})]}),"\n",(0,r.jsx)(t.p,{children:"Test utility for Backstage Search collators, decorators, and indexers."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class TestPipeline \n"})}),"\n",(0,r.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:"An example test checking that a collator provides expected documents."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"it('provides expected documents', async () => {\n  const testSubject = await yourCollatorFactory.getCollator();\n  const pipeline = TestPipeline.fromCollator(testSubject);\n\n  const { documents } = await pipeline.execute();\n\n  expect(documents).toHaveLength(2);\n})\n"})}),"\n",(0,r.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"An example test checking that a decorator behaves as expected."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"it('filters private documents', async () => {\n  const testSubject = await yourDecoratorFactory.getDecorator();\n  const pipeline = TestPipeline\n    .fromDecorator(testSubject)\n    .withDocuments([{ title: 'Private', location: '/private', text: '' }]);\n\n  const { documents } = await pipeline.execute();\n\n  expect(documents).toHaveLength(0);\n})\n"})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.execute",children:"execute()"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Execute the test pipeline so that you can make assertions about the result or behavior of the given test subject."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.fromcollator",children:"fromCollator(collator)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"static"})}),(0,r.jsx)(t.td,{children:"Create a test pipeline given a collator you want to test."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.fromdecorator",children:"fromDecorator(decorator)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"static"})}),(0,r.jsx)(t.td,{children:"Create a test pipeline given a decorator you want to test."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.fromindexer",children:"fromIndexer(indexer)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"static"})}),(0,r.jsx)(t.td,{children:"Create a test pipeline given an indexer you want to test."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withcollator",children:"withCollator(collator)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Add a collator to the test pipeline."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withdecorator",children:"withDecorator(decorator)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Add a decorator to the test pipeline."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withdocuments",children:"withDocuments(documents)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Provide documents for testing decorators and indexers."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withindexer",children:"withIndexer(indexer)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Add an indexer to the test pipeline."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withsubject",children:"withSubject(subject)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"static"})}),(0,r.jsx)(t.td,{children:"Provide the collator, decorator, or indexer to be tested."})]})]})]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,c={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:c,_owner:s.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,y={};function j(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function m(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=j.prototype;var v=b.prototype=new m;v.constructor=b,x(v,j.prototype),v.isPureReactComponent=!0;var g=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,c={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,o)&&!w.hasOwnProperty(o)&&(c[o]=t[o]);var a=arguments.length-2;if(1===a)c.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];c.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:n,type:e,key:i,ref:s,props:c,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,c,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case n:case r:a=!0}}if(a)return i=i(a=e),e=""===c?"."+P(a,0):c,g(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),R(i,t,o,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(a=0,c=""===c?".":c+":",g(e))for(var l=0;l<e.length;l++){var u=c+P(s=e[l],l);a+=R(s,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)a+=R(s=s.value,t,o,u=c+P(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},D={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=j,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=c,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=x({},e.props),c=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)_.call(t,l)&&!w.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}return{$$typeof:n,type:e.type,key:c,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>c});var r=n(667294);const o=r.createContext({});function c(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:c(e),r.createElement(o.Provider,{value:s},t)}}}]);