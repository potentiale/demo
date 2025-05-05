"use strict";
cc._RF.push(module, '322cea1GCNG4Y24fzrCfDaf', 'SkillBuilding');
// scripts/SkillBuilding.js

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
  this._isHaveUpDate = !1, this.initSkillFun[this.attribute.buildingType] && this.initSkillFun[this.attribute.buildingType]();
}, f.prototype.deleteEffects = function (e) {
  e && e.active && (e._pool ? e._pool.ReturnPool(e) : (this.isEffectsUpCall = null, e.destroy(), e.removeFromParent(!1)));
}, f.prototype.onVanish = function () {
  this.deleteEffects(this.myEffects), this.onVanishFun[this.attribute.buildingType] && this.onVanishFun[this.attribute.buildingType]();
}, f.prototype.update = function (e) {
  s["default"].GScene.isPause || (this.isEffectsUpCall && this.isEffectsUpCall(), this.CDManage && this.CDManage.OnUpdate(e));
}, a([t, e("gameElement/SkillBuilding")], f));

function f() {
  var i = null !== r && r.apply(this, arguments) || this;
  return i.initSkillFun = {
    6: function _() {
      var e = i.attribute.data.parameter,
          t = i.ower.myDoor;
      i.schedule(function () {
        i._isActive && t.setLife(t.attribute.data.hp * e[1]);
      }, e[0]);
    },
    7: function _() {
      var t = s["default"].MapClr.monsterList[0],
          o = i.attribute.data.parameter;
      s["default"].MapClr.myMap.node.on(l.ListenID.Monster_Skill, function () {
        i._isActive && i.ower.roleID == t.myFSM.target.roleID && s["default"].GetProbability(o[0]) && s["default"].MapClr.newEffects(t.node.position, "ghosthand", function (e) {
          t.node && (e.zIndex = t.node.zIndex + 1, i.myEffects = e, t.setControlBody(o[1], function () {
            i.deleteEffects(e);
          }));
        });
      }, i);
    },
    8: function _() {
      var t = i.ower.myDoor,
          e = i.attribute.data.parameter;
      i.CDManage = new c.CCTool.CDManage({
        "default": e[2]
      }), i.myEffects || s["default"].MapClr.newEffects(t.node.position, "sheild", function (e) {
        t.node && (e.setParent(t.node), e.setPosition(0, 0), e.zIndex = t.node.zIndex + 3, (i.myEffects = e).active = !1);
      }), t.node.on(l.ListenID.Send_Hurt, function () {
        i._isActive && !i.myEffects.active && t._lifeRatio < e[0] && i.CDManage.Check() && (i.CDManage.Set(), i.myEffects.active = !0, t.setInvincible(e[1], function () {
          cc.log("无敌结束"), i.myEffects.active = !1;
        }));
      }, i);
    },
    9: function _() {
      i.ower._canStealMoney = !0;
    },
    10: function _() {
      i.ower._atkSpeedDown = i.attribute.data.parameter[0];
      var t = i.ower.myDoor;
      s["default"].MapClr.newEffects(t.node.position, "ice", function (e) {
        e.setParent(t.node), e.setPosition(0, 0), e.zIndex = t.node.zIndex + 1, i.myEffects = e;
      });
    },
    11: function _() {
      var t = s["default"].MapClr.monsterList[0],
          e = i.attribute.data.parameter;
      i.CDManage = new c.CCTool.CDManage({
        "default": e[0]
      }), t.node.on(l.ListenID.Monster_Flee, function () {
        i._isActive && i.ower.roleID == t.myAtkTargetID && s["default"].GetProbability(e[0]) && i.CDManage.Check() && (i.CDManage.Set(), c.CCTool.Audio.CameraPlayer(i.node.position, "Cobweb"), s["default"].MapClr.newBullet(i.node.position, {
          tag: t,
          img: "cobweb01",
          speed: 1500,
          owerID: i._owerID,
          hurtData: new d.HurtData(0),
          call: function call() {
            s["default"].MapClr.newEffects(t.node.position, "cobweb02", function (e) {
              t.node && (e.setParent(t.node), e.setPosition(0, 0), e.zIndex = t.node.zIndex + 1, i.myEffects = e);
            }), t.setControlBody(e[1], function () {
              cc.log("控制结束"), i.deleteEffects(i.myEffects);
            });
          }
        }));
      }, i);
    },
    12: function _() {
      var t = i.ower.myDoor,
          o = i.attribute.data.parameter;
      s["default"].MapClr.newEffects(t.node.position, "thorn", function (e) {
        e.setParent(t.node), e.setPosition(0, 0), e.zIndex = t.node.zIndex + 2, i.myEffects = e;
      }), t.node.on(l.ListenID.Send_Hurt, function () {
        var e;
        i._isActive && (e = s["default"].MapClr.monsterList[0]).node.emit(l.ListenID.Send_Hurt, new d.HurtData(-e.attribute.data.hp * o[0], i.ower.roleID, i.ower.type));
      }, i);
    },
    13: function _() {
      var n = s["default"].MapClr.monsterList[0],
          e = i.attribute.data.parameter;
      i.CDManage = new c.CCTool.CDManage({
        "default": e[2]
      }), n.node.on(l.ListenID.Send_Hurt, function () {
        i._isActive && n._lifeRatio < e[0] && i.ower.roleID == n.myAtkTargetID && i.CDManage.Check() && (i.CDManage.Set(), s["default"].MapClr.newEffects(i.node.position, "elec", function (o) {
          n.node && (c.CCTool.Audio.CameraPlayer(i.node.position, "Laser"), o.zIndex = n.node.zIndex + 2, i.myEffects = o, i.isEffectsUpCall = function () {
            var e = s["default"].getAngle(i.node.position, n.node.position) + 90,
                t = s["default"].getDistance(i.node.position, n.node.position);
            o.angle = e, o.height = t;
          }, n.node.emit(l.ListenID.Send_Hurt, new d.HurtData(-n.attribute.data.hp * e[1], i.ower.roleID, i.ower.type)), i.scheduleOnce(function () {
            i.deleteEffects(i.myEffects);
          }, .5));
        }));
      }, i);
    },
    14: function _() {},
    15: function _() {},
    16: function _() {}
  }, i.onVanishFun = {
    9: function _() {
      i.ower._canStealMoney = !1;
    },
    10: function _() {
      i.ower._atkSpeedDown = 0;
    }
  }, i;
}

o["default"] = e;

cc._RF.pop();