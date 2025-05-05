"use strict";
cc._RF.push(module, '0c1de/1rUxDDpizztfDT4Oh', 'pop_RulePanel');
// scripts/pop_RulePanel.js

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
    s = e("Cfg"),
    c = e("pop"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = c["default"], i(l, r), a([e], l));

function l() {
  var t = null !== r && r.apply(this, arguments) || this;
  return t.initFun = {
    pop_RulePanel: function pop_RulePanel() {
      var e = s.Cfg.Rule.get(1);
      t.labelArr[1].string = e.text;
      e = s.Cfg.Rule.get(2);
      t.labelArr[0].string = e.text, t.scheduleOnce(function () {
        t.nodeArr[0].height = t.labelArr[0].node.height;
      }, .3);
    }
  }, t;
}

o["default"] = e;

cc._RF.pop();