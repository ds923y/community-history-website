// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.trace');
mranderson048.re_frame.v0v10v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils = (function mranderson048$re_frame$v0v10v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__36427_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__36427_SHARP_));
});
if(!(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__5457__auto___36428 = cljs.core.first.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___36428)){
var not_i_36429 = temp__5457__auto___36428;
if(cljs.core.fn_QMARK_.call(null,not_i_36429)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_36429);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_36429);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
mranderson048.re_frame.v0v10v2.re_frame.events.register = (function mranderson048$re_frame$v0v10v2$re_frame$events$register(id,interceptors){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind,id,mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.handle = (function mranderson048$re_frame$v0v10v2$re_frame$events$handle(event_v){
var event_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,event_v);
var temp__5455__auto__ = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5455__auto__)){
var interceptors = temp__5455__auto__;
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_)){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_36430 = mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = event_v;

try{if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_36431 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson048.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36391__auto___36444 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__36392__auto___36445 = (end__36391__auto___36444 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__36432_36446 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__36433_36447 = null;
var count__36434_36448 = (0);
var i__36435_36449 = (0);
while(true){
if((i__36435_36449 < count__36434_36448)){
var vec__36436_36450 = cljs.core._nth.call(null,chunk__36433_36447,i__36435_36449);
var k__36393__auto___36451 = cljs.core.nth.call(null,vec__36436_36450,(0),null);
var cb__36394__auto___36452 = cljs.core.nth.call(null,vec__36436_36450,(1),null);
try{cb__36394__auto___36452.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36445,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36439){if((e36439 instanceof java.lang.Exception)){
var e__36395__auto___36453 = e36439;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36451,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36453);
} else {
throw e36439;

}
}

var G__36454 = seq__36432_36446;
var G__36455 = chunk__36433_36447;
var G__36456 = count__36434_36448;
var G__36457 = (i__36435_36449 + (1));
seq__36432_36446 = G__36454;
chunk__36433_36447 = G__36455;
count__36434_36448 = G__36456;
i__36435_36449 = G__36457;
continue;
} else {
var temp__5457__auto___36458 = cljs.core.seq.call(null,seq__36432_36446);
if(temp__5457__auto___36458){
var seq__36432_36459__$1 = temp__5457__auto___36458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36432_36459__$1)){
var c__4351__auto___36460 = cljs.core.chunk_first.call(null,seq__36432_36459__$1);
var G__36461 = cljs.core.chunk_rest.call(null,seq__36432_36459__$1);
var G__36462 = c__4351__auto___36460;
var G__36463 = cljs.core.count.call(null,c__4351__auto___36460);
var G__36464 = (0);
seq__36432_36446 = G__36461;
chunk__36433_36447 = G__36462;
count__36434_36448 = G__36463;
i__36435_36449 = G__36464;
continue;
} else {
var vec__36440_36465 = cljs.core.first.call(null,seq__36432_36459__$1);
var k__36393__auto___36466 = cljs.core.nth.call(null,vec__36440_36465,(0),null);
var cb__36394__auto___36467 = cljs.core.nth.call(null,vec__36440_36465,(1),null);
try{cb__36394__auto___36467.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36445,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36443){if((e36443 instanceof java.lang.Exception)){
var e__36395__auto___36468 = e36443;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36466,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36468);
} else {
throw e36443;

}
}

var G__36469 = cljs.core.next.call(null,seq__36432_36459__$1);
var G__36470 = null;
var G__36471 = (0);
var G__36472 = (0);
seq__36432_36446 = G__36469;
chunk__36433_36447 = G__36470;
count__36434_36448 = G__36471;
i__36435_36449 = G__36472;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_36431;
}} else {
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_36430;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1534986054716
