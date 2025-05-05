"use strict";
cc._RF.push(module, '34db6nMsIFPY5YopW3Wmkxb', 'TouchMoveCamera');
// scripts/TouchMoveCamera.js

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
    e = (t.property, r = cc.Component, i(p, r), p.prototype.onLoad = function () {
  this.targetCamera = s["default"].GScene.GameCamera;
}, p.prototype.start = function () {}, p.prototype.onEnable = function () {
  this.node.on(cc.Node.EventType.TOUCH_START, this.TOUCH_START, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TOUCH_MOVE, this), this.node.on(cc.Node.EventType.TOUCH_END, this.TOUCH_END, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TOUCH_END, this);
}, p.prototype.onDisable = function () {
  this.node.off(cc.Node.EventType.TOUCH_START, this.TOUCH_START, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.TOUCH_MOVE, this), this.node.off(cc.Node.EventType.TOUCH_END, this.TOUCH_END, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.TOUCH_END, this);
}, p.prototype.TOUCH_START = function (e) {
  var t = e.getTouches(),
      e = e.getLocation();
  this.startPoint = e, 2 == t.length && (this.isScale = !0, cc.log(this.isScale)), this.oldPos = null, s["default"].data.cameraMoveNum = 0;
}, p.prototype.TOUCH_MOVE = function (e) {
  var t,
      o = e.getTouches(),
      n = e.getLocation();
  2 == o.length ? (e = o[0].getLocation(), o = o[1].getLocation(), o = s["default"].getDistance(e, o), this.zoomRatioDistance && (t = (this.zoomRatioDistance - o) / 800, this.setZoomRatio(t), s["default"].data.cameraMoveNum = 20), this.zoomRatioDistance = o, this.isScale = !0) : !this.isScale && this.oldPos && (t = this.oldPos.sub(n), this.setPos(t), s["default"].data.cameraMoveNum = s["default"].getDistance(this.startPoint, n)), this.oldPos = n;
}, p.prototype.TOUCH_END = function (e) {
  var t = e.getTouches();
  e.getLocation(), this.zoomRatioDistance = 0, t.length <= 1 && (this.isScale = !1), this.oldPos = null, s["default"].data.cameraMoveNum = 0, this._AD_FullClickNum++, s["default"].PF == c.GAMEPF.ADR_XM && this._AD_FullClickNum > s["default"].CONFIG_INFO.fullClickNum && (this._AD_FullClickNum = 0, l.PlatformFun.showInterstitialAd());
}, p.prototype.setPos = function (e, t, o) {
  void 0 === t && (t = !0), void 0 === o && (o = !1);
  var n = s["default"].getNewV2Pos(this.targetCamera.node.position);
  t ? (n.x += e.x / this.targetCamera.zoomRatio, n.y += e.y / this.targetCamera.zoomRatio) : n = e, o || this.targetCamera.node.setPosition(n);
}, p.prototype.setZoomRatio = function (e) {
  e && (1.3 < (e = this.targetCamera.zoomRatio - e) || e < .5 || (this.targetCamera.zoomRatio = e));
}, p.prototype.update = function () {}, a([e], p));

function p() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e._AD_FullClickNum = 0, e.toches = [], e.zoomRatioDistance = 0, e;
}

o["default"] = e;

cc._RF.pop();