"use strict";
cc._RF.push(module, '7b86esFw5VP8p3WxKF1sB21', 'Ghost999Cfg');
// scripts/Ghost999Cfg.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var _n,
    t = void 0 && (void 0).__extends || (_n = function n(e, t) {
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
});

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.Ghost999CfgReader = void 0;
var i,
    t = (i = e("TConfig").TConfig, t(a, i), a);

function a() {
  var e = i.call(this) || this;
  return e._name = "Ghost999", e.initByMap({
    1: {
      id: 1,
      level: 1,
      exp: 30,
      hp: 180,
      atk: 1,
      atkspeed: 1,
      MoveSpeedGhost: 500,
      AttackRangeGhost: 150,
      icon: "20000",
      RoleBones: "bones/boss1",
      model: [4],
      skillID: [2e4, 20050]
    },
    2: {
      id: 2,
      level: 2,
      exp: 60,
      hp: 360,
      atk: 1,
      atkspeed: 1,
      MoveSpeedGhost: 500,
      AttackRangeGhost: 150,
      icon: "20000",
      RoleBones: "bones/boss1",
      model: [4],
      skillID: [2e4, 20050]
    }
  }), e;
}

o.Ghost999CfgReader = t;

cc._RF.pop();