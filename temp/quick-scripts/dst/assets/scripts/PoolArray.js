
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PoolArray.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dac5erOoGFGBq0RfdzyPmKQ', 'PoolArray');
// scripts/PoolArray.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.PoolArray = void 0;
n.prototype.hasLoadObj = function (e) {
  e %= this.max_count;
  return this.m_item_list[e];
}, n.prototype.getObj = function (e, t) {
  if (void 0 === t && (t = !0), 0 === this.max_count) return cc.log("最大容量必须大于0"), null;
  var o = e % this.max_count,
      n = null;
  if (this.m_item_list[o]) n = this.m_item_list[o];else {
    n = cc.instantiate(this.template), (this.m_item_list[o] = n).parent = this.parent;

    for (var i = 0, a = this.firstLoad; i < a.length; i++) {
      (0, a[i])(n, e, o);
    }
  }
  return t && (n.active = !0), n;
}, n.prototype.hideOther = function (e) {
  var t = e;
  e < 0 && (t = 0);

  for (var o = Object.keys(this.m_item_list).length, n = t; n < o; n++) {
    null !== this.m_item_list[n] && (this.m_item_list[n].active = !1);
  }
}, n.prototype.clear = function () {
  for (var e in this.m_item_list) {
    Object.prototype.hasOwnProperty.call(this.m_item_list, e) && delete this.m_item_list[e];
  }
}, t = n;

function n() {
  this.max_count = 0, this.template = null, this.parent = null, this.firstLoad = [], this.m_item_list = {};
}

o.PoolArray = t;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUG9vbEFycmF5LmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlBvb2xBcnJheSIsIm4iLCJwcm90b3R5cGUiLCJoYXNMb2FkT2JqIiwibWF4X2NvdW50IiwibV9pdGVtX2xpc3QiLCJnZXRPYmoiLCJjYyIsImxvZyIsImluc3RhbnRpYXRlIiwidGVtcGxhdGUiLCJwYXJlbnQiLCJpIiwiYSIsImZpcnN0TG9hZCIsImxlbmd0aCIsImFjdGl2ZSIsImhpZGVPdGhlciIsImtleXMiLCJjbGVhciIsImhhc093blByb3BlcnR5IiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUNDLE9BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE1BQU47QUFDQSxJQUFJQyxDQUFDLEdBQUNDLE9BQU47QUFDQTs7QUFBYUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCSCxDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDSSxFQUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLENBQXJDLEdBQWlESixDQUFDLENBQUNLLFNBQUYsR0FBWSxLQUFLLENBQWxFO0FBQW9FQyxDQUFDLENBQUNDLFNBQUYsQ0FBWUMsVUFBWixHQUF1QixVQUFTWixDQUFULEVBQVc7QUFBQ0EsRUFBQUEsQ0FBQyxJQUFFLEtBQUthLFNBQVI7QUFBa0IsU0FBTyxLQUFLQyxXQUFMLENBQWlCZCxDQUFqQixDQUFQO0FBQTJCLENBQWhGLEVBQWlGVSxDQUFDLENBQUNDLFNBQUYsQ0FBWUksTUFBWixHQUFtQixVQUFTZixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLE1BQUcsS0FBSyxDQUFMLEtBQVNBLENBQVQsS0FBYUEsQ0FBQyxHQUFDLENBQUMsQ0FBaEIsR0FBbUIsTUFBSSxLQUFLVyxTQUEvQixFQUF5QyxPQUFPRyxFQUFFLENBQUNDLEdBQUgsQ0FBTyxXQUFQLEdBQW9CLElBQTNCO0FBQWdDLE1BQUliLENBQUMsR0FBQ0osQ0FBQyxHQUFDLEtBQUthLFNBQWI7QUFBQSxNQUF1QkgsQ0FBQyxHQUFDLElBQXpCO0FBQThCLE1BQUcsS0FBS0ksV0FBTCxDQUFpQlYsQ0FBakIsQ0FBSCxFQUF1Qk0sQ0FBQyxHQUFDLEtBQUtJLFdBQUwsQ0FBaUJWLENBQWpCLENBQUYsQ0FBdkIsS0FBaUQ7QUFBQ00sSUFBQUEsQ0FBQyxHQUFDTSxFQUFFLENBQUNFLFdBQUgsQ0FBZSxLQUFLQyxRQUFwQixDQUFGLEVBQWdDLENBQUMsS0FBS0wsV0FBTCxDQUFpQlYsQ0FBakIsSUFBb0JNLENBQXJCLEVBQXdCVSxNQUF4QixHQUErQixLQUFLQSxNQUFwRTs7QUFBMkUsU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBTixFQUFRQyxDQUFDLEdBQUMsS0FBS0MsU0FBbkIsRUFBNkJGLENBQUMsR0FBQ0MsQ0FBQyxDQUFDRSxNQUFqQyxFQUF3Q0gsQ0FBQyxFQUF6QztBQUE0QyxPQUFDLEdBQUVDLENBQUMsQ0FBQ0QsQ0FBRCxDQUFKLEVBQVNYLENBQVQsRUFBV1YsQ0FBWCxFQUFhSSxDQUFiO0FBQTVDO0FBQTREO0FBQUEsU0FBT0YsQ0FBQyxLQUFHUSxDQUFDLENBQUNlLE1BQUYsR0FBUyxDQUFDLENBQWIsQ0FBRCxFQUFpQmYsQ0FBeEI7QUFBMEIsQ0FBNWEsRUFBNmFBLENBQUMsQ0FBQ0MsU0FBRixDQUFZZSxTQUFaLEdBQXNCLFVBQVMxQixDQUFULEVBQVc7QUFBQyxNQUFJRSxDQUFDLEdBQUNGLENBQU47QUFBUUEsRUFBQUEsQ0FBQyxHQUFDLENBQUYsS0FBTUUsQ0FBQyxHQUFDLENBQVI7O0FBQVcsT0FBSSxJQUFJRSxDQUFDLEdBQUNFLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWSxLQUFLYixXQUFqQixFQUE4QlUsTUFBcEMsRUFBMkNkLENBQUMsR0FBQ1IsQ0FBakQsRUFBbURRLENBQUMsR0FBQ04sQ0FBckQsRUFBdURNLENBQUMsRUFBeEQ7QUFBMkQsYUFBTyxLQUFLSSxXQUFMLENBQWlCSixDQUFqQixDQUFQLEtBQTZCLEtBQUtJLFdBQUwsQ0FBaUJKLENBQWpCLEVBQW9CZSxNQUFwQixHQUEyQixDQUFDLENBQXpEO0FBQTNEO0FBQXVILENBQXpsQixFQUEwbEJmLENBQUMsQ0FBQ0MsU0FBRixDQUFZaUIsS0FBWixHQUFrQixZQUFVO0FBQUMsT0FBSSxJQUFJNUIsQ0FBUixJQUFhLEtBQUtjLFdBQWxCO0FBQThCUixJQUFBQSxNQUFNLENBQUNLLFNBQVAsQ0FBaUJrQixjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUMsS0FBS2hCLFdBQTFDLEVBQXNEZCxDQUF0RCxLQUEwRCxPQUFPLEtBQUtjLFdBQUwsQ0FBaUJkLENBQWpCLENBQWpFO0FBQTlCO0FBQW1ILENBQTF1QixFQUEydUJFLENBQUMsR0FBQ1EsQ0FBN3VCOztBQUErdUIsU0FBU0EsQ0FBVCxHQUFZO0FBQUMsT0FBS0csU0FBTCxHQUFlLENBQWYsRUFBaUIsS0FBS00sUUFBTCxHQUFjLElBQS9CLEVBQW9DLEtBQUtDLE1BQUwsR0FBWSxJQUFoRCxFQUFxRCxLQUFLRyxTQUFMLEdBQWUsRUFBcEUsRUFBdUUsS0FBS1QsV0FBTCxHQUFpQixFQUF4RjtBQUEyRjs7QUFBQVYsQ0FBQyxDQUFDSyxTQUFGLEdBQVlQLENBQVoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBlPXJlcXVpcmU7XG52YXIgdD1tb2R1bGU7XG52YXIgbz1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5Qb29sQXJyYXk9dm9pZCAwO24ucHJvdG90eXBlLmhhc0xvYWRPYmo9ZnVuY3Rpb24oZSl7ZSU9dGhpcy5tYXhfY291bnQ7cmV0dXJuIHRoaXMubV9pdGVtX2xpc3RbZV19LG4ucHJvdG90eXBlLmdldE9iaj1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PSEwKSwwPT09dGhpcy5tYXhfY291bnQpcmV0dXJuIGNjLmxvZyhcIuacgOWkp+WuuemHj+W/hemhu+Wkp+S6jjBcIiksbnVsbDt2YXIgbz1lJXRoaXMubWF4X2NvdW50LG49bnVsbDtpZih0aGlzLm1faXRlbV9saXN0W29dKW49dGhpcy5tX2l0ZW1fbGlzdFtvXTtlbHNle249Y2MuaW5zdGFudGlhdGUodGhpcy50ZW1wbGF0ZSksKHRoaXMubV9pdGVtX2xpc3Rbb109bikucGFyZW50PXRoaXMucGFyZW50O2Zvcih2YXIgaT0wLGE9dGhpcy5maXJzdExvYWQ7aTxhLmxlbmd0aDtpKyspKDAsYVtpXSkobixlLG8pfXJldHVybiB0JiYobi5hY3RpdmU9ITApLG59LG4ucHJvdG90eXBlLmhpZGVPdGhlcj1mdW5jdGlvbihlKXt2YXIgdD1lO2U8MCYmKHQ9MCk7Zm9yKHZhciBvPU9iamVjdC5rZXlzKHRoaXMubV9pdGVtX2xpc3QpLmxlbmd0aCxuPXQ7bjxvO24rKyludWxsIT09dGhpcy5tX2l0ZW1fbGlzdFtuXSYmKHRoaXMubV9pdGVtX2xpc3Rbbl0uYWN0aXZlPSExKX0sbi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gdGhpcy5tX2l0ZW1fbGlzdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5tX2l0ZW1fbGlzdCxlKSYmZGVsZXRlIHRoaXMubV9pdGVtX2xpc3RbZV19LHQ9bjtmdW5jdGlvbiBuKCl7dGhpcy5tYXhfY291bnQ9MCx0aGlzLnRlbXBsYXRlPW51bGwsdGhpcy5wYXJlbnQ9bnVsbCx0aGlzLmZpcnN0TG9hZD1bXSx0aGlzLm1faXRlbV9saXN0PXt9fW8uUG9vbEFycmF5PXQiXX0=