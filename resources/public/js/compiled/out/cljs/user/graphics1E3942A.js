// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.user.graphics1E3942A');
goog.require('cljs.core');
cljs.user.main_screen = (function cljs$user$main_screen(game,data){
if((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined') && (typeof cljs.user.t_cljs$user37484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {p.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.user.t_cljs$user37484 = (function (game,data,meta37485){
this.game = game;
this.data = data;
this.meta37485 = meta37485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.user.t_cljs$user37484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37486,meta37485__$1){
var self__ = this;
var _37486__$1 = this;
return (new cljs.user.t_cljs$user37484(self__.game,self__.data,meta37485__$1));
});

cljs.user.t_cljs$user37484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37486){
var self__ = this;
var _37486__$1 = this;
return self__.meta37485;
});

cljs.user.t_cljs$user37484.prototype.p$Screen$ = cljs.core.PROTOCOL_SENTINEL;

cljs.user.t_cljs$user37484.prototype.p$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

cljs.user.t_cljs$user37484.prototype.p$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

cljs.user.t_cljs$user37484.prototype.p$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p.render(self__.game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"candels","candels",-1285505212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),self__.data], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600)], null)], null));
});

cljs.user.t_cljs$user37484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"meta37485","meta37485",473035358,null)], null);
});

cljs.user.t_cljs$user37484.cljs$lang$type = true;

cljs.user.t_cljs$user37484.cljs$lang$ctorStr = "cljs.user/t_cljs$user37484";

cljs.user.t_cljs$user37484.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.user/t_cljs$user37484");
});

/**
 * Positional factory function for cljs.user/t_cljs$user37484.
 */
cljs.user.__GT_t_cljs$user37484 = (function cljs$user$main_screen_$___GT_t_cljs$user37484(game__$1,data__$1,meta37485){
return (new cljs.user.t_cljs$user37484(game__$1,data__$1,meta37485));
});

}

return (new cljs.user.t_cljs$user37484(game,data,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"candels","candels",-1285505212),(function (game,renderer,content,parent_opts){
renderer.noLoop();

renderer.noSmooth();

renderer.strokeWeight(0.2);

var vec__37489 = content;
var seq__37490 = cljs.core.seq.call(null,vec__37489);
var first__37491 = cljs.core.first.call(null,seq__37490);
var seq__37490__$1 = cljs.core.next.call(null,seq__37490);
var _ = first__37491;
var first__37491__$1 = cljs.core.first.call(null,seq__37490__$1);
var seq__37490__$2 = cljs.core.next.call(null,seq__37490__$1);
var opts = first__37491__$1;
var children = seq__37490__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,new cljs.core.Keyword(null,"bars","bars",-586907130).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"grid","grid",402978600),(function (game,renderer,content,parent_opts){
var vec__37492 = content;
var seq__37493 = cljs.core.seq.call(null,vec__37492);
var first__37494 = cljs.core.first.call(null,seq__37493);
var seq__37493__$1 = cljs.core.next.call(null,seq__37493);
var _ = first__37494;
var first__37494__$1 = cljs.core.first.call(null,seq__37493__$1);
var seq__37493__$2 = cljs.core.next.call(null,seq__37493__$1);
var opts = first__37494__$1;
var children = seq__37493__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(200),new cljs.core.Keyword(null,"x2","x2",-1362513475),(5000),new cljs.core.Keyword(null,"y2","y2",-718691301),(200)], null)], null)], null),opts__$1);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.user.make_bar_green = (function cljs$user$make_bar_green(bar_width,bar_spacing,height_scale,x_axis,mx,idx,p__37495){
var map__37496 = p__37495;
var map__37496__$1 = ((((!((map__37496 == null)))?(((((map__37496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37496):map__37496);
var close = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var open = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var high = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"high","high",2027297808));
var low = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"low","low",-1601362409));
var r_start = (bar_width + bar_spacing);
var middle_offset = (bar_width / (2));
var height_scale__$1 = (x_axis / mx);
if((close >= open)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(r_start * idx),new cljs.core.Keyword(null,"y","y",-1757859776),(x_axis + (((-1) * height_scale__$1) * Math.min(open,close))),new cljs.core.Keyword(null,"width","width",-384071477),bar_width,new cljs.core.Keyword(null,"height","height",1025178622),(((-1) * height_scale__$1) * Math.abs((close - open)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((idx * r_start) + middle_offset),new cljs.core.Keyword(null,"y1","y1",589123466),(x_axis - (height_scale__$1 * low)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((idx * r_start) + middle_offset),new cljs.core.Keyword(null,"y2","y2",-718691301),(x_axis - (high * height_scale__$1))], null)], null)], null);
} else {
return null;
}
});
cljs.user.make_bar_red = (function cljs$user$make_bar_red(bar_width,bar_spacing,height_scale,x_axis,mx,idx,p__37498){
var map__37499 = p__37498;
var map__37499__$1 = ((((!((map__37499 == null)))?(((((map__37499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37499):map__37499);
var close = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var open = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var high = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"high","high",2027297808));
var low = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"low","low",-1601362409));
var r_start = (bar_width + bar_spacing);
var middle_offset = (bar_width / (2));
var height_scale__$1 = (x_axis / mx);
if((close < open)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(r_start * idx),new cljs.core.Keyword(null,"y","y",-1757859776),(x_axis + (((-1) * height_scale__$1) * Math.min(open,close))),new cljs.core.Keyword(null,"width","width",-384071477),bar_width,new cljs.core.Keyword(null,"height","height",1025178622),(((-1) * height_scale__$1) * Math.abs((close - open)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((idx * r_start) + middle_offset),new cljs.core.Keyword(null,"y1","y1",589123466),(x_axis - (height_scale__$1 * low)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((idx * r_start) + middle_offset),new cljs.core.Keyword(null,"y2","y2",-718691301),(x_axis - (high * height_scale__$1))], null)], null)], null);
} else {
return null;
}
});
cljs.user.make_rnn = (function cljs$user$make_rnn(bar_width,bar_spacing,height_offset,x_axis,idx,p__37501){
var map__37502 = p__37501;
var map__37502__$1 = ((((!((map__37502 == null)))?(((((map__37502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37502):map__37502);
var args = map__37502__$1;
var prediction_rl = cljs.core.get.call(null,map__37502__$1,new cljs.core.Keyword(null,"prediction-rl","prediction-rl",1689450230));
var prediction_rnn = cljs.core.get.call(null,map__37502__$1,new cljs.core.Keyword(null,"prediction-rnn","prediction-rnn",1583913461));
var low = cljs.core.get.call(null,map__37502__$1,new cljs.core.Keyword(null,"low","low",-1601362409));
var r_start = (bar_width + bar_spacing);
var line = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(r_start * idx),new cljs.core.Keyword(null,"y1","y1",589123466),(x_axis - height_offset),new cljs.core.Keyword(null,"x2","x2",-1362513475),((r_start * idx) + bar_width),new cljs.core.Keyword(null,"y2","y2",-718691301),(x_axis - height_offset)], null)], null);
var G__37504 = prediction_rnn;
switch (G__37504) {
case (0):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),line], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),line], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),line], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37504)].join('')));

}
});
cljs.user.make_rl = (function cljs$user$make_rl(bar_width,bar_spacing,height_offset,x_axis,idx,p__37506){
var map__37507 = p__37506;
var map__37507__$1 = ((((!((map__37507 == null)))?(((((map__37507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37507):map__37507);
var args = map__37507__$1;
var prediction_rl = cljs.core.get.call(null,map__37507__$1,new cljs.core.Keyword(null,"prediction-rl","prediction-rl",1689450230));
var prediction_rnn = cljs.core.get.call(null,map__37507__$1,new cljs.core.Keyword(null,"prediction-rnn","prediction-rnn",1583913461));
var low = cljs.core.get.call(null,map__37507__$1,new cljs.core.Keyword(null,"low","low",-1601362409));
var r_start = (bar_width + bar_spacing);
var line = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(r_start * idx),new cljs.core.Keyword(null,"y1","y1",589123466),(x_axis - height_offset),new cljs.core.Keyword(null,"x2","x2",-1362513475),((r_start * idx) + bar_width),new cljs.core.Keyword(null,"y2","y2",-718691301),(x_axis - height_offset)], null)], null);
var G__37509 = prediction_rl;
switch (G__37509) {
case "buy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),line], null);

break;
case "hold":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),line], null);

break;
case "sell":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),line], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37509)].join('')));

}
});
cljs.user.make_bars = (function cljs$user$make_bars(mx,data){
var mbr = cljs.core.partial.call(null,cljs.user.make_bar_red,(1),(1),(50),(500),mx);
var mbg = cljs.core.partial.call(null,cljs.user.make_bar_green,(1),(1),(50),(500),mx);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bars","bars",-586907130),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),cljs.core.apply.call(null,cljs.core.concat,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,mbg,data))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.apply.call(null,cljs.core.concat,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,mbr,data))))], null)], null)], null);
});

//# sourceMappingURL=graphics1E3942A.js.map?rel=1535218836207
