"use strict";
cc._RF.push(module, '83486Oqm3VCZ4wqZLmZf+Cz', 'MinGameSdk');
// scripts/MinGameSdk.js

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
var a,
    i = e("GConfig"),
    s = e("AppCommon"),
    r = e("CCTool"),
    c = e("PlatformFun"),
    l = e("BaseSdk"),
    p = e("wxTs"),
    d = window.wx || window.tt || window.qq,
    u = null,
    t = (a = l.BaseSdk, t(f, a), f.prototype.init = function () {
  var e;
  cc.log("[MinGameSdk]init"), d && (d.onAudioInterruptionEnd && d.onAudioInterruptionEnd(function () {
    console.log("音频中断结束"), r.CCTool.Audio.PlayBgm();
  }), d.onAudioInterruptionBegin && d.onAudioInterruptionBegin(function () {
    console.log("音频中断开始"), r.CCTool.Audio.StopBgm();
  }), d.showShareMenu && d.showShareMenu({
    withShareTicket: !0,
    menus: ["shareAppMessage", "shareTimeline"]
  }), d.getSystemInfo && d.getSystemInfo({
    success: function success(e) {
      s["default"].getSystemInfo = e, s["default"].getSystemInfo.ratio = s["default"].getSystemInfo.windowWidth / cc.winSize.width, s["default"].getSystemInfo.fit = 0, s["default"].getSystemInfo.system_str = s["default"].getSystemInfo.system.indexOf("iOS") < 0 ? "an" : "ios", console.log("----------app.getSystemInfo", s["default"].getSystemInfo);
    }
  }), e = d.getLaunchOptionsSync && d.getLaunchOptionsSync(), console.log("[getLaunchOptionsSync]", e)), s["default"].appRequest({
    urls: i.cf.API.GAME_SHARE_LIST,
    method: "POST",
    data: {
      app_name: s["default"].PFSET.PFName
    },
    success: function success(e) {
      var t;
      0 == e.code && (s["default"].data.GAME_SHARE_LIST = e.data, console.log("[GAME_SHARE_LIST]", s["default"].data.GAME_SHARE_LIST), (e = s["default"].weightGetValue(s["default"].data.GAME_SHARE_LIST.list, "weight")) && (t = {
        title: e.title,
        imageUrl: e.image,
        extra: {},
        query: s["default"].ObjectToUrlStr({
          card_id: e.id
        })
      }, d && d.onShareAppMessage(function (e) {
        console.log("onShareAppMessage res", e);
        e = t;
        return d && d.uma && d.uma.trackShare(e), e;
      })));
    }
  });
}, f.prototype.showVideoAD = function () {
  var t = this;
  if (!d || !d.createRewardedVideoAd) return console.log("版本太低了,直接成功"), this.onVideoSuccess();
  var o,
      e = {
    adUnitId: s["default"].ADID.minVideo
  };
  0 <= [l.GAMEPF.TT, l.GAMEPF.KS].indexOf(s["default"].PF) ? window.videoAd ? (console.log("播放头条广告 playVideo"), window.videoAd.show(e)["catch"](function (e) {
    console.log("广告组件出现问题，手动load一次", e), window.videoAd.load(), window.onLoadError && window.onLoadError(!1), window.onLoadError = null;
  }), this.onLoadSuccess()) : this.onVideoSuccess() : (s["default"].PF == l.GAMEPF.WX && p["default"].Instance.sentAdsEvent(p.AdsEventType.reward, p.AdsEventName.ad_click), o = d.createRewardedVideoAd(e), u || (u = o, s["default"].PF == l.GAMEPF.WX && p["default"].Instance.sentAdsEvent(p.AdsEventType.reward, p.AdsEventName.ad_request)), o.load().then(function () {
    s["default"].PF == l.GAMEPF.WX && p["default"].Instance.sentAdsEvent(p.AdsEventType.reward, p.AdsEventName.ad_fill), console.log("加载广告"), o.show().then(function () {
      s["default"].PF == l.GAMEPF.WX && p["default"].Instance.sentAdsEvent(p.AdsEventType.reward, p.AdsEventName.ad_impression), c.PlatformFun.onHide();
    }), o.onClose(function (e) {
      e && e.isEnded || void 0 === e ? (console.log("正常播放结束"), t.onVideoSuccess()) : (console.log("播放中途退出"), t.onVideoClose()), c.PlatformFun.onShow();

      try {
        o.offClose();
      } catch (e) {
        console.log("取消监听失败offClose", e);
      }
    });
  })["catch"](function (e) {
    console.log(JSON.stringify(e), "视频加载出错了"), t.onVideoError();
  }), o.onError(function (e) {
    console.log(JSON.stringify(e), "广告拉取失败！"), t.onVideoError();

    try {
      o.offError();
    } catch (e) {
      console.log("取消监听失败offError", e);
    }
  }));
}, f.prototype.showFullVideoAD = function () {
  var e = s["default"].ADID.InterstitialAd;
  return console.log("[loadInterstitialAd]", e), d ? d.createInterstitialAd ? (s["default"].PF == l.GAMEPF.WX && p["default"].Instance.sentAdsEvent(p.AdsEventType.insert, p.AdsEventName.ad_request), this.show_interstitial_num++, c.PlatformFun.SendEvent("show_interstitial_" + this.show_interstitial_num), console.log("[insertAd][调用时间]", s["default"].gettimestamp(null, "ms")), this.myFullVideo || (this.myFullVideo = d.createInterstitialAd({
    adUnitId: e
  }), this.myFullVideo.onError(function (e) {
    console.log("插屏发生错误", e.errCode, e.errMsg), c.PlatformFun.SendEvent("AD_inset_error", {
      errCode: e.errCode
    });
  }), this.myFullVideo.onLoad(function () {
    console.log("加载成功"), s["default"].PF == l.GAMEPF.WX && p["default"].Instance.sentAdsEvent(p.AdsEventType.insert, p.AdsEventName.ad_fill);
  })), void this.myFullVideo.show().then(function () {
    s["default"].PF == l.GAMEPF.WX && p["default"].Instance.sentAdsEvent(p.AdsEventType.insert, p.AdsEventName.ad_impression), console.log("插屏广告展示成功"), c.PlatformFun.SendEvent("AD_inset_loading_success");
  })) : console.log("缺少方法[createInterstitialAd]") : console.log("环境不正确");
}, f.prototype.destroyFullVideoAd = function () {
  s["default"].PFSET.isAdOpen && l.GAMEPF.TT == s["default"].PF && this.myFullVideo && (this.myFullVideo.destroy(), this.myFullVideo = null);
}, f.prototype.showBanner = function () {
  var t = this;
  if (!d) return console.log("环境不正确");
  if (this.myBanner) return this.myBanner.tt_isShow ? console.log("当前有banner显示") : (this.myBanner.tt_showNum++, s["default"].PF == l.GAMEPF.QQ ? this.myBanner.show() : (console.log("[showBannerAd]"), this.myBanner.tt_isShow = !0, void s["default"].MainView.scheduleOnce(function () {
    return t.myBanner ? (t.myBanner.offError && t.myBanner.offError(), void t.myBanner.show().then(function () {
      console.log("[bannerAd][show]");
    })) : console.log("没有this.myBanner广告");
  }, s["default"].CONFIG_INFO.bannerADdelay || 0)));
  var e = s["default"].ADID.banner,
      o = s["default"].getSystemInfo.screenWidth,
      n = s["default"].getSystemInfo.screenHeight,
      i = {
    left: 0,
    top: n,
    width: o,
    height: 85
  };
  d.createBannerAd ? ((i = s["default"].PF == l.GAMEPF.QQ || s["default"].PF == l.GAMEPF.WX ? {
    left: .5 * (o - 300),
    top: n - 168.75,
    width: 300
  } : i).width = +i.width, i.left = (o - i.width) / 2, s["default"].PF == l.GAMEPF.MIN_VIVO && (i = {}), this.myBanner = d.createBannerAd({
    adUnitId: e,
    adIntervals: 30,
    style: i
  }), console.log("展示banner广告 showBannerAd"), this.myBanner.onResize && this.myBanner.onResize(function (e) {
    console.log("this.myBanner.onResize", e), s["default"].PF != l.GAMEPF.MIN_VIVO && (s["default"].PF == l.GAMEPF.TT && (e.height = e.width / 16 * 9), t.myBanner.style.left = (o - e.width) / 2 + .1, s["default"].PF == l.GAMEPF.WX ? t.myBanner.style.top = n - e.height - 5 : s["default"].PF == l.GAMEPF.TT ? t.myBanner.style.top = n - e.height + (s["default"].data.isIphoneX ? 35 : 47) : s["default"].PF == l.GAMEPF.QQ && (t.myBanner.style.top = n - e.height, t.myBanner.style.left = .5 * (o - e.width)), s["default"].data.BannerHidth = e.height * (cc.winSize.width / o));
  }), this.myBanner.onLoad(function () {
    console.log("展示banner广告 onLoad"), t.myBanner.show();
  }), this.myBanner.onError(function (e) {
    console.log("展示banner广告 onError", e), 1004 == e.errCode && (t.hideBannerAd(), s["default"].MainView.scheduleOnce(function () {
      t.myBanner = null, t.showBanner();
    }, 1));
  }), this.myBanner.tt_showNum = 1) : console.log("版本太低了");
}, f.prototype.hideBannerAd = function () {
  this.myBanner && (this.myBanner.tt_isShow = !1, this.myBanner.tt_showNum >= s["default"].CONFIG_INFO.bannerNum ? this.destroyBannerAd() : this.myBanner.hide());
}, f.prototype.destroyBannerAd = function () {
  console.log("[destroyBannerAd]"), this.myBanner && (this.myBanner.hide(), this.myBanner.destroy()), this.myBanner = null;
}, f.prototype.showAppBox = function () {
  var t = this;
  return s["default"].PF == l.GAMEPF.QQ && d ? this.myAppBox ? this.myAppBox.show() : (this.myAppBox = d.createAppBox({
    adUnitId: s["default"].ADID.boxAd
  }), void this.myAppBox.load().then(function () {
    console.log("加载广告"), t.myAppBox.show();
  })["catch"](function (e) {
    console.log("[QQbox广告]广告错误", e), t.myAppBox.destroy(), t.myAppBox = null, r.CCTool.UI.ShowToast("加载超时啦待会再试试吧");
  })) : cc.log("平台不正确");
}, f.prototype.showNativeAd = function (e, t, o, n) {
  var i,
      a = this;
  void 0 === t && (t = s["default"].ADID.Native15Ad), s["default"].PF == l.GAMEPF.WX && d && (console.log("[showNativeAd]", t), d.createCustomAd && (this.myNativeAd ? this.myNativeAd.show().then(function () {
    console.log("[showthis.myNativeAd]onShow"), o && o();
  })["catch"](function (e) {
    console.log("原生广告展示出错2", e), (!e || e.errMsg.indexOf("shown") < 0) && (a.myNativeAd.destroy(), a.myNativeAd = null);
  }) : (i = cc.winSize.width, i = {
    left: 0,
    top: cc.winSize.height - 85,
    width: i,
    height: 85
  }, cc.v2(e.width / 2, e.height / 2), i.left = s["default"].cocosToWx(e).x, i.top = s["default"].cocosToWx(e).y, this.myNativeAd = d.createCustomAd({
    adUnitId: t,
    adIntervals: 30,
    style: {
      left: i.left,
      top: i.top
    }
  }), this.myNativeAd.onError(function (e) {
    console.log("原生广告创建出错", e), e.errCode && 1004 == e.errCode && (n && n(), a.myNativeAd.offError(), a.myNativeAd.destroy(), a.myNativeAd = null);
  }), this.myNativeAd.onClose(function () {
    a.myNativeAd.offClose(), a.myNativeAd.destroy(), a.myNativeAd = null, n && n();
  }), this.myNativeAd.onLoad(function () {
    console.log("[showNativeAd]onLoad"), a.myNativeAd.show().then(function () {
      o && o();
    });
  }), this.myNativeAd.onHide(function () {
    n && n();
  }))));
}, f.prototype.hideNativeAd = function () {
  this.myNativeAd && this.myNativeAd.hide();
}, f.prototype.showNativeAd55 = function (e, t, o, n) {
  var i = this;
  if (void 0 === t && (t = s["default"].ADID.Native55Ad), this.hideNativeAd(), console.log("[showNativeAd55]", t), !d) return console.log("环境不正确");

  function a(t) {
    s["default"].MainView.scheduleOnce(function () {
      return t ? void t.show().then(function () {
        o && o();
      })["catch"](function (e) {
        console.log("原生广告展示出错", e), t.destroy(), t = null;
      }) : console.log("[showNativeAd55]没有NativeAd55广告");
    }, .5);
  }

  if (s["default"].PF == l.GAMEPF.MIN_OPPO) return d.createGamePortalAd ? this.myNativeAd55 ? a(this.myNativeAd55) : (this.myNativeAd55 = d.createGamePortalAd({
    adUnitId: t
  }), void this.myNativeAd55.load().then(function () {
    console.log("load success互推盒子九宫格广告加载成功"), a(i.myNativeAd55);
  })["catch"](function (e) {
    console.log("load fail with:" + e.errCode + "," + e.errMsg);
  })) : console.log("缺少[createGamePortalAd]方法");

  if (s["default"].PF == l.GAMEPF.WX && d.createCustomAd) {
    if (this.myNativeAd55) return a(this.myNativeAd55);
    var r = cc.winSize.width,
        r = {
      left: 0,
      top: cc.winSize.height - 85,
      width: r,
      height: 85
    };
    s["default"].PF == l.GAMEPF.WX && (cc.v2(e.width / 2, e.height / 2), r.left = s["default"].cocosToWx(e).x, r.top = s["default"].cocosToWx(e).y), this.myNativeAd55 = d.createCustomAd({
      adUnitId: t,
      adIntervals: 30,
      style: {
        left: r.left,
        top: r.top
      }
    }), this.myNativeAd55.onError(function (e) {
      console.log("原生广告创建出错", e), e.errCode && 1004 == e.errCode && (n && n(), i.myNativeAd55.offError(), i.myNativeAd55.destroy(), i.myNativeAd55 = null);
    }), this.myNativeAd55.onClose(function () {
      i.myNativeAd55.offClose(), i.myNativeAd55.destroy(), i.myNativeAd55 = null, n && n();
    }), this.myNativeAd55.onLoad(function () {
      a(i.myNativeAd55);
    }), this.myNativeAd55.onHide(function () {
      n && n();
    });
  }
}, f.prototype.hideInsertAd = function () {
  this.myFullVideo && (this.myFullVideo.destroy(), this.myFullVideo = null);
}, f.prototype.sendEvent = function (e, t) {
  d && (d.uma && d.uma.trackEvent && d.uma.trackEvent(e, t), d.reportAnalytics && d.reportAnalytics(e, t || {}), s["default"].PF == l.GAMEPF.WX && p["default"].Instance.sentCustomEvent(e, e));
}, f.prototype.vibrate = function (e) {
  d && (0 == e ? d.vibrateShort({
    success: function success() {},
    fail: function fail() {}
  }) : d.vibrateLong({
    success: function success() {},
    fail: function fail() {}
  }));
}, f);

function f() {
  var e,
      i = a.call(this) || this;
  return i.defaultClass = ["", "()V"], i.showAd = ((e = {})[l.AD_TYPE.RewardVideo] = function (e) {
    var t = e.Success,
        o = e.Close,
        n = e.Error,
        e = e.LoadSuccess;
    i.onVideoSuccess = t, i.onVideoClose = o, i.onVideoError = n, i.onLoadSuccess = e, i.showVideoAD();
  }, e[l.AD_TYPE.FullScreenVideo] = function (e) {
    void 0 === e && (e = function e() {}), i.showFullVideoAD();
  }, e[l.AD_TYPE.Banner] = function () {
    i.showBanner();
  }, e[l.AD_TYPE.FullScreenImg] = function () {}, e[l.AD_TYPE.NativeVideo] = function () {}, e[l.AD_TYPE.NativeBanner] = function () {}, e[l.AD_TYPE.NativeBigImgBanner] = function () {}, e[l.AD_TYPE.Splash] = function () {}, e[l.AD_TYPE.NativeBox] = function (e, t, o, n) {
    i.showNativeAd(e, t, o, n);
  }, e[l.AD_TYPE.NativeBox_55] = function (e, t, o, n) {
    i.showNativeAd55(e, t, o, n);
  }, e[l.AD_TYPE.QQbox] = function () {
    i.showAppBox();
  }, e), i.init(), i;
}

o["default"] = t;

cc._RF.pop();