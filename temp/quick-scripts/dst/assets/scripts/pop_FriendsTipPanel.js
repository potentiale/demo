
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pop_FriendsTipPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bb87UrfJJKz73po9+ZUBWx', 'pop_FriendsTipPanel');
// scripts/pop_FriendsTipPanel.js

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
    s = e("pop"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = s["default"], i(c, r), a([e], c));

function c() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9wX0ZyaWVuZHNUaXBQYW5lbC5qcyJdLCJuYW1lcyI6WyJlIiwicmVxdWlyZSIsInQiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIm4iLCJpIiwiX19leHRlbmRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiYSIsIl9fZGVjb3JhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJjIiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWEsSUFBSUMsRUFBSjtBQUFBLElBQU1DLENBQUMsR0FBQyxVQUFNLFNBQUtDLFNBQVgsS0FBdUJGLEVBQUMsR0FBQyxXQUFTTixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQU0sQ0FBQ0ksRUFBQyxHQUFDRyxNQUFNLENBQUNDLGNBQVAsSUFBdUI7QUFBQ0MsSUFBQUEsU0FBUyxFQUFDO0FBQVgsZUFBeUJDLEtBQXpCLElBQWdDLFVBQVNaLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUNGLElBQUFBLENBQUMsQ0FBQ1csU0FBRixHQUFZVCxDQUFaO0FBQWMsR0FBbkYsSUFBcUYsVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxTQUFJLElBQUlFLENBQVIsSUFBYUYsQ0FBYjtBQUFlTyxNQUFBQSxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNB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R0FBWTtBQUFDLFNBQU8sU0FBT1gsQ0FBUCxJQUFVQSxDQUFDLENBQUNZLEtBQUYsQ0FBUSxJQUFSLEVBQWFkLFNBQWIsQ0FBVixJQUFtQyxJQUExQztBQUErQzs7QUFBQWhCLENBQUMsV0FBRCxHQUFVSixDQUFWIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1yZXF1aXJlO1xudmFyIHQ9bW9kdWxlO1xudmFyIG89ZXhwb3J0cztcblwidXNlIHN0cmljdFwiO3ZhciBuLGk9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fChuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKG49T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUsdCl7ZS5fX3Byb3RvX189dH18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBvIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbykmJihlW29dPXRbb10pfSkoZSx0KX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBvKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfW4oZSx0KSxlLnByb3RvdHlwZT1udWxsPT09dD9PYmplY3QuY3JlYXRlKHQpOihvLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgbyl9KSxhPXRoaXMmJnRoaXMuX19kZWNvcmF0ZXx8ZnVuY3Rpb24oZSx0LG8sbil7dmFyIGksYT1hcmd1bWVudHMubGVuZ3RoLHI9YTwzP3Q6bnVsbD09PW4/bj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbyk6bjtpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSlyPVJlZmxlY3QuZGVjb3JhdGUoZSx0LG8sbik7ZWxzZSBmb3IodmFyIHM9ZS5sZW5ndGgtMTswPD1zO3MtLSkoaT1lW3NdKSYmKHI9KGE8Mz9pKHIpOjM8YT9pKHQsbyxyKTppKHQsbykpfHxyKTtyZXR1cm4gMzxhJiZyJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxvLHIpLHJ9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByLHM9ZShcInBvcFwiKSx0PWNjLl9kZWNvcmF0b3IsZT10LmNjY2xhc3MsZT0odC5wcm9wZXJ0eSxyPXMuZGVmYXVsdCxpKGMsciksYShbZV0sYykpO2Z1bmN0aW9uIGMoKXtyZXR1cm4gbnVsbCE9PXImJnIuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfW8uZGVmYXVsdD1lIl19