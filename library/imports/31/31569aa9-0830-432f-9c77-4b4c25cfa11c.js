"use strict";
cc._RF.push(module, '31569qpCDBDL5x3S0wlz6Ec', 'GameScene');
// scripts/GameScene.js

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
}), o.PLAYER_STATE = o.GAME_STATE = void 0;
var r,
    s,
    p = e("AppCommon"),
    c = e("CCTool"),
    l = e("GameTool"),
    d = e("PlatformFun"),
    u = e("TTGame"),
    f = e("ListenID"),
    h = e("Cfg"),
    m = e("JoyStick"),
    y = e("ModelManage"),
    g = cc._decorator,
    t = g.ccclass,
    e = g.property;
(g = r = o.GAME_STATE || (o.GAME_STATE = {}))[g.Not = 0] = "Not", g[g.Index = 1] = "Index", g[g.Matching = 2] = "Matching", g[g.ReadyAm = 3] = "ReadyAm", g[g.CountDown = 4] = "CountDown", g[g.Game = 5] = "Game", g[g.End = 6] = "End", g[g.Win = 7] = "Win", (g = s = o.PLAYER_STATE || (o.PLAYER_STATE = {}))[g.Not = 0] = "Not", g[g.Move = 1] = "Move", g[g.ToBed = 2] = "ToBed";

var _,
    t = (_ = cc.Component, i(v, _), v.prototype.onLoad = function () {
  var o = this;
  p["default"].GScene = this, window.app = p["default"], window.Cfg = h.Cfg, window.GameTool = l.GameTool, window.CCTool = c.CCTool, this.setPhysics(!0), this.setPhysics(!1), .65 < cc.winSize.width / cc.winSize.height && cc.view.setDesignResolutionSize(750, 1334, cc.ResolutionPolicy.FIXED_HEIGHT), cc.resources.load("prefab/game/Element/GameElementBut", cc.Prefab, function (e, t) {
    o.GameElementButPool = new c.CCTool.GamePool("GameElementBut", t, 1, o);
  });
}, v.prototype.start = function () {}, v.prototype.setCountDown = function (e) {
  this.countDownTime = e = void 0 === e ? 30 : e, this.schedule(this.countDown, 1, this.countDownTime);
}, v.prototype.setGameStart = function (e, t) {
  var o = this;
  if (this._GameState == e) return cc.log("状态重叠");

  switch (this._GameState = e, t && (this._GameModel = t), cc.log("设置游戏状态"), e) {
    case r.Matching:
      this.exitGame(), p["default"].MapClr.modelManage.matchingFun(this._GameModel), c.CCTool.Audio.PlayBgm("Bgm_Matching");
      break;

    case r.ReadyAm:
      p["default"].data.YunNanBGM ? (c.CCTool.Audio.PlayBgm("Bgm_Battle2", .4), p["default"].data.YunNanBGM = !1) : this._GameModel == y.GAME_MODEL.FISH_MODEL ? c.CCTool.Audio.PlayBgm("Bgm_Battle3", .4) : c.CCTool.Audio.PlayBgm("Bgm_Battle", .4), u["default"].recorderStart();
      break;

    case r.CountDown:
      p["default"].MapClr.modelManage.myModel.CountDown(), p["default"].TaskCtrl.initTask(this._GameModel), this._PlayerTime = 0;
      break;

    case r.Game:
      p["default"].MapClr.modelManage.myModel.GameStart(), this.unschedule(this.countDown);
      break;

    case r.End:
    case r.Win:
      this.setPause(), this.playerSendEvent(), u["default"].recorderStop(), this.setPlayerStart(s.Not), this.removeAllChild(p["default"].MainView.PopBox), this.scheduleOnce(function () {
        e == r.End || (o._GameModel == y.GAME_MODEL.TANG_PING ? c.CCTool.UI.OpenPop("prefab/pop/pop_GameWin") : o._GameModel == y.GAME_MODEL.MO_YU ? c.CCTool.UI.OpenPop("prefab/pop/pop_GameWin_M2") : o._GameModel == y.GAME_MODEL.BOSS_MODEL && c.CCTool.UI.OpenPop("prefab/pop/pop_GameWin_M3")), o._GameModel != y.GAME_MODEL.FISH_MODEL && o.exitGame();
      }, this._GameModel == y.GAME_MODEL.BOSS_MODEL ? 1 : 2);
      break;

    case r.Index:
      this.setPlayerStart(s.Not), this.GameCamera.node.active = !1, p["default"].MainView.getIndex(), this.exitGame(), c.CCTool.Audio.PlayBgm("Bgm_Lobby"), u["default"].recorderStop();
  }

  p["default"].MapClr.myMap && p["default"].MapClr.myMap.node.emit(f.ListenID.GameState);
}, v.prototype.startGame = function () {
  var e = this;
  p["default"].MainView.openGame(), p["default"].MapClr.initMap(this._GameModel, function () {
    cc.log("地图加载成功"), e.GamePopBox.active = !0;
  });
}, v.prototype.exitGame = function () {
  cc.log("[exitGame]退出游戏"), this.unschedule(this.countDown), this.removeAllChild(p["default"].GScene.GamePopBox), this.removeAllChild(p["default"].MainView.GamePage), p["default"].MapClr.clearObj(), this.setCollision(!1);
}, v.prototype.removeAllChild = function (e) {
  for (var t = e.childrenCount - 1; 0 <= t; t--) {
    p["default"].MapClr.deleteNode(e.children[t]);
  }
}, v.prototype.setPause = function (e) {
  void 0 === e && (e = 1), this.isPause = Math.max(0, this.isPause + e), p["default"].GScene.node.emit(f.ListenID.Game_Pause, !!this.isPause);
}, v.prototype.setPlayerStart = function (e) {
  switch (e) {
    case s.Not:
      this.joyStick.node.active = !1;
      break;

    case s.Move:
      this.joyStick.node.active = !0;
      break;

    case s.ToBed:
      this.joyStick.node.active = !1;
  }

  this._PlayerState = e;
}, v.prototype.playerSendEvent = function () {
  var e = this.player,
      t = this.getModeStr();

  if (e && e.myBed) {
    d.PlatformFun.SendEvent(t + "door_level_" + e.myDoor.attribute.lv), d.PlatformFun.SendEvent(t + "desk_level_" + e.myBed.attribute.lv);
    var o,
        n = e.myBed.myTerritoryMap,
        i = 0,
        a = 0;

    for (o in n) {
      for (var r in n[o]) {
        (c = n[o][r]).arc && (2 == c.arc.attribute.buildingType ? i = Math.max(i, c.arc.attribute.lv) : 4 == c.arc.attribute.buildingType && (a = Math.max(a, c.arc.attribute.lv)));
      }
    }

    d.PlatformFun.SendEvent(t + "tower_level_" + i), d.PlatformFun.SendEvent(t + "miner_level_" + a);
  }

  this._GameModel == y.GAME_MODEL.TANG_PING && d.PlatformFun.SendEvent(t + "boss_level_" + (null === (e = p["default"].MapClr.monsterList[0].attribute) || void 0 === e ? void 0 : e.lv));
  var s,
      c,
      l = 0;

  for (s in p["default"].MapClr.roleList) {
    (c = p["default"].MapClr.roleList[s]).isAi && c._life <= 0 && l++;
  }

  d.PlatformFun.SendEvent(t + "killed_" + l);
}, v.prototype.getModeStr = function () {
  return "m" + this._GameModel + "_";
}, v.prototype.setPhysics = function (e, t) {
  void 0 === t && (t = !1), this.PhysicsManager || (this.PhysicsManager = cc.director.getPhysicsManager()), this.PhysicsManager.enabled = e, t && (this.PhysicsManager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit);
}, v.prototype.setCollision = function (e, t) {
  void 0 === t && (t = !1), this.CollisionManager || (this.CollisionManager = cc.director.getCollisionManager()), this.CollisionManager.enabled = e, this.CollisionManager.enabledDebugDraw = t;
}, a([e(m["default"])], v.prototype, "joyStick", void 0), a([e(cc.Camera)], v.prototype, "MainCamera", void 0), a([e(cc.Camera)], v.prototype, "GameCamera", void 0), a([e(cc.Node)], v.prototype, "GameLabelBox", void 0), a([e(cc.Node)], v.prototype, "GamePopBox", void 0), a([t], v));

function v() {
  var e = null !== _ && _.apply(this, arguments) || this;
  return e.joyStick = null, e.MainCamera = null, e.GameCamera = null, e.GameLabelBox = null, e.GamePopBox = null, e._GameState = r.Not, e._GameModel = y.GAME_MODEL.TANG_PING, e._PlayerState = s.Not, e._PlayerTime = 0, e.isPause = 0, e.countDownTime = 30, e.countDown = function () {
    if (e.countDownTime <= 10 && c.CCTool.Audio.Player("CountDown"), c.CCTool.UI.ShowToast(e.countDownTime, 100, !0, 1, cc.winSize.height / 2 - 440, cc.color("#fff961"), p["default"].MainView.GamePage, !1), e.countDownTime <= 0) return e.setGameStart(r.Game);
    e.countDownTime--;
  }, e;
}

o["default"] = t;

cc._RF.pop();