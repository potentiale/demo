"use strict";
cc._RF.push(module, '31714Kw1JNBrKMnZal4jS1c', 'pop_ShopPanel');
// scripts/pop_ShopPanel.js

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
    c = e("BaseSdk"),
    l = e("PlatformFun"),
    p = e("GridView"),
    d = e("Cfg"),
    u = e("pop"),
    t = cc._decorator,
    e = t.ccclass,
    t = t.property,
    e = (r = u["default"], i(f, r), f.prototype.initTapInfo = function (e) {
  var t = d.Cfg.Shop.filter({
    titile: e
  }),
      e = e - 1;
  this._shopListInfo[e] || (this._shopListInfo[e] = t), this.labelArr[2 * e].string = t[0].titileName, this.labelArr[2 * e + 1].string = t[0].titileName;
}, f.prototype.initGridView = function (e) {
  this._curIndex != e && (this._curIndex = e, this.gridView.loadData(this._shopListInfo[e]), this.gridView.moveToTop());
}, f.prototype.loadList = function () {}, f.prototype.close = function () {
  r.prototype.close.call(this), l.PlatformFun.destroyInterstitialAd();
}, f.prototype.onClickToggle = function (e) {
  e = e.name.substring(6, 7);
  this.initGridView(Number(e) - 1);
}, a([t(p["default"])], f.prototype, "gridView", void 0), a([e], f));

function f() {
  var t = null !== r && r.apply(this, arguments) || this;
  return t.gridView = null, t._shopListInfo = [], t.initFun = {
    pop_ShopPanel: function pop_ShopPanel() {
      for (var e = 1; e <= 3; e++) {
        t.initTapInfo(e);
      }

      t.initGridView(0), l.PlatformFun.SendEvent("shop_show"), l.PlatformFun.SendEvent("show_interstitial_shop"), s["default"].PF != c.GAMEPF.ADR_OWN && l.PlatformFun.showInterstitialAd(), s["default"].PF == c.GAMEPF.ADR_XM && l.PlatformFun.showBannerAd();
    }
  }, t._curIndex = -1, t;
}

o["default"] = e;

cc._RF.pop();