"use strict";
cc._RF.push(module, 'f119bSudTxI052qios3EULR', 'DeadSign');
// scripts/DeadSign.js

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
    c = e("ModelManage"),
    l = e("EggBase"),
    t = cc._decorator,
    e = t.ccclass,
    t = t.property,
    e = (r = l["default"], i(p, r), p.prototype.onLoad = function () {
  this.node.children[0].getComponent(cc.Sprite).spriteFrame = s["default"].GScene._GameModel === c.GAME_MODEL.TANG_PING ? this.signSprite[1] : this.signSprite[0];
}, p.prototype.start = function () {
  var e = this,
      t = s["default"].GScene._GameModel === c.GAME_MODEL.TANG_PING ? "又菜又苟" : "又卷又菜",
      o = this.node.getComponent(cc.Animation);
  o && (o = o.play(), this.scheduleOnce(function () {
    s["default"].MapClr.newDialogue(e.node, cc.v2(20, 70), t, 1.5);
  }, o.duration));
}, a([t([cc.SpriteFrame])], p.prototype, "signSprite", void 0), a([e], p));

function p() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.signSprite = [], e;
}

o["default"] = e;

cc._RF.pop();