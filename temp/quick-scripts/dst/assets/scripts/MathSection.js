
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MathSection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7df6c3AclpBMJ3HOvmrbjqw', 'MathSection');
// scripts/MathSection.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.MathSection = void 0;
n.prototype.adjust = function () {
  var e = this.left,
      t = this.right;
  t < e && (this.left = t, this.right = e);
}, n.prototype.isNullRange = function () {
  return this.left === Number.NEGATIVE_INFINITY && this.right === Number.NEGATIVE_INFINITY;
}, n.prototype.length = function () {
  return this.right - this.left;
}, n.prototype.and = function (e) {
  var t = new n();
  return this.isNullRange() || e.isNullRange() || (this.adjust(), e.adjust(), this.left >= e.left && this.left <= e.right ? t.left = this.left : e.left >= this.left && e.left <= this.right && (t.left = e.left), this.right >= e.left && this.right <= e.right ? t.right = this.right : e.right >= this.left && e.right <= this.right && (t.right = e.right)), t;
}, n.prototype.Invert = function (e) {
  if (this.isNullRange()) return e;
  var t = new n();
  return this.left === e.left && this.right === e.right || (this.left === e.left ? (t.left = this.right + 1, t.right = e.right) : this.right === e.right && (t.left = e.left, t.right = this.left - 1)), t;
}, t = n;

function n() {
  this.left = Number.NEGATIVE_INFINITY, this.right = Number.NEGATIVE_INFINITY;
}

o.MathSection = t;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWF0aFNlY3Rpb24uanMiXSwibmFtZXMiOlsiZSIsInJlcXVpcmUiLCJ0IiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiTWF0aFNlY3Rpb24iLCJuIiwicHJvdG90eXBlIiwiYWRqdXN0IiwibGVmdCIsInJpZ2h0IiwiaXNOdWxsUmFuZ2UiLCJOdW1iZXIiLCJORUdBVElWRV9JTkZJTklUWSIsImxlbmd0aCIsImFuZCIsIkludmVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUNDLE9BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE1BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE9BQU47QUFDQTs7QUFBYUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCSCxDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDSSxFQUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLENBQXJDLEdBQWlESixDQUFDLENBQUNLLFdBQUYsR0FBYyxLQUFLLENBQXBFO0FBQXNFQyxDQUFDLENBQUNDLFNBQUYsQ0FBWUMsTUFBWixHQUFtQixZQUFVO0FBQUMsTUFBSVosQ0FBQyxHQUFDLEtBQUthLElBQVg7QUFBQSxNQUFnQlgsQ0FBQyxHQUFDLEtBQUtZLEtBQXZCO0FBQTZCWixFQUFBQSxDQUFDLEdBQUNGLENBQUYsS0FBTSxLQUFLYSxJQUFMLEdBQVVYLENBQVYsRUFBWSxLQUFLWSxLQUFMLEdBQVdkLENBQTdCO0FBQWdDLENBQTNGLEVBQTRGVSxDQUFDLENBQUNDLFNBQUYsQ0FBWUksV0FBWixHQUF3QixZQUFVO0FBQUMsU0FBTyxLQUFLRixJQUFMLEtBQVlHLE1BQU0sQ0FBQ0MsaUJBQW5CLElBQXNDLEtBQUtILEtBQUwsS0FBYUUsTUFBTSxDQUFDQyxpQkFBakU7QUFBbUYsQ0FBbE4sRUFBbU5QLENBQUMsQ0FBQ0MsU0FBRixDQUFZTyxNQUFaLEdBQW1CLFlBQVU7QUFBQyxTQUFPLEtBQUtKLEtBQUwsR0FBVyxLQUFLRCxJQUF2QjtBQUE0QixDQUE3USxFQUE4UUgsQ0FBQyxDQUFDQyxTQUFGLENBQVlRLEdBQVosR0FBZ0IsVUFBU25CLENBQVQsRUFBVztBQUFDLE1BQUlFLENBQUMsR0FBQyxJQUFJUSxDQUFKLEVBQU47QUFBWSxTQUFPLEtBQUtLLFdBQUwsTUFBb0JmLENBQUMsQ0FBQ2UsV0FBRixFQUFwQixLQUFzQyxLQUFLSCxNQUFMLElBQWNaLENBQUMsQ0FBQ1ksTUFBRixFQUFkLEVBQXlCLEtBQUtDLElBQUwsSUFBV2IsQ0FBQyxDQUFDYSxJQUFiLElBQW1CLEtBQUtBLElBQUwsSUFBV2IsQ0FBQyxDQUFDYyxLQUFoQyxHQUFzQ1osQ0FBQyxDQUFDVyxJQUFGLEdBQU8sS0FBS0EsSUFBbEQsR0FBdURiLENBQUMsQ0FBQ2EsSUFBRixJQUFRLEtBQUtBLElBQWIsSUFBbUJiLENBQUMsQ0FBQ2EsSUFBRixJQUFRLEtBQUtDLEtBQWhDLEtBQXdDWixDQUFDLENBQUNXLElBQUYsR0FBT2IsQ0FBQyxDQUFDYSxJQUFqRCxDQUFoRixFQUF1SSxLQUFLQyxLQUFMLElBQVlkLENBQUMsQ0FBQ2EsSUFBZCxJQUFvQixLQUFLQyxLQUFMLElBQVlkLENBQUMsQ0FBQ2MsS0FBbEMsR0FBd0NaLENBQUMsQ0FBQ1ksS0FBRixHQUFRLEtBQUtBLEtBQXJELEdBQTJEZCxDQUFDLENBQUNjLEtBQUYsSUFBUyxLQUFLRCxJQUFkLElBQW9CYixDQUFDLENBQUNjLEtBQUYsSUFBUyxLQUFLQSxLQUFsQyxLQUEwQ1osQ0FBQyxDQUFDWSxLQUFGLEdBQVFkLENBQUMsQ0FBQ2MsS0FBcEQsQ0FBeE8sR0FBb1NaLENBQTNTO0FBQTZTLENBQW5tQixFQUFvbUJRLENBQUMsQ0FBQ0MsU0FBRixDQUFZUyxNQUFaLEdBQW1CLFVBQVNwQixDQUFULEVBQVc7QUFBQyxNQUFHLEtBQUtlLFdBQUwsRUFBSCxFQUFzQixPQUFPZixDQUFQO0FBQVMsTUFBSUUsQ0FBQyxHQUFDLElBQUlRLENBQUosRUFBTjtBQUFZLFNBQU8sS0FBS0csSUFBTCxLQUFZYixDQUFDLENBQUNhLElBQWQsSUFBb0IsS0FBS0MsS0FBTCxLQUFhZCxDQUFDLENBQUNjLEtBQW5DLEtBQTJDLEtBQUtELElBQUwsS0FBWWIsQ0FBQyxDQUFDYSxJQUFkLElBQW9CWCxDQUFDLENBQUNXLElBQUYsR0FBTyxLQUFLQyxLQUFMLEdBQVcsQ0FBbEIsRUFBb0JaLENBQUMsQ0FBQ1ksS0FBRixHQUFRZCxDQUFDLENBQUNjLEtBQWxELElBQXlELEtBQUtBLEtBQUwsS0FBYWQsQ0FBQyxDQUFDYyxLQUFmLEtBQXVCWixDQUFDLENBQUNXLElBQUYsR0FBT2IsQ0FBQyxDQUFDYSxJQUFULEVBQWNYLENBQUMsQ0FBQ1ksS0FBRixHQUFRLEtBQUtELElBQUwsR0FBVSxDQUF2RCxDQUFwRyxHQUErSlgsQ0FBdEs7QUFBd0ssQ0FBdDFCLEVBQXUxQkEsQ0FBQyxHQUFDUSxDQUF6MUI7O0FBQTIxQixTQUFTQSxDQUFULEdBQVk7QUFBQyxPQUFLRyxJQUFMLEdBQVVHLE1BQU0sQ0FBQ0MsaUJBQWpCLEVBQW1DLEtBQUtILEtBQUwsR0FBV0UsTUFBTSxDQUFDQyxpQkFBckQ7QUFBdUU7O0FBQUFiLENBQUMsQ0FBQ0ssV0FBRixHQUFjUCxDQUFkIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1yZXF1aXJlO1xudmFyIHQ9bW9kdWxlO1xudmFyIG89ZXhwb3J0cztcblwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8uTWF0aFNlY3Rpb249dm9pZCAwO24ucHJvdG90eXBlLmFkanVzdD1mdW5jdGlvbigpe3ZhciBlPXRoaXMubGVmdCx0PXRoaXMucmlnaHQ7dDxlJiYodGhpcy5sZWZ0PXQsdGhpcy5yaWdodD1lKX0sbi5wcm90b3R5cGUuaXNOdWxsUmFuZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZWZ0PT09TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZJiZ0aGlzLnJpZ2h0PT09TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZfSxuLnByb3RvdHlwZS5sZW5ndGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yaWdodC10aGlzLmxlZnR9LG4ucHJvdG90eXBlLmFuZD1mdW5jdGlvbihlKXt2YXIgdD1uZXcgbjtyZXR1cm4gdGhpcy5pc051bGxSYW5nZSgpfHxlLmlzTnVsbFJhbmdlKCl8fCh0aGlzLmFkanVzdCgpLGUuYWRqdXN0KCksdGhpcy5sZWZ0Pj1lLmxlZnQmJnRoaXMubGVmdDw9ZS5yaWdodD90LmxlZnQ9dGhpcy5sZWZ0OmUubGVmdD49dGhpcy5sZWZ0JiZlLmxlZnQ8PXRoaXMucmlnaHQmJih0LmxlZnQ9ZS5sZWZ0KSx0aGlzLnJpZ2h0Pj1lLmxlZnQmJnRoaXMucmlnaHQ8PWUucmlnaHQ/dC5yaWdodD10aGlzLnJpZ2h0OmUucmlnaHQ+PXRoaXMubGVmdCYmZS5yaWdodDw9dGhpcy5yaWdodCYmKHQucmlnaHQ9ZS5yaWdodCkpLHR9LG4ucHJvdG90eXBlLkludmVydD1mdW5jdGlvbihlKXtpZih0aGlzLmlzTnVsbFJhbmdlKCkpcmV0dXJuIGU7dmFyIHQ9bmV3IG47cmV0dXJuIHRoaXMubGVmdD09PWUubGVmdCYmdGhpcy5yaWdodD09PWUucmlnaHR8fCh0aGlzLmxlZnQ9PT1lLmxlZnQ/KHQubGVmdD10aGlzLnJpZ2h0KzEsdC5yaWdodD1lLnJpZ2h0KTp0aGlzLnJpZ2h0PT09ZS5yaWdodCYmKHQubGVmdD1lLmxlZnQsdC5yaWdodD10aGlzLmxlZnQtMSkpLHR9LHQ9bjtmdW5jdGlvbiBuKCl7dGhpcy5sZWZ0PU51bWJlci5ORUdBVElWRV9JTkZJTklUWSx0aGlzLnJpZ2h0PU51bWJlci5ORUdBVElWRV9JTkZJTklUWX1vLk1hdGhTZWN0aW9uPXQiXX0=