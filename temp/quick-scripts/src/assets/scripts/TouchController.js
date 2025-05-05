"use strict";
cc._RF.push(module, 'd98691gD7JPT7Z+NlvYX9dL', 'TouchController');
// scripts/TouchController.js

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
    t = cc._decorator,
    e = t.ccclass,
    t = t.property,
    e = (r = cc.Component, i(c, r), c.prototype.onLoad = function () {
  cc.log("[TouchController][onLoad]"), s["default"].data.touchAngle = "-";
}, c.prototype.start = function () {
  var e = this.node.getComponent(cc.Widget);
  this.offsetPoint = {
    x: cc.winSize.width - e.right - this.node.width / 2,
    y: e.bottom + this.node.height / 2
  }, this.node.on(cc.Node.EventType.TOUCH_START, this.TOUCH_START, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TOUCH_MOVE, this), this.node.on(cc.Node.EventType.TOUCH_END, this.TOUCH_END, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TOUCH_END, this);
}, c.prototype.TOUCH_START = function () {}, c.prototype.TOUCH_MOVE = function (e) {
  cc.log("[TOUCH_MOVE]");
  var t = e.getLocation().sub(this.offsetPoint),
      o = t.mag(),
      e = s["default"].angle(t);
  s["default"].data.touchAngle = e, this.dir.x = t.x / o, this.dir.y = t.y / o, o > this.max_r && (t.x = t.x * this.max_r / o, t.y = t.y * this.max_r / o), this.coreNode.setPosition(t);
}, c.prototype.TOUCH_END = function (e) {
  e.touch._point, cc.tween(this.coreNode).to(.1, {
    position: cc.v2()
  }).start(), s["default"].data.touchAngle = "-";
}, a([t(cc.Node)], c.prototype, "coreNode", void 0), a([e], c));

function c() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.coreNode = null, e.dir = cc.v2(), e.max_r = 100, e;
}

o["default"] = e;

cc._RF.pop();