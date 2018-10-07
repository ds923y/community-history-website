// Compiled by ClojureScript 1.10.339 {}
goog.provide('play_cljs.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('p5.core');
goog.require('p5.tiled_map');
goog.require('cljs.core.async');
goog.require('play_cljs.options');

/**
 * A screen object provides the basic lifecycle for a game.
 * Simple games may only need to have one screen. They are a useful way to
 * isolate different aspects of your game. For example, you could make one
 * screen display the title and menu, and another screen contain the game
 * itself.
 * 
 * You can create a screen by using `reify` like this:
 * 
 * ```
 * (def main-screen
 *   (reify p/Screen
 *  (on-show [this])
 *  (on-hide [this])
 *  (on-render [this])))
 * ```
 * @interface
 */
play_cljs.core.Screen = function(){};

/**
 * Runs once, when the screen first appears.
 */
play_cljs.core.on_show = (function play_cljs$core$on_show(screen){
if(((!((screen == null))) && (!((screen.play_cljs$core$Screen$on_show$arity$1 == null))))){
return screen.play_cljs$core$Screen$on_show$arity$1(screen);
} else {
var x__4243__auto__ = (((screen == null))?null:screen);
var m__4244__auto__ = (play_cljs.core.on_show[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,screen);
} else {
var m__4244__auto____$1 = (play_cljs.core.on_show["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-show",screen);
}
}
}
});

/**
 * Runs once, when the screen is no longer displayed.
 */
play_cljs.core.on_hide = (function play_cljs$core$on_hide(screen){
if(((!((screen == null))) && (!((screen.play_cljs$core$Screen$on_hide$arity$1 == null))))){
return screen.play_cljs$core$Screen$on_hide$arity$1(screen);
} else {
var x__4243__auto__ = (((screen == null))?null:screen);
var m__4244__auto__ = (play_cljs.core.on_hide[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,screen);
} else {
var m__4244__auto____$1 = (play_cljs.core.on_hide["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-hide",screen);
}
}
}
});

/**
 * Runs each time the game is ready to render another frame.
 */
play_cljs.core.on_render = (function play_cljs$core$on_render(screen){
if(((!((screen == null))) && (!((screen.play_cljs$core$Screen$on_render$arity$1 == null))))){
return screen.play_cljs$core$Screen$on_render$arity$1(screen);
} else {
var x__4243__auto__ = (((screen == null))?null:screen);
var m__4244__auto__ = (play_cljs.core.on_render[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,screen);
} else {
var m__4244__auto____$1 = (play_cljs.core.on_render["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-render",screen);
}
}
}
});


/**
 * A game object contains the internal renderer object and various bits of state
 * that are important to the overall execution of the game. Every play-cljs game
 * should create just one such object by calling `create-game`.
 * @interface
 */
play_cljs.core.Game = function(){};

/**
 * Creates the canvas element.
 */
play_cljs.core.start = (function play_cljs$core$start(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$start$arity$1 == null))))){
return game.play_cljs$core$Game$start$arity$1(game);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.start[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game);
} else {
var m__4244__auto____$1 = (play_cljs.core.start["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.start",game);
}
}
}
});

/**
 * Adds an event listener.
 */
play_cljs.core.listen = (function play_cljs$core$listen(game,listen_type,listener){
if(((!((game == null))) && (!((game.play_cljs$core$Game$listen$arity$3 == null))))){
return game.play_cljs$core$Game$listen$arity$3(game,listen_type,listener);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.listen[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game,listen_type,listener);
} else {
var m__4244__auto____$1 = (play_cljs.core.listen["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game,listen_type,listener);
} else {
throw cljs.core.missing_protocol.call(null,"Game.listen",game);
}
}
}
});

/**
 * Renders the provided data structure.
 */
play_cljs.core.render = (function play_cljs$core$render(game,content){
if(((!((game == null))) && (!((game.play_cljs$core$Game$render$arity$2 == null))))){
return game.play_cljs$core$Game$render$arity$2(game,content);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.render[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game,content);
} else {
var m__4244__auto____$1 = (play_cljs.core.render["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.render",game);
}
}
}
});

/**
 * Renders the provided data structure off-screen and associates it with the given name. Returns an `Image` object.
 */
play_cljs.core.pre_render = (function play_cljs$core$pre_render(game,image_name,width,height,content){
if(((!((game == null))) && (!((game.play_cljs$core$Game$pre_render$arity$5 == null))))){
return game.play_cljs$core$Game$pre_render$arity$5(game,image_name,width,height,content);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.pre_render[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game,image_name,width,height,content);
} else {
var m__4244__auto____$1 = (play_cljs.core.pre_render["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game,image_name,width,height,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.pre-render",game);
}
}
}
});

/**
 * Loads an image. Returns an `Image` object.
 */
play_cljs.core.load_image = (function play_cljs$core$load_image(game,path){
if(((!((game == null))) && (!((game.play_cljs$core$Game$load_image$arity$2 == null))))){
return game.play_cljs$core$Game$load_image$arity$2(game,path);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.load_image[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game,path);
} else {
var m__4244__auto____$1 = (play_cljs.core.load_image["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game,path);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-image",game);
}
}
}
});

/**
 * Loads a tiled map. Returns a `TiledMap` object.
 * A tiled map with the provided name must already be loaded
 * (see the TiledMap docs for details).
 */
play_cljs.core.load_tiled_map = (function play_cljs$core$load_tiled_map(game,map_name){
if(((!((game == null))) && (!((game.play_cljs$core$Game$load_tiled_map$arity$2 == null))))){
return game.play_cljs$core$Game$load_tiled_map$arity$2(game,map_name);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.load_tiled_map[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game,map_name);
} else {
var m__4244__auto____$1 = (play_cljs.core.load_tiled_map["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game,map_name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-tiled-map",game);
}
}
}
});

/**
 * Returns the `Screen` object currently being displayed.
 */
play_cljs.core.get_screen = (function play_cljs$core$get_screen(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_screen$arity$1 == null))))){
return game.play_cljs$core$Game$get_screen$arity$1(game);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.get_screen[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game);
} else {
var m__4244__auto____$1 = (play_cljs.core.get_screen["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-screen",game);
}
}
}
});

/**
 * Sets the `Screen` object to be displayed.
 */
play_cljs.core.set_screen = (function play_cljs$core$set_screen(game,screen){
if(((!((game == null))) && (!((game.play_cljs$core$Game$set_screen$arity$2 == null))))){
return game.play_cljs$core$Game$set_screen$arity$2(game,screen);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.set_screen[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game,screen);
} else {
var m__4244__auto____$1 = (play_cljs.core.set_screen["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-screen",game);
}
}
}
});

/**
 * Returns the internal renderer object.
 */
play_cljs.core.get_renderer = (function play_cljs$core$get_renderer(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_renderer$arity$1 == null))))){
return game.play_cljs$core$Game$get_renderer$arity$1(game);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.get_renderer[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game);
} else {
var m__4244__auto____$1 = (play_cljs.core.get_renderer["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-renderer",game);
}
}
}
});

/**
 * Returns the internal canvas object.
 */
play_cljs.core.get_canvas = (function play_cljs$core$get_canvas(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_canvas$arity$1 == null))))){
return game.play_cljs$core$Game$get_canvas$arity$1(game);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.get_canvas[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game);
} else {
var m__4244__auto____$1 = (play_cljs.core.get_canvas["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-canvas",game);
}
}
}
});

/**
 * Returns the total time transpired since the game started, in milliseconds.
 */
play_cljs.core.get_total_time = (function play_cljs$core$get_total_time(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_total_time$arity$1 == null))))){
return game.play_cljs$core$Game$get_total_time$arity$1(game);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.get_total_time[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game);
} else {
var m__4244__auto____$1 = (play_cljs.core.get_total_time["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-total-time",game);
}
}
}
});

/**
 * Returns the time since the last frame was rendered, in milliseconds.
 */
play_cljs.core.get_delta_time = (function play_cljs$core$get_delta_time(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_delta_time$arity$1 == null))))){
return game.play_cljs$core$Game$get_delta_time$arity$1(game);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.get_delta_time[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game);
} else {
var m__4244__auto____$1 = (play_cljs.core.get_delta_time["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-delta-time",game);
}
}
}
});

/**
 * Returns a set containing the key codes for the keys currently being pressed.
 */
play_cljs.core.get_pressed_keys = (function play_cljs$core$get_pressed_keys(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_pressed_keys$arity$1 == null))))){
return game.play_cljs$core$Game$get_pressed_keys$arity$1(game);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.get_pressed_keys[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game);
} else {
var m__4244__auto____$1 = (play_cljs.core.get_pressed_keys["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-pressed-keys",game);
}
}
}
});

/**
 * Returns the virtual width of the game.
 */
play_cljs.core.get_width = (function play_cljs$core$get_width(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_width$arity$1 == null))))){
return game.play_cljs$core$Game$get_width$arity$1(game);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.get_width[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game);
} else {
var m__4244__auto____$1 = (play_cljs.core.get_width["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-width",game);
}
}
}
});

/**
 * Returns the virtual height of the game.
 */
play_cljs.core.get_height = (function play_cljs$core$get_height(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_height$arity$1 == null))))){
return game.play_cljs$core$Game$get_height$arity$1(game);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.get_height[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game);
} else {
var m__4244__auto____$1 = (play_cljs.core.get_height["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-height",game);
}
}
}
});

/**
 * Sets the virtual width and height of the game.
 */
play_cljs.core.set_size = (function play_cljs$core$set_size(game,width,height){
if(((!((game == null))) && (!((game.play_cljs$core$Game$set_size$arity$3 == null))))){
return game.play_cljs$core$Game$set_size$arity$3(game,width,height);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.set_size[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game,width,height);
} else {
var m__4244__auto____$1 = (play_cljs.core.set_size["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game,width,height);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-size",game);
}
}
}
});

/**
 * Gets the asset with the given name.
 */
play_cljs.core.get_asset = (function play_cljs$core$get_asset(game,name){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_asset$arity$2 == null))))){
return game.play_cljs$core$Game$get_asset$arity$2(game,name);
} else {
var x__4243__auto__ = (((game == null))?null:game);
var m__4244__auto__ = (play_cljs.core.get_asset[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,game,name);
} else {
var m__4244__auto____$1 = (play_cljs.core.get_asset["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,game,name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-asset",game);
}
}
}
});

play_cljs.core.start_example_game = (function play_cljs$core$start_example_game(game,card,_STAR_state){
var G__33277 = game;
play_cljs.core.start.call(null,G__33277);

play_cljs.core.set_size.call(null,G__33277,card.clientWidth,card.clientHeight);

play_cljs.core.listen.call(null,G__33277,"mousemove",((function (G__33277){
return (function (event){
var bounds = card.getBoundingClientRect();
var x = (event.clientX - bounds.left);
var y = (event.clientY - bounds.top);
return cljs.core.swap_BANG_.call(null,_STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
});})(G__33277))
);

play_cljs.core.listen.call(null,G__33277,"resize",((function (G__33277){
return (function (event){
return play_cljs.core.set_size.call(null,game,card.clientWidth,card.clientHeight);
});})(G__33277))
);

return G__33277;
});
if((typeof play_cljs !== 'undefined') && (typeof play_cljs.core !== 'undefined') && (typeof play_cljs.core.draw_sketch_BANG_ !== 'undefined')){
} else {
/**
 * Internal multimethod for drawing entities. Extending this will allow you
 * to define new entity types.
 */
play_cljs.core.draw_sketch_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"play-cljs.core","draw-sketch!"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (game,renderer,content,parent_opts){
var k = cljs.core.first.call(null,content);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.sequential_QMARK_.call(null,k)){
return new cljs.core.Keyword("play-cljs.core","multiple","play-cljs.core/multiple",-959817429);
} else {
return null;
}
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword("play-cljs.core","multiple","play-cljs.core/multiple",-959817429),(function (game,renderer,content,parent_opts){
return cljs.core.run_BANG_.call(null,(function (p1__33278_SHARP_){
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,p1__33278_SHARP_,parent_opts);
}),content);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (game,renderer,content,parent_opts){
var temp__5457__auto__ = cljs.core.first.call(null,content);
if(cljs.core.truth_(temp__5457__auto__)){
var name = temp__5457__auto__;
throw (new Error(["Command not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')));
} else {
return null;
}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"div","div",1057191632),(function (game,renderer,content,parent_opts){
var vec__33279 = content;
var seq__33280 = cljs.core.seq.call(null,vec__33279);
var first__33281 = cljs.core.first.call(null,seq__33280);
var seq__33280__$1 = cljs.core.next.call(null,seq__33280);
var _ = first__33281;
var first__33281__$1 = cljs.core.first.call(null,seq__33280__$1);
var seq__33280__$2 = cljs.core.next.call(null,seq__33280__$1);
var opts = first__33281__$1;
var children = seq__33280__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","basic-opts","play-cljs.options/basic-opts",1575435453),opts__$1);
} else {
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (game,renderer,content,parent_opts){
var vec__33282 = content;
var seq__33283 = cljs.core.seq.call(null,vec__33282);
var first__33284 = cljs.core.first.call(null,seq__33283);
var seq__33283__$1 = cljs.core.next.call(null,seq__33283);
var _ = first__33284;
var first__33284__$1 = cljs.core.first.call(null,seq__33283__$1);
var seq__33283__$2 = cljs.core.next.call(null,seq__33283__$1);
var opts = first__33284__$1;
var children = seq__33283__$2;
var map__33285 = play_cljs.options.update_opts.call(null,opts,parent_opts,play_cljs.options.text_defaults);
var map__33285__$1 = ((((!((map__33285 == null)))?(((((map__33285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33285):map__33285);
var opts__$1 = map__33285__$1;
var value = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"value","value",305978217));
var x = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var font = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var halign = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"halign","halign",-1113968481));
var valign = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"valign","valign",1485197511));
var leading = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"leading","leading",-1239035032));
var style = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","text-opts","play-cljs.options/text-opts",80485593),opts__$1);
} else {
}

var G__33287_33288 = renderer;
G__33287_33288.textSize(size);

G__33287_33288.textFont(font);

G__33287_33288.textAlign(play_cljs.options.halign__GT_constant.call(null,renderer,halign),play_cljs.options.valign__GT_constant.call(null,renderer,valign));

G__33287_33288.textLeading(leading);

G__33287_33288.textStyle(play_cljs.options.style__GT_constant.call(null,renderer,style));

G__33287_33288.text(value,x,y);


return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"arc","arc",252411045),(function (game,renderer,content,parent_opts){
var vec__33289 = content;
var seq__33290 = cljs.core.seq.call(null,vec__33289);
var first__33291 = cljs.core.first.call(null,seq__33290);
var seq__33290__$1 = cljs.core.next.call(null,seq__33290);
var _ = first__33291;
var first__33291__$1 = cljs.core.first.call(null,seq__33290__$1);
var seq__33290__$2 = cljs.core.next.call(null,seq__33290__$1);
var opts = first__33291__$1;
var children = seq__33290__$2;
var map__33292 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33292__$1 = ((((!((map__33292 == null)))?(((((map__33292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33292):map__33292);
var opts__$1 = map__33292__$1;
var x = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","arc-opts","play-cljs.options/arc-opts",-2061724142),opts__$1);
} else {
}

renderer.arc(x,y,width,height,start,stop);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (game,renderer,content,parent_opts){
var vec__33294 = content;
var seq__33295 = cljs.core.seq.call(null,vec__33294);
var first__33296 = cljs.core.first.call(null,seq__33295);
var seq__33295__$1 = cljs.core.next.call(null,seq__33295);
var _ = first__33296;
var first__33296__$1 = cljs.core.first.call(null,seq__33295__$1);
var seq__33295__$2 = cljs.core.next.call(null,seq__33295__$1);
var opts = first__33296__$1;
var children = seq__33295__$2;
var map__33297 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33297__$1 = ((((!((map__33297 == null)))?(((((map__33297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33297):map__33297);
var opts__$1 = map__33297__$1;
var x = cljs.core.get.call(null,map__33297__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__33297__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__33297__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__33297__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","ellipse-opts","play-cljs.options/ellipse-opts",-2019187814),opts__$1);
} else {
}

renderer.ellipse(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"line","line",212345235),(function (game,renderer,content,parent_opts){
var vec__33299 = content;
var seq__33300 = cljs.core.seq.call(null,vec__33299);
var first__33301 = cljs.core.first.call(null,seq__33300);
var seq__33300__$1 = cljs.core.next.call(null,seq__33300);
var _ = first__33301;
var first__33301__$1 = cljs.core.first.call(null,seq__33300__$1);
var seq__33300__$2 = cljs.core.next.call(null,seq__33300__$1);
var opts = first__33301__$1;
var children = seq__33300__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","line-opts","play-cljs.options/line-opts",-1922464746),opts__$1):null);
var map__33302 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__33302__$1 = ((((!((map__33302 == null)))?(((((map__33302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33302):map__33302);
var opts__$2 = map__33302__$1;
var x1 = cljs.core.get.call(null,map__33302__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__33302__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__33302__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__33302__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
renderer.line(x1,y1,x2,y2);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"point","point",1813198264),(function (game,renderer,content,parent_opts){
var vec__33304 = content;
var seq__33305 = cljs.core.seq.call(null,vec__33304);
var first__33306 = cljs.core.first.call(null,seq__33305);
var seq__33305__$1 = cljs.core.next.call(null,seq__33305);
var _ = first__33306;
var first__33306__$1 = cljs.core.first.call(null,seq__33305__$1);
var seq__33305__$2 = cljs.core.next.call(null,seq__33305__$1);
var opts = first__33306__$1;
var children = seq__33305__$2;
var map__33307 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33307__$1 = ((((!((map__33307 == null)))?(((((map__33307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33307):map__33307);
var opts__$1 = map__33307__$1;
var x = cljs.core.get.call(null,map__33307__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__33307__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","point-opts","play-cljs.options/point-opts",-2087468248),opts__$1);
} else {
}

renderer.point(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"quad","quad",432820757),(function (game,renderer,content,parent_opts){
var vec__33309 = content;
var seq__33310 = cljs.core.seq.call(null,vec__33309);
var first__33311 = cljs.core.first.call(null,seq__33310);
var seq__33310__$1 = cljs.core.next.call(null,seq__33310);
var _ = first__33311;
var first__33311__$1 = cljs.core.first.call(null,seq__33310__$1);
var seq__33310__$2 = cljs.core.next.call(null,seq__33310__$1);
var opts = first__33311__$1;
var children = seq__33310__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","quad-opts","play-cljs.options/quad-opts",-218754219),opts__$1):null);
var map__33312 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__33312__$1 = ((((!((map__33312 == null)))?(((((map__33312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33312):map__33312);
var opts__$2 = map__33312__$1;
var x1 = cljs.core.get.call(null,map__33312__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__33312__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__33312__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__33312__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__33312__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__33312__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__33312__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y4 = cljs.core.get.call(null,map__33312__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
renderer.quad(x1,y1,x2,y2,x3,y3,x4,y4);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (game,renderer,content,parent_opts){
var vec__33314 = content;
var seq__33315 = cljs.core.seq.call(null,vec__33314);
var first__33316 = cljs.core.first.call(null,seq__33315);
var seq__33315__$1 = cljs.core.next.call(null,seq__33315);
var _ = first__33316;
var first__33316__$1 = cljs.core.first.call(null,seq__33315__$1);
var seq__33315__$2 = cljs.core.next.call(null,seq__33315__$1);
var opts = first__33316__$1;
var children = seq__33315__$2;
var map__33317 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33317__$1 = ((((!((map__33317 == null)))?(((((map__33317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33317):map__33317);
var opts__$1 = map__33317__$1;
var x = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","rect-opts","play-cljs.options/rect-opts",804210777),opts__$1);
} else {
}

renderer.rect(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"triangle","triangle",-1828376667),(function (game,renderer,content,parent_opts){
var vec__33319 = content;
var seq__33320 = cljs.core.seq.call(null,vec__33319);
var first__33321 = cljs.core.first.call(null,seq__33320);
var seq__33320__$1 = cljs.core.next.call(null,seq__33320);
var _ = first__33321;
var first__33321__$1 = cljs.core.first.call(null,seq__33320__$1);
var seq__33320__$2 = cljs.core.next.call(null,seq__33320__$1);
var opts = first__33321__$1;
var children = seq__33320__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","triangle-opts","play-cljs.options/triangle-opts",-1559275569),opts__$1):null);
var map__33322 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__33322__$1 = ((((!((map__33322 == null)))?(((((map__33322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33322):map__33322);
var opts__$2 = map__33322__$1;
var x1 = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
renderer.triangle(x1,y1,x2,y2,x3,y3);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"image","image",-58725096),(function (game,renderer,content,parent_opts){
var vec__33324 = content;
var seq__33325 = cljs.core.seq.call(null,vec__33324);
var first__33326 = cljs.core.first.call(null,seq__33325);
var seq__33325__$1 = cljs.core.next.call(null,seq__33325);
var _ = first__33326;
var first__33326__$1 = cljs.core.first.call(null,seq__33325__$1);
var seq__33325__$2 = cljs.core.next.call(null,seq__33325__$1);
var opts = first__33326__$1;
var children = seq__33325__$2;
var map__33327 = play_cljs.options.update_opts.call(null,opts,parent_opts,play_cljs.options.image_defaults);
var map__33327__$1 = ((((!((map__33327 == null)))?(((((map__33327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33327):map__33327);
var opts__$1 = map__33327__$1;
var x = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var scale_x = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var swidth = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"swidth","swidth",-976864420));
var flip_x = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var sheight = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"sheight","sheight",1322250621));
var height = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var flip_y = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var y = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sy = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var width = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var scale_y = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var sx = cljs.core.get.call(null,map__33327__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","image-opts","play-cljs.options/image-opts",-1345787416),opts__$1):null);
var value__$1 = (function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = play_cljs.core.get_asset.call(null,game,name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return play_cljs.core.load_image.call(null,game,name);
}
}
})();
var swidth__$1 = (function (){var or__3949__auto__ = swidth;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return value__$1.width;
}
})();
var sheight__$1 = (function (){var or__3949__auto__ = sheight;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return value__$1.height;
}
})();
renderer.push();

renderer.translate(x,y);

renderer.scale(scale_x,scale_y);

if(cljs.core.truth_(flip_x)){
renderer.scale((-1),(1));

renderer.translate((- swidth__$1),(0));
} else {
}

if(cljs.core.truth_(flip_y)){
renderer.scale((1),(-1));

renderer.translate((0),(- sheight__$1));
} else {
}

renderer.image(value__$1,(0),(0),(function (){var or__3949__auto__ = width;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return swidth__$1;
}
})(),(function (){var or__3949__auto__ = height;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return sheight__$1;
}
})(),sx,sy,swidth__$1,sheight__$1);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"animation","animation",-1248293244),(function (game,renderer,content,parent_opts){
var vec__33329 = content;
var seq__33330 = cljs.core.seq.call(null,vec__33329);
var first__33331 = cljs.core.first.call(null,seq__33330);
var seq__33330__$1 = cljs.core.next.call(null,seq__33330);
var _ = first__33331;
var first__33331__$1 = cljs.core.first.call(null,seq__33330__$1);
var seq__33330__$2 = cljs.core.next.call(null,seq__33330__$1);
var opts = first__33331__$1;
var children = seq__33330__$2;
var map__33332 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33332__$1 = ((((!((map__33332 == null)))?(((((map__33332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33332):map__33332);
var opts__$1 = map__33332__$1;
var duration = cljs.core.get.call(null,map__33332__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","animation-opts","play-cljs.options/animation-opts",-1011684308),opts__$1):null);
var images = cljs.core.vec.call(null,children);
var cycle_time = cljs.core.mod.call(null,play_cljs.core.get_total_time.call(null,game),(duration * cljs.core.count.call(null,images)));
var index = ((cycle_time / duration) | (0));
var image = cljs.core.get.call(null,images,index);
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,image,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (game,renderer,content,parent_opts){
var vec__33334 = content;
var seq__33335 = cljs.core.seq.call(null,vec__33334);
var first__33336 = cljs.core.first.call(null,seq__33335);
var seq__33335__$1 = cljs.core.next.call(null,seq__33335);
var _ = first__33336;
var first__33336__$1 = cljs.core.first.call(null,seq__33335__$1);
var seq__33335__$2 = cljs.core.next.call(null,seq__33335__$1);
var opts = first__33336__$1;
var children = seq__33335__$2;
var map__33337 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33337__$1 = ((((!((map__33337 == null)))?(((((map__33337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33337):map__33337);
var opts__$1 = map__33337__$1;
var grayscale = cljs.core.get.call(null,map__33337__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__33337__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__33337__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","fill-opts","play-cljs.options/fill-opts",-1853833407),opts__$1);
} else {
}

renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.fill(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.fill(color);
} else {
if(cljs.core.truth_(colors)){
var vec__33339_33342 = colors;
var n1_33343 = cljs.core.nth.call(null,vec__33339_33342,(0),null);
var n2_33344 = cljs.core.nth.call(null,vec__33339_33342,(1),null);
var n3_33345 = cljs.core.nth.call(null,vec__33339_33342,(2),null);
var a_33346 = cljs.core.nth.call(null,vec__33339_33342,(3),null);
renderer.fill(n1_33343,n2_33344,n3_33345,a_33346);
} else {
renderer.noFill();

}
}
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (game,renderer,content,parent_opts){
var vec__33347 = content;
var seq__33348 = cljs.core.seq.call(null,vec__33347);
var first__33349 = cljs.core.first.call(null,seq__33348);
var seq__33348__$1 = cljs.core.next.call(null,seq__33348);
var _ = first__33349;
var first__33349__$1 = cljs.core.first.call(null,seq__33348__$1);
var seq__33348__$2 = cljs.core.next.call(null,seq__33348__$1);
var opts = first__33349__$1;
var children = seq__33348__$2;
var map__33350 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33350__$1 = ((((!((map__33350 == null)))?(((((map__33350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33350):map__33350);
var opts__$1 = map__33350__$1;
var grayscale = cljs.core.get.call(null,map__33350__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__33350__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__33350__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","stroke-opts","play-cljs.options/stroke-opts",-656452964),opts__$1);
} else {
}

renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.stroke(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.stroke(color);
} else {
if(cljs.core.truth_(colors)){
var vec__33352_33355 = colors;
var n1_33356 = cljs.core.nth.call(null,vec__33352_33355,(0),null);
var n2_33357 = cljs.core.nth.call(null,vec__33352_33355,(1),null);
var n3_33358 = cljs.core.nth.call(null,vec__33352_33355,(2),null);
renderer.stroke(n1_33356,n2_33357,n3_33358);
} else {
renderer.noStroke();

}
}
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"bezier","bezier",-539235327),(function (game,renderer,content,parent_opts){
var vec__33359 = content;
var seq__33360 = cljs.core.seq.call(null,vec__33359);
var first__33361 = cljs.core.first.call(null,seq__33360);
var seq__33360__$1 = cljs.core.next.call(null,seq__33360);
var _ = first__33361;
var first__33361__$1 = cljs.core.first.call(null,seq__33360__$1);
var seq__33360__$2 = cljs.core.next.call(null,seq__33360__$1);
var opts = first__33361__$1;
var children = seq__33360__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","bezier-opts","play-cljs.options/bezier-opts",1503466583),opts__$1):null);
var map__33362 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__33362__$1 = ((((!((map__33362 == null)))?(((((map__33362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33362):map__33362);
var opts__$2 = map__33362__$1;
var x1 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__3938__auto__ = z1;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = z2;
if(cljs.core.truth_(and__3938__auto____$1)){
var and__3938__auto____$2 = z3;
if(cljs.core.truth_(and__3938__auto____$2)){
return z4;
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
renderer.bezier(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
} else {
renderer.bezier(x1,y1,x2,y2,x3,y3,x4,y4);
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"curve","curve",-569677866),(function (game,renderer,content,parent_opts){
var vec__33364 = content;
var seq__33365 = cljs.core.seq.call(null,vec__33364);
var first__33366 = cljs.core.first.call(null,seq__33365);
var seq__33365__$1 = cljs.core.next.call(null,seq__33365);
var _ = first__33366;
var first__33366__$1 = cljs.core.first.call(null,seq__33365__$1);
var seq__33365__$2 = cljs.core.next.call(null,seq__33365__$1);
var opts = first__33366__$1;
var children = seq__33365__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","curve-opts","play-cljs.options/curve-opts",-423348601),opts__$1):null);
var map__33367 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__33367__$1 = ((((!((map__33367 == null)))?(((((map__33367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33367):map__33367);
var opts__$2 = map__33367__$1;
var x1 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__33367__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__3938__auto__ = z1;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = z2;
if(cljs.core.truth_(and__3938__auto____$1)){
var and__3938__auto____$2 = z3;
if(cljs.core.truth_(and__3938__auto____$2)){
return z4;
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
renderer.curve(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
} else {
renderer.curve(x1,y1,x2,y2,x3,y3,x4,y4);
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rgb","rgb",1432123467),(function (game,renderer,content,parent_opts){
var vec__33369 = content;
var seq__33370 = cljs.core.seq.call(null,vec__33369);
var first__33371 = cljs.core.first.call(null,seq__33370);
var seq__33370__$1 = cljs.core.next.call(null,seq__33370);
var _ = first__33371;
var first__33371__$1 = cljs.core.first.call(null,seq__33370__$1);
var seq__33370__$2 = cljs.core.next.call(null,seq__33370__$1);
var opts = first__33371__$1;
var children = seq__33370__$2;
var map__33372 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33372__$1 = ((((!((map__33372 == null)))?(((((map__33372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33372):map__33372);
var opts__$1 = map__33372__$1;
var max_r = cljs.core.get.call(null,map__33372__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g = cljs.core.get.call(null,map__33372__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b = cljs.core.get.call(null,map__33372__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__33372__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","rgb-opts","play-cljs.options/rgb-opts",-409658223),opts__$1);
} else {
}

renderer.push();

renderer.colorMode(renderer.RGB,max_r,max_g,max_b,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"hsb","hsb",-753472031),(function (game,renderer,content,parent_opts){
var vec__33374 = content;
var seq__33375 = cljs.core.seq.call(null,vec__33374);
var first__33376 = cljs.core.first.call(null,seq__33375);
var seq__33375__$1 = cljs.core.next.call(null,seq__33375);
var _ = first__33376;
var first__33376__$1 = cljs.core.first.call(null,seq__33375__$1);
var seq__33375__$2 = cljs.core.next.call(null,seq__33375__$1);
var opts = first__33376__$1;
var children = seq__33375__$2;
var map__33377 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33377__$1 = ((((!((map__33377 == null)))?(((((map__33377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33377):map__33377);
var opts__$1 = map__33377__$1;
var max_h = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"max-h","max-h",1409940394));
var max_s = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"max-s","max-s",781928940));
var max_b = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","hsb-opts","play-cljs.options/hsb-opts",-765339474),opts__$1);
} else {
}

renderer.push();

renderer.colorMode(renderer.HSB,max_h,max_s,max_b,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"hsl","hsl",-1282948596),(function (game,renderer,content,parent_opts){
var vec__33379 = content;
var seq__33380 = cljs.core.seq.call(null,vec__33379);
var first__33381 = cljs.core.first.call(null,seq__33380);
var seq__33380__$1 = cljs.core.next.call(null,seq__33380);
var _ = first__33381;
var first__33381__$1 = cljs.core.first.call(null,seq__33380__$1);
var seq__33380__$2 = cljs.core.next.call(null,seq__33380__$1);
var opts = first__33381__$1;
var children = seq__33380__$2;
var map__33382 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33382__$1 = ((((!((map__33382 == null)))?(((((map__33382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33382):map__33382);
var opts__$1 = map__33382__$1;
var max_h = cljs.core.get.call(null,map__33382__$1,new cljs.core.Keyword(null,"max-h","max-h",1409940394));
var max_s = cljs.core.get.call(null,map__33382__$1,new cljs.core.Keyword(null,"max-s","max-s",781928940));
var max_l = cljs.core.get.call(null,map__33382__$1,new cljs.core.Keyword(null,"max-l","max-l",1178950767));
var max_a = cljs.core.get.call(null,map__33382__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","hsl-opts","play-cljs.options/hsl-opts",1927794012),opts__$1);
} else {
}

renderer.push();

renderer.colorMode(renderer.HSL,max_h,max_s,max_l,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"tiled-map","tiled-map",1087696322),(function (game,renderer,content,parent_opts){
var vec__33384 = content;
var seq__33385 = cljs.core.seq.call(null,vec__33384);
var first__33386 = cljs.core.first.call(null,seq__33385);
var seq__33385__$1 = cljs.core.next.call(null,seq__33385);
var _ = first__33386;
var first__33386__$1 = cljs.core.first.call(null,seq__33385__$1);
var seq__33385__$2 = cljs.core.next.call(null,seq__33385__$1);
var opts = first__33386__$1;
var children = seq__33385__$2;
var map__33387 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__33387__$1 = ((((!((map__33387 == null)))?(((((map__33387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33387):map__33387);
var opts__$1 = map__33387__$1;
var value = cljs.core.get.call(null,map__33387__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__33387__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var x = cljs.core.get.call(null,map__33387__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__33387__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","tiled-map-opts","play-cljs.options/tiled-map-opts",-2722244),opts__$1):null);
var value__$1 = (function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = play_cljs.core.get_asset.call(null,game,name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return play_cljs.core.load_tiled_map.call(null,game,name);
}
}
})();
value__$1.draw(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (game,renderer,content,parent_opts){
var vec__33389 = content;
var seq__33390 = cljs.core.seq.call(null,vec__33389);
var first__33391 = cljs.core.first.call(null,seq__33390);
var seq__33390__$1 = cljs.core.next.call(null,seq__33390);
var _ = first__33391;
var first__33391__$1 = cljs.core.first.call(null,seq__33390__$1);
var seq__33390__$2 = cljs.core.next.call(null,seq__33390__$1);
var opts = first__33391__$1;
var children = seq__33390__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","shape-opts","play-cljs.options/shape-opts",2031031834),opts__$1);
} else {
}

renderer.beginShape();

var G__33395_33402 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
var vec__33396_33403 = G__33395_33402;
var seq__33397_33404 = cljs.core.seq.call(null,vec__33396_33403);
var first__33398_33405 = cljs.core.first.call(null,seq__33397_33404);
var seq__33397_33406__$1 = cljs.core.next.call(null,seq__33397_33404);
var x_33407 = first__33398_33405;
var first__33398_33408__$1 = cljs.core.first.call(null,seq__33397_33406__$1);
var seq__33397_33409__$2 = cljs.core.next.call(null,seq__33397_33406__$1);
var y_33410 = first__33398_33408__$1;
var rest_33411 = seq__33397_33409__$2;
var G__33395_33412__$1 = G__33395_33402;
while(true){
var vec__33399_33413 = G__33395_33412__$1;
var seq__33400_33414 = cljs.core.seq.call(null,vec__33399_33413);
var first__33401_33415 = cljs.core.first.call(null,seq__33400_33414);
var seq__33400_33416__$1 = cljs.core.next.call(null,seq__33400_33414);
var x_33417__$1 = first__33401_33415;
var first__33401_33418__$1 = cljs.core.first.call(null,seq__33400_33416__$1);
var seq__33400_33419__$2 = cljs.core.next.call(null,seq__33400_33416__$1);
var y_33420__$1 = first__33401_33418__$1;
var rest_33421__$1 = seq__33400_33419__$2;
renderer.vertex(x_33417__$1,y_33420__$1);

if(rest_33421__$1){
var G__33422 = rest_33421__$1;
G__33395_33412__$1 = G__33422;
continue;
} else {
}
break;
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.endShape(renderer.CLOSE);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"contour","contour",-943960423),(function (game,renderer,content,parent_opts){
var vec__33423 = content;
var seq__33424 = cljs.core.seq.call(null,vec__33423);
var first__33425 = cljs.core.first.call(null,seq__33424);
var seq__33424__$1 = cljs.core.next.call(null,seq__33424);
var _ = first__33425;
var first__33425__$1 = cljs.core.first.call(null,seq__33424__$1);
var seq__33424__$2 = cljs.core.next.call(null,seq__33424__$1);
var opts = first__33425__$1;
var children = seq__33424__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","contour-opts","play-cljs.options/contour-opts",-426100605),opts__$1);
} else {
}

renderer.beginContour();

var G__33429_33436 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
var vec__33430_33437 = G__33429_33436;
var seq__33431_33438 = cljs.core.seq.call(null,vec__33430_33437);
var first__33432_33439 = cljs.core.first.call(null,seq__33431_33438);
var seq__33431_33440__$1 = cljs.core.next.call(null,seq__33431_33438);
var x_33441 = first__33432_33439;
var first__33432_33442__$1 = cljs.core.first.call(null,seq__33431_33440__$1);
var seq__33431_33443__$2 = cljs.core.next.call(null,seq__33431_33440__$1);
var y_33444 = first__33432_33442__$1;
var rest_33445 = seq__33431_33443__$2;
var G__33429_33446__$1 = G__33429_33436;
while(true){
var vec__33433_33447 = G__33429_33446__$1;
var seq__33434_33448 = cljs.core.seq.call(null,vec__33433_33447);
var first__33435_33449 = cljs.core.first.call(null,seq__33434_33448);
var seq__33434_33450__$1 = cljs.core.next.call(null,seq__33434_33448);
var x_33451__$1 = first__33435_33449;
var first__33435_33452__$1 = cljs.core.first.call(null,seq__33434_33450__$1);
var seq__33434_33453__$2 = cljs.core.next.call(null,seq__33434_33450__$1);
var y_33454__$1 = first__33435_33452__$1;
var rest_33455__$1 = seq__33434_33453__$2;
renderer.vertex(x_33451__$1,y_33454__$1);

if(rest_33455__$1){
var G__33456 = rest_33455__$1;
G__33429_33446__$1 = G__33456;
continue;
} else {
}
break;
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.endContour(renderer.CLOSE);
}));
/**
 * Returns a game object. You can pass an options map with the following:
 *   
 *   :parent  -  A DOM element in which to place the canvas
 *   :debug?  -  Whether or not to enable debug mode
 *            (defaults to true if :optimizations are set to :none)
 */
play_cljs.core.create_game = (function play_cljs$core$create_game(var_args){
var G__33458 = arguments.length;
switch (G__33458) {
case 2:
return play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return play_cljs.core.create_game.call(null,width,height,cljs.core.PersistentArrayMap.EMPTY);
});

play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$3 = (function (width,height,p__33459){
var map__33460 = p__33459;
var map__33460__$1 = ((((!((map__33460 == null)))?(((((map__33460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33460):map__33460);
var opts = map__33460__$1;
var parent = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var debug_QMARK_ = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),cljs.core.not.call(null,COMPILED));
if(cljs.core.truth_(debug_QMARK_)){
console.log(["Debug mode is enabled. If things are slow, try passing ","{:debug? false} to the third argument of create-game."].join(''));
} else {
p5.disableFriendlyErrors = true;
}

var _STAR_hidden_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"screen","screen",1990059748),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),(0),new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(0),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.PersistentArrayMap.EMPTY], null));
var setup_finished_QMARK_ = cljs.core.async.promise_chan.call(null);
var parent_opts = (cljs.core.truth_(debug_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug?","debug?",-1831756173),true], null):cljs.core.PersistentArrayMap.EMPTY);
if((typeof play_cljs !== 'undefined') && (typeof play_cljs.core !== 'undefined') && (typeof play_cljs.core.t_play_cljs$core33462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Game}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
play_cljs.core.t_play_cljs$core33462 = (function (setup_finished_QMARK_,height,_STAR_hidden_state,p__33459,parent,parent_opts,map__33460,width,debug_QMARK_,opts,meta33463){
this.setup_finished_QMARK_ = setup_finished_QMARK_;
this.height = height;
this._STAR_hidden_state = _STAR_hidden_state;
this.p__33459 = p__33459;
this.parent = parent;
this.parent_opts = parent_opts;
this.map__33460 = map__33460;
this.width = width;
this.debug_QMARK_ = debug_QMARK_;
this.opts = opts;
this.meta33463 = meta33463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
play_cljs.core.t_play_cljs$core33462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (_33464,meta33463__$1){
var self__ = this;
var _33464__$1 = this;
return (new play_cljs.core.t_play_cljs$core33462(self__.setup_finished_QMARK_,self__.height,self__._STAR_hidden_state,self__.p__33459,self__.parent,self__.parent_opts,self__.map__33460,self__.width,self__.debug_QMARK_,self__.opts,meta33463__$1));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (_33464){
var self__ = this;
var _33464__$1 = this;
return self__.meta33463;
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$ = cljs.core.PROTOCOL_SENTINEL;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$get_screen$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$set_size$arity$3 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$,width__$1,height__$1){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return renderer.resizeCanvas(width__$1,height__$1);
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$get_canvas$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$pre_render$arity$5 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$,image_name,width__$1,height__$1,content){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var object = renderer.createGraphics(width__$1,height__$1);
play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,object,content,self__.parent_opts);

cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,image_name,object);

return object;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$load_image$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$,path){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var object = renderer.loadImage(path,((function (renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (){
return null;
});})(renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
);
cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,path,object);

return object;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$get_width$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return renderer.width;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$get_asset$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (game,name){
var self__ = this;
var game__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__._STAR_hidden_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279),name], null));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$get_height$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return renderer.height;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$start$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto___33503 = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto___33503)){
var renderer_33504 = temp__5457__auto___33503;
renderer_33504.remove();
} else {
}

cljs.core.run_BANG_.call(null,goog.events.unlistenByKey,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state)));

cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY);

(new p5(((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (renderer){
renderer.setup = ((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (){
var canvas_wrapper_33505 = (function (){var G__33465 = renderer.createCanvas(self__.width,self__.height);
if(cljs.core.truth_(self__.parent)){
return G__33465.parent(self__.parent);
} else {
return G__33465;
}
})();
var canvas_33506 = canvas_wrapper_33505.canvas;
canvas_33506.removeAttribute("style");

cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.assoc,new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas_33506);

return cljs.core.async.put_BANG_.call(null,self__.setup_finished_QMARK_,true);
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

return renderer.draw = ((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (){
cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (hidden_state){
var time = renderer.millis();
return cljs.core.assoc.call(null,hidden_state,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),time,new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(time - new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(hidden_state)));
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
);

renderer.clear();

var G__33466 = this$__$1;
var G__33466__$1 = (((G__33466 == null))?null:play_cljs.core.get_screen.call(null,G__33466));
if((G__33466__$1 == null)){
return null;
} else {
return play_cljs.core.on_render.call(null,G__33466__$1);
}
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
));

play_cljs.core.listen.call(null,this$__$1,"keydown",((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (e){
return cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.conj,e.keyCode);
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
);

play_cljs.core.listen.call(null,this$__$1,"keyup",((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (e){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(91),null,(93),null], null), null),e.keyCode)){
return cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.disj,e.keyCode);
}
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
);

return play_cljs.core.listen.call(null,this$__$1,"blur",((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
);
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$get_delta_time$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$get_pressed_keys$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$render$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$,content){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,renderer,content,self__.parent_opts);
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$listen$arity$3 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$,listen_type,listener){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.conj,goog.events.listen(window,listen_type,listener));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$load_tiled_map$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$,map_name){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var object = renderer.loadTiledMap(map_name,((function (renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (){
return null;
});})(renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
);
cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,map_name,object);

return object;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$set_screen$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$,screen){
var self__ = this;
var this$__$1 = this;
var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (state_33485){
var state_val_33486 = (state_33485[(1)]);
if((state_val_33486 === (1))){
var state_33485__$1 = state_33485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33485__$1,(2),self__.setup_finished_QMARK_);
} else {
if((state_val_33486 === (2))){
var inst_33468 = (state_33485[(2)]);
var inst_33470 = (this$__$1 == null);
var state_33485__$1 = (function (){var statearr_33487 = state_33485;
(statearr_33487[(7)] = inst_33468);

return statearr_33487;
})();
if(cljs.core.truth_(inst_33470)){
var statearr_33488_33507 = state_33485__$1;
(statearr_33488_33507[(1)] = (3));

} else {
var statearr_33489_33508 = state_33485__$1;
(statearr_33489_33508[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (3))){
var state_33485__$1 = state_33485;
var statearr_33490_33509 = state_33485__$1;
(statearr_33490_33509[(2)] = null);

(statearr_33490_33509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (4))){
var inst_33473 = play_cljs.core.get_screen.call(null,this$__$1);
var state_33485__$1 = state_33485;
var statearr_33491_33510 = state_33485__$1;
(statearr_33491_33510[(2)] = inst_33473);

(statearr_33491_33510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (5))){
var inst_33475 = (state_33485[(8)]);
var inst_33475__$1 = (state_33485[(2)]);
var inst_33476 = (inst_33475__$1 == null);
var state_33485__$1 = (function (){var statearr_33492 = state_33485;
(statearr_33492[(8)] = inst_33475__$1);

return statearr_33492;
})();
if(cljs.core.truth_(inst_33476)){
var statearr_33493_33511 = state_33485__$1;
(statearr_33493_33511[(1)] = (6));

} else {
var statearr_33494_33512 = state_33485__$1;
(statearr_33494_33512[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (6))){
var state_33485__$1 = state_33485;
var statearr_33495_33513 = state_33485__$1;
(statearr_33495_33513[(2)] = null);

(statearr_33495_33513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (7))){
var inst_33475 = (state_33485[(8)]);
var inst_33479 = play_cljs.core.on_hide.call(null,inst_33475);
var state_33485__$1 = state_33485;
var statearr_33496_33514 = state_33485__$1;
(statearr_33496_33514[(2)] = inst_33479);

(statearr_33496_33514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (8))){
var inst_33481 = (state_33485[(2)]);
var inst_33482 = cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),screen);
var inst_33483 = play_cljs.core.on_show.call(null,screen);
var state_33485__$1 = (function (){var statearr_33497 = state_33485;
(statearr_33497[(9)] = inst_33481);

(statearr_33497[(10)] = inst_33482);

return statearr_33497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33485__$1,inst_33483);
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
});})(c__26081__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;
return ((function (switch__25990__auto__,c__26081__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function() {
var play_cljs$core$state_machine__25991__auto__ = null;
var play_cljs$core$state_machine__25991__auto____0 = (function (){
var statearr_33498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33498[(0)] = play_cljs$core$state_machine__25991__auto__);

(statearr_33498[(1)] = (1));

return statearr_33498;
});
var play_cljs$core$state_machine__25991__auto____1 = (function (state_33485){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_33485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e33499){if((e33499 instanceof Object)){
var ex__25994__auto__ = e33499;
var statearr_33500_33515 = state_33485;
(statearr_33500_33515[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33516 = state_33485;
state_33485 = G__33516;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
play_cljs$core$state_machine__25991__auto__ = function(state_33485){
switch(arguments.length){
case 0:
return play_cljs$core$state_machine__25991__auto____0.call(this);
case 1:
return play_cljs$core$state_machine__25991__auto____1.call(this,state_33485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
play_cljs$core$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = play_cljs$core$state_machine__25991__auto____0;
play_cljs$core$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = play_cljs$core$state_machine__25991__auto____1;
return play_cljs$core$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
})();
var state__26083__auto__ = (function (){var statearr_33501 = f__26082__auto__.call(null);
(statearr_33501[(6)] = c__26081__auto__);

return statearr_33501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
);

return c__26081__auto__;
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$get_total_time$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.prototype.play_cljs$core$Game$get_renderer$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.getBasis = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"setup-finished?","setup-finished?",386963073,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"*hidden-state","*hidden-state",1793576007,null),new cljs.core.Symbol(null,"p__33459","p__33459",804131815,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"parent-opts","parent-opts",1877883663,null),new cljs.core.Symbol(null,"map__33460","map__33460",2017586418,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"debug?","debug?",-191224646,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta33463","meta33463",1108536438,null)], null);
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core33462.cljs$lang$type = true;

play_cljs.core.t_play_cljs$core33462.cljs$lang$ctorStr = "play-cljs.core/t_play_cljs$core33462";

play_cljs.core.t_play_cljs$core33462.cljs$lang$ctorPrWriter = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"play-cljs.core/t_play_cljs$core33462");
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

/**
 * Positional factory function for play-cljs.core/t_play_cljs$core33462.
 */
play_cljs.core.__GT_t_play_cljs$core33462 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_){
return (function play_cljs$core$__GT_t_play_cljs$core33462(setup_finished_QMARK___$1,height__$1,_STAR_hidden_state__$1,p__33459__$1,parent__$1,parent_opts__$1,map__33460__$2,width__$1,debug_QMARK___$1,opts__$1,meta33463){
return (new play_cljs.core.t_play_cljs$core33462(setup_finished_QMARK___$1,height__$1,_STAR_hidden_state__$1,p__33459__$1,parent__$1,parent_opts__$1,map__33460__$2,width__$1,debug_QMARK___$1,opts__$1,meta33463));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__33460,map__33460__$1,opts,parent,debug_QMARK_))
;

}

return (new play_cljs.core.t_play_cljs$core33462(setup_finished_QMARK_,height,_STAR_hidden_state,p__33459,parent,parent_opts,map__33460__$1,width,debug_QMARK_,opts,cljs.core.PersistentArrayMap.EMPTY));
});

play_cljs.core.create_game.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1534986047772
