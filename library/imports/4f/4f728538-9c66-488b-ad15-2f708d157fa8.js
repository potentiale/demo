"use strict";
cc._RF.push(module, '4f728U4nGZIi60VL3CNFX+o', 'LoadingView');
// scripts/LoadingView.js

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
    s = e("AppCommon"),
    c = e("BaseSdk"),
    l = e("PlatformFun"),
    t = cc._decorator,
    e = t.ccclass,
    t = t.property,
    e = (r = cc.Component, i(p, r), p.prototype.onLoad = function () {
  this.node.children[0].children[0].active = s["default"].PF != c.GAMEPF.WX && !c.GAMEPF.isADR(), this.node.opacity = 255;
}, p.prototype.start = function () {
  var e = this;
  cc.tween(this.bar).to(s["default"].PF == c.GAMEPF.WEB ? .2 : 1.3, {
    progress: 1
  }).call(function () {
    cc.tween(e.node).to(.3, {
      opacity: 0
    }).call(function () {
      e.node.destroy(), s["default"].PF == c.GAMEPF.WX && l.PlatformFun.showBannerAd();
    }).start();
  }).start(), cc.resources.preloadDir("prefab/pop", cc.Prefab);
}, a([t(cc.ProgressBar)], p.prototype, "bar", void 0), a([e], p));

function p() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.bar = null, e;
}

o["default"] = e;

cc._RF.pop();