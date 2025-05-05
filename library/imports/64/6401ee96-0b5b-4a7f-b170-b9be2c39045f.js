"use strict";
cc._RF.push(module, '6401e6WC1tKf7Fwub4sOQRf', 'LivingThingBase');
// scripts/LivingThingBase.js

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
    c = e("ListenID"),
    l = e("ElementBase"),
    p = e("AIState"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = l.ElementBase, i(d, r), d.prototype.onLoad = function () {
  this.mySkeleton = this.node.children[1] && this.node.children[1].getComponent(sp.Skeleton), this.node.on(c.ListenID.Send_Hurt, this.getHurt, this), s["default"].GScene.node.on(c.ListenID.Game_Pause, this.onGamePause, this);
}, d.prototype.init = function () {}, d.prototype.setOwer = function (e) {
  var o = this;
  this._owerID = e.roleID, this.lifeBar && cc.resources.load("img/gameResources/blood_" + (s["default"].GScene.player && e.roleID == s["default"].GScene.player.roleID ? "green" : "red"), cc.SpriteFrame, function (e, t) {
    o.lifeBar && (o.lifeBar.node.children[0].getComponent(cc.Sprite).spriteFrame = t);
  });
}, d.prototype.initAttribute = function (e, t) {
  this.setAttribute(e), t && this.setOwer(t);
}, d.prototype.setAttribute = function (e) {
  this.attribute = {
    lv: e.level,
    data: e
  }, this._exp = 0, this._life = e.hp || 1, this._lifeRatio = 1, this.getZIndex();
}, d.prototype.setExp = function () {}, d.prototype.setLife = function (e) {
  r.prototype.setLife.call(this, e), this._life <= 0 && this.setDestroyed(e);
}, d.prototype.setSkin = function (e, o) {
  var n = this;
  cc.resources.load(e, sp.SkeletonData, function (e, t) {
    return t ? n.mySkeleton ? (n.mySkeleton.skeletonData = t, n.myFSM && n.myFSM.currentState == p.StateType.Move ? n.setAnimation("move", !0) : n.setAnimation("idle", !0), void (o && o())) : cc.log("没有对象") : cc.log("下载失败");
  });
}, a([e], d));

function d() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e._exp = 0, e._energy = 0, e._initTime = 0, e.myAtkTargetID = 0, e.oldAtkTargetID = 0, e;
}

o["default"] = e;

cc._RF.pop();