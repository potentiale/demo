"use strict";
cc._RF.push(module, '1964eLdLLdHgZl2d/5CHFkA', 'GameUI');
// scripts/GameUI.js

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
    d = e("ProgressBar"),
    u = e("GameScene"),
    f = e("ModelManage"),
    h = e("pop"),
    t = cc._decorator,
    e = t.ccclass,
    t = t.property,
    e = (r = h["default"], i(m, r), m.prototype.onLoad = function () {
  this.node.setContentSize(cc.winSize), this.node.setPosition(0, 0), s["default"].MapClr.myMap.node.on(l.ListenID.GameState, this.onGameState, this), this.nodeArr[3] && 0 <= this.nodeArr[3].name.indexOf("Skill") && (this.nodeArr[3].active = !1);
}, m.prototype.onEnable = function () {
  p.Notifier.changeListener(!0, l.ListenID.Task_ShowTarget, this.showTarget, this), p.Notifier.changeListener(!0, l.ListenID.Task_UpdateTarget, this.updateTaskTarget, this);
}, m.prototype.onDisable = function () {
  p.Notifier.changeListener(!1, l.ListenID.Task_ShowTarget, this.showTarget, this), p.Notifier.changeListener(!1, l.ListenID.Task_UpdateTarget, this.updateTaskTarget, this);
}, m.prototype.start = function () {
  this.initFun[s["default"].GScene._GameModel]();
}, m.prototype.onGameState = function () {
  this.nodeArr[3] && 0 <= this.nodeArr[3].name.indexOf("Skill") && s["default"].GScene._GameState == u.GAME_STATE.Game && (this.nodeArr[3].active = !0);
}, m.prototype.loadSkillList = function () {
  var r = this;
  this.nodeArr[3].destroyAllChildren(), cc.resources.load("prefab/game/ui/SkillButItem", cc.Prefab, function (e, t) {
    var o,
        n = null;

    for (o in (n = s["default"].GScene._GameModel === f.GAME_MODEL.BOSS_MODEL ? s["default"].MapClr.monsterList[0] : s["default"].GScene.player).skillManage.itemList) {
      var i,
          a = n.skillManage.itemList[o];
      2 == a.useType ? n.skillManage.useSkill(a.id) : ((i = cc.instantiate(t)).setParent(r.nodeArr[3]), n.skillManage.setUINode(i, a));
    }
  });
}, m.prototype.showTarget = function (e, t) {
  this._curShowTaskId = e.id, this.nodeArr[2].active = !0, this.targetDesc.string = e.task, this.updateTaskTarget(t);
}, m.prototype.updateTaskTarget = function (e) {
  e.taskId == this._curShowTaskId && (this.nodeArr[0].active = e.curPro < e.allPro, this.nodeArr[1].active = e.curPro >= e.allPro);
}, m.prototype.onClickFinishTask = function () {
  this.nodeArr[2].active = !1, p.Notifier.send(l.ListenID.Task_FinishTask, this._curShowTaskId, this.nodeArr[0]);
}, m.prototype.onButton = function (t, e) {
  switch (cc.log(e), t && c.CCTool.Audio.Player("Click"), e) {
    case "pop_GamePause":
    case "pop_M4_HighFish":
    case "pop_GameGuide_M4":
      c.CCTool.UI.OpenPop("prefab/pop/" + e);
      break;

    case "pop_M4_GlodChoppingBlock":
      c.CCTool.UI.OpenPop("prefab/pop/" + e, {}, s["default"].MainView.PopBox, function (e) {
        e.closeFun.pop_M4_GlodChoppingBlock = function () {
          s["default"].MapClr.modelManage.myModel.WCManage.isAutoSynthesis && (t.target.active = !1);
        };
      });
      break;

    case "Close":
    case "close":
      this.close();
      break;

    case "GetIndex":
      s["default"].GScene.setGameStart(u.GAME_STATE.Index), this.close();
      break;

    case "RoleSkill_1":
    case "RoleSkill_2":
      var o = e.split("_")[1];
      s["default"].GScene.player.skillManage.useSkill(o);
      break;

    default:
      s["default"].MainView.onButton(null, e), "FreeCreationGame" == e && this.close();
  }
}, a([t(cc.Label)], m.prototype, "targetDesc", void 0), a([t(d["default"])], m.prototype, "skillBarList", void 0), a([e], m));

function m() {
  var e,
      n = null !== r && r.apply(this, arguments) || this;
  return n.targetDesc = null, n.skillBarList = [], n.initFun = ((e = {})[f.GAME_MODEL.TANG_PING] = function () {
    n.loadSkillList();
  }, e[f.GAME_MODEL.MO_YU] = function () {
    n.loadSkillList();
  }, e[f.GAME_MODEL.BOSS_MODEL] = function () {
    n.nodeArr[4].active = !1, n.loadSkillList();
  }, e[f.GAME_MODEL.FISH_MODEL] = function () {
    var o = s["default"].MapClr.modelManage.myModel;
    s["default"].MapClr.myMap.node.on(l.ListenID.Role_State, function (e, t) {
      void 0 === t && (t = !1), n.labelArr[1].string = o.killNum + "";
    }, s["default"].MapClr.myMap), s["default"].MapClr.myMap.node.on(l.ListenID.Round_Type, function () {
      n.labelArr[0].string = o.WCManage.roundNum + "";
    }, n);
  }, e), n._curShowTaskId = -1, n;
}

o["default"] = e;

cc._RF.pop();