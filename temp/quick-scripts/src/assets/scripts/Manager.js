"use strict";
cc._RF.push(module, 'da471la2PRBJKFLtZdZ0rzM', 'Manager');
// scripts/Manager.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.Manager = void 0;
var n = e("LoaderAdapter"),
    e = (Object.defineProperty(i.prototype, "loader", {
  get: function get() {
    return n.LoaderAdapter;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(i.prototype, "storage", {
  get: function get() {
    return null == this._storage && (this._storage = new StorageManager()), this._storage;
  },
  enumerable: !1,
  configurable: !0
}), i);

function i() {}

o.Manager = new e();

cc._RF.pop();