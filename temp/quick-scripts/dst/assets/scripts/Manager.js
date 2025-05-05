
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Manager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da471la2PRBJKFLtZdZ0rzM', 'Manager');
// scripts/Manager.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.Manager = void 0;
var n = e("LoaderAdapter"),
    e = (Object.defineProperty(i.prototype, "loader", {
  get: function get() {
    return n.LoaderAdapter;
  },
  enumerable: !1,
  configurable: !0
}), Object.defineProperty(i.prototype, "storage", {
  get: function get() {
    return null == this._storage && (this._storage = new StorageManager()), this._storage;
  },
  enumerable: !1,
  configurable: !0
}), i);

function i() {}

o.Manager = new e();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJlIiwicmVxdWlyZSIsInQiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJNYW5hZ2VyIiwibiIsImkiLCJwcm90b3R5cGUiLCJnZXQiLCJMb2FkZXJBZGFwdGVyIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIl9zdG9yYWdlIiwiU3RvcmFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWFDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ0ksRUFBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixDQUFyQyxHQUFpREosQ0FBQyxDQUFDSyxPQUFGLEdBQVUsS0FBSyxDQUFoRTtBQUFrRSxJQUFJQyxDQUFDLEdBQUNWLENBQUMsQ0FBQyxlQUFELENBQVA7QUFBQSxJQUF5QkEsQ0FBQyxJQUFFTSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JJLENBQUMsQ0FBQ0MsU0FBeEIsRUFBa0MsUUFBbEMsRUFBMkM7QUFBQ0MsRUFBQUEsR0FBRyxFQUFDLGVBQVU7QUFBQyxXQUFPSCxDQUFDLENBQUNJLGFBQVQ7QUFBdUIsR0FBdkM7QUFBd0NDLEVBQUFBLFVBQVUsRUFBQyxDQUFDLENBQXBEO0FBQXNEQyxFQUFBQSxZQUFZLEVBQUMsQ0FBQztBQUFwRSxDQUEzQyxHQUFtSFYsTUFBTSxDQUFDQyxjQUFQLENBQXNCSSxDQUFDLENBQUNDLFNBQXhCLEVBQWtDLFNBQWxDLEVBQTRDO0FBQUNDLEVBQUFBLEdBQUcsRUFBQyxlQUFVO0FBQUMsV0FBTyxRQUFNLEtBQUtJLFFBQVgsS0FBc0IsS0FBS0EsUUFBTCxHQUFjLElBQUlDLGNBQUosRUFBcEMsR0FBd0QsS0FBS0QsUUFBcEU7QUFBNkUsR0FBN0Y7QUFBOEZGLEVBQUFBLFVBQVUsRUFBQyxDQUFDLENBQTFHO0FBQTRHQyxFQUFBQSxZQUFZLEVBQUMsQ0FBQztBQUExSCxDQUE1QyxDQUFuSCxFQUE2UkwsQ0FBL1IsQ0FBMUI7O0FBQTRULFNBQVNBLENBQVQsR0FBWSxDQUFFOztBQUFBUCxDQUFDLENBQUNLLE9BQUYsR0FBVSxJQUFJVCxDQUFKLEVBQVYiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBlPXJlcXVpcmU7XG52YXIgdD1tb2R1bGU7XG52YXIgbz1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5NYW5hZ2VyPXZvaWQgMDt2YXIgbj1lKFwiTG9hZGVyQWRhcHRlclwiKSxlPShPYmplY3QuZGVmaW5lUHJvcGVydHkoaS5wcm90b3R5cGUsXCJsb2FkZXJcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG4uTG9hZGVyQWRhcHRlcn0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoaS5wcm90b3R5cGUsXCJzdG9yYWdlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBudWxsPT10aGlzLl9zdG9yYWdlJiYodGhpcy5fc3RvcmFnZT1uZXcgU3RvcmFnZU1hbmFnZXIpLHRoaXMuX3N0b3JhZ2V9LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksaSk7ZnVuY3Rpb24gaSgpe31vLk1hbmFnZXI9bmV3IGUiXX0=