
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Xiaomi_AdrSdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcWGlhb21pX0FkclNkay5qcyJdLCJuYW1lcyI6WyJlIiwicmVxdWlyZSIsInQiLCJtb2R1bGUiLCJvIiwiZXhwb3J0cyIsIm4iLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsImEiLCJyIiwicyIsIkJhc2VTZGsiLCJjIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJ4aWFvbWlBZENhbGxiYWNrIiwib25SZXdhcmRWaWRlb0NvbXBsZXRlIiwiaXNyZXdhcmR2aWRlbyIsIm9uUmV3YXJkVmlkZW9TaG93Iiwib25SZXdhcmRWaWRlb0Nsb3NlIiwib25WaWRlb1N1Y2Nlc3MiLCJvblZpZGVvQ2xvc2UiLCJzZXRUaW1lb3V0IiwiY2xlYW5VcFZpb2RlQ2FsbEJhY2siLCJvblJld2FyZFZpZGVvRmFpbCIsIm9uVmlkZW9FcnJvciIsIm9uSW50ZXJzdGl0aWFsU2hvdyIsIm9uSW50ZXJzdGl0aWFsQ2xvc2UiLCJfSW50ZXJzdGl0aWFsQ2xvc2UiLCJvbkludGVyc3RpdGlhbFNob3dGYWlsIiwib25GZWVkU2hvdyIsIm9uRmVlZFNob3dGYWlsIiwib25GZWVkQ2xvc2UiLCJfbmF0aXZlVmlkZW9TdWNjY2VzcyIsIl9uYXRpdmVWaWRlb0NhbGwiLCJvbkludGVyc3RpdGlhbEZlZWRTaG93Iiwib25JbnRlcnN0aXRpYWxGZWVkU2hvd0ZhaWxlZCIsIkNDVG9vbCIsIlVJIiwiU2hvd1RvYXN0Iiwic2hvd0FkIiwiQURfVFlQRSIsIkZ1bGxTY3JlZW5JbWciLCJvbkludGVyc3RpdGlhbEZlZWRSZW1vdmUiLCJvblVzZXJDbG9zZUludGVyc3RpdGlhbEZlZWQiLCJOYXRpdmVCaWdJbWdCYW5uZXIiLCJvbkJhbm5lclJlbW92ZSIsIm9uQmFubmVyRmVlZFJlbW92ZSIsIm9uTGFyZ2VGZWVkU2hvdyIsIm9uTGFyZ2VGZWVkU2hvd0ZhaWxlZCIsIm9uTGFyZ2VGZWVkUmVtb3ZlIiwibG9naW4iLCJQcm9taXNlIiwic2hvd0Jhbm5lcldpdGhOb2RlIiwic2hvd0Jhbm5lcldpdGhTdHlsZSIsIm9uYmFubmVyU2hvdyIsInNlbmRKc2JDYWxsIiwiaGlkZUJhbm5lciIsImRlc3Ryb3lCYW5uZXIiLCJzaG93VmlkZW9BRCIsInNob3dGdWxsVmlkZW9BRCIsInNlbmRFdmVudCIsInZpYnJhdGUiLCJzaG93SW5zZXJ0QWQiLCJzaG93U3BsYXNoQWQiLCJzaG93SW50ZXJzdGl0aWFsRmVlZCIsIkNPTkZJR19JTkZPIiwiZnVsbENsb3NlQ2hhbmNlIiwiZnVsbEFkQ2hhbmNlIiwic2hvd0xhcmdlRmVlZCIsIkRvd25EVCIsInNob3dCYW5uZXJGZWVkIiwicmVtb3ZlSW50ZXJzdGl0aWFsRmVlZCIsInJlbW92ZUxhcmdlUGljRmVlZCIsInJlbW92ZUJhbm5lckZlZWQiLCJzaG93SW50ZXJzdGl0aWFsRmVlZEJ5UG9zSWQiLCJfbmF0aXZlSWQiLCJjYyIsInNob3dMYXJnZUZlZWRCeVBvc0lkIiwic2hvd0Jhbm5lckZlZWRCeVBvc0lkIiwicmVtb3ZlSW50ZXJzdGl0aWFsRmVlZEJ5UG9zSWQiLCJyZW1vdmVMYXJnZVBpY0ZlZWRCeVBvc0lkIiwicmVtb3ZlQmFubmVyRmVlZEJ5UG9zSWQiLCJjaGVja05hdGl2ZUNEIiwiZ2V0dGltZXN0YW1wIiwic2hvd05hdGl2ZVRpbWUiLCJuYXRDb29sVGltZSIsImdldE5hdElkIiwiR2V0QXJyVGFyZ2UiLCJuYXRJZCIsImhpZGVCYW5uZXJBZCIsImhpZGVOYXRBZCIsIlNob3dQcml2YWN5IiwianNiQ2FsbCIsImRlZmF1bHRDbGFzcyIsIlJld2FyZFZpZGVvIiwiU3VjY2VzcyIsIkNsb3NlIiwiRXJyb3IiLCJpc0dldFZpZGVvUmV3YXJkIiwiaXNDaGVjayIsInZpZGVvRXgiLCJOYXRpdmVWaWRlbyIsIkZ1bGxTY3JlZW5WaWRlbyIsIkdldFJhbmRvbU51bSIsImZ1bGxDaGFuY2UiLCJCYW5uZXIiLCJOYXRpdmVCYW5uZXIiLCJTcGxhc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFDQyxPQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxNQUFOO0FBQ0EsSUFBSUMsQ0FBQyxHQUFDQyxPQUFOO0FBQ0E7O0FBQWEsSUFBSUMsRUFBSjtBQUFBLElBQU1KLENBQUMsR0FBQyxVQUFNLFNBQUtLLFNBQVgsS0FBdUJELEVBQUMsR0FBQyxXQUFTTixDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDLFNBQU0sQ0FBQ0ksRUFBQyxHQUFDRSxNQUFNLENBQUNDLGNBQVAsSUFBdUI7QUFBQ0MsSUFBQUEsU0FBUyxFQUFDO0FBQVgsZUFBeUJDLEtBQXpCLElBQWdDLFVBQVNYLENBQVQsRUFBV0UsQ0FBWCxFQUFhO0FBQUNGLElBQUFBLENBQUMsQ0FBQ1UsU0FBRixHQUFZUixDQUFaO0FBQWMsR0FBbkYsSUFBcUYsVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxTQUFJLElBQUlFLENBQVIsSUFBYUYsQ0FBYjtBQUFlTSxNQUFBQSxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1osQ0FBckMsRUFBdUNFLENBQXZDLE1BQTRDSixDQUFDLENBQUNJLENBQUQsQ0FBRCxHQUFLRixDQUFDLENBQUNFLENBQUQsQ0FBbEQ7QUFBZjtBQUFzRSxHQUE1SyxFQUE4S0osQ0FBOUssRUFBZ0xFLENBQWhMLENBQU47QUFBeUwsQ0FBek0sRUFBME0sVUFBU0YsQ0FBVCxFQUFXRSxDQUFYLEVBQWE7QUFBQyxXQUFTRSxDQUFULEdBQVk7QUFBQyxTQUFLVyxXQUFMLEdBQWlCZixDQUFqQjtBQUFtQjs7QUFBQU0sRUFBQUEsRUFBQyxDQUFDTixDQUFELEVBQUdFLENBQUgsQ0FBRCxFQUFPRixDQUFDLENBQUNZLFNBQUYsR0FBWSxTQUFPVixD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WCxDQUFELEdBQW9CLFlBQVUsQ0FBRSxDQUFsd0MsRUFBbXdDMUgsQ0FBN3dDLENBQXZNLEVBQXU5Q0UsQ0FBQyxDQUFDaUcsY0FBRixHQUFpQixDQUF4K0MsRUFBMCtDakcsQ0FBQyxDQUFDdUIsSUFBRixFQUExK0MsRUFBbS9DdkIsQ0FBMS9DO0FBQTQvQzs7QUFBQUUsQ0FBQyxXQUFELEdBQVVGLENBQVYiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBlPXJlcXVpcmU7XG52YXIgdD1tb2R1bGU7XG52YXIgbz1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7dmFyIG4sdD10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KG49ZnVuY3Rpb24oZSx0KXtyZXR1cm4obj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSx0KXtlLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG8gaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxvKSYmKGVbb109dFtvXSl9KShlLHQpfSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG8oKXt0aGlzLmNvbnN0cnVjdG9yPWV9bihlLHQpLGUucHJvdG90eXBlPW51bGw9PT10P09iamVjdC5jcmVhdGUodCk6KG8ucHJvdG90eXBlPXQucHJvdG90eXBlLG5ldyBvKX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpLGE9ZShcIkFwcENvbW1vblwiKSxyPWUoXCJDQ1Rvb2xcIikscz1lKFwiQmFzZVNka1wiKSx0PShpPXMuQmFzZVNkayx0KGMsaSksYy5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7Y29uc29sZS5sb2coXCJbWGlhb21pX0FkclNka11pbml0XCIpLHdpbmRvdy54aWFvbWlBZENhbGxiYWNrPXtvblJld2FyZFZpZGVvQ29tcGxldGU6ZnVuY3Rpb24oKXtlLmlzcmV3YXJkdmlkZW89ITAsY29uc29sZS5sb2coXCJmaXNoIG9uUmV3YXJkVmlkZW9Db21wbGV0ZVwiKX0sb25SZXdhcmRWaWRlb1Nob3c6ZnVuY3Rpb24oKXtjb25zb2xlLmxvZyhcImZpc2ggb25SZXdhcmRWaWRlb1Nob3dcIil9LG9uUmV3YXJkVmlkZW9DbG9zZTpmdW5jdGlvbigpe2NvbnNvbGUubG9nKFwiW2Zpc2ggb25SZXdhcmRWaWRlb0Nsb3NlXVwiKSxjb25zb2xlLmxvZyhlLmlzcmV3YXJkdmlkZW8pLGUuaXNyZXdhcmR2aWRlbz9lLm9uVmlkZW9TdWNjZXNzKCk6ZS5vblZpZGVvQ2xvc2UoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5jbGVhblVwVmlvZGVDYWxsQmFjaygpfSwzMDApfSxvblJld2FyZFZpZGVvRmFpbDpmdW5jdGlvbigpe2NvbnNvbGUubG9nKFwiZmlzaCBvblJld2FyZFZpZGVvRmFpbFwiKSxlLm9uVmlkZW9FcnJvcigpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmNsZWFuVXBWaW9kZUNhbGxCYWNrKCl9LDMwMCl9LG9uSW50ZXJzdGl0aWFsU2hvdzpmdW5jdGlvbigpe2NvbnNvbGUubG9nKFwiZmlzaCBvbkludGVyc3RpdGlhbFNob3dcIil9LG9uSW50ZXJzdGl0aWFsQ2xvc2U6ZnVuY3Rpb24oKXtjb25zb2xlLmxvZyhcImZpc2ggb25JbnRlcnN0aXRpYWxDbG9zZVwiKSxlLl9JbnRlcnN0aXRpYWxDbG9zZSYmZS5fSW50ZXJzdGl0aWFsQ2xvc2UoKX0sb25JbnRlcnN0aXRpYWxTaG93RmFpbDpmdW5jdGlvbigpe2NvbnNvbGUubG9nKFwiZmlzaCBvbkludGVyc3RpdGlhbFNob3dGYWlsXCIpLGUuX0ludGVyc3RpdGlhbENsb3NlJiZlLl9JbnRlcnN0aXRpYWxDbG9zZSgpfSxvbkZlZWRTaG93OmZ1bmN0aW9uKCl7Y29uc29sZS5sb2coXCJmaXNoIG9uRmVlZFNob3dcIil9LG9uRmVlZFNob3dGYWlsOmZ1bmN0aW9uKCl7Y29uc29sZS5sb2coXCJmaXNoIG9uRmVlZFNob3dGYWlsXCIpfSxvbkZlZWRDbG9zZTpmdW5jdGlvbigpe2UuX25hdGl2ZVZpZGVvU3VjY2Nlc3MmJihlLl9uYXRpdmVWaWRlb1N1Y2NjZXNzPSExLGUuX25hdGl2ZVZpZGVvQ2FsbD1udWxsLGUub25WaWRlb1N1Y2Nlc3MoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5jbGVhblVwVmlvZGVDYWxsQmFjaygpfSwzMDApKSxjb25zb2xlLmxvZyhcImZpc2ggb25GZWVkQ2xvc2VcIil9LG9uSW50ZXJzdGl0aWFsRmVlZFNob3c6ZnVuY3Rpb24oKXtlLl9uYXRpdmVWaWRlb1N1Y2NjZXNzPSEwLGNvbnNvbGUubG9nKFwiZmlzaCBvbkludGVyc3RpdGlhbEZlZWRTaG93XCIpfSxvbkludGVyc3RpdGlhbEZlZWRTaG93RmFpbGVkOmZ1bmN0aW9uKCl7ZS5fbmF0aXZlVmlkZW9TdWNjY2Vzcz0hMSxlLl9uYXRpdmVWaWRlb0NhbGw9bnVsbCxlLl9uYXRpdmVWaWRlb0NhbGx8fHIuQ0NUb29sLlVJLlNob3dUb2FzdChcIuWGheWuueato+WcqOWKoOi9veS4re+8jOivt+eojeWQjuWGjeivle+8gVwiKSxjb25zb2xlLmxvZyhcImZpc2ggb25JbnRlcnN0aXRpYWxGZWVkU2hvd0ZhaWxlZFwiKSxlLnNob3dBZFtzLkFEX1RZUEUuRnVsbFNjcmVlbkltZ10oKX0sb25JbnRlcnN0aXRpYWxGZWVkUmVtb3ZlOmZ1bmN0aW9uKCl7ZS5fbmF0aXZlVmlkZW9TdWNjY2VzcyYmKGUuX25hdGl2ZVZpZGVvU3VjY2Nlc3M9ITEsZS5fbmF0aXZlVmlkZW9DYWxsPW51bGwsZS5vblZpZGVvU3VjY2VzcygpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmNsZWFuVXBWaW9kZUNhbGxCYWNrKCl9LDMwMCkpLGNvbnNvbGUubG9nKFwiZmlzaCBvbkludGVyc3RpdGlhbEZlZWRSZW1vdmVcIil9LG9uVXNlckNsb3NlSW50ZXJzdGl0aWFsRmVlZDpmdW5jdGlvbigpe2Uuc2hvd0FkW3MuQURfVFlQRS5OYXRpdmVCaWdJbWdCYW5uZXJdKCl9LG9uQmFubmVyUmVtb3ZlOmZ1bmN0aW9uKCl7Y29uc29sZS5sb2coXCJbb25CYW5uZXJSZW1vdmVdXCIpfSxvbkJhbm5lckZlZWRSZW1vdmU6ZnVuY3Rpb24oKXtjb25zb2xlLmxvZyhcIltvbkJhbm5lckZlZWRSZW1vdmVdXCIpfSxvbkxhcmdlRmVlZFNob3c6ZnVuY3Rpb24oKXt9LG9uTGFyZ2VGZWVkU2hvd0ZhaWxlZDpmdW5jdGlvbigpe30sb25MYXJnZUZlZWRSZW1vdmU6ZnVuY3Rpb24oKXt9fX0sYy5wcm90b3R5cGUuY2xlYW5VcFZpb2RlQ2FsbEJhY2s9ZnVuY3Rpb24oKXt0aGlzLm9uVmlkZW9FcnJvcj1mdW5jdGlvbigpe30sdGhpcy5vblZpZGVvQ2xvc2U9ZnVuY3Rpb24oKXt9LHRoaXMub25WaWRlb1N1Y2Nlc3M9ZnVuY3Rpb24oKXt9fSxjLnByb3RvdHlwZS5sb2dpbj1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSl7dCYmdChudWxsKSxlKG51bGwpfSl9LGMucHJvdG90eXBlLnNob3dCYW5uZXJXaXRoTm9kZT1mdW5jdGlvbihlLHQsbyl7dGhpcy5zaG93QmFubmVyV2l0aFN0eWxlKGUse30sbyl9LGMucHJvdG90eXBlLnNob3dCYW5uZXJXaXRoU3R5bGU9ZnVuY3Rpb24oZSx0LG8pe3RoaXMub25iYW5uZXJTaG93PW8sdGhpcy5zZW5kSnNiQ2FsbChcInNob3dCYW5uZXJcIixcIigpVlwiKX0sYy5wcm90b3R5cGUuaGlkZUJhbm5lcj1mdW5jdGlvbigpe3RoaXMuc2VuZEpzYkNhbGwoXCJyZW1vdmVCYW5uZXJcIixcIigpVlwiKX0sYy5wcm90b3R5cGUuZGVzdHJveUJhbm5lcj1mdW5jdGlvbigpe30sYy5wcm90b3R5cGUuc2hvd1ZpZGVvQUQ9ZnVuY3Rpb24oKXt0aGlzLmlzcmV3YXJkdmlkZW89ITEsdGhpcy5zZW5kSnNiQ2FsbChcInNob3dSZXdhcmRWaWRlb1wiLFwiKClWXCIpfSxjLnByb3RvdHlwZS5zaG93RnVsbFZpZGVvQUQ9ZnVuY3Rpb24oZSx0KXt0aGlzLl9JbnRlcnN0aXRpYWxDbG9zZT10LGNvbnNvbGUubG9nKFwiW0Z1bGxTY3JlZW5WaWRlb11cIitlKSx0aGlzLnNlbmRKc2JDYWxsKFwic2hvd0Z1bGxTY3JlZW5cIixcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLGUpfSxjLnByb3RvdHlwZS5zZW5kRXZlbnQ9ZnVuY3Rpb24oZSl7dGhpcy5zZW5kSnNiQ2FsbChcInNlbmRNc2dcIixcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLGUpfSxjLnByb3RvdHlwZS52aWJyYXRlPWZ1bmN0aW9uKGUpe3RoaXMuc2VuZEpzYkNhbGwoXCJ2aWJyYXRlXCIsXCIoSSlWXCIsMD09ZT8xMDozMDApfSxjLnByb3RvdHlwZS5zaG93SW5zZXJ0QWQ9ZnVuY3Rpb24oKXt9LGMucHJvdG90eXBlLnNob3dTcGxhc2hBZD1mdW5jdGlvbigpe30sYy5wcm90b3R5cGUuc2hvd0ludGVyc3RpdGlhbEZlZWQ9ZnVuY3Rpb24oKXtjb25zb2xlLmxvZyhcIltzaG93SW50ZXJzdGl0aWFsRmVlZF1cIiksdGhpcy5zZW5kSnNiQ2FsbChcInNob3dJbnRlcnN0aXRpYWxGZWVkXCIsXCIoSUlJSUkpVlwiLDIsMCwwLGEuZGVmYXVsdC5DT05GSUdfSU5GTy5mdWxsQ2xvc2VDaGFuY2V8fDAsYS5kZWZhdWx0LkNPTkZJR19JTkZPLmZ1bGxBZENoYW5jZXx8MCl9LGMucHJvdG90eXBlLnNob3dMYXJnZUZlZWQ9ZnVuY3Rpb24oKXt0aGlzLnNlbmRKc2JDYWxsKFwic2hvd0xhcmdlRmVlZFwiLFwiKElJSSlWXCIsMCwwLGEuZGVmYXVsdC5DT05GSUdfSU5GTy5Eb3duRFRbMV18fDApfSxjLnByb3RvdHlwZS5zaG93QmFubmVyRmVlZD1mdW5jdGlvbigpe3RoaXMuc2VuZEpzYkNhbGwoXCJzaG93QmFubmVyRmVlZFwiLFwiKElJSUkpVlwiLDEsMCwwLGEuZGVmYXVsdC5DT05GSUdfSU5GTy5Eb3duRFRbMV18fDApfSxjLnByb3RvdHlwZS5yZW1vdmVJbnRlcnN0aXRpYWxGZWVkPWZ1bmN0aW9uKCl7dGhpcy5zZW5kSnNiQ2FsbChcInJlbW92ZUludGVyc3RpdGlhbEZlZWRcIixcIigpVlwiKX0sYy5wcm90b3R5cGUucmVtb3ZlTGFyZ2VQaWNGZWVkPWZ1bmN0aW9uKCl7dGhpcy5zZW5kSnNiQ2FsbChcInJlbW92ZUxhcmdlUGljRmVlZFwiLFwiKClWXCIpfSxjLnByb3RvdHlwZS5yZW1vdmVCYW5uZXJGZWVkPWZ1bmN0aW9uKCl7dGhpcy5zZW5kSnNiQ2FsbChcInJlbW92ZUJhbm5lckZlZWRcIixcIigpVlwiKX0sYy5wcm90b3R5cGUuc2hvd0ludGVyc3RpdGlhbEZlZWRCeVBvc0lkPWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPXRoaXMuX25hdGl2ZUlkKSxjYy5sb2coXCJzaG93SW50ZXJzdGl0aWFsRmVlZEJ5UG9zSWRcIiksdGhpcy5zZW5kSnNiQ2FsbChcInNob3dJbnRlcnN0aXRpYWxGZWVkXCIsXCIoTGphdmEvbGFuZy9TdHJpbmc7SUlJSUkpVlwiLGUsMiwwLDAsYS5kZWZhdWx0LkNPTkZJR19JTkZPLmZ1bGxDbG9zZUNoYW5jZXx8MCxhLmRlZmF1bHQuQ09ORklHX0lORk8uZnVsbEFkQ2hhbmNlfHwwKX0sYy5wcm90b3R5cGUuc2hvd0xhcmdlRmVlZEJ5UG9zSWQ9ZnVuY3Rpb24oZSl7dGhpcy5fbmF0aXZlSWQ9ZSx0aGlzLnNlbmRKc2JDYWxsKFwic2hvd0xhcmdlRmVlZFwiLFwiKExqYXZhL2xhbmcvU3RyaW5nO0lJSSlWXCIsZSwyLDAsYS5kZWZhdWx0LkNPTkZJR19JTkZPLkRvd25EVFsxXXx8MCl9LGMucHJvdG90eXBlLnNob3dCYW5uZXJGZWVkQnlQb3NJZD1mdW5jdGlvbihlKXt0aGlzLnNlbmRKc2JDYWxsKFwic2hvd0Jhbm5lckZlZWRcIixcIihMamF2YS9sYW5nL1N0cmluZztJSUlJKVZcIixlLDEsMCwwLGEuZGVmYXVsdC5DT05GSUdfSU5GTy5Eb3duRFRbMV18fDApfSxjLnByb3RvdHlwZS5yZW1vdmVJbnRlcnN0aXRpYWxGZWVkQnlQb3NJZD1mdW5jdGlvbigpe3RoaXMuc2VuZEpzYkNhbGwoXCJyZW1vdmVJbnRlcnN0aXRpYWxGZWVkXCIsXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIix0aGlzLl9uYXRpdmVJZCl9LGMucHJvdG90eXBlLnJlbW92ZUxhcmdlUGljRmVlZEJ5UG9zSWQ9ZnVuY3Rpb24oKXt0aGlzLnNlbmRKc2JDYWxsKFwicmVtb3ZlTGFyZ2VQaWNGZWVkXCIsXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIix0aGlzLl9uYXRpdmVJZCl9LGMucHJvdG90eXBlLnJlbW92ZUJhbm5lckZlZWRCeVBvc0lkPWZ1bmN0aW9uKCl7dGhpcy5zZW5kSnNiQ2FsbChcInJlbW92ZUJhbm5lckZlZWRcIixcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLHRoaXMuX25hdGl2ZUlkKX0sYy5wcm90b3R5cGUuY2hlY2tOYXRpdmVDRD1mdW5jdGlvbigpe3ZhciBlPWEuZGVmYXVsdC5nZXR0aW1lc3RhbXAoKS10aGlzLnNob3dOYXRpdmVUaW1lLHQ9YS5kZWZhdWx0LkNPTkZJR19JTkZPLm5hdENvb2xUaW1lfHwwO3JldHVybiBjb25zb2xlLmxvZyhcImNoZWNrTmF0aXZlQ0Q6XCIrZStcIiBjZC1cIit0KSxlPHR8fCh0aGlzLnNob3dOYXRpdmVUaW1lPWEuZGVmYXVsdC5nZXR0aW1lc3RhbXAoKSwhMSl9LGMucHJvdG90eXBlLmdldE5hdElkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX25hdGl2ZUlkPWEuZGVmYXVsdC5HZXRBcnJUYXJnZShhLmRlZmF1bHQuQ09ORklHX0lORk8ubmF0SWR8fFtcIjFmNjU0MzhiNzE2ODMzNjY2NGY4NzY5NDdmNjQ1YWI2XCIsXCI5NDZhYzUwNjhhNmUyZDUxNjljMDJkMzM0YzAwNDNlZlwiLFwiMDM3ZDExMjMzOWM4NmVkOGQyN2UyNWIyNzViY2YxNTdcIixcImQwMGRiYWM1N2UwNjVlYjU2YTUxYTBjYTM1NTExZDE3XCJdKSx0aGlzLl9uYXRpdmVJZH0sYy5wcm90b3R5cGUuaGlkZUJhbm5lckFkPWZ1bmN0aW9uKCl7dGhpcy5oaWRlQmFubmVyKCksdGhpcy5yZW1vdmVCYW5uZXJGZWVkKCksdGhpcy5oaWRlTmF0QWQoKX0sYy5wcm90b3R5cGUuaGlkZU5hdEFkPWZ1bmN0aW9uKCl7dGhpcy5yZW1vdmVMYXJnZVBpY0ZlZWRCeVBvc0lkKCksdGhpcy5yZW1vdmVCYW5uZXJGZWVkQnlQb3NJZCgpfSxjLnByb3RvdHlwZS5TaG93UHJpdmFjeT1mdW5jdGlvbigpe3RoaXMuanNiQ2FsbChcImNvbS93b25kZXIvY29tbW9uL0NvbW1vblNka1wiLFwic2hvd1ByaXZhY3lDb250ZW50U3RhdGljXCIsXCIoKVZcIil9LGMpO2Z1bmN0aW9uIGMoKXt2YXIgZSx0PWkuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gdC5kZWZhdWx0Q2xhc3M9W1wiY29tL3dvbmRlci94aWFvbWkvWGlhb21pU2RrXCIsXCIoKVZcIl0sdC5vbmJhbm5lclNob3c9ZnVuY3Rpb24oKXt9LHQuaXNyZXdhcmR2aWRlbz0hMSx0Ll9uYXRpdmVJZD1cImMxOTNiMDBlOGJkMTJhYzhhYzFjYzY3NTIxMzljMTYzXCIsdC5fbmF0aXZlVmlkZW9TdWNjY2Vzcz0hMSx0Ll9JbnRlcnN0aXRpYWxDbG9zZT1udWxsLHQuc2hvd0FkPSgoZT17fSlbcy5BRF9UWVBFLlJld2FyZFZpZGVvXT1mdW5jdGlvbihlKXtpZih0Lm9uVmlkZW9TdWNjZXNzPWUuU3VjY2Vzcyx0Lm9uVmlkZW9DbG9zZT1lLkNsb3NlLHQub25WaWRlb0Vycm9yPWUuRXJyb3IsdC5pc0dldFZpZGVvUmV3YXJkPSExLGEuZGVmYXVsdC5DT05GSUdfSU5GTy5pc0NoZWNrKXJldHVybiB0LnNob3dWaWRlb0FEKCk7YS5kZWZhdWx0LkNPTkZJR19JTkZPLnZpZGVvRXg/dC5zaG93QWRbcy5BRF9UWVBFLk5hdGl2ZVZpZGVvXShlKTp0LnNob3dWaWRlb0FEKCl9LGVbcy5BRF9UWVBFLkZ1bGxTY3JlZW5WaWRlb109ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9ZnVuY3Rpb24oKXt9KSxhLmRlZmF1bHQuR2V0UmFuZG9tTnVtKDAsMTAwKT5hLmRlZmF1bHQuQ09ORklHX0lORk8uZnVsbENoYW5jZXx8dC5zaG93QWRbcy5BRF9UWVBFLk5hdGl2ZVZpZGVvXSgpfSxlW3MuQURfVFlQRS5CYW5uZXJdPWZ1bmN0aW9uKCl7dC5zaG93QWRbcy5BRF9UWVBFLk5hdGl2ZUJpZ0ltZ0Jhbm5lcl0oKX0sZVtzLkFEX1RZUEUuTmF0aXZlVmlkZW9dPWZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUmJihlPW51bGwpLCFhLmRlZmF1bHQuQ09ORklHX0lORk8uaXNDaGVjayl7aWYodC5jaGVja05hdGl2ZUNEKCkpcmV0dXJuIGNvbnNvbGUubG9nKFwi5Ya35Y205LitXCIsdC5zaG93TmF0aXZlVGltZSk7dC5fbmF0aXZlVmlkZW9DYWxsPWUsdC5zaG93SW50ZXJzdGl0aWFsRmVlZEJ5UG9zSWQodC5fbmF0aXZlSWQpfX0sZVtzLkFEX1RZUEUuTmF0aXZlQmFubmVyXT1mdW5jdGlvbigpe3QuY2hlY2tOYXRpdmVDRCgpfHx0LnNob3dCYW5uZXJGZWVkQnlQb3NJZCh0Ll9uYXRpdmVJZCl9LGVbcy5BRF9UWVBFLk5hdGl2ZUJpZ0ltZ0Jhbm5lcl09ZnVuY3Rpb24oKXthLmRlZmF1bHQuQ09ORklHX0lORk8uaXNDaGVja3x8YS5kZWZhdWx0LkdldFJhbmRvbU51bSgwLDEwMCk+YS5kZWZhdWx0LkNPTkZJR19JTkZPLkRvd25EVFswXXx8dC5jaGVja05hdGl2ZUNEKCl8fHQuc2hvd0xhcmdlRmVlZEJ5UG9zSWQodC5fbmF0aXZlSWQpfSxlW3MuQURfVFlQRS5GdWxsU2NyZWVuSW1nXT1mdW5jdGlvbigpe3Quc2hvd0Z1bGxWaWRlb0FEKGEuZGVmYXVsdC5HZXRBcnJUYXJnZShbXCI5YzA0ZTYxZTE2ODJmN2E0MjA2YjdhOGQ5OTMxNmI2ZFwiLFwiZmM1YmFjMTc1ZTEwNTEzZDk3YzkwNjJiMDRlZWZjNGVcIixcIjkzNDQ4YjJhNmVmZjkzNzkxNGI4NmM1YjczMjNmZDAxXCIsXCIwNzJiOTU0OTljNTI1NmQxYmMyZmIzZjAxZmRkOTU4MlwiXSkpfSxlW3MuQURfVFlQRS5TcGxhc2hdPWZ1bmN0aW9uKCl7fSxlKSx0LnNob3dOYXRpdmVUaW1lPTAsdC5pbml0KCksdH1vLmRlZmF1bHQ9dCJdfQ==