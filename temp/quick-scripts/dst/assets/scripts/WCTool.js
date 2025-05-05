
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/WCTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85ac5TcHsRMdq5Lo2guouA0', 'WCTool');
// scripts/WCTool.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.WCTool = void 0, function (e) {
  var t = (o.check = function (e, t, o) {
    void 0 === o && (o = function o() {});
    var n,
        i = 0;

    for (n in e) {
      var a = e[n],
          r = s.getNodeTag({
        x: a.pos[0],
        y: a.pos[1]
      }, t);
      r && r.attribute.lv == a.lv && i++;
    }

    o(i == e.length);
  }, o.list = [], o);

  function o() {}

  e.Formation = t;
  var s = (n.getNodeTag = function (e, t) {
    for (var o in t) {
      o = t[o];
      if (o._mapPos.x == e.x && o._mapPos.y == e.y && o._isActive) return o;
    }

    return null;
  }, n);

  function n() {}

  e.Map = s;
}(o.WCTool || (o.WCTool = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV0NUb29sLmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIldDVG9vbCIsImNoZWNrIiwibiIsImkiLCJhIiwiciIsInMiLCJnZXROb2RlVGFnIiwieCIsInBvcyIsInkiLCJhdHRyaWJ1dGUiLCJsdiIsImxlbmd0aCIsImxpc3QiLCJGb3JtYXRpb24iLCJfbWFwUG9zIiwiX2lzQWN0aXZlIiwiTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBQ0MsT0FBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsTUFBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsT0FBTjtBQUNBOztBQUFhQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUNJLEVBQUFBLEtBQUssRUFBQyxDQUFDO0FBQVIsQ0FBckMsR0FBaURKLENBQUMsQ0FBQ0ssTUFBRixHQUFTLEtBQUssQ0FBL0QsRUFBaUUsVUFBU1QsQ0FBVCxFQUFXO0FBQUMsTUFBSUUsQ0FBQyxJQUFFRSxDQUFDLENBQUNNLEtBQUYsR0FBUSxVQUFTVixDQUFULEVBQVdFLENBQVgsRUFBYUUsQ0FBYixFQUFlO0FBQUMsU0FBSyxDQUFMLEtBQVNBLENBQVQsS0FBYUEsQ0FBQyxHQUFDLGFBQVUsQ0FBRSxDQUEzQjtBQUE2QixRQUFJTyxDQUFKO0FBQUEsUUFBTUMsQ0FBQyxHQUFDLENBQVI7O0FBQVUsU0FBSUQsQ0FBSixJQUFTWCxDQUFULEVBQVc7QUFBQyxVQUFJYSxDQUFDLEdBQUNiLENBQUMsQ0FBQ1csQ0FBRCxDQUFQO0FBQUEsVUFBV0csQ0FBQyxHQUFDQyxDQUFDLENBQUNDLFVBQUYsQ0FBYTtBQUFDQyxRQUFBQSxDQUFDLEVBQUNKLENBQUMsQ0FBQ0ssR0FBRixDQUFNLENBQU4sQ0FBSDtBQUFZQyxRQUFBQSxDQUFDLEVBQUNOLENBQUMsQ0FBQ0ssR0FBRixDQUFNLENBQU47QUFBZCxPQUFiLEVBQXFDaEIsQ0FBckMsQ0FBYjtBQUFxRFksTUFBQUEsQ0FBQyxJQUFFQSxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsRUFBWixJQUFnQlIsQ0FBQyxDQUFDUSxFQUFyQixJQUF5QlQsQ0FBQyxFQUExQjtBQUE2Qjs7QUFBQVIsSUFBQUEsQ0FBQyxDQUFDUSxDQUFDLElBQUVaLENBQUMsQ0FBQ3NCLE1BQU4sQ0FBRDtBQUFlLEdBQTVLLEVBQTZLbEIsQ0FBQyxDQUFDbUIsSUFBRixHQUFPLEVBQXBMLEVBQXVMbkIsQ0FBekwsQ0FBTDs7QUFBaU0sV0FBU0EsQ0FBVCxHQUFZLENBQUU7O0FBQUFKLEVBQUFBLENBQUMsQ0FBQ3dCLFNBQUYsR0FBWXRCLENBQVo7QUFBYyxNQUFJYSxDQUFDLElBQUVKLENBQUMsQ0FBQ0ssVUFBRixHQUFhLFVBQVNoQixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQUksSUFBSUUsQ0FBUixJQUFhRixDQUFiLEVBQWU7QUFBQ0UsTUFBQUEsQ0FBQyxHQUFDRixDQUFDLENBQUNFLENBQUQsQ0FBSDtBQUFPLFVBQUdBLENBQUMsQ0FBQ3FCLE9BQUYsQ0FBVVIsQ0FBVixJQUFhakIsQ0FBQyxDQUFDaUIsQ0FBZixJQUFrQmIsQ0FBQyxDQUFDcUIsT0FBRixDQUFVTixDQUFWLElBQWFuQixDQUFDLENBQUNtQixDQUFqQyxJQUFvQ2YsQ0FBQyxDQUFDc0IsU0FBekMsRUFBbUQsT0FBT3RCLENBQVA7QUFBUzs7QUFBQSxXQUFPLElBQVA7QUFBWSxHQUExSCxFQUEySE8sQ0FBN0gsQ0FBTDs7QUFBcUksV0FBU0EsQ0FBVCxHQUFZLENBQUU7O0FBQUFYLEVBQUFBLENBQUMsQ0FBQzJCLEdBQUYsR0FBTVosQ0FBTjtBQUFRLENBQXBZLENBQXFZWCxDQUFDLENBQUNLLE1BQUYsS0FBV0wsQ0FBQyxDQUFDSyxNQUFGLEdBQVMsRUFBcEIsQ0FBclksQ0FBakUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBlPXJlcXVpcmU7XG52YXIgdD1tb2R1bGU7XG52YXIgbz1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5XQ1Rvb2w9dm9pZCAwLGZ1bmN0aW9uKGUpe3ZhciB0PShvLmNoZWNrPWZ1bmN0aW9uKGUsdCxvKXt2b2lkIDA9PT1vJiYobz1mdW5jdGlvbigpe30pO3ZhciBuLGk9MDtmb3IobiBpbiBlKXt2YXIgYT1lW25dLHI9cy5nZXROb2RlVGFnKHt4OmEucG9zWzBdLHk6YS5wb3NbMV19LHQpO3ImJnIuYXR0cmlidXRlLmx2PT1hLmx2JiZpKyt9byhpPT1lLmxlbmd0aCl9LG8ubGlzdD1bXSxvKTtmdW5jdGlvbiBvKCl7fWUuRm9ybWF0aW9uPXQ7dmFyIHM9KG4uZ2V0Tm9kZVRhZz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbyBpbiB0KXtvPXRbb107aWYoby5fbWFwUG9zLng9PWUueCYmby5fbWFwUG9zLnk9PWUueSYmby5faXNBY3RpdmUpcmV0dXJuIG99cmV0dXJuIG51bGx9LG4pO2Z1bmN0aW9uIG4oKXt9ZS5NYXA9c30oby5XQ1Rvb2x8fChvLldDVG9vbD17fSkpIl19