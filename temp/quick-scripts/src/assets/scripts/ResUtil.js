"use strict";
cc._RF.push(module, 'cc736r2cxFIeYx92c66ycg3', 'ResUtil');
// scripts/ResUtil.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ResUtil = void 0;
var n = e("ResKeeper"),
    i = e("AssetLoader"),
    e = (a.getResKeeper = function (e, t) {
  return e ? e.getComponent(n["default"]) || (t ? e.addComponent(n["default"]) : a.getResKeeper(e.parent, t)) : i.assetLoader.getResKeeper();
}, a);

function a() {}

o.ResUtil = e;

cc._RF.pop();