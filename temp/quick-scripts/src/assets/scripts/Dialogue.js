"use strict";
cc._RF.push(module, '234c6wbR79D76vqNzY2QlPP', 'Dialogue');
// scripts/Dialogue.js

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
    s = cc._decorator,
    t = s.ccclass,
    t = (s.property, r = cc.Component, i(c, r), c.prototype.getCom = function () {
  this.bg = this.node.getChildByName("bg"), this.text = this.node.getChildByName("text"), this.textLabel = this.text.getComponent(cc.Label);
}, c.prototype.set = function (e, t) {
  var o = this,
      n = e.split("");
  this.node.opacity = 255, this.textLabel || this.getCom(), this.textLabel.string = "", this.isEnd = !1, this.setHeiht();

  var i = function i() {
    if (0 == n.length) return o.isEnd = !0, o.unschedule(i), void cc.tween(o.node).delay(t).to(.3, {
      opacity: 0
    }).call(function () {
      o.deleteNode();
    }).start();
    var e = n.splice(0, 1);
    o.textLabel.string = o.textLabel.string.replace("      ", ""), o.textLabel.string = o.textLabel.string + e + "      ";
  };

  this.schedule(i, .05);
}, c.prototype.setHeiht = function () {
  this.isEnd || (this.bg.height = this.offset.b + this.text.height + this.offset.t);
}, c.prototype.deleteNode = function () {
  this.node._pool ? this.node._pool.ReturnPool(this.node) : (this.node.destroy(), this.node.removeFromParent(!1));
}, c.prototype.update = function () {
  this.setHeiht();
}, a([t], c));

function c() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.offset = {
    t: 10,
    b: 24,
    l: 24,
    r: 24
  }, e.isEnd = !0, e;
}

o["default"] = t;

cc._RF.pop();