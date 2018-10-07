// Compiled by ClojureScript 1.10.339 {}
goog.provide('nplay_stocks.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('nplay_stocks.db');
goog.require('nplay_stocks.graphics');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nplay-stocks.events","initialize-db","nplay-stocks.events/initialize-db",948322173),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__24611__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__24612__auto__ = nplay_stocks.db.default_db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__24612__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__24612__auto__;
}catch (e30521){var e = e30521;
throw e;
}}):(function (_,___$1){
return nplay_stocks.db.default_db;
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nplay-stocks.events","set-re-pressed-example","nplay-stocks.events/set-re-pressed-example",-2083436583),(function (db,p__30522){
var vec__30523 = p__30522;
var _ = cljs.core.nth.call(null,vec__30523,(0),null);
var value = cljs.core.nth.call(null,vec__30523,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"store-text","store-text",395321315),(function (db,p__30526){
var vec__30527 = p__30526;
var nm = cljs.core.nth.call(null,vec__30527,(0),null);
var search_text = cljs.core.nth.call(null,vec__30527,(1),null);
cljs.core.println.call(null,search_text);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-text","search-text",1559451259),search_text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-dom-node","send-dom-node",-783256692),(function (db,p__30530){
var vec__30531 = p__30530;
var nm = cljs.core.nth.call(null,vec__30531,(0),null);
var dom_node = cljs.core.nth.call(null,vec__30531,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dom-node","dom-node",452283727),dom_node);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-it","request-it",-900096096),(function (p__30534,_){
var map__30535 = p__30534;
var map__30535__$1 = ((((!((map__30535 == null)))?(((((map__30535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30535):map__30535);
var db = cljs.core.get.call(null,map__30535__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-twirly","show-twirly",1191467838),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8080/api/vasebi/main/results-list?ticker=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"search-text","search-text",1559451259).cljs$core$IFn$_invoke$arity$1(db))].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-http-result","bad-http-result",770783148)], null)], null)], null);
}));
nplay_stocks.events.process_row = (function nplay_stocks$events$process_row(p__30537){
var vec__30538 = p__30537;
var m = cljs.core.nth.call(null,vec__30538,(0),null);
return cljs.core.update.call(null,m,new cljs.core.Keyword("stock","date","stock/date",-1908753876),((function (vec__30538,m){
return (function (date){

return date;
});})(vec__30538,m))
);
});
nplay_stocks.events.make_response = (function nplay_stocks$events$make_response(result){
var row = cljs.core.mapv.call(null,nplay_stocks.events.process_row,result);
return cljs.core.take_last.call(null,(200),cljs.core.sort_by.call(null,new cljs.core.Keyword("stock","date","stock/date",-1908753876),row));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__30541){
var vec__30542 = p__30541;
var _ = cljs.core.nth.call(null,vec__30542,(0),null);
var response = cljs.core.nth.call(null,vec__30542,(1),null);
var rsp_30545 = nplay_stocks.events.make_response.call(null,response);
cljs.core.println.call(null,rsp_30545);

nplay_stocks.graphics.associate_graphic.call(null,new cljs.core.Keyword(null,"dom-node","dom-node",452283727).cljs$core$IFn$_invoke$arity$1(db),rsp_30545);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-http-result","bad-http-result",770783148),(function (db,p__30546){
var vec__30547 = p__30546;
var _ = cljs.core.nth.call(null,vec__30547,(0),null);
var response = cljs.core.nth.call(null,vec__30547,(1),null);
cljs.core.println.call(null,"http error");

return db;
}));

//# sourceMappingURL=events.js.map?rel=1537206478822
