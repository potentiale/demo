"use strict";
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