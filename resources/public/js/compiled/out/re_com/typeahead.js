// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__27117){
var map__27118 = p__27117;
var map__27118__$1 = ((((!((map__27118 == null)))?(((((map__27118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27118):map__27118);
var args = map__27118__$1;
var on_change = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__27120 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__3949__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__27120,external_model_value);
} else {
return G__27120;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__27121,event){
var map__27122 = p__27121;
var map__27122__$1 = ((((!((map__27122 == null)))?(((((map__27122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27122):map__27122);
var state = map__27122__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__27124 = event;
var G__27124__$1 = (((G__27124 instanceof cljs.core.Keyword))?G__27124.fqn:null);
switch (G__27124__$1) {
case "input-text-blurred":
var and__3938__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__3938__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__3949__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27124__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__27126,event){
var map__27127 = p__27126;
var map__27127__$1 = ((((!((map__27127 == null)))?(((((map__27127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27127):map__27127);
var state = map__27127__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__27127__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__27129 = event;
var G__27129__$1 = (((G__27129 instanceof cljs.core.Keyword))?G__27129.fqn:null);
switch (G__27129__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__27131,new_value){
var map__27132 = p__27131;
var map__27132__$1 = ((((!((map__27132 == null)))?(((((map__27132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27132):map__27132);
var state = map__27132__$1;
var on_change = cljs.core.get.call(null,map__27132__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__27134,suggestion){
var map__27135 = p__27134;
var map__27135__$1 = ((((!((map__27135 == null)))?(((((map__27135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27135):map__27135);
var state = map__27135__$1;
var suggestion_to_string = cljs.core.get.call(null,map__27135__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__27137 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__27137,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__27137;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__27138,index){
var map__27139 = p__27138;
var map__27139__$1 = ((((!((map__27139 == null)))?(((((map__27139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27139):map__27139);
var state = map__27139__$1;
var suggestions = cljs.core.get.call(null,map__27139__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__27141 = state;
var G__27141__$1 = cljs.core.assoc.call(null,G__27141,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__27141__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__27141__$1,suggestion):G__27141__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__27141__$2,suggestion);
} else {
return G__27141__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__27142,index){
var map__27143 = p__27142;
var map__27143__$1 = ((((!((map__27143 == null)))?(((((map__27143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27143):map__27143);
var state = map__27143__$1;
var suggestions = cljs.core.get.call(null,map__27143__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__27145){
var map__27146 = p__27145;
var map__27146__$1 = ((((!((map__27146 == null)))?(((((map__27146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27146):map__27146);
var state = map__27146__$1;
var suggestion_active_index = cljs.core.get.call(null,map__27146__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__27148 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__27148,suggestion_active_index);
} else {
return G__27148;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__27149){
var map__27150 = p__27149;
var map__27150__$1 = ((((!((map__27150 == null)))?(((((map__27150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27150):map__27150);
var state = map__27150__$1;
var suggestions = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__27152 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__27152,re_com.typeahead.wrap.call(null,((function (){var or__3949__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__27152;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__27153){
var map__27154 = p__27153;
var map__27154__$1 = ((((!((map__27154 == null)))?(((((map__27154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27154):map__27154);
var state = map__27154__$1;
var suggestions = cljs.core.get.call(null,map__27154__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__27154__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__27156 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__27156,re_com.typeahead.wrap.call(null,((function (){var or__3949__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__27156;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__27157 = state;
var G__27157__$1 = re_com.typeahead.clear_suggestions.call(null,G__27157)
;
var G__27157__$2 = cljs.core.assoc.call(null,G__27157__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__27157__$2,null);
} else {
return G__27157__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__27158){
var map__27159 = p__27158;
var map__27159__$1 = ((((!((map__27159 == null)))?(((((map__27159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27159):map__27159);
var state = map__27159__$1;
var input_text = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__27161 = state;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__3938__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__3938__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__27161,input_text);
} else {
return G__27161;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5455__auto__ = data_source.call(null,text,(function (p1__27162_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__27162_SHARP_);
}));
if(cljs.core.truth_(temp__5455__auto__)){
var return_value = temp__5455__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__24192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24192__auto__){
return (function (){
var f__24193__auto__ = (function (){var switch__24169__auto__ = ((function (c__24192__auto__){
return (function (state_27179){
var state_val_27180 = (state_27179[(1)]);
if((state_val_27180 === (1))){
var state_27179__$1 = state_27179;
var statearr_27181_27193 = state_27179__$1;
(statearr_27181_27193[(2)] = null);

(statearr_27181_27193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (2))){
var state_27179__$1 = state_27179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27179__$1,(4),c_search);
} else {
if((state_val_27180 === (3))){
var inst_27177 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27179__$1,inst_27177);
} else {
if((state_val_27180 === (4))){
var inst_27165 = (state_27179[(7)]);
var inst_27165__$1 = (state_27179[(2)]);
var inst_27166 = cljs.core.deref.call(null,state_atom);
var inst_27167 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_27166);
var inst_27168 = cljs.core._EQ_.call(null,"",inst_27165__$1);
var state_27179__$1 = (function (){var statearr_27182 = state_27179;
(statearr_27182[(8)] = inst_27167);

(statearr_27182[(7)] = inst_27165__$1);

return statearr_27182;
})();
if(inst_27168){
var statearr_27183_27194 = state_27179__$1;
(statearr_27183_27194[(1)] = (5));

} else {
var statearr_27184_27195 = state_27179__$1;
(statearr_27184_27195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (5))){
var inst_27170 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_27179__$1 = state_27179;
var statearr_27185_27196 = state_27179__$1;
(statearr_27185_27196[(2)] = inst_27170);

(statearr_27185_27196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (6))){
var inst_27167 = (state_27179[(8)]);
var inst_27165 = (state_27179[(7)]);
var inst_27172 = re_com.typeahead.search_data_source_BANG_.call(null,inst_27167,state_atom,inst_27165);
var state_27179__$1 = state_27179;
var statearr_27186_27197 = state_27179__$1;
(statearr_27186_27197[(2)] = inst_27172);

(statearr_27186_27197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (7))){
var inst_27174 = (state_27179[(2)]);
var state_27179__$1 = (function (){var statearr_27187 = state_27179;
(statearr_27187[(9)] = inst_27174);

return statearr_27187;
})();
var statearr_27188_27198 = state_27179__$1;
(statearr_27188_27198[(2)] = null);

(statearr_27188_27198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24192__auto__))
;
return ((function (switch__24169__auto__,c__24192__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto____0 = (function (){
var statearr_27189 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27189[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto__);

(statearr_27189[(1)] = (1));

return statearr_27189;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto____1 = (function (state_27179){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_27179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e27190){if((e27190 instanceof Object)){
var ex__24173__auto__ = e27190;
var statearr_27191_27199 = state_27179;
(statearr_27191_27199[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27200 = state_27179;
state_27179 = G__27200;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto__ = function(state_27179){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto____1.call(this,state_27179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24192__auto__))
})();
var state__24194__auto__ = (function (){var statearr_27192 = f__24193__auto__.call(null);
(statearr_27192[(6)] = c__24192__auto__);

return statearr_27192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24194__auto__);
});})(c__24192__auto__))
);

return c__24192__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__27202 = cljs.core.deref.call(null,state_atom);
var map__27202__$1 = ((((!((map__27202 == null)))?(((((map__27202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27202):map__27202);
var state = map__27202__$1;
var input_text = cljs.core.get.call(null,map__27202__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__27202__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__27202,map__27202__$1,state,input_text,c_input){
return (function (p1__27201_SHARP_){
var G__27204 = p1__27201_SHARP_;
var G__27204__$1 = cljs.core.assoc.call(null,G__27204,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__27204__$1,new_text);
} else {
return G__27204__$1;
}
});})(map__27202,map__27202__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__27205 = cljs.core._EQ_;
var expr__27206 = event.which;
if(cljs.core.truth_(pred__27205.call(null,goog.events.KeyCodes.UP,expr__27206))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__27205.call(null,goog.events.KeyCodes.DOWN,expr__27206))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__27205.call(null,goog.events.KeyCodes.ENTER,expr__27206))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__27205.call(null,goog.events.KeyCodes.ESC,expr__27206))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__27205.call(null,goog.events.KeyCodes.TAB,expr__27206))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27230 = arguments.length;
var i__4532__auto___27231 = (0);
while(true){
if((i__4532__auto___27231 < len__4531__auto___27230)){
args__4534__auto__.push((arguments[i__4532__auto___27231]));

var G__27232 = (i__4532__auto___27231 + (1));
i__4532__auto___27231 = G__27232;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__27210){
var map__27211 = p__27210;
var map__27211__$1 = ((((!((map__27211 == null)))?(((((map__27211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27211):map__27211);
var args = map__27211__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__27213 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__27213__$1 = ((((!((map__27213 == null)))?(((((map__27213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27213):map__27213);
var state = map__27213__$1;
var c_search = cljs.core.get.call(null,map__27213__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__27213__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args){
return (function() { 
var G__27233__delegate = function (p__27215){
var map__27216 = p__27215;
var map__27216__$1 = ((((!((map__27216 == null)))?(((((map__27216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27216):map__27216);
var args__$1 = map__27216__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__27218 = cljs.core.deref.call(null,state_atom);
var map__27218__$1 = ((((!((map__27218 == null)))?(((((map__27218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27218):map__27218);
var state__$1 = map__27218__$1;
var suggestions = cljs.core.get.call(null,map__27218__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__27218__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__27218__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__27218__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__3949__auto__ = width;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4324__auto__ = ((function (map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args){
return (function re_com$typeahead$iter__27220(s__27221){
return (new cljs.core.LazySeq(null,((function (map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args){
return (function (){
var s__27221__$1 = s__27221;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27221__$1);
if(temp__5457__auto__){
var s__27221__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27221__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27221__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27223 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27222 = (0);
while(true){
if((i__27222 < size__4323__auto__)){
var vec__27224 = cljs.core._nth.call(null,c__4322__auto__,i__27222);
var i = cljs.core.nth.call(null,vec__27224,(0),null);
var s = cljs.core.nth.call(null,vec__27224,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__27223,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__27222,selected_QMARK_,vec__27224,i,s,c__4322__auto__,size__4323__auto__,b__27223,s__27221__$2,temp__5457__auto__,map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__27222,selected_QMARK_,vec__27224,i,s,c__4322__auto__,size__4323__auto__,b__27223,s__27221__$2,temp__5457__auto__,map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__27222,selected_QMARK_,vec__27224,i,s,c__4322__auto__,size__4323__auto__,b__27223,s__27221__$2,temp__5457__auto__,map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args){
return (function (p1__27208_SHARP_){
p1__27208_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__27222,selected_QMARK_,vec__27224,i,s,c__4322__auto__,size__4323__auto__,b__27223,s__27221__$2,temp__5457__auto__,map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__27234 = (i__27222 + (1));
i__27222 = G__27234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27223),re_com$typeahead$iter__27220.call(null,cljs.core.chunk_rest.call(null,s__27221__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27223),null);
}
} else {
var vec__27227 = cljs.core.first.call(null,s__27221__$2);
var i = cljs.core.nth.call(null,vec__27227,(0),null);
var s = cljs.core.nth.call(null,vec__27227,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__27227,i,s,s__27221__$2,temp__5457__auto__,map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__27227,i,s,s__27221__$2,temp__5457__auto__,map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__27227,i,s,s__27221__$2,temp__5457__auto__,map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args){
return (function (p1__27208_SHARP_){
p1__27208_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__27227,i,s,s__27221__$2,temp__5457__auto__,map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__27220.call(null,cljs.core.rest.call(null,s__27221__$2)));
}
} else {
return null;
}
break;
}
});})(map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args))
,null,null));
});})(map__27218,map__27218__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27216,map__27216__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args))
;
return iter__4324__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__27233 = function (var_args){
var p__27215 = null;
if (arguments.length > 0) {
var G__27235__i = 0, G__27235__a = new Array(arguments.length -  0);
while (G__27235__i < G__27235__a.length) {G__27235__a[G__27235__i] = arguments[G__27235__i + 0]; ++G__27235__i;}
  p__27215 = new cljs.core.IndexedSeq(G__27235__a,0,null);
} 
return G__27233__delegate.call(this,p__27215);};
G__27233.cljs$lang$maxFixedArity = 0;
G__27233.cljs$lang$applyTo = (function (arglist__27236){
var p__27215 = cljs.core.seq(arglist__27236);
return G__27233__delegate(p__27215);
});
G__27233.cljs$core$IFn$_invoke$arity$variadic = G__27233__delegate;
return G__27233;
})()
;
;})(map__27213,map__27213__$1,state,c_search,c_input,state_atom,input_text_model,map__27211,map__27211__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq27209){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27209));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__24192__auto___27317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24192__auto___27317,out){
return (function (){
var f__24193__auto__ = (function (){var switch__24169__auto__ = ((function (c__24192__auto___27317,out){
return (function (state_27287){
var state_val_27288 = (state_27287[(1)]);
if((state_val_27288 === (7))){
var inst_27242 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
var statearr_27289_27318 = state_27287__$1;
(statearr_27289_27318[(2)] = inst_27242);

(statearr_27289_27318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (1))){
var inst_27237 = null;
var state_27287__$1 = (function (){var statearr_27290 = state_27287;
(statearr_27290[(7)] = inst_27237);

return statearr_27290;
})();
var statearr_27291_27319 = state_27287__$1;
(statearr_27291_27319[(2)] = null);

(statearr_27291_27319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (4))){
var state_27287__$1 = state_27287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27287__$1,(7),in$);
} else {
if((state_val_27288 === (15))){
var inst_27272 = (state_27287[(2)]);
var state_27287__$1 = (function (){var statearr_27292 = state_27287;
(statearr_27292[(8)] = inst_27272);

return statearr_27292;
})();
var statearr_27293_27320 = state_27287__$1;
(statearr_27293_27320[(2)] = null);

(statearr_27293_27320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (13))){
var inst_27260 = (state_27287[(9)]);
var inst_27274 = cljs.core._EQ_.call(null,inst_27260,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_27287__$1 = state_27287;
if(inst_27274){
var statearr_27294_27321 = state_27287__$1;
(statearr_27294_27321[(1)] = (16));

} else {
var statearr_27295_27322 = state_27287__$1;
(statearr_27295_27322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (6))){
var inst_27246 = (state_27287[(10)]);
var inst_27245 = (state_27287[(2)]);
var inst_27246__$1 = cljs.core.async.timeout.call(null,ms);
var inst_27254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27255 = [in$,inst_27246__$1];
var inst_27256 = (new cljs.core.PersistentVector(null,2,(5),inst_27254,inst_27255,null));
var state_27287__$1 = (function (){var statearr_27296 = state_27287;
(statearr_27296[(11)] = inst_27245);

(statearr_27296[(10)] = inst_27246__$1);

return statearr_27296;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27287__$1,(8),inst_27256);
} else {
if((state_val_27288 === (17))){
var state_27287__$1 = state_27287;
var statearr_27297_27323 = state_27287__$1;
(statearr_27297_27323[(2)] = null);

(statearr_27297_27323[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (3))){
var inst_27285 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27287__$1,inst_27285);
} else {
if((state_val_27288 === (12))){
var inst_27245 = (state_27287[(11)]);
var state_27287__$1 = state_27287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27287__$1,(15),out,inst_27245);
} else {
if((state_val_27288 === (2))){
var inst_27237 = (state_27287[(7)]);
var inst_27239 = (inst_27237 == null);
var state_27287__$1 = state_27287;
if(cljs.core.truth_(inst_27239)){
var statearr_27298_27324 = state_27287__$1;
(statearr_27298_27324[(1)] = (4));

} else {
var statearr_27299_27325 = state_27287__$1;
(statearr_27299_27325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (11))){
var inst_27282 = (state_27287[(2)]);
var inst_27237 = inst_27282;
var state_27287__$1 = (function (){var statearr_27300 = state_27287;
(statearr_27300[(7)] = inst_27237);

return statearr_27300;
})();
var statearr_27301_27326 = state_27287__$1;
(statearr_27301_27326[(2)] = null);

(statearr_27301_27326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (9))){
var inst_27258 = (state_27287[(12)]);
var inst_27266 = cljs.core.nth.call(null,inst_27258,(0),null);
var inst_27267 = cljs.core.nth.call(null,inst_27258,(1),null);
var state_27287__$1 = (function (){var statearr_27302 = state_27287;
(statearr_27302[(13)] = inst_27267);

return statearr_27302;
})();
var statearr_27303_27327 = state_27287__$1;
(statearr_27303_27327[(2)] = inst_27266);

(statearr_27303_27327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (5))){
var inst_27237 = (state_27287[(7)]);
var state_27287__$1 = state_27287;
var statearr_27304_27328 = state_27287__$1;
(statearr_27304_27328[(2)] = inst_27237);

(statearr_27304_27328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (14))){
var inst_27280 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
var statearr_27305_27329 = state_27287__$1;
(statearr_27305_27329[(2)] = inst_27280);

(statearr_27305_27329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (16))){
var inst_27259 = (state_27287[(14)]);
var state_27287__$1 = state_27287;
var statearr_27306_27330 = state_27287__$1;
(statearr_27306_27330[(2)] = inst_27259);

(statearr_27306_27330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (10))){
var inst_27260 = (state_27287[(9)]);
var inst_27246 = (state_27287[(10)]);
var inst_27269 = cljs.core._EQ_.call(null,inst_27260,inst_27246);
var state_27287__$1 = state_27287;
if(inst_27269){
var statearr_27307_27331 = state_27287__$1;
(statearr_27307_27331[(1)] = (12));

} else {
var statearr_27308_27332 = state_27287__$1;
(statearr_27308_27332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (18))){
var inst_27278 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
var statearr_27309_27333 = state_27287__$1;
(statearr_27309_27333[(2)] = inst_27278);

(statearr_27309_27333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (8))){
var inst_27258 = (state_27287[(12)]);
var inst_27260 = (state_27287[(9)]);
var inst_27258__$1 = (state_27287[(2)]);
var inst_27259 = cljs.core.nth.call(null,inst_27258__$1,(0),null);
var inst_27260__$1 = cljs.core.nth.call(null,inst_27258__$1,(1),null);
var inst_27261 = cljs.core._EQ_.call(null,inst_27260__$1,in$);
var state_27287__$1 = (function (){var statearr_27310 = state_27287;
(statearr_27310[(14)] = inst_27259);

(statearr_27310[(12)] = inst_27258__$1);

(statearr_27310[(9)] = inst_27260__$1);

return statearr_27310;
})();
if(inst_27261){
var statearr_27311_27334 = state_27287__$1;
(statearr_27311_27334[(1)] = (9));

} else {
var statearr_27312_27335 = state_27287__$1;
(statearr_27312_27335[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24192__auto___27317,out))
;
return ((function (switch__24169__auto__,c__24192__auto___27317,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__24170__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__24170__auto____0 = (function (){
var statearr_27313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27313[(0)] = re_com$typeahead$debounce_$_state_machine__24170__auto__);

(statearr_27313[(1)] = (1));

return statearr_27313;
});
var re_com$typeahead$debounce_$_state_machine__24170__auto____1 = (function (state_27287){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_27287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e27314){if((e27314 instanceof Object)){
var ex__24173__auto__ = e27314;
var statearr_27315_27336 = state_27287;
(statearr_27315_27336[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27337 = state_27287;
state_27287 = G__27337;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__24170__auto__ = function(state_27287){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__24170__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__24170__auto____1.call(this,state_27287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__24170__auto____0;
re_com$typeahead$debounce_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__24170__auto____1;
return re_com$typeahead$debounce_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24192__auto___27317,out))
})();
var state__24194__auto__ = (function (){var statearr_27316 = f__24193__auto__.call(null);
(statearr_27316[(6)] = c__24192__auto___27317);

return statearr_27316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24194__auto__);
});})(c__24192__auto___27317,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1535000618820
