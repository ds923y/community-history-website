// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.utils.utils');
goog.require('cljs.core');
day8.re_frame_10x.utils.utils.diff_link = "https://github.com/Day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/Diffs.md";
/**
 * Get the last element in the vector
 */
day8.re_frame_10x.utils.utils.last_in_vec = (function day8$re_frame_10x$utils$utils$last_in_vec(v){
return cljs.core.nth.call(null,v,(cljs.core.count.call(null,v) - (1)));
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame_10x.utils.utils.find_all_indexes_in_vec = (function day8$re_frame_10x$utils$utils$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.call(null,(function (p1__38163_SHARP_,p2__38162_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__38162_SHARP_))){
return p1__38163_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame_10x.utils.utils.find_index_in_vec = (function day8$re_frame_10x$utils$utils$find_index_in_vec(pred,v){
return cljs.core.first.call(null,day8.re_frame_10x.utils.utils.find_all_indexes_in_vec.call(null,pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame_10x.utils.utils.id_between_xf = (function day8$re_frame_10x$utils$utils$id_between_xf(beginning,ending){
return cljs.core.filter.call(null,(function (p1__38164_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38164_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38164_SHARP_) <= ending)));
}));
});
day8.re_frame_10x.utils.utils.spy = (function day8$re_frame_10x$utils$utils$spy(var_args){
var G__38166 = arguments.length;
switch (G__38166) {
case 1:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1 = (function (x){
console.log(x);

return x;
});

day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
console.log(label,x);

return x;
});

day8.re_frame_10x.utils.utils.spy.cljs$lang$maxFixedArity = 2;

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.utils.utils.pluralize = (function day8$re_frame_10x$utils$utils$pluralize(var_args){
var args__4534__auto__ = [];
var len__4531__auto___38175 = arguments.length;
var i__4532__auto___38176 = (0);
while(true){
if((i__4532__auto___38176 < len__4531__auto___38175)){
args__4534__auto__.push((arguments[i__4532__auto___38176]));

var G__38177 = (i__4532__auto___38176 + (1));
i__4532__auto___38176 = G__38177;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__38171){
var vec__38172 = p__38171;
var plural = cljs.core.nth.call(null,vec__38172,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),num))?singular:(function (){var or__3949__auto__ = plural;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
});

day8.re_frame_10x.utils.utils.pluralize.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.utils.utils.pluralize.cljs$lang$applyTo = (function (seq38168){
var G__38169 = cljs.core.first.call(null,seq38168);
var seq38168__$1 = cljs.core.next.call(null,seq38168);
var G__38170 = cljs.core.first.call(null,seq38168__$1);
var seq38168__$2 = cljs.core.next.call(null,seq38168__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38169,G__38170,seq38168__$2);
});

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.utils.utils.pluralize_ = (function day8$re_frame_10x$utils$utils$pluralize_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___38185 = arguments.length;
var i__4532__auto___38186 = (0);
while(true){
if((i__4532__auto___38186 < len__4531__auto___38185)){
args__4534__auto__.push((arguments[i__4532__auto___38186]));

var G__38187 = (i__4532__auto___38186 + (1));
i__4532__auto___38186 = G__38187;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__38181){
var vec__38182 = p__38181;
var plural = cljs.core.nth.call(null,vec__38182,(0),null);
if(cljs.core._EQ_.call(null,(1),num)){
return singular;
} else {
var or__3949__auto__ = plural;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$applyTo = (function (seq38178){
var G__38179 = cljs.core.first.call(null,seq38178);
var seq38178__$1 = cljs.core.next.call(null,seq38178);
var G__38180 = cljs.core.first.call(null,seq38178__$1);
var seq38178__$2 = cljs.core.next.call(null,seq38178__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38179,G__38180,seq38178__$2);
});

day8.re_frame_10x.utils.utils.copy_to_clipboard = (function day8$re_frame_10x$utils$utils$copy_to_clipboard(text){
var el = document.createElement("textarea");
el.value = text;

el.style.position = "absolute";

el.style.left = "-9999px";

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});

//# sourceMappingURL=utils.js.map?rel=1534986059339
