"use strict";
cc._RF.push(module, '1910c6XvwNGf53NQkS2dojN', 'TTGame');
// scripts/TTGame.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
});
var i = e("AppCommon"),
    n = e("CCTool"),
    a = e("BaseSdk"),
    r = window.wx,
    s = window.wx,
    e = (c.init = function () {
  var e,
      t,
      o,
      n = this;
  if (console.log("[TTGame][init]", i["default"].ADID), !(s = window.ks ? window.ks : s)) return console.log("缺少tt方法");
  s.getGameRecorderManager || s.getGameRecorder ? (console.log("录屏工具初始化"), this.recorder = s.getGameRecorderManager ? s.getGameRecorderManager() : s.getGameRecorder(), this.RTime = 0, e = function e() {
    console.log("录屏开始"), n.isROpen = !0, i["default"].data.ttRecorderTime = i["default"].gettimestamp();
  }, t = function t(_t) {
    n.isROpen = !1;

    function o(e) {
      i["default"].data.ShareVideoUrl = e, console.log("录屏结束", i["default"].data.ShareVideoUrl), n.RTime = i["default"].gettimestamp() - i["default"].data.ttRecorderTime, n.shopCallBack && n.shopCallBack(), i["default"].data.gameIsOpen && !i["default"].data.ShareVideoUrl && n.recorderStart();
    }

    n.recorder.clipVideo && n.recorder.clipVideo({
      path: _t.videoPath,
      timeRange: [15, 0],
      success: function success(e) {
        console.log(e.videoPath), o(e.videoPath);
      },
      fail: function fail(e) {
        console.error("剪辑失败", e), o(_t.videoPath);
      }
    });
  }, o = function o(e) {
    console.log("录屏错误", e), i["default"].data.gameIsOpen && n.recorderStart();
  }, i["default"].PF == a.GAMEPF.TT ? (this.recorder.onStart(function () {
    e();
  }), this.recorder.onStop(function (e) {
    t(e);
  }), this.recorder.onError(function (e) {
    o(e);
  }), this.recorder.onInterruptionBegin(function (e) {
    console.log("监听录屏中断开始", e), i["default"].data.gameIsOpen && n.recorderStart();
  }), this.recorder.onInterruptionEnd(function (e) {
    console.log("监听录屏中断结束", e);
  })) : i["default"].PF == a.GAMEPF.KS && (this.recorder.on("start", function () {
    e();
  }), this.recorder.on("error", function (e) {
    o(e);
  }), this.recorder.on("stop", function (e) {
    n.isROpen = !1, e && (i["default"].data.ShareVideoUrl = e.videoID), n.RTime = i["default"].gettimestamp() - i["default"].data.ttRecorderTime, n.shopCallBack && n.shopCallBack(), e && e.videoID ? console.log("录屏停止，录制成功videoID is " + e.videoID) : console.log("录屏停止，录制失败");
  }), this.recorder.on("pause", function () {
    console.log("暂停录制");
  }), this.recorder.on("resume", function () {
    console.log("继续录制");
  }), this.recorder.on("abort", function () {
    console.log("废弃已录制视频");
  }))) : console.log("缺少tt.getGameRecorderManager||getGameRecorder方法"), r.createRewardedVideoAd && (console.log("加载激励视频", i["default"].ADID.minVideo), window.videoAd = r.createRewardedVideoAd({
    adUnitId: i["default"].ADID.minVideo
  }), window.videoAd.load().then(function () {
    console.log("加载视频成功"), window.videoAd.onClose(function (e) {
      console.log("关闭视频", e), e && e.isEnded || void 0 === e ? (console.log("正常播放结束"), window.onVideoSuccess && window.onVideoSuccess()) : (console.log("播放中途退出"), window.onShowClose && window.onShowClose(!1));
    });
  })["catch"](function (e) {
    console.log("1视频加载出错了"), console.log(e), window.onLoadError && window.onLoadError(!1);
  }), window.videoAd.onError(function (e) {
    console.log(e, "2视频加载出错了"), window.onLoadError && window.onLoadError(!1);
  })), s.onShareAppMessage && s.onShareAppMessage(function (e) {
    return e && "video" == e.channel ? {
      channel: "video",
      title: "躺平摸鱼",
      imageUrl: "",
      extra: {
        withVideoId: !0
      },
      success: function success(e) {
        console.warn("分享成功", e);
      },
      fail: function fail(e) {
        console.warn("分享失败", e);
      }
    } : {
      title: "躺平摸鱼",
      query: "k1=v1&k2=v2",
      templateId: "197qw8tn9q78m9qe7o",
      success: function success() {
        console.log("分享成功");
      },
      fail: function fail(e) {
        console.log("分享失败", e);
      }
    };
  });
}, c.recorderStart = function () {
  return console.log("[recorderStart]"), this.isROpen ? console.log("已开启录屏") : s ? this.recorder ? void (this.recorder && this.recorder.start({
    duration: 300
  })) : console.log("缺少recorder") : console.log("非tt环境");
}, c.recorderStop = function (e) {
  return console.log("[recorderStop]"), s ? this.recorder ? i["default"].gettimestamp() - i["default"].data.ttRecorderTime < 3 ? void console.log("录屏时间过短 , 不能停止") : (this.recorder && this.recorder.stop(), this.shopCallBack = e, !0) : console.log("缺少recorder") : console.log("非tt环境");
}, c.KS_ShareVideoUrl = function (t) {
  if (!this.recorder) return console.log("[KS_ShareVideoUrl]缺少[recorder]");
  this.recorder.publishVideo({
    video: i["default"].data.ShareVideoUrl,
    callback: function callback(e) {
      null == e ? (console.log("分享录屏成功"), t.onShareSuccess && t.onShareSuccess()) : console.log("分享录屏失败: " + JSON.stringify(e));
    }
  });
}, c.ShareVideoUrl = function (e, t) {
  return void 0 === t && (t = "video"), console.log("ShareVideoUrl时间", this.RTime, i["default"].data.ShareVideoUrl), "video" == t && !i["default"].data.ShareVideoUrl && this.RTime < 3 ? (console.log("录屏时间过短，无法分享"), void n.CCTool.UI.ShowToast("录屏时间过短，无法分享")) : i["default"].PF == a.GAMEPF.KS ? this.KS_ShareVideoUrl(e) : void (s && s.shareAppMessage ? s.shareAppMessage({
    title: i["default"].GetArrTarge(["躺平摸鱼！"]),
    desc: "这游戏太难了，没人能超过300分！",
    channel: t,
    extra: {
      videoPath: i["default"].data.ShareVideoUrl,
      videoTopics: ["上班摸鱼之王"]
    },
    success: function success() {
      console.log("分享成功"), "video" == t && n.CCTool.UI.ShowToast("视频分享成功"), e.onShareSuccess && e.onShareSuccess();
    },
    fail: function fail(e) {
      console.log("分享失败", e), 0 <= e.errMsg.indexOf("too short") && "video" == t && n.CCTool.UI.ShowToast({
        msg: "录屏时间过短，无法分享"
      });
    }
  }) : e.onShareSuccess && e.onShareSuccess());
}, c.GetScreenshot = function (e, t) {
  if (i["default"].PF != a.GAMEPF.TT) return t();
  this.recorderStop(), this.texScreenshot || n.CCTool.UI.GetScreenshot(), this.texScreenshot = null, i["default"].MainView.scheduleOnce(function () {
    return i["default"].data.ShareVideoUrl ? void cc.resources.load("prefab/pop/pop_ScreenshotShare", cc.Prefab, function (e, t) {
      cc.instantiate(t);
    }) : t();
  }, .5);
}, c.listeners = {}, c.isROpen = !1, c);

function c() {}

o["default"] = e;

cc._RF.pop();