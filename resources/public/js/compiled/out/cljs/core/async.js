// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26141 = arguments.length;
switch (G__26141) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26142 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26142 = (function (f,blockable,meta26143){
this.f = f;
this.blockable = blockable;
this.meta26143 = meta26143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26144,meta26143__$1){
var self__ = this;
var _26144__$1 = this;
return (new cljs.core.async.t_cljs$core$async26142(self__.f,self__.blockable,meta26143__$1));
});

cljs.core.async.t_cljs$core$async26142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26144){
var self__ = this;
var _26144__$1 = this;
return self__.meta26143;
});

cljs.core.async.t_cljs$core$async26142.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26142.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26143","meta26143",-315141318,null)], null);
});

cljs.core.async.t_cljs$core$async26142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26142";

cljs.core.async.t_cljs$core$async26142.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26142");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26142.
 */
cljs.core.async.__GT_t_cljs$core$async26142 = (function cljs$core$async$__GT_t_cljs$core$async26142(f__$1,blockable__$1,meta26143){
return (new cljs.core.async.t_cljs$core$async26142(f__$1,blockable__$1,meta26143));
});

}

return (new cljs.core.async.t_cljs$core$async26142(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26148 = arguments.length;
switch (G__26148) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26151 = arguments.length;
switch (G__26151) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26154 = arguments.length;
switch (G__26154) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26156 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26156);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26156,ret){
return (function (){
return fn1.call(null,val_26156);
});})(val_26156,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26158 = arguments.length;
switch (G__26158) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___26160 = n;
var x_26161 = (0);
while(true){
if((x_26161 < n__4408__auto___26160)){
(a[x_26161] = (0));

var G__26162 = (x_26161 + (1));
x_26161 = G__26162;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26163 = (i + (1));
i = G__26163;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26164 = (function (flag,meta26165){
this.flag = flag;
this.meta26165 = meta26165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26166,meta26165__$1){
var self__ = this;
var _26166__$1 = this;
return (new cljs.core.async.t_cljs$core$async26164(self__.flag,meta26165__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26166){
var self__ = this;
var _26166__$1 = this;
return self__.meta26165;
});})(flag))
;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26164.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26165","meta26165",31157453,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26164";

cljs.core.async.t_cljs$core$async26164.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26164");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26164.
 */
cljs.core.async.__GT_t_cljs$core$async26164 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26164(flag__$1,meta26165){
return (new cljs.core.async.t_cljs$core$async26164(flag__$1,meta26165));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26164(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26167 = (function (flag,cb,meta26168){
this.flag = flag;
this.cb = cb;
this.meta26168 = meta26168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26169,meta26168__$1){
var self__ = this;
var _26169__$1 = this;
return (new cljs.core.async.t_cljs$core$async26167(self__.flag,self__.cb,meta26168__$1));
});

cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26169){
var self__ = this;
var _26169__$1 = this;
return self__.meta26168;
});

cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26168","meta26168",-815646305,null)], null);
});

cljs.core.async.t_cljs$core$async26167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26167";

cljs.core.async.t_cljs$core$async26167.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26167");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26167.
 */
cljs.core.async.__GT_t_cljs$core$async26167 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26167(flag__$1,cb__$1,meta26168){
return (new cljs.core.async.t_cljs$core$async26167(flag__$1,cb__$1,meta26168));
});

}

return (new cljs.core.async.t_cljs$core$async26167(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26170_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26170_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26171_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26171_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26172 = (i + (1));
i = G__26172;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26178 = arguments.length;
var i__4532__auto___26179 = (0);
while(true){
if((i__4532__auto___26179 < len__4531__auto___26178)){
args__4534__auto__.push((arguments[i__4532__auto___26179]));

var G__26180 = (i__4532__auto___26179 + (1));
i__4532__auto___26179 = G__26180;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26175){
var map__26176 = p__26175;
var map__26176__$1 = ((((!((map__26176 == null)))?(((((map__26176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26176):map__26176);
var opts = map__26176__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26173){
var G__26174 = cljs.core.first.call(null,seq26173);
var seq26173__$1 = cljs.core.next.call(null,seq26173);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26174,seq26173__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26182 = arguments.length;
switch (G__26182) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26081__auto___26228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___26228){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___26228){
return (function (state_26206){
var state_val_26207 = (state_26206[(1)]);
if((state_val_26207 === (7))){
var inst_26202 = (state_26206[(2)]);
var state_26206__$1 = state_26206;
var statearr_26208_26229 = state_26206__$1;
(statearr_26208_26229[(2)] = inst_26202);

(statearr_26208_26229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (1))){
var state_26206__$1 = state_26206;
var statearr_26209_26230 = state_26206__$1;
(statearr_26209_26230[(2)] = null);

(statearr_26209_26230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (4))){
var inst_26185 = (state_26206[(7)]);
var inst_26185__$1 = (state_26206[(2)]);
var inst_26186 = (inst_26185__$1 == null);
var state_26206__$1 = (function (){var statearr_26210 = state_26206;
(statearr_26210[(7)] = inst_26185__$1);

return statearr_26210;
})();
if(cljs.core.truth_(inst_26186)){
var statearr_26211_26231 = state_26206__$1;
(statearr_26211_26231[(1)] = (5));

} else {
var statearr_26212_26232 = state_26206__$1;
(statearr_26212_26232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (13))){
var state_26206__$1 = state_26206;
var statearr_26213_26233 = state_26206__$1;
(statearr_26213_26233[(2)] = null);

(statearr_26213_26233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (6))){
var inst_26185 = (state_26206[(7)]);
var state_26206__$1 = state_26206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26206__$1,(11),to,inst_26185);
} else {
if((state_val_26207 === (3))){
var inst_26204 = (state_26206[(2)]);
var state_26206__$1 = state_26206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26206__$1,inst_26204);
} else {
if((state_val_26207 === (12))){
var state_26206__$1 = state_26206;
var statearr_26214_26234 = state_26206__$1;
(statearr_26214_26234[(2)] = null);

(statearr_26214_26234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (2))){
var state_26206__$1 = state_26206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26206__$1,(4),from);
} else {
if((state_val_26207 === (11))){
var inst_26195 = (state_26206[(2)]);
var state_26206__$1 = state_26206;
if(cljs.core.truth_(inst_26195)){
var statearr_26215_26235 = state_26206__$1;
(statearr_26215_26235[(1)] = (12));

} else {
var statearr_26216_26236 = state_26206__$1;
(statearr_26216_26236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (9))){
var state_26206__$1 = state_26206;
var statearr_26217_26237 = state_26206__$1;
(statearr_26217_26237[(2)] = null);

(statearr_26217_26237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (5))){
var state_26206__$1 = state_26206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26218_26238 = state_26206__$1;
(statearr_26218_26238[(1)] = (8));

} else {
var statearr_26219_26239 = state_26206__$1;
(statearr_26219_26239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (14))){
var inst_26200 = (state_26206[(2)]);
var state_26206__$1 = state_26206;
var statearr_26220_26240 = state_26206__$1;
(statearr_26220_26240[(2)] = inst_26200);

(statearr_26220_26240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (10))){
var inst_26192 = (state_26206[(2)]);
var state_26206__$1 = state_26206;
var statearr_26221_26241 = state_26206__$1;
(statearr_26221_26241[(2)] = inst_26192);

(statearr_26221_26241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (8))){
var inst_26189 = cljs.core.async.close_BANG_.call(null,to);
var state_26206__$1 = state_26206;
var statearr_26222_26242 = state_26206__$1;
(statearr_26222_26242[(2)] = inst_26189);

(statearr_26222_26242[(1)] = (10));


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
});})(c__26081__auto___26228))
;
return ((function (switch__25990__auto__,c__26081__auto___26228){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_26223 = [null,null,null,null,null,null,null,null];
(statearr_26223[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_26223[(1)] = (1));

return statearr_26223;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_26206){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26224){if((e26224 instanceof Object)){
var ex__25994__auto__ = e26224;
var statearr_26225_26243 = state_26206;
(statearr_26225_26243[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26244 = state_26206;
state_26206 = G__26244;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_26206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_26206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___26228))
})();
var state__26083__auto__ = (function (){var statearr_26226 = f__26082__auto__.call(null);
(statearr_26226[(6)] = c__26081__auto___26228);

return statearr_26226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___26228))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26245){
var vec__26246 = p__26245;
var v = cljs.core.nth.call(null,vec__26246,(0),null);
var p = cljs.core.nth.call(null,vec__26246,(1),null);
var job = vec__26246;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26081__auto___26417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___26417,res,vec__26246,v,p,job,jobs,results){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___26417,res,vec__26246,v,p,job,jobs,results){
return (function (state_26253){
var state_val_26254 = (state_26253[(1)]);
if((state_val_26254 === (1))){
var state_26253__$1 = state_26253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26253__$1,(2),res,v);
} else {
if((state_val_26254 === (2))){
var inst_26250 = (state_26253[(2)]);
var inst_26251 = cljs.core.async.close_BANG_.call(null,res);
var state_26253__$1 = (function (){var statearr_26255 = state_26253;
(statearr_26255[(7)] = inst_26250);

return statearr_26255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26253__$1,inst_26251);
} else {
return null;
}
}
});})(c__26081__auto___26417,res,vec__26246,v,p,job,jobs,results))
;
return ((function (switch__25990__auto__,c__26081__auto___26417,res,vec__26246,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0 = (function (){
var statearr_26256 = [null,null,null,null,null,null,null,null];
(statearr_26256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__);

(statearr_26256[(1)] = (1));

return statearr_26256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1 = (function (state_26253){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26257){if((e26257 instanceof Object)){
var ex__25994__auto__ = e26257;
var statearr_26258_26418 = state_26253;
(statearr_26258_26418[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26419 = state_26253;
state_26253 = G__26419;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__ = function(state_26253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1.call(this,state_26253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___26417,res,vec__26246,v,p,job,jobs,results))
})();
var state__26083__auto__ = (function (){var statearr_26259 = f__26082__auto__.call(null);
(statearr_26259[(6)] = c__26081__auto___26417);

return statearr_26259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___26417,res,vec__26246,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26260){
var vec__26261 = p__26260;
var v = cljs.core.nth.call(null,vec__26261,(0),null);
var p = cljs.core.nth.call(null,vec__26261,(1),null);
var job = vec__26261;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___26420 = n;
var __26421 = (0);
while(true){
if((__26421 < n__4408__auto___26420)){
var G__26264_26422 = type;
var G__26264_26423__$1 = (((G__26264_26422 instanceof cljs.core.Keyword))?G__26264_26422.fqn:null);
switch (G__26264_26423__$1) {
case "compute":
var c__26081__auto___26425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26421,c__26081__auto___26425,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (__26421,c__26081__auto___26425,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async){
return (function (state_26277){
var state_val_26278 = (state_26277[(1)]);
if((state_val_26278 === (1))){
var state_26277__$1 = state_26277;
var statearr_26279_26426 = state_26277__$1;
(statearr_26279_26426[(2)] = null);

(statearr_26279_26426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (2))){
var state_26277__$1 = state_26277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26277__$1,(4),jobs);
} else {
if((state_val_26278 === (3))){
var inst_26275 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26277__$1,inst_26275);
} else {
if((state_val_26278 === (4))){
var inst_26267 = (state_26277[(2)]);
var inst_26268 = process.call(null,inst_26267);
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26268)){
var statearr_26280_26427 = state_26277__$1;
(statearr_26280_26427[(1)] = (5));

} else {
var statearr_26281_26428 = state_26277__$1;
(statearr_26281_26428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (5))){
var state_26277__$1 = state_26277;
var statearr_26282_26429 = state_26277__$1;
(statearr_26282_26429[(2)] = null);

(statearr_26282_26429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (6))){
var state_26277__$1 = state_26277;
var statearr_26283_26430 = state_26277__$1;
(statearr_26283_26430[(2)] = null);

(statearr_26283_26430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (7))){
var inst_26273 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26284_26431 = state_26277__$1;
(statearr_26284_26431[(2)] = inst_26273);

(statearr_26284_26431[(1)] = (3));


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
});})(__26421,c__26081__auto___26425,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async))
;
return ((function (__26421,switch__25990__auto__,c__26081__auto___26425,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0 = (function (){
var statearr_26285 = [null,null,null,null,null,null,null];
(statearr_26285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__);

(statearr_26285[(1)] = (1));

return statearr_26285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1 = (function (state_26277){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26286){if((e26286 instanceof Object)){
var ex__25994__auto__ = e26286;
var statearr_26287_26432 = state_26277;
(statearr_26287_26432[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26433 = state_26277;
state_26277 = G__26433;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__ = function(state_26277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1.call(this,state_26277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__;
})()
;})(__26421,switch__25990__auto__,c__26081__auto___26425,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async))
})();
var state__26083__auto__ = (function (){var statearr_26288 = f__26082__auto__.call(null);
(statearr_26288[(6)] = c__26081__auto___26425);

return statearr_26288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(__26421,c__26081__auto___26425,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async))
);


break;
case "async":
var c__26081__auto___26434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26421,c__26081__auto___26434,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (__26421,c__26081__auto___26434,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async){
return (function (state_26301){
var state_val_26302 = (state_26301[(1)]);
if((state_val_26302 === (1))){
var state_26301__$1 = state_26301;
var statearr_26303_26435 = state_26301__$1;
(statearr_26303_26435[(2)] = null);

(statearr_26303_26435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (2))){
var state_26301__$1 = state_26301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26301__$1,(4),jobs);
} else {
if((state_val_26302 === (3))){
var inst_26299 = (state_26301[(2)]);
var state_26301__$1 = state_26301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26301__$1,inst_26299);
} else {
if((state_val_26302 === (4))){
var inst_26291 = (state_26301[(2)]);
var inst_26292 = async.call(null,inst_26291);
var state_26301__$1 = state_26301;
if(cljs.core.truth_(inst_26292)){
var statearr_26304_26436 = state_26301__$1;
(statearr_26304_26436[(1)] = (5));

} else {
var statearr_26305_26437 = state_26301__$1;
(statearr_26305_26437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (5))){
var state_26301__$1 = state_26301;
var statearr_26306_26438 = state_26301__$1;
(statearr_26306_26438[(2)] = null);

(statearr_26306_26438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (6))){
var state_26301__$1 = state_26301;
var statearr_26307_26439 = state_26301__$1;
(statearr_26307_26439[(2)] = null);

(statearr_26307_26439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26302 === (7))){
var inst_26297 = (state_26301[(2)]);
var state_26301__$1 = state_26301;
var statearr_26308_26440 = state_26301__$1;
(statearr_26308_26440[(2)] = inst_26297);

(statearr_26308_26440[(1)] = (3));


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
});})(__26421,c__26081__auto___26434,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async))
;
return ((function (__26421,switch__25990__auto__,c__26081__auto___26434,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0 = (function (){
var statearr_26309 = [null,null,null,null,null,null,null];
(statearr_26309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__);

(statearr_26309[(1)] = (1));

return statearr_26309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1 = (function (state_26301){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26310){if((e26310 instanceof Object)){
var ex__25994__auto__ = e26310;
var statearr_26311_26441 = state_26301;
(statearr_26311_26441[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26442 = state_26301;
state_26301 = G__26442;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__ = function(state_26301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1.call(this,state_26301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__;
})()
;})(__26421,switch__25990__auto__,c__26081__auto___26434,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async))
})();
var state__26083__auto__ = (function (){var statearr_26312 = f__26082__auto__.call(null);
(statearr_26312[(6)] = c__26081__auto___26434);

return statearr_26312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(__26421,c__26081__auto___26434,G__26264_26422,G__26264_26423__$1,n__4408__auto___26420,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26264_26423__$1)].join('')));

}

var G__26443 = (__26421 + (1));
__26421 = G__26443;
continue;
} else {
}
break;
}

var c__26081__auto___26444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___26444,jobs,results,process,async){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___26444,jobs,results,process,async){
return (function (state_26334){
var state_val_26335 = (state_26334[(1)]);
if((state_val_26335 === (1))){
var state_26334__$1 = state_26334;
var statearr_26336_26445 = state_26334__$1;
(statearr_26336_26445[(2)] = null);

(statearr_26336_26445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26335 === (2))){
var state_26334__$1 = state_26334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26334__$1,(4),from);
} else {
if((state_val_26335 === (3))){
var inst_26332 = (state_26334[(2)]);
var state_26334__$1 = state_26334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26334__$1,inst_26332);
} else {
if((state_val_26335 === (4))){
var inst_26315 = (state_26334[(7)]);
var inst_26315__$1 = (state_26334[(2)]);
var inst_26316 = (inst_26315__$1 == null);
var state_26334__$1 = (function (){var statearr_26337 = state_26334;
(statearr_26337[(7)] = inst_26315__$1);

return statearr_26337;
})();
if(cljs.core.truth_(inst_26316)){
var statearr_26338_26446 = state_26334__$1;
(statearr_26338_26446[(1)] = (5));

} else {
var statearr_26339_26447 = state_26334__$1;
(statearr_26339_26447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26335 === (5))){
var inst_26318 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26334__$1 = state_26334;
var statearr_26340_26448 = state_26334__$1;
(statearr_26340_26448[(2)] = inst_26318);

(statearr_26340_26448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26335 === (6))){
var inst_26315 = (state_26334[(7)]);
var inst_26320 = (state_26334[(8)]);
var inst_26320__$1 = cljs.core.async.chan.call(null,(1));
var inst_26321 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26322 = [inst_26315,inst_26320__$1];
var inst_26323 = (new cljs.core.PersistentVector(null,2,(5),inst_26321,inst_26322,null));
var state_26334__$1 = (function (){var statearr_26341 = state_26334;
(statearr_26341[(8)] = inst_26320__$1);

return statearr_26341;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26334__$1,(8),jobs,inst_26323);
} else {
if((state_val_26335 === (7))){
var inst_26330 = (state_26334[(2)]);
var state_26334__$1 = state_26334;
var statearr_26342_26449 = state_26334__$1;
(statearr_26342_26449[(2)] = inst_26330);

(statearr_26342_26449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26335 === (8))){
var inst_26320 = (state_26334[(8)]);
var inst_26325 = (state_26334[(2)]);
var state_26334__$1 = (function (){var statearr_26343 = state_26334;
(statearr_26343[(9)] = inst_26325);

return statearr_26343;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26334__$1,(9),results,inst_26320);
} else {
if((state_val_26335 === (9))){
var inst_26327 = (state_26334[(2)]);
var state_26334__$1 = (function (){var statearr_26344 = state_26334;
(statearr_26344[(10)] = inst_26327);

return statearr_26344;
})();
var statearr_26345_26450 = state_26334__$1;
(statearr_26345_26450[(2)] = null);

(statearr_26345_26450[(1)] = (2));


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
});})(c__26081__auto___26444,jobs,results,process,async))
;
return ((function (switch__25990__auto__,c__26081__auto___26444,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0 = (function (){
var statearr_26346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__);

(statearr_26346[(1)] = (1));

return statearr_26346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1 = (function (state_26334){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26347){if((e26347 instanceof Object)){
var ex__25994__auto__ = e26347;
var statearr_26348_26451 = state_26334;
(statearr_26348_26451[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26452 = state_26334;
state_26334 = G__26452;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__ = function(state_26334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1.call(this,state_26334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___26444,jobs,results,process,async))
})();
var state__26083__auto__ = (function (){var statearr_26349 = f__26082__auto__.call(null);
(statearr_26349[(6)] = c__26081__auto___26444);

return statearr_26349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___26444,jobs,results,process,async))
);


var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__,jobs,results,process,async){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__,jobs,results,process,async){
return (function (state_26387){
var state_val_26388 = (state_26387[(1)]);
if((state_val_26388 === (7))){
var inst_26383 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
var statearr_26389_26453 = state_26387__$1;
(statearr_26389_26453[(2)] = inst_26383);

(statearr_26389_26453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (20))){
var state_26387__$1 = state_26387;
var statearr_26390_26454 = state_26387__$1;
(statearr_26390_26454[(2)] = null);

(statearr_26390_26454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (1))){
var state_26387__$1 = state_26387;
var statearr_26391_26455 = state_26387__$1;
(statearr_26391_26455[(2)] = null);

(statearr_26391_26455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (4))){
var inst_26352 = (state_26387[(7)]);
var inst_26352__$1 = (state_26387[(2)]);
var inst_26353 = (inst_26352__$1 == null);
var state_26387__$1 = (function (){var statearr_26392 = state_26387;
(statearr_26392[(7)] = inst_26352__$1);

return statearr_26392;
})();
if(cljs.core.truth_(inst_26353)){
var statearr_26393_26456 = state_26387__$1;
(statearr_26393_26456[(1)] = (5));

} else {
var statearr_26394_26457 = state_26387__$1;
(statearr_26394_26457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (15))){
var inst_26365 = (state_26387[(8)]);
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26387__$1,(18),to,inst_26365);
} else {
if((state_val_26388 === (21))){
var inst_26378 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
var statearr_26395_26458 = state_26387__$1;
(statearr_26395_26458[(2)] = inst_26378);

(statearr_26395_26458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (13))){
var inst_26380 = (state_26387[(2)]);
var state_26387__$1 = (function (){var statearr_26396 = state_26387;
(statearr_26396[(9)] = inst_26380);

return statearr_26396;
})();
var statearr_26397_26459 = state_26387__$1;
(statearr_26397_26459[(2)] = null);

(statearr_26397_26459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (6))){
var inst_26352 = (state_26387[(7)]);
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26387__$1,(11),inst_26352);
} else {
if((state_val_26388 === (17))){
var inst_26373 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
if(cljs.core.truth_(inst_26373)){
var statearr_26398_26460 = state_26387__$1;
(statearr_26398_26460[(1)] = (19));

} else {
var statearr_26399_26461 = state_26387__$1;
(statearr_26399_26461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (3))){
var inst_26385 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26387__$1,inst_26385);
} else {
if((state_val_26388 === (12))){
var inst_26362 = (state_26387[(10)]);
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26387__$1,(14),inst_26362);
} else {
if((state_val_26388 === (2))){
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26387__$1,(4),results);
} else {
if((state_val_26388 === (19))){
var state_26387__$1 = state_26387;
var statearr_26400_26462 = state_26387__$1;
(statearr_26400_26462[(2)] = null);

(statearr_26400_26462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (11))){
var inst_26362 = (state_26387[(2)]);
var state_26387__$1 = (function (){var statearr_26401 = state_26387;
(statearr_26401[(10)] = inst_26362);

return statearr_26401;
})();
var statearr_26402_26463 = state_26387__$1;
(statearr_26402_26463[(2)] = null);

(statearr_26402_26463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (9))){
var state_26387__$1 = state_26387;
var statearr_26403_26464 = state_26387__$1;
(statearr_26403_26464[(2)] = null);

(statearr_26403_26464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (5))){
var state_26387__$1 = state_26387;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26404_26465 = state_26387__$1;
(statearr_26404_26465[(1)] = (8));

} else {
var statearr_26405_26466 = state_26387__$1;
(statearr_26405_26466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (14))){
var inst_26367 = (state_26387[(11)]);
var inst_26365 = (state_26387[(8)]);
var inst_26365__$1 = (state_26387[(2)]);
var inst_26366 = (inst_26365__$1 == null);
var inst_26367__$1 = cljs.core.not.call(null,inst_26366);
var state_26387__$1 = (function (){var statearr_26406 = state_26387;
(statearr_26406[(11)] = inst_26367__$1);

(statearr_26406[(8)] = inst_26365__$1);

return statearr_26406;
})();
if(inst_26367__$1){
var statearr_26407_26467 = state_26387__$1;
(statearr_26407_26467[(1)] = (15));

} else {
var statearr_26408_26468 = state_26387__$1;
(statearr_26408_26468[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (16))){
var inst_26367 = (state_26387[(11)]);
var state_26387__$1 = state_26387;
var statearr_26409_26469 = state_26387__$1;
(statearr_26409_26469[(2)] = inst_26367);

(statearr_26409_26469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (10))){
var inst_26359 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
var statearr_26410_26470 = state_26387__$1;
(statearr_26410_26470[(2)] = inst_26359);

(statearr_26410_26470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (18))){
var inst_26370 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
var statearr_26411_26471 = state_26387__$1;
(statearr_26411_26471[(2)] = inst_26370);

(statearr_26411_26471[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26388 === (8))){
var inst_26356 = cljs.core.async.close_BANG_.call(null,to);
var state_26387__$1 = state_26387;
var statearr_26412_26472 = state_26387__$1;
(statearr_26412_26472[(2)] = inst_26356);

(statearr_26412_26472[(1)] = (10));


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
});})(c__26081__auto__,jobs,results,process,async))
;
return ((function (switch__25990__auto__,c__26081__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0 = (function (){
var statearr_26413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__);

(statearr_26413[(1)] = (1));

return statearr_26413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1 = (function (state_26387){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26414){if((e26414 instanceof Object)){
var ex__25994__auto__ = e26414;
var statearr_26415_26473 = state_26387;
(statearr_26415_26473[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26474 = state_26387;
state_26387 = G__26474;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__ = function(state_26387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1.call(this,state_26387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__,jobs,results,process,async))
})();
var state__26083__auto__ = (function (){var statearr_26416 = f__26082__auto__.call(null);
(statearr_26416[(6)] = c__26081__auto__);

return statearr_26416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__,jobs,results,process,async))
);

return c__26081__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26476 = arguments.length;
switch (G__26476) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26479 = arguments.length;
switch (G__26479) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26482 = arguments.length;
switch (G__26482) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26081__auto___26531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___26531,tc,fc){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___26531,tc,fc){
return (function (state_26508){
var state_val_26509 = (state_26508[(1)]);
if((state_val_26509 === (7))){
var inst_26504 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26510_26532 = state_26508__$1;
(statearr_26510_26532[(2)] = inst_26504);

(statearr_26510_26532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (1))){
var state_26508__$1 = state_26508;
var statearr_26511_26533 = state_26508__$1;
(statearr_26511_26533[(2)] = null);

(statearr_26511_26533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (4))){
var inst_26485 = (state_26508[(7)]);
var inst_26485__$1 = (state_26508[(2)]);
var inst_26486 = (inst_26485__$1 == null);
var state_26508__$1 = (function (){var statearr_26512 = state_26508;
(statearr_26512[(7)] = inst_26485__$1);

return statearr_26512;
})();
if(cljs.core.truth_(inst_26486)){
var statearr_26513_26534 = state_26508__$1;
(statearr_26513_26534[(1)] = (5));

} else {
var statearr_26514_26535 = state_26508__$1;
(statearr_26514_26535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (13))){
var state_26508__$1 = state_26508;
var statearr_26515_26536 = state_26508__$1;
(statearr_26515_26536[(2)] = null);

(statearr_26515_26536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (6))){
var inst_26485 = (state_26508[(7)]);
var inst_26491 = p.call(null,inst_26485);
var state_26508__$1 = state_26508;
if(cljs.core.truth_(inst_26491)){
var statearr_26516_26537 = state_26508__$1;
(statearr_26516_26537[(1)] = (9));

} else {
var statearr_26517_26538 = state_26508__$1;
(statearr_26517_26538[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (3))){
var inst_26506 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26508__$1,inst_26506);
} else {
if((state_val_26509 === (12))){
var state_26508__$1 = state_26508;
var statearr_26518_26539 = state_26508__$1;
(statearr_26518_26539[(2)] = null);

(statearr_26518_26539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (2))){
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(4),ch);
} else {
if((state_val_26509 === (11))){
var inst_26485 = (state_26508[(7)]);
var inst_26495 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26508__$1,(8),inst_26495,inst_26485);
} else {
if((state_val_26509 === (9))){
var state_26508__$1 = state_26508;
var statearr_26519_26540 = state_26508__$1;
(statearr_26519_26540[(2)] = tc);

(statearr_26519_26540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (5))){
var inst_26488 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26489 = cljs.core.async.close_BANG_.call(null,fc);
var state_26508__$1 = (function (){var statearr_26520 = state_26508;
(statearr_26520[(8)] = inst_26488);

return statearr_26520;
})();
var statearr_26521_26541 = state_26508__$1;
(statearr_26521_26541[(2)] = inst_26489);

(statearr_26521_26541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (14))){
var inst_26502 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26522_26542 = state_26508__$1;
(statearr_26522_26542[(2)] = inst_26502);

(statearr_26522_26542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (10))){
var state_26508__$1 = state_26508;
var statearr_26523_26543 = state_26508__$1;
(statearr_26523_26543[(2)] = fc);

(statearr_26523_26543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (8))){
var inst_26497 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
if(cljs.core.truth_(inst_26497)){
var statearr_26524_26544 = state_26508__$1;
(statearr_26524_26544[(1)] = (12));

} else {
var statearr_26525_26545 = state_26508__$1;
(statearr_26525_26545[(1)] = (13));

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
});})(c__26081__auto___26531,tc,fc))
;
return ((function (switch__25990__auto__,c__26081__auto___26531,tc,fc){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_26526 = [null,null,null,null,null,null,null,null,null];
(statearr_26526[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_26526[(1)] = (1));

return statearr_26526;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_26508){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26527){if((e26527 instanceof Object)){
var ex__25994__auto__ = e26527;
var statearr_26528_26546 = state_26508;
(statearr_26528_26546[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26547 = state_26508;
state_26508 = G__26547;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_26508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_26508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___26531,tc,fc))
})();
var state__26083__auto__ = (function (){var statearr_26529 = f__26082__auto__.call(null);
(statearr_26529[(6)] = c__26081__auto___26531);

return statearr_26529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___26531,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__){
return (function (state_26568){
var state_val_26569 = (state_26568[(1)]);
if((state_val_26569 === (7))){
var inst_26564 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
var statearr_26570_26588 = state_26568__$1;
(statearr_26570_26588[(2)] = inst_26564);

(statearr_26570_26588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (1))){
var inst_26548 = init;
var state_26568__$1 = (function (){var statearr_26571 = state_26568;
(statearr_26571[(7)] = inst_26548);

return statearr_26571;
})();
var statearr_26572_26589 = state_26568__$1;
(statearr_26572_26589[(2)] = null);

(statearr_26572_26589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (4))){
var inst_26551 = (state_26568[(8)]);
var inst_26551__$1 = (state_26568[(2)]);
var inst_26552 = (inst_26551__$1 == null);
var state_26568__$1 = (function (){var statearr_26573 = state_26568;
(statearr_26573[(8)] = inst_26551__$1);

return statearr_26573;
})();
if(cljs.core.truth_(inst_26552)){
var statearr_26574_26590 = state_26568__$1;
(statearr_26574_26590[(1)] = (5));

} else {
var statearr_26575_26591 = state_26568__$1;
(statearr_26575_26591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (6))){
var inst_26551 = (state_26568[(8)]);
var inst_26555 = (state_26568[(9)]);
var inst_26548 = (state_26568[(7)]);
var inst_26555__$1 = f.call(null,inst_26548,inst_26551);
var inst_26556 = cljs.core.reduced_QMARK_.call(null,inst_26555__$1);
var state_26568__$1 = (function (){var statearr_26576 = state_26568;
(statearr_26576[(9)] = inst_26555__$1);

return statearr_26576;
})();
if(inst_26556){
var statearr_26577_26592 = state_26568__$1;
(statearr_26577_26592[(1)] = (8));

} else {
var statearr_26578_26593 = state_26568__$1;
(statearr_26578_26593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (3))){
var inst_26566 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26568__$1,inst_26566);
} else {
if((state_val_26569 === (2))){
var state_26568__$1 = state_26568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26568__$1,(4),ch);
} else {
if((state_val_26569 === (9))){
var inst_26555 = (state_26568[(9)]);
var inst_26548 = inst_26555;
var state_26568__$1 = (function (){var statearr_26579 = state_26568;
(statearr_26579[(7)] = inst_26548);

return statearr_26579;
})();
var statearr_26580_26594 = state_26568__$1;
(statearr_26580_26594[(2)] = null);

(statearr_26580_26594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (5))){
var inst_26548 = (state_26568[(7)]);
var state_26568__$1 = state_26568;
var statearr_26581_26595 = state_26568__$1;
(statearr_26581_26595[(2)] = inst_26548);

(statearr_26581_26595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (10))){
var inst_26562 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
var statearr_26582_26596 = state_26568__$1;
(statearr_26582_26596[(2)] = inst_26562);

(statearr_26582_26596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26569 === (8))){
var inst_26555 = (state_26568[(9)]);
var inst_26558 = cljs.core.deref.call(null,inst_26555);
var state_26568__$1 = state_26568;
var statearr_26583_26597 = state_26568__$1;
(statearr_26583_26597[(2)] = inst_26558);

(statearr_26583_26597[(1)] = (10));


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
});})(c__26081__auto__))
;
return ((function (switch__25990__auto__,c__26081__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25991__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25991__auto____0 = (function (){
var statearr_26584 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26584[(0)] = cljs$core$async$reduce_$_state_machine__25991__auto__);

(statearr_26584[(1)] = (1));

return statearr_26584;
});
var cljs$core$async$reduce_$_state_machine__25991__auto____1 = (function (state_26568){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26585){if((e26585 instanceof Object)){
var ex__25994__auto__ = e26585;
var statearr_26586_26598 = state_26568;
(statearr_26586_26598[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26599 = state_26568;
state_26568 = G__26599;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25991__auto__ = function(state_26568){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25991__auto____1.call(this,state_26568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25991__auto____0;
cljs$core$async$reduce_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25991__auto____1;
return cljs$core$async$reduce_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__))
})();
var state__26083__auto__ = (function (){var statearr_26587 = f__26082__auto__.call(null);
(statearr_26587[(6)] = c__26081__auto__);

return statearr_26587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__))
);

return c__26081__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__,f__$1){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__,f__$1){
return (function (state_26605){
var state_val_26606 = (state_26605[(1)]);
if((state_val_26606 === (1))){
var inst_26600 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(2),inst_26600);
} else {
if((state_val_26606 === (2))){
var inst_26602 = (state_26605[(2)]);
var inst_26603 = f__$1.call(null,inst_26602);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26605__$1,inst_26603);
} else {
return null;
}
}
});})(c__26081__auto__,f__$1))
;
return ((function (switch__25990__auto__,c__26081__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25991__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25991__auto____0 = (function (){
var statearr_26607 = [null,null,null,null,null,null,null];
(statearr_26607[(0)] = cljs$core$async$transduce_$_state_machine__25991__auto__);

(statearr_26607[(1)] = (1));

return statearr_26607;
});
var cljs$core$async$transduce_$_state_machine__25991__auto____1 = (function (state_26605){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26608){if((e26608 instanceof Object)){
var ex__25994__auto__ = e26608;
var statearr_26609_26611 = state_26605;
(statearr_26609_26611[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26612 = state_26605;
state_26605 = G__26612;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25991__auto__ = function(state_26605){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25991__auto____1.call(this,state_26605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25991__auto____0;
cljs$core$async$transduce_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25991__auto____1;
return cljs$core$async$transduce_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__,f__$1))
})();
var state__26083__auto__ = (function (){var statearr_26610 = f__26082__auto__.call(null);
(statearr_26610[(6)] = c__26081__auto__);

return statearr_26610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__,f__$1))
);

return c__26081__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26614 = arguments.length;
switch (G__26614) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__){
return (function (state_26639){
var state_val_26640 = (state_26639[(1)]);
if((state_val_26640 === (7))){
var inst_26621 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26641_26662 = state_26639__$1;
(statearr_26641_26662[(2)] = inst_26621);

(statearr_26641_26662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (1))){
var inst_26615 = cljs.core.seq.call(null,coll);
var inst_26616 = inst_26615;
var state_26639__$1 = (function (){var statearr_26642 = state_26639;
(statearr_26642[(7)] = inst_26616);

return statearr_26642;
})();
var statearr_26643_26663 = state_26639__$1;
(statearr_26643_26663[(2)] = null);

(statearr_26643_26663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (4))){
var inst_26616 = (state_26639[(7)]);
var inst_26619 = cljs.core.first.call(null,inst_26616);
var state_26639__$1 = state_26639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26639__$1,(7),ch,inst_26619);
} else {
if((state_val_26640 === (13))){
var inst_26633 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26644_26664 = state_26639__$1;
(statearr_26644_26664[(2)] = inst_26633);

(statearr_26644_26664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (6))){
var inst_26624 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
if(cljs.core.truth_(inst_26624)){
var statearr_26645_26665 = state_26639__$1;
(statearr_26645_26665[(1)] = (8));

} else {
var statearr_26646_26666 = state_26639__$1;
(statearr_26646_26666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (3))){
var inst_26637 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26639__$1,inst_26637);
} else {
if((state_val_26640 === (12))){
var state_26639__$1 = state_26639;
var statearr_26647_26667 = state_26639__$1;
(statearr_26647_26667[(2)] = null);

(statearr_26647_26667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (2))){
var inst_26616 = (state_26639[(7)]);
var state_26639__$1 = state_26639;
if(cljs.core.truth_(inst_26616)){
var statearr_26648_26668 = state_26639__$1;
(statearr_26648_26668[(1)] = (4));

} else {
var statearr_26649_26669 = state_26639__$1;
(statearr_26649_26669[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (11))){
var inst_26630 = cljs.core.async.close_BANG_.call(null,ch);
var state_26639__$1 = state_26639;
var statearr_26650_26670 = state_26639__$1;
(statearr_26650_26670[(2)] = inst_26630);

(statearr_26650_26670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (9))){
var state_26639__$1 = state_26639;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26651_26671 = state_26639__$1;
(statearr_26651_26671[(1)] = (11));

} else {
var statearr_26652_26672 = state_26639__$1;
(statearr_26652_26672[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (5))){
var inst_26616 = (state_26639[(7)]);
var state_26639__$1 = state_26639;
var statearr_26653_26673 = state_26639__$1;
(statearr_26653_26673[(2)] = inst_26616);

(statearr_26653_26673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (10))){
var inst_26635 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26654_26674 = state_26639__$1;
(statearr_26654_26674[(2)] = inst_26635);

(statearr_26654_26674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (8))){
var inst_26616 = (state_26639[(7)]);
var inst_26626 = cljs.core.next.call(null,inst_26616);
var inst_26616__$1 = inst_26626;
var state_26639__$1 = (function (){var statearr_26655 = state_26639;
(statearr_26655[(7)] = inst_26616__$1);

return statearr_26655;
})();
var statearr_26656_26675 = state_26639__$1;
(statearr_26656_26675[(2)] = null);

(statearr_26656_26675[(1)] = (2));


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
});})(c__26081__auto__))
;
return ((function (switch__25990__auto__,c__26081__auto__){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_26657 = [null,null,null,null,null,null,null,null];
(statearr_26657[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_26657[(1)] = (1));

return statearr_26657;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_26639){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26658){if((e26658 instanceof Object)){
var ex__25994__auto__ = e26658;
var statearr_26659_26676 = state_26639;
(statearr_26659_26676[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26677 = state_26639;
state_26639 = G__26677;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_26639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_26639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__))
})();
var state__26083__auto__ = (function (){var statearr_26660 = f__26082__auto__.call(null);
(statearr_26660[(6)] = c__26081__auto__);

return statearr_26660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__))
);

return c__26081__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26678 = (function (ch,cs,meta26679){
this.ch = ch;
this.cs = cs;
this.meta26679 = meta26679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26680,meta26679__$1){
var self__ = this;
var _26680__$1 = this;
return (new cljs.core.async.t_cljs$core$async26678(self__.ch,self__.cs,meta26679__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26680){
var self__ = this;
var _26680__$1 = this;
return self__.meta26679;
});})(cs))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26678.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26679","meta26679",1886072577,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26678";

cljs.core.async.t_cljs$core$async26678.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26678");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26678.
 */
cljs.core.async.__GT_t_cljs$core$async26678 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26678(ch__$1,cs__$1,meta26679){
return (new cljs.core.async.t_cljs$core$async26678(ch__$1,cs__$1,meta26679));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26678(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26081__auto___26900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___26900,cs,m,dchan,dctr,done){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___26900,cs,m,dchan,dctr,done){
return (function (state_26815){
var state_val_26816 = (state_26815[(1)]);
if((state_val_26816 === (7))){
var inst_26811 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26817_26901 = state_26815__$1;
(statearr_26817_26901[(2)] = inst_26811);

(statearr_26817_26901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (20))){
var inst_26714 = (state_26815[(7)]);
var inst_26726 = cljs.core.first.call(null,inst_26714);
var inst_26727 = cljs.core.nth.call(null,inst_26726,(0),null);
var inst_26728 = cljs.core.nth.call(null,inst_26726,(1),null);
var state_26815__$1 = (function (){var statearr_26818 = state_26815;
(statearr_26818[(8)] = inst_26727);

return statearr_26818;
})();
if(cljs.core.truth_(inst_26728)){
var statearr_26819_26902 = state_26815__$1;
(statearr_26819_26902[(1)] = (22));

} else {
var statearr_26820_26903 = state_26815__$1;
(statearr_26820_26903[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (27))){
var inst_26683 = (state_26815[(9)]);
var inst_26763 = (state_26815[(10)]);
var inst_26756 = (state_26815[(11)]);
var inst_26758 = (state_26815[(12)]);
var inst_26763__$1 = cljs.core._nth.call(null,inst_26756,inst_26758);
var inst_26764 = cljs.core.async.put_BANG_.call(null,inst_26763__$1,inst_26683,done);
var state_26815__$1 = (function (){var statearr_26821 = state_26815;
(statearr_26821[(10)] = inst_26763__$1);

return statearr_26821;
})();
if(cljs.core.truth_(inst_26764)){
var statearr_26822_26904 = state_26815__$1;
(statearr_26822_26904[(1)] = (30));

} else {
var statearr_26823_26905 = state_26815__$1;
(statearr_26823_26905[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (1))){
var state_26815__$1 = state_26815;
var statearr_26824_26906 = state_26815__$1;
(statearr_26824_26906[(2)] = null);

(statearr_26824_26906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (24))){
var inst_26714 = (state_26815[(7)]);
var inst_26733 = (state_26815[(2)]);
var inst_26734 = cljs.core.next.call(null,inst_26714);
var inst_26692 = inst_26734;
var inst_26693 = null;
var inst_26694 = (0);
var inst_26695 = (0);
var state_26815__$1 = (function (){var statearr_26825 = state_26815;
(statearr_26825[(13)] = inst_26693);

(statearr_26825[(14)] = inst_26692);

(statearr_26825[(15)] = inst_26695);

(statearr_26825[(16)] = inst_26733);

(statearr_26825[(17)] = inst_26694);

return statearr_26825;
})();
var statearr_26826_26907 = state_26815__$1;
(statearr_26826_26907[(2)] = null);

(statearr_26826_26907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (39))){
var state_26815__$1 = state_26815;
var statearr_26830_26908 = state_26815__$1;
(statearr_26830_26908[(2)] = null);

(statearr_26830_26908[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (4))){
var inst_26683 = (state_26815[(9)]);
var inst_26683__$1 = (state_26815[(2)]);
var inst_26684 = (inst_26683__$1 == null);
var state_26815__$1 = (function (){var statearr_26831 = state_26815;
(statearr_26831[(9)] = inst_26683__$1);

return statearr_26831;
})();
if(cljs.core.truth_(inst_26684)){
var statearr_26832_26909 = state_26815__$1;
(statearr_26832_26909[(1)] = (5));

} else {
var statearr_26833_26910 = state_26815__$1;
(statearr_26833_26910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (15))){
var inst_26693 = (state_26815[(13)]);
var inst_26692 = (state_26815[(14)]);
var inst_26695 = (state_26815[(15)]);
var inst_26694 = (state_26815[(17)]);
var inst_26710 = (state_26815[(2)]);
var inst_26711 = (inst_26695 + (1));
var tmp26827 = inst_26693;
var tmp26828 = inst_26692;
var tmp26829 = inst_26694;
var inst_26692__$1 = tmp26828;
var inst_26693__$1 = tmp26827;
var inst_26694__$1 = tmp26829;
var inst_26695__$1 = inst_26711;
var state_26815__$1 = (function (){var statearr_26834 = state_26815;
(statearr_26834[(13)] = inst_26693__$1);

(statearr_26834[(14)] = inst_26692__$1);

(statearr_26834[(18)] = inst_26710);

(statearr_26834[(15)] = inst_26695__$1);

(statearr_26834[(17)] = inst_26694__$1);

return statearr_26834;
})();
var statearr_26835_26911 = state_26815__$1;
(statearr_26835_26911[(2)] = null);

(statearr_26835_26911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (21))){
var inst_26737 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26839_26912 = state_26815__$1;
(statearr_26839_26912[(2)] = inst_26737);

(statearr_26839_26912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (31))){
var inst_26763 = (state_26815[(10)]);
var inst_26767 = done.call(null,null);
var inst_26768 = cljs.core.async.untap_STAR_.call(null,m,inst_26763);
var state_26815__$1 = (function (){var statearr_26840 = state_26815;
(statearr_26840[(19)] = inst_26767);

return statearr_26840;
})();
var statearr_26841_26913 = state_26815__$1;
(statearr_26841_26913[(2)] = inst_26768);

(statearr_26841_26913[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (32))){
var inst_26755 = (state_26815[(20)]);
var inst_26756 = (state_26815[(11)]);
var inst_26757 = (state_26815[(21)]);
var inst_26758 = (state_26815[(12)]);
var inst_26770 = (state_26815[(2)]);
var inst_26771 = (inst_26758 + (1));
var tmp26836 = inst_26755;
var tmp26837 = inst_26756;
var tmp26838 = inst_26757;
var inst_26755__$1 = tmp26836;
var inst_26756__$1 = tmp26837;
var inst_26757__$1 = tmp26838;
var inst_26758__$1 = inst_26771;
var state_26815__$1 = (function (){var statearr_26842 = state_26815;
(statearr_26842[(22)] = inst_26770);

(statearr_26842[(20)] = inst_26755__$1);

(statearr_26842[(11)] = inst_26756__$1);

(statearr_26842[(21)] = inst_26757__$1);

(statearr_26842[(12)] = inst_26758__$1);

return statearr_26842;
})();
var statearr_26843_26914 = state_26815__$1;
(statearr_26843_26914[(2)] = null);

(statearr_26843_26914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (40))){
var inst_26783 = (state_26815[(23)]);
var inst_26787 = done.call(null,null);
var inst_26788 = cljs.core.async.untap_STAR_.call(null,m,inst_26783);
var state_26815__$1 = (function (){var statearr_26844 = state_26815;
(statearr_26844[(24)] = inst_26787);

return statearr_26844;
})();
var statearr_26845_26915 = state_26815__$1;
(statearr_26845_26915[(2)] = inst_26788);

(statearr_26845_26915[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (33))){
var inst_26774 = (state_26815[(25)]);
var inst_26776 = cljs.core.chunked_seq_QMARK_.call(null,inst_26774);
var state_26815__$1 = state_26815;
if(inst_26776){
var statearr_26846_26916 = state_26815__$1;
(statearr_26846_26916[(1)] = (36));

} else {
var statearr_26847_26917 = state_26815__$1;
(statearr_26847_26917[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (13))){
var inst_26704 = (state_26815[(26)]);
var inst_26707 = cljs.core.async.close_BANG_.call(null,inst_26704);
var state_26815__$1 = state_26815;
var statearr_26848_26918 = state_26815__$1;
(statearr_26848_26918[(2)] = inst_26707);

(statearr_26848_26918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (22))){
var inst_26727 = (state_26815[(8)]);
var inst_26730 = cljs.core.async.close_BANG_.call(null,inst_26727);
var state_26815__$1 = state_26815;
var statearr_26849_26919 = state_26815__$1;
(statearr_26849_26919[(2)] = inst_26730);

(statearr_26849_26919[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (36))){
var inst_26774 = (state_26815[(25)]);
var inst_26778 = cljs.core.chunk_first.call(null,inst_26774);
var inst_26779 = cljs.core.chunk_rest.call(null,inst_26774);
var inst_26780 = cljs.core.count.call(null,inst_26778);
var inst_26755 = inst_26779;
var inst_26756 = inst_26778;
var inst_26757 = inst_26780;
var inst_26758 = (0);
var state_26815__$1 = (function (){var statearr_26850 = state_26815;
(statearr_26850[(20)] = inst_26755);

(statearr_26850[(11)] = inst_26756);

(statearr_26850[(21)] = inst_26757);

(statearr_26850[(12)] = inst_26758);

return statearr_26850;
})();
var statearr_26851_26920 = state_26815__$1;
(statearr_26851_26920[(2)] = null);

(statearr_26851_26920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (41))){
var inst_26774 = (state_26815[(25)]);
var inst_26790 = (state_26815[(2)]);
var inst_26791 = cljs.core.next.call(null,inst_26774);
var inst_26755 = inst_26791;
var inst_26756 = null;
var inst_26757 = (0);
var inst_26758 = (0);
var state_26815__$1 = (function (){var statearr_26852 = state_26815;
(statearr_26852[(20)] = inst_26755);

(statearr_26852[(27)] = inst_26790);

(statearr_26852[(11)] = inst_26756);

(statearr_26852[(21)] = inst_26757);

(statearr_26852[(12)] = inst_26758);

return statearr_26852;
})();
var statearr_26853_26921 = state_26815__$1;
(statearr_26853_26921[(2)] = null);

(statearr_26853_26921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (43))){
var state_26815__$1 = state_26815;
var statearr_26854_26922 = state_26815__$1;
(statearr_26854_26922[(2)] = null);

(statearr_26854_26922[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (29))){
var inst_26799 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26855_26923 = state_26815__$1;
(statearr_26855_26923[(2)] = inst_26799);

(statearr_26855_26923[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (44))){
var inst_26808 = (state_26815[(2)]);
var state_26815__$1 = (function (){var statearr_26856 = state_26815;
(statearr_26856[(28)] = inst_26808);

return statearr_26856;
})();
var statearr_26857_26924 = state_26815__$1;
(statearr_26857_26924[(2)] = null);

(statearr_26857_26924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (6))){
var inst_26747 = (state_26815[(29)]);
var inst_26746 = cljs.core.deref.call(null,cs);
var inst_26747__$1 = cljs.core.keys.call(null,inst_26746);
var inst_26748 = cljs.core.count.call(null,inst_26747__$1);
var inst_26749 = cljs.core.reset_BANG_.call(null,dctr,inst_26748);
var inst_26754 = cljs.core.seq.call(null,inst_26747__$1);
var inst_26755 = inst_26754;
var inst_26756 = null;
var inst_26757 = (0);
var inst_26758 = (0);
var state_26815__$1 = (function (){var statearr_26858 = state_26815;
(statearr_26858[(20)] = inst_26755);

(statearr_26858[(29)] = inst_26747__$1);

(statearr_26858[(30)] = inst_26749);

(statearr_26858[(11)] = inst_26756);

(statearr_26858[(21)] = inst_26757);

(statearr_26858[(12)] = inst_26758);

return statearr_26858;
})();
var statearr_26859_26925 = state_26815__$1;
(statearr_26859_26925[(2)] = null);

(statearr_26859_26925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (28))){
var inst_26755 = (state_26815[(20)]);
var inst_26774 = (state_26815[(25)]);
var inst_26774__$1 = cljs.core.seq.call(null,inst_26755);
var state_26815__$1 = (function (){var statearr_26860 = state_26815;
(statearr_26860[(25)] = inst_26774__$1);

return statearr_26860;
})();
if(inst_26774__$1){
var statearr_26861_26926 = state_26815__$1;
(statearr_26861_26926[(1)] = (33));

} else {
var statearr_26862_26927 = state_26815__$1;
(statearr_26862_26927[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (25))){
var inst_26757 = (state_26815[(21)]);
var inst_26758 = (state_26815[(12)]);
var inst_26760 = (inst_26758 < inst_26757);
var inst_26761 = inst_26760;
var state_26815__$1 = state_26815;
if(cljs.core.truth_(inst_26761)){
var statearr_26863_26928 = state_26815__$1;
(statearr_26863_26928[(1)] = (27));

} else {
var statearr_26864_26929 = state_26815__$1;
(statearr_26864_26929[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (34))){
var state_26815__$1 = state_26815;
var statearr_26865_26930 = state_26815__$1;
(statearr_26865_26930[(2)] = null);

(statearr_26865_26930[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (17))){
var state_26815__$1 = state_26815;
var statearr_26866_26931 = state_26815__$1;
(statearr_26866_26931[(2)] = null);

(statearr_26866_26931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (3))){
var inst_26813 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26815__$1,inst_26813);
} else {
if((state_val_26816 === (12))){
var inst_26742 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26867_26932 = state_26815__$1;
(statearr_26867_26932[(2)] = inst_26742);

(statearr_26867_26932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (2))){
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26815__$1,(4),ch);
} else {
if((state_val_26816 === (23))){
var state_26815__$1 = state_26815;
var statearr_26868_26933 = state_26815__$1;
(statearr_26868_26933[(2)] = null);

(statearr_26868_26933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (35))){
var inst_26797 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26869_26934 = state_26815__$1;
(statearr_26869_26934[(2)] = inst_26797);

(statearr_26869_26934[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (19))){
var inst_26714 = (state_26815[(7)]);
var inst_26718 = cljs.core.chunk_first.call(null,inst_26714);
var inst_26719 = cljs.core.chunk_rest.call(null,inst_26714);
var inst_26720 = cljs.core.count.call(null,inst_26718);
var inst_26692 = inst_26719;
var inst_26693 = inst_26718;
var inst_26694 = inst_26720;
var inst_26695 = (0);
var state_26815__$1 = (function (){var statearr_26870 = state_26815;
(statearr_26870[(13)] = inst_26693);

(statearr_26870[(14)] = inst_26692);

(statearr_26870[(15)] = inst_26695);

(statearr_26870[(17)] = inst_26694);

return statearr_26870;
})();
var statearr_26871_26935 = state_26815__$1;
(statearr_26871_26935[(2)] = null);

(statearr_26871_26935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (11))){
var inst_26714 = (state_26815[(7)]);
var inst_26692 = (state_26815[(14)]);
var inst_26714__$1 = cljs.core.seq.call(null,inst_26692);
var state_26815__$1 = (function (){var statearr_26872 = state_26815;
(statearr_26872[(7)] = inst_26714__$1);

return statearr_26872;
})();
if(inst_26714__$1){
var statearr_26873_26936 = state_26815__$1;
(statearr_26873_26936[(1)] = (16));

} else {
var statearr_26874_26937 = state_26815__$1;
(statearr_26874_26937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (9))){
var inst_26744 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26875_26938 = state_26815__$1;
(statearr_26875_26938[(2)] = inst_26744);

(statearr_26875_26938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (5))){
var inst_26690 = cljs.core.deref.call(null,cs);
var inst_26691 = cljs.core.seq.call(null,inst_26690);
var inst_26692 = inst_26691;
var inst_26693 = null;
var inst_26694 = (0);
var inst_26695 = (0);
var state_26815__$1 = (function (){var statearr_26876 = state_26815;
(statearr_26876[(13)] = inst_26693);

(statearr_26876[(14)] = inst_26692);

(statearr_26876[(15)] = inst_26695);

(statearr_26876[(17)] = inst_26694);

return statearr_26876;
})();
var statearr_26877_26939 = state_26815__$1;
(statearr_26877_26939[(2)] = null);

(statearr_26877_26939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (14))){
var state_26815__$1 = state_26815;
var statearr_26878_26940 = state_26815__$1;
(statearr_26878_26940[(2)] = null);

(statearr_26878_26940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (45))){
var inst_26805 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26879_26941 = state_26815__$1;
(statearr_26879_26941[(2)] = inst_26805);

(statearr_26879_26941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (26))){
var inst_26747 = (state_26815[(29)]);
var inst_26801 = (state_26815[(2)]);
var inst_26802 = cljs.core.seq.call(null,inst_26747);
var state_26815__$1 = (function (){var statearr_26880 = state_26815;
(statearr_26880[(31)] = inst_26801);

return statearr_26880;
})();
if(inst_26802){
var statearr_26881_26942 = state_26815__$1;
(statearr_26881_26942[(1)] = (42));

} else {
var statearr_26882_26943 = state_26815__$1;
(statearr_26882_26943[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (16))){
var inst_26714 = (state_26815[(7)]);
var inst_26716 = cljs.core.chunked_seq_QMARK_.call(null,inst_26714);
var state_26815__$1 = state_26815;
if(inst_26716){
var statearr_26883_26944 = state_26815__$1;
(statearr_26883_26944[(1)] = (19));

} else {
var statearr_26884_26945 = state_26815__$1;
(statearr_26884_26945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (38))){
var inst_26794 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26885_26946 = state_26815__$1;
(statearr_26885_26946[(2)] = inst_26794);

(statearr_26885_26946[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (30))){
var state_26815__$1 = state_26815;
var statearr_26886_26947 = state_26815__$1;
(statearr_26886_26947[(2)] = null);

(statearr_26886_26947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (10))){
var inst_26693 = (state_26815[(13)]);
var inst_26695 = (state_26815[(15)]);
var inst_26703 = cljs.core._nth.call(null,inst_26693,inst_26695);
var inst_26704 = cljs.core.nth.call(null,inst_26703,(0),null);
var inst_26705 = cljs.core.nth.call(null,inst_26703,(1),null);
var state_26815__$1 = (function (){var statearr_26887 = state_26815;
(statearr_26887[(26)] = inst_26704);

return statearr_26887;
})();
if(cljs.core.truth_(inst_26705)){
var statearr_26888_26948 = state_26815__$1;
(statearr_26888_26948[(1)] = (13));

} else {
var statearr_26889_26949 = state_26815__$1;
(statearr_26889_26949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (18))){
var inst_26740 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26890_26950 = state_26815__$1;
(statearr_26890_26950[(2)] = inst_26740);

(statearr_26890_26950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (42))){
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26815__$1,(45),dchan);
} else {
if((state_val_26816 === (37))){
var inst_26783 = (state_26815[(23)]);
var inst_26683 = (state_26815[(9)]);
var inst_26774 = (state_26815[(25)]);
var inst_26783__$1 = cljs.core.first.call(null,inst_26774);
var inst_26784 = cljs.core.async.put_BANG_.call(null,inst_26783__$1,inst_26683,done);
var state_26815__$1 = (function (){var statearr_26891 = state_26815;
(statearr_26891[(23)] = inst_26783__$1);

return statearr_26891;
})();
if(cljs.core.truth_(inst_26784)){
var statearr_26892_26951 = state_26815__$1;
(statearr_26892_26951[(1)] = (39));

} else {
var statearr_26893_26952 = state_26815__$1;
(statearr_26893_26952[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (8))){
var inst_26695 = (state_26815[(15)]);
var inst_26694 = (state_26815[(17)]);
var inst_26697 = (inst_26695 < inst_26694);
var inst_26698 = inst_26697;
var state_26815__$1 = state_26815;
if(cljs.core.truth_(inst_26698)){
var statearr_26894_26953 = state_26815__$1;
(statearr_26894_26953[(1)] = (10));

} else {
var statearr_26895_26954 = state_26815__$1;
(statearr_26895_26954[(1)] = (11));

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
});})(c__26081__auto___26900,cs,m,dchan,dctr,done))
;
return ((function (switch__25990__auto__,c__26081__auto___26900,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25991__auto__ = null;
var cljs$core$async$mult_$_state_machine__25991__auto____0 = (function (){
var statearr_26896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26896[(0)] = cljs$core$async$mult_$_state_machine__25991__auto__);

(statearr_26896[(1)] = (1));

return statearr_26896;
});
var cljs$core$async$mult_$_state_machine__25991__auto____1 = (function (state_26815){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_26815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e26897){if((e26897 instanceof Object)){
var ex__25994__auto__ = e26897;
var statearr_26898_26955 = state_26815;
(statearr_26898_26955[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26956 = state_26815;
state_26815 = G__26956;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25991__auto__ = function(state_26815){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25991__auto____1.call(this,state_26815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25991__auto____0;
cljs$core$async$mult_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25991__auto____1;
return cljs$core$async$mult_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___26900,cs,m,dchan,dctr,done))
})();
var state__26083__auto__ = (function (){var statearr_26899 = f__26082__auto__.call(null);
(statearr_26899[(6)] = c__26081__auto___26900);

return statearr_26899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___26900,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26958 = arguments.length;
switch (G__26958) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26970 = arguments.length;
var i__4532__auto___26971 = (0);
while(true){
if((i__4532__auto___26971 < len__4531__auto___26970)){
args__4534__auto__.push((arguments[i__4532__auto___26971]));

var G__26972 = (i__4532__auto___26971 + (1));
i__4532__auto___26971 = G__26972;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26964){
var map__26965 = p__26964;
var map__26965__$1 = ((((!((map__26965 == null)))?(((((map__26965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26965):map__26965);
var opts = map__26965__$1;
var statearr_26967_26973 = state;
(statearr_26967_26973[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__26965,map__26965__$1,opts){
return (function (val){
var statearr_26968_26974 = state;
(statearr_26968_26974[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26965,map__26965__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_26969_26975 = state;
(statearr_26969_26975[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26960){
var G__26961 = cljs.core.first.call(null,seq26960);
var seq26960__$1 = cljs.core.next.call(null,seq26960);
var G__26962 = cljs.core.first.call(null,seq26960__$1);
var seq26960__$2 = cljs.core.next.call(null,seq26960__$1);
var G__26963 = cljs.core.first.call(null,seq26960__$2);
var seq26960__$3 = cljs.core.next.call(null,seq26960__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26961,G__26962,G__26963,seq26960__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26976 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26977){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26977 = meta26977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26978,meta26977__$1){
var self__ = this;
var _26978__$1 = this;
return (new cljs.core.async.t_cljs$core$async26976(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26977__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26978){
var self__ = this;
var _26978__$1 = this;
return self__.meta26977;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26976.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26977","meta26977",-1974434765,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26976";

cljs.core.async.t_cljs$core$async26976.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26976");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26976.
 */
cljs.core.async.__GT_t_cljs$core$async26976 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26976(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26977){
return (new cljs.core.async.t_cljs$core$async26976(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26977));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26976(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26081__auto___27140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___27140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___27140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27080){
var state_val_27081 = (state_27080[(1)]);
if((state_val_27081 === (7))){
var inst_26995 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
var statearr_27082_27141 = state_27080__$1;
(statearr_27082_27141[(2)] = inst_26995);

(statearr_27082_27141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (20))){
var inst_27007 = (state_27080[(7)]);
var state_27080__$1 = state_27080;
var statearr_27083_27142 = state_27080__$1;
(statearr_27083_27142[(2)] = inst_27007);

(statearr_27083_27142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (27))){
var state_27080__$1 = state_27080;
var statearr_27084_27143 = state_27080__$1;
(statearr_27084_27143[(2)] = null);

(statearr_27084_27143[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (1))){
var inst_26982 = (state_27080[(8)]);
var inst_26982__$1 = calc_state.call(null);
var inst_26984 = (inst_26982__$1 == null);
var inst_26985 = cljs.core.not.call(null,inst_26984);
var state_27080__$1 = (function (){var statearr_27085 = state_27080;
(statearr_27085[(8)] = inst_26982__$1);

return statearr_27085;
})();
if(inst_26985){
var statearr_27086_27144 = state_27080__$1;
(statearr_27086_27144[(1)] = (2));

} else {
var statearr_27087_27145 = state_27080__$1;
(statearr_27087_27145[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (24))){
var inst_27031 = (state_27080[(9)]);
var inst_27040 = (state_27080[(10)]);
var inst_27054 = (state_27080[(11)]);
var inst_27054__$1 = inst_27031.call(null,inst_27040);
var state_27080__$1 = (function (){var statearr_27088 = state_27080;
(statearr_27088[(11)] = inst_27054__$1);

return statearr_27088;
})();
if(cljs.core.truth_(inst_27054__$1)){
var statearr_27089_27146 = state_27080__$1;
(statearr_27089_27146[(1)] = (29));

} else {
var statearr_27090_27147 = state_27080__$1;
(statearr_27090_27147[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (4))){
var inst_26998 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
if(cljs.core.truth_(inst_26998)){
var statearr_27091_27148 = state_27080__$1;
(statearr_27091_27148[(1)] = (8));

} else {
var statearr_27092_27149 = state_27080__$1;
(statearr_27092_27149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (15))){
var inst_27025 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
if(cljs.core.truth_(inst_27025)){
var statearr_27093_27150 = state_27080__$1;
(statearr_27093_27150[(1)] = (19));

} else {
var statearr_27094_27151 = state_27080__$1;
(statearr_27094_27151[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (21))){
var inst_27030 = (state_27080[(12)]);
var inst_27030__$1 = (state_27080[(2)]);
var inst_27031 = cljs.core.get.call(null,inst_27030__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27032 = cljs.core.get.call(null,inst_27030__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27033 = cljs.core.get.call(null,inst_27030__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27080__$1 = (function (){var statearr_27095 = state_27080;
(statearr_27095[(13)] = inst_27032);

(statearr_27095[(12)] = inst_27030__$1);

(statearr_27095[(9)] = inst_27031);

return statearr_27095;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27080__$1,(22),inst_27033);
} else {
if((state_val_27081 === (31))){
var inst_27062 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
if(cljs.core.truth_(inst_27062)){
var statearr_27096_27152 = state_27080__$1;
(statearr_27096_27152[(1)] = (32));

} else {
var statearr_27097_27153 = state_27080__$1;
(statearr_27097_27153[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (32))){
var inst_27039 = (state_27080[(14)]);
var state_27080__$1 = state_27080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27080__$1,(35),out,inst_27039);
} else {
if((state_val_27081 === (33))){
var inst_27030 = (state_27080[(12)]);
var inst_27007 = inst_27030;
var state_27080__$1 = (function (){var statearr_27098 = state_27080;
(statearr_27098[(7)] = inst_27007);

return statearr_27098;
})();
var statearr_27099_27154 = state_27080__$1;
(statearr_27099_27154[(2)] = null);

(statearr_27099_27154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (13))){
var inst_27007 = (state_27080[(7)]);
var inst_27014 = inst_27007.cljs$lang$protocol_mask$partition0$;
var inst_27015 = (inst_27014 & (64));
var inst_27016 = inst_27007.cljs$core$ISeq$;
var inst_27017 = (cljs.core.PROTOCOL_SENTINEL === inst_27016);
var inst_27018 = ((inst_27015) || (inst_27017));
var state_27080__$1 = state_27080;
if(cljs.core.truth_(inst_27018)){
var statearr_27100_27155 = state_27080__$1;
(statearr_27100_27155[(1)] = (16));

} else {
var statearr_27101_27156 = state_27080__$1;
(statearr_27101_27156[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (22))){
var inst_27039 = (state_27080[(14)]);
var inst_27040 = (state_27080[(10)]);
var inst_27038 = (state_27080[(2)]);
var inst_27039__$1 = cljs.core.nth.call(null,inst_27038,(0),null);
var inst_27040__$1 = cljs.core.nth.call(null,inst_27038,(1),null);
var inst_27041 = (inst_27039__$1 == null);
var inst_27042 = cljs.core._EQ_.call(null,inst_27040__$1,change);
var inst_27043 = ((inst_27041) || (inst_27042));
var state_27080__$1 = (function (){var statearr_27102 = state_27080;
(statearr_27102[(14)] = inst_27039__$1);

(statearr_27102[(10)] = inst_27040__$1);

return statearr_27102;
})();
if(cljs.core.truth_(inst_27043)){
var statearr_27103_27157 = state_27080__$1;
(statearr_27103_27157[(1)] = (23));

} else {
var statearr_27104_27158 = state_27080__$1;
(statearr_27104_27158[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (36))){
var inst_27030 = (state_27080[(12)]);
var inst_27007 = inst_27030;
var state_27080__$1 = (function (){var statearr_27105 = state_27080;
(statearr_27105[(7)] = inst_27007);

return statearr_27105;
})();
var statearr_27106_27159 = state_27080__$1;
(statearr_27106_27159[(2)] = null);

(statearr_27106_27159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (29))){
var inst_27054 = (state_27080[(11)]);
var state_27080__$1 = state_27080;
var statearr_27107_27160 = state_27080__$1;
(statearr_27107_27160[(2)] = inst_27054);

(statearr_27107_27160[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (6))){
var state_27080__$1 = state_27080;
var statearr_27108_27161 = state_27080__$1;
(statearr_27108_27161[(2)] = false);

(statearr_27108_27161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (28))){
var inst_27050 = (state_27080[(2)]);
var inst_27051 = calc_state.call(null);
var inst_27007 = inst_27051;
var state_27080__$1 = (function (){var statearr_27109 = state_27080;
(statearr_27109[(15)] = inst_27050);

(statearr_27109[(7)] = inst_27007);

return statearr_27109;
})();
var statearr_27110_27162 = state_27080__$1;
(statearr_27110_27162[(2)] = null);

(statearr_27110_27162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (25))){
var inst_27076 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
var statearr_27111_27163 = state_27080__$1;
(statearr_27111_27163[(2)] = inst_27076);

(statearr_27111_27163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (34))){
var inst_27074 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
var statearr_27112_27164 = state_27080__$1;
(statearr_27112_27164[(2)] = inst_27074);

(statearr_27112_27164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (17))){
var state_27080__$1 = state_27080;
var statearr_27113_27165 = state_27080__$1;
(statearr_27113_27165[(2)] = false);

(statearr_27113_27165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (3))){
var state_27080__$1 = state_27080;
var statearr_27114_27166 = state_27080__$1;
(statearr_27114_27166[(2)] = false);

(statearr_27114_27166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (12))){
var inst_27078 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27080__$1,inst_27078);
} else {
if((state_val_27081 === (2))){
var inst_26982 = (state_27080[(8)]);
var inst_26987 = inst_26982.cljs$lang$protocol_mask$partition0$;
var inst_26988 = (inst_26987 & (64));
var inst_26989 = inst_26982.cljs$core$ISeq$;
var inst_26990 = (cljs.core.PROTOCOL_SENTINEL === inst_26989);
var inst_26991 = ((inst_26988) || (inst_26990));
var state_27080__$1 = state_27080;
if(cljs.core.truth_(inst_26991)){
var statearr_27115_27167 = state_27080__$1;
(statearr_27115_27167[(1)] = (5));

} else {
var statearr_27116_27168 = state_27080__$1;
(statearr_27116_27168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (23))){
var inst_27039 = (state_27080[(14)]);
var inst_27045 = (inst_27039 == null);
var state_27080__$1 = state_27080;
if(cljs.core.truth_(inst_27045)){
var statearr_27117_27169 = state_27080__$1;
(statearr_27117_27169[(1)] = (26));

} else {
var statearr_27118_27170 = state_27080__$1;
(statearr_27118_27170[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (35))){
var inst_27065 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
if(cljs.core.truth_(inst_27065)){
var statearr_27119_27171 = state_27080__$1;
(statearr_27119_27171[(1)] = (36));

} else {
var statearr_27120_27172 = state_27080__$1;
(statearr_27120_27172[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (19))){
var inst_27007 = (state_27080[(7)]);
var inst_27027 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27007);
var state_27080__$1 = state_27080;
var statearr_27121_27173 = state_27080__$1;
(statearr_27121_27173[(2)] = inst_27027);

(statearr_27121_27173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (11))){
var inst_27007 = (state_27080[(7)]);
var inst_27011 = (inst_27007 == null);
var inst_27012 = cljs.core.not.call(null,inst_27011);
var state_27080__$1 = state_27080;
if(inst_27012){
var statearr_27122_27174 = state_27080__$1;
(statearr_27122_27174[(1)] = (13));

} else {
var statearr_27123_27175 = state_27080__$1;
(statearr_27123_27175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (9))){
var inst_26982 = (state_27080[(8)]);
var state_27080__$1 = state_27080;
var statearr_27124_27176 = state_27080__$1;
(statearr_27124_27176[(2)] = inst_26982);

(statearr_27124_27176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (5))){
var state_27080__$1 = state_27080;
var statearr_27125_27177 = state_27080__$1;
(statearr_27125_27177[(2)] = true);

(statearr_27125_27177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (14))){
var state_27080__$1 = state_27080;
var statearr_27126_27178 = state_27080__$1;
(statearr_27126_27178[(2)] = false);

(statearr_27126_27178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (26))){
var inst_27040 = (state_27080[(10)]);
var inst_27047 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27040);
var state_27080__$1 = state_27080;
var statearr_27127_27179 = state_27080__$1;
(statearr_27127_27179[(2)] = inst_27047);

(statearr_27127_27179[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (16))){
var state_27080__$1 = state_27080;
var statearr_27128_27180 = state_27080__$1;
(statearr_27128_27180[(2)] = true);

(statearr_27128_27180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (38))){
var inst_27070 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
var statearr_27129_27181 = state_27080__$1;
(statearr_27129_27181[(2)] = inst_27070);

(statearr_27129_27181[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (30))){
var inst_27032 = (state_27080[(13)]);
var inst_27031 = (state_27080[(9)]);
var inst_27040 = (state_27080[(10)]);
var inst_27057 = cljs.core.empty_QMARK_.call(null,inst_27031);
var inst_27058 = inst_27032.call(null,inst_27040);
var inst_27059 = cljs.core.not.call(null,inst_27058);
var inst_27060 = ((inst_27057) && (inst_27059));
var state_27080__$1 = state_27080;
var statearr_27130_27182 = state_27080__$1;
(statearr_27130_27182[(2)] = inst_27060);

(statearr_27130_27182[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (10))){
var inst_26982 = (state_27080[(8)]);
var inst_27003 = (state_27080[(2)]);
var inst_27004 = cljs.core.get.call(null,inst_27003,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27005 = cljs.core.get.call(null,inst_27003,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27006 = cljs.core.get.call(null,inst_27003,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27007 = inst_26982;
var state_27080__$1 = (function (){var statearr_27131 = state_27080;
(statearr_27131[(16)] = inst_27006);

(statearr_27131[(17)] = inst_27004);

(statearr_27131[(18)] = inst_27005);

(statearr_27131[(7)] = inst_27007);

return statearr_27131;
})();
var statearr_27132_27183 = state_27080__$1;
(statearr_27132_27183[(2)] = null);

(statearr_27132_27183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (18))){
var inst_27022 = (state_27080[(2)]);
var state_27080__$1 = state_27080;
var statearr_27133_27184 = state_27080__$1;
(statearr_27133_27184[(2)] = inst_27022);

(statearr_27133_27184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (37))){
var state_27080__$1 = state_27080;
var statearr_27134_27185 = state_27080__$1;
(statearr_27134_27185[(2)] = null);

(statearr_27134_27185[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27081 === (8))){
var inst_26982 = (state_27080[(8)]);
var inst_27000 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26982);
var state_27080__$1 = state_27080;
var statearr_27135_27186 = state_27080__$1;
(statearr_27135_27186[(2)] = inst_27000);

(statearr_27135_27186[(1)] = (10));


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
});})(c__26081__auto___27140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25990__auto__,c__26081__auto___27140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25991__auto__ = null;
var cljs$core$async$mix_$_state_machine__25991__auto____0 = (function (){
var statearr_27136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27136[(0)] = cljs$core$async$mix_$_state_machine__25991__auto__);

(statearr_27136[(1)] = (1));

return statearr_27136;
});
var cljs$core$async$mix_$_state_machine__25991__auto____1 = (function (state_27080){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_27080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e27137){if((e27137 instanceof Object)){
var ex__25994__auto__ = e27137;
var statearr_27138_27187 = state_27080;
(statearr_27138_27187[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27188 = state_27080;
state_27080 = G__27188;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25991__auto__ = function(state_27080){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25991__auto____1.call(this,state_27080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25991__auto____0;
cljs$core$async$mix_$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25991__auto____1;
return cljs$core$async$mix_$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___27140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26083__auto__ = (function (){var statearr_27139 = f__26082__auto__.call(null);
(statearr_27139[(6)] = c__26081__auto___27140);

return statearr_27139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___27140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27190 = arguments.length;
switch (G__27190) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27194 = arguments.length;
switch (G__27194) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__27192_SHARP_){
if(cljs.core.truth_(p1__27192_SHARP_.call(null,topic))){
return p1__27192_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27192_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27195 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27196){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27196 = meta27196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27197,meta27196__$1){
var self__ = this;
var _27197__$1 = this;
return (new cljs.core.async.t_cljs$core$async27195(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27196__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27197){
var self__ = this;
var _27197__$1 = this;
return self__.meta27196;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27195.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27196","meta27196",909689159,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27195";

cljs.core.async.t_cljs$core$async27195.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27195");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27195.
 */
cljs.core.async.__GT_t_cljs$core$async27195 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27195(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27196){
return (new cljs.core.async.t_cljs$core$async27195(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27196));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27195(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26081__auto___27315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___27315,mults,ensure_mult,p){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___27315,mults,ensure_mult,p){
return (function (state_27269){
var state_val_27270 = (state_27269[(1)]);
if((state_val_27270 === (7))){
var inst_27265 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27271_27316 = state_27269__$1;
(statearr_27271_27316[(2)] = inst_27265);

(statearr_27271_27316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (20))){
var state_27269__$1 = state_27269;
var statearr_27272_27317 = state_27269__$1;
(statearr_27272_27317[(2)] = null);

(statearr_27272_27317[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (1))){
var state_27269__$1 = state_27269;
var statearr_27273_27318 = state_27269__$1;
(statearr_27273_27318[(2)] = null);

(statearr_27273_27318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (24))){
var inst_27248 = (state_27269[(7)]);
var inst_27257 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27248);
var state_27269__$1 = state_27269;
var statearr_27274_27319 = state_27269__$1;
(statearr_27274_27319[(2)] = inst_27257);

(statearr_27274_27319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (4))){
var inst_27200 = (state_27269[(8)]);
var inst_27200__$1 = (state_27269[(2)]);
var inst_27201 = (inst_27200__$1 == null);
var state_27269__$1 = (function (){var statearr_27275 = state_27269;
(statearr_27275[(8)] = inst_27200__$1);

return statearr_27275;
})();
if(cljs.core.truth_(inst_27201)){
var statearr_27276_27320 = state_27269__$1;
(statearr_27276_27320[(1)] = (5));

} else {
var statearr_27277_27321 = state_27269__$1;
(statearr_27277_27321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (15))){
var inst_27242 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27278_27322 = state_27269__$1;
(statearr_27278_27322[(2)] = inst_27242);

(statearr_27278_27322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (21))){
var inst_27262 = (state_27269[(2)]);
var state_27269__$1 = (function (){var statearr_27279 = state_27269;
(statearr_27279[(9)] = inst_27262);

return statearr_27279;
})();
var statearr_27280_27323 = state_27269__$1;
(statearr_27280_27323[(2)] = null);

(statearr_27280_27323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (13))){
var inst_27224 = (state_27269[(10)]);
var inst_27226 = cljs.core.chunked_seq_QMARK_.call(null,inst_27224);
var state_27269__$1 = state_27269;
if(inst_27226){
var statearr_27281_27324 = state_27269__$1;
(statearr_27281_27324[(1)] = (16));

} else {
var statearr_27282_27325 = state_27269__$1;
(statearr_27282_27325[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (22))){
var inst_27254 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27254)){
var statearr_27283_27326 = state_27269__$1;
(statearr_27283_27326[(1)] = (23));

} else {
var statearr_27284_27327 = state_27269__$1;
(statearr_27284_27327[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (6))){
var inst_27248 = (state_27269[(7)]);
var inst_27250 = (state_27269[(11)]);
var inst_27200 = (state_27269[(8)]);
var inst_27248__$1 = topic_fn.call(null,inst_27200);
var inst_27249 = cljs.core.deref.call(null,mults);
var inst_27250__$1 = cljs.core.get.call(null,inst_27249,inst_27248__$1);
var state_27269__$1 = (function (){var statearr_27285 = state_27269;
(statearr_27285[(7)] = inst_27248__$1);

(statearr_27285[(11)] = inst_27250__$1);

return statearr_27285;
})();
if(cljs.core.truth_(inst_27250__$1)){
var statearr_27286_27328 = state_27269__$1;
(statearr_27286_27328[(1)] = (19));

} else {
var statearr_27287_27329 = state_27269__$1;
(statearr_27287_27329[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (25))){
var inst_27259 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27288_27330 = state_27269__$1;
(statearr_27288_27330[(2)] = inst_27259);

(statearr_27288_27330[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (17))){
var inst_27224 = (state_27269[(10)]);
var inst_27233 = cljs.core.first.call(null,inst_27224);
var inst_27234 = cljs.core.async.muxch_STAR_.call(null,inst_27233);
var inst_27235 = cljs.core.async.close_BANG_.call(null,inst_27234);
var inst_27236 = cljs.core.next.call(null,inst_27224);
var inst_27210 = inst_27236;
var inst_27211 = null;
var inst_27212 = (0);
var inst_27213 = (0);
var state_27269__$1 = (function (){var statearr_27289 = state_27269;
(statearr_27289[(12)] = inst_27213);

(statearr_27289[(13)] = inst_27212);

(statearr_27289[(14)] = inst_27235);

(statearr_27289[(15)] = inst_27211);

(statearr_27289[(16)] = inst_27210);

return statearr_27289;
})();
var statearr_27290_27331 = state_27269__$1;
(statearr_27290_27331[(2)] = null);

(statearr_27290_27331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (3))){
var inst_27267 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27269__$1,inst_27267);
} else {
if((state_val_27270 === (12))){
var inst_27244 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27291_27332 = state_27269__$1;
(statearr_27291_27332[(2)] = inst_27244);

(statearr_27291_27332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (2))){
var state_27269__$1 = state_27269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27269__$1,(4),ch);
} else {
if((state_val_27270 === (23))){
var state_27269__$1 = state_27269;
var statearr_27292_27333 = state_27269__$1;
(statearr_27292_27333[(2)] = null);

(statearr_27292_27333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (19))){
var inst_27250 = (state_27269[(11)]);
var inst_27200 = (state_27269[(8)]);
var inst_27252 = cljs.core.async.muxch_STAR_.call(null,inst_27250);
var state_27269__$1 = state_27269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27269__$1,(22),inst_27252,inst_27200);
} else {
if((state_val_27270 === (11))){
var inst_27224 = (state_27269[(10)]);
var inst_27210 = (state_27269[(16)]);
var inst_27224__$1 = cljs.core.seq.call(null,inst_27210);
var state_27269__$1 = (function (){var statearr_27293 = state_27269;
(statearr_27293[(10)] = inst_27224__$1);

return statearr_27293;
})();
if(inst_27224__$1){
var statearr_27294_27334 = state_27269__$1;
(statearr_27294_27334[(1)] = (13));

} else {
var statearr_27295_27335 = state_27269__$1;
(statearr_27295_27335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (9))){
var inst_27246 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27296_27336 = state_27269__$1;
(statearr_27296_27336[(2)] = inst_27246);

(statearr_27296_27336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (5))){
var inst_27207 = cljs.core.deref.call(null,mults);
var inst_27208 = cljs.core.vals.call(null,inst_27207);
var inst_27209 = cljs.core.seq.call(null,inst_27208);
var inst_27210 = inst_27209;
var inst_27211 = null;
var inst_27212 = (0);
var inst_27213 = (0);
var state_27269__$1 = (function (){var statearr_27297 = state_27269;
(statearr_27297[(12)] = inst_27213);

(statearr_27297[(13)] = inst_27212);

(statearr_27297[(15)] = inst_27211);

(statearr_27297[(16)] = inst_27210);

return statearr_27297;
})();
var statearr_27298_27337 = state_27269__$1;
(statearr_27298_27337[(2)] = null);

(statearr_27298_27337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (14))){
var state_27269__$1 = state_27269;
var statearr_27302_27338 = state_27269__$1;
(statearr_27302_27338[(2)] = null);

(statearr_27302_27338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (16))){
var inst_27224 = (state_27269[(10)]);
var inst_27228 = cljs.core.chunk_first.call(null,inst_27224);
var inst_27229 = cljs.core.chunk_rest.call(null,inst_27224);
var inst_27230 = cljs.core.count.call(null,inst_27228);
var inst_27210 = inst_27229;
var inst_27211 = inst_27228;
var inst_27212 = inst_27230;
var inst_27213 = (0);
var state_27269__$1 = (function (){var statearr_27303 = state_27269;
(statearr_27303[(12)] = inst_27213);

(statearr_27303[(13)] = inst_27212);

(statearr_27303[(15)] = inst_27211);

(statearr_27303[(16)] = inst_27210);

return statearr_27303;
})();
var statearr_27304_27339 = state_27269__$1;
(statearr_27304_27339[(2)] = null);

(statearr_27304_27339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (10))){
var inst_27213 = (state_27269[(12)]);
var inst_27212 = (state_27269[(13)]);
var inst_27211 = (state_27269[(15)]);
var inst_27210 = (state_27269[(16)]);
var inst_27218 = cljs.core._nth.call(null,inst_27211,inst_27213);
var inst_27219 = cljs.core.async.muxch_STAR_.call(null,inst_27218);
var inst_27220 = cljs.core.async.close_BANG_.call(null,inst_27219);
var inst_27221 = (inst_27213 + (1));
var tmp27299 = inst_27212;
var tmp27300 = inst_27211;
var tmp27301 = inst_27210;
var inst_27210__$1 = tmp27301;
var inst_27211__$1 = tmp27300;
var inst_27212__$1 = tmp27299;
var inst_27213__$1 = inst_27221;
var state_27269__$1 = (function (){var statearr_27305 = state_27269;
(statearr_27305[(12)] = inst_27213__$1);

(statearr_27305[(17)] = inst_27220);

(statearr_27305[(13)] = inst_27212__$1);

(statearr_27305[(15)] = inst_27211__$1);

(statearr_27305[(16)] = inst_27210__$1);

return statearr_27305;
})();
var statearr_27306_27340 = state_27269__$1;
(statearr_27306_27340[(2)] = null);

(statearr_27306_27340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (18))){
var inst_27239 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27307_27341 = state_27269__$1;
(statearr_27307_27341[(2)] = inst_27239);

(statearr_27307_27341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (8))){
var inst_27213 = (state_27269[(12)]);
var inst_27212 = (state_27269[(13)]);
var inst_27215 = (inst_27213 < inst_27212);
var inst_27216 = inst_27215;
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27216)){
var statearr_27308_27342 = state_27269__$1;
(statearr_27308_27342[(1)] = (10));

} else {
var statearr_27309_27343 = state_27269__$1;
(statearr_27309_27343[(1)] = (11));

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
});})(c__26081__auto___27315,mults,ensure_mult,p))
;
return ((function (switch__25990__auto__,c__26081__auto___27315,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_27310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27310[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_27310[(1)] = (1));

return statearr_27310;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_27269){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_27269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e27311){if((e27311 instanceof Object)){
var ex__25994__auto__ = e27311;
var statearr_27312_27344 = state_27269;
(statearr_27312_27344[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27345 = state_27269;
state_27269 = G__27345;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_27269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_27269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___27315,mults,ensure_mult,p))
})();
var state__26083__auto__ = (function (){var statearr_27313 = f__26082__auto__.call(null);
(statearr_27313[(6)] = c__26081__auto___27315);

return statearr_27313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___27315,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27347 = arguments.length;
switch (G__27347) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27350 = arguments.length;
switch (G__27350) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27353 = arguments.length;
switch (G__27353) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26081__auto___27420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___27420,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___27420,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27392){
var state_val_27393 = (state_27392[(1)]);
if((state_val_27393 === (7))){
var state_27392__$1 = state_27392;
var statearr_27394_27421 = state_27392__$1;
(statearr_27394_27421[(2)] = null);

(statearr_27394_27421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (1))){
var state_27392__$1 = state_27392;
var statearr_27395_27422 = state_27392__$1;
(statearr_27395_27422[(2)] = null);

(statearr_27395_27422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (4))){
var inst_27356 = (state_27392[(7)]);
var inst_27358 = (inst_27356 < cnt);
var state_27392__$1 = state_27392;
if(cljs.core.truth_(inst_27358)){
var statearr_27396_27423 = state_27392__$1;
(statearr_27396_27423[(1)] = (6));

} else {
var statearr_27397_27424 = state_27392__$1;
(statearr_27397_27424[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (15))){
var inst_27388 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27398_27425 = state_27392__$1;
(statearr_27398_27425[(2)] = inst_27388);

(statearr_27398_27425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (13))){
var inst_27381 = cljs.core.async.close_BANG_.call(null,out);
var state_27392__$1 = state_27392;
var statearr_27399_27426 = state_27392__$1;
(statearr_27399_27426[(2)] = inst_27381);

(statearr_27399_27426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (6))){
var state_27392__$1 = state_27392;
var statearr_27400_27427 = state_27392__$1;
(statearr_27400_27427[(2)] = null);

(statearr_27400_27427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (3))){
var inst_27390 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27392__$1,inst_27390);
} else {
if((state_val_27393 === (12))){
var inst_27378 = (state_27392[(8)]);
var inst_27378__$1 = (state_27392[(2)]);
var inst_27379 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27378__$1);
var state_27392__$1 = (function (){var statearr_27401 = state_27392;
(statearr_27401[(8)] = inst_27378__$1);

return statearr_27401;
})();
if(cljs.core.truth_(inst_27379)){
var statearr_27402_27428 = state_27392__$1;
(statearr_27402_27428[(1)] = (13));

} else {
var statearr_27403_27429 = state_27392__$1;
(statearr_27403_27429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (2))){
var inst_27355 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27356 = (0);
var state_27392__$1 = (function (){var statearr_27404 = state_27392;
(statearr_27404[(7)] = inst_27356);

(statearr_27404[(9)] = inst_27355);

return statearr_27404;
})();
var statearr_27405_27430 = state_27392__$1;
(statearr_27405_27430[(2)] = null);

(statearr_27405_27430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (11))){
var inst_27356 = (state_27392[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27392,(10),Object,null,(9));
var inst_27365 = chs__$1.call(null,inst_27356);
var inst_27366 = done.call(null,inst_27356);
var inst_27367 = cljs.core.async.take_BANG_.call(null,inst_27365,inst_27366);
var state_27392__$1 = state_27392;
var statearr_27406_27431 = state_27392__$1;
(statearr_27406_27431[(2)] = inst_27367);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27392__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (9))){
var inst_27356 = (state_27392[(7)]);
var inst_27369 = (state_27392[(2)]);
var inst_27370 = (inst_27356 + (1));
var inst_27356__$1 = inst_27370;
var state_27392__$1 = (function (){var statearr_27407 = state_27392;
(statearr_27407[(7)] = inst_27356__$1);

(statearr_27407[(10)] = inst_27369);

return statearr_27407;
})();
var statearr_27408_27432 = state_27392__$1;
(statearr_27408_27432[(2)] = null);

(statearr_27408_27432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (5))){
var inst_27376 = (state_27392[(2)]);
var state_27392__$1 = (function (){var statearr_27409 = state_27392;
(statearr_27409[(11)] = inst_27376);

return statearr_27409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(12),dchan);
} else {
if((state_val_27393 === (14))){
var inst_27378 = (state_27392[(8)]);
var inst_27383 = cljs.core.apply.call(null,f,inst_27378);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27392__$1,(16),out,inst_27383);
} else {
if((state_val_27393 === (16))){
var inst_27385 = (state_27392[(2)]);
var state_27392__$1 = (function (){var statearr_27410 = state_27392;
(statearr_27410[(12)] = inst_27385);

return statearr_27410;
})();
var statearr_27411_27433 = state_27392__$1;
(statearr_27411_27433[(2)] = null);

(statearr_27411_27433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (10))){
var inst_27360 = (state_27392[(2)]);
var inst_27361 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27392__$1 = (function (){var statearr_27412 = state_27392;
(statearr_27412[(13)] = inst_27360);

return statearr_27412;
})();
var statearr_27413_27434 = state_27392__$1;
(statearr_27413_27434[(2)] = inst_27361);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27392__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (8))){
var inst_27374 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27414_27435 = state_27392__$1;
(statearr_27414_27435[(2)] = inst_27374);

(statearr_27414_27435[(1)] = (5));


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
});})(c__26081__auto___27420,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25990__auto__,c__26081__auto___27420,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_27415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27415[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_27415[(1)] = (1));

return statearr_27415;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_27392){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_27392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e27416){if((e27416 instanceof Object)){
var ex__25994__auto__ = e27416;
var statearr_27417_27436 = state_27392;
(statearr_27417_27436[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27437 = state_27392;
state_27392 = G__27437;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_27392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_27392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___27420,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26083__auto__ = (function (){var statearr_27418 = f__26082__auto__.call(null);
(statearr_27418[(6)] = c__26081__auto___27420);

return statearr_27418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___27420,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27440 = arguments.length;
switch (G__27440) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26081__auto___27494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___27494,out){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___27494,out){
return (function (state_27472){
var state_val_27473 = (state_27472[(1)]);
if((state_val_27473 === (7))){
var inst_27451 = (state_27472[(7)]);
var inst_27452 = (state_27472[(8)]);
var inst_27451__$1 = (state_27472[(2)]);
var inst_27452__$1 = cljs.core.nth.call(null,inst_27451__$1,(0),null);
var inst_27453 = cljs.core.nth.call(null,inst_27451__$1,(1),null);
var inst_27454 = (inst_27452__$1 == null);
var state_27472__$1 = (function (){var statearr_27474 = state_27472;
(statearr_27474[(7)] = inst_27451__$1);

(statearr_27474[(8)] = inst_27452__$1);

(statearr_27474[(9)] = inst_27453);

return statearr_27474;
})();
if(cljs.core.truth_(inst_27454)){
var statearr_27475_27495 = state_27472__$1;
(statearr_27475_27495[(1)] = (8));

} else {
var statearr_27476_27496 = state_27472__$1;
(statearr_27476_27496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (1))){
var inst_27441 = cljs.core.vec.call(null,chs);
var inst_27442 = inst_27441;
var state_27472__$1 = (function (){var statearr_27477 = state_27472;
(statearr_27477[(10)] = inst_27442);

return statearr_27477;
})();
var statearr_27478_27497 = state_27472__$1;
(statearr_27478_27497[(2)] = null);

(statearr_27478_27497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (4))){
var inst_27442 = (state_27472[(10)]);
var state_27472__$1 = state_27472;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27472__$1,(7),inst_27442);
} else {
if((state_val_27473 === (6))){
var inst_27468 = (state_27472[(2)]);
var state_27472__$1 = state_27472;
var statearr_27479_27498 = state_27472__$1;
(statearr_27479_27498[(2)] = inst_27468);

(statearr_27479_27498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (3))){
var inst_27470 = (state_27472[(2)]);
var state_27472__$1 = state_27472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27472__$1,inst_27470);
} else {
if((state_val_27473 === (2))){
var inst_27442 = (state_27472[(10)]);
var inst_27444 = cljs.core.count.call(null,inst_27442);
var inst_27445 = (inst_27444 > (0));
var state_27472__$1 = state_27472;
if(cljs.core.truth_(inst_27445)){
var statearr_27481_27499 = state_27472__$1;
(statearr_27481_27499[(1)] = (4));

} else {
var statearr_27482_27500 = state_27472__$1;
(statearr_27482_27500[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (11))){
var inst_27442 = (state_27472[(10)]);
var inst_27461 = (state_27472[(2)]);
var tmp27480 = inst_27442;
var inst_27442__$1 = tmp27480;
var state_27472__$1 = (function (){var statearr_27483 = state_27472;
(statearr_27483[(10)] = inst_27442__$1);

(statearr_27483[(11)] = inst_27461);

return statearr_27483;
})();
var statearr_27484_27501 = state_27472__$1;
(statearr_27484_27501[(2)] = null);

(statearr_27484_27501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (9))){
var inst_27452 = (state_27472[(8)]);
var state_27472__$1 = state_27472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27472__$1,(11),out,inst_27452);
} else {
if((state_val_27473 === (5))){
var inst_27466 = cljs.core.async.close_BANG_.call(null,out);
var state_27472__$1 = state_27472;
var statearr_27485_27502 = state_27472__$1;
(statearr_27485_27502[(2)] = inst_27466);

(statearr_27485_27502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (10))){
var inst_27464 = (state_27472[(2)]);
var state_27472__$1 = state_27472;
var statearr_27486_27503 = state_27472__$1;
(statearr_27486_27503[(2)] = inst_27464);

(statearr_27486_27503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27473 === (8))){
var inst_27451 = (state_27472[(7)]);
var inst_27452 = (state_27472[(8)]);
var inst_27453 = (state_27472[(9)]);
var inst_27442 = (state_27472[(10)]);
var inst_27456 = (function (){var cs = inst_27442;
var vec__27447 = inst_27451;
var v = inst_27452;
var c = inst_27453;
return ((function (cs,vec__27447,v,c,inst_27451,inst_27452,inst_27453,inst_27442,state_val_27473,c__26081__auto___27494,out){
return (function (p1__27438_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27438_SHARP_);
});
;})(cs,vec__27447,v,c,inst_27451,inst_27452,inst_27453,inst_27442,state_val_27473,c__26081__auto___27494,out))
})();
var inst_27457 = cljs.core.filterv.call(null,inst_27456,inst_27442);
var inst_27442__$1 = inst_27457;
var state_27472__$1 = (function (){var statearr_27487 = state_27472;
(statearr_27487[(10)] = inst_27442__$1);

return statearr_27487;
})();
var statearr_27488_27504 = state_27472__$1;
(statearr_27488_27504[(2)] = null);

(statearr_27488_27504[(1)] = (2));


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
});})(c__26081__auto___27494,out))
;
return ((function (switch__25990__auto__,c__26081__auto___27494,out){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_27489 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27489[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_27489[(1)] = (1));

return statearr_27489;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_27472){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_27472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e27490){if((e27490 instanceof Object)){
var ex__25994__auto__ = e27490;
var statearr_27491_27505 = state_27472;
(statearr_27491_27505[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27506 = state_27472;
state_27472 = G__27506;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_27472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_27472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___27494,out))
})();
var state__26083__auto__ = (function (){var statearr_27492 = f__26082__auto__.call(null);
(statearr_27492[(6)] = c__26081__auto___27494);

return statearr_27492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___27494,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27508 = arguments.length;
switch (G__27508) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26081__auto___27553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___27553,out){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___27553,out){
return (function (state_27532){
var state_val_27533 = (state_27532[(1)]);
if((state_val_27533 === (7))){
var inst_27514 = (state_27532[(7)]);
var inst_27514__$1 = (state_27532[(2)]);
var inst_27515 = (inst_27514__$1 == null);
var inst_27516 = cljs.core.not.call(null,inst_27515);
var state_27532__$1 = (function (){var statearr_27534 = state_27532;
(statearr_27534[(7)] = inst_27514__$1);

return statearr_27534;
})();
if(inst_27516){
var statearr_27535_27554 = state_27532__$1;
(statearr_27535_27554[(1)] = (8));

} else {
var statearr_27536_27555 = state_27532__$1;
(statearr_27536_27555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (1))){
var inst_27509 = (0);
var state_27532__$1 = (function (){var statearr_27537 = state_27532;
(statearr_27537[(8)] = inst_27509);

return statearr_27537;
})();
var statearr_27538_27556 = state_27532__$1;
(statearr_27538_27556[(2)] = null);

(statearr_27538_27556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (4))){
var state_27532__$1 = state_27532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27532__$1,(7),ch);
} else {
if((state_val_27533 === (6))){
var inst_27527 = (state_27532[(2)]);
var state_27532__$1 = state_27532;
var statearr_27539_27557 = state_27532__$1;
(statearr_27539_27557[(2)] = inst_27527);

(statearr_27539_27557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (3))){
var inst_27529 = (state_27532[(2)]);
var inst_27530 = cljs.core.async.close_BANG_.call(null,out);
var state_27532__$1 = (function (){var statearr_27540 = state_27532;
(statearr_27540[(9)] = inst_27529);

return statearr_27540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27532__$1,inst_27530);
} else {
if((state_val_27533 === (2))){
var inst_27509 = (state_27532[(8)]);
var inst_27511 = (inst_27509 < n);
var state_27532__$1 = state_27532;
if(cljs.core.truth_(inst_27511)){
var statearr_27541_27558 = state_27532__$1;
(statearr_27541_27558[(1)] = (4));

} else {
var statearr_27542_27559 = state_27532__$1;
(statearr_27542_27559[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (11))){
var inst_27509 = (state_27532[(8)]);
var inst_27519 = (state_27532[(2)]);
var inst_27520 = (inst_27509 + (1));
var inst_27509__$1 = inst_27520;
var state_27532__$1 = (function (){var statearr_27543 = state_27532;
(statearr_27543[(10)] = inst_27519);

(statearr_27543[(8)] = inst_27509__$1);

return statearr_27543;
})();
var statearr_27544_27560 = state_27532__$1;
(statearr_27544_27560[(2)] = null);

(statearr_27544_27560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (9))){
var state_27532__$1 = state_27532;
var statearr_27545_27561 = state_27532__$1;
(statearr_27545_27561[(2)] = null);

(statearr_27545_27561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (5))){
var state_27532__$1 = state_27532;
var statearr_27546_27562 = state_27532__$1;
(statearr_27546_27562[(2)] = null);

(statearr_27546_27562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (10))){
var inst_27524 = (state_27532[(2)]);
var state_27532__$1 = state_27532;
var statearr_27547_27563 = state_27532__$1;
(statearr_27547_27563[(2)] = inst_27524);

(statearr_27547_27563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (8))){
var inst_27514 = (state_27532[(7)]);
var state_27532__$1 = state_27532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27532__$1,(11),out,inst_27514);
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
});})(c__26081__auto___27553,out))
;
return ((function (switch__25990__auto__,c__26081__auto___27553,out){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_27548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27548[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_27548[(1)] = (1));

return statearr_27548;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_27532){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_27532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e27549){if((e27549 instanceof Object)){
var ex__25994__auto__ = e27549;
var statearr_27550_27564 = state_27532;
(statearr_27550_27564[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27565 = state_27532;
state_27532 = G__27565;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_27532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_27532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___27553,out))
})();
var state__26083__auto__ = (function (){var statearr_27551 = f__26082__auto__.call(null);
(statearr_27551[(6)] = c__26081__auto___27553);

return statearr_27551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___27553,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27567 = (function (f,ch,meta27568){
this.f = f;
this.ch = ch;
this.meta27568 = meta27568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27569,meta27568__$1){
var self__ = this;
var _27569__$1 = this;
return (new cljs.core.async.t_cljs$core$async27567(self__.f,self__.ch,meta27568__$1));
});

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27569){
var self__ = this;
var _27569__$1 = this;
return self__.meta27568;
});

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27570 = (function (f,ch,meta27568,_,fn1,meta27571){
this.f = f;
this.ch = ch;
this.meta27568 = meta27568;
this._ = _;
this.fn1 = fn1;
this.meta27571 = meta27571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27572,meta27571__$1){
var self__ = this;
var _27572__$1 = this;
return (new cljs.core.async.t_cljs$core$async27570(self__.f,self__.ch,self__.meta27568,self__._,self__.fn1,meta27571__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27572){
var self__ = this;
var _27572__$1 = this;
return self__.meta27571;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27566_SHARP_){
return f1.call(null,(((p1__27566_SHARP_ == null))?null:self__.f.call(null,p1__27566_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27570.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27568","meta27568",-1725720409,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27567","cljs.core.async/t_cljs$core$async27567",-1287571715,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27571","meta27571",1401867287,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27570";

cljs.core.async.t_cljs$core$async27570.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27570");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27570.
 */
cljs.core.async.__GT_t_cljs$core$async27570 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27570(f__$1,ch__$1,meta27568__$1,___$2,fn1__$1,meta27571){
return (new cljs.core.async.t_cljs$core$async27570(f__$1,ch__$1,meta27568__$1,___$2,fn1__$1,meta27571));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27570(self__.f,self__.ch,self__.meta27568,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27568","meta27568",-1725720409,null)], null);
});

cljs.core.async.t_cljs$core$async27567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27567";

cljs.core.async.t_cljs$core$async27567.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27567");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27567.
 */
cljs.core.async.__GT_t_cljs$core$async27567 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27567(f__$1,ch__$1,meta27568){
return (new cljs.core.async.t_cljs$core$async27567(f__$1,ch__$1,meta27568));
});

}

return (new cljs.core.async.t_cljs$core$async27567(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27573 = (function (f,ch,meta27574){
this.f = f;
this.ch = ch;
this.meta27574 = meta27574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27575,meta27574__$1){
var self__ = this;
var _27575__$1 = this;
return (new cljs.core.async.t_cljs$core$async27573(self__.f,self__.ch,meta27574__$1));
});

cljs.core.async.t_cljs$core$async27573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27575){
var self__ = this;
var _27575__$1 = this;
return self__.meta27574;
});

cljs.core.async.t_cljs$core$async27573.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27573.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27573.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27573.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27573.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27573.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27574","meta27574",891347700,null)], null);
});

cljs.core.async.t_cljs$core$async27573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27573";

cljs.core.async.t_cljs$core$async27573.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27573");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27573.
 */
cljs.core.async.__GT_t_cljs$core$async27573 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27573(f__$1,ch__$1,meta27574){
return (new cljs.core.async.t_cljs$core$async27573(f__$1,ch__$1,meta27574));
});

}

return (new cljs.core.async.t_cljs$core$async27573(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27576 = (function (p,ch,meta27577){
this.p = p;
this.ch = ch;
this.meta27577 = meta27577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27578,meta27577__$1){
var self__ = this;
var _27578__$1 = this;
return (new cljs.core.async.t_cljs$core$async27576(self__.p,self__.ch,meta27577__$1));
});

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27578){
var self__ = this;
var _27578__$1 = this;
return self__.meta27577;
});

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27577","meta27577",-176058009,null)], null);
});

cljs.core.async.t_cljs$core$async27576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27576";

cljs.core.async.t_cljs$core$async27576.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27576");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27576.
 */
cljs.core.async.__GT_t_cljs$core$async27576 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27576(p__$1,ch__$1,meta27577){
return (new cljs.core.async.t_cljs$core$async27576(p__$1,ch__$1,meta27577));
});

}

return (new cljs.core.async.t_cljs$core$async27576(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27580 = arguments.length;
switch (G__27580) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26081__auto___27620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___27620,out){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___27620,out){
return (function (state_27601){
var state_val_27602 = (state_27601[(1)]);
if((state_val_27602 === (7))){
var inst_27597 = (state_27601[(2)]);
var state_27601__$1 = state_27601;
var statearr_27603_27621 = state_27601__$1;
(statearr_27603_27621[(2)] = inst_27597);

(statearr_27603_27621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (1))){
var state_27601__$1 = state_27601;
var statearr_27604_27622 = state_27601__$1;
(statearr_27604_27622[(2)] = null);

(statearr_27604_27622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (4))){
var inst_27583 = (state_27601[(7)]);
var inst_27583__$1 = (state_27601[(2)]);
var inst_27584 = (inst_27583__$1 == null);
var state_27601__$1 = (function (){var statearr_27605 = state_27601;
(statearr_27605[(7)] = inst_27583__$1);

return statearr_27605;
})();
if(cljs.core.truth_(inst_27584)){
var statearr_27606_27623 = state_27601__$1;
(statearr_27606_27623[(1)] = (5));

} else {
var statearr_27607_27624 = state_27601__$1;
(statearr_27607_27624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (6))){
var inst_27583 = (state_27601[(7)]);
var inst_27588 = p.call(null,inst_27583);
var state_27601__$1 = state_27601;
if(cljs.core.truth_(inst_27588)){
var statearr_27608_27625 = state_27601__$1;
(statearr_27608_27625[(1)] = (8));

} else {
var statearr_27609_27626 = state_27601__$1;
(statearr_27609_27626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (3))){
var inst_27599 = (state_27601[(2)]);
var state_27601__$1 = state_27601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27601__$1,inst_27599);
} else {
if((state_val_27602 === (2))){
var state_27601__$1 = state_27601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27601__$1,(4),ch);
} else {
if((state_val_27602 === (11))){
var inst_27591 = (state_27601[(2)]);
var state_27601__$1 = state_27601;
var statearr_27610_27627 = state_27601__$1;
(statearr_27610_27627[(2)] = inst_27591);

(statearr_27610_27627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (9))){
var state_27601__$1 = state_27601;
var statearr_27611_27628 = state_27601__$1;
(statearr_27611_27628[(2)] = null);

(statearr_27611_27628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (5))){
var inst_27586 = cljs.core.async.close_BANG_.call(null,out);
var state_27601__$1 = state_27601;
var statearr_27612_27629 = state_27601__$1;
(statearr_27612_27629[(2)] = inst_27586);

(statearr_27612_27629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (10))){
var inst_27594 = (state_27601[(2)]);
var state_27601__$1 = (function (){var statearr_27613 = state_27601;
(statearr_27613[(8)] = inst_27594);

return statearr_27613;
})();
var statearr_27614_27630 = state_27601__$1;
(statearr_27614_27630[(2)] = null);

(statearr_27614_27630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (8))){
var inst_27583 = (state_27601[(7)]);
var state_27601__$1 = state_27601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27601__$1,(11),out,inst_27583);
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
});})(c__26081__auto___27620,out))
;
return ((function (switch__25990__auto__,c__26081__auto___27620,out){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_27615 = [null,null,null,null,null,null,null,null,null];
(statearr_27615[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_27615[(1)] = (1));

return statearr_27615;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_27601){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_27601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e27616){if((e27616 instanceof Object)){
var ex__25994__auto__ = e27616;
var statearr_27617_27631 = state_27601;
(statearr_27617_27631[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27632 = state_27601;
state_27601 = G__27632;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_27601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_27601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___27620,out))
})();
var state__26083__auto__ = (function (){var statearr_27618 = f__26082__auto__.call(null);
(statearr_27618[(6)] = c__26081__auto___27620);

return statearr_27618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___27620,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27634 = arguments.length;
switch (G__27634) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto__){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto__){
return (function (state_27697){
var state_val_27698 = (state_27697[(1)]);
if((state_val_27698 === (7))){
var inst_27693 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27699_27737 = state_27697__$1;
(statearr_27699_27737[(2)] = inst_27693);

(statearr_27699_27737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (20))){
var inst_27663 = (state_27697[(7)]);
var inst_27674 = (state_27697[(2)]);
var inst_27675 = cljs.core.next.call(null,inst_27663);
var inst_27649 = inst_27675;
var inst_27650 = null;
var inst_27651 = (0);
var inst_27652 = (0);
var state_27697__$1 = (function (){var statearr_27700 = state_27697;
(statearr_27700[(8)] = inst_27651);

(statearr_27700[(9)] = inst_27674);

(statearr_27700[(10)] = inst_27652);

(statearr_27700[(11)] = inst_27649);

(statearr_27700[(12)] = inst_27650);

return statearr_27700;
})();
var statearr_27701_27738 = state_27697__$1;
(statearr_27701_27738[(2)] = null);

(statearr_27701_27738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (1))){
var state_27697__$1 = state_27697;
var statearr_27702_27739 = state_27697__$1;
(statearr_27702_27739[(2)] = null);

(statearr_27702_27739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (4))){
var inst_27638 = (state_27697[(13)]);
var inst_27638__$1 = (state_27697[(2)]);
var inst_27639 = (inst_27638__$1 == null);
var state_27697__$1 = (function (){var statearr_27703 = state_27697;
(statearr_27703[(13)] = inst_27638__$1);

return statearr_27703;
})();
if(cljs.core.truth_(inst_27639)){
var statearr_27704_27740 = state_27697__$1;
(statearr_27704_27740[(1)] = (5));

} else {
var statearr_27705_27741 = state_27697__$1;
(statearr_27705_27741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (15))){
var state_27697__$1 = state_27697;
var statearr_27709_27742 = state_27697__$1;
(statearr_27709_27742[(2)] = null);

(statearr_27709_27742[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (21))){
var state_27697__$1 = state_27697;
var statearr_27710_27743 = state_27697__$1;
(statearr_27710_27743[(2)] = null);

(statearr_27710_27743[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (13))){
var inst_27651 = (state_27697[(8)]);
var inst_27652 = (state_27697[(10)]);
var inst_27649 = (state_27697[(11)]);
var inst_27650 = (state_27697[(12)]);
var inst_27659 = (state_27697[(2)]);
var inst_27660 = (inst_27652 + (1));
var tmp27706 = inst_27651;
var tmp27707 = inst_27649;
var tmp27708 = inst_27650;
var inst_27649__$1 = tmp27707;
var inst_27650__$1 = tmp27708;
var inst_27651__$1 = tmp27706;
var inst_27652__$1 = inst_27660;
var state_27697__$1 = (function (){var statearr_27711 = state_27697;
(statearr_27711[(8)] = inst_27651__$1);

(statearr_27711[(10)] = inst_27652__$1);

(statearr_27711[(11)] = inst_27649__$1);

(statearr_27711[(14)] = inst_27659);

(statearr_27711[(12)] = inst_27650__$1);

return statearr_27711;
})();
var statearr_27712_27744 = state_27697__$1;
(statearr_27712_27744[(2)] = null);

(statearr_27712_27744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (22))){
var state_27697__$1 = state_27697;
var statearr_27713_27745 = state_27697__$1;
(statearr_27713_27745[(2)] = null);

(statearr_27713_27745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (6))){
var inst_27638 = (state_27697[(13)]);
var inst_27647 = f.call(null,inst_27638);
var inst_27648 = cljs.core.seq.call(null,inst_27647);
var inst_27649 = inst_27648;
var inst_27650 = null;
var inst_27651 = (0);
var inst_27652 = (0);
var state_27697__$1 = (function (){var statearr_27714 = state_27697;
(statearr_27714[(8)] = inst_27651);

(statearr_27714[(10)] = inst_27652);

(statearr_27714[(11)] = inst_27649);

(statearr_27714[(12)] = inst_27650);

return statearr_27714;
})();
var statearr_27715_27746 = state_27697__$1;
(statearr_27715_27746[(2)] = null);

(statearr_27715_27746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (17))){
var inst_27663 = (state_27697[(7)]);
var inst_27667 = cljs.core.chunk_first.call(null,inst_27663);
var inst_27668 = cljs.core.chunk_rest.call(null,inst_27663);
var inst_27669 = cljs.core.count.call(null,inst_27667);
var inst_27649 = inst_27668;
var inst_27650 = inst_27667;
var inst_27651 = inst_27669;
var inst_27652 = (0);
var state_27697__$1 = (function (){var statearr_27716 = state_27697;
(statearr_27716[(8)] = inst_27651);

(statearr_27716[(10)] = inst_27652);

(statearr_27716[(11)] = inst_27649);

(statearr_27716[(12)] = inst_27650);

return statearr_27716;
})();
var statearr_27717_27747 = state_27697__$1;
(statearr_27717_27747[(2)] = null);

(statearr_27717_27747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (3))){
var inst_27695 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27697__$1,inst_27695);
} else {
if((state_val_27698 === (12))){
var inst_27683 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27718_27748 = state_27697__$1;
(statearr_27718_27748[(2)] = inst_27683);

(statearr_27718_27748[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (2))){
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(4),in$);
} else {
if((state_val_27698 === (23))){
var inst_27691 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27719_27749 = state_27697__$1;
(statearr_27719_27749[(2)] = inst_27691);

(statearr_27719_27749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (19))){
var inst_27678 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27720_27750 = state_27697__$1;
(statearr_27720_27750[(2)] = inst_27678);

(statearr_27720_27750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (11))){
var inst_27663 = (state_27697[(7)]);
var inst_27649 = (state_27697[(11)]);
var inst_27663__$1 = cljs.core.seq.call(null,inst_27649);
var state_27697__$1 = (function (){var statearr_27721 = state_27697;
(statearr_27721[(7)] = inst_27663__$1);

return statearr_27721;
})();
if(inst_27663__$1){
var statearr_27722_27751 = state_27697__$1;
(statearr_27722_27751[(1)] = (14));

} else {
var statearr_27723_27752 = state_27697__$1;
(statearr_27723_27752[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (9))){
var inst_27685 = (state_27697[(2)]);
var inst_27686 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27697__$1 = (function (){var statearr_27724 = state_27697;
(statearr_27724[(15)] = inst_27685);

return statearr_27724;
})();
if(cljs.core.truth_(inst_27686)){
var statearr_27725_27753 = state_27697__$1;
(statearr_27725_27753[(1)] = (21));

} else {
var statearr_27726_27754 = state_27697__$1;
(statearr_27726_27754[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (5))){
var inst_27641 = cljs.core.async.close_BANG_.call(null,out);
var state_27697__$1 = state_27697;
var statearr_27727_27755 = state_27697__$1;
(statearr_27727_27755[(2)] = inst_27641);

(statearr_27727_27755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (14))){
var inst_27663 = (state_27697[(7)]);
var inst_27665 = cljs.core.chunked_seq_QMARK_.call(null,inst_27663);
var state_27697__$1 = state_27697;
if(inst_27665){
var statearr_27728_27756 = state_27697__$1;
(statearr_27728_27756[(1)] = (17));

} else {
var statearr_27729_27757 = state_27697__$1;
(statearr_27729_27757[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (16))){
var inst_27681 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27730_27758 = state_27697__$1;
(statearr_27730_27758[(2)] = inst_27681);

(statearr_27730_27758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (10))){
var inst_27652 = (state_27697[(10)]);
var inst_27650 = (state_27697[(12)]);
var inst_27657 = cljs.core._nth.call(null,inst_27650,inst_27652);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27697__$1,(13),out,inst_27657);
} else {
if((state_val_27698 === (18))){
var inst_27663 = (state_27697[(7)]);
var inst_27672 = cljs.core.first.call(null,inst_27663);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27697__$1,(20),out,inst_27672);
} else {
if((state_val_27698 === (8))){
var inst_27651 = (state_27697[(8)]);
var inst_27652 = (state_27697[(10)]);
var inst_27654 = (inst_27652 < inst_27651);
var inst_27655 = inst_27654;
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27655)){
var statearr_27731_27759 = state_27697__$1;
(statearr_27731_27759[(1)] = (10));

} else {
var statearr_27732_27760 = state_27697__$1;
(statearr_27732_27760[(1)] = (11));

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
});})(c__26081__auto__))
;
return ((function (switch__25990__auto__,c__26081__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25991__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25991__auto____0 = (function (){
var statearr_27733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27733[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25991__auto__);

(statearr_27733[(1)] = (1));

return statearr_27733;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25991__auto____1 = (function (state_27697){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_27697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e27734){if((e27734 instanceof Object)){
var ex__25994__auto__ = e27734;
var statearr_27735_27761 = state_27697;
(statearr_27735_27761[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27762 = state_27697;
state_27697 = G__27762;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25991__auto__ = function(state_27697){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25991__auto____1.call(this,state_27697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25991__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25991__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto__))
})();
var state__26083__auto__ = (function (){var statearr_27736 = f__26082__auto__.call(null);
(statearr_27736[(6)] = c__26081__auto__);

return statearr_27736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto__))
);

return c__26081__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27764 = arguments.length;
switch (G__27764) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27767 = arguments.length;
switch (G__27767) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27770 = arguments.length;
switch (G__27770) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26081__auto___27817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___27817,out){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___27817,out){
return (function (state_27794){
var state_val_27795 = (state_27794[(1)]);
if((state_val_27795 === (7))){
var inst_27789 = (state_27794[(2)]);
var state_27794__$1 = state_27794;
var statearr_27796_27818 = state_27794__$1;
(statearr_27796_27818[(2)] = inst_27789);

(statearr_27796_27818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (1))){
var inst_27771 = null;
var state_27794__$1 = (function (){var statearr_27797 = state_27794;
(statearr_27797[(7)] = inst_27771);

return statearr_27797;
})();
var statearr_27798_27819 = state_27794__$1;
(statearr_27798_27819[(2)] = null);

(statearr_27798_27819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (4))){
var inst_27774 = (state_27794[(8)]);
var inst_27774__$1 = (state_27794[(2)]);
var inst_27775 = (inst_27774__$1 == null);
var inst_27776 = cljs.core.not.call(null,inst_27775);
var state_27794__$1 = (function (){var statearr_27799 = state_27794;
(statearr_27799[(8)] = inst_27774__$1);

return statearr_27799;
})();
if(inst_27776){
var statearr_27800_27820 = state_27794__$1;
(statearr_27800_27820[(1)] = (5));

} else {
var statearr_27801_27821 = state_27794__$1;
(statearr_27801_27821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (6))){
var state_27794__$1 = state_27794;
var statearr_27802_27822 = state_27794__$1;
(statearr_27802_27822[(2)] = null);

(statearr_27802_27822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (3))){
var inst_27791 = (state_27794[(2)]);
var inst_27792 = cljs.core.async.close_BANG_.call(null,out);
var state_27794__$1 = (function (){var statearr_27803 = state_27794;
(statearr_27803[(9)] = inst_27791);

return statearr_27803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27794__$1,inst_27792);
} else {
if((state_val_27795 === (2))){
var state_27794__$1 = state_27794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27794__$1,(4),ch);
} else {
if((state_val_27795 === (11))){
var inst_27774 = (state_27794[(8)]);
var inst_27783 = (state_27794[(2)]);
var inst_27771 = inst_27774;
var state_27794__$1 = (function (){var statearr_27804 = state_27794;
(statearr_27804[(7)] = inst_27771);

(statearr_27804[(10)] = inst_27783);

return statearr_27804;
})();
var statearr_27805_27823 = state_27794__$1;
(statearr_27805_27823[(2)] = null);

(statearr_27805_27823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (9))){
var inst_27774 = (state_27794[(8)]);
var state_27794__$1 = state_27794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27794__$1,(11),out,inst_27774);
} else {
if((state_val_27795 === (5))){
var inst_27771 = (state_27794[(7)]);
var inst_27774 = (state_27794[(8)]);
var inst_27778 = cljs.core._EQ_.call(null,inst_27774,inst_27771);
var state_27794__$1 = state_27794;
if(inst_27778){
var statearr_27807_27824 = state_27794__$1;
(statearr_27807_27824[(1)] = (8));

} else {
var statearr_27808_27825 = state_27794__$1;
(statearr_27808_27825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (10))){
var inst_27786 = (state_27794[(2)]);
var state_27794__$1 = state_27794;
var statearr_27809_27826 = state_27794__$1;
(statearr_27809_27826[(2)] = inst_27786);

(statearr_27809_27826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27795 === (8))){
var inst_27771 = (state_27794[(7)]);
var tmp27806 = inst_27771;
var inst_27771__$1 = tmp27806;
var state_27794__$1 = (function (){var statearr_27810 = state_27794;
(statearr_27810[(7)] = inst_27771__$1);

return statearr_27810;
})();
var statearr_27811_27827 = state_27794__$1;
(statearr_27811_27827[(2)] = null);

(statearr_27811_27827[(1)] = (2));


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
});})(c__26081__auto___27817,out))
;
return ((function (switch__25990__auto__,c__26081__auto___27817,out){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_27812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27812[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_27812[(1)] = (1));

return statearr_27812;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_27794){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_27794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e27813){if((e27813 instanceof Object)){
var ex__25994__auto__ = e27813;
var statearr_27814_27828 = state_27794;
(statearr_27814_27828[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27829 = state_27794;
state_27794 = G__27829;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_27794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_27794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___27817,out))
})();
var state__26083__auto__ = (function (){var statearr_27815 = f__26082__auto__.call(null);
(statearr_27815[(6)] = c__26081__auto___27817);

return statearr_27815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___27817,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27831 = arguments.length;
switch (G__27831) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26081__auto___27897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___27897,out){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___27897,out){
return (function (state_27869){
var state_val_27870 = (state_27869[(1)]);
if((state_val_27870 === (7))){
var inst_27865 = (state_27869[(2)]);
var state_27869__$1 = state_27869;
var statearr_27871_27898 = state_27869__$1;
(statearr_27871_27898[(2)] = inst_27865);

(statearr_27871_27898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (1))){
var inst_27832 = (new Array(n));
var inst_27833 = inst_27832;
var inst_27834 = (0);
var state_27869__$1 = (function (){var statearr_27872 = state_27869;
(statearr_27872[(7)] = inst_27834);

(statearr_27872[(8)] = inst_27833);

return statearr_27872;
})();
var statearr_27873_27899 = state_27869__$1;
(statearr_27873_27899[(2)] = null);

(statearr_27873_27899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (4))){
var inst_27837 = (state_27869[(9)]);
var inst_27837__$1 = (state_27869[(2)]);
var inst_27838 = (inst_27837__$1 == null);
var inst_27839 = cljs.core.not.call(null,inst_27838);
var state_27869__$1 = (function (){var statearr_27874 = state_27869;
(statearr_27874[(9)] = inst_27837__$1);

return statearr_27874;
})();
if(inst_27839){
var statearr_27875_27900 = state_27869__$1;
(statearr_27875_27900[(1)] = (5));

} else {
var statearr_27876_27901 = state_27869__$1;
(statearr_27876_27901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (15))){
var inst_27859 = (state_27869[(2)]);
var state_27869__$1 = state_27869;
var statearr_27877_27902 = state_27869__$1;
(statearr_27877_27902[(2)] = inst_27859);

(statearr_27877_27902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (13))){
var state_27869__$1 = state_27869;
var statearr_27878_27903 = state_27869__$1;
(statearr_27878_27903[(2)] = null);

(statearr_27878_27903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (6))){
var inst_27834 = (state_27869[(7)]);
var inst_27855 = (inst_27834 > (0));
var state_27869__$1 = state_27869;
if(cljs.core.truth_(inst_27855)){
var statearr_27879_27904 = state_27869__$1;
(statearr_27879_27904[(1)] = (12));

} else {
var statearr_27880_27905 = state_27869__$1;
(statearr_27880_27905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (3))){
var inst_27867 = (state_27869[(2)]);
var state_27869__$1 = state_27869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27869__$1,inst_27867);
} else {
if((state_val_27870 === (12))){
var inst_27833 = (state_27869[(8)]);
var inst_27857 = cljs.core.vec.call(null,inst_27833);
var state_27869__$1 = state_27869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27869__$1,(15),out,inst_27857);
} else {
if((state_val_27870 === (2))){
var state_27869__$1 = state_27869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27869__$1,(4),ch);
} else {
if((state_val_27870 === (11))){
var inst_27849 = (state_27869[(2)]);
var inst_27850 = (new Array(n));
var inst_27833 = inst_27850;
var inst_27834 = (0);
var state_27869__$1 = (function (){var statearr_27881 = state_27869;
(statearr_27881[(10)] = inst_27849);

(statearr_27881[(7)] = inst_27834);

(statearr_27881[(8)] = inst_27833);

return statearr_27881;
})();
var statearr_27882_27906 = state_27869__$1;
(statearr_27882_27906[(2)] = null);

(statearr_27882_27906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (9))){
var inst_27833 = (state_27869[(8)]);
var inst_27847 = cljs.core.vec.call(null,inst_27833);
var state_27869__$1 = state_27869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27869__$1,(11),out,inst_27847);
} else {
if((state_val_27870 === (5))){
var inst_27834 = (state_27869[(7)]);
var inst_27837 = (state_27869[(9)]);
var inst_27833 = (state_27869[(8)]);
var inst_27842 = (state_27869[(11)]);
var inst_27841 = (inst_27833[inst_27834] = inst_27837);
var inst_27842__$1 = (inst_27834 + (1));
var inst_27843 = (inst_27842__$1 < n);
var state_27869__$1 = (function (){var statearr_27883 = state_27869;
(statearr_27883[(12)] = inst_27841);

(statearr_27883[(11)] = inst_27842__$1);

return statearr_27883;
})();
if(cljs.core.truth_(inst_27843)){
var statearr_27884_27907 = state_27869__$1;
(statearr_27884_27907[(1)] = (8));

} else {
var statearr_27885_27908 = state_27869__$1;
(statearr_27885_27908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (14))){
var inst_27862 = (state_27869[(2)]);
var inst_27863 = cljs.core.async.close_BANG_.call(null,out);
var state_27869__$1 = (function (){var statearr_27887 = state_27869;
(statearr_27887[(13)] = inst_27862);

return statearr_27887;
})();
var statearr_27888_27909 = state_27869__$1;
(statearr_27888_27909[(2)] = inst_27863);

(statearr_27888_27909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (10))){
var inst_27853 = (state_27869[(2)]);
var state_27869__$1 = state_27869;
var statearr_27889_27910 = state_27869__$1;
(statearr_27889_27910[(2)] = inst_27853);

(statearr_27889_27910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27870 === (8))){
var inst_27833 = (state_27869[(8)]);
var inst_27842 = (state_27869[(11)]);
var tmp27886 = inst_27833;
var inst_27833__$1 = tmp27886;
var inst_27834 = inst_27842;
var state_27869__$1 = (function (){var statearr_27890 = state_27869;
(statearr_27890[(7)] = inst_27834);

(statearr_27890[(8)] = inst_27833__$1);

return statearr_27890;
})();
var statearr_27891_27911 = state_27869__$1;
(statearr_27891_27911[(2)] = null);

(statearr_27891_27911[(1)] = (2));


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
});})(c__26081__auto___27897,out))
;
return ((function (switch__25990__auto__,c__26081__auto___27897,out){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_27892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27892[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_27892[(1)] = (1));

return statearr_27892;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_27869){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_27869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e27893){if((e27893 instanceof Object)){
var ex__25994__auto__ = e27893;
var statearr_27894_27912 = state_27869;
(statearr_27894_27912[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27913 = state_27869;
state_27869 = G__27913;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_27869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_27869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___27897,out))
})();
var state__26083__auto__ = (function (){var statearr_27895 = f__26082__auto__.call(null);
(statearr_27895[(6)] = c__26081__auto___27897);

return statearr_27895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___27897,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27915 = arguments.length;
switch (G__27915) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26081__auto___27985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26081__auto___27985,out){
return (function (){
var f__26082__auto__ = (function (){var switch__25990__auto__ = ((function (c__26081__auto___27985,out){
return (function (state_27957){
var state_val_27958 = (state_27957[(1)]);
if((state_val_27958 === (7))){
var inst_27953 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27959_27986 = state_27957__$1;
(statearr_27959_27986[(2)] = inst_27953);

(statearr_27959_27986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (1))){
var inst_27916 = [];
var inst_27917 = inst_27916;
var inst_27918 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27957__$1 = (function (){var statearr_27960 = state_27957;
(statearr_27960[(7)] = inst_27917);

(statearr_27960[(8)] = inst_27918);

return statearr_27960;
})();
var statearr_27961_27987 = state_27957__$1;
(statearr_27961_27987[(2)] = null);

(statearr_27961_27987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (4))){
var inst_27921 = (state_27957[(9)]);
var inst_27921__$1 = (state_27957[(2)]);
var inst_27922 = (inst_27921__$1 == null);
var inst_27923 = cljs.core.not.call(null,inst_27922);
var state_27957__$1 = (function (){var statearr_27962 = state_27957;
(statearr_27962[(9)] = inst_27921__$1);

return statearr_27962;
})();
if(inst_27923){
var statearr_27963_27988 = state_27957__$1;
(statearr_27963_27988[(1)] = (5));

} else {
var statearr_27964_27989 = state_27957__$1;
(statearr_27964_27989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (15))){
var inst_27947 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27965_27990 = state_27957__$1;
(statearr_27965_27990[(2)] = inst_27947);

(statearr_27965_27990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (13))){
var state_27957__$1 = state_27957;
var statearr_27966_27991 = state_27957__$1;
(statearr_27966_27991[(2)] = null);

(statearr_27966_27991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (6))){
var inst_27917 = (state_27957[(7)]);
var inst_27942 = inst_27917.length;
var inst_27943 = (inst_27942 > (0));
var state_27957__$1 = state_27957;
if(cljs.core.truth_(inst_27943)){
var statearr_27967_27992 = state_27957__$1;
(statearr_27967_27992[(1)] = (12));

} else {
var statearr_27968_27993 = state_27957__$1;
(statearr_27968_27993[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (3))){
var inst_27955 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27957__$1,inst_27955);
} else {
if((state_val_27958 === (12))){
var inst_27917 = (state_27957[(7)]);
var inst_27945 = cljs.core.vec.call(null,inst_27917);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27957__$1,(15),out,inst_27945);
} else {
if((state_val_27958 === (2))){
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27957__$1,(4),ch);
} else {
if((state_val_27958 === (11))){
var inst_27921 = (state_27957[(9)]);
var inst_27925 = (state_27957[(10)]);
var inst_27935 = (state_27957[(2)]);
var inst_27936 = [];
var inst_27937 = inst_27936.push(inst_27921);
var inst_27917 = inst_27936;
var inst_27918 = inst_27925;
var state_27957__$1 = (function (){var statearr_27969 = state_27957;
(statearr_27969[(7)] = inst_27917);

(statearr_27969[(11)] = inst_27937);

(statearr_27969[(12)] = inst_27935);

(statearr_27969[(8)] = inst_27918);

return statearr_27969;
})();
var statearr_27970_27994 = state_27957__$1;
(statearr_27970_27994[(2)] = null);

(statearr_27970_27994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (9))){
var inst_27917 = (state_27957[(7)]);
var inst_27933 = cljs.core.vec.call(null,inst_27917);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27957__$1,(11),out,inst_27933);
} else {
if((state_val_27958 === (5))){
var inst_27921 = (state_27957[(9)]);
var inst_27925 = (state_27957[(10)]);
var inst_27918 = (state_27957[(8)]);
var inst_27925__$1 = f.call(null,inst_27921);
var inst_27926 = cljs.core._EQ_.call(null,inst_27925__$1,inst_27918);
var inst_27927 = cljs.core.keyword_identical_QMARK_.call(null,inst_27918,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27928 = ((inst_27926) || (inst_27927));
var state_27957__$1 = (function (){var statearr_27971 = state_27957;
(statearr_27971[(10)] = inst_27925__$1);

return statearr_27971;
})();
if(cljs.core.truth_(inst_27928)){
var statearr_27972_27995 = state_27957__$1;
(statearr_27972_27995[(1)] = (8));

} else {
var statearr_27973_27996 = state_27957__$1;
(statearr_27973_27996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (14))){
var inst_27950 = (state_27957[(2)]);
var inst_27951 = cljs.core.async.close_BANG_.call(null,out);
var state_27957__$1 = (function (){var statearr_27975 = state_27957;
(statearr_27975[(13)] = inst_27950);

return statearr_27975;
})();
var statearr_27976_27997 = state_27957__$1;
(statearr_27976_27997[(2)] = inst_27951);

(statearr_27976_27997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (10))){
var inst_27940 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27977_27998 = state_27957__$1;
(statearr_27977_27998[(2)] = inst_27940);

(statearr_27977_27998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (8))){
var inst_27921 = (state_27957[(9)]);
var inst_27917 = (state_27957[(7)]);
var inst_27925 = (state_27957[(10)]);
var inst_27930 = inst_27917.push(inst_27921);
var tmp27974 = inst_27917;
var inst_27917__$1 = tmp27974;
var inst_27918 = inst_27925;
var state_27957__$1 = (function (){var statearr_27978 = state_27957;
(statearr_27978[(7)] = inst_27917__$1);

(statearr_27978[(8)] = inst_27918);

(statearr_27978[(14)] = inst_27930);

return statearr_27978;
})();
var statearr_27979_27999 = state_27957__$1;
(statearr_27979_27999[(2)] = null);

(statearr_27979_27999[(1)] = (2));


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
});})(c__26081__auto___27985,out))
;
return ((function (switch__25990__auto__,c__26081__auto___27985,out){
return (function() {
var cljs$core$async$state_machine__25991__auto__ = null;
var cljs$core$async$state_machine__25991__auto____0 = (function (){
var statearr_27980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27980[(0)] = cljs$core$async$state_machine__25991__auto__);

(statearr_27980[(1)] = (1));

return statearr_27980;
});
var cljs$core$async$state_machine__25991__auto____1 = (function (state_27957){
while(true){
var ret_value__25992__auto__ = (function (){try{while(true){
var result__25993__auto__ = switch__25990__auto__.call(null,state_27957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25993__auto__;
}
break;
}
}catch (e27981){if((e27981 instanceof Object)){
var ex__25994__auto__ = e27981;
var statearr_27982_28000 = state_27957;
(statearr_27982_28000[(5)] = ex__25994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28001 = state_27957;
state_27957 = G__28001;
continue;
} else {
return ret_value__25992__auto__;
}
break;
}
});
cljs$core$async$state_machine__25991__auto__ = function(state_27957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25991__auto____1.call(this,state_27957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25991__auto____0;
cljs$core$async$state_machine__25991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25991__auto____1;
return cljs$core$async$state_machine__25991__auto__;
})()
;})(switch__25990__auto__,c__26081__auto___27985,out))
})();
var state__26083__auto__ = (function (){var statearr_27983 = f__26082__auto__.call(null);
(statearr_27983[(6)] = c__26081__auto___27985);

return statearr_27983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26083__auto__);
});})(c__26081__auto___27985,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1534986035238
