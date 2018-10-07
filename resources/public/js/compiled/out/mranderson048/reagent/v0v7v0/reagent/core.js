// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.core');
goog.require('cljs.core');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.template');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.component');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('mranderson048.reagent.v0v7v0.reagent.interop');
goog.require('mranderson048.reagent.v0v7v0.reagent.dom');
mranderson048.reagent.v0v7v0.reagent.core.is_client = mranderson048.reagent.v0v7v0.reagent.impl.util.is_client;
mranderson048.reagent.v0v7v0.reagent.core.react = mranderson048.reagent.v0v7v0.reagent.impl.util.react;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
mranderson048.reagent.v0v7v0.reagent.core.create_element = (function mranderson048$reagent$v0v7v0$reagent$core$create_element(var_args){
var G__36185 = arguments.length;
switch (G__36185) {
case 1:
return mranderson048.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___36187 = arguments.length;
var i__4532__auto___36188 = (0);
while(true){
if((i__4532__auto___36188 < len__4531__auto___36187)){
args_arr__4546__auto__.push((arguments[i__4532__auto___36188]));

var G__36189 = (i__4532__auto___36188 + (1));
i__4532__auto___36188 = G__36189;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return mranderson048.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

mranderson048.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return mranderson048.reagent.v0v7v0.reagent.core.create_element.call(null,type,null);
});

mranderson048.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,props))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return (mranderson048.reagent.v0v7v0.reagent.core.react["createElement"])(type,props);
});

mranderson048.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,props))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return (mranderson048.reagent.v0v7v0.reagent.core.react["createElement"])(type,props,child);
});

mranderson048.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,props))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.call(null,(mranderson048.reagent.v0v7v0.reagent.core.react["createElement"]),type,props,child,children);
});

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.core.create_element.cljs$lang$applyTo = (function (seq36181){
var G__36182 = cljs.core.first.call(null,seq36181);
var seq36181__$1 = cljs.core.next.call(null,seq36181);
var G__36183 = cljs.core.first.call(null,seq36181__$1);
var seq36181__$2 = cljs.core.next.call(null,seq36181__$1);
var G__36184 = cljs.core.first.call(null,seq36181__$2);
var seq36181__$3 = cljs.core.next.call(null,seq36181__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36182,G__36183,G__36184,seq36181__$3);
});

mranderson048.reagent.v0v7v0.reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
mranderson048.reagent.v0v7v0.reagent.core.as_element = (function mranderson048$reagent$v0v7v0$reagent$core$as_element(form){
return mranderson048.reagent.v0v7v0.reagent.impl.template.as_element.call(null,form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
mranderson048.reagent.v0v7v0.reagent.core.adapt_react_class = (function mranderson048$reagent$v0v7v0$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Component"," must not be nil"].join('')),"\n","c"].join('')));
}

return mranderson048.reagent.v0v7v0.reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
mranderson048.reagent.v0v7v0.reagent.core.reactify_component = (function mranderson048$reagent$v0v7v0$reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Component"," must not be nil"].join('')),"\n","c"].join('')));
}

return mranderson048.reagent.v0v7v0.reagent.impl.component.reactify_component.call(null,c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson048.reagent.v0v7v0.reagent.core.render = (function mranderson048$reagent$v0v7v0$reagent$core$render(var_args){
var G__36191 = arguments.length;
switch (G__36191) {
case 2:
return mranderson048.reagent.v0v7v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v7v0.reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.reagent.v0v7v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson048.reagent.v0v7v0.reagent.dom.render.call(null,comp,container);
});

mranderson048.reagent.v0v7v0.reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return mranderson048.reagent.v0v7v0.reagent.dom.render.call(null,comp,container,callback);
});

mranderson048.reagent.v0v7v0.reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
mranderson048.reagent.v0v7v0.reagent.core.unmount_component_at_node = (function mranderson048$reagent$v0v7v0$reagent$core$unmount_component_at_node(container){
return mranderson048.reagent.v0v7v0.reagent.dom.unmount_component_at_node.call(null,container);
});
mranderson048.reagent.v0v7v0.reagent.core.as_component = mranderson048.reagent.v0v7v0.reagent.core.as_element;
mranderson048.reagent.v0v7v0.reagent.core.render_component = mranderson048.reagent.v0v7v0.reagent.core.render;
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
mranderson048.reagent.v0v7v0.reagent.core.force_update_all = (function mranderson048$reagent$v0v7v0$reagent$core$force_update_all(){
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

mranderson048.reagent.v0v7v0.reagent.dom.force_update_all.call(null);

return mranderson048.reagent.v0v7v0.reagent.impl.batching.flush_after_render.call(null);
});
goog.exportSymbol('mranderson048.reagent.v0v7v0.reagent.core.force_update_all', mranderson048.reagent.v0v7v0.reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
mranderson048.reagent.v0v7v0.reagent.core.create_class = (function mranderson048$reagent$v0v7v0$reagent$core$create_class(spec){
return mranderson048.reagent.v0v7v0.reagent.impl.component.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
mranderson048.reagent.v0v7v0.reagent.core.current_component = (function mranderson048$reagent$v0v7v0$reagent$core$current_component(){
return mranderson048.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
mranderson048.reagent.v0v7v0.reagent.core.state_atom = (function mranderson048$reagent$v0v7v0$reagent$core$state_atom(this$){
if(mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson048.reagent.v0v7v0.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson048.reagent.v0v7v0.reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
mranderson048.reagent.v0v7v0.reagent.core.state = (function mranderson048$reagent$v0v7v0$reagent$core$state(this$){
if(mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson048.reagent.v0v7v0.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
mranderson048.reagent.v0v7v0.reagent.core.replace_state = (function mranderson048$reagent$v0v7v0$reagent$core$replace_state(this$,new_state){
if(mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson048.reagent.v0v7v0.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a valid new state, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new_state))].join('')),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
mranderson048.reagent.v0v7v0.reagent.core.set_state = (function mranderson048$reagent$v0v7v0$reagent$core$set_state(this$,new_state){
if(mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson048.reagent.v0v7v0.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a valid new state, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new_state))].join('')),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
mranderson048.reagent.v0v7v0.reagent.core.force_update = (function mranderson048$reagent$v0v7v0$reagent$core$force_update(var_args){
var G__36194 = arguments.length;
switch (G__36194) {
case 1:
return mranderson048.reagent.v0v7v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.reagent.v0v7v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.reagent.v0v7v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return mranderson048.reagent.v0v7v0.reagent.core.force_update.call(null,this$,false);
});

mranderson048.reagent.v0v7v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

mranderson048.reagent.v0v7v0.reagent.impl.util.force_update.call(null,this$,deep);

return mranderson048.reagent.v0v7v0.reagent.impl.batching.flush_after_render.call(null);
});

mranderson048.reagent.v0v7v0.reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
mranderson048.reagent.v0v7v0.reagent.core.props = (function mranderson048$reagent$v0v7v0$reagent$core$props(this$){
if(mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson048.reagent.v0v7v0.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson048.reagent.v0v7v0.reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
mranderson048.reagent.v0v7v0.reagent.core.children = (function mranderson048$reagent$v0v7v0$reagent$core$children(this$){
if(mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson048.reagent.v0v7v0.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson048.reagent.v0v7v0.reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
mranderson048.reagent.v0v7v0.reagent.core.argv = (function mranderson048$reagent$v0v7v0$reagent$core$argv(this$){
if(mranderson048.reagent.v0v7v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson048.reagent.v0v7v0.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson048.reagent.v0v7v0.reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson048.reagent.v0v7v0.reagent.core.dom_node = (function mranderson048$reagent$v0v7v0$reagent$core$dom_node(this$){
return mranderson048.reagent.v0v7v0.reagent.dom.dom_node.call(null,this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
mranderson048.reagent.v0v7v0.reagent.core.merge_props = (function mranderson048$reagent$v0v7v0$reagent$core$merge_props(defaults,props){
return mranderson048.reagent.v0v7v0.reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
mranderson048.reagent.v0v7v0.reagent.core.flush = (function mranderson048$reagent$v0v7v0$reagent$core$flush(){
return mranderson048.reagent.v0v7v0.reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
mranderson048.reagent.v0v7v0.reagent.core.atom = (function mranderson048$reagent$v0v7v0$reagent$core$atom(var_args){
var G__36199 = arguments.length;
switch (G__36199) {
case 1:
return mranderson048.reagent.v0v7v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___36201 = arguments.length;
var i__4532__auto___36202 = (0);
while(true){
if((i__4532__auto___36202 < len__4531__auto___36201)){
args_arr__4546__auto__.push((arguments[i__4532__auto___36202]));

var G__36203 = (i__4532__auto___36202 + (1));
i__4532__auto___36202 = G__36203;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((1)),(0),null));
return mranderson048.reagent.v0v7v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4547__auto__);

}
});

mranderson048.reagent.v0v7v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return mranderson048.reagent.v0v7v0.reagent.ratom.atom.call(null,x);
});

mranderson048.reagent.v0v7v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,mranderson048.reagent.v0v7v0.reagent.ratom.atom,x,rest);
});

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.core.atom.cljs$lang$applyTo = (function (seq36197){
var G__36198 = cljs.core.first.call(null,seq36197);
var seq36197__$1 = cljs.core.next.call(null,seq36197);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36198,seq36197__$1);
});

mranderson048.reagent.v0v7v0.reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
mranderson048.reagent.v0v7v0.reagent.core.track = (function mranderson048$reagent$v0v7v0$reagent$core$track(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36206 = arguments.length;
var i__4532__auto___36207 = (0);
while(true){
if((i__4532__auto___36207 < len__4531__auto___36206)){
args__4534__auto__.push((arguments[i__4532__auto___36207]));

var G__36208 = (i__4532__auto___36207 + (1));
i__4532__auto___36207 = G__36208;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v7v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson048.reagent.v0v7v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson048.reagent.v0v7v0.reagent.ratom.make_track.call(null,f,args);
});

mranderson048.reagent.v0v7v0.reagent.core.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.core.track.cljs$lang$applyTo = (function (seq36204){
var G__36205 = cljs.core.first.call(null,seq36204);
var seq36204__$1 = cljs.core.next.call(null,seq36204);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36205,seq36204__$1);
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
mranderson048.reagent.v0v7v0.reagent.core.track_BANG_ = (function mranderson048$reagent$v0v7v0$reagent$core$track_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36211 = arguments.length;
var i__4532__auto___36212 = (0);
while(true){
if((i__4532__auto___36212 < len__4531__auto___36211)){
args__4534__auto__.push((arguments[i__4532__auto___36212]));

var G__36213 = (i__4532__auto___36212 + (1));
i__4532__auto___36212 = G__36213;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v7v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson048.reagent.v0v7v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson048.reagent.v0v7v0.reagent.ratom.make_track_BANG_.call(null,f,args);
});

mranderson048.reagent.v0v7v0.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq36209){
var G__36210 = cljs.core.first.call(null,seq36209);
var seq36209__$1 = cljs.core.next.call(null,seq36209);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36210,seq36209__$1);
});

/**
 * Stop the result of track! from updating.
 */
mranderson048.reagent.v0v7v0.reagent.core.dispose_BANG_ = (function mranderson048$reagent$v0v7v0$reagent$core$dispose_BANG_(x){
return mranderson048.reagent.v0v7v0.reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
mranderson048.reagent.v0v7v0.reagent.core.wrap = (function mranderson048$reagent$v0v7v0$reagent$core$wrap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36217 = arguments.length;
var i__4532__auto___36218 = (0);
while(true){
if((i__4532__auto___36218 < len__4531__auto___36217)){
args__4534__auto__.push((arguments[i__4532__auto___36218]));

var G__36219 = (i__4532__auto___36218 + (1));
i__4532__auto___36218 = G__36219;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mranderson048.reagent.v0v7v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mranderson048.reagent.v0v7v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,reset_fn))].join('')),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return mranderson048.reagent.v0v7v0.reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
});

mranderson048.reagent.v0v7v0.reagent.core.wrap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.core.wrap.cljs$lang$applyTo = (function (seq36214){
var G__36215 = cljs.core.first.call(null,seq36214);
var seq36214__$1 = cljs.core.next.call(null,seq36214);
var G__36216 = cljs.core.first.call(null,seq36214__$1);
var seq36214__$2 = cljs.core.next.call(null,seq36214__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36215,G__36216,seq36214__$2);
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
mranderson048.reagent.v0v7v0.reagent.core.cursor = (function mranderson048$reagent$v0v7v0$reagent$core$cursor(src,path){
return mranderson048.reagent.v0v7v0.reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
mranderson048.reagent.v0v7v0.reagent.core.rswap_BANG_ = (function mranderson048$reagent$v0v7v0$reagent$core$rswap_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36226 = arguments.length;
var i__4532__auto___36227 = (0);
while(true){
if((i__4532__auto___36227 < len__4531__auto___36226)){
args__4534__auto__.push((arguments[i__4532__auto___36227]));

var G__36228 = (i__4532__auto___36227 + (1));
i__4532__auto___36227 = G__36228;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mranderson048.reagent.v0v7v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mranderson048.reagent.v0v7v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if(((!((a == null)))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__3949__auto__ = a.rswapfs;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__36220_SHARP_){
return cljs.core.apply.call(null,f,p1__36220_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
var temp__5459__auto__ = (function (){var G__36225 = a.rswapfs;
if((G__36225 == null)){
return null;
} else {
return G__36225.shift();
}
})();
if((temp__5459__auto__ == null)){
return s;
} else {
var sf = temp__5459__auto__;
var G__36229 = sf.call(null,s);
s = G__36229;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

mranderson048.reagent.v0v7v0.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq36221){
var G__36222 = cljs.core.first.call(null,seq36221);
var seq36221__$1 = cljs.core.next.call(null,seq36221);
var G__36223 = cljs.core.first.call(null,seq36221__$1);
var seq36221__$2 = cljs.core.next.call(null,seq36221__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36222,G__36223,seq36221__$2);
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
mranderson048.reagent.v0v7v0.reagent.core.next_tick = (function mranderson048$reagent$v0v7v0$reagent$core$next_tick(f){
return mranderson048.reagent.v0v7v0.reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
mranderson048.reagent.v0v7v0.reagent.core.after_render = (function mranderson048$reagent$v0v7v0$reagent$core$after_render(f){
return mranderson048.reagent.v0v7v0.reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
mranderson048.reagent.v0v7v0.reagent.core.partial = (function mranderson048$reagent$v0v7v0$reagent$core$partial(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36232 = arguments.length;
var i__4532__auto___36233 = (0);
while(true){
if((i__4532__auto___36233 < len__4531__auto___36232)){
args__4534__auto__.push((arguments[i__4532__auto___36233]));

var G__36234 = (i__4532__auto___36233 + (1));
i__4532__auto___36233 = G__36234;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v7v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson048.reagent.v0v7v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return mranderson048.reagent.v0v7v0.reagent.impl.util.make_partial_fn.call(null,f,args);
});

mranderson048.reagent.v0v7v0.reagent.core.partial.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.core.partial.cljs$lang$applyTo = (function (seq36230){
var G__36231 = cljs.core.first.call(null,seq36230);
var seq36230__$1 = cljs.core.next.call(null,seq36230);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36231,seq36230__$1);
});

mranderson048.reagent.v0v7v0.reagent.core.component_path = (function mranderson048$reagent$v0v7v0$reagent$core$component_path(c){
return mranderson048.reagent.v0v7v0.reagent.impl.component.component_path.call(null,c);
});

//# sourceMappingURL=core.js.map?rel=1534986054287
