// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.trace');
mranderson048.re_frame.v0v10v2.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_ = (function mranderson048$re_frame$v0v10v2$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__36547_36557 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction));
var chunk__36548_36558 = null;
var count__36549_36559 = (0);
var i__36550_36560 = (0);
while(true){
if((i__36550_36560 < count__36549_36559)){
var vec__36551_36561 = cljs.core._nth.call(null,chunk__36548_36558,i__36550_36560);
var k_36562 = cljs.core.nth.call(null,vec__36551_36561,(0),null);
var rxn_36563 = cljs.core.nth.call(null,vec__36551_36561,(1),null);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,rxn_36563);


var G__36564 = seq__36547_36557;
var G__36565 = chunk__36548_36558;
var G__36566 = count__36549_36559;
var G__36567 = (i__36550_36560 + (1));
seq__36547_36557 = G__36564;
chunk__36548_36558 = G__36565;
count__36549_36559 = G__36566;
i__36550_36560 = G__36567;
continue;
} else {
var temp__5457__auto___36568 = cljs.core.seq.call(null,seq__36547_36557);
if(temp__5457__auto___36568){
var seq__36547_36569__$1 = temp__5457__auto___36568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36547_36569__$1)){
var c__4351__auto___36570 = cljs.core.chunk_first.call(null,seq__36547_36569__$1);
var G__36571 = cljs.core.chunk_rest.call(null,seq__36547_36569__$1);
var G__36572 = c__4351__auto___36570;
var G__36573 = cljs.core.count.call(null,c__4351__auto___36570);
var G__36574 = (0);
seq__36547_36557 = G__36571;
chunk__36548_36558 = G__36572;
count__36549_36559 = G__36573;
i__36550_36560 = G__36574;
continue;
} else {
var vec__36554_36575 = cljs.core.first.call(null,seq__36547_36569__$1);
var k_36576 = cljs.core.nth.call(null,vec__36554_36575,(0),null);
var rxn_36577 = cljs.core.nth.call(null,vec__36554_36575,(1),null);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,rxn_36577);


var G__36578 = cljs.core.next.call(null,seq__36547_36569__$1);
var G__36579 = null;
var G__36580 = (0);
var G__36581 = (0);
seq__36547_36557 = G__36578;
chunk__36548_36558 = G__36579;
count__36549_36559 = G__36580;
i__36550_36560 = G__36581;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.clear_all_handlers_BANG_ = (function mranderson048$re_frame$v0v10v2$re_frame$subs$clear_all_handlers_BANG_(){
mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind);

return mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return = (function mranderson048$re_frame$v0v10v2$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
mranderson048.re_frame.v0v10v2.re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_36582 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36391__auto___36595 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__36392__auto___36596 = (end__36391__auto___36595 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__36583_36597 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__36584_36598 = null;
var count__36585_36599 = (0);
var i__36586_36600 = (0);
while(true){
if((i__36586_36600 < count__36585_36599)){
var vec__36587_36601 = cljs.core._nth.call(null,chunk__36584_36598,i__36586_36600);
var k__36393__auto___36602 = cljs.core.nth.call(null,vec__36587_36601,(0),null);
var cb__36394__auto___36603 = cljs.core.nth.call(null,vec__36587_36601,(1),null);
try{cb__36394__auto___36603.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36596,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36590){if((e36590 instanceof java.lang.Exception)){
var e__36395__auto___36604 = e36590;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36602,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36604);
} else {
throw e36590;

}
}

var G__36605 = seq__36583_36597;
var G__36606 = chunk__36584_36598;
var G__36607 = count__36585_36599;
var G__36608 = (i__36586_36600 + (1));
seq__36583_36597 = G__36605;
chunk__36584_36598 = G__36606;
count__36585_36599 = G__36607;
i__36586_36600 = G__36608;
continue;
} else {
var temp__5457__auto___36609 = cljs.core.seq.call(null,seq__36583_36597);
if(temp__5457__auto___36609){
var seq__36583_36610__$1 = temp__5457__auto___36609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36583_36610__$1)){
var c__4351__auto___36611 = cljs.core.chunk_first.call(null,seq__36583_36610__$1);
var G__36612 = cljs.core.chunk_rest.call(null,seq__36583_36610__$1);
var G__36613 = c__4351__auto___36611;
var G__36614 = cljs.core.count.call(null,c__4351__auto___36611);
var G__36615 = (0);
seq__36583_36597 = G__36612;
chunk__36584_36598 = G__36613;
count__36585_36599 = G__36614;
i__36586_36600 = G__36615;
continue;
} else {
var vec__36591_36616 = cljs.core.first.call(null,seq__36583_36610__$1);
var k__36393__auto___36617 = cljs.core.nth.call(null,vec__36591_36616,(0),null);
var cb__36394__auto___36618 = cljs.core.nth.call(null,vec__36591_36616,(1),null);
try{cb__36394__auto___36618.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36596,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36594){if((e36594 instanceof java.lang.Exception)){
var e__36395__auto___36619 = e36594;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36617,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36619);
} else {
throw e36594;

}
}

var G__36620 = cljs.core.next.call(null,seq__36583_36610__$1);
var G__36621 = null;
var G__36622 = (0);
var G__36623 = (0);
seq__36583_36597 = G__36620;
chunk__36584_36598 = G__36621;
count__36585_36599 = G__36622;
i__36586_36600 = G__36623;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_36582;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36624 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36624;

} else {
}

return r;
});
mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup = (function mranderson048$re_frame$v0v10v2$re_frame$subs$cache_lookup(var_args){
var G__36626 = arguments.length;
switch (G__36626) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref mranderson048.re-frame.v0v10v2.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe = (function mranderson048$re_frame$v0v10v2$re_frame$subs$subscribe(var_args){
var G__36629 = arguments.length;
switch (G__36629) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_36630 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__5455__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36657 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36657;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36658 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36658;

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36659 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36659;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query));
}
}
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36391__auto___36660 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__36392__auto___36661 = (end__36391__auto___36660 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__36631_36662 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__36632_36663 = null;
var count__36633_36664 = (0);
var i__36634_36665 = (0);
while(true){
if((i__36634_36665 < count__36633_36664)){
var vec__36635_36666 = cljs.core._nth.call(null,chunk__36632_36663,i__36634_36665);
var k__36393__auto___36667 = cljs.core.nth.call(null,vec__36635_36666,(0),null);
var cb__36394__auto___36668 = cljs.core.nth.call(null,vec__36635_36666,(1),null);
try{cb__36394__auto___36668.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36661,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36638){if((e36638 instanceof java.lang.Exception)){
var e__36395__auto___36669 = e36638;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36667,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36669);
} else {
throw e36638;

}
}

var G__36670 = seq__36631_36662;
var G__36671 = chunk__36632_36663;
var G__36672 = count__36633_36664;
var G__36673 = (i__36634_36665 + (1));
seq__36631_36662 = G__36670;
chunk__36632_36663 = G__36671;
count__36633_36664 = G__36672;
i__36634_36665 = G__36673;
continue;
} else {
var temp__5457__auto___36674 = cljs.core.seq.call(null,seq__36631_36662);
if(temp__5457__auto___36674){
var seq__36631_36675__$1 = temp__5457__auto___36674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36631_36675__$1)){
var c__4351__auto___36676 = cljs.core.chunk_first.call(null,seq__36631_36675__$1);
var G__36677 = cljs.core.chunk_rest.call(null,seq__36631_36675__$1);
var G__36678 = c__4351__auto___36676;
var G__36679 = cljs.core.count.call(null,c__4351__auto___36676);
var G__36680 = (0);
seq__36631_36662 = G__36677;
chunk__36632_36663 = G__36678;
count__36633_36664 = G__36679;
i__36634_36665 = G__36680;
continue;
} else {
var vec__36639_36681 = cljs.core.first.call(null,seq__36631_36675__$1);
var k__36393__auto___36682 = cljs.core.nth.call(null,vec__36639_36681,(0),null);
var cb__36394__auto___36683 = cljs.core.nth.call(null,vec__36639_36681,(1),null);
try{cb__36394__auto___36683.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36661,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36642){if((e36642 instanceof java.lang.Exception)){
var e__36395__auto___36684 = e36642;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36682,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36684);
} else {
throw e36642;

}
}

var G__36685 = cljs.core.next.call(null,seq__36631_36675__$1);
var G__36686 = null;
var G__36687 = (0);
var G__36688 = (0);
seq__36631_36662 = G__36685;
chunk__36632_36663 = G__36686;
count__36633_36664 = G__36687;
i__36634_36665 = G__36688;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_36630;
}} else {
var temp__5455__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36689 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36689;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36690 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36690;

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36691 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36691;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query));
}
}
}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_36643 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__5455__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36692 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36692;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36693 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36693;

} else {
}

if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5457__auto___36694 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5457__auto___36694)){
var not_reactive_36695 = temp__5457__auto___36694;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_36695);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36696 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36696;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_36643){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_36643))
);
var sub = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_36643){
return (function (){
return handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_36643))
);
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_36643){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_36643))
));
}
}
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36391__auto___36697 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__36392__auto___36698 = (end__36391__auto___36697 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__36644_36699 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__36645_36700 = null;
var count__36646_36701 = (0);
var i__36647_36702 = (0);
while(true){
if((i__36647_36702 < count__36646_36701)){
var vec__36648_36703 = cljs.core._nth.call(null,chunk__36645_36700,i__36647_36702);
var k__36393__auto___36704 = cljs.core.nth.call(null,vec__36648_36703,(0),null);
var cb__36394__auto___36705 = cljs.core.nth.call(null,vec__36648_36703,(1),null);
try{cb__36394__auto___36705.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36698,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36651){if((e36651 instanceof java.lang.Exception)){
var e__36395__auto___36706 = e36651;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36704,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36706);
} else {
throw e36651;

}
}

var G__36707 = seq__36644_36699;
var G__36708 = chunk__36645_36700;
var G__36709 = count__36646_36701;
var G__36710 = (i__36647_36702 + (1));
seq__36644_36699 = G__36707;
chunk__36645_36700 = G__36708;
count__36646_36701 = G__36709;
i__36647_36702 = G__36710;
continue;
} else {
var temp__5457__auto___36711 = cljs.core.seq.call(null,seq__36644_36699);
if(temp__5457__auto___36711){
var seq__36644_36712__$1 = temp__5457__auto___36711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36644_36712__$1)){
var c__4351__auto___36713 = cljs.core.chunk_first.call(null,seq__36644_36712__$1);
var G__36714 = cljs.core.chunk_rest.call(null,seq__36644_36712__$1);
var G__36715 = c__4351__auto___36713;
var G__36716 = cljs.core.count.call(null,c__4351__auto___36713);
var G__36717 = (0);
seq__36644_36699 = G__36714;
chunk__36645_36700 = G__36715;
count__36646_36701 = G__36716;
i__36647_36702 = G__36717;
continue;
} else {
var vec__36652_36718 = cljs.core.first.call(null,seq__36644_36712__$1);
var k__36393__auto___36719 = cljs.core.nth.call(null,vec__36652_36718,(0),null);
var cb__36394__auto___36720 = cljs.core.nth.call(null,vec__36652_36718,(1),null);
try{cb__36394__auto___36720.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36698,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36655){if((e36655 instanceof java.lang.Exception)){
var e__36395__auto___36721 = e36655;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36719,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36721);
} else {
throw e36655;

}
}

var G__36722 = cljs.core.next.call(null,seq__36644_36712__$1);
var G__36723 = null;
var G__36724 = (0);
var G__36725 = (0);
seq__36644_36699 = G__36722;
chunk__36645_36700 = G__36723;
count__36646_36701 = G__36724;
i__36647_36702 = G__36725;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_36643;
}} else {
var temp__5455__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36726 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36726;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36727 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36727;

} else {
}

if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5457__auto___36728 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5457__auto___36728)){
var not_reactive_36729 = temp__5457__auto___36728;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_36729);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36730 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36730;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5455__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5455__auto__))
);
var sub = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5455__auto__){
return (function (){
return handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5455__auto__))
);
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5455__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5455__auto__))
));
}
}
}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.map_vals = (function mranderson048$re_frame$v0v10v2$re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__36731){
var vec__36732 = p__36731;
var k = cljs.core.nth.call(null,vec__36732,(0),null);
var v = cljs.core.nth.call(null,vec__36732,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals = (function mranderson048$re_frame$v0v10v2$re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?mranderson048.re_frame.v0v10v2.re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36735 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36735;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub = (function mranderson048$re_frame$v0v10v2$re_frame$subs$reg_sub(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36768 = arguments.length;
var i__4532__auto___36769 = (0);
while(true){
if((i__4532__auto___36769 < len__4531__auto___36768)){
args__4534__auto__.push((arguments[i__4532__auto___36769]));

var G__36770 = (i__4532__auto___36769 + (1));
i__4532__auto___36769 = G__36770;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__36738 = cljs.core.count.call(null,input_args);
switch (G__36738) {
case (0):
return ((function (G__36738,computation_fn,input_args,err_header){
return (function() {
var G__36772 = null;
var G__36772__1 = (function (_){
return mranderson048.re_frame.v0v10v2.re_frame.db.app_db;
});
var G__36772__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v2.re_frame.db.app_db;
});
G__36772 = function(_,___$1){
switch(arguments.length){
case 1:
return G__36772__1.call(this,_);
case 2:
return G__36772__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36772.cljs$core$IFn$_invoke$arity$1 = G__36772__1;
G__36772.cljs$core$IFn$_invoke$arity$2 = G__36772__2;
return G__36772;
})()
;})(G__36738,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__36739 = input_args;
var marker = cljs.core.nth.call(null,vec__36739,(0),null);
var vec = cljs.core.nth.call(null,vec__36739,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__36739,marker,vec,G__36738,computation_fn,input_args,err_header){
return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.call(null,vec);
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.call(null,vec);
});
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(vec__36739,marker,vec,G__36738,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)))){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__36738,computation_fn,input_args,err_header){
return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__36738,computation_fn,input_args,err_header))

}
})();
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_36742 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36773 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36773;

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36391__auto___36774 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__36392__auto___36775 = (end__36391__auto___36774 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__36743_36776 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__36744_36777 = null;
var count__36745_36778 = (0);
var i__36746_36779 = (0);
while(true){
if((i__36746_36779 < count__36745_36778)){
var vec__36747_36780 = cljs.core._nth.call(null,chunk__36744_36777,i__36746_36779);
var k__36393__auto___36781 = cljs.core.nth.call(null,vec__36747_36780,(0),null);
var cb__36394__auto___36782 = cljs.core.nth.call(null,vec__36747_36780,(1),null);
try{cb__36394__auto___36782.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36775,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36750){if((e36750 instanceof java.lang.Exception)){
var e__36395__auto___36783 = e36750;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36781,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36783);
} else {
throw e36750;

}
}

var G__36784 = seq__36743_36776;
var G__36785 = chunk__36744_36777;
var G__36786 = count__36745_36778;
var G__36787 = (i__36746_36779 + (1));
seq__36743_36776 = G__36784;
chunk__36744_36777 = G__36785;
count__36745_36778 = G__36786;
i__36746_36779 = G__36787;
continue;
} else {
var temp__5457__auto___36788 = cljs.core.seq.call(null,seq__36743_36776);
if(temp__5457__auto___36788){
var seq__36743_36789__$1 = temp__5457__auto___36788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36743_36789__$1)){
var c__4351__auto___36790 = cljs.core.chunk_first.call(null,seq__36743_36789__$1);
var G__36791 = cljs.core.chunk_rest.call(null,seq__36743_36789__$1);
var G__36792 = c__4351__auto___36790;
var G__36793 = cljs.core.count.call(null,c__4351__auto___36790);
var G__36794 = (0);
seq__36743_36776 = G__36791;
chunk__36744_36777 = G__36792;
count__36745_36778 = G__36793;
i__36746_36779 = G__36794;
continue;
} else {
var vec__36751_36795 = cljs.core.first.call(null,seq__36743_36789__$1);
var k__36393__auto___36796 = cljs.core.nth.call(null,vec__36751_36795,(0),null);
var cb__36394__auto___36797 = cljs.core.nth.call(null,vec__36751_36795,(1),null);
try{cb__36394__auto___36797.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36775,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36754){if((e36754 instanceof java.lang.Exception)){
var e__36395__auto___36798 = e36754;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36796,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36798);
} else {
throw e36754;

}
}

var G__36799 = cljs.core.next.call(null,seq__36743_36789__$1);
var G__36800 = null;
var G__36801 = (0);
var G__36802 = (0);
seq__36743_36776 = G__36799;
chunk__36744_36777 = G__36800;
count__36745_36778 = G__36801;
i__36746_36779 = G__36802;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_36742;
}} else {
var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36803 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36803;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_36755 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36804 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36804;

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36391__auto___36805 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__36392__auto___36806 = (end__36391__auto___36805 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__36756_36807 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__36757_36808 = null;
var count__36758_36809 = (0);
var i__36759_36810 = (0);
while(true){
if((i__36759_36810 < count__36758_36809)){
var vec__36760_36811 = cljs.core._nth.call(null,chunk__36757_36808,i__36759_36810);
var k__36393__auto___36812 = cljs.core.nth.call(null,vec__36760_36811,(0),null);
var cb__36394__auto___36813 = cljs.core.nth.call(null,vec__36760_36811,(1),null);
try{cb__36394__auto___36813.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36806,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36763){if((e36763 instanceof java.lang.Exception)){
var e__36395__auto___36814 = e36763;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36812,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36814);
} else {
throw e36763;

}
}

var G__36815 = seq__36756_36807;
var G__36816 = chunk__36757_36808;
var G__36817 = count__36758_36809;
var G__36818 = (i__36759_36810 + (1));
seq__36756_36807 = G__36815;
chunk__36757_36808 = G__36816;
count__36758_36809 = G__36817;
i__36759_36810 = G__36818;
continue;
} else {
var temp__5457__auto___36819 = cljs.core.seq.call(null,seq__36756_36807);
if(temp__5457__auto___36819){
var seq__36756_36820__$1 = temp__5457__auto___36819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36756_36820__$1)){
var c__4351__auto___36821 = cljs.core.chunk_first.call(null,seq__36756_36820__$1);
var G__36822 = cljs.core.chunk_rest.call(null,seq__36756_36820__$1);
var G__36823 = c__4351__auto___36821;
var G__36824 = cljs.core.count.call(null,c__4351__auto___36821);
var G__36825 = (0);
seq__36756_36807 = G__36822;
chunk__36757_36808 = G__36823;
count__36758_36809 = G__36824;
i__36759_36810 = G__36825;
continue;
} else {
var vec__36764_36826 = cljs.core.first.call(null,seq__36756_36820__$1);
var k__36393__auto___36827 = cljs.core.nth.call(null,vec__36764_36826,(0),null);
var cb__36394__auto___36828 = cljs.core.nth.call(null,vec__36764_36826,(1),null);
try{cb__36394__auto___36828.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36392__auto___36806,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e36767){if((e36767 instanceof java.lang.Exception)){
var e__36395__auto___36829 = e36767;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36393__auto___36827,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__36395__auto___36829);
} else {
throw e36767;

}
}

var G__36830 = cljs.core.next.call(null,seq__36756_36820__$1);
var G__36831 = null;
var G__36832 = (0);
var G__36833 = (0);
seq__36756_36807 = G__36830;
chunk__36757_36808 = G__36831;
count__36758_36809 = G__36832;
i__36759_36810 = G__36833;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_36755;
}} else {
var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__36396__auto___36834 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__36396__auto___36834;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2;
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3;
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq36736){
var G__36737 = cljs.core.first.call(null,seq36736);
var seq36736__$1 = cljs.core.next.call(null,seq36736);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36737,seq36736__$1);
});


//# sourceMappingURL=subs.js.map?rel=1534986055170
