"use strict";
cc._RF.push(module, '1db76oGQZZJEZe1lAgtleMv', 'WarChessManage');
// scripts/WarChessManage.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.WarChessManage = o.POINT_TYPE = o.ROUND_TYPE = void 0;
var n,
    f,
    h = e("AppCommon"),
    m = e("CCTool"),
    i = e("ListenID"),
    a = e("Cfg"),
    r = e("ElementBase"),
    s = e("WC_Battery"),
    c = e("WC_FreshBox"),
    l = e("WC_Monster"),
    p = e("WCTool"),
    y = null;
(e = n = o.ROUND_TYPE || (o.ROUND_TYPE = {}))[e.USER = 0] = "USER", e[e.BULLET = 1] = "BULLET", e[e.ENEMY = 2] = "ENEMY", (e = f = o.POINT_TYPE || (o.POINT_TYPE = {}))[e.Not = 0] = "Not", e[e.BIRTH = 1] = "BIRTH", e[e.WAREHOUSE = 2] = "WAREHOUSE", e[e.BATTLEFIELD = 3] = "BATTLEFIELD", e[e.ENEMY = 4] = "ENEMY";
d.prototype.init = function () {
  var e;
  this.myPreview_1 || ((e = new cc.Node("myPreview_1")).setParent(h["default"].MapClr.myMap.node), this.myPreview_1 = e.addComponent(cc.Sprite), e.zIndex = 10);
}, d.prototype.roundStart = function () {
  this.roundStartFun[this.roundType](), y.myMap.node.emit(i.ListenID.Round_Type, this.roundType);
}, d.prototype.roundEnd = function () {
  this.roundType = this.getRoundType(), this.roundStart();
}, d.prototype.getRoundType = function () {
  var e = this.roundOrder.indexOf(this.roundType);
  return this.roundOrder[e + 1] || this.roundOrder[0];
}, d.prototype.newMonster = function (o, n) {
  var i = this,
      e = o.data.isBoss ? 2 : 1;
  o.data.isBoss && (o._pos.x = h["default"].GetRandomNum(0, h["default"].MapClr.mapSize.width - 2) + .5);
  var a = y.getV2Pos(o._pos);
  cc.resources.load("prefab/game/Element/WC_Monster_" + e, cc.Prefab, function (e, t) {
    y.myMap && ((t = cc.instantiate(t)).setParent(y.ObjBox), t.setPosition(a.x, a.y), (t = t.addComponent(l["default"])).initAttribute(o.data), i.setPoint(t, f.ENEMY, o._pos), n && n(t));
  });
}, d.prototype.newFreshBox = function (o, n) {
  var i = this,
      a = y.getV2Pos(o._pos);
  cc.resources.load("prefab/game/Element/WC_FreshBox", cc.Prefab, function (e, t) {
    y.myMap && ((t = cc.instantiate(t)).setParent(y.ObjBox), t.setPosition(a.x, a.y), (t = t.addComponent(c["default"])).initAttribute(o.data), i.setPoint(t, f.ENEMY, o._pos), n && n(t));
  });
}, d.prototype.newBattery = function (o, n) {
  cc.resources.load("prefab/game/Element/WC_Battery", cc.Prefab, function (e, t) {
    y.myMap && ((t = cc.instantiate(t)).setParent(y.ObjBox), (t = t.addComponent(s["default"])).initAttribute(o.data), t.setFreshBox(!0), n && n(t));
  });
}, d.prototype.getBattery = function (o, n, t) {
  var i,
      a,
      r,
      s,
      c,
      l,
      p = this;
  void 0 === n && (n = null), void 0 === t && (t = null);

  function d() {
    i = p.getEmptyTag(f.BIRTH).arr[0], a = p.checkMinLv(o), r = p.checkCanUp(o);
  }

  d();

  function u(t) {
    var e = function e() {};

    n ? (c = y.getV2Pos(n), l = p.getPointType(n), p.setPoint(t, l, n, !1), t.setState(!0)) : e = p.isAutoSynthesis && r ? (c = y.getV2Pos(r._mapPos), function () {
      var e = p.checkCanUp(o);
      e && e.uuid == r.uuid ? (t.deleteNode(), p.synthesisItem(null, r)) : (d(), u(t));
    }) : i ? (c = y.getV2Pos(i), l = p.getPointType(i), p.setPoint(t, l, i, !1), t.setState(!0), function () {}) : a ? (s = a._mapPos, c = y.getV2Pos(s), l = p.getPointType(s), p.deletePoint(a), p.setPoint(t, l, s, !1), t.setState(!0), function () {
      h["default"].MapClr.newEffects(a.node.position.add(cc.v2(h["default"].GetRandomNum(-60, 60), h["default"].GetRandomNum(-60, 60))), "onHit"), cc.tween(a.node).to(.3, {
        position: cc.v2(t.node.x - 400, t.node.y - 400)
      }).call(function () {
        p.discardFish++, 1 == p.discardFish && m.CCTool.UI.OpenPop("prefab/pop/pop_M4_UnlockChoppingBlock"), a.deleteNode();
      }).start();
    }) : (s = {
      x: 2,
      y: 0
    }, c = y.getV2Pos(s), function () {
      h["default"].MapClr.newEffects(t.node.position.add(cc.v2(h["default"].GetRandomNum(-60, 60), h["default"].GetRandomNum(-60, 60))), "onHit"), cc.tween(t.node).to(.3, {
        position: cc.v2(t.node.x - 400, t.node.y - 400)
      }).call(function () {
        p.discardFish++, 1 == p.discardFish && m.CCTool.UI.OpenPop("prefab/pop/pop_M4_UnlockChoppingBlock"), t.deleteNode();
      }).start();
    }), cc.tween(t.node).to(.4, {
      position: c
    }).call(function () {
      e();
    }).start();
  }

  this.newBattery({
    data: o
  }, function (e) {
    t && e.node.setPosition(t), u(e);
  });
}, d.prototype.checkCanUp = function (e) {
  for (var t in this._PointList[f.BIRTH]) {
    t = this._PointList[f.BIRTH][t];
    if (t.attribute.lv == e.level) return t;
  }

  return null;
}, d.prototype.checkMinLv = function (e) {
  var t, o;

  for (o in this._PointList[f.BIRTH]) {
    var n = this._PointList[f.BIRTH][o];
    t && n.attribute.lv >= t.attribute.lv || n.attribute.lv < e.level && (t = n);
  }

  return t;
}, d.prototype.getMonsterData = function () {
  var e = this.monsterOrder,
      t = this.getTag().num;
  if (!(e < 8 ? 0 == t : e < 15 ? t < 2 : e < 30 ? 0 == t || 20 < h["default"].GetRandomNum(0, 80) : 30 <= e)) return null;
  t = (e += 1) % 10 == 0 && 0 != e, e = (1 == e ? 1 : e <= 5 ? 2 + e / 3 : e <= 10 ? 2 + e / 2 : e <= 30 ? 5 + e / 2 : 30 < e ? 10 * e / (500 < e ? 1 : 400 < e ? 2 : 350 < e ? 3 : 300 < e ? 4 : 270 < e ? 5 : 240 < e ? 6 : 210 < e ? 7 : 165 < e ? 8 : 130 < e ? 10 : 90 < e ? 13 : 75 < e ? 15 : 40 < e ? 18 : 20) + h["default"].GetRandomNum(0, 99) / 10 : void 0) * (t ? 1.5 : 1);
  return this.monsterOrder++, {
    isBoss: t,
    id: t ? 2 : 1,
    hp: Math.floor(e)
  };
}, d.prototype.getSeedData = function () {
  var e = this.seedNum,
      t = this.monsterOrder;
  if (1 != t && (e < 2 || (this.seedNum = 5 < h["default"].GetRandomNum(0, 10) ? 1 : 0, t % 10 == 0 || (t + 1) % 10 == 0 || (t - 1) % 10 == 0))) return null;
  t = this.getSeedFlowerNum, t = t < 20 ? 1 : t < 40 ? 10 < h["default"].GetRandomNum(0, 100) ? 3 : 2 : t < 60 ? 10 < h["default"].GetRandomNum(0, 100) ? 4 : 3 : t < 80 ? 4 : 50 < h["default"].GetRandomNum(0, 100) ? 50 < h["default"].GetRandomNum(0, 100) ? 1 : 2 : 50 < h["default"].GetRandomNum(0, 100) ? 3 : 4;
  return this.getSeedFlowerNum++, {
    lv: t
  };
}, d.prototype.getHighFish = function () {
  var i = this,
      t = function () {
    var e,
        t = 0;

    for (e in i._PointList[f.BATTLEFIELD]) {
      var o = i._PointList[f.BATTLEFIELD][e].attribute;
      o.lv > t && (t = o.lv);
    }

    for (e in i._PointList[f.BIRTH]) {
      var n = i._PointList[f.BIRTH][e].attribute;
      n.lv > t && (t = n.lv);
    }

    return t;
  }(),
      e = function () {
    if (t < 7) return 7;

    if (t <= 10) {
      var e = h["default"].GetRandomNum(0, 100);
      return e < 10 ? t + 1 : e < 20 ? t : t - 1;
    }

    return t - 1;
  }(),
      e = a.Cfg.Building999.find({
    level: e
  });

  return "string" == typeof e.parameter && (e.parameter = JSON.parse(e.parameter)), e;
}, d.prototype.setPoint = function (e, t, o, n) {
  void 0 === n && (n = !0), e.pointType && this.deletePoint(e), this._PointList[t].push(e), e.pointType = t, e._mapPos = o, n && e.node.setPosition(h["default"].MapClr.getV2Pos(o)), this._PointMap[t][o.y] && (this._PointMap[t][o.y][o.x] = e.type), e.type == r.Element_Type.WC_Battery && (e.setFreshBox(t != f.BATTLEFIELD), m.CCTool.Audio.Player("m4_putdown"));
}, d.prototype.deletePoint = function (e) {
  var t,
      o = void 0;

  for (t in this._PointList[e.pointType]) {
    e.uuid == this._PointList[e.pointType][t].uuid && (o = +t);
  }

  if ("number" != typeof o) return cc.error("查询不到指定对象", this._PointList, e, e.type, e.node.name);
  this._PointMap[e.pointType][e._mapPos.y] && (this._PointMap[e.pointType][e._mapPos.y][e._mapPos.x] = r.Element_Type.Not), this._PointList[e.pointType].splice(o, 1);
}, d.prototype.deleteNode = function (e) {
  e && (this.deletePoint(e), e.deleteNode());
}, d.prototype.eliminateItem = function (e, t) {
  var o = e.attribute.data;
  e.type == r.Element_Type.WC_FreshBox && (this.getEmptyTag(f.BIRTH), this.getBattery(o, null, e.node.position.clone())), this.deletePoint(e), t && t();
}, d.prototype.getTag = function (e, t) {
  void 0 === e && (e = r.Element_Type.WC_Monster), void 0 === t && (t = f.ENEMY);
  var o,
      n = [];

  for (o in this._PointList[t]) {
    var i = this._PointList[t][o];
    i && i._isActive && i.type == e && n.push(i);
  }

  return {
    num: n.length,
    arr: n
  };
}, d.prototype.getEmptyTag = function (e) {
  void 0 === e && (e = f.BATTLEFIELD);
  var t,
      o = [];

  for (t in this._PointMap[e]) {
    for (var n in this._PointMap[e][t]) {
      0 == this._PointMap[e][t][n] && o.push({
        x: +n,
        y: +t
      });
    }
  }

  return {
    num: o.length,
    arr: o
  };
}, d.prototype.getNodeTag = function (e, t) {
  for (var o in void 0 === t && (t = f.BATTLEFIELD), this._PointList[t]) {
    o = this._PointList[t][o];
    if (o._mapPos.x == e.x && o._mapPos.y == e.y) return o;
  }

  return null;
}, d.prototype.switchItem = function (e, t) {
  var o = {
    pos: t._mapPos,
    type: t.pointType
  },
      n = {
    pos: e._mapPos,
    type: e.pointType
  };
  this.setPoint(e, o.type, o.pos), this.setPoint(t, n.type, n.pos), this._PointMap[e.pointType][e._mapPos.y][e._mapPos.x] = e.type, this._PointMap[t.pointType][t._mapPos.y][t._mapPos.x] = t.type;
}, d.prototype.synthesisItem = function (e, t) {
  this.deleteNode(e), t.upAttribute(), m.CCTool.Audio.Player("m4_merge");
}, d.prototype.itemMoveTo = function (e, t) {
  var o = this;
  if (this.checkCanMove(t) || e._mapPos.x == t.x && e._mapPos.y == t.y) return cc.tween(e.node).to(.1, {
    position: h["default"].MapClr.getV2Pos(e._mapPos)
  }).start();
  var n = this.getPointType(t),
      i = this.getNodeTag(t, n);
  i ? i.attribute.data.level != e.attribute.data.level || i.attribute.isMax || i.pointType == f.BIRTH ? this.switchItem(e, i) : this.synthesisItem(e, i) : this.setPoint(e, n, t), y.myMap.scheduleOnce(function () {
    o.roundEnd();
  }, .2);
}, d.prototype.checkCanMove = function (e, t) {
  void 0 === t && (t = [f.BATTLEFIELD]);
  var o = this.getPointType(e);
  if (t.indexOf(o) < 0) return !0;
  e = o && this._PointMap[o][e.y] && 0 <= this._PointMap[o][e.y][e.x];
  return !e || t.indexOf(o) < 0;
}, d.prototype.getPointType = function (e) {
  return e.x < 0 || e.x >= y.mapSize.width ? null : 2 < e.y ? f.ENEMY : 0 == e.y ? f.BIRTH : 0 < e.y ? f.BATTLEFIELD : void 0;
}, d.prototype.getNewPoint = function () {
  var e,
      t = function () {
    for (var e = [], t = 0; t < y.mapSize.width - 1; t++) {
      e.push(t);
    }

    return e;
  }();

  for (e in this._PointList[f.ENEMY]) {
    var o = this._PointList[f.ENEMY][e]._mapPos;
    o.y == y.mapSize.height - 1 && t.splice(o.x, 1);
  }

  return {
    x: h["default"].GetArrTarge(t),
    y: y.mapSize.height
  };
}, d.prototype.checkFormation = function (t) {
  var n = this;
  if (0 <= this.useFormation.indexOf(0)) return t(!1);
  p.WCTool.Formation.check(this.formationList[0], this._PointList[f.BATTLEFIELD], function (e) {
    e ? (n.useFormation.push(0), m.CCTool.Loader.LoadPrefab("prefab/game/WCFormation/Formation_1"), y.scheduleOnce(function () {
      t(e);
    }, 6), y.scheduleOnce(function () {
      var e,
          o = n._PointList[f.ENEMY];

      for (e in o) {
        !function (e) {
          var t = o[e];
          cc.tween(t).delay(.3 * +e).call(function () {
            m.CCTool.Audio.Player("m4_boom"), h["default"].MapClr.newEffects(t.node.position, "bomb2"), t.setDestroyed();
          }).start();
        }(e);
      }
    }, 3.5)) : t(e);
  });
}, e = d;

function d() {
  var e,
      o = this;
  this.roundNum = 0, this.roundType = n.USER, this.roundOrder = [n.USER, n.BULLET, n.ENEMY], this.touchNum = 0, this.isAutoSynthesis = !1, this.roundStartFun = ((e = {})[n.USER] = function () {
    if (o.ower.checkGameEnd()) return y.myMap.node.emit(i.ListenID.Game_End);
    o.roundNum++, o.seedNum++, 1 == o.roundNum && (o.getBattery(a.Cfg.Building999.get(1)), o.newMonster({
      _pos: o.getNewPoint(),
      data: o.getMonsterData()
    }, function (e) {
      e.moveTo({
        x: 0,
        y: -1
      });
    })), h["default"].NoviceTips && 0 <= [1, 2].indexOf(o.roundNum) && h["default"].NoviceTips.setMskePos({
      id: 2
    });
  }, e[n.BULLET] = function () {
    var e = o.getSeedData();
    e && o.newFreshBox({
      _pos: o.getNewPoint(),
      data: a.Cfg.Building999.get(e.lv)
    }, function (e) {
      e.moveTo({
        x: 0,
        y: -1
      });
    }), o.checkFormation(function (e) {
      e ? o.roundEnd() : (y.myMap.node.emit(i.ListenID.WC_BULLET, o.roundType), 0 == o._PointList[f.BATTLEFIELD].length ? o.roundEnd() : y.newMonitor(function () {
        if (0 == y.Bullet_2Pool.useNum) return o.roundEnd(), !0;
      }, o));
    });
  }, e[n.ENEMY] = function () {
    function e() {
      h["default"].data.monsterMoveNum = 0, y.myMap.node.emit(i.ListenID.WC_Monster_Move, o.roundType), 0 == o._PointList[f.ENEMY].length ? o.roundEnd() : y.newMonitor(function () {
        if (0 == h["default"].data.monsterMoveNum) return o.roundEnd(), !0;
      }, o);
    }

    var t = o.getMonsterData();
    t ? o.newMonster({
      _pos: o.getNewPoint(),
      data: t
    }, e) : e();
  }, e), this.discardFish = 0, this.monsterOrder = 0, this.seedNum = 0, this.getSeedFlowerNum = 0, this._PointMap = ((e = {})[f.BIRTH] = [], e[f.WAREHOUSE] = [], e[f.BATTLEFIELD] = [], e[f.ENEMY] = [], e), this._PointList = ((e = {})[f.BIRTH] = [], e[f.WAREHOUSE] = [], e[f.BATTLEFIELD] = [], e[f.ENEMY] = [], e), this.useFormation = [], this.formationList = [[{
    pos: [0, 1],
    lv: 7
  }, {
    pos: [1, 2],
    lv: 7
  }, {
    pos: [2, 1],
    lv: 7
  }, {
    pos: [3, 2],
    lv: 7
  }, {
    pos: [4, 1],
    lv: 7
  }]], h["default"].GScene, y = h["default"].MapClr;
}

o.WarChessManage = e;

cc._RF.pop();