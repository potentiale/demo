"use strict";
cc._RF.push(module, 'd0fd4CSfRdMopNmtmzSDDBc', 'Bed');
// scripts/Bed.js

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
    l = e("Cfg"),
    p = e("ModelManage"),
    d = e("ConstructBase"),
    u = e("GameElementBut"),
    f = cc._decorator,
    t = f.ccclass,
    e = f.menu,
    e = (f.property, r = d["default"], i(h, r), h.prototype.start = function () {
  this.schedule(this.searchPlayer, .3);
}, h.prototype.init = function (e) {
  this.setData = e, this.myTerritory = s["default"].MapClr.myMap.node.getChildByName(this.setData.name), this.myTerritory && (this.myTerritory.active = !1, this.roomID = +this.setData.name.split("_")[1], (s["default"].MapClr.bedList[this.roomID] = this).isClosestool() && this.setNormalSkin(20));
}, h.prototype.isClosestool = function () {
  return this.setData.bedtype && 2 == this.setData.bedtype;
}, h.prototype.setNormalSkin = function (e) {
  var o = this;
  this.imgList[0] || (this.imgList[0] = this.node.children[0].getComponent(cc.Sprite)), cc.resources.load("img/gameResources/" + e, cc.SpriteFrame, function (e, t) {
    o.imgList[0].spriteFrame = t;
  });
}, h.prototype.setTerritory = function () {
  if (this.setData.name) {
    this.myTerritoryMap = [];

    for (var i = s["default"].MapClr.myMap.getObjectGroup(this.setData.name).getObjects(), a = this, e = 0; e < this.myTerritory.childrenCount; e++) {
      !function (e) {
        var t,
            o = s["default"].MapClr.getMapPos(a.myTerritory.children[e]),
            n = {
          x: o.x,
          y: o.y,
          node: a.myTerritory.children[e],
          name: i[e].name,
          arc: null
        };
        a.myTerritoryMap[n.x] || (a.myTerritoryMap[n.x] = []), a.myTerritoryMap[n.x][n.y] = n, a.ower.isAi || (t = !1, n.node.on(cc.Node.EventType.TOUCH_START, function () {
          t = !0;
        }, a), n.node.on(cc.Node.EventType.TOUCH_END, function () {
          t && (10 < s["default"].data.cameraMoveNum || c.CCTool.UI.OpenPop("prefab/pop/pop_BuildingCreate", n));
        }, a));
      }(e);
    }

    var t = s["default"].MapClr.getMapPos(this.node.position);
    this.myTerritoryMap[t.x] || (this.myTerritoryMap[t.x] = []), this.myTerritoryMap[t.x][t.y] = {
      x: t.x,
      y: t.y,
      node: null,
      arc: null,
      name: null
    }, this.setTerritoryMapItem(t, this), this.ower.isPlayer && (this.myTerritory.opacity = 0, this.myTerritory.active = !0, cc.tween(this.myTerritory).sequence(cc.tween().to(1, {
      opacity: 255
    }, {
      easing: "sineInOut"
    }), cc.tween().to(1, {
      opacity: 100
    }, {
      easing: "sineInOut"
    })).repeatForever().start());
  }
}, h.prototype.setTerritoryMapItem = function (e, t) {
  this.myTerritoryMap[e.x][e.y].arc = t, this.myTerritoryMap[e.x][e.y].node && (this.myTerritoryMap[e.x][e.y].node.active = !t), t && (t._mapPos = e);
}, h.prototype.longTapEvent = function () {
  this.ower.isPlayer || this.ower.isBeReported || s["default"].GScene._GameModel != p.GAME_MODEL.TANG_PING || c.CCTool.UI.OpenPop("prefab/pop/pop_ReportPanel", this.ower.roleID);
}, h.prototype.searchPlayer = function () {
  var e,
      t = this;
  s["default"].MapClr.myMap && s["default"].GScene.player && (e = s["default"].getDistance(this.node.position, s["default"].GScene.player.node.position) < 120) != this.isShowBut && (this.isShowBut = e, this.isShowBut ? (e = s["default"].GScene.GameElementButPool.GetFormPool(s["default"].GScene.GamePopBox), this.but = e.getComponent(u["default"]), this.but.init(this.node, function () {
    return t.isHaveMan ? (c.CCTool.UI.ShowToast("电脑桌被占了"), void t.but.hide()) : (t.mountRole(s["default"].GScene.player), void cc.tween(s["default"].GScene.GameCamera.node).to(.2, {
      position: t.node.position
    }).start());
  }), this.but.setLabel(this.isClosestool() ? "蹲坑" : "上机")) : (this.but && this.but.hide(), this.but = null));
}, h.prototype.setDestroyed = function () {
  cc.log("被破坏"), this.node.active = !1, this.setState(!1);
}, h.prototype.getHurt = function (e) {
  r.prototype.getHurt.call(this, e), null != this.ower && this.ower.getHurt(e);
}, h.prototype.mountRole = function (e) {
  var t;
  this.isHaveMan || (this.isHaveMan = !0, t = this.isClosestool() ? 20 : 1, this.initAttribute(l.Cfg.Building1.get(t), e), this.setTerritory(), e.setCollision(!1), (this.ower.myBed = this).isClosestool() ? e.node.setPosition(this.node.x + 5, this.node.y + 10) : e.node.setPosition(this.node.x, this.node.y - 30), e.toBed(this.roomID), this.unschedule(this.searchPlayer), this.but && this.but.hide(), this.setState(!0));
}, h.prototype.effectTrigger = function () {
  var e = this.attribute.data.outputCoin * this.ower.outputRatio;
  this.ower.setCoin(e), c.CCTool.System.InCamera(this.node.position) && s["default"].MapClr.newLabelTips("+" + e, this.node.position, cc.Color.YELLOW, "Fish coin");
}, a([t, e("gameElement/Bed")], h));

function h() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.isShowBut = !1, e.but = null, e.SConstruct = [], e.isHaveMan = !1, e;
}

o["default"] = e;

cc._RF.pop();