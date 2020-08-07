if (self.CavalryLogger) { CavalryLogger.start_js(["5WfoS"]); }

__d("lowPriorityWarning",["warning"],(function(a,b,c,d,e,f){e.exports=b("warning")}),null);
__d("warningBlue",["requireCond","cr:888909"],(function(a,b,c,d,e,f){function a(a,b){}e.exports=b("cr:888909")||a}),null);
__d("ReactFiberErrorDialog",["LogHistory","requireCond","cr:895839"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.error,d=b("LogHistory").getInstance("react_fiber_error_logger");d.error("capturedError",JSON.stringify({componentStack:a.componentStack,error:{name:c.name,message:c.message,stack:c.stack},errorBoundaryName:a.errorBoundaryName,willRetry:a.willRetry}));return b("cr:895839").showErrorDialog(a)}e.exports={showErrorDialog:a}}),null);
__d("ReactFiberErrorDialogImpl",["FBLogger","requireCond","cr:895840"],(function(a,b,c,d,e,f){"use strict";var g=!1;function a(a){try{a.error.reactComponentStackForLogging=a.componentStack}catch(a){}b("FBLogger")("ReactFiber").catching(a.error).mustfix("ReactFiber reported an error");!g&&b("cr:895840")&&(g=!0,b("cr:895840").showReactErrorDialog(a));return!0}e.exports={showErrorDialog:a}}),null);
__d("Scheduler-dev",[],(function(a,b,c,d,e,f){"use strict"}),null);
__d("Scheduler-dev-stable",[],(function(a,b,c,d,e,f){"use strict"}),null);
__d("Scheduler-prod",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();Object.defineProperty(f,"__esModule",{value:!0});var g=void 0,h=void 0,i=void 0,j=void 0;f.unstable_now=void 0;f.unstable_forceFrameRate=void 0;var k=Date,l="function"===typeof setTimeout?setTimeout:void 0,m="function"===typeof clearTimeout?clearTimeout:void 0,n="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,o="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,p=void 0,q=void 0;function r(a){p=n(function(b){m(q),a(b)}),q=l(function(){o(p),a(f.unstable_now())},100)}if("object"===typeof performance&&"function"===typeof performance.now){var s=performance;f.unstable_now=function(){return s.now()}}else f.unstable_now=function(){return k.now()};if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,v=function a(){if(null!==t)try{var b=f.unstable_now();t(!0,b);t=null}catch(b){throw setTimeout(a,0),b}};g=function(a){null!==t?setTimeout(g,0,a):(t=a,setTimeout(v,0))};h=function(a,b){u=setTimeout(a,b)};i=function(){clearTimeout(u)};j=function(){return!1};f.unstable_forceFrameRate=function(){}}else{"undefined"!==typeof console&&("function"!==typeof n&&!1,"function"!==typeof o&&!1);var w=null,x=!1,y=!1,z=-1,A=0,B=33,C=33,D=!1;j=function(){return A<=f.unstable_now()};f.unstable_forceFrameRate=function(a){0>a||125<a?!1:0<a?(C=Math.floor(1e3/a),D=!0):(C=33,D=!1)};a=new MessageChannel();var E=a.port2;a.port1.onmessage=function(){x=!1;if(null!==w){var a=f.unstable_now(),b=0<A-a;try{w(b,a)?y||(y=!0,r(F)):w=null}catch(a){throw x=!0,E.postMessage(void 0),a}}};var F=function a(b){if(null!==w){r(a);var c=b-A+C;c<C&&B<C&&!D?(8>c&&(c=8),C=c<B?B:c):B=c;A=b+C;x||(x=!0,E.postMessage(void 0))}else y=!1};g=function(a){null===w&&(w=a,y||(y=!0,r(F)))};h=function(a,b){z=l(function(){a(f.unstable_now())},b)};i=function(){m(z),z=-1}}var G=null,H=null,I=!1,J=null,K=3,L=!1,M=!1,N=!1;function O(a,b){__p&&__p();var c=a.next;if(c===a)G=null;else{a===G&&(G=c);var d=a.previous;d.next=c;c.previous=d}a.next=a.previous=null;c=a.callback;d=K;var e=J;K=a.priorityLevel;J=a;try{var f=c(a.expirationTime<=b)}catch(a){throw a}finally{K=d,J=e}if("function"===typeof f)if(b=a.expirationTime,a={callback:f,priorityLevel:a.priorityLevel,startTime:a.startTime,expirationTime:b,next:null,previous:null},null===G)G=a.next=a.previous=a;else{f=null;c=G;do{if(b<=c.expirationTime){f=c;break}c=c.next}while(c!==G);null===f?f=G:f===G&&(G=a);b=f.previous;b.next=f.previous=a;a.next=f;a.previous=b}}function P(a){__p&&__p();if(null!==H&&H.startTime<=a)do{var b=H,c=b.next;if(b===c)H=null;else{H=c;var d=b.previous;d.next=c;c.previous=d}b.next=b.previous=null;T(b,b.expirationTime)}while(null!==H&&H.startTime<=a)}function Q(a){N=!1,P(a),M||(null!==G?(M=!0,g(R)):null!==H&&h(Q,H.startTime-a))}function R(a,b){__p&&__p();if(!I){M=!1;N&&(N=!1,i());P(b);L=!0;try{if(!a)for(;null!==G&&G.expirationTime<=b&&!I;)O(G,b),b=f.unstable_now(),P(b);else if(null!==G)do O(G,b),b=f.unstable_now(),P(b);while(null!==G&&!j()&&!I);if(null!==G)return!0;null!==H&&h(Q,H.startTime-b);return!1}finally{L=!1}}}function S(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}function T(a,b){__p&&__p();if(null===G)G=a.next=a.previous=a;else{var c=null,d=G;do{if(b<d.expirationTime){c=d;break}d=d.next}while(d!==G);null===c?c=G:c===G&&(G=a);b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}}f.unstable_ImmediatePriority=1;f.unstable_UserBlockingPriority=2;f.unstable_NormalPriority=3;f.unstable_IdlePriority=5;f.unstable_LowPriority=4;f.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=K;K=a;try{return b()}finally{K=c}};f.unstable_next=function(a){switch(K){case 1:case 2:case 3:var b=3;break;default:b=K}var c=K;K=b;try{return a()}finally{K=c}};f.unstable_scheduleCallback=function(a,b,c){__p&&__p();var d=f.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:S(a)}else c=S(a),e=d;c=e+c;a={callback:b,priorityLevel:a,startTime:e,expirationTime:c,next:null,previous:null};if(e>d){c=e;if(null===H)H=a.next=a.previous=a;else{b=null;var j=H;do{if(c<j.startTime){b=j;break}j=j.next}while(j!==H);null===b?b=H:b===H&&(H=a);c=b.previous;c.next=b.previous=a;a.next=b;a.previous=c}null===G&&H===a&&(N?i():N=!0,h(Q,e-d))}else T(a,c),M||L||(M=!0,g(R));return a};f.unstable_cancelCallback=function(a){__p&&__p();var b=a.next;if(null!==b){if(a===b)a===G?G=null:a===H&&(H=null);else{a===G?G=b:a===H&&(H=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};f.unstable_wrapCallback=function(a){var b=K;return function(){var c=K;K=b;try{return a.apply(this,arguments)}finally{K=c}}};f.unstable_getCurrentPriorityLevel=function(){return K};f.unstable_shouldYield=function(){var a=f.unstable_now();P(a);return null!==J&&null!==G&&G.startTime<=a&&G.expirationTime<J.expirationTime||j()};f.unstable_continueExecution=function(){I=!1,M||L||(M=!0,g(R))};f.unstable_pauseExecution=function(){I=!0};f.unstable_getFirstCallbackNode=function(){return G}}),null);
__d("Scheduler-prod-stable",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();Object.defineProperty(f,"__esModule",{value:!0});var g=void 0,h=void 0,i=void 0;f.unstable_now=void 0;f.unstable_forceFrameRate=void 0;var j=Date,k="function"===typeof setTimeout?setTimeout:void 0,l="function"===typeof clearTimeout?clearTimeout:void 0,m="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,n="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,o=void 0,p=void 0;function q(a){o=m(function(b){l(p),a(b)}),p=k(function(){n(o),a(f.unstable_now())},100)}if("object"===typeof performance&&"function"===typeof performance.now){var r=performance;f.unstable_now=function(){return r.now()}}else f.unstable_now=function(){return j.now()};if("undefined"===typeof window||"function"!==typeof MessageChannel){var s=null,t=function(a){if(null!==s)try{s(a)}finally{s=null}};g=function(a){null!==s?setTimeout(g,0,a):(s=a,setTimeout(t,0,!1))};h=function(){s=null};i=function(){return!1};f.unstable_forceFrameRate=function(){}}else{"undefined"!==typeof console&&("function"!==typeof m&&!1,"function"!==typeof n&&!1);var u=null,v=!1,w=-1,x=!1,y=!1,z=0,A=33,B=33,C=!1;i=function(){return z<=f.unstable_now()};f.unstable_forceFrameRate=function(a){0>a||125<a?!1:0<a?(B=Math.floor(1e3/a),C=!0):(B=33,C=!1)};a=new MessageChannel();var D=a.port2;a.port1.onmessage=function(){__p&&__p();v=!1;var a=u,b=w;u=null;w=-1;var c=f.unstable_now(),d=!1;if(0>=z-c)if(-1!==b&&b<=c)d=!0;else{x||(x=!0,q(E));u=a;w=b;return}if(null!==a){y=!0;try{a(d)}finally{y=!1}}};var E=function a(b){if(null!==u){q(a);var c=b-z+B;c<B&&A<B&&!C?(8>c&&(c=8),B=c<A?A:c):A=c;z=b+B;v||(v=!0,D.postMessage(void 0))}else x=!1};g=function(a,b){u=a,w=b,y||0>b?D.postMessage(void 0):x||(x=!0,q(E))};h=function(){u=null,v=!1,w=-1}}var F=null,G=!1,H=!1,I=3,J=-1,K=-1,L=!1,M=!1;function N(){if(!L&&null!==F){var a=F.expirationTime;M?h():M=!0;g(P,a)}}function O(){__p&&__p();var a=F,b=F.next;if(F===b)F=null;else{var c=F.previous;F=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var d=I,e=K;I=a;K=b;try{var f=c(G||1===a)}catch(a){throw a}finally{I=d,K=e}if("function"===typeof f)if(f={callback:f,priorityLevel:a,expirationTime:b,next:null,previous:null},null===F)F=f.next=f.previous=f;else{c=null;a=F;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==F);null===c?c=F:c===F&&(F=f,N());b=c.previous;b.next=c.previous=f;f.next=c;f.previous=b}}function P(a){__p&&__p();if(!H){M=!1;L=!0;var b=G;G=a;try{if(a)for(;null!==F&&!H;){a=f.unstable_now();if(F.expirationTime<=a)do O();while(null!==F&&F.expirationTime<=a&&!H);else break}else if(null!==F)do{if(H)break;O()}while(null!==F&&!i())}finally{L=!1,G=b,N()}}}f.unstable_ImmediatePriority=1;f.unstable_UserBlockingPriority=2;f.unstable_NormalPriority=3;f.unstable_IdlePriority=5;f.unstable_LowPriority=4;f.unstable_runWithPriority=function(a,b){__p&&__p();switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=I,d=J;I=a;J=f.unstable_now();try{return b()}catch(a){throw N(),a}finally{I=c,J=d}};f.unstable_next=function(a){__p&&__p();switch(I){case 1:case 2:case 3:var b=3;break;default:b=I}var c=I,d=J;I=b;J=f.unstable_now();try{return a()}catch(a){throw N(),a}finally{I=c,J=d}};f.unstable_scheduleCallback=function(a,b,c){__p&&__p();var d=-1!==J?J:f.unstable_now();if("object"===typeof c&&null!==c&&"number"===typeof c.timeout)c=d+c.timeout;else switch(a){case 1:c=d+-1;break;case 2:c=d+250;break;case 5:c=d+1073741823;break;case 4:c=d+1e4;break;default:c=d+5e3}a={callback:b,priorityLevel:a,expirationTime:c,next:null,previous:null};if(null===F)F=a.next=a.previous=a,N();else{b=null;d=F;do{if(d.expirationTime>c){b=d;break}d=d.next}while(d!==F);null===b?b=F:b===F&&(F=a,N());c=b.previous;c.next=b.previous=a;a.next=b;a.previous=c}return a};f.unstable_cancelCallback=function(a){__p&&__p();var b=a.next;if(null!==b){if(b===a)F=null;else{a===F&&(F=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};f.unstable_wrapCallback=function(a){var b=I;return function(){var c=I,d=J;I=b;J=f.unstable_now();try{return a.apply(this,arguments)}catch(a){throw N(),a}finally{I=c,J=d}}};f.unstable_getCurrentPriorityLevel=function(){return I};f.unstable_shouldYield=function(){return!G&&(null!==F&&F.expirationTime<K||i())};f.unstable_continueExecution=function(){H=!1,null!==F&&N()};f.unstable_pauseExecution=function(){H=!0};f.unstable_getFirstCallbackNode=function(){return F}}),null);
__d("SchedulerFb-Internals_DO_NOT_USE",["gkx","ifRequired","requestAnimationFramePolyfill","Scheduler-dev","Scheduler-prod","Scheduler-dev-stable","Scheduler-prod-stable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a.requestAnimationFrame===void 0&&(a.requestAnimationFrame=b("requestAnimationFramePolyfill"));var g;b("gkx")("974568")?g=b("Scheduler-prod"):g=b("Scheduler-prod-stable");var h=0;function i(){__p&&__p();var a=g.unstable_getFirstCallbackNode(),b=[];if(!a)return b;var c=a._id;do b.push(a),a=a.next;while(a.next&&a._id!==c);return b.map(function(a){var b=a.expirationTime,c=a.name,d=a.priorityLevel;a=a._id;return{expirationTime:b,name:c,priorityLevel:d,sid:a}})}function j(b,c){return!a.__schedulerDevToolsConnection__?b:function(){c.start=Date.now();var d=b.apply(this,arguments);c.end=Date.now();c.dumpedQueue=i();a.__schedulerDevToolsConnection__.postMessage("executed",c);return d}}e.exports={unstable_ImmediatePriority:g.unstable_ImmediatePriority,unstable_UserBlockingPriority:g.unstable_UserBlockingPriority,unstable_NormalPriority:g.unstable_NormalPriority,unstable_LowPriority:g.unstable_LowPriority,unstable_IdlePriority:g.unstable_IdlePriority,unstable_getCurrentPriorityLevel:g.unstable_getCurrentPriorityLevel,unstable_runWithPriority:g.unstable_runWithPriority,unstable_next:g.unstable_next,unstable_now:g.unstable_now,unstable_scheduleCallback:function(c,d,e){__p&&__p();var f={},k=j(d,f),l=b("ifRequired")("TimeSlice",function(a){return a.guard(k,"unstable_scheduleCallback",{propagationType:a.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return d});c=g.unstable_scheduleCallback(c,l,e);var m="scheduler."+h++;c._id=m;b("ifRequired")("TimeSlice",function(a){a.registerForCancelling(m,l)});a.__schedulerDevToolsConnection__&&(f.sid=c._id,a.__schedulerDevToolsConnection__.postMessage("scheduled",{sid:c._id,functionName:c.callback.name,priorityLevel:c.priorityLevel,expirationTime:c.expirationTime,dumpedQueue:i()}));return c},unstable_cancelCallback:function(a){var c=a._id;b("ifRequired")("TimeSlice",function(a){a.cancelWithToken(c)});return g.unstable_cancelCallback(a)},unstable_wrapCallback:function(a){var c=b("ifRequired")("TimeSlice",function(b){return b.guard(a,"unstable_wrapCallback",{propagationType:b.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return a});return g.unstable_wrapCallback(c)},unstable_pauseExecution:function(){return g.unstable_pauseExecution()},unstable_continueExecution:function(){return g.unstable_continueExecution()},unstable_shouldYield:g.unstable_shouldYield,unstable_forceFrameRate:g.unstable_forceFrameRate}}),null);
__d("scheduler",["SchedulerFb-Internals_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SchedulerFb-Internals_DO_NOT_USE")}),null);
__d("ReactDOMProdOrProfiling-fb",["requireCond","cr:682514"],(function(a,b,c,d,e,f){e.exports=b("cr:682514")}),null);
__d("ReactFbErrorUtils",["ErrorUtils","TimeSlice"],(function(a,b,c,d,e,f){function a(a,c,d,e,f,g,h,i,j){var k=Array.prototype.slice.call(arguments,3),l=this.onError;try{b("ErrorUtils").applyWithGuard(c,d,k,l,a)}catch(a){l(a)}}f.invokeGuardedCallback=a;function c(a,c){return b("TimeSlice").guard(c,a)}f.wrapEventListener=c}),null);
__d("ReactFeatureFlags",["gkx"],(function(a,b,c,d,e,f){"use strict";a={debugRenderPhaseSideEffects:b("gkx")("729629"),debugRenderPhaseSideEffectsForStrictMode:b("gkx")("729630"),warnAboutDeprecatedLifecycles:!0,disableInputAttributeSyncing:b("gkx")("729631"),enableSuspense:!0,reactPrefixWarningsInStrictMode:b("gkx")("729632"),disableJavaScriptURLs:!0,enableSuspenseServerRenderer:b("gkx")("729633"),disableYielding:!1,revertPassiveEffectsChange:!b("gkx")("934630"),enableUserBlockingEvents:b("gkx")("972776")};e.exports=a}),null);
__d("JSScheduler",["SchedulerFb-Internals_DO_NOT_USE","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={unstable_Immediate:b("SchedulerFb-Internals_DO_NOT_USE").unstable_ImmediatePriority,unstable_UserBlocking:b("SchedulerFb-Internals_DO_NOT_USE").unstable_UserBlockingPriority,unstable_Normal:b("SchedulerFb-Internals_DO_NOT_USE").unstable_NormalPriority,unstable_Low:b("SchedulerFb-Internals_DO_NOT_USE").unstable_LowPriority,unstable_Idle:b("SchedulerFb-Internals_DO_NOT_USE").unstable_IdlePriority},h=!1,i=b("SchedulerFb-Internals_DO_NOT_USE").unstable_scheduleCallback,j=b("SchedulerFb-Internals_DO_NOT_USE").unstable_cancelCallback,k=a.__fbNativeSetTimeout||a.setTimeout,l={priorities:g,shouldYield:b("SchedulerFb-Internals_DO_NOT_USE").unstable_shouldYield,getCurrentPriorityLevel:b("SchedulerFb-Internals_DO_NOT_USE").unstable_getCurrentPriorityLevel,runWithPriority:b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority,defer:function(a){var b=l.getCurrentPriorityLevel();return i(b,a)},next:function(a){return b("SchedulerFb-Internals_DO_NOT_USE").unstable_next(a)},getCallbackScheduler:function(){var a=l.getCurrentPriorityLevel();return function(b){return i(a,b)}},scheduleNormalPriCallback:function(a){return i(g.unstable_Normal,a)},scheduleLoggingPriCallback:function(a){return i(g.unstable_Low,a)},scheduleSpeculativeCallback:function(a){return i(g.unstable_Idle,a)},cancelCallback:function(a){j(a)},scheduleDelayedCallback_DO_NOT_USE:function(a,c,d){if(b("gkx")("974568")){var e=i(a,d,{delay:c});return e}var f={timeoutID:k(function(){f.handle=i(a,d)},c),handle:null};return f},cancelDelayedCallback_DO_NOT_USE:function(a){if(b("gkx")("974568")){var c=a;return j(c)}c=a;a=c.handle;a!==null?j(a):clearTimeout(c.timeoutID)},makeSchedulerGlobalEntry:function(c){__p&&__p();c===void 0&&(c=null),c!==null&&c!==void 0&&b("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(c),a.ScheduleJSWork=function(a){__p&&__p();return function(){__p&&__p();for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];if(h)a.apply(void 0,c);else{var e=l.getCurrentPriorityLevel();i(e,function(){h=!0;try{a.apply(void 0,c)}finally{h=!1}})}}}}};e.exports=l}),null);

    © 2020 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

Contact GitHub
Pricing
API
Training
Blog
