// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson048.garden.v1v3v3.garden.compression');
goog.require('cljs.core');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
mranderson048.garden.v1v3v3.garden.compression.token_fn = (function mranderson048$garden$v1v3v3$garden$compression$token_fn(p__39275){
var vec__39276 = p__39275;
var tag = cljs.core.nth.call(null,vec__39276,(0),null);
var re = cljs.core.nth.call(null,vec__39276,(1),null);
return ((function (vec__39276,tag,re){
return (function (s){
var temp__5457__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__5457__auto__)){
var chunk = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"chunk","chunk",-1191159620),chunk,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.count.call(null,chunk)], null);
} else {
return null;
}
});
;})(vec__39276,tag,re))
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
mranderson048.garden.v1v3v3.garden.compression.tokenizer = (function mranderson048$garden$v1v3v3$garden$compression$tokenizer(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39281 = arguments.length;
var i__4532__auto___39282 = (0);
while(true){
if((i__4532__auto___39282 < len__4531__auto___39281)){
args__4534__auto__.push((arguments[i__4532__auto___39282]));

var G__39283 = (i__4532__auto___39282 + (1));
i__4532__auto___39282 = G__39283;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mranderson048.garden.v1v3v3.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compression.token_fn,tags_PLUS_regexes);
return ((function (fs){
return (function (s){
return cljs.core.some.call(null,((function (fs){
return (function (p1__39279_SHARP_){
return p1__39279_SHARP_.call(null,s);
});})(fs))
,fs);
});
;})(fs))
});

mranderson048.garden.v1v3v3.garden.compression.tokenizer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.compression.tokenizer.cljs$lang$applyTo = (function (seq39280){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39280));
});

/**
 * Tokenizer used during stylesheet compression.
 */
mranderson048.garden.v1v3v3.garden.compression.stylesheet_tokenizer = mranderson048.garden.v1v3v3.garden.compression.tokenizer.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-brace","r-brace",-1335738887),/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-brace","l-brace",613286657),/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-paren","r-paren",-1688338021),/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-paren","l-paren",2052672514),/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colon","colon",-965200945),/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semicolon","semicolon",797086549),/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space+","space+",378127624),/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"white-space+","white-space+",1452157162),/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),/^./], null));
/**
 * Compress a string of CSS using a basic compressor.
 */
mranderson048.garden.v1v3v3.garden.compression.compress_stylesheet = (function mranderson048$garden$v1v3v3$garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__5455__auto__ = mranderson048.garden.v1v3v3.garden.compression.stylesheet_tokenizer.call(null,s1);
if(cljs.core.truth_(temp__5455__auto__)){
var map__39284 = temp__5455__auto__;
var map__39284__$1 = ((((!((map__39284 == null)))?(((((map__39284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39284):map__39284);
var tag = cljs.core.get.call(null,map__39284__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var chunk = cljs.core.get.call(null,map__39284__$1,new cljs.core.Keyword(null,"chunk","chunk",-1191159620));
var size = cljs.core.get.call(null,map__39284__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var G__39287 = cljs.core.subs.call(null,s1,size);
var G__39288 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__39286 = tag;
var G__39286__$1 = (((G__39286 instanceof cljs.core.Keyword))?G__39286.fqn:null);
switch (G__39286__$1) {
case "string":
return chunk;

break;
case "r-brace":
return "{";

break;
case "l-brace":
return "}";

break;
case "r-paren":
return "(";

break;
case "l-paren":
return ")";

break;
case "comma":
return ",";

break;
case "semi-comma":
return ";";

break;
case "colon":
return ":";

break;
case "space+":
return " ";

break;
case "white-space+":
return "";

break;
default:
return chunk;

}
})())].join('');
s1 = G__39287;
s2 = G__39288;
continue;
} else {
return s2;
}
break;
}
});

//# sourceMappingURL=compression.js.map?rel=1534986061485
