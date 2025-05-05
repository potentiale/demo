"use strict";
cc._RF.push(module, '718bcYXmkxKq568jA176mfk', 'TwoDHorizontalLayoutObject');
// scripts/TwoDHorizontalLayoutObject.js

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
}), o.TwoDHorizontalLayoutObject = void 0;
var i,
    t = (i = e("TwoDLayoutObject").TwoDLayoutObject, t(a, i), a.prototype.getRowByIndex = function (e) {
  return i.prototype.getColumnByIndex.call(this, e);
}, a.prototype.getColumnByIndex = function (e) {
  return i.prototype.getRowByIndex.call(this, e);
}, a.prototype.rows = function () {
  return i.prototype.columns.call(this);
}, a.prototype.columns = function () {
  return i.prototype.rows.call(this);
}, a.prototype.getIndex = function (e, t) {
  return e + t * this.key_count;
}, a);

function a() {
  return null !== i && i.apply(this, arguments) || this;
}

o.TwoDHorizontalLayoutObject = t;

cc._RF.pop();