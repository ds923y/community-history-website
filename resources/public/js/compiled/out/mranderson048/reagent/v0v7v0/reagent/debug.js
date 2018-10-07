// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v7v0.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug.warnings !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug.track_console !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35871__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35872__i = 0, G__35872__a = new Array(arguments.length -  0);
while (G__35872__i < G__35872__a.length) {G__35872__a[G__35872__i] = arguments[G__35872__i + 0]; ++G__35872__i;}
  args = new cljs.core.IndexedSeq(G__35872__a,0,null);
} 
return G__35871__delegate.call(this,args);};
G__35871.cljs$lang$maxFixedArity = 0;
G__35871.cljs$lang$applyTo = (function (arglist__35873){
var args = cljs.core.seq(arglist__35873);
return G__35871__delegate(args);
});
G__35871.cljs$core$IFn$_invoke$arity$variadic = G__35871__delegate;
return G__35871;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35874__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35875__i = 0, G__35875__a = new Array(arguments.length -  0);
while (G__35875__i < G__35875__a.length) {G__35875__a[G__35875__i] = arguments[G__35875__i + 0]; ++G__35875__i;}
  args = new cljs.core.IndexedSeq(G__35875__a,0,null);
} 
return G__35874__delegate.call(this,args);};
G__35874.cljs$lang$maxFixedArity = 0;
G__35874.cljs$lang$applyTo = (function (arglist__35876){
var args = cljs.core.seq(arglist__35876);
return G__35874__delegate(args);
});
G__35874.cljs$core$IFn$_invoke$arity$variadic = G__35874__delegate;
return G__35874;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1534986053181
