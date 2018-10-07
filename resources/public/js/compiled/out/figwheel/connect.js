// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__42277__delegate = function (x__42261__auto__){
if(cljs.core.truth_(nplay_stocks.core.mount_root)){
return cljs.core.apply.call(null,nplay_stocks.core.mount_root,x__42261__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("nplay-stocks.core/mount-root"),"' is missing"].join(''));
}
};
var G__42277 = function (var_args){
var x__42261__auto__ = null;
if (arguments.length > 0) {
var G__42278__i = 0, G__42278__a = new Array(arguments.length -  0);
while (G__42278__i < G__42278__a.length) {G__42278__a[G__42278__i] = arguments[G__42278__i + 0]; ++G__42278__i;}
  x__42261__auto__ = new cljs.core.IndexedSeq(G__42278__a,0,null);
} 
return G__42277__delegate.call(this,x__42261__auto__);};
G__42277.cljs$lang$maxFixedArity = 0;
G__42277.cljs$lang$applyTo = (function (arglist__42279){
var x__42261__auto__ = cljs.core.seq(arglist__42279);
return G__42277__delegate(x__42261__auto__);
});
G__42277.cljs$core$IFn$_invoke$arity$variadic = G__42277__delegate;
return G__42277;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1534986066437
