"use strict";
cc._RF.push(module, 'e1f40qFYkdACoEDrZzblpVK', 'SkillMonster');
// scripts/SkillMonster.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var _n,
    t = void 0 && (void 0).__extends || (_n = function n(e, t) {
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
}), o.SkillMonster = void 0;
var i,
    a = e("AppCommon"),
    r = e("CCTool"),
    s = e("ListenID"),
    c = e("Cfg"),
    t = (i = e("SkillManage").SkillManage, t(l, i), l.prototype.updateSkillEnergy = function (e, t) {
  for (var o in this.energyList) {
    var n = this.markNodeBar[o],
        i = c.Cfg.SkillGhost.get(o);
    i && i.energyGet == e && (this.energyList[o] ? (this.energyList[o].cur += t, this.energyList[o].cur = cc.misc.clampf(this.energyList[o].cur, 0, this.energyList[o].all), n && n.resetSector((this.energyList[o].all - this.energyList[o].cur) / this.energyList[o].all)) : n && n.resetSector(1));
  }
}, l);

function l() {
  var o = null !== i && i.apply(this, arguments) || this;
  return o.itemList = [], o.cfgTag = "SkillGhost", o.skill = {
    1: function _(t) {
      return o.ower.setEnergy(-t.energy, t.energyGet), o.ower.isRageAtkSpeed += t.parameter[0], a["default"].MainView.gameMsg("管理者发火了，攻击速度加快"), a["default"].MapClr.newEffects(o.ower.node.position, "angry", function (e) {
        r.CCTool.Audio.CameraPlayer(o.ower.node.position, "Ghost1_Skill1"), e.zIndex = o.ower.node.zIndex + 1, e.setParent(o.ower.node), e.setPosition(0, 0), o.ower.scheduleOnce(function () {
          o.ower.isRageAtkSpeed -= t.parameter[0], a["default"].MapClr.deleteNode(e);
        }, t.last);
      }), a["default"].MapClr.myMap.node.emit(s.ListenID.Monster_Skill, t), !0;
    },
    2: function _(e) {
      return o.ower.setEnergy(-e.energy, e.energyGet), a["default"].MapClr.myMap.node.emit(s.ListenID.Monster_Skill, e), a["default"].MainView.gameMsg("管理者释放了欧气，攻击建筑失效"), a["default"].MapClr.newEffects(o.ower.node.position, "howl", function (e) {
        r.CCTool.Audio.CameraPlayer(o.ower.node.position, "Ghost1_Skill2"), e.setParent(o.ower.node), e.setPosition(0, 0), e.zIndex = o.ower.node.zIndex - 1;
      }), !0;
    },
    3: function _(e) {
      return o.ower.setEnergy(-e.energy, e.energyGet), a["default"].MapClr.myMap.node.emit(s.ListenID.Monster_Skill, e), a["default"].MainView.gameMsg("管理者释放了木马病毒，所有摸鱼设备失效"), !0;
    },
    4: function _(t) {
      return o.ower.setEnergy(-t.energy, t.energyGet), a["default"].MainView.gameMsg("管理者发动防火墙，阻挡一切火力"), a["default"].MapClr.newEffects(o.ower.node.position, "invicible", function (e) {
        e.setParent(o.ower.node), e.setPosition(0, 0), o.ower.scheduleOnce(function () {
          a["default"].MapClr.deleteNode(e);
        }, t.last);
      }), o.ower.isInvicible = !0, o.ower.scheduleOnce(function () {
        o.ower.isInvicible = !1;
      }, t.last), !0;
    }
  }, o;
}

o.SkillMonster = t;

cc._RF.pop();