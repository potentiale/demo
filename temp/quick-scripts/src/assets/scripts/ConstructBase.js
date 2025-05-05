"use strict";
cc._RF.push(module, '75ebfW+7b9AZoFhrhGVXQV0', 'ConstructBase');
// scripts/ConstructBase.js

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
    p = e("Notifier"),
    d = e("Cfg"),
    u = e("TaskCtrl"),
    f = e("ModelManage"),
    h = e("ElementBase"),
    m = [20, 21],
    y = cc._decorator,
    t = y.ccclass,
    e = y.menu,
    e = (y.property, r = h.ElementBase, i(g, r), g.prototype.onLoad = function () {
  s["default"].GScene._GameModel === f.GAME_MODEL.BOSS_MODEL && (this.node.getComponent(cc.RigidBody) || (this.node.addComponent(cc.RigidBody).type = cc.RigidBodyType.Static), this.node.getComponent(cc.PhysicsCircleCollider) || (this.node.addComponent(cc.PhysicsCircleCollider).radius = 30)), this.node.on(l.ListenID.Send_Hurt, this.getHurt, this), s["default"].GScene.node.on(l.ListenID.Game_Pause, this.onGamePause, this);
}, g.prototype.initAttribute = function (e, t) {
  var o = this;
  this.imgList[0] || (this.imgList[0] = this.node.children[0].getComponent(cc.Sprite)), c.CCTool.Audio.CameraPlayer(this.node.position, "Build"), this.setAttribute(e), this.mySkeleton = this.node.children[0].getComponent(sp.Skeleton), this.node.zIndex = s["default"].MapClr.mapSize.height - (Math.floor(this.node.y / s["default"].MapClr.tileSize.height) + s["default"].MapClr.mapSize.height / 2), t && this.setOwer(t), this.onInit(), s["default"].MapClr.myMap.node.on(l.ListenID.Monster_Skill, function (t) {
    o._isActive && 3 == t.type && o.attribute.buildingType == t.parameter[0] && s["default"].MapClr.newEffects(o.node.position, "hobbyhorse", function (e) {
      e.setParent(o.node), e.setPosition(0, 0), e.zIndex = o.node.zIndex + 1, o.setState(!1), o.scheduleOnce(function () {
        o.setState(!0), s["default"].MapClr.deleteNode(e);
      }, t.last);
    });
  }, this), this.node.t_x = this.node.x, this.node.t_y = this.node.y;
}, g.prototype.setOwer = function (e) {
  this.ower = e, this._owerID = e.roleID, this.ower.isPlayer ? (this.schedule(this.checkLeveUP, 1), this.newTouchEvent()) : 1 == this.attribute.buildingType && this.newTouchEvent(), this.ower.upCapabilities();
}, g.prototype.longTapEvent = function () {}, g.prototype.newTouchEvent = function () {
  var t,
      o,
      n = this;
  0 <= m.indexOf(this.attribute.buildingType) || this._isClickEventOpen || (t = !(this._isClickEventOpen = !0), o = null, this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
    t = !0, n._isPress = !0, o = e.getLocation(), n._pressTime = 0;
  }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
    n._isPress && o && (e = e.getLocation(), 100 <= cc.Vec2.squaredDistance(e, o) && (n._isPress = !1));
  }), this.node.on(cc.Node.EventType.TOUCH_END, function () {
    if (n._isPress = !1, t && !(10 < s["default"].data.cameraMoveNum)) {
      if (n.ower.isPlayer) {
        if (n.attribute.isMax && 0 <= [1, 3].indexOf(n.attribute.data.buildingType)) return c.CCTool.UI.ShowToast("该建筑已满级");
      } else if (3 == n.attribute.buildingType || 1 == n.attribute.buildingType) return;

      n.onClick();
    }
  }, this));
}, g.prototype.setAttribute = function (e) {
  this.attribute = {
    name: e.name,
    buildingType: e.buildingType,
    buildingID: e.buildID,
    lv: e.level,
    data: e
  }, this.attribute.isMax = this.checkMax(), this._life = e.hp || 1, this.setConstructImg(), this.ower && (3 == this.attribute.buildingType && (this.ower.myCapabilities.hp = this._life), this.ower.upCapabilities());
}, g.prototype.upAttribute = function (e) {
  if (!e && this.checkMax()) return cc.log("已经满级");
  (e = e || d.Cfg.Building1.get(+this.attribute.data.id + 1)) && (this.setAttribute(e), this.ower.isPlayer && p.Notifier.send(l.ListenID.Task_UpdateTask, u.TaskType.GetBuilding, {
    buildId: e.id
  }), c.CCTool.Audio.CameraPlayer(this.node.position, "Build"), this.myLeveUPNode && (this.myLeveUPNode.active = !1));
}, g.prototype.checkMax = function () {
  return this.attribute.lv >= s["default"].MapClr.arcIDList[this.attribute.buildingID]._maxLevel;
}, g.prototype.checkLeveUP = function () {
  var t = this;
  if (this.checkMax()) return s["default"].MapClr.deleteNode(this.myLeveUPNode), this.unschedule(this.checkLeveUP), void (this.myLeveUPNode = null);
  var e = d.Cfg.Building1.get(+this.attribute.data.id + 1);
  e && (this.checkMoney(e) ? this.myLeveUPNode ? this.myLeveUPNode.active = !0 : s["default"].MapClr.newEffects(this.node.position, "levelup", function (e) {
    e.setParent(t.node), e.setPosition(0, 0), e.zIndex = t.node.zIndex + 9, t.myLeveUPNode = e;
  }) : this.myLeveUPNode && (this.myLeveUPNode.active = !1));
}, g.prototype.checkMoney = function (e) {
  var t,
      o = this.ower.wallet;
  return !(e.frontDoor && (!(t = this.ower.myBuildTopId[3]) || t < e.frontDoor) || e.frontGenerator && (!(t = this.ower.myBuildTopId[4]) || t < e.frontGenerator) || e.costCoin && o.coin < e.costCoin || e.costPower && o.power < e.costPower);
}, g.prototype.getHurt = function (e) {
  this._isInvincible || this._life <= 0 || (r.prototype.getHurt.call(this, e), s["default"].MapClr.myMap.node.emit(l.ListenID.Role_State, this._owerID, !0));
}, g.prototype.setLife = function (e) {
  if (!this.attribute || !this.attribute.data) return this._life = 0, void this.setDestroyed();
  r.prototype.setLife.call(this, e), this._life <= 0 && this.setDestroyed(), 3 == this.attribute.buildingType && (this.ower.myCapabilities.hp = this._life);
}, g.prototype.setDestroyed = function () {
  cc.log("被破坏"), this.ower.myBed.setTerritoryMapItem(this._mapPos, null), this.node.active = !1, this.setState(!1), this.ower.upCapabilities(), c.CCTool.System.InCamera(this.node.position) && s["default"].MapClr.newEffects(this.node.position, "bomb"), c.CCTool.Audio.CameraPlayer(this.node.position, "m4_boom"), this.deleteNode();
}, g.prototype.deleteNode = function () {
  this.node.off(l.ListenID.Send_Hurt, this.getHurt, this), this.onVanish(), this.node.destroy(), this.node.removeFromParent(!1);
}, g.prototype.sell = function (e) {
  this.setState(!1), this._isActive = !1, this._isHaveUpDate = !1, this.ower.myBed.setTerritoryMapItem(this._mapPos, null);
  var t,
      e = e ? s["default"].MapClr.roleList[e] : this.ower;
  this.attribute.data.returnCoin ? (t = this.attribute.data.returnCoin, e.setCoin(t), c.CCTool.System.InCamera(this.node.position) && s["default"].MapClr.newLabelTips("+" + t, this.node.position, cc.Color.YELLOW, "Fish coin")) : this.attribute.data.returnPower && (t = this.attribute.data.returnPower, e.setPower(t), c.CCTool.System.InCamera(this.node.position) && s["default"].MapClr.newLabelTips("+" + t, this.node.position, cc.Color.BLUE, "energy")), this.ower.upCapabilities(), this.deleteNode(), c.CCTool.Audio.CameraPlayer(this.node.position, "Build");
}, g.prototype.onClick = function () {
  c.CCTool.UI.OpenPop("prefab/pop/pop_BuildingUPLv", this);
}, g.prototype.setState = function (e) {
  this._isActive != e && (this._isActive = e, this._isHaveUpDate = e && !!this.attribute.data.frequency);
}, g.prototype.setInvincible = function (e, t) {
  var o = this;
  this._isInvincible = !0, this.scheduleOnce(function () {
    o._isInvincible = !1, t();
  }, e);
}, g.prototype.checkTagIsActive = function (e) {
  return e && e.node;
}, g.prototype.searchRecentMoster = function () {
  var e,
      t = [];

  for (e in s["default"].MapClr.monsterList) {
    var o,
        n = s["default"].MapClr.monsterList[e];
    n && n._owerID != this._owerID && n._isActive && 0 < n._life && (o = s["default"].getDistance(n.node.position, this.node.position)) < this._attackRadius && t.push({
      i: e,
      d: o,
      w: 100 * (1 - n._lifeRatio) + 1
    });
  }

  return s["default"].arrCompare(t, "d", 0);
}, g.prototype.update = function (e) {
  s["default"].GScene.isPause || (this._isHaveUpDate && (this._time += e, this._time > this.attribute.data.frequency && (this.effectTrigger(), this._time = 0)), this._isPress && (this._pressTime += e, 2 <= this._pressTime && (this._isPress = !1, this.longTapEvent(), this._pressTime = 0)));
}, a([t, e("gameElement/ConstructBase")], g));

function g() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.type = h.Element_Type.Building, e.attribute = null, e._isPress = !1, e._isClickEventOpen = !1, e._time = 0, e._pressTime = 0, e;
}

o["default"] = e;

cc._RF.pop();