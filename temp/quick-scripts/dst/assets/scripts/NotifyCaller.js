
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/NotifyCaller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f77ecgvxANDSo1Az7koqRBq', 'NotifyCaller');
// scripts/NotifyCaller.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var a = void 0 && (void 0).__spreadArrays || function () {
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

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.NotifyCaller = void 0;
var r = e("CallID"),
    e = (n.prototype.Register = function (e, t, o) {
  if (null == t) return cc.log("[NotifyCaller].Register:" + e + " callback null"), !1;
  var n = this._calls[e];
  if (null != n) return cc.log("[NotifyCaller].Register:" + e + " register repeat " + n + " " + t), !1;
  this._calls[e] = {
    func: t,
    context: o
  };
}, n.prototype.Unregister = function (e, t, o) {
  var n = this._calls[e];
  return null == n || n.func !== t || n.context != o ? (cc.log("[NotifyCaller].Unregister can't find: " + r.CallID[e] + " callback " + n), !1) : (delete this._calls[e], !0);
}, n.prototype.Call = function (e) {
  for (var t, o = [], n = 1; n < arguments.length; n++) {
    o[n - 1] = arguments[n];
  }

  var i = this._calls[e];
  if (null != i) return (t = i.func).call.apply(t, a([i.context], o));
  cc.log("[NotifyCaller].Call can't find: " + r.CallID[e]);
}, n);

function n() {
  this._calls = {};
}

o.NotifyCaller = e;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTm90aWZ5Q2FsbGVyLmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiYSIsIl9fc3ByZWFkQXJyYXlzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibiIsIkFycmF5IiwiaSIsInIiLCJzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIk5vdGlmeUNhbGxlciIsInByb3RvdHlwZSIsIlJlZ2lzdGVyIiwiY2MiLCJsb2ciLCJfY2FsbHMiLCJmdW5jIiwiY29udGV4dCIsIlVucmVnaXN0ZXIiLCJDYWxsSUQiLCJDYWxsIiwiY2FsbCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBQ0MsT0FBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsTUFBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsT0FBTjtBQUNBOztBQUFhLElBQUlDLENBQUMsR0FBQyxVQUFNLFNBQUtDLGNBQVgsSUFBMkIsWUFBVTtBQUFDLE9BQUksSUFBSVAsQ0FBQyxHQUFDLENBQU4sRUFBUUUsQ0FBQyxHQUFDLENBQVYsRUFBWUUsQ0FBQyxHQUFDSSxTQUFTLENBQUNDLE1BQTVCLEVBQW1DUCxDQUFDLEdBQUNFLENBQXJDLEVBQXVDRixDQUFDLEVBQXhDO0FBQTJDRixJQUFBQSxDQUFDLElBQUVRLFNBQVMsQ0FBQ04sQ0FBRCxDQUFULENBQWFPLE1BQWhCO0FBQTNDOztBQUFrRSxPQUFJLElBQUlDLENBQUMsR0FBQ0MsS0FBSyxDQUFDWCxDQUFELENBQVgsRUFBZVksQ0FBQyxHQUFDLENBQWpCLEVBQW1CVixDQUFDLEdBQUMsQ0FBekIsRUFBMkJBLENBQUMsR0FBQ0UsQ0FBN0IsRUFBK0JGLENBQUMsRUFBaEM7QUFBbUMsU0FBSSxJQUFJSSxDQUFDLEdBQUNFLFNBQVMsQ0FBQ04sQ0FBRCxDQUFmLEVBQW1CVyxDQUFDLEdBQUMsQ0FBckIsRUFBdUJD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QUFULENBQTFDO0FBQXVELENBQWxyQixFQUFtckJVLENBQXJyQixDQUFuQjs7QUFBMnNCLFNBQVNBLENBQVQsR0FBWTtBQUFDLE9BQUthLE1BQUwsR0FBWSxFQUFaO0FBQWU7O0FBQUFuQixDQUFDLENBQUNjLFlBQUYsR0FBZWxCLENBQWYiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBlPXJlcXVpcmU7XG52YXIgdD1tb2R1bGU7XG52YXIgbz1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7dmFyIGE9dGhpcyYmdGhpcy5fX3NwcmVhZEFycmF5c3x8ZnVuY3Rpb24oKXtmb3IodmFyIGU9MCx0PTAsbz1hcmd1bWVudHMubGVuZ3RoO3Q8bzt0KyspZSs9YXJndW1lbnRzW3RdLmxlbmd0aDtmb3IodmFyIG49QXJyYXkoZSksaT0wLHQ9MDt0PG87dCsrKWZvcih2YXIgYT1hcmd1bWVudHNbdF0scj0wLHM9YS5sZW5ndGg7cjxzO3IrKyxpKyspbltpXT1hW3JdO3JldHVybiBufTtPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvLk5vdGlmeUNhbGxlcj12b2lkIDA7dmFyIHI9ZShcIkNhbGxJRFwiKSxlPShuLnByb3RvdHlwZS5SZWdpc3Rlcj1mdW5jdGlvbihlLHQsbyl7aWYobnVsbD09dClyZXR1cm4gY2MubG9nKFwiW05vdGlmeUNhbGxlcl0uUmVnaXN0ZXI6XCIrZStcIiBjYWxsYmFjayBudWxsXCIpLCExO3ZhciBuPXRoaXMuX2NhbGxzW2VdO2lmKG51bGwhPW4pcmV0dXJuIGNjLmxvZyhcIltOb3RpZnlDYWxsZXJdLlJlZ2lzdGVyOlwiK2UrXCIgcmVnaXN0ZXIgcmVwZWF0IFwiK24rXCIgXCIrdCksITE7dGhpcy5fY2FsbHNbZV09e2Z1bmM6dCxjb250ZXh0Om99fSxuLnByb3RvdHlwZS5VbnJlZ2lzdGVyPWZ1bmN0aW9uKGUsdCxvKXt2YXIgbj10aGlzLl9jYWxsc1tlXTtyZXR1cm4gbnVsbD09bnx8bi5mdW5jIT09dHx8bi5jb250ZXh0IT1vPyhjYy5sb2coXCJbTm90aWZ5Q2FsbGVyXS5VbnJlZ2lzdGVyIGNhbid0IGZpbmQ6IFwiK3IuQ2FsbElEW2VdK1wiIGNhbGxiYWNrIFwiK24pLCExKTooZGVsZXRlIHRoaXMuX2NhbGxzW2VdLCEwKX0sbi5wcm90b3R5cGUuQ2FsbD1mdW5jdGlvbihlKXtmb3IodmFyIHQsbz1bXSxuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKylvW24tMV09YXJndW1lbnRzW25dO3ZhciBpPXRoaXMuX2NhbGxzW2VdO2lmKG51bGwhPWkpcmV0dXJuKHQ9aS5mdW5jKS5jYWxsLmFwcGx5KHQsYShbaS5jb250ZXh0XSxvKSk7Y2MubG9nKFwiW05vdGlmeUNhbGxlcl0uQ2FsbCBjYW4ndCBmaW5kOiBcIityLkNhbGxJRFtlXSl9LG4pO2Z1bmN0aW9uIG4oKXt0aGlzLl9jYWxscz17fX1vLk5vdGlmeUNhbGxlcj1lIl19