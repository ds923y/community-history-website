// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson048.garden.v1v3v3.garden.units');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('mranderson048.garden.v1v3v3.garden.types');
goog.require('mranderson048.garden.v1v3v3.garden.util');
mranderson048.garden.v1v3v3.garden.units.length_units = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"in","in",-1531184865)]);
mranderson048.garden.v1v3v3.garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null], null), null);
mranderson048.garden.v1v3v3.garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null], null), null);
mranderson048.garden.v1v3v3.garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",240398466),null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916),null], null), null);
mranderson048.garden.v1v3v3.garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null], null), null);
/**
 * True if x is of type CSSUnit.
 */
mranderson048.garden.v1v3v3.garden.units.unit_QMARK_ = (function mranderson048$garden$v1v3v3$garden$units$unit_QMARK_(x){
return (x instanceof mranderson048.garden.v1v3v3.garden.types.CSSUnit);
});
mranderson048.garden.v1v3v3.garden.units.length_QMARK_ = (function mranderson048$garden$v1v3v3$garden$units$length_QMARK_(x){
var and__3938__auto__ = mranderson048.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.contains_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3938__auto__;
}
});
mranderson048.garden.v1v3v3.garden.units.angle_QMARK_ = (function mranderson048$garden$v1v3v3$garden$units$angle_QMARK_(x){
var and__3938__auto__ = mranderson048.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.contains_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3938__auto__;
}
});
mranderson048.garden.v1v3v3.garden.units.time_QMARK_ = (function mranderson048$garden$v1v3v3$garden$units$time_QMARK_(x){
var and__3938__auto__ = mranderson048.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.contains_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3938__auto__;
}
});
mranderson048.garden.v1v3v3.garden.units.frequency_QMARK_ = (function mranderson048$garden$v1v3v3$garden$units$frequency_QMARK_(x){
var and__3938__auto__ = mranderson048.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.contains_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3938__auto__;
}
});
mranderson048.garden.v1v3v3.garden.units.resolution_QMARK_ = (function mranderson048$garden$v1v3v3$garden$units$resolution_QMARK_(x){
var and__3938__auto__ = mranderson048.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.contains_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3938__auto__;
}
});
/**
 * Map associating CSS unit types to their conversion values.
 */
mranderson048.garden.v1v3v3.garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"kHz","kHz",240398466),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"rem","rem",-976484757),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"Hz","Hz",-1958732916),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"deg","deg",-681556081),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"rad","rad",-833983012),new cljs.core.Keyword(null,"grad","grad",1125187229),new cljs.core.Keyword(null,"in","in",-1531184865)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",-1652850560),(1),new cljs.core.Keyword(null,"pt","pt",556460867),2.83464567,new cljs.core.Keyword(null,"px","px",281329899),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",240398466),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"px","px",281329899),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",-976484757),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",707813035),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",-1958732916),(1),new cljs.core.Keyword(null,"kHz","kHz",240398466),0.001], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mm","mm",-1652850560),4.23333333,new cljs.core.Keyword(null,"pc","pc",512913453),(1),new cljs.core.Keyword(null,"pt","pt",556460867),(12),new cljs.core.Keyword(null,"px","px",281329899),(16)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,"%"),(1)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"s","s",1705939918),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),(1),new cljs.core.Keyword(null,"grad","grad",1125187229),1.111111111,new cljs.core.Keyword(null,"rad","rad",-833983012),0.0174532925,new cljs.core.Keyword(null,"turn","turn",75759344),0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",540591536),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),(10),new cljs.core.Keyword(null,"pc","pc",512913453),2.36220473,new cljs.core.Keyword(null,"pt","pt",556460867),28.3464567,new cljs.core.Keyword(null,"px","px",281329899),37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",-833983012),(1),new cljs.core.Keyword(null,"turn","turn",75759344),0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1125187229),(1),new cljs.core.Keyword(null,"rad","rad",-833983012),63.661977237,new cljs.core.Keyword(null,"turn","turn",75759344),0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cm","cm",540591536),2.54,new cljs.core.Keyword(null,"in","in",-1531184865),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),25.4,new cljs.core.Keyword(null,"pc","pc",512913453),(6),new cljs.core.Keyword(null,"pt","pt",556460867),(72),new cljs.core.Keyword(null,"px","px",281329899),(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
mranderson048.garden.v1v3v3.garden.units.convertable_QMARK_ = (function mranderson048$garden$v1v3v3$garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
mranderson048.garden.v1v3v3.garden.units.convert = (function mranderson048$garden$v1v3v3$garden$units$convert(p__38637,right){
var map__38638 = p__38637;
var map__38638__$1 = ((((!((map__38638 == null)))?(((((map__38638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38638):map__38638);
var m = cljs.core.get.call(null,map__38638__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var left = cljs.core.get.call(null,map__38638__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.every_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.call(null,mranderson048.garden.v1v3v3.garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.call(null,mranderson048.garden.v1v3v3.garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.call(null,mranderson048.garden.v1v3v3.garden.util.format.call(null,"Can't convert %s to %s",cljs.core.name.call(null,left),cljs.core.name.call(null,right)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first.call(null,cljs.core.drop_while.call(null,mranderson048.garden.v1v3v3.garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.call(null,["Inconvertible unit ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
mranderson048.garden.v1v3v3.garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
mranderson048.garden.v1v3v3.garden.units.read_unit = (function mranderson048$garden$v1v3v3$garden$units$read_unit(s){
var temp__5457__auto__ = cljs.core.re_matches.call(null,mranderson048.garden.v1v3v3.garden.units.unit_re,s);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__38640 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__38640,(0),null);
var magnitude = cljs.core.nth.call(null,vec__38640,(1),null);
var unit = cljs.core.nth.call(null,vec__38640,(2),null);
var unit__$1 = cljs.core.keyword.call(null,unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.call(null,magnitude):(0));
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
mranderson048.garden.v1v3v3.garden.units.make_unit_predicate = (function mranderson048$garden$v1v3v3$garden$units$make_unit_predicate(unit){
return (function (x){
var and__3938__auto__ = mranderson048.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x),unit);
} else {
return and__3938__auto__;
}
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
mranderson048.garden.v1v3v3.garden.units.make_unit_fn = (function mranderson048$garden$v1v3v3$garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new mranderson048.garden.v1v3v3.garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(cljs.core.truth_(mranderson048.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x))){
if(cljs.core._EQ_.call(null,unit.call(null,x),unit)){
return x;
} else {
return mranderson048.garden.v1v3v3.garden.units.convert.call(null,x,unit);
}
} else {
var ex_message = mranderson048.garden.v1v3v3.garden.util.format.call(null,"Unable to convert from %s to %s",cljs.core.type.getName(),cljs.core.name.call(null,unit));
var ex_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], null);
throw cljs.core.ex_info.call(null,ex_message,ex_data);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
mranderson048.garden.v1v3v3.garden.units.make_unit_adder = (function mranderson048$garden$v1v3v3$garden$units$make_unit_adder(unit){
var u = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_ = null;
var mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return u.call(null,(0));
});
var mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return u.call(null,x);
});
var mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__38643 = u.call(null,x);
var map__38643__$1 = ((((!((map__38643 == null)))?(((((map__38643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38643):map__38643);
var m1 = cljs.core.get.call(null,map__38643__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__38644 = u.call(null,y);
var map__38644__$1 = ((((!((map__38644 == null)))?(((((map__38644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38644):map__38644);
var m2 = cljs.core.get.call(null,map__38644__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 + m2));
});
var mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__38647__delegate = function (x,y,more){
return cljs.core.reduce.call(null,mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_,mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.call(null,x,y),more);
};
var G__38647 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__38648__i = 0, G__38648__a = new Array(arguments.length -  2);
while (G__38648__i < G__38648__a.length) {G__38648__a[G__38648__i] = arguments[G__38648__i + 2]; ++G__38648__i;}
  more = new cljs.core.IndexedSeq(G__38648__a,0,null);
} 
return G__38647__delegate.call(this,x,y,more);};
G__38647.cljs$lang$maxFixedArity = 2;
G__38647.cljs$lang$applyTo = (function (arglist__38649){
var x = cljs.core.first(arglist__38649);
arglist__38649 = cljs.core.next(arglist__38649);
var y = cljs.core.first(arglist__38649);
var more = cljs.core.rest(arglist__38649);
return G__38647__delegate(x,y,more);
});
G__38647.cljs$core$IFn$_invoke$arity$variadic = G__38647__delegate;
return G__38647;
})()
;
mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__38650 = null;
if (arguments.length > 2) {
var G__38651__i = 0, G__38651__a = new Array(arguments.length -  2);
while (G__38651__i < G__38651__a.length) {G__38651__a[G__38651__i] = arguments[G__38651__i + 2]; ++G__38651__i;}
G__38650 = new cljs.core.IndexedSeq(G__38651__a,0,null);
}
return mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__38650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0;
mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1;
mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2;
mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson048$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_;
})()
;})(u))
});
/**
 * Create a subtraction function for subtracting Units.
 */
mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor = (function mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor(unit){
var u = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_ = null;
var mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1 = (function (x){
return u.call(null,(- x));
});
var mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__38652 = u.call(null,x);
var map__38652__$1 = ((((!((map__38652 == null)))?(((((map__38652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38652):map__38652);
var m1 = cljs.core.get.call(null,map__38652__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__38653 = u.call(null,y);
var map__38653__$1 = ((((!((map__38653 == null)))?(((((map__38653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38653):map__38653);
var m2 = cljs.core.get.call(null,map__38653__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 - m2));
});
var mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__38656__delegate = function (x,y,more){
return cljs.core.reduce.call(null,mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_,mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.call(null,x,y),more);
};
var G__38656 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__38657__i = 0, G__38657__a = new Array(arguments.length -  2);
while (G__38657__i < G__38657__a.length) {G__38657__a[G__38657__i] = arguments[G__38657__i + 2]; ++G__38657__i;}
  more = new cljs.core.IndexedSeq(G__38657__a,0,null);
} 
return G__38656__delegate.call(this,x,y,more);};
G__38656.cljs$lang$maxFixedArity = 2;
G__38656.cljs$lang$applyTo = (function (arglist__38658){
var x = cljs.core.first(arglist__38658);
arglist__38658 = cljs.core.next(arglist__38658);
var y = cljs.core.first(arglist__38658);
var more = cljs.core.rest(arglist__38658);
return G__38656__delegate(x,y,more);
});
G__38656.cljs$core$IFn$_invoke$arity$variadic = G__38656__delegate;
return G__38656;
})()
;
mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__38659 = null;
if (arguments.length > 2) {
var G__38660__i = 0, G__38660__a = new Array(arguments.length -  2);
while (G__38660__i < G__38660__a.length) {G__38660__a[G__38660__i] = arguments[G__38660__i + 2]; ++G__38660__i;}
G__38659 = new cljs.core.IndexedSeq(G__38660__a,0,null);
}
return mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__38659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1;
mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2;
mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson048$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_;
})()
;})(u))
});
/**
 * Create a multiplication function for multiplying Units.
 */
mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier = (function mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier(unit){
var u = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_ = null;
var mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return u.call(null,(1));
});
var mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return u.call(null,x);
});
var mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__38661 = u.call(null,x);
var map__38661__$1 = ((((!((map__38661 == null)))?(((((map__38661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38661):map__38661);
var m1 = cljs.core.get.call(null,map__38661__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__38662 = u.call(null,y);
var map__38662__$1 = ((((!((map__38662 == null)))?(((((map__38662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38662):map__38662);
var m2 = cljs.core.get.call(null,map__38662__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 * m2));
});
var mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__38665__delegate = function (x,y,more){
return cljs.core.reduce.call(null,mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_,mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.call(null,x,y),more);
};
var G__38665 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__38666__i = 0, G__38666__a = new Array(arguments.length -  2);
while (G__38666__i < G__38666__a.length) {G__38666__a[G__38666__i] = arguments[G__38666__i + 2]; ++G__38666__i;}
  more = new cljs.core.IndexedSeq(G__38666__a,0,null);
} 
return G__38665__delegate.call(this,x,y,more);};
G__38665.cljs$lang$maxFixedArity = 2;
G__38665.cljs$lang$applyTo = (function (arglist__38667){
var x = cljs.core.first(arglist__38667);
arglist__38667 = cljs.core.next(arglist__38667);
var y = cljs.core.first(arglist__38667);
var more = cljs.core.rest(arglist__38667);
return G__38665__delegate(x,y,more);
});
G__38665.cljs$core$IFn$_invoke$arity$variadic = G__38665__delegate;
return G__38665;
})()
;
mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__38668 = null;
if (arguments.length > 2) {
var G__38669__i = 0, G__38669__a = new Array(arguments.length -  2);
while (G__38669__i < G__38669__a.length) {G__38669__a[G__38669__i] = arguments[G__38669__i + 2]; ++G__38669__i;}
G__38668 = new cljs.core.IndexedSeq(G__38669__a,0,null);
}
return mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__38668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0;
mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1;
mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2;
mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson048$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_;
})()
;})(u))
});
/**
 * Create a division function for dividing Units.
 */
mranderson048.garden.v1v3v3.garden.units.make_unit_divider = (function mranderson048$garden$v1v3v3$garden$units$make_unit_divider(unit){
var u = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud = null;
var mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1 = (function (x){
return u.call(null,((1) / x));
});
var mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__38670 = u.call(null,x);
var map__38670__$1 = ((((!((map__38670 == null)))?(((((map__38670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38670):map__38670);
var m1 = cljs.core.get.call(null,map__38670__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__38671 = u.call(null,y);
var map__38671__$1 = ((((!((map__38671 == null)))?(((((map__38671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38671):map__38671);
var m2 = cljs.core.get.call(null,map__38671__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 / m2));
});
var mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__38674__delegate = function (x,y,more){
return cljs.core.reduce.call(null,mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud,mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud.call(null,x,y),more);
};
var G__38674 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__38675__i = 0, G__38675__a = new Array(arguments.length -  2);
while (G__38675__i < G__38675__a.length) {G__38675__a[G__38675__i] = arguments[G__38675__i + 2]; ++G__38675__i;}
  more = new cljs.core.IndexedSeq(G__38675__a,0,null);
} 
return G__38674__delegate.call(this,x,y,more);};
G__38674.cljs$lang$maxFixedArity = 2;
G__38674.cljs$lang$applyTo = (function (arglist__38676){
var x = cljs.core.first(arglist__38676);
arglist__38676 = cljs.core.next(arglist__38676);
var y = cljs.core.first(arglist__38676);
var more = cljs.core.rest(arglist__38676);
return G__38674__delegate(x,y,more);
});
G__38674.cljs$core$IFn$_invoke$arity$variadic = G__38674__delegate;
return G__38674;
})()
;
mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__38677 = null;
if (arguments.length > 2) {
var G__38678__i = 0, G__38678__a = new Array(arguments.length -  2);
while (G__38678__i < G__38678__a.length) {G__38678__a[G__38678__i] = arguments[G__38678__i + 2]; ++G__38678__i;}
G__38677 = new cljs.core.IndexedSeq(G__38678__a,0,null);
}
return mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__38677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1;
mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2;
mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson048$garden$v1v3v3$garden$units$make_unit_divider_$_ud;
})()
;})(u))
});
mranderson048.garden.v1v3v3.garden.units.cm = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson048.garden.v1v3v3.garden.units.cm_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson048.garden.v1v3v3.garden.units.cm_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson048.garden.v1v3v3.garden.units.cm_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson048.garden.v1v3v3.garden.units.cm_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson048.garden.v1v3v3.garden.units.cm_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));
mranderson048.garden.v1v3v3.garden.units.mm = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson048.garden.v1v3v3.garden.units.mm_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson048.garden.v1v3v3.garden.units.mm_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson048.garden.v1v3v3.garden.units.mm_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson048.garden.v1v3v3.garden.units.mm_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson048.garden.v1v3v3.garden.units.mm_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));
mranderson048.garden.v1v3v3.garden.units.in$ = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson048.garden.v1v3v3.garden.units.in_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson048.garden.v1v3v3.garden.units.in_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson048.garden.v1v3v3.garden.units.in_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson048.garden.v1v3v3.garden.units.in_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson048.garden.v1v3v3.garden.units.in_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));
mranderson048.garden.v1v3v3.garden.units.px = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"px","px",281329899));

mranderson048.garden.v1v3v3.garden.units.px_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"px","px",281329899));

mranderson048.garden.v1v3v3.garden.units.px_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"px","px",281329899));

mranderson048.garden.v1v3v3.garden.units.px_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"px","px",281329899));

mranderson048.garden.v1v3v3.garden.units.px_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"px","px",281329899));

mranderson048.garden.v1v3v3.garden.units.px_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"px","px",281329899));
mranderson048.garden.v1v3v3.garden.units.pt = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson048.garden.v1v3v3.garden.units.pt_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson048.garden.v1v3v3.garden.units.pt_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson048.garden.v1v3v3.garden.units.pt_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson048.garden.v1v3v3.garden.units.pt_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson048.garden.v1v3v3.garden.units.pt_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));
mranderson048.garden.v1v3v3.garden.units.pc = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson048.garden.v1v3v3.garden.units.pc_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson048.garden.v1v3v3.garden.units.pc_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson048.garden.v1v3v3.garden.units.pc_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson048.garden.v1v3v3.garden.units.pc_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson048.garden.v1v3v3.garden.units.pc_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));
mranderson048.garden.v1v3v3.garden.units.percent = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

mranderson048.garden.v1v3v3.garden.units.percent_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

mranderson048.garden.v1v3v3.garden.units.percent_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

mranderson048.garden.v1v3v3.garden.units.percent_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

mranderson048.garden.v1v3v3.garden.units.percent_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

mranderson048.garden.v1v3v3.garden.units.percent_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"%","%",1704198600));
mranderson048.garden.v1v3v3.garden.units.em = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"em","em",707813035));

mranderson048.garden.v1v3v3.garden.units.em_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"em","em",707813035));

mranderson048.garden.v1v3v3.garden.units.em_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"em","em",707813035));

mranderson048.garden.v1v3v3.garden.units.em_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"em","em",707813035));

mranderson048.garden.v1v3v3.garden.units.em_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"em","em",707813035));

mranderson048.garden.v1v3v3.garden.units.em_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"em","em",707813035));
mranderson048.garden.v1v3v3.garden.units.ex = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson048.garden.v1v3v3.garden.units.ex_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson048.garden.v1v3v3.garden.units.ex_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson048.garden.v1v3v3.garden.units.ex_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson048.garden.v1v3v3.garden.units.ex_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson048.garden.v1v3v3.garden.units.ex_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));
mranderson048.garden.v1v3v3.garden.units.ch = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson048.garden.v1v3v3.garden.units.ch_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson048.garden.v1v3v3.garden.units.ch_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson048.garden.v1v3v3.garden.units.ch_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson048.garden.v1v3v3.garden.units.ch_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson048.garden.v1v3v3.garden.units.ch_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
mranderson048.garden.v1v3v3.garden.units.rem = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson048.garden.v1v3v3.garden.units.rem_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson048.garden.v1v3v3.garden.units.rem_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson048.garden.v1v3v3.garden.units.rem_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson048.garden.v1v3v3.garden.units.rem_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson048.garden.v1v3v3.garden.units.rem_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));
mranderson048.garden.v1v3v3.garden.units.vw = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson048.garden.v1v3v3.garden.units.vw_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson048.garden.v1v3v3.garden.units.vw_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson048.garden.v1v3v3.garden.units.vw_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson048.garden.v1v3v3.garden.units.vw_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson048.garden.v1v3v3.garden.units.vw_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));
mranderson048.garden.v1v3v3.garden.units.vh = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson048.garden.v1v3v3.garden.units.vh_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson048.garden.v1v3v3.garden.units.vh_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson048.garden.v1v3v3.garden.units.vh_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson048.garden.v1v3v3.garden.units.vh_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson048.garden.v1v3v3.garden.units.vh_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));
mranderson048.garden.v1v3v3.garden.units.vmin = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson048.garden.v1v3v3.garden.units.vmin_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson048.garden.v1v3v3.garden.units.vmin_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson048.garden.v1v3v3.garden.units.vmin_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson048.garden.v1v3v3.garden.units.vmin_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson048.garden.v1v3v3.garden.units.vmin_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));
mranderson048.garden.v1v3v3.garden.units.vmax = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson048.garden.v1v3v3.garden.units.vmax_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson048.garden.v1v3v3.garden.units.vmax_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson048.garden.v1v3v3.garden.units.vmax_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson048.garden.v1v3v3.garden.units.vmax_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson048.garden.v1v3v3.garden.units.vmax_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
mranderson048.garden.v1v3v3.garden.units.deg = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson048.garden.v1v3v3.garden.units.deg_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson048.garden.v1v3v3.garden.units.deg_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson048.garden.v1v3v3.garden.units.deg_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson048.garden.v1v3v3.garden.units.deg_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson048.garden.v1v3v3.garden.units.deg_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));
mranderson048.garden.v1v3v3.garden.units.grad = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson048.garden.v1v3v3.garden.units.grad_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson048.garden.v1v3v3.garden.units.grad_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson048.garden.v1v3v3.garden.units.grad_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson048.garden.v1v3v3.garden.units.grad_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson048.garden.v1v3v3.garden.units.grad_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));
mranderson048.garden.v1v3v3.garden.units.rad = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson048.garden.v1v3v3.garden.units.rad_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson048.garden.v1v3v3.garden.units.rad_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson048.garden.v1v3v3.garden.units.rad_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson048.garden.v1v3v3.garden.units.rad_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson048.garden.v1v3v3.garden.units.rad_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));
mranderson048.garden.v1v3v3.garden.units.turn = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson048.garden.v1v3v3.garden.units.turn_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson048.garden.v1v3v3.garden.units.turn_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson048.garden.v1v3v3.garden.units.turn_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson048.garden.v1v3v3.garden.units.turn_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson048.garden.v1v3v3.garden.units.turn_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));
mranderson048.garden.v1v3v3.garden.units.s = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

mranderson048.garden.v1v3v3.garden.units.s_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

mranderson048.garden.v1v3v3.garden.units.s_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

mranderson048.garden.v1v3v3.garden.units.s_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

mranderson048.garden.v1v3v3.garden.units.s_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

mranderson048.garden.v1v3v3.garden.units.s_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
mranderson048.garden.v1v3v3.garden.units.ms = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson048.garden.v1v3v3.garden.units.ms_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson048.garden.v1v3v3.garden.units.ms_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson048.garden.v1v3v3.garden.units.ms_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson048.garden.v1v3v3.garden.units.ms_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson048.garden.v1v3v3.garden.units.ms_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));
mranderson048.garden.v1v3v3.garden.units.Hz = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson048.garden.v1v3v3.garden.units.Hz_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson048.garden.v1v3v3.garden.units.Hz_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson048.garden.v1v3v3.garden.units.Hz_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson048.garden.v1v3v3.garden.units.Hz_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson048.garden.v1v3v3.garden.units.Hz_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
mranderson048.garden.v1v3v3.garden.units.kHz = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson048.garden.v1v3v3.garden.units.kHz_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson048.garden.v1v3v3.garden.units.kHz_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson048.garden.v1v3v3.garden.units.kHz_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson048.garden.v1v3v3.garden.units.kHz_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson048.garden.v1v3v3.garden.units.kHz_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));
mranderson048.garden.v1v3v3.garden.units.dpi = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson048.garden.v1v3v3.garden.units.dpi_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson048.garden.v1v3v3.garden.units.dpi_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson048.garden.v1v3v3.garden.units.dpi_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson048.garden.v1v3v3.garden.units.dpi_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson048.garden.v1v3v3.garden.units.dpi_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));
mranderson048.garden.v1v3v3.garden.units.dpcm = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson048.garden.v1v3v3.garden.units.dpcm_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson048.garden.v1v3v3.garden.units.dpcm_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson048.garden.v1v3v3.garden.units.dpcm_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson048.garden.v1v3v3.garden.units.dpcm_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson048.garden.v1v3v3.garden.units.dpcm_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
mranderson048.garden.v1v3v3.garden.units.dppx = mranderson048.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson048.garden.v1v3v3.garden.units.dppx_QMARK_ = mranderson048.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson048.garden.v1v3v3.garden.units.dppx_PLUS_ = mranderson048.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson048.garden.v1v3v3.garden.units.dppx_ = mranderson048.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson048.garden.v1v3v3.garden.units.dppx_STAR_ = mranderson048.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson048.garden.v1v3v3.garden.units.dppx_div = mranderson048.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

//# sourceMappingURL=units.js.map?rel=1534986060271
