// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40904_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40904_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40905 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40906 = null;
var count__40907 = (0);
var i__40908 = (0);
while(true){
if((i__40908 < count__40907)){
var n = cljs.core._nth.call(null,chunk__40906,i__40908);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__40909 = seq__40905;
var G__40910 = chunk__40906;
var G__40911 = count__40907;
var G__40912 = (i__40908 + (1));
seq__40905 = G__40909;
chunk__40906 = G__40910;
count__40907 = G__40911;
i__40908 = G__40912;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40905);
if(temp__5457__auto__){
var seq__40905__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40905__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__40905__$1);
var G__40913 = cljs.core.chunk_rest.call(null,seq__40905__$1);
var G__40914 = c__4351__auto__;
var G__40915 = cljs.core.count.call(null,c__4351__auto__);
var G__40916 = (0);
seq__40905 = G__40913;
chunk__40906 = G__40914;
count__40907 = G__40915;
i__40908 = G__40916;
continue;
} else {
var n = cljs.core.first.call(null,seq__40905__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__40917 = cljs.core.next.call(null,seq__40905__$1);
var G__40918 = null;
var G__40919 = (0);
var G__40920 = (0);
seq__40905 = G__40917;
chunk__40906 = G__40918;
count__40907 = G__40919;
i__40908 = G__40920;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__40921){
var vec__40922 = p__40921;
var _ = cljs.core.nth.call(null,vec__40922,(0),null);
var v = cljs.core.nth.call(null,vec__40922,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__40925){
var vec__40926 = p__40925;
var k = cljs.core.nth.call(null,vec__40926,(0),null);
var v = cljs.core.nth.call(null,vec__40926,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40938_40946 = cljs.core.seq.call(null,deps);
var chunk__40939_40947 = null;
var count__40940_40948 = (0);
var i__40941_40949 = (0);
while(true){
if((i__40941_40949 < count__40940_40948)){
var dep_40950 = cljs.core._nth.call(null,chunk__40939_40947,i__40941_40949);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_40950;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40950));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40950,(depth + (1)),state);
} else {
}


var G__40951 = seq__40938_40946;
var G__40952 = chunk__40939_40947;
var G__40953 = count__40940_40948;
var G__40954 = (i__40941_40949 + (1));
seq__40938_40946 = G__40951;
chunk__40939_40947 = G__40952;
count__40940_40948 = G__40953;
i__40941_40949 = G__40954;
continue;
} else {
var temp__5457__auto___40955 = cljs.core.seq.call(null,seq__40938_40946);
if(temp__5457__auto___40955){
var seq__40938_40956__$1 = temp__5457__auto___40955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40938_40956__$1)){
var c__4351__auto___40957 = cljs.core.chunk_first.call(null,seq__40938_40956__$1);
var G__40958 = cljs.core.chunk_rest.call(null,seq__40938_40956__$1);
var G__40959 = c__4351__auto___40957;
var G__40960 = cljs.core.count.call(null,c__4351__auto___40957);
var G__40961 = (0);
seq__40938_40946 = G__40958;
chunk__40939_40947 = G__40959;
count__40940_40948 = G__40960;
i__40941_40949 = G__40961;
continue;
} else {
var dep_40962 = cljs.core.first.call(null,seq__40938_40956__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_40962;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40962));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40962,(depth + (1)),state);
} else {
}


var G__40963 = cljs.core.next.call(null,seq__40938_40956__$1);
var G__40964 = null;
var G__40965 = (0);
var G__40966 = (0);
seq__40938_40946 = G__40963;
chunk__40939_40947 = G__40964;
count__40940_40948 = G__40965;
i__40941_40949 = G__40966;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40942){
var vec__40943 = p__40942;
var seq__40944 = cljs.core.seq.call(null,vec__40943);
var first__40945 = cljs.core.first.call(null,seq__40944);
var seq__40944__$1 = cljs.core.next.call(null,seq__40944);
var x = first__40945;
var xs = seq__40944__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40943,seq__40944,first__40945,seq__40944__$1,x,xs,get_deps__$1){
return (function (p1__40929_SHARP_){
return clojure.set.difference.call(null,p1__40929_SHARP_,x);
});})(vec__40943,seq__40944,first__40945,seq__40944__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40967 = cljs.core.seq.call(null,provides);
var chunk__40968 = null;
var count__40969 = (0);
var i__40970 = (0);
while(true){
if((i__40970 < count__40969)){
var prov = cljs.core._nth.call(null,chunk__40968,i__40970);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40971_40979 = cljs.core.seq.call(null,requires);
var chunk__40972_40980 = null;
var count__40973_40981 = (0);
var i__40974_40982 = (0);
while(true){
if((i__40974_40982 < count__40973_40981)){
var req_40983 = cljs.core._nth.call(null,chunk__40972_40980,i__40974_40982);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40983,prov);


var G__40984 = seq__40971_40979;
var G__40985 = chunk__40972_40980;
var G__40986 = count__40973_40981;
var G__40987 = (i__40974_40982 + (1));
seq__40971_40979 = G__40984;
chunk__40972_40980 = G__40985;
count__40973_40981 = G__40986;
i__40974_40982 = G__40987;
continue;
} else {
var temp__5457__auto___40988 = cljs.core.seq.call(null,seq__40971_40979);
if(temp__5457__auto___40988){
var seq__40971_40989__$1 = temp__5457__auto___40988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40971_40989__$1)){
var c__4351__auto___40990 = cljs.core.chunk_first.call(null,seq__40971_40989__$1);
var G__40991 = cljs.core.chunk_rest.call(null,seq__40971_40989__$1);
var G__40992 = c__4351__auto___40990;
var G__40993 = cljs.core.count.call(null,c__4351__auto___40990);
var G__40994 = (0);
seq__40971_40979 = G__40991;
chunk__40972_40980 = G__40992;
count__40973_40981 = G__40993;
i__40974_40982 = G__40994;
continue;
} else {
var req_40995 = cljs.core.first.call(null,seq__40971_40989__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40995,prov);


var G__40996 = cljs.core.next.call(null,seq__40971_40989__$1);
var G__40997 = null;
var G__40998 = (0);
var G__40999 = (0);
seq__40971_40979 = G__40996;
chunk__40972_40980 = G__40997;
count__40973_40981 = G__40998;
i__40974_40982 = G__40999;
continue;
}
} else {
}
}
break;
}


var G__41000 = seq__40967;
var G__41001 = chunk__40968;
var G__41002 = count__40969;
var G__41003 = (i__40970 + (1));
seq__40967 = G__41000;
chunk__40968 = G__41001;
count__40969 = G__41002;
i__40970 = G__41003;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40967);
if(temp__5457__auto__){
var seq__40967__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40967__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__40967__$1);
var G__41004 = cljs.core.chunk_rest.call(null,seq__40967__$1);
var G__41005 = c__4351__auto__;
var G__41006 = cljs.core.count.call(null,c__4351__auto__);
var G__41007 = (0);
seq__40967 = G__41004;
chunk__40968 = G__41005;
count__40969 = G__41006;
i__40970 = G__41007;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40967__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40975_41008 = cljs.core.seq.call(null,requires);
var chunk__40976_41009 = null;
var count__40977_41010 = (0);
var i__40978_41011 = (0);
while(true){
if((i__40978_41011 < count__40977_41010)){
var req_41012 = cljs.core._nth.call(null,chunk__40976_41009,i__40978_41011);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41012,prov);


var G__41013 = seq__40975_41008;
var G__41014 = chunk__40976_41009;
var G__41015 = count__40977_41010;
var G__41016 = (i__40978_41011 + (1));
seq__40975_41008 = G__41013;
chunk__40976_41009 = G__41014;
count__40977_41010 = G__41015;
i__40978_41011 = G__41016;
continue;
} else {
var temp__5457__auto___41017__$1 = cljs.core.seq.call(null,seq__40975_41008);
if(temp__5457__auto___41017__$1){
var seq__40975_41018__$1 = temp__5457__auto___41017__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40975_41018__$1)){
var c__4351__auto___41019 = cljs.core.chunk_first.call(null,seq__40975_41018__$1);
var G__41020 = cljs.core.chunk_rest.call(null,seq__40975_41018__$1);
var G__41021 = c__4351__auto___41019;
var G__41022 = cljs.core.count.call(null,c__4351__auto___41019);
var G__41023 = (0);
seq__40975_41008 = G__41020;
chunk__40976_41009 = G__41021;
count__40977_41010 = G__41022;
i__40978_41011 = G__41023;
continue;
} else {
var req_41024 = cljs.core.first.call(null,seq__40975_41018__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41024,prov);


var G__41025 = cljs.core.next.call(null,seq__40975_41018__$1);
var G__41026 = null;
var G__41027 = (0);
var G__41028 = (0);
seq__40975_41008 = G__41025;
chunk__40976_41009 = G__41026;
count__40977_41010 = G__41027;
i__40978_41011 = G__41028;
continue;
}
} else {
}
}
break;
}


var G__41029 = cljs.core.next.call(null,seq__40967__$1);
var G__41030 = null;
var G__41031 = (0);
var G__41032 = (0);
seq__40967 = G__41029;
chunk__40968 = G__41030;
count__40969 = G__41031;
i__40970 = G__41032;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41033_41037 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41034_41038 = null;
var count__41035_41039 = (0);
var i__41036_41040 = (0);
while(true){
if((i__41036_41040 < count__41035_41039)){
var ns_41041 = cljs.core._nth.call(null,chunk__41034_41038,i__41036_41040);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41041);


var G__41042 = seq__41033_41037;
var G__41043 = chunk__41034_41038;
var G__41044 = count__41035_41039;
var G__41045 = (i__41036_41040 + (1));
seq__41033_41037 = G__41042;
chunk__41034_41038 = G__41043;
count__41035_41039 = G__41044;
i__41036_41040 = G__41045;
continue;
} else {
var temp__5457__auto___41046 = cljs.core.seq.call(null,seq__41033_41037);
if(temp__5457__auto___41046){
var seq__41033_41047__$1 = temp__5457__auto___41046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41033_41047__$1)){
var c__4351__auto___41048 = cljs.core.chunk_first.call(null,seq__41033_41047__$1);
var G__41049 = cljs.core.chunk_rest.call(null,seq__41033_41047__$1);
var G__41050 = c__4351__auto___41048;
var G__41051 = cljs.core.count.call(null,c__4351__auto___41048);
var G__41052 = (0);
seq__41033_41037 = G__41049;
chunk__41034_41038 = G__41050;
count__41035_41039 = G__41051;
i__41036_41040 = G__41052;
continue;
} else {
var ns_41053 = cljs.core.first.call(null,seq__41033_41047__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41053);


var G__41054 = cljs.core.next.call(null,seq__41033_41047__$1);
var G__41055 = null;
var G__41056 = (0);
var G__41057 = (0);
seq__41033_41037 = G__41054;
chunk__41034_41038 = G__41055;
count__41035_41039 = G__41056;
i__41036_41040 = G__41057;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__41058__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41059__i = 0, G__41059__a = new Array(arguments.length -  0);
while (G__41059__i < G__41059__a.length) {G__41059__a[G__41059__i] = arguments[G__41059__i + 0]; ++G__41059__i;}
  args = new cljs.core.IndexedSeq(G__41059__a,0,null);
} 
return G__41058__delegate.call(this,args);};
G__41058.cljs$lang$maxFixedArity = 0;
G__41058.cljs$lang$applyTo = (function (arglist__41060){
var args = cljs.core.seq(arglist__41060);
return G__41058__delegate(args);
});
G__41058.cljs$core$IFn$_invoke$arity$variadic = G__41058__delegate;
return G__41058;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__41061_SHARP_,p2__41062_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41061_SHARP_)].join('')),p2__41062_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__41063_SHARP_,p2__41064_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41063_SHARP_)].join(''),p2__41064_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__41065 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__41065.addCallback(((function (G__41065){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__41065))
);

G__41065.addErrback(((function (G__41065){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__41065))
);

return G__41065;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41066){if((e41066 instanceof Error)){
var e = e41066;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41066;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41067){if((e41067 instanceof Error)){
var e = e41067;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41067;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41068 = cljs.core._EQ_;
var expr__41069 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41068.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41069))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__41068.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41069))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__41068.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__41069))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__41068,expr__41069){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41068,expr__41069))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41071,callback){
var map__41072 = p__41071;
var map__41072__$1 = ((((!((map__41072 == null)))?(((((map__41072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41072):map__41072);
var file_msg = map__41072__$1;
var request_url = cljs.core.get.call(null,map__41072__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__41072,map__41072__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41072,map__41072__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__){
return (function (state_41110){
var state_val_41111 = (state_41110[(1)]);
if((state_val_41111 === (7))){
var inst_41106 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
var statearr_41112_41138 = state_41110__$1;
(statearr_41112_41138[(2)] = inst_41106);

(statearr_41112_41138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (1))){
var state_41110__$1 = state_41110;
var statearr_41113_41139 = state_41110__$1;
(statearr_41113_41139[(2)] = null);

(statearr_41113_41139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (4))){
var inst_41076 = (state_41110[(7)]);
var inst_41076__$1 = (state_41110[(2)]);
var state_41110__$1 = (function (){var statearr_41114 = state_41110;
(statearr_41114[(7)] = inst_41076__$1);

return statearr_41114;
})();
if(cljs.core.truth_(inst_41076__$1)){
var statearr_41115_41140 = state_41110__$1;
(statearr_41115_41140[(1)] = (5));

} else {
var statearr_41116_41141 = state_41110__$1;
(statearr_41116_41141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (15))){
var inst_41091 = (state_41110[(8)]);
var inst_41089 = (state_41110[(9)]);
var inst_41093 = inst_41091.call(null,inst_41089);
var state_41110__$1 = state_41110;
var statearr_41117_41142 = state_41110__$1;
(statearr_41117_41142[(2)] = inst_41093);

(statearr_41117_41142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (13))){
var inst_41100 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
var statearr_41118_41143 = state_41110__$1;
(statearr_41118_41143[(2)] = inst_41100);

(statearr_41118_41143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (6))){
var state_41110__$1 = state_41110;
var statearr_41119_41144 = state_41110__$1;
(statearr_41119_41144[(2)] = null);

(statearr_41119_41144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (17))){
var inst_41097 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
var statearr_41120_41145 = state_41110__$1;
(statearr_41120_41145[(2)] = inst_41097);

(statearr_41120_41145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (3))){
var inst_41108 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41110__$1,inst_41108);
} else {
if((state_val_41111 === (12))){
var state_41110__$1 = state_41110;
var statearr_41121_41146 = state_41110__$1;
(statearr_41121_41146[(2)] = null);

(statearr_41121_41146[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (2))){
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41110__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41111 === (11))){
var inst_41081 = (state_41110[(10)]);
var inst_41087 = figwheel.client.file_reloading.blocking_load.call(null,inst_41081);
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41110__$1,(14),inst_41087);
} else {
if((state_val_41111 === (9))){
var inst_41081 = (state_41110[(10)]);
var state_41110__$1 = state_41110;
if(cljs.core.truth_(inst_41081)){
var statearr_41122_41147 = state_41110__$1;
(statearr_41122_41147[(1)] = (11));

} else {
var statearr_41123_41148 = state_41110__$1;
(statearr_41123_41148[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (5))){
var inst_41076 = (state_41110[(7)]);
var inst_41082 = (state_41110[(11)]);
var inst_41081 = cljs.core.nth.call(null,inst_41076,(0),null);
var inst_41082__$1 = cljs.core.nth.call(null,inst_41076,(1),null);
var state_41110__$1 = (function (){var statearr_41124 = state_41110;
(statearr_41124[(10)] = inst_41081);

(statearr_41124[(11)] = inst_41082__$1);

return statearr_41124;
})();
if(cljs.core.truth_(inst_41082__$1)){
var statearr_41125_41149 = state_41110__$1;
(statearr_41125_41149[(1)] = (8));

} else {
var statearr_41126_41150 = state_41110__$1;
(statearr_41126_41150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (14))){
var inst_41081 = (state_41110[(10)]);
var inst_41091 = (state_41110[(8)]);
var inst_41089 = (state_41110[(2)]);
var inst_41090 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41091__$1 = cljs.core.get.call(null,inst_41090,inst_41081);
var state_41110__$1 = (function (){var statearr_41127 = state_41110;
(statearr_41127[(8)] = inst_41091__$1);

(statearr_41127[(9)] = inst_41089);

return statearr_41127;
})();
if(cljs.core.truth_(inst_41091__$1)){
var statearr_41128_41151 = state_41110__$1;
(statearr_41128_41151[(1)] = (15));

} else {
var statearr_41129_41152 = state_41110__$1;
(statearr_41129_41152[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (16))){
var inst_41089 = (state_41110[(9)]);
var inst_41095 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41089);
var state_41110__$1 = state_41110;
var statearr_41130_41153 = state_41110__$1;
(statearr_41130_41153[(2)] = inst_41095);

(statearr_41130_41153[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (10))){
var inst_41102 = (state_41110[(2)]);
var state_41110__$1 = (function (){var statearr_41131 = state_41110;
(statearr_41131[(12)] = inst_41102);

return statearr_41131;
})();
var statearr_41132_41154 = state_41110__$1;
(statearr_41132_41154[(2)] = null);

(statearr_41132_41154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (8))){
var inst_41082 = (state_41110[(11)]);
var inst_41084 = eval(inst_41082);
var state_41110__$1 = state_41110;
var statearr_41133_41155 = state_41110__$1;
(statearr_41133_41155[(2)] = inst_41084);

(statearr_41133_41155[(1)] = (10));


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
});})(c__26081__auto__))
;
return ((function (switch__25990__auto__,c__26081__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25991__auto__ = null;
var figwheel$client$file_reloading$state_machine__25991__auto____0 = (function (){
var statearr_41134 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41134[(0)] = figwheel$client$file_reloading$state_machine__25991__auto__);

(statearr_41134[(1)] = (1));

return statearr_41134;
});
var figwheel$client$file_reloading$state_machine__25991__auto____1 = (function (state_41110){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_41110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e41135){if((e41135 instanceof Object)){
var ex__25994__auto__ = e41135;
var statearr_41136_41156 = state_41110;
(statearr_41136_41156[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41157 = state_41110;
state_41110 = G__41157;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25991__auto__ = function(state_41110){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25991__auto____1.call(this,state_41110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25991__auto____0;
figwheel$client$file_reloading$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25991__auto____1;
return figwheel$client$file_reloading$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__))
})();
var state__26083__auto__ = (function (){var statearr_41137 = f__26082__auto__.call(null);
(statearr_41137[(6)] = c__26081__auto__);

return statearr_41137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__))
);

return c__26081__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__41159 = arguments.length;
switch (G__41159) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41161,callback){
var map__41162 = p__41161;
var map__41162__$1 = ((((!((map__41162 == null)))?(((((map__41162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41162):map__41162);
var file_msg = map__41162__$1;
var namespace = cljs.core.get.call(null,map__41162__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41162,map__41162__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41162,map__41162__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41164){
var map__41165 = p__41164;
var map__41165__$1 = ((((!((map__41165 == null)))?(((((map__41165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41165):map__41165);
var file_msg = map__41165__$1;
var namespace = cljs.core.get.call(null,map__41165__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41167){
var map__41168 = p__41167;
var map__41168__$1 = ((((!((map__41168 == null)))?(((((map__41168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41168):map__41168);
var file_msg = map__41168__$1;
var namespace = cljs.core.get.call(null,map__41168__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41170,callback){
var map__41171 = p__41170;
var map__41171__$1 = ((((!((map__41171 == null)))?(((((map__41171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41171):map__41171);
var file_msg = map__41171__$1;
var request_url = cljs.core.get.call(null,map__41171__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41171__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26081__auto___41221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___41221,out){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___41221,out){
return (function (state_41206){
var state_val_41207 = (state_41206[(1)]);
if((state_val_41207 === (1))){
var inst_41180 = cljs.core.seq.call(null,files);
var inst_41181 = cljs.core.first.call(null,inst_41180);
var inst_41182 = cljs.core.next.call(null,inst_41180);
var inst_41183 = files;
var state_41206__$1 = (function (){var statearr_41208 = state_41206;
(statearr_41208[(7)] = inst_41181);

(statearr_41208[(8)] = inst_41183);

(statearr_41208[(9)] = inst_41182);

return statearr_41208;
})();
var statearr_41209_41222 = state_41206__$1;
(statearr_41209_41222[(2)] = null);

(statearr_41209_41222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (2))){
var inst_41183 = (state_41206[(8)]);
var inst_41189 = (state_41206[(10)]);
var inst_41188 = cljs.core.seq.call(null,inst_41183);
var inst_41189__$1 = cljs.core.first.call(null,inst_41188);
var inst_41190 = cljs.core.next.call(null,inst_41188);
var inst_41191 = (inst_41189__$1 == null);
var inst_41192 = cljs.core.not.call(null,inst_41191);
var state_41206__$1 = (function (){var statearr_41210 = state_41206;
(statearr_41210[(11)] = inst_41190);

(statearr_41210[(10)] = inst_41189__$1);

return statearr_41210;
})();
if(inst_41192){
var statearr_41211_41223 = state_41206__$1;
(statearr_41211_41223[(1)] = (4));

} else {
var statearr_41212_41224 = state_41206__$1;
(statearr_41212_41224[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (3))){
var inst_41204 = (state_41206[(2)]);
var state_41206__$1 = state_41206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41206__$1,inst_41204);
} else {
if((state_val_41207 === (4))){
var inst_41189 = (state_41206[(10)]);
var inst_41194 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41189);
var state_41206__$1 = state_41206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41206__$1,(7),inst_41194);
} else {
if((state_val_41207 === (5))){
var inst_41200 = cljs.core.async.close_BANG_.call(null,out);
var state_41206__$1 = state_41206;
var statearr_41213_41225 = state_41206__$1;
(statearr_41213_41225[(2)] = inst_41200);

(statearr_41213_41225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (6))){
var inst_41202 = (state_41206[(2)]);
var state_41206__$1 = state_41206;
var statearr_41214_41226 = state_41206__$1;
(statearr_41214_41226[(2)] = inst_41202);

(statearr_41214_41226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (7))){
var inst_41190 = (state_41206[(11)]);
var inst_41196 = (state_41206[(2)]);
var inst_41197 = cljs.core.async.put_BANG_.call(null,out,inst_41196);
var inst_41183 = inst_41190;
var state_41206__$1 = (function (){var statearr_41215 = state_41206;
(statearr_41215[(12)] = inst_41197);

(statearr_41215[(8)] = inst_41183);

return statearr_41215;
})();
var statearr_41216_41227 = state_41206__$1;
(statearr_41216_41227[(2)] = null);

(statearr_41216_41227[(1)] = (2));


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
});})(c__26081__auto___41221,out))
;
return ((function (switch__25990__auto__,c__26081__auto___41221,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto____0 = (function (){
var statearr_41217 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41217[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto__);

(statearr_41217[(1)] = (1));

return statearr_41217;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto____1 = (function (state_41206){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_41206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e41218){if((e41218 instanceof Object)){
var ex__25994__auto__ = e41218;
var statearr_41219_41228 = state_41206;
(statearr_41219_41228[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41229 = state_41206;
state_41206 = G__41229;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto__ = function(state_41206){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto____1.call(this,state_41206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___41221,out))
})();
var state__26083__auto__ = (function (){var statearr_41220 = f__26082__auto__.call(null);
(statearr_41220[(6)] = c__26081__auto___41221);

return statearr_41220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___41221,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41230,opts){
var map__41231 = p__41230;
var map__41231__$1 = ((((!((map__41231 == null)))?(((((map__41231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41231):map__41231);
var eval_body = cljs.core.get.call(null,map__41231__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41231__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41233){var e = e41233;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41234_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41234_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41235){
var vec__41236 = p__41235;
var k = cljs.core.nth.call(null,vec__41236,(0),null);
var v = cljs.core.nth.call(null,vec__41236,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41239){
var vec__41240 = p__41239;
var k = cljs.core.nth.call(null,vec__41240,(0),null);
var v = cljs.core.nth.call(null,vec__41240,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41246,p__41247){
var map__41248 = p__41246;
var map__41248__$1 = ((((!((map__41248 == null)))?(((((map__41248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41248):map__41248);
var opts = map__41248__$1;
var before_jsload = cljs.core.get.call(null,map__41248__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41248__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41248__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41249 = p__41247;
var map__41249__$1 = ((((!((map__41249 == null)))?(((((map__41249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41249):map__41249);
var msg = map__41249__$1;
var files = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41403){
var state_val_41404 = (state_41403[(1)]);
if((state_val_41404 === (7))){
var inst_41266 = (state_41403[(7)]);
var inst_41265 = (state_41403[(8)]);
var inst_41264 = (state_41403[(9)]);
var inst_41263 = (state_41403[(10)]);
var inst_41271 = cljs.core._nth.call(null,inst_41264,inst_41266);
var inst_41272 = figwheel.client.file_reloading.eval_body.call(null,inst_41271,opts);
var inst_41273 = (inst_41266 + (1));
var tmp41405 = inst_41265;
var tmp41406 = inst_41264;
var tmp41407 = inst_41263;
var inst_41263__$1 = tmp41407;
var inst_41264__$1 = tmp41406;
var inst_41265__$1 = tmp41405;
var inst_41266__$1 = inst_41273;
var state_41403__$1 = (function (){var statearr_41408 = state_41403;
(statearr_41408[(7)] = inst_41266__$1);

(statearr_41408[(8)] = inst_41265__$1);

(statearr_41408[(11)] = inst_41272);

(statearr_41408[(9)] = inst_41264__$1);

(statearr_41408[(10)] = inst_41263__$1);

return statearr_41408;
})();
var statearr_41409_41492 = state_41403__$1;
(statearr_41409_41492[(2)] = null);

(statearr_41409_41492[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (20))){
var inst_41306 = (state_41403[(12)]);
var inst_41314 = figwheel.client.file_reloading.sort_files.call(null,inst_41306);
var state_41403__$1 = state_41403;
var statearr_41410_41493 = state_41403__$1;
(statearr_41410_41493[(2)] = inst_41314);

(statearr_41410_41493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (27))){
var state_41403__$1 = state_41403;
var statearr_41411_41494 = state_41403__$1;
(statearr_41411_41494[(2)] = null);

(statearr_41411_41494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (1))){
var inst_41255 = (state_41403[(13)]);
var inst_41252 = before_jsload.call(null,files);
var inst_41253 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41254 = (function (){return ((function (inst_41255,inst_41252,inst_41253,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41243_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41243_SHARP_);
});
;})(inst_41255,inst_41252,inst_41253,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41255__$1 = cljs.core.filter.call(null,inst_41254,files);
var inst_41256 = cljs.core.not_empty.call(null,inst_41255__$1);
var state_41403__$1 = (function (){var statearr_41412 = state_41403;
(statearr_41412[(14)] = inst_41252);

(statearr_41412[(15)] = inst_41253);

(statearr_41412[(13)] = inst_41255__$1);

return statearr_41412;
})();
if(cljs.core.truth_(inst_41256)){
var statearr_41413_41495 = state_41403__$1;
(statearr_41413_41495[(1)] = (2));

} else {
var statearr_41414_41496 = state_41403__$1;
(statearr_41414_41496[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (24))){
var state_41403__$1 = state_41403;
var statearr_41415_41497 = state_41403__$1;
(statearr_41415_41497[(2)] = null);

(statearr_41415_41497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (39))){
var inst_41356 = (state_41403[(16)]);
var state_41403__$1 = state_41403;
var statearr_41416_41498 = state_41403__$1;
(statearr_41416_41498[(2)] = inst_41356);

(statearr_41416_41498[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (46))){
var inst_41398 = (state_41403[(2)]);
var state_41403__$1 = state_41403;
var statearr_41417_41499 = state_41403__$1;
(statearr_41417_41499[(2)] = inst_41398);

(statearr_41417_41499[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (4))){
var inst_41300 = (state_41403[(2)]);
var inst_41301 = cljs.core.List.EMPTY;
var inst_41302 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41301);
var inst_41303 = (function (){return ((function (inst_41300,inst_41301,inst_41302,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41244_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41244_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41244_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41244_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_41300,inst_41301,inst_41302,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41304 = cljs.core.filter.call(null,inst_41303,files);
var inst_41305 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41306 = cljs.core.concat.call(null,inst_41304,inst_41305);
var state_41403__$1 = (function (){var statearr_41418 = state_41403;
(statearr_41418[(17)] = inst_41302);

(statearr_41418[(18)] = inst_41300);

(statearr_41418[(12)] = inst_41306);

return statearr_41418;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41419_41500 = state_41403__$1;
(statearr_41419_41500[(1)] = (16));

} else {
var statearr_41420_41501 = state_41403__$1;
(statearr_41420_41501[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (15))){
var inst_41290 = (state_41403[(2)]);
var state_41403__$1 = state_41403;
var statearr_41421_41502 = state_41403__$1;
(statearr_41421_41502[(2)] = inst_41290);

(statearr_41421_41502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (21))){
var inst_41316 = (state_41403[(19)]);
var inst_41316__$1 = (state_41403[(2)]);
var inst_41317 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41316__$1);
var state_41403__$1 = (function (){var statearr_41422 = state_41403;
(statearr_41422[(19)] = inst_41316__$1);

return statearr_41422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41403__$1,(22),inst_41317);
} else {
if((state_val_41404 === (31))){
var inst_41401 = (state_41403[(2)]);
var state_41403__$1 = state_41403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41403__$1,inst_41401);
} else {
if((state_val_41404 === (32))){
var inst_41356 = (state_41403[(16)]);
var inst_41361 = inst_41356.cljs$lang$protocol_mask$partition0$;
var inst_41362 = (inst_41361 & (64));
var inst_41363 = inst_41356.cljs$core$ISeq$;
var inst_41364 = (cljs.core.PROTOCOL_SENTINEL === inst_41363);
var inst_41365 = ((inst_41362) || (inst_41364));
var state_41403__$1 = state_41403;
if(cljs.core.truth_(inst_41365)){
var statearr_41423_41503 = state_41403__$1;
(statearr_41423_41503[(1)] = (35));

} else {
var statearr_41424_41504 = state_41403__$1;
(statearr_41424_41504[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (40))){
var inst_41378 = (state_41403[(20)]);
var inst_41377 = (state_41403[(2)]);
var inst_41378__$1 = cljs.core.get.call(null,inst_41377,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41379 = cljs.core.get.call(null,inst_41377,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41380 = cljs.core.not_empty.call(null,inst_41378__$1);
var state_41403__$1 = (function (){var statearr_41425 = state_41403;
(statearr_41425[(21)] = inst_41379);

(statearr_41425[(20)] = inst_41378__$1);

return statearr_41425;
})();
if(cljs.core.truth_(inst_41380)){
var statearr_41426_41505 = state_41403__$1;
(statearr_41426_41505[(1)] = (41));

} else {
var statearr_41427_41506 = state_41403__$1;
(statearr_41427_41506[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (33))){
var state_41403__$1 = state_41403;
var statearr_41428_41507 = state_41403__$1;
(statearr_41428_41507[(2)] = false);

(statearr_41428_41507[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (13))){
var inst_41276 = (state_41403[(22)]);
var inst_41280 = cljs.core.chunk_first.call(null,inst_41276);
var inst_41281 = cljs.core.chunk_rest.call(null,inst_41276);
var inst_41282 = cljs.core.count.call(null,inst_41280);
var inst_41263 = inst_41281;
var inst_41264 = inst_41280;
var inst_41265 = inst_41282;
var inst_41266 = (0);
var state_41403__$1 = (function (){var statearr_41429 = state_41403;
(statearr_41429[(7)] = inst_41266);

(statearr_41429[(8)] = inst_41265);

(statearr_41429[(9)] = inst_41264);

(statearr_41429[(10)] = inst_41263);

return statearr_41429;
})();
var statearr_41430_41508 = state_41403__$1;
(statearr_41430_41508[(2)] = null);

(statearr_41430_41508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (22))){
var inst_41319 = (state_41403[(23)]);
var inst_41316 = (state_41403[(19)]);
var inst_41320 = (state_41403[(24)]);
var inst_41324 = (state_41403[(25)]);
var inst_41319__$1 = (state_41403[(2)]);
var inst_41320__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41319__$1);
var inst_41321 = (function (){var all_files = inst_41316;
var res_SINGLEQUOTE_ = inst_41319__$1;
var res = inst_41320__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41319,inst_41316,inst_41320,inst_41324,inst_41319__$1,inst_41320__$1,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41245_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41245_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41319,inst_41316,inst_41320,inst_41324,inst_41319__$1,inst_41320__$1,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41322 = cljs.core.filter.call(null,inst_41321,inst_41319__$1);
var inst_41323 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41324__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41323);
var inst_41325 = cljs.core.not_empty.call(null,inst_41324__$1);
var state_41403__$1 = (function (){var statearr_41431 = state_41403;
(statearr_41431[(23)] = inst_41319__$1);

(statearr_41431[(26)] = inst_41322);

(statearr_41431[(24)] = inst_41320__$1);

(statearr_41431[(25)] = inst_41324__$1);

return statearr_41431;
})();
if(cljs.core.truth_(inst_41325)){
var statearr_41432_41509 = state_41403__$1;
(statearr_41432_41509[(1)] = (23));

} else {
var statearr_41433_41510 = state_41403__$1;
(statearr_41433_41510[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (36))){
var state_41403__$1 = state_41403;
var statearr_41434_41511 = state_41403__$1;
(statearr_41434_41511[(2)] = false);

(statearr_41434_41511[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (41))){
var inst_41378 = (state_41403[(20)]);
var inst_41382 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41383 = cljs.core.map.call(null,inst_41382,inst_41378);
var inst_41384 = cljs.core.pr_str.call(null,inst_41383);
var inst_41385 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41384)].join('');
var inst_41386 = figwheel.client.utils.log.call(null,inst_41385);
var state_41403__$1 = state_41403;
var statearr_41435_41512 = state_41403__$1;
(statearr_41435_41512[(2)] = inst_41386);

(statearr_41435_41512[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (43))){
var inst_41379 = (state_41403[(21)]);
var inst_41389 = (state_41403[(2)]);
var inst_41390 = cljs.core.not_empty.call(null,inst_41379);
var state_41403__$1 = (function (){var statearr_41436 = state_41403;
(statearr_41436[(27)] = inst_41389);

return statearr_41436;
})();
if(cljs.core.truth_(inst_41390)){
var statearr_41437_41513 = state_41403__$1;
(statearr_41437_41513[(1)] = (44));

} else {
var statearr_41438_41514 = state_41403__$1;
(statearr_41438_41514[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (29))){
var inst_41356 = (state_41403[(16)]);
var inst_41319 = (state_41403[(23)]);
var inst_41316 = (state_41403[(19)]);
var inst_41322 = (state_41403[(26)]);
var inst_41320 = (state_41403[(24)]);
var inst_41324 = (state_41403[(25)]);
var inst_41352 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41355 = (function (){var all_files = inst_41316;
var res_SINGLEQUOTE_ = inst_41319;
var res = inst_41320;
var files_not_loaded = inst_41322;
var dependencies_that_loaded = inst_41324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41356,inst_41319,inst_41316,inst_41322,inst_41320,inst_41324,inst_41352,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41354){
var map__41439 = p__41354;
var map__41439__$1 = ((((!((map__41439 == null)))?(((((map__41439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41439):map__41439);
var namespace = cljs.core.get.call(null,map__41439__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41356,inst_41319,inst_41316,inst_41322,inst_41320,inst_41324,inst_41352,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41356__$1 = cljs.core.group_by.call(null,inst_41355,inst_41322);
var inst_41358 = (inst_41356__$1 == null);
var inst_41359 = cljs.core.not.call(null,inst_41358);
var state_41403__$1 = (function (){var statearr_41441 = state_41403;
(statearr_41441[(16)] = inst_41356__$1);

(statearr_41441[(28)] = inst_41352);

return statearr_41441;
})();
if(inst_41359){
var statearr_41442_41515 = state_41403__$1;
(statearr_41442_41515[(1)] = (32));

} else {
var statearr_41443_41516 = state_41403__$1;
(statearr_41443_41516[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (44))){
var inst_41379 = (state_41403[(21)]);
var inst_41392 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41379);
var inst_41393 = cljs.core.pr_str.call(null,inst_41392);
var inst_41394 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41393)].join('');
var inst_41395 = figwheel.client.utils.log.call(null,inst_41394);
var state_41403__$1 = state_41403;
var statearr_41444_41517 = state_41403__$1;
(statearr_41444_41517[(2)] = inst_41395);

(statearr_41444_41517[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (6))){
var inst_41297 = (state_41403[(2)]);
var state_41403__$1 = state_41403;
var statearr_41445_41518 = state_41403__$1;
(statearr_41445_41518[(2)] = inst_41297);

(statearr_41445_41518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (28))){
var inst_41322 = (state_41403[(26)]);
var inst_41349 = (state_41403[(2)]);
var inst_41350 = cljs.core.not_empty.call(null,inst_41322);
var state_41403__$1 = (function (){var statearr_41446 = state_41403;
(statearr_41446[(29)] = inst_41349);

return statearr_41446;
})();
if(cljs.core.truth_(inst_41350)){
var statearr_41447_41519 = state_41403__$1;
(statearr_41447_41519[(1)] = (29));

} else {
var statearr_41448_41520 = state_41403__$1;
(statearr_41448_41520[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (25))){
var inst_41320 = (state_41403[(24)]);
var inst_41336 = (state_41403[(2)]);
var inst_41337 = cljs.core.not_empty.call(null,inst_41320);
var state_41403__$1 = (function (){var statearr_41449 = state_41403;
(statearr_41449[(30)] = inst_41336);

return statearr_41449;
})();
if(cljs.core.truth_(inst_41337)){
var statearr_41450_41521 = state_41403__$1;
(statearr_41450_41521[(1)] = (26));

} else {
var statearr_41451_41522 = state_41403__$1;
(statearr_41451_41522[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (34))){
var inst_41372 = (state_41403[(2)]);
var state_41403__$1 = state_41403;
if(cljs.core.truth_(inst_41372)){
var statearr_41452_41523 = state_41403__$1;
(statearr_41452_41523[(1)] = (38));

} else {
var statearr_41453_41524 = state_41403__$1;
(statearr_41453_41524[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (17))){
var state_41403__$1 = state_41403;
var statearr_41454_41525 = state_41403__$1;
(statearr_41454_41525[(2)] = recompile_dependents);

(statearr_41454_41525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (3))){
var state_41403__$1 = state_41403;
var statearr_41455_41526 = state_41403__$1;
(statearr_41455_41526[(2)] = null);

(statearr_41455_41526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (12))){
var inst_41293 = (state_41403[(2)]);
var state_41403__$1 = state_41403;
var statearr_41456_41527 = state_41403__$1;
(statearr_41456_41527[(2)] = inst_41293);

(statearr_41456_41527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (2))){
var inst_41255 = (state_41403[(13)]);
var inst_41262 = cljs.core.seq.call(null,inst_41255);
var inst_41263 = inst_41262;
var inst_41264 = null;
var inst_41265 = (0);
var inst_41266 = (0);
var state_41403__$1 = (function (){var statearr_41457 = state_41403;
(statearr_41457[(7)] = inst_41266);

(statearr_41457[(8)] = inst_41265);

(statearr_41457[(9)] = inst_41264);

(statearr_41457[(10)] = inst_41263);

return statearr_41457;
})();
var statearr_41458_41528 = state_41403__$1;
(statearr_41458_41528[(2)] = null);

(statearr_41458_41528[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (23))){
var inst_41319 = (state_41403[(23)]);
var inst_41316 = (state_41403[(19)]);
var inst_41322 = (state_41403[(26)]);
var inst_41320 = (state_41403[(24)]);
var inst_41324 = (state_41403[(25)]);
var inst_41327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41329 = (function (){var all_files = inst_41316;
var res_SINGLEQUOTE_ = inst_41319;
var res = inst_41320;
var files_not_loaded = inst_41322;
var dependencies_that_loaded = inst_41324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41319,inst_41316,inst_41322,inst_41320,inst_41324,inst_41327,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41328){
var map__41459 = p__41328;
var map__41459__$1 = ((((!((map__41459 == null)))?(((((map__41459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41459):map__41459);
var request_url = cljs.core.get.call(null,map__41459__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41319,inst_41316,inst_41322,inst_41320,inst_41324,inst_41327,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41330 = cljs.core.reverse.call(null,inst_41324);
var inst_41331 = cljs.core.map.call(null,inst_41329,inst_41330);
var inst_41332 = cljs.core.pr_str.call(null,inst_41331);
var inst_41333 = figwheel.client.utils.log.call(null,inst_41332);
var state_41403__$1 = (function (){var statearr_41461 = state_41403;
(statearr_41461[(31)] = inst_41327);

return statearr_41461;
})();
var statearr_41462_41529 = state_41403__$1;
(statearr_41462_41529[(2)] = inst_41333);

(statearr_41462_41529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (35))){
var state_41403__$1 = state_41403;
var statearr_41463_41530 = state_41403__$1;
(statearr_41463_41530[(2)] = true);

(statearr_41463_41530[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (19))){
var inst_41306 = (state_41403[(12)]);
var inst_41312 = figwheel.client.file_reloading.expand_files.call(null,inst_41306);
var state_41403__$1 = state_41403;
var statearr_41464_41531 = state_41403__$1;
(statearr_41464_41531[(2)] = inst_41312);

(statearr_41464_41531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (11))){
var state_41403__$1 = state_41403;
var statearr_41465_41532 = state_41403__$1;
(statearr_41465_41532[(2)] = null);

(statearr_41465_41532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (9))){
var inst_41295 = (state_41403[(2)]);
var state_41403__$1 = state_41403;
var statearr_41466_41533 = state_41403__$1;
(statearr_41466_41533[(2)] = inst_41295);

(statearr_41466_41533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (5))){
var inst_41266 = (state_41403[(7)]);
var inst_41265 = (state_41403[(8)]);
var inst_41268 = (inst_41266 < inst_41265);
var inst_41269 = inst_41268;
var state_41403__$1 = state_41403;
if(cljs.core.truth_(inst_41269)){
var statearr_41467_41534 = state_41403__$1;
(statearr_41467_41534[(1)] = (7));

} else {
var statearr_41468_41535 = state_41403__$1;
(statearr_41468_41535[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (14))){
var inst_41276 = (state_41403[(22)]);
var inst_41285 = cljs.core.first.call(null,inst_41276);
var inst_41286 = figwheel.client.file_reloading.eval_body.call(null,inst_41285,opts);
var inst_41287 = cljs.core.next.call(null,inst_41276);
var inst_41263 = inst_41287;
var inst_41264 = null;
var inst_41265 = (0);
var inst_41266 = (0);
var state_41403__$1 = (function (){var statearr_41469 = state_41403;
(statearr_41469[(7)] = inst_41266);

(statearr_41469[(8)] = inst_41265);

(statearr_41469[(9)] = inst_41264);

(statearr_41469[(10)] = inst_41263);

(statearr_41469[(32)] = inst_41286);

return statearr_41469;
})();
var statearr_41470_41536 = state_41403__$1;
(statearr_41470_41536[(2)] = null);

(statearr_41470_41536[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (45))){
var state_41403__$1 = state_41403;
var statearr_41471_41537 = state_41403__$1;
(statearr_41471_41537[(2)] = null);

(statearr_41471_41537[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (26))){
var inst_41319 = (state_41403[(23)]);
var inst_41316 = (state_41403[(19)]);
var inst_41322 = (state_41403[(26)]);
var inst_41320 = (state_41403[(24)]);
var inst_41324 = (state_41403[(25)]);
var inst_41339 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41341 = (function (){var all_files = inst_41316;
var res_SINGLEQUOTE_ = inst_41319;
var res = inst_41320;
var files_not_loaded = inst_41322;
var dependencies_that_loaded = inst_41324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41319,inst_41316,inst_41322,inst_41320,inst_41324,inst_41339,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41340){
var map__41472 = p__41340;
var map__41472__$1 = ((((!((map__41472 == null)))?(((((map__41472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41472):map__41472);
var namespace = cljs.core.get.call(null,map__41472__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41472__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41319,inst_41316,inst_41322,inst_41320,inst_41324,inst_41339,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41342 = cljs.core.map.call(null,inst_41341,inst_41320);
var inst_41343 = cljs.core.pr_str.call(null,inst_41342);
var inst_41344 = figwheel.client.utils.log.call(null,inst_41343);
var inst_41345 = (function (){var all_files = inst_41316;
var res_SINGLEQUOTE_ = inst_41319;
var res = inst_41320;
var files_not_loaded = inst_41322;
var dependencies_that_loaded = inst_41324;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41319,inst_41316,inst_41322,inst_41320,inst_41324,inst_41339,inst_41341,inst_41342,inst_41343,inst_41344,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41319,inst_41316,inst_41322,inst_41320,inst_41324,inst_41339,inst_41341,inst_41342,inst_41343,inst_41344,state_val_41404,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41346 = setTimeout(inst_41345,(10));
var state_41403__$1 = (function (){var statearr_41474 = state_41403;
(statearr_41474[(33)] = inst_41344);

(statearr_41474[(34)] = inst_41339);

return statearr_41474;
})();
var statearr_41475_41538 = state_41403__$1;
(statearr_41475_41538[(2)] = inst_41346);

(statearr_41475_41538[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (16))){
var state_41403__$1 = state_41403;
var statearr_41476_41539 = state_41403__$1;
(statearr_41476_41539[(2)] = reload_dependents);

(statearr_41476_41539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (38))){
var inst_41356 = (state_41403[(16)]);
var inst_41374 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41356);
var state_41403__$1 = state_41403;
var statearr_41477_41540 = state_41403__$1;
(statearr_41477_41540[(2)] = inst_41374);

(statearr_41477_41540[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (30))){
var state_41403__$1 = state_41403;
var statearr_41478_41541 = state_41403__$1;
(statearr_41478_41541[(2)] = null);

(statearr_41478_41541[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (10))){
var inst_41276 = (state_41403[(22)]);
var inst_41278 = cljs.core.chunked_seq_QMARK_.call(null,inst_41276);
var state_41403__$1 = state_41403;
if(inst_41278){
var statearr_41479_41542 = state_41403__$1;
(statearr_41479_41542[(1)] = (13));

} else {
var statearr_41480_41543 = state_41403__$1;
(statearr_41480_41543[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (18))){
var inst_41310 = (state_41403[(2)]);
var state_41403__$1 = state_41403;
if(cljs.core.truth_(inst_41310)){
var statearr_41481_41544 = state_41403__$1;
(statearr_41481_41544[(1)] = (19));

} else {
var statearr_41482_41545 = state_41403__$1;
(statearr_41482_41545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (42))){
var state_41403__$1 = state_41403;
var statearr_41483_41546 = state_41403__$1;
(statearr_41483_41546[(2)] = null);

(statearr_41483_41546[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (37))){
var inst_41369 = (state_41403[(2)]);
var state_41403__$1 = state_41403;
var statearr_41484_41547 = state_41403__$1;
(statearr_41484_41547[(2)] = inst_41369);

(statearr_41484_41547[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41404 === (8))){
var inst_41276 = (state_41403[(22)]);
var inst_41263 = (state_41403[(10)]);
var inst_41276__$1 = cljs.core.seq.call(null,inst_41263);
var state_41403__$1 = (function (){var statearr_41485 = state_41403;
(statearr_41485[(22)] = inst_41276__$1);

return statearr_41485;
})();
if(inst_41276__$1){
var statearr_41486_41548 = state_41403__$1;
(statearr_41486_41548[(1)] = (10));

} else {
var statearr_41487_41549 = state_41403__$1;
(statearr_41487_41549[(1)] = (11));

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
});})(c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25990__auto__,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto____0 = (function (){
var statearr_41488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41488[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto__);

(statearr_41488[(1)] = (1));

return statearr_41488;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto____1 = (function (state_41403){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_41403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e41489){if((e41489 instanceof Object)){
var ex__25994__auto__ = e41489;
var statearr_41490_41550 = state_41403;
(statearr_41490_41550[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41551 = state_41403;
state_41403 = G__41551;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto__ = function(state_41403){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto____1.call(this,state_41403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26083__auto__ = (function (){var statearr_41491 = f__26082__auto__.call(null);
(statearr_41491[(6)] = c__26081__auto__);

return statearr_41491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__,map__41248,map__41248__$1,opts,before_jsload,on_jsload,reload_dependents,map__41249,map__41249__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26081__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41554,link){
var map__41555 = p__41554;
var map__41555__$1 = ((((!((map__41555 == null)))?(((((map__41555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41555):map__41555);
var file = cljs.core.get.call(null,map__41555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__41555,map__41555__$1,file){
return (function (p1__41552_SHARP_,p2__41553_SHARP_){
if(cljs.core._EQ_.call(null,p1__41552_SHARP_,p2__41553_SHARP_)){
return p1__41552_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__41555,map__41555__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41558){
var map__41559 = p__41558;
var map__41559__$1 = ((((!((map__41559 == null)))?(((((map__41559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41559):map__41559);
var match_length = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41557_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41557_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41561_SHARP_,p2__41562_SHARP_){
return cljs.core.assoc.call(null,p1__41561_SHARP_,cljs.core.get.call(null,p2__41562_SHARP_,key),p2__41562_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_41563 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41563);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41563);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41564,p__41565){
var map__41566 = p__41564;
var map__41566__$1 = ((((!((map__41566 == null)))?(((((map__41566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41566):map__41566);
var on_cssload = cljs.core.get.call(null,map__41566__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41567 = p__41565;
var map__41567__$1 = ((((!((map__41567 == null)))?(((((map__41567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41567):map__41567);
var files_msg = map__41567__$1;
var files = cljs.core.get.call(null,map__41567__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1534986065559
