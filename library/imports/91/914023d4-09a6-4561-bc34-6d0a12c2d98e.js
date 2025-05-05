"use strict";
cc._RF.push(module, '91402PUCaZFYbw0bQoSwtmO', 'ModelManage');
// scripts/ModelManage.js

"use strict";

var o = require;
var e = module;
var t = exports;
"use strict";

Object.defineProperty(t, "__esModule", {
  value: !0
}), t.ModelManage = t.GAME_MODEL = void 0;
var a = o("AppCommon"),
    r = null,
    s = null;
(e = t.GAME_MODEL || (t.GAME_MODEL = {}))[e.Not = 0] = "Not", e[e.TANG_PING = 1] = "TANG_PING", e[e.MO_YU = 2] = "MO_YU", e[e.BOSS_MODEL = 3] = "BOSS_MODEL", e[e.FISH_MODEL = 4] = "FISH_MODEL";
n.prototype.matchingFun = function (e) {
  if (this.myModel = this.GetClass("Model_" + e), !this.myModel) return cc.error("找不到MODEL归属方法");
  this.myModel.Matching();
}, n.prototype.load = function (e, t) {
  var o = this;
  r = a["default"].GScene, s = a["default"].MapClr, this.myModel.loadEndCall = t, this.myModel.CDManage.limt.courierTime = a["default"].CONFIG_INFO.courierTime, this.myModel.CDManage.Reset(), r.GameCamera.backgroundColor = cc.color("#2B2B2F00");
  var n = new cc.Node("myMap"),
      i = n.addComponent(cc.TiledMap);
  cc.resources.load("tmap/Map/Map_model/" + this.myModel.mapPath, cc.TiledMapAsset, function (e, t) {
    n.setParent(s.node), n.setPosition(cc.Vec2.ZERO), n.zIndex = -1, i.tmxAsset = t, s.myMap = i, s.mapSize = s.myMap.getMapSize(), s.tileSize = s.myMap.getTileSize(), s.newEgg("egg"), s.node.setContentSize(1.3 * s.myMap.node.width, 1.3 * s.myMap.node.height), o.myModel.LoadMap();
  });
}, n.prototype.onUpdate = function (e) {
  this.myModel.OnUpdate(e);
}, n.prototype.GetClass = function (e) {
  var t = o(e);
  return new (t[e] || t["default"])();
}, e = n;

function n() {}

t.ModelManage = e;

cc._RF.pop();