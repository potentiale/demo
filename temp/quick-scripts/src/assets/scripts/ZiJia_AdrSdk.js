"use strict";
cc._RF.push(module, '717f0KsFRxAq4icZ7gGhoVm', 'ZiJia_AdrSdk');
// scripts/ZiJia_AdrSdk.js

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
    a = e("BaseSdk"),
    t = (i = a.BaseSdk, t(r, i), r.prototype.init = function () {
  var e = this;
  console.log("[ZiJia_AdrSdk]init"), cc.nativeAndroid = {
    onRewardVideoComplete: function onRewardVideoComplete() {
      e.isGetVideoReward = !0;
    },
    onRewardVideoClose: function onRewardVideoClose() {
      e.isGetVideoReward ? e.onVideoSuccess() : e.onVideoClose();
    },
    onRewardVideoFail: function onRewardVideoFail() {
      e.onVideoError();
    },
    onInterstitialShow: function onInterstitialShow() {},
    onInterstitialClose: function onInterstitialClose() {},
    onInterstitialShowFail: function onInterstitialShowFail() {},
    onFeedRenderSuccess: function onFeedRenderSuccess() {},
    onFeedRenderFail: function onFeedRenderFail() {},
    onSplashShow: function onSplashShow() {},
    onSplashClose: function onSplashClose() {},
    onBannerShow: function onBannerShow() {},
    onBannerRemoved: function onBannerRemoved() {}
  }, this.showAd[a.AD_TYPE.Splash]();
}, r.prototype.hideBannerAd = function () {
  this.sendJsbCall("hideBanner", "()V");
}, r.prototype.sendEvent = function (e) {
  this.sendJsbCall("sendMsg", "(Ljava/lang/String;)V", e);
}, r.prototype.vibrate = function (e) {
  this.sendJsbCall("vibrate", "(I)V", 0 == e ? 10 : 300);
}, r.prototype.ShowPrivacy = function () {
  this.jsbCall("com/wonder/common/CommonSdk", "showPrivacyContentStatic", "()V");
}, r);

function r() {
  var e,
      t = i.call(this) || this;
  return t.defaultClass = ["org/cocos2dx/javascript/AppActivity", "()V"], t.showAd = ((e = {})[a.AD_TYPE.RewardVideo] = function (e) {
    t.onVideoSuccess = e.Success, t.onVideoClose = e.Close, t.onVideoError = e.Error, t.isGetVideoReward = !1, t.sendJsbCall("showVideo", "()V");
  }, e[a.AD_TYPE.FullScreenVideo] = function (e) {
    void 0 === e && (e = function e() {}), t.sendJsbCall("showInsertBanner", "()V");
  }, e[a.AD_TYPE.Banner] = function () {
    t.sendJsbCall("addBanner", "()V");
  }, e[a.AD_TYPE.FullScreenImg] = function () {}, e[a.AD_TYPE.NativeVideo] = function () {}, e[a.AD_TYPE.NativeBanner] = function () {}, e[a.AD_TYPE.NativeBigImgBanner] = function () {}, e[a.AD_TYPE.Splash] = function () {
    t.sendJsbCall("showSplash", "()V");
  }, e), t.init(), t;
}

o["default"] = t;

cc._RF.pop();