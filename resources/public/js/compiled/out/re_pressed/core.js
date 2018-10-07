// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_pressed.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_pressed.impl');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),(function (_,p__24591){
var vec__24592 = p__24591;
var ___$1 = cljs.core.nth.call(null,vec__24592,(0),null);
var event_type = cljs.core.nth.call(null,vec__24592,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-pressed.core","keyboard-event","re-pressed.core/keyboard-event",-1923839752),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),(function (p__24595,p__24596){
var map__24597 = p__24595;
var map__24597__$1 = ((((!((map__24597 == null)))?(((((map__24597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24597):map__24597);
var db = cljs.core.get.call(null,map__24597__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24598 = p__24596;
var _ = cljs.core.nth.call(null,vec__24598,(0),null);
var map__24601 = cljs.core.nth.call(null,vec__24598,(1),null);
var map__24601__$1 = ((((!((map__24601 == null)))?(((((map__24601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24601):map__24601);
var opts = map__24601__$1;
var event_keys = cljs.core.get.call(null,map__24601__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.call(null,map__24601__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.call(null,map__24601__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
var prevent_default_keys = cljs.core.get.call(null,map__24601__$1,new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("re-pressed.core","set-keypress-rules","re-pressed.core/set-keypress-rules",1541561860),(function (p__24604,p__24605){
var map__24606 = p__24604;
var map__24606__$1 = ((((!((map__24606 == null)))?(((((map__24606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24606):map__24606);
var db = cljs.core.get.call(null,map__24606__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24607 = p__24605;
var _ = cljs.core.nth.call(null,vec__24607,(0),null);
var map__24610 = cljs.core.nth.call(null,vec__24607,(1),null);
var map__24610__$1 = ((((!((map__24610 == null)))?(((((map__24610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24610):map__24610);
var opts = map__24610__$1;
var event_keys = cljs.core.get.call(null,map__24610__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.call(null,map__24610__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.call(null,map__24610__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("re-pressed.core","set-keyup-rules","re-pressed.core/set-keyup-rules",519284589),(function (p__24613,p__24614){
var map__24615 = p__24613;
var map__24615__$1 = ((((!((map__24615 == null)))?(((((map__24615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24615):map__24615);
var db = cljs.core.get.call(null,map__24615__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24616 = p__24614;
var _ = cljs.core.nth.call(null,vec__24616,(0),null);
var map__24619 = cljs.core.nth.call(null,vec__24616,(1),null);
var map__24619__$1 = ((((!((map__24619 == null)))?(((((map__24619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24619):map__24619);
var opts = map__24619__$1;
var event_keys = cljs.core.get.call(null,map__24619__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.call(null,map__24619__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.call(null,map__24619__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));

//# sourceMappingURL=core.js.map?rel=1534986033084
