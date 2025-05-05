"use strict";
cc._RF.push(module, 'dbb25KY2iNLwpRBdXZrxa65', 'Xiaomi_AdrSdk');
// scripts/Xiaomi_AdrSdk.js

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
    r = e("CCTool"),
    s = e("BaseSdk"),
    t = (i = s.BaseSdk, t(c, i), c.prototype.init = function () {
  var e = this;
  console.log("[Xiaomi_AdrSdk]init"), window.xiaomiAdCallback = {
    onRewardVideoComplete: function onRewardVideoComplete() {
      e.isrewardvideo = !0, console.log("fish onRewardVideoComplete");
    },
    onRewardVideoShow: function onRewardVideoShow() {
      console.log("fish onRewardVideoShow");
    },
    onRewardVideoClose: function onRewardVideoClose() {
      console.log("[fish onRewardVideoClose]"), console.log(e.isrewardvideo), e.isrewardvideo ? e.onVideoSuccess() : e.onVideoClose(), setTimeout(function () {
        e.cleanUpViodeCallBack();
      }, 300);
    },
    onRewardVideoFail: function onRewardVideoFail() {
      console.log("fish onRewardVideoFail"), e.onVideoError(), setTimeout(function () {
        e.cleanUpViodeCallBack();
      }, 300);
    },
    onInterstitialShow: function onInterstitialShow() {
      console.log("fish onInterstitialShow");
    },
    onInterstitialClose: function onInterstitialClose() {
      console.log("fish onInterstitialClose"), e._InterstitialClose && e._InterstitialClose();
    },
    onInterstitialShowFail: function onInterstitialShowFail() {
      console.log("fish onInterstitialShowFail"), e._InterstitialClose && e._InterstitialClose();
    },
    onFeedShow: function onFeedShow() {
      console.log("fish onFeedShow");
    },
    onFeedShowFail: function onFeedShowFail() {
      console.log("fish onFeedShowFail");
    },
    onFeedClose: function onFeedClose() {
      e._nativeVideoSucccess && (e._nativeVideoSucccess = !1, e._nativeVideoCall = null, e.onVideoSuccess(), setTimeout(function () {
        e.cleanUpViodeCallBack();
      }, 300)), console.log("fish onFeedClose");
    },
    onInterstitialFeedShow: function onInterstitialFeedShow() {
      e._nativeVideoSucccess = !0, console.log("fish onInterstitialFeedShow");
    },
    onInterstitialFeedShowFailed: function onInterstitialFeedShowFailed() {
      e._nativeVideoSucccess = !1, e._nativeVideoCall = null, e._nativeVideoCall || r.CCTool.UI.ShowToast("内容正在加载中，请稍后再试！"), console.log("fish onInterstitialFeedShowFailed"), e.showAd[s.AD_TYPE.FullScreenImg]();
    },
    onInterstitialFeedRemove: function onInterstitialFeedRemove() {
      e._nativeVideoSucccess && (e._nativeVideoSucccess = !1, e._nativeVideoCall = null, e.onVideoSuccess(), setTimeout(function () {
        e.cleanUpViodeCallBack();
      }, 300)), console.log("fish onInterstitialFeedRemove");
    },
    onUserCloseInterstitialFeed: function onUserCloseInterstitialFeed() {
      e.showAd[s.AD_TYPE.NativeBigImgBanner]();
    },
    onBannerRemove: function onBannerRemove() {
      console.log("[onBannerRemove]");
    },
    onBannerFeedRemove: function onBannerFeedRemove() {
      console.log("[onBannerFeedRemove]");
    },
    onLargeFeedShow: function onLargeFeedShow() {},
    onLargeFeedShowFailed: function onLargeFeedShowFailed() {},
    onLargeFeedRemove: function onLargeFeedRemove() {}
  };
}, c.prototype.cleanUpViodeCallBack = function () {
  this.onVideoError = function () {}, this.onVideoClose = function () {}, this.onVideoSuccess = function () {};
}, c.prototype.login = function (t) {
  return new Promise(function (e) {
    t && t(null), e(null);
  });
}, c.prototype.showBannerWithNode = function (e, t, o) {
  this.showBannerWithStyle(e, {}, o);
}, c.prototype.showBannerWithStyle = function (e, t, o) {
  this.onbannerShow = o, this.sendJsbCall("showBanner", "()V");
}, c.prototype.hideBanner = function () {
  this.sendJsbCall("removeBanner", "()V");
}, c.prototype.destroyBanner = function () {}, c.prototype.showVideoAD = function () {
  this.isrewardvideo = !1, this.sendJsbCall("showRewardVideo", "()V");
}, c.prototype.showFullVideoAD = function (e, t) {
  this._InterstitialClose = t, console.log("[FullScreenVideo]" + e), this.sendJsbCall("showFullScreen", "(Ljava/lang/String;)V", e);
}, c.prototype.sendEvent = function (e) {
  this.sendJsbCall("sendMsg", "(Ljava/lang/String;)V", e);
}, c.prototype.vibrate = function (e) {
  this.sendJsbCall("vibrate", "(I)V", 0 == e ? 10 : 300);
}, c.prototype.showInsertAd = function () {}, c.prototype.showSplashAd = function () {}, c.prototype.showInterstitialFeed = function () {
  console.log("[showInterstitialFeed]"), this.sendJsbCall("showInterstitialFeed", "(IIIII)V", 2, 0, 0, a["default"].CONFIG_INFO.fullCloseChance || 0, a["default"].CONFIG_INFO.fullAdChance || 0);
}, c.prototype.showLargeFeed = function () {
  this.sendJsbCall("showLargeFeed", "(III)V", 0, 0, a["default"].CONFIG_INFO.DownDT[1] || 0);
}, c.prototype.showBannerFeed = function () {
  this.sendJsbCall("showBannerFeed", "(IIII)V", 1, 0, 0, a["default"].CONFIG_INFO.DownDT[1] || 0);
}, c.prototype.removeInterstitialFeed = function () {
  this.sendJsbCall("removeInterstitialFeed", "()V");
}, c.prototype.removeLargePicFeed = function () {
  this.sendJsbCall("removeLargePicFeed", "()V");
}, c.prototype.removeBannerFeed = function () {
  this.sendJsbCall("removeBannerFeed", "()V");
}, c.prototype.showInterstitialFeedByPosId = function (e) {
  void 0 === e && (e = this._nativeId), cc.log("showInterstitialFeedByPosId"), this.sendJsbCall("showInterstitialFeed", "(Ljava/lang/String;IIIII)V", e, 2, 0, 0, a["default"].CONFIG_INFO.fullCloseChance || 0, a["default"].CONFIG_INFO.fullAdChance || 0);
}, c.prototype.showLargeFeedByPosId = function (e) {
  this._nativeId = e, this.sendJsbCall("showLargeFeed", "(Ljava/lang/String;III)V", e, 2, 0, a["default"].CONFIG_INFO.DownDT[1] || 0);
}, c.prototype.showBannerFeedByPosId = function (e) {
  this.sendJsbCall("showBannerFeed", "(Ljava/lang/String;IIII)V", e, 1, 0, 0, a["default"].CONFIG_INFO.DownDT[1] || 0);
}, c.prototype.removeInterstitialFeedByPosId = function () {
  this.sendJsbCall("removeInterstitialFeed", "(Ljava/lang/String;)V", this._nativeId);
}, c.prototype.removeLargePicFeedByPosId = function () {
  this.sendJsbCall("removeLargePicFeed", "(Ljava/lang/String;)V", this._nativeId);
}, c.prototype.removeBannerFeedByPosId = function () {
  this.sendJsbCall("removeBannerFeed", "(Ljava/lang/String;)V", this._nativeId);
}, c.prototype.checkNativeCD = function () {
  var e = a["default"].gettimestamp() - this.showNativeTime,
      t = a["default"].CONFIG_INFO.natCoolTime || 0;
  return console.log("checkNativeCD:" + e + " cd-" + t), e < t || (this.showNativeTime = a["default"].gettimestamp(), !1);
}, c.prototype.getNatId = function () {
  return this._nativeId = a["default"].GetArrTarge(a["default"].CONFIG_INFO.natId || ["1f65438b7168336664f876947f645ab6", "946ac5068a6e2d5169c02d334c0043ef", "037d112339c86ed8d27e25b275bcf157", "d00dbac57e065eb56a51a0ca35511d17"]), this._nativeId;
}, c.prototype.hideBannerAd = function () {
  this.hideBanner(), this.removeBannerFeed(), this.hideNatAd();
}, c.prototype.hideNatAd = function () {
  this.removeLargePicFeedByPosId(), this.removeBannerFeedByPosId();
}, c.prototype.ShowPrivacy = function () {
  this.jsbCall("com/wonder/common/CommonSdk", "showPrivacyContentStatic", "()V");
}, c);

function c() {
  var e,
      t = i.call(this) || this;
  return t.defaultClass = ["com/wonder/xiaomi/XiaomiSdk", "()V"], t.onbannerShow = function () {}, t.isrewardvideo = !1, t._nativeId = "c193b00e8bd12ac8ac1cc6752139c163", t._nativeVideoSucccess = !1, t._InterstitialClose = null, t.showAd = ((e = {})[s.AD_TYPE.RewardVideo] = function (e) {
    if (t.onVideoSuccess = e.Success, t.onVideoClose = e.Close, t.onVideoError = e.Error, t.isGetVideoReward = !1, a["default"].CONFIG_INFO.isCheck) return t.showVideoAD();
    a["default"].CONFIG_INFO.videoEx ? t.showAd[s.AD_TYPE.NativeVideo](e) : t.showVideoAD();
  }, e[s.AD_TYPE.FullScreenVideo] = function (e) {
    void 0 === e && (e = function e() {}), a["default"].GetRandomNum(0, 100) > a["default"].CONFIG_INFO.fullChance || t.showAd[s.AD_TYPE.NativeVideo]();
  }, e[s.AD_TYPE.Banner] = function () {
    t.showAd[s.AD_TYPE.NativeBigImgBanner]();
  }, e[s.AD_TYPE.NativeVideo] = function (e) {
    if (void 0 === e && (e = null), !a["default"].CONFIG_INFO.isCheck) {
      if (t.checkNativeCD()) return console.log("冷却中", t.showNativeTime);
      t._nativeVideoCall = e, t.showInterstitialFeedByPosId(t._nativeId);
    }
  }, e[s.AD_TYPE.NativeBanner] = function () {
    t.checkNativeCD() || t.showBannerFeedByPosId(t._nativeId);
  }, e[s.AD_TYPE.NativeBigImgBanner] = function () {
    a["default"].CONFIG_INFO.isCheck || a["default"].GetRandomNum(0, 100) > a["default"].CONFIG_INFO.DownDT[0] || t.checkNativeCD() || t.showLargeFeedByPosId(t._nativeId);
  }, e[s.AD_TYPE.FullScreenImg] = function () {
    t.showFullVideoAD(a["default"].GetArrTarge(["9c04e61e1682f7a4206b7a8d99316b6d", "fc5bac175e10513d97c9062b04eefc4e", "93448b2a6eff937914b86c5b7323fd01", "072b95499c5256d1bc2fb3f01fdd9582"]));
  }, e[s.AD_TYPE.Splash] = function () {}, e), t.showNativeTime = 0, t.init(), t;
}

o["default"] = t;

cc._RF.pop();