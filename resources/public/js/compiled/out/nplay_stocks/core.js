// Compiled by ClojureScript 1.10.339 {}
goog.provide('nplay_stocks.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_pressed.core');
goog.require('nplay_stocks.events');
goog.require('nplay_stocks.views');
goog.require('nplay_stocks.config');
nplay_stocks.core.dev_setup = (function nplay_stocks$core$dev_setup(){
if(nplay_stocks.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
nplay_stocks.core.mount_root = (function nplay_stocks$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nplay_stocks.views.main_panel], null),document.getElementById("app"));
});
nplay_stocks.core.init = (function nplay_stocks$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nplay-stocks.events","initialize-db","nplay-stocks.events/initialize-db",948322173)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),"keydown"], null));

nplay_stocks.core.dev_setup.call(null);

return nplay_stocks.core.mount_root.call(null);
});
goog.exportSymbol('nplay_stocks.core.init', nplay_stocks.core.init);

//# sourceMappingURL=core.js.map?rel=1537206478869
