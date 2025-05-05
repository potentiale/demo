"use strict";
cc._RF.push(module, '6c798d9ZXZIFYkZ6VowlPa7', 'Log');
// scripts/Log.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var n = void 0 && (void 0).__spreadArrays || function () {
  for (var e = 0, t = 0, o = arguments.length; t < o; t++) {
    e += arguments[t].length;
  }

  for (var n = Array(e), i = 0, t = 0; t < o; t++) {
    for (var a = arguments[t], r = 0, s = a.length; r < s; r++, i++) {
      n[i] = a[r];
    }
  }

  return n;
};

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.Log = void 0;
i.prototype.setLogEnable = function (e) {
  this._enableLog = e;
}, i.prototype.log = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).log.apply(e, n(["[Log]:"], t));
}, i.prototype.debug = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).debug.apply(e, n(["[Debug]:"], t));
}, i.prototype.warn = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).warn.apply(e, n(["[Warn]:"], t));
}, i.prototype.error = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).error.apply(e, n(["[Error]:"], t));
}, i.prototype.time = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).time.apply(e, n(["[TimeStart]:"], t));
}, i.prototype.timeEnd = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).time.apply(e, n(["[TimeEnd]:"], t));
}, t = i;

function i() {
  this._log = cc, this._enableLog = !1;
}

o.Log = new t();

cc._RF.pop();