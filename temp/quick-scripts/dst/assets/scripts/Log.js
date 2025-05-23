
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Log.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c798d9ZXZIFYkZ6VowlPa7', 'Log');
// scripts/Log.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var n = void 0 && (void 0).__spreadArrays || function () {
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
}), o.Log = void 0;
i.prototype.setLogEnable = function (e) {
  this._enableLog = e;
}, i.prototype.log = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).log.apply(e, n(["[Log]:"], t));
}, i.prototype.debug = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).debug.apply(e, n(["[Debug]:"], t));
}, i.prototype.warn = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).warn.apply(e, n(["[Warn]:"], t));
}, i.prototype.error = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).error.apply(e, n(["[Error]:"], t));
}, i.prototype.time = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).time.apply(e, n(["[TimeStart]:"], t));
}, i.prototype.timeEnd = function () {
  for (var e, t = [], o = 0; o < arguments.length; o++) {
    t[o] = arguments[o];
  }

  this._enableLog && (e = this._log).time.apply(e, n(["[TimeEnd]:"], t));
}, t = i;

function i() {
  this._log = cc, this._enableLog = !1;
}

o.Log = new t();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTG9nLmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwibiIsIl9fc3ByZWFkQXJyYXlzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiQXJyYXkiLCJpIiwiYSIsInIiLCJzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkxvZyIsInByb3RvdHlwZSIsInNldExvZ0VuYWJsZSIsIl9lbmFibGVMb2ciLCJsb2ciLCJfbG9nIiwiYXBwbHkiLCJkZWJ1ZyIsIndhcm4iLCJlcnJvciIsInRpbWUiLCJ0aW1lRW5kIiwiY2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWEsSUFBSUMsQ0FBQyxHQUFDLFVBQU0sU0FBS0MsY0FBWCxJQUEyQixZQUFVO0FBQUMsT0FBSSxJQUFJUCxDQUFDLEdBQUMsQ0FBTixFQUFRRSxDQUFDLEdBQUMsQ0FBVixFQUFZRSxDQUFDLEdBQUNJLFNBQVMsQ0FBQ0MsTUFBNUIsRUFBbUNQLENBQUMsR0FBQ0UsQ0FBckMsRUFBdUNGLENBQUMsRUFBeEM7QUFBMkNGLElBQUFBLENBQUMsSUFBRVEsU0FBUyxDQUFDTixDQUFELENBQVQsQ0FBYU8sTUFBaEI7QUFBM0M7O0FBQWtFLE9BQUksSUFBSUgsQ0FBQyxHQUFDSSxLQUFLLENBQUNWLENBQUQsQ0FBWCxFQUFlVyxDQUFDLEdBQUMsQ0FBakIsRUFBbUJULENBQUMsR0FBQyxDQUF6QixFQUEyQkEsQ0FBQyxHQUFDRSxDQUE3QixFQUErQkYsQ0FBQyxFQUFoQztBQUFtQyxTQUFJLElBQUlVLENBQUMsR0FBQ0osU0FBUyxDQUFDTixDQUFELENBQWYsRUFBbUJXLENBQUMsR0FBQyxDQUFyQixFQUF1QkMsQ0FBQyxHQUFDRixDQUFD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Q0FBRCxFQUFnQkosQ0FBaEIsQ0FBNUIsQ0FBakI7QUFBaUUsQ0FBLzhCLEVBQWc5QkEsQ0FBQyxHQUFDUyxDQUFsOUI7O0FBQW85QixTQUFTQSxDQUFULEdBQVk7QUFBQyxPQUFLWSxJQUFMLEdBQVVPLEVBQVYsRUFBYSxLQUFLVCxVQUFMLEdBQWdCLENBQUMsQ0FBOUI7QUFBZ0M7O0FBQUFqQixDQUFDLENBQUNjLEdBQUYsR0FBTSxJQUFJaEIsQ0FBSixFQUFOIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1yZXF1aXJlO1xudmFyIHQ9bW9kdWxlO1xudmFyIG89ZXhwb3J0cztcblwidXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19zcHJlYWRBcnJheXN8fGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTAsdD0wLG89YXJndW1lbnRzLmxlbmd0aDt0PG87dCsrKWUrPWFyZ3VtZW50c1t0XS5sZW5ndGg7Zm9yKHZhciBuPUFycmF5KGUpLGk9MCx0PTA7dDxvO3QrKylmb3IodmFyIGE9YXJndW1lbnRzW3RdLHI9MCxzPWEubGVuZ3RoO3I8cztyKyssaSsrKW5baV09YVtyXTtyZXR1cm4gbn07T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5Mb2c9dm9pZCAwO2kucHJvdG90eXBlLnNldExvZ0VuYWJsZT1mdW5jdGlvbihlKXt0aGlzLl9lbmFibGVMb2c9ZX0saS5wcm90b3R5cGUubG9nPWZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9W10sbz0wO288YXJndW1lbnRzLmxlbmd0aDtvKyspdFtvXT1hcmd1bWVudHNbb107dGhpcy5fZW5hYmxlTG9nJiYoZT10aGlzLl9sb2cpLmxvZy5hcHBseShlLG4oW1wiW0xvZ106XCJdLHQpKX0saS5wcm90b3R5cGUuZGVidWc9ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxvPTA7bzxhcmd1bWVudHMubGVuZ3RoO28rKyl0W29dPWFyZ3VtZW50c1tvXTt0aGlzLl9lbmFibGVMb2cmJihlPXRoaXMuX2xvZykuZGVidWcuYXBwbHkoZSxuKFtcIltEZWJ1Z106XCJdLHQpKX0saS5wcm90b3R5cGUud2Fybj1mdW5jdGlvbigpe2Zvcih2YXIgZSx0PVtdLG89MDtvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXRbb109YXJndW1lbnRzW29dO3RoaXMuX2VuYWJsZUxvZyYmKGU9dGhpcy5fbG9nKS53YXJuLmFwcGx5KGUsbihbXCJbV2Fybl06XCJdLHQpKX0saS5wcm90b3R5cGUuZXJyb3I9ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxvPTA7bzxhcmd1bWVudHMubGVuZ3RoO28rKyl0W29dPWFyZ3VtZW50c1tvXTt0aGlzLl9lbmFibGVMb2cmJihlPXRoaXMuX2xvZykuZXJyb3IuYXBwbHkoZSxuKFtcIltFcnJvcl06XCJdLHQpKX0saS5wcm90b3R5cGUudGltZT1mdW5jdGlvbigpe2Zvcih2YXIgZSx0PVtdLG89MDtvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXRbb109YXJndW1lbnRzW29dO3RoaXMuX2VuYWJsZUxvZyYmKGU9dGhpcy5fbG9nKS50aW1lLmFwcGx5KGUsbihbXCJbVGltZVN0YXJ0XTpcIl0sdCkpfSxpLnByb3RvdHlwZS50aW1lRW5kPWZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9W10sbz0wO288YXJndW1lbnRzLmxlbmd0aDtvKyspdFtvXT1hcmd1bWVudHNbb107dGhpcy5fZW5hYmxlTG9nJiYoZT10aGlzLl9sb2cpLnRpbWUuYXBwbHkoZSxuKFtcIltUaW1lRW5kXTpcIl0sdCkpfSx0PWk7ZnVuY3Rpb24gaSgpe3RoaXMuX2xvZz1jYyx0aGlzLl9lbmFibGVMb2c9ITF9by5Mb2c9bmV3IHQiXX0=