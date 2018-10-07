// Compiled by ClojureScript 1.10.339 {}
goog.provide('nplay_stocks.graphics');
goog.require('cljs.core');
goog.require('play_cljs.core');
nplay_stocks.graphics.vps = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nplay-stocks.graphics","window-size","nplay-stocks.graphics/window-size",-1319142454),(500)], null);
nplay_stocks.graphics.main_screen = (function nplay_stocks$graphics$main_screen(game,data){
if((typeof nplay_stocks !== 'undefined') && (typeof nplay_stocks.graphics !== 'undefined') && (typeof nplay_stocks.graphics.t_nplay_stocks$graphics30480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
nplay_stocks.graphics.t_nplay_stocks$graphics30480 = (function (game,data,meta30481){
this.game = game;
this.data = data;
this.meta30481 = meta30481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
nplay_stocks.graphics.t_nplay_stocks$graphics30480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30482,meta30481__$1){
var self__ = this;
var _30482__$1 = this;
return (new nplay_stocks.graphics.t_nplay_stocks$graphics30480(self__.game,self__.data,meta30481__$1));
});

nplay_stocks.graphics.t_nplay_stocks$graphics30480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30482){
var self__ = this;
var _30482__$1 = this;
return self__.meta30481;
});

nplay_stocks.graphics.t_nplay_stocks$graphics30480.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

nplay_stocks.graphics.t_nplay_stocks$graphics30480.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

nplay_stocks.graphics.t_nplay_stocks$graphics30480.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

nplay_stocks.graphics.t_nplay_stocks$graphics30480.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.render.call(null,self__.game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"candels","candels",-1285505212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),self__.data], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600)], null)], null));
});

nplay_stocks.graphics.t_nplay_stocks$graphics30480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"meta30481","meta30481",1260481345,null)], null);
});

nplay_stocks.graphics.t_nplay_stocks$graphics30480.cljs$lang$type = true;

nplay_stocks.graphics.t_nplay_stocks$graphics30480.cljs$lang$ctorStr = "nplay-stocks.graphics/t_nplay_stocks$graphics30480";

nplay_stocks.graphics.t_nplay_stocks$graphics30480.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"nplay-stocks.graphics/t_nplay_stocks$graphics30480");
});

/**
 * Positional factory function for nplay-stocks.graphics/t_nplay_stocks$graphics30480.
 */
nplay_stocks.graphics.__GT_t_nplay_stocks$graphics30480 = (function nplay_stocks$graphics$main_screen_$___GT_t_nplay_stocks$graphics30480(game__$1,data__$1,meta30481){
return (new nplay_stocks.graphics.t_nplay_stocks$graphics30480(game__$1,data__$1,meta30481));
});

}

return (new nplay_stocks.graphics.t_nplay_stocks$graphics30480(game,data,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"candels","candels",-1285505212),(function (game,renderer,content,parent_opts){
renderer.noLoop();

renderer.noSmooth();

renderer.strokeWeight(0.2);

var vec__30483 = content;
var seq__30484 = cljs.core.seq.call(null,vec__30483);
var first__30485 = cljs.core.first.call(null,seq__30484);
var seq__30484__$1 = cljs.core.next.call(null,seq__30484);
var _ = first__30485;
var first__30485__$1 = cljs.core.first.call(null,seq__30484__$1);
var seq__30484__$2 = cljs.core.next.call(null,seq__30484__$1);
var opts = first__30485__$1;
var children = seq__30484__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,new cljs.core.Keyword(null,"bars","bars",-586907130).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"grid","grid",402978600),(function (game,renderer,content,parent_opts){
var vec__30486 = content;
var seq__30487 = cljs.core.seq.call(null,vec__30486);
var first__30488 = cljs.core.first.call(null,seq__30487);
var seq__30487__$1 = cljs.core.next.call(null,seq__30487);
var _ = first__30488;
var first__30488__$1 = cljs.core.first.call(null,seq__30487__$1);
var seq__30487__$2 = cljs.core.next.call(null,seq__30487__$1);
var opts = first__30488__$1;
var children = seq__30487__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword("nplay-stocks.graphics","window-size","nplay-stocks.graphics/window-size",-1319142454).cljs$core$IFn$_invoke$arity$1(nplay_stocks.graphics.vps),new cljs.core.Keyword(null,"x2","x2",-1362513475),(5000),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword("nplay-stocks.graphics","window-size","nplay-stocks.graphics/window-size",-1319142454).cljs$core$IFn$_invoke$arity$1(nplay_stocks.graphics.vps)], null)], null)], null),opts__$1);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
nplay_stocks.graphics.make_bar_green = (function nplay_stocks$graphics$make_bar_green(bar_width,bar_spacing,x_axis,mx,idx,p__30489){
var map__30490 = p__30489;
var map__30490__$1 = ((((!((map__30490 == null)))?(((((map__30490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30490):map__30490);
var close = cljs.core.get.call(null,map__30490__$1,new cljs.core.Keyword("stock","close","stock/close",1410666500));
var open = cljs.core.get.call(null,map__30490__$1,new cljs.core.Keyword("stock","open","stock/open",-1891060662));
var high = cljs.core.get.call(null,map__30490__$1,new cljs.core.Keyword("stock","high","stock/high",1631790390));
var low = cljs.core.get.call(null,map__30490__$1,new cljs.core.Keyword("stock","low","stock/low",-1159279315));
var r_start = (bar_width + bar_spacing);
var middle_offset = (bar_width / (2));
var height_scale = (x_axis / mx);
if((close >= open)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(r_start * idx),new cljs.core.Keyword(null,"y","y",-1757859776),(x_axis + (((-1) * height_scale) * Math.min(open,close))),new cljs.core.Keyword(null,"width","width",-384071477),bar_width,new cljs.core.Keyword(null,"height","height",1025178622),(((-1) * height_scale) * Math.abs((close - open)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((idx * r_start) + middle_offset),new cljs.core.Keyword(null,"y1","y1",589123466),(x_axis - (height_scale * low)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((idx * r_start) + middle_offset),new cljs.core.Keyword(null,"y2","y2",-718691301),(x_axis - (high * height_scale))], null)], null)], null);
} else {
return null;
}
});
nplay_stocks.graphics.make_bar_red = (function nplay_stocks$graphics$make_bar_red(bar_width,bar_spacing,x_axis_location,mx,idx,p__30492){
var map__30493 = p__30492;
var map__30493__$1 = ((((!((map__30493 == null)))?(((((map__30493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30493):map__30493);
var close = cljs.core.get.call(null,map__30493__$1,new cljs.core.Keyword("stock","close","stock/close",1410666500));
var open = cljs.core.get.call(null,map__30493__$1,new cljs.core.Keyword("stock","open","stock/open",-1891060662));
var high = cljs.core.get.call(null,map__30493__$1,new cljs.core.Keyword("stock","high","stock/high",1631790390));
var low = cljs.core.get.call(null,map__30493__$1,new cljs.core.Keyword("stock","low","stock/low",-1159279315));
var r_start = (bar_width + bar_spacing);
var middle_offset = (bar_width / (2));
var height_scale = (x_axis_location / mx);
if((close < open)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(r_start * idx),new cljs.core.Keyword(null,"y","y",-1757859776),(x_axis_location + (((-1) * height_scale) * Math.min(open,close))),new cljs.core.Keyword(null,"width","width",-384071477),bar_width,new cljs.core.Keyword(null,"height","height",1025178622),(((-1) * height_scale) * Math.abs((close - open)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((idx * r_start) + middle_offset),new cljs.core.Keyword(null,"y1","y1",589123466),(x_axis_location - (height_scale * low)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((idx * r_start) + middle_offset),new cljs.core.Keyword(null,"y2","y2",-718691301),(x_axis_location - (high * height_scale))], null)], null)], null);
} else {
return null;
}
});
nplay_stocks.graphics.make_rnn = (function nplay_stocks$graphics$make_rnn(bar_width,bar_spacing,height_offset,x_axis,idx,p__30495){
var map__30496 = p__30495;
var map__30496__$1 = ((((!((map__30496 == null)))?(((((map__30496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30496):map__30496);
var prediction_rl = cljs.core.get.call(null,map__30496__$1,new cljs.core.Keyword("stock","prediction-rl","stock/prediction-rl",1998306788));
var prediction_rnn = cljs.core.get.call(null,map__30496__$1,new cljs.core.Keyword("stock","prediction-rnn","stock/prediction-rnn",1509282443));
var low = cljs.core.get.call(null,map__30496__$1,new cljs.core.Keyword("stock","low","stock/low",-1159279315));
var r_start = (bar_width + bar_spacing);
var line = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(r_start * idx),new cljs.core.Keyword(null,"y1","y1",589123466),(x_axis - height_offset),new cljs.core.Keyword(null,"x2","x2",-1362513475),((r_start * idx) + bar_width),new cljs.core.Keyword(null,"y2","y2",-718691301),(x_axis - height_offset)], null)], null);
var G__30498 = prediction_rnn;
switch (G__30498) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30498)].join('')));

}
});
nplay_stocks.graphics.make_rl = (function nplay_stocks$graphics$make_rl(bar_width,bar_spacing,height_offset,x_axis,idx,p__30500){
var map__30501 = p__30500;
var map__30501__$1 = ((((!((map__30501 == null)))?(((((map__30501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30501):map__30501);
var prediction_rl = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword("stock","prediction-rl","stock/prediction-rl",1998306788));
var prediction_rnn = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword("stock","prediction-rnn","stock/prediction-rnn",1509282443));
var low = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword("stock","low","stock/low",-1159279315));
var r_start = (bar_width + bar_spacing);
var line = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(r_start * idx),new cljs.core.Keyword(null,"y1","y1",589123466),(x_axis - height_offset),new cljs.core.Keyword(null,"x2","x2",-1362513475),((r_start * idx) + bar_width),new cljs.core.Keyword(null,"y2","y2",-718691301),(x_axis - height_offset)], null)], null);
var G__30503 = prediction_rl;
switch (G__30503) {
case "buy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),line], null);

break;
case "hold":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null),line], null);

break;
case "sell":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),line], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30503)].join('')));

}
});
nplay_stocks.graphics.make_label = (function nplay_stocks$graphics$make_label(bar_width,bar_spacing,height_offset,x_axis,idx,p__30505){
var map__30506 = p__30505;
var map__30506__$1 = ((((!((map__30506 == null)))?(((((map__30506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30506):map__30506);
var label = cljs.core.get.call(null,map__30506__$1,new cljs.core.Keyword("stock","label","stock/label",-1779046586));
var low = cljs.core.get.call(null,map__30506__$1,new cljs.core.Keyword("stock","low","stock/low",-1159279315));
var r_start = (bar_width + bar_spacing);
var line = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(r_start * idx),new cljs.core.Keyword(null,"y1","y1",589123466),(x_axis - height_offset),new cljs.core.Keyword(null,"x2","x2",-1362513475),((r_start * idx) + bar_width),new cljs.core.Keyword(null,"y2","y2",-718691301),(x_axis - height_offset)], null)], null);
var G__30508 = label;
switch (G__30508) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30508)].join('')));

}
});
nplay_stocks.graphics.make_bars = (function nplay_stocks$graphics$make_bars(mx,data){
var get_bars = (function nplay_stocks$graphics$make_bars_$_get_bars(make_bar_fn,data__$1){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,make_bar_fn,data__$1)));
});
var make_red_bar = cljs.core.partial.call(null,nplay_stocks.graphics.make_bar_red,(1),(1),new cljs.core.Keyword("nplay-stocks.graphics","window-size","nplay-stocks.graphics/window-size",-1319142454).cljs$core$IFn$_invoke$arity$1(nplay_stocks.graphics.vps),mx);
var make_green_bar = cljs.core.partial.call(null,nplay_stocks.graphics.make_bar_green,(1),(1),new cljs.core.Keyword("nplay-stocks.graphics","window-size","nplay-stocks.graphics/window-size",-1319142454).cljs$core$IFn$_invoke$arity$1(nplay_stocks.graphics.vps),mx);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bars","bars",-586907130),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),get_bars.call(null,make_green_bar,data))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),get_bars.call(null,make_red_bar,data))], null)], null)], null);
});
nplay_stocks.graphics.get_chart_graphic = (function nplay_stocks$graphics$get_chart_graphic(rsp){
var mx = (cljs.core.reduce.call(null,(function (p1__30510_SHARP_,p2__30511_SHARP_){
var x__4037__auto__ = p1__30510_SHARP_;
var y__4038__auto__ = cljs.core.get_in.call(null,p2__30511_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stock","high","stock/high",1631790390)], null));
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
}),(1),rsp) * 1.05);
var bars = nplay_stocks.graphics.make_bars.call(null,mx,rsp);
var rnn_indicator = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (mx,bars){
return (function (p1__30512_SHARP_,p2__30513_SHARP_){
return nplay_stocks.graphics.make_rnn.call(null,(1),(1),(5),new cljs.core.Keyword("nplay-stocks.graphics","window-size","nplay-stocks.graphics/window-size",-1319142454).cljs$core$IFn$_invoke$arity$1(nplay_stocks.graphics.vps),p1__30512_SHARP_,p2__30513_SHARP_);
});})(mx,bars))
,rsp));
var rl_indicator = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (mx,bars,rnn_indicator){
return (function (p1__30514_SHARP_,p2__30515_SHARP_){
return nplay_stocks.graphics.make_rl.call(null,(1),(1),(20),new cljs.core.Keyword("nplay-stocks.graphics","window-size","nplay-stocks.graphics/window-size",-1319142454).cljs$core$IFn$_invoke$arity$1(nplay_stocks.graphics.vps),p1__30514_SHARP_,p2__30515_SHARP_);
});})(mx,bars,rnn_indicator))
,rsp));
var labels = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (mx,bars,rnn_indicator,rl_indicator){
return (function (p1__30516_SHARP_,p2__30517_SHARP_){
return nplay_stocks.graphics.make_label.call(null,(1),(1),(30),new cljs.core.Keyword("nplay-stocks.graphics","window-size","nplay-stocks.graphics/window-size",-1319142454).cljs$core$IFn$_invoke$arity$1(nplay_stocks.graphics.vps),p1__30516_SHARP_,p2__30517_SHARP_);
});})(mx,bars,rnn_indicator,rl_indicator))
,rsp));
var bars_upd = cljs.core.into.call(null,new cljs.core.Keyword(null,"bars","bars",-586907130).cljs$core$IFn$_invoke$arity$1(bars),cljs.core.concat.call(null,rnn_indicator,rl_indicator,labels));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bars","bars",-586907130),bars_upd], null);
});
nplay_stocks.graphics.run_visualization = (function nplay_stocks$graphics$run_visualization(game,graphic){
var G__30518 = game;
play_cljs.core.start.call(null,G__30518);

play_cljs.core.set_screen.call(null,G__30518,nplay_stocks.graphics.main_screen.call(null,game,graphic));

return G__30518;
});
nplay_stocks.graphics.associate_graphic = (function nplay_stocks$graphics$associate_graphic(dom_node,rsp){
var game = play_cljs.core.create_game.call(null,window.innerWidth,window.innerHeight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.deref.call(null,dom_node)], null));
var graphic = nplay_stocks.graphics.get_chart_graphic.call(null,rsp);
return nplay_stocks.graphics.run_visualization.call(null,game,graphic);
});

//# sourceMappingURL=graphics.js.map?rel=1537206478774
