"use strict";
cc._RF.push(module, '1e93f//bRlK/KKfNads9xN+', 'Summoned');
// scripts/Summoned.js

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
    c = e("AIState"),
    l = e("AISummoned"),
    p = e("LivingThingBase"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, cc.v2(), r = p["default"], i(d, r), d.prototype.setPursuitTarget = function (e) {
  var t = this;
  this.target = e;
  e = this.node.getComponent(l["default"]);
  e || (e = this.node.addComponent(l["default"])).initState(this), this._isActive = !0, this.myFSM = e, this.myFSM.setAIState(c.StateType.Move), this.scheduleOnce(function () {
    t.node.destroy();
  }, this.fadeTime);
}, d.prototype.update = function () {}, d.prototype.getZIndex = function () {
  this.node.zIndex = +s["default"].MapClr.mapSize.height;
}, a([e], d));

function d() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.target = null, e.moveSpeed = 0, e.attackNum = 0, e.attackDelta = 0, e.attackRange = 0, e.fadeTime = 0, e._curAttackDelta = 0, e;
}

o["default"] = e;

cc._RF.pop();