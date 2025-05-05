
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ModeBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7805eEqdq5KmoFLLOPEXGqa', 'ModeBase');
// scripts/ModeBase.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.ModelBase = void 0;
var n = e("ModelManage"),
    e = (i.prototype.Matching = function () {
  throw new Error("Method not implemented.");
}, i.prototype.LoadMap = function () {
  throw new Error("Method not implemented.");
}, i.prototype.LoadRole = function () {
  throw new Error("Method not implemented.");
}, i.prototype.LoadMapEnd = function () {
  throw new Error("Method not implemented.");
}, i.prototype.CountDown = function () {
  throw new Error("Method not implemented.");
}, i.prototype.Settlement = function () {
  throw new Error("Method not implemented.");
}, i.prototype.GameStart = function () {
  throw new Error("Method not implemented.");
}, i.prototype.GameEnd = function () {
  throw new Error("Method not implemented.");
}, i.prototype.GameWin = function () {
  throw new Error("Method not implemented.");
}, i.prototype.GameRevive = function () {
  throw new Error("Method not implemented.");
}, i.prototype.OnUpdate = function () {
  throw new Error("Method not implemented.");
}, i);

function i() {
  this.type = n.GAME_MODEL.Not, this.mapPath = "", this._time = 0, this.isEnd = !1, this.data = {};
}

o.ModelBase = e;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTW9kZUJhc2UuanMiXSwibmFtZXMiOlsiZSIsInJlcXVpcmUiLCJ0IiwibW9kdWxlIiwibyIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiTW9kZWxCYXNlIiwibiIsImkiLCJwcm90b3R5cGUiLCJNYXRjaGluZyIsIkVycm9yIiwiTG9hZE1hcCIsIkxvYWRSb2xlIiwiTG9hZE1hcEVuZCIsIkNvdW50RG93biIsIlNldHRsZW1lbnQiLCJHYW1lU3RhcnQiLCJHYW1lRW5kIiwiR2FtZVdpbiIsIkdhbWVSZXZpdmUiLCJPblVwZGF0ZSIsInR5cGUiLCJHQU1FX01PREVMIiwiTm90IiwibWFwUGF0aCIsIl90aW1lIiwiaXNFbmQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBQ0MsT0FBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsTUFBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsT0FBTjtBQUNBOztBQUFhQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JILENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUNJLEVBQUFBLEtBQUssRUFBQyxDQUFDO0FBQVIsQ0FBckMsR0FBaURKLENBQUMsQ0FBQ0ssU0FBRixHQUFZLEtBQUssQ0FBbEU7QUFBb0UsSUFBSUMsQ0FBQyxHQUFDVixDQUFDLENBQUMsYUFBRCxDQUFQO0FBQUEsSUFBdUJBLENBQUMsSUFBRVcsQ0FBQyxDQUFDQyxTQUFGLENBQVlDLFFBQVosR0FBcUIsWUFBVTtBQUFDLFFBQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQU47QUFBMkMsQ0FBM0UsRUFBNEVILENBQUMsQ0FBQ0MsU0FBRixDQUFZRyxPQUFaLEdBQW9CLFlBQVU7QUFBQyxRQUFNLElBQUlELEtBQUosQ0FBVSx5QkFBVixDQUFOO0FBQTJDLENBQXRKLEVBQXVKSCxDQUFDLENBQUNDLFNBQUYsQ0FBWUksUUFBWixHQUFxQixZQUFVO0FBQUMsUUFBTSxJQUFJRixLQUFKLENBQVUseUJBQVYsQ0FBTjtBQUEyQyxDQUFsTyxFQUFtT0gsQ0FBQyxDQUFDQyxTQUFGLENBQVlLLFVBQVosR0FBdUIsWUFBVTtBQUFDLFFBQU0sSUFBSUgsS0FBSixDQUFVLHlCQUFWLENBQU47QUFBMkMsQ0FBaFQsRUFBaVRILENBQUMsQ0FBQ0MsU0FBRixDQUFZTSxTQUFaLEdBQXNCLFlBQVU7QUFBQyxRQUFNLElBQUlKLEtBQUosQ0FBVSx5QkFBVixDQUFOO0FBQTJDLENBQTdYLEVBQThYSCxDQUFDLENBQUNDLFNBQUYsQ0FBWU8sVUFBWixHQUF1QixZQUFVO0FBQUMsUUFBTSxJQUFJTCxLQUFKLENBQVUseUJBQVYsQ0FBTjtBQUEyQyxDQUEzYyxFQUE0Y0gsQ0FBQyxDQUFDQyxTQUFGLENBQVlRLFNBQVosR0FBc0IsWUFBVTtBQUFDLFFBQU0sSUFBSU4sS0FBSixDQUFVLHlCQUFWLENBQU47QUFBMkMsQ0FBeGhCLEVBQXloQkgsQ0FBQyxDQUFDQyxTQUFGLENBQVlTLE9BQVosR0FBb0IsWUFBVTtBQUFDLFFBQU0sSUFBSVAsS0FBSixDQUFVLHlCQUFWLENBQU47QUFBMkMsQ0FBbm1CLEVBQW9tQkgsQ0FBQyxDQUFDQyxTQUFGLENBQVlVLE9BQVosR0FBb0IsWUFBVTtBQUFDLFFBQU0sSUFBSVIsS0FBSixDQUFVLHlCQUFWLENBQU47QUFBMkMsQ0FBOXFCLEVBQStxQkgsQ0FBQyxDQUFDQyxTQUFGLENBQVlXLFVBQVosR0FBdUIsWUFBVTtBQUFDLFFBQU0sSUFBSVQsS0FBSixDQUFVLHlCQUFWLENBQU47QUFBMkMsQ0FBNXZCLEVBQTZ2QkgsQ0FBQyxDQUFDQyxTQUFGLENBQVlZLFFBQVosR0FBcUIsWUFBVTtBQUFDLFFBQU0sSUFBSVYsS0FBSixDQUFVLHlCQUFWLENBQU47QUFBMkMsQ0FBeDBCLEVBQXkwQkgsQ0FBMzBCLENBQXhCOztBQUFzMkIsU0FBU0EsQ0FBVCxHQUFZO0FBQUMsT0FBS2MsSUFBTCxHQUFVZixDQUFDLENBQUNnQixVQUFGLENBQWFDLEdBQXZCLEVBQTJCLEtBQUtDLE9BQUwsR0FBYSxFQUF4QyxFQUEyQyxLQUFLQyxLQUFMLEdBQVcsQ0FBdEQsRUFBd0QsS0FBS0MsS0FBTCxHQUFXLENBQUMsQ0FBcEUsRUFBc0UsS0FBS0MsSUFBTCxHQUFVLEVBQWhGO0FBQW1GOztBQUFBM0IsQ0FBQyxDQUFDSyxTQUFGLEdBQVlULENBQVoiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBlPXJlcXVpcmU7XG52YXIgdD1tb2R1bGU7XG52YXIgbz1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5Nb2RlbEJhc2U9dm9pZCAwO3ZhciBuPWUoXCJNb2RlbE1hbmFnZVwiKSxlPShpLnByb3RvdHlwZS5NYXRjaGluZz1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpfSxpLnByb3RvdHlwZS5Mb2FkTWFwPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIil9LGkucHJvdG90eXBlLkxvYWRSb2xlPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIil9LGkucHJvdG90eXBlLkxvYWRNYXBFbmQ9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKX0saS5wcm90b3R5cGUuQ291bnREb3duPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIil9LGkucHJvdG90eXBlLlNldHRsZW1lbnQ9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKX0saS5wcm90b3R5cGUuR2FtZVN0YXJ0PWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIil9LGkucHJvdG90eXBlLkdhbWVFbmQ9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKX0saS5wcm90b3R5cGUuR2FtZVdpbj1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpfSxpLnByb3RvdHlwZS5HYW1lUmV2aXZlPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIil9LGkucHJvdG90eXBlLk9uVXBkYXRlPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIil9LGkpO2Z1bmN0aW9uIGkoKXt0aGlzLnR5cGU9bi5HQU1FX01PREVMLk5vdCx0aGlzLm1hcFBhdGg9XCJcIix0aGlzLl90aW1lPTAsdGhpcy5pc0VuZD0hMSx0aGlzLmRhdGE9e319by5Nb2RlbEJhc2U9ZSJdfQ==