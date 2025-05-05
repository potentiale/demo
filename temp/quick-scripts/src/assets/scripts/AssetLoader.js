"use strict";
cc._RF.push(module, '5b6cclOVaJEPIZ6MR9WjhI1', 'AssetLoader');
// scripts/AssetLoader.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.assetLoader = o.LoadResArgs = void 0;

function n() {}

var i = e("ResKeeper"),
    a = e("Log");
o.LoadResArgs = n;
var r = (r = cc.js.isChildClassOf) || cc.isChildClassOf,
    e = (s.makeLoadResArgs = function () {
  if (arguments.length < 1) return a.Log.error("_makeLoadResArgs error " + arguments), null;
  if (1 == arguments.length && arguments[0] instanceof n) return arguments[0];
  var e = {};
  if ("string" == typeof arguments[0]) e.url = arguments[0];else {
    if (!(arguments[0] instanceof Array)) return a.Log.error("_makeLoadResArgs error " + arguments), null;
    e.urls = arguments[0];
  }

  for (var t = 1; t < arguments.length; ++t) {
    1 == t && r(arguments[t], cc.Asset) ? e.type = arguments[t] : t == arguments.length - 1 && arguments[t] instanceof cc.AssetManager.Bundle ? e.bundle = arguments[t] : "function" == typeof arguments[t] && (t + 1 < arguments.length && "function" == typeof arguments[t + 1] ? e.onProgess = arguments[t] : e.onCompleted = arguments[t]);
  }

  return e.bundle || (e.bundle = cc.resources), e;
}, s.prototype._finishItem = function () {}, s.prototype.loadRes = function () {
  function e(e, t) {
    e || n._finishItem(i.url, i.type, i.use, o), i.onCompleted && i.onCompleted(e, t);
  }

  var o,
      n = this,
      i = s.makeLoadResArgs.apply(this, arguments),
      t = i.bundle.get(i.url, i.type);
  t ? e(null, t) : i.url.startsWith("https:") ? cc.assetManager.loadRemote(i.url, e) : i.bundle.load(i.url, i.type, i.onProgess, e);
}, s.prototype.preloadRes = function () {
  function e(e, t) {
    e || n._finishItem(i.url, i.type, i.use, o), i.onCompleted && i.onCompleted(e, t);
  }

  var o,
      n = this,
      i = s.makeLoadResArgs.apply(this, arguments),
      t = i.bundle.get(i.url, i.type);
  t ? e(null, t) : i.bundle.preload(i.url, i.type, i.onProgess, e);
}, s.prototype.loadArray = function () {
  var n,
      i = this,
      a = s.makeLoadResArgs.apply(this, arguments);
  a.bundle.load(a.urls, a.type, a.onProgess, function (e, t) {
    if (!e) for (var o = 0; o < a.urls.length; ++o) {
      i._finishItem(a.urls[o], a.type, a.use, n);
    }
    a.onCompleted && a.onCompleted(e, t);
  });
}, s.prototype.loadResDir = function () {
  var n,
      i = this,
      a = s.makeLoadResArgs.apply(this, arguments);
  a.bundle.loadDir(a.url, a.type, a.onProgess, function (e, t) {
    var o = a.bundle.getDirWithPath(a.url, a.type);
    !e && o && o.map(function (e) {
      i._finishItem(e.path, a.type, a.use, n);
    }), a.onCompleted && a.onCompleted(e, t);
  });
}, s.prototype.releaseAsset = function (e) {
  e && cc.assetManager.releaseAsset(e);
}, s.prototype.getResKeeper = function () {
  return this._resKeeper || (this._resKeeper = new i["default"]()), this._resKeeper;
}, s);

function s() {
  this._resKeeper = null;
}

o["default"] = e, o.assetLoader = new e();

cc._RF.pop();