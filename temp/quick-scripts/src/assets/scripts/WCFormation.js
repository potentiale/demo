"use strict";
cc._RF.push(module, '4818fsMoO9AnI64+GhfHEzB', 'WCFormation');
// scripts/WCFormation.js

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
    c = e("PlatformFun"),
    t = cc._decorator,
    e = t.ccclass,
    t = t.property,
    e = (r = cc.Component, i(l, r), l.prototype.onLoad = function () {
  this.initFun[this.node.name] && this.initFun[this.node.name]();
}, l.prototype.cloneNode = function (e) {
  var t = cc.instantiate(e.node || this.node.children[0]);
  return t.setParent(e.parent || this.node), t.setPosition(e.pos), t;
}, a([t(sp.Skeleton)], l.prototype, "mySkeleton", void 0), a([e], l));

function l() {
  var n = null !== r && r.apply(this, arguments) || this;
  return n.mySkeleton = null, n.initFun = {
    Formation_1: function Formation_1() {
      c.PlatformFun.SendEvent(s["default"].GScene.getModeStr() + "fishwave"), n.scheduleOnce(function () {
        for (var o = cc.winSize, e = 0; e < 30; e++) {
          !function (e) {
            var t = e;
            cc.tween(n).delay(s["default"].GetRandomNum(0, 20) / 10).call(function () {
              var e;
              (e = 0 == t ? n.node.children[2] : n.cloneNode({
                node: n.node.children[2],
                parent: n.node,
                pos: cc.v2(s["default"].GetRandomNum(.4 * -o.width, .4 * o.width), -o.height / 2 - s["default"].GetRandomNum(200, 300))
              })).getComponent(cc.Animation).defaultClip.speed = s["default"].GetRandomNum(8, 15) / 10, cc.tween(e).by(2, {
                y: o.height + 400
              }).call(function () {
                e.destroy();
              }).start();
            }).start();
          }(e);
        }

        n.schedule(function () {
          0 == n.node.childrenCount && n.node.destroy();
        }, .5), cc.tween(n.node.children[1]).parallel(cc.tween().by(2, {
          y: o.height + 400
        }), cc.tween().to(2, {
          opacity: 0
        })).call(function () {
          n.node.children[0].destroy(), n.node.children[1].destroy();
        }).start();
      }, 2);
    }
  }, n;
}

o["default"] = e;

cc._RF.pop();