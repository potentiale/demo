
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AutoScaleComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3331aGzU0JLU6xvkx2wHCyr', 'AutoScaleComponent');
// scripts/AutoScaleComponent.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.AutoScaleComponent = void 0;
var i = e("GridView"),
    e = (n.prototype.getScale = function () {
  var e = 1,
      t = 0,
      o = 0,
      n = 0;

  switch (this.type) {
    case i.GRID_TYPE.GRID_VERTICAL:
      t = this.itemSize.x, o = this.space.x, n = this.parentSize.x;
      break;

    case i.GRID_TYPE.GRID_HORIZONTAL:
      t = this.itemSize.y, o = this.space.y, n = this.parentSize.y;
  }

  return e = t * this.keyCount + o * (this.keyCount - 1) > n ? (n - o * (this.keyCount - 1)) / this.keyCount / t : e;
}, n);

function n() {
  this.parentSize = cc.Vec2.ZERO, this.itemSize = cc.Vec2.ZERO, this.space = cc.Vec2.ZERO, this.keyCount = 0;
}

o.AutoScaleComponent = e;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXV0b1NjYWxlQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImUiLCJyZXF1aXJlIiwidCIsIm1vZHVsZSIsIm8iLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkF1dG9TY2FsZUNvbXBvbmVudCIsImkiLCJuIiwicHJvdG90eXBlIiwiZ2V0U2NhbGUiLCJ0eXBlIiwiR1JJRF9UWVBFIiwiR1JJRF9WRVJUSUNBTCIsIml0ZW1TaXplIiwieCIsInNwYWNlIiwicGFyZW50U2l6ZSIsIkdSSURfSE9SSVpPTlRBTCIsInkiLCJrZXlDb3VudCIsImNjIiwiVmVjMiIsIlpFUk8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWFDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ0ksRUFBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixDQUFyQyxHQUFpREosQ0FBQyxDQUFDSyxrQkFBRixHQUFxQixLQUFLLENBQTNFO0FBQTZFLElBQUlDLENBQUMsR0FBQ1YsQ0FBQyxDQUFDLFVBQUQsQ0FBUDtBQUFBLElBQW9CQSxDQUFDLElBQUVXLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxRQUFaLEdBQXFCLFlBQVU7QUFBQyxNQUFJYixDQUFDLEdBQUMsQ0FBTjtBQUFBLE1BQVFFLENBQUMsR0FBQyxDQUFWO0FBQUEsTUFBWUUsQ0FBQyxHQUFDLENBQWQ7QUFBQSxNQUFnQk8sQ0FBQyxHQUFDLENBQWxCOztBQUFvQixVQUFPLEtBQUtHLElBQVo7QUFBa0IsU0FBS0osQ0FBQyxDQUFDSyxTQUFGLENBQVlDLGFBQWpCO0FBQStCZCxNQUFBQSxDQUFDLEdBQUMsS0FBS2UsUUFBTCxDQUFjQyxDQUFoQixFQUFrQmQsQ0FBQyxHQUFDLEtBQUtlLEtBQUwsQ0FBV0QsQ0FBL0IsRUFBaUNQLENBQUMsR0FBQyxLQUFLUyxVQUFMLENBQWdCRixDQUFuRDtBQUFxRDs7QUFBTSxTQUFLUixDQUFDLENBQUNLLFNBQUYsQ0FBWU0sZUFBakI7QUFBaUNuQixNQUFBQSxDQUFDLEdBQUMsS0FBS2UsUUFBTCxDQUFjSyxDQUFoQixFQUFrQmxCLENBQUMsR0FBQyxLQUFLZSxLQUFMLENBQVdHLENBQS9CLEVBQWlDWCxDQUFDLEdBQUMsS0FBS1MsVUFBTCxDQUFnQkUsQ0FBbkQ7QUFBN0k7O0FBQWtNLFNBQU90QixDQUFDLEdBQUNFLENBQUMsR0FBQyxLQUFLcUIsUUFBUCxHQUFnQm5CLENBQUMsSUFBRSxLQUFLbUIsUUFBTCxHQUFjLENBQWhCLENBQWpCLEdBQW9DWixDQUFwQyxHQUFzQyxDQUFDQSxDQUFDLEdBQUNQLENBQUMsSUFBRSxLQUFLbUIsUUFBTCxHQUFjLENBQWhCLENBQUosSUFBd0IsS0FBS0EsUUFBN0IsR0FBc0NyQixDQUE1RSxHQUE4RUYsQ0FBdkY7QUFBeUYsQ0FBL1UsRUFBZ1ZXLENBQWxWLENBQXJCOztBQUEwVyxTQUFTQSxDQUFULEdBQVk7QUFBQyxPQUFLUyxVQUFMLEdBQWdCSSxFQUFFLENBQUNDLElBQUgsQ0FBUUMsSUFBeEIsRUFBNkIsS0FBS1QsUUFBTCxHQUFjTyxFQUFFLENBQUNDLElBQUgsQ0FBUUMsSUFBbkQsRUFBd0QsS0FBS1AsS0FBTCxHQUFXSyxFQUFFLENBQUNDLElBQUgsQ0FBUUMsSUFBM0UsRUFBZ0YsS0FBS0gsUUFBTCxHQUFjLENBQTlGO0FBQWdHOztBQUFBbkIsQ0FBQyxDQUFDSyxrQkFBRixHQUFxQlQsQ0FBckIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBlPXJlcXVpcmU7XG52YXIgdD1tb2R1bGU7XG52YXIgbz1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5BdXRvU2NhbGVDb21wb25lbnQ9dm9pZCAwO3ZhciBpPWUoXCJHcmlkVmlld1wiKSxlPShuLnByb3RvdHlwZS5nZXRTY2FsZT1mdW5jdGlvbigpe3ZhciBlPTEsdD0wLG89MCxuPTA7c3dpdGNoKHRoaXMudHlwZSl7Y2FzZSBpLkdSSURfVFlQRS5HUklEX1ZFUlRJQ0FMOnQ9dGhpcy5pdGVtU2l6ZS54LG89dGhpcy5zcGFjZS54LG49dGhpcy5wYXJlbnRTaXplLng7YnJlYWs7Y2FzZSBpLkdSSURfVFlQRS5HUklEX0hPUklaT05UQUw6dD10aGlzLml0ZW1TaXplLnksbz10aGlzLnNwYWNlLnksbj10aGlzLnBhcmVudFNpemUueX1yZXR1cm4gZT10KnRoaXMua2V5Q291bnQrbyoodGhpcy5rZXlDb3VudC0xKT5uPyhuLW8qKHRoaXMua2V5Q291bnQtMSkpL3RoaXMua2V5Q291bnQvdDplfSxuKTtmdW5jdGlvbiBuKCl7dGhpcy5wYXJlbnRTaXplPWNjLlZlYzIuWkVSTyx0aGlzLml0ZW1TaXplPWNjLlZlYzIuWkVSTyx0aGlzLnNwYWNlPWNjLlZlYzIuWkVSTyx0aGlzLmtleUNvdW50PTB9by5BdXRvU2NhbGVDb21wb25lbnQ9ZSJdfQ==