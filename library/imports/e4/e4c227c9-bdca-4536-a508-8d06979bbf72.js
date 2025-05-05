"use strict";
cc._RF.push(module, 'e4c22fJvcpFNqUIjQaXm79y', 'FSMBase');
// scripts/FSMBase.js

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
    l = e("AIState"),
    t = cc._decorator,
    e = t.ccclass,
    e = (t.property, r = cc.Component, i(p, r), p.prototype.onLoad = function () {
  s["default"].GScene.node.on(c.ListenID.Game_Pause, this.onGamePause, this);
}, p.prototype.initState = function (e) {
  this.ower = e, this.statesList[l.StateType.Idle] = new l.IdleState(this), this.statesList[l.StateType.Move] = new l.MoveState(this), this.setAIState(l.StateType.Idle);
}, p.prototype.newThink = function () {}, p.prototype.onMoveEnd = function () {
  this.setAIState(l.StateType.Idle);
}, p.prototype.getPath = function (e) {
  var t = s["default"].MapClr.getMapPos(this.node.position),
      e = s["default"].MapClr.getPath(t, e);
  this.path = e;
}, p.prototype.move = function (e, t) {
  void 0 === t && (t = l.StateType.Move), this.getPath(e), this.setAIState(t);
}, p.prototype.onGamePause = function (e) {
  e ? cc.director.getScheduler().pauseTarget(this) : cc.director.getScheduler().resumeTarget(this);
}, p.prototype.setAIState = function (e, t) {
  void 0 === t && (t = ""), null != this.currentStateClr && this.currentStateClr.OnExit(), this.currentStateClr = this.statesList[e], this.currentStateClr.OnEnter(t), this.currentState = e;
}, a([e], p));

function p() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e._isActive = !1, e.statesList = [], e.path = [], e.currentStateClr = null, e;
}

o["default"] = e;

cc._RF.pop();