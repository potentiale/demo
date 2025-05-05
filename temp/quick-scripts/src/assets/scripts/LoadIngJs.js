"use strict";
cc._RF.push(module, '635daupjp1MELec1AzzYoP6', 'LoadIngJs');
// scripts/LoadIngJs.js

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
    s = e("pop"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = s["default"], i(c, r), c.prototype.onLoad = function () {
  this.node.opacity = 255, this.show();
}, c.prototype.show = function () {
  this.loadShow || (this.loadShow = !0, this.node.opacity = 0, this.node.active = !0, cc.tween(this.node).to(.3, {
    opacity: 255
  }).start());
}, c.prototype.hide = function (e) {
  var t = this;
  void 0 === e && (e = 0), cc.Tween.stopAllByTarget(this.node), cc.tween(this.node).delay(e).to(.1, {
    opacity: 0
  }).call(function () {
    t.node.active = !1, t.loadShow = !1;
  }).start();
}, a([e], c));

function c() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.nodeArr = [], e.startPoint = [], e.loadShow = !1, e;
}

o["default"] = e;

cc._RF.pop();