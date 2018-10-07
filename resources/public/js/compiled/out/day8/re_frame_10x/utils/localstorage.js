// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__40076 = arguments.length;
switch (G__40076) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__40078 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__40079 = null;
var count__40080 = (0);
var i__40081 = (0);
while(true){
if((i__40081 < count__40080)){
var k = cljs.core._nth.call(null,chunk__40079,i__40081);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__40082 = seq__40078;
var G__40083 = chunk__40079;
var G__40084 = count__40080;
var G__40085 = (i__40081 + (1));
seq__40078 = G__40082;
chunk__40079 = G__40083;
count__40080 = G__40084;
i__40081 = G__40085;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40078);
if(temp__5457__auto__){
var seq__40078__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40078__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__40078__$1);
var G__40086 = cljs.core.chunk_rest.call(null,seq__40078__$1);
var G__40087 = c__4351__auto__;
var G__40088 = cljs.core.count.call(null,c__4351__auto__);
var G__40089 = (0);
seq__40078 = G__40086;
chunk__40079 = G__40087;
count__40080 = G__40088;
i__40081 = G__40089;
continue;
} else {
var k = cljs.core.first.call(null,seq__40078__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__40090 = cljs.core.next.call(null,seq__40078__$1);
var G__40091 = null;
var G__40092 = (0);
var G__40093 = (0);
seq__40078 = G__40090;
chunk__40079 = G__40091;
count__40080 = G__40092;
i__40081 = G__40093;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1534986062730
