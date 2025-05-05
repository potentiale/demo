"use strict";
cc._RF.push(module, '0eae7MIyNdKtrFvPe1s4n+8', 'Produce');
// scripts/Produce.js

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
    c = e("CCTool"),
    l = e("ConstructBase"),
    p = cc._decorator,
    t = p.ccclass,
    e = p.menu,
    e = (p.property, r = l["default"], i(d, r), d.prototype.effectTrigger = function () {
  var e;
  this.attribute.data.outputCoin ? (e = this.attribute.data.outputCoin * this.ower.outputRatio, this.ower.setCoin(e), c.CCTool.System.InCamera(this.node.position) && s["default"].MapClr.newLabelTips("+" + e, this.node.position, cc.Color.YELLOW, "Fish coin")) : this.attribute.data.outputPower && (e = this.attribute.data.outputPower * this.ower.outputRatio, this.ower.setPower(e), c.CCTool.System.InCamera(this.node.position) && s["default"].MapClr.newLabelTips("+" + e, this.node.position, cc.Color.BLUE, "energy"));
}, a([t, e("gameElement/Produce")], d));

function d() {
  return null !== r && r.apply(this, arguments) || this;
}

o["default"] = e;

cc._RF.pop();