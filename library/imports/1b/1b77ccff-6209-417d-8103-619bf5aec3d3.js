"use strict";
cc._RF.push(module, '1b77cz/YglBfYEDYZv1rsPT', 'pop_MatcAM');
// scripts/pop_MatcAM.js

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
    c = e("GameScene"),
    l = e("pop"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = l["default"], i(p, r), a([e], p));

function p() {
  var n = null !== r && r.apply(this, arguments) || this;
  return n.initFun = {
    pop_MatcAM_1v1: function pop_MatcAM_1v1() {
      for (var e in s["default"].MapClr.MatchRoleData) {
        !function (e) {
          var o = s["default"].MapClr.MatchRoleData[e];
          n.nodeArr[o.index + 1].children[0].children[0].getComponent(cc.Label).string = o.name, cc.resources.load("img/viewUi/" + o.img, cc.SpriteFrame, function (e, t) {
            n.nodeArr[o.index + 1].children[0].children[1].getComponent(cc.Sprite).spriteFrame = t;
          });
        }(e);
      }

      n.nodeArr[0].scaleY = 0, n.nodeArr[1].x = -1e3, n.nodeArr[2].x = 1e3, n.nodeArr[3].scale = 10, n.nodeArr[3].opacity = 0, n.nodeArr[4].scale = 0, cc.tween(n.nodeArr[0]).to(.3, {
        scaleY: 1
      }).call(function () {
        cc.tween(n.nodeArr[1]).to(.3, {
          x: 0
        }).to(.1, {
          x: -100
        }).to(.1, {
          x: -10
        }).to(.1, {
          x: -20
        }).start(), cc.tween(n.nodeArr[2]).to(.3, {
          x: 0
        }).to(.1, {
          x: 100
        }).to(.1, {
          x: 10
        }).to(.1, {
          x: 20
        }).start(), cc.tween(n.nodeArr[3]).delay(.3).to(.2, {
          scale: 1,
          opacity: 255
        }).to(.1, {
          scale: 1.1
        }).to(.1, {
          scale: 1
        }).start(), cc.tween(n.nodeArr[4]).delay(.5).to(.2, {
          scale: 1
        }).start();
      }).call(function () {
        n.pdata.call && n.pdata.call();
      }).delay(1.5).call(function () {
        cc.tween(n.node).to(.5, {
          opacity: 0
        }).call(function () {
          n.close(), s["default"].GScene.setGameStart(c.GAME_STATE.CountDown);
        }).start();
      }).start();
    }
  }, n;
}

o["default"] = e;

cc._RF.pop();