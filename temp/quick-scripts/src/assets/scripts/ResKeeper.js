"use strict";
cc._RF.push(module, '36d53hq15FDtrW9H8Rnsrw5', 'ResKeeper');
// scripts/ResKeeper.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var _n,
    i = void 0 && (void 0).__extends || (_n = function n(e, t) {
  return (_n = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var o in t) {
      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
  })(e, t);
}, function (e, t) {
  function o() {
    this.constructor = e;
  }

  _n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}),
    a = void 0 && (void 0).__decorate || function (e, t, o, n) {
  var i,
      a = arguments.length,
      r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);else for (var s = e.length - 1; 0 <= s; s--) {
    (i = e[s]) && (r = (a < 3 ? i(r) : 3 < a ? i(t, o, r) : i(t, o)) || r);
  }
  return 3 < a && r && Object.defineProperty(t, o, r), r;
};

Object.defineProperty(o, "__esModule", {
  value: !0
});
var r,
    s = cc._decorator,
    t = s.ccclass,
    t = (s.property, r = cc.Component, i(c, r), c.prototype.onDestroy = function () {
  this.releaseAutoRes();
}, c.prototype.releaseAutoRes = function () {
  for (var e = 0; e < this.autoRes.length; e++) {
    var t = this.autoRes[e];
    t.asset && (t.asset.decRef(), t.asset = null);
  }

  this.autoRes = null;
}, c.prototype.autoReleaseRes = function (e) {
  e.asset.addRef(), this.autoRes.push(e);
}, a([t], c));

function c() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.autoRes = [], e;
}

o["default"] = t;

cc._RF.pop();