"use strict";
cc._RF.push(module, '26d30CxzPRPA4nEnAmKlEpD', 'EggPhone');
// scripts/EggPhone.js

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
    l = e("PlatformFun"),
    p = e("ListenID"),
    d = e("Notifier"),
    u = e("Cfg"),
    f = e("GameScene"),
    h = e("AIMinMonster"),
    m = e("ModelManage"),
    y = e("EggBase"),
    g = e("GameElementBut"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = y["default"], i(_, r), _.prototype.onEnable = function () {
  d.Notifier.changeListener(!0, p.ListenID.Fight_GetHandSuccess, this.getHandSuccess, this);
}, _.prototype.onDisable = function () {
  d.Notifier.changeListener(!1, p.ListenID.Fight_GetHandSuccess, this.getHandSuccess, this);
}, _.prototype.start = function () {
  s["default"].GScene._GameModel === m.GAME_MODEL.BOSS_MODEL && this.schedule(this.searchPlayer, .3);
}, _.prototype.onTouch = function () {}, _.prototype.getHandSuccess = function (e) {
  e === this.baseId && (this.isTrigger = !0, this.but && this.but.hide(), this.unschedule(this.searchPlayer), this.newMonster(), l.PlatformFun.SendEvent("egg_phone"));
}, _.prototype.newMonster = function () {
  var n = this;
  s["default"].MapClr.newEffects(this.node.position, "delivery_17");
  var e = {
    id: s["default"].gettimestamp(null, "ms"),
    _pos: {
      x: this.node.x,
      y: this.node.y
    }
  },
      i = s["default"].weightGetValue(this._randomMonster);
  s["default"].MapClr.newMonster(e, "MinMonster", function (e) {
    var t = s["default"].MapClr.monsterList[0],
        o = (o = u.Cfg.Ghost1.get(i.v + t.attribute.lv - 1)) || u.Cfg.Ghost1.get(i.v);
    e.initAttribute(o, s["default"].MapClr.monsterList[0]), e.setSkin(o.RoleBones, function () {
      n.addAI(e, o);
    });
  });
}, _.prototype.addAI = function (e, t) {
  e.myFSM = e.addComponent(h["default"]), e.myFSM.initState(e, t);
}, _.prototype.searchPlayer = function () {
  var e,
      t = this;
  s["default"].GScene._GameState != f.GAME_STATE.Game || !s["default"].MapClr.myMap || !s["default"].MapClr.monsterList[0] || this.isTrigger || (e = s["default"].getDistanceSqrt(this.node.position, s["default"].MapClr.monsterList[0].node.position) < 1e4) != this.isShowBut && (this.isShowBut = e, this.isShowBut ? (e = s["default"].GScene.GameElementButPool.GetFormPool(s["default"].GScene.GamePopBox), this.but = e.getComponent(g["default"]), this.but.init(this.node, function () {
    c.CCTool.UI.OpenPop("prefab/pop/pop_GiveBossHand", t.baseId);
  }), this.but.setLabel("召集")) : (this.but && this.but.hide(), this.but = null));
}, a([e], _));

function _() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e._randomMonster = [{
    v: 900,
    w: 1
  }, {
    v: 910,
    w: 1
  }, {
    v: 920,
    w: 1
  }], e.isShowBut = !1, e.but = null, e.isTrigger = !1, e;
}

o["default"] = e;

cc._RF.pop();