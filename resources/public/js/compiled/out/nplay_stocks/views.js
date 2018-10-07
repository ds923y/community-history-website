// Compiled by ClojureScript 1.10.339 {}
goog.provide('nplay_stocks.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('re_pressed.core');
goog.require('nplay_stocks.events');
goog.require('nplay_stocks.subs');
nplay_stocks.views.dispatch_keydown_rules = (function nplay_stocks$views$dispatch_keydown_rules(){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nplay-stocks.events","set-re-pressed-example","nplay-stocks.events/set-re-pressed-example",-2083436583),"Hello, world!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(72)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(69)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(76)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(76)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(79)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-it","request-it",-900096096)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(13)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(27)], null)], null)], null)], null)], null));
});
nplay_stocks.views.display_re_pressed_example = (function nplay_stocks$views$display_re_pressed_example(){
var re_pressed_example = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nplay-stocks.subs","re-pressed-example","nplay-stocks.subs/re-pressed-example",2141518543)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Re-pressed is listening for keydown events. However, re-pressed\n      won't trigger any events until you set some keydown rules."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),nplay_stocks.views.dispatch_keydown_rules,new cljs.core.Keyword(null,"label","label",1718410804),"set keydown rules"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After clicking the button, you will have defined a rule that\n       will display a message when you type "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"hello"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),". So go ahead, try it out!"], null)], null),(function (){var temp__5457__auto__ = cljs.core.deref.call(null,re_pressed_example);
if(cljs.core.truth_(temp__5457__auto__)){
var rpe = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"body","body",-2049205669),rpe], null);
} else {
return null;
}
})()], null);
});
nplay_stocks.views.title = (function nplay_stocks$views$title(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nplay-stocks.subs","name","nplay-stocks.subs/name",-1805712136)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Hello from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,name))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
nplay_stocks.views.request_it_button = (function nplay_stocks$views$request_it_button(){
var model = reagent.core.atom.call(null,"");
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
nplay_stocks.views.hello_component = (function nplay_stocks$views$hello_component(){
var dom_node = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (dom_node){
return (function (x){
if(cljs.core.truth_(cljs.core.deref.call(null,dom_node))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-dom-node","send-dom-node",-783256692),dom_node], null));
} else {
return null;
}
});})(dom_node))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (dom_node){
return (function (x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"under"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (dom_node){
return (function (y){
return cljs.core.reset_BANG_.call(null,dom_node,y);
});})(dom_node))
], null),"loading"], null)], null);
});})(dom_node))
,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),((function (dom_node){
return (function (x){
return cljs.core.reset_BANG_.call(null,dom_node,null);
});})(dom_node))
], null));
});
nplay_stocks.views.new_todo_input = (function nplay_stocks$views$new_todo_input(){
var val = reagent.core.atom.call(null,"");
var stop = ((function (val){
return (function (){
return cljs.core.reset_BANG_.call(null,val,"");
});})(val))
;
var save = ((function (val,stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''));
if(cljs.core.seq.call(null,v)){
cljs.core.identity.call(null,v);
} else {
}

return stop.call(null);
});})(val,stop))
;
return ((function (val,stop,save){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),val,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter a new todo",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,stop,save){
return (function (p1__30553_SHARP_){
cljs.core.reset_BANG_.call(null,val,p1__30553_SHARP_);

return save.call(null);
});})(val,stop,save))
,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true], null)], null);
});
;})(val,stop,save))
});
nplay_stocks.views.click_count = reagent.core.atom.call(null,(0));
nplay_stocks.views.counting_component = (function nplay_stocks$views$counting_component(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value: ",cljs.core.deref.call(null,nplay_stocks.views.click_count),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,nplay_stocks.views.click_count,cljs.core.inc);
})], null)], null)], null);
});
nplay_stocks.views.main_panel = (function nplay_stocks$views$main_panel(){
var model = reagent.core.atom.call(null,"");
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nplay_stocks.views.title], null),nplay_stocks.views.counting_component.call(null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (model){
return (function (p1__30554_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-text","store-text",395321315),p1__30554_SHARP_], null));
});})(model))
,new cljs.core.Keyword(null,"model","model",331153215),model], null),nplay_stocks.views.request_it_button.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nplay_stocks.views.hello_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"high"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nplay_stocks.views.display_re_pressed_example], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1537206478853
