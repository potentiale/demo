
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GridViewCell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cebb1gaWBpO6aQ2tSVE2vr5', 'GridViewCell');
// scripts/GridViewCell.js

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
    s = cc._decorator,
    t = s.ccclass,
    t = (s.property, r = cc.Component, i(c, r), c.prototype.onInit = function () {}, c.prototype.onRefresh = function () {}, a([t], c));

function c() {
  return null !== r && r.apply(this, arguments) || this;
}

o["default"] = t;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JpZFZpZXdDZWxsLmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwibiIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJhIiwiX19kZWNvcmF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkNvbXBvbmVudCIsImMiLCJvbkluaXQiLCJvblJlZnJlc2giLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUNDLE9BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE1BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE9BQU47QUFDQTs7QUFBYSxJQUFJQyxFQUFKO0FBQUEsSUFBTUMsQ0FBQyxHQUFDLFVBQU0sU0FBS0MsU0FBWCxLQUF1QkYsRUFBQyxHQUFDLFdBQVNOLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsU0FBTSxDQUFDSSxFQUFDLEdBQUNHLE1BQU0sQ0FBQ0MsY0FBUCxJQUF1QjtBQUFDQyxJQUFBQSxTQUFTLEVBQUM7QUFBWCxlQUF5QkMsS0FBekIsSUFBZ0MsVUFBU1osQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQ0YsSUFBQUEsQ0FBQyxDQUFDVyxTQUFGLEdBQVlULENBQVo7QUFBYyxHQUFuRixJQUFxRixVQUFTRixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQUksSUFBSUUsQ0FBUixJQUFhRixDQUFiO0FBQWVPLE1BQUFB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U0FBWixHQUFzQixZQUFVLENBQUUsQ0FBbkcsRUFBb0dsQixDQUFDLENBQUMsQ0FBQ2hCLENBQUQsQ0FBRCxFQUFLZ0MsQ0FBTCxDQUF2RyxDQUFuQzs7QUFBbUosU0FBU0EsQ0FBVCxHQUFZO0FBQUMsU0FBTyxTQUFPWixDQUFQLElBQVVBLENBQUMsQ0FBQ2UsS0FBRixDQUFRLElBQVIsRUFBYWpCLFNBQWIsQ0FBVixJQUFtQyxJQUExQztBQUErQzs7QUFBQWhCLENBQUMsV0FBRCxHQUFVRixDQUFWIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1yZXF1aXJlO1xudmFyIHQ9bW9kdWxlO1xudmFyIG89ZXhwb3J0cztcblwidXNlIHN0cmljdFwiO3ZhciBuLGk9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fChuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKG49T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUsdCl7ZS5fX3Byb3RvX189dH18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBvIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbykmJihlW29dPXRbb10pfSkoZSx0KX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBvKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfW4oZSx0KSxlLnByb3RvdHlwZT1udWxsPT09dD9PYmplY3QuY3JlYXRlKHQpOihvLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgbyl9KSxhPXRoaXMmJnRoaXMuX19kZWNvcmF0ZXx8ZnVuY3Rpb24oZSx0LG8sbil7dmFyIGksYT1hcmd1bWVudHMubGVuZ3RoLHI9YTwzP3Q6bnVsbD09PW4/bj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbyk6bjtpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSlyPVJlZmxlY3QuZGVjb3JhdGUoZSx0LG8sbik7ZWxzZSBmb3IodmFyIHM9ZS5sZW5ndGgtMTswPD1zO3MtLSkoaT1lW3NdKSYmKHI9KGE8Mz9pKHIpOjM8YT9pKHQsbyxyKTppKHQsbykpfHxyKTtyZXR1cm4gMzxhJiZyJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLHIpLHJ9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByLHM9Y2MuX2RlY29yYXRvcix0PXMuY2NjbGFzcyx0PShzLnByb3BlcnR5LHI9Y2MuQ29tcG9uZW50LGkoYyxyKSxjLnByb3RvdHlwZS5vbkluaXQ9ZnVuY3Rpb24oKXt9LGMucHJvdG90eXBlLm9uUmVmcmVzaD1mdW5jdGlvbigpe30sYShbdF0sYykpO2Z1bmN0aW9uIGMoKXtyZXR1cm4gbnVsbCE9PXImJnIuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfW8uZGVmYXVsdD10Il19