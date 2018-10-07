// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32300){
var map__32301 = p__32300;
var map__32301__$1 = ((((!((map__32301 == null)))?(((((map__32301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32301):map__32301);
var m = map__32301__$1;
var n = cljs.core.get.call(null,map__32301__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32301__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32303_32325 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32304_32326 = null;
var count__32305_32327 = (0);
var i__32306_32328 = (0);
while(true){
if((i__32306_32328 < count__32305_32327)){
var f_32329 = cljs.core._nth.call(null,chunk__32304_32326,i__32306_32328);
cljs.core.println.call(null,"  ",f_32329);


var G__32330 = seq__32303_32325;
var G__32331 = chunk__32304_32326;
var G__32332 = count__32305_32327;
var G__32333 = (i__32306_32328 + (1));
seq__32303_32325 = G__32330;
chunk__32304_32326 = G__32331;
count__32305_32327 = G__32332;
i__32306_32328 = G__32333;
continue;
} else {
var temp__5457__auto___32334 = cljs.core.seq.call(null,seq__32303_32325);
if(temp__5457__auto___32334){
var seq__32303_32335__$1 = temp__5457__auto___32334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32303_32335__$1)){
var c__4351__auto___32336 = cljs.core.chunk_first.call(null,seq__32303_32335__$1);
var G__32337 = cljs.core.chunk_rest.call(null,seq__32303_32335__$1);
var G__32338 = c__4351__auto___32336;
var G__32339 = cljs.core.count.call(null,c__4351__auto___32336);
var G__32340 = (0);
seq__32303_32325 = G__32337;
chunk__32304_32326 = G__32338;
count__32305_32327 = G__32339;
i__32306_32328 = G__32340;
continue;
} else {
var f_32341 = cljs.core.first.call(null,seq__32303_32335__$1);
cljs.core.println.call(null,"  ",f_32341);


var G__32342 = cljs.core.next.call(null,seq__32303_32335__$1);
var G__32343 = null;
var G__32344 = (0);
var G__32345 = (0);
seq__32303_32325 = G__32342;
chunk__32304_32326 = G__32343;
count__32305_32327 = G__32344;
i__32306_32328 = G__32345;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32346 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32346);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32346)))?cljs.core.second.call(null,arglists_32346):arglists_32346));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32307_32347 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32308_32348 = null;
var count__32309_32349 = (0);
var i__32310_32350 = (0);
while(true){
if((i__32310_32350 < count__32309_32349)){
var vec__32311_32351 = cljs.core._nth.call(null,chunk__32308_32348,i__32310_32350);
var name_32352 = cljs.core.nth.call(null,vec__32311_32351,(0),null);
var map__32314_32353 = cljs.core.nth.call(null,vec__32311_32351,(1),null);
var map__32314_32354__$1 = ((((!((map__32314_32353 == null)))?(((((map__32314_32353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32314_32353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32314_32353):map__32314_32353);
var doc_32355 = cljs.core.get.call(null,map__32314_32354__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32356 = cljs.core.get.call(null,map__32314_32354__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32352);

cljs.core.println.call(null," ",arglists_32356);

if(cljs.core.truth_(doc_32355)){
cljs.core.println.call(null," ",doc_32355);
} else {
}


var G__32357 = seq__32307_32347;
var G__32358 = chunk__32308_32348;
var G__32359 = count__32309_32349;
var G__32360 = (i__32310_32350 + (1));
seq__32307_32347 = G__32357;
chunk__32308_32348 = G__32358;
count__32309_32349 = G__32359;
i__32310_32350 = G__32360;
continue;
} else {
var temp__5457__auto___32361 = cljs.core.seq.call(null,seq__32307_32347);
if(temp__5457__auto___32361){
var seq__32307_32362__$1 = temp__5457__auto___32361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32307_32362__$1)){
var c__4351__auto___32363 = cljs.core.chunk_first.call(null,seq__32307_32362__$1);
var G__32364 = cljs.core.chunk_rest.call(null,seq__32307_32362__$1);
var G__32365 = c__4351__auto___32363;
var G__32366 = cljs.core.count.call(null,c__4351__auto___32363);
var G__32367 = (0);
seq__32307_32347 = G__32364;
chunk__32308_32348 = G__32365;
count__32309_32349 = G__32366;
i__32310_32350 = G__32367;
continue;
} else {
var vec__32316_32368 = cljs.core.first.call(null,seq__32307_32362__$1);
var name_32369 = cljs.core.nth.call(null,vec__32316_32368,(0),null);
var map__32319_32370 = cljs.core.nth.call(null,vec__32316_32368,(1),null);
var map__32319_32371__$1 = ((((!((map__32319_32370 == null)))?(((((map__32319_32370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32319_32370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32319_32370):map__32319_32370);
var doc_32372 = cljs.core.get.call(null,map__32319_32371__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32373 = cljs.core.get.call(null,map__32319_32371__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32369);

cljs.core.println.call(null," ",arglists_32373);

if(cljs.core.truth_(doc_32372)){
cljs.core.println.call(null," ",doc_32372);
} else {
}


var G__32374 = cljs.core.next.call(null,seq__32307_32362__$1);
var G__32375 = null;
var G__32376 = (0);
var G__32377 = (0);
seq__32307_32347 = G__32374;
chunk__32308_32348 = G__32375;
count__32309_32349 = G__32376;
i__32310_32350 = G__32377;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__32321 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32322 = null;
var count__32323 = (0);
var i__32324 = (0);
while(true){
if((i__32324 < count__32323)){
var role = cljs.core._nth.call(null,chunk__32322,i__32324);
var temp__5457__auto___32378__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32378__$1)){
var spec_32379 = temp__5457__auto___32378__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32379));
} else {
}


var G__32380 = seq__32321;
var G__32381 = chunk__32322;
var G__32382 = count__32323;
var G__32383 = (i__32324 + (1));
seq__32321 = G__32380;
chunk__32322 = G__32381;
count__32323 = G__32382;
i__32324 = G__32383;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32321);
if(temp__5457__auto____$1){
var seq__32321__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32321__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32321__$1);
var G__32384 = cljs.core.chunk_rest.call(null,seq__32321__$1);
var G__32385 = c__4351__auto__;
var G__32386 = cljs.core.count.call(null,c__4351__auto__);
var G__32387 = (0);
seq__32321 = G__32384;
chunk__32322 = G__32385;
count__32323 = G__32386;
i__32324 = G__32387;
continue;
} else {
var role = cljs.core.first.call(null,seq__32321__$1);
var temp__5457__auto___32388__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32388__$2)){
var spec_32389 = temp__5457__auto___32388__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32389));
} else {
}


var G__32390 = cljs.core.next.call(null,seq__32321__$1);
var G__32391 = null;
var G__32392 = (0);
var G__32393 = (0);
seq__32321 = G__32390;
chunk__32322 = G__32391;
count__32323 = G__32392;
i__32324 = G__32393;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1534986045513
