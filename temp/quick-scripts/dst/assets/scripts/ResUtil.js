
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc736r2cxFIeYx92c66ycg3', 'ResUtil');
// scripts/ResUtil.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ResUtil = void 0;
var n = e("ResKeeper"),
    i = e("AssetLoader"),
    e = (a.getResKeeper = function (e, t) {
  return e ? e.getComponent(n["default"]) || (t ? e.addComponent(n["default"]) : a.getResKeeper(e.parent, t)) : i.assetLoader.getResKeeper();
}, a);

function a() {}

o.ResUtil = e;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUmVzVXRpbC5qcyJdLCJuYW1lcyI6WyJlIiwicmVxdWlyZSIsInQiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJSZXNVdGlsIiwibiIsImkiLCJhIiwiZ2V0UmVzS2VlcGVyIiwiZ2V0Q29tcG9uZW50IiwiYWRkQ29tcG9uZW50IiwicGFyZW50IiwiYXNzZXRMb2FkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWFDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ0ksRUFBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixDQUFyQyxHQUFpREosQ0FBQyxDQUFDSyxPQUFGLEdBQVUsS0FBSyxDQUFoRTtBQUFrRSxJQUFJQyxDQUFDLEdBQUNWLENBQUMsQ0FBQyxXQUFELENBQVA7QUFBQSxJQUFxQlcsQ0FBQyxHQUFDWCxDQUFDLENBQUMsYUFBRCxDQUF4QjtBQUFBLElBQXdDQSxDQUFDLElBQUVZLENBQUMsQ0FBQ0MsWUFBRixHQUFlLFVBQVNiLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUMsU0FBT0YsQ0FBQyxHQUFDQSxDQUFDLENBQUNjLFlBQUYsQ0FBZUosQ0FBQyxXQUFoQixNQUE0QlIsQ0FBQyxHQUFDRixDQUFDLENBQUNlLFlBQUYsQ0FBZUwsQ0FBQyxXQUFoQixDQUFELEdBQTJCRSxDQUFDLENBQUNDLFlBQUYsQ0FBZWIsQ0FBQyxDQUFDZ0IsTUFBakIsRUFBd0JkLENBQXhCLENBQXhELENBQUQsR0FBcUZTLENBQUMsQ0FBQ00sV0FBRixDQUFjSixZQUFkLEVBQTdGO0FBQTBILENBQXZKLEVBQXdKRCxDQUExSixDQUF6Qzs7QUFBc00sU0FBU0EsQ0FBVCxHQUFZLENBQUU7O0FBQUFSLENBQUMsQ0FBQ0ssT0FBRixHQUFVVCxDQUFWIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1yZXF1aXJlO1xudmFyIHQ9bW9kdWxlO1xudmFyIG89ZXhwb3J0cztcblwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8uUmVzVXRpbD12b2lkIDA7dmFyIG49ZShcIlJlc0tlZXBlclwiKSxpPWUoXCJBc3NldExvYWRlclwiKSxlPShhLmdldFJlc0tlZXBlcj1mdW5jdGlvbihlLHQpe3JldHVybiBlP2UuZ2V0Q29tcG9uZW50KG4uZGVmYXVsdCl8fCh0P2UuYWRkQ29tcG9uZW50KG4uZGVmYXVsdCk6YS5nZXRSZXNLZWVwZXIoZS5wYXJlbnQsdCkpOmkuYXNzZXRMb2FkZXIuZ2V0UmVzS2VlcGVyKCl9LGEpO2Z1bmN0aW9uIGEoKXt9by5SZXNVdGlsPWUiXX0=