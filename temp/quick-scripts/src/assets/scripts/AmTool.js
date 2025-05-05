"use strict";
cc._RF.push(module, 'b1ff6qhWLNEpbCHkSN2l4Xd', 'AmTool');
// scripts/AmTool.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var _n,
    i,
    a = void 0 && (void 0).__extends || (_n = function n(e, t) {
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
    r = void 0 && (void 0).__decorate || function (e, t, o, n) {
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
}), (l = i = i || {})[l.NOT = 0] = "NOT", l[l.FadeIn = 1] = "FadeIn", l[l.ScaleIn = 2] = "ScaleIn", l[l.Float = 3] = "Float", l[l.Breathing = 4] = "Breathing", l[l.FadeBreathing = 5] = "FadeBreathing", l[l.Rotate = 6] = "Rotate", l[l.BigIn = 7] = "BigIn", l[l.FadeOut = 8] = "FadeOut";
var s,
    c = cc._decorator,
    t = c.ccclass,
    l = c.menu,
    c = c.property,
    l = (s = cc.Component, a(p, s), p.prototype.onLoad = function () {
  switch (this.AmType) {
    case i.Float:
      cc.tween(this.node).sequence(cc.tween().by(this.amTime, {
        position: cc.v2(+this.toValue[0] || 0, +this.toValue[1] || 50)
      }, {
        easing: "sineInOut"
      }), cc.tween().by(this.amTime, {
        position: cc.v2(-+this.toValue[0] || 0, -this.toValue[1] || -50)
      }, {
        easing: "sineInOut"
      })).repeatForever().start();
      break;

    case i.Breathing:
      cc.tween(this.node).sequence(cc.tween().to(this.amTime, {
        scale: +this.toValue[0] || 1
      }, {
        easing: "sineInOut"
      }), cc.tween().to(this.amTime, {
        scale: +this.toValue[1] || 1.1
      }, {
        easing: "sineInOut"
      })).repeatForever().start();
      break;

    case i.FadeBreathing:
      cc.tween(this.node).sequence(cc.tween().to(this.amTime, {
        opacity: 0
      }, {
        easing: "sineInOut"
      }), cc.tween().to(this.amTime, {
        opacity: 255
      }, {
        easing: "sineInOut"
      })).repeatForever().start();
      break;

    case i.Rotate:
      cc.tween(this.node).by(this.amTime, {
        angle: -30
      }).repeatForever().start();
  }
}, p.prototype.onEnable = function () {
  switch (this.AmType) {
    case i.FadeIn:
      this.node.opacity = 0, cc.tween(this.node).delay(this.delayTime).to(this.amTime, {
        opacity: +this.toValue[0] || 255
      }).start();
      break;

    case i.FadeOut:
      this.node.opacity = 255, cc.tween(this.node).delay(this.delayTime).to(this.amTime, {
        opacity: +this.toValue[0] || 0
      }).start();
      break;

    case i.ScaleIn:
      this.node.scale = 0, cc.tween(this.node).delay(this.delayTime).to(this.amTime / 2, {
        scale: +this.toValue[0] || 1.2
      }).to(this.amTime / 3, {
        scale: +this.toValue[1] || 1
      }).start();
      break;

    case i.BigIn:
      this.node.scale = 4, this.node.opacity = 0, cc.tween(this.node).delay(this.delayTime).parallel(cc.tween().to(.2, {
        opacity: 255
      }), cc.tween().to(.3, {
        scale: 1
      })).start();
  }
}, r([c({
  type: cc.Enum(i),
  displayName: "动画类型"
})], p.prototype, "AmType", void 0), r([c({
  type: [cc.Float],
  displayName: "到达指定值"
})], p.prototype, "toValue", void 0), r([c({
  type: cc.Float,
  displayName: "动画时间"
})], p.prototype, "amTime", void 0), r([c({
  type: cc.Float,
  displayName: "等待时间"
})], p.prototype, "delayTime", void 0), r([t, l("UI/AmTool")], p));

function p() {
  var e = null !== s && s.apply(this, arguments) || this;
  return e.AmType = i.NOT, e.toValue = [], e.amTime = .3, e.delayTime = 0, e;
}

o["default"] = l;

cc._RF.pop();