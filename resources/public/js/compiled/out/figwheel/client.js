// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e41764){if((e41764 instanceof Error)){
var e = e41764;
return "Error: Unable to stringify";
} else {
throw e41764;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__41767 = arguments.length;
switch (G__41767) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__41765_SHARP_){
if(typeof p1__41765_SHARP_ === 'string'){
return p1__41765_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__41765_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___41770 = arguments.length;
var i__4532__auto___41771 = (0);
while(true){
if((i__4532__auto___41771 < len__4531__auto___41770)){
args__4534__auto__.push((arguments[i__4532__auto___41771]));

var G__41772 = (i__4532__auto___41771 + (1));
i__4532__auto___41771 = G__41772;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41769){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41769));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___41774 = arguments.length;
var i__4532__auto___41775 = (0);
while(true){
if((i__4532__auto___41775 < len__4531__auto___41774)){
args__4534__auto__.push((arguments[i__4532__auto___41775]));

var G__41776 = (i__4532__auto___41775 + (1));
i__4532__auto___41775 = G__41776;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41773){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41773));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41777){
var map__41778 = p__41777;
var map__41778__$1 = ((((!((map__41778 == null)))?(((((map__41778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41778):map__41778);
var message = cljs.core.get.call(null,map__41778__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41778__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26081__auto___41857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___41857,ch){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___41857,ch){
return (function (state_41829){
var state_val_41830 = (state_41829[(1)]);
if((state_val_41830 === (7))){
var inst_41825 = (state_41829[(2)]);
var state_41829__$1 = state_41829;
var statearr_41831_41858 = state_41829__$1;
(statearr_41831_41858[(2)] = inst_41825);

(statearr_41831_41858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (1))){
var state_41829__$1 = state_41829;
var statearr_41832_41859 = state_41829__$1;
(statearr_41832_41859[(2)] = null);

(statearr_41832_41859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (4))){
var inst_41782 = (state_41829[(7)]);
var inst_41782__$1 = (state_41829[(2)]);
var state_41829__$1 = (function (){var statearr_41833 = state_41829;
(statearr_41833[(7)] = inst_41782__$1);

return statearr_41833;
})();
if(cljs.core.truth_(inst_41782__$1)){
var statearr_41834_41860 = state_41829__$1;
(statearr_41834_41860[(1)] = (5));

} else {
var statearr_41835_41861 = state_41829__$1;
(statearr_41835_41861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (15))){
var inst_41789 = (state_41829[(8)]);
var inst_41804 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41789);
var inst_41805 = cljs.core.first.call(null,inst_41804);
var inst_41806 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41805);
var inst_41807 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41806)].join('');
var inst_41808 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41807);
var state_41829__$1 = state_41829;
var statearr_41836_41862 = state_41829__$1;
(statearr_41836_41862[(2)] = inst_41808);

(statearr_41836_41862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (13))){
var inst_41813 = (state_41829[(2)]);
var state_41829__$1 = state_41829;
var statearr_41837_41863 = state_41829__$1;
(statearr_41837_41863[(2)] = inst_41813);

(statearr_41837_41863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (6))){
var state_41829__$1 = state_41829;
var statearr_41838_41864 = state_41829__$1;
(statearr_41838_41864[(2)] = null);

(statearr_41838_41864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (17))){
var inst_41811 = (state_41829[(2)]);
var state_41829__$1 = state_41829;
var statearr_41839_41865 = state_41829__$1;
(statearr_41839_41865[(2)] = inst_41811);

(statearr_41839_41865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (3))){
var inst_41827 = (state_41829[(2)]);
var state_41829__$1 = state_41829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41829__$1,inst_41827);
} else {
if((state_val_41830 === (12))){
var inst_41788 = (state_41829[(9)]);
var inst_41802 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41788,opts);
var state_41829__$1 = state_41829;
if(cljs.core.truth_(inst_41802)){
var statearr_41840_41866 = state_41829__$1;
(statearr_41840_41866[(1)] = (15));

} else {
var statearr_41841_41867 = state_41829__$1;
(statearr_41841_41867[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (2))){
var state_41829__$1 = state_41829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41829__$1,(4),ch);
} else {
if((state_val_41830 === (11))){
var inst_41789 = (state_41829[(8)]);
var inst_41794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41795 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41789);
var inst_41796 = cljs.core.async.timeout.call(null,(1000));
var inst_41797 = [inst_41795,inst_41796];
var inst_41798 = (new cljs.core.PersistentVector(null,2,(5),inst_41794,inst_41797,null));
var state_41829__$1 = state_41829;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41829__$1,(14),inst_41798);
} else {
if((state_val_41830 === (9))){
var inst_41789 = (state_41829[(8)]);
var inst_41815 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41816 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41789);
var inst_41817 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41816);
var inst_41818 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41817)].join('');
var inst_41819 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41818);
var state_41829__$1 = (function (){var statearr_41842 = state_41829;
(statearr_41842[(10)] = inst_41815);

return statearr_41842;
})();
var statearr_41843_41868 = state_41829__$1;
(statearr_41843_41868[(2)] = inst_41819);

(statearr_41843_41868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (5))){
var inst_41782 = (state_41829[(7)]);
var inst_41784 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41785 = (new cljs.core.PersistentArrayMap(null,2,inst_41784,null));
var inst_41786 = (new cljs.core.PersistentHashSet(null,inst_41785,null));
var inst_41787 = figwheel.client.focus_msgs.call(null,inst_41786,inst_41782);
var inst_41788 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41787);
var inst_41789 = cljs.core.first.call(null,inst_41787);
var inst_41790 = figwheel.client.autoload_QMARK_.call(null);
var state_41829__$1 = (function (){var statearr_41844 = state_41829;
(statearr_41844[(9)] = inst_41788);

(statearr_41844[(8)] = inst_41789);

return statearr_41844;
})();
if(cljs.core.truth_(inst_41790)){
var statearr_41845_41869 = state_41829__$1;
(statearr_41845_41869[(1)] = (8));

} else {
var statearr_41846_41870 = state_41829__$1;
(statearr_41846_41870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (14))){
var inst_41800 = (state_41829[(2)]);
var state_41829__$1 = state_41829;
var statearr_41847_41871 = state_41829__$1;
(statearr_41847_41871[(2)] = inst_41800);

(statearr_41847_41871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (16))){
var state_41829__$1 = state_41829;
var statearr_41848_41872 = state_41829__$1;
(statearr_41848_41872[(2)] = null);

(statearr_41848_41872[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (10))){
var inst_41821 = (state_41829[(2)]);
var state_41829__$1 = (function (){var statearr_41849 = state_41829;
(statearr_41849[(11)] = inst_41821);

return statearr_41849;
})();
var statearr_41850_41873 = state_41829__$1;
(statearr_41850_41873[(2)] = null);

(statearr_41850_41873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (8))){
var inst_41788 = (state_41829[(9)]);
var inst_41792 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41788,opts);
var state_41829__$1 = state_41829;
if(cljs.core.truth_(inst_41792)){
var statearr_41851_41874 = state_41829__$1;
(statearr_41851_41874[(1)] = (11));

} else {
var statearr_41852_41875 = state_41829__$1;
(statearr_41852_41875[(1)] = (12));

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
});})(c__26081__auto___41857,ch))
;
return ((function (switch__25990__auto__,c__26081__auto___41857,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25991__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25991__auto____0 = (function (){
var statearr_41853 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41853[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25991__auto__);

(statearr_41853[(1)] = (1));

return statearr_41853;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25991__auto____1 = (function (state_41829){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_41829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e41854){if((e41854 instanceof Object)){
var ex__25994__auto__ = e41854;
var statearr_41855_41876 = state_41829;
(statearr_41855_41876[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41877 = state_41829;
state_41829 = G__41877;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25991__auto__ = function(state_41829){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25991__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25991__auto____1.call(this,state_41829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25991__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25991__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___41857,ch))
})();
var state__26083__auto__ = (function (){var statearr_41856 = f__26082__auto__.call(null);
(statearr_41856[(6)] = c__26081__auto___41857);

return statearr_41856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___41857,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41878_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41878_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41882 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41882){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41880 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41881 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41880,_STAR_print_fn_STAR_41881,sb,base_path_41882){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_41880,_STAR_print_fn_STAR_41881,sb,base_path_41882))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41881;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41880;
}}catch (e41879){if((e41879 instanceof Error)){
var e = e41879;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41882], null));
} else {
var e = e41879;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41882))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41883){
var map__41884 = p__41883;
var map__41884__$1 = ((((!((map__41884 == null)))?(((((map__41884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41884):map__41884);
var opts = map__41884__$1;
var build_id = cljs.core.get.call(null,map__41884__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41884,map__41884__$1,opts,build_id){
return (function (p__41886){
var vec__41887 = p__41886;
var seq__41888 = cljs.core.seq.call(null,vec__41887);
var first__41889 = cljs.core.first.call(null,seq__41888);
var seq__41888__$1 = cljs.core.next.call(null,seq__41888);
var map__41890 = first__41889;
var map__41890__$1 = ((((!((map__41890 == null)))?(((((map__41890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41890):map__41890);
var msg = map__41890__$1;
var msg_name = cljs.core.get.call(null,map__41890__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41888__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41887,seq__41888,first__41889,seq__41888__$1,map__41890,map__41890__$1,msg,msg_name,_,map__41884,map__41884__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41887,seq__41888,first__41889,seq__41888__$1,map__41890,map__41890__$1,msg,msg_name,_,map__41884,map__41884__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41884,map__41884__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41892){
var vec__41893 = p__41892;
var seq__41894 = cljs.core.seq.call(null,vec__41893);
var first__41895 = cljs.core.first.call(null,seq__41894);
var seq__41894__$1 = cljs.core.next.call(null,seq__41894);
var map__41896 = first__41895;
var map__41896__$1 = ((((!((map__41896 == null)))?(((((map__41896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41896):map__41896);
var msg = map__41896__$1;
var msg_name = cljs.core.get.call(null,map__41896__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41894__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41898){
var map__41899 = p__41898;
var map__41899__$1 = ((((!((map__41899 == null)))?(((((map__41899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41899):map__41899);
var on_compile_warning = cljs.core.get.call(null,map__41899__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41899__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41899,map__41899__$1,on_compile_warning,on_compile_fail){
return (function (p__41901){
var vec__41902 = p__41901;
var seq__41903 = cljs.core.seq.call(null,vec__41902);
var first__41904 = cljs.core.first.call(null,seq__41903);
var seq__41903__$1 = cljs.core.next.call(null,seq__41903);
var map__41905 = first__41904;
var map__41905__$1 = ((((!((map__41905 == null)))?(((((map__41905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41905):map__41905);
var msg = map__41905__$1;
var msg_name = cljs.core.get.call(null,map__41905__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41903__$1;
var pred__41907 = cljs.core._EQ_;
var expr__41908 = msg_name;
if(cljs.core.truth_(pred__41907.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41908))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41907.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41908))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41899,map__41899__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__,msg_hist,msg_names,msg){
return (function (state_41997){
var state_val_41998 = (state_41997[(1)]);
if((state_val_41998 === (7))){
var inst_41917 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41917)){
var statearr_41999_42046 = state_41997__$1;
(statearr_41999_42046[(1)] = (8));

} else {
var statearr_42000_42047 = state_41997__$1;
(statearr_42000_42047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (20))){
var inst_41991 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42001_42048 = state_41997__$1;
(statearr_42001_42048[(2)] = inst_41991);

(statearr_42001_42048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (27))){
var inst_41987 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42002_42049 = state_41997__$1;
(statearr_42002_42049[(2)] = inst_41987);

(statearr_42002_42049[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (1))){
var inst_41910 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41910)){
var statearr_42003_42050 = state_41997__$1;
(statearr_42003_42050[(1)] = (2));

} else {
var statearr_42004_42051 = state_41997__$1;
(statearr_42004_42051[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (24))){
var inst_41989 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42005_42052 = state_41997__$1;
(statearr_42005_42052[(2)] = inst_41989);

(statearr_42005_42052[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (4))){
var inst_41995 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41997__$1,inst_41995);
} else {
if((state_val_41998 === (15))){
var inst_41993 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42006_42053 = state_41997__$1;
(statearr_42006_42053[(2)] = inst_41993);

(statearr_42006_42053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (21))){
var inst_41946 = (state_41997[(2)]);
var inst_41947 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41948 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41947);
var state_41997__$1 = (function (){var statearr_42007 = state_41997;
(statearr_42007[(7)] = inst_41946);

return statearr_42007;
})();
var statearr_42008_42054 = state_41997__$1;
(statearr_42008_42054[(2)] = inst_41948);

(statearr_42008_42054[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (31))){
var inst_41976 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41976)){
var statearr_42009_42055 = state_41997__$1;
(statearr_42009_42055[(1)] = (34));

} else {
var statearr_42010_42056 = state_41997__$1;
(statearr_42010_42056[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (32))){
var inst_41985 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42011_42057 = state_41997__$1;
(statearr_42011_42057[(2)] = inst_41985);

(statearr_42011_42057[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (33))){
var inst_41972 = (state_41997[(2)]);
var inst_41973 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41974 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41973);
var state_41997__$1 = (function (){var statearr_42012 = state_41997;
(statearr_42012[(8)] = inst_41972);

return statearr_42012;
})();
var statearr_42013_42058 = state_41997__$1;
(statearr_42013_42058[(2)] = inst_41974);

(statearr_42013_42058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (13))){
var inst_41931 = figwheel.client.heads_up.clear.call(null);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(16),inst_41931);
} else {
if((state_val_41998 === (22))){
var inst_41952 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41953 = figwheel.client.heads_up.append_warning_message.call(null,inst_41952);
var state_41997__$1 = state_41997;
var statearr_42014_42059 = state_41997__$1;
(statearr_42014_42059[(2)] = inst_41953);

(statearr_42014_42059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (36))){
var inst_41983 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42015_42060 = state_41997__$1;
(statearr_42015_42060[(2)] = inst_41983);

(statearr_42015_42060[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (29))){
var inst_41963 = (state_41997[(2)]);
var inst_41964 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41965 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41964);
var state_41997__$1 = (function (){var statearr_42016 = state_41997;
(statearr_42016[(9)] = inst_41963);

return statearr_42016;
})();
var statearr_42017_42061 = state_41997__$1;
(statearr_42017_42061[(2)] = inst_41965);

(statearr_42017_42061[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (6))){
var inst_41912 = (state_41997[(10)]);
var state_41997__$1 = state_41997;
var statearr_42018_42062 = state_41997__$1;
(statearr_42018_42062[(2)] = inst_41912);

(statearr_42018_42062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (28))){
var inst_41959 = (state_41997[(2)]);
var inst_41960 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41961 = figwheel.client.heads_up.display_warning.call(null,inst_41960);
var state_41997__$1 = (function (){var statearr_42019 = state_41997;
(statearr_42019[(11)] = inst_41959);

return statearr_42019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(29),inst_41961);
} else {
if((state_val_41998 === (25))){
var inst_41957 = figwheel.client.heads_up.clear.call(null);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(28),inst_41957);
} else {
if((state_val_41998 === (34))){
var inst_41978 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(37),inst_41978);
} else {
if((state_val_41998 === (17))){
var inst_41937 = (state_41997[(2)]);
var inst_41938 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41939 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41938);
var state_41997__$1 = (function (){var statearr_42020 = state_41997;
(statearr_42020[(12)] = inst_41937);

return statearr_42020;
})();
var statearr_42021_42063 = state_41997__$1;
(statearr_42021_42063[(2)] = inst_41939);

(statearr_42021_42063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (3))){
var inst_41929 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41929)){
var statearr_42022_42064 = state_41997__$1;
(statearr_42022_42064[(1)] = (13));

} else {
var statearr_42023_42065 = state_41997__$1;
(statearr_42023_42065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (12))){
var inst_41925 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42024_42066 = state_41997__$1;
(statearr_42024_42066[(2)] = inst_41925);

(statearr_42024_42066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (2))){
var inst_41912 = (state_41997[(10)]);
var inst_41912__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41997__$1 = (function (){var statearr_42025 = state_41997;
(statearr_42025[(10)] = inst_41912__$1);

return statearr_42025;
})();
if(cljs.core.truth_(inst_41912__$1)){
var statearr_42026_42067 = state_41997__$1;
(statearr_42026_42067[(1)] = (5));

} else {
var statearr_42027_42068 = state_41997__$1;
(statearr_42027_42068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (23))){
var inst_41955 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41955)){
var statearr_42028_42069 = state_41997__$1;
(statearr_42028_42069[(1)] = (25));

} else {
var statearr_42029_42070 = state_41997__$1;
(statearr_42029_42070[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (35))){
var state_41997__$1 = state_41997;
var statearr_42030_42071 = state_41997__$1;
(statearr_42030_42071[(2)] = null);

(statearr_42030_42071[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (19))){
var inst_41950 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41950)){
var statearr_42031_42072 = state_41997__$1;
(statearr_42031_42072[(1)] = (22));

} else {
var statearr_42032_42073 = state_41997__$1;
(statearr_42032_42073[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (11))){
var inst_41921 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42033_42074 = state_41997__$1;
(statearr_42033_42074[(2)] = inst_41921);

(statearr_42033_42074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (9))){
var inst_41923 = figwheel.client.heads_up.clear.call(null);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(12),inst_41923);
} else {
if((state_val_41998 === (5))){
var inst_41914 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41997__$1 = state_41997;
var statearr_42034_42075 = state_41997__$1;
(statearr_42034_42075[(2)] = inst_41914);

(statearr_42034_42075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (14))){
var inst_41941 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41941)){
var statearr_42035_42076 = state_41997__$1;
(statearr_42035_42076[(1)] = (18));

} else {
var statearr_42036_42077 = state_41997__$1;
(statearr_42036_42077[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (26))){
var inst_41967 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41967)){
var statearr_42037_42078 = state_41997__$1;
(statearr_42037_42078[(1)] = (30));

} else {
var statearr_42038_42079 = state_41997__$1;
(statearr_42038_42079[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (16))){
var inst_41933 = (state_41997[(2)]);
var inst_41934 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41935 = figwheel.client.heads_up.display_exception.call(null,inst_41934);
var state_41997__$1 = (function (){var statearr_42039 = state_41997;
(statearr_42039[(13)] = inst_41933);

return statearr_42039;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(17),inst_41935);
} else {
if((state_val_41998 === (30))){
var inst_41969 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41970 = figwheel.client.heads_up.display_warning.call(null,inst_41969);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(33),inst_41970);
} else {
if((state_val_41998 === (10))){
var inst_41927 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42040_42080 = state_41997__$1;
(statearr_42040_42080[(2)] = inst_41927);

(statearr_42040_42080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (18))){
var inst_41943 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41944 = figwheel.client.heads_up.display_exception.call(null,inst_41943);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(21),inst_41944);
} else {
if((state_val_41998 === (37))){
var inst_41980 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42041_42081 = state_41997__$1;
(statearr_42041_42081[(2)] = inst_41980);

(statearr_42041_42081[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (8))){
var inst_41919 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41997__$1,(11),inst_41919);
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
}
});})(c__26081__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25990__auto__,c__26081__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto____0 = (function (){
var statearr_42042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42042[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto__);

(statearr_42042[(1)] = (1));

return statearr_42042;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto____1 = (function (state_41997){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_41997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e42043){if((e42043 instanceof Object)){
var ex__25994__auto__ = e42043;
var statearr_42044_42082 = state_41997;
(statearr_42044_42082[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42083 = state_41997;
state_41997 = G__42083;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto__ = function(state_41997){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto____1.call(this,state_41997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__,msg_hist,msg_names,msg))
})();
var state__26083__auto__ = (function (){var statearr_42045 = f__26082__auto__.call(null);
(statearr_42045[(6)] = c__26081__auto__);

return statearr_42045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__,msg_hist,msg_names,msg))
);

return c__26081__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26081__auto___42112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___42112,ch){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___42112,ch){
return (function (state_42098){
var state_val_42099 = (state_42098[(1)]);
if((state_val_42099 === (1))){
var state_42098__$1 = state_42098;
var statearr_42100_42113 = state_42098__$1;
(statearr_42100_42113[(2)] = null);

(statearr_42100_42113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42099 === (2))){
var state_42098__$1 = state_42098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42098__$1,(4),ch);
} else {
if((state_val_42099 === (3))){
var inst_42096 = (state_42098[(2)]);
var state_42098__$1 = state_42098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42098__$1,inst_42096);
} else {
if((state_val_42099 === (4))){
var inst_42086 = (state_42098[(7)]);
var inst_42086__$1 = (state_42098[(2)]);
var state_42098__$1 = (function (){var statearr_42101 = state_42098;
(statearr_42101[(7)] = inst_42086__$1);

return statearr_42101;
})();
if(cljs.core.truth_(inst_42086__$1)){
var statearr_42102_42114 = state_42098__$1;
(statearr_42102_42114[(1)] = (5));

} else {
var statearr_42103_42115 = state_42098__$1;
(statearr_42103_42115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42099 === (5))){
var inst_42086 = (state_42098[(7)]);
var inst_42088 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42086);
var state_42098__$1 = state_42098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42098__$1,(8),inst_42088);
} else {
if((state_val_42099 === (6))){
var state_42098__$1 = state_42098;
var statearr_42104_42116 = state_42098__$1;
(statearr_42104_42116[(2)] = null);

(statearr_42104_42116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42099 === (7))){
var inst_42094 = (state_42098[(2)]);
var state_42098__$1 = state_42098;
var statearr_42105_42117 = state_42098__$1;
(statearr_42105_42117[(2)] = inst_42094);

(statearr_42105_42117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42099 === (8))){
var inst_42090 = (state_42098[(2)]);
var state_42098__$1 = (function (){var statearr_42106 = state_42098;
(statearr_42106[(8)] = inst_42090);

return statearr_42106;
})();
var statearr_42107_42118 = state_42098__$1;
(statearr_42107_42118[(2)] = null);

(statearr_42107_42118[(1)] = (2));


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
});})(c__26081__auto___42112,ch))
;
return ((function (switch__25990__auto__,c__26081__auto___42112,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25991__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25991__auto____0 = (function (){
var statearr_42108 = [null,null,null,null,null,null,null,null,null];
(statearr_42108[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25991__auto__);

(statearr_42108[(1)] = (1));

return statearr_42108;
});
var figwheel$client$heads_up_plugin_$_state_machine__25991__auto____1 = (function (state_42098){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_42098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e42109){if((e42109 instanceof Object)){
var ex__25994__auto__ = e42109;
var statearr_42110_42119 = state_42098;
(statearr_42110_42119[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42120 = state_42098;
state_42098 = G__42120;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25991__auto__ = function(state_42098){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25991__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25991__auto____1.call(this,state_42098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25991__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25991__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___42112,ch))
})();
var state__26083__auto__ = (function (){var statearr_42111 = f__26082__auto__.call(null);
(statearr_42111[(6)] = c__26081__auto___42112);

return statearr_42111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___42112,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__){
return (function (state_42126){
var state_val_42127 = (state_42126[(1)]);
if((state_val_42127 === (1))){
var inst_42121 = cljs.core.async.timeout.call(null,(3000));
var state_42126__$1 = state_42126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42126__$1,(2),inst_42121);
} else {
if((state_val_42127 === (2))){
var inst_42123 = (state_42126[(2)]);
var inst_42124 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42126__$1 = (function (){var statearr_42128 = state_42126;
(statearr_42128[(7)] = inst_42123);

return statearr_42128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42126__$1,inst_42124);
} else {
return null;
}
}
});})(c__26081__auto__))
;
return ((function (switch__25990__auto__,c__26081__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25991__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25991__auto____0 = (function (){
var statearr_42129 = [null,null,null,null,null,null,null,null];
(statearr_42129[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25991__auto__);

(statearr_42129[(1)] = (1));

return statearr_42129;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25991__auto____1 = (function (state_42126){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_42126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e42130){if((e42130 instanceof Object)){
var ex__25994__auto__ = e42130;
var statearr_42131_42133 = state_42126;
(statearr_42131_42133[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42134 = state_42126;
state_42126 = G__42134;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25991__auto__ = function(state_42126){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25991__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25991__auto____1.call(this,state_42126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25991__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25991__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__))
})();
var state__26083__auto__ = (function (){var statearr_42132 = f__26082__auto__.call(null);
(statearr_42132[(6)] = c__26081__auto__);

return statearr_42132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__))
);

return c__26081__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__,figwheel_version,temp__5457__auto__){
return (function (state_42141){
var state_val_42142 = (state_42141[(1)]);
if((state_val_42142 === (1))){
var inst_42135 = cljs.core.async.timeout.call(null,(2000));
var state_42141__$1 = state_42141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42141__$1,(2),inst_42135);
} else {
if((state_val_42142 === (2))){
var inst_42137 = (state_42141[(2)]);
var inst_42138 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42139 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42138);
var state_42141__$1 = (function (){var statearr_42143 = state_42141;
(statearr_42143[(7)] = inst_42137);

return statearr_42143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42141__$1,inst_42139);
} else {
return null;
}
}
});})(c__26081__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__25990__auto__,c__26081__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto____0 = (function (){
var statearr_42144 = [null,null,null,null,null,null,null,null];
(statearr_42144[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto__);

(statearr_42144[(1)] = (1));

return statearr_42144;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto____1 = (function (state_42141){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_42141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e42145){if((e42145 instanceof Object)){
var ex__25994__auto__ = e42145;
var statearr_42146_42148 = state_42141;
(statearr_42146_42148[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42149 = state_42141;
state_42141 = G__42149;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto__ = function(state_42141){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto____1.call(this,state_42141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26083__auto__ = (function (){var statearr_42147 = f__26082__auto__.call(null);
(statearr_42147[(6)] = c__26081__auto__);

return statearr_42147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__,figwheel_version,temp__5457__auto__))
);

return c__26081__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42150){
var map__42151 = p__42150;
var map__42151__$1 = ((((!((map__42151 == null)))?(((((map__42151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42151):map__42151);
var file = cljs.core.get.call(null,map__42151__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42151__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42151__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42153 = "";
var G__42153__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42153),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42153);
var G__42153__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42153__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42153__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42153__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42153__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42154){
var map__42155 = p__42154;
var map__42155__$1 = ((((!((map__42155 == null)))?(((((map__42155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42155):map__42155);
var ed = map__42155__$1;
var formatted_exception = cljs.core.get.call(null,map__42155__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42155__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42155__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42157_42161 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42158_42162 = null;
var count__42159_42163 = (0);
var i__42160_42164 = (0);
while(true){
if((i__42160_42164 < count__42159_42163)){
var msg_42165 = cljs.core._nth.call(null,chunk__42158_42162,i__42160_42164);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42165);


var G__42166 = seq__42157_42161;
var G__42167 = chunk__42158_42162;
var G__42168 = count__42159_42163;
var G__42169 = (i__42160_42164 + (1));
seq__42157_42161 = G__42166;
chunk__42158_42162 = G__42167;
count__42159_42163 = G__42168;
i__42160_42164 = G__42169;
continue;
} else {
var temp__5457__auto___42170 = cljs.core.seq.call(null,seq__42157_42161);
if(temp__5457__auto___42170){
var seq__42157_42171__$1 = temp__5457__auto___42170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42157_42171__$1)){
var c__4351__auto___42172 = cljs.core.chunk_first.call(null,seq__42157_42171__$1);
var G__42173 = cljs.core.chunk_rest.call(null,seq__42157_42171__$1);
var G__42174 = c__4351__auto___42172;
var G__42175 = cljs.core.count.call(null,c__4351__auto___42172);
var G__42176 = (0);
seq__42157_42161 = G__42173;
chunk__42158_42162 = G__42174;
count__42159_42163 = G__42175;
i__42160_42164 = G__42176;
continue;
} else {
var msg_42177 = cljs.core.first.call(null,seq__42157_42171__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42177);


var G__42178 = cljs.core.next.call(null,seq__42157_42171__$1);
var G__42179 = null;
var G__42180 = (0);
var G__42181 = (0);
seq__42157_42161 = G__42178;
chunk__42158_42162 = G__42179;
count__42159_42163 = G__42180;
i__42160_42164 = G__42181;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42182){
var map__42183 = p__42182;
var map__42183__$1 = ((((!((map__42183 == null)))?(((((map__42183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42183):map__42183);
var w = map__42183__$1;
var message = cljs.core.get.call(null,map__42183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42185 = cljs.core.seq.call(null,plugins);
var chunk__42186 = null;
var count__42187 = (0);
var i__42188 = (0);
while(true){
if((i__42188 < count__42187)){
var vec__42189 = cljs.core._nth.call(null,chunk__42186,i__42188);
var k = cljs.core.nth.call(null,vec__42189,(0),null);
var plugin = cljs.core.nth.call(null,vec__42189,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42195 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42185,chunk__42186,count__42187,i__42188,pl_42195,vec__42189,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42195.call(null,msg_hist);
});})(seq__42185,chunk__42186,count__42187,i__42188,pl_42195,vec__42189,k,plugin))
);
} else {
}


var G__42196 = seq__42185;
var G__42197 = chunk__42186;
var G__42198 = count__42187;
var G__42199 = (i__42188 + (1));
seq__42185 = G__42196;
chunk__42186 = G__42197;
count__42187 = G__42198;
i__42188 = G__42199;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__42185);
if(temp__5457__auto__){
var seq__42185__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42185__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__42185__$1);
var G__42200 = cljs.core.chunk_rest.call(null,seq__42185__$1);
var G__42201 = c__4351__auto__;
var G__42202 = cljs.core.count.call(null,c__4351__auto__);
var G__42203 = (0);
seq__42185 = G__42200;
chunk__42186 = G__42201;
count__42187 = G__42202;
i__42188 = G__42203;
continue;
} else {
var vec__42192 = cljs.core.first.call(null,seq__42185__$1);
var k = cljs.core.nth.call(null,vec__42192,(0),null);
var plugin = cljs.core.nth.call(null,vec__42192,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42204 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42185,chunk__42186,count__42187,i__42188,pl_42204,vec__42192,k,plugin,seq__42185__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42204.call(null,msg_hist);
});})(seq__42185,chunk__42186,count__42187,i__42188,pl_42204,vec__42192,k,plugin,seq__42185__$1,temp__5457__auto__))
);
} else {
}


var G__42205 = cljs.core.next.call(null,seq__42185__$1);
var G__42206 = null;
var G__42207 = (0);
var G__42208 = (0);
seq__42185 = G__42205;
chunk__42186 = G__42206;
count__42187 = G__42207;
i__42188 = G__42208;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__42210 = arguments.length;
switch (G__42210) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42211_42216 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42212_42217 = null;
var count__42213_42218 = (0);
var i__42214_42219 = (0);
while(true){
if((i__42214_42219 < count__42213_42218)){
var msg_42220 = cljs.core._nth.call(null,chunk__42212_42217,i__42214_42219);
figwheel.client.socket.handle_incoming_message.call(null,msg_42220);


var G__42221 = seq__42211_42216;
var G__42222 = chunk__42212_42217;
var G__42223 = count__42213_42218;
var G__42224 = (i__42214_42219 + (1));
seq__42211_42216 = G__42221;
chunk__42212_42217 = G__42222;
count__42213_42218 = G__42223;
i__42214_42219 = G__42224;
continue;
} else {
var temp__5457__auto___42225 = cljs.core.seq.call(null,seq__42211_42216);
if(temp__5457__auto___42225){
var seq__42211_42226__$1 = temp__5457__auto___42225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42211_42226__$1)){
var c__4351__auto___42227 = cljs.core.chunk_first.call(null,seq__42211_42226__$1);
var G__42228 = cljs.core.chunk_rest.call(null,seq__42211_42226__$1);
var G__42229 = c__4351__auto___42227;
var G__42230 = cljs.core.count.call(null,c__4351__auto___42227);
var G__42231 = (0);
seq__42211_42216 = G__42228;
chunk__42212_42217 = G__42229;
count__42213_42218 = G__42230;
i__42214_42219 = G__42231;
continue;
} else {
var msg_42232 = cljs.core.first.call(null,seq__42211_42226__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42232);


var G__42233 = cljs.core.next.call(null,seq__42211_42226__$1);
var G__42234 = null;
var G__42235 = (0);
var G__42236 = (0);
seq__42211_42216 = G__42233;
chunk__42212_42217 = G__42234;
count__42213_42218 = G__42235;
i__42214_42219 = G__42236;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___42241 = arguments.length;
var i__4532__auto___42242 = (0);
while(true){
if((i__4532__auto___42242 < len__4531__auto___42241)){
args__4534__auto__.push((arguments[i__4532__auto___42242]));

var G__42243 = (i__4532__auto___42242 + (1));
i__4532__auto___42242 = G__42243;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42238){
var map__42239 = p__42238;
var map__42239__$1 = ((((!((map__42239 == null)))?(((((map__42239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42239):map__42239);
var opts = map__42239__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42237){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42237));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42244){if((e42244 instanceof Error)){
var e = e42244;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42244;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__42245){
var map__42246 = p__42245;
var map__42246__$1 = ((((!((map__42246 == null)))?(((((map__42246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42246):map__42246);
var msg_name = cljs.core.get.call(null,map__42246__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1534986066348
