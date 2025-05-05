
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/EggBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '968cbJpBLxOrKDWo7ndD8Y7', 'EggBase');
// scripts/EggBase.js

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
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = s["default"], i(c, r), c.prototype.onLoad = function () {}, a([e], c));

function c() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.baseId = 0, e;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRWdnQmFzZS5qcyJdLCJuYW1lcyI6WyJlIiwicmVxdWlyZSIsInQiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIm4iLCJpIiwiX19leHRlbmRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiYSIsIl9fZGVjb3JhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJjYyIsIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJjIiwib25Mb2FkIiwiYXBwbHkiLCJiYXNlSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWEsSUFBSUMsRUFBSjtBQUFBLElBQU1DLENBQUMsR0FBQyxVQUFNLFNBQUtDLFNBQVgsS0FBdUJGLEVBQUMsR0FBQyxXQUFTTixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQU0sQ0FBQ0ksRUFBQyxHQUFDRyxNQUFNLENBQUNDLGNBQVAsSUFBdUI7QUFBQ0MsSUFBQUEsU0FBUyxFQUFDO0FBQVgsZUFBeUJDLEtBQXpCLElBQWdDLFVBQVNaLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUNGLElBQUFBLENBQUMsQ0FBQ1csU0FBRixHQUFZVCxDQUFaO0FBQWMsR0FBbkYsSUFBcUYsVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxTQUFJLElBQUlFLENBQVIsSUFBYUYsQ0FBYjtBQUFlTyxNQUFBQSxNQUFNLENBQUNJLFNBQVAsQ0FB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LENBQUMsQ0FBQ2xCLENBQUQsQ0FBRCxFQUFLaUMsQ0FBTCxDQUFqRSxDQUF4RDs7QUFBa0ksU0FBU0EsQ0FBVCxHQUFZO0FBQUMsTUFBSWpDLENBQUMsR0FBQyxTQUFPc0IsQ0FBUCxJQUFVQSxDQUFDLENBQUNhLEtBQUYsQ0FBUSxJQUFSLEVBQWFmLFNBQWIsQ0FBVixJQUFtQyxJQUF6QztBQUE4QyxTQUFPcEIsQ0FBQyxDQUFDb0MsTUFBRixHQUFTLENBQVQsRUFBV3BDLENBQWxCO0FBQW9COztBQUFBSSxDQUFDLFdBQUQsR0FBVUosQ0FBViIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9cmVxdWlyZTtcbnZhciB0PW1vZHVsZTtcbnZhciBvPWV4cG9ydHM7XG5cInVzZSBzdHJpY3RcIjt2YXIgbixpPXRoaXMmJnRoaXMuX19leHRlbmRzfHwobj1mdW5jdGlvbihlLHQpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHQpe2UuX19wcm90b19fPXR9fHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbyBpbiB0KU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG8pJiYoZVtvXT10W29dKX0pKGUsdCl9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbygpe3RoaXMuY29uc3RydWN0b3I9ZX1uKGUsdCksZS5wcm90b3R5cGU9bnVsbD09PXQ/T2JqZWN0LmNyZWF0ZSh0KTooby5wcm90b3R5cGU9dC5wcm90b3R5cGUsbmV3IG8pfSksYT10aGlzJiZ0aGlzLl9fZGVjb3JhdGV8fGZ1bmN0aW9uKGUsdCxvLG4pe3ZhciBpLGE9YXJndW1lbnRzLmxlbmd0aCxyPWE8Mz90Om51bGw9PT1uP249T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LG8pOm47aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpcj1SZWZsZWN0LmRlY29yYXRlKGUsdCxvLG4pO2Vsc2UgZm9yKHZhciBzPWUubGVuZ3RoLTE7MDw9cztzLS0pKGk9ZVtzXSkmJihyPShhPDM/aShyKTozPGE/aSh0LG8scik6aSh0LG8pKXx8cik7cmV0dXJuIDM8YSYmciYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbyxyKSxyfTtPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcixzPWUoXCJDb25zdHJ1Y3RCYXNlXCIpLHQ9Y2MuX2RlY29yYXRvcixlPXQuY2NjbGFzcyxlPSh0LnByb3BlcnR5LHI9cy5kZWZhdWx0LGkoYyxyKSxjLnByb3RvdHlwZS5vbkxvYWQ9ZnVuY3Rpb24oKXt9LGEoW2VdLGMpKTtmdW5jdGlvbiBjKCl7dmFyIGU9bnVsbCE9PXImJnIuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzO3JldHVybiBlLmJhc2VJZD0wLGV9by5kZWZhdWx0PWUiXX0=