"use strict";
cc._RF.push(module, '03b98YkuDdHTp0POH86htS9', 'ConstructVideoUnlock');
// scripts/ConstructVideoUnlock.js

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
    c = e("CCTool"),
    l = e("ListenID"),
    p = e("ConstructBase"),
    d = cc._decorator,
    t = d.ccclass,
    e = d.menu,
    d = d.property,
    e = (r = cc.Component, i(u, r), u.prototype.onLoad = function () {
  this.myConstruct = this.node.getComponent(p["default"]), this.newTouchEvent(), this.setStart(!1), s["default"].MapClr.myMap.node.on(l.ListenID.Role_TOBed, this.mountRole, this);
}, u.prototype.mountRole = function () {}, u.prototype.setStart = function (e) {
  for (var t in this.myConstruct.imgList) {
    this.myConstruct.imgList[t].node.active = e;
  }

  this.videoNode.active = !e;
}, u.prototype.newTouchEvent = function () {
  var e = this,
      t = !1;
  this.node.on(cc.Node.EventType.TOUCH_START, function () {
    t = !0;
  }, this), this.node.on(cc.Node.EventType.TOUCH_END, function () {
    t && (10 < s["default"].data.cameraMoveNum || e.myConstruct._roomID == s["default"].GScene.player.roomID && e.onClick());
  }, this);
}, u.prototype.onClick = function () {
  var e = this;
  c.CCTool.UI.OpenPop("prefab/pop/pop_BuildingCreate_Special", {
    data: this.myConstruct.attribute.data,
    call: function call() {
      e.unlock();
    }
  });
}, u.prototype.unlock = function () {
  this.setStart(!0), this.myConstruct.setOwer(s["default"].MapClr.bedList[this.myConstruct._roomID].ower), this.myConstruct.setState(!0), this.myConstruct._time += 9999, this.destroy();
}, a([d(cc.Node)], u.prototype, "videoNode", void 0), a([t, e("gameElement/ConstructVideoUnlock")], u));

function u() {
  var e = null !== r && r.apply(this, arguments) || this;
  return e.videoNode = null, e;
}

o["default"] = e;

cc._RF.pop();