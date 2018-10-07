// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_pressed.impl');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('re_frame.core');
goog.require('cljsjs.jquery');
re_pressed.impl.ns_root = "re-pressed.core/";
re_pressed.impl.max_record = (25);
re_pressed.impl.modifier_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(91),null,(17),null,(16),null,(18),null], null), null);
re_pressed.impl.__GT_ns_keyword = (function re_pressed$impl$__GT_ns_keyword(event_type){
return (function() {
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword = null;
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0 = (function (){
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword.call(null,null);
});
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1 = (function (suffix){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_pressed.impl.ns_root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));
});
re_pressed$impl$__GT_ns_keyword_$_ns_keyword = function(suffix){
switch(arguments.length){
case 0:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0.call(this);
case 1:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1.call(this,suffix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$0 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0;
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1;
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword;
})()
});
re_pressed.impl.is_key_QMARK_ = (function re_pressed$impl$is_key_QMARK_(recent_key,key_map){
return cljs.core.every_QMARK_.call(null,(function (p__24542){
var vec__24543 = p__24542;
var k = cljs.core.nth.call(null,vec__24543,(0),null);
var v = cljs.core.nth.call(null,vec__24543,(1),null);
return cljs.core._EQ_.call(null,cljs.core.get.call(null,recent_key,k),v);
}),key_map);
});
re_pressed.impl.register_subs = (function re_pressed$impl$register_subs(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword.call(null,event_type);
re_frame.core.reg_sub.call(null,ns_keyword.call(null,"-keys"),((function (ns_keyword){
return (function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
});})(ns_keyword))
);

re_frame.core.reg_sub.call(null,ns_keyword.call(null,"-event-keys"),((function (ns_keyword){
return (function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null));
});})(ns_keyword))
);

re_frame.core.reg_sub.call(null,ns_keyword.call(null,"-clear-keys"),((function (ns_keyword){
return (function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null));
});})(ns_keyword))
);

re_frame.core.reg_sub.call(null,ns_keyword.call(null,"-always-listen-keys"),((function (ns_keyword){
return (function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null));
});})(ns_keyword))
);

if(cljs.core._EQ_.call(null,"keydown",event_type)){
return re_frame.core.reg_sub.call(null,ns_keyword.call(null,"-prevent-default-keys"),((function (ns_keyword){
return (function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null));
});})(ns_keyword))
);
} else {
return null;
}
});
re_pressed.impl.__GT_set_key_BANG_ = (function re_pressed$impl$__GT_set_key_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword.call(null,event_type);
return ((function (ns_keyword){
return (function re_pressed$impl$__GT_set_key_BANG__$_set_key_BANG_(p__24546,p__24547){
var map__24548 = p__24546;
var map__24548__$1 = ((((!((map__24548 == null)))?(((((map__24548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24548):map__24548);
var db = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24549 = p__24547;
var _ = cljs.core.nth.call(null,vec__24549,(0),null);
var key_map = cljs.core.nth.call(null,vec__24549,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),((function (map__24548,map__24548__$1,db,vec__24549,_,key_map,ns_keyword){
return (function (key_maps){
var keys = (cljs.core.truth_(key_map)?cljs.core.conj.call(null,(function (){var or__3949__auto__ = key_maps;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),key_map):key_maps);

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take_last.call(null,re_pressed.impl.max_record,keys));
});})(map__24548,map__24548__$1,db,vec__24549,_,key_map,ns_keyword))
)], null);
});
;})(ns_keyword))
});
re_pressed.impl.__GT_clear_keys_BANG_ = (function re_pressed$impl$__GT_clear_keys_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword.call(null,event_type);
return ((function (ns_keyword){
return (function re_pressed$impl$__GT_clear_keys_BANG__$_clear_keys_BANG_(p__24553,p__24554){
var map__24555 = p__24553;
var map__24555__$1 = ((((!((map__24555 == null)))?(((((map__24555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24555):map__24555);
var db = cljs.core.get.call(null,map__24555__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24556 = p__24554;
var _ = cljs.core.nth.call(null,vec__24556,(0),null);
var key_map = cljs.core.nth.call(null,vec__24556,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),cljs.core.PersistentVector.EMPTY)], null);
});
;})(ns_keyword))
});
re_pressed.impl.prevent_default_keys_BANG_ = (function re_pressed$impl$prevent_default_keys_BANG_(_,p__24560){
var vec__24561 = p__24560;
var ___$1 = cljs.core.nth.call(null,vec__24561,(0),null);
var e = cljs.core.nth.call(null,vec__24561,(1),null);
var k = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_pressed.impl.ns_root),"prevent-default"].join(''));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,e]);
});
re_pressed.impl.register_events = (function re_pressed$impl$register_events(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword.call(null,event_type);
re_frame.core.reg_event_fx.call(null,ns_keyword.call(null,"-set-key"),re_pressed.impl.__GT_set_key_BANG_.call(null,event_type));

re_frame.core.reg_event_fx.call(null,ns_keyword.call(null,"-clear-keys"),re_pressed.impl.__GT_clear_keys_BANG_.call(null,event_type));

if(cljs.core._EQ_.call(null,"keydown",event_type)){
return re_frame.core.reg_event_fx.call(null,ns_keyword.call(null,"-prevent-default-keys"),re_pressed.impl.prevent_default_keys_BANG_);
} else {
return null;
}
});
re_pressed.impl.register_effects = (function re_pressed$impl$register_effects(event_type){
if(cljs.core._EQ_.call(null,"keydown",event_type)){
return re_frame.core.reg_fx.call(null,cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_pressed.impl.ns_root),"prevent-default"].join('')),(function (e){
return e.preventDefault();
}));
} else {
return null;
}
});
re_frame.core.reg_fx.call(null,cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_pressed.impl.ns_root),"keyboard-event"].join('')),(function (p__24569){
var map__24570 = p__24569;
var map__24570__$1 = ((((!((map__24570 == null)))?(((((map__24570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24570):map__24570);
var event_type = cljs.core.get.call(null,map__24570__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
re_pressed.impl.register_subs.call(null,event_type);

re_pressed.impl.register_events.call(null,event_type);

re_pressed.impl.register_effects.call(null,event_type);

return $(document).on(event_type,((function (map__24570,map__24570__$1,event_type){
return (function (e){
var ns_keyword = re_pressed.impl.__GT_ns_keyword.call(null,event_type);
var e_key = e.which;
var modifier_key_QMARK_ = re_pressed.impl.modifier_keys.call(null,e_key);
var tag_name = e.target.tagName;
var entering_input_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
var hit_key = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"altKey","altKey",-670253656),e.altKey,new cljs.core.Keyword(null,"ctrlKey","ctrlKey",430760908),e.ctrlKey,new cljs.core.Keyword(null,"metaKey","metaKey",1006742180),e.metaKey,new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),e.shiftKey,new cljs.core.Keyword(null,"which","which",-1255268941),e.which], null);
var always_listen_keys = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null,"-always-listen-keys")], null)));
var always_listen_QMARK_ = cljs.core.some.call(null,((function (ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,map__24570,map__24570__$1,event_type){
return (function (p1__24564_SHARP_){
return re_pressed.impl.is_key_QMARK_.call(null,hit_key,p1__24564_SHARP_);
});})(ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,map__24570,map__24570__$1,event_type))
,always_listen_keys);
if(cljs.core.truth_((function (){var or__3949__auto__ = ((cljs.core.not.call(null,modifier_key_QMARK_)) && (!(entering_input_QMARK_)));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return always_listen_QMARK_;
}
})())){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null,"-set-key"),hit_key], null));

var recent_keys = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null,"-keys")], null)));
var event_keys = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null,"-event-keys")], null)));
var clear_keys = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null,"-clear-keys")], null)));
var recent_key = cljs.core.last.call(null,recent_keys);
var is_key_sequence_QMARK_ = ((function (recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type){
return (function (key_maps){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.mapv.call(null,((function (recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type){
return (function (p1__24565_SHARP_,p2__24566_SHARP_){
return re_pressed.impl.is_key_QMARK_.call(null,p1__24565_SHARP_,p2__24566_SHARP_);
});})(recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type))
,cljs.core.concat.call(null,cljs.core.reverse.call(null,recent_keys),cljs.core.repeat.call(null,re_pressed.impl.max_record,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.reverse.call(null,key_maps)));
});})(recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type))
;
var check_events = cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type){
return (function re_pressed$impl$iter__24575(s__24576){
return (new cljs.core.LazySeq(null,((function (recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type){
return (function (){
var s__24576__$1 = s__24576;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24576__$1);
if(temp__5457__auto__){
var s__24576__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24576__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24576__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24578 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24577 = (0);
while(true){
if((i__24577 < size__4323__auto__)){
var vec__24579 = cljs.core._nth.call(null,c__4322__auto__,i__24577);
var seq__24580 = cljs.core.seq.call(null,vec__24579);
var first__24581 = cljs.core.first.call(null,seq__24580);
var seq__24580__$1 = cljs.core.next.call(null,seq__24580);
var trigger_event = first__24581;
var ks = seq__24580__$1;
cljs.core.chunk_append.call(null,b__24578,(function (){var triggered_QMARK_ = cljs.core.some.call(null,is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})());

var G__24586 = (i__24577 + (1));
i__24577 = G__24586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24578),re_pressed$impl$iter__24575.call(null,cljs.core.chunk_rest.call(null,s__24576__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24578),null);
}
} else {
var vec__24582 = cljs.core.first.call(null,s__24576__$2);
var seq__24583 = cljs.core.seq.call(null,vec__24582);
var first__24584 = cljs.core.first.call(null,seq__24583);
var seq__24583__$1 = cljs.core.next.call(null,seq__24583);
var trigger_event = first__24584;
var ks = seq__24583__$1;
return cljs.core.cons.call(null,(function (){var triggered_QMARK_ = cljs.core.some.call(null,is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})(),re_pressed$impl$iter__24575.call(null,cljs.core.rest.call(null,s__24576__$2)));
}
} else {
return null;
}
break;
}
});})(recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type))
,null,null));
});})(recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type))
;
return iter__4324__auto__.call(null,event_keys);
})());
var vec__24572 = (function (){var G__24585 = check_events;
var G__24585__$1 = (((G__24585 == null))?null:cljs.core.filter.call(null,((function (G__24585,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type){
return (function (p1__24567_SHARP_){
return cljs.core.second.call(null,p1__24567_SHARP_) === true;
});})(G__24585,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type))
,G__24585));
if((G__24585__$1 == null)){
return null;
} else {
return cljs.core.first.call(null,G__24585__$1);
}
})();
var triggered_event = cljs.core.nth.call(null,vec__24572,(0),null);
var event_QMARK_ = cljs.core.nth.call(null,vec__24572,(1),null);
var clear_QMARK_ = cljs.core.some.call(null,is_key_sequence_QMARK_,clear_keys);
if(cljs.core._EQ_.call(null,"keydown",event_type)){
var prevent_default_keys_24587 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null,"-prevent-default-keys")], null)));
var prevent_default_QMARK__24588 = cljs.core.some.call(null,((function (prevent_default_keys_24587,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,vec__24572,triggered_event,event_QMARK_,clear_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type){
return (function (p1__24568_SHARP_){
return re_pressed.impl.is_key_QMARK_.call(null,recent_key,p1__24568_SHARP_);
});})(prevent_default_keys_24587,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,vec__24572,triggered_event,event_QMARK_,clear_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,map__24570,map__24570__$1,event_type))
,prevent_default_keys_24587);
if(cljs.core.truth_(prevent_default_QMARK__24588)){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null,"-prevent-default-keys"),e], null));
} else {
}
} else {
}

if(cljs.core.truth_(clear_QMARK_)){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword.call(null,"-clear-keys")], null));
} else {
if(cljs.core.truth_(event_QMARK_)){
return re_frame.core.dispatch_sync.call(null,cljs.core.conj.call(null,triggered_event,e,recent_keys));
} else {
return null;

}
}
} else {
return null;
}
});})(map__24570,map__24570__$1,event_type))
);
}));

//# sourceMappingURL=impl.js.map?rel=1534986033038
