// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
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
mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__36837 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__36838 = null;
var count__36839 = (0);
var i__36840 = (0);
while(true){
if((i__36840 < count__36839)){
var vec__36841 = cljs.core._nth.call(null,chunk__36838,i__36840);
var effect_key = cljs.core.nth.call(null,vec__36841,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36841,(1),null);
var temp__5455__auto___36847 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___36847)){
var effect_fn_36848 = temp__5455__auto___36847;
effect_fn_36848.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__36849 = seq__36837;
var G__36850 = chunk__36838;
var G__36851 = count__36839;
var G__36852 = (i__36840 + (1));
seq__36837 = G__36849;
chunk__36838 = G__36850;
count__36839 = G__36851;
i__36840 = G__36852;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36837);
if(temp__5457__auto__){
var seq__36837__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36837__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36837__$1);
var G__36853 = cljs.core.chunk_rest.call(null,seq__36837__$1);
var G__36854 = c__4351__auto__;
var G__36855 = cljs.core.count.call(null,c__4351__auto__);
var G__36856 = (0);
seq__36837 = G__36853;
chunk__36838 = G__36854;
count__36839 = G__36855;
i__36840 = G__36856;
continue;
} else {
var vec__36844 = cljs.core.first.call(null,seq__36837__$1);
var effect_key = cljs.core.nth.call(null,vec__36844,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36844,(1),null);
var temp__5455__auto___36857 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___36857)){
var effect_fn_36858 = temp__5455__auto___36857;
effect_fn_36858.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__36859 = cljs.core.next.call(null,seq__36837__$1);
var G__36860 = null;
var G__36861 = (0);
var G__36862 = (0);
seq__36837 = G__36859;
chunk__36838 = G__36860;
count__36839 = G__36861;
i__36840 = G__36862;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__36863 = cljs.core.seq.call(null,value);
var chunk__36864 = null;
var count__36865 = (0);
var i__36866 = (0);
while(true){
if((i__36866 < count__36865)){
var map__36867 = cljs.core._nth.call(null,chunk__36864,i__36866);
var map__36867__$1 = ((((!((map__36867 == null)))?(((((map__36867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36867):map__36867);
var effect = map__36867__$1;
var ms = cljs.core.get.call(null,map__36867__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36867__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36863,chunk__36864,count__36865,i__36866,map__36867,map__36867__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__36863,chunk__36864,count__36865,i__36866,map__36867,map__36867__$1,effect,ms,dispatch))
,ms);
}


var G__36871 = seq__36863;
var G__36872 = chunk__36864;
var G__36873 = count__36865;
var G__36874 = (i__36866 + (1));
seq__36863 = G__36871;
chunk__36864 = G__36872;
count__36865 = G__36873;
i__36866 = G__36874;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36863);
if(temp__5457__auto__){
var seq__36863__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36863__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36863__$1);
var G__36875 = cljs.core.chunk_rest.call(null,seq__36863__$1);
var G__36876 = c__4351__auto__;
var G__36877 = cljs.core.count.call(null,c__4351__auto__);
var G__36878 = (0);
seq__36863 = G__36875;
chunk__36864 = G__36876;
count__36865 = G__36877;
i__36866 = G__36878;
continue;
} else {
var map__36869 = cljs.core.first.call(null,seq__36863__$1);
var map__36869__$1 = ((((!((map__36869 == null)))?(((((map__36869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36869):map__36869);
var effect = map__36869__$1;
var ms = cljs.core.get.call(null,map__36869__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36869__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36863,chunk__36864,count__36865,i__36866,map__36869,map__36869__$1,effect,ms,dispatch,seq__36863__$1,temp__5457__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__36863,chunk__36864,count__36865,i__36866,map__36869,map__36869__$1,effect,ms,dispatch,seq__36863__$1,temp__5457__auto__))
,ms);
}


var G__36879 = cljs.core.next.call(null,seq__36863__$1);
var G__36880 = null;
var G__36881 = (0);
var G__36882 = (0);
seq__36863 = G__36879;
chunk__36864 = G__36880;
count__36865 = G__36881;
i__36866 = G__36882;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__36883 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__36884 = null;
var count__36885 = (0);
var i__36886 = (0);
while(true){
if((i__36886 < count__36885)){
var event = cljs.core._nth.call(null,chunk__36884,i__36886);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__36887 = seq__36883;
var G__36888 = chunk__36884;
var G__36889 = count__36885;
var G__36890 = (i__36886 + (1));
seq__36883 = G__36887;
chunk__36884 = G__36888;
count__36885 = G__36889;
i__36886 = G__36890;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36883);
if(temp__5457__auto__){
var seq__36883__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36883__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36883__$1);
var G__36891 = cljs.core.chunk_rest.call(null,seq__36883__$1);
var G__36892 = c__4351__auto__;
var G__36893 = cljs.core.count.call(null,c__4351__auto__);
var G__36894 = (0);
seq__36883 = G__36891;
chunk__36884 = G__36892;
count__36885 = G__36893;
i__36886 = G__36894;
continue;
} else {
var event = cljs.core.first.call(null,seq__36883__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__36895 = cljs.core.next.call(null,seq__36883__$1);
var G__36896 = null;
var G__36897 = (0);
var G__36898 = (0);
seq__36883 = G__36895;
chunk__36884 = G__36896;
count__36885 = G__36897;
i__36886 = G__36898;
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__36899 = cljs.core.seq.call(null,value);
var chunk__36900 = null;
var count__36901 = (0);
var i__36902 = (0);
while(true){
if((i__36902 < count__36901)){
var event = cljs.core._nth.call(null,chunk__36900,i__36902);
clear_event.call(null,event);


var G__36903 = seq__36899;
var G__36904 = chunk__36900;
var G__36905 = count__36901;
var G__36906 = (i__36902 + (1));
seq__36899 = G__36903;
chunk__36900 = G__36904;
count__36901 = G__36905;
i__36902 = G__36906;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36899);
if(temp__5457__auto__){
var seq__36899__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36899__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36899__$1);
var G__36907 = cljs.core.chunk_rest.call(null,seq__36899__$1);
var G__36908 = c__4351__auto__;
var G__36909 = cljs.core.count.call(null,c__4351__auto__);
var G__36910 = (0);
seq__36899 = G__36907;
chunk__36900 = G__36908;
count__36901 = G__36909;
i__36902 = G__36910;
continue;
} else {
var event = cljs.core.first.call(null,seq__36899__$1);
clear_event.call(null,event);


var G__36911 = cljs.core.next.call(null,seq__36899__$1);
var G__36912 = null;
var G__36913 = (0);
var G__36914 = (0);
seq__36899 = G__36911;
chunk__36900 = G__36912;
count__36901 = G__36913;
i__36902 = G__36914;
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1534986055257
