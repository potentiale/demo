
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GhostCfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d87chYvcdNwoE18pTElNYF', 'GhostCfg');
// scripts/GhostCfg.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var _n,
    t = void 0 && (void 0).__extends || (_n = function n(e, t) {
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
});

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.GhostCfgReader = void 0;
var i,
    t = (i = e("TConfig").TConfig, t(a, i), a);

function a() {
  var e = i.call(this) || this;
  return e._name = "Ghost", e.initByMap({
    1: {
      id: 1,
      name: "鬼1",
      born: 1,
      attributes: 1,
      target: [1, 1, 1],
      danger: [120, 1, 150, 1, 200, 1],
      loop: [30, 1, 45, 1, 60, 1],
      model: [1]
    },
    2: {
      id: 2,
      name: "鬼2",
      born: 1,
      attributes: 20,
      target: [1, 0, 0],
      danger: [120, 1, 150, 1, 200, 1],
      loop: [30, 1, 45, 1, 60, 1],
      model: [1]
    }
  }), e;
}

o.GhostCfgReader = t;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2hvc3RDZmcuanMiXSwibmFtZXMiOlsiZSIsInJlcXVpcmUiLCJ0IiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJuIiwiX19leHRlbmRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkdob3N0Q2ZnUmVhZGVyIiwiaSIsIlRDb25maWciLCJhIiwiX25hbWUiLCJpbml0QnlNYXAiLCJpZCIsIm5hbWUiLCJib3JuIiwiYXR0cmlidXRlcyIsInRhcmdldCIsImRhbmdlciIsImxvb3AiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUNDLE9BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE1BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE9BQU47QUFDQTs7QUFBYSxJQUFJQyxFQUFKO0FBQUEsSUFBTUosQ0FBQyxHQUFDLFVBQU0sU0FBS0ssU0FBWCxLQUF1QkQsRUFBQyxHQUFDLFdBQVNOLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsU0FBTSxDQUFDSSxFQUFDLEdBQUNFLE1BQU0sQ0FBQ0MsY0FBUCxJQUF1QjtBQUFDQyxJQUFBQSxTQUFTLEVBQUM7QUFBWCxlQUF5QkMsS0FBekIsSUFBZ0MsVUFBU1gsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQ0YsSUFBQUEsQ0FBQyxDQUFDVSxTQUFGLEdBQVlSLENBQVo7QUFBYyxHQUFuRixJQUFxRixVQUFTRixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQUksSUFBSUUsQ0FBUixJQUFhRixDQUFiO0FBQWVNLE1BQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDWixDQUFyQyxFQUF1Q0UsQ0FB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YXIgbz1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7dmFyIG4sdD10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KG49ZnVuY3Rpb24oZSx0KXtyZXR1cm4obj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSx0KXtlLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG8gaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxvKSYmKGVbb109dFtvXSl9KShlLHQpfSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG8oKXt0aGlzLmNvbnN0cnVjdG9yPWV9bihlLHQpLGUucHJvdG90eXBlPW51bGw9PT10P09iamVjdC5jcmVhdGUodCk6KG8ucHJvdG90eXBlPXQucHJvdG90eXBlLG5ldyBvKX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8uR2hvc3RDZmdSZWFkZXI9dm9pZCAwO3ZhciBpLHQ9KGk9ZShcIlRDb25maWdcIikuVENvbmZpZyx0KGEsaSksYSk7ZnVuY3Rpb24gYSgpe3ZhciBlPWkuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gZS5fbmFtZT1cIkdob3N0XCIsZS5pbml0QnlNYXAoezE6e2lkOjEsbmFtZTpcIumsvDFcIixib3JuOjEsYXR0cmlidXRlczoxLHRhcmdldDpbMSwxLDFdLGRhbmdlcjpbMTIwLDEsMTUwLDEsMjAwLDFdLGxvb3A6WzMwLDEsNDUsMSw2MCwxXSxtb2RlbDpbMV19LDI6e2lkOjIsbmFtZTpcIumsvDJcIixib3JuOjEsYXR0cmlidXRlczoyMCx0YXJnZXQ6WzEsMCwwXSxkYW5nZXI6WzEyMCwxLDE1MCwxLDIwMCwxXSxsb29wOlszMCwxLDQ1LDEsNjAsMV0sbW9kZWw6WzFdfX0pLGV9by5HaG9zdENmZ1JlYWRlcj10Il19