"use strict";
cc._RF.push(module, 'c5328F3R1xEwbgLYh7z4CT/', 'WarChessBase');
// scripts/WarChessBase.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

var _n,
    t = void 0 && (void 0).__extends || (_n = function n(e, t) {
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
}), o.WarChessBase = void 0;
var i,
    a = e("AppCommon"),
    r = e("ListenID"),
    t = (i = e("ElementBase").ElementBase, t(s, i), s.prototype.moveTo = function (e) {
  var t = this;
  a["default"].data.monsterMoveNum++;
  var o = {
    x: this._mapPos.x + e.x,
    y: this._mapPos.y + e.y
  },
      e = a["default"].MapClr.getV2Pos(o);
  cc.tween(this.node).to(.2, {
    position: e
  }).call(function () {
    a["default"].data.monsterMoveNum--, t.getZIndex();
  }).start(), this._mapPos = o;
}, s.prototype.onLoad = function () {
  a["default"].GScene.node.on(r.ListenID.Game_Pause, this.onGamePause, this), this.node.on(r.ListenID.Send_Hurt, this.getHurt, this);
}, s.prototype.newTouchEvent = function () {}, s.prototype.setDestroyed = function () {
  this.node.active = !1, this.setState(!1), this.deleteNode();
}, s.prototype.setAnimation = function (e) {
  this.myAnimation || (this.myAnimation = this.imgList[1].node.getComponent(cc.Animation)), this.myAnimation.play(e);
}, s.prototype.setHurt = function () {}, s.prototype.update = function () {}, s);

function s() {
  return null !== i && i.apply(this, arguments) || this;
}

o.WarChessBase = t;

cc._RF.pop();