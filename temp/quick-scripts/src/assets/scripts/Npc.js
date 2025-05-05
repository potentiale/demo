"use strict";
cc._RF.push(module, 'c0b7cq2kKFKG7nSMl79iygj', 'Npc');
// scripts/Npc.js

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
    p = e("AppCommon"),
    d = e("CCTool"),
    s = e("AINpc"),
    c = e("AIState"),
    l = e("LivingThingBase"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = l["default"], i(u, r), u.prototype.init = function (e) {
  this._isActive = !0, this.npcData = e, this.initNpcAI(), this.CDManage = new d.CCTool.CDManage({
    dialogue: 5
  });
}, u.prototype.initNpcAI = function () {
  this.initFun[this.npcData.name]();
}, u.prototype.newTouchEvent = function () {
  var e = this,
      t = !1;
  this.node.on(cc.Node.EventType.TOUCH_START, function () {
    t = !0;
  }, this), this.node.on(cc.Node.EventType.TOUCH_END, function () {
    t && (10 < p["default"].data.cameraMoveNum || (e.clickFun[e.npcData.name](), t = !1));
  }, this);
}, u.prototype.getHurt = function (e) {
  this._isActive && this.setLife(e);
}, u.prototype.setDestroyed = function () {
  this._isActive && (this.node.active = !1, this._isActive = !1, p["default"].MapClr.deleteNode(this.node));
}, u.prototype.newSkeleton = function (o) {
  var n = this,
      i = new cc.Node("sp");
  i.setParent(this.node), i.setPosition(o.pos);
  var a = i.addComponent(sp.Skeleton);
  this.mySkeleton = a, cc.resources.load(o.img, sp.SkeletonData, function (e, t) {
    return t ? a ? (a.skeletonData = t, n.setAnimation(o.am || "idle", !0), void (o.call && o.call(i))) : cc.log("没有对象") : cc.log("下载失败");
  });
}, u.prototype.newImg = function (o) {
  var n = new cc.Node("sp");
  n.setParent(this.node), n.setPosition(o.pos);
  var i = n.addComponent(cc.Sprite);
  this.mySprite = i, cc.resources.load("img/" + o.img, cc.SpriteFrame, function (e, t) {
    return t ? i ? (i.spriteFrame = t, void (o.call && o.call(n))) : cc.log("没有对象") : cc.log("下载失败");
  });
}, u.prototype.update = function (e) {
  p["default"].GScene.isPause || this.CDManage.OnUpdate(e);
}, a([e], u));

function u() {
  var l = null !== r && r.apply(this, arguments) || this;
  return l.data = {}, l.initFun = {
    kuaidiyuan: function kuaidiyuan() {
      l.newSkeleton({
        img: "bones/kuaidiyuan",
        am: "move",
        pos: cc.v2(6, -40)
      }), l.myFSM = l.node.addComponent(s["default"]), l.myFSM.initState(l), l.npcFun[l.npcData.name](), l.newTouchEvent();
    },
    robberycat: function robberycat() {
      l.data.canClickNum = 20, l.newImg({
        img: "gameResources/robberycat",
        am: "move",
        pos: cc.v2(6, -20),
        call: function call(e) {
          e.setAnchorPoint(.5, .3);
        }
      }), l.node.children[0].active = !1, l.newTouchEvent();
    }
  }, l.npcFun = {
    kuaidiyuan: function kuaidiyuan() {
      var e,
          t = [[12, 20], [9, 20], [0, 20], [1, 19], [1, 0], [10, 0], [9, 1], [9, 20], [1, 20], [-8, 20]],
          o = [];

      for (e in t) {
        o.push(p["default"].MapClr.getV2Pos({
          x: t[e][0],
          y: t[e][1]
        }));
      }

      l.myFSM.path = o, l.myFSM.setAIState(c.StateType.Move), l.myFSM._AiParameter.moveSpeed = 120, l.myFSM.onMoveEnd = function () {
        l.setDestroyed();
      }, l.schedule(function () {
        l.CDManage.Check("dialogue") && (p["default"].MapClr.newDialogue(l.node, cc.v2(10, 50), "您的摸鱼快递到了，麻烦点我签收~", 3.5), l.CDManage.Set("dialogue"));
      }, 1);
    }
  }, l.clickFun = {
    kuaidiyuan: function kuaidiyuan() {
      d.CCTool.UI.OpenPop("prefab/pop/pop_GameKuaidi", {
        call: function call(e) {
          e && l.setDestroyed();
        }
      });
    },
    robberycat: function robberycat() {
      if (cc.log("robberycat "), p["default"].GScene.player.myBed) {
        if (l.data.canClickNum <= 0) return d.CCTool.UI.ShowToast("猫猫也是有极限的...");
        var e = p["default"].CONFIG_INFO.m1_CatCoin,
            t = 1,
            o = 0;

        if (e) {
          for (var n = e, i = [], a = 0, r = n.length / 2; a < r; a++) {
            var s = n[2 * a],
                c = n[2 * a + 1];
            i[a] = {
              w: c,
              v: s
            }, o = Math.max(o, s);
          }

          t = p["default"].weightGetValue(i).v;
        }

        p["default"].GScene.player.setCoin(t), d.CCTool.UI.ShowToast("成功劫获" + t + "金币"), cc.Tween.stopAllByTarget(l.mySprite.node), cc.tween(l.mySprite.node).to(.1, {
          angle: -20
        }).to(.1, {
          angle: 20
        }).to(.1, {
          angle: 0
        }).start(), l.data.canClickNum--;
      }
    }
  }, l;
}

o["default"] = e;

cc._RF.pop();