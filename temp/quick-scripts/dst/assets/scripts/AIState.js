
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AIState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e406zjR6hPx4GAAL8ESxEH', 'AIState');
// scripts/AIState.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var _n,
    i = void 0 && (void 0).__extends || (_n = function n(e, t) {
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
}), o.DieState = o.HurtState = o.AttackState = o.ChaseState = o.MoveState = o.IdleState = o.ReadyState = o.AIStateBase = o.AiParameter = o.StateType = void 0;
var a = e("AppCommon");
(t = o.StateType || (o.StateType = {}))[t.Ready = 0] = "Ready", t[t.Idle = 1] = "Idle", t[t.Patrol = 2] = "Patrol", t[t.Move = 3] = "Move", t[t.Chase = 4] = "Chase", t[t.React = 5] = "React", t[t.Escape = 6] = "Escape", t[t.Attack = 7] = "Attack", t[t.Hurt = 8] = "Hurt", t[t.Treat = 9] = "Treat", t[t.Die = 10] = "Die", o.AiParameter = function () {
  this.idleTime = 1, this.moveSpeed = 100, this.chaseSpeed = 100, this.AttackRange = 100;
};
r.prototype.move = function (e) {
  var t, o;
  this._myTarget._isControl || (this.letV2.set(this._manager.path[0]), t = this._manager.node.position, o = this.letV2.sub(t).normalize(), e = t.add(o.mul(this._AiParameter.moveSpeed * e * 2)), .5 < Math.abs(o.x) && (e.x > this._myTarget.node.x ? this._myTarget.mySkeleton.node.scaleX = -1 : this._myTarget.mySkeleton.node.scaleX = 1), this._manager.node.setPosition(e), a["default"].getDistance(this.letV2, t) < 20 && this._manager.path.splice(0, 1), this._myTarget.getZIndex());
}, r.prototype.OnEnter = function () {}, r.prototype.OnUpdate = function () {}, r.prototype.OnExit = function () {}, e = r;

function r(e) {
  this._timer = 0, this.letV2 = cc.v2(), this._manager = e, this._AiParameter = this._manager._AiParameter, this._myTarget = this._manager.ower;
}

o.AIStateBase = e;
var s,
    t = (i(c, s = e), c.prototype.OnEnter = function () {
  this._myTarget.setAnimation("starttalk", !0);
}, c.prototype.OnUpdate = function () {}, c.prototype.OnExit = function () {}, c);

function c() {
  return null !== s && s.apply(this, arguments) || this;
}

o.ReadyState = t;
var l,
    t = (i(p, l = e), p.prototype.OnEnter = function () {
  this._myTarget.setAnimation("idle", !0);
}, p.prototype.OnUpdate = function () {}, p.prototype.OnExit = function () {}, p);

function p() {
  return null !== l && l.apply(this, arguments) || this;
}

o.IdleState = t;
var d,
    t = (i(u, d = e), u.prototype.OnEnter = function () {
  this._myTarget.setAnimation("move", !0);
}, u.prototype.OnUpdate = function (e) {
  if (0 == this._manager.path.length) return this._manager.onMoveEnd();
  this.move(e);
}, u.prototype.OnExit = function () {}, u);

function u() {
  return null !== d && d.apply(this, arguments) || this;
}

o.MoveState = t;
var f,
    t = (i(h, f = e), h.prototype.OnEnter = function () {}, h.prototype.OnUpdate = function () {}, h.prototype.OnExit = function () {}, h);

function h() {
  return null !== f && f.apply(this, arguments) || this;
}

o.ChaseState = t;
var m,
    t = (i(y, m = e), y.prototype.OnEnter = function () {
  this._myTarget.setAnimation("attack");
}, y.prototype.OnUpdate = function () {}, y.prototype.OnExit = function () {}, y);

function y() {
  return null !== m && m.apply(this, arguments) || this;
}

o.AttackState = t;
var g,
    t = (i(_, g = e), _.prototype.OnEnter = function () {}, _.prototype.OnUpdate = function () {}, _.prototype.OnExit = function () {}, _);

function _() {
  return null !== g && g.apply(this, arguments) || this;
}

o.HurtState = t;
var v,
    e = (i(C, v = e), C.prototype.OnEnter = function () {}, C.prototype.OnUpdate = function () {}, C.prototype.OnExit = function () {}, C);

function C() {
  return null !== v && v.apply(this, arguments) || this;
}

o.DieState = e;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQUlTdGF0ZS5qcyJdLCJuYW1lcyI6WyJlIiwicmVxdWlyZSIsInQiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIm4iLCJpIiwiX19leHRlbmRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkRpZVN0YXRlIiwiSHVydFN0YXRlIiwiQXR0YWNrU3RhdGUiLCJDaGFzZVN0YXRlIiwiTW92ZVN0YXRlIiwiSWRsZVN0YXRlIiwiUmVhZHlTdGF0ZSIsIkFJU3RhdGVCYXNlIiwiQWlQYXJhbWV0ZXIiLCJTdGF0ZVR5cGUiLCJhIiwiUmVhZHkiLCJJZGxlIiwiUGF0cm9sIiwiTW92ZSIsIkNoYXNlIiwiUmVhY3QiLCJFc2NhcGUiLCJBdHRhY2siLCJIdXJ0IiwiVHJlYXQiLCJEaWUiLCJpZGxlVGltZSIsIm1vdmVTcGVlZCIsImNoYXNlU3BlZWQiLCJBdHRhY2tSYW5nZSIsInIiLCJtb3ZlIiwiX215VGFyZ2V0IiwiX2lzQ29udHJvbCIsImxldFYyIiwic2V0IiwiX21hbmFnZXIiLCJwYXRoIiwibm9kZSIsInBvc2l0aW9uIiwic3ViIiwibm9ybWFsaXplIiwiYWRkIiwibXVsIiwiX0FpUGFyYW1ldGVyIiwiTWF0aCIsImFicyIsIngiLCJteVNrZWxldG9uIiwic2NhbGVYIiwic2V0UG9zaXRpb24iLCJnZXREaXN0YW5jZSIsInNwbGljZSIsImdldFpJbmRleCIsIk9uRW50ZXIiLCJPblVwZGF0ZSIsIk9uRXhpdCIsIl90aW1lciIsImNjIiwidjIiLCJvd2VyIiwicyIsImMiLCJzZXRBbmltYXRpb24iLCJhcHBseSIsImFyZ3VtZW50cyIsImwiLCJwIiwiZCIsInUiLCJsZW5ndGgiLCJvbk1vdmVFbmQiLCJmIiwiaCIsIm0iLCJ5IiwiZyIsIl8i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WXlELE9BQVosR0FBb0IsWUFBVSxDQUFFLENBQXpDLEVBQTBDdUIsQ0FBQyxDQUFDaEYsU0FBRixDQUFZMEQsUUFBWixHQUFxQixZQUFVLENBQUUsQ0FBM0UsRUFBNEVzQixDQUFDLENBQUNoRixTQUFGLENBQVkyRCxNQUFaLEdBQW1CLFlBQVUsQ0FBRSxDQUEzRyxFQUE0R3FCLENBQTlHLENBQVA7O0FBQXdILFNBQVNBLENBQVQsR0FBWTtBQUFDLFNBQU8sU0FBT0QsQ0FBUCxJQUFVQSxDQUFDLENBQUNaLEtBQUYsQ0FBUSxJQUFSLEVBQWFDLFNBQWIsQ0FBVixJQUFtQyxJQUExQztBQUErQzs7QUFBQTdFLENBQUMsQ0FBQ2lCLFNBQUYsR0FBWW5CLENBQVo7QUFBYyxJQUFJNEYsQ0FBSjtBQUFBLElBQU05RixDQUFDLElBQUVPLENBQUMsQ0FBQ3dGLENBQUQsRUFBR0QsQ0FBQyxHQUFDOUYsQ0FBTCxDQUFELEVBQVMrRixDQUFDLENBQUNsRixTQUFGLENBQVl5RCxPQUFaLEdBQW9CLFlBQVUsQ0FBRSxDQUF6QyxFQUEwQ3lCLENBQUMsQ0FBQ2xGLFNBQUYsQ0FBWTBELFFBQVosR0FBcUIsWUFBVSxDQUFFLENBQTNFLEVBQTRFd0IsQ0FBQyxDQUFDbEYsU0FBRixDQUFZMkQsTUFBWixHQUFtQixZQUFVLENBQUUsQ0FBM0csRUFBNEd1QixDQUE5RyxDQUFQOztBQUF3SCxTQUFTQSxDQUFULEdBQVk7QUFBQyxTQUFPLFNBQU9ELENBQVAsSUFBVUEsQ0FBQyxDQUFDZCxLQUFGLENBQVEsSUFBUixFQUFhQyxTQUFiLENBQVYsSUFBbUMsSUFBMUM7QUFBK0M7O0FBQUE3RSxDQUFDLENBQUNnQixRQUFGLEdBQVdwQixDQUFYIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZT1yZXF1aXJlO1xudmFyIHQ9bW9kdWxlO1xudmFyIG89ZXhwb3J0cztcblwidXNlIHN0cmljdFwiO3ZhciBuLGk9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fChuPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKG49T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKGUsdCl7ZS5fX3Byb3RvX189dH18fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBvIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbykmJihlW29dPXRbb10pfSkoZSx0KX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBvKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfW4oZSx0KSxlLnByb3RvdHlwZT1udWxsPT09dD9PYmplY3QuY3JlYXRlKHQpOihvLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgbyl9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvLkRpZVN0YXRlPW8uSHVydFN0YXRlPW8uQXR0YWNrU3RhdGU9by5DaGFzZVN0YXRlPW8uTW92ZVN0YXRlPW8uSWRsZVN0YXRlPW8uUmVhZHlTdGF0ZT1vLkFJU3RhdGVCYXNlPW8uQWlQYXJhbWV0ZXI9by5TdGF0ZVR5cGU9dm9pZCAwO3ZhciBhPWUoXCJBcHBDb21tb25cIik7KHQ9by5TdGF0ZVR5cGV8fChvLlN0YXRlVHlwZT17fSkpW3QuUmVhZHk9MF09XCJSZWFkeVwiLHRbdC5JZGxlPTFdPVwiSWRsZVwiLHRbdC5QYXRyb2w9Ml09XCJQYXRyb2xcIix0W3QuTW92ZT0zXT1cIk1vdmVcIix0W3QuQ2hhc2U9NF09XCJDaGFzZVwiLHRbdC5SZWFjdD01XT1cIlJlYWN0XCIsdFt0LkVzY2FwZT02XT1cIkVzY2FwZVwiLHRbdC5BdHRhY2s9N109XCJBdHRhY2tcIix0W3QuSHVydD04XT1cIkh1cnRcIix0W3QuVHJlYXQ9OV09XCJUcmVhdFwiLHRbdC5EaWU9MTBdPVwiRGllXCIsby5BaVBhcmFtZXRlcj1mdW5jdGlvbigpe3RoaXMuaWRsZVRpbWU9MSx0aGlzLm1vdmVTcGVlZD0xMDAsdGhpcy5jaGFzZVNwZWVkPTEwMCx0aGlzLkF0dGFja1JhbmdlPTEwMH07ci5wcm90b3R5cGUubW92ZT1mdW5jdGlvbihlKXt2YXIgdCxvO3RoaXMuX215VGFyZ2V0Ll9pc0NvbnRyb2x8fCh0aGlzLmxldFYyLnNldCh0aGlzLl9tYW5hZ2VyLnBhdGhbMF0pLHQ9dGhpcy5fbWFuYWdlci5ub2RlLnBvc2l0aW9uLG89dGhpcy5sZXRWMi5zdWIodCkubm9ybWFsaXplKCksZT10LmFkZChvLm11bCh0aGlzLl9BaVBhcmFtZXRlci5tb3ZlU3BlZWQqZSoyKSksLjU8TWF0aC5hYnMoby54KSYmKGUueD50aGlzLl9teVRhcmdldC5ub2RlLng/dGhpcy5fbXlUYXJnZXQubXlTa2VsZXRvbi5ub2RlLnNjYWxlWD0tMTp0aGlzLl9teVRhcmdldC5teVNrZWxldG9uLm5vZGUuc2NhbGVYPTEpLHRoaXMuX21hbmFnZXIubm9kZS5zZXRQb3NpdGlvbihlKSxhLmRlZmF1bHQuZ2V0RGlzdGFuY2UodGhpcy5sZXRWMix0KTwyMCYmdGhpcy5fbWFuYWdlci5wYXRoLnNwbGljZSgwLDEpLHRoaXMuX215VGFyZ2V0LmdldFpJbmRleCgpKX0sci5wcm90b3R5cGUuT25FbnRlcj1mdW5jdGlvbigpe30sci5wcm90b3R5cGUuT25VcGRhdGU9ZnVuY3Rpb24oKXt9LHIucHJvdG90eXBlLk9uRXhpdD1mdW5jdGlvbigpe30sZT1yO2Z1bmN0aW9uIHIoZSl7dGhpcy5fdGltZXI9MCx0aGlzLmxldFYyPWNjLnYyKCksdGhpcy5fbWFuYWdlcj1lLHRoaXMuX0FpUGFyYW1ldGVyPXRoaXMuX21hbmFnZXIuX0FpUGFyYW1ldGVyLHRoaXMuX215VGFyZ2V0PXRoaXMuX21hbmFnZXIub3dlcn1vLkFJU3RhdGVCYXNlPWU7dmFyIHMsdD0oaShjLHM9ZSksYy5wcm90b3R5cGUuT25FbnRlcj1mdW5jdGlvbigpe3RoaXMuX215VGFyZ2V0LnNldEFuaW1hdGlvbihcInN0YXJ0dGFsa1wiLCEwKX0sYy5wcm90b3R5cGUuT25VcGRhdGU9ZnVuY3Rpb24oKXt9LGMucHJvdG90eXBlLk9uRXhpdD1mdW5jdGlvbigpe30sYyk7ZnVuY3Rpb24gYygpe3JldHVybiBudWxsIT09cyYmcy5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fHRoaXN9by5SZWFkeVN0YXRlPXQ7dmFyIGwsdD0oaShwLGw9ZSkscC5wcm90b3R5cGUuT25FbnRlcj1mdW5jdGlvbigpe3RoaXMuX215VGFyZ2V0LnNldEFuaW1hdGlvbihcImlkbGVcIiwhMCl9LHAucHJvdG90eXBlLk9uVXBkYXRlPWZ1bmN0aW9uKCl7fSxwLnByb3RvdHlwZS5PbkV4aXQ9ZnVuY3Rpb24oKXt9LHApO2Z1bmN0aW9uIHAoKXtyZXR1cm4gbnVsbCE9PWwmJmwuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfW8uSWRsZVN0YXRlPXQ7dmFyIGQsdD0oaSh1LGQ9ZSksdS5wcm90b3R5cGUuT25FbnRlcj1mdW5jdGlvbigpe3RoaXMuX215VGFyZ2V0LnNldEFuaW1hdGlvbihcIm1vdmVcIiwhMCl9LHUucHJvdG90eXBlLk9uVXBkYXRlPWZ1bmN0aW9uKGUpe2lmKDA9PXRoaXMuX21hbmFnZXIucGF0aC5sZW5ndGgpcmV0dXJuIHRoaXMuX21hbmFnZXIub25Nb3ZlRW5kKCk7dGhpcy5tb3ZlKGUpfSx1LnByb3RvdHlwZS5PbkV4aXQ9ZnVuY3Rpb24oKXt9LHUpO2Z1bmN0aW9uIHUoKXtyZXR1cm4gbnVsbCE9PWQmJmQuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfW8uTW92ZVN0YXRlPXQ7dmFyIGYsdD0oaShoLGY9ZSksaC5wcm90b3R5cGUuT25FbnRlcj1mdW5jdGlvbigpe30saC5wcm90b3R5cGUuT25VcGRhdGU9ZnVuY3Rpb24oKXt9LGgucHJvdG90eXBlLk9uRXhpdD1mdW5jdGlvbigpe30saCk7ZnVuY3Rpb24gaCgpe3JldHVybiBudWxsIT09ZiYmZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fHRoaXN9by5DaGFzZVN0YXRlPXQ7dmFyIG0sdD0oaSh5LG09ZSkseS5wcm90b3R5cGUuT25FbnRlcj1mdW5jdGlvbigpe3RoaXMuX215VGFyZ2V0LnNldEFuaW1hdGlvbihcImF0dGFja1wiKX0seS5wcm90b3R5cGUuT25VcGRhdGU9ZnVuY3Rpb24oKXt9LHkucHJvdG90eXBlLk9uRXhpdD1mdW5jdGlvbigpe30seSk7ZnVuY3Rpb24geSgpe3JldHVybiBudWxsIT09bSYmbS5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fHRoaXN9by5BdHRhY2tTdGF0ZT10O3ZhciBnLHQ9KGkoXyxnPWUpLF8ucHJvdG90eXBlLk9uRW50ZXI9ZnVuY3Rpb24oKXt9LF8ucHJvdG90eXBlLk9uVXBkYXRlPWZ1bmN0aW9uKCl7fSxfLnByb3RvdHlwZS5PbkV4aXQ9ZnVuY3Rpb24oKXt9LF8pO2Z1bmN0aW9uIF8oKXtyZXR1cm4gbnVsbCE9PWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfW8uSHVydFN0YXRlPXQ7dmFyIHYsZT0oaShDLHY9ZSksQy5wcm90b3R5cGUuT25FbnRlcj1mdW5jdGlvbigpe30sQy5wcm90b3R5cGUuT25VcGRhdGU9ZnVuY3Rpb24oKXt9LEMucHJvdG90eXBlLk9uRXhpdD1mdW5jdGlvbigpe30sQyk7ZnVuY3Rpb24gQygpe3JldHVybiBudWxsIT09diYmdi5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fHRoaXN9by5EaWVTdGF0ZT1lIl19