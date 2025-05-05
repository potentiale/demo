
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pop_ReportPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b604aKSYbZP+ZZ/TrcYMJ+l', 'pop_ReportPanel');
// scripts/pop_ReportPanel.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9wX1JlcG9ydFBhbmVsLmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwibiIsImkiLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJhIiwiX19kZWNvcmF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsImMiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUNDLE9BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE1BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE9BQU47QUFDQTs7QUFBYSxJQUFJQyxFQUFKO0FBQUEsSUFBTUMsQ0FBQyxHQUFDLFVBQU0sU0FBS0MsU0FBWCxLQUF1QkYsRUFBQyxHQUFDLFdBQVNOLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsU0FBTSxDQUFDSSxFQUFDLEdBQUNHLE1BQU0sQ0FBQ0MsY0FBUCxJQUF1QjtBQUFDQyxJQUFBQSxTQUFTLEVBQUM7QUFBWCxlQUF5QkMsS0FBekIsSUFBZ0MsVUFBU1osQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQ0YsSUFBQUEsQ0FBQyxDQUFDVyxTQUFGLEdBQVlULENBQVo7QUFBYyxHQUFuRixJQUFxRixVQUFTRixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQUksSUFBSUUsQ0FBUixJQUFhRixDQUFiO0FBQWVPLE1BQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsY0FBakIs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O0FBQUMsU0FBTyxTQUFPWCxDQUFQLElBQVVBLENBQUMsQ0FBQ1ksS0FBRixDQUFRLElBQVIsRUFBYWQsU0FBYixDQUFWLElBQW1DLElBQTFDO0FBQStDOztBQUFBaEIsQ0FBQyxXQUFELEdBQVVKLENBQVYiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBlPXJlcXVpcmU7XG52YXIgdD1tb2R1bGU7XG52YXIgbz1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7dmFyIG4saT10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KG49ZnVuY3Rpb24oZSx0KXtyZXR1cm4obj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSx0KXtlLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG8gaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxvKSYmKGVbb109dFtvXSl9KShlLHQpfSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG8oKXt0aGlzLmNvbnN0cnVjdG9yPWV9bihlLHQpLGUucHJvdG90eXBlPW51bGw9PT10P09iamVjdC5jcmVhdGUodCk6KG8ucHJvdG90eXBlPXQucHJvdG90eXBlLG5ldyBvKX0pLGE9dGhpcyYmdGhpcy5fX2RlY29yYXRlfHxmdW5jdGlvbihlLHQsbyxuKXt2YXIgaSxhPWFyZ3VtZW50cy5sZW5ndGgscj1hPDM/dDpudWxsPT09bj9uPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxvKTpuO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKXI9UmVmbGVjdC5kZWNvcmF0ZShlLHQsbyxuKTtlbHNlIGZvcih2YXIgcz1lLmxlbmd0aC0xOzA8PXM7cy0tKShpPWVbc10pJiYocj0oYTwzP2kocik6MzxhP2kodCxvLHIpOmkodCxvKSl8fHIpO3JldHVybiAzPGEmJnImJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8scikscn07T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHIscz1lKFwicG9wXCIpLHQ9Y2MuX2RlY29yYXRvcixlPXQuY2NjbGFzcyxlPSh0LnByb3BlcnR5LHI9cy5kZWZhdWx0LGkoYyxyKSxhKFtlXSxjKSk7ZnVuY3Rpb24gYygpe3JldHVybiBudWxsIT09ciYmci5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fHRoaXN9by5kZWZhdWx0PWUiXX0=