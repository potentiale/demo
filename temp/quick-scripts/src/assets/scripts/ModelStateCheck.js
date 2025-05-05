"use strict";
cc._RF.push(module, 'c8a5aQ63bJP46f/59pGcVTe', 'ModelStateCheck');
// scripts/ModelStateCheck.js

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
var r = e("UserVo"),
    s = e("ModelManage"),
    c = cc._decorator,
    t = c.ccclass,
    e = c.menu,
    c = c.property;
cc.Enum(s.GAME_MODEL);
var l,
    e = (l = cc.Component, i(p, l), p.prototype.onLoad = function () {}, p.prototype.onEnable = function () {
  this.updateDesc();
}, p.prototype.updateDesc = function () {
  var e = r.UserVo.getModelStateInfo(this.model - 1);
  this.modelInfoNode.active = e && 0 < e.lockNum;
  var t = this.modelInfoNode.children[2].getComponent(cc.Label);
  this.modelInfoNode.active && t ? t.string = cc.js.formatStr("游玩%d次永久解锁", e.lockNum) : ((e = this.modelInfoNode.parent.getChildByName("New Label").getComponent(cc.Label)).node.setPosition(0, 1.615), e.fontSize = 45);
}, p.prototype.getIsUnlockByModel = function () {
  return r.UserVo.getModelStateInfo(this.model - 1).lockNum <= 0;
}, p.prototype.reduceLockNum = function () {
  r.UserVo.setModelStateInfo(this.model - 1, -1), this.updateDesc();
}, p.prototype.start = function () {}, a([c({
  type: s.GAME_MODEL
})], p.prototype, "model", void 0), a([c(cc.Node)], p.prototype, "modelInfoNode", void 0), a([t, e("UI/ModelStateCheck")], p));

function p() {
  var e = null !== l && l.apply(this, arguments) || this;
  return e.model = s.GAME_MODEL.Not, e.modelInfoNode = null, e;
}

o["default"] = e;

cc._RF.pop();