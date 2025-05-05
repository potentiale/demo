"use strict";
cc._RF.push(module, '85ac5TcHsRMdq5Lo2guouA0', 'WCTool');
// scripts/WCTool.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.WCTool = void 0, function (e) {
  var t = (o.check = function (e, t, o) {
    void 0 === o && (o = function o() {});
    var n,
        i = 0;

    for (n in e) {
      var a = e[n],
          r = s.getNodeTag({
        x: a.pos[0],
        y: a.pos[1]
      }, t);
      r && r.attribute.lv == a.lv && i++;
    }

    o(i == e.length);
  }, o.list = [], o);

  function o() {}

  e.Formation = t;
  var s = (n.getNodeTag = function (e, t) {
    for (var o in t) {
      o = t[o];
      if (o._mapPos.x == e.x && o._mapPos.y == e.y && o._isActive) return o;
    }

    return null;
  }, n);

  function n() {}

  e.Map = s;
}(o.WCTool || (o.WCTool = {}));

cc._RF.pop();