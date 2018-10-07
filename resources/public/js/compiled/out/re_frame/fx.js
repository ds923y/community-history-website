// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_24228 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__24229 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24230 = null;
var count__24231 = (0);
var i__24232 = (0);
while(true){
if((i__24232 < count__24231)){
var vec__24233 = cljs.core._nth.call(null,chunk__24230,i__24232);
var effect_key = cljs.core.nth.call(null,vec__24233,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24233,(1),null);
var temp__5455__auto___24249 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___24249)){
var effect_fn_24250 = temp__5455__auto___24249;
effect_fn_24250.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24251 = seq__24229;
var G__24252 = chunk__24230;
var G__24253 = count__24231;
var G__24254 = (i__24232 + (1));
seq__24229 = G__24251;
chunk__24230 = G__24252;
count__24231 = G__24253;
i__24232 = G__24254;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24229);
if(temp__5457__auto__){
var seq__24229__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24229__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__24229__$1);
var G__24255 = cljs.core.chunk_rest.call(null,seq__24229__$1);
var G__24256 = c__4351__auto__;
var G__24257 = cljs.core.count.call(null,c__4351__auto__);
var G__24258 = (0);
seq__24229 = G__24255;
chunk__24230 = G__24256;
count__24231 = G__24257;
i__24232 = G__24258;
continue;
} else {
var vec__24236 = cljs.core.first.call(null,seq__24229__$1);
var effect_key = cljs.core.nth.call(null,vec__24236,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24236,(1),null);
var temp__5455__auto___24259 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___24259)){
var effect_fn_24260 = temp__5455__auto___24259;
effect_fn_24260.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24261 = cljs.core.next.call(null,seq__24229__$1);
var G__24262 = null;
var G__24263 = (0);
var G__24264 = (0);
seq__24229 = G__24261;
chunk__24230 = G__24262;
count__24231 = G__24263;
i__24232 = G__24264;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__24068__auto___24265 = re_frame.interop.now.call(null);
var duration__24069__auto___24266 = (end__24068__auto___24265 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24069__auto___24266,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__24068__auto___24265);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_24228;
}} else {
var seq__24239 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24240 = null;
var count__24241 = (0);
var i__24242 = (0);
while(true){
if((i__24242 < count__24241)){
var vec__24243 = cljs.core._nth.call(null,chunk__24240,i__24242);
var effect_key = cljs.core.nth.call(null,vec__24243,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24243,(1),null);
var temp__5455__auto___24267 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___24267)){
var effect_fn_24268 = temp__5455__auto___24267;
effect_fn_24268.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24269 = seq__24239;
var G__24270 = chunk__24240;
var G__24271 = count__24241;
var G__24272 = (i__24242 + (1));
seq__24239 = G__24269;
chunk__24240 = G__24270;
count__24241 = G__24271;
i__24242 = G__24272;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24239);
if(temp__5457__auto__){
var seq__24239__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24239__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__24239__$1);
var G__24273 = cljs.core.chunk_rest.call(null,seq__24239__$1);
var G__24274 = c__4351__auto__;
var G__24275 = cljs.core.count.call(null,c__4351__auto__);
var G__24276 = (0);
seq__24239 = G__24273;
chunk__24240 = G__24274;
count__24241 = G__24275;
i__24242 = G__24276;
continue;
} else {
var vec__24246 = cljs.core.first.call(null,seq__24239__$1);
var effect_key = cljs.core.nth.call(null,vec__24246,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24246,(1),null);
var temp__5455__auto___24277 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___24277)){
var effect_fn_24278 = temp__5455__auto___24277;
effect_fn_24278.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24279 = cljs.core.next.call(null,seq__24239__$1);
var G__24280 = null;
var G__24281 = (0);
var G__24282 = (0);
seq__24239 = G__24279;
chunk__24240 = G__24280;
count__24241 = G__24281;
i__24242 = G__24282;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24283 = cljs.core.seq.call(null,value);
var chunk__24284 = null;
var count__24285 = (0);
var i__24286 = (0);
while(true){
if((i__24286 < count__24285)){
var map__24287 = cljs.core._nth.call(null,chunk__24284,i__24286);
var map__24287__$1 = ((((!((map__24287 == null)))?(((((map__24287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24287):map__24287);
var effect = map__24287__$1;
var ms = cljs.core.get.call(null,map__24287__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24287__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24283,chunk__24284,count__24285,i__24286,map__24287,map__24287__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24283,chunk__24284,count__24285,i__24286,map__24287,map__24287__$1,effect,ms,dispatch))
,ms);
}


var G__24291 = seq__24283;
var G__24292 = chunk__24284;
var G__24293 = count__24285;
var G__24294 = (i__24286 + (1));
seq__24283 = G__24291;
chunk__24284 = G__24292;
count__24285 = G__24293;
i__24286 = G__24294;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24283);
if(temp__5457__auto__){
var seq__24283__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24283__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__24283__$1);
var G__24295 = cljs.core.chunk_rest.call(null,seq__24283__$1);
var G__24296 = c__4351__auto__;
var G__24297 = cljs.core.count.call(null,c__4351__auto__);
var G__24298 = (0);
seq__24283 = G__24295;
chunk__24284 = G__24296;
count__24285 = G__24297;
i__24286 = G__24298;
continue;
} else {
var map__24289 = cljs.core.first.call(null,seq__24283__$1);
var map__24289__$1 = ((((!((map__24289 == null)))?(((((map__24289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24289):map__24289);
var effect = map__24289__$1;
var ms = cljs.core.get.call(null,map__24289__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24289__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24283,chunk__24284,count__24285,i__24286,map__24289,map__24289__$1,effect,ms,dispatch,seq__24283__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24283,chunk__24284,count__24285,i__24286,map__24289,map__24289__$1,effect,ms,dispatch,seq__24283__$1,temp__5457__auto__))
,ms);
}


var G__24299 = cljs.core.next.call(null,seq__24283__$1);
var G__24300 = null;
var G__24301 = (0);
var G__24302 = (0);
seq__24283 = G__24299;
chunk__24284 = G__24300;
count__24285 = G__24301;
i__24286 = G__24302;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__24303 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__24304 = null;
var count__24305 = (0);
var i__24306 = (0);
while(true){
if((i__24306 < count__24305)){
var event = cljs.core._nth.call(null,chunk__24304,i__24306);
re_frame.router.dispatch.call(null,event);


var G__24307 = seq__24303;
var G__24308 = chunk__24304;
var G__24309 = count__24305;
var G__24310 = (i__24306 + (1));
seq__24303 = G__24307;
chunk__24304 = G__24308;
count__24305 = G__24309;
i__24306 = G__24310;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24303);
if(temp__5457__auto__){
var seq__24303__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24303__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__24303__$1);
var G__24311 = cljs.core.chunk_rest.call(null,seq__24303__$1);
var G__24312 = c__4351__auto__;
var G__24313 = cljs.core.count.call(null,c__4351__auto__);
var G__24314 = (0);
seq__24303 = G__24311;
chunk__24304 = G__24312;
count__24305 = G__24313;
i__24306 = G__24314;
continue;
} else {
var event = cljs.core.first.call(null,seq__24303__$1);
re_frame.router.dispatch.call(null,event);


var G__24315 = cljs.core.next.call(null,seq__24303__$1);
var G__24316 = null;
var G__24317 = (0);
var G__24318 = (0);
seq__24303 = G__24315;
chunk__24304 = G__24316;
count__24305 = G__24317;
i__24306 = G__24318;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__24319 = cljs.core.seq.call(null,value);
var chunk__24320 = null;
var count__24321 = (0);
var i__24322 = (0);
while(true){
if((i__24322 < count__24321)){
var event = cljs.core._nth.call(null,chunk__24320,i__24322);
clear_event.call(null,event);


var G__24323 = seq__24319;
var G__24324 = chunk__24320;
var G__24325 = count__24321;
var G__24326 = (i__24322 + (1));
seq__24319 = G__24323;
chunk__24320 = G__24324;
count__24321 = G__24325;
i__24322 = G__24326;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24319);
if(temp__5457__auto__){
var seq__24319__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24319__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__24319__$1);
var G__24327 = cljs.core.chunk_rest.call(null,seq__24319__$1);
var G__24328 = c__4351__auto__;
var G__24329 = cljs.core.count.call(null,c__4351__auto__);
var G__24330 = (0);
seq__24319 = G__24327;
chunk__24320 = G__24328;
count__24321 = G__24329;
i__24322 = G__24330;
continue;
} else {
var event = cljs.core.first.call(null,seq__24319__$1);
clear_event.call(null,event);


var G__24331 = cljs.core.next.call(null,seq__24319__$1);
var G__24332 = null;
var G__24333 = (0);
var G__24334 = (0);
seq__24319 = G__24331;
chunk__24320 = G__24332;
count__24321 = G__24333;
i__24322 = G__24334;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1534986032474
