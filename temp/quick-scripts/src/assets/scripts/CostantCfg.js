"use strict";
cc._RF.push(module, 'da078caaUFMw4NARhBQeLHF', 'CostantCfg');
// scripts/CostantCfg.js

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
}), o.CostantCfgReader = void 0;
var i,
    t = (i = e("TConfig").TConfig, t(a, i), a);

function a() {
  var e = i.call(this) || this;
  return e._name = "Costant", e.initByMap({
    1: {
      id: 1,
      MoveSpeedMan: 100
    }
  }), e;
}

o.CostantCfgReader = t;

cc._RF.pop();