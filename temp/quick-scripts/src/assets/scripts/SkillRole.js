"use strict";
cc._RF.push(module, '26fe3nuRoZEX7ozWlLaq2bC', 'SkillRole');
// scripts/SkillRole.js

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
}), o.SkillRole = void 0;

var i,
    m = e("AppCommon"),
    y = e("CCTool"),
    a = e("ListenID"),
    g = e("Cfg"),
    _2 = e("Door"),
    r = e("GameScene"),
    s = e("Summoned"),
    c = e("SkillManage"),
    t = (i = c.SkillManage, t(l, i), l);

function l() {
  var h = null !== i && i.apply(this, arguments) || this;
  return h.itemList = [], h.cfgTag = "SkillMan", h.skill = {
    1: function _(n) {
      if (h.ower.myDoor && !(.98 < h.ower.myDoor._lifeRatio)) return h.ower.CDManage.Set(n.id), m["default"].MapClr.newEffects(h.ower.myDoor.node.position, "repair", function (e) {
        e.setParent(h.ower.myDoor.node), e.setPosition(cc.Vec2.ZERO), e.zIndex = h.ower.myDoor.node.zIndex + 1;

        var t = 0,
            o = function o() {
          t += n.parameter[0], h.ower.myDoor._life && h.ower.myDoor.setLife(h.ower.myDoor.attribute.data.hp * n.parameter[1]), t >= n.last && (h.ower.unschedule(o), m["default"].MapClr.deleteNode(e));
        };

        h.ower.schedule(o, n.parameter[0]);
      }), m["default"].MapClr.myMap.node.emit(a.ListenID.Role_Skill, n, h.ower.roleID), !0;
    },
    2: function _(e) {
      return h.ower.CDManage.Set(e.id), h.ower.outputRatio = e.parameter[0], h.ower.scheduleOnce(function () {
        h.ower.outputRatio = 1;
      }, e.last), m["default"].MapClr.myMap.node.emit(a.ListenID.Role_Skill, e, h.ower.roleID), h.ower.isPlayer && y.CCTool.UI.ShowToast(c.SkillManage.getDescr(e)), !0;
    },
    3: function _(t) {
      var o = h.ower.myDoor;
      if (o) return y.CCTool.Audio.Player("skill_man_10000"), m["default"].MapClr.newEffects(o.node.position, "heiguo", function (e) {
        e.setParent(o.node), e.setPosition(0, 0), e.zIndex = o.node.zIndex + 3, h.ower.CDManage.Set(t.id), o.setInvincible(t.last, function () {
          cc.log("无敌结束"), e.destroy();
        });
      }), !0;
    },
    4: function _(e) {
      if (h.ower.myDoor && h.ower.myBed) {
        for (var t = [], o = 0, n = e.parameter.length / 2; o < n; o++) {
          var i = e.parameter[2 * o + 1],
              a = e.parameter[2 * o];
          t.push({
            w: i,
            v: a
          });
        }

        var r,
            s = [],
            c = [],
            l = h.ower.myBed.myTerritoryMap;

        for (r in l) {
          for (var p in l[r]) {
            var d = l[r][p];

            if (d.arc) {
              for (d.arc instanceof _2["default"] && (c = [Number(r), Number(p)]), o = t.length - 1; 0 <= o; o--) {
                if (t[o].v === d.arc.attribute.buildingType) {
                  t.splice(o, 1);
                  break;
                }
              }
            } else s.push([Number(r), Number(p)]);
          }
        }

        if (s.length <= 0) h.ower.isPlayer && y.CCTool.UI.ShowToast("没有空余位置可建造");else {
          if (!(t.length <= 0)) {
            s.sort(function (e, t) {
              e = Math.pow(e[0] - c[0], 2) + Math.pow(e[1] - c[1], 2);
              return Math.pow(t[0] - c[0], 2) + Math.pow(t[1] - c[1], 2) - e;
            });
            var u = s[0],
                f = m["default"].weightGetValue(t),
                f = g.Cfg.Building1.filter({
              buildingType: f.v
            });
            return m["default"].MapClr.newBuild(f[0], {
              x: u[0],
              y: u[1]
            }, h.ower), h.ower.CDManage.Set(e.id), !0;
          }

          h.ower.isPlayer && y.CCTool.UI.ShowToast("已拥有所有辅助建筑");
        }
      }
    },
    5: function _(e) {
      for (var t = e.parameter[e.parameter.length - 1], o = 0, n = e.parameter.length - 1; o < n; o++) {
        var i = e.parameter[o];
        h.ower.reduceRationList.set(i, 1 - t);
      }

      return !0;
    },
    6: function _(o) {
      if (h.ower.myDoor && m["default"].GScene._GameState == r.GAME_STATE.Game) {
        var e,
            n = null;

        for (e in m["default"].MapClr.monsterList) {
          var t = m["default"].MapClr.monsterList[e];

          if (t && 0 < t._life && t._owerID != h.ower.roleID) {
            n = t;
            break;
          }
        }

        return n && cc.resources.load("prefab/game/Element/Summoned", cc.Prefab, function (e, t) {
          e ? console.error(e.message) : (e = n.node.parent, (t = cc.instantiate(t)).parent = e, t.setPosition(h.ower.myDoor.node.position), (t = t.getComponent(s["default"])).setOwer(h.ower), t.moveSpeed = o.parameter[1], t.attackRange = o.parameter[2], t.attackDelta = 1 / o.parameter[3], t.attackNum = Math.ceil(o.parameter[0] * n.attribute.data.hp), t.fadeTime = o.last, t.setPursuitTarget(n));
        }), h.ower.CDManage.Set(o.id), !0;
      }
    },
    7: function _(e) {
      var t = e.parameter,
          o = t[0],
          n = t[1],
          i = t[2],
          a = t[3],
          t = e.lvInfo[0],
          a = Math.ceil(o * t + n * Math.pow(2, t - 1) * m["default"].GetRandomNum(i, a));
      return h.ower.setCoin(a), m["default"].MapClr.newLabelTips("+" + a, h.ower.node.position, cc.Color.YELLOW, "Fish coin"), h.ower.CDManage.Set(e.id), !0;
    }
  }, h;
}

o.SkillRole = t;

cc._RF.pop();