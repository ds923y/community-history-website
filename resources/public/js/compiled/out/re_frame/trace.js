// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__24090){
var map__24091 = p__24090;
var map__24091__$1 = ((((!((map__24091 == null)))?(((((map__24091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24091):map__24091);
var operation = cljs.core.get.call(null,map__24091__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__24091__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__24091__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__24091__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__24093_24105 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__24094_24106 = null;
var count__24095_24107 = (0);
var i__24096_24108 = (0);
while(true){
if((i__24096_24108 < count__24095_24107)){
var vec__24097_24109 = cljs.core._nth.call(null,chunk__24094_24106,i__24096_24108);
var k_24110 = cljs.core.nth.call(null,vec__24097_24109,(0),null);
var cb_24111 = cljs.core.nth.call(null,vec__24097_24109,(1),null);
try{cb_24111.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e24100){var e_24112 = e24100;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_24110,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_24112);
}

var G__24113 = seq__24093_24105;
var G__24114 = chunk__24094_24106;
var G__24115 = count__24095_24107;
var G__24116 = (i__24096_24108 + (1));
seq__24093_24105 = G__24113;
chunk__24094_24106 = G__24114;
count__24095_24107 = G__24115;
i__24096_24108 = G__24116;
continue;
} else {
var temp__5457__auto___24117 = cljs.core.seq.call(null,seq__24093_24105);
if(temp__5457__auto___24117){
var seq__24093_24118__$1 = temp__5457__auto___24117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24093_24118__$1)){
var c__4351__auto___24119 = cljs.core.chunk_first.call(null,seq__24093_24118__$1);
var G__24120 = cljs.core.chunk_rest.call(null,seq__24093_24118__$1);
var G__24121 = c__4351__auto___24119;
var G__24122 = cljs.core.count.call(null,c__4351__auto___24119);
var G__24123 = (0);
seq__24093_24105 = G__24120;
chunk__24094_24106 = G__24121;
count__24095_24107 = G__24122;
i__24096_24108 = G__24123;
continue;
} else {
var vec__24101_24124 = cljs.core.first.call(null,seq__24093_24118__$1);
var k_24125 = cljs.core.nth.call(null,vec__24101_24124,(0),null);
var cb_24126 = cljs.core.nth.call(null,vec__24101_24124,(1),null);
try{cb_24126.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e24104){var e_24127 = e24104;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_24125,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_24127);
}

var G__24128 = cljs.core.next.call(null,seq__24093_24118__$1);
var G__24129 = null;
var G__24130 = (0);
var G__24131 = (0);
seq__24093_24105 = G__24128;
chunk__24094_24106 = G__24129;
count__24095_24107 = G__24130;
i__24096_24108 = G__24131;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1534986032082
