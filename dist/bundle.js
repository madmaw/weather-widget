!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t,n){e.exports=n(18)()},function(e,t){e.exports=React},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),i=n.n(o),s=i.a.shape({trySubscribe:i.a.func.isRequired,tryUnsubscribe:i.a.func.isRequired,notifyNestedSubs:i.a.func.isRequired,isSubscribed:i.a.func.isRequired}),a=i.a.shape({subscribe:i.a.func.isRequired,dispatch:i.a.func.isRequired,getState:i.a.func.isRequired});function c(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1]||t+"Subscription",o=function(e){function o(n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,r));return i[t]=n.store,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,e),o.prototype.getChildContext=function(){var e;return(e={})[t]=this[t],e[n]=null,e},o.prototype.render=function(){return r.Children.only(this.props.children)},o}(r.Component);return o.propTypes={store:a.isRequired,children:i.a.element.isRequired},o.childContextTypes=((e={})[t]=a.isRequired,e[n]=s,e),o}var u=c(),p=n(13),l=n.n(p),d=n(4),f=n.n(d);var h=null,y={notify:function(){}};var m=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.parentSub=n,this.onStateChange=r,this.unsubscribe=null,this.listeners=y}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=function(){var e=[],t=[];return{clear:function(){t=h,e=h},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},get:function(){return t},subscribe:function(n){var r=!0;return t===e&&(t=e.slice()),t.push(n),function(){r&&e!==h&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}}())},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=y)},e}(),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var v=0,g={};function w(){}function S(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.getDisplayName,c=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,u=o.methodName,p=void 0===u?"connectAdvanced":u,d=o.renderCountProp,h=void 0===d?void 0:d,y=o.shouldHandleStateChanges,S=void 0===y||y,O=o.storeKey,P=void 0===O?"store":O,E=o.withRef,T=void 0!==E&&E,j=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),N=P+"Subscription",C=v++,W=((t={})[P]=a,t[N]=s,t),x=((n={})[N]=s,n);return function(t){f()("function"==typeof t,"You must pass a component to the function returned by "+p+". Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",o=c(n),i=b({},j,{getDisplayName:c,methodName:p,renderCountProp:h,shouldHandleStateChanges:S,storeKey:P,withRef:T,displayName:o,wrappedComponentName:n,WrappedComponent:t}),s=function(n){function s(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,n.call(this,e,t));return r.version=C,r.state={},r.renderCount=0,r.store=e[P]||t[P],r.propsMode=Boolean(e[P]),r.setWrappedInstance=r.setWrappedInstance.bind(r),f()(r.store,'Could not find "'+P+'" in either the context or props of "'+o+'". Either wrap the root component in a <Provider>, or explicitly pass "'+P+'" as a prop to "'+o+'".'),r.initSelector(),r.initSubscription(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,n),s.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return(e={})[N]=t||this.context[N],e},s.prototype.componentDidMount=function(){S&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},s.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},s.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},s.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=w,this.store=null,this.selector.run=w,this.selector.shouldComponentUpdate=!1},s.prototype.getWrappedInstance=function(){return f()(T,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+p+"() call."),this.wrappedInstance},s.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},s.prototype.initSelector=function(){var t=e(this.store.dispatch,i);this.selector=function(e,t){var n={run:function(r){try{var o=e(t.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}(t,this.store),this.selector.run(this.props)},s.prototype.initSubscription=function(){if(S){var e=(this.propsMode?this.props:this.context)[N];this.subscription=new m(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},s.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(g)):this.notifyNestedSubs()},s.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},s.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},s.prototype.addExtraProps=function(e){if(!(T||h||this.propsMode&&this.subscription))return e;var t=b({},e);return T&&(t.ref=this.setWrappedInstance),h&&(t[h]=this.renderCount++),this.propsMode&&this.subscription&&(t[N]=this.subscription),t},s.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return Object(r.createElement)(t,this.addExtraProps(e.props))},s}(r.Component);return s.WrappedComponent=t,s.displayName=o,s.childContextTypes=x,s.contextTypes=W,s.propTypes=W,l()(s,t)}}var O=Object.prototype.hasOwnProperty;function P(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function E(e,t){if(P(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!O.call(t,n[o])||!P(e[n[o]],t[n[o]]))return!1;return!0}var T=n(3),j=n(14),N="object"==typeof self&&self&&self.Object===Object&&self,C=(j.a||N||Function("return this")()).Symbol,W=Object.prototype;W.hasOwnProperty,W.toString,C&&C.toStringTag;Object.prototype.toString;C&&C.toStringTag;Object.getPrototypeOf,Object;var x=Function.prototype,_=Object.prototype,M=x.toString;_.hasOwnProperty,M.call(Object);function U(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function I(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function D(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=I(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=I(o),o=r(t,n)),o},r}}var R=[function(e){return"function"==typeof e?D(e):void 0},function(e){return e?void 0:U(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?U(function(t){return Object(T.bindActionCreators)(e,t)}):void 0}];var A=[function(e){return"function"==typeof e?D(e):void 0},function(e){return e?void 0:U(function(){return{}})}],k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function q(e,t,n){return k({},n,e,t)}var F=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r=n.pure,o=n.areMergedPropsEqual,i=!1,s=void 0;return function(t,n,a){var c=e(t,n,a);return i?r&&o(c,s)||(s=c):(i=!0,s=c),s}}}(e):void 0},function(e){return e?void 0:function(){return q}}];function L(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function H(e,t,n,r,o){var i=o.areStatesEqual,s=o.areOwnPropsEqual,a=o.areStatePropsEqual,c=!1,u=void 0,p=void 0,l=void 0,d=void 0,f=void 0;function h(o,c){var h=!s(c,p),y=!i(o,u);return u=o,p=c,h&&y?(l=e(u,p),t.dependsOnOwnProps&&(d=t(r,p)),f=n(l,d,p)):h?(e.dependsOnOwnProps&&(l=e(u,p)),t.dependsOnOwnProps&&(d=t(r,p)),f=n(l,d,p)):y?function(){var t=e(u,p),r=!a(t,l);return l=t,r&&(f=n(l,d,p)),f}():f}return function(o,i){return c?h(o,i):function(o,i){return l=e(u=o,p=i),d=t(r,p),f=n(l,d,p),c=!0,f}(o,i)}}function B(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),s=n(e,i),a=r(e,i),c=o(e,i);return(i.pure?H:L)(s,a,c,e,i)}var $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function G(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function K(e,t){return e===t}var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.connectHOC,n=void 0===t?S:t,r=e.mapStateToPropsFactories,o=void 0===r?A:r,i=e.mapDispatchToPropsFactories,s=void 0===i?R:i,a=e.mergePropsFactories,c=void 0===a?F:a,u=e.selectorFactory,p=void 0===u?B:u;return function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=i.pure,u=void 0===a||a,l=i.areStatesEqual,d=void 0===l?K:l,f=i.areOwnPropsEqual,h=void 0===f?E:f,y=i.areStatePropsEqual,m=void 0===y?E:y,b=i.areMergedPropsEqual,v=void 0===b?E:b,g=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),w=G(e,o,"mapStateToProps"),S=G(t,s,"mapDispatchToProps"),O=G(r,c,"mergeProps");return n(p,$({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:w,initMapDispatchToProps:S,initMergeProps:O,pure:u,areStatesEqual:d,areOwnPropsEqual:h,areStatePropsEqual:m,areMergedPropsEqual:v},g))}}();n.d(t,"Provider",function(){return u}),n.d(t,"createProvider",function(){return c}),n.d(t,"connectAdvanced",function(){return S}),n.d(t,"connect",function(){return Y})},function(e,t,n){"use strict";n.r(t),n.d(t,"createStore",function(){return a}),n.d(t,"combineReducers",function(){return u}),n.d(t,"bindActionCreators",function(){return l}),n.d(t,"applyMiddleware",function(){return h}),n.d(t,"compose",function(){return f}),n.d(t,"__DO_NOT_USE__ActionTypes",function(){return i});var r=n(8),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,u=t,p=[],l=p,d=!1;function f(){l===p&&(l=p.slice())}function h(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return f(),l.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,f();var n=l.indexOf(e);l.splice(n,1)}}}function m(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,u=c(u,e)}finally{d=!1}for(var t=p=l,n=0;n<t.length;n++){(0,t[n])()}return e}return m({type:i.INIT}),(o={dispatch:m,subscribe:y,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,m({type:i.REPLACE})}})[r.a]=function(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var s,a=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var r=!1,o={},i=0;i<a.length;i++){var u=a[i],p=n[u],l=e[u],d=p(l,t);if(void 0===d){var f=c(u,t);throw new Error(f)}o[u]=d,r=r||d!==l}return r?o:e}}function p(e,t){return function(){return t(e.apply(this,arguments))}}function l(e,t){if("function"==typeof e)return p(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],s=e[i];"function"==typeof s&&(r[i]=p(s,t))}return r}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}({},n,{dispatch:r=f.apply(void 0,i)(n.dispatch)})}}}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,s,a){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,s,a],p=0;(c=new Error(t.replace(/%s/g,function(){return u[p++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Celcius=0]="Celcius",e[e.Farenheit=1]="Farenheit"}(t.TemperatureUnits||(t.TemperatureUnits={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7);var o;!function(e){e.SetTitle="widget-set-title",e.SetMeasuringSystem="widget-set-measuing-system",e.SetDisplayWind="widget-set-display-wind",e.SetProgressLoading="widget-progress-loading",e.SetProgressSuccess="widget-progress-success",e.SetProgressError="widget-progress-error"}(o=t.ActionTypes||(t.ActionTypes={})),t.setTitle=function(e){return{type:o.SetTitle,title:e}},t.setDisplayWind=function(e){return{type:o.SetDisplayWind,displayWind:e}},t.setMeasuringSystem=function(e){return function(t,n,r){t({type:o.SetMeasuringSystem,measuringSystem:e}),a(e)(t,n,r)}};const i=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],s=360/i.length;function a(e){return function(t,n,a){t({type:o.SetProgressLoading}),a.geoLocationService.getGeoLocation().then(function(c){let u=n(),p=e||u.widgetState.measuringSystem;return a.weatherService.requestWeatherReport(c.latitude,c.longitude,p).then(function(e){let n=p==r.MeasuringSystem.Metric?"km/h":"mph",a=e.wind.speed;p==r.MeasuringSystem.Metric&&(a*=3.6),a=Math.round(a);let c=Math.round(e.main.temp),u=e.wind.deg+s/2;u<0&&(u+=360);let l=Math.floor(u/s),d=i[l%i.length];t({type:o.SetProgressSuccess,wind:`${d} ${a}${n}`,temperature:`${c}°`,location:e.name,iconId:e.weather[0].icon})})}).catch(function(e){t({type:o.SetProgressError,errror:e})})}}t.reloadWeatherReport=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(5);var o;!function(e){e.Metric="metric",e.Imperial="imperial"}(o=t.MeasuringSystem||(t.MeasuringSystem={})),t.getMeasuringSystem=function(e){switch(e){case r.TemperatureUnits.Celcius:return o.Metric;case r.TemperatureUnits.Farenheit:return o.Imperial}}},function(e,t,n){"use strict";(function(e,r){var o,i=n(15);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var s=Object(i.a)(o);t.a=s}).call(this,n(9),n(20)(e))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.SetTitle="editor-set-title",e.SetDisplayWind="editor-display-wind",e.SetTemperatureUnits="editor-set-temperature-units"}(r=t.ActionTypes||(t.ActionTypes={})),t.setTitle=function(e){return{type:r.SetTitle,title:e}},t.setDisplayWind=function(e){return{type:r.SetDisplayWind,displayWind:e}},t.setTemperatureUnits=function(e){return{type:r.SetTemperatureUnits,temperatureUnits:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(6);var o;!function(e){e[e.None=0]="None",e[e.Loading=1]="Loading",e[e.Success=2]="Success",e[e.Error=3]="Error"}(o=t.ProgressType||(t.ProgressType={})),t.createInitialState=function(e,t,n){return{title:e,displayWind:t,measuringSystem:n,progress:{type:o.None}}},t.default=function(e){return function(t=e,n){switch(n.type){case r.ActionTypes.SetTitle:return Object.assign({},t,{title:n.title});case r.ActionTypes.SetMeasuringSystem:return Object.assign({},t,{measuringSystem:n.measuringSystem,progress:{type:o.None}});case r.ActionTypes.SetDisplayWind:return Object.assign({},t,{displayWind:n.displayWind});case r.ActionTypes.SetProgressSuccess:return Object.assign({},t,{progress:{type:o.Success,location:n.location,temperature:n.temperature,wind:n.wind,iconId:n.iconId}});case r.ActionTypes.SetProgressError:return Object.assign({},t,{progress:{type:o.Error,error:n.error}});case r.ActionTypes.SetProgressLoading:return Object.assign({},t,{progress:{type:o.Loading}});default:return t}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFullTitle=function(e,t){return(void 0!==t?t:e.title)||e.titleHint}},function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,s=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,p=u&&u(Object);e.exports=function e(t,n,l){if("string"!=typeof n){if(p){var d=u(n);d&&d!==p&&e(t,d,l)}var f=s(n);a&&(f=f.concat(a(n)));for(var h=0;h<f.length;++h){var y=f[h];if(!(r[y]||o[y]||l&&l[y])){var m=c(n,y);try{i(t,y,m)}catch(e){}}}return t}return t}},function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(this,n(9))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),o=n(17),i=n(2),s=n(21),a=n(27),c=document.getElementById("root");o.render(r.createElement(i.Provider,{store:s.default},r.createElement("div",{className:"container"},r.createElement(a.default,null))),c)},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=n(19);function o(){}e.exports=function(){function e(e,t,n,o,i,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),o=n(22),i=n(23),s=n(25),a=n(26),c={weatherService:new s.OpenWeatherMapWeatherService,geoLocationService:new a.NavigatorGeoLocationService};let u=r.createStore(i.default,r.applyMiddleware(o.default.withExtraArgument(c)));t.default=u},function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}n.r(t);var o=r();o.withExtraArgument=r,t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),o=n(24),i=n(11),s=n(7),a=n(12);let c=i.createInitialState(a.getFullTitle(o.initialState),o.initialState.displayWind,s.getMeasuringSystem(o.initialState.temperatureUnits));t.default=r.combineReducers({editorState:o.default,widgetState:i.default(c)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(5),o=n(10);t.initialState={title:null,titleHint:"Title of widget",temperatureUnits:r.TemperatureUnits.Celcius,displayWind:!0},t.default=function(e=t.initialState,n){switch(n.type){case o.ActionTypes.SetTitle:return Object.assign({},e,{title:n.title});case o.ActionTypes.SetDisplayWind:return Object.assign({},e,{displayWind:n.displayWind});case o.ActionTypes.SetTemperatureUnits:return Object.assign({},e,{temperatureUnits:n.temperatureUnits});default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.OpenWeatherMapWeatherService=class{constructor(e="https://api.openweathermap.org/data/2.5/weather",t="95f0ce6cf2f400dc7e0d4514e382ca59"){this.baseUrl=e,this.appId=t}requestWeatherReport(e,t,n){let r=`${this.baseUrl}?lat=${e}&lon=${t}&units=${n}&APPID=${this.appId}`;return fetch(r,{method:"GET"}).then(function(e){return e.json()})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.NavigatorGeoLocationService=class{getGeoLocation(){return new Promise(function(e,t){navigator.geolocation.getCurrentPosition(function(t){e(t.coords)},function(e){t(e)})})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),o=n(2),i=n(28),s=n(30);t.default=o.connect(function(e){return{}},{})(class extends r.Component{render(){return r.createElement("div",{className:"container mt-5 .bg-light"},r.createElement("div",{className:"row  justify-content-md-center"},r.createElement("div",{className:"col-auto mr-5",style:{borderRight:"1px solid #666"}},r.createElement(i.default,null)),r.createElement("div",{className:"col-auto .bg-white shadow-lg",style:{minWidth:"25%",minHeight:"100px"}},r.createElement(s.default,null))))}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(29),o=n(2),i=n(6),s=n(12),a=n(7);t.default=o.connect(function(e){return r.mapStateToProps(e.editorState)},function(e){let t=r.mapDispatchToProps(e);return{setTitle:n=>{e(function(e,r){t.setTitle(n);let o=s.getFullTitle(r().editorState,n);e(i.setTitle(o))})},setDisplayWind(n){t.setDisplayWind(n),e(i.setDisplayWind(n))},setTemperatureUnits(n){t.setTemperatureUnits(n),e(i.setMeasuringSystem(a.getMeasuringSystem(n)))}}})(r.EditorComponent)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),o=n(5),i=n(10);t.mapStateToProps=function(e){return{title:e.title?e.title:"",titleHint:e.titleHint,displayWind:e.displayWind,temperatureUnits:e.temperatureUnits}},t.mapDispatchToProps=function(e){return{setTitle:t=>{e(i.setTitle(t))},setDisplayWind:t=>{e(i.setDisplayWind(t))},setTemperatureUnits:t=>{e(i.setTemperatureUnits(t))}}};t.EditorComponent=class extends r.Component{constructor(){super(...arguments),this.onTitleChange=(e=>{let t=e.currentTarget.value;this.props.setTitle(t)}),this.onTemperatureUnitsChange=(e=>t=>{this.props.setTemperatureUnits(e)}),this.onDisplayWindChange=(e=>{this.props.setDisplayWind("true"===e.currentTarget.value)})}render(){return r.createElement("div",null,r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},"Title"),r.createElement("div",{className:"col-12"},r.createElement("input",{type:"text",className:"form-control",placeholder:this.props.titleHint,value:this.props.title,onChange:this.onTitleChange}))),r.createElement("div",{className:"row mt-3"},r.createElement("div",{className:"col-12"},"Temperature"),r.createElement("div",{className:"col-12 col-sm-6"},r.createElement("label",{className:"form-check-label ml-4"},r.createElement("input",{type:"radio",className:"form-check-input",value:o.TemperatureUnits.Celcius,onChange:this.onTemperatureUnitsChange(o.TemperatureUnits.Celcius),checked:this.props.temperatureUnits==o.TemperatureUnits.Celcius}),r.createElement("span",null,"°C"))),r.createElement("div",{className:"col-12 col-sm-6"},r.createElement("label",{className:"form-check-label"},r.createElement("input",{type:"radio",className:"form-check-input",value:o.TemperatureUnits.Farenheit,onChange:this.onTemperatureUnitsChange(o.TemperatureUnits.Farenheit),checked:this.props.temperatureUnits==o.TemperatureUnits.Farenheit}),r.createElement("span",null,"°F")))),r.createElement("div",{className:"row mt-3"},r.createElement("div",{className:"col-12"},"Wind"),r.createElement("div",{className:"col-12 col-sm-6"},r.createElement("label",{className:"form-check-label ml-4"},r.createElement("input",{type:"radio",className:"form-check-input",value:"true",onChange:this.onDisplayWindChange,checked:this.props.displayWind}),r.createElement("span",null,"On"))),r.createElement("div",{className:"col-12 col-sm-6"},r.createElement("label",{className:"form-check-label"},r.createElement("input",{type:"radio",className:"form-check-input",value:"false",onChange:this.onDisplayWindChange,checked:!this.props.displayWind}),r.createElement("span",null,"Off")))))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(31),o=n(2);t.default=o.connect(function(e){return r.mapStateToProps(e.widgetState)},r.mapDispatchToProps)(r.WidgetComponent)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),o=n(11),i=n(6);t.mapStateToProps=function(e){return{title:e.title,displayWind:e.displayWind,error:e.progress.type==o.ProgressType.Error?e.progress.error:null,loading:e.progress.type==o.ProgressType.Loading,wind:e.progress.type==o.ProgressType.Success?e.progress.wind:null,temperature:e.progress.type==o.ProgressType.Success?e.progress.temperature:null,location:e.progress.type==o.ProgressType.Success?e.progress.location:null,iconId:e.progress.type==o.ProgressType.Success?e.progress.iconId:null}},t.mapDispatchToProps=function(e){return{reloadWeatherReport:function(){e(i.reloadWeatherReport())}}};t.WidgetComponent=class extends r.Component{componentDidMount(){this.props.reloadWeatherReport()}render(){return r.createElement("div",{className:"container p-2"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-auto p-2 pl-5",style:{textTransform:"uppercase"}},this.props.title)),r.createElement("div",{className:"row justify-content-md-center"},(()=>this.props.loading?r.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw mt-3"}):this.props.error?r.createElement("div",{className:"col-auto alert alert-danger"},this.props.error,r.createElement("button",{onClick:this.props.reloadWeatherReport},"Retry")):this.props.temperature?r.createElement("div",{className:"col-auto"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-auto",hidden:null==this.props.iconId},r.createElement("img",{src:`http://openweathermap.org/img/w/${this.props.iconId}.png`,style:{width:"100px",height:"100px"}})),r.createElement("div",{className:"col-auto"},r.createElement("div",null,this.props.location),r.createElement("div",null,r.createElement("h2",null,this.props.temperature)),r.createElement("div",{hidden:!this.props.displayWind},r.createElement("small",null,r.createElement("b",null,"Wind")," ",this.props.wind))))):void 0)()))}}}]);
//# sourceMappingURL=bundle.js.map