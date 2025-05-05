"use strict";
cc._RF.push(module, '9460dwGKYZPH5/IoR47cFvk', 'Model_2');
// scripts/Model_2.js

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
});

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.Model_2 = void 0;
var a,
    s = e("AppCommon"),
    c = e("CCTool"),
    r = e("PlatformFun"),
    l = e("ListenID"),
    p = e("GameScene"),
    d = e("AIBuild_M2"),
    t = e("ModeBase"),
    u = e("ModelManage"),
    f = null,
    h = null,
    i = (a = t.ModelBase, i(m, a), m.prototype.Matching = function () {
  c.CCTool.UI.OpenPop("prefab/pop/pop_Matching_M" + s["default"].GScene._GameModel), s["default"].MapClr.node.active = !0, r.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "level_start");
}, m.prototype.LoadMap = function () {
  var e = this;
  f = s["default"].GScene, (h = s["default"].MapClr).getPathfindingMap(), h.newDoor("door_1", function () {
    h.newBed("computer", function () {
      e.LoadRole(), h.newSpecialtower("specialtower");
    });
  });
}, m.prototype.LoadRole = function () {
  var n = this,
      e = [],
      i = h.bedList;

  for (var t in i) {
    var o = i[t];
    e.push({
      id: o.roomID,
      _pos: o.node.position.clone()
    });
  }

  for (t in e) {
    !function (t) {
      var o = e[t];
      h.newPlayer(o, function (e) {
        e.setPlayerCamp(h.MatchRoleData[t]), e.setCoin(30), h.scheduleOnce(function () {
          i[o.id].mountRole(e), e.isPlayer ? n.LoadMapEnd() : e.myAIBuild = e.node.addComponent(d["default"]), e.scheduleOnce(function () {
            e.setAnimation("sit", !0);
          }, 1);
        }, .1);
      });
    }(t);
  }
}, m.prototype.LoadMapEnd = function () {
  var e = this;
  this.loadEndCall && this.loadEndCall(), cc.Tween.stopAllByTarget(f.GameCamera.node), f.GameCamera.zoomRatio = .8, f.GameCamera.node.position = cc.v2(0, 0), f.GameCamera.node.active = !0, f.setPause(), f.setGameStart(p.GAME_STATE.ReadyAm), c.CCTool.Audio.Player("Start"), c.CCTool.UI.OpenPop("prefab/game/ui/GameUI_1", {}, s["default"].MainView.GamePage, function () {
    e.Settlement();
  });
  var t = h.myMap.node.getChildByName("point");
  cc.tween(t).sequence(cc.tween().to(3, {
    opacity: 150
  }, {
    easing: "sineInOut"
  }), cc.tween().to(3, {
    opacity: 0
  }, {
    easing: "sineInOut"
  })).repeatForever().start();
}, m.prototype.CountDown = function () {
  f.setCountDown(3);
}, m.prototype.Settlement = function () {
  var r = this;
  h.myMap.node.on(l.ListenID.Role_State, function (e, t) {
    var o;

    if (void 0 === t && (t = !1), e == s["default"].GScene.player.roleID && t && null !== (o = s["default"].GScene.player.myDoor) && void 0 !== o && o._isActive && (null === (o = s["default"].GScene.player.myDoor) || void 0 === o ? void 0 : o._lifeRatio) <= .2 && r.CDManage.Check("mendDoor") && (c.CCTool.UI.OpenPop("prefab/pop/pop_GameRevive_M2"), r.CDManage.Set("mendDoor")), !t) {
      var n,
          i = void 0;

      for (n in h.roleList) {
        var a = h.roleList[n];
        0 == a._life && (i = a);
      }

      i.isPlayer ? r.GameEnd() : r.GameWin();
    }
  }, h.myMap);
}, m.prototype.GameStart = function () {
  var e = s["default"].gettimestamp() - f.player._initTime;

  s["default"].data.getCoin = Math.min(Math.floor(e / 9 + 10), 150), f.setPause(-999), cc.tween(f.GameCamera).to(.5, {
    zoomRatio: 1
  }).start(), cc.tween(f.GameCamera.node).delay(.3).to(.5, {
    position: cc.v2(0, -400)
  }).call(function () {}).start();
}, m.prototype.GameWin = function () {
  s["default"].data.getCoin = Math.min(Math.floor((s["default"].gettimestamp() - f.player._initTime) / 9 + 10), 150), s["default"].GScene.setGameStart(p.GAME_STATE.Win);
}, m.prototype.GameEnd = function () {
  s["default"].data.getCoin = Math.min(Math.floor((s["default"].gettimestamp() - f.player._initTime) / 9 + 10), 150), f.setGameStart(p.GAME_STATE.End), f.scheduleOnce(function () {
    c.CCTool.UI.OpenPop("prefab/pop/pop_GameDie");
  }, 2);
}, m.prototype.OnUpdate = function (e) {
  this.CDManage.OnUpdate(e), this._time += e, 1 < this._time && (this._time = 0, this.CDManage.Check("courierTime") && (h.newNPC({
    id: 1,
    _pos: h.getV2Pos({
      x: 12,
      y: 24
    }),
    type: "kuaidiyuan"
  }, function () {}), this.CDManage.Set("courierTime")));
}, m);

function m() {
  var e = null !== a && a.apply(this, arguments) || this;
  return e.type = u.GAME_MODEL.MO_YU, e.mapPath = "Map_1v1", e.CDManage = new c.CCTool.CDManage({
    mendDoor: 30,
    courierTime: s["default"].CONFIG_INFO.courierTime
  }), e;
}

o.Model_2 = i;

cc._RF.pop();