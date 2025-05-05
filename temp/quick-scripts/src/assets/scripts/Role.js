"use strict";
cc._RF.push(module, '8fe0dB5mAVLU6YmSNEav1In', 'Role');
// scripts/Role.js

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
    p = e("UserVo"),
    d = e("ListenID"),
    u = e("Notifier"),
    f = e("Cfg"),
    h = e("SkinCtrl"),
    m = e("TaskCtrl"),
    y = e("GameScene"),
    g = e("ModelManage"),
    _ = e("SkillRole"),
    v = e("LivingThingBase"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = v["default"], i(C, r), C.prototype.init = function () {
  this.setAttribute({
    lv: 1,
    hp: 1
  }), (s["default"].MapClr.roleList[this.roleID] = this).mySkeleton = this.node.children[1].getComponent(sp.Skeleton), this.wallet = {
    coin: 0,
    power: 0
  }, this.myCapabilities = {
    hp: 1
  }, this._moveSpeed = f.Cfg.Costant.get(1).MoveSpeedMan / 30, this._isActive = !0, this.isBeReported = !1, this.myUserVideoBuild = {}, this.outputRatio = 1, this.CDManage = new c.CCTool.CDManage({
    dialogue: 10
  }), this._initTime = s["default"].gettimestamp();
}, C.prototype.setCoin = function (e) {
  this.wallet.coin += e, s["default"].MainView.node.emit(d.ListenID.Money_UpDate);
}, C.prototype.setPower = function (e) {
  this.wallet.power += e, s["default"].MainView.node.emit(d.ListenID.Money_UpDate);
}, C.prototype.setPlayerCamp = function (e) {
  var t = this;
  this.isAi = !e.isPlayer, this.isPlayer = e.isPlayer, this.matchData = e, this.isPlayer && ((s["default"].GScene.player = this).setRinBodyState(!0), s["default"].MainView.node.emit(d.ListenID.Money_UpDate), this.node.getChildByName("role_shadow").children[0].active = !0);
  var o = f.Cfg.RoleMan.get(e.skinID);
  this.setSkin(o.RoleBones, function () {
    s["default"].SkinCtrl.setRoleSkin(h.RoleSkinType.ROLE, t.mySkeleton, e.skinID, !t.isPlayer);
  }), this.skillManage = new _.SkillRole(this), this.isPlayer ? this.skillManage.initSkill([1].concat(p.UserVo.data.skinSkill[o.id]).concat([2])) : this.skillManage.initSkill([1].concat(o.skillID).concat([2]));
}, C.prototype.getHurt = function (e) {
  this.setLife(e), s["default"].MapClr.myMap.node.emit(d.ListenID.Role_State, this.roleID, !0);
}, C.prototype.setDestroyed = function () {
  this._isActive && (this._isActive = !1, console.log("this.roleid = ", this.roleID), s["default"].MapClr.myMap.node.emit(d.ListenID.Role_State, this.roleID), this.palsyAllBuilding(), this.node.active = !1, this.unscheduleAllCallbacks(), this.myBed && (this.myBed._life = 0, this.myBed.setDestroyed()), this.loadDeadSign(), c.CCTool.Audio.Player("Man_Dead"));
}, C.prototype.loadDeadSign = function () {
  var o = this;
  cc.resources.load("prefab/game/Element/DeadSign", cc.Prefab, function (e, t) {
    s["default"].MapClr.myMap && ((t = cc.instantiate(t)).setParent(o.node.parent), t.setPosition(o.node.position));
  });
}, C.prototype.palsyAllBuilding = function () {
  if (this.myBed) {
    var e,
        t = this.myBed.myTerritoryMap;

    for (e in t) {
      for (var o in t[e]) {
        o = t[e][o];
        o.arc && (o.arc.setState(!1), this.isAi && o.arc.newTouchEvent());
      }
    }
  }
}, C.prototype.toMove = function (e) {
  if (s["default"].GScene._PlayerState == y.PLAYER_STATE.Move) {
    var t = s["default"].GScene.joyStick.linearVelocity;
    if (0 == t.x && 0 == t.y) return this.isMove && this.setAnimation("idle", !0), void (this.isMove = !1);
    this.isMove || this.setAnimation("move", !0), this.isMove = !0, this.mySkeleton.node.scaleX = 0 < t.x ? -1 : 1, cc.Vec2.multiplyScalar(this.tempVec2, t.normalizeSelf(), this._moveSpeed * e * 60);
    e = this.node.position.addSelf(this.tempVec2);
    this.node.setPosition(e), s["default"].GScene.GameCamera.node.position = this.node.position, this.getZIndex();
  }
}, C.prototype.toBed = function (e) {
  var t = this;
  this.roomID = e, this.mySkeleton.node.scaleX = 1;
  var o = s["default"].MapClr.bedList[this.roomID];
  if (this.setAnimation(o.isClosestool() ? "sit2" : "sit", !0), s["default"].MapClr.myMap.node.emit(d.ListenID.Role_TOBed, this.roleID, this.roomID), this.getZIndex(), this.isPlayer) for (var n in s["default"].GScene.setPlayerStart(y.PLAYER_STATE.ToBed), this.setRinBodyState(!1), s["default"].MapClr.setTouchMoveCamera(!0), l.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "enter_desk"), l.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "enter_room_" + e), u.Notifier.send(d.ListenID.Task_UpdateTask, m.TaskType.GetBuilding, {
    buildId: 1
  }), this.skillManage.markNodeBar) {
    this.skillManage.markNodeBar[n].node.parent.active = !0;
    break;
  } else this.myFSM = null, this.scheduleOnce(function () {
    t.myAIBuild.initState(t, t.matchData.aiData);
  }, .5);
  this.schedule(function () {
    t.CDManage.Check("dialogue") && (s["default"].MapClr.newDialogue(t.node, cc.v2(20, 70), s["default"].GetArrTarge(t.DialogueList["talkInBed_M" + s["default"].GScene._GameModel]), 3.5), t.CDManage.Set("dialogue"));
  }, 1), this.node.getChildByName("role_shadow").active = !1, s["default"].GScene._GameModel == g.GAME_MODEL.TANG_PING && this.setCoin(30 - s["default"].GScene.countDownTime);
}, C.prototype.setRinBodyState = function (e) {
  this.node.getComponent(cc.PhysicsCircleCollider).enabled = e;
}, C.prototype.upCapabilities = function () {
  if (this.myBed) {
    var e,
        t = {},
        o = {},
        n = ["atk", "outputPower", "outputCoin"];

    for (e in n) {
      this.myCapabilities[n[e]] = .1;
    }

    var i,
        a = this.myBed.myTerritoryMap;

    for (i in a) {
      for (var r in a[i]) {
        r = a[i][r];
        r.arc && ((r = r.arc.attribute) ? (t[r.buildingType] || (t[r.buildingType] = 0), r.data.atk && (this.myCapabilities.atk += r.data.atk), r.data.outputCoin && (this.myCapabilities.outputCoin += r.data.outputCoin / (r.data.frequency || 1)), r.data.outputPower && (this.myCapabilities.outputPower += r.data.outputPower / (r.data.frequency || 1)), t[r.buildingType]++, (!o[r.buildingType] || o[r.buildingType] < r.data.id) && (o[r.buildingType] = r.data.id)) : console.log("attr is null", this.isPlayer));
      }
    }

    this.myBuildNum = t, this.myBuildTopId = o;
  }
}, C.prototype.update = function (e) {
  s["default"].GScene.isPause || (this.isPlayer && this.toMove(e), this.CDManage.OnUpdate(e));
}, a([e], C));

function C() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.isAi = !1, e.roleID = 1, e._canStealMoney = !1, e._lifeTile = 0, e._atkSpeedDown = 0, e.isBeReported = !1, e.isMove = !1, e.tempVec2 = cc.Vec2.ZERO, e.myBuildNum = {}, e.myBuildTopId = {}, e.myUserVideoBuild = {}, e.outputRatio = 1, e.reduceRationList = new Map(), e.DialogueList = {
    talkInBed_M1: ["上班打工是劳动所得，只有摸鱼才是真的赚钱", "每个月总有那么三十几天不想上班。", "说实话，我觉得我的星座不适合上班，只适合领工资。", "不要跟我谈理想，我的理想是不上班。", "我在办公室...困得像只狗", "又是周一，我不舍得睡，你不舍得起……", "刚喝了一杯美式，好苦，跟我的命一样苦", "你知道世界上一成不变的水是什么吗？——你的薪水", "看到工资条了，做锅里都捂不热我的心。", "努力上班，把腰上断，把眼上瞎，把头上秃，把人上傻", "锄禾日当午，上班好辛苦，上完一上午，还要上下午，不上没钱花，心里更痛苦。", "小时候多好，哭完就睡，现在哭完还得去上班。", "我明明这么可爱，为什么还要加班。", "想要有上班以外的生活，于是就有了加班。", "明明能靠颜值吃饭，偏偏却要工作。。", "人之初，性本善，不想上班怎么办？", "我病了，一上班就崩溃的那种。", "摸鱼一时爽，一直摸鱼一直爽！", "六一快到了，我想要可达鸭！", "端午快到了，我想要端午礼物和放假！"],
    talkInBed_M2: ["我是一棵卷心菜，有卷别人的心，但我菜。", "别人拉屎拉在厕所，我直接憋住，太方便了，卷他们。", "别人都吃炸鸡喝可乐，我天天喝热水，身体比他们好，卷他们。", "宁可累死自己，也要卷到别人", "初听内卷不知意，再听已是卷中人", "这不叫内卷 这叫悄悄的学习 然后惊艳所有人！", "卷得卷中卷，方为人上人。", "卷王出征,寸草不生。", "人人皆可卷,万物皆可卷。", "努力上班，把腰上断，把眼上瞎，把头上秃，把人上傻", "好好内卷,好好变菜,请叫我卷心菜。", "同事都下班了，我要偷偷加班完成业绩，得到boss重用，卷死他们。", "有觉我不睡，我工作，往死了卷。", "今日我以内卷为荣，明日内卷以我为荣。"],
    talkInBed_M3: ["上班打工是劳动所得，只有摸鱼才是真的赚钱", "每个月总有那么三十几天不想上班。", "说实话，我觉得我的星座不适合上班，只适合领工资。", "不要跟我谈理想，我的理想是不上班。", "我在办公室...困得像只狗", "又是周一，我不舍得睡，你不舍得起……", "刚喝了一杯美式，好苦，跟我的命一样苦", "你知道世界上一成不变的水是什么吗？——你的薪水", "看到工资条了，做锅里都捂不热我的心。", "努力加班，把腰上断，把眼上瞎，把头上秃，把人上傻", "锄禾日当午，上班好辛苦，上完一上午，还要上下午，不上没钱花，心里更痛苦。", "小时候多好，哭完就睡，现在哭完还得去上班。", "我明明这么可爱，为什么还要加班。", "想要有上班以外的生活，于是就有了加班。", "明明能靠颜值吃饭，偏偏却要工作。。", "人之初，性本善，不想加班怎么办？", "我病了，一上班就崩溃的那种。", "摸鱼一时爽，一直摸鱼一直爽！", "六一快到了，我想要可达鸭！", "端午快到了，我想要端午礼物和放假！"]
  }, e;
}

o["default"] = e;

cc._RF.pop();