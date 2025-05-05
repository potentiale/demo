"use strict";
cc._RF.push(module, '233cb/vcZxABZG2nBEI/r26', 'SwitchBtn');
// scripts/SwitchBtn.js

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
    e = (r = cc.Component, i(c, r), c.prototype.start = function () {
  s["default"].data.BannerHidth && (this.node.getComponent(cc.Widget).destroy(), this.node.y = -cc.winSize.height / 2 + s["default"].data.BannerHidth + 30), this.setState(!1);
}, c.prototype.getState = function () {
  return this.node.active && this.isSelect;
}, c.prototype.setState = function (e) {
  this.isSelect = e, this.nodeArr[0].active = this.isSelect, cc.log("[setState][isSelect]", this.isSelect);
}, c.prototype.setLabel = function (e) {
  this.node.children[1].getComponent(cc.Label).string = e;
}, c.prototype.onClick = function () {
  this.isSelect = !this.isSelect, this.nodeArr[0].active = this.isSelect, cc.log("[onClick][isSelect]", this.isSelect);
}, a([t([cc.Node])], c.prototype, "nodeArr", void 0), a([t], c.prototype, "isAutoSelect", void 0), a([e], c));

function c() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.nodeArr = [], e.isAutoSelect = !1, e.isSelect = !1, e;
}

o["default"] = e;

cc._RF.pop();