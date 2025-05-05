"use strict";
cc._RF.push(module, '32941byoOFPA4Yrb9+2eLBk', 'Battery');
// scripts/Battery.js

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
    p = e("ConstructBase"),
    d = e("ElementBase"),
    u = cc._decorator,
    t = u.ccclass,
    e = u.menu,
    e = (u.property, r = p["default"], i(f, r), f.prototype.onInit = function () {
  var o = this;
  this.upAttackSpeed(500), this.imgList[0] = this.node.children[0].getComponent(cc.Sprite), this.imgList[1] = this.node.children[1].getComponent(cc.Sprite), s["default"].MapClr.myMap.node.on(l.ListenID.Monster_Skill, function (t) {
    o._isActive && 2 == t.type && s["default"].getDistance(o.node.position, s["default"].MapClr.monsterList[0].node.position) < t.parameter[0] && s["default"].MapClr.newEffects(o.node.position, "dizzy", function (e) {
      e.setParent(o.node), e.setPosition(0, 0), e.zIndex = o.node.zIndex + 1, o.setState(!1), o.scheduleOnce(function () {
        o.setState(!0), s["default"].MapClr.deleteNode(e);
      }, t.last);
    });
  }, this);
}, f.prototype.setConstructImg = function () {
  var o = this;
  cc.resources.load("img/gameResources/base0" + this.attribute.data.parameter[0], cc.SpriteFrame, function (e, t) {
    o.imgList && o.imgList[0] && (o.imgList[0].spriteFrame = t);
  }), cc.resources.load("img/gameResources/" + this.attribute.data.id, cc.SpriteFrame, function (e, t) {
    o.imgList && o.imgList[1] && (o.imgList[1].spriteFrame = t);
  });
}, f.prototype.update = function (e) {
  !s["default"].GScene.isPause && this._isHaveUpDate && (this._time += e, this._time > this._attackSpeed) && ((e = s["default"].weightGetValue(this.searchRecentMoster())) && (this.upAttackSpeed(e.d), this.setHurt(s["default"].MapClr.monsterList[e.i])), this._time = 0);
}, f.prototype.upAttackSpeed = function (e) {
  var t, o, n;
  this.attribute.data.frequency <= 0 || (o = (t = 1 / this.attribute.data.frequency) * (this.ower.myBuildNum[19] * s["default"].MapClr.arcIDList[19].parameter[0] || 0), n = s["default"].MapClr.arcIDList[20].parameter, n = t * ((this.attribute.data.atkRadius - e) / n[0] * n[1] * this.ower.myBuildNum[20] || 0), this._attackSpeed = 1 / (t + o + n), this._attackRadius = this.attribute.data.atkRadius * (1 + (this.ower.myBuildNum[18] * s["default"].MapClr.arcIDList[18].parameter[0] || 0)));
}, f.prototype.setHurt = function (n) {
  var i = this,
      e = s["default"].getAngle(n.node.position, this.node.position) - 90,
      a = this.attribute.data.atk;
  cc.tween(this.imgList[1].node).to(.2, {
    angle: e
  }).call(function () {
    c.CCTool.Audio.CameraPlayer(i.node.position, "Tower_Attack");
    var e = i.ower.roleID,
        t = i.ower.type,
        o = new d.HurtData(-a, e, t);
    s["default"].MapClr.newBullet(i.node.position, {
      tag: n,
      img: "bullet0" + i.attribute.data.parameter[1],
      speed: 400,
      owerID: i._owerID,
      hurtData: o,
      call: function call() {
        var e;
        n.node.emit(l.ListenID.Send_Hurt, o), i.ower && i.ower._canStealMoney && (e = i.attribute.lv * i.attribute.data.parameter[0], e *= i.ower.outputRatio, i.ower.setCoin(e), c.CCTool.System.InCamera(i.node.position) && s["default"].MapClr.newLabelTips("+" + e, i.node.position, cc.Color.YELLOW, "Fish coin"));
      }
    });
  }).start();
}, a([t, e("gameElement/Battery")], f));

function f() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e._time = 0, e;
}

o["default"] = e;

cc._RF.pop();