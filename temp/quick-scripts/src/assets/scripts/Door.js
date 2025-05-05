"use strict";
cc._RF.push(module, 'c98f2axceBBqpa+GPTgR7om', 'Door');
// scripts/Door.js

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
    l = e("Cfg"),
    p = e("ConstructBase"),
    d = e("GameElementBut"),
    u = cc._decorator,
    t = u.ccclass,
    e = u.menu,
    e = (u.property, r = p["default"], i(f, r), f.prototype.start = function () {
  this.schedule(this.searchPlayer, .3), "door_1" == this.node.name ? this.movePoint = [this.node.position.clone(), cc.v2(this.node.x - 100, this.node.y)] : this.movePoint = [this.node.position.clone(), cc.v2(this.node.x, this.node.y - 100)], this.setState(!1, !0);
}, f.prototype.init = function (e) {
  this.setData = e, this.roomID = +this.setData.name.split("_")[1], s["default"].MapClr.myMap.node.on(c.ListenID.Role_TOBed, this.mountRole, this), s["default"].MapClr.doorList[this.roomID] = this;
}, f.prototype.mountRole = function (e, t) {
  var o,
      n = this;
  t == this.roomID && (this.initAttribute(l.Cfg.Building1.get(100), s["default"].MapClr.roleList[e]), this.ower.myDoor = this, e = s["default"].MapClr.getMapPos(this.node.position), this.ower.myBed.myTerritoryMap[e.x] || (this.ower.myBed.myTerritoryMap[e.x] = []), this.ower.myBed.myTerritoryMap[e.x][e.y] = {
    x: e.x,
    y: e.y
  }, this.ower.myBed.setTerritoryMapItem(e, this), s["default"].MapClr.myMap.node.off(c.ListenID.Role_TOBed, this.mountRole, this), this.lifeBar.node.active = !0, this.setState(!0), o = this.attribute.data.parameter, this.schedule(function () {
    n._isActive && (.98 < n._lifeRatio || n.setLife(n.attribute.data.hp * o[1]));
  }, o[0]));
}, f.prototype.searchPlayer = function () {
  var e,
      t = this;
  s["default"].MapClr.myMap && s["default"].GScene.player && (e = s["default"].getDistance(this.node.position, s["default"].GScene.player.node.position) < 200) != this.isShowBut && (this.isShowBut = e, this.isShowBut ? (e = s["default"].GScene.GameElementButPool.GetFormPool(s["default"].GScene.GamePopBox), this.but = e.getComponent(d["default"]), this.but.init(this.node, function () {
    t.setState(!t._isActive);
  }), this.but.setLabel(this._isActive ? "开门" : "关门")) : (this.but && this.but.hide(), this.but = null));
}, f.prototype.setState = function (e, t) {
  var o = this;
  void 0 === t && (t = !1), this.isAm || this._isActive == e && !t || (this._isActive = e, cc.tween(this.node).to(.3, {
    position: this.movePoint[this._isActive ? 0 : 1]
  }).call(function () {
    o.isAm = !1, !o.ower || o.ower.isPlayer || o._isActive || o.setState(!o._isActive);
  }).start(), this.node.t_x = this.movePoint[this._isActive ? 0 : 1].x, this.node.t_y = this.movePoint[this._isActive ? 0 : 1].y, this.but && this.but.setLabel(this._isActive ? "开门" : "关门"));
}, f.prototype.setDestroyed = function () {
  cc.log("被破坏"), this.setState(!1), this._isActive = !1, this.node.active = !1;
}, a([t, e("gameElement/Door")], f));

function f() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.isShowBut = !1, e.but = null, e.isAm = !1, e;
}

o["default"] = e;

cc._RF.pop();