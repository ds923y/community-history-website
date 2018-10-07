// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if((typeof ReactDOM !== 'undefined')){
return reagent.dom.imported = ReactDOM;
} else {
if((typeof require !== 'undefined')){
var or__3949__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_22571 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_22571){
return (function (){
var _STAR_always_update_STAR_22572 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_22572;
}});})(_STAR_always_update_STAR_22571))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_22571;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22574 = arguments.length;
switch (G__22574) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__22576_22580 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__22577_22581 = null;
var count__22578_22582 = (0);
var i__22579_22583 = (0);
while(true){
if((i__22579_22583 < count__22578_22582)){
var v_22584 = cljs.core._nth.call(null,chunk__22577_22581,i__22579_22583);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22584);


var G__22585 = seq__22576_22580;
var G__22586 = chunk__22577_22581;
var G__22587 = count__22578_22582;
var G__22588 = (i__22579_22583 + (1));
seq__22576_22580 = G__22585;
chunk__22577_22581 = G__22586;
count__22578_22582 = G__22587;
i__22579_22583 = G__22588;
continue;
} else {
var temp__5457__auto___22589 = cljs.core.seq.call(null,seq__22576_22580);
if(temp__5457__auto___22589){
var seq__22576_22590__$1 = temp__5457__auto___22589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22576_22590__$1)){
var c__4351__auto___22591 = cljs.core.chunk_first.call(null,seq__22576_22590__$1);
var G__22592 = cljs.core.chunk_rest.call(null,seq__22576_22590__$1);
var G__22593 = c__4351__auto___22591;
var G__22594 = cljs.core.count.call(null,c__4351__auto___22591);
var G__22595 = (0);
seq__22576_22580 = G__22592;
chunk__22577_22581 = G__22593;
count__22578_22582 = G__22594;
i__22579_22583 = G__22595;
continue;
} else {
var v_22596 = cljs.core.first.call(null,seq__22576_22590__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22596);


var G__22597 = cljs.core.next.call(null,seq__22576_22590__$1);
var G__22598 = null;
var G__22599 = (0);
var G__22600 = (0);
seq__22576_22580 = G__22597;
chunk__22577_22581 = G__22598;
count__22578_22582 = G__22599;
i__22579_22583 = G__22600;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1534986028740
