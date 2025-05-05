"use strict";
cc._RF.push(module, '11ff1UYFudMH56qAxfya1Hz', 'ProgressBar');
// scripts/ProgressBar.js

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
    s = e("CCTool"),
    c = cc._decorator,
    t = c.ccclass,
    e = c.menu,
    c = c.property,
    e = (r = cc.Component, i(l, r), l.prototype.onLoad = function () {
  this.width = this.node.children[0].width, this.set(1);
}, l.prototype.set = function (e) {
  cc.Tween.stopAllByTarget(this.node.children[0]), s.CCTool.System.InCamera(this.node.position) ? cc.tween(this.node.children[0]).to(.1, {
    width: this.width * e
  }).start() : this.node.children[0].width = this.width * e;
}, l.prototype.setSector = function (e, t) {
  this.img.fillRange = 1, cc.tween(this.img).to(e, {
    fillRange: 0
  }).call(function () {
    t && t();
  }).start();
}, l.prototype.resetSector = function (e) {
  this.img.fillRange = e;
}, a([c(cc.Sprite)], l.prototype, "img", void 0), a([t, e("UI/ProgressBar")], l));

function l() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.img = null, e;
}

o["default"] = e;

cc._RF.pop();