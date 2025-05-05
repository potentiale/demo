"use strict";
cc._RF.push(module, '9c6a6JFCt9HiaQLSZ9r/BWF', 'IOSSdk');
// scripts/IOSSdk.js

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
});
var i,
    a = e("AppCommon"),
    r = e("BaseSdk"),
    t = (i = r.BaseSdk, t(s, i), s.prototype.init = function () {
  var t = this;
  cc.log("[IOSSdk]init");
  var e = this.sendJsbCall("gainIOSBMSVersion");
  console.log("[bmsVersion]" + e), e && (a["default"].PFSET.appEd = e), window.iOSSendMsg = function (e) {
    switch (e) {
      case "playAds":
        break;

      case "rewardPlayNotEnd":
        t.onVideoClose();
        break;

      case "rewardPlayEnd":
        t.onVideoSuccess();
    }
  };
}, s.prototype.login = function (t) {
  return new Promise(function (e) {
    t && t(null), e(null);
  });
}, s.prototype.showBannerWithStyle = function () {
  this._showBannerNum++, this.sendJsbCall("showBanner");
}, s.prototype.hideBanner = function () {
  this._showBannerNum--, this._showBannerNum <= 0 && (this._showBannerNum = 0, console.log("[IosAdCtrler][hideBannerAd]"), this.sendJsbCall("hiddenBanner"));
}, s.prototype.destroyBanner = function () {
  console.log("[IosAdCtrler][destoryBannerAd]"), this.sendJsbCall("hiddenBanner");
}, s.prototype.showVideoAD = function () {
  var e = this;
  this.isCanRewardVideo || (this.isCanRewardVideo = !0, setTimeout(function () {
    e.isCanRewardVideo = !1;
  }, 2e3), this.sendJsbCall("showAds"));
}, s.prototype.sendEvent = function (e, t) {
  t ? this.sendJsbCall("customTrackerWithName:andDictString:", e, JSON.stringify(t)) : this.sendJsbCall("customTrackerWithName:andDictString:", e, "");
}, s.prototype.showFullVideoAD = function () {
  this.sendJsbCall("fullscreenAds");
}, s.prototype.vibrate = function (e) {
  this.sendJsbCall(0 == e ? "ddd2" : "ddd3");
}, s);

function s() {
  var e,
      n = i.call(this) || this;
  return n.defaultClass = ["AppController", "()V"], n.showAd = ((e = {})[r.AD_TYPE.RewardVideo] = function (e) {
    var t = e.Success,
        o = e.Close,
        e = e.Error;
    n.onVideoSuccess = t, n.onVideoClose = o, n.onVideoError = e, n.showVideoAD();
  }, e[r.AD_TYPE.FullScreenVideo] = function (e) {
    void 0 === e && (e = function e() {}), n.showFullVideoAD();
  }, e[r.AD_TYPE.Banner] = function () {
    n.showBannerWithStyle();
  }, e[r.AD_TYPE.FullScreenImg] = function () {}, e[r.AD_TYPE.NativeVideo] = function () {}, e[r.AD_TYPE.NativeBanner] = function () {}, e[r.AD_TYPE.NativeBigImgBanner] = function () {}, e[r.AD_TYPE.Splash] = function () {}, e), n.isCanRewardVideo = !1, n.init(), n;
}

o["default"] = t;

cc._RF.pop();