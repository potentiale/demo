
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GridViewFreshWork.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ff15VgohFFVZz9iC3AIfEG', 'GridViewFreshWork');
// scripts/GridViewFreshWork.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.GridViewFreshWork = o.GridViewFreshWorkItem = void 0;

function n() {}

o.GridViewFreshWorkItem = n;
i.prototype.removeWork = function (e) {
  for (var t = 0, o = this.getWorkItems(e); t < o.length; t++) {
    var n = o[t];
    this.dic.splice(n, 1);
  }
}, i.prototype.clear = function () {
  this.dic.length = 0;
}, i.prototype.addWork = function (e, t) {
  var o = new n();
  o.index = e, o["function"] = t, this.dic.push(o), this.run();
}, i.prototype.run = function () {
  var e = this;
  null === this._timeWatcher && (this._timeWatcher = setInterval(function () {
    e.excute();
  }, 1e3 * this.gapTime), this.excute());
}, i.prototype.excute = function () {
  if (0 === this.dic.length) return "number" == typeof this._timeWatcher && clearInterval(this._timeWatcher), void (this._timeWatcher = null);
  this.dic[0]["function"](), this.dic.shift();
}, i.prototype.getWorkItems = function (e) {
  for (var t = [], o = 0; o < this.dic.length; o++) {
    this.dic[o].index === e && t.push(o);
  }

  return t;
}, t = i;

function i() {
  this.gapTime = .02, this._timeWatcher = null, this.dic = [];
}

o.GridViewFreshWork = t;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JpZFZpZXdGcmVzaFdvcmsuanMiXSwibmFtZXMiOlsiZSIsInJlcXVpcmUiLCJ0IiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiR3JpZFZpZXdGcmVzaFdvcmsiLCJHcmlkVmlld0ZyZXNoV29ya0l0ZW0iLCJuIiwiaSIsInByb3RvdHlwZSIsInJlbW92ZVdvcmsiLCJnZXRXb3JrSXRlbXMiLCJsZW5ndGgiLCJkaWMiLCJzcGxpY2UiLCJjbGVhciIsImFkZFdvcmsiLCJpbmRleCIsInB1c2giLCJydW4iLCJfdGltZVdhdGNoZXIiLCJzZXRJbnRlcnZhbCIsImV4Y3V0ZSIsImdhcFRpbWUiLCJjbGVhckludGVydmFsIiwic2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWFDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ0ksRUFBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixDQUFyQyxHQUFpREosQ0FBQyxDQUFDSyxpQkFBRixHQUFvQkwsQ0FBQyxDQUFDTSxxQkFBRixHQUF3QixLQUFLLENBQWxHOztBQUFvRyxTQUFTQyxDQUFULEdBQVksQ0FBRTs7QUFBQVAsQ0FBQyxDQUFDTSxxQkFBRixHQUF3QkMsQ0FBeEI7QUFBMEJDLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxVQUFaLEdBQXVCLFVBQVNkLENBQVQsRUFBVztBQUFDLE9BQUksSUFBSUUsQ0FBQyxHQUFDLENBQU4sRUFBUUUsQ0FBQyxHQUFDLEtBQUtXLFlBQUwsQ0FBa0JmLENBQWxCLENBQWQsRUFBbUNFLENBQUMsR0FBQ0UsQ0FBQyxDQUFDWSxNQUF2QyxFQUE4Q2QsQ0FBQyxFQUEvQyxFQUFrRDtBQUFDLFFBQUlTLENBQUMsR0FBQ1AsQ0FBQyxDQUFDRixDQUFELENBQVA7QUFBVyxTQUFLZSxHQUFMLENBQVNDLE1BQVQsQ0FBZ0JQLENBQWhCLEVBQWtCLENBQWxCO0FBQXFCO0FBQUMsQ0FBdkgsRUFBd0hDLENBQUMsQ0FBQ0MsU0FBRixDQUFZTSxLQUFaLEdBQWtCLFlBQVU7QUFBQyxPQUFLRixHQUFMLENBQVNELE1BQVQsR0FBZ0IsQ0FBaEI7QUFBa0IsQ0FBdkssRUFBd0tKLENBQUMsQ0FBQ0MsU0FBRixDQUFZTyxPQUFaLEdBQW9CLFVBQVNwQixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLE1BQUlFLENBQUMsR0FBQyxJQUFJTyxDQUFKLEVBQU47QUFBWVAsRUFBQUEsQ0FBQyxDQUFDaUIsS0FBRixHQUFRckIsQ0FBUixFQUFVSSxDQUFDLFlBQUQsR0FBV0YsQ0FBckIsRUFBdUIsS0FBS2UsR0FBTCxDQUFTSyxJQUFULENBQWNsQixDQUFkLENBQXZCLEVBQXdDLEtBQUttQixHQUFMLEVBQXhDO0FBQW1ELENBQXpRLEVBQTBRWCxDQUFDLENBQUNDLFNBQUYsQ0FBWVUsR0FBWixHQUFnQixZQUFVO0FBQUMsTUFBSXZCLENBQUMsR0FBQyxJQUFOO0FBQVcsV0FBTyxLQUFLd0IsWUFBWixLQUEyQixLQUFLQSxZQUFMLEdBQWtCQyxXQUFXLENBQUMsWUFBVTtBQUFDekIsSUFBQUEsQ0FBQyxDQUFDMEIsTUFBRjtBQUFXLEdBQXZCLEVBQXdCLE1BQUksS0FBS0MsT0FBakMsQ0FBN0IsRUFBdUUsS0FBS0QsTUFBTCxFQUFsRztBQUFpSCxDQUFqYSxFQUFrYWQsQ0FBQyxDQUFDQyxTQUFGLENBQVlhLE1BQVosR0FBbUIsWUFBVTtBQUFDLE1BQUcsTUFBSSxLQUFLVCxHQUFMLENBQVNELE1BQWhCLEVBQXVCLE9BQU0sWUFBVSxPQUFPLEtBQUtRLFlBQXRCLElBQW9DSSxhQUFhLENBQUMsS0FBS0osWUFBTixDQUFqRCxFQUFxRSxNQUFLLEtBQUtBLFlBQUwsR0FBa0IsSUFBdkIsQ0FBM0U7QUFBd0csT0FBS1AsR0FBTCxDQUFTLENBQVQsaUJBQXVCLEtBQUtBLEdBQUwsQ0FBU1ksS0FBVCxFQUF2QjtBQUF3QyxDQUF2bUIsRUFBd21CakIsQ0FBQyxDQUFDQyxTQUFGLENBQVlFLFlBQVosR0FBeUIsVUFBU2YsQ0FBVCxFQUFXO0FBQUMsT0FBSSxJQUFJRSxDQUFDLEdBQUMsRUFBTixFQUFTRSxDQUFDLEdBQUMsQ0FBZixFQUFpQkEsQ0FBQyxHQUFDLEtBQUthLEdBQUwsQ0FBU0QsTUFBNUIsRUFBbUNaLENBQUMsRUFBcEM7QUFBdUMsU0FBS2EsR0FBTCxDQUFTYixDQUFULEVBQVlpQixLQUFaLEtBQW9CckIsQ0FBcEIsSUFBdUJFLENBQUMsQ0FBQ29CLElBQUYsQ0FBT2xCLENBQVAsQ0FBdkI7QUFBdkM7O0FBQXdFLFNBQU9GLENBQVA7QUFBUyxDQUE5dEIsRUFBK3RCQSxDQUFDLEdBQUNVLENBQWp1Qjs7QUFBbXVCLFNBQVNBLENBQVQsR0FBWTtBQUFDLE9BQUtlLE9BQUwsR0FBYSxHQUFiLEVBQWlCLEtBQUtILFlBQUwsR0FBa0IsSUFBbkMsRUFBd0MsS0FBS1AsR0FBTCxHQUFTLEVBQWpEO0FBQW9EOztBQUFBYixDQUFDLENBQUNLLGlCQUFGLEdBQW9CUCxDQUFwQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9cmVxdWlyZTtcbnZhciB0PW1vZHVsZTtcbnZhciBvPWV4cG9ydHM7XG5cInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvLkdyaWRWaWV3RnJlc2hXb3JrPW8uR3JpZFZpZXdGcmVzaFdvcmtJdGVtPXZvaWQgMDtmdW5jdGlvbiBuKCl7fW8uR3JpZFZpZXdGcmVzaFdvcmtJdGVtPW47aS5wcm90b3R5cGUucmVtb3ZlV29yaz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxvPXRoaXMuZ2V0V29ya0l0ZW1zKGUpO3Q8by5sZW5ndGg7dCsrKXt2YXIgbj1vW3RdO3RoaXMuZGljLnNwbGljZShuLDEpfX0saS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmRpYy5sZW5ndGg9MH0saS5wcm90b3R5cGUuYWRkV29yaz1mdW5jdGlvbihlLHQpe3ZhciBvPW5ldyBuO28uaW5kZXg9ZSxvLmZ1bmN0aW9uPXQsdGhpcy5kaWMucHVzaChvKSx0aGlzLnJ1bigpfSxpLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt2YXIgZT10aGlzO251bGw9PT10aGlzLl90aW1lV2F0Y2hlciYmKHRoaXMuX3RpbWVXYXRjaGVyPXNldEludGVydmFsKGZ1bmN0aW9uKCl7ZS5leGN1dGUoKX0sMWUzKnRoaXMuZ2FwVGltZSksdGhpcy5leGN1dGUoKSl9LGkucHJvdG90eXBlLmV4Y3V0ZT1mdW5jdGlvbigpe2lmKDA9PT10aGlzLmRpYy5sZW5ndGgpcmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHRoaXMuX3RpbWVXYXRjaGVyJiZjbGVhckludGVydmFsKHRoaXMuX3RpbWVXYXRjaGVyKSx2b2lkKHRoaXMuX3RpbWVXYXRjaGVyPW51bGwpO3RoaXMuZGljWzBdLmZ1bmN0aW9uKCksdGhpcy5kaWMuc2hpZnQoKX0saS5wcm90b3R5cGUuZ2V0V29ya0l0ZW1zPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxvPTA7bzx0aGlzLmRpYy5sZW5ndGg7bysrKXRoaXMuZGljW29dLmluZGV4PT09ZSYmdC5wdXNoKG8pO3JldHVybiB0fSx0PWk7ZnVuY3Rpb24gaSgpe3RoaXMuZ2FwVGltZT0uMDIsdGhpcy5fdGltZVdhdGNoZXI9bnVsbCx0aGlzLmRpYz1bXX1vLkdyaWRWaWV3RnJlc2hXb3JrPXQiXX0=