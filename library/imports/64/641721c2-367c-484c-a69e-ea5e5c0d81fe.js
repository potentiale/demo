"use strict";
cc._RF.push(module, '64172HCNnxITKae6l5cDYH+', 'RoleUIList');
// scripts/RoleUIList.js

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
    l = e("AppCommon"),
    s = e("ListenID"),
    p = e("Cfg"),
    c = e("GameScene"),
    d = e("ModelManage"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = cc.Component, i(u, r), u.prototype.start = function () {
  var n = this;
  l["default"].MapClr.myMap.node.once(s.ListenID.GameState, function () {
    0 <= [c.GAME_STATE.CountDown, c.GAME_STATE.Game].indexOf(l["default"].GScene._GameState) && n.loadList();
  }, this), l["default"].MapClr.myMap.node.on(s.ListenID.Role_State, function (e, t) {
    void 0 === t && (t = !1);
    var o = l["default"].MapClr.roleList[e];
    o && n.setItemState({
      isPlayer: o.isPlayer,
      isDie: o._life <= 0
    }, e, t);
  }, this), l["default"].MapClr.myMap.node.on(s.ListenID.Monster_State, function (e, t) {
    void 0 === t && (t = !1);
    var o = l["default"].MapClr.roleList[0];
    o && n.setItemState({
      isPlayer: l["default"].GScene._GameModel != d.GAME_MODEL.TANG_PING,
      isDie: o._life <= 0
    }, 0, t);
  }, this);
}, u.prototype.loadList = function () {
  var s = this,
      c = l["default"].MapClr.roleList;
  cc.resources.load("prefab/game/ui/HeadItem", cc.Prefab, function (e, n) {
    if (l["default"].MapClr.myMap) {
      var t, o, i, a, r;

      for (t in c) {
        !function (e) {
          var t = c[e],
              o = cc.instantiate(n);
          o.setParent(s.node), s.roleList[t.roleID] = o, s.setItemState({
            isPlayer: t.isPlayer,
            isDie: t._life <= 0
          }, t.roleID), cc.resources.load("img/viewUi/" + t.matchData.img + "_68", cc.SpriteFrame, function (e, t) {
            o.children[1].getComponent(cc.Sprite).spriteFrame = t, o.children[1].active = !0;
          }), o.on(cc.Node.EventType.TOUCH_START, function () {
            s.clickRoleHead(t.node.position);
          }, s);
        }(t);
      }

      l["default"].GScene._GameModel != d.GAME_MODEL.MO_YU && ((o = cc.instantiate(n)).setParent(s.node), s.roleList[0] = o, i = l["default"].MapClr.monsterList[0], a = l["default"].GScene._GameModel == d.GAME_MODEL.TANG_PING ? "role" + p.Cfg.Ghost1.get(l["default"].MapClr.AiBossData.attributes).icon : i.matchData.img, cc.resources.load("img/viewUi/" + a, cc.SpriteFrame, function (e, t) {
        o.children[1].getComponent(cc.Sprite).spriteFrame = t, o.children[1].scale = .55, o.children[1].active = !0;
      }), o.scale = 1.1, o.on(cc.Node.EventType.TOUCH_START, function () {
        s.clickRoleHead(i.node.position);
      }, s), (r = s.node.getComponent(cc.Layout)) && (o.opacity = 0, s.scheduleOnce(function () {
        r.enabled = !1, o.x = 637, o.opacity = 255, o.children[5].active = !0, l["default"].GScene._GameModel == d.GAME_MODEL.TANG_PING && (o.children[0].active = !0);
      }, .1)), o.children[5].getComponent(cc.Label).string = l["default"].GScene._GameModel == d.GAME_MODEL.TANG_PING ? "点击查看位置" : "我", s.setItemState({
        isPlayer: l["default"].GScene._GameModel != d.GAME_MODEL.TANG_PING,
        isDie: i._life <= 0
      }, 0));
    }
  });
}, u.prototype.setItemState = function (e, t, o) {
  void 0 === o && (o = !1);
  var n = this.roleList[t];
  if (!n) return cc.log("缺少对象");
  n.children[2].active = e.isPlayer, n.children[3].active = e.isDie, o && (cc.Tween.stopAllByTarget(n.children[4]), n.children[4].active = !0, n.children[4].opacity = 180, cc.tween(n.children[4]).to(.8, {
    opacity: 0
  }).call(function () {
    n.children[4].active = !1;
  }).start());
}, u.prototype.clickRoleHead = function (e) {
  l["default"].GScene.GameCamera.node.setPosition(e);
}, a([e], u));

function u() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.roleList = {}, e;
}

o["default"] = e;

cc._RF.pop();