"use strict";
cc._RF.push(module, '7d82bpuSwdGUoifHKF+eyff', 'Notifier');
// scripts/Notifier.js

"use strict";

var e = require;
var t = module;
var a = exports;
"use strict";

var i = void 0 && (void 0).__spreadArrays || function () {
  for (var e = 0, t = 0, o = arguments.length; t < o; t++) {
    e += arguments[t].length;
  }

  for (var n = Array(e), i = 0, t = 0; t < o; t++) {
    for (var a = arguments[t], r = 0, s = a.length; r < s; r++, i++) {
      n[i] = a[r];
    }
  }

  return n;
};

Object.defineProperty(a, "__esModule", {
  value: !0
}), a.Notifier = a.PriorHighest = a.PriorHigh = a.PriorMiddle = a.PriorLow = a.PriorLowest = void 0;
t = e("NotifyListener"), e = e("NotifyCaller");
a.PriorLowest = -200, a.PriorLow = -100, a.PriorMiddle = 0, a.PriorHigh = 100, a.PriorHighest = 200;
o.addListener = function (e, t, o, n) {
  void 0 === n && (n = a.PriorMiddle), this._listener.Register(e, t, o, n);
}, o.removeListener = function (e, t, o) {
  this._listener.Unregister(e, t, o);
}, o.changeListener = function (e, t, o, n, i) {
  void 0 === i && (i = a.PriorMiddle), e ? this.addListener(t, o, n, i) : this.removeListener(t, o, n);
}, o.send = function (e) {
  for (var t, o = [], n = 1; n < arguments.length; n++) {
    o[n - 1] = arguments[n];
  }

  (t = this._listener).Send.apply(t, i([e], o));
}, o.isExist = function (e) {
  return this._listener.IsExist(e);
}, o.addCall = function (e, t, o) {
  return this._caller.Register(e, t, o);
}, o.removeCall = function (e, t, o) {
  return this._caller.Unregister(e, t, o);
}, o.changeCall = function (e, t, o, n) {
  e ? this.addCall(t, o, n) : this.removeCall(t, o, n);
}, o.call = function (e) {
  for (var t, o = [], n = 1; n < arguments.length; n++) {
    o[n - 1] = arguments[n];
  }

  return (t = this._caller).Call.apply(t, i([e], o));
}, o._listener = new t.NotifyListener(), o._caller = new e.NotifyCaller(), e = o;

function o() {}

a.Notifier = e;

cc._RF.pop();