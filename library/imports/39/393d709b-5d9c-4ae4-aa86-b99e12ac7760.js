"use strict";
cc._RF.push(module, '393d7CbXZxK5KqGuZ4SrHdg', 'AISummoned');
// scripts/AISummoned.js

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
}),
    a = void 0 && (void 0).__decorate || function (e, t, o, n) {
  var i,
      a = arguments.length,
      r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n);else for (var s = e.length - 1; 0 <= s; s--) {
    (i = e[s]) && (r = (a < 3 ? i(r) : 3 < a ? i(t, o, r) : i(t, o)) || r);
  }
  return 3 < a && r && Object.defineProperty(t, o, r), r;
};

Object.defineProperty(o, "__esModule", {
  value: !0
});
var r,
    s = e("AppCommon"),
    c = e("ListenID"),
    l = e("ElementBase"),
    p = e("AIState"),
    d = e("FSMBase"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = d["default"], i(u, r), u.prototype.initState = function (e) {
  this.ower = e;
  e = this.ower;
  this._AiParameter = new p.AiParameter(), this._AiParameter.moveSpeed = e.moveSpeed, this._AiParameter.AttackRange = e.attackRange, this.statesList[p.StateType.Idle] = new p.IdleState(this), this.statesList[p.StateType.Move] = new y(this), this.statesList[p.StateType.Attack] = new g(this), this._isActive = !0, this.setAIState(p.StateType.Idle);
}, u.prototype.update = function (e) {
  s["default"].GScene.isPause || this._isActive && this.ower._isActive && this.currentStateClr.OnUpdate(e);
}, a([e], u));

function u() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e._time = 0, e;
}

o["default"] = e;
var f,
    h,
    m = cc.v2(),
    y = (h = p.MoveState, i(v, h), v.prototype.OnUpdate = function (e) {
  var t,
      o = this._myTarget;
  if (!o.target || o.target._life <= 0) for (var n in s["default"].MapClr.monsterList) {
    n = s["default"].MapClr.monsterList[n];

    if (n && 0 < n._life && n._owerID != this._manager.ower._owerID) {
      o.target = n;
      break;
    }
  }
  o.target && o.target.node && (this.letV2.set(o.target.node.position), t = this._manager.node.position, this.letV2.x > o.node.x ? o.mySkeleton.node.scaleX = -1 : o.mySkeleton.node.scaleX = 1, cc.Vec2.subtract(m, this.letV2, t), cc.Vec2.normalize(m, m), cc.Vec2.multiplyScalar(m, m, this._AiParameter.moveSpeed * e), cc.Vec2.add(m, m, t), this._manager.node.setPosition(m), s["default"].getDistanceSqrt(this.letV2, m) <= Math.pow(this._AiParameter.AttackRange, 2) && this._manager.setAIState(p.StateType.Attack), o.getZIndex());
}, v),
    g = (f = p.AttackState, i(_, f), _.prototype.OnEnter = function () {
  this._myTarget.setAnimation("idle", !0), this._curAttackDelta <= 0 && (this._curAttackDelta = this._target.attackDelta), this._attackDur = 0;
}, _.prototype.OnUpdate = function (e) {
  if (!this._target.target || this._target.target._life <= 0) this._manager.setAIState(p.StateType.Move);else {
    var t;
    if (this._target.target.node.x > this._target.node.x ? this._target.mySkeleton.node.scaleX = -1 : this._target.mySkeleton.node.scaleX = 1, 0 <= this._curAttackDelta) if (this._curAttackDelta -= e, this._curAttackDelta < 0 && (t = this._myTarget.setAnimation("attack", !1), this._attackDur = t ? t.animation.duration : .2, this._attackTimes = this._attackDur - .2), s["default"].getDistanceSqrt(this._target.target.node.position, this._target.node.position) > Math.pow(this._AiParameter.AttackRange, 2)) return void this._manager.setAIState(p.StateType.Move);
    0 < this._attackDur && (this._attackDur -= e, this._attackTimes -= e, this._attackTimes <= 0 && (s["default"].MapClr.newEffects(this._target.target.node.position, "attack"), this._target.target.node.emit(c.ListenID.Send_Hurt, new l.HurtData(-this._target.attackNum, this._myTarget._owerID, this._target.type)), this._attackTimes = this._attackDur + 1), this._attackDur <= 0 && (s["default"].getDistanceSqrt(this._target.target.node.position, this._target.node.position) > Math.pow(this._AiParameter.AttackRange, 2) ? this._manager.setAIState(p.StateType.Move) : (this._curAttackDelta = this._target.attackDelta, this._myTarget.setAnimation("idle", !0))));
  }
}, _.prototype.OnExit = function () {}, _);

function _() {
  var e = null !== f && f.apply(this, arguments) || this;
  return e._curAttackDelta = 0, e._target = e._myTarget, e._attackDur = 0, e._attackTimes = 0, e;
}

function v() {
  return null !== h && h.apply(this, arguments) || this;
}

cc._RF.pop();