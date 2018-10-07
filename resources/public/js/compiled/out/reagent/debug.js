// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22154__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22155__i = 0, G__22155__a = new Array(arguments.length -  0);
while (G__22155__i < G__22155__a.length) {G__22155__a[G__22155__i] = arguments[G__22155__i + 0]; ++G__22155__i;}
  args = new cljs.core.IndexedSeq(G__22155__a,0,null);
} 
return G__22154__delegate.call(this,args);};
G__22154.cljs$lang$maxFixedArity = 0;
G__22154.cljs$lang$applyTo = (function (arglist__22156){
var args = cljs.core.seq(arglist__22156);
return G__22154__delegate(args);
});
G__22154.cljs$core$IFn$_invoke$arity$variadic = G__22154__delegate;
return G__22154;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22157__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22158__i = 0, G__22158__a = new Array(arguments.length -  0);
while (G__22158__i < G__22158__a.length) {G__22158__a[G__22158__i] = arguments[G__22158__i + 0]; ++G__22158__i;}
  args = new cljs.core.IndexedSeq(G__22158__a,0,null);
} 
return G__22157__delegate.call(this,args);};
G__22157.cljs$lang$maxFixedArity = 0;
G__22157.cljs$lang$applyTo = (function (arglist__22159){
var args = cljs.core.seq(arglist__22159);
return G__22157__delegate(args);
});
G__22157.cljs$core$IFn$_invoke$arity$variadic = G__22157__delegate;
return G__22157;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1534986027331
