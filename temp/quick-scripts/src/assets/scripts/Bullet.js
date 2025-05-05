"use strict";
cc._RF.push(module, '859a9fumhVH/4pvzKjNggNF', 'Bullet');
// scripts/Bullet.js

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
    c = e("CCTool"),
    l = e("ListenID"),
    t = cc._decorator,
    e = t.ccclass;
t.property, (t = r = r || {})[t.Not = 0] = "Not", t[t.TRACK = 1] = "TRACK", t[t.DIRECTION = 2] = "DIRECTION";
var p,
    e = (p = cc.Component, i(d, p), d.prototype.onLoad = function () {
  this.img = this.node.getComponent(cc.Sprite);
}, d.prototype.getZIndex = function () {
  this.node.zIndex = s["default"].MapClr.mapSize.height - (Math.floor(this.node.y / s["default"].MapClr.tileSize.height) + s["default"].MapClr.mapSize.height / 2);
}, d.prototype.call = function () {}, d.prototype.setBullet = function (e) {
  var t,
      o = this;
  this.setData = e, this.bulletType = r.TRACK, this.checkTagIsDelety() || (this.call = e.call, this.targetPos = this.setData.tag.node.position.clone(), this.isActive = !0, t = s["default"].getAngle(this.node.position, e.tag.node.position) + 90, this.node.angle = t, cc.resources.load("img/gameResources/" + e.img, cc.SpriteFrame, function (e, t) {
    o.img.spriteFrame = t;
  }), this.getZIndex());
}, d.prototype.setBullet_2 = function (e) {
  var o = this;
  this.setData = e, this.bulletType = r.DIRECTION, this.call = e.call, this.isActive = !0, cc.resources.load("img/gameResources/" + e.img, cc.SpriteFrame, function (e, t) {
    o.img.spriteFrame = t;
  });
}, d.prototype.onHit = function () {
  this.checkTagIsDelety() || (s["default"].MapClr.newEffects(this.node.position, "onHit"), this.call(), this.deleteNode());
}, d.prototype.checkTagIsDelety = function () {
  return !(this.setData.tag && this.setData.tag.node || (this.deleteNode(), 0));
}, d.prototype.deleteNode = function () {
  this.isActive = !1, this.node.active = !1, this.node._pool.ReturnPool(this.node);
}, d.prototype.update = function (e) {
  s["default"].GScene.isPause || this.isActive && this.bulletType && this.onUpdata[this.bulletType](e);
}, d.prototype.onCollisionEnter = function (e) {
  e.node.emit(l.ListenID.Send_Hurt, this.setData.hurtData), s["default"].MapClr.newEffects(this.node.position, "onHit"), this.call(), this.deleteNode();
}, a([e], d));

function d() {
  var e,
      n = null !== p && p.apply(this, arguments) || this;
  return n.onUpdata = ((e = {})[r.TRACK] = function (e) {
    n.setData.tag && n.setData.tag.node && (n.targetPos = n.setData.tag.node.position.clone());
    var t = n.node.position,
        o = n.targetPos.sub(t).normalize(),
        e = t.add(o.mul(n.setData.speed * e * 2));
    n.node.setPosition(e), s["default"].getDistance(n.targetPos, t) < 20 && n.onHit();
  }, e[r.DIRECTION] = function (e) {
    if (n.node.y += n.setData.speed * e, !c.CCTool.System.InCamera(n.node.position)) return n.deleteNode();
  }, e), n;
}

o["default"] = e;

cc._RF.pop();