
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BaseSdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a839XDuHdCbZZsinBNJbFC', 'BaseSdk');
// scripts/BaseSdk.js

"use strict";

var o = require;
var e = module;
var t = exports;
"use strict";

var i = void 0 && (void 0).__spreadArrays || function () {
  for (var e = 0, t = 0, o = arguments.length; t < o; t++) {
    e += arguments[t].length;
  }

  for (var n = Array(e), i = 0, t = 0; t < o; t++) {
    for (var a = arguments[t], r = 0, s = a.length; r < s; r++, i++) {
      n[i] = a[r];
    }
  }

  return n;
};

Object.defineProperty(t, "__esModule", {
  value: !0
}), t.BaseSdk = t.GAMEPF_DATA = t.GAMEPF = t.AD_TYPE = void 0;
var n,
    a = o("AppCommon");
(r = n = t.AD_TYPE || (t.AD_TYPE = {}))[r.NativeVideo = 2] = "NativeVideo", r[r.RewardVideo = 3] = "RewardVideo", r[r.FullScreenVideo = 4] = "FullScreenVideo", r[r.Banner = 5] = "Banner", r[r.NativeBanner = 6] = "NativeBanner", r[r.FullScreenImg = 8] = "FullScreenImg", r[r.NativeBigImgBanner = 9] = "NativeBigImgBanner", r[r.NativeBox = 20] = "NativeBox", r[r.NativeBox_55 = 21] = "NativeBox_55", r[r.QQbox = 22] = "QQbox", r[r.Splash = 99] = "Splash";
var r = (s.isADR = function () {
  return 0 <= a["default"].PF.indexOf(this.ADR);
}, s.isMINGAME = function () {
  return 0 <= [this.WX, this.TT, this.QQ, this.KS, this.MIN_OPPO, this.MIN_VIVO, this.MIN_OPPO_HAIWAI].indexOf(a["default"].PF);
}, s.sendJsbCall = function (e) {
  for (var t = [], o = 1; o < arguments.length; o++) {
    t[o - 1] = arguments[o];
  }

  var n = (s.defaultClass[a["default"].PF] || s.defaultClass[s.ADR])[0];
  return 1 < t.length ? s.jsbCall.apply(s, i([n, e], t)) : 1 == t.length ? s.jsbCall(n, e, t[0]) : s.jsbCall(n, e);
}, s.NOT = "--", s.WX = "WX", s.TT = "TT", s.IOS = "IOS", s.ADR = "ADR", s.QQ = "QQ", s.KS = "KS", s.WEB = "WEB", s.MIN_OPPO = "MIN_OPPO", s.MIN_OPPO_HAIWAI = "MIN_OPPO_HAIWAI", s.MIN_VIVO = "MIN_VIVO", s.ADR_OWN = "ADR_OWN", s.ADR_OPPO = "ADR_OPPO", s.ADR_XM = "ADR_XM", s.ADR_MMY = "ADR_MMY", s.ADR_TapTap = "ADR_TapTap", s.ADR_233 = "ADR_233", s.ADR_HYKB = "ADR_HYKB", s.ADR_HAIWAI = "ADR_HAIWAI", s.ADR_7723 = "ADR_7723", s.ADR_HLX = "ADR_HLX", s.defaultClass = ((e = {})[s.ADR] = ["org/cocos2dx/javascript/AppActivity", "()V"], e[s.ADR_XM] = ["com/wonder/xiaomi/XiaomiSdk", "()V"], e[s.IOS] = ["AppController", ""], e), s.jsbCall = window.jsb && jsb.reflection ? jsb.reflection.callStaticMethod : function (e, t) {
  for (var o = [], n = 2; n < arguments.length; n++) {
    o[n - 2] = arguments[n];
  }

  cc.log.apply(cc, i([e, t], o));
}, s);

function s() {}

t.GAMEPF = r;
c.GetClass = function () {
  var e = this.SDK_CLASS[a["default"].PF];
  if (!e) return null;
  var t = o(e);
  return new (t[e] || t["default"])();
}, c.PF_SET = ((e = {})[r.TT] = {
  v: "1.3.2",
  t: "tpmy_TT",
  l: "zh",
  ad: !0
}, e[r.WEB] = {
  v: "1.0.1",
  t: "tpmy_TEST",
  l: "zh",
  ad: !1
}, e[r.WX] = {
  v: "1.0.3",
  t: "tpmy_WX",
  l: "zh",
  ad: !0
}, e[r.IOS] = {
  v: "1.0.1",
  t: "tpmy_IOS",
  l: "zh",
  ad: !0
}, e[r.ADR_OWN] = {
  t: "tpmy_Android",
  v: "1.0.0.6fxrjh",
  l: "zh",
  ad: !0
}, e[r.ADR_HYKB] = {
  t: "tpmy_Android",
  v: "1.0.1.1hykb",
  l: "zh",
  ad: !0
}, e[r.ADR_MMY] = {
  t: "tpmy_Android",
  v: "1.0.2.3mmy",
  l: "zh",
  ad: !0
}, e[r.ADR_TapTap] = {
  t: "tpmy_Android",
  v: "1.0.1.2taptap",
  l: "zh",
  ad: !0
}, e[r.ADR_HLX] = {
  t: "tpmy_Android",
  v: "1.0.1.4hlx",
  l: "zh",
  ad: !0
}, e[r.ADR_7723] = {
  t: "tpmy_Android",
  v: "1.0.1.5qqes",
  l: "zh",
  ad: !0
}, e[r.ADR_XM] = {
  t: "tpmy_Android",
  v: "1.0.0.7xm",
  l: "zh",
  ad: !0
}, e), c.SDK_CLASS = ((e = {})[r.IOS] = "IOSSdk", e[r.ADR_OWN] = "ZiJia_AdrSdk", e[r.ADR_XM] = "Xiaomi_AdrSdk", e[r.WX] = "MinGameSdk", e[r.TT] = "MinGameSdk", e), e = c;

function c() {}

t.GAMEPF_DATA = e;
l.prototype.sendJsbCall = function (e) {
  for (var t = [], o = 1; o < arguments.length; o++) {
    t[o - 1] = arguments[o];
  }

  console.log("[sendJsbCall]" + e + JSON.stringify(t));
  var n = this.defaultClass;
  return 1 < t.length ? this.jsbCall.apply(this, i([n[0], e], t)) : 1 == t.length ? this.jsbCall(n[0], e, t[0]) : this.jsbCall(n[0], e);
}, l.prototype.hideNativeAd = function () {
  throw new Error("Method not implemented.");
}, l.prototype.hideInsertAd = function () {
  throw new Error("Method not implemented.");
}, l.prototype.onLoadSuccess = function () {
  throw new Error("Method not implemented.");
}, l.prototype.destroyBannerAd = function () {
  throw new Error("Method not implemented.");
}, l.prototype.hideBannerAd = function () {
  throw new Error("Method not implemented.");
}, l.prototype.onVideoSuccess = function () {}, l.prototype.onVideoClose = function () {}, l.prototype.onVideoError = function () {}, l.prototype.sendEvent = function () {
  throw new Error("Method not implemented.");
}, l.prototype.vibrate = function () {
  throw new Error("Method not implemented.");
}, l.prototype.ShowPrivacy = function () {
  throw new Error("Method not implemented.");
}, l.prototype.getNatId = function () {}, e = l;

function l() {
  var e;
  this.defaultClass = ["com/wonder/xiaomi/XiaomiSdk", "()V"], this.jsbCall = window.jsb && jsb.reflection ? jsb.reflection.callStaticMethod : function (e, t) {
    cc.log("[jsbCall]-" + t);
  }, this.isGetVideoReward = !1, this.showAd = ((e = {})[n.RewardVideo] = function () {}, e[n.FullScreenVideo] = function () {}, e[n.Banner] = function () {}, e[n.NativeVideo] = function () {}, e[n.NativeBanner] = function () {}, e[n.FullScreenImg] = function () {}, e[n.Splash] = function () {}, e), this.myPF = a["default"].PF, cc.log("[BaseSdk]constructor", this.myPF);
}

t.BaseSdk = e;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFzZVNkay5qcyJdLCJuYW1lcyI6WyJvIiwicmVxdWlyZSIsImUiLCJtb2R1bGUiLCJ0IiwiZXhwb3J0cyIsImkiLCJfX3NwcmVhZEFycmF5cyIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm4iLCJBcnJheSIsImEiLCJyIiwicyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJCYXNlU2RrIiwiR0FNRVBGX0RBVEEiLCJHQU1FUEYiLCJBRF9UWVBFIiwiTmF0aXZlVmlkZW8iLCJSZXdhcmRWaWRlbyIsIkZ1bGxTY3JlZW5WaWRlbyIsIkJhbm5lciIsIk5hdGl2ZUJhbm5lciIsIkZ1bGxTY3JlZW5JbWciLCJOYXRpdmVCaWdJbWdCYW5uZXIiLCJOYXRpdmVCb3giLCJOYXRpdmVCb3hfNTUiLCJRUWJveCIsIlNwbGFzaCIsImlzQURSIiwiUEYiLCJpbmRleE9mIiwiQURSIiwiaXNNSU5HQU1FIiwiV1giLCJUVCIsIlFRIiwiS1MiLCJNSU5fT1BQTyIsIk1JTl9WSVZPIiwiTUlOX09QUE9fSEFJV0FJIiwic2VuZEpzYkNhbGwiLCJkZWZhdWx0Q2xhc3MiLCJqc2JDYWxsIiwiYXBwbHkiLCJOT1QiLCJJT1MiLCJXRUIiLCJBRFJfT1dOIiwiQURSX09QUE8iLCJBRFJfWE0iLCJBRFJfTU1ZIiwiQURSX1RhcFRhcCIsIkFEUl8yMzMiLCJBRFJfSFlLQiIsIkFEUl9IQUlXQUkiLCJBRFJfNzcyMyIsIkFEUl9ITFgiLCJ3aW5kb3ciLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsImNjIiwibG9nIiwiYyIsIkdldENsYXNzIiwiU0RLX0NMQVNTIiwiUEZfU0VUIiwidiIsImwiLCJhZCIsInByb3RvdHlwZSIsImNvbnNvbGUiLCJKU09OIiwic3RyaW5naWZ5IiwiaGlkZU5hdGl2ZUFkIiwiRXJyb3IiLCJoaWRlSW5zZXJ0QWQiLCJvbkxvYWRTdWNjZXNzIiwiZGVzdHJveUJhbm5lckFkIiwiaGlkZUJhbm5lckFkIiwib25WaWRlb1N1Y2Nlc3MiLCJvblZpZGVvQ2xvc2UiLCJvblZpZGVvRXJyb3IiLCJzZW5kRXZlbnQiLCJ2aWJyYXRlIiwiU2hvd1ByaXZhY3kiLCJnZXROYXRJZCIsImlzR2V0VmlkZW9SZXdhcmQiLCJzaG93QWQiLCJteVBGIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBQ0MsT0FBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsTUFBTjtBQUNBLElBQUlDLENBQUMsR0FBQ0MsT0FBTjtBQUNBOztBQUFhLElBQUlDLENBQUMsR0FBQyxVQUFNLFNBQUtDLGNBQVgsSUFBMkIsWUFBVTtBQUFDLE9BQUksSUFBSUwsQ0FBQyxHQUFDLENBQU4sRUFBUUUsQ0FBQyxHQUFDLENBQVYsRUFBWUosQ0FBQyxHQUFDUSxTQUFTLENBQUNDLE1BQTVCLEVBQW1DTCxDQUFDLEdBQUNKLENBQXJDLEVBQXVDSSxDQUFDLEVBQXhDO0FBQTJDRixJQUFBQSxDQUFDLElBQUVNLFNBQVMsQ0FBQ0osQ0FBRCxDQUFULENBQWFLLE1BQWhCO0FBQTNDOztBQUFrRSxPQUFJLElBQUlDLENBQUMsR0FBQ0MsS0FBSyxDQUFDVCxDQUFELENBQVgsRUFBZUksQ0FBQyxHQUFDLENBQWpCLEVBQW1CRixDQUFDLEdBQUMsQ0FBekIsRUFBMkJBLENBQUMsR0FBQ0osQ0FBN0IsRUFBK0JJLENBQUMsRUFBaEM7QUFBbUMsU0FBSSxJQUFJUSxDQUFDLEdBQUNKLFNBQVMsQ0FBQ0osQ0FBRCxDQUFmLEVBQW1CUyxDQUFDLEdBQUMsQ0FBckIsRUFBdUJDLENBQUMsR0FBQ0YsQ0FBQyxDQUFDSCxNQUEvQixFQUFzQ0ksQ0FBQyxHQUFDQyxDQUF4QyxFQUEwQ0QsQ0FBQyxJQUFHUCxDQUFDLEVBQS9DO0FBQWtESSxNQUFBQSxDQUFDLENBQUNKLENBQUQsQ0FBRCxHQUFLTSxDQUFDLENBQUNDLENBQUQsQ0FBTjtBQUFsRDtBQUFuQzs7QUFBK0YsU0FBT0gsQ0FBUDtBQUFTLENBQXROOztBQUF1Tkss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Y2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvPXJlcXVpcmU7XG52YXIgZT1tb2R1bGU7XG52YXIgdD1leHBvcnRzO1xuXCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dGhpcyYmdGhpcy5fX3NwcmVhZEFycmF5c3x8ZnVuY3Rpb24oKXtmb3IodmFyIGU9MCx0PTAsbz1hcmd1bWVudHMubGVuZ3RoO3Q8bzt0KyspZSs9YXJndW1lbnRzW3RdLmxlbmd0aDtmb3IodmFyIG49QXJyYXkoZSksaT0wLHQ9MDt0PG87dCsrKWZvcih2YXIgYT1hcmd1bWVudHNbdF0scj0wLHM9YS5sZW5ndGg7cjxzO3IrKyxpKyspbltpXT1hW3JdO3JldHVybiBufTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkJhc2VTZGs9dC5HQU1FUEZfREFUQT10LkdBTUVQRj10LkFEX1RZUEU9dm9pZCAwO3ZhciBuLGE9byhcIkFwcENvbW1vblwiKTsocj1uPXQuQURfVFlQRXx8KHQuQURfVFlQRT17fSkpW3IuTmF0aXZlVmlkZW89Ml09XCJOYXRpdmVWaWRlb1wiLHJbci5SZXdhcmRWaWRlbz0zXT1cIlJld2FyZFZpZGVvXCIscltyLkZ1bGxTY3JlZW5WaWRlbz00XT1cIkZ1bGxTY3JlZW5WaWRlb1wiLHJbci5CYW5uZXI9NV09XCJCYW5uZXJcIixyW3IuTmF0aXZlQmFubmVyPTZdPVwiTmF0aXZlQmFubmVyXCIscltyLkZ1bGxTY3JlZW5JbWc9OF09XCJGdWxsU2NyZWVuSW1nXCIscltyLk5hdGl2ZUJpZ0ltZ0Jhbm5lcj05XT1cIk5hdGl2ZUJpZ0ltZ0Jhbm5lclwiLHJbci5OYXRpdmVCb3g9MjBdPVwiTmF0aXZlQm94XCIscltyLk5hdGl2ZUJveF81NT0yMV09XCJOYXRpdmVCb3hfNTVcIixyW3IuUVFib3g9MjJdPVwiUVFib3hcIixyW3IuU3BsYXNoPTk5XT1cIlNwbGFzaFwiO3ZhciByPShzLmlzQURSPWZ1bmN0aW9uKCl7cmV0dXJuIDA8PWEuZGVmYXVsdC5QRi5pbmRleE9mKHRoaXMuQURSKX0scy5pc01JTkdBTUU9ZnVuY3Rpb24oKXtyZXR1cm4gMDw9W3RoaXMuV1gsdGhpcy5UVCx0aGlzLlFRLHRoaXMuS1MsdGhpcy5NSU5fT1BQTyx0aGlzLk1JTl9WSVZPLHRoaXMuTUlOX09QUE9fSEFJV0FJXS5pbmRleE9mKGEuZGVmYXVsdC5QRil9LHMuc2VuZEpzYkNhbGw9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLG89MTtvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXRbby0xXT1hcmd1bWVudHNbb107dmFyIG49KHMuZGVmYXVsdENsYXNzW2EuZGVmYXVsdC5QRl18fHMuZGVmYXVsdENsYXNzW3MuQURSXSlbMF07cmV0dXJuIDE8dC5sZW5ndGg/cy5qc2JDYWxsLmFwcGx5KHMsaShbbixlXSx0KSk6MT09dC5sZW5ndGg/cy5qc2JDYWxsKG4sZSx0WzBdKTpzLmpzYkNhbGwobixlKX0scy5OT1Q9XCItLVwiLHMuV1g9XCJXWFwiLHMuVFQ9XCJUVFwiLHMuSU9TPVwiSU9TXCIscy5BRFI9XCJBRFJcIixzLlFRPVwiUVFcIixzLktTPVwiS1NcIixzLldFQj1cIldFQlwiLHMuTUlOX09QUE89XCJNSU5fT1BQT1wiLHMuTUlOX09QUE9fSEFJV0FJPVwiTUlOX09QUE9fSEFJV0FJXCIscy5NSU5fVklWTz1cIk1JTl9WSVZPXCIscy5BRFJfT1dOPVwiQURSX09XTlwiLHMuQURSX09QUE89XCJBRFJfT1BQT1wiLHMuQURSX1hNPVwiQURSX1hNXCIscy5BRFJfTU1ZPVwiQURSX01NWVwiLHMuQURSX1RhcFRhcD1cIkFEUl9UYXBUYXBcIixzLkFEUl8yMzM9XCJBRFJfMjMzXCIscy5BRFJfSFlLQj1cIkFEUl9IWUtCXCIscy5BRFJfSEFJV0FJPVwiQURSX0hBSVdBSVwiLHMuQURSXzc3MjM9XCJBRFJfNzcyM1wiLHMuQURSX0hMWD1cIkFEUl9ITFhcIixzLmRlZmF1bHRDbGFzcz0oKGU9e30pW3MuQURSXT1bXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLFwiKClWXCJdLGVbcy5BRFJfWE1dPVtcImNvbS93b25kZXIveGlhb21pL1hpYW9taVNka1wiLFwiKClWXCJdLGVbcy5JT1NdPVtcIkFwcENvbnRyb2xsZXJcIixcIlwiXSxlKSxzLmpzYkNhbGw9d2luZG93LmpzYiYmanNiLnJlZmxlY3Rpb24/anNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZDpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbz1bXSxuPTI7bjxhcmd1bWVudHMubGVuZ3RoO24rKylvW24tMl09YXJndW1lbnRzW25dO2NjLmxvZy5hcHBseShjYyxpKFtlLHRdLG8pKX0scyk7ZnVuY3Rpb24gcygpe310LkdBTUVQRj1yO2MuR2V0Q2xhc3M9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLlNES19DTEFTU1thLmRlZmF1bHQuUEZdO2lmKCFlKXJldHVybiBudWxsO3ZhciB0PW8oZSk7cmV0dXJuIG5ldyh0W2VdfHx0LmRlZmF1bHQpfSxjLlBGX1NFVD0oKGU9e30pW3IuVFRdPXt2OlwiMS4zLjJcIix0OlwidHBteV9UVFwiLGw6XCJ6aFwiLGFkOiEwfSxlW3IuV0VCXT17djpcIjEuMC4xXCIsdDpcInRwbXlfVEVTVFwiLGw6XCJ6aFwiLGFkOiExfSxlW3IuV1hdPXt2OlwiMS4wLjNcIix0OlwidHBteV9XWFwiLGw6XCJ6aFwiLGFkOiEwfSxlW3IuSU9TXT17djpcIjEuMC4xXCIsdDpcInRwbXlfSU9TXCIsbDpcInpoXCIsYWQ6ITB9LGVbci5BRFJfT1dOXT17dDpcInRwbXlfQW5kcm9pZFwiLHY6XCIxLjAuMC42ZnhyamhcIixsOlwiemhcIixhZDohMH0sZVtyLkFEUl9IWUtCXT17dDpcInRwbXlfQW5kcm9pZFwiLHY6XCIxLjAuMS4xaHlrYlwiLGw6XCJ6aFwiLGFkOiEwfSxlW3IuQURSX01NWV09e3Q6XCJ0cG15X0FuZHJvaWRcIix2OlwiMS4wLjIuM21teVwiLGw6XCJ6aFwiLGFkOiEwfSxlW3IuQURSX1RhcFRhcF09e3Q6XCJ0cG15X0FuZHJvaWRcIix2OlwiMS4wLjEuMnRhcHRhcFwiLGw6XCJ6aFwiLGFkOiEwfSxlW3IuQURSX0hMWF09e3Q6XCJ0cG15X0FuZHJvaWRcIix2OlwiMS4wLjEuNGhseFwiLGw6XCJ6aFwiLGFkOiEwfSxlW3IuQURSXzc3MjNdPXt0OlwidHBteV9BbmRyb2lkXCIsdjpcIjEuMC4xLjVxcWVzXCIsbDpcInpoXCIsYWQ6ITB9LGVbci5BRFJfWE1dPXt0OlwidHBteV9BbmRyb2lkXCIsdjpcIjEuMC4wLjd4bVwiLGw6XCJ6aFwiLGFkOiEwfSxlKSxjLlNES19DTEFTUz0oKGU9e30pW3IuSU9TXT1cIklPU1Nka1wiLGVbci5BRFJfT1dOXT1cIlppSmlhX0FkclNka1wiLGVbci5BRFJfWE1dPVwiWGlhb21pX0FkclNka1wiLGVbci5XWF09XCJNaW5HYW1lU2RrXCIsZVtyLlRUXT1cIk1pbkdhbWVTZGtcIixlKSxlPWM7ZnVuY3Rpb24gYygpe310LkdBTUVQRl9EQVRBPWU7bC5wcm90b3R5cGUuc2VuZEpzYkNhbGw9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLG89MTtvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXRbby0xXT1hcmd1bWVudHNbb107Y29uc29sZS5sb2coXCJbc2VuZEpzYkNhbGxdXCIrZStKU09OLnN0cmluZ2lmeSh0KSk7dmFyIG49dGhpcy5kZWZhdWx0Q2xhc3M7cmV0dXJuIDE8dC5sZW5ndGg/dGhpcy5qc2JDYWxsLmFwcGx5KHRoaXMsaShbblswXSxlXSx0KSk6MT09dC5sZW5ndGg/dGhpcy5qc2JDYWxsKG5bMF0sZSx0WzBdKTp0aGlzLmpzYkNhbGwoblswXSxlKX0sbC5wcm90b3R5cGUuaGlkZU5hdGl2ZUFkPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIil9LGwucHJvdG90eXBlLmhpZGVJbnNlcnRBZD1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpfSxsLnByb3RvdHlwZS5vbkxvYWRTdWNjZXNzPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIil9LGwucHJvdG90eXBlLmRlc3Ryb3lCYW5uZXJBZD1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpfSxsLnByb3RvdHlwZS5oaWRlQmFubmVyQWQ9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKX0sbC5wcm90b3R5cGUub25WaWRlb1N1Y2Nlc3M9ZnVuY3Rpb24oKXt9LGwucHJvdG90eXBlLm9uVmlkZW9DbG9zZT1mdW5jdGlvbigpe30sbC5wcm90b3R5cGUub25WaWRlb0Vycm9yPWZ1bmN0aW9uKCl7fSxsLnByb3RvdHlwZS5zZW5kRXZlbnQ9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKX0sbC5wcm90b3R5cGUudmlicmF0ZT1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpfSxsLnByb3RvdHlwZS5TaG93UHJpdmFjeT1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpfSxsLnByb3RvdHlwZS5nZXROYXRJZD1mdW5jdGlvbigpe30sZT1sO2Z1bmN0aW9uIGwoKXt2YXIgZTt0aGlzLmRlZmF1bHRDbGFzcz1bXCJjb20vd29uZGVyL3hpYW9taS9YaWFvbWlTZGtcIixcIigpVlwiXSx0aGlzLmpzYkNhbGw9d2luZG93LmpzYiYmanNiLnJlZmxlY3Rpb24/anNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZDpmdW5jdGlvbihlLHQpe2NjLmxvZyhcIltqc2JDYWxsXS1cIit0KX0sdGhpcy5pc0dldFZpZGVvUmV3YXJkPSExLHRoaXMuc2hvd0FkPSgoZT17fSlbbi5SZXdhcmRWaWRlb109ZnVuY3Rpb24oKXt9LGVbbi5GdWxsU2NyZWVuVmlkZW9dPWZ1bmN0aW9uKCl7fSxlW24uQmFubmVyXT1mdW5jdGlvbigpe30sZVtuLk5hdGl2ZVZpZGVvXT1mdW5jdGlvbigpe30sZVtuLk5hdGl2ZUJhbm5lcl09ZnVuY3Rpb24oKXt9LGVbbi5GdWxsU2NyZWVuSW1nXT1mdW5jdGlvbigpe30sZVtuLlNwbGFzaF09ZnVuY3Rpb24oKXt9LGUpLHRoaXMubXlQRj1hLmRlZmF1bHQuUEYsY2MubG9nKFwiW0Jhc2VTZGtdY29uc3RydWN0b3JcIix0aGlzLm15UEYpfXQuQmFzZVNkaz1lIl19