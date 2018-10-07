// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.template');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('mranderson048.reagent.v0v7v0.reagent.interop');
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.dom.imported !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.dom.imported = null;
}
mranderson048.reagent.v0v7v0.reagent.dom.module = (function mranderson048$reagent$v0v7v0$reagent$dom$module(){
if(!((mranderson048.reagent.v0v7v0.reagent.dom.imported == null))){
return mranderson048.reagent.v0v7v0.reagent.dom.imported;
} else {
if((typeof ReactDOM !== 'undefined')){
return mranderson048.reagent.v0v7v0.reagent.dom.imported = ReactDOM;
} else {
if((typeof require !== 'undefined')){
var or__3949__auto__ = mranderson048.reagent.v0v7v0.reagent.dom.imported = require("react-dom");
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
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.dom.roots !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mranderson048.reagent.v0v7v0.reagent.dom.unmount_comp = (function mranderson048$reagent$v0v7v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.dom.roots,cljs.core.dissoc,container);

return (mranderson048.reagent.v0v7v0.reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
mranderson048.reagent.v0v7v0.reagent.dom.render_comp = (function mranderson048$reagent$v0v7v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_36133 = mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (mranderson048.reagent.v0v7v0.reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_36133){
return (function (){
var _STAR_always_update_STAR_36134 = mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson048.reagent.v0v7v0.reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36134;
}});})(_STAR_always_update_STAR_36133))
);
}finally {mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36133;
}});
mranderson048.reagent.v0v7v0.reagent.dom.re_render_component = (function mranderson048$reagent$v0v7v0$reagent$dom$re_render_component(comp,container){
return mranderson048.reagent.v0v7v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson048.reagent.v0v7v0.reagent.dom.render = (function mranderson048$reagent$v0v7v0$reagent$dom$render(var_args){
var G__36136 = arguments.length;
switch (G__36136) {
case 2:
return mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson048.reagent.v0v7v0.reagent.dom.render.call(null,comp,container,null);
});

mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return mranderson048.reagent.v0v7v0.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return mranderson048.reagent.v0v7v0.reagent.dom.render_comp.call(null,f,container,callback);
});

mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson048.reagent.v0v7v0.reagent.dom.unmount_component_at_node = (function mranderson048$reagent$v0v7v0$reagent$dom$unmount_component_at_node(container){
return mranderson048.reagent.v0v7v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson048.reagent.v0v7v0.reagent.dom.dom_node = (function mranderson048$reagent$v0v7v0$reagent$dom$dom_node(this$){
return (mranderson048.reagent.v0v7v0.reagent.dom.module.call(null)["findDOMNode"])(this$);
});
mranderson048.reagent.v0v7v0.reagent.impl.template.find_dom_node = mranderson048.reagent.v0v7v0.reagent.dom.dom_node;
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
mranderson048.reagent.v0v7v0.reagent.dom.force_update_all = (function mranderson048$reagent$v0v7v0$reagent$dom$force_update_all(){
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var seq__36138_36142 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.dom.roots)));
var chunk__36139_36143 = null;
var count__36140_36144 = (0);
var i__36141_36145 = (0);
while(true){
if((i__36141_36145 < count__36140_36144)){
var v_36146 = cljs.core._nth.call(null,chunk__36139_36143,i__36141_36145);
cljs.core.apply.call(null,mranderson048.reagent.v0v7v0.reagent.dom.re_render_component,v_36146);


var G__36147 = seq__36138_36142;
var G__36148 = chunk__36139_36143;
var G__36149 = count__36140_36144;
var G__36150 = (i__36141_36145 + (1));
seq__36138_36142 = G__36147;
chunk__36139_36143 = G__36148;
count__36140_36144 = G__36149;
i__36141_36145 = G__36150;
continue;
} else {
var temp__5457__auto___36151 = cljs.core.seq.call(null,seq__36138_36142);
if(temp__5457__auto___36151){
var seq__36138_36152__$1 = temp__5457__auto___36151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36138_36152__$1)){
var c__4351__auto___36153 = cljs.core.chunk_first.call(null,seq__36138_36152__$1);
var G__36154 = cljs.core.chunk_rest.call(null,seq__36138_36152__$1);
var G__36155 = c__4351__auto___36153;
var G__36156 = cljs.core.count.call(null,c__4351__auto___36153);
var G__36157 = (0);
seq__36138_36142 = G__36154;
chunk__36139_36143 = G__36155;
count__36140_36144 = G__36156;
i__36141_36145 = G__36157;
continue;
} else {
var v_36158 = cljs.core.first.call(null,seq__36138_36152__$1);
cljs.core.apply.call(null,mranderson048.reagent.v0v7v0.reagent.dom.re_render_component,v_36158);


var G__36159 = cljs.core.next.call(null,seq__36138_36152__$1);
var G__36160 = null;
var G__36161 = (0);
var G__36162 = (0);
seq__36138_36142 = G__36159;
chunk__36139_36143 = G__36160;
count__36140_36144 = G__36161;
i__36141_36145 = G__36162;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1534986054152
