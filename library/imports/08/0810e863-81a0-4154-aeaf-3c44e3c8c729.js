"use strict";
cc._RF.push(module, '0810ehjgaBBVK6vPETjyMcp', 'wxTs');
// scripts/wxTs.js

"use strict";

var e = require;
var t = module;
var o = exports;
"use strict";

Object.defineProperty(o, "__esModule", {
  value: !0
}), o.AdsEventType = o.AdsEventName = void 0;
var n,
    a,
    r,
    t = (Object.defineProperty(i, "Instance", {
  get: function get() {
    return i._instance = !i._instance ? new i() : i._instance;
  },
  enumerable: !1,
  configurable: !0
}), i.prototype.init = function (e, t) {
  window.wx && (t && (this.bms_version = t), e && (this.bms_app_name = e), e && (this.app_name = e), this.initServerTime());
}, i.prototype.initServerTime = function () {
  var t = this;
  this.getServerTime(function (e) {
    parseInt(e) && (t.servertTime = parseInt(e), t.nativeTime = Math.round(new Date().getTime() / 1e3), 0 < t.eventPool.length && !t.firstEventTime && (t.firstEventTime = t.servertTime), setInterval(function () {
      t.servertTime += 1, t.nativeTime += 1;
    }, 1e3), setInterval(function () {
      t.clearEventPool();
    }, 1e4), t.check());
  });
}, i.prototype.login = function () {
  var n = this;
  window.wx && wx.login({
    fail: function fail() {
      return console.log("[wxTs]登陆失败:wx login fail");
    },
    success: function success(e) {
      if (!e.code) return console.log("[wxTs]获取code失败:code:" + e.errMsg);
      console.log("[wxTs][login][code]", e.code);
      e = {
        app_name: n.bms_app_name,
        code: e.code
      };
      n.request("POST", n.baseUrl + n.check_code, e, function (e) {
        var t = (e = "string" == typeof e ? JSON.parse(e) : e) && e.data.data;
        if (console.log("[wxTs][login][data]", e, t, t.openid), !t) return console.log("[wxTs]登陆失败:code:" + e.errMsg);
        n.sys_openId = t.openid, n.sys_openId && (n.logined = !0, wx.onShow(function () {
          n.getServerTime(function (e) {
            var t = Math.round(new Date().getTime() / 1e3),
                o = t - n.nativeTime;
            console.log("后台回来1", t, n.nativeTime, n.servertTime), n.nativeTime = t, parseInt(e) ? n.servertTime = parseInt(e) : n.servertTime += o, console.log("后台回来2", n.servertTime);
          });
        }), wx.onHide(function () {
          n.clearEventPool();
        }), n.sentData1(), n.sentData2(), setTimeout(function () {
          n.sentCustomEvent("active", "激活");
        }, 2e3));
      });
    }
  });
}, i.prototype.check = function () {
  var e,
      t,
      o = wx.getLaunchOptionsSync().query;

  for (e in o) {
    Object.prototype.hasOwnProperty.call(o, e) && (t = o[e], this.all_params[e] = t);
  }

  this.login();
}, i.prototype.sentData1 = function () {
  if (this.all_params.clue_token) {
    var e,
        t,
        o = {
      yw_track_channel: "tt_wx",
      yw_app_name: this.app_name,
      yw_channel: "weixin",
      yw_version: this.bms_version,
      yw_opi: this.sys_openId
    };

    for (e in this.all_params) {
      Object.prototype.hasOwnProperty.call(this.all_params, e) && (t = this.all_params[e], o[e] = t);
    }

    this.request("POST", this.baseUrl + this.app_track, o, function (e) {
      "string" == typeof e && (e = JSON.parse(e)), console.log("[wxTs][sentData1]", e);
    });
  }
}, i.prototype.sentData2 = function () {
  var e = this.getUserEventInfo(n.USER_INFO);
  this.sentEventHelper(e, n.USER_INFO);
}, i.prototype.sentAdsEvent = function (e, t) {
  t = this.getAdsEventInfo(e, t);
  this.sentEventHelper(t, n.ADS_EVENT);
}, i.prototype.sentCustomEvent = function (e, t) {
  t = this.getCustomEventInfo(e, t);
  this.sentEventHelper(t, 0 <= e.indexOf("active") ? n.USER_INFO : n.CUSTOM_EVENT);
}, i.prototype.getServerTime = function (o) {
  this.request("GET", this.baseUrl + this.server_Time, {}, function (e) {
    console.log("[wxTs][getServerTime]服务器时间接口返回值", e);
    var t = (e = "string" == typeof e ? JSON.parse(e) : e) && e.data.data;
    if (!t || e.data instanceof Array) return o && o(0);
    o && o(t.time);
  });
}, i.prototype.sentEventHelper = function (e, t) {
  if (this.logined) switch (t) {
    case n.USER_INFO:
      var o = {
        timestamp: this.servertTime,
        nonce: this.randomString(16),
        app_name: this.app_name,
        channel: this.channel,
        version: this.bms_version,
        uuid: this.sys_openId,
        m_data: JSON.stringify([e]),
        b_t: this.servertTime
      };
      o.sign = this.getSign(o), this.sentEvent(o);
      break;

    case n.ADS_EVENT:
    case n.CUSTOM_EVENT:
      0 == this.eventPool.length && (this.firstEventTime = this.servertTime), this.eventPool.push(e), 10 <= this.eventPool.length && this.clearEventPool();
  }
}, i.prototype.clearEventPool = function () {
  var e;
  this.eventPool.length <= 0 || ((e = {
    timestamp: this.servertTime,
    nonce: this.randomString(16),
    app_name: this.app_name,
    channel: this.channel,
    version: this.bms_version,
    uuid: this.sys_openId,
    m_data: JSON.stringify(this.eventPool),
    b_t: this.firstEventTime
  }).sign = this.getSign(e), this.eventPool = [], this.sentEvent(e));
}, i.prototype.sentEvent = function (e) {
  var t = this.randomString(16);
  this.request("POST", this.baseUrl + this.op_merge_report + "?trace_id=" + t, e, function (e) {
    "string" == typeof e && (e = JSON.parse(e)), console.log("[wxTs][sentEvent]", e);
  });
}, i.prototype.getUserEventInfo = function () {
  return {
    d_type: "u",
    platform: "weixin",
    t: Math.round(new Date().getTime() / 1e3).toString(),
    wxgamecid: this.all_params.wxgamecid,
    clue_token: this.all_params.clue_token
  };
}, i.prototype.getAdsEventInfo = function (e, t) {
  var o, n, i;

  switch (e) {
    case r.reward:
      switch (i = "激励视频", t) {
        case a.ad_click:
          o = "ad_click", n = "广告点击";
          break;

        case a.ad_impression:
          o = "ad_impression", n = "广告展示";
          break;

        case a.ad_request:
          o = "ad_request", n = "广告请求";
          break;

        case a.ad_fill:
          o = "ad_fill", n = "广告填充";
      }

      break;

    case r["native"]:
      switch (i = "原生广告", t) {
        case a.ad_click:
          o = "ad_click", n = "广告点击";
          break;

        case a.ad_impression:
          o = "ad_impression", n = "广告展示";
          break;

        case a.ad_request:
          o = "ad_request", n = "广告请求";
          break;

        case a.ad_fill:
          o = "ad_fill", n = "广告填充";
      }

      break;

    case r.insert:
      switch (i = "插屏", t) {
        case a.ad_click:
          o = "ad_click", n = "广告点击";
          break;

        case a.ad_impression:
          o = "ad_impression", n = "广告展示";
          break;

        case a.ad_request:
          o = "ad_request", n = "广告请求";
          break;

        case a.ad_fill:
          o = "ad_fill", n = "广告填充";
      }

  }

  return {
    d_type: "ad_ac",
    t: Math.round(new Date().getTime() / 1e3).toString(),
    act: o,
    wds: n,
    ad_t: i,
    tab1: "微信",
    wxgamecid: this.all_params.wxgamecid,
    clue_token: this.all_params.clue_token
  };
}, i.prototype.getCustomEventInfo = function (e, t) {
  return {
    d_type: "u_op",
    t: Math.round(new Date().getTime() / 1e3).toString(),
    act: e,
    wds: t,
    wxgamecid: this.all_params.wxgamecid,
    clue_token: this.all_params.clue_token
  };
}, i.prototype.randomString = function (e) {
  e = e || 32;

  for (var t = "123456789".length, o = "", n = 0; n < e; n++) {
    o += "123456789".charAt(Math.floor(Math.random() * t));
  }

  return o;
}, i.prototype.getSign = function (e) {
  console.log("getSign@reqData====", e);
  var t,
      o = [];

  for (t in e) {
    o.push(t);
  }

  o.sort();

  for (var n = "", i = 0; i < o.length; i++) {
    var a = e[o[i]];
    0 != i && (n += "&"), n += o[i] + "=" + a;
  }

  n += this.my, console.log("signStr======", n);
  var r = this.md5(n);
  return console.log("sign======", r), r;
}, i.prototype.md5 = function (e) {
  function s(e, t) {
    return e << t | e >>> 32 - t;
  }

  function c(e, t) {
    var o = 2147483648 & e,
        n = 2147483648 & t,
        i = (1073741823 & e) + (1073741823 & t);
    return (e = 1073741824 & e) & (t = 1073741824 & t) ? 2147483648 ^ i ^ o ^ n : e | t ? 1073741824 & i ? 3221225472 ^ i ^ o ^ n : 1073741824 ^ i ^ o ^ n : i ^ o ^ n;
  }

  function t(e, t, o, n, i, a, r) {
    return e = c(e, c(c(t & o | ~t & n, i), r)), c(s(e, a), t);
  }

  function o(e, t, o, n, i, a, r) {
    return e = c(e, c(c(t & n | o & ~n, i), r)), c(s(e, a), t);
  }

  function n(e, t, o, n, i, a, r) {
    return e = c(e, c(c(t ^ o ^ n, i), r)), c(s(e, a), t);
  }

  function i(e, t, o, n, i, a, r) {
    return e = c(e, c(c(o ^ (t | ~n), i), r)), c(s(e, a), t);
  }

  function a(e) {
    for (var t = "", o = "", n = 0; n <= 3; n++) {
      t += (o = "0" + (e >>> 8 * n & 255).toString(16)).substr(o.length - 2, 2);
    }

    return t;
  }

  var r,
      l,
      p,
      d,
      u,
      f,
      h,
      m,
      y,
      g = Array();

  for (g = function (e) {
    for (var t, o = e.length, n = o + 8, n = 16 * ((n - n % 64) / 64 + 1), i = Array(n - 1), a = 0, r = 0; r < o;) {
      a = r % 4 * 8, i[t = (r - r % 4) / 4] = i[t] | e.charCodeAt(r) << a, r++;
    }

    return i[t = (r - r % 4) / 4] = i[t] | 128 << (a = r % 4 * 8), i[n - 2] = o << 3, i[n - 1] = o >>> 29, i;
  }(e = function (e) {
    e = e.replace(/\r\n/g, "\n");

    for (var t = "", o = 0; o < e.length; o++) {
      var n = e.charCodeAt(o);
      n < 128 ? t += String.fromCharCode(n) : (127 < n && n < 2048 ? t += String.fromCharCode(n >> 6 | 192) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128)), t += String.fromCharCode(63 & n | 128));
    }

    return t;
  }(e)), f = 1732584193, h = 4023233417, m = 2562383102, y = 271733878, r = 0; r < g.length; r += 16) {
    f = t(l = f, p = h, d = m, u = y, g[r + 0], 7, 3614090360), y = t(y, f, h, m, g[r + 1], 12, 3905402710), m = t(m, y, f, h, g[r + 2], 17, 606105819), h = t(h, m, y, f, g[r + 3], 22, 3250441966), f = t(f, h, m, y, g[r + 4], 7, 4118548399), y = t(y, f, h, m, g[r + 5], 12, 1200080426), m = t(m, y, f, h, g[r + 6], 17, 2821735955), h = t(h, m, y, f, g[r + 7], 22, 4249261313), f = t(f, h, m, y, g[r + 8], 7, 1770035416), y = t(y, f, h, m, g[r + 9], 12, 2336552879), m = t(m, y, f, h, g[r + 10], 17, 4294925233), h = t(h, m, y, f, g[r + 11], 22, 2304563134), f = t(f, h, m, y, g[r + 12], 7, 1804603682), y = t(y, f, h, m, g[r + 13], 12, 4254626195), m = t(m, y, f, h, g[r + 14], 17, 2792965006), f = o(f, h = t(h, m, y, f, g[r + 15], 22, 1236535329), m, y, g[r + 1], 5, 4129170786), y = o(y, f, h, m, g[r + 6], 9, 3225465664), m = o(m, y, f, h, g[r + 11], 14, 643717713), h = o(h, m, y, f, g[r + 0], 20, 3921069994), f = o(f, h, m, y, g[r + 5], 5, 3593408605), y = o(y, f, h, m, g[r + 10], 9, 38016083), m = o(m, y, f, h, g[r + 15], 14, 3634488961), h = o(h, m, y, f, g[r + 4], 20, 3889429448), f = o(f, h, m, y, g[r + 9], 5, 568446438), y = o(y, f, h, m, g[r + 14], 9, 3275163606), m = o(m, y, f, h, g[r + 3], 14, 4107603335), h = o(h, m, y, f, g[r + 8], 20, 1163531501), f = o(f, h, m, y, g[r + 13], 5, 2850285829), y = o(y, f, h, m, g[r + 2], 9, 4243563512), m = o(m, y, f, h, g[r + 7], 14, 1735328473), f = n(f, h = o(h, m, y, f, g[r + 12], 20, 2368359562), m, y, g[r + 5], 4, 4294588738), y = n(y, f, h, m, g[r + 8], 11, 2272392833), m = n(m, y, f, h, g[r + 11], 16, 1839030562), h = n(h, m, y, f, g[r + 14], 23, 4259657740), f = n(f, h, m, y, g[r + 1], 4, 2763975236), y = n(y, f, h, m, g[r + 4], 11, 1272893353), m = n(m, y, f, h, g[r + 7], 16, 4139469664), h = n(h, m, y, f, g[r + 10], 23, 3200236656), f = n(f, h, m, y, g[r + 13], 4, 681279174), y = n(y, f, h, m, g[r + 0], 11, 3936430074), m = n(m, y, f, h, g[r + 3], 16, 3572445317), h = n(h, m, y, f, g[r + 6], 23, 76029189), f = n(f, h, m, y, g[r + 9], 4, 3654602809), y = n(y, f, h, m, g[r + 12], 11, 3873151461), m = n(m, y, f, h, g[r + 15], 16, 530742520), f = i(f, h = n(h, m, y, f, g[r + 2], 23, 3299628645), m, y, g[r + 0], 6, 4096336452), y = i(y, f, h, m, g[r + 7], 10, 1126891415), m = i(m, y, f, h, g[r + 14], 15, 2878612391), h = i(h, m, y, f, g[r + 5], 21, 4237533241), f = i(f, h, m, y, g[r + 12], 6, 1700485571), y = i(y, f, h, m, g[r + 3], 10, 2399980690), m = i(m, y, f, h, g[r + 10], 15, 4293915773), h = i(h, m, y, f, g[r + 1], 21, 2240044497), f = i(f, h, m, y, g[r + 8], 6, 1873313359), y = i(y, f, h, m, g[r + 15], 10, 4264355552), m = i(m, y, f, h, g[r + 6], 15, 2734768916), h = i(h, m, y, f, g[r + 13], 21, 1309151649), f = i(f, h, m, y, g[r + 4], 6, 4149444226), y = i(y, f, h, m, g[r + 11], 10, 3174756917), m = i(m, y, f, h, g[r + 2], 15, 718787259), h = i(h, m, y, f, g[r + 9], 21, 3951481745), f = c(f, l), h = c(h, p), m = c(m, d), y = c(y, u);
  }

  return (a(f) + a(h) + a(m) + a(y)).toLowerCase();
}, i.prototype.request = function (e, t, o, n) {
  console.log("[wxTs][request]", e, t, o), window.wx && wx.request({
    url: t,
    method: e,
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: o,
    responseType: "text",
    success: function success(e) {
      console.log("[wxTs][request][success]", e), n && n(e);
    },
    fail: function fail(e) {
      console.log("[wxTs][request][fail]", e), n && n(e);
    }
  });
}, i);

function i() {
  this.my = "A8VlJnyjXXdK3Csw6ZAN4KM9jFGHFk1G", this.baseUrl = "https://game.zuiqiangyingyu.net", this.server_Time = "/common/common/time", this.check_code = "//common/session/check_code", this.app_track = "/common/app-track/click", this.op_merge_report = "/common/user-op/op-merge-report", this.app_name = "tpmy_WX", this.bms_version = "1.0.0", this.bms_app_name = "tpmy_WX", this.channel = "weixin", this.all_params = {
    clue_token: "",
    wxgamecid: ""
  }, this.logined = !1, this.eventPool = [];
}

o["default"] = t, (t = n = n || {})[t.USER_INFO = 0] = "USER_INFO", t[t.ADS_EVENT = 1] = "ADS_EVENT", t[t.CUSTOM_EVENT = 2] = "CUSTOM_EVENT", (t = a = o.AdsEventName || (o.AdsEventName = {}))[t.ad_click = 0] = "ad_click", t[t.ad_request = 1] = "ad_request", t[t.ad_impression = 2] = "ad_impression", t[t.ad_fill = 3] = "ad_fill", (o = r = o.AdsEventType || (o.AdsEventType = {}))[o.reward = 0] = "reward", o[o["native"] = 1] = "native", o[o.insert = 2] = "insert";

cc._RF.pop();