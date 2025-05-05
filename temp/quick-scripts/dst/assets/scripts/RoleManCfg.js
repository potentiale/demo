
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/RoleManCfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aba5ePMiBZMe71DHApR4/50', 'RoleManCfg');
// scripts/RoleManCfg.js

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
}), o.RoleManCfgReader = void 0;
var i,
    t = (i = e("TConfig").TConfig, t(a, i), a);

function a() {
  var e = i.call(this) || this;
  return e._name = "RoleMan", e.initByMap({
    1e4: {
      id: 1e4,
      type: 1,
      sequence: 2,
      unlockType: 3,
      unlockCost: 1,
      skinName: "b1",
      headDefault: ["head", "head_5", "braid1", "null", "braid2", "null"],
      name: "小帅",
      profession: "临时工",
      hometown: "NJ",
      story: "梦想是当歌手，但现在担任负责人，出了什么事都是他负责。",
      skillID: [1e4],
      RoleBones: "bones/role"
    },
    10100: {
      id: 10100,
      type: 1,
      sequence: 1,
      unlockType: 1,
      unlockCost: 1,
      skinName: "b2",
      headDefault: ["head", "head_2", "braid1", "braid1_2", "braid2", "braid2_2"],
      name: "小美",
      profession: "财务",
      hometown: "CD",
      story: "打工多年拥有自己的小金库，靠着优秀的理财能力躺平生活。",
      skillID: [10100],
      RoleBones: "bones/role"
    },
    10200: {
      id: 10200,
      type: 1,
      sequence: 3,
      unlockType: 3,
      unlockCost: 1,
      skinName: "b4",
      headDefault: ["head", "head_4", "braid1", "null", "braid2", "null"],
      name: "阿猿",
      profession: "程序员",
      hometown: "不详",
      story: "这猴子打小就聪明，热爱创造搞发明，能够为大家创造很多小东西",
      skillID: [10200, 10250],
      RoleBones: "bones/role"
    },
    10300: {
      id: 10300,
      type: 1,
      sequence: 4,
      unlockType: 3,
      unlockCost: 1,
      skinName: "b3",
      headDefault: ["head", "head_3", "braid1", "braid1_3", "braid2", "braid2_3"],
      name: "丽丽",
      profession: "设计师",
      hometown: "FJ",
      story: "画画特别有天赋，能够使画作具象化，在某次绘画中绘画了自己而产生了自己的分身",
      skillID: [10300, 10350],
      RoleBones: "bones/role"
    }
  }), e;
}

o.RoleManCfgReader = t;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUm9sZU1hbkNmZy5qcyJdLCJuYW1lcyI6WyJlIiwicmVxdWlyZSIsInQiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIm4iLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiUm9sZU1hbkNmZ1JlYWRlciIsImkiLCJUQ29uZmlnIiwiYSIsIl9uYW1lIiwiaW5pdEJ5TWFwIiwiaWQiLCJ0eXBlIiwic2VxdWVuY2UiLCJ1bmxvY2tUeXBlIiwidW5sb2NrQ29zdCIsInNraW5OYW1lIiwiaGVhZERlZmF1bHQiLCJuYW1lIiwicHJvZmVzc2lvbiIsImhvbWV0b3duIiwic3RvcnkiLCJza2lsbElEIiwiUm9sZUJvbmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBQ0MsT0FBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsTUFBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsT0FBTjtBQUNBOztBQUFhLElBQUlDLEVBQUo7QUFBQSxJQUFNSixDQUFDLEdBQUMsVUFBTSxTQUFLSyxTQUFYLEtBQXVCRCxFQUFDLEdBQUMsV0FBU04sQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxTQUFNLENBQUNJLEVBQUMsR0FBQ0UsTUFBTSxDQUFDQyxjQUFQLElBQXVCO0FBQUNDLElBQUFBLFNBQVMsRUFBQztBQUFYLGVBQXlCQyxLQUF6QixJQUFnQyxVQUFTWCxDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDRixJQUFBQSxDQUFDLENBQUNVLFNBQUYsR0FBWVIsQ0FBWjtBQUFjLEdBQW5GLElBQXFGLFVBQVNGLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsU0FBSSxJQUFJRSxDQUFSLElBQWFGLENBQWI7QUFB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LElBQTlLO0FBQW1MQyxNQUFBQSxLQUFLLEVBQUMsdUNBQXpMO0FBQWlPQyxNQUFBQSxPQUFPLEVBQUMsQ0FBQyxLQUFELEVBQU8sS0FBUCxDQUF6TztBQUF1UEMsTUFBQUEsU0FBUyxFQUFDO0FBQWpRO0FBQXZ3QixHQUFaLENBQWxCLEVBQXNqQ3JDLENBQTdqQztBQUErakM7O0FBQUFJLENBQUMsQ0FBQ2UsZ0JBQUYsR0FBbUJqQixDQUFuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9cmVxdWlyZTtcbnZhciB0PW1vZHVsZTtcbnZhciBvPWV4cG9ydHM7XG5cInVzZSBzdHJpY3RcIjt2YXIgbix0PXRoaXMmJnRoaXMuX19leHRlbmRzfHwobj1mdW5jdGlvbihlLHQpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHQpe2UuX19wcm90b19fPXR9fHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbyBpbiB0KU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG8pJiYoZVtvXT10W29dKX0pKGUsdCl9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbygpe3RoaXMuY29uc3RydWN0b3I9ZX1uKGUsdCksZS5wcm90b3R5cGU9bnVsbD09PXQ/T2JqZWN0LmNyZWF0ZSh0KTooby5wcm90b3R5cGU9dC5wcm90b3R5cGUsbmV3IG8pfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5Sb2xlTWFuQ2ZnUmVhZGVyPXZvaWQgMDt2YXIgaSx0PShpPWUoXCJUQ29uZmlnXCIpLlRDb25maWcsdChhLGkpLGEpO2Z1bmN0aW9uIGEoKXt2YXIgZT1pLmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIGUuX25hbWU9XCJSb2xlTWFuXCIsZS5pbml0QnlNYXAoezFlNDp7aWQ6MWU0LHR5cGU6MSxzZXF1ZW5jZToyLHVubG9ja1R5cGU6Myx1bmxvY2tDb3N0OjEsc2tpbk5hbWU6XCJiMVwiLGhlYWREZWZhdWx0OltcImhlYWRcIixcImhlYWRfNVwiLFwiYnJhaWQxXCIsXCJudWxsXCIsXCJicmFpZDJcIixcIm51bGxcIl0sbmFtZTpcIuWwj+W4hVwiLHByb2Zlc3Npb246XCLkuLTml7blt6VcIixob21ldG93bjpcIk5KXCIsc3Rvcnk6XCLmoqbmg7PmmK/lvZPmrYzmiYvvvIzkvYbnjrDlnKjmi4Xku7votJ/otKPkurrvvIzlh7rkuobku4DkuYjkuovpg73mmK/ku5botJ/otKPjgIJcIixza2lsbElEOlsxZTRdLFJvbGVCb25lczpcImJvbmVzL3JvbGVcIn0sMTAxMDA6e2lkOjEwMTAwLHR5cGU6MSxzZXF1ZW5jZToxLHVubG9ja1R5cGU6MSx1bmxvY2tDb3N0OjEsc2tpbk5hbWU6XCJiMlwiLGhlYWREZWZhdWx0OltcImhlYWRcIixcImhlYWRfMlwiLFwiYnJhaWQxXCIsXCJicmFpZDFfMlwiLFwiYnJhaWQyXCIsXCJicmFpZDJfMlwiXSxuYW1lOlwi5bCP576OXCIscHJvZmVzc2lvbjpcIui0ouWKoVwiLGhvbWV0b3duOlwiQ0RcIixzdG9yeTpcIuaJk+W3peWkmuW5tOaLpeacieiHquW3seeahOWwj+mHkeW6k++8jOmdoOedgOS8mOengOeahOeQhui0ouiDveWKm+i6uuW5s+eUn+a0u+OAglwiLHNraWxsSUQ6WzEwMTAwXSxSb2xlQm9uZXM6XCJib25lcy9yb2xlXCJ9LDEwMjAwOntpZDoxMDIwMCx0eXBlOjEsc2VxdWVuY2U6Myx1bmxvY2tUeXBlOjMsdW5sb2NrQ29zdDoxLHNraW5OYW1lOlwiYjRcIixoZWFkRGVmYXVsdDpbXCJoZWFkXCIsXCJoZWFkXzRcIixcImJyYWlkMVwiLFwibnVsbFwiLFwiYnJhaWQyXCIsXCJudWxsXCJdLG5hbWU6XCLpmL/njL9cIixwcm9mZXNzaW9uOlwi56iL5bqP5ZGYXCIsaG9tZXRvd246XCLkuI3or6ZcIixzdG9yeTpcIui/meeMtOWtkOaJk+Wwj+WwseiBquaYju+8jOeDreeIseWIm+mAoOaQnuWPkeaYju+8jOiDveWkn+S4uuWkp+WutuWIm+mAoOW+iOWkmuWwj+S4nOilv1wiLHNraWxsSUQ6WzEwMjAwLDEwMjUwXSxSb2xlQm9uZXM6XCJib25lcy9yb2xlXCJ9LDEwMzAwOntpZDoxMDMwMCx0eXBlOjEsc2VxdWVuY2U6NCx1bmxvY2tUeXBlOjMsdW5sb2NrQ29zdDoxLHNraW5OYW1lOlwiYjNcIixoZWFkRGVmYXVsdDpbXCJoZWFkXCIsXCJoZWFkXzNcIixcImJyYWlkMVwiLFwiYnJhaWQxXzNcIixcImJyYWlkMlwiLFwiYnJhaWQyXzNcIl0sbmFtZTpcIuS4veS4vVwiLHByb2Zlc3Npb246XCLorr7orqHluIhcIixob21ldG93bjpcIkZKXCIsc3Rvcnk6XCLnlLvnlLvnibnliKvmnInlpKnotYvvvIzog73lpJ/kvb/nlLvkvZzlhbfosaHljJbvvIzlnKjmn5DmrKHnu5jnlLvkuK3nu5jnlLvkuoboh6rlt7HogIzkuqfnlJ/kuoboh6rlt7HnmoTliIbouqtcIixza2lsbElEOlsxMDMwMCwxMDM1MF0sUm9sZUJvbmVzOlwiYm9uZXMvcm9sZVwifX0pLGV9by5Sb2xlTWFuQ2ZnUmVhZGVyPXQiXX0=