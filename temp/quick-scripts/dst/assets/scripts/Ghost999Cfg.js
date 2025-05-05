
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ghost999Cfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b86esFw5VP8p3WxKF1sB21', 'Ghost999Cfg');
// scripts/Ghost999Cfg.js

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
}), o.Ghost999CfgReader = void 0;
var i,
    t = (i = e("TConfig").TConfig, t(a, i), a);

function a() {
  var e = i.call(this) || this;
  return e._name = "Ghost999", e.initByMap({
    1: {
      id: 1,
      level: 1,
      exp: 30,
      hp: 180,
      atk: 1,
      atkspeed: 1,
      MoveSpeedGhost: 500,
      AttackRangeGhost: 150,
      icon: "20000",
      RoleBones: "bones/boss1",
      model: [4],
      skillID: [2e4, 20050]
    },
    2: {
      id: 2,
      level: 2,
      exp: 60,
      hp: 360,
      atk: 1,
      atkspeed: 1,
      MoveSpeedGhost: 500,
      AttackRangeGhost: 150,
      icon: "20000",
      RoleBones: "bones/boss1",
      model: [4],
      skillID: [2e4, 20050]
    }
  }), e;
}

o.Ghost999CfgReader = t;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2hvc3Q5OTlDZmcuanMiXSwibmFtZXMiOlsiZSIsInJlcXVpcmUiLCJ0IiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJuIiwiX19leHRlbmRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkdob3N0OTk5Q2ZnUmVhZGVyIiwiaSIsIlRDb25maWciLCJhIiwiX25hbWUiLCJpbml0QnlNYXAiLCJpZCIsImxldmVsIiwiZXhwIiwiaHAiLCJhdGsiLCJhdGtzcGVlZCIsIk1vdmVTcGVlZEdob3N0IiwiQXR0YWNrUmFuZ2VHaG9zdCIsImljb24iLCJSb2xlQm9uZXMiLCJtb2RlbCIsInNraWxsSUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWEsSUFBSUMsRUFBSjtBQUFBLElBQU1KLENBQUMsR0FBQyxVQUFNLFNBQUtLLFNBQVgsS0FBdUJELEVBQUMsR0FBQyxXQUFTTixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQU0sQ0FBQ0ksRUFBQyxHQUFDRSxNQUFNLENBQUNDLGNBQVAsSUFBdUI7QUFBQ0MsSUFBQUEsU0FBUyxFQUFDO0FBQVgsZUFBeUJDLEtBQXpCLElBQWdDLFVBQVNYLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUNGLElBQUFBLENBQUMsQ0FBQ1UsU0FBRixHQUFZUixDQUFaO0FBQWMsR0FBbkYsSUFBcUYsVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxTQUFJLElBQUlFLENBQVIsSUFBYUYsQ0FBYjtBQUFlTSxNQUFBQSxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1osQ0FBckMsRUFBdUNFLENBQXZDLE1BQTRDSixDQUFDLENBQUNJLENBQUQsQ0FBRCxHQUFLRixDQUFDLENBQUNFLENBQUQsQ0FBbEQ7QUFBZjtBQUFzRSxHQUE1SyxFQUE4S0osQ0FBOUssRUFBZ0xFLENBQWhMLENBQU47QUFBeUwsQ0FBek0sRUFBME0sVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxXQUFTRSxDQUFULEdBQVk7QUFBQyxTQUFLVyxXQUFMLEdBQWlCZixDQUFqQjtBQUFtQjs7QUFBQU0sRUFBQUEsRUFBQyxDQUFDTixDQUFELEVBQUdFLENBQUgsQ0FBRCxFQUFPRixDQUFDLENBQUNZLFNBQUYsR0FBWSxTQUFPVixDQUFQLEdBQVNNLE1BQU0sQ0FBQ1EsTUFBUCxDQUFjZCxDQUFkLENBQVQsSUFBMkJFLENBQUMsQ0FBQ1EsU0FBRixHQUFZVixDQUFDLENBQUNVLFNBQWQsRUFBd0IsSUFBSVIsQ0FBSixFQUFuRCxDQUFuQjtBQUE2RSxDQUE1VixDQUFSOztBQUFzV0ksTUFBTSxDQUFDUyxjQUFQLENBQXNCYixDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDYyxFQUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLENBQXJDLEdBQWlEZCxDQUFDLENBQUNlLGlCQUFGLEdBQW9CLEtBQUssQ0FBMUU7QUFBNEUsSUFBSUMsQ0FBSjtBQUFBLElBQU1sQixDQUFDLElBQUVrQixDQUFDLEdBQUNwQixDQUFDLENBQUMsU0FBRCxDQUFELENBQWFxQixPQUFmLEVBQXVCbkIsQ0FBQyxDQUFDb0IsQ0FBRCxFQUFHRixDQUFILENBQXhCLEVBQThCRSxDQUFoQyxDQUFQOztBQUEwQyxTQUFTQSxDQUFULEdBQVk7QUFBQyxNQUFJdEIsQ0FBQyxHQUFDb0IsQ0FBQyxDQUFDTixJQUFGLENBQU8sSUFBUCxLQUFjLElBQXBCO0FBQXlCLFNBQU9kLENBQUMsQ0FBQ3VCLEtBQUYsR0FBUSxVQUFSLEVBQW1CdkIsQ0FBQyxDQUFDd0IsU0FBRixDQUFZO0FBQUMsT0FBRTtBQUFDQyxNQUFBQSxFQUFFLEVBQUMsQ0FBSjtBQUFNQyxNQUFBQSxLQUFLLEVBQUMsQ0FBWjtBQUFjQyxNQUFBQSxHQUFHLEVBQUMsRUFBbEI7QUFBcUJDLE1BQUFBLEVBQUUsRUFBQyxHQUF4QjtBQUE0QkMsTUFBQUEsR0FBRyxFQUFDLENBQWhDO0FBQWtDQyxNQUFBQSxRQUFRLEVBQUMsQ0FBM0M7QUFBNkNDLE1BQUFBLGNBQWMsRUFBQyxHQUE1RDtBQUFnRUMsTUFBQUEsZ0JBQWdCLEVBQUMsR0FBakY7QUFBcUZDLE1BQUFBLElBQUksRUFBQyxPQUExRjtBQUFrR0MsTUFBQUEsU0FBUyxFQUFDLGFBQTVHO0FBQTBIQyxNQUFBQSxLQUFLLEVBQUMsQ0FBQyxDQUFELENBQWhJO0FBQW9JQyxNQUFBQSxPQUFPLEVBQUMsQ0FBQyxHQUFELEVBQUssS0FBTDtBQUE1SSxLQUFIO0FBQTRKLE9BQUU7QUFBQ1gsTUFBQUEsRUFBRSxFQUFDLENBQUo7QUFBTUMsTUFBQUEsS0FBSyxFQUFDLENBQVo7QUFBY0MsTUFBQUEsR0FBRyxFQUFDLEVBQWxCO0FBQXFCQyxNQUFBQSxFQUFFLEVBQUMsR0FBeEI7QUFBNEJDLE1BQUFBLEdBQUcsRUFBQyxDQUFoQztBQUFrQ0MsTUFBQUEsUUFBUSxFQUFDLENBQTNDO0FBQTZDQyxNQUFBQSxjQUFjLEVBQUMsR0FBNUQ7QUFBZ0VDLE1BQUFBLGdCQUFnQixFQUFDLEdBQWpGO0FBQXFGQyxNQUFBQSxJQUFJLEVBQUMsT0FBMUY7QUFBa0dDLE1BQUFBLFNBQVMsRUFBQyxhQUE1RztBQUEwSEMsTUFBQUEsS0FBSyxFQUFDLENBQUMsQ0FBRCxDQUFoSTtBQUFvSUMsTUFBQUEsT0FBTyxFQUFDLENBQUMsR0FBRCxFQUFLLEtBQUw7QUFBNUk7QUFBOUosR0FBWixDQUFuQixFQUF3VnBDLENBQS9WO0FBQWlXOztBQUFBSSxDQUFDLENBQUNlLGlCQUFGLEdBQW9CakIsQ0FBcEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBlPXJlcXVpcmU7XG52YXIgdD1tb2R1bGU7XG52YXIgbz1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7dmFyIG4sdD10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KG49ZnVuY3Rpb24oZSx0KXtyZXR1cm4obj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSx0KXtlLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG8gaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxvKSYmKGVbb109dFtvXSl9KShlLHQpfSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG8oKXt0aGlzLmNvbnN0cnVjdG9yPWV9bihlLHQpLGUucHJvdG90eXBlPW51bGw9PT10P09iamVjdC5jcmVhdGUodCk6KG8ucHJvdG90eXBlPXQucHJvdG90eXBlLG5ldyBvKX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8uR2hvc3Q5OTlDZmdSZWFkZXI9dm9pZCAwO3ZhciBpLHQ9KGk9ZShcIlRDb25maWdcIikuVENvbmZpZyx0KGEsaSksYSk7ZnVuY3Rpb24gYSgpe3ZhciBlPWkuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gZS5fbmFtZT1cIkdob3N0OTk5XCIsZS5pbml0QnlNYXAoezE6e2lkOjEsbGV2ZWw6MSxleHA6MzAsaHA6MTgwLGF0azoxLGF0a3NwZWVkOjEsTW92ZVNwZWVkR2hvc3Q6NTAwLEF0dGFja1JhbmdlR2hvc3Q6MTUwLGljb246XCIyMDAwMFwiLFJvbGVCb25lczpcImJvbmVzL2Jvc3MxXCIsbW9kZWw6WzRdLHNraWxsSUQ6WzJlNCwyMDA1MF19LDI6e2lkOjIsbGV2ZWw6MixleHA6NjAsaHA6MzYwLGF0azoxLGF0a3NwZWVkOjEsTW92ZVNwZWVkR2hvc3Q6NTAwLEF0dGFja1JhbmdlR2hvc3Q6MTUwLGljb246XCIyMDAwMFwiLFJvbGVCb25lczpcImJvbmVzL2Jvc3MxXCIsbW9kZWw6WzRdLHNraWxsSUQ6WzJlNCwyMDA1MF19fSksZX1vLkdob3N0OTk5Q2ZnUmVhZGVyPXQiXX0=