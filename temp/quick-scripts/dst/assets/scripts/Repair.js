
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Repair.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd24f6KvMtNLDpw3Iwn2NLaw', 'Repair');
// scripts/Repair.js

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
    s = e("ConstructBase"),
    c = cc._decorator,
    t = c.ccclass,
    e = c.menu,
    e = (c.property, r = s["default"], i(l, r), l.prototype.effectTrigger = function () {
  this.ower.myDoor.setLife(this.ower.myDoor.attribute.data.hp * this.attribute.data.parameter[1]);
}, a([t, e("gameElement/Repair")], l));

function l() {
  return null !== r && r.apply(this, arguments) || this;
}

o["default"] = e;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUmVwYWlyLmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwibiIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJhIiwiX19kZWNvcmF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwibWVudSIsInByb3BlcnR5IiwibCIsImVmZmVjdFRyaWdnZXIiLCJvd2VyIiwibXlEb29yIiwic2V0TGlmZSIsImF0dHJpYnV0ZSIsImRhdGEiLCJocCIsInBhcmFtZXRlciIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBQ0MsT0FBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsTUFBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsT0FBTjtBQUNBOztBQUFhLElBQUlDLEVBQUo7QUFBQSxJQUFNQyxDQUFDLEdBQUMsVUFBTSxTQUFLQyxTQUFYLEtBQXVCRixFQUFDLEdBQUMsV0FBU04sQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxTQUFNLENBQUNJLEVBQUMsR0FBQ0csTUFBTSxDQUFDQyxjQUFQLElBQXVCO0FBQUNDLElBQUFBLFNBQVMsRUFBQztBQUFYLGVBQXlCQyxLQUF6QixJQUFnQyxVQUFTWixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDRixJQUFBQSxDQUFDLENBQUNXLFNBQUYsR0FBWVQsQ0FBWjtBQUFjLEdBQW5GLElBQXFGLFVBQVNGLENBQVQsRUFBV0UsQ0FB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RUFBdUJuQixDQUFDLENBQUM0QixDQUFELEVBQUdiLENBQUgsQ0FBeEIsRUFBOEJhLENBQUMsQ0FBQ3RCLFNBQUYsQ0FBWXVCLGFBQVosR0FBMEIsWUFBVTtBQUFDLE9BQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsT0FBakIsQ0FBeUIsS0FBS0YsSUFBTCxDQUFVQyxNQUFWLENBQWlCRSxTQUFqQixDQUEyQkMsSUFBM0IsQ0FBZ0NDLEVBQWhDLEdBQW1DLEtBQUtGLFNBQUwsQ0FBZUMsSUFBZixDQUFvQkUsU0FBcEIsQ0FBOEIsQ0FBOUIsQ0FBNUQ7QUFBOEYsQ0FBakssRUFBa0t6QixDQUFDLENBQUMsQ0FBQ2hCLENBQUQsRUFBR0YsQ0FBQyxDQUFDLG9CQUFELENBQUosQ0FBRCxFQUE2Qm1DLENBQTdCLENBQXJLLENBQWpFOztBQUF1USxTQUFTQSxDQUFULEdBQVk7QUFBQyxTQUFPLFNBQU9iLENBQVAsSUFBVUEsQ0FBQyxDQUFDc0IsS0FBRixDQUFRLElBQVIsRUFBYXhCLFNBQWIsQ0FBVixJQUFtQyxJQUExQztBQUErQzs7QUFBQWhCLENBQUMsV0FBRCxHQUFVSixDQUFWIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1yZXF1aXJlO1xudmFyIHQ9bW9kdWxlO1xudmFyIG89ZXhwb3J0cztcblwidXNlIHN0cmljdFwiO3ZhciBuLGk9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fChuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKG49T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUsdCl7ZS5fX3Byb3RvX189dH18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBvIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbykmJihlW29dPXRbb10pfSkoZSx0KX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBvKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfW4oZSx0KSxlLnByb3RvdHlwZT1udWxsPT09dD9PYmplY3QuY3JlYXRlKHQpOihvLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgbyl9KSxhPXRoaXMmJnRoaXMuX19kZWNvcmF0ZXx8ZnVuY3Rpb24oZSx0LG8sbil7dmFyIGksYT1hcmd1bWVudHMubGVuZ3RoLHI9YTwzP3Q6bnVsbD09PW4/bj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbyk6bjtpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSlyPVJlZmxlY3QuZGVjb3JhdGUoZSx0LG8sbik7ZWxzZSBmb3IodmFyIHM9ZS5sZW5ndGgtMTswPD1zO3MtLSkoaT1lW3NdKSYmKHI9KGE8Mz9pKHIpOjM8YT9pKHQsbyxyKTppKHQsbykpfHxyKTtyZXR1cm4gMzxhJiZyJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLHIpLHJ9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByLHM9ZShcIkNvbnN0cnVjdEJhc2VcIiksYz1jYy5fZGVjb3JhdG9yLHQ9Yy5jY2NsYXNzLGU9Yy5tZW51LGU9KGMucHJvcGVydHkscj1zLmRlZmF1bHQsaShsLHIpLGwucHJvdG90eXBlLmVmZmVjdFRyaWdnZXI9ZnVuY3Rpb24oKXt0aGlzLm93ZXIubXlEb29yLnNldExpZmUodGhpcy5vd2VyLm15RG9vci5hdHRyaWJ1dGUuZGF0YS5ocCp0aGlzLmF0dHJpYnV0ZS5kYXRhLnBhcmFtZXRlclsxXSl9LGEoW3QsZShcImdhbWVFbGVtZW50L1JlcGFpclwiKV0sbCkpO2Z1bmN0aW9uIGwoKXtyZXR1cm4gbnVsbCE9PXImJnIuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfW8uZGVmYXVsdD1lIl19